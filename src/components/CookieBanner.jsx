import { useState, useEffect } from 'react'
import { Button } from './ui/button.jsx'
import { X, Settings, Shield } from 'lucide-react'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setShowBanner(false)
    setShowSettings(false)
  }

  const handlePreferenceChange = (type) => {
    if (type === 'necessary') return // Necessary cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
            {/* Content */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Cookie Consent</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, provide personalised content, 
                and analyse our traffic. By clicking "Accept All", you consent to our use of cookies. 
                You can manage your preferences or learn more in our{' '}
                <a href="#" className="text-primary hover:underline">Cookie Policy</a>.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowSettings(true)}
                className="text-sm"
              >
                <Settings className="mr-2 h-4 w-4" />
                Manage Preferences
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleRejectAll}
                className="text-sm"
              >
                Reject All
              </Button>
              <Button 
                size="sm"
                onClick={handleAcceptAll}
                className="bg-primary hover:bg-primary/90 text-sm"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">Cookie Preferences</h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowSettings(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <p className="text-muted-foreground">
                We use different types of cookies to optimise your experience on our website. 
                You can choose which categories you'd like to allow. Please note that blocking 
                some types of cookies may impact your experience.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Necessary Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Essential for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="h-4 w-4 text-primary"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    These cookies are essential for the website to function and cannot be switched off. 
                    They include session management, security, and accessibility features.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Analytics Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handlePreferenceChange('analytics')}
                        className="h-4 w-4 text-primary"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    These cookies collect information about how you use our website, such as which 
                    pages you visit most often. This data helps us improve our website performance.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Marketing Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Used to deliver personalised advertisements and track campaign effectiveness.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handlePreferenceChange('marketing')}
                        className="h-4 w-4 text-primary"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    These cookies track your online activity to help advertisers deliver more 
                    relevant advertising or to limit how many times you see an ad.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Functional Cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Enable enhanced functionality and personalisation features.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={() => handlePreferenceChange('functional')}
                        className="h-4 w-4 text-primary"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    These cookies enable the website to provide enhanced functionality and 
                    personalisation, such as remembering your preferences and settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-3 p-6 border-t border-border">
              <Button 
                variant="outline"
                onClick={handleRejectAll}
              >
                Reject All
              </Button>
              <div className="flex space-x-3">
                <Button 
                  variant="outline"
                  onClick={() => setShowSettings(false)}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleSavePreferences}
                  className="bg-primary hover:bg-primary/90"
                >
                  Save Preferences
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CookieBanner

