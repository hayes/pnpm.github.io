"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6069],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var p=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,p)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,p,o=function(e,n){if(null==e)return{};var t,p,o={},a=Object.keys(e);for(p=0;p<a.length;p++)t=a[p],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)t=a[p],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=p.createContext({}),s=function(e){var n=p.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return p.createElement(m.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return p.createElement(p.Fragment,{},n)}},u=p.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),c=o,k=u["".concat(m,".").concat(c)]||u[c]||i[c]||a;return t?p.createElement(k,r(r({ref:n},d),{},{components:t})):p.createElement(k,r({ref:n},d))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=t[s];return p.createElement.apply(null,r)}return p.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5625:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>m,metadata:()=>s,assets:()=>d,toc:()=>i,default:()=>c});var p=t(98),o=t(6862),a=(t(9496),t(9613)),r=["components"],l={title:"\u30d5\u30e9\u30c3\u30c8\u306a node_modules \u304c\u552f\u4e00\u306e\u65b9\u6cd5\u3067\u306f\u3042\u308a\u307e\u305b\u3093",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"},m=void 0,s={permalink:"/ja/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://crowdin.com/project/pnpm/ja",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"\u30d5\u30e9\u30c3\u30c8\u306a node_modules \u304c\u552f\u4e00\u306e\u65b9\u6cd5\u3067\u306f\u3042\u308a\u307e\u305b\u3093",description:"pnpm \u306e\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u3001pnpm \u304c\u751f\u6210\u3059\u308b node_modules \u306e\u5947\u5999\u306a\u69cb\u9020\u306b\u3064\u3044\u3066\u3088\u304f\u805e\u304b\u308c\u307e\u3059\u3002 \u306a\u305c\u5e73\u5766\u306a\u69cb\u9020\u3092\u4f7f\u7528\u3057\u306a\u3044\u306e\u3067\u3057\u3087\u3046\u304b\u3002 \u4f9d\u5b58\u306e\u3055\u3089\u306b\u305d\u306e\u4f9d\u5b58\u306f\u3069\u3053\u306b\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002",date:"2020-05-27T00:00:00.000Z",formattedDate:"2020\u5e745\u670827\u65e5",tags:[],readingTime:1.15,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"}],prevItem:{title:"pnpm \u3067\u306e\u30ce\u30fc\u30c9\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u95a2\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u8a2d\u5b9a",permalink:"/ja/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},d={authorsImageUrls:[void 0]},i=[],u={toc:i};function c(e){var n=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,p.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"pnpm \u306e\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u3001pnpm \u304c\u751f\u6210\u3059\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u306e\u5947\u5999\u306a\u69cb\u9020\u306b\u3064\u3044\u3066\u3088\u304f\u805e\u304b\u308c\u307e\u3059\u3002 \u306a\u305c\u5e73\u5766\u306a\u69cb\u9020\u3092\u4f7f\u7528\u3057\u306a\u3044\u306e\u3067\u3057\u3087\u3046\u304b\u3002 \u4f9d\u5b58\u306e\u3055\u3089\u306b\u305d\u306e\u4f9d\u5b58\u306f\u3069\u3053\u306b\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001npm \u3084 Yarn \u306e\u751f\u6210\u3059\u308b\u30d5\u30e9\u30c3\u30c8\u306a ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u306b\u99b4\u67d3\u307f\u306e\u3042\u308b\u8aad\u8005\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002 npm \u304c v3 \u304b\u3089\u30d5\u30e9\u30c3\u30c8\u306a ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u3092\u63a1\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u3063\u305f\u7406\u7531\u306b\u3064\u3044\u3066\u306f\u3001 ",(0,a.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"\u306a\u305c pnpm \u304c\u5fc5\u8981\u306a\u306e\u3067\u3057\u3087\u3046\u304b (\u82f1\u8a9e)")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("p",null,"\u3067\u306f\u3001\u306a\u305c pnpm \u306f\u901a\u5e38\u3068\u306f\u7570\u306a\u308b\u69cb\u9020\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u3092\u4f7f\u7528\u3059\u308b\u306e\u3067\u3057\u3087\u3046\u3002 \u8a66\u3057\u306b 2 \u3064\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4f5c\u6210\u3057\u3066\u3001\u7247\u65b9\u306b\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"npm add express")," \u3092\u3001\u3082\u3046\u4e00\u65b9\u306b\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm add express")," \u3092\u5b9f\u884c\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002 npm \u306e\u65b9\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u3042\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},".bin\naccepts\narray-flatten\nbody-parser\nbytes\ncontent-disposition\ncookie-signature\ncookie\ndebug\ndepd\ndestroy\nee-first\nencodeurl\nescape-html\netag\nexpress\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules"},"\u3053\u3061\u3089")," \u3067\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5168\u4f53\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305d\u3057\u3066\u3001\u3053\u3061\u3089\u304c pnpm \u304c\u751f\u6210\u3059\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},".pnpm\n.modules.yaml\nexpress\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules"},"\u3053\u3061\u3089")," \u304b\u3089\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5168\u4f53\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4f9d\u5b58\u306e\u3059\u3079\u3066\u306f\u3069\u3053\u306b\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u914d\u4e0b\u306b\u306f\u3001\u30d5\u30a9\u30eb\u30c0\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},".pnpm")," \u306e\u307f\u304c\u5b58\u5728\u3057\u3001\u3042\u3068\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"express")," \u3068\u3044\u3046\u540d\u524d\u306e\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3067\u3059\u3002 \u4eca\u56de\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"express")," \u3057\u304b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u3053\u308c\u306e\u307f\u306a\u306e\u3067\u3059\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"pnpm \u306e\u3053\u306e\u53b3\u683c\u3055\u304c\u3069\u3046\u3057\u3066\u3044\u3044\u306e\u304b\u3001\u3068\u3044\u3046\u3053\u3068\u306b\u3046\u3044\u3066\u306f ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308"},"\u3053\u3061\u3089")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"express")," \u306e\u4e2d\u8eab\u304c\u3069\u3046\u306a\u3063\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25b8 .pnpm\n  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n    .modules.yaml\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"express")," \u306e\u4e2d\u306b\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u304c\u306a\u3044\u306e\u3067\u3057\u3087\u3046\u304b\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"express")," \u306e\u4f9d\u5b58\u306e\u3059\u3079\u3066\u306f\u3069\u3053\u306b\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"express")," \u304c\u305f\u3060\u306e\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3067\u3042\u308b\u3068\u3044\u3046\u3068\u3053\u308d\u306b\u4ed5\u639b\u3051\u304c\u3042\u308a\u307e\u3059\u3002 Node.js \u306f\u4f9d\u5b58\u89e3\u6c7a\u3092\u3059\u308b\u969b\u306b\u3001\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3067\u3042\u308b\u304b\u306b\u95a2\u308f\u3089\u305a\u3001\u5b9f\u969b\u306e\u30d1\u30b9\u3092\u4f7f\u3044\u307e\u3059\u3002 \u3057\u304b\u3057\u3001\u4eca\u6c17\u306b\u3057\u3066\u3044\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"express")," \u306e\u672c\u5f53\u306e\u5834\u6240\u306f\u3069\u3053\u306a\u306e\u3067\u3057\u3087\u3046\u304b\u3002"),(0,a.kt)("p",null,"\u305d\u308c\u304c\u3053\u3053\u306b\u306a\u308a\u307e\u3059: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express"},"node_modules/.pnpm/express@4.17.1/node_modules/express")),(0,a.kt)("p",null,"\u3053\u308c\u3067\u3001",(0,a.kt)("inlineCode",{parentName:"p"},".pnpm/")," \u30d5\u30a9\u30eb\u30c0\u306e\u5f79\u5272\u3082\u308f\u304b\u308a\u307e\u3057\u305f\u306d\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},".pnpm/")," \u306f\u3059\u3079\u3066\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30d5\u30e9\u30c3\u30c8\u306a\u30d5\u30a9\u30eb\u30c0\u30fc\u69cb\u6210\u306b\u3057\u3066\u4fdd\u5b58\u3057\u3001\u5404\u4f9d\u5b58\u306f\u6b21\u306e\u3088\u3046\u306a\u547d\u540d\u898f\u5247\u306b\u5f93\u3063\u305f\u30d5\u30a9\u30eb\u30c0\u306b\u683c\u7d0d\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},".pnpm/<name>@<version>/node_modules/<name>\n")),(0,a.kt)("p",null,"\u3053\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4eee\u60f3\u30b9\u30c8\u30a2\u3068\u547c\u3093\u3067\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30d5\u30e9\u30c3\u30c8\u306f\u69cb\u9020\u306b\u3088\u3063\u3066\u3001npm v2 \u306b\u3088\u308b\u30cd\u30b9\u30c8\u3055\u308c\u305f ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u3067\u306e\u3001\u30d1\u30b9\u540d\u304c\u9577\u304f\u306a\u308a\u3059\u304e\u308b\u554f\u984c\u3092\u89e3\u6c7a\u3057\u3001\u3055\u3089\u306b npm v3,4,5,6 \u3084 Yarn v1 \u304c\u751f\u6210\u3059\u308b\u30d5\u30e9\u30c3\u30c8\u306a ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u3068\u306f\u9055\u3044\u3001\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u305d\u308c\u305e\u308c\u72ec\u7acb\u3055\u305b\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4eca\u5ea6\u306f\u672c\u7269\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"express")," \u306e\u4e2d\u8eab\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n")),(0,a.kt)("p",null,"\u3053\u308c\u306f\u9a19\u3055\u308c\u3066\u3044\u308b\u3093\u3067\u3057\u3087\u3046\u304b\uff1f ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u306f\u3084\u306f\u308a\u3042\u308a\u307e\u305b\u3093\uff01 pnpm \u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u306b\u5bfe\u3059\u308b\u7b2c\u4e8c\u306e\u4ed5\u639b\u3051\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4f9d\u5b58\u306f\u3001\u305d\u308c\u81ea\u8eab\u3068\u540c\u3058\u968e\u5c64\u306b\u7f6e\u304b\u308c\u3066\u3044\u308b\u70b9\u306b\u3042\u308a\u307e\u3059\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"express")," \u306e\u4f9d\u5b58\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},".pnpm/express@4.17.1/node_modules/express/node_modules/")," \u3067\u306f\u306a\u304f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules"},".pnpm/express@4.17.1/node_modules/")," \u306b\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25be .pnpm\n    \u25b8 accepts@1.3.5\n    \u25b8 array-flatten@1.1.1\n    ...\n    \u25be express@4.16.3\n      \u25be node_modules\n        \u25b8 accepts\n        \u25b8 array-flatten\n        \u25b8 body-parser\n        \u25b8 content-disposition\n        ...\n        \u25b8 etag\n        \u25be express\n          \u25b8 lib\n            History.md\n            index.js\n            LICENSE\n            package.json\n            Readme.md\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"express")," \u306e\u4f9d\u5b58\u306e\u3059\u3079\u3066\u306f\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3067\u3042\u308a\u3001\u305d\u308c\u3089\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm/")," \u5185\u306e\u9069\u5207\u306a\u5834\u6240\u3078\u3068\u30ea\u30f3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"express")," \u306e\u4f9d\u5b58\u306f1\u3064\u4e0a\u306e\u968e\u5c64\u306b\u7f6e\u304f\u3053\u3068\u3067\u3001\u5faa\u74b0\u3057\u305f\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u306b\u306a\u308b\u3053\u3068\u3092\u56de\u907f\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u898b\u3066\u5206\u304b\u308b\u901a\u308a\u3001pnpm \u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u306e\u69cb\u9020\u306f\u6700\u521d\u306f\u73cd\u3057\u304f\u601d\u3048\u307e\u3057\u305f\u304c\u3001"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u305d\u306e\u69cb\u9020\u306f\u5b8c\u5168\u306b Node.js \u4e92\u63db\u306a\u3082\u306e\u3067\u3042\u308a\u3001"),(0,a.kt)("li",{parentName:"ol"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u305d\u306e\u4f9d\u5b58\u3068\u3068\u3082\u306b\u9069\u5207\u306b\u30b0\u30eb\u30fc\u30d7\u5316\u3055\u308c\u3044\u307e\u3059\u3002")),(0,a.kt)("p",null,"peer dependency \u304c\u3042\u308b\u5834\u5408\u306f\u3001\u69cb\u9020\u306f ",(0,a.kt)("a",{parentName:"p",href:"/how-peers-are-resolved"},"\u3082\u3046\u5c11\u3057\u8907\u96d1")," \u306b\u306f\u306a\u308a\u307e\u3059\u304c\u3001\u305d\u308c\u3067\u3082\u8003\u3048\u65b9\u306f\u540c\u3058\u3067\u3059\uff1a\u30d5\u30e9\u30c3\u30c8\u306a\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020\u3092\u5229\u7528\u3057\u3066\u3001\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u306b\u3088\u308a\u30cd\u30b9\u30c8\u3055\u308c\u305f\u69cb\u9020\u3092\u751f\u6210\u3057\u307e\u3059\u3002"))}c.isMDXComponent=!0}}]);