"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4861],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9363:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>l,toc:()=>c,default:()=>u});var r=n(98),a=n(6862),o=(n(9496),n(9613)),i=["components"],s={id:"store",title:"pnpm store"},p=void 0,l={unversionedId:"cli/store",id:"version-6.x/cli/store",isDocsHomePage:!1,title:"pnpm store",description:"Managing the package store.",source:"@site/versioned_docs/version-6.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/cli/store",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-6.x/cli/store.md",tags:[],version:"6.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1629875829,formattedLastUpdatedAt:"8/25/2021",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-6.x/docs",previous:{title:"pnpm server",permalink:"/cli/server"},next:{title:"package.json",permalink:"/package_json"}},c=[{value:"Commands",id:"commands",children:[{value:"status",id:"status",children:[]},{value:"add",id:"add",children:[]},{value:"prune",id:"prune",children:[]},{value:"path",id:"path",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Managing the package store."),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("h3",{id:"status"},"status"),(0,o.kt)("p",null,"Checks for modified packages in the store."),(0,o.kt)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the\ntime of unpacking."),(0,o.kt)("h3",{id:"add"},"add"),(0,o.kt)("p",null,"Added in: v2.12.0"),(0,o.kt)("p",null,"Functionally equivalent to ",(0,o.kt)("a",{parentName:"p",href:"/cli/add"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm add")),", except this adds new packages to the\nstore directly without modifying any projects or files outside of the store."),(0,o.kt)("h3",{id:"prune"},"prune"),(0,o.kt)("p",null,"Removes orphan packages from the store."),(0,o.kt)("p",null,"Pruning the store will save disk space, however may slow down future\ninstallations involving pruned packages. Ultimately, it is a safe operation,\nhowever not recommended if you have orphaned packages from a package you intend\nto reinstall."),(0,o.kt)("p",null,"Please read ",(0,o.kt)("a",{parentName:"p",href:"/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"the FAQ")," for more information on unreferenced packages and best\npractices."),(0,o.kt)("p",null,"Please note that this is prohibited when a ",(0,o.kt)("a",{parentName:"p",href:"/cli/server"},"store server")," is running."),(0,o.kt)("h3",{id:"path"},"path"),(0,o.kt)("p",null,"Added in: v6.10.0"),(0,o.kt)("p",null,"Returns the path to the active store directory."))}u.isMDXComponent=!0}}]);