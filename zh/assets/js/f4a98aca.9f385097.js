"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4842],{9613:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=m(n),c=r,g=s["".concat(o,".").concat(c)]||s[c]||u[c]||l;return n?a.createElement(g,p(p({ref:e},d),{},{components:n})):a.createElement(g,p({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4816:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>m,toc:()=>d,default:()=>s});var a=n(98),r=n(6862),l=(n(9496),n(9613)),p=["components"],i={id:"installation",title:"\u5b89\u88c5"},o=void 0,m={unversionedId:"installation",id:"version-5.x/installation",isDocsHomePage:!1,title:"\u5b89\u88c5",description:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh/5.x/installation",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"5.x",frontMatter:{id:"installation",title:"\u5b89\u88c5"},sidebar:"version-5.x/docs",previous:{title:"\u52a8\u673a",permalink:"/zh/5.x/motivation"},next:{title:"pnpm CLI",permalink:"/zh/5.x/pnpm-cli"}},d=[{value:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",id:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",children:[]},{value:"\u901a\u8fc7 npm \u5b89\u88c5",id:"\u901a\u8fc7-npm-\u5b89\u88c5",children:[]},{value:"\u901a\u8fc7 npx \u5b89\u88c5",id:"\u901a\u8fc7-npx-\u5b89\u88c5",children:[]},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",children:[]},{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",children:[]}],u={toc:d};function s(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c"},"\u4f7f\u7528\u72ec\u7acb\u811a\u672c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -f https://get.pnpm.io/v5.js | node - add --global pnpm\n")),(0,l.kt)("p",null,"\u5728 Windows \u4e0b\uff08\u4f7f\u7528PowerShell\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"(Invoke-WebRequest 'https://get.pnpm.io/v5.js' -UseBasicParsing).Content | node - add --global pnpm\n")),(0,l.kt)("h2",{id:"\u901a\u8fc7-npm-\u5b89\u88c5"},"\u901a\u8fc7 npm \u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,l.kt)("h2",{id:"\u901a\u8fc7-npx-\u5b89\u88c5"},"\u901a\u8fc7 npx \u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),(0,l.kt)("h2",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),(0,l.kt)("p",null,"\u4e00\u65e6\u4f60\u5b89\u88c5\u4e86 pnpm\uff0c\u5c31\u65e0\u9700\u518d\u4f7f\u7528\u5176\u4ed6\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\u8fdb\u884c\u5347\u7ea7\u3002 \u4f60\u53ef\u4ee5\u4f7f\u7528 pnpm \u5347\u7ea7\u81ea\u5df1\uff0c\u50cf\u8fd9\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Do you wanna use pnpm on CI servers? See: ",(0,l.kt)("a",{parentName:"p",href:"/zh/5.x/continuous-integration"},"Continuous Integration"),"."))),(0,l.kt)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u5404\u7248\u672c pnpm \u4e0e\u5404\u7248\u672c Node.js \u4e4b\u95f4\u7684\u652f\u6301\u8868\u683c\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 1"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 2"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 3"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 6"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);