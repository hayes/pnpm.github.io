"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8012],{9848:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(7689);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),s=p,f=m["".concat(i,".").concat(s)]||m[s]||d[s]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function s(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:p,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},261:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>c,toc:()=>u,default:()=>m});var r=n(2951),p=n(9877),a=(n(7689),n(9848)),o=["components"],l={id:"dlx",title:"pnpm dlx"},i=void 0,c={unversionedId:"cli/dlx",id:"version-6.x/cli/dlx",isDocsHomePage:!1,title:"pnpm dlx",description:"Added in: v6.13.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/zh/cli/dlx",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"6.x",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"version-6.x/docs",previous:{title:"pnpm exec",permalink:"/zh/cli/exec"},next:{title:"pnpm start",permalink:"/zh/cli/start"}},u=[{value:"Options",id:"options",children:[{value:"--package &lt;name&gt;",id:"--package-name",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Added in: v6.13.0"),(0,a.kt)("p",null,"\u4ece\u6e90\u4e2d\u83b7\u53d6\u5305\u800c\u4e0d\u5c06\u5176\u5b89\u88c5\u4e3a\u4f9d\u8d56\u9879\uff0c\u70ed\u52a0\u8f7d\uff0c\u5e76\u8fd0\u884c\u5b83\u516c\u5f00\u7684\u4efb\u4f55\u9ed8\u8ba4\u547d\u4ee4\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u82e5\u8981\u5728\u4efb\u4f55\u5730\u65b9\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Create-react-app")," \u6765\u521d\u59cb\u5316\u4e00\u4e2a react \u5e94\u7528\uff0c\u800c\u4e0d\u9700\u8981 \u6765\u5728\u53e6\u4e00\u4e2a\u9879\u76ee\u4e0b\u5b89\u88c5\u5b83\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,a.kt)("p",null,"\u8fd9\u5c06\u4ece\u6e90\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"Create-react-app")," \u5e76\u4f7f\u7528\u7ed9\u5b9a\u7684\u53c2\u6570\u8fd0\u884c\u5b83\u3002"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--package-name"},"--package ","<","name",">"),(0,a.kt)("p",null,"The package to install before running the command."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")))}m.isMDXComponent=!0}}]);