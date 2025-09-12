import{j as n}from"./iframe-DU8yCxYn.js";import{C as b}from"./ContentLockup-6P1flGof.js";import{B as C}from"./Button-Ciy06F0O.js";import"./preload-helper-D9Z9MdNV.js";const u=({title:e,subtitle:g,description:m,buttonText:c="Ask an organizer",buttonHref:i="#",className:f="",variant:t="centered",onContactClick:l})=>{const x=h=>{l&&l({event:"contact_button_click",component:"AskOrganizer",variant:t,buttonText:c,buttonHref:i,timestamp:new Date().toISOString()})},p={centered:{container:"text-center",buttonContainer:"flex justify-center"},"left-aligned":{container:"text-left",buttonContainer:"flex justify-start"},compact:{container:"text-center",buttonContainer:"flex justify-center"},inverse:{container:"text-center",buttonContainer:"flex justify-center"}},d=p[t]||p.centered,v=t==="compact"?"py-[var(--spacing-scale-016)] px-[var(--spacing-scale-016)] md:py-[var(--spacing-scale-032)] md:px-[var(--spacing-scale-032)]":"py-[var(--spacing-scale-032)] px-[var(--spacing-scale-032)] md:py-[var(--spacing-scale-096)] md:px-[var(--spacing-scale-064)]",k=t==="compact"?"gap-[var(--spacing-scale-020)]":"gap-[var(--spacing-scale-040)]";return n.jsx("section",{className:`${v} ${f}`,"aria-labelledby":"ask-organizer-headline",role:"region",tabIndex:-1,children:n.jsxs("div",{className:`flex flex-col ${k} ${d.container}`,children:[n.jsx(b,{title:e,subtitle:g,description:m,variant:t==="inverse"?"ask-inverse":"ask",alignment:t==="left-aligned"?"left":"center"}),n.jsx("div",{className:d.buttonContainer,children:n.jsx(C,{href:i,size:"large",variant:t==="inverse"?"primary":"default",className:"xl:!px-[var(--spacing-scale-020)] xl:!py-[var(--spacing-scale-012)] xl:!text-[24px] xl:!leading-[28px]",onClick:x,"aria-label":`${c} - Contact an organizer for help`,children:c})})]})})};u.__docgenInfo={description:"",methods:[],displayName:"AskOrganizer",props:{buttonText:{defaultValue:{value:'"Ask an organizer"',computed:!1},required:!1},buttonHref:{defaultValue:{value:'"#"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},variant:{defaultValue:{value:'"centered"',computed:!1},required:!1}}};const T={title:"Components/AskOrganizer",component:u,parameters:{docs:{description:{component:"The AskOrganizer component provides clear pathways for user inquiries. This component serves as a conversion point throughout the platform."}}},argTypes:{title:{control:"text",description:"The main title for the ask organizer section"},subtitle:{control:"text",description:"The subtitle text"},description:{control:"text",description:"Additional description text"},buttonText:{control:"text",description:"Text for the call-to-action button"},buttonHref:{control:"text",description:"URL for the button link"},variant:{control:{type:"select"},options:["centered","left-aligned","compact","inverse"],description:"Layout variant for the component"},onContactClick:{action:"contact clicked",description:"Analytics callback for contact button clicks"}}},a={args:{title:"Still have questions?",subtitle:"Get answers from an experienced organizer",buttonText:"Ask an organizer",buttonHref:"#contact",variant:"centered",onContactClick:e=>console.log("Contact clicked:",e)}},o={args:{title:"Still have questions?",subtitle:"Get answers from an experienced organizer",buttonText:"Ask an organizer",buttonHref:"#contact",variant:"left-aligned",onContactClick:e=>console.log("Contact clicked:",e)}},r={args:{title:"Still have questions?",subtitle:"Get answers from an experienced organizer",buttonText:"Ask an organizer",buttonHref:"#contact",variant:"compact",onContactClick:e=>console.log("Contact clicked:",e)}},s={args:{title:"Still have questions?",subtitle:"Get answers from an experienced organizer",buttonText:"Ask an organizer",buttonHref:"#contact",variant:"inverse",onContactClick:e=>console.log("Contact clicked:",e)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Still have questions?",
    subtitle: "Get answers from an experienced organizer",
    buttonText: "Ask an organizer",
    buttonHref: "#contact",
    variant: "inverse",
    onContactClick: data => console.log("Contact clicked:", data)
  }
}`,...s.parameters?.docs?.source}}};const q=["Default","LeftAligned","Compact","Inverse"];export{r as Compact,a as Default,s as Inverse,o as LeftAligned,q as __namedExportsOrder,T as default};
