"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[660],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=l,c=m["".concat(s,".").concat(k)]||m[k]||d[k]||r;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},623:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>m});var a=n(98),l=n(6862),r=(n(9496),n(9613)),i=["components"],o={id:"npmrc",title:".npmrc"},s=void 0,p={unversionedId:"npmrc",id:"version-5.x/npmrc",isDocsHomePage:!1,title:".npmrc",description:"pnpm gets its configuration from the command line, environment variables, and .npmrc files.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-5.x/npmrc.md",sourceDirName:".",slug:"/npmrc",permalink:"/tr/5.x/npmrc",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"5.x",frontMatter:{id:"npmrc",title:".npmrc"},sidebar:"version-5.x/docs",previous:{title:"package.json",permalink:"/tr/5.x/package_json"},next:{title:"pnpm-workspace.yaml",permalink:"/tr/5.x/pnpm-workspace_yaml"}},u=[{value:"Dependency Hoisting Settings",id:"dependency-hoisting-settings",children:[{value:"hoist",id:"hoist",children:[]},{value:"hoist-pattern",id:"hoist-pattern",children:[]},{value:"public-hoist-pattern",id:"public-hoist-pattern",children:[]},{value:"shamefully-hoist",id:"shamefully-hoist",children:[]}]},{value:"Node-Modules Ayarlar\u0131",id:"node-modules-ayarlar\u0131",children:[{value:"store-dir",id:"store-dir",children:[]},{value:"modules-dir",id:"modules-dir",children:[]},{value:"node-linker",id:"node-linker",children:[]},{value:"symlink",id:"symlink",children:[]},{value:"enable-modules-dir",id:"enable-modules-dir",children:[]},{value:"virtual-store-dir",id:"virtual-store-dir",children:[]},{value:"package-import-method",id:"package-import-method",children:[]}]},{value:"Lock Dosyas\u0131n\u0131n Ayarlar\u0131",id:"lock-dosyas\u0131n\u0131n-ayarlar\u0131",children:[{value:"lockfile",id:"lockfile",children:[]},{value:"prefer-frozen-lockfile",id:"prefer-frozen-lockfile",children:[]}]},{value:"Registry &amp; Authentication Settings",id:"registry--authentication-settings",children:[{value:"registry",id:"registry",children:[]},{value:"&lt;URL&gt;:_authToken",id:"url_authtoken",children:[]},{value:"&lt;URL&gt;:always-auth",id:"urlalways-auth",children:[]}]},{value:"Request Settings",id:"request-settings",children:[{value:"ca",id:"ca",children:[]},{value:"cafile",id:"cafile",children:[]},{value:"cert",id:"cert",children:[]},{value:"https-proxy",id:"https-proxy",children:[]},{value:"key",id:"key",children:[]},{value:"local-address",id:"local-address",children:[]},{value:"proxy",id:"proxy",children:[]},{value:"noproxy",id:"noproxy",children:[]},{value:"strict-ssl",id:"strict-ssl",children:[]},{value:"network-concurrency",id:"network-concurrency",children:[]},{value:"fetch-retries",id:"fetch-retries",children:[]},{value:"fetch-retry-factor",id:"fetch-retry-factor",children:[]},{value:"fetch-retry-mintimeout",id:"fetch-retry-mintimeout",children:[]},{value:"fetch-retry-maxtimeout",id:"fetch-retry-maxtimeout",children:[]}]},{value:"CLI Settings",id:"cli-settings",children:[{value:"no-color",id:"no-color",children:[]},{value:"loglevel",id:"loglevel",children:[]},{value:"strict-peer-dependencies",id:"strict-peer-dependencies",children:[]},{value:"use-beta-cli",id:"use-beta-cli",children:[]},{value:"recursive-install",id:"recursive-install",children:[]},{value:"engine-strict",id:"engine-strict",children:[]},{value:"npm-path",id:"npm-path",children:[]}]},{value:"Build Settings",id:"build-settings",children:[{value:"child-concurrency",id:"child-concurrency",children:[]},{value:"side-effects-cache",id:"side-effects-cache",children:[]},{value:"side-effects-cache-readonly",id:"side-effects-cache-readonly",children:[]},{value:"unsafe-perm",id:"unsafe-perm",children:[]}]},{value:"Other Settings",id:"other-settings",children:[{value:"use-running-store-server",id:"use-running-store-server",children:[]},{value:"save-prefix",id:"save-prefix",children:[]},{value:"tag",id:"tag",children:[]},{value:"global-dir",id:"global-dir",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"pnpm gets its configuration from the command line, environment variables, and ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc")," files."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm config")," command can be used to update and edit the contents of the user and global ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc")," files."),(0,r.kt)("p",null,"The four relevant files are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"per-project configuration file (",(0,r.kt)("inlineCode",{parentName:"li"},"/path/to/my/project/.npmrc"),")"),(0,r.kt)("li",{parentName:"ul"},"per-workspace configuration file (the directory that contains the ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm-workspace.yaml")," file)"),(0,r.kt)("li",{parentName:"ul"},"per-user configuration file (",(0,r.kt)("inlineCode",{parentName:"li"},"~/.npmrc"),")"),(0,r.kt)("li",{parentName:"ul"},"global configuration file (",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/npmrc"),")")),(0,r.kt)("p",null,"All ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc")," files are an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/INI_file"},"INI-formatted")," list of ",(0,r.kt)("inlineCode",{parentName:"p"},"key = value")," parameters."),(0,r.kt)("h2",{id:"dependency-hoisting-settings"},"Dependency Hoisting Settings"),(0,r.kt)("h3",{id:"hoist"},"hoist"),(0,r.kt)("p",null,"S\xfcr\xfcm 4.0.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"boolean"))),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", all dependencies are hoisted to ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm"),". This makes unlisted dependencies accessible to all packages inside ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,r.kt)("h3",{id:"hoist-pattern"},"hoist-pattern"),(0,r.kt)("p",null,"S\xfcr\xfcm 4.0.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"['","*","']")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"string[]"))),(0,r.kt)("p",null,"Tells pnpm which packages should be hoisted to ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm"),". By default, all packages are hoisted - however, if you know that only some flawed packages have phantom dependencies, you can use this option to exclusively hoist the phantom dependencies (recommended)."),(0,r.kt)("p",null,"\xd6rne\u011fin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"hoist-pattern[]=*eslint*\nhoist-pattern[]=*babel*\n")),(0,r.kt)("h3",{id:"public-hoist-pattern"},"public-hoist-pattern"),(0,r.kt)("p",null,"S\xfcr\xfcm 5.2.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"['","*","types","*","', '","*","eslint","*","', '@prettier/plugin-","*","', '","*","prettier-plugin-","*","']")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"string[]"))),(0,r.kt)("p",null,"Unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"hoist-pattern"),", which hoists dependencies to a hidden modules directory inside the virtual store, ",(0,r.kt)("inlineCode",{parentName:"p"},"public-hoist-pattern")," hoists dependencies matching the pattern to the root modules directory. Hoisting to the root modules directory means that application code will have access to phantom dependencies, even if they modify the resolution strategy improperly."),(0,r.kt)("p",null,"This setting is useful when dealing with some flawed pluggable tools that don't resolve dependencies properly."),(0,r.kt)("p",null,"\xd6rne\u011fin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"public-hoist-pattern[]=*plugin*\n")),(0,r.kt)("p",null,"Note: Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"shamefully-hoist")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," is the same as setting ",(0,r.kt)("inlineCode",{parentName:"p"},"public-hoist-pattern")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"."),(0,r.kt)("h3",{id:"shamefully-hoist"},"shamefully-hoist"),(0,r.kt)("p",null,"S\xfcr\xfcm 4.0.0 ve sonras\u0131nda ge\xe7erli (1.34.0 s\xfcr\xfcm\xfcnde ",(0,r.kt)("inlineCode",{parentName:"p"},"shamefully-flatten")," olarak eklendi)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"By default, pnpm creates a semistrict ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", meaning dependencies have access to undeclared dependencies but modules outside of ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," do not. With this layout, most of the packages in the ecosystem work with no issues. However, if some tooling only works when the hoisted dependencies are in the root of ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", you can set this to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to hoist them for you."),(0,r.kt)("h2",{id:"node-modules-ayarlar\u0131"},"Node-Modules Ayarlar\u0131"),(0,r.kt)("h3",{id:"store-dir"},"store-dir"),(0,r.kt)("p",null,"S\xfcr\xfcm 4.2.0 ve sonras\u0131nda ge\xe7erli (eski ad\u0131 ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"~/.pnpm-store")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"path"))),(0,r.kt)("p",null,"The location where all the packages are saved on the disk."),(0,r.kt)("p",null,"The store should be always on the same disk on which installation is happening, so there will be one store per disk. If there is a home directory on the current disk, then the store is created in ",(0,r.kt)("inlineCode",{parentName:"p"},"<home dir>/.pnpm-store"),". If there is no home on the disk, then the store is created at the root of the filesystem. For example, if installation is happening on a filesystem mounted at ",(0,r.kt)("inlineCode",{parentName:"p"},"/mnt"),", then the store will be created at ",(0,r.kt)("inlineCode",{parentName:"p"},"/mnt/.pnpm-store"),". The same goes for Windows systems."),(0,r.kt)("p",null,"It is possible to set a store from a different disk but in that case pnpm will copy packages from the store instead of hard-linking them, as hard links are only possible on the same filesystem."),(0,r.kt)("h3",{id:"modules-dir"},"modules-dir"),(0,r.kt)("p",null,"S\xfcr\xfcm 4.14.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"node_modules")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"path"))),(0,r.kt)("p",null,"The directory in which dependencies will be installed (instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),")."),(0,r.kt)("h3",{id:"node-linker"},"node-linker"),(0,r.kt)("p",null,"S\xfcr\xfcm 5.9.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"undefined")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"undefined"),", ",(0,r.kt)("strong",{parentName:"li"},"pnp"))),(0,r.kt)("p",null,"Defines what linker should be used for installing Node packages. By default, pnpm creates a linked modules directory, but the Plug'n'Play build and resolution strategy is supported as well. Plug'n'Play is an innovative strategy for Node that is ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"used by Yarn"),"."),(0,r.kt)("p",null,"It is recommended to also set ",(0,r.kt)("inlineCode",{parentName:"p"},"symlink")," setting to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," when using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnp")," as your linker."),(0,r.kt)("h3",{id:"symlink"},"symlink"),(0,r.kt)("p",null,"S\xfcr\xfcm 5.9.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"symlink")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", pnpm creates a virtual store directory without any symlinks. It is a useful setting together with ",(0,r.kt)("inlineCode",{parentName:"p"},"node-linker=pnp"),"."),(0,r.kt)("h3",{id:"enable-modules-dir"},"enable-modules-dir"),(0,r.kt)("p",null,"S\xfcr\xfcm 5.15.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", pnpm will not write any files to the modules directory (",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"). This is useful for when the modules directory is mounted with filesystem in userspace (FUSE). There is an experimental CLI that allows you to mount a modules directory with FUSE: ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pnpm/mount-modules"},"@pnpm/mount-modules"),"."),(0,r.kt)("h3",{id:"virtual-store-dir"},"virtual-store-dir"),(0,r.kt)("p",null,"S\xfcr\xfcm 4.1.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"node_modules/.pnpm")),(0,r.kt)("li",{parentName:"ul"},"Types: ",(0,r.kt)("strong",{parentName:"li"},"path"))),(0,r.kt)("p",null,"The directory with links to the store. All direct and indirect dependencies of the project are linked into this directory."),(0,r.kt)("p",null,"This is a useful setting that can solve issues with long paths on Windows. If you have some dependencies with very long paths, you can select a virtual store in the root of your drive (for instance ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\my-project-store"),")."),(0,r.kt)("p",null,"Or you can set the virtual store to ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm")," and add it to ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore"),". This will make stacktraces cleaner as paths to dependencies will be one directory higher."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," the virtual store cannot be shared between several projects. Every project should have its own virtual store (except for in workspaces where the root is shared)."),(0,r.kt)("h3",{id:"package-import-method"},"package-import-method"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.25.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"auto")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"auto"),", ",(0,r.kt)("strong",{parentName:"li"},"hardlink"),", ",(0,r.kt)("strong",{parentName:"li"},"copy"),", ",(0,r.kt)("strong",{parentName:"li"},"clone"))),(0,r.kt)("p",null,"Controls the way packages are imported from the store."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"auto")," - try to clone packages from the store. If cloning is not supported then hardlink packages from the store. If neither cloning nor linking is possible, fall back to copying"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hardlink")," - hard link packages from the store"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"copy")," - copy packages from the store"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"clone")," - clone (AKA copy-on-write or reference link) packages from the store")),(0,r.kt)("h2",{id:"lock-dosyas\u0131n\u0131n-ayarlar\u0131"},"Lock Dosyas\u0131n\u0131n Ayarlar\u0131"),(0,r.kt)("h3",{id:"lockfile"},"lockfile"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.32.0 ve sonras\u0131nda ge\xe7erli (eski ad\u0131 ",(0,r.kt)("inlineCode",{parentName:"p"},"shrinkwrap"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", pnpm won't read or generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file."),(0,r.kt)("h3",{id:"prefer-frozen-lockfile"},"prefer-frozen-lockfile"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.37.1 ve sonras\u0131nda ge\xe7erli (eski ad\u0131 ",(0,r.kt)("inlineCode",{parentName:"p"},"prefer-frozen-shrinkwrap"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")," (from v1.38.0)"),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"When set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and the available ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," satisfies the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," dependencies directive, a headless installation is performed. A headless installation skips all dependency resolution as it does not need to modify the lockfile."),(0,r.kt)("h2",{id:"registry--authentication-settings"},"Registry & Authentication Settings"),(0,r.kt)("h3",{id:"registry"},"registry"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://registry.npmjs.org/"},"https://registry.npmjs.org/"))),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"url"))),(0,r.kt)("p",null,"The base URL of the npm package registry (trailing slash included)."),(0,r.kt)("h4",{id:"scoperegistry"},"<","scope",">",":registry"),(0,r.kt)("p",null,"The npm registry that should be used for packages of the specified scope. For example, setting ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel:registry=https://example.com/packages/npm/")," will enforce that when you use ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add @babel/core"),", or any ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel")," scoped package, the package will be fetched from ",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.com/packages/npm")," instead of the default registry."),(0,r.kt)("h3",{id:"url_authtoken"},"<","URL",">",":_authToken"),(0,r.kt)("p",null,"Define the authentication bearer token to use when accessing the specified registry. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"//registry.npmjs.org/:_authToken=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx \n")),(0,r.kt)("p",null,"You may also use an environment variable. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n")),(0,r.kt)("h3",{id:"urlalways-auth"},"<","URL",">",":always-auth"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Force pnpm to always require authentication (even for GET requests) when accessing the specified registry. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"@babel:registry=https://gitlab.com/api/v4/packages/npm/\n//gitlab.com/api/v4/packages/npm/:always-auth=true\n\nregistry=https://registry.npmjs.org/\n//registry.npmjs.org/:always-auth=true\n")),(0,r.kt)("h2",{id:"request-settings"},"Request Settings"),(0,r.kt)("h3",{id:"ca"},"ca"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"The npm CA certificate")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"String, Array or null"))),(0,r.kt)("p",null,'The Certificate Authority signing certificate that is trusted for SSL connections to the registry. Values should be in PEM format (AKA "Base-64 encoded X.509 (.CER)"). For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ca="-----BEGIN CERTIFICATE-----\\nXXXX\\nXXXX\\n-----END CERTIFICATE-----"\n')),(0,r.kt)("p",null,"Set to null to only allow known registrars, or to a specific CA cert to trust only that specific signing authority."),(0,r.kt)("p",null,"Multiple CAs can be trusted by specifying an array of certificates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ca[]="..."\nca[]="..."\n')),(0,r.kt)("p",null,"See also the ",(0,r.kt)("inlineCode",{parentName:"p"},"strict-ssl")," config."),(0,r.kt)("h3",{id:"cafile"},"cafile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"path"))),(0,r.kt)("p",null,"A path to a file containing one or multiple Certificate Authority signing certificates. Similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ca")," setting, but allows for multiple CAs, as well as for the CA information to be stored in a file instead of being specified via CLI."),(0,r.kt)("h3",{id:"cert"},"cert"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"String"))),(0,r.kt)("p",null,'A client certificate to pass when accessing the registry. Values should be in PEM format (AKA "Base-64 encoded X.509 (.CER)"). For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-test"},'cert="-----BEGIN CERTIFICATE-----\\nXXXX\\nXXXX\\n-----END CERTIFICATE-----"\n')),(0,r.kt)("p",null,"It is not the path to a certificate file (and there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"certfile")," option)."),(0,r.kt)("h3",{id:"https-proxy"},"https-proxy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"url"))),(0,r.kt)("p",null,"A proxy to use for outgoing HTTPS requests. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"https_proxy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"http_proxy")," environment variables are set, their values will be used instead."),(0,r.kt)("h3",{id:"key"},"key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"String"))),(0,r.kt)("p",null,'A client key to pass when accessing the registry. Values should be in PEM format (AKA "Base-64 encoded X.509 (.CER)"). For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'key="-----BEGIN PRIVATE KEY-----\\nXXXX\\nXXXX\\n-----END PRIVATE KEY-----"\n')),(0,r.kt)("p",null,"It is not the path to a key file (and there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"keyfile")," option)."),(0,r.kt)("h3",{id:"local-address"},"local-address"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"undefined")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"IP Adresi"))),(0,r.kt)("p",null,"The IP address of the local interface to use when making connections to the npm registry. Must be IPv4 in versions of Node prior to 12.x."),(0,r.kt)("h3",{id:"proxy"},"proxy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"url"))),(0,r.kt)("p",null,"A proxy to use for outgoing http requests. If the HTTP_PROXY or http_proxy environment variables are set, proxy settings will be honored by the underlying request library."),(0,r.kt)("h3",{id:"noproxy"},"noproxy"),(0,r.kt)("p",null,"S\xfcr\xfcm 5.18.8 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"String"))),(0,r.kt)("p",null,"A comma-separated string of domain extensions that a proxy should not be used for."),(0,r.kt)("h3",{id:"strict-ssl"},"strict-ssl"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Whether or not to do SSL key validation when making requests to the registry via HTTPS."),(0,r.kt)("p",null,"See also the ",(0,r.kt)("inlineCode",{parentName:"p"},"ca")," option."),(0,r.kt)("h3",{id:"network-concurrency"},"network-concurrency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"16")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Say\u0131"))),(0,r.kt)("p",null,"Controls the maximum number of HTTP(S) requests to process simultaneously."),(0,r.kt)("h3",{id:"fetch-retries"},"fetch-retries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"2")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Say\u0131"))),(0,r.kt)("p",null,"How many times to retry if pnpm fails to fetch from the registry."),(0,r.kt)("h3",{id:"fetch-retry-factor"},"fetch-retry-factor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"10")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Say\u0131"))),(0,r.kt)("p",null,"The exponential factor for retry backoff."),(0,r.kt)("h3",{id:"fetch-retry-mintimeout"},"fetch-retry-mintimeout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"10000 (10 seconds)")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Say\u0131"))),(0,r.kt)("p",null,"The minimum (base) timeout for retrying requests."),(0,r.kt)("h3",{id:"fetch-retry-maxtimeout"},"fetch-retry-maxtimeout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"60000 (1 minute)")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Say\u0131"))),(0,r.kt)("p",null,"The maximum fallback timeout to ensure the retry factor does not make requests too long."),(0,r.kt)("h2",{id:"cli-settings"},"CLI Settings"),(0,r.kt)("h3",{id:"no-color"},"[no-]","color"),(0,r.kt)("p",null,"S\xfcr\xfcm 4.1.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"auto")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"auto"),", ",(0,r.kt)("strong",{parentName:"li"},"always"),", ",(0,r.kt)("strong",{parentName:"li"},"never"))),(0,r.kt)("p",null,"Controls colors in the output."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"auto")," - output uses colors when the standard output is a terminal or TTY."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"always")," - ignore the difference between terminals and pipes. You\u2019ll rarely want this; in most scenarios, if you want color codes in your redirected output, you can instead pass a ",(0,r.kt)("inlineCode",{parentName:"li"},"--color")," flag to the pnpm command to force it to use color codes. The default setting is almost always what you\u2019ll want."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"never")," - turns off colors. This is the setting used by ",(0,r.kt)("inlineCode",{parentName:"li"},"--no-color"),".")),(0,r.kt)("h3",{id:"loglevel"},"loglevel"),(0,r.kt)("p",null,"S\xfcr\xfcm 4.13.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"info")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"debug"),", ",(0,r.kt)("strong",{parentName:"li"},"info"),", ",(0,r.kt)("strong",{parentName:"li"},"warn"),", ",(0,r.kt)("strong",{parentName:"li"},"error"))),(0,r.kt)("p",null,"Any logs at or higher than the given level will be shown. You can instead pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--silent")," to turn off all output logs."),(0,r.kt)("h3",{id:"strict-peer-dependencies"},"strict-peer-dependencies"),(0,r.kt)("p",null,"S\xfcr\xfcm 2.15.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If this is enabled, commands will fail if there is a missing or invalid peer dependency in the tree."),(0,r.kt)("h3",{id:"use-beta-cli"},"use-beta-cli"),(0,r.kt)("p",null,"S\xfcr\xfcm 3.6.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Experimental option that enables beta features of the CLI. This means that you may get some changes to the CLI functionality that are breaking changes, or potentially bugs."),(0,r.kt)("h3",{id:"recursive-install"},"recursive-install"),(0,r.kt)("p",null,"S\xfcr\xfcm 5.4.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If this is enabled, the primary behaviour of ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," becomes that of ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install -r"),", meaning the install is performed on all workspace or subdirectory packages."),(0,r.kt)("p",null,"Else, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," will exclusively build the package in the current directory."),(0,r.kt)("h3",{id:"engine-strict"},"engine-strict"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"If this is enabled, pnpm will not install any package that claims to not be compatible with the current Node version."),(0,r.kt)("p",null,"Regardless of this configuration, installation will always fail if a project (not a dependency) specifies an incompatible version in its ",(0,r.kt)("inlineCode",{parentName:"p"},"engines")," field."),(0,r.kt)("h3",{id:"npm-path"},"npm-path"),(0,r.kt)("p",null,"S\xfcr\xfcm 4.8.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"path"))),(0,r.kt)("p",null,"The location of the npm binary that pnpm uses for some actions, like publishing."),(0,r.kt)("h2",{id:"build-settings"},"Build Settings"),(0,r.kt)("h3",{id:"child-concurrency"},"child-concurrency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"5")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Say\u0131"))),(0,r.kt)("p",null,"The maximum number of child processes to allocate simultaneously to build node_modules."),(0,r.kt)("h3",{id:"side-effects-cache"},"side-effects-cache"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.31.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean")),(0,r.kt)("li",{parentName:"ul"},"Stability: ",(0,r.kt)("strong",{parentName:"li"},"Experimental"))),(0,r.kt)("p",null,"Use and cache the results of (pre/post)install hooks."),(0,r.kt)("h3",{id:"side-effects-cache-readonly"},"side-effects-cache-readonly"),(0,r.kt)("p",null,"S\xfcr\xfcm 1.31.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean")),(0,r.kt)("li",{parentName:"ul"},"Stability: ",(0,r.kt)("strong",{parentName:"li"},"Experimental"))),(0,r.kt)("p",null,"Only use the side effects cache if present, do not create it for new packages."),(0,r.kt)("h3",{id:"unsafe-perm"},"unsafe-perm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"false")," IF running as root, ELSE ",(0,r.kt)("strong",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Set to true to enable UID/GID switching when running package scripts. If set explicitly to false, then installing as a non-root user will fail."),(0,r.kt)("h2",{id:"other-settings"},"Other Settings"),(0,r.kt)("h3",{id:"use-running-store-server"},"use-running-store-server"),(0,r.kt)("p",null,"S\xfcr\xfcm 2.5.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Tip: ",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"Only allows installation with a store server. If no store server is running, installation will fail."),(0,r.kt)("h3",{id:"save-prefix"},"save-prefix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"'^'")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"String"))),(0,r.kt)("p",null,"Configure how versions of packages installed to a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file get prefixed."),(0,r.kt)("p",null,"For example, if a package has version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.2.3"),", by default its version is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"^1.2.3")," which allows minor upgrades for that package, but after ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm config set save-prefix='~'")," it would be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"~1.2.3")," which only allows patch upgrades."),(0,r.kt)("p",null,"This setting is ignored when the added package has a range specified. For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add foo@2")," will set the version of ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),", regardless of the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"save-prefix"),"."),(0,r.kt)("h3",{id:"tag"},"tag"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"latest")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"String"))),(0,r.kt)("p",null,"If you ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add")," a package and you don't provide a specific version, then it will install the package at the version registered under the tag from this setting."),(0,r.kt)("p",null,"This also sets the tag that is added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"package@version")," specified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm tag")," command if no explicit tag is given."),(0,r.kt)("h3",{id:"global-dir"},"global-dir"),(0,r.kt)("p",null,"S\xfcr\xfcm 4.2.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"<","path to node",">","/pnpm-global")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"path"))),(0,r.kt)("p",null,"Specify a custom directory to store global packages."))}m.isMDXComponent=!0}}]);