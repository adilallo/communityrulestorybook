import{j as t}from"./iframe-DnidsufN.js";import{H as r}from"./HeaderTab-BMZP-xkf.js";import{L as s}from"./Logo-DEEpzgr2.js";import"./preload-helper-BRgZCzxC.js";const c={title:"Components/HeaderTab",component:r,parameters:{layout:"centered",docs:{description:{component:"A header tab container with decorative Union images and responsive behavior. Used to wrap content in the header with consistent styling and responsive breakpoint transitions."}}},argTypes:{stretch:{control:{type:"boolean"},description:"Whether the tab should stretch to fill available space"},className:{control:{type:"text"},description:"Additional CSS classes"}},tags:["autodocs"]},e={args:{stretch:!1},render:a=>t.jsx(r,{...a,children:t.jsx(s,{size:"homeHeaderMd"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    stretch: false
  },
  render: args => <HeaderTab {...args}>
      <Logo size="homeHeaderMd" />
    </HeaderTab>
}`,...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,c as default};
