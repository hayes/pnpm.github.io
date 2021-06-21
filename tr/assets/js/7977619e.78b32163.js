(self.webpackChunk=self.webpackChunk||[]).push([[9387],{9848:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>s,kt:()=>m});var t=r(7689);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?t.createElement(f,o(o({ref:n},s),{},{components:r})):t.createElement(f,o({ref:n},s))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7913:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>p,metadata:()=>l,toc:()=>c,default:()=>u});var t=r(1424),i=r(2489),a=(r(7689),r(9848)),o=["components"],p={id:"run",title:"pnpm run",original_id:"run"},l={unversionedId:"cli/run",id:"version-4.x/cli/run",isDocsHomePage:!1,title:"pnpm run",description:"Aliases: run-script",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/tr/4.x/cli/run",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x",frontMatter:{id:"run",title:"pnpm run",original_id:"run"},sidebar:"version-4.x/docs",previous:{title:"pnpm why",permalink:"/tr/4.x/cli/why"},next:{title:"pnpm test",permalink:"/tr/4.x/cli/test"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Parametreler",id:"parametreler",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--if-present",id:"--if-present",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:c};function u(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aliases: ",(0,a.kt)("inlineCode",{parentName:"p"},"run-script")),(0,a.kt)("p",null,"Runs a defined package script."),(0,a.kt)("h2",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"pnpm run [[-r] [--no-bail] [--no-sort] [--workspace-concurrency=<number>]]\n     <command> [-- <args>...]\n\npnpm multi run <command> [-- <args>...]\n\npnpm recursive run <command> [-- <args>...]\n")),(0,a.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run")," adds ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),". As of v3.5, when executed inside a workspace, ",(0,a.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),"."),(0,a.kt)("h2",{id:"parametreler"},"Parametreler"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),(0,a.kt)("h3",{id:"--if-present"},"--if-present"),(0,a.kt)("p",null,"Added in: v4.5.0"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tr/4.x/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);