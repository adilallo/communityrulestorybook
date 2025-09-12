import{j as o}from"./iframe-CuE4cGjn.js";import{H as b}from"./Header-DFZN5cyj.js";import{w as k,u as s}from"./index-ChhZWroJ.js";import"./preload-helper-BRgZCzxC.js";import"./Logo-D6mEeIcw.js";import"./link-iHgJEsZJ.js";import"./use-merged-ref-BFxfXqBX.js";import"./assetUtils-CRF98v2K.js";import"./MenuBar-DhAZyuAK.js";import"./MenuBarItem-kpisqPb_.js";import"./Button-zg0snvxu.js";import"./AvatarContainer-bYee8bYn.js";import"./Avatar-Ckb8NLJK.js";const V={title:"Components/Header/Responsive",component:b,parameters:{chromatic:{viewports:[320,360,480,640,768,1024,1280,1440,1920],delay:200,modes:{light:{},dark:{colorScheme:"dark"}}},viewport:{viewports:{xs:{name:"Extra Small (xs)",styles:{width:"360px",height:"700px"}},sm:{name:"Small (sm)",styles:{width:"640px",height:"700px"}},md:{name:"Medium (md)",styles:{width:"768px",height:"700px"}},lg:{name:"Large (lg)",styles:{width:"1024px",height:"700px"}},xl:{name:"Extra Large (xl)",styles:{width:"1280px",height:"700px"}},xxl:{name:"2XL (xxl)",styles:{width:"1440px",height:"700px"}},full:{name:"Full HD (full)",styles:{width:"1920px",height:"700px"}}}}},argTypes:{onToggle:{action:"toggled"}}},c={args:{onToggle:()=>console.log("Navigation toggled")},parameters:{docs:{description:{story:"Header component at different breakpoints. Chromatic will capture screenshots at 360px, 640px, 768px, 1024px, and 1280px viewport widths to test responsive behavior."}}}},m={args:{onToggle:()=>console.log("Navigation toggled")},parameters:{viewport:{defaultViewport:"xs"},docs:{description:{story:"Header at extra small breakpoint (360px). Navigation items are moved to the right section."}}}},g={args:{onToggle:()=>console.log("Navigation toggled")},parameters:{viewport:{defaultViewport:"sm"},docs:{description:{story:"Header at small breakpoint (640px). All navigation items are grouped together in the center."}}}},u={args:{onToggle:()=>console.log("Navigation toggled")},parameters:{viewport:{defaultViewport:"md"},docs:{description:{story:"Header at medium breakpoint (768px). Navigation items are in the center, login and create rule buttons on the right."}}}},d={args:{onToggle:()=>console.log("Navigation toggled")},parameters:{viewport:{defaultViewport:"lg"},docs:{description:{story:"Header at large breakpoint (1024px). Full navigation layout with larger elements."}}}},p={args:{onToggle:()=>console.log("Navigation toggled")},parameters:{viewport:{defaultViewport:"xl"},docs:{description:{story:"Header at extra large breakpoint (1280px). Maximum size layout with largest elements."}}}},v={args:{onToggle:()=>console.log("Navigation toggled")},parameters:{docs:{description:{story:"Interactive header for testing user interactions. Check the Actions panel to see triggered events."}}},play:async({canvasElement:l,step:n})=>{const e=k(l);await n("Click navigation items",async()=>{const i=e.getByRole("menuitem",{name:/Use cases/i});await s.click(i);const r=e.getByRole("menuitem",{name:/Learn/i});await s.click(r);const t=e.getByRole("menuitem",{name:/About/i});await s.click(t)}),await n("Click authentication elements",async()=>{const i=e.getByRole("menuitem",{name:/log in to your account/i});await s.click(i);const r=e.getByRole("button",{name:/create a new rule with avatar decoration/i});await s.click(r)})}},h={args:{onToggle:()=>console.log("Navigation toggled")},parameters:{docs:{description:{story:"Header with hover states visible. This story captures the visual appearance when elements are hovered."}}},play:async({canvasElement:l,step:n})=>{const e=k(l);await n("Hover over navigation items",async()=>{const i=e.getByRole("menuitem",{name:/Use cases/i});await s.hover(i),await new Promise(a=>setTimeout(a,100));const r=e.getByRole("menuitem",{name:/Learn/i});await s.hover(r),await new Promise(a=>setTimeout(a,100));const t=e.getByRole("menuitem",{name:/About/i});await s.hover(t),await new Promise(a=>setTimeout(a,100))}),await n("Hover over authentication elements",async()=>{const i=e.getByRole("menuitem",{name:/log in to your account/i});await s.hover(i),await new Promise(t=>setTimeout(t,100));const r=e.getByRole("button",{name:/create a new rule with avatar decoration/i});await s.hover(r),await new Promise(t=>setTimeout(t,100))})}},w={args:{onToggle:()=>console.log("Navigation toggled")},parameters:{docs:{description:{story:"Header with focus states visible. This story captures the visual appearance when elements are focused."}}},play:async({canvasElement:l,step:n})=>{const e=k(l);await n("Focus on navigation items",async()=>{e.getByRole("menuitem",{name:/Use cases/i}).focus(),await new Promise(a=>setTimeout(a,100)),e.getByRole("menuitem",{name:/Learn/i}).focus(),await new Promise(a=>setTimeout(a,100)),e.getByRole("menuitem",{name:/About/i}).focus(),await new Promise(a=>setTimeout(a,100))}),await n("Focus on authentication elements",async()=>{e.getByRole("menuitem",{name:/log in to your account/i}).focus(),await new Promise(t=>setTimeout(t,100)),e.getByRole("button",{name:/create a new rule with avatar decoration/i}).focus(),await new Promise(t=>setTimeout(t,100))})}},y={args:{onToggle:()=>console.log("Navigation toggled")},render:()=>o.jsxs("div",{className:"min-h-screen bg-[var(--color-surface-default-primary)]",children:[o.jsx(b,{onToggle:()=>console.log("Navigation toggled")}),o.jsx("main",{className:"p-8",children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Header with Long Content"}),o.jsx("p",{className:"text-white mb-4",children:"This story tests how the header looks with a lot of content below it. This helps ensure the header maintains its visual integrity in real-world scenarios."}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Array.from({length:12},(l,n)=>o.jsxs("div",{className:"bg-[var(--color-surface-default-secondary)] p-4 rounded-lg",children:[o.jsxs("h3",{className:"text-white font-semibold mb-2",children:["Content Block ",n+1]}),o.jsx("p",{className:"text-[var(--color-content-default-secondary)] text-sm",children:"This is example content to show how the header integrates with page content. This block contains enough text to test layout behavior."})]},n))})]})})]}),parameters:{docs:{description:{story:"Header with long content below to test visual integration and layout stability."}}}},x={args:{onToggle:()=>console.log("Navigation toggled")},parameters:{viewport:{defaultViewport:"xs"},docs:{description:{story:"Header at the smallest breakpoint to test edge case behavior and ensure no layout issues."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onToggle: () => console.log("Navigation toggled")
  },
  parameters: {
    docs: {
      description: {
        story: "Header component at different breakpoints. Chromatic will capture screenshots at 360px, 640px, 768px, 1024px, and 1280px viewport widths to test responsive behavior."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    onToggle: () => console.log("Navigation toggled")
  },
  parameters: {
    viewport: {
      defaultViewport: "xs"
    },
    docs: {
      description: {
        story: "Header at extra small breakpoint (360px). Navigation items are moved to the right section."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onToggle: () => console.log("Navigation toggled")
  },
  parameters: {
    viewport: {
      defaultViewport: "sm"
    },
    docs: {
      description: {
        story: "Header at small breakpoint (640px). All navigation items are grouped together in the center."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onToggle: () => console.log("Navigation toggled")
  },
  parameters: {
    viewport: {
      defaultViewport: "md"
    },
    docs: {
      description: {
        story: "Header at medium breakpoint (768px). Navigation items are in the center, login and create rule buttons on the right."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    onToggle: () => console.log("Navigation toggled")
  },
  parameters: {
    viewport: {
      defaultViewport: "lg"
    },
    docs: {
      description: {
        story: "Header at large breakpoint (1024px). Full navigation layout with larger elements."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onToggle: () => console.log("Navigation toggled")
  },
  parameters: {
    viewport: {
      defaultViewport: "xl"
    },
    docs: {
      description: {
        story: "Header at extra large breakpoint (1280px). Maximum size layout with largest elements."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    onToggle: () => console.log("Navigation toggled")
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive header for testing user interactions. Check the Actions panel to see triggered events."
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("Click navigation items", async () => {
      const useCasesLink = canvas.getByRole("menuitem", {
        name: /Use cases/i
      });
      await userEvent.click(useCasesLink);
      const learnLink = canvas.getByRole("menuitem", {
        name: /Learn/i
      });
      await userEvent.click(learnLink);
      const aboutLink = canvas.getByRole("menuitem", {
        name: /About/i
      });
      await userEvent.click(aboutLink);
    });
    await step("Click authentication elements", async () => {
      const loginLink = canvas.getByRole("menuitem", {
        name: /log in to your account/i
      });
      await userEvent.click(loginLink);
      const createRuleButton = canvas.getByRole("button", {
        name: /create a new rule with avatar decoration/i
      });
      await userEvent.click(createRuleButton);
    });
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    onToggle: () => console.log("Navigation toggled")
  },
  parameters: {
    docs: {
      description: {
        story: "Header with hover states visible. This story captures the visual appearance when elements are hovered."
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("Hover over navigation items", async () => {
      const useCasesLink = canvas.getByRole("menuitem", {
        name: /Use cases/i
      });
      await userEvent.hover(useCasesLink);
      // Wait for hover state to be visible
      await new Promise(resolve => setTimeout(resolve, 100));
      const learnLink = canvas.getByRole("menuitem", {
        name: /Learn/i
      });
      await userEvent.hover(learnLink);
      await new Promise(resolve => setTimeout(resolve, 100));
      const aboutLink = canvas.getByRole("menuitem", {
        name: /About/i
      });
      await userEvent.hover(aboutLink);
      await new Promise(resolve => setTimeout(resolve, 100));
    });
    await step("Hover over authentication elements", async () => {
      const loginLink = canvas.getByRole("menuitem", {
        name: /log in to your account/i
      });
      await userEvent.hover(loginLink);
      await new Promise(resolve => setTimeout(resolve, 100));
      const createRuleButton = canvas.getByRole("button", {
        name: /create a new rule with avatar decoration/i
      });
      await userEvent.hover(createRuleButton);
      await new Promise(resolve => setTimeout(resolve, 100));
    });
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    onToggle: () => console.log("Navigation toggled")
  },
  parameters: {
    docs: {
      description: {
        story: "Header with focus states visible. This story captures the visual appearance when elements are focused."
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("Focus on navigation items", async () => {
      const useCasesLink = canvas.getByRole("menuitem", {
        name: /Use cases/i
      });
      useCasesLink.focus();
      await new Promise(resolve => setTimeout(resolve, 100));
      const learnLink = canvas.getByRole("menuitem", {
        name: /Learn/i
      });
      learnLink.focus();
      await new Promise(resolve => setTimeout(resolve, 100));
      const aboutLink = canvas.getByRole("menuitem", {
        name: /About/i
      });
      aboutLink.focus();
      await new Promise(resolve => setTimeout(resolve, 100));
    });
    await step("Focus on authentication elements", async () => {
      const loginLink = canvas.getByRole("menuitem", {
        name: /log in to your account/i
      });
      loginLink.focus();
      await new Promise(resolve => setTimeout(resolve, 100));
      const createRuleButton = canvas.getByRole("button", {
        name: /create a new rule with avatar decoration/i
      });
      createRuleButton.focus();
      await new Promise(resolve => setTimeout(resolve, 100));
    });
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    onToggle: () => console.log("Navigation toggled")
  },
  render: () => <div className="min-h-screen bg-[var(--color-surface-default-primary)]">
      <Header onToggle={() => console.log("Navigation toggled")} />
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-4">
            Header with Long Content
          </h1>
          <p className="text-white mb-4">
            This story tests how the header looks with a lot of content below
            it. This helps ensure the header maintains its visual integrity in
            real-world scenarios.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({
            length: 12
          }, (_, i) => <div key={i} className="bg-[var(--color-surface-default-secondary)] p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">
                  Content Block {i + 1}
                </h3>
                <p className="text-[var(--color-content-default-secondary)] text-sm">
                  This is example content to show how the header integrates with
                  page content. This block contains enough text to test layout
                  behavior.
                </p>
              </div>)}
          </div>
        </div>
      </main>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Header with long content below to test visual integration and layout stability."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    onToggle: () => console.log("Navigation toggled")
  },
  parameters: {
    viewport: {
      defaultViewport: "xs"
    },
    docs: {
      description: {
        story: "Header at the smallest breakpoint to test edge case behavior and ensure no layout issues."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const F=["Default","ExtraSmall","Small","Medium","Large","ExtraLarge","Interactive","HoverStates","FocusStates","WithLongContent","EdgeCases"];export{c as Default,x as EdgeCases,p as ExtraLarge,m as ExtraSmall,w as FocusStates,h as HoverStates,v as Interactive,d as Large,u as Medium,g as Small,y as WithLongContent,F as __namedExportsOrder,V as default};
