"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[884],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){return function(t){var n=m(t.components);return i.createElement(e,o({},t,{components:n}))}},m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=a,h=d["".concat(r,".").concat(c)]||d[c]||u[c]||o;return n?i.createElement(h,p(p({ref:t},s),{},{components:n})):i.createElement(h,p({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},19274:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,assets:()=>d,toc:()=>m,default:()=>u});var i=n(83117),a=n(80102),o=(n(67294),n(3905)),r=["components"],p={title:"Flipper is coming to your web and Node.js apps",author:"Andrey Goncharov",author_title:"Software Engineer",author_url:"https://github.com/aigoncharov",author_image_url:"https://avatars.githubusercontent.com/u/12794628?v=4",tags:["flipper","web","react","node.js"],description:"Flipper now provides an official JavaScript client. We will see what `js-flipper` is, go over Flipper communication protocol, talk about what it takes to build a new Flipper client.",image:"/img/js-flipper.jpg",hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/2022/02/21/js-flipper-announcement",source:"@site/blog/2022-02-21-js-flipper-announcement.md",title:"Flipper is coming to your web and Node.js apps",description:"Flipper now provides an official JavaScript client. We will see what `js-flipper` is, go over Flipper communication protocol, talk about what it takes to build a new Flipper client.",date:"2022-02-21T00:00:00.000Z",formattedDate:"February 21, 2022",tags:[{label:"flipper",permalink:"/blog/tags/flipper"},{label:"web",permalink:"/blog/tags/web"},{label:"react",permalink:"/blog/tags/react"},{label:"node.js",permalink:"/blog/tags/node-js"}],readingTime:8.74,truncated:!0,authors:[{name:"Andrey Goncharov",title:"Software Engineer",url:"https://github.com/aigoncharov",imageURL:"https://avatars.githubusercontent.com/u/12794628?v=4"}],prevItem:{title:"Headless Flipper - what it means for plugin developers",permalink:"/blog/2022/05/20/preparing-for-headless-flipper"},nextItem:{title:"Flipper 2021 Roadmap Update",permalink:"/blog/2021/10/14/roadmap"}},d={authorsImageUrls:[void 0]},m=[{value:"What <code>js-flipper</code> is and why it matters",id:"what-js-flipper-is-and-why-it-matters",children:[],level:2},{value:"How Flipper talks to a mobile device",id:"how-flipper-talks-to-a-mobile-device",children:[],level:2},{value:"Message protocol and structure",id:"message-protocol-and-structure",children:[],level:2},{value:"Building a new client",id:"building-a-new-client",children:[],level:2},{value:"What&#39;s next?",id:"whats-next",children:[],level:2},{value:"P.S. Flipper needs you!",id:"ps-flipper-needs-you",children:[],level:2}],c={toc:m};function u(e){var t=e.components,p=(0,a.Z)(e,r);return(0,o.mdx)("wrapper",(0,i.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Cover image",src:n(59118).Z})),(0,o.mdx)("p",null,"For quite some time already, Flipper has secretly provided an experimental\nJavaScript SDK to support connections from browsers and Node.js under the name\nof ",(0,o.mdx)("inlineCode",{parentName:"p"},"flipper-js-client-sdk"),". With the ongoing migration of all our clients to\nWebSockets, we have committed to providing an official documented SDK for\nJavaScript clients. Without further ado, welcome\n",(0,o.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/js-flipper"},"js-flipper"),"!"),(0,o.mdx)("p",null,"In this post we will:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"See what ",(0,o.mdx)("inlineCode",{parentName:"li"},"js-flipper")," is"),(0,o.mdx)("li",{parentName:"ul"},"Get acquainted with how to build a Flipper plugin for a React app"),(0,o.mdx)("li",{parentName:"ul"},"Learn how Flipper talks to a mobile device"),(0,o.mdx)("li",{parentName:"ul"},"Dive deeper into the message structure"),(0,o.mdx)("li",{parentName:"ul"},"Glance at what it takes to support a new platform")),(0,o.mdx)("h2",{id:"what-js-flipper-is-and-why-it-matters"},"What ",(0,o.mdx)("inlineCode",{parentName:"h2"},"js-flipper")," is and why it matters"),(0,o.mdx)("p",null,"Flipper supports native iOS, native Android apps and React Native apps out of\nthe box. Now with ",(0,o.mdx)("inlineCode",{parentName:"p"},"js-flipper"),", Flipper also supports JavaScript apps. Any\nJavaScript app, whether they run in your browser or on your Node.js server, can\nnow connect to Flipper for a debugging session."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"js-flipper")," is a new NPM package that exposes a Flipper client to your\nJavaScript apps. Any Flipper client, in its turn, is a set of abstractions that\nlet your device connect and talk to Flipper. Long story short, ",(0,o.mdx)("inlineCode",{parentName:"p"},"js-flipper"),"\nallows you to easily write Flipper plugins for your web and Node.js apps."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},(0,o.mdx)("a",{parentName:"p",href:"https://fbflipper.com/docs/tutorial/javascript/"},"Here")," is how you can write\nyour first simple plugin.")),(0,o.mdx)("p",null,"Why does it matter?"),(0,o.mdx)("p",null,"It's a huge deal for two reasons:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Flipper at its core is just a device discovery service with a message bus.\nIts power comes from the plugins and the ecosystem."),(0,o.mdx)("li",{parentName:"ol"},"It brings us one step closer to our goal of running Flipper everywhere. Bring\nFlipper to your microwave! On a serious note, more platforms -> bigger\ncommunity -> more developers -> more plugins -> better Flipper for everyone.")),(0,o.mdx)("p",null,"Let's take a quick look at the principal architecture of Flipper:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Flipper architecture",src:n(41504).Z})),(0,o.mdx)("p",null,"Here is what happens there:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Flipper constantly polls\n",(0,o.mdx)("a",{parentName:"li",href:"https://developer.android.com/studio/command-line/adb"},"ADB")," for available\nAndroid devices and ",(0,o.mdx)("a",{parentName:"li",href:"https://fbidb.io/"},"IDB")," for available iOS devices."),(0,o.mdx)("li",{parentName:"ol"},"If the device is running an app with an enabled Flipper client, the client\ntries to connect to Flipper on your laptop. It lets Flipper know that there\nis an app that it can talk to. Flipper and app chit-chat a bit negotiating\nthe security and the list of supported plugins."),(0,o.mdx)("li",{parentName:"ol"},"The developer picks one of the connected apps / devices. Say, it's the app."),(0,o.mdx)("li",{parentName:"ol"},"The developer clicks one of the available plugins."),(0,o.mdx)("li",{parentName:"ol"},"The plugin starts talking to the app on the device via the message bus\nexposed by Flipper. The plugin asks for necessary data from the app and shows\nit in a pretty UI.")),(0,o.mdx)("p",null,"At Meta, we have many active plugins, across a wide variety of devices, not just\nphones, but also Quests, desktop applications, etc. At its core, Flipper is\ndata-agnostic and connect data flows to plugin displays. All Flipper core (we\ncall it Flipper Server) knows is what devices and Flipper-enabled apps are out\nthere. I hope it gets us on the same page regarding why plugins (and plugin\ndevelopers!) are crucial for Flipper."),(0,o.mdx)("p",null,"Another important conclusion you could draw from the diagram is that the state\nof Flipper plugins is ephemeral and lives in the UI."),(0,o.mdx)("h2",{id:"how-flipper-talks-to-a-mobile-device"},"How Flipper talks to a mobile device"),(0,o.mdx)("p",null,"Let's dive a bit deeper into how exactly the device and Flipper talk. Flipper\npulls device logs from ADB/IDB. For everything else, Flipper expects the app\n(Flipper client inside of the app) to open a WebSocket connection to Flipper."),(0,o.mdx)("p",null,"The algorithm looks like this:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"The app opens a WebSocket connection to Flipper."),(0,o.mdx)("li",{parentName:"ol"},"They exchange certificates. Flipper connects to the app using ADB/IDB and\nwrites a certificate to the app storage."),(0,o.mdx)("li",{parentName:"ol"},"The app opens a secure WebSocket connection to Flipper using the certificate.")),(0,o.mdx)("p",null,"Why do we even bother with the certificate exchange process? One of the\npotential attack vectors is that a developer could install a malicious app on\nthe testing device. That app could spin up a WebSocket server and mask itself as\nFlipper. However, unlike Flipper, the malicious app can't access the file\nstorage of another app. As a result, it can't complete the certificate exchange\nprocess."),(0,o.mdx)("p",null,"On mobile devices certificate exchange is important, so that other apps on the\nphone can't impersonate Flipper. For browser apps this isn't an issue as the\nbrowser already makes sure a malicious page cannot act as Flipper server. For\nplatforms like this, we use a simplified connection algorithm:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"The app opens a WebSocket connection to Flipper."),(0,o.mdx)("li",{parentName:"ol"},"Bingo!")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"js-flipper")," implements the second algorithm, without the certificate exchange."),(0,o.mdx)("h2",{id:"message-protocol-and-structure"},"Message protocol and structure"),(0,o.mdx)("p",null,"Once the final WebSocket connection is established, Flipper starts talking to\nthe app:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"It sends ",(0,o.mdx)("inlineCode",{parentName:"li"},"getPlugins")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"getBackgroundPlugins")," messages to get a list of\nplugins supported by the app."),(0,o.mdx)("li",{parentName:"ol"},"Flipper displays the available plugins to the developer."),(0,o.mdx)("li",{parentName:"ol"},"Developer clicks on one of the plugins (enables a plugin)."),(0,o.mdx)("li",{parentName:"ol"},'Flipper loads the UI for the plugin. Let\'s settle on calling the part of the\nplugin "desktop plugin" and the device part of the plugin "client plugin".'),(0,o.mdx)("li",{parentName:"ol"},"Flipper sends ",(0,o.mdx)("inlineCode",{parentName:"li"},"init")," message to the app."),(0,o.mdx)("li",{parentName:"ol"},"Client plugin ",(0,o.mdx)("inlineCode",{parentName:"li"},"onConnect")," code is executed. Read more about Client Plugin API\n",(0,o.mdx)("a",{parentName:"li",href:"https://fbflipper.com/docs/extending/create-plugin/"},"here"),"."),(0,o.mdx)("li",{parentName:"ol"},'Whenever a "desktop plugin" needs some data from the device it sends an\n',(0,o.mdx)("inlineCode",{parentName:"li"},"execute"),' message to the "client plugin" on the device.'),(0,o.mdx)("li",{parentName:"ol"},'"Client plugin" replies with the data.'),(0,o.mdx)("li",{parentName:"ol"},'"Client plugin" might force the "desktop plugin" to do something as well by\nsending an ',(0,o.mdx)("inlineCode",{parentName:"li"},"execute"),' message as well. However, it is rare. In the current\nimplementation, the "client plugin" can never expect a reply back from the\n"desktop plugin". In other words, consider it as an event sink, not as a way\nto extract some data from the "desktop plugin".'),(0,o.mdx)("li",{parentName:"ol"},"When the plugin is deactivated a ",(0,o.mdx)("inlineCode",{parentName:"li"},"deinit"),' message is sent to the "client\nplugin".'),(0,o.mdx)("li",{parentName:"ol"},"Client plugin ",(0,o.mdx)("inlineCode",{parentName:"li"},"onDisconnect")," code is executed.")),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"The process above is for the insecure WebSocket connections we currently use\nin ",(0,o.mdx)("inlineCode",{parentName:"p"},"js-flipper"),". It is more complicated for secure WebSocket connections that\nrequire certificate exchange.")),(0,o.mdx)("p",null,"Flipper expects each message to have the following structure:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},"export interface FlipperRequest {\n  method: string; // 'getPlugins' | 'getBackgroundPlugins' | 'init' | 'deinit' | 'execute' | 'isMethodSupported'\n  params?: {\n    api: string; // Plugin ID (name)\n    // These nested `method` and `params` could be anything.\n    // You set them yourself as you see fit to support the data exchange between the \"desktop plugin\" and the \"client plugin\".\n    // For example, for 'ReactNativeTicTacToe' we support 2 methods: 'SetState' and 'GetState'.\n    // We pass a game state with a 'SetState' message. See https://fbflipper.com/docs/tutorial/javascript/#step-3-call-addplugin-to-add-your-plugin\n    method: string;\n    params?: unknown;\n  };\n}\n")),(0,o.mdx)("p",null,'The only exception is the response message the "client plugin" sends back when\nthe data is requested.'),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},"export type FlipperResponse = {\n  id: number;\n  success?: object | string | number | boolean | null;\n  error?: {\n    message: string;\n    stacktrace?: string;\n    name?: string;\n  };\n};\n")),(0,o.mdx)("h2",{id:"building-a-new-client"},"Building a new client"),(0,o.mdx)("p",null,"At this point, you know what messages your client needs to support in a Flipper\nclient:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"getPlugins")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"getBackgroundPlugins")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"init")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"deinit")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"execute"))),(0,o.mdx)("p",null,"One other message we did not mention before is ",(0,o.mdx)("inlineCode",{parentName:"p"},"isMethodSupported"),'. Its job is\nto reply back to a "desktop plugin" whether a "client plugin" supports one of\nplugin messages (that nested ',(0,o.mdx)("inlineCode",{parentName:"p"},"method"),' field). It\'s useful when you have a single\n"desktop plugin" implementation, but different "client plugin" implementations.\nFor example, some operations might not be supported on iOS, but are supported on\nAndroid. Alternatively, it can address version differences between the plugin\ninstalled on the device and the one loaded into Flipper.'),(0,o.mdx)("p",null,"If you want to build a proper Flipper client, you also need to provide an\nabstraction for plugin developers. Consider matching\n",(0,o.mdx)("a",{parentName:"p",href:"https://fbflipper.com/docs/extending/create-plugin/#flipperplugin"},"what we have for existing clients"),"."),(0,o.mdx)("p",null,"Most of the groundwork for handling connections and doing certificate exchange\nis already done in our\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/tree/main/xplat"},"C++ engine"),". Our iOS,\nAndroid, React Native clients use it under the hood. ",(0,o.mdx)("inlineCode",{parentName:"p"},"js-flipper")," implements\neverything from scratch using native browser APIs (for Node.js apps we\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/tree/main/js/js-flipper#nodejs"},"require developers to provide a WebSocket implementation"),")."),(0,o.mdx)("p",null,"Here is a detailed document on how to\n",(0,o.mdx)("a",{parentName:"p",href:"https://fbflipper.com/docs/extending/new-clients/"},"implement a client"),". You\nmight also want to check the source code of our existing clients:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebook/flipper/tree/main/iOS/FlipperKit"},"iOS")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebook/flipper/tree/main/android/src/main"},"Android")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebook/flipper/tree/main/react-native/react-native-flipper"},"React Native")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebook/flipper/tree/main/js/js-flipper"},"JavaScript"))),(0,o.mdx)("h2",{id:"whats-next"},"What's next?"),(0,o.mdx)("p",null,"As of now, we do not provide any default plugins you might be used to for\n",(0,o.mdx)("inlineCode",{parentName:"p"},"js-flipper")," (Layout, Logs, Navigation, Crash Reporter, and others). We hope\nthis will change in the future with the help of ur beloved open-source\ncommunity!"),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Call to action!")),(0,o.mdx)("p",null,"We would like to encourage you to play with ",(0,o.mdx)("inlineCode",{parentName:"p"},"js-flipper"),". See how it fits your\nuse-case and get back back to us with your feedback on\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/issues"},"GitHub"),". If you find yourself\nimplementing one of your favorite Flipper plugins for ",(0,o.mdx)("inlineCode",{parentName:"p"},"js-flipper"),", do not\nhesitate and raise a PR!"),(0,o.mdx)("p",null,"Plugins can be either generic or very application specific. Plugins can interact\nwith Redux or MobX stores, read performance data or console logs from the\nbrowser. At Meta, we also see a lot of plugins that are very application\nspecific. For example, plugins that allow logging in as specific test users with\na single click, reading the internal state of NewsFeed and interacting with it,\nsimulating photos captured by a smartphone, etc. A Flipper plugin can be any\nform of UI that is useful to speed up debugging and tasks on things you work on\nfrequently!"),(0,o.mdx)("h2",{id:"ps-flipper-needs-you"},"P.S. Flipper needs you!"),(0,o.mdx)("p",null,"Flipper is maintained by a small team at Meta, yet is serving over a hundred\nplugins and dozens of different targets. Our team's goal is to support Flipper\nas a plugin-based platform for which we maintain the infrastructure. We don't\ntypically invest in individual plugins, but we do love plugin improvements. For\nexample, the support for mocking network requests (on Android) was entirely\ncontributed by the community (thanks\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/bizzguy"},"James Harmon"),"!). As was Protobuf support (thanks\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/hbmartin"},"Harold Martin"),"!)."),(0,o.mdx)("p",null,"For that reason, we've marked many requests in the issue tracker as\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/issues?q=is%3Aissue+is%3Aopen+label%3A%22PR+welcome%22"},"PR Welcome"),".\nContributing changes should be as simple as cloning the\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper"},"repository")," and running\n",(0,o.mdx)("inlineCode",{parentName:"p"},"yarn && yarn start")," in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"desktop/")," folder."),(0,o.mdx)("p",null,"Investing in debugging tools, both generic ones or just for specific apps, will\nbenefit iteration speed. And we hope Flipper will make it as hassle free as\npossible to create your debugging tools. For an overview of Flipper for React\nNative, and why and how to build your own plugins, we recommend checking out the\n",(0,o.mdx)("a",{parentName:"p",href:"https://youtu.be/WltZTn3ODW4"},"Flipper: The Extensible DevTool Platform for React Native"),"\ntalk."),(0,o.mdx)("p",null,"Happy debugging!"))}u.isMDXComponent=!0},41504:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/flipper-arch-441273eacc9c6f4607b53aa6e0189a05.svg"},59118:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/js-flipper-94b22eaefb5d7fde51e4b4985e7fb41c.jpg"}}]);