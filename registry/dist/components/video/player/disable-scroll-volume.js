!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/player/disable-scroll-volume"]=o():e["video/player/disable-scroll-volume"]=o()}(globalThis,(()=>(()=>{var e,o,t={132:e=>{function o(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id=132,e.exports=o},466:e=>{"use strict";e.exports="在网页全屏 / 全屏模式下, 禁止鼠标滚轮控制播放器的音量.  请注意不能和 `反转滚轮调音量` 一同使用.\n"}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var l=Object.create(null);n.r(l);var i={};e=e||[null,o({}),o([]),o(o)];for(var s=2&r&&t;"object"==typeof s&&!~e.indexOf(s);s=o(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,n.d(l,i),l},n.d=(e,o)=>{for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";n.d(l,{component:()=>s});const e=coreApis.componentApis.define,o=coreApis.utils,t=coreApis.utils.urls;let r;const i=()=>(0,o.preventEvent)(unsafeWindow,"mousewheel",(()=>["player-mode-full","player-mode-web","player-fullscreen-fix","player-full-win"].some((e=>document.body.classList.contains(e))))),s=(0,e.defineComponentMetadata)({name:"disableScrollVolume",displayName:"禁止滚轮调音量",tags:[componentsTags.video],entry:()=>{r?.(),r=i()},reload:()=>{r?.(),r=i()},unload:()=>{r?.()},urlInclude:t.allVideoUrls,commitHash:"7e9a93368e3e56b6b8e02e306748fca6a3f58ae9",coreVersion:"2.9.1",description:(()=>{const e=n(132);return{...Object.fromEntries(e.keys().map((o=>[o.match(/index\.(.+)\.md$/)[1],e(o)]))),"zh-CN":()=>Promise.resolve().then(n.t.bind(n,466,17)).then((e=>e.default))}})()})})(),l=l.component})()));