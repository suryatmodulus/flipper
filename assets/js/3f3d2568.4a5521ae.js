"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3541,1339],{67808:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>g,default:()=>h,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),p=n(44996),l=n(39960),a=n(26396),d=n(58215),u=["components"],s={toc:[{value:"Gradle Dependencies",id:"gradle-dependencies",children:[],level:3},{value:"Sending Retrofit Service",id:"sending-retrofit-service",children:[],level:3}]};function c(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.mdx)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h3",{id:"gradle-dependencies"},"Gradle Dependencies"),(0,i.mdx)("p",null,"Ensure that you already have an explicit dependency in your application's ",(0,i.mdx)("inlineCode",{parentName:"p"},"build.gradle")," including the plugin dependency, as shown in the following example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n  implementation "com.squareup.retrofit2:retrofit:2.9.0"\n  implementation "com.squareup.retrofit2:converter-protobuf:2.9.0"\n\n  // update version below to match latest Flipper client app\n  debugImplementation "com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.84.0"\n}\n')),(0,i.mdx)("h3",{id:"sending-retrofit-service"},"Sending Retrofit Service"),(0,i.mdx)("p",null,"If you have a Retrofit service interface ",(0,i.mdx)("inlineCode",{parentName:"p"},"PersonService")," which has Protobuf body or return types then at the time you create your implementation, call the plugin with your ",(0,i.mdx)("inlineCode",{parentName:"p"},"baseURL")," and service class, as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n...\nval personService = retrofit.create(PersonService::class.java)\nSendProtobufToFlipperFromRetrofit(baseUrl, PersonService::class.java)\n")))}c.isMDXComponent=!0;var m=["components"],f={},g=void 0,k={type:"mdx",permalink:"/docs/plugins/network/setup",source:"@site/src/embedded-pages/docs/plugins/network/setup.mdx"},b=[{value:"Android",id:"android",children:[{value:"OkHttp Integration",id:"okhttp-integration",children:[],level:3},{value:"Protobuf / Retrofit Integration",id:"protobuf--retrofit-integration",children:[],level:3}],level:2},{value:"iOS",id:"ios",children:[],level:2},{value:"Protobuf + Retrofit Setup",id:"protobuf--retrofit-setup",children:[],level:2}],w={toc:b};function h(e){var t=e.components,n=(0,r.Z)(e,m);return(0,i.mdx)("wrapper",(0,o.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"To use the ",(0,i.mdx)(l.default,{to:(0,p.default)("/docs/features/plugins/network"),mdxType:"Link"},"Network plugin"),", you need to add the plugin to your Flipper client instance."),(0,i.mdx)("h2",{id:"android"},"Android"),(0,i.mdx)("p",null,"The network plugin is shipped as a separate Maven artifact, as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-network-plugin:0.147.0'\n}\n")),(0,i.mdx)("p",null,"Once added to your dependencies, you can instantiate the plugin and add it to the client:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;\n\nNetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();\nnew NetworkingModule.CustomClientBuilder() {\n    @Override\n    public void apply(OkHttpClient.Builder builder) {\n        builder.addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin));\n    }\n});\nclient.addPlugin(networkFlipperPlugin);\n")),(0,i.mdx)("h3",{id:"okhttp-integration"},"OkHttp Integration"),(0,i.mdx)("p",null,"If you are using the popular OkHttp library, you can use the Interceptors system to automatically hook into your existing stack, as shown in the following snippet:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;\n\nnew OkHttpClient.Builder()\n    .addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin))\n    .build();\n")),(0,i.mdx)("p",null,"As interceptors can modify the request and response, add the Flipper interceptor after all others to get an accurate view of the network traffic."),(0,i.mdx)("h3",{id:"protobuf--retrofit-integration"},"Protobuf / Retrofit Integration"),(0,i.mdx)("p",null,"If you are using Retrofit with Protobuf request or response types, you can setup automatic decoding so that the network inspector can display a human readable payload. First you must add the separate dependency:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.91.2'\n}\n")),(0,i.mdx)("p",null,"Then call ",(0,i.mdx)("inlineCode",{parentName:"p"},"SendProtobufToFlipperFromRetrofit")," for each service class:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-kotlin"},'import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n\nSendProtobufToFlipperFromRetrofit("https://baseurl.com/", MyApiService::class.java)\n')),(0,i.mdx)("h2",{id:"ios"},"iOS"),(0,i.mdx)("p",null,"To enable network inspection, add the following pod to your Podfile:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version\n")),(0,i.mdx)("p",null,"Initialize the plugin in the following way by updating AppDelegate.m:"),(0,i.mdx)(a.default,{defaultValue:"objc",values:[{label:"ObjC",value:"objc"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,i.mdx)(d.default,{value:"objc",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n\n[[FlipperClient sharedClient] addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n"))),(0,i.mdx)(d.default,{value:"swift",mdxType:"TabItem"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nclient?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))\n")))),(0,i.mdx)("h2",{id:"protobuf--retrofit-setup"},"Protobuf + Retrofit Setup"),(0,i.mdx)(c,{mdxType:"ProtobufRetrofitSetup"}))}h.isMDXComponent=!0},98945:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>d,metadata:()=>u,toc:()=>s,default:()=>m});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),p=n(67808),l=["components"],a={id:"network",title:"Network Plugin Setup",sidebar_label:"Network",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/network/docs/setup.mdx"},d=void 0,u={unversionedId:"setup/plugins/network",id:"setup/plugins/network",isDocsHomePage:!1,title:"Network Plugin Setup",description:"",source:"@site/../docs/setup/plugins/network.mdx",sourceDirName:"setup/plugins",slug:"/setup/plugins/network",permalink:"/docs/setup/plugins/network",editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/network/docs/setup.mdx",tags:[],version:"current",frontMatter:{id:"network",title:"Network Plugin Setup",sidebar_label:"Network",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/network/docs/setup.mdx"},sidebar:"setup",previous:{title:"Navigation",permalink:"/docs/setup/plugins/navigation"},next:{title:"Shared Preferences Viewer",permalink:"/docs/setup/plugins/preferences"}},s=[],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(p.default,{mdxType:"Article"}))}m.isMDXComponent=!0}}]);