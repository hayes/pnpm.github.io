(self.webpackChunk=self.webpackChunk||[]).push([[9459],{9848:(e,r,n)=>{"use strict";n.d(r,{Zo:()=>d,kt:()=>m});var t=n(7689);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,v=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return n?t.createElement(v,l(l({ref:r},d),{},{components:n})):t.createElement(v,l({ref:r},d))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6613:(e,r,n)=>{"use strict";n.r(r),n.d(r,{frontMatter:()=>i,metadata:()=>p,toc:()=>c,default:()=>s});var t=n(1424),a=n(2489),o=(n(7689),n(9848)),l=["components"],i={id:"remove",title:"pnpm remove"},p={unversionedId:"cli/remove",id:"version-6.x/cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"Npm paketlerini node_modules dizininden ve projenin package-lock.json dosyas\u0131n'dan kald\u0131r\u0131r.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/tr/cli/remove",editUrl:"https://crowdin.com/project/pnpm/tr",version:"6.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-6.x/docs",previous:{title:"pnpm update",permalink:"/tr/cli/update"},next:{title:"pnpm link",permalink:"/tr/cli/link"}},c=[{value:"Parametreler",id:"parametreler",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--global",id:"--global",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],d={toc:c};function s(e){var r=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Npm paketlerini ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," dizininden ve projenin ",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json")," dosyas\u0131n'dan kald\u0131r\u0131r."),(0,o.kt)("p",null,"Alternatifler: rm, uninstall, un"),(0,o.kt)("h2",{id:"parametreler"},"Parametreler"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/tr/workspaces"},"\xe7al\u0131\u015fma alan\u0131"),"i\xe7inde kullan\u0131ld\u0131\u011f\u0131nda, her \xe7al\u0131\u015fma alan\u0131 paketinden bir ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 (ya da ba\u011f\u0131ml\u0131l\u0131klar\u0131) kald\u0131r\u0131r."),(0,o.kt)("p",null,"When used not inside a workspace, removes a dependency (or dependencies) from every package found in subdirectories."),(0,o.kt)("h3",{id:"--global"},"--global"),(0,o.kt)("p",null,"Remove a global package."),(0,o.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,o.kt)("p",null,"Only remove the dependency from ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,o.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,o.kt)("p",null,"Only remove the dependency from ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,o.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,o.kt)("p",null,"Only remove the dependency from ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/tr/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0}}]);