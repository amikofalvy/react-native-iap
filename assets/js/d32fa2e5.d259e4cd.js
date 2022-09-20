"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(k,o(o({ref:t},s),{},{components:n})):i.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={},o=void 0,l={unversionedId:"api/interfaces/IosModuleProps",id:"api/interfaces/IosModuleProps",title:"IosModuleProps",description:"react-native-iap / Exports / IosModuleProps",source:"@site/docs/api/interfaces/IosModuleProps.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/IosModuleProps",permalink:"/docs/api/interfaces/IosModuleProps",draft:!1,editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/api/interfaces/IosModuleProps.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Discount",permalink:"/docs/api/interfaces/Discount"},next:{title:"NativeModuleProps",permalink:"/docs/api/interfaces/NativeModuleProps"}},d={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties-1",level:2},{value:"buyProduct",id:"buyproduct",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"buyProductWithOffer",id:"buyproductwithoffer",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"buyProductWithQuantityIOS",id:"buyproductwithquantityios",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"buyPromotedProduct",id:"buypromotedproduct",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"clearProducts",id:"clearproducts",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"clearTransaction",id:"cleartransaction",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"finishTransaction",id:"finishtransaction",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"getAvailableItems",id:"getavailableitems",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"getItems",id:"getitems",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"getPendingTransactions",id:"getpendingtransactions",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"presentCodeRedemptionSheet",id:"presentcoderedemptionsheet",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"promotedProduct",id:"promotedproduct",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"requestReceipt",id:"requestreceipt",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"Methods",id:"methods-1",level:2},{value:"addListener",id:"addlistener",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"endConnection",id:"endconnection",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"initConnection",id:"initconnection",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"removeListeners",id:"removelisteners",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-16",level:4}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../.."},"react-native-iap")," / ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules"},"Exports")," / IosModuleProps"),(0,r.kt)("h1",{id:"interface-iosmoduleprops"},"Interface: IosModuleProps"),(0,r.kt)("p",null,"Common interface for all native modules (iOS \u2014 AppStore, Android \u2014 PlayStore and Amazon)."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},(0,r.kt)("inlineCode",{parentName:"a"},"NativeModuleProps"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"IosModuleProps"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#buyproduct"},"buyProduct")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#buyproductwithoffer"},"buyProductWithOffer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#buyproductwithquantityios"},"buyProductWithQuantityIOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#buypromotedproduct"},"buyPromotedProduct")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#clearproducts"},"clearProducts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#cleartransaction"},"clearTransaction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#finishtransaction"},"finishTransaction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#getavailableitems"},"getAvailableItems")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#getitems"},"getItems")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#getpendingtransactions"},"getPendingTransactions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#presentcoderedemptionsheet"},"presentCodeRedemptionSheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#promotedproduct"},"promotedProduct")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#requestreceipt"},"requestReceipt"))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#addlistener"},"addListener")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#endconnection"},"endConnection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#initconnection"},"initConnection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IosModuleProps#removelisteners"},"removeListeners"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"buyproduct"},"buyProduct"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"buyProduct"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#buyproduct"},(0,r.kt)("inlineCode",{parentName:"a"},"BuyProduct"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/ios.ts#L46"},"modules/ios.ts:46")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buyproductwithoffer"},"buyProductWithOffer"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"buyProductWithOffer"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"buyProductWithOffer")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/ios.ts#L47"},"modules/ios.ts:47")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buyproductwithquantityios"},"buyProductWithQuantityIOS"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"buyProductWithQuantityIOS"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"buyProductWithQuantity")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/ios.ts#L48"},"modules/ios.ts:48")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buypromotedproduct"},"buyPromotedProduct"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"buyPromotedProduct"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"buyPromotedProduct")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/ios.ts#L52"},"modules/ios.ts:52")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clearproducts"},"clearProducts"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"clearProducts"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"clearProducts")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/ios.ts#L50"},"modules/ios.ts:50")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cleartransaction"},"clearTransaction"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"clearTransaction"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"clearTransaction")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/ios.ts#L49"},"modules/ios.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"finishtransaction"},"finishTransaction"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"finishTransaction"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"finishTransaction")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/ios.ts#L54"},"modules/ios.ts:54")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getavailableitems"},"getAvailableItems"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getAvailableItems"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"getAvailableItems")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/ios.ts#L45"},"modules/ios.ts:45")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getitems"},"getItems"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getItems"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"getItems")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/ios.ts#L44"},"modules/ios.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getpendingtransactions"},"getPendingTransactions"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getPendingTransactions"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"getPendingTransactions")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/ios.ts#L55"},"modules/ios.ts:55")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"presentcoderedemptionsheet"},"presentCodeRedemptionSheet"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"presentCodeRedemptionSheet"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"presentCodeRedemptionSheet")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/ios.ts#L56"},"modules/ios.ts:56")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"promotedproduct"},"promotedProduct"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"promotedProduct"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"promotedProduct")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/ios.ts#L51"},"modules/ios.ts:51")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"requestreceipt"},"requestReceipt"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"requestReceipt"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"requestReceipt")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/ios.ts#L53"},"modules/ios.ts:53")),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"addlistener"},"addListener"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addListener"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"eventType"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"addListener for NativeEventEmitter"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},"NativeModuleProps"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps#addlistener"},"addListener")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/common.ts#L12"},"modules/common.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"endconnection"},"endConnection"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"endConnection"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"Required method to end the payment provider connection"),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},"NativeModuleProps"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps#endconnection"},"endConnection")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/common.ts#L9"},"modules/common.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initconnection"},"initConnection"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"initConnection"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"Required method to start a payment provider connection"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},"NativeModuleProps"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps#initconnection"},"initConnection")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/common.ts#L6"},"modules/common.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removelisteners"},"removeListeners"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"removeListeners"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"count"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"removeListeners for NativeEventEmitter"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"count")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps"},"NativeModuleProps"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/NativeModuleProps#removelisteners"},"removeListeners")),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/e36d508/src/modules/common.ts#L15"},"modules/common.ts:15")))}u.isMDXComponent=!0}}]);