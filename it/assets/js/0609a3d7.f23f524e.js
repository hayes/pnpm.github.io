"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5058],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,v=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?i.createElement(v,o(o({ref:t},d),{},{components:n})):i.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4647:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>u});var i=n(98),r=n(6862),l=(n(9496),n(9613)),o=["components"],a={id:"list",title:"pnpm list"},p=void 0,c={unversionedId:"cli/list",id:"cli/list",isDocsHomePage:!1,title:"pnpm list",description:"Alias: ls",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli/list.md",sourceDirName:"cli",slug:"/cli/list",permalink:"/it/next/cli/list",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"list",title:"pnpm list"},sidebar:"docs",previous:{title:"pnpm audit",permalink:"/it/next/cli/audit"},next:{title:"pnpm outdated",permalink:"/it/next/cli/outdated"}},d=[{value:"Opzioni",id:"opzioni",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--depth &lt;number&gt;",id:"--depth-number",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",children:[]}]}],s={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"ls")),(0,l.kt)("p",null,"Questo comando produrr\xe0 tutte le versioni dei pacchetti che sono installati e le loro dipendenze, in una struttura ad albero."),(0,l.kt)("p",null,"Gli argomenti posizionali sono identificatori ",(0,l.kt)("inlineCode",{parentName:"p"},"name-pattern@intervallo-versioni"),", che limiteranno i risultati solo ai pacchetti nominati. Ad esempio, ",(0,l.kt)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"."),(0,l.kt)("h2",{id:"opzioni"},"Opzioni"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Esegui il comando in ogni pacchetto in sottocartelle o in ogni pacchetto dello spazio di lavoro, quando eseguito all'interno di uno spazio di lavoro."),(0,l.kt)("h3",{id:"--json"},"--json"),(0,l.kt)("p",null,"Aggiunto nella versione: v3.7.0"),(0,l.kt)("p",null,"Registra l'output in formato JSON."),(0,l.kt)("h3",{id:"--long"},"--long"),(0,l.kt)("p",null,"Mostra informazioni aggiuntive."),(0,l.kt)("h3",{id:"--parseable"},"--parseable"),(0,l.kt)("p",null,"Produce cartelle di pacchetti in un formato analizzabile invece della loro vista ad albero."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"Elenca i pacchetti nella cartella di installazione globale invece che nel progetto corrente."),(0,l.kt)("h3",{id:"--depth-number"},"--depth ","<","number",">"),(0,l.kt)("p",null,"Profondit\xe0 di visualizzazione massima dell'albero delle dipendenze."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," elencher\xe0 solo le dipendenze dirette. ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," elencher\xe0 solo i progetti. Utile all'interno di uno spazio di lavoro quando \xe8 usato con l'opzione ",(0,l.kt)("inlineCode",{parentName:"p"},"-r"),"."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Visualizza solo il grafico delle dipendenze per i pacchetti in ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," e ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Visualizza solo il grafico delle dipendenze per i pacchetti in ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"Non visualizzare i pacchetti da ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/it/next/filtering"},"Ulteriori informazioni sui filtri.")))}u.isMDXComponent=!0}}]);