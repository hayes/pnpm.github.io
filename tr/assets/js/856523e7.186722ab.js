"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8255],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),s=a,f=m["".concat(o,".").concat(s)]||m[s]||d[s]||p;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<p;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2802:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>c,toc:()=>u,default:()=>m});var n=r(98),a=r(6862),p=(r(9496),r(9613)),l=["components"],i={id:"dlx",title:"pnpm dlx"},o=void 0,c={unversionedId:"cli/dlx",id:"version-6.x/cli/dlx",isDocsHomePage:!1,title:"pnpm dlx",description:"Added in: v6.13.0",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/tr/cli/dlx",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"6.x",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"version-6.x/docs",previous:{title:"pnpm exec",permalink:"/tr/cli/exec"},next:{title:"pnpm start",permalink:"/tr/cli/start"}},u=[{value:"Parametreler",id:"parametreler",children:[{value:"--package &lt;name&gt;",id:"--package-name",children:[]}]}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Added in: v6.13.0"),(0,p.kt)("p",null,"Fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes."),(0,p.kt)("p",null,"\xd6rne\u011fin: ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," paketini kullanarak her hangi bir dizinde h\u0131zl\u0131ca React projesi olu\u015fturmak i\xe7in \u015fu komutu kullanabilirsin:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,p.kt)("p",null,"This will fetch ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," from the registry and run it with the given arguments."),(0,p.kt)("h2",{id:"parametreler"},"Parametreler"),(0,p.kt)("h3",{id:"--package-name"},"--package ","<","name",">"),(0,p.kt)("p",null,"The package to install before running the command."),(0,p.kt)("p",null,"\xd6rnek kullan\u0131m:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,p.kt)("p",null,"As of v6.14.5, multiple packages can be provided for installation:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")))}m.isMDXComponent=!0}}]);