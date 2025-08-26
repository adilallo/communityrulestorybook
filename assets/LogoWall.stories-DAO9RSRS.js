import{r as t,j as e}from"./iframe-B0rGyZZI.js";import{n as p}from"./image-BUdaRZjp.js";import"./preload-helper-BRgZCzxC.js";const i=({logos:r=[]})=>{const[n,l]=t.useState(!1),d=[{src:"assets/Section/Logo_FoodNotBombs.png",alt:"Food Not Bombs",size:"h-11 lg:h-14 xl:h-[70px]",order:"order-1 sm:order-4"},{src:"assets/Section/Logo_StartCOOP.png",alt:"Start COOP",size:"h-[42px] lg:h-[53px] xl:h-[66px]",order:"order-2 sm:order-2"},{src:"assets/Section/Logo_Metagov.png",alt:"Metagov",size:"h-6 lg:h-8 xl:h-[41px]",order:"order-3 sm:order-1"},{src:"assets/Section/Logo_OpenCivics.png",alt:"Open Civics",size:"h-8 lg:h-10 xl:h-[50px]",order:"order-4 sm:order-5 md:order-6"},{src:"assets/Section/Logo_MutualAidCO.png",alt:"Mutual Aid CO",size:"h-11 lg:h-14 xl:h-[70px]",order:"order-5 sm:order-6 md:order-5"},{src:"assets/Section/Logo_CUBoulder.png",alt:"CU Boulder",size:"h-10 lg:h-12 xl:h-[60px]",order:"order-6 sm:order-3"}],c=r.length>0?r:d;return t.useEffect(()=>{const o=setTimeout(()=>{l(!0)},100);return()=>clearTimeout(o)},[]),e.jsx("section",{className:"p-[var(--spacing-scale-032)] md:px-[var(--spacing-scale-024)] md:py-[var(--spacing-scale-032)] lg:px-[var(--spacing-scale-064)] lg:py-[var(--spacing-scale-048)] xl:px-[160px] xl:py-[var(--spacing-scale-064)]",children:e.jsxs("div",{className:"flex flex-col gap-[var(--spacing-scale-032)] md:gap-[var(--spacing-scale-024)] xl:gap-[var(--spacing-scale-032)]",children:[e.jsx("p",{className:"font-inter font-medium text-[10px] leading-[12px] xl:text-[14px] xl:leading-[12px] uppercase text-[var(--color-content-default-secondary)] text-center",children:"Trusted by leading cooperators"}),e.jsx("div",{className:`transition-opacity duration-500 ${n?"opacity-60":"opacity-0"}`,children:e.jsx("div",{className:"grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 md:flex md:justify-between md:items-center gap-x-[var(--spacing-scale-032)] gap-y-[var(--spacing-scale-032)] sm:gap-y-[var(--spacing-scale-048)]",children:c.map((o,a)=>e.jsx("div",{className:`flex items-center justify-center transition-opacity duration-500 hover:opacity-100 ${o.order||""}`,children:e.jsx(p,{src:o.src,alt:o.alt,className:`${o.size||"h-8"} w-auto object-contain transition-transform duration-500 hover:scale-105`,priority:a<2,unoptimized:!0,width:0,height:0,sizes:"100vw"})},a))})})]})})};i.__docgenInfo={description:"",methods:[],displayName:"LogoWall",props:{logos:{defaultValue:{value:"[]",computed:!1},required:!1}}};const u={title:"Components/LogoWall",component:i,parameters:{layout:"fullscreen",docs:{description:{component:`A responsive logo wall component that displays partner/sponsor logos in a grid layout. Features responsive breakpoints with different layouts and sizing for mobile, tablet, and desktop views.

## Responsive Behavior

- **Mobile**: 3 rows × 2 columns grid with 32px gaps
- **SM**: 2 rows × 3 columns grid with 48px row gap and 32px column gap
- **MD**: Single row with space-between layout and 24px gap between text and logos
- **LG**: Larger logo sizes and 64px horizontal padding
- **XL**: Largest logo sizes, 160px horizontal padding, and 14px label text

## Animations & Transitions

- **Fade-in Effect**: Logos fade in from opacity 0 to 60% after component mounts (500ms transition)
- **Hover Interactions**: Individual logos respond to hover with:
  - Opacity change from 60% to 100%
  - Scale transform (105% zoom)
  - 500ms smooth transitions for all effects
- **Loading States**: Progressive loading with fallback timer for reliable display

## Props

- **logos** (optional): Array of logo objects with src, alt, size, and order properties. If not provided, uses default partner logos.

## Usage Examples

### Custom Logos
\`\`\`jsx
<LogoWall 
  logos={[
    { 
      src: "assets/Section/Logo_CUBoulder.png", 
      alt: "CU Boulder",
      size: "h-10 lg:h-12 xl:h-[60px]",
      order: "order-1 sm:order-2"
    },
    { 
      src: "assets/Section/Logo_FoodNotBombs.png", 
      alt: "Food Not Bombs",
      size: "h-11 lg:h-14 xl:h-[70px]",
      order: "order-2 sm:order-1"
    }
  ]} 
/>
\`\`\`

### Empty State
\`\`\`jsx
<LogoWall logos={[]} />
\`\`\`
This will fall back to the default partner logos.`}}},tags:["autodocs"],argTypes:{logos:{control:"object",description:"Array of logo objects with src, alt, size, and order properties. If not provided, uses default partner logos."}}},s={args:{},parameters:{docs:{description:{story:"Default LogoWall with all partner logos. Displays in a 3×2 grid on mobile, 2×3 grid on small screens, single row on medium screens, and larger sizes on large screens. Features smooth fade-in animations and hover interactions."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Default LogoWall with all partner logos. Displays in a 3×2 grid on mobile, 2×3 grid on small screens, single row on medium screens, and larger sizes on large screens. Features smooth fade-in animations and hover interactions."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const h=["Default"];export{s as Default,h as __namedExportsOrder,u as default};
