(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{225:function(s,a,e){"use strict";e.r(a);var t=e(2),r=Object(t.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("article",[e("p",[s._v("This Guide assumes you are familiar with "),e("a",{attrs:{href:"https://vuejs.org/v2/guide/index.html"}},[s._v("Vue.js")]),s._v("\ncomponents and plugin system."),e("br"),s._v(" "),e("code",{pre:!0},[s._v("Vue.js")]),s._v(" 2.6 or greater and "),e("code",{pre:!0},[s._v("@vue/composition-api")]),s._v(" 1.0 or greater are required as peer dependencies.")]),s._v(" "),e("blockquote",[e("p",[s._v("Note: Applications must install "),e("code",{pre:!0},[s._v("Vue.use(VueCompositionApi)")]),s._v(" but have no requirement to use the composition style of programming.\nMaterial Components Web are not bundled and need to be installed."),e("br"),s._v("\nMaterial Icons and Fonts are not bundled and need to be fetched.")])]),s._v(" "),e("h2",[s._v("Quick Start")]),s._v(" "),e("h4",[s._v("Examples")]),s._v(" "),e("p",[s._v("There are examples of using "),e("code",{pre:!0},[s._v("vue-material-adapter")]),s._v(" both as a "),e("code",{pre:!0},[s._v("basic-vue-cli")]),s._v(" and a "),e("code",{pre:!0},[s._v("basic-webpack")]),s._v(" project "),e("a",{attrs:{href:"https://github.com/pgbross/vue-material-adapter/tree/master/examples"}},[s._v("examples")]),s._v(".")]),s._v(" "),e("h4",[s._v("Playground")]),s._v(" "),e("p",[s._v("See demo in the source distribution for examples of how vue-material-adapter can be used.")]),s._v(" "),e("h2",[s._v("Getting Serious")]),s._v(" "),e("p",[s._v("The distribution comes in a tree-shakeable ES (ESM) as well as the older AMD/CJS variants.")]),s._v(" "),e("h4",[s._v("Standalone plugin")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("distribution")]),s._v(" "),e("th",[s._v("env")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("dist/vue-material-adapter.amd.min.js")]),s._v(" "),e("td",[s._v("production")]),s._v(" "),e("td",[s._v("minified plugin (AMD)")])]),s._v(" "),e("tr",[e("td",[s._v("dist/vue-material-adapter.cjs.min.js")]),s._v(" "),e("td",[s._v("production")]),s._v(" "),e("td",[s._v("minified plugin (CommonJS)")])]),s._v(" "),e("tr",[e("td",[s._v("dist/vue-material-adapter.esm.js")]),s._v(" "),e("td",[s._v("production")]),s._v(" "),e("td",[s._v("tree shakeable ES(ESM)")])])])]),s._v(" "),e("h2",[s._v("Webpack/Rollup")]),s._v(" "),e("h3",[s._v("ESM Distribution")]),s._v(" "),e("blockquote",[e("p",[s._v("The following guide assumes you have a valid Vue.js/Webpack config.\nrefer to "),e("a",{attrs:{href:"https://github.com/vuejs-templates/webpack"}},[s._v("vuejs-templates/webpack")]),s._v(" for more info.")])]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("module")]),s._v(" "),e("th",[s._v("type")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("vue-material-adapter.esm.js")]),s._v(" "),e("td",[s._v("ESM")])])])]),s._v(" "),e("h4",[s._v("Install vue, @vue/composition-api, vue-material-adapter (and eventually vue-router).")]),s._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("npm install vue\nnpm install @vue/composition-api\nnpm install vue-router "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# optional")]),s._v("\nnpm install vue-material-adapter\n")])]),s._v(" "),e("h4",[s._v("Add Reset and Material Dependencies to HTML template")]),s._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- index.html template --\x3e")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- import reset material icons, fonts and vue-material-adapter stylesheets --\x3e")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://fonts.googleapis.com/icon?family=Material+Icons"')]),s._v("\n  />")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://fonts.googleapis.com/css?family=Roboto:300,400,500"')]),s._v("\n  />")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500"')]),s._v("\n  />")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- built files will be auto injected --\x3e")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n")])]),s._v(" "),e("h3",[s._v("Create your own SASS Theme")]),s._v(" "),e("blockquote",[e("p",[s._v("Material Components styles come as highly themable SASS framework. In order to be able to theme properly\nand avoid any duplicate/ordering style issues in the bundle, we recommend managing styles globally.\nrefer to the "),e("a",{attrs:{href:"https://material.io/components/web/docs/theming/"}},[s._v("MDC Theming Guide")]),s._v("\nfor more.")])]),s._v(" "),e("p",[s._v("Install Material Components SASS as a dependency.")]),s._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("npm install material-components-web --save\n")])]),s._v(" "),e("p",[s._v("Configure Webpack with sass-loader and make sure sass modules can be resolved.")]),s._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// sass loader config")]),s._v("\n  {\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loader")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sass-loader'")]),s._v(",\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": {\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sourceMap")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("includePaths")]),s._v(": [path.resolve(__dirname,"),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'node_modules'")]),s._v(")],\n    },\n  },\n")])]),s._v(" "),e("h3",[s._v("Building from Sources")]),s._v(" "),e("blockquote",[e("p",[s._v("You may want to optimize your build and leverage the source distribution.")])]),s._v(" "),e("h4",[s._v("Make sure @material imports are transpiled")]),s._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// babel loader config")]),s._v("\n  {\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("test")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/\\.js$/")]),s._v(",\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loader")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'babel-loader'")]),s._v(",\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("include")]),s._v(": [\n      path.resolve(__dirname, "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'node_modules/@material'")]),s._v(")\n    ]\n  }\n")])]),s._v(" "),e("h4",[s._v("Make sure sass modules can be imported")]),s._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// sass loader config")]),s._v("\n  {\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loader")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sass-loader'")]),s._v(",\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": {\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("includePaths")]),s._v(": [path.resolve(__dirname,"),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'node_modules'")]),s._v(")],\n    },\n  },\n")])]),s._v(" "),e("h4",[s._v("Full build")]),s._v(" "),e("p",[s._v("See "),e("code",{pre:!0},[s._v("basic-webpack")]),s._v(" project "),e("a",{attrs:{href:"https://github.com/pgbross/vue-material-adapter/tree/master/examples"}},[s._v("examples")]),s._v(".")]),s._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-scss"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* theme.scss */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$mdc-theme-primary")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#212121")]),s._v(";\n"),e("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$mdc-theme-accent")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#41b883")]),s._v(";\n"),e("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$mdc-theme-background")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#fff")]),s._v(";\n\n@import 'vue-material-adapter/index"),e("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".scss")]),s._v("';\n")])]),s._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// main.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`./theme.scss`")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" VueMaterialAdapter "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-material-adapter'")]),s._v("\nVue.use(VueMaterialAdapter)\n")])])])}],!1,null,null,null);a.default=r.exports}}]);
//# sourceMappingURL=51.7282a31f11e8ae4ee2fe.js.map