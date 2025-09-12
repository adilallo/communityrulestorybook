import{C as s}from"./ContentThumbnailTemplate-DRfNU1JT.js";import"./iframe-CuE4cGjn.js";import"./preload-helper-BRgZCzxC.js";import"./link-iHgJEsZJ.js";import"./use-merged-ref-BFxfXqBX.js";import"./ContentContainer-DgovQ_na.js";import"./assetUtils-CRF98v2K.js";const t={slug:"sample-article",frontmatter:{title:"Sample Article Title",description:"This is a sample article description that explains what the article covers.",author:"Sample Author",date:"2025-01-15"}},u={title:"Components/ContentThumbnailTemplate",component:s,parameters:{docs:{description:{component:"The ContentThumbnailTemplate component displays blog post previews with background images, content, and metadata in both vertical and horizontal layouts."}}},argTypes:{post:{control:"object",description:"Blog post object with frontmatter"},slugOrder:{control:"number",description:"Order index for cycling through different background and icon styles"},variant:{control:{type:"select"},options:["vertical","horizontal"],description:"Layout variant for the thumbnail"}}},e={args:{post:t,slugOrder:0,variant:"vertical"}},r={args:{post:t,slugOrder:0,variant:"horizontal"}},o={args:{post:t,slugOrder:1,variant:"vertical"}},a={args:{post:t,slugOrder:2,variant:"vertical"}},n={args:{post:{...t,frontmatter:{...t.frontmatter,title:"This is a Very Long Article Title That Tests Text Wrapping",description:"This is a longer description that tests how the component handles extended text content and ensures proper wrapping and display within the thumbnail."}},slugOrder:0,variant:"vertical"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    post: mockPost,
    slugOrder: 0,
    variant: "vertical"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    post: mockPost,
    slugOrder: 0,
    variant: "horizontal"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    post: mockPost,
    slugOrder: 1,
    variant: "vertical"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    post: mockPost,
    slugOrder: 2,
    variant: "vertical"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    post: {
      ...mockPost,
      frontmatter: {
        ...mockPost.frontmatter,
        title: "This is a Very Long Article Title That Tests Text Wrapping",
        description: "This is a longer description that tests how the component handles extended text content and ensures proper wrapping and display within the thumbnail."
      }
    },
    slugOrder: 0,
    variant: "vertical"
  }
}`,...n.parameters?.docs?.source}}};const h=["Vertical","Horizontal","SecondStyle","ThirdStyle","LongContent"];export{r as Horizontal,n as LongContent,o as SecondStyle,a as ThirdStyle,e as Vertical,h as __namedExportsOrder,u as default};
