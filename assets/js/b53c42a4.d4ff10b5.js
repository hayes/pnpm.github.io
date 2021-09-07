"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6670],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7745:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>c,default:()=>u});var o=n(98),a=n(6862),r=(n(9496),n(9613)),i=["components"],s={id:"motivation",title:"Motivation"},l=void 0,d={unversionedId:"motivation",id:"version-5.x/motivation",isDocsHomePage:!1,title:"Motivation",description:"Saving disk space and boosting installation speed",source:"@site/versioned_docs/version-5.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/5.x/motivation",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-5.x/motivation.md",tags:[],version:"5.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1617492775,formattedLastUpdatedAt:"4/3/2021",frontMatter:{id:"motivation",title:"Motivation"},sidebar:"version-5.x/docs",next:{title:"Installation",permalink:"/5.x/installation"}},c=[{value:"Saving disk space and boosting installation speed",id:"saving-disk-space-and-boosting-installation-speed",children:[]},{value:"Creating a non-flat node_modules directory",id:"creating-a-non-flat-node_modules-directory",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"saving-disk-space-and-boosting-installation-speed"},"Saving disk space and boosting installation speed"),(0,r.kt)("p",null,"When using npm or Yarn, if you have 100 projects using a dependency, you will\nhave 100 copies of that dependency saved on disk. With pnpm, the dependency will be\nstored in a content-addressable store, so:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If you depend on different versions of the dependency, only the files that\ndiffer are added to the store. For instance, if it has 100 files, and a new\nversion has a change in only one of those files, ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm update")," will only add 1\nnew file to the store, instead of cloning the entire dependency just for the\nsingular change."),(0,r.kt)("li",{parentName:"ol"},"All the files are saved in a single place on the disk. When packages are\ninstalled, their files are hard-linked from that single place, consuming no\nadditional disk space. This allows you to share dependencies of the same version\nacross projects.")),(0,r.kt)("p",null,"As a result, you save a lot of space on your disk proportional to the number of\nprojects and dependencies, and you have a lot faster installations!"),(0,r.kt)("h2",{id:"creating-a-non-flat-node_modules-directory"},"Creating a non-flat node_modules directory"),(0,r.kt)("p",null,"When installing dependencies with npm, all packages are hoisted to the root of the\nmodules directory. As a result, source code has access to dependencies that are\nnot added as dependencies to the project."),(0,r.kt)("p",null,"pnpm uses symlinks to add only the direct dependencies of the project into the root of the modules directory.\nIf you'd like more details about the unique ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," structure that pnpm\ncreates and why it works fine with the Node.js ecosystem, read:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules is not the only way")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/5.x/symlinked-node-modules-structure"},"Symlinked node_modules structure"))))}u.isMDXComponent=!0}}]);