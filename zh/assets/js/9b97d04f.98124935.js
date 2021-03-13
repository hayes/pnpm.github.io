(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{269:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t(3),r=t(8),a=(t(0),t(394)),i={id:"symlinked-node-modules-structure",title:"Symlinked `node_modules` structure"},s={unversionedId:"symlinked-node-modules-structure",id:"version-5.x/symlinked-node-modules-structure",isDocsHomePage:!1,title:"Symlinked `node_modules` structure",description:"This article only describes how pnpm's node_modules are structured when there are no packages with peer dependencies. For the more complex scenario of dependencies with peers, see how peers are resolved.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/symlinked-node-modules-structure.md",slug:"/symlinked-node-modules-structure",permalink:"/zh/symlinked-node-modules-structure",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"Limitations",permalink:"/zh/limitations"},next:{title:"How peers are resolved",permalink:"/zh/how-peers-are-resolved"}},l=[],d={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This article only describes how pnpm's ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," are structured when there are no packages with peer dependencies. For the more complex scenario of dependencies with peers, see ",Object(a.b)("a",{parentName:"p",href:"/zh/how-peers-are-resolved"},"how peers are resolved"),"."))),Object(a.b)("p",null,"pnpm's ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," layout uses symbolic links to create a nested structure of dependencies."),Object(a.b)("p",null,"Every file of every package inside ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," is a hard link to the content-addressable store. Let's say you install ",Object(a.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," that depends on ",Object(a.b)("inlineCode",{parentName:"p"},"bar@1.0.0"),". pnpm will hard link both packages to ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2502           \u251c\u2500\u2500 index.js\n    \u2502           \u2514\u2500\u2500 package.json\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u2514\u2500\u2500 foo -> <store>/foo\n                \u251c\u2500\u2500 index.js\n                \u2514\u2500\u2500 package.json\n")),Object(a.b)("p",null,'These are the only "real" files in ',Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),". Once all the packages are hard linked to ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),", symbolic links are created to build the nested dependency graph structure."),Object(a.b)("p",null,"As you might have noticed, both packages are hard linked into a subfolder inside a ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," folder (",Object(a.b)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/foo"),"). This is needed to:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"allow packages to import themselves.")," ",Object(a.b)("inlineCode",{parentName:"li"},"foo")," should be able to ",Object(a.b)("inlineCode",{parentName:"li"},"require('foo/package.json')")," or ",Object(a.b)("inlineCode",{parentName:"li"},'import * as package from "foo/package.json"'),"."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"avoid circular symlinks.")," Dependencies of packages are placed in the same folder in which the dependent packages are. For Node.js it doesn't make a difference whether dependencies are inside the package's ",Object(a.b)("inlineCode",{parentName:"li"},"node_modules")," or in any other ",Object(a.b)("inlineCode",{parentName:"li"},"node_modules")," in the parent directories.")),Object(a.b)("p",null,"The next stage of installation is symlinking dependencies. ",Object(a.b)("inlineCode",{parentName:"p"},"bar")," is going to be symlinked to the ",Object(a.b)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules")," folder:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u251c\u2500\u2500 foo -> <store>/foo\n            \u2514\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n")),Object(a.b)("p",null,"Next, direct dependencies are handled. ",Object(a.b)("inlineCode",{parentName:"p"},"foo")," is going to be symlinked into the root ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," folder because ",Object(a.b)("inlineCode",{parentName:"p"},"foo")," is a dependency of the project:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u251c\u2500\u2500 foo -> ./.pnpm/foo@1.0.0/node_modules/foo\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u251c\u2500\u2500 foo -> <store>/foo\n            \u2514\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n")),Object(a.b)("p",null,"This is a very simple example. However, the layout will maintain this structure regardless of the number of dependencies and the depth of the dependency graph."),Object(a.b)("p",null,"Let's add ",Object(a.b)("inlineCode",{parentName:"p"},"qar@2.0.0")," as a dependency of ",Object(a.b)("inlineCode",{parentName:"p"},"bar")," and ",Object(a.b)("inlineCode",{parentName:"p"},"foo"),". This is how the new structure will look:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u251c\u2500\u2500 foo -> ./.pnpm/foo@1.0.0/node_modules/foo\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 bar -> <store>/bar\n    \u2502       \u2514\u2500\u2500 qar -> ../../qar@2.0.0/node_modules/qar\n    \u251c\u2500\u2500 foo@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo -> <store>/foo\n    \u2502       \u251c\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u2514\u2500\u2500 qar -> ../../qar@2.0.0/node_modules/qar\n    \u2514\u2500\u2500 qar@2.0.0\n        \u2514\u2500\u2500 node_modules\n            \u2514\u2500\u2500 qar -> <store>/qar\n")),Object(a.b)("p",null,"As you may see, even though the graph is deeper now (",Object(a.b)("inlineCode",{parentName:"p"},"foo > bar > qar"),"), the directory depth in the file system is still the same."),Object(a.b)("p",null,"This layout might look weird at first glance, but it is completely compatible with Node's module resolution algorithm! When resolving modules, Node ignores symlinks, so when ",Object(a.b)("inlineCode",{parentName:"p"},"bar")," is required from ",Object(a.b)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/foo/index.js"),", Node does not use ",Object(a.b)("inlineCode",{parentName:"p"},"bar")," at ",Object(a.b)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/bar"),", but instead, ",Object(a.b)("inlineCode",{parentName:"p"},"bar")," is resolved to its real location (",Object(a.b)("inlineCode",{parentName:"p"},"bar@1.0.0/node_modules/bar"),"). As a consequence, ",Object(a.b)("inlineCode",{parentName:"p"},"bar")," can also resolve its dependencies which are in ",Object(a.b)("inlineCode",{parentName:"p"},"bar@1.0.0/node_modules"),"."),Object(a.b)("p",null,"A great bonus of this layout is that only packages that are really in the dependencies are accessible. With a flattened ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),' structure, all hoisted packages are accessible. To read more about why this is an advantage, see "',Object(a.b)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"pnpm's strictness helps to avoid silly bugs"),'"'))}p.isMDXComponent=!0},394:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),p=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,u=c["".concat(i,".").concat(m)]||c[m]||b[m]||a;return t?r.a.createElement(u,s(s({ref:n},d),{},{components:t})):r.a.createElement(u,s({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);