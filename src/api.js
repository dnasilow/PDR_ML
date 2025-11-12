// API utility functions for fetching CMS data

// Services API
export const getServices = async () => {
  try {
    const response = await import('../data/services.json')
    return response.services
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export const getServiceById = async (id) => {
  try {
    const services = await getServices()
    return services.find(service => service.id === id) || null
  } catch (error) {
    console.error('Error fetching service:', error)
    return null
  }
}

export const getFeaturedServices = async () => {
  try {
    const services = await getServices()
    return services.filter(service => service.featured)
  } catch (error) {
    console.error('Error fetching featured services:', error)
    return []
  }
}

// Team API
export const getTeamMembers = async () => {
  try {
    const response = await import('../data/team.json')
    return response.teamMembers.sort((a, b) => a.order - b.order)
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export const getTeamMemberById = async (id) => {
  try {
    const teamMembers = await getTeamMembers()
    return teamMembers.find(member => member.id === id) || null
  } catch (error) {
    console.error('Error fetching team member:', error)
    return null
  }
}

export const getFeaturedTeamMembers = async () => {
  try {
    const teamMembers = await getTeamMembers()
    return teamMembers.filter(member => member.featured)
  } catch (error) {
    console.error('Error fetching featured team members:', error)
    return []
  }
}

// Case Studies API
export const getCaseStudies = async () => {
  try {
    const response = await import('../data/caseStudies.json')
    return response.caseStudies.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return []
  }
}

export const getCaseStudyById = async (id) => {
  try {
    const caseStudies = await getCaseStudies()
    return caseStudies.find(study => study.id === id) || null
  } catch (error) {
    console.error('Error fetching case study:', error)
    return null
  }
}

export const getFeaturedCaseStudies = async () => {
  try {
    const caseStudies = await getCaseStudies()
    return caseStudies.filter(study => study.featured)
  } catch (error) {
    console.error('Error fetching featured case studies:', error)
    return []
  }
}

// Resources API
export const getResources = async () => {
  try {
    const response = await import('../data/resources.json')
    return response.resources.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
  } catch (error) {
    console.error('Error fetching resources:', error)
    return []
  }
}

export const getResourceById = async (id) => {
  try {
    const resources = await getResources()
    return resources.find(resource => resource.id === id) || null
  } catch (error) {
    console.error('Error fetching resource:', error)
    return null
  }
}

export const getFeaturedResources = async () => {
  try {
    const resources = await getResources()
    return resources.filter(resource => resource.featured)
  } catch (error) {
    console.error('Error fetching featured resources:', error)
    return []
  }
}

export const getWebinars = async () => {
  try {
    const response = await import('../data/resources.json')
    return response.webinars.sort((a, b) => new Date(a.date) - new Date(b.date))
  } catch (error) {
    console.error('Error fetching webinars:', error)
    return []
  }
}

export const getUpcomingWebinars = async () => {
  try {
    const webinars = await getWebinars()
    const now = new Date()
    return webinars.filter(webinar => new Date(webinar.date) > now)
  } catch (error) {
    console.error('Error fetching upcoming webinars:', error)
    return []
  }
}

// Search and Filter Functions
export const searchResources = async (query, category = null) => {
  try {
    const resources = await getResources()
    let filtered = resources

    if (category) {
      filtered = filtered.filter(resource => 
        resource.category.toLowerCase() === category.toLowerCase()
      )
    }

    if (query) {
      const searchTerm = query.toLowerCase()
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm) ||
        resource.description.toLowerCase().includes(searchTerm) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      )
    }

    return filtered
  } catch (error) {
    console.error('Error searching resources:', error)
    return []
  }
}

export const getResourcesByCategory = async (category) => {
  try {
    const resources = await getResources()
    return resources.filter(resource => 
      resource.category.toLowerCase() === category.toLowerCase()
    )
  } catch (error) {
    console.error('Error fetching resources by category:', error)
    return []
  }
}

export const getCaseStudiesByIndustry = async (industry) => {
  try {
    const caseStudies = await getCaseStudies()
    return caseStudies.filter(study => 
      study.industry.toLowerCase() === industry.toLowerCase()
    )
  } catch (error) {
    console.error('Error fetching case studies by industry:', error)
    return []
  }
}

// Statistics and Analytics
export const getResourceStats = async () => {
  try {
    const resources = await getResources()
    const totalDownloads = resources.reduce((sum, resource) => sum + resource.downloadCount, 0)
    const categories = [...new Set(resources.map(resource => resource.category))]
    const totalResources = resources.length

    return {
      totalResources,
      totalDownloads,
      categories: categories.length,
      averageDownloads: Math.round(totalDownloads / totalResources)
    }
  } catch (error) {
    console.error('Error fetching resource stats:', error)
    return {
      totalResources: 0,
      totalDownloads: 0,
      categories: 0,
      averageDownloads: 0
    }
  }
}

export const getCompanyStats = async () => {
  try {
    const [caseStudies, teamMembers, resources] = await Promise.all([
      getCaseStudies(),
      getTeamMembers(),
      getResources()
    ])

    const totalProjects = caseStudies.length
    const totalTeamMembers = teamMembers.length
    const totalResources = resources.length
    const totalExperience = teamMembers.reduce((sum, member) => {
      const years = parseInt(member.experience.match(/\d+/)?.[0] || 0)
      return sum + years
    }, 0)

    return {
      totalProjects,
      totalTeamMembers,
      totalResources,
      totalExperience,
      averageExperience: Math.round(totalExperience / totalTeamMembers)
    }
  } catch (error) {
    console.error('Error fetching company stats:', error)
    return {
      totalProjects: 0,
      totalTeamMembers: 0,
      totalResources: 0,
      totalExperience: 0,
      averageExperience: 0
    }
  }
}

