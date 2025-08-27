import{j as n}from"./iframe-B6fFDNdA.js";import{C as v}from"./ContentLockup-DkFMp7b1.js";import{B as b}from"./Button-vOZrRXT0.js";import"./preload-helper-BRgZCzxC.js";const d=({title:e,subtitle:u,description:g,buttonText:c="Ask an organizer",buttonHref:s="#",className:m="",variant:t="centered",onContactClick:i})=>{const f=C=>{i&&i({event:"contact_button_click",component:"AskOrganizer",variant:t,buttonText:c,buttonHref:s,timestamp:new Date().toISOString()})},l={centered:{container:"text-center",buttonContainer:"flex justify-center"},"left-aligned":{container:"text-left",buttonContainer:"flex justify-start"},compact:{container:"text-center",buttonContainer:"flex justify-center"}},p=l[t]||l.centered,x=t==="compact"?"py-[var(--spacing-scale-016)] px-[var(--spacing-scale-016)] md:py-[var(--spacing-scale-032)] md:px-[var(--spacing-scale-032)]":"py-[var(--spacing-scale-032)] px-[var(--spacing-scale-032)] md:py-[var(--spacing-scale-096)] md:px-[var(--spacing-scale-064)]",k=t==="compact"?"gap-[var(--spacing-scale-020)]":"gap-[var(--spacing-scale-040)]";return n.jsx("section",{className:`${x} ${m}`,"aria-labelledby":"ask-organizer-headline",role:"region",tabIndex:-1,children:n.jsxs("div",{className:`flex flex-col ${k} ${p.container}`,children:[n.jsx(v,{title:e,subtitle:u,description:g,variant:"ask",alignment:t==="left-aligned"?"left":"center"}),n.jsx("div",{className:p.buttonContainer,children:n.jsx(b,{href:s,size:"large",variant:"default",className:"xl:!px-[var(--spacing-scale-020)] xl:!py-[var(--spacing-scale-012)] xl:!text-[24px] xl:!leading-[28px]",onClick:f,"aria-label":`${c} - Contact an organizer for help`,children:c})})]})})};d.__docgenInfo={description:"",methods:[],displayName:"AskOrganizer",props:{buttonText:{defaultValue:{value:'"Ask an organizer"',computed:!1},required:!1},buttonHref:{defaultValue:{value:'"#"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},variant:{defaultValue:{value:'"centered"',computed:!1},required:!1}}};const S={title:"Components/AskOrganizer",component:d,parameters:{docs:{description:{component:"The AskOrganizer component provides clear pathways for user inquiries. This component serves as a conversion point throughout the platform."}}},argTypes:{title:{control:"text",description:"The main title for the ask organizer section"},subtitle:{control:"text",description:"The subtitle text"},description:{control:"text",description:"Additional description text"},buttonText:{control:"text",description:"Text for the call-to-action button"},buttonHref:{control:"text",description:"URL for the button link"},variant:{control:{type:"select"},options:["centered","left-aligned","compact"],description:"Layout variant for the component"},onContactClick:{action:"contact clicked",description:"Analytics callback for contact button clicks"}}},a={args:{title:"Still have questions?",subtitle:"Get answers from an experienced organizer",buttonText:"Ask an organizer",buttonHref:"#contact",variant:"centered",onContactClick:e=>console.log("Contact clicked:",e)}},o={args:{title:"Still have questions?",subtitle:"Get answers from an experienced organizer",buttonText:"Ask an organizer",buttonHref:"#contact",variant:"left-aligned",onContactClick:e=>console.log("Contact clicked:",e)}},r={args:{title:"Still have questions?",subtitle:"Get answers from an experienced organizer",buttonText:"Ask an organizer",buttonHref:"#contact",variant:"compact",onContactClick:e=>console.log("Contact clicked:",e)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Still have questions?",
    subtitle: "Get answers from an experienced organizer",
    buttonText: "Ask an organizer",
    buttonHref: "#contact",
    variant: "centered",
    onContactClick: data => console.log("Contact clicked:", data)
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Still have questions?",
    subtitle: "Get answers from an experienced organizer",
    buttonText: "Ask an organizer",
    buttonHref: "#contact",
    variant: "left-aligned",
    onContactClick: data => console.log("Contact clicked:", data)
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Still have questions?",
    subtitle: "Get answers from an experienced organizer",
    buttonText: "Ask an organizer",
    buttonHref: "#contact",
    variant: "compact",
    onContactClick: data => console.log("Contact clicked:", data)
  }
}`,...r.parameters?.docs?.source}}};const T=["Default","LeftAligned","Compact"];export{r as Compact,a as Default,o as LeftAligned,T as __namedExportsOrder,S as default};
