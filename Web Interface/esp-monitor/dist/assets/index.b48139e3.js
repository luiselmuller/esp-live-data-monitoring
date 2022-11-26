function GT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var SB=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Sg(t){var e=t.default;if(typeof e=="function"){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var T={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru=Symbol.for("react.element"),YT=Symbol.for("react.portal"),XT=Symbol.for("react.fragment"),QT=Symbol.for("react.strict_mode"),JT=Symbol.for("react.profiler"),ZT=Symbol.for("react.provider"),ez=Symbol.for("react.context"),tz=Symbol.for("react.forward_ref"),nz=Symbol.for("react.suspense"),rz=Symbol.for("react.memo"),iz=Symbol.for("react.lazy"),Ty=Symbol.iterator;function oz(t){return t===null||typeof t!="object"?null:(t=Ty&&t[Ty]||t["@@iterator"],typeof t=="function"?t:null)}var bS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},SS=Object.assign,xS={};function oa(t,e,n){this.props=t,this.context=e,this.refs=xS,this.updater=n||bS}oa.prototype.isReactComponent={};oa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ES(){}ES.prototype=oa.prototype;function xg(t,e,n){this.props=t,this.context=e,this.refs=xS,this.updater=n||bS}var Eg=xg.prototype=new ES;Eg.constructor=xg;SS(Eg,oa.prototype);Eg.isPureReactComponent=!0;var zy=Array.isArray,kS=Object.prototype.hasOwnProperty,kg={current:null},_S={key:!0,ref:!0,__self:!0,__source:!0};function CS(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)kS.call(e,r)&&!_S.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ru,type:t,key:o,ref:s,props:i,_owner:kg.current}}function sz(t,e){return{$$typeof:ru,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _g(t){return typeof t=="object"&&t!==null&&t.$$typeof===ru}function az(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Iy=/\/+/g;function _h(t,e){return typeof t=="object"&&t!==null&&t.key!=null?az(""+t.key):e.toString(36)}function kc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ru:case YT:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+_h(s,0):r,zy(i)?(n="",t!=null&&(n=t.replace(Iy,"$&/")+"/"),kc(i,e,n,"",function(u){return u})):i!=null&&(_g(i)&&(i=sz(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Iy,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",zy(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+_h(o,a);s+=kc(o,e,n,l,i)}else if(l=oz(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+_h(o,a++),s+=kc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function qu(t,e,n){if(t==null)return t;var r=[],i=0;return kc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function lz(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},_c={transition:null},uz={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:_c,ReactCurrentOwner:kg};le.Children={map:qu,forEach:function(t,e,n){qu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qu(t,function(){e++}),e},toArray:function(t){return qu(t,function(e){return e})||[]},only:function(t){if(!_g(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=oa;le.Fragment=XT;le.Profiler=JT;le.PureComponent=xg;le.StrictMode=QT;le.Suspense=nz;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uz;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=SS({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=kg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)kS.call(e,l)&&!_S.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ru,type:t.type,key:i,ref:o,props:r,_owner:s}};le.createContext=function(t){return t={$$typeof:ez,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ZT,_context:t},t.Consumer=t};le.createElement=CS;le.createFactory=function(t){var e=CS.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:tz,render:t}};le.isValidElement=_g;le.lazy=function(t){return{$$typeof:iz,_payload:{_status:-1,_result:t},_init:lz}};le.memo=function(t,e){return{$$typeof:rz,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=_c.transition;_c.transition={};try{t()}finally{_c.transition=e}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(t,e){return Kt.current.useCallback(t,e)};le.useContext=function(t){return Kt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};le.useEffect=function(t,e){return Kt.current.useEffect(t,e)};le.useId=function(){return Kt.current.useId()};le.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Kt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};le.useRef=function(t){return Kt.current.useRef(t)};le.useState=function(t){return Kt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Kt.current.useTransition()};le.version="18.2.0";(function(t){t.exports=le})(T);const Ur=wS(T.exports),As=GT({__proto__:null,default:Ur},[T.exports]);var Rp={},Kf={exports:{}},En={},TS={exports:{}},zS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,A){var F=P.length;P.push(A);e:for(;0<F;){var Q=F-1>>>1,se=P[Q];if(0<i(se,A))P[Q]=A,P[F]=se,F=Q;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],F=P.pop();if(F!==A){P[0]=F;e:for(var Q=0,se=P.length,Ge=se>>>1;Q<Ge;){var ot=2*(Q+1)-1,$e=P[ot],De=ot+1,Ve=P[De];if(0>i($e,F))De<se&&0>i(Ve,$e)?(P[Q]=Ve,P[De]=F,Q=De):(P[Q]=$e,P[ot]=F,Q=ot);else if(De<se&&0>i(Ve,F))P[Q]=Ve,P[De]=F,Q=De;else break e}}return A}function i(P,A){var F=P.sortIndex-A.sortIndex;return F!==0?F:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,p=null,m=3,v=!1,w=!1,y=!1,c=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=P)r(u),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(u)}}function b(P){if(y=!1,g(P),!w)if(n(l)!==null)w=!0,$(S);else{var A=n(u);A!==null&&j(b,A.startTime-P)}}function S(P,A){w=!1,y&&(y=!1,f(_),_=-1),v=!0;var F=m;try{for(g(A),p=n(l);p!==null&&(!(p.expirationTime>A)||P&&!z());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,m=p.priorityLevel;var se=Q(p.expirationTime<=A);A=t.unstable_now(),typeof se=="function"?p.callback=se:p===n(l)&&r(l),g(A)}else r(l);p=n(l)}if(p!==null)var Ge=!0;else{var ot=n(u);ot!==null&&j(b,ot.startTime-A),Ge=!1}return Ge}finally{p=null,m=F,v=!1}}var x=!1,E=null,_=-1,C=5,k=-1;function z(){return!(t.unstable_now()-k<C)}function R(){if(E!==null){var P=t.unstable_now();k=P;var A=!0;try{A=E(!0,P)}finally{A?U():(x=!1,E=null)}}else x=!1}var U;if(typeof h=="function")U=function(){h(R)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,O=V.port2;V.port1.onmessage=R,U=function(){O.postMessage(null)}}else U=function(){c(R,0)};function $(P){E=P,x||(x=!0,U())}function j(P,A){_=c(function(){P(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){w||v||(w=!0,$(S))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var F=m;m=A;try{return P()}finally{m=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=m;m=P;try{return A()}finally{m=F}},t.unstable_scheduleCallback=function(P,A,F){var Q=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Q+F:Q):F=Q,P){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=F+se,P={id:d++,callback:A,priorityLevel:P,startTime:F,expirationTime:se,sortIndex:-1},F>Q?(P.sortIndex=F,e(u,P),n(l)===null&&P===n(u)&&(y?(f(_),_=-1):y=!0,j(b,F-Q))):(P.sortIndex=se,e(l,P),w||v||(w=!0,$(S))),P},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(P){var A=m;return function(){var F=m;m=A;try{return P.apply(this,arguments)}finally{m=F}}}})(zS);(function(t){t.exports=zS})(TS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IS=T.exports,Sn=TS.exports;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var PS=new Set,vl={};function Uo(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(vl[t]=e,t=0;t<e.length;t++)PS.add(e[t])}var Mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Np=Object.prototype.hasOwnProperty,cz=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Py={},Oy={};function fz(t){return Np.call(Oy,t)?!0:Np.call(Py,t)?!1:cz.test(t)?Oy[t]=!0:(Py[t]=!0,!1)}function dz(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hz(t,e,n,r){if(e===null||typeof e>"u"||dz(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new Gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new Gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new Gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new Gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new Gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new Gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new Gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new Gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new Gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cg=/[\-:]([a-z])/g;function Tg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cg,Tg);_t[e]=new Gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cg,Tg);_t[e]=new Gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cg,Tg);_t[e]=new Gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new Gt(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new Gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function zg(t,e,n,r){var i=_t.hasOwnProperty(e)?_t[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hz(e,n,i,r)&&(n=null),r||i===null?fz(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xr=IS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ku=Symbol.for("react.element"),is=Symbol.for("react.portal"),os=Symbol.for("react.fragment"),Ig=Symbol.for("react.strict_mode"),Ap=Symbol.for("react.profiler"),OS=Symbol.for("react.provider"),RS=Symbol.for("react.context"),Pg=Symbol.for("react.forward_ref"),Up=Symbol.for("react.suspense"),$p=Symbol.for("react.suspense_list"),Og=Symbol.for("react.memo"),li=Symbol.for("react.lazy"),NS=Symbol.for("react.offscreen"),Ry=Symbol.iterator;function Ta(t){return t===null||typeof t!="object"?null:(t=Ry&&t[Ry]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,Ch;function ja(t){if(Ch===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ch=e&&e[1]||""}return`
`+Ch+t}var Th=!1;function zh(t,e){if(!t||Th)return"";Th=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Th=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ja(t):""}function pz(t){switch(t.tag){case 5:return ja(t.type);case 16:return ja("Lazy");case 13:return ja("Suspense");case 19:return ja("SuspenseList");case 0:case 2:case 15:return t=zh(t.type,!1),t;case 11:return t=zh(t.type.render,!1),t;case 1:return t=zh(t.type,!0),t;default:return""}}function Dp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case os:return"Fragment";case is:return"Portal";case Ap:return"Profiler";case Ig:return"StrictMode";case Up:return"Suspense";case $p:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case RS:return(t.displayName||"Context")+".Consumer";case OS:return(t._context.displayName||"Context")+".Provider";case Pg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Og:return e=t.displayName||null,e!==null?e:Dp(t.type)||"Memo";case li:e=t._payload,t=t._init;try{return Dp(t(e))}catch{}}return null}function mz(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dp(e);case 8:return e===Ig?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ri(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function AS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gz(t){var e=AS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gu(t){t._valueTracker||(t._valueTracker=gz(t))}function US(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=AS(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Yc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mp(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Ny(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ri(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $S(t,e){e=e.checked,e!=null&&zg(t,"checked",e,!1)}function Lp(t,e){$S(t,e);var n=Ri(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jp(t,e.type,n):e.hasOwnProperty("defaultValue")&&jp(t,e.type,Ri(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ay(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jp(t,e,n){(e!=="number"||Yc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fa=Array.isArray;function ws(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ri(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Fp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Uy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(Fa(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ri(n)}}function DS(t,e){var n=Ri(e.value),r=Ri(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $y(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function MS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?MS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yu,LS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yu=Yu||document.createElement("div"),Yu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vz=["Webkit","ms","Moz","O"];Object.keys(Ja).forEach(function(t){vz.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ja[e]=Ja[t]})});function jS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ja.hasOwnProperty(t)&&Ja[t]?(""+e).trim():e+"px"}function FS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jS(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yz=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vp(t,e){if(e){if(yz[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function Wp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hp=null;function Rg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qp=null,bs=null,Ss=null;function Dy(t){if(t=su(t)){if(typeof qp!="function")throw Error(D(280));var e=t.stateNode;e&&(e=Jf(e),qp(t.stateNode,t.type,e))}}function BS(t){bs?Ss?Ss.push(t):Ss=[t]:bs=t}function VS(){if(bs){var t=bs,e=Ss;if(Ss=bs=null,Dy(t),e)for(t=0;t<e.length;t++)Dy(e[t])}}function WS(t,e){return t(e)}function HS(){}var Ih=!1;function qS(t,e,n){if(Ih)return t(e,n);Ih=!0;try{return WS(t,e,n)}finally{Ih=!1,(bs!==null||Ss!==null)&&(HS(),VS())}}function wl(t,e){var n=t.stateNode;if(n===null)return null;var r=Jf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var Kp=!1;if(Mr)try{var za={};Object.defineProperty(za,"passive",{get:function(){Kp=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{Kp=!1}function wz(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Za=!1,Xc=null,Qc=!1,Gp=null,bz={onError:function(t){Za=!0,Xc=t}};function Sz(t,e,n,r,i,o,s,a,l){Za=!1,Xc=null,wz.apply(bz,arguments)}function xz(t,e,n,r,i,o,s,a,l){if(Sz.apply(this,arguments),Za){if(Za){var u=Xc;Za=!1,Xc=null}else throw Error(D(198));Qc||(Qc=!0,Gp=u)}}function $o(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function KS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function My(t){if($o(t)!==t)throw Error(D(188))}function Ez(t){var e=t.alternate;if(!e){if(e=$o(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return My(i),t;if(o===r)return My(i),e;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function GS(t){return t=Ez(t),t!==null?YS(t):null}function YS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=YS(t);if(e!==null)return e;t=t.sibling}return null}var XS=Sn.unstable_scheduleCallback,Ly=Sn.unstable_cancelCallback,kz=Sn.unstable_shouldYield,_z=Sn.unstable_requestPaint,Qe=Sn.unstable_now,Cz=Sn.unstable_getCurrentPriorityLevel,Ng=Sn.unstable_ImmediatePriority,QS=Sn.unstable_UserBlockingPriority,Jc=Sn.unstable_NormalPriority,Tz=Sn.unstable_LowPriority,JS=Sn.unstable_IdlePriority,Gf=null,cr=null;function zz(t){if(cr&&typeof cr.onCommitFiberRoot=="function")try{cr.onCommitFiberRoot(Gf,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:Oz,Iz=Math.log,Pz=Math.LN2;function Oz(t){return t>>>=0,t===0?32:31-(Iz(t)/Pz|0)|0}var Xu=64,Qu=4194304;function Ba(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ba(a):(o&=s,o!==0&&(r=Ba(o)))}else s=n&~i,s!==0?r=Ba(s):o!==0&&(r=Ba(o));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kn(e),i=1<<n,r|=t[n],e&=~i;return r}function Rz(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nz(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Kn(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=Rz(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Yp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ZS(){var t=Xu;return Xu<<=1,(Xu&4194240)===0&&(Xu=64),t}function Ph(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function iu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function Az(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Kn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Ag(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ee=0;function ex(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var tx,Ug,nx,rx,ix,Xp=!1,Ju=[],bi=null,Si=null,xi=null,bl=new Map,Sl=new Map,ci=[],Uz="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jy(t,e){switch(t){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":Si=null;break;case"mouseover":case"mouseout":xi=null;break;case"pointerover":case"pointerout":bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(e.pointerId)}}function Ia(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=su(e),e!==null&&Ug(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $z(t,e,n,r,i){switch(e){case"focusin":return bi=Ia(bi,t,e,n,r,i),!0;case"dragenter":return Si=Ia(Si,t,e,n,r,i),!0;case"mouseover":return xi=Ia(xi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return bl.set(o,Ia(bl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Sl.set(o,Ia(Sl.get(o)||null,t,e,n,r,i)),!0}return!1}function ox(t){var e=ao(t.target);if(e!==null){var n=$o(e);if(n!==null){if(e=n.tag,e===13){if(e=KS(n),e!==null){t.blockedOn=e,ix(t.priority,function(){nx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hp=r,n.target.dispatchEvent(r),Hp=null}else return e=su(n),e!==null&&Ug(e),t.blockedOn=n,!1;e.shift()}return!0}function Fy(t,e,n){Cc(t)&&n.delete(e)}function Dz(){Xp=!1,bi!==null&&Cc(bi)&&(bi=null),Si!==null&&Cc(Si)&&(Si=null),xi!==null&&Cc(xi)&&(xi=null),bl.forEach(Fy),Sl.forEach(Fy)}function Pa(t,e){t.blockedOn===e&&(t.blockedOn=null,Xp||(Xp=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,Dz)))}function xl(t){function e(i){return Pa(i,t)}if(0<Ju.length){Pa(Ju[0],t);for(var n=1;n<Ju.length;n++){var r=Ju[n];r.blockedOn===t&&(r.blockedOn=null)}}for(bi!==null&&Pa(bi,t),Si!==null&&Pa(Si,t),xi!==null&&Pa(xi,t),bl.forEach(e),Sl.forEach(e),n=0;n<ci.length;n++)r=ci[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ci.length&&(n=ci[0],n.blockedOn===null);)ox(n),n.blockedOn===null&&ci.shift()}var xs=Xr.ReactCurrentBatchConfig,ef=!0;function Mz(t,e,n,r){var i=Ee,o=xs.transition;xs.transition=null;try{Ee=1,$g(t,e,n,r)}finally{Ee=i,xs.transition=o}}function Lz(t,e,n,r){var i=Ee,o=xs.transition;xs.transition=null;try{Ee=4,$g(t,e,n,r)}finally{Ee=i,xs.transition=o}}function $g(t,e,n,r){if(ef){var i=Qp(t,e,n,r);if(i===null)jh(t,e,r,tf,n),jy(t,r);else if($z(i,t,e,n,r))r.stopPropagation();else if(jy(t,r),e&4&&-1<Uz.indexOf(t)){for(;i!==null;){var o=su(i);if(o!==null&&tx(o),o=Qp(t,e,n,r),o===null&&jh(t,e,r,tf,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else jh(t,e,r,null,n)}}var tf=null;function Qp(t,e,n,r){if(tf=null,t=Rg(r),t=ao(t),t!==null)if(e=$o(t),e===null)t=null;else if(n=e.tag,n===13){if(t=KS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tf=t,null}function sx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cz()){case Ng:return 1;case QS:return 4;case Jc:case Tz:return 16;case JS:return 536870912;default:return 16}default:return 16}}var gi=null,Dg=null,Tc=null;function ax(){if(Tc)return Tc;var t,e=Dg,n=e.length,r,i="value"in gi?gi.value:gi.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Tc=i.slice(t,1<r?1-r:void 0)}function zc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zu(){return!0}function By(){return!1}function kn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zu:By,this.isPropagationStopped=By,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zu)},persist:function(){},isPersistent:Zu}),e}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mg=kn(sa),ou=Be({},sa,{view:0,detail:0}),jz=kn(ou),Oh,Rh,Oa,Yf=Be({},ou,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oa&&(Oa&&t.type==="mousemove"?(Oh=t.screenX-Oa.screenX,Rh=t.screenY-Oa.screenY):Rh=Oh=0,Oa=t),Oh)},movementY:function(t){return"movementY"in t?t.movementY:Rh}}),Vy=kn(Yf),Fz=Be({},Yf,{dataTransfer:0}),Bz=kn(Fz),Vz=Be({},ou,{relatedTarget:0}),Nh=kn(Vz),Wz=Be({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),Hz=kn(Wz),qz=Be({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kz=kn(qz),Gz=Be({},sa,{data:0}),Wy=kn(Gz),Yz={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xz={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qz={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jz(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qz[t])?!!e[t]:!1}function Lg(){return Jz}var Zz=Be({},ou,{key:function(t){if(t.key){var e=Yz[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xz[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lg,charCode:function(t){return t.type==="keypress"?zc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eI=kn(Zz),tI=Be({},Yf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hy=kn(tI),nI=Be({},ou,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lg}),rI=kn(nI),iI=Be({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),oI=kn(iI),sI=Be({},Yf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aI=kn(sI),lI=[9,13,27,32],jg=Mr&&"CompositionEvent"in window,el=null;Mr&&"documentMode"in document&&(el=document.documentMode);var uI=Mr&&"TextEvent"in window&&!el,lx=Mr&&(!jg||el&&8<el&&11>=el),qy=String.fromCharCode(32),Ky=!1;function ux(t,e){switch(t){case"keyup":return lI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function cI(t,e){switch(t){case"compositionend":return cx(e);case"keypress":return e.which!==32?null:(Ky=!0,qy);case"textInput":return t=e.data,t===qy&&Ky?null:t;default:return null}}function fI(t,e){if(ss)return t==="compositionend"||!jg&&ux(t,e)?(t=ax(),Tc=Dg=gi=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lx&&e.locale!=="ko"?null:e.data;default:return null}}var dI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dI[t.type]:e==="textarea"}function fx(t,e,n,r){BS(r),e=nf(e,"onChange"),0<e.length&&(n=new Mg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var tl=null,El=null;function hI(t){xx(t,0)}function Xf(t){var e=us(t);if(US(e))return t}function pI(t,e){if(t==="change")return e}var dx=!1;if(Mr){var Ah;if(Mr){var Uh="oninput"in document;if(!Uh){var Yy=document.createElement("div");Yy.setAttribute("oninput","return;"),Uh=typeof Yy.oninput=="function"}Ah=Uh}else Ah=!1;dx=Ah&&(!document.documentMode||9<document.documentMode)}function Xy(){tl&&(tl.detachEvent("onpropertychange",hx),El=tl=null)}function hx(t){if(t.propertyName==="value"&&Xf(El)){var e=[];fx(e,El,t,Rg(t)),qS(hI,e)}}function mI(t,e,n){t==="focusin"?(Xy(),tl=e,El=n,tl.attachEvent("onpropertychange",hx)):t==="focusout"&&Xy()}function gI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xf(El)}function vI(t,e){if(t==="click")return Xf(e)}function yI(t,e){if(t==="input"||t==="change")return Xf(e)}function wI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:wI;function kl(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Np.call(e,i)||!Xn(t[i],e[i]))return!1}return!0}function Qy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jy(t,e){var n=Qy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qy(n)}}function px(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?px(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mx(){for(var t=window,e=Yc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yc(t.document)}return e}function Fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bI(t){var e=mx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&px(n.ownerDocument.documentElement,n)){if(r!==null&&Fg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Jy(n,o);var s=Jy(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SI=Mr&&"documentMode"in document&&11>=document.documentMode,as=null,Jp=null,nl=null,Zp=!1;function Zy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zp||as==null||as!==Yc(r)||(r=as,"selectionStart"in r&&Fg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nl&&kl(nl,r)||(nl=r,r=nf(Jp,"onSelect"),0<r.length&&(e=new Mg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=as)))}function ec(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:ec("Animation","AnimationEnd"),animationiteration:ec("Animation","AnimationIteration"),animationstart:ec("Animation","AnimationStart"),transitionend:ec("Transition","TransitionEnd")},$h={},gx={};Mr&&(gx=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Qf(t){if($h[t])return $h[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gx)return $h[t]=e[n];return t}var vx=Qf("animationend"),yx=Qf("animationiteration"),wx=Qf("animationstart"),bx=Qf("transitionend"),Sx=new Map,e1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mi(t,e){Sx.set(t,e),Uo(e,[t])}for(var Dh=0;Dh<e1.length;Dh++){var Mh=e1[Dh],xI=Mh.toLowerCase(),EI=Mh[0].toUpperCase()+Mh.slice(1);Mi(xI,"on"+EI)}Mi(vx,"onAnimationEnd");Mi(yx,"onAnimationIteration");Mi(wx,"onAnimationStart");Mi("dblclick","onDoubleClick");Mi("focusin","onFocus");Mi("focusout","onBlur");Mi(bx,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);Uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Va));function t1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,xz(r,e,void 0,t),t.currentTarget=null}function xx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;t1(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;t1(i,a,u),o=l}}}if(Qc)throw t=Gp,Qc=!1,Gp=null,t}function Oe(t,e){var n=e[im];n===void 0&&(n=e[im]=new Set);var r=t+"__bubble";n.has(r)||(Ex(e,t,2,!1),n.add(r))}function Lh(t,e,n){var r=0;e&&(r|=4),Ex(n,t,r,e)}var tc="_reactListening"+Math.random().toString(36).slice(2);function _l(t){if(!t[tc]){t[tc]=!0,PS.forEach(function(n){n!=="selectionchange"&&(kI.has(n)||Lh(n,!1,t),Lh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tc]||(e[tc]=!0,Lh("selectionchange",!1,e))}}function Ex(t,e,n,r){switch(sx(e)){case 1:var i=Mz;break;case 4:i=Lz;break;default:i=$g}n=i.bind(null,e,n,t),i=void 0,!Kp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function jh(t,e,n,r,i){var o=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=ao(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}qS(function(){var u=o,d=Rg(n),p=[];e:{var m=Sx.get(t);if(m!==void 0){var v=Mg,w=t;switch(t){case"keypress":if(zc(n)===0)break e;case"keydown":case"keyup":v=eI;break;case"focusin":w="focus",v=Nh;break;case"focusout":w="blur",v=Nh;break;case"beforeblur":case"afterblur":v=Nh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Vy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Bz;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=rI;break;case vx:case yx:case wx:v=Hz;break;case bx:v=oI;break;case"scroll":v=jz;break;case"wheel":v=aI;break;case"copy":case"cut":case"paste":v=Kz;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Hy}var y=(e&4)!==0,c=!y&&t==="scroll",f=y?m!==null?m+"Capture":null:m;y=[];for(var h=u,g;h!==null;){g=h;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,f!==null&&(b=wl(h,f),b!=null&&y.push(Cl(h,b,g)))),c)break;h=h.return}0<y.length&&(m=new v(m,w,null,n,d),p.push({event:m,listeners:y}))}}if((e&7)===0){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Hp&&(w=n.relatedTarget||n.fromElement)&&(ao(w)||w[Lr]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?ao(w):null,w!==null&&(c=$o(w),w!==c||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(y=Vy,b="onMouseLeave",f="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(y=Hy,b="onPointerLeave",f="onPointerEnter",h="pointer"),c=v==null?m:us(v),g=w==null?m:us(w),m=new y(b,h+"leave",v,n,d),m.target=c,m.relatedTarget=g,b=null,ao(d)===u&&(y=new y(f,h+"enter",w,n,d),y.target=g,y.relatedTarget=c,b=y),c=b,v&&w)t:{for(y=v,f=w,h=0,g=y;g;g=Yo(g))h++;for(g=0,b=f;b;b=Yo(b))g++;for(;0<h-g;)y=Yo(y),h--;for(;0<g-h;)f=Yo(f),g--;for(;h--;){if(y===f||f!==null&&y===f.alternate)break t;y=Yo(y),f=Yo(f)}y=null}else y=null;v!==null&&n1(p,m,v,y,!1),w!==null&&c!==null&&n1(p,c,w,y,!0)}}e:{if(m=u?us(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var S=pI;else if(Gy(m))if(dx)S=yI;else{S=gI;var x=mI}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=vI);if(S&&(S=S(t,u))){fx(p,S,n,d);break e}x&&x(t,m,u),t==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&jp(m,"number",m.value)}switch(x=u?us(u):window,t){case"focusin":(Gy(x)||x.contentEditable==="true")&&(as=x,Jp=u,nl=null);break;case"focusout":nl=Jp=as=null;break;case"mousedown":Zp=!0;break;case"contextmenu":case"mouseup":case"dragend":Zp=!1,Zy(p,n,d);break;case"selectionchange":if(SI)break;case"keydown":case"keyup":Zy(p,n,d)}var E;if(jg)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ss?ux(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(lx&&n.locale!=="ko"&&(ss||_!=="onCompositionStart"?_==="onCompositionEnd"&&ss&&(E=ax()):(gi=d,Dg="value"in gi?gi.value:gi.textContent,ss=!0)),x=nf(u,_),0<x.length&&(_=new Wy(_,t,null,n,d),p.push({event:_,listeners:x}),E?_.data=E:(E=cx(n),E!==null&&(_.data=E)))),(E=uI?cI(t,n):fI(t,n))&&(u=nf(u,"onBeforeInput"),0<u.length&&(d=new Wy("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=E))}xx(p,e)})}function Cl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nf(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=wl(t,n),o!=null&&r.unshift(Cl(t,o,i)),o=wl(t,e),o!=null&&r.push(Cl(t,o,i))),t=t.return}return r}function Yo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function n1(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=wl(n,o),l!=null&&s.unshift(Cl(n,l,a))):i||(l=wl(n,o),l!=null&&s.push(Cl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var _I=/\r\n?/g,CI=/\u0000|\uFFFD/g;function r1(t){return(typeof t=="string"?t:""+t).replace(_I,`
`).replace(CI,"")}function nc(t,e,n){if(e=r1(e),r1(t)!==e&&n)throw Error(D(425))}function rf(){}var em=null,tm=null;function nm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rm=typeof setTimeout=="function"?setTimeout:void 0,TI=typeof clearTimeout=="function"?clearTimeout:void 0,i1=typeof Promise=="function"?Promise:void 0,zI=typeof queueMicrotask=="function"?queueMicrotask:typeof i1<"u"?function(t){return i1.resolve(null).then(t).catch(II)}:rm;function II(t){setTimeout(function(){throw t})}function Fh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xl(e)}function Ei(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function o1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var aa=Math.random().toString(36).slice(2),sr="__reactFiber$"+aa,Tl="__reactProps$"+aa,Lr="__reactContainer$"+aa,im="__reactEvents$"+aa,PI="__reactListeners$"+aa,OI="__reactHandles$"+aa;function ao(t){var e=t[sr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lr]||n[sr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=o1(t);t!==null;){if(n=t[sr])return n;t=o1(t)}return e}t=n,n=t.parentNode}return null}function su(t){return t=t[sr]||t[Lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function Jf(t){return t[Tl]||null}var om=[],cs=-1;function Li(t){return{current:t}}function Re(t){0>cs||(t.current=om[cs],om[cs]=null,cs--)}function Ie(t,e){cs++,om[cs]=t.current,t.current=e}var Ni={},Dt=Li(Ni),sn=Li(!1),xo=Ni;function $s(t,e){var n=t.type.contextTypes;if(!n)return Ni;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function an(t){return t=t.childContextTypes,t!=null}function of(){Re(sn),Re(Dt)}function s1(t,e,n){if(Dt.current!==Ni)throw Error(D(168));Ie(Dt,e),Ie(sn,n)}function kx(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,mz(t)||"Unknown",i));return Be({},n,r)}function sf(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ni,xo=Dt.current,Ie(Dt,t),Ie(sn,sn.current),!0}function a1(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=kx(t,e,xo),r.__reactInternalMemoizedMergedChildContext=t,Re(sn),Re(Dt),Ie(Dt,t)):Re(sn),Ie(sn,n)}var Ir=null,Zf=!1,Bh=!1;function _x(t){Ir===null?Ir=[t]:Ir.push(t)}function RI(t){Zf=!0,_x(t)}function ji(){if(!Bh&&Ir!==null){Bh=!0;var t=0,e=Ee;try{var n=Ir;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ir=null,Zf=!1}catch(i){throw Ir!==null&&(Ir=Ir.slice(t+1)),XS(Ng,ji),i}finally{Ee=e,Bh=!1}}return null}var fs=[],ds=0,af=null,lf=0,On=[],Rn=0,Eo=null,Pr=1,Or="";function no(t,e){fs[ds++]=lf,fs[ds++]=af,af=t,lf=e}function Cx(t,e,n){On[Rn++]=Pr,On[Rn++]=Or,On[Rn++]=Eo,Eo=t;var r=Pr;t=Or;var i=32-Kn(r)-1;r&=~(1<<i),n+=1;var o=32-Kn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Pr=1<<32-Kn(e)+i|n<<i|r,Or=o+t}else Pr=1<<o|n<<i|r,Or=t}function Bg(t){t.return!==null&&(no(t,1),Cx(t,1,0))}function Vg(t){for(;t===af;)af=fs[--ds],fs[ds]=null,lf=fs[--ds],fs[ds]=null;for(;t===Eo;)Eo=On[--Rn],On[Rn]=null,Or=On[--Rn],On[Rn]=null,Pr=On[--Rn],On[Rn]=null}var wn=null,yn=null,Ae=!1,qn=null;function Tx(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function l1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,yn=Ei(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Eo!==null?{id:Pr,overflow:Or}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,yn=null,!0):!1;default:return!1}}function sm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function am(t){if(Ae){var e=yn;if(e){var n=e;if(!l1(t,e)){if(sm(t))throw Error(D(418));e=Ei(n.nextSibling);var r=wn;e&&l1(t,e)?Tx(r,n):(t.flags=t.flags&-4097|2,Ae=!1,wn=t)}}else{if(sm(t))throw Error(D(418));t.flags=t.flags&-4097|2,Ae=!1,wn=t}}}function u1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function rc(t){if(t!==wn)return!1;if(!Ae)return u1(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nm(t.type,t.memoizedProps)),e&&(e=yn)){if(sm(t))throw zx(),Error(D(418));for(;e;)Tx(t,e),e=Ei(e.nextSibling)}if(u1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=Ei(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=wn?Ei(t.stateNode.nextSibling):null;return!0}function zx(){for(var t=yn;t;)t=Ei(t.nextSibling)}function Ds(){yn=wn=null,Ae=!1}function Wg(t){qn===null?qn=[t]:qn.push(t)}var NI=Xr.ReactCurrentBatchConfig;function Wn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var uf=Li(null),cf=null,hs=null,Hg=null;function qg(){Hg=hs=cf=null}function Kg(t){var e=uf.current;Re(uf),t._currentValue=e}function lm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){cf=t,Hg=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(rn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(Hg!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(cf===null)throw Error(D(308));hs=t,cf.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var lo=null;function Gg(t){lo===null?lo=[t]:lo.push(t)}function Ix(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Gg(e)):(n.next=i.next,i.next=n),e.interleaved=n,jr(t,r)}function jr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ui=!1;function Yg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Px(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $r(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(me&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jr(t,n)}return i=r.interleaved,i===null?(e.next=e,Gg(r)):(e.next=i.next,i.next=e),r.interleaved=e,jr(t,n)}function Ic(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ag(t,n)}}function c1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ff(t,e,n,r){var i=t.updateQueue;ui=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,y=a;switch(m=e,v=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){p=w.call(v,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,m=typeof w=="function"?w.call(v,p,m):w,m==null)break e;p=Be({},p,m);break e;case 2:ui=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=p):d=d.next=v,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);_o|=s,t.lanes=s,t.memoizedState=p}}function f1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var Ox=new IS.Component().refs;function um(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ed={isMounted:function(t){return(t=t._reactInternals)?$o(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qt(),i=Ci(t),o=$r(r,i);o.payload=e,n!=null&&(o.callback=n),e=ki(t,o,i),e!==null&&(Gn(e,t,i,r),Ic(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qt(),i=Ci(t),o=$r(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ki(t,o,i),e!==null&&(Gn(e,t,i,r),Ic(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),r=Ci(t),i=$r(n,r);i.tag=2,e!=null&&(i.callback=e),e=ki(t,i,r),e!==null&&(Gn(e,t,r,n),Ic(e,t,r))}};function d1(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!kl(n,r)||!kl(i,o):!0}function Rx(t,e,n){var r=!1,i=Ni,o=e.contextType;return typeof o=="object"&&o!==null?o=$n(o):(i=an(e)?xo:Dt.current,r=e.contextTypes,o=(r=r!=null)?$s(t,i):Ni),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ed,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function h1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ed.enqueueReplaceState(e,e.state,null)}function cm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Ox,Yg(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=$n(o):(o=an(e)?xo:Dt.current,i.context=$s(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(um(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ed.enqueueReplaceState(i,i.state,null),ff(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ra(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===Ox&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function ic(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function p1(t){var e=t._init;return e(t._payload)}function Nx(t){function e(f,h){if(t){var g=f.deletions;g===null?(f.deletions=[h],f.flags|=16):g.push(h)}}function n(f,h){if(!t)return null;for(;h!==null;)e(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=Ti(f,h),f.index=0,f.sibling=null,f}function o(f,h,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<h?(f.flags|=2,h):g):(f.flags|=2,h)):(f.flags|=1048576,h)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,h,g,b){return h===null||h.tag!==6?(h=Yh(g,f.mode,b),h.return=f,h):(h=i(h,g),h.return=f,h)}function l(f,h,g,b){var S=g.type;return S===os?d(f,h,g.props.children,b,g.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===li&&p1(S)===h.type)?(b=i(h,g.props),b.ref=Ra(f,h,g),b.return=f,b):(b=Uc(g.type,g.key,g.props,null,f.mode,b),b.ref=Ra(f,h,g),b.return=f,b)}function u(f,h,g,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Xh(g,f.mode,b),h.return=f,h):(h=i(h,g.children||[]),h.return=f,h)}function d(f,h,g,b,S){return h===null||h.tag!==7?(h=mo(g,f.mode,b,S),h.return=f,h):(h=i(h,g),h.return=f,h)}function p(f,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Yh(""+h,f.mode,g),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ku:return g=Uc(h.type,h.key,h.props,null,f.mode,g),g.ref=Ra(f,null,h),g.return=f,g;case is:return h=Xh(h,f.mode,g),h.return=f,h;case li:var b=h._init;return p(f,b(h._payload),g)}if(Fa(h)||Ta(h))return h=mo(h,f.mode,g,null),h.return=f,h;ic(f,h)}return null}function m(f,h,g,b){var S=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(f,h,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ku:return g.key===S?l(f,h,g,b):null;case is:return g.key===S?u(f,h,g,b):null;case li:return S=g._init,m(f,h,S(g._payload),b)}if(Fa(g)||Ta(g))return S!==null?null:d(f,h,g,b,null);ic(f,g)}return null}function v(f,h,g,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(g)||null,a(h,f,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ku:return f=f.get(b.key===null?g:b.key)||null,l(h,f,b,S);case is:return f=f.get(b.key===null?g:b.key)||null,u(h,f,b,S);case li:var x=b._init;return v(f,h,g,x(b._payload),S)}if(Fa(b)||Ta(b))return f=f.get(g)||null,d(h,f,b,S,null);ic(h,b)}return null}function w(f,h,g,b){for(var S=null,x=null,E=h,_=h=0,C=null;E!==null&&_<g.length;_++){E.index>_?(C=E,E=null):C=E.sibling;var k=m(f,E,g[_],b);if(k===null){E===null&&(E=C);break}t&&E&&k.alternate===null&&e(f,E),h=o(k,h,_),x===null?S=k:x.sibling=k,x=k,E=C}if(_===g.length)return n(f,E),Ae&&no(f,_),S;if(E===null){for(;_<g.length;_++)E=p(f,g[_],b),E!==null&&(h=o(E,h,_),x===null?S=E:x.sibling=E,x=E);return Ae&&no(f,_),S}for(E=r(f,E);_<g.length;_++)C=v(E,f,_,g[_],b),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?_:C.key),h=o(C,h,_),x===null?S=C:x.sibling=C,x=C);return t&&E.forEach(function(z){return e(f,z)}),Ae&&no(f,_),S}function y(f,h,g,b){var S=Ta(g);if(typeof S!="function")throw Error(D(150));if(g=S.call(g),g==null)throw Error(D(151));for(var x=S=null,E=h,_=h=0,C=null,k=g.next();E!==null&&!k.done;_++,k=g.next()){E.index>_?(C=E,E=null):C=E.sibling;var z=m(f,E,k.value,b);if(z===null){E===null&&(E=C);break}t&&E&&z.alternate===null&&e(f,E),h=o(z,h,_),x===null?S=z:x.sibling=z,x=z,E=C}if(k.done)return n(f,E),Ae&&no(f,_),S;if(E===null){for(;!k.done;_++,k=g.next())k=p(f,k.value,b),k!==null&&(h=o(k,h,_),x===null?S=k:x.sibling=k,x=k);return Ae&&no(f,_),S}for(E=r(f,E);!k.done;_++,k=g.next())k=v(E,f,_,k.value,b),k!==null&&(t&&k.alternate!==null&&E.delete(k.key===null?_:k.key),h=o(k,h,_),x===null?S=k:x.sibling=k,x=k);return t&&E.forEach(function(R){return e(f,R)}),Ae&&no(f,_),S}function c(f,h,g,b){if(typeof g=="object"&&g!==null&&g.type===os&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ku:e:{for(var S=g.key,x=h;x!==null;){if(x.key===S){if(S=g.type,S===os){if(x.tag===7){n(f,x.sibling),h=i(x,g.props.children),h.return=f,f=h;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===li&&p1(S)===x.type){n(f,x.sibling),h=i(x,g.props),h.ref=Ra(f,x,g),h.return=f,f=h;break e}n(f,x);break}else e(f,x);x=x.sibling}g.type===os?(h=mo(g.props.children,f.mode,b,g.key),h.return=f,f=h):(b=Uc(g.type,g.key,g.props,null,f.mode,b),b.ref=Ra(f,h,g),b.return=f,f=b)}return s(f);case is:e:{for(x=g.key;h!==null;){if(h.key===x)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(f,h.sibling),h=i(h,g.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else e(f,h);h=h.sibling}h=Xh(g,f.mode,b),h.return=f,f=h}return s(f);case li:return x=g._init,c(f,h,x(g._payload),b)}if(Fa(g))return w(f,h,g,b);if(Ta(g))return y(f,h,g,b);ic(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(f,h.sibling),h=i(h,g),h.return=f,f=h):(n(f,h),h=Yh(g,f.mode,b),h.return=f,f=h),s(f)):n(f,h)}return c}var Ms=Nx(!0),Ax=Nx(!1),au={},fr=Li(au),zl=Li(au),Il=Li(au);function uo(t){if(t===au)throw Error(D(174));return t}function Xg(t,e){switch(Ie(Il,e),Ie(zl,t),Ie(fr,au),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bp(e,t)}Re(fr),Ie(fr,e)}function Ls(){Re(fr),Re(zl),Re(Il)}function Ux(t){uo(Il.current);var e=uo(fr.current),n=Bp(e,t.type);e!==n&&(Ie(zl,t),Ie(fr,n))}function Qg(t){zl.current===t&&(Re(fr),Re(zl))}var Le=Li(0);function df(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vh=[];function Jg(){for(var t=0;t<Vh.length;t++)Vh[t]._workInProgressVersionPrimary=null;Vh.length=0}var Pc=Xr.ReactCurrentDispatcher,Wh=Xr.ReactCurrentBatchConfig,ko=0,Fe=null,at=null,ft=null,hf=!1,rl=!1,Pl=0,AI=0;function Pt(){throw Error(D(321))}function Zg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function e0(t,e,n,r,i,o){if(ko=o,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pc.current=t===null||t.memoizedState===null?MI:LI,t=n(r,i),rl){o=0;do{if(rl=!1,Pl=0,25<=o)throw Error(D(301));o+=1,ft=at=null,e.updateQueue=null,Pc.current=jI,t=n(r,i)}while(rl)}if(Pc.current=pf,e=at!==null&&at.next!==null,ko=0,ft=at=Fe=null,hf=!1,e)throw Error(D(300));return t}function t0(){var t=Pl!==0;return Pl=0,t}function rr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Fe.memoizedState=ft=t:ft=ft.next=t,ft}function Dn(){if(at===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var e=ft===null?Fe.memoizedState:ft.next;if(e!==null)ft=e,at=t;else{if(t===null)throw Error(D(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},ft===null?Fe.memoizedState=ft=t:ft=ft.next=t}return ft}function Ol(t,e){return typeof e=="function"?e(t):e}function Hh(t){var e=Dn(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=at,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((ko&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,Fe.lanes|=d,_o|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Xn(r,e.memoizedState)||(rn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Fe.lanes|=o,_o|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qh(t){var e=Dn(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Xn(o,e.memoizedState)||(rn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function $x(){}function Dx(t,e){var n=Fe,r=Dn(),i=e(),o=!Xn(r.memoizedState,i);if(o&&(r.memoizedState=i,rn=!0),r=r.queue,n0(jx.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,Rl(9,Lx.bind(null,n,r,i,e),void 0,null),dt===null)throw Error(D(349));(ko&30)!==0||Mx(n,e,i)}return i}function Mx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lx(t,e,n,r){e.value=n,e.getSnapshot=r,Fx(e)&&Bx(t)}function jx(t,e,n){return n(function(){Fx(e)&&Bx(t)})}function Fx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function Bx(t){var e=jr(t,1);e!==null&&Gn(e,t,1,-1)}function m1(t){var e=rr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ol,lastRenderedState:t},e.queue=t,t=t.dispatch=DI.bind(null,Fe,t),[e.memoizedState,t]}function Rl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vx(){return Dn().memoizedState}function Oc(t,e,n,r){var i=rr();Fe.flags|=t,i.memoizedState=Rl(1|e,n,void 0,r===void 0?null:r)}function td(t,e,n,r){var i=Dn();r=r===void 0?null:r;var o=void 0;if(at!==null){var s=at.memoizedState;if(o=s.destroy,r!==null&&Zg(r,s.deps)){i.memoizedState=Rl(e,n,o,r);return}}Fe.flags|=t,i.memoizedState=Rl(1|e,n,o,r)}function g1(t,e){return Oc(8390656,8,t,e)}function n0(t,e){return td(2048,8,t,e)}function Wx(t,e){return td(4,2,t,e)}function Hx(t,e){return td(4,4,t,e)}function qx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Kx(t,e,n){return n=n!=null?n.concat([t]):null,td(4,4,qx.bind(null,e,t),n)}function r0(){}function Gx(t,e){var n=Dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Yx(t,e){var n=Dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Xx(t,e,n){return(ko&21)===0?(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n):(Xn(n,e)||(n=ZS(),Fe.lanes|=n,_o|=n,t.baseState=!0),e)}function UI(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=Wh.transition;Wh.transition={};try{t(!1),e()}finally{Ee=n,Wh.transition=r}}function Qx(){return Dn().memoizedState}function $I(t,e,n){var r=Ci(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jx(t))Zx(e,n);else if(n=Ix(t,e,n,r),n!==null){var i=qt();Gn(n,t,r,i),eE(n,e,r)}}function DI(t,e,n){var r=Ci(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jx(t))Zx(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Xn(a,s)){var l=e.interleaved;l===null?(i.next=i,Gg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Ix(t,e,i,r),n!==null&&(i=qt(),Gn(n,t,r,i),eE(n,e,r))}}function Jx(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function Zx(t,e){rl=hf=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function eE(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ag(t,n)}}var pf={readContext:$n,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},MI={readContext:$n,useCallback:function(t,e){return rr().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:g1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4194308,4,qx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oc(4,2,t,e)},useMemo:function(t,e){var n=rr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$I.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=rr();return t={current:t},e.memoizedState=t},useState:m1,useDebugValue:r0,useDeferredValue:function(t){return rr().memoizedState=t},useTransition:function(){var t=m1(!1),e=t[0];return t=UI.bind(null,t[1]),rr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=rr();if(Ae){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),dt===null)throw Error(D(349));(ko&30)!==0||Mx(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,g1(jx.bind(null,r,o,t),[t]),r.flags|=2048,Rl(9,Lx.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=rr(),e=dt.identifierPrefix;if(Ae){var n=Or,r=Pr;n=(r&~(1<<32-Kn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},LI={readContext:$n,useCallback:Gx,useContext:$n,useEffect:n0,useImperativeHandle:Kx,useInsertionEffect:Wx,useLayoutEffect:Hx,useMemo:Yx,useReducer:Hh,useRef:Vx,useState:function(){return Hh(Ol)},useDebugValue:r0,useDeferredValue:function(t){var e=Dn();return Xx(e,at.memoizedState,t)},useTransition:function(){var t=Hh(Ol)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:$x,useSyncExternalStore:Dx,useId:Qx,unstable_isNewReconciler:!1},jI={readContext:$n,useCallback:Gx,useContext:$n,useEffect:n0,useImperativeHandle:Kx,useInsertionEffect:Wx,useLayoutEffect:Hx,useMemo:Yx,useReducer:qh,useRef:Vx,useState:function(){return qh(Ol)},useDebugValue:r0,useDeferredValue:function(t){var e=Dn();return at===null?e.memoizedState=t:Xx(e,at.memoizedState,t)},useTransition:function(){var t=qh(Ol)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:$x,useSyncExternalStore:Dx,useId:Qx,unstable_isNewReconciler:!1};function js(t,e){try{var n="",r=e;do n+=pz(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Kh(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function fm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var FI=typeof WeakMap=="function"?WeakMap:Map;function tE(t,e,n){n=$r(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gf||(gf=!0,Sm=r),fm(t,e)},n}function nE(t,e,n){n=$r(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fm(t,e),typeof r!="function"&&(_i===null?_i=new Set([this]):_i.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function v1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new FI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=t2.bind(null,t,e,n),e.then(t,t))}function y1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function w1(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$r(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var BI=Xr.ReactCurrentOwner,rn=!1;function Wt(t,e,n,r){e.child=t===null?Ax(e,null,n,r):Ms(e,t.child,n,r)}function b1(t,e,n,r,i){n=n.render;var o=e.ref;return Es(e,i),r=e0(t,e,n,r,o,i),n=t0(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fr(t,e,i)):(Ae&&n&&Bg(e),e.flags|=1,Wt(t,e,r,i),e.child)}function S1(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!f0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,rE(t,e,o,r,i)):(t=Uc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,(t.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:kl,n(s,r)&&t.ref===e.ref)return Fr(t,e,i)}return e.flags|=1,t=Ti(o,r),t.ref=e.ref,t.return=e,e.child=t}function rE(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(kl(o,r)&&t.ref===e.ref)if(rn=!1,e.pendingProps=r=o,(t.lanes&i)!==0)(t.flags&131072)!==0&&(rn=!0);else return e.lanes=t.lanes,Fr(t,e,i)}return dm(t,e,n,r,i)}function iE(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(ms,vn),vn|=n;else{if((n&1073741824)===0)return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(ms,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ie(ms,vn),vn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Ie(ms,vn),vn|=r;return Wt(t,e,i,n),e.child}function oE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dm(t,e,n,r,i){var o=an(n)?xo:Dt.current;return o=$s(e,o),Es(e,i),n=e0(t,e,n,r,o,i),r=t0(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fr(t,e,i)):(Ae&&r&&Bg(e),e.flags|=1,Wt(t,e,n,i),e.child)}function x1(t,e,n,r,i){if(an(n)){var o=!0;sf(e)}else o=!1;if(Es(e,i),e.stateNode===null)Rc(t,e),Rx(e,n,r),cm(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=$n(u):(u=an(n)?xo:Dt.current,u=$s(e,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&h1(e,s,r,u),ui=!1;var m=e.memoizedState;s.state=m,ff(e,r,s,i),l=e.memoizedState,a!==r||m!==l||sn.current||ui?(typeof d=="function"&&(um(e,n,d,r),l=e.memoizedState),(a=ui||d1(e,n,a,r,m,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Px(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Wn(e.type,a),s.props=u,p=e.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=an(n)?xo:Dt.current,l=$s(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==l)&&h1(e,s,r,l),ui=!1,m=e.memoizedState,s.state=m,ff(e,r,s,i);var w=e.memoizedState;a!==p||m!==w||sn.current||ui?(typeof v=="function"&&(um(e,n,v,r),w=e.memoizedState),(u=ui||d1(e,n,u,r,m,w,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return hm(t,e,n,r,o,i)}function hm(t,e,n,r,i,o){oE(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&a1(e,n,!1),Fr(t,e,o);r=e.stateNode,BI.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Ms(e,t.child,null,o),e.child=Ms(e,null,a,o)):Wt(t,e,a,o),e.memoizedState=r.state,i&&a1(e,n,!0),e.child}function sE(t){var e=t.stateNode;e.pendingContext?s1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&s1(t,e.context,!1),Xg(t,e.containerInfo)}function E1(t,e,n,r,i){return Ds(),Wg(i),e.flags|=256,Wt(t,e,n,r),e.child}var pm={dehydrated:null,treeContext:null,retryLane:0};function mm(t){return{baseLanes:t,cachePool:null,transitions:null}}function aE(t,e,n){var r=e.pendingProps,i=Le.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Le,i&1),t===null)return am(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=id(s,r,0,null),t=mo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=mm(n),e.memoizedState=pm,t):i0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return VI(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ti(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ti(a,o):(o=mo(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?mm(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=pm,r}return o=t.child,t=o.sibling,r=Ti(o,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function i0(t,e){return e=id({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oc(t,e,n,r){return r!==null&&Wg(r),Ms(e,t.child,null,n),t=i0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VI(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Kh(Error(D(422))),oc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=id({mode:"visible",children:r.children},i,0,null),o=mo(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,(e.mode&1)!==0&&Ms(e,t.child,null,s),e.child.memoizedState=mm(s),e.memoizedState=pm,o);if((e.mode&1)===0)return oc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(D(419)),r=Kh(o,r,void 0),oc(t,e,s,r)}if(a=(s&t.childLanes)!==0,rn||a){if(r=dt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,jr(t,i),Gn(r,t,i,-1))}return c0(),r=Kh(Error(D(421))),oc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=n2.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,yn=Ei(i.nextSibling),wn=e,Ae=!0,qn=null,t!==null&&(On[Rn++]=Pr,On[Rn++]=Or,On[Rn++]=Eo,Pr=t.id,Or=t.overflow,Eo=e),e=i0(e,r.children),e.flags|=4096,e)}function k1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lm(t.return,e,n)}function Gh(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function lE(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Wt(t,e,r.children,n),r=Le.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&k1(t,n,e);else if(t.tag===19)k1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Le,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&df(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gh(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&df(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gh(e,!0,n,null,o);break;case"together":Gh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rc(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_o|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=Ti(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ti(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WI(t,e,n){switch(e.tag){case 3:sE(e),Ds();break;case 5:Ux(e);break;case 1:an(e.type)&&sf(e);break;case 4:Xg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(uf,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Le,Le.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?aE(t,e,n):(Ie(Le,Le.current&1),t=Fr(t,e,n),t!==null?t.sibling:null);Ie(Le,Le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return lE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Le,Le.current),r)break;return null;case 22:case 23:return e.lanes=0,iE(t,e,n)}return Fr(t,e,n)}var uE,gm,cE,fE;uE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gm=function(){};cE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,uo(fr.current);var o=null;switch(n){case"input":i=Mp(t,i),r=Mp(t,r),o=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),o=[];break;case"textarea":i=Fp(t,i),r=Fp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rf)}Vp(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vl.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Oe("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};fE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Na(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function HI(t,e,n){var r=e.pendingProps;switch(Vg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return an(e.type)&&of(),Ot(e),null;case 3:return r=e.stateNode,Ls(),Re(sn),Re(Dt),Jg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(rc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,qn!==null&&(km(qn),qn=null))),gm(t,e),Ot(e),null;case 5:Qg(e);var i=uo(Il.current);if(n=e.type,t!==null&&e.stateNode!=null)cE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return Ot(e),null}if(t=uo(fr.current),rc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[sr]=e,r[Tl]=o,t=(e.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<Va.length;i++)Oe(Va[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":Ny(r,o),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Oe("invalid",r);break;case"textarea":Uy(r,o),Oe("invalid",r)}Vp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&nc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&nc(r.textContent,a,t),i=["children",""+a]):vl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Oe("scroll",r)}switch(n){case"input":Gu(r),Ay(r,o,!0);break;case"textarea":Gu(r),$y(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=rf)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=MS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[sr]=e,t[Tl]=r,uE(t,e,!1,!1),e.stateNode=t;e:{switch(s=Wp(n,r),n){case"dialog":Oe("cancel",t),Oe("close",t),i=r;break;case"iframe":case"object":case"embed":Oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Va.length;i++)Oe(Va[i],t);i=r;break;case"source":Oe("error",t),i=r;break;case"img":case"image":case"link":Oe("error",t),Oe("load",t),i=r;break;case"details":Oe("toggle",t),i=r;break;case"input":Ny(t,r),i=Mp(t,r),Oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),Oe("invalid",t);break;case"textarea":Uy(t,r),i=Fp(t,r),Oe("invalid",t);break;default:i=r}Vp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?FS(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&LS(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yl(t,l):typeof l=="number"&&yl(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Oe("scroll",t):l!=null&&zg(t,o,l,s))}switch(n){case"input":Gu(t),Ay(t,r,!1);break;case"textarea":Gu(t),$y(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ri(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?ws(t,!!r.multiple,o,!1):r.defaultValue!=null&&ws(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=rf)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)fE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=uo(Il.current),uo(fr.current),rc(e)){if(r=e.stateNode,n=e.memoizedProps,r[sr]=e,(o=r.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:nc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sr]=e,e.stateNode=r}return Ot(e),null;case 13:if(Re(Le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&yn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)zx(),Ds(),e.flags|=98560,o=!1;else if(o=rc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(D(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[sr]=e}else Ds(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ot(e),o=!1}else qn!==null&&(km(qn),qn=null),o=!0;if(!o)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Le.current&1)!==0?lt===0&&(lt=3):c0())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Ls(),gm(t,e),t===null&&_l(e.stateNode.containerInfo),Ot(e),null;case 10:return Kg(e.type._context),Ot(e),null;case 17:return an(e.type)&&of(),Ot(e),null;case 19:if(Re(Le),o=e.memoizedState,o===null)return Ot(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Na(o,!1);else{if(lt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=df(t),s!==null){for(e.flags|=128,Na(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Le,Le.current&1|2),e.child}t=t.sibling}o.tail!==null&&Qe()>Fs&&(e.flags|=128,r=!0,Na(o,!1),e.lanes=4194304)}else{if(!r)if(t=df(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Na(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ae)return Ot(e),null}else 2*Qe()-o.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,r=!0,Na(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Qe(),e.sibling=null,n=Le.current,Ie(Le,r?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return u0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(vn&1073741824)!==0&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function qI(t,e){switch(Vg(e),e.tag){case 1:return an(e.type)&&of(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),Re(sn),Re(Dt),Jg(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Qg(e),null;case 13:if(Re(Le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Le),null;case 4:return Ls(),null;case 10:return Kg(e.type._context),null;case 22:case 23:return u0(),null;case 24:return null;default:return null}}var sc=!1,At=!1,KI=typeof WeakSet=="function"?WeakSet:Set,K=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){He(t,e,r)}else n.current=null}function vm(t,e,n){try{n()}catch(r){He(t,e,r)}}var _1=!1;function GI(t,e){if(em=ef,t=mx(),Fg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,p=t,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===t)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tm={focusedElem:t,selectionRange:n},ef=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var w=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,c=w.memoizedState,f=e.stateNode,h=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Wn(e.type,y),c);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(b){He(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return w=_1,_1=!1,w}function il(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&vm(e,n,o)}i=i.next}while(i!==r)}}function nd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ym(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dE(t){var e=t.alternate;e!==null&&(t.alternate=null,dE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sr],delete e[Tl],delete e[im],delete e[PI],delete e[OI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hE(t){return t.tag===5||t.tag===3||t.tag===4}function C1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rf));else if(r!==4&&(t=t.child,t!==null))for(wm(t,e,n),t=t.sibling;t!==null;)wm(t,e,n),t=t.sibling}function bm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bm(t,e,n),t=t.sibling;t!==null;)bm(t,e,n),t=t.sibling}var wt=null,Hn=!1;function ii(t,e,n){for(n=n.child;n!==null;)pE(t,e,n),n=n.sibling}function pE(t,e,n){if(cr&&typeof cr.onCommitFiberUnmount=="function")try{cr.onCommitFiberUnmount(Gf,n)}catch{}switch(n.tag){case 5:At||ps(n,e);case 6:var r=wt,i=Hn;wt=null,ii(t,e,n),wt=r,Hn=i,wt!==null&&(Hn?(t=wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(Hn?(t=wt,n=n.stateNode,t.nodeType===8?Fh(t.parentNode,n):t.nodeType===1&&Fh(t,n),xl(t)):Fh(wt,n.stateNode));break;case 4:r=wt,i=Hn,wt=n.stateNode.containerInfo,Hn=!0,ii(t,e,n),wt=r,Hn=i;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&vm(n,e,s),i=i.next}while(i!==r)}ii(t,e,n);break;case 1:if(!At&&(ps(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){He(n,e,a)}ii(t,e,n);break;case 21:ii(t,e,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,ii(t,e,n),At=r):ii(t,e,n);break;default:ii(t,e,n)}}function T1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KI),e.forEach(function(r){var i=r2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:wt=a.stateNode,Hn=!1;break e;case 3:wt=a.stateNode.containerInfo,Hn=!0;break e;case 4:wt=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(wt===null)throw Error(D(160));pE(o,s,i),wt=null,Hn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){He(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mE(e,t),e=e.sibling}function mE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),nr(t),r&4){try{il(3,t,t.return),nd(3,t)}catch(y){He(t,t.return,y)}try{il(5,t,t.return)}catch(y){He(t,t.return,y)}}break;case 1:Vn(e,t),nr(t),r&512&&n!==null&&ps(n,n.return);break;case 5:if(Vn(e,t),nr(t),r&512&&n!==null&&ps(n,n.return),t.flags&32){var i=t.stateNode;try{yl(i,"")}catch(y){He(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&$S(i,o),Wp(a,s);var u=Wp(a,o);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?FS(i,p):d==="dangerouslySetInnerHTML"?LS(i,p):d==="children"?yl(i,p):zg(i,d,p,u)}switch(a){case"input":Lp(i,o);break;case"textarea":DS(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?ws(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?ws(i,!!o.multiple,o.defaultValue,!0):ws(i,!!o.multiple,o.multiple?[]:"",!1))}i[Tl]=o}catch(y){He(t,t.return,y)}}break;case 6:if(Vn(e,t),nr(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(y){He(t,t.return,y)}}break;case 3:if(Vn(e,t),nr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xl(e.containerInfo)}catch(y){He(t,t.return,y)}break;case 4:Vn(e,t),nr(t);break;case 13:Vn(e,t),nr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(a0=Qe())),r&4&&T1(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(At=(u=At)||d,Vn(e,t),At=u):Vn(e,t),nr(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&(t.mode&1)!==0)for(K=t,d=t.child;d!==null;){for(p=K=d;K!==null;){switch(m=K,v=m.child,m.tag){case 0:case 11:case 14:case 15:il(4,m,m.return);break;case 1:ps(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(y){He(r,n,y)}}break;case 5:ps(m,m.return);break;case 22:if(m.memoizedState!==null){I1(p);continue}}v!==null?(v.return=m,K=v):I1(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jS("display",s))}catch(y){He(t,t.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){He(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Vn(e,t),nr(t),r&4&&T1(t);break;case 21:break;default:Vn(e,t),nr(t)}}function nr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hE(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yl(i,""),r.flags&=-33);var o=C1(t);bm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=C1(t);wm(t,a,s);break;default:throw Error(D(161))}}catch(l){He(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function YI(t,e,n){K=t,gE(t)}function gE(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||sc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||At;a=sc;var u=At;if(sc=s,(At=l)&&!u)for(K=i;K!==null;)s=K,l=s.child,s.tag===22&&s.memoizedState!==null?P1(i):l!==null?(l.return=s,K=l):P1(i);for(;o!==null;)K=o,gE(o),o=o.sibling;K=i,sc=a,At=u}z1(t)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,K=o):z1(t)}}function z1(t){for(;K!==null;){var e=K;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:At||nd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!At)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&f1(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}f1(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&xl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}At||e.flags&512&&ym(e)}catch(m){He(e,e.return,m)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function I1(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function P1(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nd(4,e)}catch(l){He(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){He(e,i,l)}}var o=e.return;try{ym(e)}catch(l){He(e,o,l)}break;case 5:var s=e.return;try{ym(e)}catch(l){He(e,s,l)}}}catch(l){He(e,e.return,l)}if(e===t){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var XI=Math.ceil,mf=Xr.ReactCurrentDispatcher,o0=Xr.ReactCurrentOwner,An=Xr.ReactCurrentBatchConfig,me=0,dt=null,rt=null,Et=0,vn=0,ms=Li(0),lt=0,Nl=null,_o=0,rd=0,s0=0,ol=null,tn=null,a0=0,Fs=1/0,zr=null,gf=!1,Sm=null,_i=null,ac=!1,vi=null,vf=0,sl=0,xm=null,Nc=-1,Ac=0;function qt(){return(me&6)!==0?Qe():Nc!==-1?Nc:Nc=Qe()}function Ci(t){return(t.mode&1)===0?1:(me&2)!==0&&Et!==0?Et&-Et:NI.transition!==null?(Ac===0&&(Ac=ZS()),Ac):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:sx(t.type)),t)}function Gn(t,e,n,r){if(50<sl)throw sl=0,xm=null,Error(D(185));iu(t,n,r),((me&2)===0||t!==dt)&&(t===dt&&((me&2)===0&&(rd|=n),lt===4&&fi(t,Et)),ln(t,r),n===1&&me===0&&(e.mode&1)===0&&(Fs=Qe()+500,Zf&&ji()))}function ln(t,e){var n=t.callbackNode;Nz(t,e);var r=Zc(t,t===dt?Et:0);if(r===0)n!==null&&Ly(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ly(n),e===1)t.tag===0?RI(O1.bind(null,t)):_x(O1.bind(null,t)),zI(function(){(me&6)===0&&ji()}),n=null;else{switch(ex(r)){case 1:n=Ng;break;case 4:n=QS;break;case 16:n=Jc;break;case 536870912:n=JS;break;default:n=Jc}n=kE(n,vE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vE(t,e){if(Nc=-1,Ac=0,(me&6)!==0)throw Error(D(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var r=Zc(t,t===dt?Et:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=yf(t,r);else{e=r;var i=me;me|=2;var o=wE();(dt!==t||Et!==e)&&(zr=null,Fs=Qe()+500,po(t,e));do try{ZI();break}catch(a){yE(t,a)}while(1);qg(),mf.current=o,me=i,rt!==null?e=0:(dt=null,Et=0,e=lt)}if(e!==0){if(e===2&&(i=Yp(t),i!==0&&(r=i,e=Em(t,i))),e===1)throw n=Nl,po(t,0),fi(t,r),ln(t,Qe()),n;if(e===6)fi(t,r);else{if(i=t.current.alternate,(r&30)===0&&!QI(i)&&(e=yf(t,r),e===2&&(o=Yp(t),o!==0&&(r=o,e=Em(t,o))),e===1))throw n=Nl,po(t,0),fi(t,r),ln(t,Qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:ro(t,tn,zr);break;case 3:if(fi(t,r),(r&130023424)===r&&(e=a0+500-Qe(),10<e)){if(Zc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rm(ro.bind(null,t,tn,zr),e);break}ro(t,tn,zr);break;case 4:if(fi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Kn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*XI(r/1960))-r,10<r){t.timeoutHandle=rm(ro.bind(null,t,tn,zr),r);break}ro(t,tn,zr);break;case 5:ro(t,tn,zr);break;default:throw Error(D(329))}}}return ln(t,Qe()),t.callbackNode===n?vE.bind(null,t):null}function Em(t,e){var n=ol;return t.current.memoizedState.isDehydrated&&(po(t,e).flags|=256),t=yf(t,e),t!==2&&(e=tn,tn=n,e!==null&&km(e)),t}function km(t){tn===null?tn=t:tn.push.apply(tn,t)}function QI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fi(t,e){for(e&=~s0,e&=~rd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),r=1<<n;t[n]=-1,e&=~r}}function O1(t){if((me&6)!==0)throw Error(D(327));ks();var e=Zc(t,0);if((e&1)===0)return ln(t,Qe()),null;var n=yf(t,e);if(t.tag!==0&&n===2){var r=Yp(t);r!==0&&(e=r,n=Em(t,r))}if(n===1)throw n=Nl,po(t,0),fi(t,e),ln(t,Qe()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ro(t,tn,zr),ln(t,Qe()),null}function l0(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(Fs=Qe()+500,Zf&&ji())}}function Co(t){vi!==null&&vi.tag===0&&(me&6)===0&&ks();var e=me;me|=1;var n=An.transition,r=Ee;try{if(An.transition=null,Ee=1,t)return t()}finally{Ee=r,An.transition=n,me=e,(me&6)===0&&ji()}}function u0(){vn=ms.current,Re(ms)}function po(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TI(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(Vg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&of();break;case 3:Ls(),Re(sn),Re(Dt),Jg();break;case 5:Qg(r);break;case 4:Ls();break;case 13:Re(Le);break;case 19:Re(Le);break;case 10:Kg(r.type._context);break;case 22:case 23:u0()}n=n.return}if(dt=t,rt=t=Ti(t.current,null),Et=vn=e,lt=0,Nl=null,s0=rd=_o=0,tn=ol=null,lo!==null){for(e=0;e<lo.length;e++)if(n=lo[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}lo=null}return t}function yE(t,e){do{var n=rt;try{if(qg(),Pc.current=pf,hf){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hf=!1}if(ko=0,ft=at=Fe=null,rl=!1,Pl=0,o0.current=null,n===null||n.return===null){lt=1,Nl=e,rt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Et,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=y1(s);if(v!==null){v.flags&=-257,w1(v,s,a,o,e),v.mode&1&&v1(o,u,e),e=v,l=u;var w=e.updateQueue;if(w===null){var y=new Set;y.add(l),e.updateQueue=y}else w.add(l);break e}else{if((e&1)===0){v1(o,u,e),c0();break e}l=Error(D(426))}}else if(Ae&&a.mode&1){var c=y1(s);if(c!==null){(c.flags&65536)===0&&(c.flags|=256),w1(c,s,a,o,e),Wg(js(l,a));break e}}o=l=js(l,a),lt!==4&&(lt=2),ol===null?ol=[o]:ol.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=tE(o,l,e);c1(o,f);break e;case 1:a=l;var h=o.type,g=o.stateNode;if((o.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(_i===null||!_i.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var b=nE(o,a,e);c1(o,b);break e}}o=o.return}while(o!==null)}SE(n)}catch(S){e=S,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(1)}function wE(){var t=mf.current;return mf.current=pf,t===null?pf:t}function c0(){(lt===0||lt===3||lt===2)&&(lt=4),dt===null||(_o&268435455)===0&&(rd&268435455)===0||fi(dt,Et)}function yf(t,e){var n=me;me|=2;var r=wE();(dt!==t||Et!==e)&&(zr=null,po(t,e));do try{JI();break}catch(i){yE(t,i)}while(1);if(qg(),me=n,mf.current=r,rt!==null)throw Error(D(261));return dt=null,Et=0,lt}function JI(){for(;rt!==null;)bE(rt)}function ZI(){for(;rt!==null&&!kz();)bE(rt)}function bE(t){var e=EE(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?SE(t):rt=e,o0.current=null}function SE(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=HI(n,e,vn),n!==null){rt=n;return}}else{if(n=qI(n,e),n!==null){n.flags&=32767,rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{lt=6,rt=null;return}}if(e=e.sibling,e!==null){rt=e;return}rt=e=t}while(e!==null);lt===0&&(lt=5)}function ro(t,e,n){var r=Ee,i=An.transition;try{An.transition=null,Ee=1,e2(t,e,n,r)}finally{An.transition=i,Ee=r}return null}function e2(t,e,n,r){do ks();while(vi!==null);if((me&6)!==0)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Az(t,o),t===dt&&(rt=dt=null,Et=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ac||(ac=!0,kE(Jc,function(){return ks(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=An.transition,An.transition=null;var s=Ee;Ee=1;var a=me;me|=4,o0.current=null,GI(t,n),mE(n,t),bI(tm),ef=!!em,tm=em=null,t.current=n,YI(n),_z(),me=a,Ee=s,An.transition=o}else t.current=n;if(ac&&(ac=!1,vi=t,vf=i),o=t.pendingLanes,o===0&&(_i=null),zz(n.stateNode),ln(t,Qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gf)throw gf=!1,t=Sm,Sm=null,t;return(vf&1)!==0&&t.tag!==0&&ks(),o=t.pendingLanes,(o&1)!==0?t===xm?sl++:(sl=0,xm=t):sl=0,ji(),null}function ks(){if(vi!==null){var t=ex(vf),e=An.transition,n=Ee;try{if(An.transition=null,Ee=16>t?16:t,vi===null)var r=!1;else{if(t=vi,vi=null,vf=0,(me&6)!==0)throw Error(D(331));var i=me;for(me|=4,K=t.current;K!==null;){var o=K,s=o.child;if((K.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(K=u;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:il(8,d,o)}var p=d.child;if(p!==null)p.return=d,K=p;else for(;K!==null;){d=K;var m=d.sibling,v=d.return;if(dE(d),d===u){K=null;break}if(m!==null){m.return=v,K=m;break}K=v}}}var w=o.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var c=y.sibling;y.sibling=null,y=c}while(y!==null)}}K=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,K=s;else e:for(;K!==null;){if(o=K,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:il(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,K=f;break e}K=o.return}}var h=t.current;for(K=h;K!==null;){s=K;var g=s.child;if((s.subtreeFlags&2064)!==0&&g!==null)g.return=s,K=g;else e:for(s=h;K!==null;){if(a=K,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:nd(9,a)}}catch(S){He(a,a.return,S)}if(a===s){K=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,K=b;break e}K=a.return}}if(me=i,ji(),cr&&typeof cr.onPostCommitFiberRoot=="function")try{cr.onPostCommitFiberRoot(Gf,t)}catch{}r=!0}return r}finally{Ee=n,An.transition=e}}return!1}function R1(t,e,n){e=js(n,e),e=tE(t,e,1),t=ki(t,e,1),e=qt(),t!==null&&(iu(t,1,e),ln(t,e))}function He(t,e,n){if(t.tag===3)R1(t,t,n);else for(;e!==null;){if(e.tag===3){R1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_i===null||!_i.has(r))){t=js(n,t),t=nE(e,t,1),e=ki(e,t,1),t=qt(),e!==null&&(iu(e,1,t),ln(e,t));break}}e=e.return}}function t2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,dt===t&&(Et&n)===n&&(lt===4||lt===3&&(Et&130023424)===Et&&500>Qe()-a0?po(t,0):s0|=n),ln(t,e)}function xE(t,e){e===0&&((t.mode&1)===0?e=1:(e=Qu,Qu<<=1,(Qu&130023424)===0&&(Qu=4194304)));var n=qt();t=jr(t,e),t!==null&&(iu(t,e,n),ln(t,n))}function n2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xE(t,n)}function r2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),xE(t,n)}var EE;EE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return rn=!1,WI(t,e,n);rn=(t.flags&131072)!==0}else rn=!1,Ae&&(e.flags&1048576)!==0&&Cx(e,lf,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Rc(t,e),t=e.pendingProps;var i=$s(e,Dt.current);Es(e,n),i=e0(null,e,r,t,i,n);var o=t0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(r)?(o=!0,sf(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yg(e),i.updater=ed,e.stateNode=i,i._reactInternals=e,cm(e,r,t,n),e=hm(null,e,r,!0,o,n)):(e.tag=0,Ae&&o&&Bg(e),Wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Rc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=o2(r),t=Wn(r,t),i){case 0:e=dm(null,e,r,t,n);break e;case 1:e=x1(null,e,r,t,n);break e;case 11:e=b1(null,e,r,t,n);break e;case 14:e=S1(null,e,r,Wn(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wn(r,i),dm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wn(r,i),x1(t,e,r,i,n);case 3:e:{if(sE(e),t===null)throw Error(D(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Px(t,e),ff(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=js(Error(D(423)),e),e=E1(t,e,r,n,i);break e}else if(r!==i){i=js(Error(D(424)),e),e=E1(t,e,r,n,i);break e}else for(yn=Ei(e.stateNode.containerInfo.firstChild),wn=e,Ae=!0,qn=null,n=Ax(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),r===i){e=Fr(t,e,n);break e}Wt(t,e,r,n)}e=e.child}return e;case 5:return Ux(e),t===null&&am(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,nm(r,i)?s=null:o!==null&&nm(r,o)&&(e.flags|=32),oE(t,e),Wt(t,e,s,n),e.child;case 6:return t===null&&am(e),null;case 13:return aE(t,e,n);case 4:return Xg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ms(e,null,r,n):Wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wn(r,i),b1(t,e,r,i,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Ie(uf,r._currentValue),r._currentValue=s,o!==null)if(Xn(o.value,s)){if(o.children===i.children&&!sn.current){e=Fr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=$r(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),lm(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(D(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),lm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Es(e,n),i=$n(i),r=r(i),e.flags|=1,Wt(t,e,r,n),e.child;case 14:return r=e.type,i=Wn(r,e.pendingProps),i=Wn(r.type,i),S1(t,e,r,i,n);case 15:return rE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wn(r,i),Rc(t,e),e.tag=1,an(r)?(t=!0,sf(e)):t=!1,Es(e,n),Rx(e,r,i),cm(e,r,i,n),hm(null,e,r,!0,t,n);case 19:return lE(t,e,n);case 22:return iE(t,e,n)}throw Error(D(156,e.tag))};function kE(t,e){return XS(t,e)}function i2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,r){return new i2(t,e,n,r)}function f0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function o2(t){if(typeof t=="function")return f0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pg)return 11;if(t===Og)return 14}return 2}function Ti(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")f0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case os:return mo(n.children,i,o,e);case Ig:s=8,i|=8;break;case Ap:return t=Nn(12,n,e,i|2),t.elementType=Ap,t.lanes=o,t;case Up:return t=Nn(13,n,e,i),t.elementType=Up,t.lanes=o,t;case $p:return t=Nn(19,n,e,i),t.elementType=$p,t.lanes=o,t;case NS:return id(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case OS:s=10;break e;case RS:s=9;break e;case Pg:s=11;break e;case Og:s=14;break e;case li:s=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=Nn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function mo(t,e,n,r){return t=Nn(7,t,r,e),t.lanes=n,t}function id(t,e,n,r){return t=Nn(22,t,r,e),t.elementType=NS,t.lanes=n,t.stateNode={isHidden:!1},t}function Yh(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Xh(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function s2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ph(0),this.expirationTimes=Ph(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ph(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function d0(t,e,n,r,i,o,s,a,l){return t=new s2(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Nn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yg(o),t}function a2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:is,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _E(t){if(!t)return Ni;t=t._reactInternals;e:{if($o(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(an(n))return kx(t,n,e)}return e}function CE(t,e,n,r,i,o,s,a,l){return t=d0(n,r,!0,t,i,o,s,a,l),t.context=_E(null),n=t.current,r=qt(),i=Ci(n),o=$r(r,i),o.callback=e!=null?e:null,ki(n,o,i),t.current.lanes=i,iu(t,i,r),ln(t,r),t}function od(t,e,n,r){var i=e.current,o=qt(),s=Ci(i);return n=_E(n),e.context===null?e.context=n:e.pendingContext=n,e=$r(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ki(i,e,s),t!==null&&(Gn(t,i,s,o),Ic(t,i,s)),s}function wf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function N1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function h0(t,e){N1(t,e),(t=t.alternate)&&N1(t,e)}function l2(){return null}var TE=typeof reportError=="function"?reportError:function(t){console.error(t)};function p0(t){this._internalRoot=t}sd.prototype.render=p0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));od(t,e,null,null)};sd.prototype.unmount=p0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Co(function(){od(null,t,null,null)}),e[Lr]=null}};function sd(t){this._internalRoot=t}sd.prototype.unstable_scheduleHydration=function(t){if(t){var e=rx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ci.length&&e!==0&&e<ci[n].priority;n++);ci.splice(n,0,t),n===0&&ox(t)}};function m0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ad(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function A1(){}function u2(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=wf(s);o.call(u)}}var s=CE(e,r,t,0,null,!1,!1,"",A1);return t._reactRootContainer=s,t[Lr]=s.current,_l(t.nodeType===8?t.parentNode:t),Co(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=wf(l);a.call(u)}}var l=d0(t,0,!1,null,null,!1,!1,"",A1);return t._reactRootContainer=l,t[Lr]=l.current,_l(t.nodeType===8?t.parentNode:t),Co(function(){od(e,l,n,r)}),l}function ld(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=wf(s);a.call(l)}}od(e,s,t,i)}else s=u2(n,e,t,i,r);return wf(s)}tx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ba(e.pendingLanes);n!==0&&(Ag(e,n|1),ln(e,Qe()),(me&6)===0&&(Fs=Qe()+500,ji()))}break;case 13:Co(function(){var r=jr(t,1);if(r!==null){var i=qt();Gn(r,t,1,i)}}),h0(t,1)}};Ug=function(t){if(t.tag===13){var e=jr(t,134217728);if(e!==null){var n=qt();Gn(e,t,134217728,n)}h0(t,134217728)}};nx=function(t){if(t.tag===13){var e=Ci(t),n=jr(t,e);if(n!==null){var r=qt();Gn(n,t,e,r)}h0(t,e)}};rx=function(){return Ee};ix=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};qp=function(t,e,n){switch(e){case"input":if(Lp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Jf(r);if(!i)throw Error(D(90));US(r),Lp(r,i)}}}break;case"textarea":DS(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};WS=l0;HS=Co;var c2={usingClientEntryPoint:!1,Events:[su,us,Jf,BS,VS,l0]},Aa={findFiberByHostInstance:ao,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},f2={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=GS(t),t===null?null:t.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||l2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{Gf=lc.inject(f2),cr=lc}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c2;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m0(e))throw Error(D(200));return a2(t,e,null,n)};En.createRoot=function(t,e){if(!m0(t))throw Error(D(299));var n=!1,r="",i=TE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=d0(t,1,!1,null,null,n,!1,r,i),t[Lr]=e.current,_l(t.nodeType===8?t.parentNode:t),new p0(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=GS(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Co(t)};En.hydrate=function(t,e,n){if(!ad(e))throw Error(D(200));return ld(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!m0(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=TE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=CE(e,null,t,1,n!=null?n:null,i,!1,o,s),t[Lr]=e.current,_l(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sd(e)};En.render=function(t,e,n){if(!ad(e))throw Error(D(200));return ld(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!ad(t))throw Error(D(40));return t._reactRootContainer?(Co(function(){ld(null,null,t,!1,function(){t._reactRootContainer=null,t[Lr]=null})}),!0):!1};En.unstable_batchedUpdates=l0;En.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ad(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return ld(t,e,n,!1,r)};En.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=En})(Kf);const uc=wS(Kf.exports);var U1=Kf.exports;Rp.createRoot=U1.createRoot,Rp.hydrateRoot=U1.hydrateRoot;const d2="modulepreload",h2=function(t){return"/"+t},$1={},la=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=h2(o),o in $1)return;$1[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const p=i[d];if(p.href===o&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":d2,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Al(){return Al=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Al.apply(this,arguments)}var yi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yi||(yi={}));const D1="popstate";function p2(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return _m("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ul(i)}return v2(e,n,null,t)}function m2(){return Math.random().toString(36).substr(2,8)}function M1(t){return{usr:t.state,key:t.key}}function _m(t,e,n,r){return n===void 0&&(n=null),Al({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ua(e):e,{state:n,key:e&&e.key||r||m2()})}function Ul(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ua(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function g2(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:Ul(t);return new URL(n,e)}function v2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=yi.Pop,l=null;function u(){a=yi.Pop,l&&l({action:a,location:m.location})}function d(v,w){a=yi.Push;let y=_m(m.location,v,w);n&&n(y,v);let c=M1(y),f=m.createHref(y);try{s.pushState(c,"",f)}catch{i.location.assign(f)}o&&l&&l({action:a,location:m.location})}function p(v,w){a=yi.Replace;let y=_m(m.location,v,w);n&&n(y,v);let c=M1(y),f=m.createHref(y);s.replaceState(c,"",f),o&&l&&l({action:a,location:m.location})}let m={get action(){return a},get location(){return t(i,s)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(D1,u),l=v,()=>{i.removeEventListener(D1,u),l=null}},createHref(v){return e(i,v)},encodeLocation(v){let w=g2(Ul(v));return Al({},v,{pathname:w.pathname,search:w.search,hash:w.hash})},push:d,replace:p,go(v){return s.go(v)}};return m}var L1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(L1||(L1={}));function y2(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ua(e):e,i=IE(r.pathname||"/",n);if(i==null)return null;let o=zE(t);w2(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=z2(o[a],O2(i));return s}function zE(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,o)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(ht(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let a=zi([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(ht(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),zE(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:C2(a,i.index),routesMeta:l})}),e}function w2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:T2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const b2=/^:\w+$/,S2=3,x2=2,E2=1,k2=10,_2=-2,j1=t=>t==="*";function C2(t,e){let n=t.split("/"),r=n.length;return n.some(j1)&&(r+=_2),e&&(r+=x2),n.filter(i=>!j1(i)).reduce((i,o)=>i+(b2.test(o)?S2:o===""?E2:k2),r)}function T2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function z2(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=I2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let p=a.route;o.push({params:r,pathname:zi([i,d.pathname]),pathnameBase:U2(zi([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=zi([i,d.pathnameBase]))}return o}function I2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=P2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,p)=>{if(d==="*"){let m=a[p]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=R2(a[p]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:t}}function P2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),g0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function O2(t){try{return decodeURI(t)}catch(e){return g0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function R2(t,e){try{return decodeURIComponent(t)}catch(n){return g0(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function IE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ht(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function g0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function N2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ua(t):t;return{pathname:n?n.startsWith("/")?n:A2(n,e):e,search:$2(r),hash:D2(i)}}function A2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function PE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function OE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ua(t):(i=Al({},t),ht(!i.pathname||!i.pathname.includes("?"),Qh("?","pathname","search",i)),ht(!i.pathname||!i.pathname.includes("#"),Qh("#","pathname","hash",i)),ht(!i.search||!i.search.includes("#"),Qh("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let p=e.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?e[p]:"/"}let l=N2(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const zi=t=>t.join("/").replace(/\/\/+/g,"/"),U2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,D2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class M2{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function L2(t){return t instanceof M2}const j2=new Set(["POST","PUT","PATCH","DELETE"]);[...j2];var ud={exports:{}},cd={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F2=T.exports,B2=Symbol.for("react.element"),V2=Symbol.for("react.fragment"),W2=Object.prototype.hasOwnProperty,H2=F2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q2={key:!0,ref:!0,__self:!0,__source:!0};function RE(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)W2.call(e,r)&&!q2.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:B2,type:t,key:o,ref:s,props:i,_owner:H2.current}}cd.Fragment=V2;cd.jsx=RE;cd.jsxs=RE;(function(t){t.exports=cd})(ud);const NE=ud.exports.Fragment,N=ud.exports.jsx,je=ud.exports.jsxs,K2=Object.freeze(Object.defineProperty({__proto__:null,Fragment:NE,jsx:N,jsxs:je},Symbol.toStringTag,{value:"Module"}));/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cm(){return Cm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cm.apply(this,arguments)}function G2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const Y2=typeof Object.is=="function"?Object.is:G2,{useState:X2,useEffect:Q2,useLayoutEffect:J2,useDebugValue:Z2}=As;function eP(t,e,n){const r=e(),[{inst:i},o]=X2({inst:{value:r,getSnapshot:e}});return J2(()=>{i.value=r,i.getSnapshot=e,Jh(i)&&o({inst:i})},[t,r,e]),Q2(()=>(Jh(i)&&o({inst:i}),t(()=>{Jh(i)&&o({inst:i})})),[t]),Z2(r),r}function Jh(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!Y2(n,r)}catch{return!0}}function tP(t,e,n){return e()}const nP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rP=!nP,iP=rP?tP:eP;"useSyncExternalStore"in As&&(t=>t.useSyncExternalStore)(As);const oP=T.exports.createContext(null),sP=T.exports.createContext(null),v0=T.exports.createContext(null),y0=T.exports.createContext(null),fd=T.exports.createContext(null),lu=T.exports.createContext({outlet:null,matches:[]}),AE=T.exports.createContext(null);function aP(t,e){let{relative:n}=e===void 0?{}:e;uu()||ht(!1);let{basename:r,navigator:i}=T.exports.useContext(y0),{hash:o,pathname:s,search:a}=w0(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:zi([r,s])),i.createHref({pathname:l,search:a,hash:o})}function uu(){return T.exports.useContext(fd)!=null}function cu(){return uu()||ht(!1),T.exports.useContext(fd).location}function lP(){uu()||ht(!1);let{basename:t,navigator:e}=T.exports.useContext(y0),{matches:n}=T.exports.useContext(lu),{pathname:r}=cu(),i=JSON.stringify(PE(n).map(a=>a.pathnameBase)),o=T.exports.useRef(!1);return T.exports.useEffect(()=>{o.current=!0}),T.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){e.go(a);return}let u=OE(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:zi([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function w0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=T.exports.useContext(lu),{pathname:i}=cu(),o=JSON.stringify(PE(r).map(s=>s.pathnameBase));return T.exports.useMemo(()=>OE(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function uP(t,e){uu()||ht(!1);let n=T.exports.useContext(v0),{matches:r}=T.exports.useContext(lu),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let a=cu(),l;if(e){var u;let w=typeof e=="string"?ua(e):e;s==="/"||((u=w.pathname)==null?void 0:u.startsWith(s))||ht(!1),l=w}else l=a;let d=l.pathname||"/",p=s==="/"?d:d.slice(s.length)||"/",m=y2(t,{pathname:p}),v=hP(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:zi([s,w.pathname]),pathnameBase:w.pathnameBase==="/"?s:zi([s,w.pathnameBase])})),r,n||void 0);return e&&v?N(fd.Provider,{value:{location:Cm({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:yi.Pop},children:v}):v}function cP(){let t=mP(),e=L2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return je(NE,{children:[N("h2",{children:"Unhandled Thrown Error!"}),N("h3",{style:{fontStyle:"italic"},children:e}),n?N("pre",{style:i,children:n}):null,N("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),je("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",N("code",{style:o,children:"errorElement"})," props on\xA0",N("code",{style:o,children:"<Route>"})]})]})}class fP extends T.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?N(AE.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function dP(t){let{routeContext:e,match:n,children:r}=t,i=T.exports.useContext(oP);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),N(lu.Provider,{value:e,children:r})}function hP(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||ht(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||N(cP,{}):null,d=()=>N(dP,{match:s,routeContext:{outlet:o,matches:e.concat(r.slice(0,a+1))},children:l?u:s.route.element!==void 0?s.route.element:o});return n&&(s.route.errorElement||a===0)?N(fP,{location:n.location,component:u,error:l,children:d()}):d()},null)}var F1;(function(t){t.UseRevalidator="useRevalidator"})(F1||(F1={}));var Tm;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Tm||(Tm={}));function pP(t){let e=T.exports.useContext(v0);return e||ht(!1),e}function mP(){var t;let e=T.exports.useContext(AE),n=pP(Tm.UseRouteError),r=T.exports.useContext(lu),i=r.matches[r.matches.length-1];return e||(r||ht(!1),i.route.id||ht(!1),(t=n.errors)==null?void 0:t[i.route.id])}function Wa(t){ht(!1)}function gP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yi.Pop,navigator:o,static:s=!1}=t;uu()&&ht(!1);let a=e.replace(/^\/*/,"/"),l=T.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=ua(r));let{pathname:u="/",search:d="",hash:p="",state:m=null,key:v="default"}=r,w=T.exports.useMemo(()=>{let y=IE(u,a);return y==null?null:{pathname:y,search:d,hash:p,state:m,key:v}},[a,u,d,p,m,v]);return w==null?null:N(y0.Provider,{value:l,children:N(fd.Provider,{children:n,value:{location:w,navigationType:i}})})}function vP(t){let{children:e,location:n}=t,r=T.exports.useContext(sP),i=r&&!e?r.router.routes:zm(e);return uP(i,n)}var B1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(B1||(B1={}));new Promise(()=>{});function zm(t,e){e===void 0&&(e=[]);let n=[];return T.exports.Children.forEach(t,(r,i)=>{if(!T.exports.isValidElement(r))return;if(r.type===T.exports.Fragment){n.push.apply(n,zm(r.props.children,e));return}r.type!==Wa&&ht(!1),!r.props.index||!r.props.children||ht(!1);let o=[...e,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=zm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function UE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function yP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function wP(t,e){return t.button===0&&(!e||e==="_self")&&!yP(t)}const bP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],SP=["aria-current","caseSensitive","className","end","style","to","children"];function xP(t){let{basename:e,children:n,window:r}=t,i=T.exports.useRef();i.current==null&&(i.current=p2({window:r,v5Compat:!0}));let o=i.current,[s,a]=T.exports.useState({action:o.action,location:o.location});return T.exports.useLayoutEffect(()=>o.listen(a),[o]),N(gP,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:o})}const EP=T.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d}=e,p=UE(e,bP),m=aP(u,{relative:i}),v=kP(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i});function w(y){r&&r(y),y.defaultPrevented||v(y)}return N("a",{...p,href:m,onClick:o?r:w,ref:n,target:l})}),xB=T.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,children:u}=e,d=UE(e,SP),p=w0(l,{relative:d.relative}),m=cu(),v=T.exports.useContext(v0),w=p.pathname,y=m.pathname,c=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(y=y.toLowerCase(),c=c?c.toLowerCase():null,w=w.toLowerCase());let f=y===w||!s&&y.startsWith(w)&&y.charAt(w.length)==="/",h=c!=null&&(c===w||!s&&c.startsWith(w)&&c.charAt(w.length)==="/"),g=f?r:void 0,b;typeof o=="function"?b=o({isActive:f,isPending:h}):b=[o,f?"active":null,h?"pending":null].filter(Boolean).join(" ");let S=typeof a=="function"?a({isActive:f,isPending:h}):a;return N(EP,{...d,"aria-current":g,className:b,ref:n,style:S,to:l,children:typeof u=="function"?u({isActive:f,isPending:h}):u})});var V1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(V1||(V1={}));var W1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(W1||(W1={}));function kP(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=lP(),l=cu(),u=w0(t,{relative:s});return T.exports.useCallback(d=>{if(wP(d,n)){d.preventDefault();let p=r!==void 0?r:Ul(l)===Ul(u);a(t,{replace:p,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,t,o,s])}var $E={},Zh={exports:{}},ep,H1;function _P(){if(H1)return ep;H1=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ep=t,ep}var tp,q1;function CP(){if(q1)return tp;q1=1;var t=_P();function e(){}function n(){}return n.resetWarningCache=e,tp=function(){function r(s,a,l,u,d,p){if(p!==t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function i(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:e};return o.PropTypes=o,o},tp}var K1;function DE(){return K1||(K1=1,Zh.exports=CP()()),Zh.exports}var ME={exports:{}};(function(t,e){(function(n){t.exports=n(null)})(function n(r){var i=/^\0+/g,o=/[\0\r\f]/g,s=/: */g,a=/zoo|gra/,l=/([,: ])(transform)/g,u=/,+\s*(?![^(]*[)])/g,d=/ +\s*(?![^(]*[)])/g,p=/ *[\0] */g,m=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,w=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,y=/\W+/g,c=/@(k\w+)\s*(\S*)\s*/,f=/::(place)/g,h=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,b=/([[}=:>])\s+/g,S=/(\{[^{]+?);(?=\})/g,x=/\s{2,}/g,E=/([^\(])(:+) */g,_=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,z=/-self|flex-/g,R=/[^]*?(:[rp][el]a[\w-]+)[^]*/,U=/stretch|:\s*\w+\-(?:conte|avail)/,V=/([^-])(image-set\()/,O="-webkit-",$="-moz-",j="-ms-",P=59,A=125,F=123,Q=40,se=41,Ge=91,ot=93,$e=10,De=13,Ve=9,Ye=64,Me=32,Qn=38,We=45,ya=95,Yt=42,hn=44,jt=58,xr=39,pn=34,Tt=47,Jn=62,Xt=43,Qt=126,Fn=0,Zn=12,er=11,Ft=107,Er=109,Gi=115,ti=112,Tn=111,wa=105,Yi=99,Xi=100,Lu=112,Bt=1,zn=1,Bn=0,mn=1,gn=1,ba=1,ju=0,Sa=0,jo=0,Fo=[],Bo=[],In=0,Vo=null,vh=-2,yh=-1,wh=0,Qi=1,xa=2,bh=3,ni=0,kr=1,zt="",Jt="",Ji="";function _r(B,q,X,ie,W){for(var be,I,he=0,ue=0,Ze=0,ce=0,st=0,Ce=0,fe=0,Vt=0,Zt=0,qo=0,en=0,Cr=0,Bu=0,tr=0,ge=0,Pn=0,Ko=0,_a=0,Te=0,to=X.length,Ca=to-1,It="",re="",Pe="",Xe="",Vu="",xh="";ge<to;){if(fe=X.charCodeAt(ge),ge===Ca&&ue+ce+Ze+he!==0&&(ue!==0&&(fe=ue===Tt?$e:Tt),ce=Ze=he=0,to++,Ca++),ue+ce+Ze+he===0){if(ge===Ca&&(Pn>0&&(re=re.replace(o,"")),re.trim().length>0)){switch(fe){case Me:case Ve:case P:case De:case $e:break;default:re+=X.charAt(ge)}fe=P}if(Ko===1)switch(fe){case F:case A:case P:case pn:case xr:case Q:case se:case hn:Ko=0;case Ve:case De:case $e:case Me:break;default:for(Ko=0,Te=ge,st=fe,ge--,fe=P;Te<to;)switch(X.charCodeAt(Te++)){case $e:case De:case P:++ge,fe=st,Te=to;break;case jt:Pn>0&&(++ge,fe=st);case F:Te=to}}switch(fe){case F:for(st=(re=re.trim()).charCodeAt(0),en=1,Te=++ge;ge<to;){switch(fe=X.charCodeAt(ge)){case F:en++;break;case A:en--;break;case Tt:switch(Ce=X.charCodeAt(ge+1)){case Yt:case Tt:ge=Sh(Ce,ge,Ca,X)}break;case Ge:fe++;case Q:fe++;case pn:case xr:for(;ge++<Ca&&X.charCodeAt(ge)!==fe;);}if(en===0)break;ge++}switch(Pe=X.substring(Te,ge),st===Fn&&(st=(re=re.replace(i,"").trim()).charCodeAt(0)),st){case Ye:switch(Pn>0&&(re=re.replace(o,"")),Ce=re.charCodeAt(1)){case Xi:case Er:case Gi:case We:be=q;break;default:be=Fo}if(Te=(Pe=_r(q,be,Pe,Ce,W+1)).length,jo>0&&Te===0&&(Te=re.length),In>0&&(be=Wo(Fo,re,_a),I=ri(bh,Pe,be,q,zn,Bt,Te,Ce,W,ie),re=be.join(""),I!==void 0&&(Te=(Pe=I.trim()).length)===0&&(Ce=0,Pe="")),Te>0)switch(Ce){case Gi:re=re.replace(C,Fu);case Xi:case Er:case We:Pe=re+"{"+Pe+"}";break;case Ft:Pe=(re=re.replace(c,"$1 $2"+(kr>0?zt:"")))+"{"+Pe+"}",gn===1||gn===2&&Zi("@"+Pe,3)?Pe="@"+O+Pe+"@"+Pe:Pe="@"+Pe;break;default:Pe=re+Pe,ie===Lu&&(Xe+=Pe,Pe="")}else Pe="";break;default:Pe=_r(q,Wo(q,re,_a),Pe,ie,W+1)}Vu+=Pe,Cr=0,Ko=0,tr=0,Pn=0,_a=0,Bu=0,re="",Pe="",fe=X.charCodeAt(++ge);break;case A:case P:if((Te=(re=(Pn>0?re.replace(o,""):re).trim()).length)>1)switch(tr===0&&((st=re.charCodeAt(0))===We||st>96&&st<123)&&(Te=(re=re.replace(" ",":")).length),In>0&&(I=ri(Qi,re,q,B,zn,Bt,Xe.length,ie,W,ie))!==void 0&&(Te=(re=I.trim()).length)===0&&(re="\0\0"),st=re.charCodeAt(0),Ce=re.charCodeAt(1),st){case Fn:break;case Ye:if(Ce===wa||Ce===Yi){xh+=re+X.charAt(ge);break}default:if(re.charCodeAt(Te-1)===jt)break;Xe+=Ho(re,st,Ce,re.charCodeAt(2))}Cr=0,Ko=0,tr=0,Pn=0,_a=0,re="",fe=X.charCodeAt(++ge)}}switch(fe){case De:case $e:if(ue+ce+Ze+he+Sa===0)switch(qo){case se:case xr:case pn:case Ye:case Qt:case Jn:case Yt:case Xt:case Tt:case We:case jt:case hn:case P:case F:case A:break;default:tr>0&&(Ko=1)}ue===Tt?ue=0:mn+Cr===0&&ie!==Ft&&re.length>0&&(Pn=1,re+="\0"),In*ni>0&&ri(wh,re,q,B,zn,Bt,Xe.length,ie,W,ie),Bt=1,zn++;break;case P:case A:if(ue+ce+Ze+he===0){Bt++;break}default:switch(Bt++,It=X.charAt(ge),fe){case Ve:case Me:if(ce+he+ue===0)switch(Vt){case hn:case jt:case Ve:case Me:It="";break;default:fe!==Me&&(It=" ")}break;case Fn:It="\\0";break;case Zn:It="\\f";break;case er:It="\\v";break;case Qn:ce+ue+he===0&&mn>0&&(_a=1,Pn=1,It="\f"+It);break;case 108:if(ce+ue+he+Bn===0&&tr>0)switch(ge-tr){case 2:Vt===ti&&X.charCodeAt(ge-3)===jt&&(Bn=Vt);case 8:Zt===Tn&&(Bn=Zt)}break;case jt:ce+ue+he===0&&(tr=ge);break;case hn:ue+Ze+ce+he===0&&(Pn=1,It+="\r");break;case pn:case xr:ue===0&&(ce=ce===fe?0:ce===0?fe:ce);break;case Ge:ce+ue+Ze===0&&he++;break;case ot:ce+ue+Ze===0&&he--;break;case se:ce+ue+he===0&&Ze--;break;case Q:if(ce+ue+he===0){if(Cr===0)switch(2*Vt+3*Zt){case 533:break;default:en=0,Cr=1}Ze++}break;case Ye:ue+Ze+ce+he+tr+Bu===0&&(Bu=1);break;case Yt:case Tt:if(ce+he+Ze>0)break;switch(ue){case 0:switch(2*fe+3*X.charCodeAt(ge+1)){case 235:ue=Tt;break;case 220:Te=ge,ue=Yt}break;case Yt:fe===Tt&&Vt===Yt&&Te+2!==ge&&(X.charCodeAt(Te+2)===33&&(Xe+=X.substring(Te,ge+1)),It="",ue=0)}}if(ue===0){if(mn+ce+he+Bu===0&&ie!==Ft&&fe!==P)switch(fe){case hn:case Qt:case Jn:case Xt:case se:case Q:if(Cr===0){switch(Vt){case Ve:case Me:case $e:case De:It+="\0";break;default:It="\0"+It+(fe===hn?"":"\0")}Pn=1}else switch(fe){case Q:tr+7===ge&&Vt===108&&(tr=0),Cr=++en;break;case se:(Cr=--en)==0&&(Pn=1,It+="\0")}break;case Ve:case Me:switch(Vt){case Fn:case F:case A:case P:case hn:case Zn:case Ve:case Me:case $e:case De:break;default:Cr===0&&(Pn=1,It+="\0")}}re+=It,fe!==Me&&fe!==Ve&&(qo=fe)}}Zt=Vt,Vt=fe,ge++}if(Te=Xe.length,jo>0&&Te===0&&Vu.length===0&&q[0].length!==0&&(ie!==Er||q.length===1&&(mn>0?Jt:Ji)===q[0])&&(Te=q.join(",").length+2),Te>0){if(be=mn===0&&ie!==Ft?function(Sy){for(var Tr,yt,Wu=0,xy=Sy.length,Ey=Array(xy);Wu<xy;++Wu){for(var Eh=Sy[Wu].split(p),Hu="",Go=0,kh=0,ky=0,_y=0,Cy=Eh.length;Go<Cy;++Go)if(!((kh=(yt=Eh[Go]).length)===0&&Cy>1)){if(ky=Hu.charCodeAt(Hu.length-1),_y=yt.charCodeAt(0),Tr="",Go!==0)switch(ky){case Yt:case Qt:case Jn:case Xt:case Me:case Q:break;default:Tr=" "}switch(_y){case Qn:yt=Tr+Jt;case Qt:case Jn:case Xt:case Me:case se:case Q:break;case Ge:yt=Tr+yt+Jt;break;case jt:switch(2*yt.charCodeAt(1)+3*yt.charCodeAt(2)){case 530:if(ba>0){yt=Tr+yt.substring(8,kh-1);break}default:(Go<1||Eh[Go-1].length<1)&&(yt=Tr+Jt+yt)}break;case hn:Tr="";default:kh>1&&yt.indexOf(":")>0?yt=Tr+yt.replace(E,"$1"+Jt+"$2"):yt=Tr+yt+Jt}Hu+=yt}Ey[Wu]=Hu.replace(o,"").trim()}return Ey}(q):q,In>0&&(I=ri(xa,Xe,be,B,zn,Bt,Te,ie,W,ie))!==void 0&&(Xe=I).length===0)return xh+Xe+Vu;if(Xe=be.join(",")+"{"+Xe+"}",gn*Bn!=0){switch(gn===2&&!Zi(Xe,2)&&(Bn=0),Bn){case Tn:Xe=Xe.replace(h,":"+$+"$1")+Xe;break;case ti:Xe=Xe.replace(f,"::"+O+"input-$1")+Xe.replace(f,"::"+$+"$1")+Xe.replace(f,":"+j+"input-$1")+Xe}Bn=0}}return xh+Xe+Vu}function Wo(B,q,X){var ie=q.trim().split(m),W=ie,be=ie.length,I=B.length;switch(I){case 0:case 1:for(var he=0,ue=I===0?"":B[0]+" ";he<be;++he)W[he]=Ea(ue,W[he],X,I).trim();break;default:he=0;var Ze=0;for(W=[];he<be;++he)for(var ce=0;ce<I;++ce)W[Ze++]=Ea(B[ce]+" ",ie[he],X,I).trim()}return W}function Ea(B,q,X,ie){var W=q,be=W.charCodeAt(0);switch(be<33&&(be=(W=W.trim()).charCodeAt(0)),be){case Qn:switch(mn+ie){case 0:case 1:if(B.trim().length===0)break;default:return W.replace(v,"$1"+B.trim())}break;case jt:switch(W.charCodeAt(1)){case 103:if(ba>0&&mn>0)return W.replace(w,"$1").replace(v,"$1"+Ji);break;default:return B.trim()+W.replace(v,"$1"+B.trim())}default:if(X*mn>0&&W.indexOf("\f")>0)return W.replace(v,(B.charCodeAt(0)===jt?"":"$1")+B.trim())}return B+W}function Ho(B,q,X,ie){var W,be=0,I=B+";",he=2*q+3*X+4*ie;if(he===944)return function(ue){var Ze=ue.length,ce=ue.indexOf(":",9)+1,st=ue.substring(0,ce).trim(),Ce=ue.substring(ce,Ze-1).trim();switch(ue.charCodeAt(9)*kr){case 0:break;case We:if(ue.charCodeAt(10)!==110)break;default:for(var fe=Ce.split((Ce="",u)),Vt=0,ce=0,Ze=fe.length;Vt<Ze;ce=0,++Vt){for(var Zt=fe[Vt],qo=Zt.split(d);Zt=qo[ce];){var en=Zt.charCodeAt(0);if(kr===1&&(en>Ye&&en<90||en>96&&en<123||en===ya||en===We&&Zt.charCodeAt(1)!==We))switch(isNaN(parseFloat(Zt))+(Zt.indexOf("(")!==-1)){case 1:switch(Zt){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:Zt+=zt}}qo[ce++]=Zt}Ce+=(Vt===0?"":",")+qo.join(" ")}}return Ce=st+Ce+";",gn===1||gn===2&&Zi(Ce,1)?O+Ce+Ce:Ce}(I);if(gn===0||gn===2&&!Zi(I,1))return I;switch(he){case 1015:return I.charCodeAt(10)===97?O+I+I:I;case 951:return I.charCodeAt(3)===116?O+I+I:I;case 963:return I.charCodeAt(5)===110?O+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return O+I+I;case 978:return O+I+$+I+I;case 1019:case 983:return O+I+$+I+j+I+I;case 883:return I.charCodeAt(8)===We?O+I+I:I.indexOf("image-set(",11)>0?I.replace(V,"$1"+O+"$2")+I:I;case 932:if(I.charCodeAt(4)===We)switch(I.charCodeAt(5)){case 103:return O+"box-"+I.replace("-grow","")+O+I+j+I.replace("grow","positive")+I;case 115:return O+I+j+I.replace("shrink","negative")+I;case 98:return O+I+j+I.replace("basis","preferred-size")+I}return O+I+j+I+I;case 964:return O+I+j+"flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return W=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),O+"box-pack"+W+O+I+j+"flex-pack"+W+I;case 1005:return a.test(I)?I.replace(s,":"+O)+I.replace(s,":"+$)+I:I;case 1e3:switch(be=(W=I.substring(13).trim()).indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(be)){case 226:W=I.replace(_,"tb");break;case 232:W=I.replace(_,"tb-rl");break;case 220:W=I.replace(_,"lr");break;default:return I}return O+I+j+W+I;case 1017:if(I.indexOf("sticky",9)===-1)return I;case 975:switch(be=(I=B).length-10,he=(W=(I.charCodeAt(be)===33?I.substring(0,be):I).substring(B.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|W.charCodeAt(7))){case 203:if(W.charCodeAt(8)<111)break;case 115:I=I.replace(W,O+W)+";"+I;break;case 207:case 102:I=I.replace(W,O+(he>102?"inline-":"")+"box")+";"+I.replace(W,O+W)+";"+I.replace(W,j+W+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===We)switch(I.charCodeAt(6)){case 105:return W=I.replace("-items",""),O+I+O+"box-"+W+j+"flex-"+W+I;case 115:return O+I+j+"flex-item-"+I.replace(z,"")+I;default:return O+I+j+"flex-line-pack"+I.replace("align-content","").replace(z,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==We||I.charCodeAt(4)===122)break;case 931:case 953:if(U.test(B)===!0)return(W=B.substring(B.indexOf(":")+1)).charCodeAt(0)===115?Ho(B.replace("stretch","fill-available"),q,X,ie).replace(":fill-available",":stretch"):I.replace(W,O+W)+I.replace(W,$+W.replace("fill-",""))+I;break;case 962:if(I=O+I+(I.charCodeAt(5)===102?j+I:"")+I,X+ie===211&&I.charCodeAt(13)===105&&I.indexOf("transform",10)>0)return I.substring(0,I.indexOf(";",27)+1).replace(l,"$1"+O+"$2")+I}return I}function Zi(B,q){var X=B.indexOf(q===1?":":"{"),ie=B.substring(0,q!==3?X:10),W=B.substring(X+1,B.length-1);return Vo(q!==2?ie:ie.replace(R,"$1"),W,q)}function Fu(B,q){var X=Ho(q,q.charCodeAt(0),q.charCodeAt(1),q.charCodeAt(2));return X!==q+";"?X.replace(k," or ($1)").substring(4):"("+q+")"}function ri(B,q,X,ie,W,be,I,he,ue,Ze){for(var ce,st=0,Ce=q;st<In;++st)switch(ce=Bo[st].call(eo,B,Ce,X,ie,W,be,I,he,ue,Ze)){case void 0:case!1:case!0:case null:break;default:Ce=ce}if(Ce!==q)return Ce}function Sh(B,q,X,ie){for(var W=q+1;W<X;++W)switch(ie.charCodeAt(W)){case Tt:if(B===Yt&&ie.charCodeAt(W-1)===Yt&&q+2!==W)return W+1;break;case $e:if(B===Tt)return W+1}return W}function ka(B){for(var q in B){var X=B[q];switch(q){case"keyframe":kr=0|X;break;case"global":ba=0|X;break;case"cascade":mn=0|X;break;case"compress":ju=0|X;break;case"semicolon":Sa=0|X;break;case"preserve":jo=0|X;break;case"prefix":Vo=null,X?typeof X!="function"?gn=1:(gn=2,Vo=X):gn=0}}return ka}function eo(B,q){if(this!==void 0&&this.constructor===eo)return n(B);var X=B,ie=X.charCodeAt(0);ie<33&&(ie=(X=X.trim()).charCodeAt(0)),kr>0&&(zt=X.replace(y,ie===Ge?"":"-")),ie=1,mn===1?Ji=X:Jt=X;var W,be=[Ji];In>0&&(W=ri(yh,q,be,be,zn,Bt,0,0,0,0))!==void 0&&typeof W=="string"&&(q=W);var I=_r(Fo,be,q,0,0);return In>0&&(W=ri(vh,I,be,be,zn,Bt,I.length,0,0,0))!==void 0&&typeof(I=W)!="string"&&(ie=0),zt="",Ji="",Jt="",Bn=0,zn=1,Bt=1,ju*ie==0?I:I.replace(o,"").replace(g,"").replace(b,"$1").replace(S,"$1").replace(x," ")}return eo.use=function B(q){switch(q){case void 0:case null:In=Bo.length=0;break;default:if(typeof q=="function")Bo[In++]=q;else if(typeof q=="object")for(var X=0,ie=q.length;X<ie;++X)B(q[X]);else ni=0|!!q}return B},eo.set=ka,r!==void 0&&ka(r),eo})})(ME);const LE=ME.exports;var jE={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){return function(n){var r="/*|*/",i=r+"}";function o(s){if(s)try{n(s+"}")}catch{}}return function(a,l,u,d,p,m,v,w,y,c){switch(a){case 1:if(y===0&&l.charCodeAt(0)===64)return n(l+";"),"";break;case 2:if(w===0)return l+r;break;case 3:switch(w){case 102:case 112:return n(u[0]+l),"";default:return l+(c===0?r:"")}case-2:l.split(i).forEach(o)}}}})})(jE);const TP=jE.exports;var zP={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},b0={exports:{}},ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gt=typeof Symbol=="function"&&Symbol.for,S0=gt?Symbol.for("react.element"):60103,x0=gt?Symbol.for("react.portal"):60106,dd=gt?Symbol.for("react.fragment"):60107,hd=gt?Symbol.for("react.strict_mode"):60108,pd=gt?Symbol.for("react.profiler"):60114,md=gt?Symbol.for("react.provider"):60109,gd=gt?Symbol.for("react.context"):60110,E0=gt?Symbol.for("react.async_mode"):60111,vd=gt?Symbol.for("react.concurrent_mode"):60111,yd=gt?Symbol.for("react.forward_ref"):60112,wd=gt?Symbol.for("react.suspense"):60113,IP=gt?Symbol.for("react.suspense_list"):60120,bd=gt?Symbol.for("react.memo"):60115,Sd=gt?Symbol.for("react.lazy"):60116,PP=gt?Symbol.for("react.block"):60121,OP=gt?Symbol.for("react.fundamental"):60117,RP=gt?Symbol.for("react.responder"):60118,NP=gt?Symbol.for("react.scope"):60119;function _n(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case S0:switch(t=t.type,t){case E0:case vd:case dd:case pd:case hd:case wd:return t;default:switch(t=t&&t.$$typeof,t){case gd:case yd:case Sd:case bd:case md:return t;default:return e}}case x0:return e}}}function FE(t){return _n(t)===vd}ke.AsyncMode=E0;ke.ConcurrentMode=vd;ke.ContextConsumer=gd;ke.ContextProvider=md;ke.Element=S0;ke.ForwardRef=yd;ke.Fragment=dd;ke.Lazy=Sd;ke.Memo=bd;ke.Portal=x0;ke.Profiler=pd;ke.StrictMode=hd;ke.Suspense=wd;ke.isAsyncMode=function(t){return FE(t)||_n(t)===E0};ke.isConcurrentMode=FE;ke.isContextConsumer=function(t){return _n(t)===gd};ke.isContextProvider=function(t){return _n(t)===md};ke.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===S0};ke.isForwardRef=function(t){return _n(t)===yd};ke.isFragment=function(t){return _n(t)===dd};ke.isLazy=function(t){return _n(t)===Sd};ke.isMemo=function(t){return _n(t)===bd};ke.isPortal=function(t){return _n(t)===x0};ke.isProfiler=function(t){return _n(t)===pd};ke.isStrictMode=function(t){return _n(t)===hd};ke.isSuspense=function(t){return _n(t)===wd};ke.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===dd||t===vd||t===pd||t===hd||t===wd||t===IP||typeof t=="object"&&t!==null&&(t.$$typeof===Sd||t.$$typeof===bd||t.$$typeof===md||t.$$typeof===gd||t.$$typeof===yd||t.$$typeof===OP||t.$$typeof===RP||t.$$typeof===NP||t.$$typeof===PP)};ke.typeOf=_n;(function(t){t.exports=ke})(b0);var G1=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function AP(t,e){return!!(t===e||G1(t)&&G1(e))}function UP(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!AP(t[n],e[n]))return!1;return!0}function BE(t,e){e===void 0&&(e=UP);var n,r=[],i,o=!1;function s(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return o&&n===this&&e(a,r)||(i=t.apply(this,a),o=!0,n=this,r=a),i}return s}var EB=DE();function $P(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var DP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,MP=$P(function(t){return DP.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function k0(t){return Object.prototype.toString.call(t).slice(8,-1)}function Ha(t){return k0(t)!=="Object"?!1:t.constructor===Object&&Object.getPrototypeOf(t)===Object.prototype}function Y1(t){return k0(t)==="Array"}function X1(t){return k0(t)==="Symbol"}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function Q1(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function J1(t,e,n,r){var i=r.propertyIsEnumerable(e)?"enumerable":"nonenumerable";i==="enumerable"&&(t[e]=n),i==="nonenumerable"&&Object.defineProperty(t,e,{value:n,enumerable:!1,writable:!0,configurable:!0})}function VE(t,e,n){if(!Ha(e))return n&&Y1(n)&&n.forEach(function(u){e=u(t,e)}),e;var r={};if(Ha(t)){var i=Object.getOwnPropertyNames(t),o=Object.getOwnPropertySymbols(t);r=Q1(i,o).reduce(function(u,d){var p=t[d];return(!X1(d)&&!Object.getOwnPropertyNames(e).includes(d)||X1(d)&&!Object.getOwnPropertySymbols(e).includes(d))&&J1(u,d,p,t),u},{})}var s=Object.getOwnPropertyNames(e),a=Object.getOwnPropertySymbols(e),l=Q1(s,a).reduce(function(u,d){var p=e[d],m=Ha(t)?t[d]:void 0;return n&&Y1(n)&&n.forEach(function(v){p=v(m,p)}),m!==void 0&&Ha(p)&&(p=VE(m,p,n)),J1(u,d,p,e),u},r);return l}function LP(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=null,i=t;return Ha(t)&&t.extensions&&Object.keys(t).length===1&&(i={},r=t.extensions),e.reduce(function(o,s){return VE(o,s,r)},i)}var Z1=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},WE=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wr=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},jP=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Yn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fu=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},FP=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(t,r)||(n[r]=t[r]);return n},Bs=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},_0=function(t){return(typeof t>"u"?"undefined":WE(t))==="object"&&t.constructor===Object},bf=Object.freeze([]),al=Object.freeze({});function Br(t){return typeof t=="function"}function C0(t){return t.displayName||t.name||"Component"}function BP(t){return typeof t=="function"&&!(t.prototype&&t.prototype.isReactComponent)}function du(t){return t&&typeof t.styledComponentId=="string"}var $l=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",xd="data-styled-version",VP="data-styled-streamed",To=typeof window<"u"&&"HTMLElement"in window,HE=typeof SC_DISABLE_SPEEDY=="boolean"&&SC_DISABLE_SPEEDY||typeof process<"u"&&(process.env.REACT_APP_SC_DISABLE_SPEEDY||process.env.SC_DISABLE_SPEEDY)||!1,WP={},gr=function(t){fu(e,t);function e(n){wr(this,e);for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var s,s=Bs(this,t.call(this,"An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+n+" for more information."+(i.length>0?" Additional arguments: "+i.join(", "):"")));return Bs(s)}return e}(Error),HP=/^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,qP=function(t){var e=""+(t||""),n=[];return e.replace(HP,function(r,i,o){return n.push({componentId:i,matchIndex:o}),r}),n.map(function(r,i){var o=r.componentId,s=r.matchIndex,a=n[i+1],l=a?e.slice(s,a.matchIndex):e.slice(s);return{componentId:o,cssFromDOM:l}})},KP=/^\s*\/\/.*$/gm,qE=new LE({global:!1,cascade:!0,keyframe:!1,prefix:!1,compress:!1,semicolon:!0}),KE=new LE({global:!1,cascade:!0,keyframe:!1,prefix:!0,compress:!1,semicolon:!1}),Im=[],GE=function(e){if(e===-2){var n=Im;return Im=[],n}},YE=TP(function(t){Im.push(t)}),XE=void 0,_s=void 0,QE=void 0,GP=function(e,n,r){return n>0&&r.slice(0,n).indexOf(_s)!==-1&&r.slice(n-_s.length,n)!==_s?"."+XE:e},YP=function(e,n,r){e===2&&r.length&&r[0].lastIndexOf(_s)>0&&(r[0]=r[0].replace(QE,GP))};KE.use([YP,YE,GE]);qE.use([YE,GE]);var XP=function(e){return qE("",e)};function T0(t,e,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"&",i=t.join("").replace(KP,""),o=e&&n?n+" "+e+" { "+i+" }":i;return XE=r,_s=e,QE=new RegExp("\\"+_s+"\\b","g"),KE(n||!e?"":e,o)}var z0=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},I0=function(e,n,r){if(r){var i=e[n]||(e[n]=Object.create(null));i[r]=!0}},Sf=function(e,n){e[n]=Object.create(null)},P0=function(e){return function(n,r){return e[n]!==void 0&&e[n][r]}},JE=function(e){var n="";for(var r in e)n+=Object.keys(e[r]).join(" ")+" ";return n.trim()},QP=function(e){var n=Object.create(null);for(var r in e)n[r]=Yn({},e[r]);return n},np=function(e){if(e.sheet)return e.sheet;for(var n=e.ownerDocument.styleSheets.length,r=0;r<n;r+=1){var i=e.ownerDocument.styleSheets[r];if(i.ownerNode===e)return i}throw new gr(10)},JP=function(e,n,r){if(!n)return!1;var i=e.cssRules.length;try{e.insertRule(n,r<=i?r:i)}catch{return!1}return!0},ZP=function(e,n,r){for(var i=n-r,o=n;o>i;o-=1)e.deleteRule(o)},O0=function(e){return`
/* sc-component-id: `+e+` */
`},rp=function(e,n){for(var r=0,i=0;i<=n;i+=1)r+=e[i];return r},eO=function(e,n,r){var i=document;e?i=e.ownerDocument:n&&(i=n.ownerDocument);var o=i.createElement("style");o.setAttribute($l,""),o.setAttribute(xd,"4.4.1");var s=z0();if(s&&o.setAttribute("nonce",s),o.appendChild(i.createTextNode("")),e&&!n)e.appendChild(o);else{if(!n||!e||!n.parentNode)throw new gr(6);n.parentNode.insertBefore(o,r?n:n.nextSibling)}return o},R0=function(e,n){return function(r){var i=z0(),o=[i&&'nonce="'+i+'"',$l+'="'+JE(n)+'"',xd+'="4.4.1"',r],s=o.filter(Boolean).join(" ");return"<style "+s+">"+e()+"</style>"}},N0=function(e,n){return function(){var r,i=(r={},r[$l]=JE(n),r[xd]="4.4.1",r),o=z0();return o&&(i.nonce=o),N("style",{...i,dangerouslySetInnerHTML:{__html:e()}})}},A0=function(e){return function(){return Object.keys(e)}},tO=function(e,n){var r=Object.create(null),i=Object.create(null),o=[],s=n!==void 0,a=!1,l=function(v){var w=i[v];return w!==void 0?w:(i[v]=o.length,o.push(0),Sf(r,v),i[v])},u=function(v,w,y){for(var c=l(v),f=np(e),h=rp(o,c),g=0,b=[],S=w.length,x=0;x<S;x+=1){var E=w[x],_=s;_&&E.indexOf("@import")!==-1?b.push(E):JP(f,E,h+g)&&(_=!1,g+=1)}s&&b.length>0&&(a=!0,n().insertRules(v+"-import",b)),o[c]+=g,I0(r,v,y)},d=function(v){var w=i[v];if(w!==void 0&&e.isConnected!==!1){var y=o[w],c=np(e),f=rp(o,w)-1;ZP(c,f,y),o[w]=0,Sf(r,v),s&&a&&n().removeRules(v+"-import")}},p=function(){var v=np(e),w=v.cssRules,y="";for(var c in i){y+=O0(c);for(var f=i[c],h=rp(o,f),g=o[f],b=h-g;b<h;b+=1){var S=w[b];S!==void 0&&(y+=S.cssText)}}return y};return{clone:function(){throw new gr(5)},css:p,getIds:A0(i),hasNameForId:P0(r),insertMarker:l,insertRules:u,removeRules:d,sealed:!1,styleTag:e,toElement:N0(p,r),toHTML:R0(p,r)}},ew=function(e,n){return e.createTextNode(O0(n))},nO=function(e,n){var r=Object.create(null),i=Object.create(null),o=n!==void 0,s=!1,a=function(m){var v=i[m];return v!==void 0?v:(i[m]=ew(e.ownerDocument,m),e.appendChild(i[m]),r[m]=Object.create(null),i[m])},l=function(m,v,w){for(var y=a(m),c=[],f=v.length,h=0;h<f;h+=1){var g=v[h],b=o;if(b&&g.indexOf("@import")!==-1)c.push(g);else{b=!1;var S=h===f-1?"":" ";y.appendData(""+g+S)}}I0(r,m,w),o&&c.length>0&&(s=!0,n().insertRules(m+"-import",c))},u=function(m){var v=i[m];if(v!==void 0){var w=ew(e.ownerDocument,m);e.replaceChild(w,v),i[m]=w,Sf(r,m),o&&s&&n().removeRules(m+"-import")}},d=function(){var m="";for(var v in i)m+=i[v].data;return m};return{clone:function(){throw new gr(5)},css:d,getIds:A0(i),hasNameForId:P0(r),insertMarker:a,insertRules:l,removeRules:u,sealed:!1,styleTag:e,toElement:N0(d,r),toHTML:R0(d,r)}},rO=function t(e,n){var r=e===void 0?Object.create(null):e,i=n===void 0?Object.create(null):n,o=function(m){var v=i[m];return v!==void 0?v:i[m]=[""]},s=function(m,v,w){var y=o(m);y[0]+=v.join(" "),I0(r,m,w)},a=function(m){var v=i[m];v!==void 0&&(v[0]="",Sf(r,m))},l=function(){var m="";for(var v in i){var w=i[v][0];w&&(m+=O0(v)+w)}return m},u=function(){var m=QP(r),v=Object.create(null);for(var w in i)v[w]=[i[w][0]];return t(m,v)},d={clone:u,css:l,getIds:A0(i),hasNameForId:P0(r),insertMarker:o,insertRules:s,removeRules:a,sealed:!1,styleTag:null,toElement:N0(l,r),toHTML:R0(l,r)};return d},tw=function(e,n,r,i,o){if(To&&!r){var s=eO(e,n,i);return HE?nO(s,o):tO(s,o)}return rO()},iO=function(e,n,r){for(var i=0,o=r.length;i<o;i+=1){var s=r[i],a=s.componentId,l=s.cssFromDOM,u=XP(l);e.insertRules(a,u)}for(var d=0,p=n.length;d<p;d+=1){var m=n[d];m.parentNode&&m.parentNode.removeChild(m)}},oO=/\s+/,xf=void 0;To?xf=HE?40:1e3:xf=-1;var nw=0,ip=void 0,Vr=function(){function t(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:To?document.head:null,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;wr(this,t),this.getImportRuleTag=function(){var i=e.importRuleTag;if(i!==void 0)return i;var o=e.tags[0],s=!0;return e.importRuleTag=tw(e.target,o?o.styleTag:null,e.forceServer,s)},nw+=1,this.id=nw,this.forceServer=r,this.target=r?null:n,this.tagMap={},this.deferred={},this.rehydratedNames={},this.ignoreRehydratedNames={},this.tags=[],this.capacity=1,this.clones=[]}return t.prototype.rehydrate=function(){if(!To||this.forceServer)return this;var n=[],r=[],i=!1,o=document.querySelectorAll("style["+$l+"]["+xd+'="4.4.1"]'),s=o.length;if(!s)return this;for(var a=0;a<s;a+=1){var l=o[a];i||(i=!!l.getAttribute(VP));for(var u=(l.getAttribute($l)||"").trim().split(oO),d=u.length,p=0,m;p<d;p+=1)m=u[p],this.rehydratedNames[m]=!0;r.push.apply(r,qP(l.textContent)),n.push(l)}var v=r.length;if(!v)return this;var w=this.makeTag(null);iO(w,n,r),this.capacity=Math.max(1,xf-v),this.tags.push(w);for(var y=0;y<v;y+=1)this.tagMap[r[y].componentId]=w;return this},t.reset=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;ip=new t(void 0,n).rehydrate()},t.prototype.clone=function(){var n=new t(this.target,this.forceServer);return this.clones.push(n),n.tags=this.tags.map(function(r){for(var i=r.getIds(),o=r.clone(),s=0;s<i.length;s+=1)n.tagMap[i[s]]=o;return o}),n.rehydratedNames=Yn({},this.rehydratedNames),n.deferred=Yn({},this.deferred),n},t.prototype.sealAllTags=function(){this.capacity=1,this.tags.forEach(function(n){n.sealed=!0})},t.prototype.makeTag=function(n){var r=n?n.styleTag:null,i=!1;return tw(this.target,r,this.forceServer,i,this.getImportRuleTag)},t.prototype.getTagForId=function(n){var r=this.tagMap[n];if(r!==void 0&&!r.sealed)return r;var i=this.tags[this.tags.length-1];return this.capacity-=1,this.capacity===0&&(this.capacity=xf,i=this.makeTag(i),this.tags.push(i)),this.tagMap[n]=i},t.prototype.hasId=function(n){return this.tagMap[n]!==void 0},t.prototype.hasNameForId=function(n,r){if(this.ignoreRehydratedNames[n]===void 0&&this.rehydratedNames[r])return!0;var i=this.tagMap[n];return i!==void 0&&i.hasNameForId(n,r)},t.prototype.deferredInject=function(n,r){if(this.tagMap[n]===void 0){for(var i=this.clones,o=0;o<i.length;o+=1)i[o].deferredInject(n,r);this.getTagForId(n).insertMarker(n),this.deferred[n]=r}},t.prototype.inject=function(n,r,i){for(var o=this.clones,s=0;s<o.length;s+=1)o[s].inject(n,r,i);var a=this.getTagForId(n);if(this.deferred[n]!==void 0){var l=this.deferred[n].concat(r);a.insertRules(n,l,i),this.deferred[n]=void 0}else a.insertRules(n,r,i)},t.prototype.remove=function(n){var r=this.tagMap[n];if(r!==void 0){for(var i=this.clones,o=0;o<i.length;o+=1)i[o].remove(n);r.removeRules(n),this.ignoreRehydratedNames[n]=!0,this.deferred[n]=void 0}},t.prototype.toHTML=function(){return this.tags.map(function(n){return n.toHTML()}).join("")},t.prototype.toReactElements=function(){var n=this.id;return this.tags.map(function(r,i){var o="sc-"+n+"-"+i;return T.exports.cloneElement(r.toElement(),{key:o})})},jP(t,null,[{key:"master",get:function(){return ip||(ip=new t().rehydrate())}},{key:"instance",get:function(){return t.master}}]),t}(),ZE=function(){function t(e,n){var r=this;wr(this,t),this.inject=function(i){i.hasNameForId(r.id,r.name)||i.inject(r.id,r.rules,r.name)},this.toString=function(){throw new gr(12,String(r.name))},this.name=e,this.rules=n,this.id="sc-keyframes-"+e}return t.prototype.getName=function(){return this.name},t}(),sO=/([A-Z])/g,aO=/^ms-/;function rw(t){return t.replace(sO,"-$1").toLowerCase().replace(aO,"-ms-")}function lO(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!(t in zP)?e+"px":String(e).trim()}var ek=function(e){return e==null||e===!1||e===""},uO=function t(e,n){var r=[],i=Object.keys(e);return i.forEach(function(o){if(!ek(e[o])){if(_0(e[o]))return r.push.apply(r,t(e[o],o)),r;if(Br(e[o]))return r.push(rw(o)+":",e[o],";"),r;r.push(rw(o)+": "+lO(o,e[o])+";")}return r}),n?[n+" {"].concat(r,["}"]):r};function Vs(t,e,n){if(Array.isArray(t)){for(var r=[],i=0,o=t.length,s;i<o;i+=1)s=Vs(t[i],e,n),s!==null&&(Array.isArray(s)?r.push.apply(r,s):r.push(s));return r}if(ek(t))return null;if(du(t))return"."+t.styledComponentId;if(Br(t))if(BP(t)&&e){var a=t(e);return Vs(a,e,n)}else return t;return t instanceof ZE?n?(t.inject(n),t.getName()):t:_0(t)?uO(t):t.toString()}function Ed(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Br(t)||_0(t)?Vs(Z1(bf,[t].concat(n))):Vs(Z1(t,n))}function Pm(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:al;if(!b0.exports.isValidElementType(e))throw new gr(1,String(e));var r=function(){return t(e,n,Ed.apply(void 0,arguments))};return r.withConfig=function(i){return Pm(t,e,Yn({},n,i))},r.attrs=function(i){return Pm(t,e,Yn({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r}function U0(t){for(var e=t.length|0,n=e|0,r=0,i;e>=4;)i=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,i=1540483477*(i&65535)+((1540483477*(i>>>16)&65535)<<16),i^=i>>>24,i=1540483477*(i&65535)+((1540483477*(i>>>16)&65535)<<16),n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16)^i,e-=4,++r;switch(e){case 3:n^=(t.charCodeAt(r+2)&255)<<16;case 2:n^=(t.charCodeAt(r+1)&255)<<8;case 1:n^=t.charCodeAt(r)&255,n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16)}return n^=n>>>13,n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16),(n^n>>>15)>>>0}var cc=52,iw=function(e){return String.fromCharCode(e+(e>25?39:97))};function tk(t){var e="",n=void 0;for(n=t;n>cc;n=Math.floor(n/cc))e=iw(n%cc)+e;return iw(n%cc)+e}function cO(t){for(var e in t)if(Br(t[e]))return!0;return!1}function $0(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(Array.isArray(r)&&!$0(r,e))return!1;if(Br(r)&&!du(r))return!1}return!e.some(function(i){return Br(i)||cO(i)})}var ow=function(e){return tk(U0(e))},sw=function(){function t(e,n,r){wr(this,t),this.rules=e,this.isStatic=$0(e,n),this.componentId=r,Vr.master.hasId(r)||Vr.master.deferredInject(r,[])}return t.prototype.generateAndInjectStyles=function(n,r){var i=this.isStatic,o=this.componentId,s=this.lastClassName;if(To&&i&&typeof s=="string"&&r.hasNameForId(o,s))return s;var a=Vs(this.rules,n,r),l=ow(this.componentId+a.join(""));return r.hasNameForId(o,l)||r.inject(this.componentId,T0(a,"."+l,void 0,o),l),this.lastClassName=l,l},t.generateName=function(n){return ow(n)},t}(),D0=function(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:al,r=n?t.theme===n.theme:!1,i=t.theme&&!r?t.theme:e||n.theme;return i},fO=/[[\].#*$><+~=|^:(),"'`-]+/g,dO=/(^-|-$)/g;function Om(t){return t.replace(fO,"-").replace(dO,"")}function Ef(t){return typeof t=="string"&&!0}function hO(t){return Ef(t)?"styled."+t:"Styled("+C0(t)+")"}var op,aw={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},pO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lw=(op={},op[b0.exports.ForwardRef]={$$typeof:!0,render:!0},op),mO=Object.defineProperty,gO=Object.getOwnPropertyNames,uw=Object.getOwnPropertySymbols,vO=uw===void 0?function(){return[]}:uw,yO=Object.getOwnPropertyDescriptor,wO=Object.getPrototypeOf,bO=Object.prototype,SO=Array.prototype;function M0(t,e,n){if(typeof e!="string"){var r=wO(e);r&&r!==bO&&M0(t,r,n);for(var i=SO.concat(gO(e),vO(e)),o=lw[t.$$typeof]||aw,s=lw[e.$$typeof]||aw,a=i.length,l=void 0,u=void 0;a--;)if(u=i[a],!pO[u]&&!(n&&n[u])&&!(s&&s[u])&&!(o&&o[u])&&(l=yO(e,u),l))try{mO(t,u,l)}catch{}return t}return t}function xO(t){return!!(t&&t.prototype&&t.prototype.isReactComponent)}var kf=T.exports.createContext(),kd=kf.Consumer,EO=function(t){fu(e,t);function e(n){wr(this,e);var r=Bs(this,t.call(this,n));return r.getContext=BE(r.getContext.bind(r)),r.renderInner=r.renderInner.bind(r),r}return e.prototype.render=function(){return this.props.children?N(kf.Consumer,{children:this.renderInner}):null},e.prototype.renderInner=function(r){var i=this.getContext(this.props.theme,r);return N(kf.Provider,{value:i,children:this.props.children})},e.prototype.getTheme=function(r,i){if(Br(r)){var o=r(i);return o}if(r===null||Array.isArray(r)||(typeof r>"u"?"undefined":WE(r))!=="object")throw new gr(8);return Yn({},i,r)},e.prototype.getContext=function(r,i){return this.getTheme(r,i)},e}(T.exports.Component),kO=function(){function t(){wr(this,t),this.masterSheet=Vr.master,this.instance=this.masterSheet.clone(),this.sealed=!1}return t.prototype.seal=function(){if(!this.sealed){var n=this.masterSheet.clones.indexOf(this.instance);this.masterSheet.clones.splice(n,1),this.sealed=!0}},t.prototype.collectStyles=function(n){if(this.sealed)throw new gr(2);return N(nk,{sheet:this.instance,children:n})},t.prototype.getStyleTags=function(){return this.seal(),this.instance.toHTML()},t.prototype.getStyleElement=function(){return this.seal(),this.instance.toReactElements()},t.prototype.interleaveWithNodeStream=function(n){throw new gr(3)},t}(),L0=T.exports.createContext(),j0=L0.Consumer,nk=function(t){fu(e,t);function e(n){wr(this,e);var r=Bs(this,t.call(this,n));return r.getContext=BE(r.getContext),r}return e.prototype.getContext=function(r,i){if(r)return r;if(i)return new Vr(i);throw new gr(4)},e.prototype.render=function(){var r=this.props,i=r.children,o=r.sheet,s=r.target;return N(L0.Provider,{value:this.getContext(o,s),children:i})},e}(T.exports.Component),cw={};function _O(t,e,n){var r=typeof e!="string"?"sc":Om(e),i=(cw[r]||0)+1;cw[r]=i;var o=r+"-"+t.generateName(r+i);return n?n+"-"+o:o}var CO=function(t){fu(e,t);function e(){wr(this,e);var n=Bs(this,t.call(this));return n.attrs={},n.renderOuter=n.renderOuter.bind(n),n.renderInner=n.renderInner.bind(n),n}return e.prototype.render=function(){return N(j0,{children:this.renderOuter})},e.prototype.renderOuter=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Vr.master;return this.styleSheet=r,this.props.forwardedComponent.componentStyle.isStatic?this.renderInner():N(kd,{children:this.renderInner})},e.prototype.renderInner=function(r){var i=this.props.forwardedComponent,o=i.componentStyle,s=i.defaultProps;i.displayName;var a=i.foldedComponentIds,l=i.styledComponentId,u=i.target,d=void 0;o.isStatic?d=this.generateAndInjectStyles(al,this.props):d=this.generateAndInjectStyles(D0(this.props,r,s)||al,this.props);var p=this.props.as||this.attrs.as||u,m=Ef(p),v={},w=Yn({},this.props,this.attrs),y=void 0;for(y in w)y==="forwardedComponent"||y==="as"||(y==="forwardedRef"?v.ref=w[y]:y==="forwardedAs"?v.as=w[y]:(!m||MP(y))&&(v[y]=w[y]));return this.props.style&&this.attrs.style&&(v.style=Yn({},this.attrs.style,this.props.style)),v.className=Array.prototype.concat(a,l,d!==l?d:null,this.props.className,this.attrs.className).filter(Boolean).join(" "),T.exports.createElement(p,v)},e.prototype.buildExecutionContext=function(r,i,o){var s=this,a=Yn({},i,{theme:r});return o.length&&(this.attrs={},o.forEach(function(l){var u=l,d=!1,p=void 0,m=void 0;Br(u)&&(u=u(a),d=!0);for(m in u)p=u[m],d||Br(p)&&!xO(p)&&!du(p)&&(p=p(a)),s.attrs[m]=p,a[m]=p})),a},e.prototype.generateAndInjectStyles=function(r,i){var o=i.forwardedComponent,s=o.attrs,a=o.componentStyle;if(o.warnTooManyClasses,a.isStatic&&!s.length)return a.generateAndInjectStyles(al,this.styleSheet);var l=a.generateAndInjectStyles(this.buildExecutionContext(r,i,s),this.styleSheet);return l},e}(T.exports.Component);function rk(t,e,n){var r=du(t),i=!Ef(t),o=e.displayName,s=o===void 0?hO(t):o,a=e.componentId,l=a===void 0?_O(sw,e.displayName,e.parentComponentId):a,u=e.ParentComponent,d=u===void 0?CO:u,p=e.attrs,m=p===void 0?bf:p,v=e.displayName&&e.componentId?Om(e.displayName)+"-"+e.componentId:e.componentId||l,w=r&&t.attrs?Array.prototype.concat(t.attrs,m).filter(Boolean):m,y=new sw(r?t.componentStyle.rules.concat(n):n,w,v),c=void 0,f=function(g,b){return N(d,{...g,forwardedComponent:c,forwardedRef:b})};return f.displayName=s,c=Ur.forwardRef(f),c.displayName=s,c.attrs=w,c.componentStyle=y,c.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):bf,c.styledComponentId=v,c.target=r?t.target:t,c.withComponent=function(g){var b=e.componentId,S=FP(e,["componentId"]),x=b&&b+"-"+(Ef(g)?g:Om(C0(g))),E=Yn({},S,{attrs:w,componentId:x,ParentComponent:d});return rk(g,E,n)},Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?LP(t.defaultProps,g):g}}),c.toString=function(){return"."+c.styledComponentId},i&&M0(c,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,styledComponentId:!0,target:!0,withComponent:!0}),c}var TO=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Rm=function(e){return Pm(rk,e)};TO.forEach(function(t){Rm[t]=Rm(t)});var zO=function(){function t(e,n){wr(this,t),this.rules=e,this.componentId=n,this.isStatic=$0(e,bf),Vr.master.hasId(n)||Vr.master.deferredInject(n,[])}return t.prototype.createStyles=function(n,r){var i=Vs(this.rules,n,r),o=T0(i,"");r.inject(this.componentId,o)},t.prototype.removeStyles=function(n){var r=this.componentId;n.hasId(r)&&n.remove(r)},t.prototype.renderStyles=function(n,r){this.removeStyles(r),this.createStyles(n,r)},t}();To&&(window.scCGSHMRCache={});function IO(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Ed.apply(void 0,[t].concat(n)),o="sc-global-"+U0(JSON.stringify(i)),s=new zO(i,o),a=function(l){fu(u,l);function u(d){wr(this,u);var p=Bs(this,l.call(this,d)),m=p.constructor,v=m.globalStyle,w=m.styledComponentId;return To&&(window.scCGSHMRCache[w]=(window.scCGSHMRCache[w]||0)+1),p.state={globalStyle:v,styledComponentId:w},p}return u.prototype.componentWillUnmount=function(){window.scCGSHMRCache[this.state.styledComponentId]&&(window.scCGSHMRCache[this.state.styledComponentId]-=1),window.scCGSHMRCache[this.state.styledComponentId]===0&&this.state.globalStyle.removeStyles(this.styleSheet)},u.prototype.render=function(){var p=this;return N(j0,{children:function(m){p.styleSheet=m||Vr.master;var v=p.state.globalStyle;return v.isStatic?(v.renderStyles(WP,p.styleSheet),null):N(kd,{children:function(w){var y=p.constructor.defaultProps,c=Yn({},p.props);return typeof w<"u"&&(c.theme=D0(p.props,w,y)),v.renderStyles(c,p.styleSheet),null}})}})},u}(Ur.Component);return a.globalStyle=s,a.styledComponentId=o,a}var PO=function(e){return e.replace(/\s|\\n/g,"")};function OO(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Ed.apply(void 0,[t].concat(n)),o=tk(U0(PO(JSON.stringify(i))));return new ZE(o,T0(i,o,"@keyframes"))}var RO=function(t){var e=Ur.forwardRef(function(n,r){return N(kd,{children:function(i){var o=t.defaultProps,s=D0(n,i,o);return N(t,{...n,theme:s,ref:r})}})});return M0(e,t),e.displayName="WithTheme("+C0(t)+")",e},NO={StyleSheet:Vr};const AO=Object.freeze(Object.defineProperty({__proto__:null,default:Rm,createGlobalStyle:IO,css:Ed,isStyledComponent:du,keyframes:OO,ServerStyleSheet:kO,StyleSheetConsumer:j0,StyleSheetContext:L0,StyleSheetManager:nk,ThemeConsumer:kd,ThemeContext:kf,ThemeProvider:EO,withTheme:RO,__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS:NO},Symbol.toStringTag,{value:"Module"})),UO=Sg(AO);(function(t){(function(e,n){for(var r in n)e[r]=n[r]})(t,function(e){var n={};function r(i){if(n[i])return n[i].exports;var o=n[i]={i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(i,o,s){r.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:s})},r.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},r.t=function(i,o){if(1&o&&(i=r(i)),8&o||4&o&&typeof i=="object"&&i&&i.__esModule)return i;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&o&&typeof i!="string")for(var a in i)r.d(s,a,function(l){return i[l]}.bind(null,a));return s},r.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(o,"a",o),o},r.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},r.p="",r(r.s=3)}([function(e,n){e.exports=T.exports},function(e,n){e.exports=DE()},function(e,n){e.exports=UO},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MetroSpinner=n.WhisperSpinner=n.ClassicSpinner=n.TraceSpinner=n.JellyfishSpinner=n.MagicSpinner=n.FlapperSpinner=n.HoopSpinner=n.RingSpinner=n.RainbowSpinner=n.PongSpinner=n.CombSpinner=n.GooSpinner=n.SwishSpinner=n.RotateSpinner=n.ClapSpinner=n.FlagSpinner=n.SphereSpinner=n.FillSpinner=n.CubeSpinner=n.ImpulseSpinner=n.DominoSpinner=n.SequenceSpinner=n.PulseSpinner=n.SpiralSpinner=n.CircleSpinner=n.GuardSpinner=n.HeartSpinner=n.StageSpinner=n.FireworkSpinner=n.PushSpinner=n.WaveSpinner=n.BarsSpinner=n.SwapSpinner=n.GridSpinner=n.BallSpinner=void 0;var i=r(4),o=r(5),s=r(6),a=r(7),l=r(8),u=r(9),d=r(10),p=r(11),m=r(12),v=r(13),w=r(14),y=r(15),c=r(16),f=r(17),h=r(18),g=r(19),b=r(20),S=r(21),x=r(22),E=r(23),_=r(24),C=r(25),k=r(26),z=r(27),R=r(28),U=r(29),V=r(30),O=r(31),$=r(32),j=r(33),P=r(34),A=r(35),F=r(36),Q=r(37),se=r(38),Ge=r(39);n.BallSpinner=i.BallSpinner,n.GridSpinner=o.GridSpinner,n.SwapSpinner=s.SwapSpinner,n.BarsSpinner=a.BarsSpinner,n.WaveSpinner=l.WaveSpinner,n.PushSpinner=u.PushSpinner,n.FireworkSpinner=d.FireworkSpinner,n.StageSpinner=p.StageSpinner,n.HeartSpinner=m.HeartSpinner,n.GuardSpinner=v.GuardSpinner,n.CircleSpinner=w.CircleSpinner,n.SpiralSpinner=y.SpiralSpinner,n.PulseSpinner=c.PulseSpinner,n.SequenceSpinner=f.SequenceSpinner,n.DominoSpinner=h.DominoSpinner,n.ImpulseSpinner=g.ImpulseSpinner,n.CubeSpinner=b.CubeSpinner,n.FillSpinner=S.FillSpinner,n.SphereSpinner=x.SphereSpinner,n.FlagSpinner=E.FlagSpinner,n.ClapSpinner=_.ClapSpinner,n.RotateSpinner=C.RotateSpinner,n.SwishSpinner=k.SwishSpinner,n.GooSpinner=z.GooSpinner,n.CombSpinner=R.CombSpinner,n.PongSpinner=U.PongSpinner,n.RainbowSpinner=V.RainbowSpinner,n.RingSpinner=O.RingSpinner,n.HoopSpinner=$.HoopSpinner,n.FlapperSpinner=j.FlapperSpinner,n.MagicSpinner=P.MagicSpinner,n.JellyfishSpinner=A.JellyfishSpinner,n.TraceSpinner=F.TraceSpinner,n.ClassicSpinner=Q.ClassicSpinner,n.WhisperSpinner=se.WhisperSpinner,n.MetroSpinner=Ge.MetroSpinner},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.BallSpinner=void 0;var i=m([`
    0% {
        transform: translateX(0) scale(1);
    }
    25% {
        transform: translateX(`,"",`) scale(0.25);
    }
    50% {
        transform: translateX(0) scale(1);
    }
    75% {
        transform: translateX(`,"",`) scale(0.25);
    }
    100% {
        transform: translateX(0) scale(1);

    }
`],[`
    0% {
        transform: translateX(0) scale(1);
    }
    25% {
        transform: translateX(`,"",`) scale(0.25);
    }
    50% {
        transform: translateX(0) scale(1);
    }
    75% {
        transform: translateX(`,"",`) scale(0.25);
    }
    100% {
        transform: translateX(0) scale(1);

    }
`]),o=m([`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`],[`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var v=n.BallSpinner=function(c){var f=c.size,h=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:f},a.default.createElement(y,{color:h,size:f,sizeUnit:b})," ")},w=d.default.div.withConfig({displayName:"ball__Wrapper",componentId:"sc-1edcqkl-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit}),y=d.default.div.withConfig({displayName:"ball__Ball",componentId:"sc-1edcqkl-1"})(s,function(c){return""+c.size/3+c.sizeUnit},function(c){return""+c.size/3+c.sizeUnit},function(c){return c.color},function(c){return function(f){return(0,u.keyframes)(i,f.size/2,f.sizeUnit,-f.size/2,f.sizeUnit)}(c)});v.defaultProps={loading:!0,size:40,color:"#00ff89",sizeUnit:"px"},v.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GridSpinner=void 0;var i=m([`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    50% {
        width: `,"",`;
        height: `,"",`;
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
    }
`],[`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    50% {
        width: `,"",`;
        height: `,"",`;
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var v=n.GridSpinner=function(c){var f=c.size,h=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:f,sizeUnit:b},function(S){for(var x=S.countBallsInLine,E=S.color,_=S.size,C=S.sizeUnit,k=[],z=0,R=0;R<x;R++)for(var U=0;U<x;U++)k.push(a.default.createElement(y,{color:E,size:_,x:R*(_/3+_/12),y:U*(_/3+_/12),key:z.toString(),sizeUnit:C})),z++;return k}({countBallsInLine:3,color:h,size:f,sizeUnit:b}))},w=d.default.div.withConfig({displayName:"grid__Wrapper",componentId:"sc-11vno70-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),y=d.default.div.withConfig({displayName:"grid__Ball",componentId:"sc-11vno70-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/6+c.sizeUnit},function(c){return""+c.size/6+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.y,c.sizeUnit,c.x,c.sizeUnit,c.size/4,c.sizeUnit,c.size/4,c.sizeUnit,c.size/2-c.size/8,c.sizeUnit,c.size/2-c.size/8,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit)});v.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},v.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SwapSpinner=void 0;var i=m([`
    0% {
        top: `,`px;
        left: `,`px;
    }
    50%{
        top: `,`px;
        left: `,`px;
    }
    100% {
        top: `,`px;
        left: `,`px;
    }
`],[`
    0% {
        top: `,`px;
        left: `,`px;
    }
    50%{
        top: `,`px;
        left: `,`px;
    }
    100% {
        top: `,`px;
        left: `,`px;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    &:nth-child(2) {
        animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-duration: 1.5s;
    }
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    &:nth-child(2) {
        animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-duration: 1.5s;
    }
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function m(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var v=function(f){switch(f.index){case 0:return{x:f.size-f.size/4,y:f.y};case 1:return{x:f.x,y:f.y-f.size/2+f.size/8};case 2:return{x:0,y:f.y}}},w=n.SwapSpinner=function(f){var h=f.size,g=f.color,b=f.loading,S=f.sizeUnit;return b&&a.default.createElement(y,{size:h,sizeUnit:S},function(x){for(var E=x.countBalls,_=x.color,C=x.size,k=x.sizeUnit,z=[],R=0;R<E;R++)z.push(a.default.createElement(c,{color:_,size:C,x:R*(C/4+C/8),y:C/2-C/8,key:R.toString(),index:R,sizeUnit:k}));return z}({countBalls:3,color:g,size:h,sizeUnit:S}))},y=d.default.div.withConfig({displayName:"swap__Wrapper",componentId:"sc-1a8o1b-0"})(o,function(f){return""+f.size+f.sizeUnit},function(f){return""+(f.size/2+f.size/8)+f.sizeUnit}),c=d.default.div.withConfig({displayName:"swap__Ball",componentId:"sc-1a8o1b-1"})(s,function(f){return""+f.y+f.sizeUnit},function(f){return""+f.x+f.sizeUnit},function(f){return""+f.size/4+f.sizeUnit},function(f){return""+f.size/4+f.sizeUnit},function(f){return f.color},function(f){return(0,u.keyframes)(i,f.y,f.x,v(f).y,v(f).x,f.y,f.x)});w.defaultProps={loading:!0,size:40,color:"#4b4c56",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.BarsSpinner=void 0;var i=m([`
    0% {
        width: `,"",`
    }
    50% {
        width: `,"",`
    }
    100% {
        width: `,"",`
    }
`],[`
    0% {
        width: `,"",`
    }
    50% {
        width: `,"",`
    }
    100% {
        width: `,"",`
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var v=n.BarsSpinner=function(c){var f=c.size,h=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:f,sizeUnit:b},function(S,x,E,_){for(var C=[],k=0;k<S;k++)C.push(a.default.createElement(y,{color:x,size:E,sizeUnit:_,x:k*(E/5+E/25)-E/12,key:k.toString(),index:k}));return C}(5,h,f,b))},w=d.default.div.withConfig({displayName:"bars__Wrapper",componentId:"sc-1sb659-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),y=d.default.div.withConfig({displayName:"bars__Bar",componentId:"sc-1sb659-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/20+c.sizeUnit},function(c){return""+c.size+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.size/20,c.sizeUnit,c.size/6,c.sizeUnit,c.size/20,c.sizeUnit)},function(c){return .15*c.index});v.defaultProps={loading:!0,size:40,color:"#00ff89",sizeUnit:"px"},v.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.WaveSpinner=void 0;var i=m([`
    25% {
        transform: skewY(25deg);
    }
    50% {
        height: 100%;
        margin-top: 0;
    }
    75% {
        transform: skewY(-25deg);
    }
`],[`
    25% {
        transform: skewY(25deg);
    }
    50% {
        height: 100%;
        margin-top: 0;
    }
    75% {
        transform: skewY(-25deg);
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    margin-top: `,`;
    transform: skewY(0deg);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    margin-top: `,`;
    transform: skewY(0deg);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function m(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var v=(0,u.keyframes)(i),w=n.WaveSpinner=function(f){var h=f.size,g=f.color,b=f.loading,S=f.sizeUnit;return b&&a.default.createElement(y,{size:h,sizeUnit:S},function(x){for(var E=x.countBars,_=x.color,C=x.size,k=x.sizeUnit,z=[],R=0;R<E;R++)z.push(a.default.createElement(c,{color:_,size:C,x:R*(C/5+(C/15-C/100)),y:0,key:R.toString(),index:R,sizeUnit:k}));return z}({countBars:10,color:g,size:h,sizeUnit:S}))},y=d.default.div.withConfig({displayName:"wave__Wrapper",componentId:"sc-8a0z7x-0"})(o,function(f){return""+2.5*f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=d.default.div.withConfig({displayName:"wave__Bar",componentId:"sc-8a0z7x-1"})(s,function(f){return""+(f.y+f.size/10)+f.sizeUnit},function(f){return""+f.x+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return""+f.size/10+f.sizeUnit},function(f){return""+(f.size-f.size/10)+f.sizeUnit},function(f){return f.color},v,function(f){return .15*f.index});w.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PushSpinner=void 0;var i=m([`
    15% {
        transform: scaleY(1) translateX(10`,`);
    }
    90% {
        transform: scaleY(0.05) translateX(-5`,`);
    }
    100%{
        transform: scaleY(0.05) translateX(-5`,`);
    }
`],[`
    15% {
        transform: scaleY(1) translateX(10`,`);
    }
    90% {
        transform: scaleY(0.05) translateX(-5`,`);
    }
    100%{
        transform: scaleY(0.05) translateX(-5`,`);
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),s=m([`
    position: absolute;
    top: 0;
    left: `,`;
    width: `,`;
    height: 100%;
    transform: scaleY(0.05) translateX(-5px);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: 0;
    left: `,`;
    width: `,`;
    height: 100%;
    transform: scaleY(0.05) translateX(-5px);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var v=n.PushSpinner=function(c){var f=c.size,h=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:f,sizeUnit:b},function(S){for(var x=S.countBars,E=S.color,_=S.size,C=S.sizeUnit,k=[],z=0;z<x;z++)k.push(a.default.createElement(y,{color:E,size:_,x:z*(_/5+(_/15-_/100)),y:0,key:z.toString(),index:z,sizeUnit:C}));return k}({countBars:10,color:h,size:f,sizeUnit:b}))},w=d.default.div.withConfig({displayName:"push__Wrapper",componentId:"ypksxs-0"})(o,function(c){return""+2.5*c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),y=d.default.div.withConfig({displayName:"push__Bar",componentId:"ypksxs-1"})(s,function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.sizeUnit,c.sizeUnit,c.sizeUnit)},function(c){return .15*c.index});v.defaultProps={loading:!0,size:30,color:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FireworkSpinner=void 0;var i=p([`
    0% {
        opacity: 1;
        transform: scale(0.1);
    }
    25% {
        opacity: 0.85;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
`],[`
    0% {
        opacity: 1;
        transform: scale(0.1);
    }
    25% {
        opacity: 0.85;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
`]),o=p([`
    border: `," dotted ",`;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    animation: `,` 1.25s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`],[`
    border: `," dotted ",`;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    animation: `,` 1.25s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`]),s=d(r(0)),a=d(r(1)),l=r(2),u=d(l);function d(y){return y&&y.__esModule?y:{default:y}}function p(y,c){return Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(c)}}))}var m=(0,l.keyframes)(i),v=n.FireworkSpinner=function(y){var c=y.size,f=y.color,h=y.loading,g=y.sizeUnit;return h&&s.default.createElement(w,{size:c,color:f,sizeUnit:g})},w=u.default.div.withConfig({displayName:"firework__Wrapper",componentId:"sc-1bn5a2-0"})(o,function(y){return""+y.size/10+y.sizeUnit},function(y){return y.color},function(y){return""+y.size+y.sizeUnit},function(y){return""+y.size+y.sizeUnit},m);v.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},v.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.StageSpinner=void 0;var i=m([`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    50% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
        opacity: 1;
    }
`],[`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    50% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
        opacity: 1;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1s ease-in-out infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1s ease-in-out infinite;
    animation-delay: `,`s;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var v=n.StageSpinner=function(c){var f=c.size,h=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:f,sizeUnit:b},function(S){for(var x=S.countBalls,E=S.color,_=S.size,C=S.sizeUnit,k=[],z=0,R=0;R<x;R++)k.push(a.default.createElement(y,{color:E,size:_,index:R,x:R*(_/2.5),y:_/2-_/10,key:z.toString(),sizeUnit:C})),z++;return k}({countBalls:3,color:h,size:f,sizeUnit:b}))},w=d.default.div.withConfig({displayName:"stage__Wrapper",componentId:"sc-161krao-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),y=d.default.div.withConfig({displayName:"stage__Ball",componentId:"sc-161krao-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.y,c.sizeUnit,c.x,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit,c.y+c.size/2,c.sizeUnit,c.x,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit)},function(c){return .2*c.index});v.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},v.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.HeartSpinner=void 0;var i=p([`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.75);
    }
    50% {
        transform: scale(1);
    }
    65% {
        transform: scale(1);
    }
    80% {
        transform: scale(0.75);
    }
    100% {
        transform: scale(1);
    }
`],[`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.75);
    }
    50% {
        transform: scale(1);
    }
    65% {
        transform: scale(1);
    }
    80% {
        transform: scale(0.75);
    }
    100% {
        transform: scale(1);
    }
`]),o=p([`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1s ease-in-out infinite;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: `,`;
        left: `,`;
        width: `,`;
        height: `,`;
        background-color: `,`;
        border-radius: `,`
            `,` 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    &::after {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1s ease-in-out infinite;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: `,`;
        left: `,`;
        width: `,`;
        height: `,`;
        background-color: `,`;
        border-radius: `,`
            `,` 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    &::after {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }
`]),s=d(r(0)),a=d(r(1)),l=r(2),u=d(l);function d(y){return y&&y.__esModule?y:{default:y}}function p(y,c){return Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(c)}}))}var m=(0,l.keyframes)(i),v=n.HeartSpinner=function(y){var c=y.size,f=y.color,h=y.loading,g=y.sizeUnit;return h&&s.default.createElement(w,{size:c,color:f,sizeUnit:g})},w=u.default.div.withConfig({displayName:"heart__Wrapper",componentId:"sc-12jb06u-0"})(o,function(y){return""+y.size+y.sizeUnit},function(y){return""+(y.size-y.size/10)+y.sizeUnit},m,function(y){return""+y.size/20+y.sizeUnit},function(y){return""+y.size/2+y.sizeUnit},function(y){return""+y.size/2+y.sizeUnit},function(y){return""+(y.size-y.size/5)+y.sizeUnit},function(y){return y.color},function(y){return""+y.size/2+y.sizeUnit},function(y){return""+y.size/2+y.sizeUnit});v.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},v.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GuardSpinner=void 0;var i=w([`
    0% {
        transform: rotateY(90deg);
    }
    50% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(90deg);
    }
`],[`
    0% {
        transform: rotateY(90deg);
    }
    50% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(90deg);
    }
`]),o=w([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`]),s=w([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
`]),a=w([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    animation-delay: `,`s;
`]),l=w([`
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`],[`
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`]),u=v(r(0)),d=v(r(1)),p=r(2),m=v(p);function v(S){return S&&S.__esModule?S:{default:S}}function w(S,x){return Object.freeze(Object.defineProperties(S,{raw:{value:Object.freeze(x)}}))}var y=(0,p.keyframes)(i),c=n.GuardSpinner=function(S){var x=S.size,E=S.backColor,_=S.frontColor,C=S.loading,k=S.sizeUnit;return C&&u.default.createElement(f,{size:x,sizeUnit:k},function(z){for(var R=z.countCubesInLine,U=z.backColor,V=z.frontColor,O=z.size,$=z.sizeUnit,j=[],P=0,A=0;A<R;A++)for(var F=0;F<R;F++)j.push(u.default.createElement(h,{size:O,x:A*(O/4+O/8),y:F*(O/4+O/8),key:P.toString(),sizeUnit:$},u.default.createElement(g,{size:O,index:P,sizeUnit:$},u.default.createElement(b,{front:!0,size:O,color:V,sizeUnit:$}),u.default.createElement(b,{left:!0,size:O,color:U,sizeUnit:$})))),P++;return j}({countCubesInLine:3,backColor:E,frontColor:_,size:x,sizeUnit:k}))},f=m.default.div.withConfig({displayName:"guard__Wrapper",componentId:"sc-13axfn9-0"})(o,function(S){return""+S.size+S.sizeUnit},function(S){return""+S.size+S.sizeUnit},function(S){return""+3*S.size+S.sizeUnit}),h=m.default.div.withConfig({displayName:"guard__CubeWrapper",componentId:"sc-13axfn9-1"})(s,function(S){return""+S.y+S.sizeUnit},function(S){return""+S.x+S.sizeUnit},function(S){return""+S.size+S.sizeUnit},function(S){return""+S.size+S.sizeUnit}),g=m.default.div.withConfig({displayName:"guard__Cube",componentId:"sc-13axfn9-2"})(a,function(S){return""+S.size/4+S.sizeUnit},function(S){return""+S.size/4+S.sizeUnit},y,function(S){return .125*S.index}),b=m.default.div.withConfig({displayName:"guard__Side",componentId:"sc-13axfn9-3"})(l,function(S){return S.color},function(S){return S.front?0:-90},function(S){return""+S.size/8+S.sizeUnit});c.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#373846",sizeUnit:"px"},c.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CircleSpinner=void 0;var i=p([`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`]),o=p([`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-right-color: transparent;
    border-radius: 50%;
    animation: `,` 0.75s linear infinite;
`],[`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-right-color: transparent;
    border-radius: 50%;
    animation: `,` 0.75s linear infinite;
`]),s=d(r(0)),a=d(r(1)),l=r(2),u=d(l);function d(y){return y&&y.__esModule?y:{default:y}}function p(y,c){return Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(c)}}))}var m=(0,l.keyframes)(i),v=n.CircleSpinner=function(y){var c=y.size,f=y.color,h=y.loading,g=y.sizeUnit;return h&&s.default.createElement(w,{size:c,color:f,sizeUnit:g})},w=u.default.div.withConfig({displayName:"circle__Wrapper",componentId:"sc-16bbsoy-0"})(o,function(y){return""+y.size+y.sizeUnit},function(y){return""+y.size+y.sizeUnit},function(y){return""+y.size/5+y.sizeUnit},function(y){return y.color},m);v.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},v.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SpiralSpinner=void 0;var i=w([`
    0% {
        transform: rotateX(0deg);
    }
    25% {
        transform: rotateX(-90deg);
    }
    50% {
        transform: rotateX(-180deg);
    }
    75% {
        transform: rotateX(-270deg);
    }
    100% {
        transform: rotateX(-360deg);
    }
`],[`
    0% {
        transform: rotateX(0deg);
    }
    25% {
        transform: rotateX(-90deg);
    }
    50% {
        transform: rotateX(-180deg);
    }
    75% {
        transform: rotateX(-270deg);
    }
    100% {
        transform: rotateX(-360deg);
    }
`]),o=w([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`]),s=w([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`]),a=w([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),l=w([`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`],[`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`]),u=v(r(0)),d=v(r(1)),p=r(2),m=v(p);function v(S){return S&&S.__esModule?S:{default:S}}function w(S,x){return Object.freeze(Object.defineProperties(S,{raw:{value:Object.freeze(x)}}))}var y=(0,p.keyframes)(i),c=n.SpiralSpinner=function(S){var x=S.size,E=S.backColor,_=S.frontColor,C=S.loading,k=S.sizeUnit;return C&&u.default.createElement(f,{size:x,sizeUnit:k},function(z){for(var R=z.countCubesInLine,U=z.backColor,V=z.frontColor,O=z.size,$=z.sizeUnit,j=[],P=0,A=0;A<R;A++)j.push(u.default.createElement(h,{x:A*(O/4),y:0,key:P.toString(),sizeUnit:$},u.default.createElement(g,{size:O,index:P,sizeUnit:$},u.default.createElement(b,{front:!0,size:O,color:V,sizeUnit:$}),u.default.createElement(b,{back:!0,size:O,color:V,sizeUnit:$}),u.default.createElement(b,{bottom:!0,size:O,color:U,sizeUnit:$}),u.default.createElement(b,{top:!0,size:O,color:U,sizeUnit:$})))),P++;return j}({countCubesInLine:4,backColor:E,frontColor:_,size:x,sizeUnit:k}))},f=m.default.div.withConfig({displayName:"spiral__Wrapper",componentId:"sc-1898s0q-0"})(o,function(S){return""+S.size+S.sizeUnit},function(S){return""+S.size/4+S.sizeUnit},function(S){return""+3*S.size+S.sizeUnit}),h=m.default.div.withConfig({displayName:"spiral__CubeWrapper",componentId:"sc-1898s0q-1"})(s,function(S){return""+S.y+S.sizeUnit},function(S){return""+S.x+S.sizeUnit}),g=m.default.div.withConfig({displayName:"spiral__Cube",componentId:"sc-1898s0q-2"})(a,function(S){return""+S.size/4+S.sizeUnit},function(S){return""+S.size/4+S.sizeUnit},y,function(S){return .15*S.index}),b=m.default.div.withConfig({displayName:"spiral__Side",componentId:"sc-1898s0q-3"})(l,function(S){return S.color},function(S){return function(x){return x.top?90:x.bottom?-90:0}(S)},function(S){return S.back?180:0},function(S){return""+S.size/8+S.sizeUnit});c.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PulseSpinner=void 0;var i=m([`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`],[`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) infinite;
    animation-delay: `,`s;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function m(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var v=(0,u.keyframes)(i),w=n.PulseSpinner=function(f){var h=f.size,g=f.color,b=f.loading,S=f.sizeUnit;return b&&a.default.createElement(y,{size:h,sizeUnit:S},function(x){for(var E=x.countCubeInLine,_=x.color,C=x.size,k=x.sizeUnit,z=[],R=0,U=0;U<E;U++)z.push(a.default.createElement(c,{color:_,size:C,x:U*(C/3+C/15),y:0,key:R.toString(),index:U,sizeUnit:k})),R++;return z}({countCubeInLine:3,color:g,size:h,sizeUnit:S}))},y=d.default.div.withConfig({displayName:"pulse__Wrapper",componentId:"sc-1yr0qmr-0"})(o,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size/2.5+f.sizeUnit}),c=d.default.div.withConfig({displayName:"pulse__Cube",componentId:"sc-1yr0qmr-1"})(s,function(f){return""+f.y+f.sizeUnit},function(f){return""+f.x+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return""+f.size/2.5+f.sizeUnit},function(f){return f.color},v,function(f){return .15*f.index});w.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SequenceSpinner=void 0;var i=w([`
    0% {
        top: `,"",`;
        transform: rotateY(0deg);
    }
    30%{
        top: 0;
        transform: rotateY(90deg);
    }
    100% {
        transform: rotateY(0deg);
        top: -`,"",`;
    }
`],[`
    0% {
        top: `,"",`;
        transform: rotateY(0deg);
    }
    30%{
        top: 0;
        transform: rotateY(90deg);
    }
    100% {
        transform: rotateY(0deg);
        top: -`,"",`;
    }
`]),o=w([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
    overflow: hidden;
    transform: rotateY(20deg);
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
    overflow: hidden;
    transform: rotateY(20deg);
`]),s=w([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`]),a=w([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.75s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.75s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),l=w([`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`],[`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`]),u=v(r(0)),d=v(r(1)),p=r(2),m=v(p);function v(b){return b&&b.__esModule?b:{default:b}}function w(b,S){return Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(S)}}))}var y=n.SequenceSpinner=function(b){var S=b.size,x=b.backColor,E=b.frontColor,_=b.loading,C=b.sizeUnit;return _&&u.default.createElement(c,{size:S,sizeUnit:C},function(k){for(var z=k.countCubesInLine,R=k.backColor,U=k.frontColor,V=k.size,O=k.sizeUnit,$=[],j=0,P=0;P<z;P++)$.push(u.default.createElement(f,{x:P*(V/8+V/11),y:0,key:j.toString(),sizeUnit:O},u.default.createElement(h,{size:V,index:j,sizeUnit:O},u.default.createElement(g,{front:!0,size:V,color:U,sizeUnit:O}),u.default.createElement(g,{left:!0,size:V,color:R,sizeUnit:O})))),j++;return $}({countCubesInLine:5,backColor:x,frontColor:E,size:S,sizeUnit:C}))},c=m.default.div.withConfig({displayName:"sequence__Wrapper",componentId:"sc-61fmm1-0"})(o,function(b){return""+b.size+b.sizeUnit},function(b){return""+b.size/1.75+b.sizeUnit},function(b){return""+3*b.size+b.sizeUnit}),f=m.default.div.withConfig({displayName:"sequence__CubeWrapper",componentId:"sc-61fmm1-1"})(s,function(b){return""+b.y+b.sizeUnit},function(b){return""+b.x+b.sizeUnit}),h=m.default.div.withConfig({displayName:"sequence__Cube",componentId:"sc-61fmm1-2"})(a,function(b){return""+b.size/8+b.sizeUnit},function(b){return""+b.size/1.75+b.sizeUnit},function(b){return(0,p.keyframes)(i,b.size,b.sizeUnit,b.size,b.sizeUnit)},function(b){return .1*b.index}),g=m.default.div.withConfig({displayName:"sequence__Side",componentId:"sc-61fmm1-3"})(l,function(b){return b.color},function(b){return b.front?0:-90},function(b){return""+b.size/16+b.sizeUnit});y.defaultProps={loading:!0,size:40,frontColor:"#4b4c56",backColor:"#00ff89",sizeUnit:"px"},y.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.DominoSpinner=void 0;var i=m([`
    0% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 0;
    }
    14.28% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    28.56% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    37.12% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    42.84% {
        transform: translateX(`,"",`) rotate(10deg);
        opacity: 1;
    }
    57.12% {
        transform: translateX(`,"",`) rotate(40deg);
        opacity: 1;
    }
    71.4% {
        transform: translateX(`,"",`) rotate(62deg);
        opacity: 1;
    }
    85.68% {
        transform: translateX(`,"",`) rotate(72deg);
        opacity: 1;
    }
    100% {
        transform: translateX(`,"",`) rotate(74deg);
        opacity: 0;
    }
`],[`
    0% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 0;
    }
    14.28% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    28.56% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    37.12% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    42.84% {
        transform: translateX(`,"",`) rotate(10deg);
        opacity: 1;
    }
    57.12% {
        transform: translateX(`,"",`) rotate(40deg);
        opacity: 1;
    }
    71.4% {
        transform: translateX(`,"",`) rotate(62deg);
        opacity: 1;
    }
    85.68% {
        transform: translateX(`,"",`) rotate(72deg);
        opacity: 1;
    }
    100% {
        transform: translateX(`,"",`) rotate(74deg);
        opacity: 0;
    }
`]),o=m([`
    position: relative;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    right: 0;
    width: `,`;
    height: `,`;
    transform-origin: 50% 100%;
    background-color: `,`;
    animation: `,` 3s linear infinite;
    animation-delay: `,`s;
    transform: translateX(`,`)
        rotate(`,`deg);
    &:nth-child(1) {
        opacity: 0.22;
    }
`],[`
    position: absolute;
    right: 0;
    width: `,`;
    height: `,`;
    transform-origin: 50% 100%;
    background-color: `,`;
    animation: `,` 3s linear infinite;
    animation-delay: `,`s;
    transform: translateX(`,`)
        rotate(`,`deg);
    &:nth-child(1) {
        opacity: 0.22;
    }
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var v=n.DominoSpinner=function(c){var f=c.size,h=c.color,g=c.loading,b=c.sizeUnit,S=function(x,E){for(var _=[],C=0;C<=x+1;C++)_.push(E/8*-C);return _}(7,f);return g&&a.default.createElement(w,{size:f,sizeUnit:b},function(x){for(var E=x.countBars,_=x.rotatesPoints,C=x.translatesPoints,k=x.color,z=x.size,R=x.sizeUnit,U=[],V=0;V<E;V++)U.push(a.default.createElement(y,{color:k,size:z,translatesPoints:C,rotate:_[V],key:V.toString(),index:V,sizeUnit:R}));return U}({countBars:7,rotatesPoints:[0,0,0,10,40,60,70],translatesPoints:S,color:h,size:f,sizeUnit:b}))},w=d.default.div.withConfig({displayName:"domino__Wrapper",componentId:"sc-81zu9-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),y=d.default.div.withConfig({displayName:"domino__Bar",componentId:"sc-81zu9-1"})(s,function(c){return""+c.size/30+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.translatesPoints[0],c.sizeUnit,c.translatesPoints[1],c.sizeUnit,c.translatesPoints[2],c.sizeUnit,c.translatesPoints[3],c.sizeUnit,c.translatesPoints[4],c.sizeUnit,c.translatesPoints[5],c.sizeUnit,c.translatesPoints[6],c.sizeUnit,c.translatesPoints[7],c.sizeUnit,c.translatesPoints[8],c.sizeUnit)},function(c){return-.42*c.index},function(c){return""+(c.size-15*c.index)+c.sizeUnit},function(c){return c.rotate});v.defaultProps={loading:!0,size:100,color:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ImpulseSpinner=void 0;var i=m([`
    0% {
        background: `,`;
        transform: scale(1);
        animation-timing-function: cubic-bezier(1,0,0.7,1);
    }
    40% {
        background: `,`;
        transform: scale(1.5);
        animation-timing-function: cubic-bezier(0.3,0,0,1);
    }
    72.5% {
        background:`,`;
        transform: scale(1);
        animation-timing-function: linear;
    }
    100% {
        background: `,`;
        transform: scale(1);
    }
`],[`
    0% {
        background: `,`;
        transform: scale(1);
        animation-timing-function: cubic-bezier(1,0,0.7,1);
    }
    40% {
        background: `,`;
        transform: scale(1.5);
        animation-timing-function: cubic-bezier(0.3,0,0,1);
    }
    72.5% {
        background:`,`;
        transform: scale(1);
        animation-timing-function: linear;
    }
    100% {
        background: `,`;
        transform: scale(1);
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.25s linear infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.25s linear infinite;
    animation-delay: `,`s;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var v=n.ImpulseSpinner=function(c){var f=c.size,h=c.frontColor,g=c.backColor,b=c.loading,S=c.sizeUnit;return b&&a.default.createElement(w,{size:f,sizeUnit:S},function(x){for(var E=x.countBalls,_=x.frontColor,C=x.backColor,k=x.size,z=x.sizeUnit,R=[],U=0;U<E;U++)R.push(a.default.createElement(y,{frontColor:_,backColor:C,size:k,x:U*(k/5+k/5),y:0,key:U.toString(),index:U,sizeUnit:z}));return R}({countBalls:3,frontColor:h,backColor:g,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"impulse__Wrapper",componentId:"sc-1eafdhu-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),y=d.default.div.withConfig({displayName:"impulse__Ball",componentId:"sc-1eafdhu-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.frontColor},function(c){return(0,u.keyframes)(i,c.backColor,c.frontColor,c.backColor,c.backColor)},function(c){return .125*c.index});v.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:l.default.bool,size:l.default.number,frontColor:l.default.string,backColor:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CubeSpinner=void 0;var i=w([`
    from { transform: rotateX(0) rotateY(0); }
    to   { transform: rotateX(360deg) rotateY(360deg); }
`],[`
    from { transform: rotateX(0) rotateY(0); }
    to   { transform: rotateX(360deg) rotateY(360deg); }
`]),o=w([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`]),s=w([`
    sposition: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`],[`
    sposition: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`]),a=w([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`]),l=w([`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`],[`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`]),u=v(r(0)),d=v(r(1)),p=r(2),m=v(p);function v(S){return S&&S.__esModule?S:{default:S}}function w(S,x){return Object.freeze(Object.defineProperties(S,{raw:{value:Object.freeze(x)}}))}var y=(0,p.keyframes)(i),c=n.CubeSpinner=function(S){var x=S.size,E=S.backColor,_=S.frontColor,C=S.loading,k=S.sizeUnit;return C&&u.default.createElement(f,{size:x,sizeUnit:k},u.default.createElement(h,{x:0,y:0,sizeUnit:k},u.default.createElement(g,{size:x,sizeUnit:k},u.default.createElement(b,{front:!0,size:x,color:_,sizeUnit:k}),u.default.createElement(b,{back:!0,size:x,color:_,sizeUnit:k}),u.default.createElement(b,{bottom:!0,size:x,color:E,sizeUnit:k}),u.default.createElement(b,{top:!0,size:x,color:E,sizeUnit:k}),u.default.createElement(b,{left:!0,size:x,color:E,sizeUnit:k}),u.default.createElement(b,{right:!0,size:x,color:E,sizeUnit:k}))))},f=m.default.div.withConfig({displayName:"cube__Wrapper",componentId:"sc-1iks05k-0"})(o,function(S){return""+S.size+S.sizeUnit},function(S){return""+S.size+S.sizeUnit},function(S){return""+4*S.size+S.sizeUnit}),h=m.default.div.withConfig({displayName:"cube__CubeWrapper",componentId:"sc-1iks05k-1"})(s,function(S){return""+S.y+S.sizeUnit},function(S){return""+S.x+S.sizeUnit}),g=m.default.div.withConfig({displayName:"cube__Cube",componentId:"sc-1iks05k-2"})(a,function(S){return""+S.size+S.sizeUnit},function(S){return""+S.size+S.sizeUnit},y),b=m.default.div.withConfig({displayName:"cube__Side",componentId:"sc-1iks05k-3"})(l,function(S){return S.color},function(S){return function(x){return x.top?90:x.bottom?-90:0}(S)},function(S){return function(x){return x.left?90:x.right?-90:x.back?180:0}(S)},function(S){return""+S.size/2+S.sizeUnit});c.defaultProps={loading:!0,size:25,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FillSpinner=void 0;var i=v([`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
`]),o=v([`
    0% {
        height: 0%;
    }
    25% {
        height: 0%;
    }
    50% {
        height: 100%;
    }
    75% {
        height: 100%;
    }
    100% {
        height: 0%;
    }
`],[`
    0% {
        height: 0%;
    }
    25% {
        height: 0%;
    }
    50% {
        height: 100%;
    }
    75% {
        height: 100%;
    }
    100% {
        height: 0%;
    }
`]),s=v([`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    animation: `,` 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`],[`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    animation: `,` 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`]),a=v([`
    width: 100%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`],[`
    width: 100%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`]),l=m(r(0)),u=m(r(1)),d=r(2),p=m(d);function m(g){return g&&g.__esModule?g:{default:g}}function v(g,b){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(b)}}))}var w=(0,d.keyframes)(i),y=(0,d.keyframes)(o),c=n.FillSpinner=function(g){var b=g.size,S=g.color,x=g.loading,E=g.sizeUnit;return x&&l.default.createElement(f,{size:b,color:S,sizeUnit:E},l.default.createElement(h,{color:S,size:b,sizeUnit:E}))},f=p.default.div.withConfig({displayName:"fill__Wrapper",componentId:"ehv7z4-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size/8+g.sizeUnit},function(g){return g.color},w),h=p.default.div.withConfig({displayName:"fill__Plane",componentId:"ehv7z4-1"})(a,function(g){return g.color},y);c.defaultProps={loading:!0,size:20,color:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SphereSpinner=void 0;var i=v([`
    to{
        transform: rotate(360deg);
    }
`],[`
    to{
        transform: rotate(360deg);
    }
`]),o=v([`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
    5% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    50% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    55% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`],[`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
    5% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    50% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    55% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`]),s=v([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 8s linear infinite;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 8s linear infinite;
`]),a=v([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),l=m(r(0)),u=m(r(1)),d=r(2),p=m(d);function m(h){return h&&h.__esModule?h:{default:h}}function v(h,g){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(g)}}))}var w=(0,d.keyframes)(i),y=n.SphereSpinner=function(h){var g=h.size,b=h.color,S=h.loading,x=h.sizeUnit,E=g/2,_=g/5;return S&&l.default.createElement(c,{size:g,sizeUnit:x},function(C){for(var k=C.countBalls,z=C.radius,R=C.angle,U=C.color,V=C.size,O=C.ballSize,$=C.sizeUnit,j=[],P=O/2,A=0;A<k;A++){var F=Math.sin(R*A*(Math.PI/180))*z-P,Q=Math.cos(R*A*(Math.PI/180))*z-P;j.push(l.default.createElement(f,{color:U,ballSize:O,size:V,x:F,y:Q,key:A.toString(),index:A,sizeUnit:$}))}return j}({countBalls:7,radius:E,angle:360/7,color:b,size:g,ballSize:_,sizeUnit:x}))},c=p.default.div.withConfig({displayName:"sphere__Wrapper",componentId:"sc-1t5xu9p-0"})(s,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},w),f=p.default.div.withConfig({displayName:"sphere__Ball",componentId:"sc-1t5xu9p-1"})(a,function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return h.color},function(h){return""+h.x+h.sizeUnit},function(h){return""+h.y+h.sizeUnit},function(h){return function(g){return(0,d.keyframes)(o,g.x,g.sizeUnit,g.y,g.sizeUnit,g.size/12,g.sizeUnit,g.size/12,g.sizeUnit,g.size/12,g.sizeUnit,g.size/12,g.sizeUnit,g.x,g.sizeUnit,g.y,g.sizeUnit)}(h)},function(h){return .3*h.index});y.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},y.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FlagSpinner=void 0;var i=v([`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    50% {
        transform: translateY(`,"",`);
        opacity: 0.25;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`],[`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    50% {
        transform: translateY(`,"",`);
        opacity: 0.25;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`]),o=v([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=v([`
    position: absolute;
    left: 0;
    top: 0;
    animation: `,` 1.5s cubic-bezier(0.86, 0, 0.07, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    left: 0;
    top: 0;
    animation: `,` 1.5s cubic-bezier(0.86, 0, 0.07, 1) infinite;
    animation-delay: `,`s;
`]),a=v([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
`]),l=m(r(0)),u=m(r(1)),d=r(2),p=m(d);function m(h){return h&&h.__esModule?h:{default:h}}function v(h,g){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(g)}}))}var w=n.FlagSpinner=function(h){var g=h.size,b=h.color,S=h.loading,x=h.sizeUnit;return S&&l.default.createElement(y,{size:g,sizeUnit:x},function(E){for(var _=E.countPlaneInLine,C=E.color,k=E.size,z=E.sizeUnit,R=[],U=[],V=0,O=0;O<_;O++){for(var $=0;$<_;$++)U.push(l.default.createElement(f,{color:C,size:k,x:O*(k/6+k/9),y:$*(k/6+k/9)+k/10,key:O+$.toString(),index:V,sizeUnit:z})),V++;R.push(l.default.createElement(c,{index:V,key:V.toString(),size:k,sizeUnit:z},[].concat(U))),U.length=0}return R}({countPlaneInLine:4,color:b,size:g,sizeUnit:x}))},y=p.default.div.withConfig({displayName:"flag__Wrapper",componentId:"sc-3eh05c-0"})(o,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit}),c=p.default.div.withConfig({displayName:"flag__Line",componentId:"sc-3eh05c-1"})(s,function(h){return(0,d.keyframes)(i,-h.size/5,h.sizeUnit)},function(h){return .05*h.index}),f=p.default.div.withConfig({displayName:"flag__Plane",componentId:"sc-3eh05c-2"})(a,function(h){return""+h.y+h.sizeUnit},function(h){return""+h.x+h.sizeUnit},function(h){return""+h.size/6+h.sizeUnit},function(h){return""+h.size/6+h.sizeUnit},function(h){return h.color});w.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},w.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ClapSpinner=void 0;var i=v([`
    50% {
        transform: rotate(180deg) scale(1.125);
    }
    100%{
        transform: rotate(360deg);
    }
`],[`
    50% {
        transform: rotate(180deg) scale(1.125);
    }
    100%{
        transform: rotate(360deg);
    }
`]),o=v([`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1.25) ;
    }
    5% {
        transform: translateX(`,"",") translateY(","",`) scale(1.75);
    }
    50% {
        transform: translateX(`,"",") translateY(","",`) scale(.25);
    }
    55% {
        background-color: `,`;
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`],[`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1.25) ;
    }
    5% {
        transform: translateX(`,"",") translateY(","",`) scale(1.75);
    }
    50% {
        transform: translateX(`,"",") translateY(","",`) scale(.25);
    }
    55% {
        background-color: `,`;
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`]),s=v([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 1.5s linear infinite;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 1.5s linear infinite;
`]),a=v([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: `,`s;
`]),l=m(r(0)),u=m(r(1)),d=r(2),p=m(d);function m(h){return h&&h.__esModule?h:{default:h}}function v(h,g){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(g)}}))}var w=(0,d.keyframes)(i),y=n.ClapSpinner=function(h){var g=h.size,b=h.frontColor,S=h.backColor,x=h.loading,E=h.sizeUnit,_=g/2,C=g/5;return x&&l.default.createElement(c,{size:g,sizeUnit:E},function(k){for(var z=k.countBalls,R=k.radius,U=k.angle,V=k.frontColor,O=k.backColor,$=k.size,j=k.ballSize,P=k.sizeUnit,A=[],F=j/2,Q=0;Q<z;Q++){var se=Math.sin(U*Q*(Math.PI/180))*R-F,Ge=Math.cos(U*Q*(Math.PI/180))*R-F;A.push(l.default.createElement(f,{frontColor:V,backColor:O,ballSize:j,size:$,sizeUnit:P,x:se,y:Ge,key:Q.toString(),index:Q}))}return A}({countBalls:7,radius:_,angle:360/7,frontColor:b,backColor:S,size:g,ballSize:C,sizeUnit:E}))},c=p.default.div.withConfig({displayName:"clap__Wrapper",componentId:"sc-12p9tb5-0"})(s,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},w),f=p.default.div.withConfig({displayName:"clap__Ball",componentId:"sc-12p9tb5-1"})(a,function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return h.frontColor},function(h){return""+h.x+h.sizeUnit},function(h){return""+h.y+h.sizeUnit},function(h){return function(g){return(0,d.keyframes)(o,g.x,g.sizeUnit,g.y,g.sizeUnit,g.x,g.sizeUnit,g.y,g.sizeUnit,g.x,g.sizeUnit,g.y,g.sizeUnit,g.backColor,g.x,g.sizeUnit,g.y,g.sizeUnit)}(h)},function(h){return .2*h.index});y.defaultProps={loading:!0,size:30,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:u.default.bool,size:u.default.number,frontColor:u.default.string,backColor:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RotateSpinner=void 0;var i=m([`
    0% {
        transform: rotate(0deg);
    }
    100% { 
        transform: rotate(1440deg); 
        opacity: 0.05;
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    100% { 
        transform: rotate(1440deg); 
        opacity: 0.05;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    left: 50%;
    top: 0%;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(-50%) translateY(100%);
    transform-origin: 0 250% 0;
    animation: `,` 4s both infinite;
    animation-timing-function: cubic-bezier(0.5, `,`, 0.9, 0.9);
`],[`
    position: absolute;
    left: 50%;
    top: 0%;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(-50%) translateY(100%);
    transform-origin: 0 250% 0;
    animation: `,` 4s both infinite;
    animation-timing-function: cubic-bezier(0.5, `,`, 0.9, 0.9);
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function m(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var v=(0,u.keyframes)(i),w=n.RotateSpinner=function(f){var h=f.size,g=f.color,b=f.loading,S=f.sizeUnit,x=h/2,E=h/5;return b&&a.default.createElement(y,{size:h,sizeUnit:S},function(_){for(var C=_.countBalls,k=_.radius,z=_.angle,R=_.color,U=_.size,V=_.ballSize,O=_.sizeUnit,$=[],j=V/2,P=0;P<C;P++){var A=Math.sin(z*P*(Math.PI/180))*k-j,F=Math.cos(z*P*(Math.PI/180))*k-j;$.push(a.default.createElement(c,{color:R,ballSize:V,size:U,x:A,y:F,key:P.toString(),index:P,sizeUnit:O}))}return $}({countBalls:8,radius:x,angle:45,color:g,size:h,ballSize:E,sizeUnit:S}))},y=d.default.div.withConfig({displayName:"rotate__Wrapper",componentId:"sc-1b62bh9-0"})(o,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=d.default.div.withConfig({displayName:"rotate__Ball",componentId:"sc-1b62bh9-1"})(s,function(f){return""+f.ballSize+f.sizeUnit},function(f){return""+f.ballSize+f.sizeUnit},function(f){return f.color},v,function(f){return .3*f.index});w.defaultProps={loading:!0,size:45,color:"#00ff89",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SwishSpinner=void 0;var i=m([`
    50% {
        transform: scale(0);
        background-color: `,`;
    }
`],[`
    50% {
        transform: scale(0);
        background-color: `,`;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 3px;
    background-color: `,`;
    animation: `,` 0.9s ease infinite;
    transition: all 0.3s ease;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 3px;
    background-color: `,`;
    animation: `,` 0.9s ease infinite;
    transition: all 0.3s ease;
    animation-delay: `,`s;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var v=n.SwishSpinner=function(c){var f=c.size,h=c.frontColor,g=c.backColor,b=c.loading,S=c.sizeUnit;return b&&a.default.createElement(w,{size:f,sizeUnit:S},function(x){for(var E=x.countBallsInLine,_=x.frontColor,C=x.backColor,k=x.size,z=x.sizeUnit,R=[],U=0,V=0;V<E;V++)for(var O=0;O<E;O++)R.push(a.default.createElement(y,{frontColor:_,backColor:C,size:k,x:V*(k/3+k/15),y:O*(k/3+k/15),key:U.toString(),index:U,sizeUnit:z})),U++;return R}({countBallsInLine:3,frontColor:h,backColor:g,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"swish__Wrapper",componentId:"e0szto-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),y=d.default.div.withConfig({displayName:"swish__Ball",componentId:"e0szto-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.frontColor},function(c){return(0,u.keyframes)(i,c.backColor)},function(c){return .1*c.index});v.defaultProps={loading:!0,size:40,frontColor:"#4b4c56",backColor:"#fff",sizeUnit:"px"},v.propTypes={loading:l.default.bool,size:l.default.number,frontColor:l.default.string,backColor:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GooSpinner=void 0;var i=w([`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`]),o=w([`
    0%{
        transform: translateY(0) scale(1);
    }
    50%{
        transform: translateY(`,"",`) scale(0.8);
    }
    100%{
        transform: translateY(0) scale(1);
    }
`],[`
    0%{
        transform: translateY(0) scale(1);
    }
    50%{
        transform: translateY(`,"",`) scale(0.8);
    }
    100%{
        transform: translateY(0) scale(1);
    }
`]),s=w([`
    width: `,`;
    height: `,`;
    filter: url("#goo");
`],[`
    width: `,`;
    height: `,`;
    filter: url("#goo");
`]),a=w([`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1.7s linear infinite;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1.7s linear infinite;
`]),l=w([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s ease-in-out infinite;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s ease-in-out infinite;
`]),u=v(r(0)),d=v(r(1)),p=r(2),m=v(p);function v(g){return g&&g.__esModule?g:{default:g}}function w(g,b){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(b)}}))}var y=n.GooSpinner=function(g){var b=g.size,S=g.color,x=g.loading,E=g.sizeUnit;return x&&u.default.createElement(c,{size:b,sizeUnit:E},u.default.createElement(f,{size:b,sizeUnit:E},function(_){for(var C=_.countBalls,k=_.color,z=_.size,R=_.sizeUnit,U=[],V=z/4,O=[-V,V],$=0;$<C;$++)U.push(u.default.createElement(h,{color:k,size:z,x:z/2-z/6,y:z/2-z/6,key:$.toString(),translateTo:O[$],index:$,sizeUnit:R}));return U}({countBalls:2,color:S,size:b,sizeUnit:E})),u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1"},u.default.createElement("defs",null,u.default.createElement("filter",{id:"goo"},u.default.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"6",result:"blur"}),u.default.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -5",result:"goo"}),u.default.createElement("feBlend",{in:"SourceGraphic",in2:"goo"})))))},c=m.default.div.withConfig({displayName:"goo__Wrapper",componentId:"sc-12keask-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit}),f=m.default.div.withConfig({displayName:"goo__BallsWrapper",componentId:"sc-12keask-1"})(a,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit},function(){return(0,p.keyframes)(i)}),h=m.default.div.withConfig({displayName:"goo__Ball",componentId:"sc-12keask-2"})(l,function(g){return""+g.y+g.sizeUnit},function(g){return""+g.x+g.sizeUnit},function(g){return""+g.size/3+g.sizeUnit},function(g){return""+g.size/3+g.sizeUnit},function(g){return g.color},function(g){return(0,p.keyframes)(o,g.translateTo,g.sizeUnit)});y.defaultProps={loading:!0,size:55,color:"#fff",sizeUnit:"px"},y.propTypes={loading:d.default.bool,size:d.default.number,color:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CombSpinner=void 0;var i=m([`
    to {
        transform: rotate(450deg);
    }
`],[`
    to {
        transform: rotate(450deg);
    }
`]),o=m([`
    position: relative;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    left: 0;
    width: `,`;
    height: `,`;
    left: `,`;
    transform-origin: center bottom;
    transform: rotate(-90deg);
    background-color: `,`;
    animation: `,` 3s ease infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    left: 0;
    width: `,`;
    height: `,`;
    left: `,`;
    transform-origin: center bottom;
    transform: rotate(-90deg);
    background-color: `,`;
    animation: `,` 3s ease infinite;
    animation-delay: `,`s;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var v=n.CombSpinner=function(c){var f=c.size,h=c.color,g=c.loading,b=c.sizeUnit,S=f/9;return g&&a.default.createElement(w,{size:f,sizeUnit:b},function(x){for(var E=x.countBars,_=x.color,C=x.size,k=x.sizeUnit,z=[],R=0;R<E;R++)z.push(a.default.createElement(y,{color:_,size:C,key:R.toString(),sizeUnit:k,index:R}));return z}({countBars:S,color:h,size:f,sizeUnit:b}))},w=d.default.div.withConfig({displayName:"comb__Wrapper",componentId:"x9t4ur-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),y=d.default.div.withConfig({displayName:"comb__Bar",componentId:"x9t4ur-1"})(s,function(c){return""+c.size/60+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+9*c.index+c.sizeUnit},function(c){return c.color},function(){return(0,u.keyframes)(i)},function(c){return .05*c.index});v.defaultProps={loading:!0,size:100,color:"#fff",sizeUnit:"px"},v.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PongSpinner=void 0;var i=w([`
    0% {
        top: `,"",`;
    }
    50% {
        top: `,"",`;
    }
    100% {
        top: `,"",`;
    }
`],[`
    0% {
        top: `,"",`;
    }
    50% {
        top: `,"",`;
    }
    100% {
        top: `,"",`;
    }
`]),o=w([`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`; 
    }
    50% {
        top: `,"",`;
        left: `,"",`; 
    }
    75% {
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`; 
    }
`],[`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`; 
    }
    50% {
        top: `,"",`;
        left: `,"",`; 
    }
    75% {
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`; 
    }
`]),s=w([`
    position: relative;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
`]),a=w([`
    position: absolute;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 2s linear infinite;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 2s linear infinite;
`]),l=w([`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    left: `,`;
    right: `,`;
    border-radius: 4px;
    animation: `,` 2s linear infinite;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    left: `,`;
    right: `,`;
    border-radius: 4px;
    animation: `,` 2s linear infinite;
`]),u=v(r(0)),d=v(r(1)),p=r(2),m=v(p);function v(g){return g&&g.__esModule?g:{default:g}}function w(g,b){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(b)}}))}var y=n.PongSpinner=function(g){var b=g.size,S=g.color,x=g.loading,E=g.sizeUnit;return x&&u.default.createElement(c,{size:b,sizeUnit:E},u.default.createElement(h,{left:!0,color:S,size:b,sizeUnit:E}),u.default.createElement(f,{color:S,size:b,sizeUnit:E}),u.default.createElement(h,{right:!0,color:S,size:b,sizeUnit:E}))},c=m.default.div.withConfig({displayName:"pong__Wrapper",componentId:"sc-1lbqo08-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size/1.75+g.sizeUnit}),f=m.default.div.withConfig({displayName:"pong__Ball",componentId:"sc-1lbqo08-1"})(a,function(g){return""+g.size/8+g.sizeUnit},function(g){return""+g.size/8+g.sizeUnit},function(g){return g.color},function(g){return function(b){return(0,p.keyframes)(o,b.size/3.5-b.size/8,b.sizeUnit,b.size/12,b.sizeUnit,b.size/3.5,b.sizeUnit,b.size-b.size/8,b.sizeUnit,b.size/1.75-b.size/8,b.sizeUnit,b.size/12,b.sizeUnit,b.size/3.5,b.sizeUnit,b.size-b.size/8,b.sizeUnit,b.size/3.5-b.size/8,b.sizeUnit,b.size/12,b.sizeUnit)}(g)}),h=m.default.div.withConfig({displayName:"pong__Player",componentId:"sc-1lbqo08-2"})(l,function(g){return""+g.size/12+g.sizeUnit},function(g){return""+g.size/3+g.sizeUnit},function(g){return g.color},function(g){return g.left?0:g.size},function(g){return g.right?0:g.size},function(g){return function(b){return(0,p.keyframes)(i,b.left?0:b.size/3.5,b.sizeUnit,b.left?b.size/3.5:0,b.sizeUnit,b.left?0:b.size/3.5,b.sizeUnit)}(g)});y.defaultProps={loading:!0,size:60,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:d.default.bool,size:d.default.number,color:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RainbowSpinner=void 0;var i=m([`
    0% {
        border-width: 10`,`; 
    }
    25% {
        border-width: 3`,`; 
    }
    50% {
        transform: rotate(115deg); 
        border-width: 10`,`;
    }
    75% {
        border-width: 3`,`;
    }
    100% {
        border-width: 10`,`;
    }
`],[`
    0% {
        border-width: 10`,`; 
    }
    25% {
        border-width: 3`,`; 
    }
    50% {
        transform: rotate(115deg); 
        border-width: 10`,`;
    }
    75% {
        border-width: 3`,`;
    }
    100% {
        border-width: 10`,`;
    }
`]),o=m([`
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),s=m([`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    border-style: solid;
    border-top-color: `,`;
    border-right-color: `,`;
    border-left-color: transparent;
    border-bottom-color: transparent;
    box-sizing: border-box;
    transform: rotate(-200deg);
    animation: `,` 3s ease-in-out infinite;
`],[`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    border-style: solid;
    border-top-color: `,`;
    border-right-color: `,`;
    border-left-color: transparent;
    border-bottom-color: transparent;
    box-sizing: border-box;
    transform: rotate(-200deg);
    animation: `,` 3s ease-in-out infinite;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var v=n.RainbowSpinner=function(c){var f=c.size,h=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:f,sizeUnit:b},a.default.createElement(y,{size:f,color:h,sizeUnit:b}))},w=d.default.div.withConfig({displayName:"rainbow__Wrapper",componentId:"sc-1ugdhww-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit}),y=d.default.div.withConfig({displayName:"rainbow__Line",componentId:"sc-1ugdhww-1"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit},function(c){return c.color},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.sizeUnit,c.sizeUnit,c.sizeUnit,c.sizeUnit,c.sizeUnit)});v.defaultProps={loading:!0,size:50,color:"#fff",sizeUnit:"px"},v.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RingSpinner=void 0;var i=v([`
    0% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
    50%, 100% {
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
`],[`
    0% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
    50%, 100% {
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
`]),o=v([`
    0%, 50% { 
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
    100% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
`],[`
    0%, 50% { 
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
    100% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
`]),s=v([`
    width: `,`;
    height: `,`;
`],[`
    width: `,`;
    height: `,`;
`]),a=v([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
    &:before,
    &:after {
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        border-radius: 50%;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    &:before {
        box-shadow: `,`;
        animation-name: `,`;
    }
    &:after {
        box-shadow: 0 0 0 0 `,`;
        animation-name: `,`;
    }
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
    &:before,
    &:after {
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        border-radius: 50%;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    &:before {
        box-shadow: `,`;
        animation-name: `,`;
    }
    &:after {
        box-shadow: 0 0 0 0 `,`;
        animation-name: `,`;
    }
`]),l=m(r(0)),u=m(r(1)),d=r(2),p=m(d);function m(f){return f&&f.__esModule?f:{default:f}}function v(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var w=n.RingSpinner=function(f){var h=f.size,g=f.color,b=f.loading,S=f.sizeUnit;return b&&l.default.createElement(y,{size:h,sizeUnit:S},l.default.createElement(c,{size:h,color:g,sizeUnit:S}))},y=p.default.div.withConfig({displayName:"ring__Wrapper",componentId:"sc-1ki0q4s-0"})(s,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=p.default.div.withConfig({displayName:"ring__Circle",componentId:"sc-1ki0q4s-1"})(a,function(f){return"inset 0 0 0 "+f.size/10+f.sizeUnit+" "+f.color},function(f){return(0,d.keyframes)(i,f.size/10,f.sizeUnit,f.color,f.color)},function(f){return f.color},function(f){return(0,d.keyframes)(o,f.color,f.size/10,f.sizeUnit,f.color)});w.defaultProps={loading:!0,size:30,color:"#00ff89",sizeUnit:"px"},w.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.HoopSpinner=void 0;var i=m([`
    0% {
        opacity: 0;
        border-color: `,`;
        transform: `,`;
    }
    40% {
        opacity: 1;
        transform: rotateX(0deg) rotateY(20deg) translateZ(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: `,`;
    }
`],[`
    0% {
        opacity: 0;
        border-color: `,`;
        transform: `,`;
    }
    40% {
        opacity: 1;
        transform: rotateX(0deg) rotateY(20deg) translateZ(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: `,`;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: 600px;
    transform-style: perserve-3d;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: 600px;
    transform-style: perserve-3d;
`]),s=m([`
    position: absolute;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-radius: 50%;
    background-color: transparent;
    transform-style: perserve-3d;
    transform: scale(0) rotateX(60deg);
    opacity: `,`;
    animation: `,` 3s cubic-bezier(0.67, 0.08, 0.46, 1.5) infinite;
    animation-delay: `,`ms;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-radius: 50%;
    background-color: transparent;
    transform-style: perserve-3d;
    transform: scale(0) rotateX(60deg);
    opacity: `,`;
    animation: `,` 3s cubic-bezier(0.67, 0.08, 0.46, 1.5) infinite;
    animation-delay: `,`ms;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var v=n.HoopSpinner=function(c){var f=c.size,h=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:f,sizeUnit:b},function(S){for(var x=S.countBallsInLine,E=S.color,_=S.size,C=S.sizeUnit,k=[],z=0,R=0;R<x;R++)k.push(a.default.createElement(y,{color:E,size:_,key:z.toString(),index:R,sizeUnit:C})),z++;return k}({countBallsInLine:6,color:h,size:f,sizeUnit:b}))},w=d.default.div.withConfig({displayName:"hoop__Wrapper",componentId:"sc-6dao9o-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),y=d.default.div.withConfig({displayName:"hoop__Ball",componentId:"sc-6dao9o-1"})(s,function(c){return""+c.size/1.5+c.sizeUnit},function(c){return""+c.size/1.5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return 1-.2*c.index},function(c){return(0,u.keyframes)(i,c.color,"rotateX(65deg) rotateY(45deg) translateZ(-"+1.5*c.size+c.sizeUnit+") scale(0.1)","rotateX(65deg) rotateY(-45deg) translateZ(-"+1.5*c.size+c.sizeUnit+") scale(0.1)")},function(c){return 200*c.index});v.defaultProps={loading:!0,size:45,color:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FlapperSpinner=void 0;var i=m([`
    100% {
        opacity: 0;
        transform: translateX(`,"",`)
        translateY(`,"",`) scale(1);
   }
`],[`
    100% {
        opacity: 0;
        transform: translateX(`,"",`)
        translateY(`,"",`) scale(1);
   }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`) scale(0);
    animation: `,` 0.8s linear infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`) scale(0);
    animation: `,` 0.8s linear infinite;
    animation-delay: `,`s;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var v=n.FlapperSpinner=function(c){var f=c.size,h=c.color,g=c.loading,b=c.sizeUnit,S=f/2,x=f/1.5;return g&&a.default.createElement(w,{size:f,sizeUnit:b},function(E){for(var _=E.countBalls,C=E.radius,k=E.angle,z=E.color,R=E.size,U=E.ballSize,V=E.sizeUnit,O=[],$=U/2,j=0;j<_;j++){var P=Math.sin(k*j*(Math.PI/180))*C-$,A=Math.cos(k*j*(Math.PI/180))*C-$;O.push(a.default.createElement(y,{color:z,ballSize:U,size:R,x:P,y:A,key:j.toString(),index:j,sizeUnit:V}))}return O}({countBalls:7,radius:S,angle:360/7,color:h,size:f,ballSize:x,sizeUnit:b}))},w=d.default.div.withConfig({displayName:"flapper__Wrapper",componentId:"kzbmuk-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),y=d.default.div.withConfig({displayName:"flapper__Ball",componentId:"kzbmuk-1"})(s,function(c){return""+c.size/2+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit},function(c){return""+c.ballSize+c.sizeUnit},function(c){return""+c.ballSize+c.sizeUnit},function(c){return c.color},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.y+c.sizeUnit},function(c){return function(f){return(0,u.keyframes)(i,f.x,f.sizeUnit,f.y,f.sizeUnit)}(c)},function(c){return .1*c.index});v.defaultProps={loading:!0,size:30,color:"#00ff89",sizeUnit:"px"},v.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MagicSpinner=void 0;var i=m([`
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
`],[`
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),s=m([`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid transparent;
    border-top-color: `,`;
    animation: `,` 2s cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid transparent;
    border-top-color: `,`;
    animation: `,` 2s cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;
    animation-delay: `,`s;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var v=n.MagicSpinner=function(c){var f=c.size,h=c.color,g=c.loading,b=c.sizeUnit,S=f/12;return g&&a.default.createElement(w,{size:f,sizeUnit:b},function(x){for(var E=x.countBalls,_=x.color,C=x.size,k=x.sizeUnit,z=[],R=0;R<E;R++)z.push(a.default.createElement(y,{color:_,countBalls:E,size:C,key:R.toString(),index:R,sizeUnit:k}));return z}({countBalls:S,color:h,size:f,sizeUnit:b}))},w=d.default.div.withConfig({displayName:"magic__Wrapper",componentId:"dtlj8d-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),y=d.default.div.withConfig({displayName:"magic__Ball",componentId:"dtlj8d-1"})(s,function(c){return""+c.index*(c.size/c.countBalls)+c.sizeUnit},function(c){return""+c.index*(c.size/c.countBalls)+c.sizeUnit},function(c){return c.color},function(){return(0,u.keyframes)(i)},function(c){return .05*c.index});v.defaultProps={loading:!0,size:70,color:"#fff",sizeUnit:"px"},v.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.JellyfishSpinner=void 0;var i=m([`
    0% {
        transform: `,`;
    }
    50% {
        transform: `,`;
    }
    100% {
        transform: `,`;
    }
`],[`
    0% {
        transform: `,`;
    }
    50% {
        transform: `,`;
    }
    100% {
        transform: `,`;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    width: `,`;
    height: `,`;
    border: 2px solid `,`;
    border-radius: 50%;
    background-color: transparent;
    animation: `,` 2.5s ease infinite;
    animation-delay: `,`ms;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    border: 2px solid `,`;
    border-radius: 50%;
    background-color: transparent;
    animation: `,` 2.5s ease infinite;
    animation-delay: `,`ms;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var v=n.JellyfishSpinner=function(c){var f=c.size,h=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:f,sizeUnit:b},function(S){for(var x=S.countBalls,E=S.color,_=S.size,C=S.sizeUnit,k=[],z=0,R=0;R<x;R++)k.push(a.default.createElement(y,{color:E,size:_,countRings:x,key:z.toString(),index:R,sizeUnit:C})),z++;return k}({countBalls:6,color:h,size:f,sizeUnit:b}))},w=d.default.div.withConfig({displayName:"jellyfish__Wrapper",componentId:"qquojd-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),y=d.default.div.withConfig({displayName:"jellyfish__Ring",componentId:"qquojd-1"})(s,function(c){return""+c.index*(c.size/c.countRings)+c.sizeUnit},function(c){return""+c.index*(c.size/c.countRings)/2+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,"translateY("+-c.size/5+c.sizeUnit+");","translateY("+c.size/4+c.sizeUnit+")","translateY("+-c.size/5+c.sizeUnit+")")},function(c){return 100*c.index});v.defaultProps={loading:!0,size:60,color:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.TraceSpinner=void 0;var i=w([`
    0% {
        border: `,""," solid ",`;
    }
    25% {
        border: `,""," solid ",`;
    }
    50% {
        border: `,""," solid ",`;
    }
    100% {
        border: `,""," solid ",`;
    }
`],[`
    0% {
        border: `,""," solid ",`;
    }
    25% {
        border: `,""," solid ",`;
    }
    50% {
        border: `,""," solid ",`;
    }
    100% {
        border: `,""," solid ",`;
    }
`]),o=w([`
    25% {
        transform: translate(`,"",`, 0);
    }
    50% {
        transform: translate(`,"",", ","",`);
    }
    75% {
        transform: translate(0, `,"",`);
    }
    100% {
        transform: translate(0, 0);
    }
`],[`
    25% {
        transform: translate(`,"",`, 0);
    }
    50% {
        transform: translate(`,"",", ","",`);
    }
    75% {
        transform: translate(0, `,"",`);
    }
    100% {
        transform: translate(0, 0);
    }
`]),s=w([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    transform: rotate(45deg);
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    transform: rotate(45deg);
`]),a=w([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: `," solid ",`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: `," solid ",`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    animation-delay: `,`s;
`]),l=w([`
    top: 0;
    left: 0;
    border-color: `,`;
    background-color: `,`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite;
    z-index: 10;
`],[`
    top: 0;
    left: 0;
    border-color: `,`;
    background-color: `,`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite;
    z-index: 10;
`]),u=v(r(0)),d=v(r(1)),p=r(2),m=v(p);function v(g){return g&&g.__esModule?g:{default:g}}function w(g,b){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(b)}}))}var y=n.TraceSpinner=function(g){var b=g.size,S=g.frontColor,x=g.backColor,E=g.loading,_=g.sizeUnit;return E&&u.default.createElement(c,{size:b,sizeUnit:_},function(C){for(var k=C.countBalls,z=C.frontColor,R=C.backColor,U=C.size,V=C.sizeUnit,O=[],$=[0,1,3,2],j=0,P=0;P<k/2;P++)for(var A=0;A<k/2;A++)O.push(u.default.createElement(f,{frontColor:z,backColor:R,size:U,x:A*(U/2+U/10),y:P*(U/2+U/10),key:$[j].toString(),index:$[j],sizeUnit:V})),j++;return O}({countBalls:4,frontColor:S,backColor:x,size:b,sizeUnit:_}),u.default.createElement(h,{frontColor:S,size:b,sizeUnit:_}))},c=m.default.div.withConfig({displayName:"trace__Wrapper",componentId:"k17r81-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit}),f=m.default.div.withConfig({displayName:"trace__Ball",componentId:"k17r81-1"})(a,function(g){return""+g.y+g.sizeUnit},function(g){return""+g.x+g.sizeUnit},function(g){return""+g.size/5+g.sizeUnit},function(g){return""+g.size/5+g.sizeUnit},function(g){return""+g.size/10+g.sizeUnit},function(g){return g.backColor},function(g){return(0,p.keyframes)(i,g.size/10,g.sizeUnit,g.backColor,g.size/10,g.sizeUnit,g.frontColor,g.size/10,g.sizeUnit,g.backColor,g.size/10,g.sizeUnit,g.backColor)},function(g){return 1*g.index}),h=(0,m.default)(f)(l,function(g){return g.frontColor},function(g){return g.frontColor},function(g){return(0,p.keyframes)(o,g.size/2+g.size/10,g.sizeUnit,g.size/2+g.size/10,g.sizeUnit,g.size/2+g.size/10,g.sizeUnit,g.size/2+g.size/10,g.sizeUnit)});y.defaultProps={loading:!0,size:35,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ClassicSpinner=void 0;var i=m([`
    0% {
        opacity: 1
    }
    100% { 
        opacity: 0;
    }
`],[`
    0% {
        opacity: 1
    }
    100% { 
        opacity: 0;
    }
`]),o=m([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=m([`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    opacity: 0.05;
    transform: `,`
        `,`;
    animation: `," ",`s linear infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    opacity: 0.05;
    transform: `,`
        `,`;
    animation: `," ",`s linear infinite;
    animation-delay: `,`s;
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function m(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var v=(0,u.keyframes)(i),w=n.ClassicSpinner=function(f){var h=f.size,g=f.color,b=f.loading,S=f.sizeUnit,x=h/2;return b&&a.default.createElement(y,{size:h,sizeUnit:S},function(E){for(var _=E.countBars,C=E.color,k=E.size,z=E.barSize,R=E.sizeUnit,U=[],V=0;V<_;V++){var O=360/_*V,$=-k/2;U.push(a.default.createElement(c,{countBars:_,color:C,barSize:z,size:k,rotate:O,translate:$,key:V.toString(),index:V,sizeUnit:R}))}return U}({countBars:16,radius:x,color:g,size:h,sizeUnit:S}))},y=d.default.div.withConfig({displayName:"classic__Wrapper",componentId:"sc-1ycp7u6-0"})(o,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=d.default.div.withConfig({displayName:"classic__Bar",componentId:"sc-1ycp7u6-1"})(s,function(f){return""+f.size/10+f.sizeUnit},function(f){return""+f.size/4+f.sizeUnit},function(f){return f.color},function(f){return"rotate("+f.rotate+"deg)"},function(f){return"translate(0, "+f.translate+f.sizeUnit+")"},v,function(f){return .06*f.countBars},function(f){return .06*f.index});w.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.WhisperSpinner=void 0;var i=v([`
    0% {
        transform: scale(1, 1);
        opacity: 1;
        background-color: `,`;
    }
    100% {
        transform: scale(0, 0);
        opacity: 0;
        background-color: `,`;
    }
`],[`
    0% {
        transform: scale(1, 1);
        opacity: 1;
        background-color: `,`;
    }
    100% {
        transform: scale(0, 0);
        opacity: 0;
        background-color: `,`;
    }
`]),o=v([`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
`]),s=v([`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 10s infinite;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 10s infinite;
`]),a=v([`
    float: left;
    clear: right;
    margin: `,`;
    width: `,`;
    height: `,`;
    border-radius: 2px;
    background-color: `,`;
    animation-name: `,`;
    animation-direction: alternate;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    &:nth-child(1) {
        animation-delay: 200ms;
    }
    &:nth-child(2) {
        animation-delay: 400ms;
    }
    &:nth-child(3) {
        animation-delay: 600ms;
    }
    &:nth-child(4) {
        animation-delay: 400ms;
    }
    &:nth-child(5) {
        animation-delay: 600ms;
    }
    &:nth-child(6) {
        animation-delay: 800ms;
    }
    &:nth-child(7) {
        animation-delay: 600ms;
    }
    &:nth-child(8) {
        animation-delay: 800ms;
    }
    &:nth-child(9) {
        animation-delay: 1s;
    }
`],[`
    float: left;
    clear: right;
    margin: `,`;
    width: `,`;
    height: `,`;
    border-radius: 2px;
    background-color: `,`;
    animation-name: `,`;
    animation-direction: alternate;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    &:nth-child(1) {
        animation-delay: 200ms;
    }
    &:nth-child(2) {
        animation-delay: 400ms;
    }
    &:nth-child(3) {
        animation-delay: 600ms;
    }
    &:nth-child(4) {
        animation-delay: 400ms;
    }
    &:nth-child(5) {
        animation-delay: 600ms;
    }
    &:nth-child(6) {
        animation-delay: 800ms;
    }
    &:nth-child(7) {
        animation-delay: 600ms;
    }
    &:nth-child(8) {
        animation-delay: 800ms;
    }
    &:nth-child(9) {
        animation-delay: 1s;
    }
`]),l=m(r(0)),u=m(r(1)),d=r(2),p=m(d);function m(f){return f&&f.__esModule?f:{default:f}}function v(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var w=n.WhisperSpinner=function(f){var h=f.size,g=f.frontColor,b=f.backColor,S=f.loading,x=f.sizeUnit;return S&&l.default.createElement(y,{size:h,sizeUnit:x},function(E){for(var _=E.countBallsInLine,C=E.frontColor,k=E.backColor,z=E.size,R=E.sizeUnit,U=[],V=0,O=0;O<_;O++)for(var $=0;$<_;$++)U.push(l.default.createElement(c,{frontColor:C,backColor:k,size:z,key:V.toString(),index:V,sizeUnit:R})),V++;return U}({countBallsInLine:3,frontColor:g,backColor:b,size:h,sizeUnit:x}))},y=p.default.div.withConfig({displayName:"whisper__Wrapper",componentId:"k8uff3-0"})(s,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit},function(){return(0,d.keyframes)(o)}),c=p.default.div.withConfig({displayName:"whisper__Ball",componentId:"k8uff3-1"})(a,function(f){return""+f.size/15+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return f.frontColor},function(f){return(0,d.keyframes)(i,f.backColor,f.frontColor)});w.defaultProps={loading:!0,size:50,frontColor:"#4b4c56",backColor:"#00ff89",sizeUnit:"px"},w.propTypes={loading:u.default.bool,size:u.default.number,frontColor:u.default.string,backColor:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MetroSpinner=void 0;var i=v([`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(-360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(-360deg);
    }
`]),o=v([`
    `,`% {
        opacity: 0;
    }
    `,`% {
        opacity: 1;
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    100% {
        transform: `,`;
        opacity: 1;
    }
`],[`
    `,`% {
        opacity: 0;
    }
    `,`% {
        opacity: 1;
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    100% {
        transform: `,`;
        opacity: 1;
    }
`]),s=v([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 3s infinite ease-in;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 3s infinite ease-in;
`]),a=v([`
    position: absolute;
    width: `,`;
    height: `,`;
    animation: `,` 2s infinite linear;
    transform: `,`;
    opacity: 0;
    &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0%;
        width: `,`;
        height: `,`;
        background-color: `,`;
        transform: translateX(-50%);
        border-radius: 50%;
    }
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    animation: `,` 2s infinite linear;
    transform: `,`;
    opacity: 0;
    &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0%;
        width: `,`;
        height: `,`;
        background-color: `,`;
        transform: translateX(-50%);
        border-radius: 50%;
    }
`]),l=m(r(0)),u=m(r(1)),d=r(2),p=m(d);function m(h){return h&&h.__esModule?h:{default:h}}function v(h,g){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(g)}}))}var w=(0,d.keyframes)(i),y=n.MetroSpinner=function(h){var g=h.size,b=h.color,S=h.loading,x=h.sizeUnit,E=g/2,_=g/8;return S&&l.default.createElement(c,{size:g,sizeUnit:x},function(C){for(var k=C.countBalls,z=C.radius,R=C.angle,U=C.color,V=C.size,O=C.ballSize,$=C.sizeUnit,j=[],P=O/2,A=0;A<k;A++){var F=Math.sin(R*A*(Math.PI/180))*z-P,Q=Math.cos(R*A*(Math.PI/180))*z-P;j.push(l.default.createElement(f,{countBalls:k,color:U,ballSize:O,size:V,sizeUnit:$,x:F,y:Q,key:A.toString(),index:A+1}))}return j}({countBalls:9,radius:E,angle:40,color:b,size:g,ballSize:_,sizeUnit:x}))},c=p.default.div.withConfig({displayName:"metro__Wrapper",componentId:"sc-2iqssn-0"})(s,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},w),f=p.default.div.withConfig({displayName:"metro__Ball",componentId:"sc-2iqssn-1"})(a,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},function(h){return(0,d.keyframes)(o,h.size/2/h.countBalls*(h.index-1)/h.size*100,(h.size/2/h.countBalls+1e-4)*(h.index-1)/h.size*100,"rotate("+(0-360/h.countBalls*(h.index-2))+"deg)",(h.size/2/h.countBalls*(h.index-0)+2)/h.size*100,"rotate("+(0-360/h.countBalls*(h.index-1))+"deg)",(h.size/2+h.size/2/h.countBalls*(h.index-0)+2)/h.size*100,"rotate("+(0-360/h.countBalls*(h.index-1))+"deg)","rotate("+(0-360/h.countBalls*(h.countBalls-1))+"deg)")},function(h){return"rotate("+360/h.countBalls*h.index+"deg)"},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.color});y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}}]))})($E);const $O=()=>N("div",{className:"h-screen w-screen bg-main-bg dark:bg-main-dark-bg flex justify-center items-center",children:N($E.GuardSpinner,{})});var F0={},br={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(br);var sp={};function L(){return L=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},L.apply(this,arguments)}function fc(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function Dr(t,e,n={clone:!0}){const r=n.clone?L({},t):t;return fc(t)&&fc(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(fc(e[i])&&i in t&&fc(t[i])?r[i]=Dr(t[i],e[i],n):r[i]=e[i])}),r}function Ws(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}function ze(t){if(typeof t!="string")throw new Error(Ws(7));return t.charAt(0).toUpperCase()+t.slice(1)}function DO(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function MO(t,e=166){let n;function r(...i){const o=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(o,e)}return r.clear=()=>{clearTimeout(n)},r}function LO(t,e){return()=>null}function jO(t,e){return T.exports.isValidElement(t)&&e.indexOf(t.type.muiName)!==-1}function Cs(t){return t&&t.ownerDocument||document}function FO(t){return Cs(t).defaultView||window}function BO(t,e){return()=>null}function _f(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const VO=typeof window<"u"?T.exports.useLayoutEffect:T.exports.useEffect,Hs=VO;let fw=0;function WO(t){const[e,n]=T.exports.useState(t),r=t||e;return T.exports.useEffect(()=>{e==null&&(fw+=1,n(`mui-${fw}`))},[e]),r}const dw=As["useId"];function ik(t){if(dw!==void 0){const e=dw();return t!=null?t:e}return WO(t)}function HO(t,e,n,r,i){return null}function ok({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=T.exports.useRef(t!==void 0),[o,s]=T.exports.useState(e),a=i?t:o,l=T.exports.useCallback(u=>{i||s(u)},[]);return[a,l]}function B0(t){const e=T.exports.useRef(t);return Hs(()=>{e.current=t}),T.exports.useCallback((...n)=>(0,e.current)(...n),[])}function Ai(...t){return T.exports.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{_f(n,e)})},t)}let _d=!0,Nm=!1,hw;const qO={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function KO(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&qO[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function GO(t){t.metaKey||t.altKey||t.ctrlKey||(_d=!0)}function ap(){_d=!1}function YO(){this.visibilityState==="hidden"&&Nm&&(_d=!0)}function XO(t){t.addEventListener("keydown",GO,!0),t.addEventListener("mousedown",ap,!0),t.addEventListener("pointerdown",ap,!0),t.addEventListener("touchstart",ap,!0),t.addEventListener("visibilitychange",YO,!0)}function QO(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return _d||KO(e)}function sk(){const t=T.exports.useCallback(i=>{i!=null&&XO(i.ownerDocument)},[]),e=T.exports.useRef(!1);function n(){return e.current?(Nm=!0,window.clearTimeout(hw),hw=window.setTimeout(()=>{Nm=!1},100),e.current=!1,!0):!1}function r(i){return QO(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}const JO=t=>{const e=T.exports.useRef({});return T.exports.useEffect(()=>{e.current=t}),e.current},ak=JO;function ZO(t,e){const n=L({},e);return Object.keys(t).forEach(r=>{n[r]===void 0&&(n[r]=t[r])}),n}function ca(t,e,n){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((o,s)=>(s&&(o.push(e(s)),n&&n[s]&&o.push(n[s])),o),[]).join(" ")}),r}const pw=t=>t,eR=()=>{let t=pw;return{configure(e){t=e},generate(e){return t(e)},reset(){t=pw}}},tR=eR(),lk=tR,nR={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function Do(t,e,n="Mui"){const r=nR[e];return r?`${n}-${r}`:`${lk.generate(t)}-${e}`}function fa(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=Do(t,i,n)}),r}function Je(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function uk(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=uk(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function ur(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=uk(t))&&(r&&(r+=" "),r+=e);return r}function ck(t){return typeof t=="string"}function qa(t,e,n){return ck(t)?e:L({},e,{ownerState:L({},e.ownerState,n)})}function rR(t,e=[]){if(t===void 0)return{};const n={};return Object.keys(t).filter(r=>r.match(/^on[A-Z]/)&&typeof t[r]=="function"&&!e.includes(r)).forEach(r=>{n[r]=t[r]}),n}function iR(t,e){return typeof t=="function"?t(e):t}function mw(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(n=>!(n.match(/^on[A-Z]/)&&typeof t[n]=="function")).forEach(n=>{e[n]=t[n]}),e}function oR(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:o}=t;if(!e){const v=ur(i==null?void 0:i.className,r==null?void 0:r.className,o,n==null?void 0:n.className),w=L({},n==null?void 0:n.style,i==null?void 0:i.style,r==null?void 0:r.style),y=L({},n,i,r);return v.length>0&&(y.className=v),Object.keys(w).length>0&&(y.style=w),{props:y,internalRef:void 0}}const s=rR(L({},i,r)),a=mw(r),l=mw(i),u=e(s),d=ur(u==null?void 0:u.className,n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),p=L({},u==null?void 0:u.style,n==null?void 0:n.style,i==null?void 0:i.style,r==null?void 0:r.style),m=L({},u,n,l,a);return d.length>0&&(m.className=d),Object.keys(p).length>0&&(m.style=p),{props:m,internalRef:u.ref}}const sR=["elementType","externalSlotProps","ownerState"];function Am(t){var e;const{elementType:n,externalSlotProps:r,ownerState:i}=t,o=Je(t,sR),s=iR(r,i),{props:a,internalRef:l}=oR(L({},o,{externalSlotProps:s})),u=Ai(l,s==null?void 0:s.ref,(e=t.additionalProps)==null?void 0:e.ref);return qa(n,L({},a,{ref:u}),i)}function aR(t){const{badgeContent:e,invisible:n=!1,max:r=99,showZero:i=!1}=t,o=ak({badgeContent:e,max:r});let s=n;n===!1&&e===0&&!i&&(s=!0);const{badgeContent:a,max:l=r}=s?o:t,u=a&&Number(a)>l?`${l}+`:a;return{badgeContent:a,invisible:s,max:l,displayValue:u}}function lR(t){return Do("MuiBadge",t)}fa("MuiBadge",["root","badge","invisible"]);const uR=["badgeContent","component","children","invisible","max","slotProps","slots","showZero"],cR=t=>{const{invisible:e}=t;return ca({root:["root"],badge:["badge",e&&"invisible"]},lR,void 0)},fR=T.exports.forwardRef(function(e,n){const{component:r,children:i,max:o=99,slotProps:s={},slots:a={},showZero:l=!1}=e,u=Je(e,uR),{badgeContent:d,max:p,displayValue:m,invisible:v}=aR(L({},e,{max:o})),w=L({},e,{badgeContent:d,invisible:v,max:p,showZero:l}),y=cR(w),c=r||a.root||"span",f=Am({elementType:c,externalSlotProps:s.root,externalForwardedProps:u,additionalProps:{ref:n},ownerState:w,className:y.root}),h=a.badge||"span",g=Am({elementType:h,externalSlotProps:s.badge,ownerState:w,className:y.badge});return je(c,L({},f,{children:[i,N(h,L({},g,{children:m}))]}))}),dR=fR;function gw(t){return t.substring(2).toLowerCase()}function hR(t,e){return e.documentElement.clientWidth<t.clientX||e.documentElement.clientHeight<t.clientY}function V0(t){const{children:e,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:i,touchEvent:o="onTouchEnd"}=t,s=T.exports.useRef(!1),a=T.exports.useRef(null),l=T.exports.useRef(!1),u=T.exports.useRef(!1);T.exports.useEffect(()=>(setTimeout(()=>{l.current=!0},0),()=>{l.current=!1}),[]);const d=Ai(e.ref,a),p=B0(w=>{const y=u.current;u.current=!1;const c=Cs(a.current);if(!l.current||!a.current||"clientX"in w&&hR(w,c))return;if(s.current){s.current=!1;return}let f;w.composedPath?f=w.composedPath().indexOf(a.current)>-1:f=!c.documentElement.contains(w.target)||a.current.contains(w.target),!f&&(n||!y)&&i(w)}),m=w=>y=>{u.current=!0;const c=e.props[w];c&&c(y)},v={ref:d};return o!==!1&&(v[o]=m(o)),T.exports.useEffect(()=>{if(o!==!1){const w=gw(o),y=Cs(a.current),c=()=>{s.current=!0};return y.addEventListener(w,p),y.addEventListener("touchmove",c),()=>{y.removeEventListener(w,p),y.removeEventListener("touchmove",c)}}},[p,o]),r!==!1&&(v[r]=m(r)),T.exports.useEffect(()=>{if(r!==!1){const w=gw(r),y=Cs(a.current);return y.addEventListener(w,p),()=>{y.removeEventListener(w,p)}}},[p,r]),N(T.exports.Fragment,{children:T.exports.cloneElement(e,v)})}var un="top",Mn="bottom",Ln="right",cn="left",W0="auto",hu=[un,Mn,Ln,cn],qs="start",Dl="end",pR="clippingParents",fk="viewport",Ua="popper",mR="reference",vw=hu.reduce(function(t,e){return t.concat([e+"-"+qs,e+"-"+Dl])},[]),dk=[].concat(hu,[W0]).reduce(function(t,e){return t.concat([e,e+"-"+qs,e+"-"+Dl])},[]),gR="beforeRead",vR="read",yR="afterRead",wR="beforeMain",bR="main",SR="afterMain",xR="beforeWrite",ER="write",kR="afterWrite",_R=[gR,vR,yR,wR,bR,SR,xR,ER,kR];function vr(t){return t?(t.nodeName||"").toLowerCase():null}function jn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function zo(t){var e=jn(t).Element;return t instanceof e||t instanceof Element}function Un(t){var e=jn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function H0(t){if(typeof ShadowRoot>"u")return!1;var e=jn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function CR(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},i=e.attributes[n]||{},o=e.elements[n];!Un(o)||!vr(o)||(Object.assign(o.style,r),Object.keys(i).forEach(function(s){var a=i[s];a===!1?o.removeAttribute(s):o.setAttribute(s,a===!0?"":a)}))})}function TR(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var i=e.elements[r],o=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),a=s.reduce(function(l,u){return l[u]="",l},{});!Un(i)||!vr(i)||(Object.assign(i.style,a),Object.keys(o).forEach(function(l){i.removeAttribute(l)}))})}}const zR={name:"applyStyles",enabled:!0,phase:"write",fn:CR,effect:TR,requires:["computeStyles"]};function dr(t){return t.split("-")[0]}var go=Math.max,Cf=Math.min,Ks=Math.round;function Um(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function hk(){return!/^((?!chrome|android).)*safari/i.test(Um())}function Gs(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,o=1;e&&Un(t)&&(i=t.offsetWidth>0&&Ks(r.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Ks(r.height)/t.offsetHeight||1);var s=zo(t)?jn(t):window,a=s.visualViewport,l=!hk()&&n,u=(r.left+(l&&a?a.offsetLeft:0))/i,d=(r.top+(l&&a?a.offsetTop:0))/o,p=r.width/i,m=r.height/o;return{width:p,height:m,top:d,right:u+p,bottom:d+m,left:u,x:u,y:d}}function q0(t){var e=Gs(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function pk(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&H0(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Wr(t){return jn(t).getComputedStyle(t)}function IR(t){return["table","td","th"].indexOf(vr(t))>=0}function Fi(t){return((zo(t)?t.ownerDocument:t.document)||window.document).documentElement}function Cd(t){return vr(t)==="html"?t:t.assignedSlot||t.parentNode||(H0(t)?t.host:null)||Fi(t)}function yw(t){return!Un(t)||Wr(t).position==="fixed"?null:t.offsetParent}function PR(t){var e=/firefox/i.test(Um()),n=/Trident/i.test(Um());if(n&&Un(t)){var r=Wr(t);if(r.position==="fixed")return null}var i=Cd(t);for(H0(i)&&(i=i.host);Un(i)&&["html","body"].indexOf(vr(i))<0;){var o=Wr(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function pu(t){for(var e=jn(t),n=yw(t);n&&IR(n)&&Wr(n).position==="static";)n=yw(n);return n&&(vr(n)==="html"||vr(n)==="body"&&Wr(n).position==="static")?e:n||PR(t)||e}function K0(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ll(t,e,n){return go(t,Cf(e,n))}function OR(t,e,n){var r=ll(t,e,n);return r>n?n:r}function mk(){return{top:0,right:0,bottom:0,left:0}}function gk(t){return Object.assign({},mk(),t)}function vk(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var RR=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,gk(typeof e!="number"?e:vk(e,hu))};function NR(t){var e,n=t.state,r=t.name,i=t.options,o=n.elements.arrow,s=n.modifiersData.popperOffsets,a=dr(n.placement),l=K0(a),u=[cn,Ln].indexOf(a)>=0,d=u?"height":"width";if(!(!o||!s)){var p=RR(i.padding,n),m=q0(o),v=l==="y"?un:cn,w=l==="y"?Mn:Ln,y=n.rects.reference[d]+n.rects.reference[l]-s[l]-n.rects.popper[d],c=s[l]-n.rects.reference[l],f=pu(o),h=f?l==="y"?f.clientHeight||0:f.clientWidth||0:0,g=y/2-c/2,b=p[v],S=h-m[d]-p[w],x=h/2-m[d]/2+g,E=ll(b,x,S),_=l;n.modifiersData[r]=(e={},e[_]=E,e.centerOffset=E-x,e)}}function AR(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||!pk(e.elements.popper,i)||(e.elements.arrow=i))}const UR={name:"arrow",enabled:!0,phase:"main",fn:NR,effect:AR,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ys(t){return t.split("-")[1]}var $R={top:"auto",right:"auto",bottom:"auto",left:"auto"};function DR(t){var e=t.x,n=t.y,r=window,i=r.devicePixelRatio||1;return{x:Ks(e*i)/i||0,y:Ks(n*i)/i||0}}function ww(t){var e,n=t.popper,r=t.popperRect,i=t.placement,o=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,u=t.adaptive,d=t.roundOffsets,p=t.isFixed,m=s.x,v=m===void 0?0:m,w=s.y,y=w===void 0?0:w,c=typeof d=="function"?d({x:v,y}):{x:v,y};v=c.x,y=c.y;var f=s.hasOwnProperty("x"),h=s.hasOwnProperty("y"),g=cn,b=un,S=window;if(u){var x=pu(n),E="clientHeight",_="clientWidth";if(x===jn(n)&&(x=Fi(n),Wr(x).position!=="static"&&a==="absolute"&&(E="scrollHeight",_="scrollWidth")),x=x,i===un||(i===cn||i===Ln)&&o===Dl){b=Mn;var C=p&&x===S&&S.visualViewport?S.visualViewport.height:x[E];y-=C-r.height,y*=l?1:-1}if(i===cn||(i===un||i===Mn)&&o===Dl){g=Ln;var k=p&&x===S&&S.visualViewport?S.visualViewport.width:x[_];v-=k-r.width,v*=l?1:-1}}var z=Object.assign({position:a},u&&$R),R=d===!0?DR({x:v,y}):{x:v,y};if(v=R.x,y=R.y,l){var U;return Object.assign({},z,(U={},U[b]=h?"0":"",U[g]=f?"0":"",U.transform=(S.devicePixelRatio||1)<=1?"translate("+v+"px, "+y+"px)":"translate3d("+v+"px, "+y+"px, 0)",U))}return Object.assign({},z,(e={},e[b]=h?y+"px":"",e[g]=f?v+"px":"",e.transform="",e))}function MR(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,o=n.adaptive,s=o===void 0?!0:o,a=n.roundOffsets,l=a===void 0?!0:a,u={placement:dr(e.placement),variation:Ys(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ww(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ww(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const LR={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:MR,data:{}};var dc={passive:!0};function jR(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,o=i===void 0?!0:i,s=r.resize,a=s===void 0?!0:s,l=jn(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&u.forEach(function(d){d.addEventListener("scroll",n.update,dc)}),a&&l.addEventListener("resize",n.update,dc),function(){o&&u.forEach(function(d){d.removeEventListener("scroll",n.update,dc)}),a&&l.removeEventListener("resize",n.update,dc)}}const FR={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:jR,data:{}};var BR={left:"right",right:"left",bottom:"top",top:"bottom"};function $c(t){return t.replace(/left|right|bottom|top/g,function(e){return BR[e]})}var VR={start:"end",end:"start"};function bw(t){return t.replace(/start|end/g,function(e){return VR[e]})}function G0(t){var e=jn(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Y0(t){return Gs(Fi(t)).left+G0(t).scrollLeft}function WR(t,e){var n=jn(t),r=Fi(t),i=n.visualViewport,o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;var u=hk();(u||!u&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a+Y0(t),y:l}}function HR(t){var e,n=Fi(t),r=G0(t),i=(e=t.ownerDocument)==null?void 0:e.body,o=go(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=go(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+Y0(t),l=-r.scrollTop;return Wr(i||n).direction==="rtl"&&(a+=go(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:a,y:l}}function X0(t){var e=Wr(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function yk(t){return["html","body","#document"].indexOf(vr(t))>=0?t.ownerDocument.body:Un(t)&&X0(t)?t:yk(Cd(t))}function ul(t,e){var n;e===void 0&&(e=[]);var r=yk(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),o=jn(r),s=i?[o].concat(o.visualViewport||[],X0(r)?r:[]):r,a=e.concat(s);return i?a:a.concat(ul(Cd(s)))}function $m(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function qR(t,e){var n=Gs(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Sw(t,e,n){return e===fk?$m(WR(t,n)):zo(e)?qR(e,n):$m(HR(Fi(t)))}function KR(t){var e=ul(Cd(t)),n=["absolute","fixed"].indexOf(Wr(t).position)>=0,r=n&&Un(t)?pu(t):t;return zo(r)?e.filter(function(i){return zo(i)&&pk(i,r)&&vr(i)!=="body"}):[]}function GR(t,e,n,r){var i=e==="clippingParents"?KR(t):[].concat(e),o=[].concat(i,[n]),s=o[0],a=o.reduce(function(l,u){var d=Sw(t,u,r);return l.top=go(d.top,l.top),l.right=Cf(d.right,l.right),l.bottom=Cf(d.bottom,l.bottom),l.left=go(d.left,l.left),l},Sw(t,s,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function wk(t){var e=t.reference,n=t.element,r=t.placement,i=r?dr(r):null,o=r?Ys(r):null,s=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case un:l={x:s,y:e.y-n.height};break;case Mn:l={x:s,y:e.y+e.height};break;case Ln:l={x:e.x+e.width,y:a};break;case cn:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var u=i?K0(i):null;if(u!=null){var d=u==="y"?"height":"width";switch(o){case qs:l[u]=l[u]-(e[d]/2-n[d]/2);break;case Dl:l[u]=l[u]+(e[d]/2-n[d]/2);break}}return l}function Ml(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,o=n.strategy,s=o===void 0?t.strategy:o,a=n.boundary,l=a===void 0?pR:a,u=n.rootBoundary,d=u===void 0?fk:u,p=n.elementContext,m=p===void 0?Ua:p,v=n.altBoundary,w=v===void 0?!1:v,y=n.padding,c=y===void 0?0:y,f=gk(typeof c!="number"?c:vk(c,hu)),h=m===Ua?mR:Ua,g=t.rects.popper,b=t.elements[w?h:m],S=GR(zo(b)?b:b.contextElement||Fi(t.elements.popper),l,d,s),x=Gs(t.elements.reference),E=wk({reference:x,element:g,strategy:"absolute",placement:i}),_=$m(Object.assign({},g,E)),C=m===Ua?_:x,k={top:S.top-C.top+f.top,bottom:C.bottom-S.bottom+f.bottom,left:S.left-C.left+f.left,right:C.right-S.right+f.right},z=t.modifiersData.offset;if(m===Ua&&z){var R=z[i];Object.keys(k).forEach(function(U){var V=[Ln,Mn].indexOf(U)>=0?1:-1,O=[un,Mn].indexOf(U)>=0?"y":"x";k[U]+=R[O]*V})}return k}function YR(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?dk:l,d=Ys(r),p=d?a?vw:vw.filter(function(w){return Ys(w)===d}):hu,m=p.filter(function(w){return u.indexOf(w)>=0});m.length===0&&(m=p);var v=m.reduce(function(w,y){return w[y]=Ml(t,{placement:y,boundary:i,rootBoundary:o,padding:s})[dr(y)],w},{});return Object.keys(v).sort(function(w,y){return v[w]-v[y]})}function XR(t){if(dr(t)===W0)return[];var e=$c(t);return[bw(t),e,bw(e)]}function QR(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,o=i===void 0?!0:i,s=n.altAxis,a=s===void 0?!0:s,l=n.fallbackPlacements,u=n.padding,d=n.boundary,p=n.rootBoundary,m=n.altBoundary,v=n.flipVariations,w=v===void 0?!0:v,y=n.allowedAutoPlacements,c=e.options.placement,f=dr(c),h=f===c,g=l||(h||!w?[$c(c)]:XR(c)),b=[c].concat(g).reduce(function(ot,$e){return ot.concat(dr($e)===W0?YR(e,{placement:$e,boundary:d,rootBoundary:p,padding:u,flipVariations:w,allowedAutoPlacements:y}):$e)},[]),S=e.rects.reference,x=e.rects.popper,E=new Map,_=!0,C=b[0],k=0;k<b.length;k++){var z=b[k],R=dr(z),U=Ys(z)===qs,V=[un,Mn].indexOf(R)>=0,O=V?"width":"height",$=Ml(e,{placement:z,boundary:d,rootBoundary:p,altBoundary:m,padding:u}),j=V?U?Ln:cn:U?Mn:un;S[O]>x[O]&&(j=$c(j));var P=$c(j),A=[];if(o&&A.push($[R]<=0),a&&A.push($[j]<=0,$[P]<=0),A.every(function(ot){return ot})){C=z,_=!1;break}E.set(z,A)}if(_)for(var F=w?3:1,Q=function($e){var De=b.find(function(Ve){var Ye=E.get(Ve);if(Ye)return Ye.slice(0,$e).every(function(Me){return Me})});if(De)return C=De,"break"},se=F;se>0;se--){var Ge=Q(se);if(Ge==="break")break}e.placement!==C&&(e.modifiersData[r]._skip=!0,e.placement=C,e.reset=!0)}}const JR={name:"flip",enabled:!0,phase:"main",fn:QR,requiresIfExists:["offset"],data:{_skip:!1}};function xw(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Ew(t){return[un,Ln,Mn,cn].some(function(e){return t[e]>=0})}function ZR(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,o=e.modifiersData.preventOverflow,s=Ml(e,{elementContext:"reference"}),a=Ml(e,{altBoundary:!0}),l=xw(s,r),u=xw(a,i,o),d=Ew(l),p=Ew(u);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:d,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":p})}const eN={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ZR};function tN(t,e,n){var r=dr(t),i=[cn,un].indexOf(r)>=0?-1:1,o=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,s=o[0],a=o[1];return s=s||0,a=(a||0)*i,[cn,Ln].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function nN(t){var e=t.state,n=t.options,r=t.name,i=n.offset,o=i===void 0?[0,0]:i,s=dk.reduce(function(d,p){return d[p]=tN(p,e.rects,o),d},{}),a=s[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=s}const rN={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:nN};function iN(t){var e=t.state,n=t.name;e.modifiersData[n]=wk({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const oN={name:"popperOffsets",enabled:!0,phase:"read",fn:iN,data:{}};function sN(t){return t==="x"?"y":"x"}function aN(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,o=i===void 0?!0:i,s=n.altAxis,a=s===void 0?!1:s,l=n.boundary,u=n.rootBoundary,d=n.altBoundary,p=n.padding,m=n.tether,v=m===void 0?!0:m,w=n.tetherOffset,y=w===void 0?0:w,c=Ml(e,{boundary:l,rootBoundary:u,padding:p,altBoundary:d}),f=dr(e.placement),h=Ys(e.placement),g=!h,b=K0(f),S=sN(b),x=e.modifiersData.popperOffsets,E=e.rects.reference,_=e.rects.popper,C=typeof y=="function"?y(Object.assign({},e.rects,{placement:e.placement})):y,k=typeof C=="number"?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),z=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,R={x:0,y:0};if(!!x){if(o){var U,V=b==="y"?un:cn,O=b==="y"?Mn:Ln,$=b==="y"?"height":"width",j=x[b],P=j+c[V],A=j-c[O],F=v?-_[$]/2:0,Q=h===qs?E[$]:_[$],se=h===qs?-_[$]:-E[$],Ge=e.elements.arrow,ot=v&&Ge?q0(Ge):{width:0,height:0},$e=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:mk(),De=$e[V],Ve=$e[O],Ye=ll(0,E[$],ot[$]),Me=g?E[$]/2-F-Ye-De-k.mainAxis:Q-Ye-De-k.mainAxis,Qn=g?-E[$]/2+F+Ye+Ve+k.mainAxis:se+Ye+Ve+k.mainAxis,We=e.elements.arrow&&pu(e.elements.arrow),ya=We?b==="y"?We.clientTop||0:We.clientLeft||0:0,Yt=(U=z==null?void 0:z[b])!=null?U:0,hn=j+Me-Yt-ya,jt=j+Qn-Yt,xr=ll(v?Cf(P,hn):P,j,v?go(A,jt):A);x[b]=xr,R[b]=xr-j}if(a){var pn,Tt=b==="x"?un:cn,Jn=b==="x"?Mn:Ln,Xt=x[S],Qt=S==="y"?"height":"width",Fn=Xt+c[Tt],Zn=Xt-c[Jn],er=[un,cn].indexOf(f)!==-1,Ft=(pn=z==null?void 0:z[S])!=null?pn:0,Er=er?Fn:Xt-E[Qt]-_[Qt]-Ft+k.altAxis,Gi=er?Xt+E[Qt]+_[Qt]-Ft-k.altAxis:Zn,ti=v&&er?OR(Er,Xt,Gi):ll(v?Er:Fn,Xt,v?Gi:Zn);x[S]=ti,R[S]=ti-Xt}e.modifiersData[r]=R}}const lN={name:"preventOverflow",enabled:!0,phase:"main",fn:aN,requiresIfExists:["offset"]};function uN(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function cN(t){return t===jn(t)||!Un(t)?G0(t):uN(t)}function fN(t){var e=t.getBoundingClientRect(),n=Ks(e.width)/t.offsetWidth||1,r=Ks(e.height)/t.offsetHeight||1;return n!==1||r!==1}function dN(t,e,n){n===void 0&&(n=!1);var r=Un(e),i=Un(e)&&fN(e),o=Fi(e),s=Gs(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((vr(e)!=="body"||X0(o))&&(a=cN(e)),Un(e)?(l=Gs(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):o&&(l.x=Y0(o))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function hN(t){var e=new Map,n=new Set,r=[];t.forEach(function(o){e.set(o.name,o)});function i(o){n.add(o.name);var s=[].concat(o.requires||[],o.requiresIfExists||[]);s.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),r.push(o)}return t.forEach(function(o){n.has(o.name)||i(o)}),r}function pN(t){var e=hN(t);return _R.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function mN(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function gN(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var kw={placement:"bottom",modifiers:[],strategy:"absolute"};function _w(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function vN(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,o=i===void 0?kw:i;return function(a,l,u){u===void 0&&(u=o);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},kw,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},p=[],m=!1,v={state:d,setOptions:function(f){var h=typeof f=="function"?f(d.options):f;y(),d.options=Object.assign({},o,d.options,h),d.scrollParents={reference:zo(a)?ul(a):a.contextElement?ul(a.contextElement):[],popper:ul(l)};var g=pN(gN([].concat(r,d.options.modifiers)));return d.orderedModifiers=g.filter(function(b){return b.enabled}),w(),v.update()},forceUpdate:function(){if(!m){var f=d.elements,h=f.reference,g=f.popper;if(!!_w(h,g)){d.rects={reference:dN(h,pu(g),d.options.strategy==="fixed"),popper:q0(g)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(k){return d.modifiersData[k.name]=Object.assign({},k.data)});for(var b=0;b<d.orderedModifiers.length;b++){if(d.reset===!0){d.reset=!1,b=-1;continue}var S=d.orderedModifiers[b],x=S.fn,E=S.options,_=E===void 0?{}:E,C=S.name;typeof x=="function"&&(d=x({state:d,options:_,name:C,instance:v})||d)}}}},update:mN(function(){return new Promise(function(c){v.forceUpdate(),c(d)})}),destroy:function(){y(),m=!0}};if(!_w(a,l))return v;v.setOptions(u).then(function(c){!m&&u.onFirstUpdate&&u.onFirstUpdate(c)});function w(){d.orderedModifiers.forEach(function(c){var f=c.name,h=c.options,g=h===void 0?{}:h,b=c.effect;if(typeof b=="function"){var S=b({state:d,name:f,instance:v,options:g}),x=function(){};p.push(S||x)}})}function y(){p.forEach(function(c){return c()}),p=[]}return v}}var yN=[FR,oN,LR,zR,rN,JR,lN,UR,eN],wN=vN({defaultModifiers:yN});function bN(t){return typeof t=="function"?t():t}const SN=T.exports.forwardRef(function(e,n){const{children:r,container:i,disablePortal:o=!1}=e,[s,a]=T.exports.useState(null),l=Ai(T.exports.isValidElement(r)?r.ref:null,n);return Hs(()=>{o||a(bN(i)||document.body)},[i,o]),Hs(()=>{if(s&&!o)return _f(n,s),()=>{_f(n,null)}},[n,s,o]),o?T.exports.isValidElement(r)?T.exports.cloneElement(r,{ref:l}):r:N(T.exports.Fragment,{children:s&&Kf.exports.createPortal(r,s)})}),xN=SN;function EN(t){return Do("MuiPopperUnstyled",t)}fa("MuiPopperUnstyled",["root"]);const kN=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],_N=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function CN(t,e){if(e==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function Dm(t){return typeof t=="function"?t():t}const TN=()=>ca({root:["root"]},EN,{}),zN={},IN=T.exports.forwardRef(function(e,n){var r;const{anchorEl:i,children:o,component:s,direction:a,disablePortal:l,modifiers:u,open:d,ownerState:p,placement:m,popperOptions:v,popperRef:w,slotProps:y={},slots:c={},TransitionProps:f}=e,h=Je(e,kN),g=T.exports.useRef(null),b=Ai(g,n),S=T.exports.useRef(null),x=Ai(S,w),E=T.exports.useRef(x);Hs(()=>{E.current=x},[x]),T.exports.useImperativeHandle(w,()=>S.current,[]);const _=CN(m,a),[C,k]=T.exports.useState(_);T.exports.useEffect(()=>{S.current&&S.current.forceUpdate()}),Hs(()=>{if(!i||!d)return;const O=P=>{k(P.placement)};Dm(i);let $=[{name:"preventOverflow",options:{altBoundary:l}},{name:"flip",options:{altBoundary:l}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:P})=>{O(P)}}];u!=null&&($=$.concat(u)),v&&v.modifiers!=null&&($=$.concat(v.modifiers));const j=wN(Dm(i),g.current,L({placement:_},v,{modifiers:$}));return E.current(j),()=>{j.destroy(),E.current(null)}},[i,l,u,d,v,_]);const z={placement:C};f!==null&&(z.TransitionProps=f);const R=TN(),U=(r=s!=null?s:c.root)!=null?r:"div",V=Am({elementType:U,externalSlotProps:y.root,externalForwardedProps:h,additionalProps:{role:"tooltip",ref:b},ownerState:L({},e,p),className:R.root});return N(U,L({},V,{children:typeof o=="function"?o(z):o}))}),PN=T.exports.forwardRef(function(e,n){const{anchorEl:r,children:i,container:o,direction:s="ltr",disablePortal:a=!1,keepMounted:l=!1,modifiers:u,open:d,placement:p="bottom",popperOptions:m=zN,popperRef:v,style:w,transition:y=!1}=e,c=Je(e,_N),[f,h]=T.exports.useState(!0),g=()=>{h(!1)},b=()=>{h(!0)};if(!l&&!d&&(!y||f))return null;const S=o||(r?Cs(Dm(r)).body:void 0);return N(xN,{disablePortal:a,container:S,children:N(IN,L({anchorEl:r,direction:s,disablePortal:a,modifiers:u,ref:n,open:y?!f:d,placement:p,popperOptions:m,popperRef:v},c,{style:L({position:"fixed",top:0,left:0,display:!d&&l&&(!y||f)?"none":null},w),TransitionProps:y?{in:d,onEnter:g,onExited:b}:null,children:i}))})}),ON=PN;function bk(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var RN=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,NN=bk(function(t){return RN.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function AN(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function UN(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var $N=function(){function t(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(UN(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=AN(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Rt="-ms-",Tf="-moz-",ye="-webkit-",Sk="comm",Q0="rule",J0="decl",DN="@import",xk="@keyframes",MN=Math.abs,Td=String.fromCharCode,LN=Object.assign;function jN(t,e){return St(t,0)^45?(((e<<2^St(t,0))<<2^St(t,1))<<2^St(t,2))<<2^St(t,3):0}function Ek(t){return t.trim()}function FN(t,e){return(t=e.exec(t))?t[0]:t}function Se(t,e,n){return t.replace(e,n)}function Mm(t,e){return t.indexOf(e)}function St(t,e){return t.charCodeAt(e)|0}function Ll(t,e,n){return t.slice(e,n)}function ir(t){return t.length}function Z0(t){return t.length}function hc(t,e){return e.push(t),t}function BN(t,e){return t.map(e).join("")}var zd=1,Xs=1,kk=0,dn=0,nt=0,da="";function Id(t,e,n,r,i,o,s){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:zd,column:Xs,length:s,return:""}}function $a(t,e){return LN(Id("",null,null,"",null,null,0),t,{length:-t.length},e)}function VN(){return nt}function WN(){return nt=dn>0?St(da,--dn):0,Xs--,nt===10&&(Xs=1,zd--),nt}function bn(){return nt=dn<kk?St(da,dn++):0,Xs++,nt===10&&(Xs=1,zd++),nt}function hr(){return St(da,dn)}function Dc(){return dn}function mu(t,e){return Ll(da,t,e)}function jl(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _k(t){return zd=Xs=1,kk=ir(da=t),dn=0,[]}function Ck(t){return da="",t}function Mc(t){return Ek(mu(dn-1,Lm(t===91?t+2:t===40?t+1:t)))}function HN(t){for(;(nt=hr())&&nt<33;)bn();return jl(t)>2||jl(nt)>3?"":" "}function qN(t,e){for(;--e&&bn()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return mu(t,Dc()+(e<6&&hr()==32&&bn()==32))}function Lm(t){for(;bn();)switch(nt){case t:return dn;case 34:case 39:t!==34&&t!==39&&Lm(nt);break;case 40:t===41&&Lm(t);break;case 92:bn();break}return dn}function KN(t,e){for(;bn()&&t+nt!==47+10;)if(t+nt===42+42&&hr()===47)break;return"/*"+mu(e,dn-1)+"*"+Td(t===47?t:bn())}function GN(t){for(;!jl(hr());)bn();return mu(t,dn)}function YN(t){return Ck(Lc("",null,null,null,[""],t=_k(t),0,[0],t))}function Lc(t,e,n,r,i,o,s,a,l){for(var u=0,d=0,p=s,m=0,v=0,w=0,y=1,c=1,f=1,h=0,g="",b=i,S=o,x=r,E=g;c;)switch(w=h,h=bn()){case 40:if(w!=108&&St(E,p-1)==58){Mm(E+=Se(Mc(h),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:E+=Mc(h);break;case 9:case 10:case 13:case 32:E+=HN(w);break;case 92:E+=qN(Dc()-1,7);continue;case 47:switch(hr()){case 42:case 47:hc(XN(KN(bn(),Dc()),e,n),l);break;default:E+="/"}break;case 123*y:a[u++]=ir(E)*f;case 125*y:case 59:case 0:switch(h){case 0:case 125:c=0;case 59+d:v>0&&ir(E)-p&&hc(v>32?Tw(E+";",r,n,p-1):Tw(Se(E," ","")+";",r,n,p-2),l);break;case 59:E+=";";default:if(hc(x=Cw(E,e,n,u,d,i,a,g,b=[],S=[],p),o),h===123)if(d===0)Lc(E,e,x,x,b,o,p,a,S);else switch(m===99&&St(E,3)===110?100:m){case 100:case 109:case 115:Lc(t,x,x,r&&hc(Cw(t,x,x,0,0,i,a,g,i,b=[],p),S),i,S,p,a,r?b:S);break;default:Lc(E,x,x,x,[""],S,0,a,S)}}u=d=v=0,y=f=1,g=E="",p=s;break;case 58:p=1+ir(E),v=w;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&WN()==125)continue}switch(E+=Td(h),h*y){case 38:f=d>0?1:(E+="\f",-1);break;case 44:a[u++]=(ir(E)-1)*f,f=1;break;case 64:hr()===45&&(E+=Mc(bn())),m=hr(),d=p=ir(g=E+=GN(Dc())),h++;break;case 45:w===45&&ir(E)==2&&(y=0)}}return o}function Cw(t,e,n,r,i,o,s,a,l,u,d){for(var p=i-1,m=i===0?o:[""],v=Z0(m),w=0,y=0,c=0;w<r;++w)for(var f=0,h=Ll(t,p+1,p=MN(y=s[w])),g=t;f<v;++f)(g=Ek(y>0?m[f]+" "+h:Se(h,/&\f/g,m[f])))&&(l[c++]=g);return Id(t,e,n,i===0?Q0:a,l,u,d)}function XN(t,e,n){return Id(t,e,n,Sk,Td(VN()),Ll(t,2,-2),0)}function Tw(t,e,n,r){return Id(t,e,n,J0,Ll(t,0,r),Ll(t,r+1,-1),r)}function Ts(t,e){for(var n="",r=Z0(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function QN(t,e,n,r){switch(t.type){case DN:case J0:return t.return=t.return||t.value;case Sk:return"";case xk:return t.return=t.value+"{"+Ts(t.children,r)+"}";case Q0:t.value=t.props.join(",")}return ir(n=Ts(t.children,r))?t.return=t.value+"{"+n+"}":""}function JN(t){var e=Z0(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function ZN(t){return function(e){e.root||(e=e.return)&&t(e)}}var eA=function(e,n,r){for(var i=0,o=0;i=o,o=hr(),i===38&&o===12&&(n[r]=1),!jl(o);)bn();return mu(e,dn)},tA=function(e,n){var r=-1,i=44;do switch(jl(i)){case 0:i===38&&hr()===12&&(n[r]=1),e[r]+=eA(dn-1,n,r);break;case 2:e[r]+=Mc(i);break;case 4:if(i===44){e[++r]=hr()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Td(i)}while(i=bn());return e},nA=function(e,n){return Ck(tA(_k(e),n))},zw=new WeakMap,rA=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!zw.get(r))&&!i){zw.set(e,!0);for(var o=[],s=nA(n,o),a=r.props,l=0,u=0;l<s.length;l++)for(var d=0;d<a.length;d++,u++)e.props[u]=o[l]?s[l].replace(/&\f/g,a[d]):a[d]+" "+s[l]}}},iA=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Tk(t,e){switch(jN(t,e)){case 5103:return ye+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+t+Tf+t+Rt+t+t;case 6828:case 4268:return ye+t+Rt+t+t;case 6165:return ye+t+Rt+"flex-"+t+t;case 5187:return ye+t+Se(t,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Rt+"flex-$1$2")+t;case 5443:return ye+t+Rt+"flex-item-"+Se(t,/flex-|-self/,"")+t;case 4675:return ye+t+Rt+"flex-line-pack"+Se(t,/align-content|flex-|-self/,"")+t;case 5548:return ye+t+Rt+Se(t,"shrink","negative")+t;case 5292:return ye+t+Rt+Se(t,"basis","preferred-size")+t;case 6060:return ye+"box-"+Se(t,"-grow","")+ye+t+Rt+Se(t,"grow","positive")+t;case 4554:return ye+Se(t,/([^-])(transform)/g,"$1"+ye+"$2")+t;case 6187:return Se(Se(Se(t,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),t,"")+t;case 5495:case 3959:return Se(t,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return Se(Se(t,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+t+t;case 4095:case 3583:case 4068:case 2532:return Se(t,/(.+)-inline(.+)/,ye+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ir(t)-1-e>6)switch(St(t,e+1)){case 109:if(St(t,e+4)!==45)break;case 102:return Se(t,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+Tf+(St(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Mm(t,"stretch")?Tk(Se(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(St(t,e+1)!==115)break;case 6444:switch(St(t,ir(t)-3-(~Mm(t,"!important")&&10))){case 107:return Se(t,":",":"+ye)+t;case 101:return Se(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ye+(St(t,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Rt+"$2box$3")+t}break;case 5936:switch(St(t,e+11)){case 114:return ye+t+Rt+Se(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ye+t+Rt+Se(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ye+t+Rt+Se(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return ye+t+Rt+t+t}return t}var oA=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case J0:e.return=Tk(e.value,e.length);break;case xk:return Ts([$a(e,{value:Se(e.value,"@","@"+ye)})],i);case Q0:if(e.length)return BN(e.props,function(o){switch(FN(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ts([$a(e,{props:[Se(o,/:(read-\w+)/,":"+Tf+"$1")]})],i);case"::placeholder":return Ts([$a(e,{props:[Se(o,/:(plac\w+)/,":"+ye+"input-$1")]}),$a(e,{props:[Se(o,/:(plac\w+)/,":"+Tf+"$1")]}),$a(e,{props:[Se(o,/:(plac\w+)/,Rt+"input-$1")]})],i)}return""})}},sA=[oA],aA=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var c=y.getAttribute("data-emotion");c.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=e.stylisPlugins||sA,o={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var c=y.getAttribute("data-emotion").split(" "),f=1;f<c.length;f++)o[c[f]]=!0;a.push(y)});var l,u=[rA,iA];{var d,p=[QN,ZN(function(y){d.insert(y)})],m=JN(u.concat(i,p)),v=function(c){return Ts(YN(c),m)};l=function(c,f,h,g){d=h,v(c?c+"{"+f.styles+"}":f.styles),g&&(w.inserted[f.name]=!0)}}var w={key:n,sheet:new $N({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:l};return w.sheet.hydrate(a),w},zk={exports:{}},_e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vt=typeof Symbol=="function"&&Symbol.for,ev=vt?Symbol.for("react.element"):60103,tv=vt?Symbol.for("react.portal"):60106,Pd=vt?Symbol.for("react.fragment"):60107,Od=vt?Symbol.for("react.strict_mode"):60108,Rd=vt?Symbol.for("react.profiler"):60114,Nd=vt?Symbol.for("react.provider"):60109,Ad=vt?Symbol.for("react.context"):60110,nv=vt?Symbol.for("react.async_mode"):60111,Ud=vt?Symbol.for("react.concurrent_mode"):60111,$d=vt?Symbol.for("react.forward_ref"):60112,Dd=vt?Symbol.for("react.suspense"):60113,lA=vt?Symbol.for("react.suspense_list"):60120,Md=vt?Symbol.for("react.memo"):60115,Ld=vt?Symbol.for("react.lazy"):60116,uA=vt?Symbol.for("react.block"):60121,cA=vt?Symbol.for("react.fundamental"):60117,fA=vt?Symbol.for("react.responder"):60118,dA=vt?Symbol.for("react.scope"):60119;function Cn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ev:switch(t=t.type,t){case nv:case Ud:case Pd:case Rd:case Od:case Dd:return t;default:switch(t=t&&t.$$typeof,t){case Ad:case $d:case Ld:case Md:case Nd:return t;default:return e}}case tv:return e}}}function Ik(t){return Cn(t)===Ud}_e.AsyncMode=nv;_e.ConcurrentMode=Ud;_e.ContextConsumer=Ad;_e.ContextProvider=Nd;_e.Element=ev;_e.ForwardRef=$d;_e.Fragment=Pd;_e.Lazy=Ld;_e.Memo=Md;_e.Portal=tv;_e.Profiler=Rd;_e.StrictMode=Od;_e.Suspense=Dd;_e.isAsyncMode=function(t){return Ik(t)||Cn(t)===nv};_e.isConcurrentMode=Ik;_e.isContextConsumer=function(t){return Cn(t)===Ad};_e.isContextProvider=function(t){return Cn(t)===Nd};_e.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ev};_e.isForwardRef=function(t){return Cn(t)===$d};_e.isFragment=function(t){return Cn(t)===Pd};_e.isLazy=function(t){return Cn(t)===Ld};_e.isMemo=function(t){return Cn(t)===Md};_e.isPortal=function(t){return Cn(t)===tv};_e.isProfiler=function(t){return Cn(t)===Rd};_e.isStrictMode=function(t){return Cn(t)===Od};_e.isSuspense=function(t){return Cn(t)===Dd};_e.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Pd||t===Ud||t===Rd||t===Od||t===Dd||t===lA||typeof t=="object"&&t!==null&&(t.$$typeof===Ld||t.$$typeof===Md||t.$$typeof===Nd||t.$$typeof===Ad||t.$$typeof===$d||t.$$typeof===cA||t.$$typeof===fA||t.$$typeof===dA||t.$$typeof===uA)};_e.typeOf=Cn;(function(t){t.exports=_e})(zk);var Pk=zk.exports,hA={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ok={};Ok[Pk.ForwardRef]=hA;Ok[Pk.Memo]=pA;var mA=!0;function gA(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var Rk=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||mA===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},vA=function(e,n,r){Rk(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+i:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function yA(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var wA={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bA=/[A-Z]|^ms/g,SA=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Nk=function(e){return e.charCodeAt(1)===45},Iw=function(e){return e!=null&&typeof e!="boolean"},lp=bk(function(t){return Nk(t)?t:t.replace(bA,"-$&").toLowerCase()}),Pw=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(SA,function(r,i,o){return or={name:i,styles:o,next:or},i})}return wA[e]!==1&&!Nk(e)&&typeof n=="number"&&n!==0?n+"px":n};function Fl(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return or={name:n.name,styles:n.styles,next:or},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)or={name:r.name,styles:r.styles,next:or},r=r.next;var i=n.styles+";";return i}return xA(t,e,n)}case"function":{if(t!==void 0){var o=or,s=n(t);return or=o,Fl(t,e,s)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function xA(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Fl(t,e,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")e!=null&&e[s]!==void 0?r+=o+"{"+e[s]+"}":Iw(s)&&(r+=lp(o)+":"+Pw(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var a=0;a<s.length;a++)Iw(s[a])&&(r+=lp(o)+":"+Pw(o,s[a])+";");else{var l=Fl(t,e,s);switch(o){case"animation":case"animationName":{r+=lp(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var Ow=/label:\s*([^\s;\n{]+)\s*(;|$)/g,or,Ak=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,o="";or=void 0;var s=e[0];s==null||s.raw===void 0?(i=!1,o+=Fl(r,n,s)):o+=s[0];for(var a=1;a<e.length;a++)o+=Fl(r,n,e[a]),i&&(o+=s[a]);Ow.lastIndex=0;for(var l="",u;(u=Ow.exec(o))!==null;)l+="-"+u[1];var d=yA(o)+l;return{name:d,styles:o,next:or}},EA=function(e){return e()},kA=As["useInsertionEffect"]?As["useInsertionEffect"]:!1,_A=kA||EA,Uk=T.exports.createContext(typeof HTMLElement<"u"?aA({key:"css"}):null);Uk.Provider;var CA=function(e){return T.exports.forwardRef(function(n,r){var i=T.exports.useContext(Uk);return e(n,i,r)})},TA=T.exports.createContext({});function rv(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Ak(e)}var $k=function(){var e=rv.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},zA=NN,IA=function(e){return e!=="theme"},Rw=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?zA:IA},Nw=function(e,n,r){var i;if(n){var o=n.shouldForwardProp;i=e.__emotion_forwardProp&&o?function(s){return e.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},PA=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return Rk(n,r,i),_A(function(){return vA(n,r,i)}),null},OA=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,o,s;n!==void 0&&(o=n.label,s=n.target);var a=Nw(e,n,r),l=a||Rw(i),u=!l("as");return function(){var d=arguments,p=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(o!==void 0&&p.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)p.push.apply(p,d);else{p.push(d[0][0]);for(var m=d.length,v=1;v<m;v++)p.push(d[v],d[0][v])}var w=CA(function(y,c,f){var h=u&&y.as||i,g="",b=[],S=y;if(y.theme==null){S={};for(var x in y)S[x]=y[x];S.theme=T.exports.useContext(TA)}typeof y.className=="string"?g=gA(c.registered,b,y.className):y.className!=null&&(g=y.className+" ");var E=Ak(p.concat(b),c.registered,S);g+=c.key+"-"+E.name,s!==void 0&&(g+=" "+s);var _=u&&a===void 0?Rw(h):l,C={};for(var k in y)u&&k==="as"||_(k)&&(C[k]=y[k]);return C.className=g,C.ref=f,T.exports.createElement(T.exports.Fragment,null,T.exports.createElement(PA,{cache:c,serialized:E,isStringTag:typeof h=="string"}),T.exports.createElement(h,C))});return w.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",w.defaultProps=e.defaultProps,w.__emotion_real=w,w.__emotion_base=i,w.__emotion_styles=p,w.__emotion_forwardProp=a,Object.defineProperty(w,"toString",{value:function(){return"."+s}}),w.withComponent=function(y,c){return t(y,L({},n,c,{shouldForwardProp:Nw(w,c,!0)})).apply(void 0,p)},w}},RA=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],jm=OA.bind();RA.forEach(function(t){jm[t]=jm(t)});const NA=jm;/** @license MUI v5.10.8
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AA(t,e){return NA(t,e)}const UA=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))};function cl(t,e){return e?Dr(t,e,{clone:!1}):t}const iv={xs:0,sm:600,md:900,lg:1200,xl:1536},Aw={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${iv[t]}px)`};function Bi(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const o=r.breakpoints||Aw;return e.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(e[l]),s),{})}if(typeof e=="object"){const o=r.breakpoints||Aw;return Object.keys(e).reduce((s,a)=>{if(Object.keys(o.values||iv).indexOf(a)!==-1){const l=o.up(a);s[l]=n(e[a],a)}else{const l=a;s[l]=e[l]}return s},{})}return n(e)}function $A(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const o=t.up(i);return r[o]={},r},{}))||{}}function DA(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function ov(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function Uw(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=ov(t,n)||r,e&&(i=e(i,r)),i}function G(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,o=s=>{if(s[e]==null)return null;const a=s[e],l=s.theme,u=ov(l,r)||{};return Bi(s,a,p=>{let m=Uw(u,i,p);return p===m&&typeof p=="string"&&(m=Uw(u,i,`${e}${p==="default"?"":ze(p)}`,p)),n===!1?m:{[n]:m}})};return o.propTypes={},o.filterProps=[e],o}function Vi(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>e[o]?cl(i,e[o](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function MA(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const LA={m:"margin",p:"padding"},jA={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},$w={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},FA=MA(t=>{if(t.length>2)if($w[t])t=$w[t];else return[t];const[e,n]=t.split(""),r=LA[e],i=jA[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),BA=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],VA=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],Dk=[...BA,...VA];function gu(t,e,n,r){var i;const o=(i=ov(t,e,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function Mk(t){return gu(t,"spacing",8)}function vu(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function WA(t,e){return n=>t.reduce((r,i)=>(r[i]=vu(e,n),r),{})}function HA(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=FA(n),o=WA(i,r),s=t[n];return Bi(t,s,o)}function qA(t,e){const n=Mk(t.theme);return Object.keys(t).map(r=>HA(t,e,r,n)).reduce(cl,{})}function jd(t){return qA(t,Dk)}jd.propTypes={};jd.filterProps=Dk;function yu(t){return typeof t!="number"?t:`${t}px solid`}const KA=G({prop:"border",themeKey:"borders",transform:yu}),GA=G({prop:"borderTop",themeKey:"borders",transform:yu}),YA=G({prop:"borderRight",themeKey:"borders",transform:yu}),XA=G({prop:"borderBottom",themeKey:"borders",transform:yu}),QA=G({prop:"borderLeft",themeKey:"borders",transform:yu}),JA=G({prop:"borderColor",themeKey:"palette"}),ZA=G({prop:"borderTopColor",themeKey:"palette"}),e5=G({prop:"borderRightColor",themeKey:"palette"}),t5=G({prop:"borderBottomColor",themeKey:"palette"}),n5=G({prop:"borderLeftColor",themeKey:"palette"}),sv=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=gu(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:vu(e,r)});return Bi(t,t.borderRadius,n)}return null};sv.propTypes={};sv.filterProps=["borderRadius"];const r5=Vi(KA,GA,YA,XA,QA,JA,ZA,e5,t5,n5,sv),Lk=r5,i5=G({prop:"displayPrint",cssProperty:!1,transform:t=>({"@media print":{display:t}})}),o5=G({prop:"display"}),s5=G({prop:"overflow"}),a5=G({prop:"textOverflow"}),l5=G({prop:"visibility"}),u5=G({prop:"whiteSpace"}),jk=Vi(i5,o5,s5,a5,l5,u5),c5=G({prop:"flexBasis"}),f5=G({prop:"flexDirection"}),d5=G({prop:"flexWrap"}),h5=G({prop:"justifyContent"}),p5=G({prop:"alignItems"}),m5=G({prop:"alignContent"}),g5=G({prop:"order"}),v5=G({prop:"flex"}),y5=G({prop:"flexGrow"}),w5=G({prop:"flexShrink"}),b5=G({prop:"alignSelf"}),S5=G({prop:"justifyItems"}),x5=G({prop:"justifySelf"}),E5=Vi(c5,f5,d5,h5,p5,m5,g5,v5,y5,w5,b5,S5,x5),Fk=E5,av=t=>{if(t.gap!==void 0&&t.gap!==null){const e=gu(t.theme,"spacing",8),n=r=>({gap:vu(e,r)});return Bi(t,t.gap,n)}return null};av.propTypes={};av.filterProps=["gap"];const lv=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=gu(t.theme,"spacing",8),n=r=>({columnGap:vu(e,r)});return Bi(t,t.columnGap,n)}return null};lv.propTypes={};lv.filterProps=["columnGap"];const uv=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=gu(t.theme,"spacing",8),n=r=>({rowGap:vu(e,r)});return Bi(t,t.rowGap,n)}return null};uv.propTypes={};uv.filterProps=["rowGap"];const k5=G({prop:"gridColumn"}),_5=G({prop:"gridRow"}),C5=G({prop:"gridAutoFlow"}),T5=G({prop:"gridAutoColumns"}),z5=G({prop:"gridAutoRows"}),I5=G({prop:"gridTemplateColumns"}),P5=G({prop:"gridTemplateRows"}),O5=G({prop:"gridTemplateAreas"}),R5=G({prop:"gridArea"}),N5=Vi(av,lv,uv,k5,_5,C5,T5,z5,I5,P5,O5,R5),Bk=N5;function cv(t,e){return e==="grey"?e:t}const A5=G({prop:"color",themeKey:"palette",transform:cv}),U5=G({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:cv}),$5=G({prop:"backgroundColor",themeKey:"palette",transform:cv}),D5=Vi(A5,U5,$5),Vk=D5,M5=G({prop:"position"}),L5=G({prop:"zIndex",themeKey:"zIndex"}),j5=G({prop:"top"}),F5=G({prop:"right"}),B5=G({prop:"bottom"}),V5=G({prop:"left"}),Wk=Vi(M5,L5,j5,F5,B5,V5),W5=G({prop:"boxShadow",themeKey:"shadows"}),Hk=W5;function Wi(t){return t<=1&&t!==0?`${t*100}%`:t}const H5=G({prop:"width",transform:Wi}),qk=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i,o;return{maxWidth:((r=t.theme)==null||(i=r.breakpoints)==null||(o=i.values)==null?void 0:o[n])||iv[n]||Wi(n)}};return Bi(t,t.maxWidth,e)}return null};qk.filterProps=["maxWidth"];const q5=G({prop:"minWidth",transform:Wi}),K5=G({prop:"height",transform:Wi}),G5=G({prop:"maxHeight",transform:Wi}),Y5=G({prop:"minHeight",transform:Wi});G({prop:"size",cssProperty:"width",transform:Wi});G({prop:"size",cssProperty:"height",transform:Wi});const X5=G({prop:"boxSizing"}),Q5=Vi(H5,qk,q5,K5,G5,Y5,X5),Kk=Q5,J5=G({prop:"fontFamily",themeKey:"typography"}),Z5=G({prop:"fontSize",themeKey:"typography"}),eU=G({prop:"fontStyle",themeKey:"typography"}),tU=G({prop:"fontWeight",themeKey:"typography"}),nU=G({prop:"letterSpacing"}),rU=G({prop:"textTransform"}),iU=G({prop:"lineHeight"}),oU=G({prop:"textAlign"}),sU=G({prop:"typography",cssProperty:!1,themeKey:"typography"}),aU=Vi(sU,J5,Z5,eU,tU,nU,iU,oU,rU),Gk=aU,Dw={borders:Lk.filterProps,display:jk.filterProps,flexbox:Fk.filterProps,grid:Bk.filterProps,positions:Wk.filterProps,palette:Vk.filterProps,shadows:Hk.filterProps,sizing:Kk.filterProps,spacing:jd.filterProps,typography:Gk.filterProps},Yk={borders:Lk,display:jk,flexbox:Fk,grid:Bk,positions:Wk,palette:Vk,shadows:Hk,sizing:Kk,spacing:jd,typography:Gk};Object.keys(Dw).reduce((t,e)=>(Dw[e].forEach(n=>{t[n]=Yk[e]}),t),{});function lU(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function uU(t,e){return typeof t=="function"?t(e):t}function cU(t=Yk){const e=Object.keys(t).reduce((i,o)=>(t[o].filterProps.forEach(s=>{i[s]=t[o]}),i),{});function n(i,o,s){const a={[i]:o,theme:s},l=e[i];return l?l(a):{[i]:o}}function r(i){const{sx:o,theme:s={}}=i||{};if(!o)return null;function a(l){let u=l;if(typeof l=="function")u=l(s);else if(typeof l!="object")return l;if(!u)return null;const d=$A(s.breakpoints),p=Object.keys(d);let m=d;return Object.keys(u).forEach(v=>{const w=uU(u[v],s);if(w!=null)if(typeof w=="object")if(e[v])m=cl(m,n(v,w,s));else{const y=Bi({theme:s},w,c=>({[v]:c}));lU(y,w)?m[v]=r({sx:w,theme:s}):m=cl(m,y)}else m=cl(m,n(v,w,s))}),DA(p,m)}return Array.isArray(o)?o.map(a):a(o)}return r}const Xk=cU();Xk.filterProps=["sx"];const fU=Xk,dU=["values","unit","step"],hU=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>L({},n,{[r.key]:r.val}),{})};function pU(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=Je(t,dU),o=hU(e),s=Object.keys(o);function a(m){return`@media (min-width:${typeof e[m]=="number"?e[m]:m}${n})`}function l(m){return`@media (max-width:${(typeof e[m]=="number"?e[m]:m)-r/100}${n})`}function u(m,v){const w=s.indexOf(v);return`@media (min-width:${typeof e[m]=="number"?e[m]:m}${n}) and (max-width:${(w!==-1&&typeof e[s[w]]=="number"?e[s[w]]:v)-r/100}${n})`}function d(m){return s.indexOf(m)+1<s.length?u(m,s[s.indexOf(m)+1]):a(m)}function p(m){const v=s.indexOf(m);return v===0?a(s[1]):v===s.length-1?l(s[v]):u(m,s[s.indexOf(m)+1]).replace("@media","@media not all and")}return L({keys:s,values:o,up:a,down:l,between:u,only:d,not:p,unit:n},i)}const mU={borderRadius:4},gU=mU;function vU(t=8){if(t.mui)return t;const e=Mk({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=e(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}const yU=["breakpoints","palette","spacing","shape"];function fv(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:o={}}=t,s=Je(t,yU),a=pU(n),l=vU(i);let u=Dr({breakpoints:a,direction:"ltr",components:{},palette:L({mode:"light"},r),spacing:l,shape:L({},gU,o)},s);return u=e.reduce((d,p)=>Dr(d,p),u),u}const wU=T.exports.createContext(null),bU=wU;function SU(){return T.exports.useContext(bU)}function xU(t){return Object.keys(t).length===0}function Qk(t=null){const e=SU();return!e||xU(e)?t:e}const EU=fv();function Jk(t=EU){return Qk(t)}const kU=["variant"];function Mw(t){return t.length===0}function Zk(t){const{variant:e}=t,n=Je(t,kU);let r=e||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=Mw(r)?t[i]:ze(t[i]):r+=`${Mw(r)?i:ze(i)}${ze(t[i].toString())}`}),r}const _U=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],CU=["theme"],TU=["theme"];function Da(t){return Object.keys(t).length===0}function zU(t){return typeof t=="string"&&t.charCodeAt(0)>96}const IU=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,PU=(t,e)=>{let n=[];e&&e.components&&e.components[t]&&e.components[t].variants&&(n=e.components[t].variants);const r={};return n.forEach(i=>{const o=Zk(i.props);r[o]=i.style}),r},OU=(t,e,n,r)=>{var i,o;const{ownerState:s={}}=t,a=[],l=n==null||(i=n.components)==null||(o=i[r])==null?void 0:o.variants;return l&&l.forEach(u=>{let d=!0;Object.keys(u.props).forEach(p=>{s[p]!==u.props[p]&&t[p]!==u.props[p]&&(d=!1)}),d&&a.push(e[Zk(u.props)])}),a};function jc(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const RU=fv();function NU(t={}){const{defaultTheme:e=RU,rootShouldForwardProp:n=jc,slotShouldForwardProp:r=jc,styleFunctionSx:i=fU}=t,o=s=>{const a=Da(s.theme)?e:s.theme;return i(L({},s,{theme:a}))};return o.__mui_systemSx=!0,(s,a={})=>{UA(s,b=>b.filter(S=>!(S!=null&&S.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:d,skipSx:p,overridesResolver:m}=a,v=Je(a,_U),w=d!==void 0?d:u&&u!=="Root"||!1,y=p||!1;let c,f=jc;u==="Root"?f=n:u?f=r:zU(s)&&(f=void 0);const h=AA(s,L({shouldForwardProp:f,label:c},v)),g=(b,...S)=>{const x=S?S.map(k=>typeof k=="function"&&k.__emotion_real!==k?z=>{let{theme:R}=z,U=Je(z,CU);return k(L({theme:Da(R)?e:R},U))}:k):[];let E=b;l&&m&&x.push(k=>{const z=Da(k.theme)?e:k.theme,R=IU(l,z);if(R){const U={};return Object.entries(R).forEach(([V,O])=>{U[V]=typeof O=="function"?O(L({},k,{theme:z})):O}),m(k,U)}return null}),l&&!w&&x.push(k=>{const z=Da(k.theme)?e:k.theme;return OU(k,PU(l,z),z,l)}),y||x.push(o);const _=x.length-S.length;if(Array.isArray(b)&&_>0){const k=new Array(_).fill("");E=[...b,...k],E.raw=[...b.raw,...k]}else typeof b=="function"&&b.__emotion_real!==b&&(E=k=>{let{theme:z}=k,R=Je(k,TU);return b(L({theme:Da(z)?e:z},R))});return h(E,...x)};return h.withConfig&&(g.withConfig=h.withConfig),g}}function AU(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:ZO(e.components[n].defaultProps,r)}function UU({props:t,name:e,defaultTheme:n}){const r=Jk(n);return AU({theme:r,name:e,props:t})}function dv(t,e=0,n=1){return Math.min(Math.max(e,t),n)}function $U(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Io(t){if(t.type)return t;if(t.charAt(0)==="#")return Io($U(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Ws(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(Ws(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function Fd(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function DU(t){t=Io(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,o=r*Math.min(i,1-i),s=(u,d=(u+n/30)%12)=>i-o*Math.max(Math.min(d-3,9-d,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),Fd({type:a,values:l})}function Lw(t){t=Io(t);let e=t.type==="hsl"||t.type==="hsla"?Io(DU(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function MU(t,e){const n=Lw(t),r=Lw(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function e_(t,e){return t=Io(t),e=dv(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,Fd(t)}function LU(t,e){if(t=Io(t),e=dv(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return Fd(t)}function jU(t,e){if(t=Io(t),e=dv(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return Fd(t)}function FU(t,e){return L({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const BU={black:"#000",white:"#fff"},Bl=BU,VU={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},WU=VU,HU={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Xo=HU,qU={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Qo=qU,KU={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Ma=KU,GU={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Jo=GU,YU={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Zo=YU,XU={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},es=XU,QU=["mode","contrastThreshold","tonalOffset"],jw={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Bl.white,default:Bl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},up={text:{primary:Bl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Bl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Fw(t,e,n,r){const i=r.light||r,o=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=jU(t.main,i):e==="dark"&&(t.dark=LU(t.main,o)))}function JU(t="light"){return t==="dark"?{main:Jo[200],light:Jo[50],dark:Jo[400]}:{main:Jo[700],light:Jo[400],dark:Jo[800]}}function ZU(t="light"){return t==="dark"?{main:Xo[200],light:Xo[50],dark:Xo[400]}:{main:Xo[500],light:Xo[300],dark:Xo[700]}}function e$(t="light"){return t==="dark"?{main:Qo[500],light:Qo[300],dark:Qo[700]}:{main:Qo[700],light:Qo[400],dark:Qo[800]}}function t$(t="light"){return t==="dark"?{main:Zo[400],light:Zo[300],dark:Zo[700]}:{main:Zo[700],light:Zo[500],dark:Zo[900]}}function n$(t="light"){return t==="dark"?{main:es[400],light:es[300],dark:es[700]}:{main:es[800],light:es[500],dark:es[900]}}function r$(t="light"){return t==="dark"?{main:Ma[400],light:Ma[300],dark:Ma[700]}:{main:"#ed6c02",light:Ma[500],dark:Ma[900]}}function i$(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=Je(t,QU),o=t.primary||JU(e),s=t.secondary||ZU(e),a=t.error||e$(e),l=t.info||t$(e),u=t.success||n$(e),d=t.warning||r$(e);function p(y){return MU(y,up.text.primary)>=n?up.text.primary:jw.text.primary}const m=({color:y,name:c,mainShade:f=500,lightShade:h=300,darkShade:g=700})=>{if(y=L({},y),!y.main&&y[f]&&(y.main=y[f]),!y.hasOwnProperty("main"))throw new Error(Ws(11,c?` (${c})`:"",f));if(typeof y.main!="string")throw new Error(Ws(12,c?` (${c})`:"",JSON.stringify(y.main)));return Fw(y,"light",h,r),Fw(y,"dark",g,r),y.contrastText||(y.contrastText=p(y.main)),y},v={dark:up,light:jw};return Dr(L({common:L({},Bl),mode:e,primary:m({color:o,name:"primary"}),secondary:m({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:m({color:a,name:"error"}),warning:m({color:d,name:"warning"}),info:m({color:l,name:"info"}),success:m({color:u,name:"success"}),grey:WU,contrastThreshold:n,getContrastText:p,augmentColor:m,tonalOffset:r},v[e]),i)}const o$=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function s$(t){return Math.round(t*1e5)/1e5}const Bw={textTransform:"uppercase"},Vw='"Roboto", "Helvetica", "Arial", sans-serif';function a$(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=Vw,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:d,pxToRem:p}=n,m=Je(n,o$),v=i/14,w=p||(f=>`${f/u*v}rem`),y=(f,h,g,b,S)=>L({fontFamily:r,fontWeight:f,fontSize:w(h),lineHeight:g},r===Vw?{letterSpacing:`${s$(b/h)}em`}:{},S,d),c={h1:y(o,96,1.167,-1.5),h2:y(o,60,1.2,-.5),h3:y(s,48,1.167,0),h4:y(s,34,1.235,.25),h5:y(s,24,1.334,0),h6:y(a,20,1.6,.15),subtitle1:y(s,16,1.75,.15),subtitle2:y(a,14,1.57,.1),body1:y(s,16,1.5,.15),body2:y(s,14,1.43,.15),button:y(a,14,1.75,.4,Bw),caption:y(s,12,1.66,.4),overline:y(s,12,2.66,1,Bw)};return Dr(L({htmlFontSize:u,pxToRem:w,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},c),m,{clone:!1})}const l$=.2,u$=.14,c$=.12;function Ne(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${l$})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${u$})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${c$})`].join(",")}const f$=["none",Ne(0,2,1,-1,0,1,1,0,0,1,3,0),Ne(0,3,1,-2,0,2,2,0,0,1,5,0),Ne(0,3,3,-2,0,3,4,0,0,1,8,0),Ne(0,2,4,-1,0,4,5,0,0,1,10,0),Ne(0,3,5,-1,0,5,8,0,0,1,14,0),Ne(0,3,5,-1,0,6,10,0,0,1,18,0),Ne(0,4,5,-2,0,7,10,1,0,2,16,1),Ne(0,5,5,-3,0,8,10,1,0,3,14,2),Ne(0,5,6,-3,0,9,12,1,0,3,16,2),Ne(0,6,6,-3,0,10,14,1,0,4,18,3),Ne(0,6,7,-4,0,11,15,1,0,4,20,3),Ne(0,7,8,-4,0,12,17,2,0,5,22,4),Ne(0,7,8,-4,0,13,19,2,0,5,24,4),Ne(0,7,9,-4,0,14,21,2,0,5,26,4),Ne(0,8,9,-5,0,15,22,2,0,6,28,5),Ne(0,8,10,-5,0,16,24,2,0,6,30,5),Ne(0,8,11,-5,0,17,26,2,0,6,32,5),Ne(0,9,11,-5,0,18,28,2,0,7,34,6),Ne(0,9,12,-6,0,19,29,2,0,7,36,6),Ne(0,10,13,-6,0,20,31,3,0,8,38,7),Ne(0,10,13,-6,0,21,33,3,0,8,40,7),Ne(0,10,14,-6,0,22,35,3,0,8,42,7),Ne(0,11,14,-7,0,23,36,3,0,9,44,8),Ne(0,11,15,-7,0,24,38,3,0,9,46,8)],d$=f$,h$=["duration","easing","delay"],p$={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},m$={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Ww(t){return`${Math.round(t)}ms`}function g$(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function v$(t){const e=L({},p$,t.easing),n=L({},m$,t.duration);return L({getAutoHeightDuration:g$,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=e.easeInOut,delay:l=0}=o;return Je(o,h$),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof s=="string"?s:Ww(s)} ${a} ${typeof l=="string"?l:Ww(l)}`).join(",")}},t,{easing:e,duration:n})}const y$={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},w$=y$,b$=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function S$(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:o={}}=t,s=Je(t,b$);if(t.vars)throw new Error(Ws(18));const a=i$(r),l=fv(t);let u=Dr(l,{mixins:FU(l.breakpoints,n),palette:a,shadows:d$.slice(),typography:a$(a,o),transitions:v$(i),zIndex:L({},w$)});return u=Dr(u,s),u=e.reduce((d,p)=>Dr(d,p),u),u}const x$=S$(),hv=x$;function wu({props:t,name:e}){return UU({props:t,name:e,defaultTheme:hv})}const E$=t=>jc(t)&&t!=="classes",k$=NU({defaultTheme:hv,rootShouldForwardProp:E$}),Sr=k$;function _$(t){return Do("MuiSvgIcon",t)}fa("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const C$=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],T$=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${ze(e)}`,`fontSize${ze(n)}`]};return ca(i,_$,r)},z$=Sr("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${ze(n.color)}`],e[`fontSize${ze(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,o,s,a,l,u,d,p,m,v,w,y,c,f,h;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(o=i.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((s=t.typography)==null||(a=s.pxToRem)==null?void 0:a.call(s,20))||"1.25rem",medium:((l=t.typography)==null||(u=l.pxToRem)==null?void 0:u.call(l,24))||"1.5rem",large:((d=t.typography)==null||(p=d.pxToRem)==null?void 0:p.call(d,35))||"2.1875rem"}[e.fontSize],color:(m=(v=(t.vars||t).palette)==null||(w=v[e.color])==null?void 0:w.main)!=null?m:{action:(y=(t.vars||t).palette)==null||(c=y.action)==null?void 0:c.active,disabled:(f=(t.vars||t).palette)==null||(h=f.action)==null?void 0:h.disabled,inherit:void 0}[e.color]}}),t_=T.exports.forwardRef(function(e,n){const r=wu({props:e,name:"MuiSvgIcon"}),{children:i,className:o,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:d=!1,titleAccess:p,viewBox:m="0 0 24 24"}=r,v=Je(r,C$),w=L({},r,{color:s,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:m}),y={};d||(y.viewBox=m);const c=T$(w);return je(z$,L({as:a,className:ur(c.root,o),focusable:"false",color:u,"aria-hidden":p?void 0:!0,role:p?"img":void 0,ref:n},y,v,{ownerState:w,children:[i,p?N("title",{children:p}):null]}))});t_.muiName="SvgIcon";const Hw=t_;function I$(t,e){function n(r,i){return N(Hw,L({"data-testid":`${e}Icon`,ref:i},r,{children:t}))}return n.muiName=Hw.muiName,T.exports.memo(T.exports.forwardRef(n))}const P$={configure:t=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),lk.configure(t)}},O$=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:P$,capitalize:ze,createChainedFunction:DO,createSvgIcon:I$,debounce:MO,deprecatedPropType:LO,isMuiElement:jO,ownerDocument:Cs,ownerWindow:FO,requirePropFactory:BO,setRef:_f,unstable_useEnhancedEffect:Hs,unstable_useId:ik,unsupportedProp:HO,useControlled:ok,useEventCallback:B0,useForkRef:Ai,useIsFocusVisible:sk},Symbol.toStringTag,{value:"Module"})),R$=Sg(O$);var qw;function Qr(){return qw||(qw=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=R$}(sp)),sp}const Jr=Sg(K2);var N$=br.exports;Object.defineProperty(F0,"__esModule",{value:!0});var n_=F0.default=void 0,A$=N$(Qr()),U$=Jr,$$=(0,A$.default)((0,U$.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");n_=F0.default=$$;var pv={},D$=br.exports;Object.defineProperty(pv,"__esModule",{value:!0});var r_=pv.default=void 0,M$=D$(Qr()),L$=Jr,j$=(0,M$.default)((0,L$.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");r_=pv.default=j$;var mv={},F$=br.exports;Object.defineProperty(mv,"__esModule",{value:!0});var i_=mv.default=void 0,B$=F$(Qr()),V$=Jr,W$=(0,B$.default)((0,V$.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");i_=mv.default=W$;var gv={},H$=br.exports;Object.defineProperty(gv,"__esModule",{value:!0});var o_=gv.default=void 0,q$=H$(Qr()),K$=Jr,G$=(0,q$.default)((0,K$.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}),"NotificationsNone");o_=gv.default=G$;var vv={},Y$=br.exports;Object.defineProperty(vv,"__esModule",{value:!0});var s_=vv.default=void 0,X$=Y$(Qr()),Q$=Jr,J$=(0,X$.default)((0,Q$.jsx)("path",{d:"M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-5 0h-2v-2h2v2zm0-4h-2V8h2v4zm-1 10c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z"}),"NotificationImportant");s_=vv.default=J$;var yv={},Z$=br.exports;Object.defineProperty(yv,"__esModule",{value:!0});var a_=yv.default=void 0,eD=Z$(Qr()),tD=Jr,nD=(0,eD.default)((0,tD.jsx)("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"}),"DarkMode");a_=yv.default=nD;var wv={},rD=br.exports;Object.defineProperty(wv,"__esModule",{value:!0});var l_=wv.default=void 0,iD=rD(Qr()),oD=Jr,sD=(0,iD.default)((0,oD.jsx)("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}),"LightMode");l_=wv.default=sD;function u_(){return Jk(hv)}function Fm(t,e){return Fm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Fm(t,e)}function aD(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Fm(t,e)}const Kw={disabled:!1},c_=Ur.createContext(null);var lD=function(e){return e.scrollTop},Ka="unmounted",io="exited",oo="entering",rs="entered",Bm="exiting",Zr=function(t){aD(e,t);function e(r,i){var o;o=t.call(this,r,i)||this;var s=i,a=s&&!s.isMounting?r.enter:r.appear,l;return o.appearStatus=null,r.in?a?(l=io,o.appearStatus=oo):l=rs:r.unmountOnExit||r.mountOnEnter?l=Ka:l=io,o.state={status:l},o.nextCallback=null,o}e.getDerivedStateFromProps=function(i,o){var s=i.in;return s&&o.status===Ka?{status:io}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var o=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==oo&&s!==rs&&(o=oo):(s===oo||s===rs)&&(o=Bm)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,o,s,a;return o=s=a=i,i!=null&&typeof i!="number"&&(o=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:o,enter:s,appear:a}},n.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===oo){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:uc.findDOMNode(this);s&&lD(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===io&&this.setState({status:Ka})},n.performEnter=function(i){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[uc.findDOMNode(this),a],u=l[0],d=l[1],p=this.getTimeouts(),m=a?p.appear:p.enter;if(!i&&!s||Kw.disabled){this.safeSetState({status:rs},function(){o.props.onEntered(u)});return}this.props.onEnter(u,d),this.safeSetState({status:oo},function(){o.props.onEntering(u,d),o.onTransitionEnd(m,function(){o.safeSetState({status:rs},function(){o.props.onEntered(u,d)})})})},n.performExit=function(){var i=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:uc.findDOMNode(this);if(!o||Kw.disabled){this.safeSetState({status:io},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Bm},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:io},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},n.setNextCallback=function(i){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(i,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:uc.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=l[0],d=l[1];this.props.addEndListener(u,d)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Ka)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=Je(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return N(c_.Provider,{value:null,children:typeof s=="function"?s(i,a):Ur.cloneElement(Ur.Children.only(s),a)})},e}(Ur.Component);Zr.contextType=c_;Zr.propTypes={};function ts(){}Zr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ts,onEntering:ts,onEntered:ts,onExit:ts,onExiting:ts,onExited:ts};Zr.UNMOUNTED=Ka;Zr.EXITED=io;Zr.ENTERING=oo;Zr.ENTERED=rs;Zr.EXITING=Bm;const uD=Zr,cD=t=>t.scrollTop;function Gw(t,e){var n,r;const{timeout:i,easing:o,style:s={}}=t;return{duration:(n=s.transitionDuration)!=null?n:typeof i=="number"?i:i[e.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof o=="object"?o[e.mode]:o,delay:s.transitionDelay}}const fD=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Vm(t){return`scale(${t}, ${t**2})`}const dD={entering:{opacity:1,transform:Vm(1)},entered:{opacity:1,transform:"none"}},cp=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),f_=T.exports.forwardRef(function(e,n){const{addEndListener:r,appear:i=!0,children:o,easing:s,in:a,onEnter:l,onEntered:u,onEntering:d,onExit:p,onExited:m,onExiting:v,style:w,timeout:y="auto",TransitionComponent:c=uD}=e,f=Je(e,fD),h=T.exports.useRef(),g=T.exports.useRef(),b=u_(),S=T.exports.useRef(null),x=Ai(S,o.ref,n),E=O=>$=>{if(O){const j=S.current;$===void 0?O(j):O(j,$)}},_=E(d),C=E((O,$)=>{cD(O);const{duration:j,delay:P,easing:A}=Gw({style:w,timeout:y,easing:s},{mode:"enter"});let F;y==="auto"?(F=b.transitions.getAutoHeightDuration(O.clientHeight),g.current=F):F=j,O.style.transition=[b.transitions.create("opacity",{duration:F,delay:P}),b.transitions.create("transform",{duration:cp?F:F*.666,delay:P,easing:A})].join(","),l&&l(O,$)}),k=E(u),z=E(v),R=E(O=>{const{duration:$,delay:j,easing:P}=Gw({style:w,timeout:y,easing:s},{mode:"exit"});let A;y==="auto"?(A=b.transitions.getAutoHeightDuration(O.clientHeight),g.current=A):A=$,O.style.transition=[b.transitions.create("opacity",{duration:A,delay:j}),b.transitions.create("transform",{duration:cp?A:A*.666,delay:cp?j:j||A*.333,easing:P})].join(","),O.style.opacity=0,O.style.transform=Vm(.75),p&&p(O)}),U=E(m),V=O=>{y==="auto"&&(h.current=setTimeout(O,g.current||0)),r&&r(S.current,O)};return T.exports.useEffect(()=>()=>{clearTimeout(h.current)},[]),N(c,L({appear:i,in:a,nodeRef:S,onEnter:C,onEntered:k,onEntering:_,onExit:R,onExited:U,onExiting:z,addEndListener:V,timeout:y==="auto"?null:y},f,{children:(O,$)=>T.exports.cloneElement(o,L({style:L({opacity:0,transform:Vm(.75),visibility:O==="exited"&&!a?"hidden":void 0},dD[O],w,o.props.style),ref:x},$))}))});f_.muiSupportAuto=!0;const Yw=f_,hD=["components","componentsProps","slots","slotProps"],pD=Sr(ON,{name:"MuiPopper",slot:"Root",overridesResolver:(t,e)=>e.root})({}),mD=T.exports.forwardRef(function(e,n){var r;const i=Qk(),o=wu({props:e,name:"MuiPopper"}),{components:s,componentsProps:a,slots:l,slotProps:u}=o,d=Je(o,hD),p=(r=l==null?void 0:l.root)!=null?r:s==null?void 0:s.Root;return N(pD,L({direction:i==null?void 0:i.direction,slots:{root:p},slotProps:u!=null?u:a},d,{ref:n}))}),d_=mD;function gD(t){return Do("MuiTooltip",t)}const vD=fa("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),wi=vD,yD=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function wD(t){return Math.round(t*1e5)/1e5}const bD=t=>{const{classes:e,disableInteractive:n,arrow:r,touch:i,placement:o}=t,s={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",i&&"touch",`tooltipPlacement${ze(o.split("-")[0])}`],arrow:["arrow"]};return ca(s,gD,e)},SD=Sr(d_,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(({theme:t,ownerState:e,open:n})=>L({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${wi.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${wi.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${wi.arrow}`]:L({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${wi.arrow}`]:L({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),xD=Sr("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${ze(n.placement.split("-")[0])}`]]}})(({theme:t,ownerState:e})=>L({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:e_(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${wD(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${wi.popper}[data-popper-placement*="left"] &`]:L({transformOrigin:"right center"},e.isRtl?L({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):L({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${wi.popper}[data-popper-placement*="right"] &`]:L({transformOrigin:"left center"},e.isRtl?L({marginRight:"14px"},e.touch&&{marginRight:"24px"}):L({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${wi.popper}[data-popper-placement*="top"] &`]:L({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${wi.popper}[data-popper-placement*="bottom"] &`]:L({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),ED=Sr("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:e_(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let pc=!1,fp=null;function mc(t,e){return n=>{e&&e(n),t(n)}}const kD=T.exports.forwardRef(function(e,n){var r,i,o,s,a,l,u,d,p,m,v,w,y,c,f,h,g,b,S;const x=wu({props:e,name:"MuiTooltip"}),{arrow:E=!1,children:_,components:C={},componentsProps:k={},describeChild:z=!1,disableFocusListener:R=!1,disableHoverListener:U=!1,disableInteractive:V=!1,disableTouchListener:O=!1,enterDelay:$=100,enterNextDelay:j=0,enterTouchDelay:P=700,followCursor:A=!1,id:F,leaveDelay:Q=0,leaveTouchDelay:se=1500,onClose:Ge,onOpen:ot,open:$e,placement:De="bottom",PopperComponent:Ve,PopperProps:Ye={},slotProps:Me={},slots:Qn={},title:We,TransitionComponent:ya=Yw,TransitionProps:Yt}=x,hn=Je(x,yD),jt=u_(),xr=jt.direction==="rtl",[pn,Tt]=T.exports.useState(),[Jn,Xt]=T.exports.useState(null),Qt=T.exports.useRef(!1),Fn=V||A,Zn=T.exports.useRef(),er=T.exports.useRef(),Ft=T.exports.useRef(),Er=T.exports.useRef(),[Gi,ti]=ok({controlled:$e,default:!1,name:"Tooltip",state:"open"});let Tn=Gi;const wa=ik(F),Yi=T.exports.useRef(),Xi=T.exports.useCallback(()=>{Yi.current!==void 0&&(document.body.style.WebkitUserSelect=Yi.current,Yi.current=void 0),clearTimeout(Er.current)},[]);T.exports.useEffect(()=>()=>{clearTimeout(Zn.current),clearTimeout(er.current),clearTimeout(Ft.current),Xi()},[Xi]);const Lu=B=>{clearTimeout(fp),pc=!0,ti(!0),ot&&!Tn&&ot(B)},Bt=B0(B=>{clearTimeout(fp),fp=setTimeout(()=>{pc=!1},800+Q),ti(!1),Ge&&Tn&&Ge(B),clearTimeout(Zn.current),Zn.current=setTimeout(()=>{Qt.current=!1},jt.transitions.duration.shortest)}),zn=B=>{Qt.current&&B.type!=="touchstart"||(pn&&pn.removeAttribute("title"),clearTimeout(er.current),clearTimeout(Ft.current),$||pc&&j?er.current=setTimeout(()=>{Lu(B)},pc?j:$):Lu(B))},Bn=B=>{clearTimeout(er.current),clearTimeout(Ft.current),Ft.current=setTimeout(()=>{Bt(B)},Q)},{isFocusVisibleRef:mn,onBlur:gn,onFocus:ba,ref:ju}=sk(),[,Sa]=T.exports.useState(!1),jo=B=>{gn(B),mn.current===!1&&(Sa(!1),Bn(B))},Fo=B=>{pn||Tt(B.currentTarget),ba(B),mn.current===!0&&(Sa(!0),zn(B))},Bo=B=>{Qt.current=!0;const q=_.props;q.onTouchStart&&q.onTouchStart(B)},In=zn,Vo=Bn,vh=B=>{Bo(B),clearTimeout(Ft.current),clearTimeout(Zn.current),Xi(),Yi.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Er.current=setTimeout(()=>{document.body.style.WebkitUserSelect=Yi.current,zn(B)},P)},yh=B=>{_.props.onTouchEnd&&_.props.onTouchEnd(B),Xi(),clearTimeout(Ft.current),Ft.current=setTimeout(()=>{Bt(B)},se)};T.exports.useEffect(()=>{if(!Tn)return;function B(q){(q.key==="Escape"||q.key==="Esc")&&Bt(q)}return document.addEventListener("keydown",B),()=>{document.removeEventListener("keydown",B)}},[Bt,Tn]);const wh=Ai(_.ref,ju,Tt,n);!We&&We!==0&&(Tn=!1);const Qi=T.exports.useRef({x:0,y:0}),xa=T.exports.useRef(),bh=B=>{const q=_.props;q.onMouseMove&&q.onMouseMove(B),Qi.current={x:B.clientX,y:B.clientY},xa.current&&xa.current.update()},ni={},kr=typeof We=="string";z?(ni.title=!Tn&&kr&&!U?We:null,ni["aria-describedby"]=Tn?wa:null):(ni["aria-label"]=kr?We:null,ni["aria-labelledby"]=Tn&&!kr?wa:null);const zt=L({},ni,hn,_.props,{className:ur(hn.className,_.props.className),onTouchStart:Bo,ref:wh},A?{onMouseMove:bh}:{}),Jt={};O||(zt.onTouchStart=vh,zt.onTouchEnd=yh),U||(zt.onMouseOver=mc(In,zt.onMouseOver),zt.onMouseLeave=mc(Vo,zt.onMouseLeave),Fn||(Jt.onMouseOver=In,Jt.onMouseLeave=Vo)),R||(zt.onFocus=mc(Fo,zt.onFocus),zt.onBlur=mc(jo,zt.onBlur),Fn||(Jt.onFocus=Fo,Jt.onBlur=jo));const Ji=T.exports.useMemo(()=>{var B;let q=[{name:"arrow",enabled:Boolean(Jn),options:{element:Jn,padding:4}}];return(B=Ye.popperOptions)!=null&&B.modifiers&&(q=q.concat(Ye.popperOptions.modifiers)),L({},Ye.popperOptions,{modifiers:q})},[Jn,Ye]),_r=L({},x,{isRtl:xr,arrow:E,disableInteractive:Fn,placement:De,PopperComponentProp:Ve,touch:Qt.current}),Wo=bD(_r),Ea=(r=(i=Qn.popper)!=null?i:C.Popper)!=null?r:SD,Ho=(o=(s=(a=Qn.transition)!=null?a:C.Transition)!=null?s:ya)!=null?o:Yw,Zi=(l=(u=Qn.tooltip)!=null?u:C.Tooltip)!=null?l:xD,Fu=(d=(p=Qn.arrow)!=null?p:C.Arrow)!=null?d:ED,ri=qa(Ea,L({},Ye,(m=Me.popper)!=null?m:k.popper,{className:ur(Wo.popper,Ye==null?void 0:Ye.className,(v=(w=Me.popper)!=null?w:k.popper)==null?void 0:v.className)}),_r),Sh=qa(Ho,L({},Yt,(y=Me.transition)!=null?y:k.transition),_r),ka=qa(Zi,L({},(c=Me.tooltip)!=null?c:k.tooltip,{className:ur(Wo.tooltip,(f=(h=Me.tooltip)!=null?h:k.tooltip)==null?void 0:f.className)}),_r),eo=qa(Fu,L({},(g=Me.arrow)!=null?g:k.arrow,{className:ur(Wo.arrow,(b=(S=Me.arrow)!=null?S:k.arrow)==null?void 0:b.className)}),_r);return je(T.exports.Fragment,{children:[T.exports.cloneElement(_,zt),N(Ea,L({as:Ve!=null?Ve:d_,placement:De,anchorEl:A?{getBoundingClientRect:()=>({top:Qi.current.y,left:Qi.current.x,right:Qi.current.x,bottom:Qi.current.y,width:0,height:0})}:pn,popperRef:xa,open:pn?Tn:!1,id:wa,transition:!0},Jt,ri,{popperOptions:Ji,children:({TransitionProps:B})=>N(Ho,L({timeout:jt.transitions.duration.shorter},B,Sh,{"data-foo":"bar",children:je(Zi,L({},ka,{children:[We,E?N(Fu,L({},eo,{ref:Xt})):null]}))}))}))]})}),gc=kD,_D=t=>!t||!ck(t),Xw=_D;function CD(t){return Do("MuiBadge",t)}const TD=fa("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),oi=TD,zD=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],dp=10,hp=4,ID=t=>{const{color:e,anchorOrigin:n,invisible:r,overlap:i,variant:o,classes:s={}}=t,a={root:["root"],badge:["badge",o,r&&"invisible",`anchorOrigin${ze(n.vertical)}${ze(n.horizontal)}`,`anchorOrigin${ze(n.vertical)}${ze(n.horizontal)}${ze(i)}`,`overlap${ze(i)}`,e!=="default"&&`color${ze(e)}`]};return ca(a,CD,s)},PD=Sr("span",{name:"MuiBadge",slot:"Root",overridesResolver:(t,e)=>e.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),OD=Sr("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.badge,e[n.variant],e[`anchorOrigin${ze(n.anchorOrigin.vertical)}${ze(n.anchorOrigin.horizontal)}${ze(n.overlap)}`],n.color!=="default"&&e[`color${ze(n.color)}`],n.invisible&&e.invisible]}})(({theme:t,ownerState:e})=>L({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:dp*2,lineHeight:1,padding:"0 6px",height:dp*2,borderRadius:dp,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},e.color!=="default"&&{backgroundColor:(t.vars||t).palette[e.color].main,color:(t.vars||t).palette[e.color].contrastText},e.variant==="dot"&&{borderRadius:hp,height:hp*2,minWidth:hp*2,padding:0},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${oi.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${oi.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${oi.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${oi.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${oi.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${oi.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${oi.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${oi.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.invisible&&{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})})),RD=T.exports.forwardRef(function(e,n){var r,i,o,s,a,l;const u=wu({props:e,name:"MuiBadge"}),{anchorOrigin:d={vertical:"top",horizontal:"right"},className:p,component:m="span",components:v={},componentsProps:w={},overlap:y="rectangular",color:c="default",invisible:f=!1,max:h,badgeContent:g,slots:b,slotProps:S,showZero:x=!1,variant:E="standard"}=u,_=Je(u,zD),C=ak({anchorOrigin:d,color:c,overlap:y,variant:E});let k=f;f===!1&&(g===0&&!x||g==null&&E!=="dot")&&(k=!0);const{color:z=c,overlap:R=y,anchorOrigin:U=d,variant:V=E}=k?C:u,O=L({},u,{anchorOrigin:U,invisible:k,color:z,overlap:R,variant:V}),$=ID(O);let j;V!=="dot"&&(j=g&&Number(g)>h?`${h}+`:g);const P=(r=(i=b==null?void 0:b.root)!=null?i:v.Root)!=null?r:PD,A=(o=(s=b==null?void 0:b.badge)!=null?s:v.Badge)!=null?o:OD,F=(a=S==null?void 0:S.root)!=null?a:w.root,Q=(l=S==null?void 0:S.badge)!=null?l:w.badge;return N(dR,L({invisible:f,badgeContent:j,showZero:x,max:h},_,{slots:{root:P,badge:A},className:ur(F==null?void 0:F.className,$.root,p),slotProps:{root:L({},F,Xw(P)&&{as:m,ownerState:L({},F==null?void 0:F.ownerState,{anchorOrigin:U,color:z,overlap:R,variant:V})}),badge:L({},Q,{className:ur($.badge,Q==null?void 0:Q.className)},Xw(A)&&{ownerState:L({},Q==null?void 0:Q.ownerState,{anchorOrigin:U,color:z,overlap:R,variant:V})})},ref:n}))}),ND=RD;function AD(t){return Do("MuiCircularProgress",t)}fa("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const UD=["className","color","disableShrink","size","style","thickness","value","variant"];let Bd=t=>t,Qw,Jw,Zw,eb;const si=44,$D=$k(Qw||(Qw=Bd`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),DD=$k(Jw||(Jw=Bd`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),MD=t=>{const{classes:e,variant:n,color:r,disableShrink:i}=t,o={root:["root",n,`color${ze(r)}`],svg:["svg"],circle:["circle",`circle${ze(n)}`,i&&"circleDisableShrink"]};return ca(o,AD,e)},LD=Sr("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`color${ze(n.color)}`]]}})(({ownerState:t,theme:e})=>L({display:"inline-block"},t.variant==="determinate"&&{transition:e.transitions.create("transform")},t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main}),({ownerState:t})=>t.variant==="indeterminate"&&rv(Zw||(Zw=Bd`
      animation: ${0} 1.4s linear infinite;
    `),$D)),jD=Sr("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),FD=Sr("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.circle,e[`circle${ze(n.variant)}`],n.disableShrink&&e.circleDisableShrink]}})(({ownerState:t,theme:e})=>L({stroke:"currentColor"},t.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&rv(eb||(eb=Bd`
      animation: ${0} 1.4s ease-in-out infinite;
    `),DD)),BD=T.exports.forwardRef(function(e,n){const r=wu({props:e,name:"MuiCircularProgress"}),{className:i,color:o="primary",disableShrink:s=!1,size:a=40,style:l,thickness:u=3.6,value:d=0,variant:p="indeterminate"}=r,m=Je(r,UD),v=L({},r,{color:o,disableShrink:s,size:a,thickness:u,value:d,variant:p}),w=MD(v),y={},c={},f={};if(p==="determinate"){const h=2*Math.PI*((si-u)/2);y.strokeDasharray=h.toFixed(3),f["aria-valuenow"]=Math.round(d),y.strokeDashoffset=`${((100-d)/100*h).toFixed(3)}px`,c.transform="rotate(-90deg)"}return N(LD,L({className:ur(w.root,i),style:L({width:a,height:a},c,l),ownerState:v,ref:n,role:"progressbar"},f,m,{children:N(jD,{className:w.svg,ownerState:v,viewBox:`${si/2} ${si/2} ${si} ${si}`,children:N(FD,{className:w.circle,style:y,ownerState:v,cx:si,cy:si,r:(si-u)/2,fill:"none",strokeWidth:u})})}))}),VD=BD;var bv={},WD=br.exports;Object.defineProperty(bv,"__esModule",{value:!0});var h_=bv.default=void 0,HD=WD(Qr()),qD=Jr,KD=(0,HD.default)((0,qD.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"}),"CancelOutlined");h_=bv.default=KD;var Sv={},GD=br.exports;Object.defineProperty(Sv,"__esModule",{value:!0});var p_=Sv.default=void 0,YD=GD(Qr()),XD=Jr,QD=(0,YD.default)((0,XD.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"}),"CheckBoxOutlined");p_=Sv.default=QD;const JD=T.exports.lazy(()=>la(()=>import("./NotificationCard.a3123800.js"),[])),ZD=({menuFunc:t,notifs:e})=>{let n=new Date;return n.getMonth()+1+""+n.getDate()+n.getFullYear(),n.getHours()+""+n.getMinutes()+n.getSeconds(),N(V0,{onClickAway:()=>{t("none")},children:je("div",{className:`absolute mt-12 bg-slate-300 dark:bg-secondary-dark-bg h-fit max-h-96 w-[300px] sm:-translate-x-[210px] -translate-x-[142px]
      shadow-xl rounded-xl border-2 border-slate-100 border-opacity-30 overflow-auto py-1`,children:[je("div",{className:"p-2 flex gap-10 items-center",children:[N("h2",{className:"w-full text-center font-bold -translate-x-7 text-sm dark:text-slate-400 text-slate-500",children:"Alerts"}),N("div",{className:"w-full flex items-center",children:je("button",{type:"button",className:"outline-none text-xs flex items-center opacity-80 hover:opacity-100 transition-all duration-100 ease-in-out\r ",children:[N(p_,{fontSize:"small",className:"scale-90"}),"Mark all as read"]})})]}),N("div",{className:"flex flex-col justify-evenly gap-1 py-1 px-1",children:Array.isArray(e)&&e.map(r=>N("div",{children:N(T.exports.Suspense,{fallback:N(VD,{}),children:N(JD,{message:r.notification,time:r.time,id:r.id})})},r.id))})]})})},eM=({menuFunc:t})=>N(V0,{onClickAway:()=>{t("none")},children:je("div",{className:`absolute mt-12 bg-slate-300 dark:bg-secondary-dark-bg h-fit w-72 sm:-translate-x-[145px] -translate-x-[135px]
      shadow-xl rounded-xl border-2 border-slate-100 border-opacity-30 overflow-scroll py-1`,children:[je("div",{className:"p-2 flex gap-10 items-center",children:[N("h2",{className:"w-full text-center font-bold -translate-x-7 text-sm dark:text-slate-400 text-slate-500",children:"Settings"}),N("div",{className:"w-full flex items-center"})]}),je("div",{className:"flex flex-col gap-1 justify-center items-center px-1",children:[N("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Configure Microcontroller"}),N("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Configure Database"}),N("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Manage Data"}),N("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Edit Theme"}),N("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Change Layout"}),N("p",{className:"text-xs text-red-400 mt-10",children:"*for demonstration purposes"})]})]})}),tM=({menuFunc:t})=>N(V0,{onClickAway:()=>{t("none")},children:je("div",{className:`absolute mt-12 bg-slate-300 dark:bg-secondary-dark-bg h-fit w-72 sm:-translate-x-[100px] -translate-x-[135px]
      shadow-xl rounded-xl border-2 border-slate-100 border-opacity-30 overflow-scroll py-1`,children:[je("div",{className:"p-2 flex gap-10 items-center",children:[N("h2",{className:"w-full text-center font-bold -translate-x-7 text-sm dark:text-slate-400 text-slate-500",children:"Account"}),N("div",{className:"w-full flex items-center text-xs"})]}),je("div",{className:"flex flex-col gap-1 justify-center items-center px-1",children:[N("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Edit Account"}),N("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Privacy Settings"}),N("button",{type:"button",className:"w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100\r dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out",children:"Log Out"}),N("p",{className:"text-xs text-red-400 mt-6",children:"*for demonstration purposes"})]})]})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nM=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},g_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=o>>2,p=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(m_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw Error();const m=o<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},rM=function(t){const e=m_(t);return g_.encodeByteArray(e,!0)},zf=function(t){return rM(t).replace(/\./g,"")},v_=function(t){try{return g_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iM(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function oM(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sM(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aM(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lM(){return typeof indexedDB=="object"}function uM(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function cM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM=()=>cM().__FIREBASE_DEFAULTS__,dM=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hM=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&v_(t[1]);return e&&JSON.parse(e)},xv=()=>{try{return fM()||dM()||hM()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},y_=t=>{var e,n;return(n=(e=xv())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pM=t=>{const e=y_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mM=()=>{var t;return(t=xv())===null||t===void 0?void 0:t.config},w_=t=>{var e;return(e=xv())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vM(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[zf(JSON.stringify(n)),zf(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM="FirebaseError";class ei extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yM,Object.setPrototypeOf(this,ei.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bu.prototype.create)}}class bu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?wM(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new ei(i,a,r)}}function wM(t,e){return t.replace(bM,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bM=/\{\$([^}]+)}/g;function SM(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function If(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(tb(o)&&tb(s)){if(!If(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tb(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xM(t,e){const n=new EM(t,e);return n.subscribe.bind(n)}class EM{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kM(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pp),i.error===void 0&&(i.error=pp),i.complete===void 0&&(i.complete=pp);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kM(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){return t&&t._delegate?t._delegate:t}class Po{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gM;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(TM(e))try{this.getOrInitializeService({instanceIdentifier:so})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=so){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=so){return this.instances.has(e)}getOptions(e=so){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CM(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=so){return this.component?this.component.multipleInstances?e:so:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CM(t){return t===so?void 0:t}function TM(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _M(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const IM={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},PM=we.INFO,OM={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},RM=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=OM[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ev{constructor(e){this.name=e,this._logLevel=PM,this._logHandler=RM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IM[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const NM=(t,e)=>e.some(n=>t instanceof n);let nb,rb;function AM(){return nb||(nb=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UM(){return rb||(rb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b_=new WeakMap,Wm=new WeakMap,S_=new WeakMap,mp=new WeakMap,kv=new WeakMap;function $M(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Ii(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&b_.set(n,t)}).catch(()=>{}),kv.set(e,t),e}function DM(t){if(Wm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Wm.set(t,e)}let Hm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||S_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ii(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MM(t){Hm=t(Hm)}function LM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gp(this),e,...n);return S_.set(r,e.sort?e.sort():[e]),Ii(r)}:UM().includes(t)?function(...e){return t.apply(gp(this),e),Ii(b_.get(this))}:function(...e){return Ii(t.apply(gp(this),e))}}function jM(t){return typeof t=="function"?LM(t):(t instanceof IDBTransaction&&DM(t),NM(t,AM())?new Proxy(t,Hm):t)}function Ii(t){if(t instanceof IDBRequest)return $M(t);if(mp.has(t))return mp.get(t);const e=jM(t);return e!==t&&(mp.set(t,e),kv.set(e,t)),e}const gp=t=>kv.get(t);function FM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Ii(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ii(s.result),l.oldVersion,l.newVersion,Ii(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const BM=["get","getKey","getAll","getAllKeys","count"],VM=["put","add","delete","clear"],vp=new Map;function ib(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vp.get(e))return vp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||BM.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return vp.set(e,o),o}MM(t=>({...t,get:(e,n,r)=>ib(e,n)||t.get(e,n,r),has:(e,n)=>!!ib(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qm="@firebase/app",ob="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Ev("@firebase/app"),qM="@firebase/app-compat",KM="@firebase/analytics-compat",GM="@firebase/analytics",YM="@firebase/app-check-compat",XM="@firebase/app-check",QM="@firebase/auth",JM="@firebase/auth-compat",ZM="@firebase/database",e3="@firebase/database-compat",t3="@firebase/functions",n3="@firebase/functions-compat",r3="@firebase/installations",i3="@firebase/installations-compat",o3="@firebase/messaging",s3="@firebase/messaging-compat",a3="@firebase/performance",l3="@firebase/performance-compat",u3="@firebase/remote-config",c3="@firebase/remote-config-compat",f3="@firebase/storage",d3="@firebase/storage-compat",h3="@firebase/firestore",p3="@firebase/firestore-compat",m3="firebase",g3="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="[DEFAULT]",v3={[qm]:"fire-core",[qM]:"fire-core-compat",[GM]:"fire-analytics",[KM]:"fire-analytics-compat",[XM]:"fire-app-check",[YM]:"fire-app-check-compat",[QM]:"fire-auth",[JM]:"fire-auth-compat",[ZM]:"fire-rtdb",[e3]:"fire-rtdb-compat",[t3]:"fire-fn",[n3]:"fire-fn-compat",[r3]:"fire-iid",[i3]:"fire-iid-compat",[o3]:"fire-fcm",[s3]:"fire-fcm-compat",[a3]:"fire-perf",[l3]:"fire-perf-compat",[u3]:"fire-rc",[c3]:"fire-rc-compat",[f3]:"fire-gcs",[d3]:"fire-gcs-compat",[h3]:"fire-fst",[p3]:"fire-fst-compat","fire-js":"fire-js",[m3]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map,Gm=new Map;function y3(t,e){try{t.container.addComponent(e)}catch(n){Oo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qs(t){const e=t.name;if(Gm.has(e))return Oo.debug(`There were multiple attempts to register component ${e}.`),!1;Gm.set(e,t);for(const n of Pf.values())y3(n,t);return!0}function _v(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w3={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pi=new bu("app","Firebase",w3);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b3{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Po("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=g3;function x_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Km,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pi.create("bad-app-name",{appName:String(i)});if(n||(n=mM()),!n)throw Pi.create("no-options");const o=Pf.get(i);if(o){if(If(n,o.options)&&If(r,o.config))return o;throw Pi.create("duplicate-app",{appName:i})}const s=new zM(i);for(const l of Gm.values())s.addComponent(l);const a=new b3(n,r,s);return Pf.set(i,a),a}function E_(t=Km){const e=Pf.get(t);if(!e&&t===Km)return x_();if(!e)throw Pi.create("no-app",{appName:t});return e}function Oi(t,e,n){var r;let i=(r=v3[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oo.warn(a.join(" "));return}Qs(new Po(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S3="firebase-heartbeat-database",x3=1,Vl="firebase-heartbeat-store";let yp=null;function k_(){return yp||(yp=FM(S3,x3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vl)}}}).catch(t=>{throw Pi.create("idb-open",{originalErrorMessage:t.message})})),yp}async function E3(t){var e;try{return(await k_()).transaction(Vl).objectStore(Vl).get(__(t))}catch(n){if(n instanceof ei)Oo.warn(n.message);else{const r=Pi.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Oo.warn(r.message)}}}async function sb(t,e){var n;try{const i=(await k_()).transaction(Vl,"readwrite");return await i.objectStore(Vl).put(e,__(t)),i.done}catch(r){if(r instanceof ei)Oo.warn(r.message);else{const i=Pi.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Oo.warn(i.message)}}}function __(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k3=1024,_3=30*24*60*60*1e3;class C3{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new z3(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ab();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=_3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ab(),{heartbeatsToSend:n,unsentEntries:r}=T3(this._heartbeatsCache.heartbeats),i=zf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ab(){return new Date().toISOString().substring(0,10)}function T3(t,e=k3){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),lb(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lb(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class z3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lM()?uM().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await E3(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sb(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sb(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lb(t){return zf(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I3(t){Qs(new Po("platform-logger",e=>new WM(e),"PRIVATE")),Qs(new Po("heartbeat",e=>new C3(e),"PRIVATE")),Oi(qm,ob,t),Oi(qm,ob,"esm2017"),Oi("fire-js","")}I3("");var P3="firebase",O3="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oi(P3,O3,"app");var R3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Y,Cv=Cv||{},ne=R3||self;function Of(){}function Vd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Eu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function N3(t){return Object.prototype.hasOwnProperty.call(t,wp)&&t[wp]||(t[wp]=++A3)}var wp="closure_uid_"+(1e9*Math.random()>>>0),A3=0;function U3(t,e,n){return t.call.apply(t.bind,arguments)}function $3(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ut=U3:Ut=$3,Ut.apply(null,arguments)}function vc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ct(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return e.prototype[i].apply(r,s)}}function qi(){this.s=this.s,this.o=this.o}var D3=0;qi.prototype.s=!1;qi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),D3!=0)&&N3(this)};qi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Tv(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ub(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Vd(r)){const i=t.length||0,o=r.length||0;t.length=i+o;for(let s=0;s<o;s++)t[i+s]=r[s]}else t.push(r)}}function $t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}$t.prototype.h=function(){this.defaultPrevented=!0};var M3=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",Of,e),ne.removeEventListener("test",Of,e)}catch{}return t}();function Rf(t){return/^[\s\xa0]*$/.test(t)}var cb=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function bp(t,e){return t<e?-1:t>e?1:0}function Wd(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function ar(t){return Wd().indexOf(t)!=-1}function zv(t){return zv[" "](t),t}zv[" "]=Of;function L3(t){var e=B3;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var j3=ar("Opera"),Js=ar("Trident")||ar("MSIE"),T_=ar("Edge"),Ym=T_||Js,z_=ar("Gecko")&&!(Wd().toLowerCase().indexOf("webkit")!=-1&&!ar("Edge"))&&!(ar("Trident")||ar("MSIE"))&&!ar("Edge"),F3=Wd().toLowerCase().indexOf("webkit")!=-1&&!ar("Edge");function I_(){var t=ne.document;return t?t.documentMode:void 0}var Nf;e:{var Sp="",xp=function(){var t=Wd();if(z_)return/rv:([^\);]+)(\)|;)/.exec(t);if(T_)return/Edge\/([\d\.]+)/.exec(t);if(Js)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(F3)return/WebKit\/(\S+)/.exec(t);if(j3)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xp&&(Sp=xp?xp[1]:""),Js){var Ep=I_();if(Ep!=null&&Ep>parseFloat(Sp)){Nf=String(Ep);break e}}Nf=Sp}var B3={};function V3(){return L3(function(){let t=0;const e=cb(String(Nf)).split("."),n=cb("9").split("."),r=Math.max(e.length,n.length);for(let s=0;t==0&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i[0].length==0&&o[0].length==0)break;t=bp(i[1].length==0?0:parseInt(i[1],10),o[1].length==0?0:parseInt(o[1],10))||bp(i[2].length==0,o[2].length==0)||bp(i[2],o[2]),i=i[3],o=o[3]}while(t==0)}return 0<=t})}var Xm;if(ne.document&&Js){var fb=I_();Xm=fb||parseInt(Nf,10)||void 0}else Xm=void 0;var W3=Xm;function Wl(t,e){if($t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(z_){e:{try{zv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:H3[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Wl.X.h.call(this)}}Ct(Wl,$t);var H3={2:"touch",3:"pen",4:"mouse"};Wl.prototype.h=function(){Wl.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ku="closure_listenable_"+(1e6*Math.random()|0),q3=0;function K3(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++q3,this.ba=this.ea=!1}function Hd(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Iv(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function P_(t){const e={};for(const n in t)e[n]=t[n];return e}const db="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O_(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let o=0;o<db.length;o++)n=db[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function qd(t){this.src=t,this.g={},this.h=0}qd.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=Jm(t,e,r,i);return-1<s?(e=t[s],n||(e.ea=!1)):(e=new K3(e,this.src,o,!!r,i),e.ea=n,t.push(e)),e};function Qm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=C_(r,e),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(Hd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Jm(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ba&&o.listener==e&&o.capture==!!n&&o.ha==r)return i}return-1}var Pv="closure_lm_"+(1e6*Math.random()|0),kp={};function R_(t,e,n,r,i){if(r&&r.once)return A_(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)R_(t,e[o],n,r,i);return null}return n=Nv(n),t&&t[ku]?t.N(e,n,Eu(r)?!!r.capture:!!r,i):N_(t,e,n,!1,r,i)}function N_(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=Eu(i)?!!i.capture:!!i,a=Rv(t);if(a||(t[Pv]=a=new qd(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=G3(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)M3||(i=s),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent($_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function G3(){function t(n){return e.call(t.src,t.listener,n)}const e=Y3;return t}function A_(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)A_(t,e[o],n,r,i);return null}return n=Nv(n),t&&t[ku]?t.O(e,n,Eu(r)?!!r.capture:!!r,i):N_(t,e,n,!0,r,i)}function U_(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)U_(t,e[o],n,r,i);else r=Eu(r)?!!r.capture:!!r,n=Nv(n),t&&t[ku]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=Jm(o,n,r,i),-1<n&&(Hd(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=Rv(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jm(e,n,r,i)),(n=-1<t?e[t]:null)&&Ov(n))}function Ov(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ku])Qm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent($_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Rv(e))?(Qm(n,t),n.h==0&&(n.src=null,e[Pv]=null)):Hd(t)}}}function $_(t){return t in kp?kp[t]:kp[t]="on"+t}function Y3(t,e){if(t.ba)t=!0;else{e=new Wl(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Ov(t),t=n.call(r,e)}return t}function Rv(t){return t=t[Pv],t instanceof qd?t:null}var _p="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nv(t){return typeof t=="function"?t:(t[_p]||(t[_p]=function(e){return t.handleEvent(e)}),t[_p])}function pt(){qi.call(this),this.i=new qd(this),this.P=this,this.I=null}Ct(pt,qi);pt.prototype[ku]=!0;pt.prototype.removeEventListener=function(t,e,n,r){U_(this,t,e,n,r)};function kt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new $t(e,t);else if(e instanceof $t)e.target=e.target||t;else{var i=e;e=new $t(r,t),O_(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=yc(s,r,!0,e)&&i}if(s=e.g=t,i=yc(s,r,!0,e)&&i,i=yc(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=yc(s,r,!1,e)&&i}pt.prototype.M=function(){if(pt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Hd(n[r]);delete t.g[e],t.h--}}this.I=null};pt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};pt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&Qm(t.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Av=ne.JSON.stringify;function X3(){var t=L_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Q3{constructor(){this.h=this.g=null}add(e,n){const r=D_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var D_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new J3,t=>t.reset());class J3{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Z3(t){ne.setTimeout(()=>{throw t},0)}function M_(t,e){Zm||e4(),eg||(Zm(),eg=!0),L_.add(t,e)}var Zm;function e4(){var t=ne.Promise.resolve(void 0);Zm=function(){t.then(t4)}}var eg=!1,L_=new Q3;function t4(){for(var t;t=X3();){try{t.h.call(t.g)}catch(n){Z3(n)}var e=D_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}eg=!1}function Kd(t,e){pt.call(this),this.h=t||1,this.g=e||ne,this.j=Ut(this.lb,this),this.l=Date.now()}Ct(Kd,pt);Y=Kd.prototype;Y.ca=!1;Y.R=null;Y.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),kt(this,"tick"),this.ca&&(Uv(this),this.start()))}};Y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uv(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Y.M=function(){Kd.X.M.call(this),Uv(this),delete this.g};function $v(t,e,n){if(typeof t=="function")n&&(t=Ut(t,n));else if(t&&typeof t.handleEvent=="function")t=Ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function j_(t){t.g=$v(()=>{t.g=null,t.i&&(t.i=!1,j_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class n4 extends qi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:j_(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hl(t){qi.call(this),this.h=t,this.g={}}Ct(Hl,qi);var hb=[];function F_(t,e,n,r){Array.isArray(n)||(n&&(hb[0]=n.toString()),n=hb);for(var i=0;i<n.length;i++){var o=R_(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function B_(t){Iv(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ov(e)},t),t.g={}}Hl.prototype.M=function(){Hl.X.M.call(this),B_(this)};Hl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gd(){this.g=!0}Gd.prototype.Aa=function(){this.g=!1};function r4(t,e,n,r,i,o){t.info(function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var d=u[0];u=u[1];var p=d.split("_");s=2<=p.length&&p[1]=="type"?s+(d+"="+u+"&"):s+(d+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+s})}function i4(t,e,n,r,i,o,s){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+o+" "+s})}function gs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+s4(t,n)+(r?" "+r:"")})}function o4(t,e){t.info(function(){return"TIMEOUT: "+e})}Gd.prototype.info=function(){};function s4(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return Av(n)}catch{return e}}var Mo={},pb=null;function Yd(){return pb=pb||new pt}Mo.Pa="serverreachability";function V_(t){$t.call(this,Mo.Pa,t)}Ct(V_,$t);function ql(t){const e=Yd();kt(e,new V_(e))}Mo.STAT_EVENT="statevent";function W_(t,e){$t.call(this,Mo.STAT_EVENT,t),this.stat=e}Ct(W_,$t);function Ht(t){const e=Yd();kt(e,new W_(e,t))}Mo.Qa="timingevent";function H_(t,e){$t.call(this,Mo.Qa,t),this.size=e}Ct(H_,$t);function _u(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var Xd={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},q_={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Dv(){}Dv.prototype.h=null;function mb(t){return t.h||(t.h=t.i())}function K_(){}var Cu={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Mv(){$t.call(this,"d")}Ct(Mv,$t);function Lv(){$t.call(this,"c")}Ct(Lv,$t);var tg;function Qd(){}Ct(Qd,Dv);Qd.prototype.g=function(){return new XMLHttpRequest};Qd.prototype.i=function(){return{}};tg=new Qd;function Tu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Hl(this),this.O=a4,t=Ym?125:void 0,this.T=new Kd(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new G_}function G_(){this.i=null,this.g="",this.h=!1}var a4=45e3,ng={},Af={};Y=Tu.prototype;Y.setTimeout=function(t){this.O=t};function rg(t,e,n){t.K=1,t.v=Zd(Hr(e)),t.s=n,t.P=!0,Y_(t,null)}function Y_(t,e){t.F=Date.now(),zu(t),t.A=Hr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),rC(n.i,"t",r),t.C=0,n=t.l.H,t.h=new G_,t.g=kC(t.l,n?e:null,!t.s),0<t.N&&(t.L=new n4(Ut(t.La,t,t.g),t.N)),F_(t.S,t.g,"readystatechange",t.ib),e=t.H?P_(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ql(),r4(t.j,t.u,t.A,t.m,t.U,t.s)}Y.ib=function(t){t=t.target;const e=this.L;e&&Rr(t)==3?e.l():this.La(t)};Y.La=function(t){try{if(t==this.g)e:{const d=Rr(this.g);var e=this.g.Ea();const p=this.g.aa();if(!(3>d)&&(d!=3||Ym||this.g&&(this.h.h||this.g.fa()||wb(this.g)))){this.I||d!=4||e==7||(e==8||0>=p?ql(3):ql(2)),Jd(this);var n=this.g.aa();this.Y=n;t:if(X_(this)){var r=wb(this.g);t="";var i=r.length,o=Rr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){co(this),fl(this);var s="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=n==200,i4(this.j,this.u,this.A,this.m,this.U,d,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rf(a)){var u=a;break t}}u=null}if(n=u)gs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ig(this,n);else{this.i=!1,this.o=3,Ht(12),co(this),fl(this);break e}}this.P?(Q_(this,d,s),Ym&&this.i&&d==3&&(F_(this.S,this.T,"tick",this.hb),this.T.start())):(gs(this.j,this.m,s,null),ig(this,s)),d==4&&co(this),this.i&&!this.I&&(d==4?bC(this.l,this):(this.i=!1,zu(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,Ht(12)):(this.o=0,Ht(13)),co(this),fl(this)}}}catch{}finally{}};function X_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Q_(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=l4(t,n),i==Af){e==4&&(t.o=4,Ht(14),r=!1),gs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ng){t.o=4,Ht(15),gs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else gs(t.j,t.m,i,null),ig(t,i);X_(t)&&i!=Af&&i!=ng&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ht(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qv(e),e.K=!0,Ht(11))):(gs(t.j,t.m,n,"[Invalid Chunked Response]"),co(t),fl(t))}Y.hb=function(){if(this.g){var t=Rr(this.g),e=this.g.fa();this.C<e.length&&(Jd(this),Q_(this,t,e),this.i&&t!=4&&zu(this))}};function l4(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Af:(n=Number(e.substring(n,r)),isNaN(n)?ng:(r+=1,r+n>e.length?Af:(e=e.substr(r,n),t.C=r+n,e)))}Y.cancel=function(){this.I=!0,co(this)};function zu(t){t.V=Date.now()+t.O,J_(t,t.O)}function J_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=_u(Ut(t.gb,t),e)}function Jd(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}Y.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(o4(this.j,this.A),this.K!=2&&(ql(),Ht(17)),co(this),this.o=2,fl(this)):J_(this,this.V-t)};function fl(t){t.l.G==0||t.I||bC(t.l,t)}function co(t){Jd(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Uv(t.T),B_(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ig(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||og(n.h,t))){if(!t.J&&og(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Df(n),nh(n);else break e;Hv(n),Ht(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=_u(Ut(n.cb,n),6e3));if(1>=sC(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else fo(n,11)}else if((t.J||n.g==t)&&Df(n),!Rf(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const d=u[3];d!=null&&(n.ma=d,n.j.info("VER="+n.ma));const p=u[4];p!=null&&(n.Ca=p,n.j.info("SVER="+n.Ca));const m=u[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const v=t.g;if(v){const w=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var o=r.h;o.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(jv(o,o.h),o.h=null))}if(r.D){const y=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,Ue(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=t;if(r.sa=EC(r,r.H?r.ka:null,r.V),s.J){aC(r.h,s);var a=s,l=r.J;l&&a.setTimeout(l),a.B&&(Jd(a),zu(a)),r.g=s}else yC(r);0<n.i.length&&rh(n)}else u[0]!="stop"&&u[0]!="close"||fo(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?fo(n,7):Wv(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ql(4)}catch{}}function u4(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Vd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function c4(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Vd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Z_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=c4(t),r=u4(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}var eC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function f4(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function vo(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof vo){this.h=e!==void 0?e:t.h,Uf(this,t.j),this.s=t.s,this.g=t.g,$f(this,t.m),this.l=t.l,e=t.i;var n=new Kl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),gb(this,n),this.o=t.o}else t&&(n=String(t).match(eC))?(this.h=!!e,Uf(this,n[1]||"",!0),this.s=Ga(n[2]||""),this.g=Ga(n[3]||"",!0),$f(this,n[4]),this.l=Ga(n[5]||"",!0),gb(this,n[6]||"",!0),this.o=Ga(n[7]||"")):(this.h=!!e,this.i=new Kl(null,this.h))}vo.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ya(e,vb,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ya(e,vb,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ya(n,n.charAt(0)=="/"?p4:h4,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ya(n,g4)),t.join("")};function Hr(t){return new vo(t)}function Uf(t,e,n){t.j=n?Ga(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $f(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function gb(t,e,n){e instanceof Kl?(t.i=e,v4(t.i,t.h)):(n||(e=Ya(e,m4)),t.i=new Kl(e,t.h))}function Ue(t,e,n){t.i.set(e,n)}function Zd(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ga(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ya(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,d4),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function d4(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vb=/[#\/\?@]/g,h4=/[#\?:]/g,p4=/[#\?]/g,m4=/[#\?@]/g,g4=/#/g;function Kl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ki(t){t.g||(t.g=new Map,t.h=0,t.i&&f4(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Y=Kl.prototype;Y.add=function(t,e){Ki(this),this.i=null,t=ha(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function tC(t,e){Ki(t),e=ha(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nC(t,e){return Ki(t),e=ha(t,e),t.g.has(e)}Y.forEach=function(t,e){Ki(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};Y.oa=function(){Ki(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let o=0;o<i.length;o++)n.push(e[r])}return n};Y.W=function(t){Ki(this);let e=[];if(typeof t=="string")nC(this,t)&&(e=e.concat(this.g.get(ha(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Y.set=function(t,e){return Ki(this),this.i=null,t=ha(this,t),nC(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Y.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function rC(t,e,n){tC(t,e),0<n.length&&(t.i=null,t.g.set(ha(t,e),Tv(n)),t.h+=n.length)}Y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};function ha(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function v4(t,e){e&&!t.j&&(Ki(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(tC(this,r),rC(this,i,n))},t)),t.j=e}var y4=class{constructor(t,e){this.h=t,this.g=e}};function iC(t){this.l=t||w4,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ga&&ne.g.Ga()&&ne.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var w4=10;function oC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function sC(t){return t.h?1:t.g?t.g.size:0}function og(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jv(t,e){t.g?t.g.add(e):t.h=e}function aC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}iC.prototype.cancel=function(){if(this.i=lC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function lC(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Tv(t.i)}function Fv(){}Fv.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)};Fv.prototype.parse=function(t){return ne.JSON.parse(t,void 0)};function b4(){this.g=new Fv}function S4(t,e,n){const r=n||"";try{Z_(t,function(i,o){let s=i;Eu(i)&&(s=Av(i)),e.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function x4(t,e){const n=new Gd;if(ne.Image){const r=new Image;r.onload=vc(wc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=vc(wc,n,r,"TestLoadImage: error",!1,e),r.onabort=vc(wc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=vc(wc,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function wc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Iu(t){this.l=t.ac||null,this.j=t.jb||!1}Ct(Iu,Dv);Iu.prototype.g=function(){return new eh(this.l,this.j)};Iu.prototype.i=function(t){return function(){return t}}({});function eh(t,e){pt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Bv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ct(eh,pt);var Bv=0;Y=eh.prototype;Y.open=function(t,e){if(this.readyState!=Bv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Gl(this)};Y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ne).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};Y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pu(this)),this.readyState=Bv};Y.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Gl(this)),this.g&&(this.readyState=3,Gl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uC(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function uC(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}Y.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pu(this):Gl(this),this.readyState==3&&uC(this)}};Y.Va=function(t){this.g&&(this.response=this.responseText=t,Pu(this))};Y.Ua=function(t){this.g&&(this.response=t,Pu(this))};Y.ga=function(){this.g&&Pu(this)};function Pu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Gl(t)}Y.setRequestHeader=function(t,e){this.v.append(t,e)};Y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Gl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(eh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var E4=ne.JSON.parse;function Ke(t){pt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=cC,this.K=this.L=!1}Ct(Ke,pt);var cC="",k4=/^https?$/i,_4=["POST","PUT"];Y=Ke.prototype;Y.Ka=function(t){this.L=t};Y.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():tg.g(),this.C=this.u?mb(this.u):mb(tg),this.g.onreadystatechange=Ut(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){yb(this,o);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=ne.FormData&&t instanceof ne.FormData,!(0<=C_(_4,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{hC(this),0<this.B&&((this.K=C4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ut(this.qa,this)):this.A=$v(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){yb(this,o)}};function C4(t){return Js&&V3()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Y.qa=function(){typeof Cv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))};function yb(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fC(t),th(t)}function fC(t){t.D||(t.D=!0,kt(t,"complete"),kt(t,"error"))}Y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),th(this))};Y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),th(this,!0)),Ke.X.M.call(this)};Y.Ha=function(){this.s||(this.F||this.v||this.l?dC(this):this.fb())};Y.fb=function(){dC(this)};function dC(t){if(t.h&&typeof Cv<"u"&&(!t.C[1]||Rr(t)!=4||t.aa()!=2)){if(t.v&&Rr(t)==4)$v(t.Ha,0,t);else if(kt(t,"readystatechange"),Rr(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(eC)[1]||null;if(!i&&ne.self&&ne.self.location){var o=ne.self.location.protocol;i=o.substr(0,o.length-1)}r=!k4.test(i?i.toLowerCase():"")}n=r}if(n)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var s=2<Rr(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.aa()+"]",fC(t)}}finally{th(t)}}}}function th(t,e){if(t.g){hC(t);const n=t.g,r=t.C[0]?Of:null;t.g=null,t.C=null,e||kt(t,"ready");try{n.onreadystatechange=r}catch{}}}function hC(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function Rr(t){return t.g?t.g.readyState:0}Y.aa=function(){try{return 2<Rr(this)?this.g.status:-1}catch{return-1}};Y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Y.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),E4(e)}};function wb(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case cC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Y.Ea=function(){return this.m};Y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pC(t){let e="";return Iv(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Vv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=pC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ue(t,e,n))}function La(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mC(t){this.Ca=0,this.i=[],this.j=new Gd,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=La("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=La("baseRetryDelayMs",5e3,t),this.bb=La("retryDelaySeedMs",1e4,t),this.$a=La("forwardChannelMaxRetries",2,t),this.ta=La("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new iC(t&&t.concurrentRequestLimit),this.Fa=new b4,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Y=mC.prototype;Y.ma=8;Y.G=1;function Wv(t){if(gC(t),t.G==3){var e=t.U++,n=Hr(t.F);Ue(n,"SID",t.I),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),Ou(t,n),e=new Tu(t,t.j,e,void 0),e.K=2,e.v=Zd(Hr(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=kC(e.l,null),e.g.da(e.v)),e.F=Date.now(),zu(e)}xC(t)}function nh(t){t.g&&(qv(t),t.g.cancel(),t.g=null)}function gC(t){nh(t),t.u&&(ne.clearTimeout(t.u),t.u=null),Df(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function rh(t){oC(t.h)||t.m||(t.m=!0,M_(t.Ja,t),t.C=0)}function T4(t,e){return sC(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=_u(Ut(t.Ja,t,e),SC(t,t.C)),t.C++,!0)}Y.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Tu(this,this.j,t,void 0);let o=this.s;if(this.S&&(o?(o=P_(o),O_(o,this.S)):o=this.S),this.o!==null||this.N||(i.H=o,o=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vC(this,i,e),n=Hr(this.F),Ue(n,"RID",t),Ue(n,"CVER",22),this.D&&Ue(n,"X-HTTP-Session-Id",this.D),Ou(this,n),o&&(this.N?e="headers="+encodeURIComponent(String(pC(o)))+"&"+e:this.o&&Vv(n,this.o,o)),jv(this.h,i),this.Ya&&Ue(n,"TYPE","init"),this.O?(Ue(n,"$req",e),Ue(n,"SID","null"),i.Z=!0,rg(i,n,null)):rg(i,n,e),this.G=2}}else this.G==3&&(t?bb(this,t):this.i.length==0||oC(this.h)||bb(this))};function bb(t,e){var n;e?n=e.m:n=t.U++;const r=Hr(t.F);Ue(r,"SID",t.I),Ue(r,"RID",n),Ue(r,"AID",t.T),Ou(t,r),t.o&&t.s&&Vv(r,t.o,t.s),n=new Tu(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=vC(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),jv(t.h,n),rg(n,r,e)}function Ou(t,e){t.ia&&Iv(t.ia,function(n,r){Ue(e,r,n)}),t.l&&Z_({},function(n,r){Ue(e,r,n)})}function vC(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ut(t.l.Ra,t.l,t):null;e:{var i=t.i;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const d=i[l].g;if(u-=o,0>u)o=Math.max(0,i[l].h-100),a=!1;else try{S4(d,s,"req"+u+"_")}catch{r&&r(d)}}if(a){r=s.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function yC(t){t.g||t.u||(t.Z=1,M_(t.Ia,t),t.A=0)}function Hv(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=_u(Ut(t.Ia,t),SC(t,t.A)),t.A++,!0)}Y.Ia=function(){if(this.u=null,wC(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=_u(Ut(this.eb,this),t)}};Y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ht(10),nh(this),wC(this))};function qv(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function wC(t){t.g=new Tu(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Hr(t.sa);Ue(e,"RID","rpc"),Ue(e,"SID",t.I),Ue(e,"CI",t.L?"0":"1"),Ue(e,"AID",t.T),Ue(e,"TYPE","xmlhttp"),Ou(t,e),t.o&&t.s&&Vv(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Zd(Hr(e)),n.s=null,n.P=!0,Y_(n,t)}Y.cb=function(){this.v!=null&&(this.v=null,nh(this),Hv(this),Ht(19))};function Df(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function bC(t,e){var n=null;if(t.g==e){Df(t),qv(t),t.g=null;var r=2}else if(og(t.h,e))n=e.D,aC(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Yd(),kt(r,new H_(r,n)),rh(t)}else yC(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&T4(t,e)||r==2&&Hv(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:fo(t,5);break;case 4:fo(t,10);break;case 3:fo(t,6);break;default:fo(t,2)}}}function SC(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function fo(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ut(t.kb,t);n||(n=new vo("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||Uf(n,"https"),Zd(n)),x4(n.toString(),r)}else Ht(2);t.G=0,t.l&&t.l.va(e),xC(t),gC(t)}Y.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ht(2)):(this.j.info("Failed to ping google.com"),Ht(1))};function xC(t){if(t.G=0,t.la=[],t.l){const e=lC(t.h);(e.length!=0||t.i.length!=0)&&(ub(t.la,e),ub(t.la,t.i),t.h.i.length=0,Tv(t.i),t.i.length=0),t.l.ua()}}function EC(t,e,n){var r=n instanceof vo?Hr(n):new vo(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),$f(r,r.m);else{var i=ne.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new vo(null,void 0);r&&Uf(o,r),e&&(o.g=e),i&&$f(o,i),n&&(o.l=n),r=o}return n=t.D,e=t.za,n&&e&&Ue(r,n,e),Ue(r,"VER",t.ma),Ou(t,r),r}function kC(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ke(new Iu({jb:!0})):new Ke(t.ra),e.Ka(t.H),e}function _C(){}Y=_C.prototype;Y.xa=function(){};Y.wa=function(){};Y.va=function(){};Y.ua=function(){};Y.Ra=function(){};function Mf(){if(Js&&!(10<=Number(W3)))throw Error("Environmental error: no available transport.")}Mf.prototype.g=function(t,e){return new xn(t,e)};function xn(t,e){pt.call(this),this.g=new mC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Rf(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rf(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new pa(this)}Ct(xn,pt);xn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ht(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=EC(t,null,t.V),rh(t)};xn.prototype.close=function(){Wv(this.g)};xn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Av(t),t=n);e.i.push(new y4(e.ab++,t)),e.G==3&&rh(e)};xn.prototype.M=function(){this.g.l=null,delete this.j,Wv(this.g),delete this.g,xn.X.M.call(this)};function CC(t){Mv.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ct(CC,Mv);function TC(){Lv.call(this),this.status=1}Ct(TC,Lv);function pa(t){this.g=t}Ct(pa,_C);pa.prototype.xa=function(){kt(this.g,"a")};pa.prototype.wa=function(t){kt(this.g,new CC(t))};pa.prototype.va=function(t){kt(this.g,new TC)};pa.prototype.ua=function(){kt(this.g,"b")};Mf.prototype.createWebChannel=Mf.prototype.g;xn.prototype.send=xn.prototype.u;xn.prototype.open=xn.prototype.m;xn.prototype.close=xn.prototype.close;Xd.NO_ERROR=0;Xd.TIMEOUT=8;Xd.HTTP_ERROR=6;q_.COMPLETE="complete";K_.EventType=Cu;Cu.OPEN="a";Cu.CLOSE="b";Cu.ERROR="c";Cu.MESSAGE="d";pt.prototype.listen=pt.prototype.N;Ke.prototype.listenOnce=Ke.prototype.O;Ke.prototype.getLastError=Ke.prototype.Oa;Ke.prototype.getLastErrorCode=Ke.prototype.Ea;Ke.prototype.getStatus=Ke.prototype.aa;Ke.prototype.getResponseJson=Ke.prototype.Sa;Ke.prototype.getResponseText=Ke.prototype.fa;Ke.prototype.send=Ke.prototype.da;Ke.prototype.setWithCredentials=Ke.prototype.Ka;var z4=function(){return new Mf},I4=function(){return Yd()},Cp=Xd,P4=q_,O4=Mo,Sb={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},R4=Iu,bc=K_,N4=Ke;const xb="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Nt.UNAUTHENTICATED=new Nt(null),Nt.GOOGLE_CREDENTIALS=new Nt("google-credentials-uid"),Nt.FIRST_PARTY=new Nt("first-party-uid"),Nt.MOCK_USER=new Nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Ev("@firebase/firestore");function Eb(){return Ro.logLevel}function J(t,...e){if(Ro.logLevel<=we.DEBUG){const n=e.map(Kv);Ro.debug(`Firestore (${ma}): ${t}`,...n)}}function qr(t,...e){if(Ro.logLevel<=we.ERROR){const n=e.map(Kv);Ro.error(`Firestore (${ma}): ${t}`,...n)}}function sg(t,...e){if(Ro.logLevel<=we.WARN){const n=e.map(Kv);Ro.warn(`Firestore (${ma}): ${t}`,...n)}}function Kv(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${ma}) INTERNAL ASSERTION FAILED: `+t;throw qr(e),new Error(e)}function it(t,e){t||oe()}function ve(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends ei{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Nt.UNAUTHENTICATED))}shutdown(){}}class U4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $4{constructor(e){this.t=e,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new zs;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new zs,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new zs)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(it(typeof r.accessToken=="string"),new zC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return it(e===null||typeof e=="string"),new Nt(e)}}class D4{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(it(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class M4{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new D4(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class j4{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=o=>{o.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.A;return this.A=o.token,J("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.T.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.T.getImmediate({optional:!0});o?i(o):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(it(typeof n.token=="string"),this.A=n.token,new L4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=F4(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return fn.fromMillis(Date.now())}static fromDate(e){return fn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new fn(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new fn(0,0))}static max(){return new ae(new fn(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Yl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends Yl{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const V4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nn extends Yl{construct(e,n,r){return new nn(e,n,r)}static isValidIdentifier(e){return V4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nn(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ee(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ee(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new ee(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nn(n)}static emptyPath(){return new nn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(qe.fromString(e))}static fromName(e){return new Z(qe.fromString(e).popFirst(5))}static empty(){return new Z(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new qe(e.slice()))}}function W4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new fn(n+1,0):new fn(n,r));return new Ui(i,Z.empty(),e)}function H4(t){return new Ui(t.readTime,t.key,-1)}class Ui{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ui(ae.min(),Z.empty(),-1)}static max(){return new Ui(ae.max(),Z.empty(),-1)}}function q4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class G4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gv(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==K4)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const u=l;n(e[u]).next(d=>{s[u]=d,++a,a===o&&r(s)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function Ru(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ih(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Y4(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yv.at=-1;class mt{constructor(e,n){this.comparator=e,this.root=n||bt.EMPTY}insert(e,n){return new mt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new mt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sc(this.root,e,this.comparator,!0)}}class Sc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r!=null?r:bt.RED,this.left=i!=null?i:bt.EMPTY,this.right=o!=null?o:bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new bt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return bt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(t,e,n,r,i){return this}insert(t,e,n){return new bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new mt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _b(this.data.getIterator())}getIteratorFrom(e){return new _b(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class _b{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.fields=e,e.sort(nn.comparator)}static empty(){return new yo([])}unionWith(e){let n=new ut(nn.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yo(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Lt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Lt.EMPTY_BYTE_STRING=new Lt("");const X4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $i(t){if(it(!!t),typeof t=="string"){let e=0;const n=X4.exec(t);if(it(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ea(t){return typeof t=="string"?Lt.fromBase64String(t):Lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function PC(t){const e=t.mapValue.fields.__previous_value__;return IC(e)?PC(e):e}function Xl(t){const e=$i(t.mapValue.fields.__local_write_time__.timestampValue);return new fn(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(e,n,r,i,o,s,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ql{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ql("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ql&&e.projectId===this.projectId&&e.database===this.database}}function oh(t){return t==null}function ag(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function No(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?IC(t)?4:J4(t)?9007199254740991:10:oe()}function yr(t,e){if(t===e)return!0;const n=No(t);if(n!==No(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xl(t).isEqual(Xl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=$i(r.timestampValue),s=$i(i.timestampValue);return o.seconds===s.seconds&&o.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ea(r.bytesValue).isEqual(ea(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return tt(r.geoPointValue.latitude)===tt(i.geoPointValue.latitude)&&tt(r.geoPointValue.longitude)===tt(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return tt(r.integerValue)===tt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=tt(r.doubleValue),s=tt(i.doubleValue);return o===s?ag(o)===ag(s):isNaN(o)&&isNaN(s)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],yr);case 10:return function(r,i){const o=r.mapValue.fields||{},s=i.mapValue.fields||{};if(kb(o)!==kb(s))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(s[a]===void 0||!yr(o[a],s[a])))return!1;return!0}(t,e);default:return oe()}}function Jl(t,e){return(t.values||[]).find(n=>yr(n,e))!==void 0}function ta(t,e){if(t===e)return 0;const n=No(t),r=No(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const s=tt(i.integerValue||i.doubleValue),a=tt(o.integerValue||o.doubleValue);return s<a?-1:s>a?1:s===a?0:isNaN(s)?isNaN(a)?0:-1:1}(t,e);case 3:return Cb(t.timestampValue,e.timestampValue);case 4:return Cb(Xl(t),Xl(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(i,o){const s=ea(i),a=ea(o);return s.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const s=i.split("/"),a=o.split("/");for(let l=0;l<s.length&&l<a.length;l++){const u=xe(s[l],a[l]);if(u!==0)return u}return xe(s.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const s=xe(tt(i.latitude),tt(o.latitude));return s!==0?s:xe(tt(i.longitude),tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const s=i.values||[],a=o.values||[];for(let l=0;l<s.length&&l<a.length;++l){const u=ta(s[l],a[l]);if(u)return u}return xe(s.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===xc.mapValue&&o===xc.mapValue)return 0;if(i===xc.mapValue)return 1;if(o===xc.mapValue)return-1;const s=i.fields||{},a=Object.keys(s),l=o.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let d=0;d<a.length&&d<u.length;++d){const p=xe(a[d],u[d]);if(p!==0)return p;const m=ta(s[a[d]],l[u[d]]);if(m!==0)return m}return xe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw oe()}}function Cb(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=$i(t),r=$i(e),i=xe(n.seconds,r.seconds);return i!==0?i:xe(n.nanos,r.nanos)}function Is(t){return lg(t)}function lg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=$i(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ea(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",o=!0;for(const s of r.values||[])o?o=!1:i+=",",i+=lg(s);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let o="{",s=!0;for(const a of i)s?s=!1:o+=",",o+=`${a}:${lg(r.fields[a])}`;return o+"}"}(t.mapValue):oe();var e,n}function ug(t){return!!t&&"integerValue"in t}function Xv(t){return!!t&&"arrayValue"in t}function Tb(t){return!!t&&"nullValue"in t}function zb(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tp(t){return!!t&&"mapValue"in t}function dl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ih(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=dl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=dl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function J4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.value=e}static empty(){return new lr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Tp(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=dl(n)}setAll(e){let n=nn.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=dl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Tp(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Tp(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ih(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new lr(dl(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n,r,i,o,s){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=o,this.documentState=s}static newInvalidDocument(e){return new xt(e,0,ae.min(),ae.min(),lr.empty(),0)}static newFoundDocument(e,n,r){return new xt(e,1,n,ae.min(),r,0)}static newNoDocument(e,n){return new xt(e,2,n,ae.min(),lr.empty(),0)}static newUnknownDocument(e,n){return new xt(e,3,n,ae.min(),lr.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z4{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ht=null}}function Ib(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Z4(t,e,n,r,i,o,s)}function Qv(t){const e=ve(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Is(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),e.ht=n}return e.ht}function eL(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Is(r.value)}`;var r}).join(", ")}]`),oh(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Is(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Is(n)).join(",")),`Target(${e})`}function Jv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!lL(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!yr(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ob(t.startAt,e.startAt)&&Ob(t.endAt,e.endAt)}function cg(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class on extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new tL(e,n,r):n==="array-contains"?new iL(e,r):n==="in"?new oL(e,r):n==="not-in"?new sL(e,r):n==="array-contains-any"?new aL(e,r):new on(e,n,r)}static lt(e,n,r){return n==="in"?new nL(e,r):new rL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ta(n,this.value)):n!==null&&No(this.value)===No(n)&&this.ft(ta(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class tL extends on{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.ft(n)}}class nL extends on{constructor(e,n){super(e,"in",n),this.keys=OC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rL extends on{constructor(e,n){super(e,"not-in",n),this.keys=OC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function OC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class iL extends on{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xv(n)&&Jl(n.arrayValue,this.value)}}class oL extends on{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jl(this.value.arrayValue,n)}}class sL extends on{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jl(this.value.arrayValue,n)}}class aL extends on{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jl(this.value.arrayValue,r))}}class Lf{constructor(e,n){this.position=e,this.inclusive=n}}class hl{constructor(e,n="asc"){this.field=e,this.dir=n}}function lL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Pb(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=Z.comparator(Z.fromName(s.referenceValue),n.key):r=ta(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ob(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function uL(t,e,n,r,i,o,s,a){return new sh(t,e,n,r,i,o,s,a)}function Zv(t){return new sh(t)}function Rb(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cL(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function fL(t){for(const e of t.filters)if(e.dt())return e.field;return null}function dL(t){return t.collectionGroup!==null}function Zl(t){const e=ve(t);if(e._t===null){e._t=[];const n=fL(e),r=cL(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new hl(n)),e._t.push(new hl(nn.keyField(),"asc"));else{let i=!1;for(const o of e.explicitOrderBy)e._t.push(o),o.field.isKeyField()&&(i=!0);if(!i){const o=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new hl(nn.keyField(),o))}}}return e._t}function Kr(t){const e=ve(t);if(!e.wt)if(e.limitType==="F")e.wt=Ib(e.path,e.collectionGroup,Zl(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const o of Zl(e)){const s=o.dir==="desc"?"asc":"desc";n.push(new hl(o.field,s))}const r=e.endAt?new Lf(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Lf(e.startAt.position,e.startAt.inclusive):null;e.wt=Ib(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function fg(t,e,n){return new sh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ah(t,e){return Jv(Kr(t),Kr(e))&&t.limitType===e.limitType}function RC(t){return`${Qv(Kr(t))}|lt:${t.limitType}`}function dg(t){return`Query(target=${eL(Kr(t))}; limitType=${t.limitType})`}function ey(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,o,s){const a=Pb(i,o,s);return i.inclusive?a<=0:a<0}(n.startAt,Zl(n),r)||n.endAt&&!function(i,o,s){const a=Pb(i,o,s);return i.inclusive?a>=0:a>0}(n.endAt,Zl(n),r))}(t,e)}function hL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function NC(t){return(e,n)=>{let r=!1;for(const i of Zl(t)){const o=pL(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function pL(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(i,o,s){const a=o.data.field(i),l=s.data.field(i);return a!==null&&l!==null?ta(a,l):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ag(e)?"-0":e}}function gL(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this._=void 0}}function vL(t,e,n){return t instanceof hg?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof jf?AC(t,e):t instanceof Ff?UC(t,e):function(r,i){const o=wL(r,i),s=Nb(o)+Nb(r.yt);return ug(o)&&ug(r.yt)?gL(s):mL(r.It,s)}(t,e)}function yL(t,e,n){return t instanceof jf?AC(t,e):t instanceof Ff?UC(t,e):n}function wL(t,e){return t instanceof pg?ug(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class hg extends lh{}class jf extends lh{constructor(e){super(),this.elements=e}}function AC(t,e){const n=$C(e);for(const r of t.elements)n.some(i=>yr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ff extends lh{constructor(e){super(),this.elements=e}}function UC(t,e){let n=$C(e);for(const r of t.elements)n=n.filter(i=>!yr(i,r));return{arrayValue:{values:n}}}class pg extends lh{constructor(e,n){super(),this.It=e,this.yt=n}}function Nb(t){return tt(t.integerValue||t.doubleValue)}function $C(t){return Xv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof jf&&r instanceof jf||n instanceof Ff&&r instanceof Ff?Zs(n.elements,r.elements,yr):n instanceof pg&&r instanceof pg?yr(n.yt,r.yt):n instanceof hg&&r instanceof hg}(t.transform,e.transform)}class wo{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wo}static exists(e){return new wo(void 0,e)}static updateTime(e){return new wo(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ty{}function DC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xL(t.key,wo.none()):new ny(t.key,t.data,wo.none());{const n=t.data,r=lr.empty();let i=new ut(nn.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new uh(t.key,r,new yo(i.toArray()),wo.none())}}function SL(t,e,n){t instanceof ny?function(r,i,o){const s=r.value.clone(),a=Ub(r.fieldTransforms,i,o.transformResults);s.setAll(a),i.convertToFoundDocument(o.version,s).setHasCommittedMutations()}(t,e,n):t instanceof uh?function(r,i,o){if(!Fc(r.precondition,i))return void i.convertToUnknownDocument(o.version);const s=Ub(r.fieldTransforms,i,o.transformResults),a=i.data;a.setAll(MC(r)),a.setAll(s),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pl(t,e,n,r){return t instanceof ny?function(i,o,s,a){if(!Fc(i.precondition,o))return s;const l=i.value.clone(),u=$b(i.fieldTransforms,a,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof uh?function(i,o,s,a){if(!Fc(i.precondition,o))return s;const l=$b(i.fieldTransforms,a,o),u=o.data;return u.setAll(MC(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),s===null?null:s.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,s){return Fc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):s}(t,e,n)}function Ab(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Zs(n,r,(i,o)=>bL(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ny extends ty{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class uh extends ty{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function MC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ub(t,e,n){const r=new Map;it(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,yL(s,a,n[i]))}return r}function $b(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,vL(o,s,e))}return r}class xL extends ty{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,de;function LC(t){if(t===void 0)return qr("GRPC error has no .code"),H.UNKNOWN;switch(t){case et.OK:return H.OK;case et.CANCELLED:return H.CANCELLED;case et.UNKNOWN:return H.UNKNOWN;case et.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case et.INTERNAL:return H.INTERNAL;case et.UNAVAILABLE:return H.UNAVAILABLE;case et.UNAUTHENTICATED:return H.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case et.NOT_FOUND:return H.NOT_FOUND;case et.ALREADY_EXISTS:return H.ALREADY_EXISTS;case et.PERMISSION_DENIED:return H.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case et.ABORTED:return H.ABORTED;case et.OUT_OF_RANGE:return H.OUT_OF_RANGE;case et.UNIMPLEMENTED:return H.UNIMPLEMENTED;case et.DATA_LOSS:return H.DATA_LOSS;default:return oe()}}(de=et||(et={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ih(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Y4(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL=new mt(Z.comparator);function Di(){return kL}const jC=new mt(Z.comparator);function Xa(...t){let e=jC;for(const n of t)e=e.insert(n.key,n);return e}function _L(t){let e=jC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ho(){return ml()}function FC(){return ml()}function ml(){return new ga(t=>t.toString(),(t,e)=>t.isEqual(e))}new mt(Z.comparator);const CL=new ut(Z.comparator);function pe(...t){let e=CL;for(const n of t)e=e.add(n);return e}const TL=new ut(xe);function BC(){return TL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Nu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ch(ae.min(),i,BC(),Di(),pe())}}class Nu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Nu(r,n,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class VC{constructor(e,n){this.targetId=e,this.At=n}}class WC{constructor(e,n,r=Lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Db{constructor(){this.Rt=0,this.bt=Lb(),this.Pt=Lt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=pe(),n=pe(),r=pe();return this.bt.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:oe()}}),new Nu(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Lb()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class zL{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Di(),this.qt=Mb(),this.Kt=new ut(xe)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const o=i.target;if(cg(o))if(r===0){const s=new Z(o.path);this.jt(n,s,xt.newNoDocument(s,ae.min()))}else it(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((o,s)=>{const a=this.Xt(s);if(a){if(o.current&&cg(a.target)){const l=new Z(a.target.path);this.Ut.get(l)!==null||this.ee(s,l)||this.jt(s,l,xt.newNoDocument(l,e))}o.Dt&&(n.set(s,o.xt()),o.Nt())}});let r=pe();this.qt.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(o))}),this.Ut.forEach((o,s)=>s.setReadTime(e));const i=new ch(e,n,this.Kt,this.Ut,r);return this.Ut=Di(),this.qt=Mb(),this.Kt=new ut(xe),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Db,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ut(xe),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Db),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Mb(){return new mt(Z.comparator)}function Lb(){return new mt(Z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),PL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class OL{constructor(e,n){this.databaseId=e,this.gt=n}}function RL(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NL(t,e){return t.gt?e.toBase64():e.toUint8Array()}function eu(t){return it(!!t),ae.fromTimestamp(function(e){const n=$i(e);return new fn(n.seconds,n.nanos)}(t))}function AL(t,e){return function(n){return new qe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function HC(t){const e=qe.fromString(t);return it(GC(e)),e}function zp(t,e){const n=HC(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(qC(n))}function mg(t,e){return AL(t.databaseId,e)}function UL(t){const e=HC(t);return e.length===4?qe.emptyPath():qC(e)}function jb(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qC(t){return it(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $L(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(l,u){return l.gt?(it(u===void 0||typeof u=="string"),Lt.fromBase64String(u||"")):(it(u===void 0||u instanceof Uint8Array),Lt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(l){const u=l.code===void 0?H.UNKNOWN:LC(l.code);return new ee(u,l.message||"")}(s);n=new WC(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=zp(t,r.document.name),o=eu(r.document.updateTime),s=new lr({mapValue:{fields:r.document.fields}}),a=xt.newFoundDocument(i,o,s),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Bc(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=zp(t,r.document),o=r.readTime?eu(r.readTime):ae.min(),s=xt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Bc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=zp(t,r.document),o=r.removedTargetIds||[];n=new Bc([],o,i,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,o=new EL(i),s=r.targetId;n=new VC(s,o)}}return n}function DL(t,e){return{documents:[mg(t,e.path)]}}function ML(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=mg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=mg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(d=>function(p){if(p.op==="=="){if(zb(p.value))return{unaryFilter:{field:ns(p.field),op:"IS_NAN"}};if(Tb(p.value))return{unaryFilter:{field:ns(p.field),op:"IS_NULL"}}}else if(p.op==="!="){if(zb(p.value))return{unaryFilter:{field:ns(p.field),op:"IS_NOT_NAN"}};if(Tb(p.value))return{unaryFilter:{field:ns(p.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ns(p.field),op:BL(p.op),value:p.value}}}(d));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:ns(d.field),direction:FL(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(l,u){return l.gt||oh(u)?u:{value:u}}(t,e.limit);var a;return s!==null&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function LL(t){let e=UL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){it(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let o=[];n.where&&(o=KC(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(d=>function(p){return new hl(vs(p.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d)));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,oh(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,m=d.values||[];return new Lf(m,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,m=d.values||[];return new Lf(m,p)}(n.endAt)),uL(e,i,s,o,a,"F",l,u)}function jL(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return oe()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function KC(t){return t?t.unaryFilter!==void 0?[WL(t)]:t.fieldFilter!==void 0?[VL(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>KC(e)).reduce((e,n)=>e.concat(n)):oe():[]}function FL(t){return IL[t]}function BL(t){return PL[t]}function ns(t){return{fieldPath:t.canonicalString()}}function vs(t){return nn.fromServerFormat(t.fieldPath)}function VL(t){return on.create(vs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(t.fieldFilter.op),t.fieldFilter.value)}function WL(t){switch(t.unaryFilter.op){case"IS_NAN":const e=vs(t.unaryFilter.field);return on.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=vs(t.unaryFilter.field);return on.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=vs(t.unaryFilter.field);return on.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=vs(t.unaryFilter.field);return on.create(i,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}function GC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&SL(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=FC();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=DC(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pe())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,r)=>Ab(n,r))&&Zs(this.baseMutations,e.baseMutations,(n,r)=>Ab(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r,i,o=ae.min(),s=ae.min(),a=Lt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(e){return new bo(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new bo(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new bo(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e){this.re=e}}function GL(t){const e=LL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(){this.Ye=new XL}addToCollectionParentIndex(e,n){return this.Ye.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Ui.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Ui.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class XL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ut(qe.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ut(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new na(0)}static vn(){return new na(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(){this.changes=new ga(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&pl(r.mutation,i,yo.empty(),fn.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=pe()){const i=ho();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Xa();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=ho();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,pe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Di();const s=ml(),a=ml();return n.forEach((l,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof uh)?o=o.insert(u.key,u):d!==void 0&&(s.set(u.key,d.mutation.getFieldMask()),pl(d.mutation,u,d.mutation.getFieldMask(),fn.now()))}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((u,d)=>s.set(u,d)),n.forEach((u,d)=>{var p;return a.set(u,new JL(d,(p=s.get(u))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ml();let i=new mt((s,a)=>s-a),o=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||yo.empty();d=a.applyToLocalView(u,d),r.set(l,d);const p=(i.get(a.batchId)||pe()).add(l);i=i.insert(a.batchId,p)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,p=FC();d.forEach(m=>{if(!o.has(m)){const v=DC(n.get(m),r.get(m));v!==null&&p.set(m,v),o=o.add(m)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return Z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dL(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):M.resolve(ho());let a=-1,l=o;return s.next(u=>M.forEach(u,(d,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),o.get(d)?M.resolve():this.getBaseDocument(e,d,p).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,l,u,pe())).next(d=>({batchId:a,changes:_L(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let i=Xa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let o=Xa();return this.indexManager.getCollectionParents(e,i).next(s=>M.forEach(s,a=>{const l=function(u,d){return new sh(d,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(o=>(i=o,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(o=>{o.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,xt.newInvalidDocument(u)))});let s=Xa();return i.forEach((a,l)=>{const u=o.get(a);u!==void 0&&pl(u.mutation,l,yo.empty(),fn.now()),ey(n,l)&&(s=s.insert(a,l))}),s})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):M.resolve(xt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return M.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:eu(r.createTime)}),M.resolve()}getNamedQuery(e,n){return M.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:GL(r.bundledQuery),readTime:eu(r.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(){this.overlays=new mt(Z.comparator),this.es=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ho();return M.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ue(e,n,o)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.es.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=ho(),o=n.length+1,s=new Z(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new mt((u,d)=>u-d);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=o.get(u.largestBatchId);d===null&&(d=ho(),o=o.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=ho(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return M.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new qL(n,r));let o=this.es.get(n);o===void 0&&(o=pe(),this.es.set(n,o)),this.es.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.ns=new ut(ct.ss),this.rs=new ut(ct.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new ct(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new ct(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new Z(new qe([])),r=new ct(n,e),i=new ct(n,e+1),o=[];return this.rs.forEachInRange([r,i],s=>{this.cs(s),o.push(s.key)}),o}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new Z(new qe([])),r=new ct(n,e),i=new ct(n,e+1);let o=pe();return this.rs.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new ct(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return Z.comparator(e.key,n.key)||xe(e._s,n._s)}static os(e,n){return xe(e._s,n._s)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ut(ct.ss)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new HL(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.gs=this.gs.add(new ct(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(s)}lookupMutationBatch(e,n){return M.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),o=i<0?0:i;return M.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),i=new ct(n,Number.POSITIVE_INFINITY),o=[];return this.gs.forEachInRange([r,i],s=>{const a=this.ys(s._s);o.push(a)}),M.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(xe);return n.forEach(i=>{const o=new ct(i,0),s=new ct(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([o,s],a=>{r=r.add(a._s)})}),M.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;Z.isDocumentKey(o)||(o=o.child(""));const s=new ct(new Z(o),0);let a=new ut(xe);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},s),M.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){it(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return M.forEach(n.mutations,i=>{const o=new ct(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new ct(n,0),i=this.gs.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(e){this.Es=e,this.docs=new mt(Z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(e,n){let r=Di();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():xt.newInvalidDocument(i))}),M.resolve(r)}getAllFromCollection(e,n,r){let i=Di();const o=new Z(n.child("")),s=this.docs.getIteratorFrom(o);for(;s.hasNext();){const{key:a,value:{document:l}}=s.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||q4(H4(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,i){oe()}As(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ij(this)}getSize(e){return M.resolve(this.size)}}class ij extends QL{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oj{constructor(e){this.persistence=e,this.Rs=new ga(n=>Qv(n),Jv),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ry,this.targetCount=0,this.vs=na.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),M.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new na(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Dn(n),M.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Rs.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),M.waitFor(o).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),M.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Yv(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new oj(this),this.indexManager=new YL,this.remoteDocumentCache=function(r){return new rj(r)}(r=>this.referenceDelegate.xs(r)),this.It=new KL(n),this.Ns=new ej(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new nj(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const i=new aj(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(o=>this.referenceDelegate.Os(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ms(e,n){return M.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class aj extends G4{constructor(e){super(),this.currentSequenceNumber=e}}class iy{constructor(e){this.persistence=e,this.Fs=new ry,this.$s=null}static Bs(e){return new iy(e)}get Ls(){if(this.$s)return this.$s;throw oe()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),M.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Ls.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Ls,r=>{const i=Z.fromPath(r);return this.Us(e,i).next(o=>{o||n.removeEntry(i,ae.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return M.or([()=>M.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=pe(),i=pe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new oy(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lj{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(o=>o||this.Oi(e,n,i,r)).next(o=>o||this.Mi(e,n))}ki(e,n){if(Rb(n))return M.resolve(null);let r=Kr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fg(n,null,"F"),r=Kr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=pe(...o);return this.Ni.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,s,l.readTime)?this.ki(e,fg(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return Rb(n)||i.isEqual(ae.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(o=>{const s=this.Fi(n,o);return this.$i(n,s,r,i)?this.Mi(e,n):(Eb()<=we.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),dg(n)),this.Bi(e,s,n,W4(i,-1)))})}Fi(e,n){let r=new ut(NC(e));return n.forEach((i,o)=>{ey(e,o)&&(r=r.add(o))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Mi(e,n){return Eb()<=we.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",dg(n)),this.Ni.getDocumentsMatchingQuery(e,n,Ui.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uj{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new mt(xe),this.qi=new ga(o=>Qv(o),Jv),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZL(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function cj(t,e,n,r){return new uj(t,e,n,r)}async function YC(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=pe();for(const u of i){s.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of o){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:s,addedBatchIds:a}))})})}function XC(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function fj(t,e){const n=ve(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;a.push(n.Cs.removeMatchingKeys(o,d.removedDocuments,p).next(()=>n.Cs.addMatchingKeys(o,d.addedDocuments,p)));let v=m.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.has(p)?v=v.withResumeToken(Lt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(p,v),function(w,y,c){return w.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:c.addedDocuments.size+c.modifiedDocuments.size+c.removedDocuments.size>0}(m,v,d)&&a.push(n.Cs.updateTargetData(o,v))});let l=Di(),u=pe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,d))}),a.push(dj(o,s,e.documentUpdates).next(d=>{l=d.Wi,u=d.zi})),!r.isEqual(ae.min())){const d=n.Cs.getLastRemoteSnapshotVersion(o).next(p=>n.Cs.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(d)}return M.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,u)).next(()=>l)}).then(o=>(n.Ui=i,o))}function dj(t,e,n){let r=pe(),i=pe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Di();return n.forEach((a,l)=>{const u=o.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:s,zi:i}})}function hj(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(o=>o?(i=o,M.resolve(i)):n.Cs.allocateTargetId(r).next(s=>(i=new bo(e,s,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function gg(t,e,n){const r=ve(t),i=r.Ui.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Ru(s))throw s;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Fb(t,e,n){const r=ve(t);let i=ae.min(),o=pe();return r.persistence.runTransaction("Execute query","readonly",s=>function(a,l,u){const d=ve(a),p=d.qi.get(u);return p!==void 0?M.resolve(d.Ui.get(p)):d.Cs.getTargetData(l,u)}(r,s,Kr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.Li.getDocumentsMatchingQuery(s,e,n?i:ae.min(),n?o:pe())).next(a=>(pj(r,hL(e),a),{documents:a,Hi:o})))}function pj(t,e,n){let r=t.Ki.get(e)||ae.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.Ki.set(e,r)}class Bb{constructor(){this.activeTargetIds=BC()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mj{constructor(){this.Lr=new Bb,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Bb,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gj{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yj{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wj extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,o){const s=this.ho(e,n);J("RestConnection","Sending: ",s,r);const a={};return this.lo(a,i,o),this.fo(e,s,a,r).then(l=>(J("RestConnection","Received: ",l),l),l=>{throw sg("RestConnection",`${e} failed with error: `,l,"url: ",s,"request:",r),l})}_o(e,n,r,i,o,s){return this.ao(e,n,r,i,o)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ma,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}ho(e,n){const r=vj[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((o,s)=>{const a=new N4;a.setWithCredentials(!0),a.listenOnce(P4.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case Cp.NO_ERROR:const d=a.getResponseJson();J("Connection","XHR received:",JSON.stringify(d)),o(d);break;case Cp.TIMEOUT:J("Connection",'RPC "'+e+'" timed out'),s(new ee(H.DEADLINE_EXCEEDED,"Request time out"));break;case Cp.HTTP_ERROR:const p=a.getStatus();if(J("Connection",'RPC "'+e+'" failed with status:',p,"response text:",a.getResponseText()),p>0){let m=a.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=(u=m)===null||u===void 0?void 0:u.error;if(v&&v.status&&v.message){const w=function(y){const c=y.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(c)>=0?c:H.UNKNOWN}(v.status);s(new ee(w,v.message))}else s(new ee(H.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new ee(H.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{J("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=z4(),s=I4(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new R4({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");J("Connection","Creating WebChannel: "+l,a);const u=o.createWebChannel(l,a);let d=!1,p=!1;const m=new yj({Hr:w=>{p?J("Connection","Not sending because WebChannel is closed:",w):(d||(J("Connection","Opening WebChannel transport."),u.open(),d=!0),J("Connection","WebChannel sending:",w),u.send(w))},Jr:()=>u.close()}),v=(w,y,c)=>{w.listen(y,f=>{try{c(f)}catch(h){setTimeout(()=>{throw h},0)}})};return v(u,bc.EventType.OPEN,()=>{p||J("Connection","WebChannel transport opened.")}),v(u,bc.EventType.CLOSE,()=>{p||(p=!0,J("Connection","WebChannel transport closed"),m.io())}),v(u,bc.EventType.ERROR,w=>{p||(p=!0,sg("Connection","WebChannel transport errored:",w),m.io(new ee(H.UNAVAILABLE,"The operation could not be completed")))}),v(u,bc.EventType.MESSAGE,w=>{var y;if(!p){const c=w.data[0];it(!!c);const f=c,h=f.error||((y=f[0])===null||y===void 0?void 0:y.error);if(h){J("Connection","WebChannel received error:",h);const g=h.status;let b=function(x){const E=et[x];if(E!==void 0)return LC(E)}(g),S=h.message;b===void 0&&(b=H.INTERNAL,S="Unknown error status: "+g+" with message "+h.message),p=!0,m.io(new ee(b,S)),u.close()}else J("Connection","WebChannel received:",c),m.ro(c)}}),v(s,O4.STAT_EVENT,w=>{w.stat===Sb.PROXY?J("Connection","Detected buffering proxy"):w.stat===Sb.NOPROXY&&J("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.so()},0),m}}function Ip(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t){return new OL(t,!0)}class JC{constructor(e,n,r=1e3,i=1.5,o=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=o,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&J("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bj{constructor(e,n,r,i,o,s,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new JC(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(qr(n.toString()),qr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new ee(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sj extends bj{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.It=o}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=$L(this.It,e),r=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?eu(o.readTime):ae.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=jb(this.It),n.addTarget=function(i,o){let s;const a=o.target;return s=cg(a)?{documents:DL(i,a)}:{query:ML(i,a)},s.targetId=o.targetId,o.resumeToken.approximateByteSize()>0?s.resumeToken=NL(i,o.resumeToken):o.snapshotVersion.compareTo(ae.min())>0&&(s.readTime=RL(i,o.snapshotVersion.toTimestamp())),s}(this.It,e);const r=jL(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=jb(this.It),n.removeTarget=e,this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xj extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.ao(e,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(H.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection._o(e,n,r,o,s,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(H.UNKNOWN,o.toString())})}terminate(){this.nu=!0}}class Ej{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(qr(n),this.ou=!1):J("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kj{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=o,this.mu.qr(s=>{r.enqueueAndForget(async()=>{Uu(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ve(a);l._u.add(4),await Au(l),l.gu.set("Unknown"),l._u.delete(4),await fh(l)}(this))})}),this.gu=new Ej(r,i)}}async function fh(t){if(Uu(t))for(const e of t.wu)await e(!0)}async function Au(t){for(const e of t.wu)await e(!1)}function ZC(t,e){const n=ve(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),ly(n)?ay(n):va(n).ko()&&sy(n,e))}function eT(t,e){const n=ve(t),r=va(n);n.du.delete(e),r.ko()&&tT(n,e),n.du.size===0&&(r.ko()?r.Fo():Uu(n)&&n.gu.set("Unknown"))}function sy(t,e){t.yu.Mt(e.targetId),va(t).zo(e)}function tT(t,e){t.yu.Mt(e),va(t).Ho(e)}function ay(t){t.yu=new zL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),va(t).start(),t.gu.uu()}function ly(t){return Uu(t)&&!va(t).No()&&t.du.size>0}function Uu(t){return ve(t)._u.size===0}function nT(t){t.yu=void 0}async function _j(t){t.du.forEach((e,n)=>{sy(t,e)})}async function Cj(t,e){nT(t),ly(t)?(t.gu.hu(e),ay(t)):t.gu.set("Unknown")}async function Tj(t,e,n){if(t.gu.set("Online"),e instanceof WC&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const s of i.targetIds)r.du.has(s)&&(await r.remoteSyncer.rejectListen(s,o),r.du.delete(s),r.yu.removeTarget(s))}(t,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wb(t,r)}else if(e instanceof Bc?t.yu.Gt(e):e instanceof VC?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(ae.min()))try{const r=await XC(t.localStore);n.compareTo(r)>=0&&await function(i,o){const s=i.yu.te(o);return s.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,o))}}),s.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Lt.EMPTY_BYTE_STRING,l.snapshotVersion)),tT(i,a);const u=new bo(l.target,a,1,l.sequenceNumber);sy(i,u)}),i.remoteSyncer.applyRemoteEvent(s)}(t,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await Wb(t,r)}}async function Wb(t,e,n){if(!Ru(e))throw e;t._u.add(1),await Au(t),t.gu.set("Offline"),n||(n=()=>XC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await fh(t)})}async function Hb(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=Uu(n);n._u.add(3),await Au(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await fh(n)}async function zj(t,e){const n=ve(t);e?(n._u.delete(2),await fh(n)):e||(n._u.add(2),await Au(n),n.gu.set("Unknown"))}function va(t){return t.pu||(t.pu=function(e,n,r){const i=ve(e);return i.su(),new Sj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:_j.bind(null,t),Zr:Cj.bind(null,t),Wo:Tj.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),ly(t)?ay(t):t.gu.set("Unknown")):(await t.pu.stop(),nT(t))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new zs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new uy(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rT(t,e){if(qr("AsyncQueue",`${e}: ${t}`),Ru(t))return new ee(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=Xa(),this.sortedSet=new mt(this.comparator)}static emptySet(e){return new Ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.Tu=new mt(Z.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):oe():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ra{constructor(e,n,r,i,o,s,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new ra(e,n,Ps.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ij{constructor(){this.Au=void 0,this.listeners=[]}}class Pj{constructor(){this.queries=new ga(e=>RC(e),ah),this.onlineState="Unknown",this.Ru=new Set}}async function Oj(t,e){const n=ve(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Ij),i)try{o.Au=await n.onListen(r)}catch(s){const a=rT(s,`Initialization of query '${dg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,o),o.listeners.push(e),e.bu(n.onlineState),o.Au&&e.Pu(o.Au)&&cy(n)}async function Rj(t,e){const n=ve(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const s=o.listeners.indexOf(e);s>=0&&(o.listeners.splice(s,1),i=o.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Nj(t,e){const n=ve(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.listeners)a.Pu(i)&&(r=!0);s.Au=i}}r&&cy(n)}function Aj(t,e,n){const r=ve(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function cy(t){t.Ru.forEach(e=>{e.next()})}class Uj{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ra(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ra.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.key=e}}class oT{constructor(e){this.key=e}}class $j{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=pe(),this.mutatedKeys=pe(),this.Gu=NC(e),this.Qu=new Ps(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new qb,i=n?n.Qu:this.Qu;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),v=ey(this.query,p)?p:null,w=!!m&&this.mutatedKeys.has(m.key),y=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let c=!1;m&&v?m.data.isEqual(v.data)?w!==y&&(r.track({type:3,doc:v}),c=!0):this.Hu(m,v)||(r.track({type:2,doc:v}),c=!0,(l&&this.Gu(v,l)>0||u&&this.Gu(v,u)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),c=!0):m&&!v&&(r.track({type:1,doc:m}),c=!0,(l||u)&&(a=!0)),c&&(v?(s=s.add(v),o=y?o.add(d):o.delete(d)):(s=s.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const d=this.query.limitType==="F"?s.last():s.first();s=s.delete(d.key),o=o.delete(d.key),r.track({type:1,doc:d})}return{Qu:s,zu:r,$i:a,mutatedKeys:o}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const o=e.zu.Eu();o.sort((u,d)=>function(p,m){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return v(p)-v(m)}(u.type,d.type)||this.Gu(u.doc,d.doc)),this.Ju(r);const s=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,o.length!==0||l?{snapshot:new ra(this.query,e.Qu,i,o,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new qb,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=pe(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new oT(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new iT(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=pe();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ra.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Dj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Mj{constructor(e){this.key=e,this.nc=!1}}class Lj{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new ga(a=>RC(a),ah),this.rc=new Map,this.oc=new Set,this.uc=new mt(Z.comparator),this.cc=new Map,this.ac=new ry,this.hc={},this.lc=new Map,this.fc=na.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function jj(t,e){const n=Kj(t);let r,i;const o=n.ic.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.ec();else{const s=await hj(n.localStore,Kr(e));n.isPrimaryClient&&ZC(n.remoteStore,s);const a=n.sharedClientState.addLocalQueryTarget(s.targetId);r=s.targetId,i=await Fj(n,e,r,a==="current",s.resumeToken)}return i}async function Fj(t,e,n,r,i){t._c=(p,m,v)=>async function(w,y,c,f){let h=y.view.Wu(c);h.$i&&(h=await Fb(w.localStore,y.query,!1).then(({documents:S})=>y.view.Wu(S,h)));const g=f&&f.targetChanges.get(y.targetId),b=y.view.applyChanges(h,w.isPrimaryClient,g);return Gb(w,y.targetId,b.Xu),b.snapshot}(t,p,m,v);const o=await Fb(t.localStore,e,!0),s=new $j(e,o.Hi),a=s.Wu(o.documents),l=Nu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=s.applyChanges(a,t.isPrimaryClient,l);Gb(t,n,u.Xu);const d=new Dj(e,n,s);return t.ic.set(e,d),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Bj(t,e){const n=ve(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(o=>!ah(o,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await gg(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),eT(n.remoteStore,r.targetId),vg(n,r.targetId)}).catch(Gv)):(vg(n,r.targetId),await gg(n.localStore,r.targetId,!0))}async function sT(t,e){const n=ve(t);try{const r=await fj(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.cc.get(o);s&&(it(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.nc=!0:i.modifiedDocuments.size>0?it(s.nc):i.removedDocuments.size>0&&(it(s.nc),s.nc=!1))}),await lT(n,r,e)}catch(r){await Gv(r)}}function Kb(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((o,s)=>{const a=s.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(o,s){const a=ve(o);a.onlineState=s;let l=!1;a.queries.forEach((u,d)=>{for(const p of d.listeners)p.bu(s)&&(l=!0)}),l&&cy(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Vj(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),o=i&&i.key;if(o){let s=new mt(Z.comparator);s=s.insert(o,xt.newNoDocument(o,ae.min()));const a=pe().add(o),l=new ch(ae.min(),new Map,new ut(xe),s,a);await sT(r,l),r.uc=r.uc.remove(o),r.cc.delete(e),fy(r)}else await gg(r.localStore,e,!1).then(()=>vg(r,e,n)).catch(Gv)}function vg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||aT(t,r)})}function aT(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(eT(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),fy(t))}function Gb(t,e,n){for(const r of n)r instanceof iT?(t.ac.addReference(r.key,e),Wj(t,r)):r instanceof oT?(J("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||aT(t,r.key)):oe()}function Wj(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(J("SyncEngine","New document in limbo: "+n),t.oc.add(r),fy(t))}function fy(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new Z(qe.fromString(e)),r=t.fc.next();t.cc.set(r,new Mj(n)),t.uc=t.uc.insert(n,r),ZC(t.remoteStore,new bo(Kr(Zv(n.path)),r,2,Yv.at))}}async function lT(t,e,n){const r=ve(t),i=[],o=[],s=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{s.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const d=oy.Ci(l.targetId,u);o.push(d)}}))}),await Promise.all(s),r.sc.Wo(i),await async function(a,l){const u=ve(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>M.forEach(l,p=>M.forEach(p.Si,m=>u.persistence.referenceDelegate.addReference(d,p.targetId,m)).next(()=>M.forEach(p.Di,m=>u.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))}catch(d){if(!Ru(d))throw d;J("LocalStore","Failed to update sequence numbers: "+d)}for(const d of l){const p=d.targetId;if(!d.fromCache){const m=u.Ui.get(p),v=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(v);u.Ui=u.Ui.insert(p,w)}}}(r.localStore,o))}async function Hj(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await YC(n.localStore,e);n.currentUser=e,function(i,o){i.lc.forEach(s=>{s.forEach(a=>{a.reject(new ee(H.CANCELLED,o))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lT(n,r.ji)}}function qj(t,e){const n=ve(t),r=n.cc.get(e);if(r&&r.nc)return pe().add(r.key);{let i=pe();const o=n.rc.get(e);if(!o)return i;for(const s of o){const a=n.ic.get(s);i=i.unionWith(a.view.ju)}return i}}function Kj(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vj.bind(null,e),e.sc.Wo=Nj.bind(null,e.eventManager),e.sc.wc=Aj.bind(null,e.eventManager),e}class Gj{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=QC(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return cj(this.persistence,new lj,e.initialUser,this.It)}yc(e){return new sj(iy.Bs,this.It)}gc(e){return new mj}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yj{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kb(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hj.bind(null,this.syncEngine),await zj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Pj}createDatastore(e){const n=QC(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new wj(i));var i;return function(o,s,a,l){return new xj(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,o=a=>Kb(this.syncEngine,a,0),s=Vb.C()?new Vb:new gj,new kj(n,r,i,o,s);var n,r,i,o,s}createSyncEngine(e,n){return function(r,i,o,s,a,l,u){const d=new Lj(r,i,o,s,a,l);return u&&(d.dc=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ve(e);J("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Au(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xj(t,e,n){if(!n)throw new ee(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qj(t,e,n,r){if(e===!0&&r===!0)throw new ee(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yb(t){if(Z.isDocumentKey(t))throw new ee(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jj(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function Vc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jj(t);throw new ee(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=new Map;class Qb{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ee(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Qj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qb({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ee(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ee(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qb(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new A4;switch(n.type){case"gapi":const r=n.client;return new M4(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ee(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xb.get(e);n&&(J("ComponentProvider","Removing Datastore"),Xb.delete(e),n.terminate())}(this),Promise.resolve()}}function Zj(t,e,n,r={}){var i;const o=(t=Vc(t,dy))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==e&&sg("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let s,a;if(typeof r.mockUserToken=="string")s=r.mockUserToken,a=Nt.MOCK_USER;else{s=vM(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new ee(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Nt(l)}t._authCredentials=new U4(new zC(s,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Os(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lo(this.firestore,e,this._key)}}class dh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dh(this.firestore,e,this._query)}}class Os extends dh{constructor(e,n,r){super(e,n,Zv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lo(this.firestore,null,new Z(e))}withConverter(e){return new Os(this.firestore,e,this._path)}}function uT(t,e,...n){if(t=Hi(t),Xj("collection","path",e),t instanceof dy){const r=qe.fromString(e,...n);return Yb(r),new Os(t,null,r)}{if(!(t instanceof Lo||t instanceof Os))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return Yb(r),new Os(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):qr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t6{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Nt.UNAUTHENTICATED,this.clientId=B4.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{J("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rT(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function n6(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await YC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function r6(t,e){t.asyncQueue.verifyOperationInProgress();const n=await i6(t);J("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Hb(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,o)=>Hb(e.remoteStore,o)),t.onlineComponents=e}async function i6(t){return t.offlineComponents||(J("FirestoreClient","Using default OfflineComponentProvider"),await n6(t,new Gj)),t.offlineComponents}async function o6(t){return t.onlineComponents||(J("FirestoreClient","Using default OnlineComponentProvider"),await r6(t,new Yj)),t.onlineComponents}async function Jb(t){const e=await o6(t),n=e.eventManager;return n.onListen=jj.bind(null,e.syncEngine),n.onUnlisten=Bj.bind(null,e.syncEngine),n}class s6{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new JC(this,"async_queue_retry"),this.Wc=()=>{const n=Ip();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Ip();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Ip();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new zs;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ru(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(r);throw qr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=uy.createAndSchedule(this,e,n,r,o=>this.Yc(o));return this.qc.push(i),i}zc(){this.Kc&&oe()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function Zb(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class yg extends dy{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new s6,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cT(this),this._firestoreClient.terminate()}}function a6(t,e){const n=typeof t=="object"?t:E_(),r=typeof t=="string"?t:e||"(default)",i=_v(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=pM("firestore");o&&Zj(i,...o)}return i}function l6(t){return t._firestoreClient||cT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cT(t){var e;const n=t._freezeSettings(),r=function(i,o,s,a){return new Q4(i,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new t6(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bf(Lt.fromBase64String(e))}catch(n){throw new ee(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bf(Lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u6{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}const c6=new RegExp("[~\\*/\\[\\]]");function f6(t,e,n){if(e.search(c6)>=0)throw eS(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fT(...e.split("."))._internalPath}catch{throw eS(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eS(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new ee(H.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Lo(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new d6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class d6 extends dT{data(){return super.data()}}function hT(t,e){return typeof e=="string"?f6(t,e):e instanceof fT?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h6(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p6{convertValue(e,n="none"){switch(No(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ea(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw oe()}}convertObject(e,n){const r={};return ih(e.fields,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new u6(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=PC(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xl(e));default:return null}}convertTimestamp(e){const n=$i(e);return new fn(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);it(GC(r));const i=new Ql(r.get(1),r.get(3)),o=new Z(r.popFirst(5));return i.isEqual(n)||qr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pT extends dT{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Wc extends pT{data(e={}){return super.data(e)}}class m6{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Wc(this._firestore,this._userDataWriter,r.key,r,new Qa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(s=>{const a=new Wc(r._firestore,r._userDataWriter,s.doc.key,s.doc,new Qa(r._snapshot.mutatedKeys.has(s.doc.key),r._snapshot.fromCache),r.query.converter);return s.doc,{type:"added",doc:a,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(s=>i||s.type!==3).map(s=>{const a=new Wc(r._firestore,r._userDataWriter,s.doc.key,s.doc,new Qa(r._snapshot.mutatedKeys.has(s.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return s.type!==0&&(l=o.indexOf(s.doc.key),o=o.delete(s.doc.key)),s.type!==1&&(o=o.add(s.doc),u=o.indexOf(s.doc.key)),{type:g6(s.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function g6(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}class mT extends p6{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bf(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lo(this.firestore,null,n)}}function gT(t,...e){var n,r,i;t=Hi(t);let o={includeMetadataChanges:!1},s=0;typeof e[s]!="object"||Zb(e[s])||(o=e[s],s++);const a={includeMetadataChanges:o.includeMetadataChanges};if(Zb(e[s])){const p=e[s];e[s]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[s+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[s+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let l,u,d;if(t instanceof Lo)u=Vc(t.firestore,yg),d=Zv(t._key.path),l={next:p=>{e[s]&&e[s](v6(u,t,p))},error:e[s+1],complete:e[s+2]};else{const p=Vc(t,dh);u=Vc(p.firestore,yg),d=p._query;const m=new mT(u);l={next:v=>{e[s]&&e[s](new m6(u,m,p,v))},error:e[s+1],complete:e[s+2]},h6(t._query)}return function(p,m,v,w){const y=new e6(w),c=new Uj(m,y,v);return p.asyncQueue.enqueueAndForget(async()=>Oj(await Jb(p),c)),()=>{y.bc(),p.asyncQueue.enqueueAndForget(async()=>Rj(await Jb(p),c))}}(l6(u),d,a,l)}function v6(t,e,n){const r=n.docs.get(e._key),i=new mT(t);return new pT(t,i,e._key,r,new Qa(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ma=n})(xu),Qs(new Po("firestore",(n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),s=new yg(new $4(n.getProvider("auth-internal")),new j4(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ee(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ql(a.options.projectId,l)}(o,r),o);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),Oi(xb,"3.7.3",t),Oi(xb,"3.7.3","esm2017")})();function hy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function vT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const y6=vT,yT=new bu("auth","Firebase",vT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=new Ev("@firebase/auth");function Hc(t,...e){tS.logLevel<=we.ERROR&&tS.error(`Auth (${xu}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t,...e){throw py(t,...e)}function pr(t,...e){return py(t,...e)}function w6(t,e,n){const r=Object.assign(Object.assign({},y6()),{[e]:n});return new bu("auth","Firebase",r).create(e,{appName:t.name})}function py(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yT.create(t,...e)}function te(t,e,...n){if(!t)throw py(e,...n)}function Nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hc(e),new Error(e)}function Yr(t,e){t||Nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=new Map;function Ar(t){Yr(t instanceof Function,"Expected a class definition");let e=nS.get(t);return e?(Yr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nS.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b6(t,e){const n=_v(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(If(o,e!=null?e:{}))return i;Gr(i,"already-initialized")}return n.initialize({options:e})}function S6(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function x6(){return rS()==="http:"||rS()==="https:"}function rS(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E6(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(x6()||oM()||"connection"in navigator)?navigator.onLine:!0}function k6(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yr(n>e,"Short delay should be less than long delay!"),this.isMobile=iM()||sM()}get(){return E6()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t,e){Yr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _6={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C6=new $u(3e4,6e4);function T6(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hh(t,e,n,r,i={}){return bT(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Su(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),wT.fetch()(ST(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function bT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_6),e);try{const i=new I6(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ec(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ec(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ec(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ec(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw w6(t,d,u);Gr(t,d)}}catch(i){if(i instanceof ei)throw i;Gr(t,"network-request-failed")}}async function z6(t,e,n,r,i={}){const o=await hh(t,e,n,r,i);return"mfaPendingCredential"in o&&Gr(t,"multi-factor-auth-required",{_serverResponse:o}),o}function ST(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?my(t.config,i):`${t.config.apiScheme}://${i}`}class I6{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pr(this.auth,"network-request-failed")),C6.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ec(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pr(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P6(t,e){return hh(t,"POST","/v1/accounts:delete",e)}async function O6(t,e){return hh(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function R6(t,e=!1){const n=Hi(t),r=await n.getIdToken(e),i=gy(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:gl(Pp(i.auth_time)),issuedAtTime:gl(Pp(i.iat)),expirationTime:gl(Pp(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Pp(t){return Number(t)*1e3}function gy(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Hc("JWT malformed, contained fewer than 3 sections"),null;try{const o=v_(r);return o?JSON.parse(o):(Hc("Failed to decode base64 JWT payload"),null)}catch(o){return Hc("Caught error parsing JWT payload as JSON",(e=o)===null||e===void 0?void 0:e.toString()),null}}function N6(t){const e=gy(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tu(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ei&&A6(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function A6({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U6{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gl(this.lastLoginAt),this.creationTime=gl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vf(t){var e;const n=t.auth,r=await t.getIdToken(),i=await tu(t,O6(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?M6(o.providerUserInfo):[],a=D6(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new xT(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function $6(t){const e=Hi(t);await Vf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function D6(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function M6(t){return t.map(e=>{var{providerId:n}=e,r=hy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L6(t,e){const n=await bT(t,{},async()=>{const r=Su({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=ST(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wT.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):N6(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await L6(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new nu;return r&&(te(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(te(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nu,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class So{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=hy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new U6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new xT(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await tu(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return R6(this,e)}reload(){return $6(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new So(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tu(this,P6(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,c=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:b,isAnonymous:S,providerData:x,stsTokenManager:E}=n;te(g&&E,e,"internal-error");const _=nu.fromJSON(this.name,E);te(typeof g=="string",e,"internal-error"),ai(p,e.name),ai(m,e.name),te(typeof b=="boolean",e,"internal-error"),te(typeof S=="boolean",e,"internal-error"),ai(v,e.name),ai(w,e.name),ai(y,e.name),ai(c,e.name),ai(f,e.name),ai(h,e.name);const C=new So({uid:g,auth:e,email:m,emailVerified:b,displayName:p,isAnonymous:S,photoURL:w,phoneNumber:v,tenantId:y,stsTokenManager:_,createdAt:f,lastLoginAt:h});return x&&Array.isArray(x)&&(C.providerData=x.map(k=>Object.assign({},k))),c&&(C._redirectEventId=c),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new nu;i.updateFromServerResponse(n);const o=new So({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vf(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ET.type="NONE";const iS=ET;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=qc(this.userKey,i.apiKey,o),this.fullPersistenceKey=qc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?So._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(Ar(iS),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Ar(iS);const s=qc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const p=So._fromJSON(e,d);u!==o&&(a=p),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Rs(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Rs(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(CT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zT(e))return"Blackberry";if(IT(e))return"Webos";if(vy(e))return"Safari";if((e.includes("chrome/")||_T(e))&&!e.includes("edge/"))return"Chrome";if(TT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kT(t=Mt()){return/firefox\//i.test(t)}function vy(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _T(t=Mt()){return/crios\//i.test(t)}function CT(t=Mt()){return/iemobile/i.test(t)}function TT(t=Mt()){return/android/i.test(t)}function zT(t=Mt()){return/blackberry/i.test(t)}function IT(t=Mt()){return/webos/i.test(t)}function ph(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function j6(t=Mt()){var e;return ph(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function F6(){return aM()&&document.documentMode===10}function PT(t=Mt()){return ph(t)||TT(t)||IT(t)||zT(t)||/windows phone/i.test(t)||CT(t)}function B6(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t,e=[]){let n;switch(t){case"Browser":n=oS(Mt());break;case"Worker":n=`${oS(Mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xu}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V6{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W6{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sS(this),this.idTokenSubscription=new sS(this),this.beforeStateQueue=new V6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yT,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ar(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Vf(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k6()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Hi(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ar(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[Ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return te(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function yy(t){return Hi(t)}class sS{constructor(e){this.auth=e,this.observer=null,this.addObserver=xM(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function H6(t,e,n){const r=yy(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=RT(e),{host:s,port:a}=q6(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||K6()}function RT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function q6(t){const e=RT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:aS(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:aS(s)}}}function aS(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function K6(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nr("not implemented")}_getIdTokenResponse(e){return Nr("not implemented")}_linkToIdToken(e,n){return Nr("not implemented")}_getReauthenticationResolver(e){return Nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e){return z6(t,"POST","/v1/accounts:signInWithIdp",T6(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G6="http://localhost";class Ao extends NT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ao(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=hy(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Ao(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:G6,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Su(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends AT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Du{constructor(){super("facebook.com")}static credential(e){return Ao._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.FACEBOOK_SIGN_IN_METHOD="facebook.com";di.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Du{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ao._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hi.credential(n,r)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Du{constructor(){super("github.com")}static credential(e){return Ao._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.GITHUB_SIGN_IN_METHOD="github.com";pi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends Du{constructor(){super("twitter.com")}static credential(e,n){return Ao._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mi.credential(n,r)}catch{return null}}}mi.TWITTER_SIGN_IN_METHOD="twitter.com";mi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await So._fromIdTokenResponse(e,r,i),s=lS(r);return new ia({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=lS(r);return new ia({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function lS(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf extends ei{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wf.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wf(e,n,r,i)}}function UT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Wf._fromErrorAndOperation(t,o,e,r):o})}async function Y6(t,e,n=!1){const r=await tu(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ia._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X6(t,e,n=!1){var r;const{auth:i}=t,o="reauthenticate";try{const s=await tu(t,UT(i,o,e,t),n);te(s.idToken,i,"internal-error");const a=gy(s.idToken);te(a,i,"internal-error");const{sub:l}=a;return te(t.uid===l,i,"user-mismatch"),ia._forOperation(t,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Gr(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q6(t,e,n=!1){const r="signIn",i=await UT(t,r,e),o=await ia._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function J6(t,e,n,r){return Hi(t).onIdTokenChanged(e,n,r)}function Z6(t,e,n){return Hi(t).beforeAuthStateChanged(e,n)}const Hf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hf,"1"),this.storage.removeItem(Hf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eF(){const t=Mt();return vy(t)||ph(t)}const tF=1e3,nF=10;class DT extends $T{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=eF()&&B6(),this.fallbackToPolling=PT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);F6()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nF):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}DT.type="LOCAL";const rF=DT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT extends $T{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}MT.type="SESSION";const LT=MT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iF(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new mh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await iF(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=wy("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(){return window}function sF(t){mr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(){return typeof mr().WorkerGlobalScope<"u"&&typeof mr().importScripts=="function"}async function aF(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lF(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uF(){return jT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="firebaseLocalStorageDb",cF=1,qf="firebaseLocalStorage",BT="fbase_key";class Mu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gh(t,e){return t.transaction([qf],e?"readwrite":"readonly").objectStore(qf)}function fF(){const t=indexedDB.deleteDatabase(FT);return new Mu(t).toPromise()}function bg(){const t=indexedDB.open(FT,cF);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qf,{keyPath:BT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qf)?e(r):(r.close(),await fF(),e(await bg()))})})}async function uS(t,e,n){const r=gh(t,!0).put({[BT]:e,value:n});return new Mu(r).toPromise()}async function dF(t,e){const n=gh(t,!1).get(e),r=await new Mu(n).toPromise();return r===void 0?null:r.value}function cS(t,e){const n=gh(t,!0).delete(e);return new Mu(n).toPromise()}const hF=800,pF=3;class VT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pF)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mh._getInstance(uF()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aF(),!this.activeServiceWorker)return;this.sender=new oF(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lF()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bg();return await uS(e,Hf,"1"),await cS(e,Hf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uS(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dF(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cS(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=gh(i,!1).getAll();return new Mu(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VT.type="LOCAL";const mF=VT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gF(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vF(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=pr("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",gF().appendChild(r)})}function yF(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new $u(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wF(t,e){return e?Ar(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by extends NT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bF(t){return Q6(t.auth,new by(t),t.bypassAuthState)}function SF(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),X6(n,new by(t),t.bypassAuthState)}async function xF(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Y6(n,new by(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bF;case"linkViaPopup":case"linkViaRedirect":return xF;case"reauthViaPopup":case"reauthViaRedirect":return SF;default:Gr(this.auth,"internal-error")}}resolve(e){Yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EF=new $u(2e3,1e4);class ys extends WT{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Yr(this.filter.length===1,"Popup operations only handle one event");const e=wy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pr(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,EF.get())};e()}}ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kF="pendingRedirect",Kc=new Map;class _F extends WT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Kc.get(this.auth._key());if(!e){try{const r=await CF(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Kc.set(this.auth._key(),e)}return this.bypassAuthState||Kc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CF(t,e){const n=IF(e),r=zF(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function TF(t,e){Kc.set(t._key(),e)}function zF(t){return Ar(t._redirectPersistence)}function IF(t){return qc(kF,t.config.apiKey,t.name)}async function PF(t,e,n=!1){const r=yy(t),i=wF(r,e),s=await new _F(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OF=10*60*1e3;class RF{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NF(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!HT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OF&&this.cachedEventUids.clear(),this.cachedEventUids.has(fS(e))}saveEventToCache(e){this.cachedEventUids.add(fS(e)),this.lastProcessedEventTime=Date.now()}}function fS(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function HT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NF(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return HT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AF(t,e={}){return hh(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$F=/^https?/;async function DF(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AF(t);for(const n of e)try{if(MF(n))return}catch{}Gr(t,"unauthorized-domain")}function MF(t){const e=wg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!$F.test(n))return!1;if(UF.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LF=new $u(3e4,6e4);function dS(){const t=mr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jF(t){return new Promise((e,n)=>{var r,i,o;function s(){dS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dS(),n(pr(t,"network-request-failed"))},timeout:LF.get()})}if(!((i=(r=mr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=mr().gapi)===null||o===void 0)&&o.load)s();else{const a=yF("iframefcb");return mr()[a]=()=>{gapi.load?s():n(pr(t,"network-request-failed"))},vF(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gc=null,e})}let Gc=null;function FF(t){return Gc=Gc||jF(t),Gc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BF=new $u(5e3,15e3),VF="__/auth/iframe",WF="emulator/auth/iframe",HF={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KF(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?my(e,WF):`https://${t.config.authDomain}/${VF}`,r={apiKey:e.apiKey,appName:t.name,v:xu},i=qF.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Su(r).slice(1)}`}async function GF(t){const e=await FF(t),n=mr().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:KF(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HF,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=pr(t,"network-request-failed"),a=mr().setTimeout(()=>{o(s)},BF.get());function l(){mr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YF={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XF=500,QF=600,JF="_blank",ZF="http://localhost";class hS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eB(t,e,n,r=XF,i=QF){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},YF),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Mt().toLowerCase();n&&(a=_T(u)?JF:n),kT(u)&&(e=e||ZF,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[v,w])=>`${m}${v}=${w},`,"");if(j6(u)&&a!=="_self")return tB(e||"",a),new hS(null);const p=window.open(e||"",a,d);te(p,t,"popup-blocked");try{p.focus()}catch{}return new hS(p)}function tB(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nB="__/auth/handler",rB="emulator/auth/handler";function pS(t,e,n,r,i,o){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xu,eventId:i};if(e instanceof AT){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",SM(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(e instanceof Du){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${iB(t)}?${Su(a).slice(1)}`}function iB({config:t}){return t.emulator?my(t,rB):`https://${t.authDomain}/${nB}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="webStorageSupport";class oB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LT,this._completeRedirectFn=PF,this._overrideRedirectResult=TF}async _openPopup(e,n,r,i){var o;Yr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=pS(e,n,r,wg(),i);return eB(e,s,wy())}async _openRedirect(e,n,r,i){return await this._originValidation(e),sF(pS(e,n,r,wg(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Yr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GF(e),r=new RF(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Op,{type:Op},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Op];s!==void 0&&n(!!s),Gr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DF(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return PT()||vy()||ph()}}const sB=oB;var mS="@firebase/auth",gS="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lB(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uB(t){Qs(new Po("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{te(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),te(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OT(t)},d=new W6(a,l,u);return S6(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qs(new Po("auth-internal",e=>{const n=yy(e.getProvider("auth").getImmediate());return(r=>new aB(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Oi(mS,gS,lB(t)),Oi(mS,gS,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cB=5*60,fB=w_("authIdTokenMaxAge")||cB;let vS=null;const dB=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fB)return;const i=n==null?void 0:n.token;vS!==i&&(vS=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hB(t=E_()){const e=_v(t,"auth");if(e.isInitialized())return e.getImmediate();const n=b6(t,{popupRedirectResolver:sB,persistence:[mF,rF,LT]}),r=w_("authTokenSyncURL");if(r){const o=dB(r);Z6(n,o,()=>o(n.currentUser)),J6(n,s=>o(s))}const i=y_("auth");return i&&H6(n,`http://${i}`),n}uB("Browser");const pB={apiKey:"AIzaSyCeiMOP52fq_dPAdTG3sWCSbSLDGuJwS2g",authDomain:"esp32-monitor-2244b.firebaseapp.com",databaseURL:"https://esp32-monitor-2244b-default-rtdb.firebaseio.com",projectId:"esp32-monitor-2244b",storageBucket:"esp32-monitor-2244b.appspot.com",messagingSenderId:"280167063041",appId:"1:280167063041:web:83c702f2d2df8ef88b2a00",measurementId:"G-ER8PQC6BYT"},qT=x_(pB),KT=a6(qT);hB(qT);const mB=({customFuncOne:t,customFuncTwo:e,disabledSide:n,mobileNav:r,microStatus:i,clickedMenu:o,setClickedMenu:s,handleTheme:a,theme:l})=>{const[u,d]=T.exports.useState([{}]);return T.exports.useEffect(()=>gT(uT(KT,"Notifications"),p=>d(p.docs.map(m=>({...m.data(),id:m.id})))),[]),je("div",{className:"flex justify-evenly items-center p-3 relative mx-3 z-[10000]",children:[N("button",{type:"button",onClick:n?e:t,className:"outline-none hover:scale-110 transition-all duration-150 ease-in-out active:scale-100",children:r?N(h_,{fontSize:"large"}):N(n_,{fontSize:"large"})}),je("div",{className:`flex gap-2 items-center sm:text-lg text-md lg:border border-secondary-dark-bg
        rounded-full py-1 px-4 ml-5`,children:[N("div",{className:`${i[0]?"bg-green-400":"bg-red-400"} h-3 w-3 rounded-full`}),!n&&N("p",{children:i[0]?"Online":"Offline"})]}),N("div",{className:"w-full"}),je("div",{className:"flex gap-2 sm:gap-4",children:[N(gc,{title:"Theme",children:N("button",{type:"button",onClick:a,className:`hover:scale-110 transition-all duration-200 ease-in-out outline-none active:rotate-180
              active:scale-95`,children:l==="light"?N(l_,{fontSize:"large"}):N(a_,{fontSize:"large"})})}),!r&&N(gc,{title:"Notifications",className:"outline-none hover:scale-110 transition-all duration-150 ease-in-out active:scale-100",children:N("button",{type:"button",onClick:()=>s("notifications"),children:N(ND,{badgeContent:u.length,color:"info",overlap:"circular",children:u.length>0?N(s_,{fontSize:"large"}):N(o_,{fontSize:"large"})})})}),!r&&N(gc,{title:"Settings",className:"outline-none hover:scale-110 transition-all duration-150 ease-in-out hover:rotate-180 active:scale-100",children:N("button",{type:"button",onClick:()=>s("settings"),children:N(i_,{fontSize:"large"})})}),!r&&N(gc,{title:"Profile",className:"outline-none hover:scale-110 transition-all duration-150 ease-in-out active:scale-100",children:N("button",{type:"button",onClick:()=>s("account"),children:N(r_,{fontSize:"large"})})}),!r&&o==="notifications"?N(ZD,{menuFunc:s,notifs:u}):o==="settings"?N(eM,{menuFunc:s}):o==="account"?N(tM,{menuFunc:s}):" "]})]})},yS=T.exports.lazy(()=>la(()=>import("./Overview.e87a2896.js"),[])),gB=T.exports.lazy(()=>la(()=>import("./DetailedView.a44fd2fe.js"),[])),vB=T.exports.lazy(()=>la(()=>import("./DeviceStatistics.3f9db048.js"),[])),yB=T.exports.lazy(()=>la(()=>import("./Sidebar.d89d2b7b.js"),["assets/Sidebar.d89d2b7b.js","assets/GridViewOutlined.c5cb2dab.js"])),wB=T.exports.lazy(()=>la(()=>import("./MobileNavigation.189065e1.js"),["assets/MobileNavigation.189065e1.js","assets/GridViewOutlined.c5cb2dab.js"]));function bB(){const[t,e]=T.exports.useState(!1),[n,r]=T.exports.useState(1920),[i,o]=T.exports.useState(!0),[s,a]=T.exports.useState(!1),[l,u]=T.exports.useState(!0),[d,p]=T.exports.useState("none"),[m,v]=T.exports.useState({}),[w,y]=T.exports.useState(localStorage.getItem("theme"));T.exports.useEffect(()=>{w==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[w]);const c=()=>{y(w==="dark"?"light":"dark"),localStorage.setItem("theme",w==="dark"?"light":"dark")};return T.exports.useEffect(()=>gT(uT(KT,"DeviceStatistics"),f=>v(f.docs.map(h=>({...h.data(),id:h.id})))),[]),T.exports.useEffect(()=>{const f=()=>r(window.innerWidth);return window.addEventListener("resize",f),f(),()=>window.removeEventListener("resize",f)}),T.exports.useEffect(()=>{n<=900?(o(!1),a(!0),u(!1)):(a(!1),u(!0),e(!1))},[n,o]),N(T.exports.Suspense,{fallback:N($O,{}),children:N("div",{className:"",children:N(xP,{children:je("div",{className:"flex relative bg-main-bg dark:bg-main-dark-bg dark:text-slate-200 text-main-dark-bg",children:[N("div",{className:`${i?"w-72 ":"w-0 overflow-hidden"} 
              dark:bg-secondary-dark-bg bg-main-bg transition-all duration-150 ease-out`,children:N(yB,{sideIsOpen:i})}),je("div",{className:`min-h-screen w-full ${!1} ? 'md:ml-72' : ' flex-2'`,children:[je("div",{className:"fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full",children:[N("div",{className:`${t?"h-screen z-[100]":"h-0 overflow-hidden"}
                  dark:bg-main-dark-bg bg-main-bg transition-all duration-150 ease-linear fixed`,children:N(wB,{handleMobileNavOpen:()=>e(!t),mobileNavOpen:!0})}),N(mB,{customFuncOne:()=>o(!i),customFuncTwo:()=>e(!t),disabledSide:s,mobileNav:t,microStatus:!1,clickedMenu:d,setClickedMenu:p,handleTheme:c,theme:w})]}),N("div",{children:je(vP,{children:[N(Wa,{path:"/",element:N(yS,{})}),N(Wa,{path:"/overview",element:N(yS,{})}),N(Wa,{path:"/detailed-view",element:N(gB,{})}),N(Wa,{path:"/device-statistics",element:N(vB,{deviceData:m})})]})})]})]})})})})}Rp.createRoot(document.getElementById("root")).render(N(Ur.StrictMode,{children:N(bB,{})}));export{VD as C,NE as F,gT as I,xB as N,Ur as R,la as _,N as a,Qr as b,Jr as c,KT as d,uT as e,SB as f,Kf as g,wS as h,br as i,je as j,b0 as k,EB as p,T as r};
