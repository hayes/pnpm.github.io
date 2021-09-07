"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[613],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var i=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?i.createElement(k,o(o({ref:n},c),{},{components:t})):i.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4402:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>m});var i=t(98),r=t(6862),a=(t(9496),t(9613)),o=["components"],l={id:"recursive",title:"pnpm recursive"},p=void 0,s={unversionedId:"cli/recursive",id:"version-5.x/cli/recursive",isDocsHomePage:!1,title:"pnpm recursive",description:"Esegue un comando pnpm in modo ricorsivo su tutte le sottocartelle del pacchetto o su ogni spazio di lavoro disponibile. Attualmente, solo i seguenti comandi possono essere usati ricorsivamente: add, exec, install, list, outdated, publish, build, remove, run, test, unlink, update, why",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/it/5.x/cli/recursive",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"recursive",title:"pnpm recursive"},sidebar:"version-5.x/docs",previous:{title:"pnpm publish",permalink:"/it/5.x/cli/publish"},next:{title:"pnpm server",permalink:"/it/5.x/cli/server"}},c=[{value:"Opzioni",id:"opzioni",children:[{value:"--link-workspace-packages",id:"--link-workspace-packages",children:[]},{value:"--workspace-concurrency",id:"--workspace-concurrency",children:[]},{value:"--no-bail",id:"--no-bail",children:[]},{value:"--no-sort",id:"--no-sort",children:[]},{value:"--reverse",id:"--reverse",children:[]}]},{value:"pnpm -r exec",id:"pnpm--r-exec",children:[{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",children:[]}]}],u={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Esegue un comando pnpm in modo ricorsivo su tutte le sottocartelle del pacchetto o su ogni spazio di lavoro disponibile. Attualmente, solo i seguenti comandi possono essere usati ricorsivamente: ",(0,a.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"exec"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"outdated"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"publish"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"remove"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"run"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"unlink"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"why")),(0,a.kt)("p",null,"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"multi"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<command> -r")),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"true, false, deep"))),(0,a.kt)("p",null,"Collega i pacchetti disponibili localmente negli spazi di lavoro di un monorepo in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," invece di scaricarli nuovamente dal registro. Questo emula la funzionalit\xe0 simile a ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn workspaces"),"."),(0,a.kt)("p",null,"Quando \xe8 impostato su deep, i pacchetti locali possono anche essere collegati alle dipendenze secondarie."),(0,a.kt)("p",null,"Tieni presente che si consiglia invece di utilizzare ",(0,a.kt)("a",{parentName:"p",href:"/it/5.x/workspaces#link-workspace-packages"},"npmrc")," per questa impostazione, di imporre lo stesso comportamento in tutti gli ambienti. Questa opzione esiste esclusivamente in modo che tu possa sovrascriverla se necessario."),(0,a.kt)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),(0,a.kt)("p",null,"Aggiunto nella versione: v2.13.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"4")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Number"))),(0,a.kt)("p",null,"Imposta il numero massimo di attivit\xe0 da eseguire contemporaneamente. Per la simultaneit\xe0 illimitata usa ",(0,a.kt)("inlineCode",{parentName:"p"},"Infinity"),"."),(0,a.kt)("h3",{id:"--no-bail"},"--","[no-]","bail"),(0,a.kt)("p",null,"Aggiunto nella versione: v2.13.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Se true, si interrompe quando un'attivit\xe0 genera un errore."),(0,a.kt)("p",null,"Questa configurazione non influisce sul codice di uscita. Anche se viene utilizzato ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-bail"),", tutte le attivit\xe0 finiranno ma se una qualsiasi delle attivit\xe0 fallisce, il comando uscir\xe0 con un codice diverso da zero."),(0,a.kt)("p",null,"Esempio (esegui test in ogni pacchetto, continua se i test falliscono in uno di essi):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),(0,a.kt)("h3",{id:"--no-sort"},"--","[no-]","sort"),(0,a.kt)("p",null,"Aggiunto nella versione: v2.14.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Quando ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", i pacchetti vengono ordinati topologicamente (dipendenze prima dei dipendenti). Passa ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-sort")," per disabilitare."),(0,a.kt)("p",null,"Esempio:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),(0,a.kt)("h3",{id:"--reverse"},"--reverse"),(0,a.kt)("p",null,"Aggiunto nella versione: v5.17.1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predefinito: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"boolean"))),(0,a.kt)("p",null,"Quando ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", l'ordine dei pacchetti viene invertito."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),(0,a.kt)("h2",{id:"pnpm--r-exec"},"pnpm -r exec"),(0,a.kt)("p",null,"Added in: v2.9.0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r exec -- <command> [args...]\n")),(0,a.kt)("p",null,"This command runs a command in each package of the monorepo."),(0,a.kt)("p",null,"The name of the current package is available through the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,a.kt)("p",null,"Esempi:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# prune node_modules installations for all packages\npnpm -r exec -- rm -rf node_modules\n# view package information for all packages\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,a.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/it/5.x/filtering"},"Ulteriori informazioni sui filtri.")))}m.isMDXComponent=!0}}]);