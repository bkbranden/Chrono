
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/brandenkim/FunProjects/Chrono/.cache/dev-404-page.js")),
  "component---src-pages-about-tsx": preferDefault(require("/Users/brandenkim/FunProjects/Chrono/src/pages/about.tsx")),
  "component---src-pages-contact-tsx": preferDefault(require("/Users/brandenkim/FunProjects/Chrono/src/pages/contact.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/brandenkim/FunProjects/Chrono/src/pages/index.tsx"))
}

