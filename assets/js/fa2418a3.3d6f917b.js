"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[880],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>c,mdx:()=>v,useMDXComponents:()=>s,withMDXComponents:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){return function(t){var n=s(t.components);return r.createElement(e,a({},t,{components:n}))}},s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(n),c=i,f=p["".concat(l,".").concat(c)]||p[c]||m[c]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39960:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(80102),i=n(67294),a=n(73727),l=n(52263),o=n(13919),d=n(10412),u=(0,i.createContext)({collectLink:function(){}}),p=n(44996),s=n(18780),c=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var t,n,m=e.isNavLink,f=e.to,v=e.href,g=e.activeClassName,x=e.isActive,h=e["data-noBrokenLinkCheck"],N=e.autoAddBaseUrl,b=void 0===N||N,y=(0,r.Z)(e,c),w=(0,l.default)().siteConfig,O=w.trailingSlash,C=w.baseUrl,P=(0,p.useBaseUrlUtils)().withBaseUrl,S=(0,i.useContext)(u),j=f||v,R=(0,o.Z)(j),k=null==j?void 0:j.replace("pathname://",""),E=void 0!==k?(n=k,b&&function(e){return e.startsWith("/")}(n)?P(n):n):void 0;E&&R&&(E=(0,s.applyTrailingSlash)(E,{trailingSlash:O,baseUrl:C}));var A=(0,i.useRef)(!1),_=m?a.OL:a.rU,D=d.default.canUseIntersectionObserver,F=(0,i.useRef)();(0,i.useEffect)((function(){return!D&&R&&null!=E&&window.docusaurus.prefetch(E),function(){D&&F.current&&F.current.disconnect()}}),[F,E,D,R]);var M=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,U=!E||!R||M;return E&&R&&!M&&!h&&S.collectLink(E),U?i.createElement("a",Object.assign({href:E},j&&!R&&{target:"_blank",rel:"noopener noreferrer"},y)):i.createElement(_,Object.assign({},y,{onMouseEnter:function(){A.current||null==E||(window.docusaurus.preload(E),A.current=!0)},innerRef:function(e){var t,n;D&&e&&R&&(t=e,n=function(){null!=E&&window.docusaurus.prefetch(E)},F.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(F.current.unobserve(t),F.current.disconnect(),n())}))})),F.current.observe(t))},to:E||""},m&&{isActive:x,activeClassName:g}))}},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>i})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>a,default:()=>l});var r=n(52263),i=n(13919);function a(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,l=a.forcePrependBaseUrl,o=void 0!==l&&l,d=a.absolute,u=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(o)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+p:p}(a,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],l="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,l)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},82872:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>u,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>f});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),l=n(44996),o=n(39960),d=["components"],u={id:"react-native",title:"React Native App - Automatic Setup",sidebar_label:"Automatic Setup"},p=void 0,s={unversionedId:"getting-started/react-native",id:"getting-started/react-native",isDocsHomePage:!1,title:"React Native App - Automatic Setup",description:"Starting with React Native 0.62, after generating your project with react-native init, the Flipper integration is ready out of the box for debug builds:",source:"@site/../docs/getting-started/react-native.mdx",sourceDirName:"getting-started",slug:"/getting-started/react-native",permalink:"/docs/getting-started/react-native",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/getting-started/react-native.mdx",tags:[],version:"current",frontMatter:{id:"react-native",title:"React Native App - Automatic Setup",sidebar_label:"Automatic Setup"},sidebar:"setup",previous:{title:"Generic iOS apps",permalink:"/docs/getting-started/ios-native"},next:{title:"Manual Android Setup",permalink:"/docs/getting-started/react-native-android"}},c=[{value:"Using the latest Flipper SDK",id:"using-the-latest-flipper-sdk",children:[],level:3},{value:"Manual Setup",id:"manual-setup",children:[],level:2}],m={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,d);return(0,a.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Starting with React Native 0.62, after generating your project with ",(0,a.mdx)("inlineCode",{parentName:"p"},"react-native init"),", the Flipper integration is ready out of the box for debug builds:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Android")," - start the Flipper Desktop application and start your project using ",(0,a.mdx)("inlineCode",{parentName:"li"},"yarn android"),". Your application will appear in Flipper."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"iOS")," - run ",(0,a.mdx)("inlineCode",{parentName:"li"},"pod install")," once in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"ios")," directory of your project. After that, run ",(0,a.mdx)("inlineCode",{parentName:"li"},"yarn ios")," and start Flipper. Your application will show up in Flipper.")),(0,a.mdx)("p",null,"By default, the following plugins will be available:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Layout Inspector"),(0,a.mdx)("li",{parentName:"ul"},"Network"),(0,a.mdx)("li",{parentName:"ul"},"Databases"),(0,a.mdx)("li",{parentName:"ul"},"Images"),(0,a.mdx)("li",{parentName:"ul"},"Shared Preferences"),(0,a.mdx)("li",{parentName:"ul"},"Crash Reporter"),(0,a.mdx)("li",{parentName:"ul"},"React DevTools"),(0,a.mdx)("li",{parentName:"ul"},"Metro Logs")),(0,a.mdx)("p",null,"Additional plugins can be installed through the Plugin Manager."),(0,a.mdx)("p",null,"To create your own plugins and integrate with Flipper using JavaScript, see the ",(0,a.mdx)(o.default,{to:(0,l.default)("/docs/tutorial/react-native"),mdxType:"Link"},"Building a React Native Plugin")," tutorial."),(0,a.mdx)("h3",{id:"using-the-latest-flipper-sdk"},"Using the latest Flipper SDK"),(0,a.mdx)("p",null,"By default, React Native might ship with an outdated Flipper SDK. To make sure you are using the latest version, determine the latest released version of Flipper by running ",(0,a.mdx)("inlineCode",{parentName:"p"},"npm info flipper"),"."),(0,a.mdx)("p",null,"Android:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Bump the ",(0,a.mdx)("inlineCode",{parentName:"li"},"FLIPPER_VERSION")," variable in ",(0,a.mdx)("inlineCode",{parentName:"li"},"android/gradle.properties"),", for example: ",(0,a.mdx)("inlineCode",{parentName:"li"},"FLIPPER_VERSION=0.147.0"),"."),(0,a.mdx)("li",{parentName:"ol"},"Run ",(0,a.mdx)("inlineCode",{parentName:"li"},"./gradlew clean")," in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"android")," directory.")),(0,a.mdx)("p",null,"iOS:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Call ",(0,a.mdx)("inlineCode",{parentName:"li"},"use_flipper")," with a specific version in ",(0,a.mdx)("inlineCode",{parentName:"li"},"ios/Podfile"),", for example: ",(0,a.mdx)("inlineCode",{parentName:"li"},"use_flipper!({ 'Flipper' => '0.147.0' })"),"."),(0,a.mdx)("li",{parentName:"ol"},"Run ",(0,a.mdx)("inlineCode",{parentName:"li"},"pod install --repo-update")," in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"ios")," directory.")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Android",(0,a.mdx)("ol",{parentName:"li"},(0,a.mdx)("li",{parentName:"ol"},"Bump the ",(0,a.mdx)("inlineCode",{parentName:"li"},"FLIPPER_VERSION")," variable in ",(0,a.mdx)("inlineCode",{parentName:"li"},"android/gradle.properties"),", for example: ",(0,a.mdx)("inlineCode",{parentName:"li"},"FLIPPER_VERSION=0.147.0"),"."),(0,a.mdx)("li",{parentName:"ol"},"Run ",(0,a.mdx)("inlineCode",{parentName:"li"},"./gradlew clean")," in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"android")," directory."))),(0,a.mdx)("li",{parentName:"ul"},"iOS",(0,a.mdx)("ol",{parentName:"li"},(0,a.mdx)("li",{parentName:"ol"},"Call ",(0,a.mdx)("inlineCode",{parentName:"li"},"use_flipper")," with a specific version in ",(0,a.mdx)("inlineCode",{parentName:"li"},"ios/Podfile"),", for example: ",(0,a.mdx)("inlineCode",{parentName:"li"},"use_flipper!({ 'Flipper' => '0.147.0' })"),"."),(0,a.mdx)("li",{parentName:"ol"},"Run ",(0,a.mdx)("inlineCode",{parentName:"li"},"pod install --repo-update")," in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"ios")," directory.")))),(0,a.mdx)("h2",{id:"manual-setup"},"Manual Setup"),(0,a.mdx)("p",null,"If you are not using a default React Native template or cannot use the upgrade tool, you can find instructions for how to integrate Flipper into your projects in the following guides:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{href:(0,l.default)("/docs/getting-started/react-native-android")},"React Native for Android")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{href:(0,l.default)("/docs/getting-started/react-native-ios")},"React Native for iOS"))))}f.isMDXComponent=!0}}]);