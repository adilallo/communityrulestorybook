import{j as e}from"./iframe-DU8yCxYn.js";import{F as a}from"./Footer-EE-pTkgC.js";import"./preload-helper-D9Z9MdNV.js";import"./Logo-3BHf23sv.js";import"./link-BnVeYtom.js";import"./use-merged-ref-BH-U_-Vd.js";import"./assetUtils-CRF98v2K.js";const p={title:"Components/Footer",component:a,parameters:{layout:"fullscreen",docs:{description:{component:"The main footer with responsive layout, branding section, navigation links, and legal information. Features different logo sizes and layout changes across breakpoints."}}},tags:["autodocs"]},t={args:{},parameters:{docs:{description:{story:"Use the Viewport toolbar to see how the footer adapts to different screen sizes. The layout changes from stacked to side-by-side and logo sizes adjust."}}}},o={args:{},render:()=>e.jsxs("div",{className:"min-h-screen bg-[var(--color-surface-default-primary)]",children:[e.jsx("main",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Example Page Content"}),e.jsx("p",{className:"text-white mb-4",children:"This demonstrates how the footer looks in a realistic page context. The footer maintains its responsive behavior while providing navigation and branding information."}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[1,2,3,4,5,6].map(s=>e.jsxs("div",{className:"bg-[var(--color-surface-default-secondary)] p-4 rounded-lg",children:[e.jsxs("h3",{className:"text-white font-semibold mb-2",children:["Content Block ",s]}),e.jsx("p",{className:"text-[var(--color-content-default-secondary)] text-sm",children:"This is example content to show how the footer integrates with page content."})]},s))})]})}),e.jsx(a,{})]}),parameters:{docs:{description:{story:"The footer integrated into a full page layout to show how it works in context."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Use the Viewport toolbar to see how the footer adapts to different screen sizes. The layout changes from stacked to side-by-side and logo sizes adjust."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="min-h-screen bg-[var(--color-surface-default-primary)]">
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-4">
            Example Page Content
          </h1>
          <p className="text-white mb-4">
            This demonstrates how the footer looks in a realistic page context.
            The footer maintains its responsive behavior while providing
            navigation and branding information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="bg-[var(--color-surface-default-secondary)] p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">
                  Content Block {i}
                </h3>
                <p className="text-[var(--color-content-default-secondary)] text-sm">
                  This is example content to show how the footer integrates with
                  page content.
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
        story: "The footer integrated into a full page layout to show how it works in context."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const h=["Default","InPageContext"];export{t as Default,o as InPageContext,h as __namedExportsOrder,p as default};
