(self.webpackChunk=self.webpackChunk||[]).push([[8978],{9848:(e,a,n)=>{"use strict";n.d(a,{Zo:()=>o,kt:()=>u});var t=n(7689);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function k(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=t.createContext({}),d=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},o=function(e){var a=d(e.components);return t.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},s=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,o=k(e,["components","mdxType","originalType","parentName"]),s=d(n),u=l,c=s["".concat(p,".").concat(u)]||s[u]||m[u]||r;return n?t.createElement(c,i(i({ref:a},o),{},{components:n})):t.createElement(c,i({ref:a},o))}));function u(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var k={};for(var p in a)hasOwnProperty.call(a,p)&&(k[p]=a[p]);k.originalType=e,k.mdxType="string"==typeof e?e:l,i[1]=k;for(var d=2;d<r;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6451:(e,a,n)=>{"use strict";n.r(a),n.d(a,{frontMatter:()=>k,metadata:()=>p,toc:()=>d,default:()=>m});var t=n(1424),l=n(2489),r=(n(7689),n(9848)),i=["components"],k={id:"add",title:"pnpm add <paket-ad\u0131>"},p={unversionedId:"cli/add",id:"version-6.x/cli/add",isDocsHomePage:!1,title:"pnpm add <paket-ad\u0131>",description:"Belirtilen paketi ve ba\u011f\u0131ml\u0131 oldu\u011fu di\u011fer paketleri y\xfckler. Komutun varsay\u0131lan eylemi, eklemek istenilen paketi production seviyesinde, yani dependencies k\u0131sm\u0131na tan\u0131mlayarak y\xfckler.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/tr/cli/add",editUrl:"https://crowdin.com/project/pnpm/tr",version:"6.x",frontMatter:{id:"add",title:"pnpm add <paket-ad\u0131>"},sidebar:"version-6.x/docs",previous:{title:"Filtreleme",permalink:"/tr/filtering"},next:{title:"pnpm install",permalink:"/tr/cli/install"}},d=[{value:"K\u0131saca;",id:"k\u0131saca",children:[]},{value:"Desteklenen paket kaynaklar\u0131/konumlar\u0131",id:"desteklenen-paket-kaynaklar\u0131konumlar\u0131",children:[{value:"<code>npm</code> kay\u0131tlar\u0131ndan y\xfckleme",id:"npm-kay\u0131tlar\u0131ndan-y\xfckleme",children:[]},{value:"\xc7al\u0131\u015fma alan\u0131ndan/Workspace&#39;den y\xfckleme",id:"\xe7al\u0131\u015fma-alan\u0131ndanworkspaceden-y\xfckleme",children:[]},{value:"Yerel dosya sisteminden y\xfckleme",id:"yerel-dosya-sisteminden-y\xfckleme",children:[]},{value:"Tarball linki ile y\xfckleme",id:"tarball-linki-ile-y\xfckleme",children:[]},{value:"Git deposundan y\xfckleme",id:"git-deposundan-y\xfckleme",children:[]}]},{value:"Parametreler",id:"parametreler",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",children:[]},{value:"--global",id:"--global",children:[]},{value:"--workspace",id:"--workspace",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],o={toc:d};function m(e){var a=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Belirtilen paketi ve ba\u011f\u0131ml\u0131 oldu\u011fu di\u011fer paketleri y\xfckler. Komutun varsay\u0131lan eylemi, eklemek istenilen paketi production seviyesinde, yani ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," k\u0131sm\u0131na tan\u0131mlayarak y\xfckler."),(0,r.kt)("h2",{id:"k\u0131saca"},"K\u0131saca;"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Komut"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0130\u015flevi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dependencies")," k\u0131sm\u0131na tan\u0131mlayarak y\xfckler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"devDependencies")," k\u0131sm\u0131na tan\u0131mlayarak y\xfckler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"optionalDependencies")," k\u0131sm\u0131na tan\u0131mlayarak y\xfckler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,r.kt)("td",{parentName:"tr",align:null},"Paketin, ",(0,r.kt)("inlineCode",{parentName:"td"},"next")," etiketli s\xfcr\xfcm\xfcn\xfc y\xfckler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Paketin, ",(0,r.kt)("inlineCode",{parentName:"td"},"3.0.0")," s\xfcr\xfcm\xfcn\xfc y\xfckler")))),(0,r.kt)("h2",{id:"desteklenen-paket-kaynaklar\u0131konumlar\u0131"},"Desteklenen paket kaynaklar\u0131/konumlar\u0131"),(0,r.kt)("h3",{id:"npm-kay\u0131tlar\u0131ndan-y\xfckleme"},(0,r.kt)("inlineCode",{parentName:"h3"},"npm")," kay\u0131tlar\u0131ndan y\xfckleme"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add paket-ismi"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"paket-ismi")," paketinin son s\xfcr\xfcm\xfcn\xfc varsay\u0131lan olarak ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm veri taban\u0131"),"'ndan y\xfckler. Paketi ba\u015fka kaynaktan y\xfcklemek istersen e\u011fer, kaynak olarak tarball dosya linki kullanabilirsin (bkz. ",(0,r.kt)("a",{parentName:"p",href:"#install-from-remote-tarball"},"ilgili k\u0131s\u0131m"),")."),(0,r.kt)("p",null,"Paket kurulumunu a\u015fa\u011f\u0131daki alternatif \xf6rneklerle de yapabilirsin:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"tag/etiket belirterek: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,r.kt)("li",{parentName:"ul"},"s\xfcr\xfcm belirterek: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,r.kt)("li",{parentName:"ul"},"iki s\xfcr\xfcm aral\u0131\u011f\u0131 belirterek: ",(0,r.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0<0.2.0"'))),(0,r.kt)("h3",{id:"\xe7al\u0131\u015fma-alan\u0131ndanworkspaceden-y\xfckleme"},"\xc7al\u0131\u015fma alan\u0131ndan/Workspace'den y\xfckleme"),(0,r.kt)("p",null,"Paket kurulumu yaparken ve ",(0,r.kt)("a",{parentName:"p",href:"/tr/workspaces"},"\xe7al\u0131\u015fma alan\u0131")," i\xe7erisinde \xe7al\u0131\u015f\u0131rken; y\xfcklemek istenilen paket ",(0,r.kt)("a",{parentName:"p",href:"/tr/workspaces#link-workspace-packages"},(0,r.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," ayar\u0131n\u0131n tan\u0131ml\u0131 olmas\u0131 veya olmamas\u0131 ve ",(0,r.kt)("a",{parentName:"p",href:"/tr/workspaces#workspace-ranges-workspace"},(0,r.kt)("inlineCode",{parentName:"a"},"workspace: s\xfcr\xfcm aral\u0131\u011f\u0131"))," kullan\u0131lmas\u0131 durumuna ba\u011fl\u0131 olarak, sadece belirtilen kaynaktan y\xfcklenir."),(0,r.kt)("h3",{id:"yerel-dosya-sisteminden-y\xfckleme"},"Yerel dosya sisteminden y\xfckleme"),(0,r.kt)("p",null,"Yerel dosya sisteminden y\xfcklemenin iki yolu var:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"tarball dosyas\u0131 kullanarak (",(0,r.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".tar.gz")," veya ",(0,r.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,r.kt)("li",{parentName:"ol"},"bir dizini kaynak olarak belirterek")),(0,r.kt)("p",null,"\u015eu \u015fekilde:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,r.kt)("p",null,"Bir dizini kaynak olarak belirterek y\xfckleme yapt\u0131\u011f\u0131nda, projenin ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," klas\xf6r\xfc i\xe7erisinde belirtilen dizin i\xe7in sembolik ba\u011f (symlink) olu\u015fturulur. Bu i\u015flem ayn\u0131 zamanda ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm link")," komutu ile ayn\u0131 \u015fekilde \xe7al\u0131\u015f\u0131r."),(0,r.kt)("h3",{id:"tarball-linki-ile-y\xfckleme"},"Tarball linki ile y\xfckleme"),(0,r.kt)("p",null,'Belirtilecek olan link, "http://" veya "https://" ile ba\u015flamal\u0131 ve indirmeye uygun bir URL olmal\u0131d\u0131r.'),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,r.kt)("h3",{id:"git-deposundan-y\xfckleme"},"Git deposundan y\xfckleme"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,r.kt)("p",null,"Paketi, Git komut sistemi ile Git deposunu klonlayarak y\xfcklemesini yapar. Ayr\u0131ca, yayg\u0131n Git sa\u011flay\u0131c\u0131lar\u0131 i\xe7in \xf6zel protokol kullanarak da y\xfckleme yapabilirsin. \xd6rne\u011fin ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add github:kullan\u0131c\u0131-ad\u0131/depo-ad\u0131")),(0,r.kt)("p",null,"Git sa\u011flay\u0131c\u0131lar\u0131ndan \u015fu yollar ile y\xfckleme yapabilirsin:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"varsay\u0131lan branch'in son commit'i: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,r.kt)("li",{parentName:"ul"},"hedef commit'i belirterek: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,r.kt)("li",{parentName:"ul"},"hedef branch'i belirterek: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,r.kt)("li",{parentName:"ul"},"s\xfcr\xfcm aral\u0131\u011f\u0131 belirterek: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,r.kt)("h2",{id:"parametreler"},"Parametreler"),(0,r.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,r.kt)("p",null,"Belirtilen paketleri ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," k\u0131sm\u0131na tan\u0131mlayarak y\xfckler."),(0,r.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,r.kt)("p",null,"Belirtilen paketleri ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," k\u0131sm\u0131na tan\u0131mlayarak y\xfckler."),(0,r.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,r.kt)("p",null,"Belirtilen paketleri ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," k\u0131sm\u0131na tan\u0131mlayarak y\xfckler."),(0,r.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,r.kt)("p",null,"Y\xfcklenecek olan paketleri, pnpm'in varsay\u0131lan semver aral\u0131k operat\xf6r\xfcn\xfc kullanmadan y\xfckler. Yani, ",(0,r.kt)("inlineCode",{parentName:"p"},"^")," karakterini, s\xfcr\xfcm bilgisinin ba\u015f\u0131na eklenmez."),(0,r.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,r.kt)("p",null,"Added in: v3.2.0"),(0,r.kt)("p",null,"Paket y\xfcklerken ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-peer")," kullan\u0131ld\u0131\u011f\u0131nda y\xfcklenecek olan paketler, ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," k\u0131sm\u0131na eklenerek, bir ",(0,r.kt)("inlineCode",{parentName:"p"},"dev dependencies"),"'mi\u015f gibi y\xfcklenir."),(0,r.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,r.kt)("p",null,"S\xfcr\xfcm 3.6.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("p",null,"Workspace'in, root (ana) dizinine yeni bir paket y\xfcklemeye \xe7al\u0131\u015ft\u0131\u011f\u0131nda hata ile kar\u015f\u0131la\u015fmamak i\xe7in, ",(0,r.kt)("inlineCode",{parentName:"p"},"-W")," veya ",(0,r.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," parametresini kullanabilirsin."),(0,r.kt)("p",null,"\xd6rne\u011fin, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),(0,r.kt)("h3",{id:"--global"},"--global"),(0,r.kt)("p",null,"Paketi, global olarak y\xfckler."),(0,r.kt)("h3",{id:"--workspace"},"--workspace"),(0,r.kt)("p",null,"S\xfcr\xfcm 4.4.0 ve sonras\u0131nda ge\xe7erli"),(0,r.kt)("p",null,"Belirlenen paket workspace i\xe7erisinde bulundu\u011fu takdirde, hedef projeye dependency (ba\u011f) olarak y\xfckler."),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/tr/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);