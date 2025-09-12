import{j as t}from"./iframe-DU8yCxYn.js";import{g as r}from"./assetUtils-CRF98v2K.js";import{C as i}from"./ContentContainer-CqubPzLI.js";import"./preload-helper-D9Z9MdNV.js";function a({post:l}){return t.jsxs("div",{className:"pt-[var(--measures-spacing-016)] md:pt-[var(--measures-spacing-008)] lg:pt-[50px] xl:pt-[112px] h-[275px] sm:h-[326px] md:h-[224px] lg:h-[358.4px] xl:h-[504px] relative w-full sm:overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 w-full h-full bg-cover bg-no-repeat aspect-[320/225.5]",style:{backgroundImage:`url(${r("assets/Content_Banner.svg")})`,backgroundPosition:"center bottom"}}),t.jsx("div",{className:"absolute inset-0 w-full h-full bg-cover bg-no-repeat aspect-[640/224] md:block hidden",style:{backgroundImage:`url(${r("assets/Content_Banner_2.svg")})`,backgroundPosition:"center bottom"}}),t.jsx("div",{className:" relative z-10 h-full flex flex-col pl-[var(--measures-spacing-016)] md:pl-[var(--measures-spacing-024)] lg:pl-[var(--measures-spacing-064)] pr-[96px] md:pr-[350px]  /* default: normal flow, top-aligned */ justify-start  /* only at md: take out of flow and center vertically */ md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2 md:w-full md:h-auto  /* after md (lg+): snap back to normal flow/top align */ lg:static lg:translate-y-0 lg:top-auto lg:h-full lg:justify-start ",children:t.jsx(i,{post:l,size:"responsive"})})]})}a.__docgenInfo={description:"",methods:[],displayName:"ContentBanner"};const e={slug:"sample-article",frontmatter:{title:"Sample Article Title",description:"This is a sample article description that explains what the article covers.",author:"Sample Author",date:"2025-01-15"},htmlContent:"<p>This is the main content of the sample article.</p><p>It has multiple paragraphs.</p>"},g={title:"Components/ContentBanner",component:a,parameters:{docs:{description:{component:"The ContentBanner component displays the header information for blog articles, including title, description, author, and date."}}},argTypes:{post:{control:"object",description:"Blog post object with frontmatter and content"}}},n={args:{post:e}},o={args:{post:{...e,frontmatter:{...e.frontmatter,title:"This is a Very Long Article Title That Tests How the Component Handles Extended Text",description:"This is a longer description that tests how the component handles extended text content and ensures proper wrapping and display."}}}},s={args:{post:{...e,frontmatter:{...e.frontmatter,title:"Article by Different Author",author:"Community Organizer",date:"2025-02-20"}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    post: mockBlogPost
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    post: {
      ...mockBlogPost,
      frontmatter: {
        ...mockBlogPost.frontmatter,
        title: "This is a Very Long Article Title That Tests How the Component Handles Extended Text",
        description: "This is a longer description that tests how the component handles extended text content and ensures proper wrapping and display."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    post: {
      ...mockBlogPost,
      frontmatter: {
        ...mockBlogPost.frontmatter,
        title: "Article by Different Author",
        author: "Community Organizer",
        date: "2025-02-20"
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const u=["Default","LongTitle","DifferentAuthor"];export{n as Default,s as DifferentAuthor,o as LongTitle,u as __namedExportsOrder,g as default};
