# Design System for Scotland Business Website

## Color Palette

Based on the inspiration sites and professional business requirements, we'll use a sophisticated color scheme that conveys trust and professionalism:

### Primary Colors
- **Primary Blue**: #1e40af (Professional, trustworthy)
- **Primary Dark**: #1e3a8a (Darker variant for contrast)
- **Accent Orange**: #ea580c (Call-to-action, energy)
- **Success Green**: #16a34a (Positive actions, success states)

### Neutral Colors
- **Background**: #ffffff (Clean, professional)
- **Surface**: #f8fafc (Subtle background for cards)
- **Border**: #e2e8f0 (Subtle borders)
- **Text Primary**: #0f172a (High contrast text)
- **Text Secondary**: #64748b (Supporting text)
- **Text Muted**: #94a3b8 (Placeholder, disabled text)

### Semantic Colors
- **Error**: #dc2626 (Error states, warnings)
- **Warning**: #d97706 (Caution, attention)
- **Info**: #0284c7 (Information, links)

## Typography

### Font Families
- **Primary**: Inter (Modern, professional, excellent readability)
- **Headings**: Inter (Consistent with primary for clean look)
- **Monospace**: JetBrains Mono (Code, technical content)

### Font Sizes and Hierarchy
- **Hero Heading**: 3.5rem (56px) - font-bold
- **Page Heading**: 2.5rem (40px) - font-bold
- **Section Heading**: 2rem (32px) - font-semibold
- **Subsection Heading**: 1.5rem (24px) - font-semibold
- **Body Large**: 1.125rem (18px) - font-normal
- **Body**: 1rem (16px) - font-normal
- **Body Small**: 0.875rem (14px) - font-normal
- **Caption**: 0.75rem (12px) - font-medium

## Spacing System

Using a consistent 8px grid system:
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)
- **4xl**: 6rem (96px)

## Component Specifications

### Buttons
- **Primary**: Blue background, white text, rounded corners
- **Secondary**: White background, blue border and text
- **Accent**: Orange background, white text
- **Ghost**: Transparent background, colored text

### Cards
- **Background**: White with subtle shadow
- **Border**: Light gray border
- **Padding**: 1.5rem (24px)
- **Border Radius**: 0.5rem (8px)

### Navigation
- **Height**: 4rem (64px)
- **Background**: White with shadow
- **Links**: Medium weight, hover states
- **Logo**: Left aligned, appropriate sizing

### Forms
- **Input Height**: 2.5rem (40px)
- **Border**: Light gray, focus state in primary blue
- **Labels**: Medium weight, above inputs
- **Validation**: Error states in red, success in green

## Layout Grid

### Breakpoints
- **Mobile**: 0px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

### Container Widths
- **Mobile**: 100% with 1rem padding
- **Tablet**: 100% with 2rem padding
- **Desktop**: 1200px max-width, centered
- **Large Desktop**: 1400px max-width, centered

### Grid System
- **Columns**: 12-column grid
- **Gutters**: 1.5rem (24px)
- **Margins**: Responsive based on breakpoint

## Animation and Transitions

### Timing
- **Fast**: 150ms (hover states, small interactions)
- **Medium**: 300ms (page transitions, modals)
- **Slow**: 500ms (complex animations)

### Easing
- **Standard**: ease-in-out
- **Enter**: ease-out
- **Exit**: ease-in

## Accessibility

### Contrast Ratios
- **Normal Text**: Minimum 4.5:1
- **Large Text**: Minimum 3:1
- **Interactive Elements**: Minimum 3:1

### Focus States
- **Outline**: 2px solid primary blue
- **Offset**: 2px from element

### Motion
- **Respect prefers-reduced-motion**
- **Provide alternative static states**

## Implementation Notes

This design system is implemented using Tailwind CSS with custom color variables defined in the CSS custom properties. The system prioritizes accessibility, consistency, and professional appearance suitable for a Scotland-based business website.

