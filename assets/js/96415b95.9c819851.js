"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5086],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){return function(t){var r=c(t.components);return a.createElement(e,i({},t,{components:r}))}},c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,h=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(h,l(l({ref:t},p),{},{components:r})):a.createElement(h,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},13919:(e,t,r)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,{b:()=>a,Z:()=>n})},44996:(e,t,r)=>{r.r(t),r.d(t,{useBaseUrlUtils:()=>i,default:()=>o});var a=r(52263),n=r(13919);function i(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,p=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,n.b)(r))return r;if(l)return t+r;var d=r.startsWith(t)?r:t+r.replace(/^\//,"");return p?e+d:d}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},59226:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>d,toc:()=>c,default:()=>m});var a=r(83117),n=r(80102),i=(r(67294),r(3905)),o=r(44996),l=["components"],s={id:"share-flipper-data",title:"Share Flipper Data"},p=void 0,d={unversionedId:"features/share-flipper-data",id:"features/share-flipper-data",isDocsHomePage:!1,title:"Share Flipper Data",description:"Flipper's diagnostic and profiling data is often used for debugging. However, sometimes you can't solve the problem on your own and need some help from your colleagues. In such cases, rather than just sending screenshots, you can share the data you are seeing in Flipper (such as logs, layout hierarchy, network requests, and other relevant objects) with your colleague, which helps them to get the bigger picture of why something doesn't work as expected.",source:"@site/../docs/features/share-flipper-data.mdx",sourceDirName:"features",slug:"/features/share-flipper-data",permalink:"/docs/features/share-flipper-data",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/features/share-flipper-data.mdx",tags:[],version:"current",frontMatter:{id:"share-flipper-data",title:"Share Flipper Data"},sidebar:"features",previous:{title:"Features",permalink:"/docs/features/index"},next:{title:"React Native Support",permalink:"/docs/features/react-native"}},c=[{value:"Export Flipper data",id:"export-flipper-data",children:[],level:2},{value:"Import Flipper data",id:"import-flipper-data",children:[],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.mdx)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Flipper's diagnostic and profiling data is often used for debugging. However, sometimes you can't solve the problem on your own and need some help from your colleagues. In such cases, rather than just sending screenshots, you can share the data you are seeing in Flipper (such as logs, layout hierarchy, network requests, and other relevant objects) with your colleague, which helps them to get the bigger picture of why something doesn't work as expected."),(0,i.mdx)("h2",{id:"export-flipper-data"},"Export Flipper data"),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"You can export Flipper's data in a ",(0,i.mdx)("inlineCode",{parentName:"p"},".flipper")," file."))),(0,i.mdx)("p",null,"To export Flipper data, take the following steps:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"An active device needs to be connected to Flipper, so ensure you've selected the device you want to export in Flipper's device dropdown."),(0,i.mdx)("img",{alt:"selectedDevice",src:(0,o.default)("img/shareFlipperData/selectedDevice.png")})),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"From the Menu Bar, select 'File' \u2192 'Export\"' then save it wherever you like."))),(0,i.mdx)("p",null,"The exported data can now be shared with your colleagues."),(0,i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Bear in mind that the file will include all the data available to the plugins (such as access tokens in recorded network requests)!"))),(0,i.mdx)("h2",{id:"import-flipper-data"},"Import Flipper data"),(0,i.mdx)("p",null,"Opening a ",(0,i.mdx)("inlineCode",{parentName:"p"},".flipper")," file imports all the data and allows you to use Flipper as if the device was connected. However, the device is marked as 'offline' (see the following screenshot). Since the device is not present, this means that while you are able to see all the data, you can't interact with it (for example, changing a view's background color)."),(0,i.mdx)("img",{alt:"importedDevice",src:(0,o.default)("img/shareFlipperData/importedDevice.png")}),(0,i.mdx)("p",null,"For advanced users, Flipper also provides a URL handler to import data. For example, linking to ",(0,i.mdx)("inlineCode",{parentName:"p"},"flipper://import/?url={LINK_TO_FLIPPER_FILE}")," will launch Flipper and display the downloaded data."))}m.isMDXComponent=!0}}]);