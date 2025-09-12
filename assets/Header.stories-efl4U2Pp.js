import{j as e}from"./iframe-CuE4cGjn.js";import{H as o}from"./Header-DFZN5cyj.js";import"./preload-helper-BRgZCzxC.js";import"./Logo-D6mEeIcw.js";import"./link-iHgJEsZJ.js";import"./use-merged-ref-BFxfXqBX.js";import"./assetUtils-CRF98v2K.js";import"./MenuBar-DhAZyuAK.js";import"./MenuBarItem-kpisqPb_.js";import"./Button-zg0snvxu.js";import"./AvatarContainer-bYee8bYn.js";import"./Avatar-Ckb8NLJK.js";const u={title:"Components/Header",component:o,parameters:{layout:"fullscreen",docs:{description:{component:"The main navigation header with responsive behavior across different breakpoints."}}},argTypes:{onToggle:{action:"toggled"}},tags:["autodocs"]},t={args:{},parameters:{docs:{description:{story:"Use the Viewport toolbar to change the iframe width and see how the header adapts to different screen sizes. The header shows different layouts for mobile, tablet, and desktop breakpoints."}}}},a={args:{},render:()=>e.jsxs("div",{className:"min-h-screen bg-[var(--color-surface-default-primary)]",children:[e.jsx(o,{}),e.jsx("main",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Example Page Content"}),e.jsx("p",{className:"text-white mb-4",children:"This demonstrates how the header looks in a realistic page context. The header maintains its responsive behavior while providing navigation for the page content."}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[1,2,3,4,5,6].map(s=>e.jsxs("div",{className:"bg-[var(--color-surface-default-secondary)] p-4 rounded-lg",children:[e.jsxs("h3",{className:"text-white font-semibold mb-2",children:["Content Block ",s]}),e.jsx("p",{className:"text-[var(--color-content-default-secondary)] text-sm",children:"This is example content to show how the header integrates with page content."})]},s))})]})})]}),parameters:{docs:{description:{story:"The header integrated into a full page layout to show how it works in context."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Use the Viewport toolbar to change the iframe width and see how the header adapts to different screen sizes. The header shows different layouts for mobile, tablet, and desktop breakpoints."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="min-h-screen bg-[var(--color-surface-default-primary)]">
      <Header />
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-4">
            Example Page Content
          </h1>
          <p className="text-white mb-4">
            This demonstrates how the header looks in a realistic page context.
            The header maintains its responsive behavior while providing
            navigation for the page content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="bg-[var(--color-surface-default-secondary)] p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">
                  Content Block {i}
                </h3>
                <p className="text-[var(--color-content-default-secondary)] text-sm">
                  This is example content to show how the header integrates with
                  page content.
                </p>
              </div>)}
          </div>
        </div>
      </main>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "The header integrated into a full page layout to show how it works in context."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const w=["Default","InPageContext"];export{t as Default,a as InPageContext,w as __namedExportsOrder,u as default};
