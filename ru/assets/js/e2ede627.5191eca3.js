"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5002],{9613:(t,n,e)=>{e.d(n,{Zo:()=>d,kt:()=>c});var a=e(9496);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,l=function(t,n){if(null==t)return{};var e,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var m=a.createContext({}),o=function(t){var n=a.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):p(p({},n),t)),e},d=function(t){var n=o(t.components);return a.createElement(m.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=o(e),c=l,k=s["".concat(m,".").concat(c)]||s[c]||u[c]||r;return e?a.createElement(k,p(p({ref:n},d),{},{components:e})):a.createElement(k,p({ref:n},d))}));function c(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,p=new Array(r);p[0]=s;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var o=2;o<r;o++)p[o]=e[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,e)}s.displayName="MDXCreateElement"},367:(t,n,e)=>{e.r(n),e.d(n,{frontMatter:()=>i,contentTitle:()=>m,metadata:()=>o,toc:()=>d,default:()=>s});var a=e(98),l=e(6862),r=(e(9496),e(9613)),p=["components"],i={id:"installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},m=void 0,o={unversionedId:"installation",id:"version-6.x/installation",isDocsHomePage:!1,title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",description:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ru/installation",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},sidebar:"version-6.x/docs",previous:{title:"\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f",permalink:"/ru/motivation"},next:{title:"pnpm CLI",permalink:"/ru/pnpm-cli"}},d=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-\u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439-\u0441\u043a\u0440\u0438\u043f\u0442",children:[{value:"\u041a\u043e\u0433\u0434\u0430 Node.js \u043d\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d",id:"\u043a\u043e\u0433\u0434\u0430-nodejs-\u043d\u0435-\u043f\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d",children:[]},{value:"\u041a\u043e\u0433\u0434\u0430 Node.js \u043f\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d",id:"\u043a\u043e\u0433\u0434\u0430-nodejs-\u043f\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d",children:[]}]},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f npm",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-npm",children:[]},{value:"\u0427\u0435\u0440\u0435\u0437 npx",id:"\u0447\u0435\u0440\u0435\u0437-npx",children:[]},{value:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435",id:"\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435",children:[]},{value:"\u0421\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c",id:"\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c",children:[]},{value:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 pnpm",id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-pnpm",children:[]}],u={toc:d};function s(t){var n=t.components,e=(0,l.Z)(t,p);return(0,r.kt)("wrapper",(0,a.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-\u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439-\u0441\u043a\u0440\u0438\u043f\u0442"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442"),(0,r.kt)("h3",{id:"\u043a\u043e\u0433\u0434\u0430-nodejs-\u043d\u0435-\u043f\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d"},"\u041a\u043e\u0433\u0434\u0430 Node.js \u043d\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d"),(0,r.kt)("p",null,"\u041d\u0430 POSIX-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c pnpm, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d Node.js, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0441\u043a\u0440\u0438\u043f\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d curl, \u0438 \u0432\u044b \u0445\u043e\u0442\u0435\u043b\u0438 \u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c wget:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,r.kt)("a",{parentName:"p",href:"/ru/cli/env"},"pnpm env")," \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 Node.js."),(0,r.kt)("h3",{id:"\u043a\u043e\u0433\u0434\u0430-nodejs-\u043f\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d"},"\u041a\u043e\u0433\u0434\u0430 Node.js \u043f\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d"),(0,r.kt)("p",null,"\u041d\u0430 Linux \u0438\u043b\u0438 macOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -f https://get.pnpm.io/v6.14.js | node - add --global pnpm\n")),(0,r.kt)("p",null,"\u041d\u0430 Windows (PowerShell):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"(Invoke-WebRequest 'https://get.pnpm.io/v6.14.js' -UseBasicParsing).Content | node - add --global pnpm\n")),(0,r.kt)("p",null,"\u0421\u043a\u0440\u0438\u043f\u0442 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438\u043c\u0435\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u044c. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/get#verifying-files"},"\u0412\u043e\u0442 \u043a\u0430\u043a \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0435\u0451"),"."),(0,r.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-npm"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"\u0447\u0435\u0440\u0435\u0437-npx"},"\u0427\u0435\u0440\u0435\u0437 npx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),(0,r.kt)("h2",{id:"\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435"},"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435"),(0,r.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 pnpm \u043d\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0434\u043b\u044f \u0435\u0433\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c pnpm, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u0425\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c pnpm \u0432 CI/CD? \u0421\u043c.: ",(0,r.kt)("a",{parentName:"p",href:"/ru/continuous-integration"},"\u041d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f"),"."))),(0,r.kt)("h2",{id:"\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c"},"\u0421\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c"),(0,r.kt)("p",null,"\u041d\u0438\u0436\u0435 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 pnpm \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0439 Node.js."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 1"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 2"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 3"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c"),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 pnpm \u043f\u043e \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0435 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u0438 \u0443 \u0432\u0430\u0441 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0440\u0435\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u043f\u0435\u0440\u0435\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0435\u0433\u043e, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c pnpm \u0438 \u0435\u0433\u043e \u0444\u0430\u0439\u043b\u044b, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0432 \u043f\u0443\u0442\u044c \u0434\u043e \u0435\u0433\u043e \u043f\u0430\u043f\u043a\u0438 \u0438\u0437 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f PATH."),(0,r.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 pnpm, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0432: ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),". \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 Windows, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u044d\u0442\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0432 Git Bash. \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b pnpm, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u0437\u043d\u0430\u0435\u0442\u0435, \u0433\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f CLI pnpm, \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u044d\u0442\u0443 \u043f\u0430\u043f\u043a\u0443 \u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u0435 \u0432\u0441\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 pnpm \u0444\u0430\u0439\u043b\u044b (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),"\u0438 \u0442.\u0434.). \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 pnpm \u0435\u0449\u0435 \u0440\u0430\u0437, \u0438 \u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043a\u0430\u043a \u0432\u044b \u0442\u043e\u0433\u043e \u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0435."),(0,r.kt)("h2",{id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-pnpm"},"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 pnpm"),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c pnpm CLI \u0438\u0437 \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u043b\u044e\u0431\u044b\u0435 \u0444\u0430\u0439\u043b\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d \u0437\u0430\u043f\u0438\u0441\u0430\u043b \u043d\u0430 \u0432\u0430\u0448 \u0434\u0438\u0441\u043a, \u0441\u043c. ",(0,r.kt)("a",{parentName:"p",href:"/ru/uninstall"},"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 pnpm"),"."))}s.isMDXComponent=!0}}]);