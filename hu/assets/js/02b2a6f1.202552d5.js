"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3097],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},541:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>o,toc:()=>s,default:()=>m});var a=n(98),r=n(6862),l=(n(9496),n(9613)),i=["components"],p={id:"filtering",title:"Sz\u0171r\xe9s"},c=void 0,o={unversionedId:"filtering",id:"version-5.x/filtering",isDocsHomePage:!1,title:"Sz\u0171r\xe9s",description:"Added in: v2.13.0",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-5.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/hu/5.x/filtering",editUrl:"https://crowdin.com/project/pnpm/hu",tags:[],version:"5.x",frontMatter:{id:"filtering",title:"Sz\u0171r\xe9s"},sidebar:"version-5.x/docs",previous:{title:"Configuring",permalink:"/hu/5.x/configuring"},next:{title:"pnpm add <pkg>",permalink:"/hu/5.x/cli/add"}},s=[{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",children:[]},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",children:[]},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",children:[]},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",children:[]},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",children:[]},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",children:[]},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory-1",children:[]},{value:"--filter &quot;<since>&quot;",id:"--filter-since",children:[]},{value:"Multiplicity",id:"multiplicity",children:[]},{value:"Excluding",id:"excluding",children:[]},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",children:[]}],d={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Added in: v2.13.0"),(0,l.kt)("p",null,"A sz\u0171r\xe9s lehet\u0151v\xe9 teszi a parancsok korl\xe1toz\xe1s\xe1t a csomagok megadott r\xe9sz\xe9re."),(0,l.kt)("p",null,"pnpm supports a rich selector syntax for picking packages by name or by relation."),(0,l.kt)("p",null,"Selectors may be specified via the ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter")," flag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <command> --filter <package_selector>\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"An article that compares Lerna's filtering to pnpm's")))),(0,l.kt)("h2",{id:"--filter-package_name"},"--filter ","<","package_name>"),(0,l.kt)("p",null,"Added in: v2.13.0"),(0,l.kt)("p",null,"To select an exact package, just specify its name (",(0,l.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") or use a pattern to select a set of packages (",(0,l.kt)("inlineCode",{parentName:"p"},"@scope/*"),")."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/core"\npnpm test --filter "@babel/*"\npnpm test --filter "*core"\n')),(0,l.kt)("h2",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),(0,l.kt)("p",null,"Added in: v2.13.0"),(0,l.kt)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the package name with an ellipsis: ",(0,l.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". For instance, the next command will run tests of ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," and all of its dependencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter foo...\n")),(0,l.kt)("p",null,"You may use a pattern to select a set of root packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/preset-*..."\n')),(0,l.kt)("h2",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),(0,l.kt)("p",null,"Added in: v4.4.0"),(0,l.kt)("p",null,"To ONLY select the dependencies of a package (both direct and non-direct), suffix the name with the aforementioned ellipsis preceded by a chevron. For instance, the next command will run tests for all of ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),"'s dependencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "foo^..."\n')),(0,l.kt)("h2",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),(0,l.kt)("p",null,"Added in: v2.14.0"),(0,l.kt)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix the package name with an ellipsis: ",(0,l.kt)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, this will run the tests of ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," and all packages dependent on it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo\n")),(0,l.kt)("h2",{id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),(0,l.kt)("p",null,"Added in: v4.4.0"),(0,l.kt)("p",null,"To ONLY select a package's dependents (both direct and non-direct), prefix the package name with an ellipsis followed by a chevron. For instance, this will run tests for all packages dependent on ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'pnpm test --filter "...^foo"\n')),(0,l.kt)("h2",{id:"--filter-directory"},"--filter ./","<","directory>"),(0,l.kt)("p",null,"Added in: v2.15.0"),(0,l.kt)("p",null,"To only select packages under the specified directory, you may specify any absolute path, typically in POSIX format."),(0,l.kt)("h2",{id:"--filter-directory-1"},"--filter {","<","directory>}"),(0,l.kt)("p",null,"Added in: v4.7.0"),(0,l.kt)("p",null,"Includes all projects that are under the specified directory."),(0,l.kt)("p",null,"It may be used with the ellipsis and chevron operators to select dependents/dependencies as well:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter ...{<directory>}\npnpm <cmd> --filter {<directory>}...\npnpm <cmd> --filter ...{<directory>}...\n")),(0,l.kt)("p",null,"It may also be combined with ",(0,l.kt)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed projects inside a directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm <cmd> --filter "{packages}[origin/master]"\npnpm <cmd> --filter "...{packages}[origin/master]"\npnpm <cmd> --filter "{packages}[origin/master]..."\npnpm <cmd> --filter "...{packages}[origin/master]..."\n')),(0,l.kt)("p",null,"Or you may select all packages from a directory with names matching the given pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'pnpm <cmd> --filter "@babel/*{components}"\npnpm <cmd> --filter "@babel/*{components}[origin/master]"\npnpm <cmd> --filter "...@babel/*{components}[origin/master]"\n')),(0,l.kt)("h2",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,l.kt)("p",null,"Added in: v4.6.0"),(0,l.kt)("p",null,"Selects all the packages changed since the specified commit/branch. May be suffixed or prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),(0,l.kt)("p",null,"For example, the next command will run tests in all changed packages since ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "...[origin/master]"\n')),(0,l.kt)("h2",{id:"multiplicity"},"Multiplicity"),(0,l.kt)("p",null,"When packages are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo --filter bar --filter baz...\n")),(0,l.kt)("h2",{id:"excluding"},"Excluding"),(0,l.kt)("p",null,"Added in: v5.8.0"),(0,l.kt)("p",null,'Any of the filter selectors may work as exclusion operators when they have a leading "!". In zsh (and possibly other shells), "!" should be escaped: ',(0,l.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,l.kt)("p",null,"For instance, this will run a command in all projects except for ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!foo\n")),(0,l.kt)("p",null,"And this will run a command in all projects that are not under the ",(0,l.kt)("inlineCode",{parentName:"p"},"lib")," directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!./lib\n")),(0,l.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,l.kt)("p",null,"Added in: v5.14.0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. If they are, the dependent packages of such modified packages are not included."),(0,l.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')))}m.isMDXComponent=!0}}]);