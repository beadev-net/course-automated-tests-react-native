"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={position:1,title:"MacOS - Android Emulator"},l="MacOS",i={unversionedId:"Emulator/android",id:"Emulator/android",title:"MacOS - Android Emulator",description:"Add Custom DNS 8.8.8.8 to enable Android Emulator connect with internet",source:"@site/docs/Emulator/android.md",sourceDirName:"Emulator",slug:"/Emulator/android",permalink:"/course-automated-tests-react-native/docs/Emulator/android",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Emulator/android.md",tags:[],version:"current",frontMatter:{position:1,title:"MacOS - Android Emulator"},sidebar:"tutorialSidebar",previous:{title:"Emulator",permalink:"/course-automated-tests-react-native/docs/category/emulator"},next:{title:"MacOS - IOS Emulator",permalink:"/course-automated-tests-react-native/docs/Emulator/ios"}},d={},c=[],s={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"macos"},"MacOS"),(0,a.kt)("p",null,"Add Custom DNS ",(0,a.kt)("inlineCode",{parentName:"p"},"8.8.8.8")," to enable Android Emulator connect with internet"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mac-dns",src:r(4089).Z,width:"732",height:"639"})),(0,a.kt)("p",null,"Reference: ",(0,a.kt)("a",{parentName:"p",href:"https://support.apple.com/guide/mac-help/change-dns-settings-on-mac-mh14127/mac"},"https://support.apple.com/guide/mac-help/change-dns-settings-on-mac-mh14127/mac")),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"android-environment-variables"},"Android Environment Variables"),(0,a.kt)("p",null,"Install JAVA: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/build/jdks"},"https://developer.android.com/build/jdks")," "),(0,a.kt)("p",null,"Edit shell configurations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"vim ~/.zshrc\n")),(0,a.kt)("p",null,"Add environment variables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"export ANDROID_HOME=$HOME/Library/Android/sdk\nexport ANDROID_SDK_ROOT=$ANDROID_HOME\nexport PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools\nalias emulator=$HOME/Library/Android/sdk/emulator/emulator\n")),(0,a.kt)("p",null,"Reference: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/tools/variables"},"https://developer.android.com/tools/variables")),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"create-android-emulator"},"Create Android Emulator"),(0,a.kt)("video",{width:"520",height:"360",controls:!0},(0,a.kt)("source",{src:r(3502).Z,type:"video/webm"})),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"gradlew"},"Gradlew"),(0,a.kt)("p",null,"Clean Android Build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd android && ./gradlew clean\n")),(0,a.kt)("p",null,"Reference: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/gradle_wrapper.html"},"https://docs.gradle.org/current/userguide/gradle_wrapper.html")),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"keyboard-resize-window"},"Keyboard Resize Window"),(0,a.kt)("p",null,"Reference: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/manifest/activity-element#wsoft"},"https://developer.android.com/guide/topics/manifest/activity-element#wsoft")))}u.isMDXComponent=!0},3502:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/medias/create-emulator-android-1ea0fcb80de4c95fdf6acd34e4cd8ad2.webm"},4089:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mac-dns-852d906dbdf2f620a8d714a4b5ff52ac.png"}}]);