import{r as o,j as r}from"./iframe-CuE4cGjn.js";import{C as b}from"./ContentThumbnailTemplate-DRfNU1JT.js";import"./preload-helper-BRgZCzxC.js";import"./link-iHgJEsZJ.js";import"./use-merged-ref-BFxfXqBX.js";import"./ContentContainer-DgovQ_na.js";import"./assetUtils-CRF98v2K.js";function f({relatedPosts:x,currentPostSlug:v}){const n=x.filter(e=>e.slug!==v),[a,T]=o.useState(0),[A,g]=o.useState(0),[s,P]=o.useState(!0);return o.useEffect(()=>{const e=()=>{P(window.innerWidth<1024)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),o.useEffect(()=>{if(n.length<=1||!s)return;const e=setInterval(()=>{g(0),T(t=>(t+1)%n.length)},3e3);return()=>clearInterval(e)},[n.length,s]),o.useEffect(()=>{if(n.length<=1||!s)return;const e=setInterval(()=>{g(t=>t>=100?0:t+1)},30);return()=>clearInterval(e)},[a,n.length,s]),n.length===0?null:r.jsx("section",{className:"py-[var(--spacing-scale-032)] lg:py-[var(--spacing-scale-064)]",children:r.jsxs("div",{className:"flex flex-col gap-[var(--spacing-scale-032)] lg:gap-[51px]",children:[r.jsx("h2",{className:"text-[32px] lg:text-[44px] leading-[110%] font-medium text-[var(--color-content-inverse-primary)] text-center",children:"Related Articles"}),r.jsx("div",{className:"flex justify-center overflow-hidden",children:r.jsx("div",{className:`flex gap-0 transition-transform duration-500 ease-in-out ${s?"":"overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"}`,style:{transform:s?`translateX(calc(50% - 130px - ${a*260}px))`:"none",scrollBehavior:s?"auto":"smooth"},onMouseDown:s?void 0:e=>{const t=e.currentTarget,S=e.pageX-t.offsetLeft,w=t.scrollLeft,m=y=>{const L=(y.pageX-t.offsetLeft-S)*2;t.scrollLeft=w-L},h=()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",h)},children:n.map((e,t)=>r.jsx("div",{className:"flex flex-col items-center flex-shrink-0",children:r.jsx(b,{post:e,variant:"vertical"})},e.slug))})}),s&&r.jsx("div",{className:"flex justify-center gap-[var(--measures-spacing-008)] px-[var(--measures-spacing-064)]",children:n.map((e,t)=>r.jsx("div",{className:"max-w-[var(--measures-spacing-056)] w-full h-[var(--measures-spacing-004)] bg-gray-200 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gray-600 rounded-full transition-all duration-75 ease-linear",style:{width:t===a?`${A}%`:t<a?"100%":"0%"}})},e.slug))})]})})}f.__docgenInfo={description:"",methods:[],displayName:"RelatedArticles"};const p=[{slug:"related-article-1",frontmatter:{title:"Related Article One",description:"This is the first related article description.",author:"Author One",date:"2025-01-10"}},{slug:"related-article-2",frontmatter:{title:"Related Article Two",description:"This is the second related article description.",author:"Author Two",date:"2025-01-12"}},{slug:"related-article-3",frontmatter:{title:"Related Article Three",description:"This is the third related article description.",author:"Author Three",date:"2025-01-14"}}],M={title:"Components/RelatedArticles",component:f,parameters:{docs:{description:{component:"The RelatedArticles component displays a carousel of related blog posts with progress bars on mobile and a scrollable slider on desktop."}}},argTypes:{relatedPosts:{control:"object",description:"Array of related blog post objects"},currentPostSlug:{control:"text",description:"Slug of the current post to exclude from related articles"}}},l={args:{relatedPosts:p,currentPostSlug:"current-article"}},i={args:{relatedPosts:p.slice(0,2),currentPostSlug:"current-article"}},c={args:{relatedPosts:p.slice(0,1),currentPostSlug:"current-article"}},d={args:{relatedPosts:[],currentPostSlug:"current-article"}},u={args:{relatedPosts:[{slug:"long-title-1",frontmatter:{title:"This is a Very Long Article Title That Tests Text Wrapping and Display",description:"This is a longer description that tests how the component handles extended text content.",author:"Author One",date:"2025-01-10"}},{slug:"long-title-2",frontmatter:{title:"Another Very Long Article Title for Testing Purposes",description:"Another longer description for testing text handling in the component.",author:"Author Two",date:"2025-01-12"}},{slug:"long-title-3",frontmatter:{title:"Third Long Article Title to Complete the Set",description:"Final longer description to test the component's text handling capabilities.",author:"Author Three",date:"2025-01-14"}}],currentPostSlug:"current-article"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    relatedPosts: mockRelatedPosts,
    currentPostSlug: "current-article"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    relatedPosts: mockRelatedPosts.slice(0, 2),
    currentPostSlug: "current-article"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    relatedPosts: mockRelatedPosts.slice(0, 1),
    currentPostSlug: "current-article"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    relatedPosts: [],
    currentPostSlug: "current-article"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    relatedPosts: [{
      slug: "long-title-1",
      frontmatter: {
        title: "This is a Very Long Article Title That Tests Text Wrapping and Display",
        description: "This is a longer description that tests how the component handles extended text content.",
        author: "Author One",
        date: "2025-01-10"
      }
    }, {
      slug: "long-title-2",
      frontmatter: {
        title: "Another Very Long Article Title for Testing Purposes",
        description: "Another longer description for testing text handling in the component.",
        author: "Author Two",
        date: "2025-01-12"
      }
    }, {
      slug: "long-title-3",
      frontmatter: {
        title: "Third Long Article Title to Complete the Set",
        description: "Final longer description to test the component's text handling capabilities.",
        author: "Author Three",
        date: "2025-01-14"
      }
    }],
    currentPostSlug: "current-article"
  }
}`,...u.parameters?.docs?.source}}};const D=["Default","TwoArticles","OneArticle","Empty","LongTitles"];export{l as Default,d as Empty,u as LongTitles,c as OneArticle,i as TwoArticles,D as __namedExportsOrder,M as default};
