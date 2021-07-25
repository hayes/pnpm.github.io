(self.webpackChunk=self.webpackChunk||[]).push([[1492],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7689);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2044:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>l,toc:()=>s,default:()=>d});var n=r(2791),i=r(9698),a=(r(7689),r(9848)),o=["components"],c={id:"pack",title:"pnpm pack"},p=void 0,l={unversionedId:"cli/pack",id:"version-6.x/cli/pack",isDocsHomePage:!1,title:"pnpm pack",description:"Create a tarball from a package.",source:"@site/versioned_docs/version-6.x/cli/pack.md",sourceDirName:"cli",slug:"/cli/pack",permalink:"/cli/pack",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-6.x/cli/pack.md",version:"6.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1627170222,formattedLastUpdatedAt:"7/24/2021",frontMatter:{id:"pack",title:"pnpm pack"},sidebar:"version-6.x/docs",previous:{title:"pnpm publish",permalink:"/cli/publish"},next:{title:"pnpm recursive",permalink:"/cli/recursive"}},s=[{value:"Options",id:"options",children:[{value:"--pack-destination &lt;dir&gt;",id:"--pack-destination-dir",children:[]}]}],u={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a tarball from a package."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--pack-destination-dir"},"--pack-destination ","<","dir",">"),(0,a.kt)("p",null,"Directory in which ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm pack")," will save tarballs. The default is the current working directory."))}d.isMDXComponent=!0}}]);