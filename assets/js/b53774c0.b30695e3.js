"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[9304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),s=n(6010),o=n(2389),l=n(7392),i=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:k,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,l.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const T=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==T&&!g.some((e=>e.value===T)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${T}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,i.U)(),[N,Z]=(0,r.useState)(T),_=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=k){const e=v[k];null!=e&&e!==N&&g.some((t=>t.value===e))&&Z(e)}const x=e=>{const t=e.currentTarget,n=_.indexOf(t),a=g[n].value;a!==N&&(w(t),Z(a),null!=k&&y(k,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},f)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>_.push(e),onKeyDown:S,onClick:x},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},1363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),s=n(5488),o=n(5162);const l={sidebar_position:5,toc_max_heading_level:4},i="Session And Token",c={unversionedId:"flutter/theory/session-and-token",id:"flutter/theory/session-and-token",title:"Session And Token",description:"Session",source:"@site/docs/flutter/theory/session-and-token.mdx",sourceDirName:"flutter/theory",slug:"/flutter/theory/session-and-token",permalink:"/docs/flutter/theory/session-and-token",draft:!1,editUrl:"https://github.com/rookedsysc/rookedsysc_saurus.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/flutter/theory/session-and-token.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,toc_max_heading_level:4},sidebar:"flutter",previous:{title:"Text Form Field",permalink:"/docs/flutter/theory/text-form-field"},next:{title:"Pagination",permalink:"/docs/flutter/theory/pagination"}},u={},p=[{value:"Session",id:"session",level:2},{value:"Session\uc758 \ud2b9\uc9d5",id:"session\uc758-\ud2b9\uc9d5",level:3},{value:"Token",id:"token",level:2},{value:"Token\uc758 \ud2b9\uc9d5",id:"token\uc758-\ud2b9\uc9d5",level:3},{value:"Session Vs Token \ube44\uad50",id:"session-vs-token-\ube44\uad50",level:2},{value:"JWT\ub780?",id:"jwt\ub780",level:2},{value:"Reference",id:"reference",level:3},{value:"Refresh Token &amp; Access Token",id:"refresh-token--access-token",level:3},{value:"Token \uc0ac\uc6a9 \uacfc\uc815",id:"token-\uc0ac\uc6a9-\uacfc\uc815",level:4},{value:"Refresh Token \uc608\uc81c",id:"refresh-token-\uc608\uc81c",level:4}],d={toc:p};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"session-and-token"},"Session And Token"),(0,r.kt)("h2",{id:"session"},"Session"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Session \uc0dd\uc131",mdxType:"TabItem"},(0,r.kt)("img",{src:n(9483).Z})),(0,r.kt)(o.Z,{value:"Session \uc0ac\uc6a9",mdxType:"TabItem"},(0,r.kt)("img",{src:n(8771).Z})),(0,r.kt)(o.Z,{value:"Flow Chart",mdxType:"TabItem"},(0,r.kt)("img",{src:n(7251).Z}))),(0,r.kt)("h3",{id:"session\uc758-\ud2b9\uc9d5"},"Session\uc758 \ud2b9\uc9d5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Session\uc740 \ud2b9\uc218\ud55c ID \uac12\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"Session\uc740 ",(0,r.kt)("strong",{parentName:"li"},"\uc11c\ubc84\uc5d0\uc11c \uc0dd\uc131"),"\ub418\uba70 ",(0,r.kt)("strong",{parentName:"li"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \ucfe0\ud0a4\ub97c \ud1b5\ud574 \uc800\uc7a5"),"\ub41c\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc694\uccad\uc744 \ubcf4\ub0bc \ub54c Session ID\ub97c \uac19\uc774 \ubcf4\ub0b4\uba74 \ud604\uc7ac \uc694\uccad\uc744 \ubcf4\ub0b4\ub294 \uc0ac\uc6a9\uc790\uac00 \ub204\uad6c\uc778\uc9c0 \uc11c\ubc84\uc5d0\uc11c \uc54c \uc218 \uc788\ub2e4. (\uc694\uccad\ub9c8\ub2e4 \ub9e4\ubc88 \uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \ubb3c\uc5b4\ubcfc \ud544\uc694\uac00 \uc5c6\uc74c)"),(0,r.kt)("li",{parentName:"ol"},"Session ID\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ub418\uae30 \ub54c\ubb38\uc5d0 \uc694\uccad\uc774 \uc788\uc744 \ub54c\ub9c8\ub2e4 \ub370\uc774\ud130 \ubca0\uc774\uc2a4\ub97c \ud655\uc778\ud574\uc57c \ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uc11c\ubc84\uc5d0\uc11c \ub370\uc774\ud130\uac00 \uc800\uc7a5\ub418\uae30 \ub54c\ubb38\uc5d0 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \uc0ac\uc6a9\uc790 \uc815\ubcf4\uac00 \ub178\ucd9c\ub420 \uc704\ud5d8\uc774 \uc5c6\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ub370\uc774\ud130 \ubca0\uc774\uc2a4\uc5d0 Session\uc744 \uc800\uc7a5\ud574\uc57c\ud558\uae30 \ub54c\ubb38\uc5d0 ",(0,r.kt)("strong",{parentName:"li"},"Horizontal Scaling"),"\uc774 \uc5b4\ub835\ub2e4.")),(0,r.kt)("admonition",{title:"Horizontal Scaling?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\uc11c\ubc84\uc5d0\uc11c \ubd80\ud558\ub97c \ubd84\uc0b0\ud558\uae30 \uc704\ud574\uc11c \uc11c\ubc84\ub97c \uc218\ud3c9\uc801\uc73c\ub85c \ud655\uc7a5\ud558\ub294 \uac83\uc744 \ub73b\ud55c\ub2e4.")),(0,r.kt)("h2",{id:"token"},"Token"),(0,r.kt)("p",null,"\uc720\uc800\uc758 \uc815\ubcf4\ub97c Base 64\ub85c \uc778\ucf54\ub529\ub41c String \uac12\uc5d0 \uc800\uc7a5\ud558\ub294 \ub3c4\uad6c\ub97c \ub73b\ud55c\ub2e4."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Token \uc0dd\uc131 \ubc29\uc2dd",mdxType:"TabItem"},(0,r.kt)("img",{src:n(4112).Z})),(0,r.kt)(o.Z,{value:"Token \uc0ac\uc6a9 \ubc29\uc2dd",mdxType:"TabItem"},(0,r.kt)("img",{src:n(5721).Z})),(0,r.kt)(o.Z,{value:"Flow Chart",mdxType:"TabItem"},(0,r.kt)("img",{src:n(7766).Z}))),(0,r.kt)("h3",{id:"token\uc758-\ud2b9\uc9d5"},"Token\uc758 \ud2b9\uc9d5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Tokend\uc740 Header, Payload, Signature\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc73c\uba70 ",(0,r.kt)("strong",{parentName:"li"},"Base 64\ub85c \uc778\ucf54\ub529")," \ub418\uc5b4 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"Token\uc740 \uc11c\ubc84\uc5d0\uc11c \uc0dd\uc131\ub418\uba70 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc800\uc7a5\ub41c\ub2e4. (Session\uc774\ub791 \ub3d9\uc77c)"),(0,r.kt)("li",{parentName:"ol"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc694\uccad\uc744 \ubcf4\ub0bc \ub54c Token ID\ub97c \uac19\uc774 \ubcf4\ub0b4\uba74 \ud604\uc7ac \uc694\uccad\uc744 \ubcf4\ub0b4\ub294 \uc0ac\uc6a9\uc790\uac00 \ub204\uad6c\uc778\uc9c0 \uc11c\ubc84\uc5d0\uc11c \uc54c \uc218 \uc788\ub2e4. (\uc694\uccad\ub9c8\ub2e4 \ub9e4\ubc88 \uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \ubb3c\uc5b4\ubcfc \ud544\uc694 \uc5c6\uc74c) (Session\uc774\ub791 \ub3d9\uc77c)"),(0,r.kt)("li",{parentName:"ol"},"Token\uc740 ",(0,r.kt)("strong",{parentName:"li"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ub418\uc9c0 \uc54a\uace0 Signature \uac12\uc744 \uc774\uc6a9\ud574\uc11c \uac80\uc99d"),"\ud560 \uc218 \uc788\ub2e4. \uadf8\ub798\uc11c \uac80\uc99d\ud560 \ub54c\ub9c8\ub2e4 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ub9e4\ubc88 \ub4e4\uc5ec\ub2e4 \ubcfc \ud544\uc694\uac00 \uc5c6\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\uc815\ubcf4\uac00 \ubaa8\ub450 \ud1a0\ud070\uc5d0 \ub2f4\uaca8\uc788\uace0 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \ud1a0\ud070\uc744 \uc800\uc7a5\ud558\uae30 \ub54c\ubb38\uc5d0 ",(0,r.kt)("strong",{parentName:"li"},"\uc815\ubcf4 \uc720\ucd9c\uc758 \uc704\ud5d8"),"\uc774 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \ud544\uc694\uc5c6\uae30 \ub54c\ubb38\uc5d0 Horizontal Scaling\uc774 \uc27d\ub2e4.")),(0,r.kt)("h2",{id:"session-vs-token-\ube44\uad50"},"Session Vs Token \ube44\uad50"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\ube44\uad50 \uc694\uc18c"),(0,r.kt)("th",{parentName:"tr",align:null},"Session"),(0,r.kt)("th",{parentName:"tr",align:null},"Token"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc720\uc800 \uc815\ubcf4 \uc800\uc7a5 \uc704\uce58"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc11c\ubc84"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud074\ub77c\uc774\uc5b8\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc11c\ubc84\ub85c \ubcf4\ub0b4\ub294 \uc815\ubcf4\ub294?"),(0,r.kt)("td",{parentName:"tr",align:null},"\ucfe0\ud0a4"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud1a0\ud070")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc720\uc800 \uc815\ubcf4\ub97c \uac00\uc838\uc62c \ub54c \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ud655\uc778\ud574\uc57c \ud558\ub294\uac00?"),(0,r.kt)("td",{parentName:"tr",align:null},"O"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc778\uc99d \uc815\ubcf4\ub97c \uc77d\uc744 \uc218 \uc788\ub294\uac00?"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubd88\uac00\ub2a5"),(0,r.kt)("td",{parentName:"tr",align:null},"\uac00\ub2a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Horizontal Scaling\uc774 \uc26c\uc6b4\uac00?"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc5b4\ub824\uc6c0"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc26c\uc6c0")))),(0,r.kt)("h2",{id:"jwt\ub780"},"JWT\ub780?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Json Web Tokeno\uc758 \uc57d\uc790\ub85c ",(0,r.kt)("strong",{parentName:"li"},"\uc138\uc158\uacfc \ud1a0\ud070\uc744 \ud569\uce5c \uac83"),"\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Header, Payload, Signature\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc73c\uba70 ",(0,r.kt)("strong",{parentName:"li"},"Base 64\ub85c \uc778\ucf54\ub529")," \ub418\uc5b4 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Header\ub294 \ud1a0\ud070\uc758 \uc885\ub958\uc640 \uc554\ud638\ud654 \uc54c\uace0\ub9ac\uc998 \ub4f1 \ud1a0\ud070\uc5d0 \ub300\ud55c \uc815\ubcf4\uac00 \ub4e4\uc5b4\uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Payload\ub294 \ubc1c\ud589\uc77c, \ub9cc\ub8cc\uc77c, \uc0ac\uc6a9\uc790 ID \ub4f1 \uc0ac\uc6a9\uc791 \uac80\uc99d\uc5d0 \ud544\uc694\ud55c \uc815\ubcf4\uac00 \ub4e4\uc5b4\uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Signature"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"Base64 \uc778\ucf54\ub529\ub41c Header\uc640 Payload\ub97c \uc54c\uace0\ub9ac\uc998\uc73c\ub85c \uc2f8\uc778\ud55c \uac12"),"\uc774 \ub4e4\uc5b4\uc788\ub2e4. \uc774 \uac12\uc744 \uae30\ubc18\uc73c\ub85c \ud1a0\ud070\uc774 \ubc1c\uae09\ub41c \ub4a4\ub85c \uc870\uc791\ub418\uc5c8\ub294\uc9c0 \uac80\uc99d\ud560 \uc218 \uc788\ub2e4.")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"JWT \uc608\uc2dc",mdxType:"TabItem"},(0,r.kt)("img",{src:n(9144).Z})),(0,r.kt)(o.Z,{value:"JWT TO JSON",mdxType:"TabItem"},(0,r.kt)("img",{src:n(2418).Z}))),(0,r.kt)("h3",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JWT Token Test Site")),(0,r.kt)("h3",{id:"refresh-token--access-token"},"Refresh Token & Access Token"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub450 Token ahen JWT \uae30\ubc18\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Access Token\uc740 API \uc694\uccad\uc744 \ud560 \ub54c \uac80\uc99d\uc6a9 \ud1a0\ud070\uc73c\ub85c \uc0ac\uc6a9\ub41c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Refresh Token\uc740 Access Token\uc744 \uac31\uc2e0\ud558\uae30 \uc704\ud55c \ud1a0\ud070\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Access Token\uc740 \ub9cc\ub8cc \uc2dc\uac04\uc774 \uc9e7\uace0 Refresh Token\uc740 \ub9cc\ub8cc \uc2dc\uac04\uc774 \uae38\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0c1\ub300\uc801\uc73c\ub85c \ub178\ucd9c\uc774 \uc801\uc740 Refersh Token\uc758 \uacbd\uc6b0 Access Token\uc744 \uc0c8\ub85c \ubc1c\uae09\ubc1b\uc744 \ub54c\ub9cc \uc0ac\uc6a9\ub418\uae30 \ub54c\ubb38\uc5d0 \ud0c8\ucde8 \uac00\ub2a5\uc131\uc774 \uc801\ub2e4.")),(0,r.kt)("h4",{id:"token-\uc0ac\uc6a9-\uacfc\uc815"},"Token \uc0ac\uc6a9 \uacfc\uc815"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"\ud1a0\ud070 \ubc1c\uae09 \uacfc\uc815",mdxType:"TabItem"},(0,r.kt)("img",{src:n(8168).Z})),(0,r.kt)(o.Z,{value:"Refresh Token \uc0ac\uc6a9 \uacfc\uc815",mdxType:"TabItem"},(0,r.kt)("img",{src:n(1213).Z})),(0,r.kt)(o.Z,{value:"Access Token \uc0ac\uc6a9 \uacfc\uc815",mdxType:"TabItem"},(0,r.kt)("img",{src:n(6762).Z})),(0,r.kt)(o.Z,{value:"\uc804\uccb4 \ud1a0\ud070 \uc0dd\uc131 \ub85c\uc9c1",mdxType:"TabItem"},(0,r.kt)("img",{src:n(4278).Z}),(0,r.kt)("div",null,"\uc804\uccb4 \ud1a0\ud070 \uc0dd\uc131 \ub85c\uc9c1\uc740 Access Token\uc774 \ub9cc\ub8cc \ub418\uc5c8\uc744 \uacbd\uc6b0 Refresh Token\uc744 \uc774\uc6a9\ud574 \uc0c8\ub85c\uc6b4 Access Token\uc744 \ubc1c\uae09\ubc1b\ub294 \uacfc\uc815\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc880 \ub354 \ubcf5\uc7a1\ud560 \uc218 \uc788\ub2e4."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Basic : \uc2e4\uc81c \uc778\uc99d \uc815\ubcf4 \uc0ac\uc6a9 (\uc544\uc774\ub514/\ud328\uc2a4\uc6cc\ub4dc)"),(0,r.kt)("li",{parentName:"ul"},"Bearer : \ud1a0\ud070 \uc0ac\uc6a9"))),(0,r.kt)("h4",{id:"refresh-token-\uc608\uc81c"},"Refresh Token \uc608\uc81c"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1300).Z,width:"846",height:"618"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"iat : \ubc1c\uae09 \uc2dc\uac04"),(0,r.kt)("li",{parentName:"ul"},"exp : \ub9cc\ub8cc \uc2dc\uac04"))),(0,r.kt)("h3",{id:""}))}m.isMDXComponent=!0},4278:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/full_token_issuance_precess-3aa70da3231e9ff09cb50a3131a9827d.png"},9483:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/how_to_create_session-59c7089049599faafdb3f37eb7c02da2.png"},4112:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/how_to_create_token-600b3747d90833bf220888dfdc592f3b.png"},8771:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/how_to_use_session-cd201828e0e0fc2821d33ba5f92401bf.png"},5721:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/how_to_use_token-3d31394b6cedb0d84310e6312bf8eac7.png"},9144:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jwt_example-31db4c5bfc552a71fe853c171b6bb5e4.png"},2418:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jwt_to_json-2612f98e0f736a1a5a8b6c32362a2765.png"},6762:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/process_for_using_access_token-83cf271da09975a4d32614086671b3e5.png"},1213:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/process_for_using_refresh_token-d831f9441f974786cdb2ba4cc07446ee.png"},7251:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/session_flow_chart-123113c09036c523ecc1bce185814164.png"},7766:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/token_flow_chart-f9588b5f90d8e9ccd29cfe5332a478d4.png"},8168:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/token_issuance_precess-0e58a7cd7ce503749d809b9510a4b85b.png"},1300:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/refresh_token_exam-d5471c4de671498f6a41f32df32b5fc9.png"}}]);