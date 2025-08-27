import{S as a}from"./SectionHeader-BehrzL7U.js";import"./iframe-B6fFDNdA.js";import"./preload-helper-BRgZCzxC.js";const u={title:"Components/SectionHeader",component:a,parameters:{layout:"centered",docs:{description:{component:"A section header component that displays a title and subtitle with responsive typography and layout. Supports different title text for large breakpoints and maintains consistent spacing across all screen sizes. Includes 'default' and 'multi-line' variants with different layout behaviors."}}},argTypes:{title:{control:{type:"text"},description:"The main title text (used for xsm and sm breakpoints)"},subtitle:{control:{type:"text"},description:"The subtitle text below the main title"},titleLg:{control:{type:"text"},description:"The title text for lg and xl breakpoints (optional, falls back to title)"},variant:{control:{type:"select"},options:["default","multi-line"],description:"The layout variant - 'default' for traditional layout, 'multi-line' for 50/50 split layout"}},tags:["autodocs"]},e={args:{title:"How CommunityRule works",subtitle:"Here's a quick overview of the process, from start to finish.",titleLg:"How CommunityRule helps",variant:"default"}},t={args:{title:"Popular templates",subtitle:"These are popular patterns for making decisions in mutual aid and open source communities. You can use them as they are or as a starting place for customizing your own CommunityRule.",variant:"multi-line"},parameters:{docs:{description:{story:"The multi-line variant creates a 50/50 split layout at lg and xl breakpoints, with the title on the left and subtitle on the right. This variant is used in the RuleStack component."}}}},s={args:{title:"Our Mission",subtitle:"We're dedicated to helping communities thrive through better decision-making processes and transparent governance structures.",titleLg:"Building Better Communities",variant:"default"},parameters:{docs:{description:{story:"Example with custom content to show the flexibility of the component."}}}},o={args:{title:"Complex Process",subtitle:"This is a much longer subtitle that demonstrates how the component handles extended text content across different breakpoints and layout configurations.",titleLg:"Complex Process Simplified",variant:"default"},parameters:{docs:{description:{story:"Demonstrates how the component handles longer subtitle text across different breakpoints."}}}},i={args:{title:"Responsive Design",subtitle:"Test the responsive behavior by resizing your browser window or using the viewport controls in Storybook.",titleLg:"Responsive Design Test",variant:"default"},parameters:{docs:{description:{story:"Test the responsive behavior by resizing your browser window or using the viewport controls in Storybook."}}}},n={args:{title:"Simple Header",subtitle:"This example doesn't specify a titleLg prop, so it will use the same title text across all breakpoints.",variant:"default"},parameters:{docs:{description:{story:"Shows the component without a titleLg prop, demonstrating the fallback behavior."}}}},r={args:{title:"Multi-line Responsive Test",subtitle:"This multi-line variant demonstrates the 50/50 split layout at larger breakpoints. Resize your browser to see how the layout adapts from stacked on mobile to side-by-side on desktop.",variant:"multi-line"},parameters:{docs:{description:{story:"Test the responsive behavior of the multi-line variant. The layout changes from stacked on mobile to 50/50 split on lg and xl breakpoints."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "How CommunityRule works",
    subtitle: "Here's a quick overview of the process, from start to finish.",
    titleLg: "How CommunityRule helps",
    variant: "default"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Popular templates",
    subtitle: "These are popular patterns for making decisions in mutual aid and open source communities. You can use them as they are or as a starting place for customizing your own CommunityRule.",
    variant: "multi-line"
  },
  parameters: {
    docs: {
      description: {
        story: "The multi-line variant creates a 50/50 split layout at lg and xl breakpoints, with the title on the left and subtitle on the right. This variant is used in the RuleStack component."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Our Mission",
    subtitle: "We're dedicated to helping communities thrive through better decision-making processes and transparent governance structures.",
    titleLg: "Building Better Communities",
    variant: "default"
  },
  parameters: {
    docs: {
      description: {
        story: "Example with custom content to show the flexibility of the component."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Complex Process",
    subtitle: "This is a much longer subtitle that demonstrates how the component handles extended text content across different breakpoints and layout configurations.",
    titleLg: "Complex Process Simplified",
    variant: "default"
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates how the component handles longer subtitle text across different breakpoints."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Responsive Design",
    subtitle: "Test the responsive behavior by resizing your browser window or using the viewport controls in Storybook.",
    titleLg: "Responsive Design Test",
    variant: "default"
  },
  parameters: {
    docs: {
      description: {
        story: "Test the responsive behavior by resizing your browser window or using the viewport controls in Storybook."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Simple Header",
    subtitle: "This example doesn't specify a titleLg prop, so it will use the same title text across all breakpoints.",
    variant: "default"
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the component without a titleLg prop, demonstrating the fallback behavior."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Multi-line Responsive Test",
    subtitle: "This multi-line variant demonstrates the 50/50 split layout at larger breakpoints. Resize your browser to see how the layout adapts from stacked on mobile to side-by-side on desktop.",
    variant: "multi-line"
  },
  parameters: {
    docs: {
      description: {
        story: "Test the responsive behavior of the multi-line variant. The layout changes from stacked on mobile to 50/50 split on lg and xl breakpoints."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const d=["Default","MultiLine","CustomContent","LongSubtitle","ResponsiveTest","WithoutTitleLg","MultiLineResponsive"];export{s as CustomContent,e as Default,o as LongSubtitle,t as MultiLine,r as MultiLineResponsive,i as ResponsiveTest,n as WithoutTitleLg,d as __namedExportsOrder,u as default};
