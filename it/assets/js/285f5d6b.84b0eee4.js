"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7268],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var i=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(t),s=r,f=u["".concat(l,".").concat(s)]||u[s]||d[s]||a;return t?i.createElement(f,o(o({ref:n},m),{},{components:t})):i.createElement(f,o({ref:n},m))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2229:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>c,toc:()=>m,default:()=>u});var i=t(98),r=t(6862),a=(t(9496),t(9613)),o=["components"],p={id:"pnpm-cli",title:"CLI di pnpm"},l=void 0,c={unversionedId:"pnpm-cli",id:"pnpm-cli",isDocsHomePage:!1,title:"CLI di pnpm",description:"Differenze vs npm",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/it/next/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"pnpm-cli",title:"CLI di pnpm"},sidebar:"docs",previous:{title:"Installazione",permalink:"/it/next/installation"},next:{title:"pnpx CLI",permalink:"/it/next/pnpx-cli"}},m=[{value:"Differenze vs npm",id:"differenze-vs-npm",children:[]},{value:"Opzioni",id:"opzioni",children:[{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",children:[]},{value:"-w, --workspace-root",id:"-w---workspace-root",children:[]}]},{value:"Comandi",id:"comandi",children:[]}],d={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"differenze-vs-npm"},"Differenze vs npm"),(0,a.kt)("p",null,"A differenza di npm, pnpm convalida tutte le opzioni. Ad esempio, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install --foo")," fallir\xe0 poich\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"--foo")," non \xe8 un'opzione valida per ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,a.kt)("p",null,"Tuttavia, alcune dipendenze possono utilizzare la variabile d'ambiente ",(0,a.kt)("inlineCode",{parentName:"p"},"npm_config_"),", che \xe8 popolata dalle opzioni CLI. In questo caso, hai le seguenti opzioni:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"impostare esplicitamente la variabile env: ",(0,a.kt)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),(0,a.kt)("li",{parentName:"ol"},"forzare l'opzione sconosciuta con ",(0,a.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm install --config.foo"))),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),(0,a.kt)("p",null,"Esegui come se pnpm fosse stato avviato in ",(0,a.kt)("inlineCode",{parentName:"p"},"<path>")," invece che nella cartella di lavoro corrente."),(0,a.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,a.kt)("p",null,"Aggiunto nella versione: v5.6.0"),(0,a.kt)("p",null,"Esegui come se pnpm fosse stato avviato nella radice dello spazio di lavoro invece che nella cartella di lavoro corrente."),(0,a.kt)("h2",{id:"comandi"},"Comandi"),(0,a.kt)("p",null,"Per ulteriori informazioni, vedere la documentazione per i singoli comandi CLI. Ecco un elenco di utili comandi equivalenti di npm per iniziare:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"comando npm"),(0,a.kt)("th",{parentName:"tr",align:null},"equivalente di pnpm"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm install")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/it/next/cli/install"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))),(0,a.kt)("p",null,"Quando viene utilizzato un comando sconosciuto, pnpm cercher\xe0 uno script con il nome dato, quindi ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," \xe8 uguale a ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm lint"),". Se non c'\xe8 uno script con il nome specificato, allora pnpm eseguir\xe0 il comando come uno script di shell, quindi puoi fare cose come ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," (vedi ",(0,a.kt)("a",{parentName:"p",href:"/it/next/cli/exec"},"pnpm exec"),")."))}u.isMDXComponent=!0}}]);