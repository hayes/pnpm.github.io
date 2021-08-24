"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8741],{9848:(t,n,e)=>{e.d(n,{Zo:()=>d,kt:()=>c});var a=e(7689);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,l=function(t,n){if(null==t)return{};var e,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var o=a.createContext({}),m=function(t){var n=a.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):p(p({},n),t)),e},d=function(t){var n=m(t.components);return a.createElement(o.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=m(e),c=l,k=u["".concat(o,".").concat(c)]||u[c]||s[c]||r;return e?a.createElement(k,p(p({ref:n},d),{},{components:e})):a.createElement(k,p({ref:n},d))}));function c(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,p=new Array(r);p[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var m=2;m<r;m++)p[m]=e[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,e)}u.displayName="MDXCreateElement"},480:(t,n,e)=>{e.r(n),e.d(n,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>m,toc:()=>d,default:()=>u});var a=e(2951),l=e(9877),r=(e(7689),e(9848)),p=["components"],i={id:"installation",title:"\u5b89\u88c5"},o=void 0,m={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"\u5b89\u88c5",description:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh/next/installation",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"current",frontMatter:{id:"installation",title:"\u5b89\u88c5"},sidebar:"docs",previous:{title:"\u52a8\u673a",permalink:"/zh/next/motivation"},next:{title:"pnpm CLI",permalink:"/zh/next/pnpm-cli"}},d=[{value:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",id:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",children:[{value:"Node.js is not preinstalled",id:"nodejs-is-not-preinstalled",children:[]},{value:"Node.js is preinstalled",id:"nodejs-is-preinstalled",children:[]}]},{value:"\u901a\u8fc7 npm \u5b89\u88c5",id:"\u901a\u8fc7-npm-\u5b89\u88c5",children:[]},{value:"\u901a\u8fc7 npx \u5b89\u88c5",id:"\u901a\u8fc7-npx-\u5b89\u88c5",children:[]},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",children:[]},{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",children:[]},{value:"\u6545\u969c\u6392\u67e5",id:"\u6545\u969c\u6392\u67e5",children:[]},{value:"Uninstalling pnpm",id:"uninstalling-pnpm",children:[]}],s={toc:d};function u(t){var n=t.components,e=(0,l.Z)(t,p);return(0,r.kt)("wrapper",(0,a.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c"},"\u4f7f\u7528\u72ec\u7acb\u811a\u672c"),(0,r.kt)("h3",{id:"nodejs-is-not-preinstalled"},"Node.js is not preinstalled"),(0,r.kt)("p",null,"On x64 POSIX systems, you may install pnpm even if you don't have Node.js installed, using the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"If you don't have curl installed, you would like to use wget:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"You may use the ",(0,r.kt)("a",{parentName:"p",href:"/zh/next/cli/env"},"pnpm env")," command then to install Node.js."),(0,r.kt)("h3",{id:"nodejs-is-preinstalled"},"Node.js is preinstalled"),(0,r.kt)("p",null,"On Linux or macOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -f https://get.pnpm.io/v6.14.js | node - add --global pnpm\n")),(0,r.kt)("p",null,"\u5728 Windows \u4e0b\uff08\u4f7f\u7528PowerShell\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"(Invoke-WebRequest 'https://get.pnpm.io/v6.14.js' -UseBasicParsing).Content | node - add --global pnpm\n")),(0,r.kt)("p",null,"\u72ec\u7acb\u811a\u672c\u5df2\u7ecf\u7ecf\u8fc7\u7b7e\u540d\u3002 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/get#verifying-files"},"\u5982\u4f55\u9a8c\u8bc1\uff1f")),(0,r.kt)("h2",{id:"\u901a\u8fc7-npm-\u5b89\u88c5"},"\u901a\u8fc7 npm \u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"\u901a\u8fc7-npx-\u5b89\u88c5"},"\u901a\u8fc7 npx \u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),(0,r.kt)("h2",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),(0,r.kt)("p",null,"\u4e00\u65e6\u4f60\u5b89\u88c5\u4e86 pnpm\uff0c\u5c31\u65e0\u9700\u518d\u4f7f\u7528\u5176\u4ed6\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\u8fdb\u884c\u5347\u7ea7\u3002 \u4f60\u53ef\u4ee5\u4f7f\u7528 pnpm \u5347\u7ea7\u81ea\u5df1\uff0c\u50cf\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do you wanna use pnpm on CI servers? See: ",(0,r.kt)("a",{parentName:"p",href:"/zh/next/continuous-integration"},"Continuous Integration"),"."))),(0,r.kt)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u5404\u7248\u672c pnpm \u4e0e\u5404\u7248\u672c Node.js \u4e4b\u95f4\u7684\u652f\u6301\u8868\u683c\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 1"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 2"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 3"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"\u6545\u969c\u6392\u67e5"},"\u6545\u969c\u6392\u67e5"),(0,r.kt)("p",null,"\u5982\u679c pnpm \u635f\u574f\u5e76\u4e14\u60a8\u65e0\u6cd5\u901a\u8fc7\u91cd\u65b0\u5b89\u88c5\u6765\u4fee\u590d\u5b83\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4ece PATH \u4e2d\u5c06\u5176\u624b\u52a8\u5220\u9664\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u60a8\u5728\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\u65f6\u9047\u5230\u4ee5\u4e0b\u9519\u8bef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5c1d\u8bd5\u901a\u8fc7\u8fd0\u884c\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),"\u6765\u627e\u5230 pnpm \u7684\u4f4d\u7f6e\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Windows\uff0c\u8bf7\u5728 Git Bash \u4e2d\u8fd0\u884c\u6b64\u547d\u4ee4\u3002 \u60a8\u5c06\u83b7\u5f97 pnpm \u547d\u4ee4\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"\u73b0\u5728\u60a8\u5e94\u8be5\u5df2\u7ecf\u77e5\u9053\u4e86 pnpm CLI \u7684\u6240\u5728\u76ee\u5f55\u3002\u6253\u5f00\u8be5\u76ee\u5f55\u5e76\u5220\u9664\u6240\u6709\u4e0e pnpm \u76f8\u5173\u7684\u6587\u4ef6\uff08\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),"\u7b49\uff09\u3002 \u5b8c\u6210\u540e\uff0c\u518d\u6b21\u5b89\u88c5 pnpm\u3002\u73b0\u5728\uff0c\u5b83\u5e94\u8be5\u6b63\u6309\u7167\u9884\u671f\u5de5\u4f5c\u3002"),(0,r.kt)("h2",{id:"uninstalling-pnpm"},"Uninstalling pnpm"),(0,r.kt)("p",null,"If you need to remove the pnpm CLI from your system and any files it have written to your disk, see ",(0,r.kt)("a",{parentName:"p",href:"/zh/next/uninstall"},"Uninstalling pnpm"),"."))}u.isMDXComponent=!0}}]);