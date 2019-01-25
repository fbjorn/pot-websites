const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("B:\\DOCS\\DOKUMENTIT\\BUILDS\\developer.oftrust.net\\gatsby-pot-dev\\src\\templates\\blog-template.js"))),
  "component---src-templates-page-template-js": hot(preferDefault(require("B:\\DOCS\\DOKUMENTIT\\BUILDS\\developer.oftrust.net\\gatsby-pot-dev\\src\\templates\\page-template.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("B:\\DOCS\\DOKUMENTIT\\BUILDS\\developer.oftrust.net\\gatsby-pot-dev\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("B:\\DOCS\\DOKUMENTIT\\BUILDS\\developer.oftrust.net\\gatsby-pot-dev\\src\\pages\\404.js"))),
  "component---src-pages-apis-js": hot(preferDefault(require("B:\\DOCS\\DOKUMENTIT\\BUILDS\\developer.oftrust.net\\gatsby-pot-dev\\src\\pages\\apis.js"))),
  "component---src-pages-blogs-js": hot(preferDefault(require("B:\\DOCS\\DOKUMENTIT\\BUILDS\\developer.oftrust.net\\gatsby-pot-dev\\src\\pages\\blogs.js"))),
  "component---src-pages-developers-js": hot(preferDefault(require("B:\\DOCS\\DOKUMENTIT\\BUILDS\\developer.oftrust.net\\gatsby-pot-dev\\src\\pages\\developers.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("B:\\DOCS\\DOKUMENTIT\\BUILDS\\developer.oftrust.net\\gatsby-pot-dev\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("B:\\DOCS\\DOKUMENTIT\\BUILDS\\developer.oftrust.net\\gatsby-pot-dev\\src\\pages\\page-2.js")))
}

