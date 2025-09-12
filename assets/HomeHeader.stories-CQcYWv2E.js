import{j as e}from"./iframe-CuE4cGjn.js";import{H as o}from"./HomeHeader-C5mktf6b.js";import"./preload-helper-BRgZCzxC.js";import"./Logo-D6mEeIcw.js";import"./link-iHgJEsZJ.js";import"./use-merged-ref-BFxfXqBX.js";import"./assetUtils-CRF98v2K.js";import"./MenuBar-DhAZyuAK.js";import"./MenuBarItem-kpisqPb_.js";import"./Button-zg0snvxu.js";import"./AvatarContainer-bYee8bYn.js";import"./Avatar-Ckb8NLJK.js";import"./HeaderTab-D8_5kxQA.js";import"./Header-DFZN5cyj.js";const v={title:"Components/HomeHeader",component:o,parameters:{layout:"fullscreen",docs:{description:{component:"The home page header with transparent background, HeaderTab wrapper, and responsive behavior. Features a toggle to switch between home header and regular header."}}},tags:["autodocs"]},a={args:{},parameters:{docs:{description:{story:"Use the Viewport toolbar to see how the home header adapts to different screen sizes. The header has a transparent background and uses HeaderTab for the left section."}}}},r={args:{},render:()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-[var(--color-surface-default-primary)] to-[var(--color-surface-default-secondary)]",children:[e.jsx(o,{}),e.jsx("main",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"Welcome to CommunityRule"}),e.jsx("p",{className:"text-xl text-[var(--color-content-default-secondary)] mb-8",children:"This demonstrates how the home header looks in a realistic home page context. The header maintains its transparent background and responsive behavior."}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[1,2,3].map(t=>e.jsxs("div",{className:"bg-[var(--color-surface-default-secondary)] p-6 rounded-lg border border-[var(--border-color-default-tertiary)]",children:[e.jsxs("h3",{className:"text-white font-semibold mb-3",children:["Feature ",t]}),e.jsx("p",{className:"text-[var(--color-content-default-secondary)]",children:"This is example content to show how the home header integrates with home page content."})]},t))})]})})]}),parameters:{docs:{description:{story:"The home header integrated into a full home page layout with gradient background to show the transparent header effect."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Use the Viewport toolbar to see how the home header adapts to different screen sizes. The header has a transparent background and uses HeaderTab for the left section."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="min-h-screen bg-gradient-to-b from-[var(--color-surface-default-primary)] to-[var(--color-surface-default-secondary)]">
      <HomeHeader />
      <main className="p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to CommunityRule
          </h1>
          <p className="text-xl text-[var(--color-content-default-secondary)] mb-8">
            This demonstrates how the home header looks in a realistic home page
            context. The header maintains its transparent background and
            responsive behavior.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => <div key={i} className="bg-[var(--color-surface-default-secondary)] p-6 rounded-lg border border-[var(--border-color-default-tertiary)]">
                <h3 className="text-white font-semibold mb-3">Feature {i}</h3>
                <p className="text-[var(--color-content-default-secondary)]">
                  This is example content to show how the home header integrates
                  with home page content.
                </p>
              </div>)}
          </div>
        </div>
      </main>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "The home header integrated into a full home page layout with gradient background to show the transparent header effect."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const w=["Default","InHomePageContext"];export{a as Default,r as InHomePageContext,w as __namedExportsOrder,v as default};
