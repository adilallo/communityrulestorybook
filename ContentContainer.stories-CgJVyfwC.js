import{C as s}from"./ContentContainer-CqubPzLI.js";import"./iframe-DU8yCxYn.js";import"./preload-helper-D9Z9MdNV.js";import"./assetUtils-CRF98v2K.js";const t={slug:"sample-article",frontmatter:{title:"Sample Article Title",description:"This is a sample article description that explains what the article covers.",author:"Sample Author",date:"2025-01-15"}},d={title:"Components/ContentContainer",component:s,parameters:{docs:{description:{component:"The ContentContainer component displays article metadata including title, description, author, and date in a structured layout."}}},argTypes:{post:{control:"object",description:"Blog post object with frontmatter"},slugOrder:{control:"number",description:"Order index for cycling through different icon styles"}}},e={args:{post:t,slugOrder:0}},r={args:{post:t,slugOrder:1}},o={args:{post:t,slugOrder:2}},n={args:{post:{...t,frontmatter:{...t.frontmatter,title:"This is a Very Long Article Title That Tests Text Wrapping",description:"This is a longer description that tests how the component handles extended text content and ensures proper wrapping and display within the container."}},slugOrder:0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    post: mockPost,
    slugOrder: 0
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    post: mockPost,
    slugOrder: 1
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    post: mockPost,
    slugOrder: 2
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    post: {
      ...mockPost,
      frontmatter: {
        ...mockPost.frontmatter,
        title: "This is a Very Long Article Title That Tests Text Wrapping",
        description: "This is a longer description that tests how the component handles extended text content and ensures proper wrapping and display within the container."
      }
    },
    slugOrder: 0
  }
}`,...n.parameters?.docs?.source}}};const l=["Default","SecondStyle","ThirdStyle","LongContent"];export{e as Default,n as LongContent,r as SecondStyle,o as ThirdStyle,l as __namedExportsOrder,d as default};
