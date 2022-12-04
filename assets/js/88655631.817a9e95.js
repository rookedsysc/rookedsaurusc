"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[6040],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=p(r),s=n,f=c["".concat(l,".").concat(s)]||c[s]||u[s]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:n,o[1]=m;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:6,toc_max_heading_level:4},o="Dart Date",m={unversionedId:"flutter/grammar/date",id:"flutter/grammar/date",title:"Dart Date",description:"\ud604\uc7ac \uc2dc\uac04 \uad6c\ud558\uae30",source:"@site/docs/flutter/grammar/date.md",sourceDirName:"flutter/grammar",slug:"/flutter/grammar/date",permalink:"/docs/flutter/grammar/date",draft:!1,editUrl:"https://github.com/rookedsysc/rookedsysc_saurus.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/flutter/grammar/date.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,toc_max_heading_level:4},sidebar:"flutter",previous:{title:"Immutable Data",permalink:"/docs/flutter/grammar/immutable-data"},next:{title:"Formmating / Type",permalink:"/docs/flutter/grammar/dart-formmating"}},l={},p=[{value:"\ud604\uc7ac \uc2dc\uac04 \uad6c\ud558\uae30",id:"\ud604\uc7ac-\uc2dc\uac04-\uad6c\ud558\uae30",level:2},{value:"DateTime Type\ubcc4 \ucd9c\ub825",id:"datetime-type\ubcc4-\ucd9c\ub825",level:2},{value:"\ubb38\uc790\uc5f4\uc744 DateTime\uc73c\ub85c",id:"\ubb38\uc790\uc5f4\uc744-datetime\uc73c\ub85c",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3},{value:"DateTime\uc744 \ubb38\uc790\uc5f4\ub85c",id:"datetime\uc744-\ubb38\uc790\uc5f4\ub85c",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-1",level:3}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dart-date"},"Dart Date"),(0,n.kt)("h2",{id:"\ud604\uc7ac-\uc2dc\uac04-\uad6c\ud558\uae30"},"\ud604\uc7ac \uc2dc\uac04 \uad6c\ud558\uae30"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"DateTime now = DateTime.now();\n")),(0,n.kt)("h2",{id:"datetime-type\ubcc4-\ucd9c\ub825"},"DateTime Type\ubcc4 \ucd9c\ub825"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"print(now.year);\nprint(now.month);\nprint(now.day);\nprint(now.hour);\nprint(now.second);\nprint(now.minute);\nprint(now.microsecond);\n")),(0,n.kt)("h1",{id:"\uc2dc\uac04-\uc9c0\uc815\ud558\uae30"},"\uc2dc\uac04 \uc9c0\uc815\ud558\uae30"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"DateTime SpecifyDay = DateTime(\n    int year,\n    int month,\n    int day,\n    int time,\n    int minutes,\n    int seconds,\n);\n")),(0,n.kt)("h1",{id:"\uac04\uaca9-\uad6c\ud558\uae30"},"\uac04\uaca9 \uad6c\ud558\uae30"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"targetTime.differenc(comparisonTime); // tagetTime - comparisonTime\n")),(0,n.kt)("h1",{id:"\uc2dc\uac04-\uc0ac\uce59\uc5f0\uc0b0"},"\uc2dc\uac04 \uc0ac\uce59\uc5f0\uc0b0"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"targetTime.add(Duration(hours: 10); // \uc2dc\uac04 \ub367\uc148\ntargetTime.subtract(Duration(minutes: 5)); // \ubd84 \ube84\uc148\n")),(0,n.kt)("h1",{id:"\ud3ec\ub9e4\ud305"},"\ud3ec\ub9e4\ud305"),(0,n.kt)("h2",{id:"\ubb38\uc790\uc5f4\uc744-datetime\uc73c\ub85c"},"\ubb38\uc790\uc5f4\uc744 DateTime\uc73c\ub85c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"DateTime.parse( String )\n")),(0,n.kt)("h3",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"void main() {\n  String nowTime = '2021-10-23 14:00:32';\n  print(DateTime.parse(nowTime)); // \ucd9c\ub825\n  print(DateTime.parse(nowTime).runtimeType); // DateTime \ucd9c\ub825\n}\n")),(0,n.kt)("h2",{id:"datetime\uc744-\ubb38\uc790\uc5f4\ub85c"},"DateTime\uc744 \ubb38\uc790\uc5f4\ub85c"),(0,n.kt)("p",null,"\ud3ec\ub9f7 \ud615\uc2dd\ub300\ub85c DateTime\uc744 \ud3ec\ub9f7\ud574\uc11c \ubb38\uc790\uc5f4\ub85c return \ud574\uc90c. \ud3ec\ub9f7 \ud615\uc2dd\uc740 \uad6c\uae00\ub9c1\ud574\ubcf4\uba74 \ub9ce\uc774 \ub098\uc634."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"DateFormat( \ud3ec\ub9f7 \ud615\uc2dd ).format( DateTime something )\n")),(0,n.kt)("h3",{id:"\uc608\uc2dc-1"},"\uc608\uc2dc"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:intl/intl.dart';\n\nvoid main() {\n  DateTime timeOfBirth = DateTime(2021,12,21,14,30);\n  DateTime birthDay = DateTime(2021,12,21);\n   \n  if (birthDay == timeOfBirth) {\n    print('birthDay and timeOfBirth is a same time'); // \ucd9c\ub825 \uc548\ub428\n  } else {\n    print('birthDay and timeOfBirth is not a same time'); // \ucd9c\ub825\n  }\n  \n  if (DateFormat('yyyy-MM-dd').format(timeOfBirth) == DateFormat('yyyy-MM-dd').format(birthDay)) {\n    print('DateFormat is working'); // \ucd9c\ub825\n  }\n}\n")),(0,n.kt)("h1",{id:"reference"},"Reference"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/rookedsysc/Flutter-Study/blob/dartGrammar/Grammar/functionalProgramming/dartDate.dart"},"Dart Date")))}u.isMDXComponent=!0}}]);