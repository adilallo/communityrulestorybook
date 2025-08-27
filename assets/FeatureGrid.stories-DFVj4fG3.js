import{j as e}from"./iframe-DnidsufN.js";import{C as i}from"./ContentLockup-Chmr4B0u.js";import{M as t}from"./MiniCard-DwpTUaCm.js";import"./image-BAhie9Pt.js";import"./preload-helper-BRgZCzxC.js";import"./Button-CJ0g8wHN.js";const n=({title:o,subtitle:r,className:s=""})=>e.jsx("section",{className:`p-0 lg:p-[var(--spacing-scale-064)] ${s}`,"aria-labelledby":"feature-grid-headline",role:"region",tabIndex:-1,children:e.jsx("div",{className:"py-[var(--spacing-scale-032)] px-[var(--spacing-scale-020)] md:pt-[var(--spacing-scale-076)] md:pb-[var(--spacing-scale-048)] lg:pb-[var(--spacing-scale-076)] md:px-[var(--spacing-scale-048)] bg-[#171717] rounded-[var(--radius-measures-radius-xlarge)] focus-within:ring-2 focus-within:ring-[var(--color-surface-default-brand-royal)] focus-within:ring-offset-2",children:e.jsxs("div",{className:"w-full mx-auto gap-[var(--spacing-scale-048)] lg:flex lg:items-start lg:gap-[var(--spacing-scale-048)] [container-type:inline-size]",children:[e.jsx("div",{className:"lg:shrink lg:min-w-0",children:e.jsx(i,{title:o,subtitle:r,variant:"feature",linkText:"Learn more",linkHref:"#"})}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-[var(--spacing-scale-012)] mt-[var(--spacing-scale-048)] lg:mt-0 lg:flex-grow lg:shrink-0",role:"grid","aria-label":"Feature tools and services",children:[e.jsx(t,{backgroundColor:"bg-[var(--color-surface-default-brand-royal)]",labelLine1:"Decision-making",labelLine2:"support",panelContent:"assets/Feature_Support.png",ariaLabel:"Decision-making support tools",href:"#decision-making"}),e.jsx(t,{backgroundColor:"bg-[#D1FFE2]",labelLine1:"Values alignment",labelLine2:"exercises",panelContent:"assets/Feature_Exercises.png",ariaLabel:"Values alignment exercises",href:"#values-alignment"}),e.jsx(t,{backgroundColor:"bg-[#F4CAFF]",labelLine1:"Membership",labelLine2:"guidance",panelContent:"assets/Feature_Guidance.png",ariaLabel:"Membership guidance resources",href:"#membership-guidance"}),e.jsx(t,{backgroundColor:"bg-[#CBDDFF]",labelLine1:"Conflict resolution",labelLine2:"tools",panelContent:"assets/Feature_Tools.png",ariaLabel:"Conflict resolution tools",href:"#conflict-resolution"})]})]})})});n.__docgenInfo={description:"",methods:[],displayName:"FeatureGrid",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};const m={title:"Components/FeatureGrid",component:n,parameters:{layout:"fullscreen",docs:{description:{component:`
A responsive feature grid component that displays organizational tools and services in a clean card-based layout with supportive messaging and categorized feature highlights.

## Features

- **Responsive Layout**: Adapts from 2x2 grid on mobile to 1x4 grid on tablet to horizontal layout on desktop
- **ContentLockup Integration**: Uses the feature variant with "Learn more" link
- **MiniCard Grid**: Four feature cards with color-coded backgrounds and icons
- **Accessibility**: Full keyboard navigation, focus indicators, and ARIA labels
- **Design System**: Uses design tokens for consistent spacing, colors, and typography

## Responsive Behavior

- **Mobile (< 768px)**: 2x2 grid layout with ContentLockup on top
- **Tablet (768px - 1024px)**: 1x4 grid layout with ContentLockup on top  
- **Desktop (> 1024px)**: Horizontal layout with ContentLockup on left, 1x4 grid on right

## Interactive Elements

- **MiniCards**: Hover effects, focus indicators, and keyboard navigation
- **Learn More Link**: Underlined link with focus states
- **Color-coded Features**: Royal, green, pink, and blue backgrounds for categorization

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly with proper ARIA labels
- Focus management with visible indicators
        `}}},argTypes:{title:{control:{type:"text"},description:"Main headline text for the ContentLockup"},subtitle:{control:{type:"text"},description:"Supporting subtitle text for the ContentLockup"},className:{control:{type:"text"},description:"Additional CSS classes for custom styling"}}},a={args:{title:"We've got your back, every step of the way",subtitle:"Use our toolkit to improve, document, and evolve your organization."},parameters:{docs:{description:{story:`
Default FeatureGrid with standard content. This component demonstrates:

- **ContentLockup**: Feature variant with title, subtitle, and "Learn more" link
- **MiniCard Grid**: Four feature cards with different colors and icons
- **Responsive Design**: Layout adapts across mobile, tablet, and desktop breakpoints
- **Interactive States**: Hover effects and focus indicators on all interactive elements

The component uses a dark background (#171717) with rounded corners and proper spacing using design tokens.
        `}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "We've got your back, every step of the way",
    subtitle: "Use our toolkit to improve, document, and evolve your organization."
  },
  parameters: {
    docs: {
      description: {
        story: \`
Default FeatureGrid with standard content. This component demonstrates:

- **ContentLockup**: Feature variant with title, subtitle, and "Learn more" link
- **MiniCard Grid**: Four feature cards with different colors and icons
- **Responsive Design**: Layout adapts across mobile, tablet, and desktop breakpoints
- **Interactive States**: Hover effects and focus indicators on all interactive elements

The component uses a dark background (#171717) with rounded corners and proper spacing using design tokens.
        \`
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const f=["Default"];export{a as Default,f as __namedExportsOrder,m as default};
