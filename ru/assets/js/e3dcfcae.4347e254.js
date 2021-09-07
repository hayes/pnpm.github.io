"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4793],{9613:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>d});var t=r(9496);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return r?t.createElement(f,a(a({ref:n},u),{},{components:r})):t.createElement(f,a({ref:n},u))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1072:(e,n,r)=>{r.r(n),r.d(n,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>m});var t=r(98),i=r(6862),l=(r(9496),r(9613)),a=["components"],o={id:"unlink",title:"pnpm unlink"},c=void 0,p={unversionedId:"cli/unlink",id:"cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"Unlinks a system-wide package (inverse of pnpm link).",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/ru/next/cli/unlink",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"docs",previous:{title:"pnpm link",permalink:"/ru/next/cli/link"},next:{title:"pnpm import",permalink:"/ru/next/cli/import"}},u=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430",children:[]}]}],s={toc:u};function m(e){var n=e.components,r=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Unlinks a system-wide package (inverse of ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/cli/link"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm link")),")."),(0,l.kt)("p",null,"If called without arguments, all linked dependencies will be unlinked."),(0,l.kt)("p",null,"This is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn unlink"),", except pnpm re-installs the dependency after removing the external link."),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Unlink in every package found in subdirectories or in every workspace package, when executed inside a ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/workspaces"},"workspace"),"."),(0,l.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430"},"--filter ","<","\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ru/next/filtering"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438.")))}m.isMDXComponent=!0}}]);