import{j as e}from"./iframe-DnidsufN.js";import{M as a}from"./MiniCard-DwpTUaCm.js";import"./preload-helper-BRgZCzxC.js";import"./image-BAhie9Pt.js";const c={title:"Components/MiniCard",component:a,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"select",options:["bg-[var(--color-surface-default-brand-royal)]","bg-[#D1FFE2]","bg-[#F4CAFF]","bg-[#CBDDFF]"]},labelLine1:{control:"text"},labelLine2:{control:"text"},panelContent:{control:"text"},href:{control:"text"},onClick:{action:"clicked"},ariaLabel:{control:"text"}}},n={args:{backgroundColor:"bg-[var(--color-surface-default-brand-royal)]",labelLine1:"Decision-making",labelLine2:"support",panelContent:"assets/Feature_Support.png"}},r={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(a,{backgroundColor:"bg-[var(--color-surface-default-brand-royal)]",labelLine1:"Decision-making",labelLine2:"support",panelContent:"assets/Feature_Support.png"}),e.jsx(a,{backgroundColor:"bg-[#D1FFE2]",labelLine1:"Values alignment",labelLine2:"exercises",panelContent:"assets/Feature_Exercises.png"}),e.jsx(a,{backgroundColor:"bg-[#F4CAFF]",labelLine1:"Membership",labelLine2:"guidance",panelContent:"assets/Feature_Guidance.png"}),e.jsx(a,{backgroundColor:"bg-[#CBDDFF]",labelLine1:"Conflict resolution",labelLine2:"tools",panelContent:"assets/Feature_Tools.png"})]})},o={args:{backgroundColor:"bg-[var(--color-surface-default-brand-royal)]",labelLine1:"Decision-making",labelLine2:"support",panelContent:"assets/Feature_Support.png",href:"#decision-making",ariaLabel:"Navigate to decision-making support tools"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColor: "bg-[var(--color-surface-default-brand-royal)]",
    labelLine1: "Decision-making",
    labelLine2: "support",
    panelContent: "assets/Feature_Support.png"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4">
      <MiniCard backgroundColor="bg-[var(--color-surface-default-brand-royal)]" labelLine1="Decision-making" labelLine2="support" panelContent="assets/Feature_Support.png" />
      <MiniCard backgroundColor="bg-[#D1FFE2]" labelLine1="Values alignment" labelLine2="exercises" panelContent="assets/Feature_Exercises.png" />
      <MiniCard backgroundColor="bg-[#F4CAFF]" labelLine1="Membership" labelLine2="guidance" panelContent="assets/Feature_Guidance.png" />
      <MiniCard backgroundColor="bg-[#CBDDFF]" labelLine1="Conflict resolution" labelLine2="tools" panelContent="assets/Feature_Tools.png" />
    </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColor: "bg-[var(--color-surface-default-brand-royal)]",
    labelLine1: "Decision-making",
    labelLine2: "support",
    panelContent: "assets/Feature_Support.png",
    href: "#decision-making",
    ariaLabel: "Navigate to decision-making support tools"
  }
}`,...o.parameters?.docs?.source}}};const p=["Default","ColorVariants","AsLink"];export{o as AsLink,r as ColorVariants,n as Default,p as __namedExportsOrder,c as default};
