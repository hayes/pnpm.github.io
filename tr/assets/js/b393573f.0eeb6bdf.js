(self.webpackChunk=self.webpackChunk||[]).push([[9427],{9848:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7689);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return t?n.createElement(f,c(c({ref:r},u),{},{components:t})):n.createElement(f,c({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4329:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>l,toc:()=>u,default:()=>m});var n=t(2791),a=t(9698),i=(t(7689),t(9848)),c=["components"],o={id:"pack",title:"pnpm pack"},p=void 0,l={unversionedId:"cli/pack",id:"cli/pack",isDocsHomePage:!1,title:"pnpm pack",description:"Create a tarball from a package.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/cli/pack.md",sourceDirName:"cli",slug:"/cli/pack",permalink:"/tr/next/cli/pack",editUrl:"https://crowdin.com/project/pnpm/tr",version:"current",frontMatter:{id:"pack",title:"pnpm pack"},sidebar:"docs",previous:{title:"pnpm publish",permalink:"/tr/next/cli/publish"},next:{title:"pnpm recursive",permalink:"/tr/next/cli/recursive"}},u=[{value:"Parametreler",id:"parametreler",children:[{value:"--pack-destination &lt;dir&gt;",id:"--pack-destination-dir",children:[]}]}],s={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create a tarball from a package."),(0,i.kt)("h2",{id:"parametreler"},"Parametreler"),(0,i.kt)("h3",{id:"--pack-destination-dir"},"--pack-destination ","<","dir",">"),(0,i.kt)("p",null,"Directory in which ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm pack")," will save tarballs. The default is the current working directory."))}m.isMDXComponent=!0}}]);