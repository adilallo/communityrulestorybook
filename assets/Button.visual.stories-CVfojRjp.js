import{j as e}from"./iframe-CuE4cGjn.js";import{B as s}from"./Button-zg0snvxu.js";import{w as j,u as S}from"./index-ChhZWroJ.js";import"./preload-helper-BRgZCzxC.js";const M={title:"Components/Button/Visual Regression",component:s,parameters:{chromatic:{viewports:[320,640,1024,1280],delay:200,modes:{light:{},dark:{colorScheme:"dark"}}}},argTypes:{size:{control:{type:"select"},options:["xsmall","small","medium","large","xlarge"]},variant:{control:{type:"select"},options:["default","home"]},disabled:{control:{type:"boolean"}}}},i={args:{children:"Default Button"},parameters:{docs:{description:{story:"Default button state for visual regression testing."}}}},c={args:{children:"Hover Button"},parameters:{docs:{description:{story:"Button in hover state for visual regression testing."}}},play:async({canvasElement:r})=>{const n=j(r).getByRole("button");await S.hover(n),await new Promise(t=>setTimeout(t,100))}},l={args:{children:"Focus Button"},parameters:{docs:{description:{story:"Button in focus state for visual regression testing."}}},play:async({canvasElement:r})=>{j(r).getByRole("button").focus(),await new Promise(t=>setTimeout(t,100))}},u={args:{children:"Active Button"},parameters:{docs:{description:{story:"Button in active/pressed state for visual regression testing."}}},play:async({canvasElement:r})=>{const n=j(r).getByRole("button");await S.click(n),await new Promise(t=>setTimeout(t,100))}},d={args:{children:"Disabled Button",disabled:!0},parameters:{docs:{description:{story:"Disabled button state for visual regression testing."}}}},m={args:{children:"XSmall Button",size:"xsmall"},parameters:{docs:{description:{story:"Extra small button size for visual regression testing."}}}},p={args:{children:"Small Button",size:"small"},parameters:{docs:{description:{story:"Small button size for visual regression testing."}}}},g={args:{children:"Medium Button",size:"medium"},parameters:{docs:{description:{story:"Medium button size for visual regression testing."}}}},v={args:{children:"Large Button",size:"large"},parameters:{docs:{description:{story:"Large button size for visual regression testing."}}}},h={args:{children:"XLarge Button",size:"xlarge"},parameters:{docs:{description:{story:"Extra large button size for visual regression testing."}}}},B={args:{children:"Home Button",variant:"home"},parameters:{docs:{description:{story:"Home variant button for visual regression testing."}}}},f={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Button with Icon"}),e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})})]})},parameters:{docs:{description:{story:"Button with icon for visual regression testing."}}}},y={args:{children:"This is a button with very long text content that might wrap or overflow"},parameters:{docs:{description:{story:"Button with long text for visual regression testing."}}}},x={render:()=>e.jsx("div",{className:"space-y-4 p-4",children:e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(s,{size:"xsmall",children:"XSmall"}),e.jsx(s,{size:"small",children:"Small"}),e.jsx(s,{size:"medium",children:"Medium"}),e.jsx(s,{size:"large",children:"Large"}),e.jsx(s,{size:"xlarge",children:"XLarge"})]})}),parameters:{docs:{description:{story:"All button sizes for comparison and visual regression testing."}}}},w={render:()=>e.jsxs("div",{className:"space-y-4 p-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(s,{children:"Default"}),e.jsx(s,{disabled:!0,children:"Disabled"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(s,{variant:"home",children:"Home Default"}),e.jsx(s,{variant:"home",disabled:!0,children:"Home Disabled"})]})]}),parameters:{docs:{description:{story:"Button states for comparison and visual regression testing."}}}},b={render:()=>e.jsx("div",{className:"space-y-4 p-4",children:e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(s,{id:"hover-test",children:"Hover Me"}),e.jsx(s,{id:"focus-test",children:"Focus Me"}),e.jsx(s,{id:"click-test",children:"Click Me"})]})}),parameters:{docs:{description:{story:"Interactive button states for visual regression testing."}}},play:async({canvasElement:r,step:a})=>{const n=j(r);await a("Test hover state",async()=>{const t=n.getByRole("button",{name:"Hover Me"});await S.hover(t),await new Promise(o=>setTimeout(o,100))}),await a("Test focus state",async()=>{n.getByRole("button",{name:"Focus Me"}).focus(),await new Promise(o=>setTimeout(o,100))}),await a("Test click state",async()=>{const t=n.getByRole("button",{name:"Click Me"});await S.click(t),await new Promise(o=>setTimeout(o,100))})}},z={render:()=>e.jsxs("div",{className:"space-y-4 p-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(s,{size:"xsmall",children:"Very Small"}),e.jsx(s,{size:"xlarge",children:"Very Large"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(s,{children:"Normal"}),e.jsx(s,{disabled:!0,children:"Disabled"}),e.jsx(s,{variant:"home",children:"Home"}),e.jsx(s,{variant:"home",disabled:!0,children:"Home Disabled"})]})]}),parameters:{docs:{description:{story:"Edge cases for button visual regression testing."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Default Button"
  },
  parameters: {
    docs: {
      description: {
        story: "Default button state for visual regression testing."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Hover Button"
  },
  parameters: {
    docs: {
      description: {
        story: "Button in hover state for visual regression testing."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.hover(button);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Focus Button"
  },
  parameters: {
    docs: {
      description: {
        story: "Button in focus state for visual regression testing."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    button.focus();
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Active Button"
  },
  parameters: {
    docs: {
      description: {
        story: "Button in active/pressed state for visual regression testing."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Disabled Button",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled button state for visual regression testing."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "XSmall Button",
    size: "xsmall"
  },
  parameters: {
    docs: {
      description: {
        story: "Extra small button size for visual regression testing."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Small Button",
    size: "small"
  },
  parameters: {
    docs: {
      description: {
        story: "Small button size for visual regression testing."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Medium Button",
    size: "medium"
  },
  parameters: {
    docs: {
      description: {
        story: "Medium button size for visual regression testing."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    size: "large"
  },
  parameters: {
    docs: {
      description: {
        story: "Large button size for visual regression testing."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: "XLarge Button",
    size: "xlarge"
  },
  parameters: {
    docs: {
      description: {
        story: "Extra large button size for visual regression testing."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Home Button",
    variant: "home"
  },
  parameters: {
    docs: {
      description: {
        story: "Home variant button for visual regression testing."
      }
    }
  }
}`,...B.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <span>Button with Icon</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: "Button with icon for visual regression testing."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: "This is a button with very long text content that might wrap or overflow"
  },
  parameters: {
    docs: {
      description: {
        story: "Button with long text for visual regression testing."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-4">
      <div className="flex flex-wrap gap-4 items-center">
        <Button size="xsmall">XSmall</Button>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
        <Button size="xlarge">XLarge</Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All button sizes for comparison and visual regression testing."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-4">
      <div className="flex flex-wrap gap-4 items-center">
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="home">Home Default</Button>
        <Button variant="home" disabled>
          Home Disabled
        </Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Button states for comparison and visual regression testing."
      }
    }
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-4">
      <div className="flex flex-wrap gap-4 items-center">
        <Button id="hover-test">Hover Me</Button>
        <Button id="focus-test">Focus Me</Button>
        <Button id="click-test">Click Me</Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Interactive button states for visual regression testing."
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("Test hover state", async () => {
      const hoverButton = canvas.getByRole("button", {
        name: "Hover Me"
      });
      await userEvent.hover(hoverButton);
      await new Promise(resolve => setTimeout(resolve, 100));
    });
    await step("Test focus state", async () => {
      const focusButton = canvas.getByRole("button", {
        name: "Focus Me"
      });
      focusButton.focus();
      await new Promise(resolve => setTimeout(resolve, 100));
    });
    await step("Test click state", async () => {
      const clickButton = canvas.getByRole("button", {
        name: "Click Me"
      });
      await userEvent.click(clickButton);
      await new Promise(resolve => setTimeout(resolve, 100));
    });
  }
}`,...b.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-4">
      <div className="flex flex-wrap gap-4 items-center">
        <Button size="xsmall">Very Small</Button>
        <Button size="xlarge">Very Large</Button>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button variant="home">Home</Button>
        <Button variant="home" disabled>
          Home Disabled
        </Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Edge cases for button visual regression testing."
      }
    }
  }
}`,...z.parameters?.docs?.source}}};const N=["Default","Hover","Focus","Active","Disabled","XSmall","Small","Medium","Large","XLarge","HomeVariant","WithIcon","LongText","SizeComparison","StateComparison","InteractiveStates","EdgeCases"];export{u as Active,i as Default,d as Disabled,z as EdgeCases,l as Focus,B as HomeVariant,c as Hover,b as InteractiveStates,v as Large,y as LongText,g as Medium,x as SizeComparison,p as Small,w as StateComparison,f as WithIcon,h as XLarge,m as XSmall,N as __namedExportsOrder,M as default};
