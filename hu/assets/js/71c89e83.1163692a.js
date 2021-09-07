"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5771],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9769:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>l,toc:()=>s,default:()=>m});var n=r(98),o=r(6862),a=(r(9496),r(9613)),i=["components"],p={id:"start",title:"pnpm start"},c=void 0,l={unversionedId:"cli/start",id:"version-6.x/cli/start",isDocsHomePage:!1,title:"pnpm start",description:"Aliases: run start",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-6.x/cli/start.md",sourceDirName:"cli",slug:"/cli/start",permalink:"/hu/cli/start",editUrl:"https://crowdin.com/project/pnpm/hu",tags:[],version:"6.x",frontMatter:{id:"start",title:"pnpm start"},sidebar:"version-6.x/docs",previous:{title:"pnpm dlx",permalink:"/hu/cli/dlx"},next:{title:"pnpm env <cmd>",permalink:"/hu/cli/env"}},s=[],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aliases: ",(0,a.kt)("inlineCode",{parentName:"p"},"run start")),(0,a.kt)("p",null,"Runs an arbitrary command specified in the package's ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," property of its ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," object. If no ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," property is specified on the ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," object, it will attempt to run ",(0,a.kt)("inlineCode",{parentName:"p"},"node server.js")," as a default, failing if neither are present."),(0,a.kt)("p",null,"The intended usage of the property is to specify a command that starts your program."))}m.isMDXComponent=!0}}]);