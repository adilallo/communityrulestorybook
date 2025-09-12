import{j as s}from"./iframe-CuE4cGjn.js";import{F as b}from"./Footer-C_dydkk1.js";import{w as f,u as t}from"./index-ChhZWroJ.js";import"./preload-helper-BRgZCzxC.js";import"./Logo-D6mEeIcw.js";import"./link-iHgJEsZJ.js";import"./use-merged-ref-BFxfXqBX.js";import"./assetUtils-CRF98v2K.js";const V={title:"Components/Footer/Responsive",component:b,parameters:{chromatic:{viewports:[320,360,480,640,768,1024,1280,1440,1920],delay:200,modes:{light:{},dark:{colorScheme:"dark"}}},viewport:{viewports:{xs:{name:"Extra Small (xs)",styles:{width:"360px",height:"700px"}},sm:{name:"Small (sm)",styles:{width:"640px",height:"700px"}},md:{name:"Medium (md)",styles:{width:"768px",height:"700px"}},lg:{name:"Large (lg)",styles:{width:"1024px",height:"700px"}},xl:{name:"Extra Large (xl)",styles:{width:"1280px",height:"700px"}},xxl:{name:"2XL (xxl)",styles:{width:"1440px",height:"700px"}},full:{name:"Full HD (full)",styles:{width:"1920px",height:"700px"}}}}}},c={parameters:{docs:{description:{story:"Footer component at different breakpoints. Chromatic will capture screenshots at 320px, 360px, 480px, 640px, 768px, 1024px, 1280px, 1440px, and 1920px viewport widths to test responsive behavior."}}}},p={parameters:{viewport:{defaultViewport:"xs"},docs:{description:{story:"Footer at extra small breakpoint (360px). Tests mobile layout and stacking behavior."}}}},m={parameters:{viewport:{defaultViewport:"sm"},docs:{description:{story:"Footer at small breakpoint (640px). Tests tablet layout and responsive behavior."}}}},d={parameters:{viewport:{defaultViewport:"md"},docs:{description:{story:"Footer at medium breakpoint (768px). Tests small desktop layout."}}}},u={parameters:{viewport:{defaultViewport:"lg"},docs:{description:{story:"Footer at large breakpoint (1024px). Tests desktop layout."}}}},v={parameters:{viewport:{defaultViewport:"xl"},docs:{description:{story:"Footer at extra large breakpoint (1280px). Tests large desktop layout."}}}},w={parameters:{viewport:{defaultViewport:"xxl"},docs:{description:{story:"Footer at 2XL breakpoint (1440px). Tests very large desktop layout."}}}},k={parameters:{viewport:{defaultViewport:"full"},docs:{description:{story:"Footer at Full HD breakpoint (1920px). Tests maximum desktop layout."}}}},h={parameters:{docs:{description:{story:"Interactive footer for testing user interactions. Check the Actions panel to see triggered events."}}},play:async({canvasElement:l,step:a})=>{const e=f(l);await a("Click footer links",async()=>{const o=e.getByRole("link",{name:/use cases/i});await t.click(o);const n=e.getByRole("link",{name:/learn/i});await t.click(n);const r=e.getByRole("link",{name:/about/i});await t.click(r);const i=e.getByRole("link",{name:/privacy policy/i});await t.click(i);const L=e.getByRole("link",{name:/terms of service/i});await t.click(L)}),await a("Click social media links",async()=>{const o=e.getByRole("link",{name:/follow us on bluesky/i});await t.click(o);const n=e.getByRole("link",{name:/follow us on gitlab/i});await t.click(n)})}},y={parameters:{docs:{description:{story:"Footer with hover states visible. This story captures the visual appearance when elements are hovered."}}},play:async({canvasElement:l,step:a})=>{const e=f(l);await a("Hover over footer links",async()=>{const o=e.getByRole("link",{name:/use cases/i});await t.hover(o),await new Promise(i=>setTimeout(i,100));const n=e.getByRole("link",{name:/learn/i});await t.hover(n),await new Promise(i=>setTimeout(i,100));const r=e.getByRole("link",{name:/about/i});await t.hover(r),await new Promise(i=>setTimeout(i,100))}),await a("Hover over social media links",async()=>{const o=e.getByRole("link",{name:/follow us on bluesky/i});await t.hover(o),await new Promise(r=>setTimeout(r,100));const n=e.getByRole("link",{name:/follow us on gitlab/i});await t.hover(n),await new Promise(r=>setTimeout(r,100))})}},g={render:()=>s.jsxs("div",{className:"min-h-screen bg-[var(--color-surface-default-primary)]",children:[s.jsx("main",{className:"p-8",children:s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Footer with Long Content Above"}),s.jsx("p",{className:"text-white mb-4",children:"This story tests how the footer looks with a lot of content above it. This helps ensure the footer maintains its visual integrity in real-world scenarios."}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Array.from({length:20},(l,a)=>s.jsxs("div",{className:"bg-[var(--color-surface-default-secondary)] p-4 rounded-lg",children:[s.jsxs("h3",{className:"text-white font-semibold mb-2",children:["Content Block ",a+1]}),s.jsx("p",{className:"text-[var(--color-content-default-secondary)] text-sm",children:"This is example content to show how the footer integrates with page content. This block contains enough text to test layout behavior."})]},a))})]})}),s.jsx(b,{})]}),parameters:{docs:{description:{story:"Footer with long content above to test visual integration and layout stability."}}}},x={parameters:{viewport:{defaultViewport:"xs"},docs:{description:{story:"Footer at the smallest breakpoint to test edge case behavior and ensure no layout issues."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Footer component at different breakpoints. Chromatic will capture screenshots at 320px, 360px, 480px, 640px, 768px, 1024px, 1280px, 1440px, and 1920px viewport widths to test responsive behavior."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "xs"
    },
    docs: {
      description: {
        story: "Footer at extra small breakpoint (360px). Tests mobile layout and stacking behavior."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "sm"
    },
    docs: {
      description: {
        story: "Footer at small breakpoint (640px). Tests tablet layout and responsive behavior."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "md"
    },
    docs: {
      description: {
        story: "Footer at medium breakpoint (768px). Tests small desktop layout."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "lg"
    },
    docs: {
      description: {
        story: "Footer at large breakpoint (1024px). Tests desktop layout."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "xl"
    },
    docs: {
      description: {
        story: "Footer at extra large breakpoint (1280px). Tests large desktop layout."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "xxl"
    },
    docs: {
      description: {
        story: "Footer at 2XL breakpoint (1440px). Tests very large desktop layout."
      }
    }
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "full"
    },
    docs: {
      description: {
        story: "Footer at Full HD breakpoint (1920px). Tests maximum desktop layout."
      }
    }
  }
}`,...k.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Interactive footer for testing user interactions. Check the Actions panel to see triggered events."
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("Click footer links", async () => {
      const useCasesLink = canvas.getByRole("link", {
        name: /use cases/i
      });
      await userEvent.click(useCasesLink);
      const learnLink = canvas.getByRole("link", {
        name: /learn/i
      });
      await userEvent.click(learnLink);
      const aboutLink = canvas.getByRole("link", {
        name: /about/i
      });
      await userEvent.click(aboutLink);
      const privacyLink = canvas.getByRole("link", {
        name: /privacy policy/i
      });
      await userEvent.click(privacyLink);
      const termsLink = canvas.getByRole("link", {
        name: /terms of service/i
      });
      await userEvent.click(termsLink);
    });
    await step("Click social media links", async () => {
      const blueskyLink = canvas.getByRole("link", {
        name: /follow us on bluesky/i
      });
      await userEvent.click(blueskyLink);
      const gitlabLink = canvas.getByRole("link", {
        name: /follow us on gitlab/i
      });
      await userEvent.click(gitlabLink);
    });
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Footer with hover states visible. This story captures the visual appearance when elements are hovered."
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("Hover over footer links", async () => {
      const useCasesLink = canvas.getByRole("link", {
        name: /use cases/i
      });
      await userEvent.hover(useCasesLink);
      await new Promise(resolve => setTimeout(resolve, 100));
      const learnLink = canvas.getByRole("link", {
        name: /learn/i
      });
      await userEvent.hover(learnLink);
      await new Promise(resolve => setTimeout(resolve, 100));
      const aboutLink = canvas.getByRole("link", {
        name: /about/i
      });
      await userEvent.hover(aboutLink);
      await new Promise(resolve => setTimeout(resolve, 100));
    });
    await step("Hover over social media links", async () => {
      const blueskyLink = canvas.getByRole("link", {
        name: /follow us on bluesky/i
      });
      await userEvent.hover(blueskyLink);
      await new Promise(resolve => setTimeout(resolve, 100));
      const gitlabLink = canvas.getByRole("link", {
        name: /follow us on gitlab/i
      });
      await userEvent.hover(gitlabLink);
      await new Promise(resolve => setTimeout(resolve, 100));
    });
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-[var(--color-surface-default-primary)]">
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-4">
            Footer with Long Content Above
          </h1>
          <p className="text-white mb-4">
            This story tests how the footer looks with a lot of content above
            it. This helps ensure the footer maintains its visual integrity in
            real-world scenarios.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({
            length: 20
          }, (_, i) => <div key={i} className="bg-[var(--color-surface-default-secondary)] p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">
                  Content Block {i + 1}
                </h3>
                <p className="text-[var(--color-content-default-secondary)] text-sm">
                  This is example content to show how the footer integrates with
                  page content. This block contains enough text to test layout
                  behavior.
                </p>
              </div>)}
          </div>
        </div>
      </main>
      <Footer />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Footer with long content above to test visual integration and layout stability."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "xs"
    },
    docs: {
      description: {
        story: "Footer at the smallest breakpoint to test edge case behavior and ensure no layout issues."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const j=["Default","ExtraSmall","Small","Medium","Large","ExtraLarge","TwoXL","FullHD","Interactive","HoverStates","WithLongContent","EdgeCases"];export{c as Default,x as EdgeCases,v as ExtraLarge,p as ExtraSmall,k as FullHD,y as HoverStates,h as Interactive,u as Large,d as Medium,m as Small,w as TwoXL,g as WithLongContent,j as __namedExportsOrder,V as default};
