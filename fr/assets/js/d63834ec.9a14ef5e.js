"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1696],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||p;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<p;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7365:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>i,toc:()=>u,default:()=>d});var n=r(98),a=r(6862),p=(r(9496),r(9613)),l=["components"],o={id:"dlx",title:"pnpm dlx"},c=void 0,i={unversionedId:"cli/dlx",id:"cli/dlx",isDocsHomePage:!1,title:"pnpm dlx",description:"Ajout\xe9 dans version: v6.13.0",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/fr/next/cli/dlx",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"docs",previous:{title:"pnpm exec",permalink:"/fr/next/cli/exec"},next:{title:"pnpm start",permalink:"/fr/next/cli/start"}},u=[{value:"Options",id:"options",children:[{value:"--package &lt;nom&gt;",id:"--package-nom",children:[]}]}],s={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Ajout\xe9 dans version: v6.13.0"),(0,p.kt)("p",null,"R\xe9cup\xe8re un package du registre sans l'installer en tant que d\xe9pendance, le charge, et ex\xe9cute le binaire de commande par d\xe9faut qu'il expose."),(0,p.kt)("p",null,"Par exemple, pour utiliser ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," n'importe o\xf9 afin de cr\xe9er une application react sans avoir besoin de l'installer sous un autre projet, vous pouvez ex\xe9cuter:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,p.kt)("p",null,"Cela r\xe9cup\xe9rera ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," du registre et l'ex\xe9cutera avec les arguments donn\xe9s."),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--package-nom"},"--package ","<","nom",">"),(0,p.kt)("p",null,"Le package \xe0 installer avant d'ex\xe9cuter la commande."),(0,p.kt)("p",null,"Exemple :"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,p.kt)("p",null,"Depuis la version 6.14.5, plusieurs packages peuvent \xeatre fournis pour l'installation:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")))}d.isMDXComponent=!0}}]);