function vz(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Tw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function dm(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var T={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=Symbol.for("react.element"),wz=Symbol.for("react.portal"),Sz=Symbol.for("react.fragment"),bz=Symbol.for("react.strict_mode"),xz=Symbol.for("react.profiler"),Ez=Symbol.for("react.provider"),Cz=Symbol.for("react.context"),zz=Symbol.for("react.forward_ref"),kz=Symbol.for("react.suspense"),Tz=Symbol.for("react.memo"),_z=Symbol.for("react.lazy"),ey=Symbol.iterator;function Iz(e){return e===null||typeof e!="object"?null:(e=ey&&e[ey]||e["@@iterator"],typeof e=="function"?e:null)}var _w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iw=Object.assign,Pw={};function _s(e,t,n){this.props=e,this.context=t,this.refs=Pw,this.updater=n||_w}_s.prototype.isReactComponent={};_s.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ow(){}Ow.prototype=_s.prototype;function hm(e,t,n){this.props=e,this.context=t,this.refs=Pw,this.updater=n||_w}var pm=hm.prototype=new Ow;pm.constructor=hm;Iw(pm,_s.prototype);pm.isPureReactComponent=!0;var ty=Array.isArray,Nw=Object.prototype.hasOwnProperty,mm={current:null},Aw={key:!0,ref:!0,__self:!0,__source:!0};function Rw(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Nw.call(t,r)&&!Aw.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Cl,type:e,key:o,ref:s,props:i,_owner:mm.current}}function Pz(e,t){return{$$typeof:Cl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gm(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cl}function Oz(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ny=/\/+/g;function Sd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Oz(""+e.key):t.toString(36)}function Lu(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Cl:case wz:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Sd(s,0):r,ty(i)?(n="",e!=null&&(n=e.replace(ny,"$&/")+"/"),Lu(i,t,n,"",function(u){return u})):i!=null&&(gm(i)&&(i=Pz(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ny,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ty(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Sd(o,a);s+=Lu(o,t,n,l,i)}else if(l=Iz(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Sd(o,a++),s+=Lu(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function lu(e,t,n){if(e==null)return e;var r=[],i=0;return Lu(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Nz(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Bt={current:null},ju={transition:null},Az={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:ju,ReactCurrentOwner:mm};ae.Children={map:lu,forEach:function(e,t,n){lu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lu(e,function(){t++}),t},toArray:function(e){return lu(e,function(t){return t})||[]},only:function(e){if(!gm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=_s;ae.Fragment=Sz;ae.Profiler=xz;ae.PureComponent=hm;ae.StrictMode=bz;ae.Suspense=kz;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Az;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Iw({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=mm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Nw.call(t,l)&&!Aw.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Cl,type:e.type,key:i,ref:o,props:r,_owner:s}};ae.createContext=function(e){return e={$$typeof:Cz,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ez,_context:e},e.Consumer=e};ae.createElement=Rw;ae.createFactory=function(e){var t=Rw.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:zz,render:e}};ae.isValidElement=gm;ae.lazy=function(e){return{$$typeof:_z,_payload:{_status:-1,_result:e},_init:Nz}};ae.memo=function(e,t){return{$$typeof:Tz,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=ju.transition;ju.transition={};try{e()}finally{ju.transition=t}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(e,t){return Bt.current.useCallback(e,t)};ae.useContext=function(e){return Bt.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return Bt.current.useDeferredValue(e)};ae.useEffect=function(e,t){return Bt.current.useEffect(e,t)};ae.useId=function(){return Bt.current.useId()};ae.useImperativeHandle=function(e,t,n){return Bt.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return Bt.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return Bt.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return Bt.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return Bt.current.useReducer(e,t,n)};ae.useRef=function(e){return Bt.current.useRef(e)};ae.useState=function(e){return Bt.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return Bt.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return Bt.current.useTransition()};ae.version="18.2.0";(function(e){e.exports=ae})(T);const Cr=Tw(T.exports),os=vz({__proto__:null,default:Cr},[T.exports]);var Ch={},ef={exports:{}},wn={},$w={exports:{}},Uw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,A){var j=P.length;P.push(A);e:for(;0<j;){var Q=j-1>>>1,oe=P[Q];if(0<i(oe,A))P[Q]=A,P[j]=oe,j=Q;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],j=P.pop();if(j!==A){P[0]=j;e:for(var Q=0,oe=P.length,He=oe>>>1;Q<He;){var nt=2*(Q+1)-1,Ae=P[nt],Re=nt+1,Le=P[Re];if(0>i(Ae,j))Re<oe&&0>i(Le,Ae)?(P[Q]=Le,P[Re]=j,Q=Re):(P[Q]=Ae,P[nt]=j,Q=nt);else if(Re<oe&&0>i(Le,j))P[Q]=Le,P[Re]=j,Q=Re;else break e}}return A}function i(P,A){var j=P.sortIndex-A.sortIndex;return j!==0?j:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,p=null,g=3,y=!1,w=!1,v=!1,c=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=P)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function S(P){if(v=!1,m(P),!w)if(n(l)!==null)w=!0,$(b);else{var A=n(u);A!==null&&L(S,A.startTime-P)}}function b(P,A){w=!1,v&&(v=!1,f(z),z=-1),y=!0;var j=g;try{for(m(A),p=n(l);p!==null&&(!(p.expirationTime>A)||P&&!_());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,g=p.priorityLevel;var oe=Q(p.expirationTime<=A);A=e.unstable_now(),typeof oe=="function"?p.callback=oe:p===n(l)&&r(l),m(A)}else r(l);p=n(l)}if(p!==null)var He=!0;else{var nt=n(u);nt!==null&&L(S,nt.startTime-A),He=!1}return He}finally{p=null,g=j,y=!1}}var x=!1,E=null,z=-1,k=5,C=-1;function _(){return!(e.unstable_now()-C<k)}function N(){if(E!==null){var P=e.unstable_now();C=P;var A=!0;try{A=E(!0,P)}finally{A?R():(x=!1,E=null)}}else x=!1}var R;if(typeof h=="function")R=function(){h(N)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,O=V.port2;V.port1.onmessage=N,R=function(){O.postMessage(null)}}else R=function(){c(N,0)};function $(P){E=P,x||(x=!0,R())}function L(P,A){z=c(function(){P(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,$(b))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var j=g;g=A;try{return P()}finally{g=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=g;g=P;try{return A()}finally{g=j}},e.unstable_scheduleCallback=function(P,A,j){var Q=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Q+j:Q):j=Q,P){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=j+oe,P={id:d++,callback:A,priorityLevel:P,startTime:j,expirationTime:oe,sortIndex:-1},j>Q?(P.sortIndex=j,t(u,P),n(l)===null&&P===n(u)&&(v?(f(z),z=-1):v=!0,L(S,j-Q))):(P.sortIndex=oe,t(l,P),w||y||(w=!0,$(b))),P},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(P){var A=g;return function(){var j=g;g=A;try{return P.apply(this,arguments)}finally{g=j}}}})(Uw);(function(e){e.exports=Uw})($w);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dw=T.exports,yn=$w.exports;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mw=new Set,La={};function ao(e,t){ss(e,t),ss(e+"Capture",t)}function ss(e,t){for(La[e]=t,e=0;e<t.length;e++)Mw.add(t[e])}var Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zh=Object.prototype.hasOwnProperty,Rz=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ry={},iy={};function $z(e){return zh.call(iy,e)?!0:zh.call(ry,e)?!1:Rz.test(e)?iy[e]=!0:(ry[e]=!0,!1)}function Uz(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dz(e,t,n,r){if(t===null||typeof t>"u"||Uz(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Vt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){bt[e]=new Vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];bt[t]=new Vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){bt[e]=new Vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){bt[e]=new Vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){bt[e]=new Vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){bt[e]=new Vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){bt[e]=new Vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){bt[e]=new Vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){bt[e]=new Vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var ym=/[\-:]([a-z])/g;function vm(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ym,vm);bt[t]=new Vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ym,vm);bt[t]=new Vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ym,vm);bt[t]=new Vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){bt[e]=new Vt(e,1,!1,e.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){bt[e]=new Vt(e,1,!1,e.toLowerCase(),null,!0,!0)});function wm(e,t,n,r){var i=bt.hasOwnProperty(t)?bt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dz(t,n,i,r)&&(n=null),r||i===null?$z(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Dr=Dw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uu=Symbol.for("react.element"),No=Symbol.for("react.portal"),Ao=Symbol.for("react.fragment"),Sm=Symbol.for("react.strict_mode"),kh=Symbol.for("react.profiler"),Lw=Symbol.for("react.provider"),jw=Symbol.for("react.context"),bm=Symbol.for("react.forward_ref"),Th=Symbol.for("react.suspense"),_h=Symbol.for("react.suspense_list"),xm=Symbol.for("react.memo"),Wr=Symbol.for("react.lazy"),Fw=Symbol.for("react.offscreen"),oy=Symbol.iterator;function Qs(e){return e===null||typeof e!="object"?null:(e=oy&&e[oy]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,bd;function ca(e){if(bd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bd=t&&t[1]||""}return`
`+bd+e}var xd=!1;function Ed(e,t){if(!e||xd)return"";xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{xd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ca(e):""}function Mz(e){switch(e.tag){case 5:return ca(e.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return e=Ed(e.type,!1),e;case 11:return e=Ed(e.type.render,!1),e;case 1:return e=Ed(e.type,!0),e;default:return""}}function Ih(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ao:return"Fragment";case No:return"Portal";case kh:return"Profiler";case Sm:return"StrictMode";case Th:return"Suspense";case _h:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jw:return(e.displayName||"Context")+".Consumer";case Lw:return(e._context.displayName||"Context")+".Provider";case bm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xm:return t=e.displayName||null,t!==null?t:Ih(e.type)||"Memo";case Wr:t=e._payload,e=e._init;try{return Ih(e(t))}catch{}}return null}function Lz(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ih(t);case 8:return t===Sm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ui(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jz(e){var t=Bw(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cu(e){e._valueTracker||(e._valueTracker=jz(e))}function Vw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bw(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ac(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ph(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function sy(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ui(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ww(e,t){t=t.checked,t!=null&&wm(e,"checked",t,!1)}function Oh(e,t){Ww(e,t);var n=ui(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Nh(e,t.type,n):t.hasOwnProperty("defaultValue")&&Nh(e,t.type,ui(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ay(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Nh(e,t,n){(t!=="number"||ac(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fa=Array.isArray;function qo(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ui(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ah(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ly(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(fa(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ui(n)}}function Hw(e,t){var n=ui(t.value),r=ui(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function uy(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qw(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qw(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fu,Kw=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fu=fu||document.createElement("div"),fu.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fu.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fz=["Webkit","ms","Moz","O"];Object.keys(ba).forEach(function(e){Fz.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ba[t]=ba[e]})});function Gw(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ba.hasOwnProperty(e)&&ba[e]?(""+t).trim():t+"px"}function Yw(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Gw(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Bz=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $h(e,t){if(t){if(Bz[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function Uh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dh=null;function Em(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mh=null,Ko=null,Go=null;function cy(e){if(e=Tl(e)){if(typeof Mh!="function")throw Error(U(280));var t=e.stateNode;t&&(t=sf(t),Mh(e.stateNode,e.type,t))}}function Xw(e){Ko?Go?Go.push(e):Go=[e]:Ko=e}function Qw(){if(Ko){var e=Ko,t=Go;if(Go=Ko=null,cy(e),t)for(e=0;e<t.length;e++)cy(t[e])}}function Jw(e,t){return e(t)}function Zw(){}var Cd=!1;function eS(e,t,n){if(Cd)return e(t,n);Cd=!0;try{return Jw(e,t,n)}finally{Cd=!1,(Ko!==null||Go!==null)&&(Zw(),Qw())}}function Fa(e,t){var n=e.stateNode;if(n===null)return null;var r=sf(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var Lh=!1;if(Tr)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Lh=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Lh=!1}function Vz(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var xa=!1,lc=null,uc=!1,jh=null,Wz={onError:function(e){xa=!0,lc=e}};function Hz(e,t,n,r,i,o,s,a,l){xa=!1,lc=null,Vz.apply(Wz,arguments)}function qz(e,t,n,r,i,o,s,a,l){if(Hz.apply(this,arguments),xa){if(xa){var u=lc;xa=!1,lc=null}else throw Error(U(198));uc||(uc=!0,jh=u)}}function lo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tS(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fy(e){if(lo(e)!==e)throw Error(U(188))}function Kz(e){var t=e.alternate;if(!t){if(t=lo(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fy(i),e;if(o===r)return fy(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function nS(e){return e=Kz(e),e!==null?rS(e):null}function rS(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rS(e);if(t!==null)return t;e=e.sibling}return null}var iS=yn.unstable_scheduleCallback,dy=yn.unstable_cancelCallback,Gz=yn.unstable_shouldYield,Yz=yn.unstable_requestPaint,Ge=yn.unstable_now,Xz=yn.unstable_getCurrentPriorityLevel,Cm=yn.unstable_ImmediatePriority,oS=yn.unstable_UserBlockingPriority,cc=yn.unstable_NormalPriority,Qz=yn.unstable_LowPriority,sS=yn.unstable_IdlePriority,tf=null,ir=null;function Jz(e){if(ir&&typeof ir.onCommitFiberRoot=="function")try{ir.onCommitFiberRoot(tf,e,void 0,(e.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:tk,Zz=Math.log,ek=Math.LN2;function tk(e){return e>>>=0,e===0?32:31-(Zz(e)/ek|0)|0}var du=64,hu=4194304;function da(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fc(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=da(a):(o&=s,o!==0&&(r=da(o)))}else s=n&~i,s!==0?r=da(s):o!==0&&(r=da(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Bn(t),i=1<<n,r|=e[n],t&=~i;return r}function nk(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Bn(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=nk(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Fh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function aS(){var e=du;return du<<=1,(du&4194240)===0&&(du=64),e}function zd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bn(t),e[t]=n}function ik(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Bn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function zm(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Bn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xe=0;function lS(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var uS,km,cS,fS,dS,Bh=!1,pu=[],Jr=null,Zr=null,ei=null,Ba=new Map,Va=new Map,qr=[],ok="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hy(e,t){switch(e){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":Ba.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(t.pointerId)}}function Zs(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Tl(t),t!==null&&km(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sk(e,t,n,r,i){switch(t){case"focusin":return Jr=Zs(Jr,e,t,n,r,i),!0;case"dragenter":return Zr=Zs(Zr,e,t,n,r,i),!0;case"mouseover":return ei=Zs(ei,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ba.set(o,Zs(Ba.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Va.set(o,Zs(Va.get(o)||null,e,t,n,r,i)),!0}return!1}function hS(e){var t=Ui(e.target);if(t!==null){var n=lo(t);if(n!==null){if(t=n.tag,t===13){if(t=tS(n),t!==null){e.blockedOn=t,dS(e.priority,function(){cS(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Dh=r,n.target.dispatchEvent(r),Dh=null}else return t=Tl(n),t!==null&&km(t),e.blockedOn=n,!1;t.shift()}return!0}function py(e,t,n){Fu(e)&&n.delete(t)}function ak(){Bh=!1,Jr!==null&&Fu(Jr)&&(Jr=null),Zr!==null&&Fu(Zr)&&(Zr=null),ei!==null&&Fu(ei)&&(ei=null),Ba.forEach(py),Va.forEach(py)}function ea(e,t){e.blockedOn===t&&(e.blockedOn=null,Bh||(Bh=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,ak)))}function Wa(e){function t(i){return ea(i,e)}if(0<pu.length){ea(pu[0],e);for(var n=1;n<pu.length;n++){var r=pu[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jr!==null&&ea(Jr,e),Zr!==null&&ea(Zr,e),ei!==null&&ea(ei,e),Ba.forEach(t),Va.forEach(t),n=0;n<qr.length;n++)r=qr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qr.length&&(n=qr[0],n.blockedOn===null);)hS(n),n.blockedOn===null&&qr.shift()}var Yo=Dr.ReactCurrentBatchConfig,dc=!0;function lk(e,t,n,r){var i=xe,o=Yo.transition;Yo.transition=null;try{xe=1,Tm(e,t,n,r)}finally{xe=i,Yo.transition=o}}function uk(e,t,n,r){var i=xe,o=Yo.transition;Yo.transition=null;try{xe=4,Tm(e,t,n,r)}finally{xe=i,Yo.transition=o}}function Tm(e,t,n,r){if(dc){var i=Vh(e,t,n,r);if(i===null)$d(e,t,r,hc,n),hy(e,r);else if(sk(i,e,t,n,r))r.stopPropagation();else if(hy(e,r),t&4&&-1<ok.indexOf(e)){for(;i!==null;){var o=Tl(i);if(o!==null&&uS(o),o=Vh(e,t,n,r),o===null&&$d(e,t,r,hc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else $d(e,t,r,null,n)}}var hc=null;function Vh(e,t,n,r){if(hc=null,e=Em(r),e=Ui(e),e!==null)if(t=lo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tS(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hc=e,null}function pS(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xz()){case Cm:return 1;case oS:return 4;case cc:case Qz:return 16;case sS:return 536870912;default:return 16}default:return 16}}var Gr=null,_m=null,Bu=null;function mS(){if(Bu)return Bu;var e,t=_m,n=t.length,r,i="value"in Gr?Gr.value:Gr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Bu=i.slice(e,1<r?1-r:void 0)}function Vu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mu(){return!0}function my(){return!1}function Sn(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?mu:my,this.isPropagationStopped=my,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mu)},persist:function(){},isPersistent:mu}),t}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Im=Sn(Is),kl=Me({},Is,{view:0,detail:0}),ck=Sn(kl),kd,Td,ta,nf=Me({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ta&&(ta&&e.type==="mousemove"?(kd=e.screenX-ta.screenX,Td=e.screenY-ta.screenY):Td=kd=0,ta=e),kd)},movementY:function(e){return"movementY"in e?e.movementY:Td}}),gy=Sn(nf),fk=Me({},nf,{dataTransfer:0}),dk=Sn(fk),hk=Me({},kl,{relatedTarget:0}),_d=Sn(hk),pk=Me({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),mk=Sn(pk),gk=Me({},Is,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yk=Sn(gk),vk=Me({},Is,{data:0}),yy=Sn(vk),wk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bk[e])?!!t[e]:!1}function Pm(){return xk}var Ek=Me({},kl,{key:function(e){if(e.key){var t=wk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pm,charCode:function(e){return e.type==="keypress"?Vu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ck=Sn(Ek),zk=Me({},nf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vy=Sn(zk),kk=Me({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pm}),Tk=Sn(kk),_k=Me({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ik=Sn(_k),Pk=Me({},nf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ok=Sn(Pk),Nk=[9,13,27,32],Om=Tr&&"CompositionEvent"in window,Ea=null;Tr&&"documentMode"in document&&(Ea=document.documentMode);var Ak=Tr&&"TextEvent"in window&&!Ea,gS=Tr&&(!Om||Ea&&8<Ea&&11>=Ea),wy=String.fromCharCode(32),Sy=!1;function yS(e,t){switch(e){case"keyup":return Nk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ro=!1;function Rk(e,t){switch(e){case"compositionend":return vS(t);case"keypress":return t.which!==32?null:(Sy=!0,wy);case"textInput":return e=t.data,e===wy&&Sy?null:e;default:return null}}function $k(e,t){if(Ro)return e==="compositionend"||!Om&&yS(e,t)?(e=mS(),Bu=_m=Gr=null,Ro=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gS&&t.locale!=="ko"?null:t.data;default:return null}}var Uk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function by(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uk[e.type]:t==="textarea"}function wS(e,t,n,r){Xw(r),t=pc(t,"onChange"),0<t.length&&(n=new Im("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ca=null,Ha=null;function Dk(e){PS(e,0)}function rf(e){var t=Do(e);if(Vw(t))return e}function Mk(e,t){if(e==="change")return t}var SS=!1;if(Tr){var Id;if(Tr){var Pd="oninput"in document;if(!Pd){var xy=document.createElement("div");xy.setAttribute("oninput","return;"),Pd=typeof xy.oninput=="function"}Id=Pd}else Id=!1;SS=Id&&(!document.documentMode||9<document.documentMode)}function Ey(){Ca&&(Ca.detachEvent("onpropertychange",bS),Ha=Ca=null)}function bS(e){if(e.propertyName==="value"&&rf(Ha)){var t=[];wS(t,Ha,e,Em(e)),eS(Dk,t)}}function Lk(e,t,n){e==="focusin"?(Ey(),Ca=t,Ha=n,Ca.attachEvent("onpropertychange",bS)):e==="focusout"&&Ey()}function jk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rf(Ha)}function Fk(e,t){if(e==="click")return rf(t)}function Bk(e,t){if(e==="input"||e==="change")return rf(t)}function Vk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Hn=typeof Object.is=="function"?Object.is:Vk;function qa(e,t){if(Hn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zh.call(t,i)||!Hn(e[i],t[i]))return!1}return!0}function Cy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zy(e,t){var n=Cy(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cy(n)}}function xS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ES(){for(var e=window,t=ac();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ac(e.document)}return t}function Nm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wk(e){var t=ES(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xS(n.ownerDocument.documentElement,n)){if(r!==null&&Nm(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=zy(n,o);var s=zy(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hk=Tr&&"documentMode"in document&&11>=document.documentMode,$o=null,Wh=null,za=null,Hh=!1;function ky(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hh||$o==null||$o!==ac(r)||(r=$o,"selectionStart"in r&&Nm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),za&&qa(za,r)||(za=r,r=pc(Wh,"onSelect"),0<r.length&&(t=new Im("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$o)))}function gu(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Uo={animationend:gu("Animation","AnimationEnd"),animationiteration:gu("Animation","AnimationIteration"),animationstart:gu("Animation","AnimationStart"),transitionend:gu("Transition","TransitionEnd")},Od={},CS={};Tr&&(CS=document.createElement("div").style,"AnimationEvent"in window||(delete Uo.animationend.animation,delete Uo.animationiteration.animation,delete Uo.animationstart.animation),"TransitionEvent"in window||delete Uo.transitionend.transition);function of(e){if(Od[e])return Od[e];if(!Uo[e])return e;var t=Uo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in CS)return Od[e]=t[n];return e}var zS=of("animationend"),kS=of("animationiteration"),TS=of("animationstart"),_S=of("transitionend"),IS=new Map,Ty="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pi(e,t){IS.set(e,t),ao(t,[e])}for(var Nd=0;Nd<Ty.length;Nd++){var Ad=Ty[Nd],qk=Ad.toLowerCase(),Kk=Ad[0].toUpperCase()+Ad.slice(1);pi(qk,"on"+Kk)}pi(zS,"onAnimationEnd");pi(kS,"onAnimationIteration");pi(TS,"onAnimationStart");pi("dblclick","onDoubleClick");pi("focusin","onFocus");pi("focusout","onBlur");pi(_S,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);ao("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ao("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ao("onBeforeInput",["compositionend","keypress","textInput","paste"]);ao("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ao("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ao("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function _y(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qz(r,t,void 0,e),e.currentTarget=null}function PS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;_y(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;_y(i,a,u),o=l}}}if(uc)throw e=jh,uc=!1,jh=null,e}function _e(e,t){var n=t[Xh];n===void 0&&(n=t[Xh]=new Set);var r=e+"__bubble";n.has(r)||(OS(t,e,2,!1),n.add(r))}function Rd(e,t,n){var r=0;t&&(r|=4),OS(n,e,r,t)}var yu="_reactListening"+Math.random().toString(36).slice(2);function Ka(e){if(!e[yu]){e[yu]=!0,Mw.forEach(function(n){n!=="selectionchange"&&(Gk.has(n)||Rd(n,!1,e),Rd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yu]||(t[yu]=!0,Rd("selectionchange",!1,t))}}function OS(e,t,n,r){switch(pS(t)){case 1:var i=lk;break;case 4:i=uk;break;default:i=Tm}n=i.bind(null,t,n,e),i=void 0,!Lh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $d(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Ui(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}eS(function(){var u=o,d=Em(n),p=[];e:{var g=IS.get(e);if(g!==void 0){var y=Im,w=e;switch(e){case"keypress":if(Vu(n)===0)break e;case"keydown":case"keyup":y=Ck;break;case"focusin":w="focus",y=_d;break;case"focusout":w="blur",y=_d;break;case"beforeblur":case"afterblur":y=_d;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=gy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=dk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Tk;break;case zS:case kS:case TS:y=mk;break;case _S:y=Ik;break;case"scroll":y=ck;break;case"wheel":y=Ok;break;case"copy":case"cut":case"paste":y=yk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=vy}var v=(t&4)!==0,c=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var h=u,m;h!==null;){m=h;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,f!==null&&(S=Fa(h,f),S!=null&&v.push(Ga(h,S,m)))),c)break;h=h.return}0<v.length&&(g=new y(g,w,null,n,d),p.push({event:g,listeners:v}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Dh&&(w=n.relatedTarget||n.fromElement)&&(Ui(w)||w[_r]))break e;if((y||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?Ui(w):null,w!==null&&(c=lo(w),w!==c||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(v=gy,S="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=vy,S="onPointerLeave",f="onPointerEnter",h="pointer"),c=y==null?g:Do(y),m=w==null?g:Do(w),g=new v(S,h+"leave",y,n,d),g.target=c,g.relatedTarget=m,S=null,Ui(d)===u&&(v=new v(f,h+"enter",w,n,d),v.target=m,v.relatedTarget=c,S=v),c=S,y&&w)t:{for(v=y,f=w,h=0,m=v;m;m=Eo(m))h++;for(m=0,S=f;S;S=Eo(S))m++;for(;0<h-m;)v=Eo(v),h--;for(;0<m-h;)f=Eo(f),m--;for(;h--;){if(v===f||f!==null&&v===f.alternate)break t;v=Eo(v),f=Eo(f)}v=null}else v=null;y!==null&&Iy(p,g,y,v,!1),w!==null&&c!==null&&Iy(p,c,w,v,!0)}}e:{if(g=u?Do(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var b=Mk;else if(by(g))if(SS)b=Bk;else{b=jk;var x=Lk}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=Fk);if(b&&(b=b(e,u))){wS(p,b,n,d);break e}x&&x(e,g,u),e==="focusout"&&(x=g._wrapperState)&&x.controlled&&g.type==="number"&&Nh(g,"number",g.value)}switch(x=u?Do(u):window,e){case"focusin":(by(x)||x.contentEditable==="true")&&($o=x,Wh=u,za=null);break;case"focusout":za=Wh=$o=null;break;case"mousedown":Hh=!0;break;case"contextmenu":case"mouseup":case"dragend":Hh=!1,ky(p,n,d);break;case"selectionchange":if(Hk)break;case"keydown":case"keyup":ky(p,n,d)}var E;if(Om)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ro?yS(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(gS&&n.locale!=="ko"&&(Ro||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ro&&(E=mS()):(Gr=d,_m="value"in Gr?Gr.value:Gr.textContent,Ro=!0)),x=pc(u,z),0<x.length&&(z=new yy(z,e,null,n,d),p.push({event:z,listeners:x}),E?z.data=E:(E=vS(n),E!==null&&(z.data=E)))),(E=Ak?Rk(e,n):$k(e,n))&&(u=pc(u,"onBeforeInput"),0<u.length&&(d=new yy("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=E))}PS(p,t)})}function Ga(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pc(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Fa(e,n),o!=null&&r.unshift(Ga(e,o,i)),o=Fa(e,t),o!=null&&r.push(Ga(e,o,i))),e=e.return}return r}function Eo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Iy(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Fa(n,o),l!=null&&s.unshift(Ga(n,l,a))):i||(l=Fa(n,o),l!=null&&s.push(Ga(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Yk=/\r\n?/g,Xk=/\u0000|\uFFFD/g;function Py(e){return(typeof e=="string"?e:""+e).replace(Yk,`
`).replace(Xk,"")}function vu(e,t,n){if(t=Py(t),Py(e)!==t&&n)throw Error(U(425))}function mc(){}var qh=null,Kh=null;function Gh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yh=typeof setTimeout=="function"?setTimeout:void 0,Qk=typeof clearTimeout=="function"?clearTimeout:void 0,Oy=typeof Promise=="function"?Promise:void 0,Jk=typeof queueMicrotask=="function"?queueMicrotask:typeof Oy<"u"?function(e){return Oy.resolve(null).then(e).catch(Zk)}:Yh;function Zk(e){setTimeout(function(){throw e})}function Ud(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wa(t)}function ti(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ny(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),tr="__reactFiber$"+Ps,Ya="__reactProps$"+Ps,_r="__reactContainer$"+Ps,Xh="__reactEvents$"+Ps,e2="__reactListeners$"+Ps,t2="__reactHandles$"+Ps;function Ui(e){var t=e[tr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_r]||n[tr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ny(e);e!==null;){if(n=e[tr])return n;e=Ny(e)}return t}e=n,n=e.parentNode}return null}function Tl(e){return e=e[tr]||e[_r],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Do(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function sf(e){return e[Ya]||null}var Qh=[],Mo=-1;function mi(e){return{current:e}}function Ie(e){0>Mo||(e.current=Qh[Mo],Qh[Mo]=null,Mo--)}function ke(e,t){Mo++,Qh[Mo]=e.current,e.current=t}var ci={},At=mi(ci),tn=mi(!1),Yi=ci;function as(e,t){var n=e.type.contextTypes;if(!n)return ci;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function nn(e){return e=e.childContextTypes,e!=null}function gc(){Ie(tn),Ie(At)}function Ay(e,t,n){if(At.current!==ci)throw Error(U(168));ke(At,t),ke(tn,n)}function NS(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,Lz(e)||"Unknown",i));return Me({},n,r)}function yc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ci,Yi=At.current,ke(At,e),ke(tn,tn.current),!0}function Ry(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=NS(e,t,Yi),r.__reactInternalMemoizedMergedChildContext=e,Ie(tn),Ie(At),ke(At,e)):Ie(tn),ke(tn,n)}var wr=null,af=!1,Dd=!1;function AS(e){wr===null?wr=[e]:wr.push(e)}function n2(e){af=!0,AS(e)}function gi(){if(!Dd&&wr!==null){Dd=!0;var e=0,t=xe;try{var n=wr;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wr=null,af=!1}catch(i){throw wr!==null&&(wr=wr.slice(e+1)),iS(Cm,gi),i}finally{xe=t,Dd=!1}}return null}var Lo=[],jo=0,vc=null,wc=0,kn=[],Tn=0,Xi=null,Sr=1,br="";function Oi(e,t){Lo[jo++]=wc,Lo[jo++]=vc,vc=e,wc=t}function RS(e,t,n){kn[Tn++]=Sr,kn[Tn++]=br,kn[Tn++]=Xi,Xi=e;var r=Sr;e=br;var i=32-Bn(r)-1;r&=~(1<<i),n+=1;var o=32-Bn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Sr=1<<32-Bn(t)+i|n<<i|r,br=o+e}else Sr=1<<o|n<<i|r,br=e}function Am(e){e.return!==null&&(Oi(e,1),RS(e,1,0))}function Rm(e){for(;e===vc;)vc=Lo[--jo],Lo[jo]=null,wc=Lo[--jo],Lo[jo]=null;for(;e===Xi;)Xi=kn[--Tn],kn[Tn]=null,br=kn[--Tn],kn[Tn]=null,Sr=kn[--Tn],kn[Tn]=null}var mn=null,pn=null,Oe=!1,Fn=null;function $S(e,t){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $y(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,mn=e,pn=ti(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,mn=e,pn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xi!==null?{id:Sr,overflow:br}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,mn=e,pn=null,!0):!1;default:return!1}}function Jh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zh(e){if(Oe){var t=pn;if(t){var n=t;if(!$y(e,t)){if(Jh(e))throw Error(U(418));t=ti(n.nextSibling);var r=mn;t&&$y(e,t)?$S(r,n):(e.flags=e.flags&-4097|2,Oe=!1,mn=e)}}else{if(Jh(e))throw Error(U(418));e.flags=e.flags&-4097|2,Oe=!1,mn=e}}}function Uy(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mn=e}function wu(e){if(e!==mn)return!1;if(!Oe)return Uy(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gh(e.type,e.memoizedProps)),t&&(t=pn)){if(Jh(e))throw US(),Error(U(418));for(;t;)$S(e,t),t=ti(t.nextSibling)}if(Uy(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pn=ti(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pn=null}}else pn=mn?ti(e.stateNode.nextSibling):null;return!0}function US(){for(var e=pn;e;)e=ti(e.nextSibling)}function ls(){pn=mn=null,Oe=!1}function $m(e){Fn===null?Fn=[e]:Fn.push(e)}var r2=Dr.ReactCurrentBatchConfig;function Ln(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Sc=mi(null),bc=null,Fo=null,Um=null;function Dm(){Um=Fo=bc=null}function Mm(e){var t=Sc.current;Ie(Sc),e._currentValue=t}function ep(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xo(e,t){bc=e,Um=Fo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Jt=!0),e.firstContext=null)}function On(e){var t=e._currentValue;if(Um!==e)if(e={context:e,memoizedValue:t,next:null},Fo===null){if(bc===null)throw Error(U(308));Fo=e,bc.dependencies={lanes:0,firstContext:e}}else Fo=Fo.next=e;return t}var Di=null;function Lm(e){Di===null?Di=[e]:Di.push(e)}function DS(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Lm(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ir(e,r)}function Ir(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Hr=!1;function jm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function MS(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ni(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(pe&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ir(e,n)}return i=r.interleaved,i===null?(t.next=t,Lm(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ir(e,n)}function Wu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zm(e,n)}}function Dy(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xc(e,t,n,r){var i=e.updateQueue;Hr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,d=u=l=null,a=o;do{var g=a.lane,y=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(g=t,y=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){p=w.call(y,p,g);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,g=typeof w=="function"?w.call(y,p,g):w,g==null)break e;p=Me({},p,g);break e;case 2:Hr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=p):d=d.next=y,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ji|=s,e.lanes=s,e.memoizedState=p}}function My(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var LS=new Dw.Component().refs;function tp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var lf={isMounted:function(e){return(e=e._reactInternals)?lo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ft(),i=ii(e),o=zr(r,i);o.payload=t,n!=null&&(o.callback=n),t=ni(e,o,i),t!==null&&(Vn(t,e,i,r),Wu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ft(),i=ii(e),o=zr(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ni(e,o,i),t!==null&&(Vn(t,e,i,r),Wu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ft(),r=ii(e),i=zr(n,r);i.tag=2,t!=null&&(i.callback=t),t=ni(e,i,r),t!==null&&(Vn(t,e,r,n),Wu(t,e,r))}};function Ly(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!qa(n,r)||!qa(i,o):!0}function jS(e,t,n){var r=!1,i=ci,o=t.contextType;return typeof o=="object"&&o!==null?o=On(o):(i=nn(t)?Yi:At.current,r=t.contextTypes,o=(r=r!=null)?as(e,i):ci),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=lf,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function jy(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&lf.enqueueReplaceState(t,t.state,null)}function np(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=LS,jm(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=On(o):(o=nn(t)?Yi:At.current,i.context=as(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(tp(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&lf.enqueueReplaceState(i,i.state,null),xc(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function na(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===LS&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function Su(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fy(e){var t=e._init;return t(e._payload)}function FS(e){function t(f,h){if(e){var m=f.deletions;m===null?(f.deletions=[h],f.flags|=16):m.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=oi(f,h),f.index=0,f.sibling=null,f}function o(f,h,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<h?(f.flags|=2,h):m):(f.flags|=2,h)):(f.flags|=1048576,h)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,h,m,S){return h===null||h.tag!==6?(h=Wd(m,f.mode,S),h.return=f,h):(h=i(h,m),h.return=f,h)}function l(f,h,m,S){var b=m.type;return b===Ao?d(f,h,m.props.children,S,m.key):h!==null&&(h.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Wr&&Fy(b)===h.type)?(S=i(h,m.props),S.ref=na(f,h,m),S.return=f,S):(S=Xu(m.type,m.key,m.props,null,f.mode,S),S.ref=na(f,h,m),S.return=f,S)}function u(f,h,m,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Hd(m,f.mode,S),h.return=f,h):(h=i(h,m.children||[]),h.return=f,h)}function d(f,h,m,S,b){return h===null||h.tag!==7?(h=Vi(m,f.mode,S,b),h.return=f,h):(h=i(h,m),h.return=f,h)}function p(f,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Wd(""+h,f.mode,m),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case uu:return m=Xu(h.type,h.key,h.props,null,f.mode,m),m.ref=na(f,null,h),m.return=f,m;case No:return h=Hd(h,f.mode,m),h.return=f,h;case Wr:var S=h._init;return p(f,S(h._payload),m)}if(fa(h)||Qs(h))return h=Vi(h,f.mode,m,null),h.return=f,h;Su(f,h)}return null}function g(f,h,m,S){var b=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:a(f,h,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case uu:return m.key===b?l(f,h,m,S):null;case No:return m.key===b?u(f,h,m,S):null;case Wr:return b=m._init,g(f,h,b(m._payload),S)}if(fa(m)||Qs(m))return b!==null?null:d(f,h,m,S,null);Su(f,m)}return null}function y(f,h,m,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(m)||null,a(h,f,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case uu:return f=f.get(S.key===null?m:S.key)||null,l(h,f,S,b);case No:return f=f.get(S.key===null?m:S.key)||null,u(h,f,S,b);case Wr:var x=S._init;return y(f,h,m,x(S._payload),b)}if(fa(S)||Qs(S))return f=f.get(m)||null,d(h,f,S,b,null);Su(h,S)}return null}function w(f,h,m,S){for(var b=null,x=null,E=h,z=h=0,k=null;E!==null&&z<m.length;z++){E.index>z?(k=E,E=null):k=E.sibling;var C=g(f,E,m[z],S);if(C===null){E===null&&(E=k);break}e&&E&&C.alternate===null&&t(f,E),h=o(C,h,z),x===null?b=C:x.sibling=C,x=C,E=k}if(z===m.length)return n(f,E),Oe&&Oi(f,z),b;if(E===null){for(;z<m.length;z++)E=p(f,m[z],S),E!==null&&(h=o(E,h,z),x===null?b=E:x.sibling=E,x=E);return Oe&&Oi(f,z),b}for(E=r(f,E);z<m.length;z++)k=y(E,f,z,m[z],S),k!==null&&(e&&k.alternate!==null&&E.delete(k.key===null?z:k.key),h=o(k,h,z),x===null?b=k:x.sibling=k,x=k);return e&&E.forEach(function(_){return t(f,_)}),Oe&&Oi(f,z),b}function v(f,h,m,S){var b=Qs(m);if(typeof b!="function")throw Error(U(150));if(m=b.call(m),m==null)throw Error(U(151));for(var x=b=null,E=h,z=h=0,k=null,C=m.next();E!==null&&!C.done;z++,C=m.next()){E.index>z?(k=E,E=null):k=E.sibling;var _=g(f,E,C.value,S);if(_===null){E===null&&(E=k);break}e&&E&&_.alternate===null&&t(f,E),h=o(_,h,z),x===null?b=_:x.sibling=_,x=_,E=k}if(C.done)return n(f,E),Oe&&Oi(f,z),b;if(E===null){for(;!C.done;z++,C=m.next())C=p(f,C.value,S),C!==null&&(h=o(C,h,z),x===null?b=C:x.sibling=C,x=C);return Oe&&Oi(f,z),b}for(E=r(f,E);!C.done;z++,C=m.next())C=y(E,f,z,C.value,S),C!==null&&(e&&C.alternate!==null&&E.delete(C.key===null?z:C.key),h=o(C,h,z),x===null?b=C:x.sibling=C,x=C);return e&&E.forEach(function(N){return t(f,N)}),Oe&&Oi(f,z),b}function c(f,h,m,S){if(typeof m=="object"&&m!==null&&m.type===Ao&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case uu:e:{for(var b=m.key,x=h;x!==null;){if(x.key===b){if(b=m.type,b===Ao){if(x.tag===7){n(f,x.sibling),h=i(x,m.props.children),h.return=f,f=h;break e}}else if(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Wr&&Fy(b)===x.type){n(f,x.sibling),h=i(x,m.props),h.ref=na(f,x,m),h.return=f,f=h;break e}n(f,x);break}else t(f,x);x=x.sibling}m.type===Ao?(h=Vi(m.props.children,f.mode,S,m.key),h.return=f,f=h):(S=Xu(m.type,m.key,m.props,null,f.mode,S),S.ref=na(f,h,m),S.return=f,f=S)}return s(f);case No:e:{for(x=m.key;h!==null;){if(h.key===x)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(f,h.sibling),h=i(h,m.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=Hd(m,f.mode,S),h.return=f,f=h}return s(f);case Wr:return x=m._init,c(f,h,x(m._payload),S)}if(fa(m))return w(f,h,m,S);if(Qs(m))return v(f,h,m,S);Su(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(f,h.sibling),h=i(h,m),h.return=f,f=h):(n(f,h),h=Wd(m,f.mode,S),h.return=f,f=h),s(f)):n(f,h)}return c}var us=FS(!0),BS=FS(!1),_l={},or=mi(_l),Xa=mi(_l),Qa=mi(_l);function Mi(e){if(e===_l)throw Error(U(174));return e}function Fm(e,t){switch(ke(Qa,t),ke(Xa,e),ke(or,_l),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Rh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Rh(t,e)}Ie(or),ke(or,t)}function cs(){Ie(or),Ie(Xa),Ie(Qa)}function VS(e){Mi(Qa.current);var t=Mi(or.current),n=Rh(t,e.type);t!==n&&(ke(Xa,e),ke(or,n))}function Bm(e){Xa.current===e&&(Ie(or),Ie(Xa))}var Ue=mi(0);function Ec(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Md=[];function Vm(){for(var e=0;e<Md.length;e++)Md[e]._workInProgressVersionPrimary=null;Md.length=0}var Hu=Dr.ReactCurrentDispatcher,Ld=Dr.ReactCurrentBatchConfig,Qi=0,De=null,it=null,lt=null,Cc=!1,ka=!1,Ja=0,i2=0;function kt(){throw Error(U(321))}function Wm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Hn(e[n],t[n]))return!1;return!0}function Hm(e,t,n,r,i,o){if(Qi=o,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hu.current=e===null||e.memoizedState===null?l2:u2,e=n(r,i),ka){o=0;do{if(ka=!1,Ja=0,25<=o)throw Error(U(301));o+=1,lt=it=null,t.updateQueue=null,Hu.current=c2,e=n(r,i)}while(ka)}if(Hu.current=zc,t=it!==null&&it.next!==null,Qi=0,lt=it=De=null,Cc=!1,t)throw Error(U(300));return e}function qm(){var e=Ja!==0;return Ja=0,e}function Jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?De.memoizedState=lt=e:lt=lt.next=e,lt}function Nn(){if(it===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=it.next;var t=lt===null?De.memoizedState:lt.next;if(t!==null)lt=t,it=e;else{if(e===null)throw Error(U(310));it=e,e={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},lt===null?De.memoizedState=lt=e:lt=lt.next=e}return lt}function Za(e,t){return typeof t=="function"?t(e):t}function jd(e){var t=Nn(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=it,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((Qi&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,De.lanes|=d,Ji|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Hn(r,t.memoizedState)||(Jt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,De.lanes|=o,Ji|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fd(e){var t=Nn(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Hn(o,t.memoizedState)||(Jt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function WS(){}function HS(e,t){var n=De,r=Nn(),i=t(),o=!Hn(r.memoizedState,i);if(o&&(r.memoizedState=i,Jt=!0),r=r.queue,Km(GS.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,el(9,KS.bind(null,n,r,i,t),void 0,null),ut===null)throw Error(U(349));(Qi&30)!==0||qS(n,t,i)}return i}function qS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function KS(e,t,n,r){t.value=n,t.getSnapshot=r,YS(t)&&XS(e)}function GS(e,t,n){return n(function(){YS(t)&&XS(e)})}function YS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Hn(e,n)}catch{return!0}}function XS(e){var t=Ir(e,1);t!==null&&Vn(t,e,1,-1)}function By(e){var t=Jn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:e},t.queue=e,e=e.dispatch=a2.bind(null,De,e),[t.memoizedState,e]}function el(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function QS(){return Nn().memoizedState}function qu(e,t,n,r){var i=Jn();De.flags|=e,i.memoizedState=el(1|t,n,void 0,r===void 0?null:r)}function uf(e,t,n,r){var i=Nn();r=r===void 0?null:r;var o=void 0;if(it!==null){var s=it.memoizedState;if(o=s.destroy,r!==null&&Wm(r,s.deps)){i.memoizedState=el(t,n,o,r);return}}De.flags|=e,i.memoizedState=el(1|t,n,o,r)}function Vy(e,t){return qu(8390656,8,e,t)}function Km(e,t){return uf(2048,8,e,t)}function JS(e,t){return uf(4,2,e,t)}function ZS(e,t){return uf(4,4,e,t)}function eb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tb(e,t,n){return n=n!=null?n.concat([e]):null,uf(4,4,eb.bind(null,t,e),n)}function Gm(){}function nb(e,t){var n=Nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wm(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rb(e,t){var n=Nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wm(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ib(e,t,n){return(Qi&21)===0?(e.baseState&&(e.baseState=!1,Jt=!0),e.memoizedState=n):(Hn(n,t)||(n=aS(),De.lanes|=n,Ji|=n,e.baseState=!0),t)}function o2(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=Ld.transition;Ld.transition={};try{e(!1),t()}finally{xe=n,Ld.transition=r}}function ob(){return Nn().memoizedState}function s2(e,t,n){var r=ii(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sb(e))ab(t,n);else if(n=DS(e,t,n,r),n!==null){var i=Ft();Vn(n,e,r,i),lb(n,t,r)}}function a2(e,t,n){var r=ii(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sb(e))ab(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Hn(a,s)){var l=t.interleaved;l===null?(i.next=i,Lm(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=DS(e,t,i,r),n!==null&&(i=Ft(),Vn(n,e,r,i),lb(n,t,r))}}function sb(e){var t=e.alternate;return e===De||t!==null&&t===De}function ab(e,t){ka=Cc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lb(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zm(e,n)}}var zc={readContext:On,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},l2={readContext:On,useCallback:function(e,t){return Jn().memoizedState=[e,t===void 0?null:t],e},useContext:On,useEffect:Vy,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qu(4194308,4,eb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qu(4194308,4,e,t)},useInsertionEffect:function(e,t){return qu(4,2,e,t)},useMemo:function(e,t){var n=Jn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Jn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=s2.bind(null,De,e),[r.memoizedState,e]},useRef:function(e){var t=Jn();return e={current:e},t.memoizedState=e},useState:By,useDebugValue:Gm,useDeferredValue:function(e){return Jn().memoizedState=e},useTransition:function(){var e=By(!1),t=e[0];return e=o2.bind(null,e[1]),Jn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=De,i=Jn();if(Oe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),ut===null)throw Error(U(349));(Qi&30)!==0||qS(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Vy(GS.bind(null,r,o,e),[e]),r.flags|=2048,el(9,KS.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Jn(),t=ut.identifierPrefix;if(Oe){var n=br,r=Sr;n=(r&~(1<<32-Bn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ja++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=i2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},u2={readContext:On,useCallback:nb,useContext:On,useEffect:Km,useImperativeHandle:tb,useInsertionEffect:JS,useLayoutEffect:ZS,useMemo:rb,useReducer:jd,useRef:QS,useState:function(){return jd(Za)},useDebugValue:Gm,useDeferredValue:function(e){var t=Nn();return ib(t,it.memoizedState,e)},useTransition:function(){var e=jd(Za)[0],t=Nn().memoizedState;return[e,t]},useMutableSource:WS,useSyncExternalStore:HS,useId:ob,unstable_isNewReconciler:!1},c2={readContext:On,useCallback:nb,useContext:On,useEffect:Km,useImperativeHandle:tb,useInsertionEffect:JS,useLayoutEffect:ZS,useMemo:rb,useReducer:Fd,useRef:QS,useState:function(){return Fd(Za)},useDebugValue:Gm,useDeferredValue:function(e){var t=Nn();return it===null?t.memoizedState=e:ib(t,it.memoizedState,e)},useTransition:function(){var e=Fd(Za)[0],t=Nn().memoizedState;return[e,t]},useMutableSource:WS,useSyncExternalStore:HS,useId:ob,unstable_isNewReconciler:!1};function fs(e,t){try{var n="",r=t;do n+=Mz(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Bd(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function rp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var f2=typeof WeakMap=="function"?WeakMap:Map;function ub(e,t,n){n=zr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Tc||(Tc=!0,hp=r),rp(e,t)},n}function cb(e,t,n){n=zr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){rp(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){rp(e,t),typeof r!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Wy(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new f2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=z2.bind(null,e,t,n),t.then(e,e))}function Hy(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qy(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zr(-1,1),t.tag=2,ni(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var d2=Dr.ReactCurrentOwner,Jt=!1;function Lt(e,t,n,r){t.child=e===null?BS(t,null,n,r):us(t,e.child,n,r)}function Ky(e,t,n,r,i){n=n.render;var o=t.ref;return Xo(t,i),r=Hm(e,t,n,r,o,i),n=qm(),e!==null&&!Jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pr(e,t,i)):(Oe&&n&&Am(t),t.flags|=1,Lt(e,t,r,i),t.child)}function Gy(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ng(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,fb(e,t,o,r,i)):(e=Xu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(s,r)&&e.ref===t.ref)return Pr(e,t,i)}return t.flags|=1,e=oi(o,r),e.ref=t.ref,e.return=t,t.child=e}function fb(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(qa(o,r)&&e.ref===t.ref)if(Jt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Jt=!0);else return t.lanes=e.lanes,Pr(e,t,i)}return ip(e,t,n,r,i)}function db(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Vo,hn),hn|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(Vo,hn),hn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ke(Vo,hn),hn|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ke(Vo,hn),hn|=r;return Lt(e,t,i,n),t.child}function hb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ip(e,t,n,r,i){var o=nn(n)?Yi:At.current;return o=as(t,o),Xo(t,i),n=Hm(e,t,n,r,o,i),r=qm(),e!==null&&!Jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pr(e,t,i)):(Oe&&r&&Am(t),t.flags|=1,Lt(e,t,n,i),t.child)}function Yy(e,t,n,r,i){if(nn(n)){var o=!0;yc(t)}else o=!1;if(Xo(t,i),t.stateNode===null)Ku(e,t),jS(t,n,r),np(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=On(u):(u=nn(n)?Yi:At.current,u=as(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&jy(t,s,r,u),Hr=!1;var g=t.memoizedState;s.state=g,xc(t,r,s,i),l=t.memoizedState,a!==r||g!==l||tn.current||Hr?(typeof d=="function"&&(tp(t,n,d,r),l=t.memoizedState),(a=Hr||Ly(t,n,a,r,g,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,MS(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ln(t.type,a),s.props=u,p=t.pendingProps,g=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=nn(n)?Yi:At.current,l=as(t,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||g!==l)&&jy(t,s,r,l),Hr=!1,g=t.memoizedState,s.state=g,xc(t,r,s,i);var w=t.memoizedState;a!==p||g!==w||tn.current||Hr?(typeof y=="function"&&(tp(t,n,y,r),w=t.memoizedState),(u=Hr||Ly(t,n,u,r,g,w,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return op(e,t,n,r,o,i)}function op(e,t,n,r,i,o){hb(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Ry(t,n,!1),Pr(e,t,o);r=t.stateNode,d2.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=us(t,e.child,null,o),t.child=us(t,null,a,o)):Lt(e,t,a,o),t.memoizedState=r.state,i&&Ry(t,n,!0),t.child}function pb(e){var t=e.stateNode;t.pendingContext?Ay(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ay(e,t.context,!1),Fm(e,t.containerInfo)}function Xy(e,t,n,r,i){return ls(),$m(i),t.flags|=256,Lt(e,t,n,r),t.child}var sp={dehydrated:null,treeContext:null,retryLane:0};function ap(e){return{baseLanes:e,cachePool:null,transitions:null}}function mb(e,t,n){var r=t.pendingProps,i=Ue.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ke(Ue,i&1),e===null)return Zh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=df(s,r,0,null),e=Vi(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ap(n),t.memoizedState=sp,e):Ym(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return h2(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=oi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=oi(a,o):(o=Vi(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ap(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=sp,r}return o=e.child,e=o.sibling,r=oi(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ym(e,t){return t=df({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bu(e,t,n,r){return r!==null&&$m(r),us(t,e.child,null,n),e=Ym(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function h2(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Bd(Error(U(422))),bu(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=df({mode:"visible",children:r.children},i,0,null),o=Vi(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&us(t,e.child,null,s),t.child.memoizedState=ap(s),t.memoizedState=sp,o);if((t.mode&1)===0)return bu(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(U(419)),r=Bd(o,r,void 0),bu(e,t,s,r)}if(a=(s&e.childLanes)!==0,Jt||a){if(r=ut,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ir(e,i),Vn(r,e,i,-1))}return tg(),r=Bd(Error(U(421))),bu(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=k2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pn=ti(i.nextSibling),mn=t,Oe=!0,Fn=null,e!==null&&(kn[Tn++]=Sr,kn[Tn++]=br,kn[Tn++]=Xi,Sr=e.id,br=e.overflow,Xi=t),t=Ym(t,r.children),t.flags|=4096,t)}function Qy(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ep(e.return,t,n)}function Vd(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function gb(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Lt(e,t,r.children,n),r=Ue.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qy(e,n,t);else if(e.tag===19)Qy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ke(Ue,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ec(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vd(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ec(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vd(t,!0,n,null,o);break;case"together":Vd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ku(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ji|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function p2(e,t,n){switch(t.tag){case 3:pb(t),ls();break;case 5:VS(t);break;case 1:nn(t.type)&&yc(t);break;case 4:Fm(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ke(Sc,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ke(Ue,Ue.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?mb(e,t,n):(ke(Ue,Ue.current&1),e=Pr(e,t,n),e!==null?e.sibling:null);ke(Ue,Ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return gb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Ue,Ue.current),r)break;return null;case 22:case 23:return t.lanes=0,db(e,t,n)}return Pr(e,t,n)}var yb,lp,vb,wb;yb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lp=function(){};vb=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mi(or.current);var o=null;switch(n){case"input":i=Ph(e,i),r=Ph(e,r),o=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),o=[];break;case"textarea":i=Ah(e,i),r=Ah(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mc)}$h(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(La.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(La.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_e("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};wb=function(e,t,n,r){n!==r&&(t.flags|=4)};function ra(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function m2(e,t,n){var r=t.pendingProps;switch(Rm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(t),null;case 1:return nn(t.type)&&gc(),Tt(t),null;case 3:return r=t.stateNode,cs(),Ie(tn),Ie(At),Vm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wu(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fn!==null&&(gp(Fn),Fn=null))),lp(e,t),Tt(t),null;case 5:Bm(t);var i=Mi(Qa.current);if(n=t.type,e!==null&&t.stateNode!=null)vb(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return Tt(t),null}if(e=Mi(or.current),wu(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[tr]=t,r[Ya]=o,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<ha.length;i++)_e(ha[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":sy(r,o),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},_e("invalid",r);break;case"textarea":ly(r,o),_e("invalid",r)}$h(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&vu(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&vu(r.textContent,a,e),i=["children",""+a]):La.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&_e("scroll",r)}switch(n){case"input":cu(r),ay(r,o,!0);break;case"textarea":cu(r),uy(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=mc)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qw(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[tr]=t,e[Ya]=r,yb(e,t,!1,!1),t.stateNode=e;e:{switch(s=Uh(n,r),n){case"dialog":_e("cancel",e),_e("close",e),i=r;break;case"iframe":case"object":case"embed":_e("load",e),i=r;break;case"video":case"audio":for(i=0;i<ha.length;i++)_e(ha[i],e);i=r;break;case"source":_e("error",e),i=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),i=r;break;case"details":_e("toggle",e),i=r;break;case"input":sy(e,r),i=Ph(e,r),_e("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),_e("invalid",e);break;case"textarea":ly(e,r),i=Ah(e,r),_e("invalid",e);break;default:i=r}$h(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Yw(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kw(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ja(e,l):typeof l=="number"&&ja(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(La.hasOwnProperty(o)?l!=null&&o==="onScroll"&&_e("scroll",e):l!=null&&wm(e,o,l,s))}switch(n){case"input":cu(e),ay(e,r,!1);break;case"textarea":cu(e),uy(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ui(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?qo(e,!!r.multiple,o,!1):r.defaultValue!=null&&qo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Tt(t),null;case 6:if(e&&t.stateNode!=null)wb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=Mi(Qa.current),Mi(or.current),wu(t)){if(r=t.stateNode,n=t.memoizedProps,r[tr]=t,(o=r.nodeValue!==n)&&(e=mn,e!==null))switch(e.tag){case 3:vu(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vu(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tr]=t,t.stateNode=r}return Tt(t),null;case 13:if(Ie(Ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&pn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)US(),ls(),t.flags|=98560,o=!1;else if(o=wu(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[tr]=t}else ls(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Tt(t),o=!1}else Fn!==null&&(gp(Fn),Fn=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ue.current&1)!==0?ot===0&&(ot=3):tg())),t.updateQueue!==null&&(t.flags|=4),Tt(t),null);case 4:return cs(),lp(e,t),e===null&&Ka(t.stateNode.containerInfo),Tt(t),null;case 10:return Mm(t.type._context),Tt(t),null;case 17:return nn(t.type)&&gc(),Tt(t),null;case 19:if(Ie(Ue),o=t.memoizedState,o===null)return Tt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ra(o,!1);else{if(ot!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Ec(e),s!==null){for(t.flags|=128,ra(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Ue,Ue.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ge()>ds&&(t.flags|=128,r=!0,ra(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ec(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ra(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Oe)return Tt(t),null}else 2*Ge()-o.renderingStartTime>ds&&n!==1073741824&&(t.flags|=128,r=!0,ra(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ge(),t.sibling=null,n=Ue.current,ke(Ue,r?n&1|2:n&1),t):(Tt(t),null);case 22:case 23:return eg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(hn&1073741824)!==0&&(Tt(t),t.subtreeFlags&6&&(t.flags|=8192)):Tt(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function g2(e,t){switch(Rm(t),t.tag){case 1:return nn(t.type)&&gc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cs(),Ie(tn),Ie(At),Vm(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Bm(t),null;case 13:if(Ie(Ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));ls()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Ue),null;case 4:return cs(),null;case 10:return Mm(t.type._context),null;case 22:case 23:return eg(),null;case 24:return null;default:return null}}var xu=!1,Pt=!1,y2=typeof WeakSet=="function"?WeakSet:Set,K=null;function Bo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(e,t,r)}else n.current=null}function up(e,t,n){try{n()}catch(r){Fe(e,t,r)}}var Jy=!1;function v2(e,t){if(qh=dc,e=ES(),Nm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,p=e,g=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===e)break t;if(g===n&&++u===i&&(a=s),g===o&&++d===r&&(l=s),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kh={focusedElem:e,selectionRange:n},dc=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var w=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,c=w.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ln(t.type,v),c);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(S){Fe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return w=Jy,Jy=!1,w}function Ta(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&up(t,n,o)}i=i.next}while(i!==r)}}function cf(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function cp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sb(e){var t=e.alternate;t!==null&&(e.alternate=null,Sb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tr],delete t[Ya],delete t[Xh],delete t[e2],delete t[t2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bb(e){return e.tag===5||e.tag===3||e.tag===4}function Zy(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mc));else if(r!==4&&(e=e.child,e!==null))for(fp(e,t,n),e=e.sibling;e!==null;)fp(e,t,n),e=e.sibling}function dp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(dp(e,t,n),e=e.sibling;e!==null;)dp(e,t,n),e=e.sibling}var mt=null,jn=!1;function Br(e,t,n){for(n=n.child;n!==null;)xb(e,t,n),n=n.sibling}function xb(e,t,n){if(ir&&typeof ir.onCommitFiberUnmount=="function")try{ir.onCommitFiberUnmount(tf,n)}catch{}switch(n.tag){case 5:Pt||Bo(n,t);case 6:var r=mt,i=jn;mt=null,Br(e,t,n),mt=r,jn=i,mt!==null&&(jn?(e=mt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(jn?(e=mt,n=n.stateNode,e.nodeType===8?Ud(e.parentNode,n):e.nodeType===1&&Ud(e,n),Wa(e)):Ud(mt,n.stateNode));break;case 4:r=mt,i=jn,mt=n.stateNode.containerInfo,jn=!0,Br(e,t,n),mt=r,jn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&up(n,t,s),i=i.next}while(i!==r)}Br(e,t,n);break;case 1:if(!Pt&&(Bo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Fe(n,t,a)}Br(e,t,n);break;case 21:Br(e,t,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,Br(e,t,n),Pt=r):Br(e,t,n);break;default:Br(e,t,n)}}function ev(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new y2),t.forEach(function(r){var i=T2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:mt=a.stateNode,jn=!1;break e;case 3:mt=a.stateNode.containerInfo,jn=!0;break e;case 4:mt=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(mt===null)throw Error(U(160));xb(o,s,i),mt=null,jn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Fe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Eb(t,e),t=t.sibling}function Eb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mn(t,e),Qn(e),r&4){try{Ta(3,e,e.return),cf(3,e)}catch(v){Fe(e,e.return,v)}try{Ta(5,e,e.return)}catch(v){Fe(e,e.return,v)}}break;case 1:Mn(t,e),Qn(e),r&512&&n!==null&&Bo(n,n.return);break;case 5:if(Mn(t,e),Qn(e),r&512&&n!==null&&Bo(n,n.return),e.flags&32){var i=e.stateNode;try{ja(i,"")}catch(v){Fe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Ww(i,o),Uh(a,s);var u=Uh(a,o);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?Yw(i,p):d==="dangerouslySetInnerHTML"?Kw(i,p):d==="children"?ja(i,p):wm(i,d,p,u)}switch(a){case"input":Oh(i,o);break;case"textarea":Hw(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?qo(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?qo(i,!!o.multiple,o.defaultValue,!0):qo(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ya]=o}catch(v){Fe(e,e.return,v)}}break;case 6:if(Mn(t,e),Qn(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Fe(e,e.return,v)}}break;case 3:if(Mn(t,e),Qn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(t.containerInfo)}catch(v){Fe(e,e.return,v)}break;case 4:Mn(t,e),Qn(e);break;case 13:Mn(t,e),Qn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Jm=Ge())),r&4&&ev(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Pt=(u=Pt)||d,Mn(t,e),Pt=u):Mn(t,e),Qn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&(e.mode&1)!==0)for(K=e,d=e.child;d!==null;){for(p=K=d;K!==null;){switch(g=K,y=g.child,g.tag){case 0:case 11:case 14:case 15:Ta(4,g,g.return);break;case 1:Bo(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){Fe(r,n,v)}}break;case 5:Bo(g,g.return);break;case 22:if(g.memoizedState!==null){nv(p);continue}}y!==null?(y.return=g,K=y):nv(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Gw("display",s))}catch(v){Fe(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){Fe(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Mn(t,e),Qn(e),r&4&&ev(e);break;case 21:break;default:Mn(t,e),Qn(e)}}function Qn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bb(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ja(i,""),r.flags&=-33);var o=Zy(e);dp(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Zy(e);fp(e,a,s);break;default:throw Error(U(161))}}catch(l){Fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function w2(e,t,n){K=e,Cb(e)}function Cb(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||xu;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Pt;a=xu;var u=Pt;if(xu=s,(Pt=l)&&!u)for(K=i;K!==null;)s=K,l=s.child,s.tag===22&&s.memoizedState!==null?rv(i):l!==null?(l.return=s,K=l):rv(i);for(;o!==null;)K=o,Cb(o),o=o.sibling;K=i,xu=a,Pt=u}tv(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,K=o):tv(e)}}function tv(e){for(;K!==null;){var t=K;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Pt||cf(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ln(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&My(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}My(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Wa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Pt||t.flags&512&&cp(t)}catch(g){Fe(t,t.return,g)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function nv(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function rv(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cf(4,t)}catch(l){Fe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Fe(t,i,l)}}var o=t.return;try{cp(t)}catch(l){Fe(t,o,l)}break;case 5:var s=t.return;try{cp(t)}catch(l){Fe(t,s,l)}}}catch(l){Fe(t,t.return,l)}if(t===e){K=null;break}var a=t.sibling;if(a!==null){a.return=t.return,K=a;break}K=t.return}}var S2=Math.ceil,kc=Dr.ReactCurrentDispatcher,Xm=Dr.ReactCurrentOwner,In=Dr.ReactCurrentBatchConfig,pe=0,ut=null,Ze=null,wt=0,hn=0,Vo=mi(0),ot=0,tl=null,Ji=0,ff=0,Qm=0,_a=null,Xt=null,Jm=0,ds=1/0,vr=null,Tc=!1,hp=null,ri=null,Eu=!1,Yr=null,_c=0,Ia=0,pp=null,Gu=-1,Yu=0;function Ft(){return(pe&6)!==0?Ge():Gu!==-1?Gu:Gu=Ge()}function ii(e){return(e.mode&1)===0?1:(pe&2)!==0&&wt!==0?wt&-wt:r2.transition!==null?(Yu===0&&(Yu=aS()),Yu):(e=xe,e!==0||(e=window.event,e=e===void 0?16:pS(e.type)),e)}function Vn(e,t,n,r){if(50<Ia)throw Ia=0,pp=null,Error(U(185));zl(e,n,r),((pe&2)===0||e!==ut)&&(e===ut&&((pe&2)===0&&(ff|=n),ot===4&&Kr(e,wt)),rn(e,r),n===1&&pe===0&&(t.mode&1)===0&&(ds=Ge()+500,af&&gi()))}function rn(e,t){var n=e.callbackNode;rk(e,t);var r=fc(e,e===ut?wt:0);if(r===0)n!==null&&dy(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dy(n),t===1)e.tag===0?n2(iv.bind(null,e)):AS(iv.bind(null,e)),Jk(function(){(pe&6)===0&&gi()}),n=null;else{switch(lS(r)){case 1:n=Cm;break;case 4:n=oS;break;case 16:n=cc;break;case 536870912:n=sS;break;default:n=cc}n=Nb(n,zb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zb(e,t){if(Gu=-1,Yu=0,(pe&6)!==0)throw Error(U(327));var n=e.callbackNode;if(Qo()&&e.callbackNode!==n)return null;var r=fc(e,e===ut?wt:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ic(e,r);else{t=r;var i=pe;pe|=2;var o=Tb();(ut!==e||wt!==t)&&(vr=null,ds=Ge()+500,Bi(e,t));do try{E2();break}catch(a){kb(e,a)}while(1);Dm(),kc.current=o,pe=i,Ze!==null?t=0:(ut=null,wt=0,t=ot)}if(t!==0){if(t===2&&(i=Fh(e),i!==0&&(r=i,t=mp(e,i))),t===1)throw n=tl,Bi(e,0),Kr(e,r),rn(e,Ge()),n;if(t===6)Kr(e,r);else{if(i=e.current.alternate,(r&30)===0&&!b2(i)&&(t=Ic(e,r),t===2&&(o=Fh(e),o!==0&&(r=o,t=mp(e,o))),t===1))throw n=tl,Bi(e,0),Kr(e,r),rn(e,Ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:Ni(e,Xt,vr);break;case 3:if(Kr(e,r),(r&130023424)===r&&(t=Jm+500-Ge(),10<t)){if(fc(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Yh(Ni.bind(null,e,Xt,vr),t);break}Ni(e,Xt,vr);break;case 4:if(Kr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Bn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*S2(r/1960))-r,10<r){e.timeoutHandle=Yh(Ni.bind(null,e,Xt,vr),r);break}Ni(e,Xt,vr);break;case 5:Ni(e,Xt,vr);break;default:throw Error(U(329))}}}return rn(e,Ge()),e.callbackNode===n?zb.bind(null,e):null}function mp(e,t){var n=_a;return e.current.memoizedState.isDehydrated&&(Bi(e,t).flags|=256),e=Ic(e,t),e!==2&&(t=Xt,Xt=n,t!==null&&gp(t)),e}function gp(e){Xt===null?Xt=e:Xt.push.apply(Xt,e)}function b2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Hn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kr(e,t){for(t&=~Qm,t&=~ff,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Bn(t),r=1<<n;e[n]=-1,t&=~r}}function iv(e){if((pe&6)!==0)throw Error(U(327));Qo();var t=fc(e,0);if((t&1)===0)return rn(e,Ge()),null;var n=Ic(e,t);if(e.tag!==0&&n===2){var r=Fh(e);r!==0&&(t=r,n=mp(e,r))}if(n===1)throw n=tl,Bi(e,0),Kr(e,t),rn(e,Ge()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ni(e,Xt,vr),rn(e,Ge()),null}function Zm(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(ds=Ge()+500,af&&gi())}}function Zi(e){Yr!==null&&Yr.tag===0&&(pe&6)===0&&Qo();var t=pe;pe|=1;var n=In.transition,r=xe;try{if(In.transition=null,xe=1,e)return e()}finally{xe=r,In.transition=n,pe=t,(pe&6)===0&&gi()}}function eg(){hn=Vo.current,Ie(Vo)}function Bi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qk(n)),Ze!==null)for(n=Ze.return;n!==null;){var r=n;switch(Rm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gc();break;case 3:cs(),Ie(tn),Ie(At),Vm();break;case 5:Bm(r);break;case 4:cs();break;case 13:Ie(Ue);break;case 19:Ie(Ue);break;case 10:Mm(r.type._context);break;case 22:case 23:eg()}n=n.return}if(ut=e,Ze=e=oi(e.current,null),wt=hn=t,ot=0,tl=null,Qm=ff=Ji=0,Xt=_a=null,Di!==null){for(t=0;t<Di.length;t++)if(n=Di[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Di=null}return e}function kb(e,t){do{var n=Ze;try{if(Dm(),Hu.current=zc,Cc){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cc=!1}if(Qi=0,lt=it=De=null,ka=!1,Ja=0,Xm.current=null,n===null||n.return===null){ot=1,tl=t,Ze=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Hy(s);if(y!==null){y.flags&=-257,qy(y,s,a,o,t),y.mode&1&&Wy(o,u,t),t=y,l=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(l),t.updateQueue=v}else w.add(l);break e}else{if((t&1)===0){Wy(o,u,t),tg();break e}l=Error(U(426))}}else if(Oe&&a.mode&1){var c=Hy(s);if(c!==null){(c.flags&65536)===0&&(c.flags|=256),qy(c,s,a,o,t),$m(fs(l,a));break e}}o=l=fs(l,a),ot!==4&&(ot=2),_a===null?_a=[o]:_a.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=ub(o,l,t);Dy(o,f);break e;case 1:a=l;var h=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ri===null||!ri.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=cb(o,a,t);Dy(o,S);break e}}o=o.return}while(o!==null)}Ib(n)}catch(b){t=b,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(1)}function Tb(){var e=kc.current;return kc.current=zc,e===null?zc:e}function tg(){(ot===0||ot===3||ot===2)&&(ot=4),ut===null||(Ji&268435455)===0&&(ff&268435455)===0||Kr(ut,wt)}function Ic(e,t){var n=pe;pe|=2;var r=Tb();(ut!==e||wt!==t)&&(vr=null,Bi(e,t));do try{x2();break}catch(i){kb(e,i)}while(1);if(Dm(),pe=n,kc.current=r,Ze!==null)throw Error(U(261));return ut=null,wt=0,ot}function x2(){for(;Ze!==null;)_b(Ze)}function E2(){for(;Ze!==null&&!Gz();)_b(Ze)}function _b(e){var t=Ob(e.alternate,e,hn);e.memoizedProps=e.pendingProps,t===null?Ib(e):Ze=t,Xm.current=null}function Ib(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=m2(n,t,hn),n!==null){Ze=n;return}}else{if(n=g2(n,t),n!==null){n.flags&=32767,Ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ot=6,Ze=null;return}}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);ot===0&&(ot=5)}function Ni(e,t,n){var r=xe,i=In.transition;try{In.transition=null,xe=1,C2(e,t,n,r)}finally{In.transition=i,xe=r}return null}function C2(e,t,n,r){do Qo();while(Yr!==null);if((pe&6)!==0)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ik(e,o),e===ut&&(Ze=ut=null,wt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Eu||(Eu=!0,Nb(cc,function(){return Qo(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=In.transition,In.transition=null;var s=xe;xe=1;var a=pe;pe|=4,Xm.current=null,v2(e,n),Eb(n,e),Wk(Kh),dc=!!qh,Kh=qh=null,e.current=n,w2(n),Yz(),pe=a,xe=s,In.transition=o}else e.current=n;if(Eu&&(Eu=!1,Yr=e,_c=i),o=e.pendingLanes,o===0&&(ri=null),Jz(n.stateNode),rn(e,Ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tc)throw Tc=!1,e=hp,hp=null,e;return(_c&1)!==0&&e.tag!==0&&Qo(),o=e.pendingLanes,(o&1)!==0?e===pp?Ia++:(Ia=0,pp=e):Ia=0,gi(),null}function Qo(){if(Yr!==null){var e=lS(_c),t=In.transition,n=xe;try{if(In.transition=null,xe=16>e?16:e,Yr===null)var r=!1;else{if(e=Yr,Yr=null,_c=0,(pe&6)!==0)throw Error(U(331));var i=pe;for(pe|=4,K=e.current;K!==null;){var o=K,s=o.child;if((K.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(K=u;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Ta(8,d,o)}var p=d.child;if(p!==null)p.return=d,K=p;else for(;K!==null;){d=K;var g=d.sibling,y=d.return;if(Sb(d),d===u){K=null;break}if(g!==null){g.return=y,K=g;break}K=y}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var c=v.sibling;v.sibling=null,v=c}while(v!==null)}}K=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,K=s;else e:for(;K!==null;){if(o=K,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Ta(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,K=f;break e}K=o.return}}var h=e.current;for(K=h;K!==null;){s=K;var m=s.child;if((s.subtreeFlags&2064)!==0&&m!==null)m.return=s,K=m;else e:for(s=h;K!==null;){if(a=K,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:cf(9,a)}}catch(b){Fe(a,a.return,b)}if(a===s){K=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,K=S;break e}K=a.return}}if(pe=i,gi(),ir&&typeof ir.onPostCommitFiberRoot=="function")try{ir.onPostCommitFiberRoot(tf,e)}catch{}r=!0}return r}finally{xe=n,In.transition=t}}return!1}function ov(e,t,n){t=fs(n,t),t=ub(e,t,1),e=ni(e,t,1),t=Ft(),e!==null&&(zl(e,1,t),rn(e,t))}function Fe(e,t,n){if(e.tag===3)ov(e,e,n);else for(;t!==null;){if(t.tag===3){ov(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ri===null||!ri.has(r))){e=fs(n,e),e=cb(t,e,1),t=ni(t,e,1),e=Ft(),t!==null&&(zl(t,1,e),rn(t,e));break}}t=t.return}}function z2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ft(),e.pingedLanes|=e.suspendedLanes&n,ut===e&&(wt&n)===n&&(ot===4||ot===3&&(wt&130023424)===wt&&500>Ge()-Jm?Bi(e,0):Qm|=n),rn(e,t)}function Pb(e,t){t===0&&((e.mode&1)===0?t=1:(t=hu,hu<<=1,(hu&130023424)===0&&(hu=4194304)));var n=Ft();e=Ir(e,t),e!==null&&(zl(e,t,n),rn(e,n))}function k2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pb(e,n)}function T2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),Pb(e,n)}var Ob;Ob=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tn.current)Jt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Jt=!1,p2(e,t,n);Jt=(e.flags&131072)!==0}else Jt=!1,Oe&&(t.flags&1048576)!==0&&RS(t,wc,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ku(e,t),e=t.pendingProps;var i=as(t,At.current);Xo(t,n),i=Hm(null,t,r,e,i,n);var o=qm();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nn(r)?(o=!0,yc(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jm(t),i.updater=lf,t.stateNode=i,i._reactInternals=t,np(t,r,e,n),t=op(null,t,r,!0,o,n)):(t.tag=0,Oe&&o&&Am(t),Lt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ku(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=I2(r),e=Ln(r,e),i){case 0:t=ip(null,t,r,e,n);break e;case 1:t=Yy(null,t,r,e,n);break e;case 11:t=Ky(null,t,r,e,n);break e;case 14:t=Gy(null,t,r,Ln(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ln(r,i),ip(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ln(r,i),Yy(e,t,r,i,n);case 3:e:{if(pb(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,MS(e,t),xc(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=fs(Error(U(423)),t),t=Xy(e,t,r,n,i);break e}else if(r!==i){i=fs(Error(U(424)),t),t=Xy(e,t,r,n,i);break e}else for(pn=ti(t.stateNode.containerInfo.firstChild),mn=t,Oe=!0,Fn=null,n=BS(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ls(),r===i){t=Pr(e,t,n);break e}Lt(e,t,r,n)}t=t.child}return t;case 5:return VS(t),e===null&&Zh(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Gh(r,i)?s=null:o!==null&&Gh(r,o)&&(t.flags|=32),hb(e,t),Lt(e,t,s,n),t.child;case 6:return e===null&&Zh(t),null;case 13:return mb(e,t,n);case 4:return Fm(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=us(t,null,r,n):Lt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ln(r,i),Ky(e,t,r,i,n);case 7:return Lt(e,t,t.pendingProps,n),t.child;case 8:return Lt(e,t,t.pendingProps.children,n),t.child;case 12:return Lt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ke(Sc,r._currentValue),r._currentValue=s,o!==null)if(Hn(o.value,s)){if(o.children===i.children&&!tn.current){t=Pr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=zr(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ep(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(U(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ep(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Lt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xo(t,n),i=On(i),r=r(i),t.flags|=1,Lt(e,t,r,n),t.child;case 14:return r=t.type,i=Ln(r,t.pendingProps),i=Ln(r.type,i),Gy(e,t,r,i,n);case 15:return fb(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ln(r,i),Ku(e,t),t.tag=1,nn(r)?(e=!0,yc(t)):e=!1,Xo(t,n),jS(t,r,i),np(t,r,i,n),op(null,t,r,!0,e,n);case 19:return gb(e,t,n);case 22:return db(e,t,n)}throw Error(U(156,t.tag))};function Nb(e,t){return iS(e,t)}function _2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(e,t,n,r){return new _2(e,t,n,r)}function ng(e){return e=e.prototype,!(!e||!e.isReactComponent)}function I2(e){if(typeof e=="function")return ng(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bm)return 11;if(e===xm)return 14}return 2}function oi(e,t){var n=e.alternate;return n===null?(n=_n(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xu(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ng(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ao:return Vi(n.children,i,o,t);case Sm:s=8,i|=8;break;case kh:return e=_n(12,n,t,i|2),e.elementType=kh,e.lanes=o,e;case Th:return e=_n(13,n,t,i),e.elementType=Th,e.lanes=o,e;case _h:return e=_n(19,n,t,i),e.elementType=_h,e.lanes=o,e;case Fw:return df(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lw:s=10;break e;case jw:s=9;break e;case bm:s=11;break e;case xm:s=14;break e;case Wr:s=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=_n(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vi(e,t,n,r){return e=_n(7,e,r,t),e.lanes=n,e}function df(e,t,n,r){return e=_n(22,e,r,t),e.elementType=Fw,e.lanes=n,e.stateNode={isHidden:!1},e}function Wd(e,t,n){return e=_n(6,e,null,t),e.lanes=n,e}function Hd(e,t,n){return t=_n(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function P2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zd(0),this.expirationTimes=zd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rg(e,t,n,r,i,o,s,a,l){return e=new P2(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=_n(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jm(o),e}function O2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:No,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ab(e){if(!e)return ci;e=e._reactInternals;e:{if(lo(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(nn(n))return NS(e,n,t)}return t}function Rb(e,t,n,r,i,o,s,a,l){return e=rg(n,r,!0,e,i,o,s,a,l),e.context=Ab(null),n=e.current,r=Ft(),i=ii(n),o=zr(r,i),o.callback=t!=null?t:null,ni(n,o,i),e.current.lanes=i,zl(e,i,r),rn(e,r),e}function hf(e,t,n,r){var i=t.current,o=Ft(),s=ii(i);return n=Ab(n),t.context===null?t.context=n:t.pendingContext=n,t=zr(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ni(i,t,s),e!==null&&(Vn(e,i,s,o),Wu(e,i,s)),s}function Pc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ig(e,t){sv(e,t),(e=e.alternate)&&sv(e,t)}function N2(){return null}var $b=typeof reportError=="function"?reportError:function(e){console.error(e)};function og(e){this._internalRoot=e}pf.prototype.render=og.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));hf(e,t,null,null)};pf.prototype.unmount=og.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zi(function(){hf(null,e,null,null)}),t[_r]=null}};function pf(e){this._internalRoot=e}pf.prototype.unstable_scheduleHydration=function(e){if(e){var t=fS();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qr.length&&t!==0&&t<qr[n].priority;n++);qr.splice(n,0,e),n===0&&hS(e)}};function sg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function av(){}function A2(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Pc(s);o.call(u)}}var s=Rb(t,r,e,0,null,!1,!1,"",av);return e._reactRootContainer=s,e[_r]=s.current,Ka(e.nodeType===8?e.parentNode:e),Zi(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Pc(l);a.call(u)}}var l=rg(e,0,!1,null,null,!1,!1,"",av);return e._reactRootContainer=l,e[_r]=l.current,Ka(e.nodeType===8?e.parentNode:e),Zi(function(){hf(t,l,n,r)}),l}function gf(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Pc(s);a.call(l)}}hf(t,s,e,i)}else s=A2(n,t,e,i,r);return Pc(s)}uS=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=da(t.pendingLanes);n!==0&&(zm(t,n|1),rn(t,Ge()),(pe&6)===0&&(ds=Ge()+500,gi()))}break;case 13:Zi(function(){var r=Ir(e,1);if(r!==null){var i=Ft();Vn(r,e,1,i)}}),ig(e,1)}};km=function(e){if(e.tag===13){var t=Ir(e,134217728);if(t!==null){var n=Ft();Vn(t,e,134217728,n)}ig(e,134217728)}};cS=function(e){if(e.tag===13){var t=ii(e),n=Ir(e,t);if(n!==null){var r=Ft();Vn(n,e,t,r)}ig(e,t)}};fS=function(){return xe};dS=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};Mh=function(e,t,n){switch(t){case"input":if(Oh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=sf(r);if(!i)throw Error(U(90));Vw(r),Oh(r,i)}}}break;case"textarea":Hw(e,n);break;case"select":t=n.value,t!=null&&qo(e,!!n.multiple,t,!1)}};Jw=Zm;Zw=Zi;var R2={usingClientEntryPoint:!1,Events:[Tl,Do,sf,Xw,Qw,Zm]},ia={findFiberByHostInstance:Ui,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$2={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nS(e),e===null?null:e.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||N2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{tf=Cu.inject($2),ir=Cu}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R2;wn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sg(t))throw Error(U(200));return O2(e,t,null,n)};wn.createRoot=function(e,t){if(!sg(e))throw Error(U(299));var n=!1,r="",i=$b;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=rg(e,1,!1,null,null,n,!1,r,i),e[_r]=t.current,Ka(e.nodeType===8?e.parentNode:e),new og(t)};wn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=nS(t),e=e===null?null:e.stateNode,e};wn.flushSync=function(e){return Zi(e)};wn.hydrate=function(e,t,n){if(!mf(t))throw Error(U(200));return gf(null,e,t,!0,n)};wn.hydrateRoot=function(e,t,n){if(!sg(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=$b;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Rb(t,null,e,1,n!=null?n:null,i,!1,o,s),e[_r]=t.current,Ka(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pf(t)};wn.render=function(e,t,n){if(!mf(t))throw Error(U(200));return gf(null,e,t,!1,n)};wn.unmountComponentAtNode=function(e){if(!mf(e))throw Error(U(40));return e._reactRootContainer?(Zi(function(){gf(null,null,e,!1,function(){e._reactRootContainer=null,e[_r]=null})}),!0):!1};wn.unstable_batchedUpdates=Zm;wn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!mf(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return gf(e,t,n,!1,r)};wn.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=wn})(ef);const zu=Tw(ef.exports);var lv=ef.exports;Ch.createRoot=lv.createRoot,Ch.hydrateRoot=lv.hydrateRoot;const U2="modulepreload",D2=function(e){return"/"+e},uv={},yf=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=D2(o),o in uv)return;uv[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const p=i[d];if(p.href===o&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":U2,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nl.apply(this,arguments)}var Xr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xr||(Xr={}));const cv="popstate";function M2(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return yp("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rl(i)}return F2(t,n,null,e)}function L2(){return Math.random().toString(36).substr(2,8)}function fv(e){return{usr:e.state,key:e.key}}function yp(e,t,n,r){return n===void 0&&(n=null),nl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Os(t):t,{state:n,key:t&&t.key||r||L2()})}function rl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Os(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function j2(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof e=="string"?e:rl(e);return new URL(n,t)}function F2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Xr.Pop,l=null;function u(){a=Xr.Pop,l&&l({action:a,location:g.location})}function d(y,w){a=Xr.Push;let v=yp(g.location,y,w);n&&n(v,y);let c=fv(v),f=g.createHref(v);try{s.pushState(c,"",f)}catch{i.location.assign(f)}o&&l&&l({action:a,location:g.location})}function p(y,w){a=Xr.Replace;let v=yp(g.location,y,w);n&&n(v,y);let c=fv(v),f=g.createHref(v);s.replaceState(c,"",f),o&&l&&l({action:a,location:g.location})}let g={get action(){return a},get location(){return e(i,s)},listen(y){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(cv,u),l=y,()=>{i.removeEventListener(cv,u),l=null}},createHref(y){return t(i,y)},encodeLocation(y){let w=j2(rl(y));return nl({},y,{pathname:w.pathname,search:w.search,hash:w.hash})},push:d,replace:p,go(y){return s.go(y)}};return g}var dv;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(dv||(dv={}));function B2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Os(t):t,i=Db(r.pathname||"/",n);if(i==null)return null;let o=Ub(e);V2(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=J2(o[a],tT(i));return s}function Ub(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(ct(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let a=si([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(ct(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),Ub(i.children,t,l,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:X2(a,i.index),routesMeta:l})}),t}function V2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Q2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const W2=/^:\w+$/,H2=3,q2=2,K2=1,G2=10,Y2=-2,hv=e=>e==="*";function X2(e,t){let n=e.split("/"),r=n.length;return n.some(hv)&&(r+=Y2),t&&(r+=q2),n.filter(i=>!hv(i)).reduce((i,o)=>i+(W2.test(o)?H2:o===""?K2:G2),r)}function Q2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function J2(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Z2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let p=a.route;o.push({params:r,pathname:si([i,d.pathname]),pathnameBase:oT(si([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=si([i,d.pathnameBase]))}return o}function Z2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=eT(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,p)=>{if(d==="*"){let g=a[p]||"";s=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return u[d]=nT(a[p]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function eT(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ag(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function tT(e){try{return decodeURI(e)}catch(t){return ag(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function nT(e,t){try{return decodeURIComponent(e)}catch(n){return ag(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Db(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ct(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ag(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function rT(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Os(e):e;return{pathname:n?n.startsWith("/")?n:iT(n,t):t,search:sT(r),hash:aT(i)}}function iT(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function qd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lb(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Os(e):(i=nl({},e),ct(!i.pathname||!i.pathname.includes("?"),qd("?","pathname","search",i)),ct(!i.pathname||!i.pathname.includes("#"),qd("#","pathname","hash",i)),ct(!i.search||!i.search.includes("#"),qd("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let p=t.length-1;if(s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}a=p>=0?t[p]:"/"}let l=rT(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const si=e=>e.join("/").replace(/\/\/+/g,"/"),oT=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),sT=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,aT=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class lT{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function uT(e){return e instanceof lT}const cT=new Set(["POST","PUT","PATCH","DELETE"]);[...cT];var vf={exports:{}},wf={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fT=T.exports,dT=Symbol.for("react.element"),hT=Symbol.for("react.fragment"),pT=Object.prototype.hasOwnProperty,mT=fT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gT={key:!0,ref:!0,__self:!0,__source:!0};function jb(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)pT.call(t,r)&&!gT.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:dT,type:e,key:o,ref:s,props:i,_owner:mT.current}}wf.Fragment=hT;wf.jsx=jb;wf.jsxs=jb;(function(e){e.exports=wf})(vf);const Fb=vf.exports.Fragment,M=vf.exports.jsx,Zt=vf.exports.jsxs,yT=Object.freeze(Object.defineProperty({__proto__:null,Fragment:Fb,jsx:M,jsxs:Zt},Symbol.toStringTag,{value:"Module"}));/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vp(){return vp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vp.apply(this,arguments)}function vT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const wT=typeof Object.is=="function"?Object.is:vT,{useState:ST,useEffect:bT,useLayoutEffect:xT,useDebugValue:ET}=os;function CT(e,t,n){const r=t(),[{inst:i},o]=ST({inst:{value:r,getSnapshot:t}});return xT(()=>{i.value=r,i.getSnapshot=t,Kd(i)&&o({inst:i})},[e,r,t]),bT(()=>(Kd(i)&&o({inst:i}),e(()=>{Kd(i)&&o({inst:i})})),[e]),ET(r),r}function Kd(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!wT(n,r)}catch{return!0}}function zT(e,t,n){return t()}const kT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TT=!kT,_T=TT?zT:CT;"useSyncExternalStore"in os&&(e=>e.useSyncExternalStore)(os);const IT=T.exports.createContext(null),PT=T.exports.createContext(null),lg=T.exports.createContext(null),ug=T.exports.createContext(null),Sf=T.exports.createContext(null),Il=T.exports.createContext({outlet:null,matches:[]}),Bb=T.exports.createContext(null);function OT(e,t){let{relative:n}=t===void 0?{}:t;Pl()||ct(!1);let{basename:r,navigator:i}=T.exports.useContext(ug),{hash:o,pathname:s,search:a}=cg(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:si([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Pl(){return T.exports.useContext(Sf)!=null}function Ol(){return Pl()||ct(!1),T.exports.useContext(Sf).location}function NT(){Pl()||ct(!1);let{basename:e,navigator:t}=T.exports.useContext(ug),{matches:n}=T.exports.useContext(Il),{pathname:r}=Ol(),i=JSON.stringify(Mb(n).map(a=>a.pathnameBase)),o=T.exports.useRef(!1);return T.exports.useEffect(()=>{o.current=!0}),T.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Lb(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:si([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function cg(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.exports.useContext(Il),{pathname:i}=Ol(),o=JSON.stringify(Mb(r).map(s=>s.pathnameBase));return T.exports.useMemo(()=>Lb(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function AT(e,t){Pl()||ct(!1);let n=T.exports.useContext(lg),{matches:r}=T.exports.useContext(Il),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let a=Ol(),l;if(t){var u;let w=typeof t=="string"?Os(t):t;s==="/"||((u=w.pathname)==null?void 0:u.startsWith(s))||ct(!1),l=w}else l=a;let d=l.pathname||"/",p=s==="/"?d:d.slice(s.length)||"/",g=B2(e,{pathname:p}),y=DT(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:si([s,w.pathname]),pathnameBase:w.pathnameBase==="/"?s:si([s,w.pathnameBase])})),r,n||void 0);return t&&y?M(Sf.Provider,{value:{location:vp({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Xr.Pop},children:y}):y}function RT(){let e=LT(),t=uT(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return Zt(Fb,{children:[M("h2",{children:"Unhandled Thrown Error!"}),M("h3",{style:{fontStyle:"italic"},children:t}),n?M("pre",{style:i,children:n}):null,M("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),Zt("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",M("code",{style:o,children:"errorElement"})," props on\xA0",M("code",{style:o,children:"<Route>"})]})]})}class $T extends T.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?M(Bb.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function UT(e){let{routeContext:t,match:n,children:r}=e,i=T.exports.useContext(IT);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),M(Il.Provider,{value:t,children:r})}function DT(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||ct(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||M(RT,{}):null,d=()=>M(UT,{match:s,routeContext:{outlet:o,matches:t.concat(r.slice(0,a+1))},children:l?u:s.route.element!==void 0?s.route.element:o});return n&&(s.route.errorElement||a===0)?M($T,{location:n.location,component:u,error:l,children:d()}):d()},null)}var pv;(function(e){e.UseRevalidator="useRevalidator"})(pv||(pv={}));var wp;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(wp||(wp={}));function MT(e){let t=T.exports.useContext(lg);return t||ct(!1),t}function LT(){var e;let t=T.exports.useContext(Bb),n=MT(wp.UseRouteError),r=T.exports.useContext(Il),i=r.matches[r.matches.length-1];return t||(r||ct(!1),i.route.id||ct(!1),(e=n.errors)==null?void 0:e[i.route.id])}function Qu(e){ct(!1)}function jT(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xr.Pop,navigator:o,static:s=!1}=e;Pl()&&ct(!1);let a=t.replace(/^\/*/,"/"),l=T.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Os(r));let{pathname:u="/",search:d="",hash:p="",state:g=null,key:y="default"}=r,w=T.exports.useMemo(()=>{let v=Db(u,a);return v==null?null:{pathname:v,search:d,hash:p,state:g,key:y}},[a,u,d,p,g,y]);return w==null?null:M(ug.Provider,{value:l,children:M(Sf.Provider,{children:n,value:{location:w,navigationType:i}})})}function FT(e){let{children:t,location:n}=e,r=T.exports.useContext(PT),i=r&&!t?r.router.routes:Sp(t);return AT(i,n)}var mv;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(mv||(mv={}));new Promise(()=>{});function Sp(e,t){t===void 0&&(t=[]);let n=[];return T.exports.Children.forEach(e,(r,i)=>{if(!T.exports.isValidElement(r))return;if(r.type===T.exports.Fragment){n.push.apply(n,Sp(r.props.children,t));return}r.type!==Qu&&ct(!1),!r.props.index||!r.props.children||ct(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=Sp(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function BT(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function VT(e,t){return e.button===0&&(!t||t==="_self")&&!BT(e)}const WT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],HT=["aria-current","caseSensitive","className","end","style","to","children"];function qT(e){let{basename:t,children:n,window:r}=e,i=T.exports.useRef();i.current==null&&(i.current=M2({window:r,v5Compat:!0}));let o=i.current,[s,a]=T.exports.useState({action:o.action,location:o.location});return T.exports.useLayoutEffect(()=>o.listen(a),[o]),M(jT,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const KT=T.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d}=t,p=Vb(t,WT),g=OT(u,{relative:i}),y=GT(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i});function w(v){r&&r(v),v.defaultPrevented||y(v)}return M("a",{...p,href:g,onClick:o?r:w,ref:n,target:l})}),yM=T.exports.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,children:u}=t,d=Vb(t,HT),p=cg(l,{relative:d.relative}),g=Ol(),y=T.exports.useContext(lg),w=p.pathname,v=g.pathname,c=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(v=v.toLowerCase(),c=c?c.toLowerCase():null,w=w.toLowerCase());let f=v===w||!s&&v.startsWith(w)&&v.charAt(w.length)==="/",h=c!=null&&(c===w||!s&&c.startsWith(w)&&c.charAt(w.length)==="/"),m=f?r:void 0,S;typeof o=="function"?S=o({isActive:f,isPending:h}):S=[o,f?"active":null,h?"pending":null].filter(Boolean).join(" ");let b=typeof a=="function"?a({isActive:f,isPending:h}):a;return M(KT,{...d,"aria-current":m,className:S,ref:n,style:b,to:l,children:typeof u=="function"?u({isActive:f,isPending:h}):u})});var gv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(gv||(gv={}));var yv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yv||(yv={}));function GT(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=NT(),l=Ol(),u=cg(e,{relative:s});return T.exports.useCallback(d=>{if(VT(d,n)){d.preventDefault();let p=r!==void 0?r:rl(l)===rl(u);a(e,{replace:p,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}var Wb={},Gd={exports:{}},Yd,vv;function YT(){if(vv)return Yd;vv=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Yd=e,Yd}var Xd,wv;function XT(){if(wv)return Xd;wv=1;var e=YT();function t(){}function n(){}return n.resetWarningCache=t,Xd=function(){function r(s,a,l,u,d,p){if(p!==e){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}r.isRequired=r;function i(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return o.PropTypes=o,o},Xd}var Sv;function Hb(){return Sv||(Sv=1,Gd.exports=XT()()),Gd.exports}var qb={exports:{}};(function(e,t){(function(n){e.exports=n(null)})(function n(r){var i=/^\0+/g,o=/[\0\r\f]/g,s=/: */g,a=/zoo|gra/,l=/([,: ])(transform)/g,u=/,+\s*(?![^(]*[)])/g,d=/ +\s*(?![^(]*[)])/g,p=/ *[\0] */g,g=/,\r+?/g,y=/([\t\r\n ])*\f?&/g,w=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,v=/\W+/g,c=/@(k\w+)\s*(\S*)\s*/,f=/::(place)/g,h=/:(read-only)/g,m=/\s+(?=[{\];=:>])/g,S=/([[}=:>])\s+/g,b=/(\{[^{]+?);(?=\})/g,x=/\s{2,}/g,E=/([^\(])(:+) */g,z=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,_=/-self|flex-/g,N=/[^]*?(:[rp][el]a[\w-]+)[^]*/,R=/stretch|:\s*\w+\-(?:conte|avail)/,V=/([^-])(image-set\()/,O="-webkit-",$="-moz-",L="-ms-",P=59,A=125,j=123,Q=40,oe=41,He=91,nt=93,Ae=10,Re=13,Le=9,qe=64,$e=32,qn=38,je=45,Bs=95,Wt=42,un=44,$t=58,dr=39,cn=34,Et=47,Kn=62,Ht=43,qt=126,Un=0,Gn=12,Yn=11,Ut=107,hr=109,Ei=115,Lr=112,xn=111,Vs=105,Ci=99,zi=100,tu=112,Dt=1,En=1,Dn=0,fn=1,dn=1,Ws=1,nu=0,Hs=0,po=0,mo=[],go=[],Cn=0,yo=null,dd=-2,hd=-1,pd=0,ki=1,qs=2,md=3,jr=0,pr=1,Ct="",Kt="",Ti="";function mr(F,q,X,re,W){for(var ve,I,de=0,le=0,Ye=0,ue=0,rt=0,Ce=0,ce=0,Mt=0,Gt=0,So=0,Yt=0,gr=0,iu=0,Xn=0,me=0,zn=0,bo=0,Ys=0,ze=0,Pi=X.length,Xs=Pi-1,zt="",ne="",Te="",Ke="",ou="",yd="";me<Pi;){if(ce=X.charCodeAt(me),me===Xs&&le+ue+Ye+de!==0&&(le!==0&&(ce=le===Et?Ae:Et),ue=Ye=de=0,Pi++,Xs++),le+ue+Ye+de===0){if(me===Xs&&(zn>0&&(ne=ne.replace(o,"")),ne.trim().length>0)){switch(ce){case $e:case Le:case P:case Re:case Ae:break;default:ne+=X.charAt(me)}ce=P}if(bo===1)switch(ce){case j:case A:case P:case cn:case dr:case Q:case oe:case un:bo=0;case Le:case Re:case Ae:case $e:break;default:for(bo=0,ze=me,rt=ce,me--,ce=P;ze<Pi;)switch(X.charCodeAt(ze++)){case Ae:case Re:case P:++me,ce=rt,ze=Pi;break;case $t:zn>0&&(++me,ce=rt);case j:ze=Pi}}switch(ce){case j:for(rt=(ne=ne.trim()).charCodeAt(0),Yt=1,ze=++me;me<Pi;){switch(ce=X.charCodeAt(me)){case j:Yt++;break;case A:Yt--;break;case Et:switch(Ce=X.charCodeAt(me+1)){case Wt:case Et:me=gd(Ce,me,Xs,X)}break;case He:ce++;case Q:ce++;case cn:case dr:for(;me++<Xs&&X.charCodeAt(me)!==ce;);}if(Yt===0)break;me++}switch(Te=X.substring(ze,me),rt===Un&&(rt=(ne=ne.replace(i,"").trim()).charCodeAt(0)),rt){case qe:switch(zn>0&&(ne=ne.replace(o,"")),Ce=ne.charCodeAt(1)){case zi:case hr:case Ei:case je:ve=q;break;default:ve=mo}if(ze=(Te=mr(q,ve,Te,Ce,W+1)).length,po>0&&ze===0&&(ze=ne.length),Cn>0&&(ve=vo(mo,ne,Ys),I=Fr(md,Te,ve,q,En,Dt,ze,Ce,W,re),ne=ve.join(""),I!==void 0&&(ze=(Te=I.trim()).length)===0&&(Ce=0,Te="")),ze>0)switch(Ce){case Ei:ne=ne.replace(k,ru);case zi:case hr:case je:Te=ne+"{"+Te+"}";break;case Ut:Te=(ne=ne.replace(c,"$1 $2"+(pr>0?Ct:"")))+"{"+Te+"}",dn===1||dn===2&&_i("@"+Te,3)?Te="@"+O+Te+"@"+Te:Te="@"+Te;break;default:Te=ne+Te,re===tu&&(Ke+=Te,Te="")}else Te="";break;default:Te=mr(q,vo(q,ne,Ys),Te,re,W+1)}ou+=Te,gr=0,bo=0,Xn=0,zn=0,Ys=0,iu=0,ne="",Te="",ce=X.charCodeAt(++me);break;case A:case P:if((ze=(ne=(zn>0?ne.replace(o,""):ne).trim()).length)>1)switch(Xn===0&&((rt=ne.charCodeAt(0))===je||rt>96&&rt<123)&&(ze=(ne=ne.replace(" ",":")).length),Cn>0&&(I=Fr(ki,ne,q,F,En,Dt,Ke.length,re,W,re))!==void 0&&(ze=(ne=I.trim()).length)===0&&(ne="\0\0"),rt=ne.charCodeAt(0),Ce=ne.charCodeAt(1),rt){case Un:break;case qe:if(Ce===Vs||Ce===Ci){yd+=ne+X.charAt(me);break}default:if(ne.charCodeAt(ze-1)===$t)break;Ke+=wo(ne,rt,Ce,ne.charCodeAt(2))}gr=0,bo=0,Xn=0,zn=0,Ys=0,ne="",ce=X.charCodeAt(++me)}}switch(ce){case Re:case Ae:if(le+ue+Ye+de+Hs===0)switch(So){case oe:case dr:case cn:case qe:case qt:case Kn:case Wt:case Ht:case Et:case je:case $t:case un:case P:case j:case A:break;default:Xn>0&&(bo=1)}le===Et?le=0:fn+gr===0&&re!==Ut&&ne.length>0&&(zn=1,ne+="\0"),Cn*jr>0&&Fr(pd,ne,q,F,En,Dt,Ke.length,re,W,re),Dt=1,En++;break;case P:case A:if(le+ue+Ye+de===0){Dt++;break}default:switch(Dt++,zt=X.charAt(me),ce){case Le:case $e:if(ue+de+le===0)switch(Mt){case un:case $t:case Le:case $e:zt="";break;default:ce!==$e&&(zt=" ")}break;case Un:zt="\\0";break;case Gn:zt="\\f";break;case Yn:zt="\\v";break;case qn:ue+le+de===0&&fn>0&&(Ys=1,zn=1,zt="\f"+zt);break;case 108:if(ue+le+de+Dn===0&&Xn>0)switch(me-Xn){case 2:Mt===Lr&&X.charCodeAt(me-3)===$t&&(Dn=Mt);case 8:Gt===xn&&(Dn=Gt)}break;case $t:ue+le+de===0&&(Xn=me);break;case un:le+Ye+ue+de===0&&(zn=1,zt+="\r");break;case cn:case dr:le===0&&(ue=ue===ce?0:ue===0?ce:ue);break;case He:ue+le+Ye===0&&de++;break;case nt:ue+le+Ye===0&&de--;break;case oe:ue+le+de===0&&Ye--;break;case Q:if(ue+le+de===0){if(gr===0)switch(2*Mt+3*Gt){case 533:break;default:Yt=0,gr=1}Ye++}break;case qe:le+Ye+ue+de+Xn+iu===0&&(iu=1);break;case Wt:case Et:if(ue+de+Ye>0)break;switch(le){case 0:switch(2*ce+3*X.charCodeAt(me+1)){case 235:le=Et;break;case 220:ze=me,le=Wt}break;case Wt:ce===Et&&Mt===Wt&&ze+2!==me&&(X.charCodeAt(ze+2)===33&&(Ke+=X.substring(ze,me+1)),zt="",le=0)}}if(le===0){if(fn+ue+de+iu===0&&re!==Ut&&ce!==P)switch(ce){case un:case qt:case Kn:case Ht:case oe:case Q:if(gr===0){switch(Mt){case Le:case $e:case Ae:case Re:zt+="\0";break;default:zt="\0"+zt+(ce===un?"":"\0")}zn=1}else switch(ce){case Q:Xn+7===me&&Mt===108&&(Xn=0),gr=++Yt;break;case oe:(gr=--Yt)==0&&(zn=1,zt+="\0")}break;case Le:case $e:switch(Mt){case Un:case j:case A:case P:case un:case Gn:case Le:case $e:case Ae:case Re:break;default:gr===0&&(zn=1,zt+="\0")}}ne+=zt,ce!==$e&&ce!==Le&&(So=ce)}}Gt=Mt,Mt=ce,me++}if(ze=Ke.length,po>0&&ze===0&&ou.length===0&&q[0].length!==0&&(re!==hr||q.length===1&&(fn>0?Kt:Ti)===q[0])&&(ze=q.join(",").length+2),ze>0){if(ve=fn===0&&re!==Ut?function(G0){for(var yr,pt,su=0,Y0=G0.length,X0=Array(Y0);su<Y0;++su){for(var vd=G0[su].split(p),au="",xo=0,wd=0,Q0=0,J0=0,Z0=vd.length;xo<Z0;++xo)if(!((wd=(pt=vd[xo]).length)===0&&Z0>1)){if(Q0=au.charCodeAt(au.length-1),J0=pt.charCodeAt(0),yr="",xo!==0)switch(Q0){case Wt:case qt:case Kn:case Ht:case $e:case Q:break;default:yr=" "}switch(J0){case qn:pt=yr+Kt;case qt:case Kn:case Ht:case $e:case oe:case Q:break;case He:pt=yr+pt+Kt;break;case $t:switch(2*pt.charCodeAt(1)+3*pt.charCodeAt(2)){case 530:if(Ws>0){pt=yr+pt.substring(8,wd-1);break}default:(xo<1||vd[xo-1].length<1)&&(pt=yr+Kt+pt)}break;case un:yr="";default:wd>1&&pt.indexOf(":")>0?pt=yr+pt.replace(E,"$1"+Kt+"$2"):pt=yr+pt+Kt}au+=pt}X0[su]=au.replace(o,"").trim()}return X0}(q):q,Cn>0&&(I=Fr(qs,Ke,ve,F,En,Dt,ze,re,W,re))!==void 0&&(Ke=I).length===0)return yd+Ke+ou;if(Ke=ve.join(",")+"{"+Ke+"}",dn*Dn!=0){switch(dn===2&&!_i(Ke,2)&&(Dn=0),Dn){case xn:Ke=Ke.replace(h,":"+$+"$1")+Ke;break;case Lr:Ke=Ke.replace(f,"::"+O+"input-$1")+Ke.replace(f,"::"+$+"$1")+Ke.replace(f,":"+L+"input-$1")+Ke}Dn=0}}return yd+Ke+ou}function vo(F,q,X){var re=q.trim().split(g),W=re,ve=re.length,I=F.length;switch(I){case 0:case 1:for(var de=0,le=I===0?"":F[0]+" ";de<ve;++de)W[de]=Ks(le,W[de],X,I).trim();break;default:de=0;var Ye=0;for(W=[];de<ve;++de)for(var ue=0;ue<I;++ue)W[Ye++]=Ks(F[ue]+" ",re[de],X,I).trim()}return W}function Ks(F,q,X,re){var W=q,ve=W.charCodeAt(0);switch(ve<33&&(ve=(W=W.trim()).charCodeAt(0)),ve){case qn:switch(fn+re){case 0:case 1:if(F.trim().length===0)break;default:return W.replace(y,"$1"+F.trim())}break;case $t:switch(W.charCodeAt(1)){case 103:if(Ws>0&&fn>0)return W.replace(w,"$1").replace(y,"$1"+Ti);break;default:return F.trim()+W.replace(y,"$1"+F.trim())}default:if(X*fn>0&&W.indexOf("\f")>0)return W.replace(y,(F.charCodeAt(0)===$t?"":"$1")+F.trim())}return F+W}function wo(F,q,X,re){var W,ve=0,I=F+";",de=2*q+3*X+4*re;if(de===944)return function(le){var Ye=le.length,ue=le.indexOf(":",9)+1,rt=le.substring(0,ue).trim(),Ce=le.substring(ue,Ye-1).trim();switch(le.charCodeAt(9)*pr){case 0:break;case je:if(le.charCodeAt(10)!==110)break;default:for(var ce=Ce.split((Ce="",u)),Mt=0,ue=0,Ye=ce.length;Mt<Ye;ue=0,++Mt){for(var Gt=ce[Mt],So=Gt.split(d);Gt=So[ue];){var Yt=Gt.charCodeAt(0);if(pr===1&&(Yt>qe&&Yt<90||Yt>96&&Yt<123||Yt===Bs||Yt===je&&Gt.charCodeAt(1)!==je))switch(isNaN(parseFloat(Gt))+(Gt.indexOf("(")!==-1)){case 1:switch(Gt){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:Gt+=Ct}}So[ue++]=Gt}Ce+=(Mt===0?"":",")+So.join(" ")}}return Ce=rt+Ce+";",dn===1||dn===2&&_i(Ce,1)?O+Ce+Ce:Ce}(I);if(dn===0||dn===2&&!_i(I,1))return I;switch(de){case 1015:return I.charCodeAt(10)===97?O+I+I:I;case 951:return I.charCodeAt(3)===116?O+I+I:I;case 963:return I.charCodeAt(5)===110?O+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return O+I+I;case 978:return O+I+$+I+I;case 1019:case 983:return O+I+$+I+L+I+I;case 883:return I.charCodeAt(8)===je?O+I+I:I.indexOf("image-set(",11)>0?I.replace(V,"$1"+O+"$2")+I:I;case 932:if(I.charCodeAt(4)===je)switch(I.charCodeAt(5)){case 103:return O+"box-"+I.replace("-grow","")+O+I+L+I.replace("grow","positive")+I;case 115:return O+I+L+I.replace("shrink","negative")+I;case 98:return O+I+L+I.replace("basis","preferred-size")+I}return O+I+L+I+I;case 964:return O+I+L+"flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return W=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),O+"box-pack"+W+O+I+L+"flex-pack"+W+I;case 1005:return a.test(I)?I.replace(s,":"+O)+I.replace(s,":"+$)+I:I;case 1e3:switch(ve=(W=I.substring(13).trim()).indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(ve)){case 226:W=I.replace(z,"tb");break;case 232:W=I.replace(z,"tb-rl");break;case 220:W=I.replace(z,"lr");break;default:return I}return O+I+L+W+I;case 1017:if(I.indexOf("sticky",9)===-1)return I;case 975:switch(ve=(I=F).length-10,de=(W=(I.charCodeAt(ve)===33?I.substring(0,ve):I).substring(F.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|W.charCodeAt(7))){case 203:if(W.charCodeAt(8)<111)break;case 115:I=I.replace(W,O+W)+";"+I;break;case 207:case 102:I=I.replace(W,O+(de>102?"inline-":"")+"box")+";"+I.replace(W,O+W)+";"+I.replace(W,L+W+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===je)switch(I.charCodeAt(6)){case 105:return W=I.replace("-items",""),O+I+O+"box-"+W+L+"flex-"+W+I;case 115:return O+I+L+"flex-item-"+I.replace(_,"")+I;default:return O+I+L+"flex-line-pack"+I.replace("align-content","").replace(_,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==je||I.charCodeAt(4)===122)break;case 931:case 953:if(R.test(F)===!0)return(W=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?wo(F.replace("stretch","fill-available"),q,X,re).replace(":fill-available",":stretch"):I.replace(W,O+W)+I.replace(W,$+W.replace("fill-",""))+I;break;case 962:if(I=O+I+(I.charCodeAt(5)===102?L+I:"")+I,X+re===211&&I.charCodeAt(13)===105&&I.indexOf("transform",10)>0)return I.substring(0,I.indexOf(";",27)+1).replace(l,"$1"+O+"$2")+I}return I}function _i(F,q){var X=F.indexOf(q===1?":":"{"),re=F.substring(0,q!==3?X:10),W=F.substring(X+1,F.length-1);return yo(q!==2?re:re.replace(N,"$1"),W,q)}function ru(F,q){var X=wo(q,q.charCodeAt(0),q.charCodeAt(1),q.charCodeAt(2));return X!==q+";"?X.replace(C," or ($1)").substring(4):"("+q+")"}function Fr(F,q,X,re,W,ve,I,de,le,Ye){for(var ue,rt=0,Ce=q;rt<Cn;++rt)switch(ue=go[rt].call(Ii,F,Ce,X,re,W,ve,I,de,le,Ye)){case void 0:case!1:case!0:case null:break;default:Ce=ue}if(Ce!==q)return Ce}function gd(F,q,X,re){for(var W=q+1;W<X;++W)switch(re.charCodeAt(W)){case Et:if(F===Wt&&re.charCodeAt(W-1)===Wt&&q+2!==W)return W+1;break;case Ae:if(F===Et)return W+1}return W}function Gs(F){for(var q in F){var X=F[q];switch(q){case"keyframe":pr=0|X;break;case"global":Ws=0|X;break;case"cascade":fn=0|X;break;case"compress":nu=0|X;break;case"semicolon":Hs=0|X;break;case"preserve":po=0|X;break;case"prefix":yo=null,X?typeof X!="function"?dn=1:(dn=2,yo=X):dn=0}}return Gs}function Ii(F,q){if(this!==void 0&&this.constructor===Ii)return n(F);var X=F,re=X.charCodeAt(0);re<33&&(re=(X=X.trim()).charCodeAt(0)),pr>0&&(Ct=X.replace(v,re===He?"":"-")),re=1,fn===1?Ti=X:Kt=X;var W,ve=[Ti];Cn>0&&(W=Fr(hd,q,ve,ve,En,Dt,0,0,0,0))!==void 0&&typeof W=="string"&&(q=W);var I=mr(mo,ve,q,0,0);return Cn>0&&(W=Fr(dd,I,ve,ve,En,Dt,I.length,0,0,0))!==void 0&&typeof(I=W)!="string"&&(re=0),Ct="",Ti="",Kt="",Dn=0,En=1,Dt=1,nu*re==0?I:I.replace(o,"").replace(m,"").replace(S,"$1").replace(b,"$1").replace(x," ")}return Ii.use=function F(q){switch(q){case void 0:case null:Cn=go.length=0;break;default:if(typeof q=="function")go[Cn++]=q;else if(typeof q=="object")for(var X=0,re=q.length;X<re;++X)F(q[X]);else jr=0|!!q}return F},Ii.set=Gs,r!==void 0&&Gs(r),Ii})})(qb);const Kb=qb.exports;var Gb={exports:{}};(function(e,t){(function(n){e.exports=n()})(function(){return function(n){var r="/*|*/",i=r+"}";function o(s){if(s)try{n(s+"}")}catch{}}return function(a,l,u,d,p,g,y,w,v,c){switch(a){case 1:if(v===0&&l.charCodeAt(0)===64)return n(l+";"),"";break;case 2:if(w===0)return l+r;break;case 3:switch(w){case 102:case 112:return n(u[0]+l),"";default:return l+(c===0?r:"")}case-2:l.split(i).forEach(o)}}}})})(Gb);const QT=Gb.exports;var JT={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fg={exports:{}},Ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ht=typeof Symbol=="function"&&Symbol.for,dg=ht?Symbol.for("react.element"):60103,hg=ht?Symbol.for("react.portal"):60106,bf=ht?Symbol.for("react.fragment"):60107,xf=ht?Symbol.for("react.strict_mode"):60108,Ef=ht?Symbol.for("react.profiler"):60114,Cf=ht?Symbol.for("react.provider"):60109,zf=ht?Symbol.for("react.context"):60110,pg=ht?Symbol.for("react.async_mode"):60111,kf=ht?Symbol.for("react.concurrent_mode"):60111,Tf=ht?Symbol.for("react.forward_ref"):60112,_f=ht?Symbol.for("react.suspense"):60113,ZT=ht?Symbol.for("react.suspense_list"):60120,If=ht?Symbol.for("react.memo"):60115,Pf=ht?Symbol.for("react.lazy"):60116,e_=ht?Symbol.for("react.block"):60121,t_=ht?Symbol.for("react.fundamental"):60117,n_=ht?Symbol.for("react.responder"):60118,r_=ht?Symbol.for("react.scope"):60119;function bn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case dg:switch(e=e.type,e){case pg:case kf:case bf:case Ef:case xf:case _f:return e;default:switch(e=e&&e.$$typeof,e){case zf:case Tf:case Pf:case If:case Cf:return e;default:return t}}case hg:return t}}}function Yb(e){return bn(e)===kf}Ee.AsyncMode=pg;Ee.ConcurrentMode=kf;Ee.ContextConsumer=zf;Ee.ContextProvider=Cf;Ee.Element=dg;Ee.ForwardRef=Tf;Ee.Fragment=bf;Ee.Lazy=Pf;Ee.Memo=If;Ee.Portal=hg;Ee.Profiler=Ef;Ee.StrictMode=xf;Ee.Suspense=_f;Ee.isAsyncMode=function(e){return Yb(e)||bn(e)===pg};Ee.isConcurrentMode=Yb;Ee.isContextConsumer=function(e){return bn(e)===zf};Ee.isContextProvider=function(e){return bn(e)===Cf};Ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===dg};Ee.isForwardRef=function(e){return bn(e)===Tf};Ee.isFragment=function(e){return bn(e)===bf};Ee.isLazy=function(e){return bn(e)===Pf};Ee.isMemo=function(e){return bn(e)===If};Ee.isPortal=function(e){return bn(e)===hg};Ee.isProfiler=function(e){return bn(e)===Ef};Ee.isStrictMode=function(e){return bn(e)===xf};Ee.isSuspense=function(e){return bn(e)===_f};Ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===bf||e===kf||e===Ef||e===xf||e===_f||e===ZT||typeof e=="object"&&e!==null&&(e.$$typeof===Pf||e.$$typeof===If||e.$$typeof===Cf||e.$$typeof===zf||e.$$typeof===Tf||e.$$typeof===t_||e.$$typeof===n_||e.$$typeof===r_||e.$$typeof===e_)};Ee.typeOf=bn;(function(e){e.exports=Ee})(fg);var bv=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function i_(e,t){return!!(e===t||bv(e)&&bv(t))}function o_(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!i_(e[n],t[n]))return!1;return!0}function Xb(e,t){t===void 0&&(t=o_);var n,r=[],i,o=!1;function s(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return o&&n===this&&t(a,r)||(i=e.apply(this,a),o=!0,n=this,r=a),i}return s}Hb();function s_(e){var t={};return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var a_=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,l_=s_(function(e){return a_.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function mg(e){return Object.prototype.toString.call(e).slice(8,-1)}function pa(e){return mg(e)!=="Object"?!1:e.constructor===Object&&Object.getPrototypeOf(e)===Object.prototype}function xv(e){return mg(e)==="Array"}function Ev(e){return mg(e)==="Symbol"}/*! *****************************************************************************
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
***************************************************************************** */function Cv(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function zv(e,t,n,r){var i=r.propertyIsEnumerable(t)?"enumerable":"nonenumerable";i==="enumerable"&&(e[t]=n),i==="nonenumerable"&&Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!0,configurable:!0})}function Qb(e,t,n){if(!pa(t))return n&&xv(n)&&n.forEach(function(u){t=u(e,t)}),t;var r={};if(pa(e)){var i=Object.getOwnPropertyNames(e),o=Object.getOwnPropertySymbols(e);r=Cv(i,o).reduce(function(u,d){var p=e[d];return(!Ev(d)&&!Object.getOwnPropertyNames(t).includes(d)||Ev(d)&&!Object.getOwnPropertySymbols(t).includes(d))&&zv(u,d,p,e),u},{})}var s=Object.getOwnPropertyNames(t),a=Object.getOwnPropertySymbols(t),l=Cv(s,a).reduce(function(u,d){var p=t[d],g=pa(e)?e[d]:void 0;return n&&xv(n)&&n.forEach(function(y){p=y(g,p)}),g!==void 0&&pa(p)&&(p=Qb(g,p,n)),zv(u,d,p,t),u},r);return l}function u_(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=null,i=e;return pa(e)&&e.extensions&&Object.keys(e).length===1&&(i={},r=e.extensions),t.reduce(function(o,s){return Qb(o,s,r)},i)}var kv=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Jb=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fr=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c_=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Wn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nl=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f_=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},hs=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},gg=function(e){return(typeof e>"u"?"undefined":Jb(e))==="object"&&e.constructor===Object},Oc=Object.freeze([]),Pa=Object.freeze({});function Or(e){return typeof e=="function"}function yg(e){return e.displayName||e.name||"Component"}function d_(e){return typeof e=="function"&&!(e.prototype&&e.prototype.isReactComponent)}function Al(e){return e&&typeof e.styledComponentId=="string"}var il=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Of="data-styled-version",h_="data-styled-streamed",eo=typeof window<"u"&&"HTMLElement"in window,Zb=typeof SC_DISABLE_SPEEDY=="boolean"&&SC_DISABLE_SPEEDY||typeof process<"u"&&(process.env.REACT_APP_SC_DISABLE_SPEEDY||process.env.SC_DISABLE_SPEEDY)||!1,p_={},lr=function(e){Nl(t,e);function t(n){fr(this,t);for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var s,s=hs(this,e.call(this,"An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+n+" for more information."+(i.length>0?" Additional arguments: "+i.join(", "):"")));return hs(s)}return t}(Error),m_=/^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,g_=function(e){var t=""+(e||""),n=[];return t.replace(m_,function(r,i,o){return n.push({componentId:i,matchIndex:o}),r}),n.map(function(r,i){var o=r.componentId,s=r.matchIndex,a=n[i+1],l=a?t.slice(s,a.matchIndex):t.slice(s);return{componentId:o,cssFromDOM:l}})},y_=/^\s*\/\/.*$/gm,ex=new Kb({global:!1,cascade:!0,keyframe:!1,prefix:!1,compress:!1,semicolon:!0}),tx=new Kb({global:!1,cascade:!0,keyframe:!1,prefix:!0,compress:!1,semicolon:!1}),bp=[],nx=function(t){if(t===-2){var n=bp;return bp=[],n}},rx=QT(function(e){bp.push(e)}),ix=void 0,Jo=void 0,ox=void 0,v_=function(t,n,r){return n>0&&r.slice(0,n).indexOf(Jo)!==-1&&r.slice(n-Jo.length,n)!==Jo?"."+ix:t},w_=function(t,n,r){t===2&&r.length&&r[0].lastIndexOf(Jo)>0&&(r[0]=r[0].replace(ox,v_))};tx.use([w_,rx,nx]);ex.use([rx,nx]);var S_=function(t){return ex("",t)};function vg(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"&",i=e.join("").replace(y_,""),o=t&&n?n+" "+t+" { "+i+" }":i;return ix=r,Jo=t,ox=new RegExp("\\"+Jo+"\\b","g"),tx(n||!t?"":t,o)}var wg=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Sg=function(t,n,r){if(r){var i=t[n]||(t[n]=Object.create(null));i[r]=!0}},Nc=function(t,n){t[n]=Object.create(null)},bg=function(t){return function(n,r){return t[n]!==void 0&&t[n][r]}},sx=function(t){var n="";for(var r in t)n+=Object.keys(t[r]).join(" ")+" ";return n.trim()},b_=function(t){var n=Object.create(null);for(var r in t)n[r]=Wn({},t[r]);return n},Qd=function(t){if(t.sheet)return t.sheet;for(var n=t.ownerDocument.styleSheets.length,r=0;r<n;r+=1){var i=t.ownerDocument.styleSheets[r];if(i.ownerNode===t)return i}throw new lr(10)},x_=function(t,n,r){if(!n)return!1;var i=t.cssRules.length;try{t.insertRule(n,r<=i?r:i)}catch{return!1}return!0},E_=function(t,n,r){for(var i=n-r,o=n;o>i;o-=1)t.deleteRule(o)},xg=function(t){return`
/* sc-component-id: `+t+` */
`},Jd=function(t,n){for(var r=0,i=0;i<=n;i+=1)r+=t[i];return r},C_=function(t,n,r){var i=document;t?i=t.ownerDocument:n&&(i=n.ownerDocument);var o=i.createElement("style");o.setAttribute(il,""),o.setAttribute(Of,"4.4.1");var s=wg();if(s&&o.setAttribute("nonce",s),o.appendChild(i.createTextNode("")),t&&!n)t.appendChild(o);else{if(!n||!t||!n.parentNode)throw new lr(6);n.parentNode.insertBefore(o,r?n:n.nextSibling)}return o},Eg=function(t,n){return function(r){var i=wg(),o=[i&&'nonce="'+i+'"',il+'="'+sx(n)+'"',Of+'="4.4.1"',r],s=o.filter(Boolean).join(" ");return"<style "+s+">"+t()+"</style>"}},Cg=function(t,n){return function(){var r,i=(r={},r[il]=sx(n),r[Of]="4.4.1",r),o=wg();return o&&(i.nonce=o),M("style",{...i,dangerouslySetInnerHTML:{__html:t()}})}},zg=function(t){return function(){return Object.keys(t)}},z_=function(t,n){var r=Object.create(null),i=Object.create(null),o=[],s=n!==void 0,a=!1,l=function(y){var w=i[y];return w!==void 0?w:(i[y]=o.length,o.push(0),Nc(r,y),i[y])},u=function(y,w,v){for(var c=l(y),f=Qd(t),h=Jd(o,c),m=0,S=[],b=w.length,x=0;x<b;x+=1){var E=w[x],z=s;z&&E.indexOf("@import")!==-1?S.push(E):x_(f,E,h+m)&&(z=!1,m+=1)}s&&S.length>0&&(a=!0,n().insertRules(y+"-import",S)),o[c]+=m,Sg(r,y,v)},d=function(y){var w=i[y];if(w!==void 0&&t.isConnected!==!1){var v=o[w],c=Qd(t),f=Jd(o,w)-1;E_(c,f,v),o[w]=0,Nc(r,y),s&&a&&n().removeRules(y+"-import")}},p=function(){var y=Qd(t),w=y.cssRules,v="";for(var c in i){v+=xg(c);for(var f=i[c],h=Jd(o,f),m=o[f],S=h-m;S<h;S+=1){var b=w[S];b!==void 0&&(v+=b.cssText)}}return v};return{clone:function(){throw new lr(5)},css:p,getIds:zg(i),hasNameForId:bg(r),insertMarker:l,insertRules:u,removeRules:d,sealed:!1,styleTag:t,toElement:Cg(p,r),toHTML:Eg(p,r)}},Tv=function(t,n){return t.createTextNode(xg(n))},k_=function(t,n){var r=Object.create(null),i=Object.create(null),o=n!==void 0,s=!1,a=function(g){var y=i[g];return y!==void 0?y:(i[g]=Tv(t.ownerDocument,g),t.appendChild(i[g]),r[g]=Object.create(null),i[g])},l=function(g,y,w){for(var v=a(g),c=[],f=y.length,h=0;h<f;h+=1){var m=y[h],S=o;if(S&&m.indexOf("@import")!==-1)c.push(m);else{S=!1;var b=h===f-1?"":" ";v.appendData(""+m+b)}}Sg(r,g,w),o&&c.length>0&&(s=!0,n().insertRules(g+"-import",c))},u=function(g){var y=i[g];if(y!==void 0){var w=Tv(t.ownerDocument,g);t.replaceChild(w,y),i[g]=w,Nc(r,g),o&&s&&n().removeRules(g+"-import")}},d=function(){var g="";for(var y in i)g+=i[y].data;return g};return{clone:function(){throw new lr(5)},css:d,getIds:zg(i),hasNameForId:bg(r),insertMarker:a,insertRules:l,removeRules:u,sealed:!1,styleTag:t,toElement:Cg(d,r),toHTML:Eg(d,r)}},T_=function e(t,n){var r=t===void 0?Object.create(null):t,i=n===void 0?Object.create(null):n,o=function(g){var y=i[g];return y!==void 0?y:i[g]=[""]},s=function(g,y,w){var v=o(g);v[0]+=y.join(" "),Sg(r,g,w)},a=function(g){var y=i[g];y!==void 0&&(y[0]="",Nc(r,g))},l=function(){var g="";for(var y in i){var w=i[y][0];w&&(g+=xg(y)+w)}return g},u=function(){var g=b_(r),y=Object.create(null);for(var w in i)y[w]=[i[w][0]];return e(g,y)},d={clone:u,css:l,getIds:zg(i),hasNameForId:bg(r),insertMarker:o,insertRules:s,removeRules:a,sealed:!1,styleTag:null,toElement:Cg(l,r),toHTML:Eg(l,r)};return d},_v=function(t,n,r,i,o){if(eo&&!r){var s=C_(t,n,i);return Zb?k_(s,o):z_(s,o)}return T_()},__=function(t,n,r){for(var i=0,o=r.length;i<o;i+=1){var s=r[i],a=s.componentId,l=s.cssFromDOM,u=S_(l);t.insertRules(a,u)}for(var d=0,p=n.length;d<p;d+=1){var g=n[d];g.parentNode&&g.parentNode.removeChild(g)}},I_=/\s+/,Ac=void 0;eo?Ac=Zb?40:1e3:Ac=-1;var Iv=0,Zd=void 0,Nr=function(){function e(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:eo?document.head:null,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;fr(this,e),this.getImportRuleTag=function(){var i=t.importRuleTag;if(i!==void 0)return i;var o=t.tags[0],s=!0;return t.importRuleTag=_v(t.target,o?o.styleTag:null,t.forceServer,s)},Iv+=1,this.id=Iv,this.forceServer=r,this.target=r?null:n,this.tagMap={},this.deferred={},this.rehydratedNames={},this.ignoreRehydratedNames={},this.tags=[],this.capacity=1,this.clones=[]}return e.prototype.rehydrate=function(){if(!eo||this.forceServer)return this;var n=[],r=[],i=!1,o=document.querySelectorAll("style["+il+"]["+Of+'="4.4.1"]'),s=o.length;if(!s)return this;for(var a=0;a<s;a+=1){var l=o[a];i||(i=!!l.getAttribute(h_));for(var u=(l.getAttribute(il)||"").trim().split(I_),d=u.length,p=0,g;p<d;p+=1)g=u[p],this.rehydratedNames[g]=!0;r.push.apply(r,g_(l.textContent)),n.push(l)}var y=r.length;if(!y)return this;var w=this.makeTag(null);__(w,n,r),this.capacity=Math.max(1,Ac-y),this.tags.push(w);for(var v=0;v<y;v+=1)this.tagMap[r[v].componentId]=w;return this},e.reset=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;Zd=new e(void 0,n).rehydrate()},e.prototype.clone=function(){var n=new e(this.target,this.forceServer);return this.clones.push(n),n.tags=this.tags.map(function(r){for(var i=r.getIds(),o=r.clone(),s=0;s<i.length;s+=1)n.tagMap[i[s]]=o;return o}),n.rehydratedNames=Wn({},this.rehydratedNames),n.deferred=Wn({},this.deferred),n},e.prototype.sealAllTags=function(){this.capacity=1,this.tags.forEach(function(n){n.sealed=!0})},e.prototype.makeTag=function(n){var r=n?n.styleTag:null,i=!1;return _v(this.target,r,this.forceServer,i,this.getImportRuleTag)},e.prototype.getTagForId=function(n){var r=this.tagMap[n];if(r!==void 0&&!r.sealed)return r;var i=this.tags[this.tags.length-1];return this.capacity-=1,this.capacity===0&&(this.capacity=Ac,i=this.makeTag(i),this.tags.push(i)),this.tagMap[n]=i},e.prototype.hasId=function(n){return this.tagMap[n]!==void 0},e.prototype.hasNameForId=function(n,r){if(this.ignoreRehydratedNames[n]===void 0&&this.rehydratedNames[r])return!0;var i=this.tagMap[n];return i!==void 0&&i.hasNameForId(n,r)},e.prototype.deferredInject=function(n,r){if(this.tagMap[n]===void 0){for(var i=this.clones,o=0;o<i.length;o+=1)i[o].deferredInject(n,r);this.getTagForId(n).insertMarker(n),this.deferred[n]=r}},e.prototype.inject=function(n,r,i){for(var o=this.clones,s=0;s<o.length;s+=1)o[s].inject(n,r,i);var a=this.getTagForId(n);if(this.deferred[n]!==void 0){var l=this.deferred[n].concat(r);a.insertRules(n,l,i),this.deferred[n]=void 0}else a.insertRules(n,r,i)},e.prototype.remove=function(n){var r=this.tagMap[n];if(r!==void 0){for(var i=this.clones,o=0;o<i.length;o+=1)i[o].remove(n);r.removeRules(n),this.ignoreRehydratedNames[n]=!0,this.deferred[n]=void 0}},e.prototype.toHTML=function(){return this.tags.map(function(n){return n.toHTML()}).join("")},e.prototype.toReactElements=function(){var n=this.id;return this.tags.map(function(r,i){var o="sc-"+n+"-"+i;return T.exports.cloneElement(r.toElement(),{key:o})})},c_(e,null,[{key:"master",get:function(){return Zd||(Zd=new e().rehydrate())}},{key:"instance",get:function(){return e.master}}]),e}(),ax=function(){function e(t,n){var r=this;fr(this,e),this.inject=function(i){i.hasNameForId(r.id,r.name)||i.inject(r.id,r.rules,r.name)},this.toString=function(){throw new lr(12,String(r.name))},this.name=t,this.rules=n,this.id="sc-keyframes-"+t}return e.prototype.getName=function(){return this.name},e}(),P_=/([A-Z])/g,O_=/^ms-/;function Pv(e){return e.replace(P_,"-$1").toLowerCase().replace(O_,"-ms-")}function N_(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!(e in JT)?t+"px":String(t).trim()}var lx=function(t){return t==null||t===!1||t===""},A_=function e(t,n){var r=[],i=Object.keys(t);return i.forEach(function(o){if(!lx(t[o])){if(gg(t[o]))return r.push.apply(r,e(t[o],o)),r;if(Or(t[o]))return r.push(Pv(o)+":",t[o],";"),r;r.push(Pv(o)+": "+N_(o,t[o])+";")}return r}),n?[n+" {"].concat(r,["}"]):r};function ps(e,t,n){if(Array.isArray(e)){for(var r=[],i=0,o=e.length,s;i<o;i+=1)s=ps(e[i],t,n),s!==null&&(Array.isArray(s)?r.push.apply(r,s):r.push(s));return r}if(lx(e))return null;if(Al(e))return"."+e.styledComponentId;if(Or(e))if(d_(e)&&t){var a=e(t);return ps(a,t,n)}else return e;return e instanceof ax?n?(e.inject(n),e.getName()):e:gg(e)?A_(e):e.toString()}function Nf(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Or(e)||gg(e)?ps(kv(Oc,[e].concat(n))):ps(kv(e,n))}function xp(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Pa;if(!fg.exports.isValidElementType(t))throw new lr(1,String(t));var r=function(){return e(t,n,Nf.apply(void 0,arguments))};return r.withConfig=function(i){return xp(e,t,Wn({},n,i))},r.attrs=function(i){return xp(e,t,Wn({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r}function kg(e){for(var t=e.length|0,n=t|0,r=0,i;t>=4;)i=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,i=1540483477*(i&65535)+((1540483477*(i>>>16)&65535)<<16),i^=i>>>24,i=1540483477*(i&65535)+((1540483477*(i>>>16)&65535)<<16),n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16)^i,t-=4,++r;switch(t){case 3:n^=(e.charCodeAt(r+2)&255)<<16;case 2:n^=(e.charCodeAt(r+1)&255)<<8;case 1:n^=e.charCodeAt(r)&255,n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16)}return n^=n>>>13,n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16),(n^n>>>15)>>>0}var ku=52,Ov=function(t){return String.fromCharCode(t+(t>25?39:97))};function ux(e){var t="",n=void 0;for(n=e;n>ku;n=Math.floor(n/ku))t=Ov(n%ku)+t;return Ov(n%ku)+t}function R_(e){for(var t in e)if(Or(e[t]))return!0;return!1}function Tg(e,t){for(var n=0;n<e.length;n+=1){var r=e[n];if(Array.isArray(r)&&!Tg(r,t))return!1;if(Or(r)&&!Al(r))return!1}return!t.some(function(i){return Or(i)||R_(i)})}var Nv=function(t){return ux(kg(t))},Av=function(){function e(t,n,r){fr(this,e),this.rules=t,this.isStatic=Tg(t,n),this.componentId=r,Nr.master.hasId(r)||Nr.master.deferredInject(r,[])}return e.prototype.generateAndInjectStyles=function(n,r){var i=this.isStatic,o=this.componentId,s=this.lastClassName;if(eo&&i&&typeof s=="string"&&r.hasNameForId(o,s))return s;var a=ps(this.rules,n,r),l=Nv(this.componentId+a.join(""));return r.hasNameForId(o,l)||r.inject(this.componentId,vg(a,"."+l,void 0,o),l),this.lastClassName=l,l},e.generateName=function(n){return Nv(n)},e}(),_g=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Pa,r=n?e.theme===n.theme:!1,i=e.theme&&!r?e.theme:t||n.theme;return i},$_=/[[\].#*$><+~=|^:(),"'`-]+/g,U_=/(^-|-$)/g;function Ep(e){return e.replace($_,"-").replace(U_,"")}function Rc(e){return typeof e=="string"&&!0}function D_(e){return Rc(e)?"styled."+e:"Styled("+yg(e)+")"}var eh,Rv={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},M_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$v=(eh={},eh[fg.exports.ForwardRef]={$$typeof:!0,render:!0},eh),L_=Object.defineProperty,j_=Object.getOwnPropertyNames,Uv=Object.getOwnPropertySymbols,F_=Uv===void 0?function(){return[]}:Uv,B_=Object.getOwnPropertyDescriptor,V_=Object.getPrototypeOf,W_=Object.prototype,H_=Array.prototype;function Ig(e,t,n){if(typeof t!="string"){var r=V_(t);r&&r!==W_&&Ig(e,r,n);for(var i=H_.concat(j_(t),F_(t)),o=$v[e.$$typeof]||Rv,s=$v[t.$$typeof]||Rv,a=i.length,l=void 0,u=void 0;a--;)if(u=i[a],!M_[u]&&!(n&&n[u])&&!(s&&s[u])&&!(o&&o[u])&&(l=B_(t,u),l))try{L_(e,u,l)}catch{}return e}return e}function q_(e){return!!(e&&e.prototype&&e.prototype.isReactComponent)}var $c=T.exports.createContext(),Af=$c.Consumer,K_=function(e){Nl(t,e);function t(n){fr(this,t);var r=hs(this,e.call(this,n));return r.getContext=Xb(r.getContext.bind(r)),r.renderInner=r.renderInner.bind(r),r}return t.prototype.render=function(){return this.props.children?M($c.Consumer,{children:this.renderInner}):null},t.prototype.renderInner=function(r){var i=this.getContext(this.props.theme,r);return M($c.Provider,{value:i,children:this.props.children})},t.prototype.getTheme=function(r,i){if(Or(r)){var o=r(i);return o}if(r===null||Array.isArray(r)||(typeof r>"u"?"undefined":Jb(r))!=="object")throw new lr(8);return Wn({},i,r)},t.prototype.getContext=function(r,i){return this.getTheme(r,i)},t}(T.exports.Component),G_=function(){function e(){fr(this,e),this.masterSheet=Nr.master,this.instance=this.masterSheet.clone(),this.sealed=!1}return e.prototype.seal=function(){if(!this.sealed){var n=this.masterSheet.clones.indexOf(this.instance);this.masterSheet.clones.splice(n,1),this.sealed=!0}},e.prototype.collectStyles=function(n){if(this.sealed)throw new lr(2);return M(cx,{sheet:this.instance,children:n})},e.prototype.getStyleTags=function(){return this.seal(),this.instance.toHTML()},e.prototype.getStyleElement=function(){return this.seal(),this.instance.toReactElements()},e.prototype.interleaveWithNodeStream=function(n){throw new lr(3)},e}(),Pg=T.exports.createContext(),Og=Pg.Consumer,cx=function(e){Nl(t,e);function t(n){fr(this,t);var r=hs(this,e.call(this,n));return r.getContext=Xb(r.getContext),r}return t.prototype.getContext=function(r,i){if(r)return r;if(i)return new Nr(i);throw new lr(4)},t.prototype.render=function(){var r=this.props,i=r.children,o=r.sheet,s=r.target;return M(Pg.Provider,{value:this.getContext(o,s),children:i})},t}(T.exports.Component),Dv={};function Y_(e,t,n){var r=typeof t!="string"?"sc":Ep(t),i=(Dv[r]||0)+1;Dv[r]=i;var o=r+"-"+e.generateName(r+i);return n?n+"-"+o:o}var X_=function(e){Nl(t,e);function t(){fr(this,t);var n=hs(this,e.call(this));return n.attrs={},n.renderOuter=n.renderOuter.bind(n),n.renderInner=n.renderInner.bind(n),n}return t.prototype.render=function(){return M(Og,{children:this.renderOuter})},t.prototype.renderOuter=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Nr.master;return this.styleSheet=r,this.props.forwardedComponent.componentStyle.isStatic?this.renderInner():M(Af,{children:this.renderInner})},t.prototype.renderInner=function(r){var i=this.props.forwardedComponent,o=i.componentStyle,s=i.defaultProps;i.displayName;var a=i.foldedComponentIds,l=i.styledComponentId,u=i.target,d=void 0;o.isStatic?d=this.generateAndInjectStyles(Pa,this.props):d=this.generateAndInjectStyles(_g(this.props,r,s)||Pa,this.props);var p=this.props.as||this.attrs.as||u,g=Rc(p),y={},w=Wn({},this.props,this.attrs),v=void 0;for(v in w)v==="forwardedComponent"||v==="as"||(v==="forwardedRef"?y.ref=w[v]:v==="forwardedAs"?y.as=w[v]:(!g||l_(v))&&(y[v]=w[v]));return this.props.style&&this.attrs.style&&(y.style=Wn({},this.attrs.style,this.props.style)),y.className=Array.prototype.concat(a,l,d!==l?d:null,this.props.className,this.attrs.className).filter(Boolean).join(" "),T.exports.createElement(p,y)},t.prototype.buildExecutionContext=function(r,i,o){var s=this,a=Wn({},i,{theme:r});return o.length&&(this.attrs={},o.forEach(function(l){var u=l,d=!1,p=void 0,g=void 0;Or(u)&&(u=u(a),d=!0);for(g in u)p=u[g],d||Or(p)&&!q_(p)&&!Al(p)&&(p=p(a)),s.attrs[g]=p,a[g]=p})),a},t.prototype.generateAndInjectStyles=function(r,i){var o=i.forwardedComponent,s=o.attrs,a=o.componentStyle;if(o.warnTooManyClasses,a.isStatic&&!s.length)return a.generateAndInjectStyles(Pa,this.styleSheet);var l=a.generateAndInjectStyles(this.buildExecutionContext(r,i,s),this.styleSheet);return l},t}(T.exports.Component);function fx(e,t,n){var r=Al(e),i=!Rc(e),o=t.displayName,s=o===void 0?D_(e):o,a=t.componentId,l=a===void 0?Y_(Av,t.displayName,t.parentComponentId):a,u=t.ParentComponent,d=u===void 0?X_:u,p=t.attrs,g=p===void 0?Oc:p,y=t.displayName&&t.componentId?Ep(t.displayName)+"-"+t.componentId:t.componentId||l,w=r&&e.attrs?Array.prototype.concat(e.attrs,g).filter(Boolean):g,v=new Av(r?e.componentStyle.rules.concat(n):n,w,y),c=void 0,f=function(m,S){return M(d,{...m,forwardedComponent:c,forwardedRef:S})};return f.displayName=s,c=Cr.forwardRef(f),c.displayName=s,c.attrs=w,c.componentStyle=v,c.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Oc,c.styledComponentId=y,c.target=r?e.target:e,c.withComponent=function(m){var S=t.componentId,b=f_(t,["componentId"]),x=S&&S+"-"+(Rc(m)?m:Ep(yg(m))),E=Wn({},b,{attrs:w,componentId:x,ParentComponent:d});return fx(m,E,n)},Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?u_(e.defaultProps,m):m}}),c.toString=function(){return"."+c.styledComponentId},i&&Ig(c,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,styledComponentId:!0,target:!0,withComponent:!0}),c}var Q_=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Cp=function(t){return xp(fx,t)};Q_.forEach(function(e){Cp[e]=Cp(e)});var J_=function(){function e(t,n){fr(this,e),this.rules=t,this.componentId=n,this.isStatic=Tg(t,Oc),Nr.master.hasId(n)||Nr.master.deferredInject(n,[])}return e.prototype.createStyles=function(n,r){var i=ps(this.rules,n,r),o=vg(i,"");r.inject(this.componentId,o)},e.prototype.removeStyles=function(n){var r=this.componentId;n.hasId(r)&&n.remove(r)},e.prototype.renderStyles=function(n,r){this.removeStyles(r),this.createStyles(n,r)},e}();eo&&(window.scCGSHMRCache={});function Z_(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Nf.apply(void 0,[e].concat(n)),o="sc-global-"+kg(JSON.stringify(i)),s=new J_(i,o),a=function(l){Nl(u,l);function u(d){fr(this,u);var p=hs(this,l.call(this,d)),g=p.constructor,y=g.globalStyle,w=g.styledComponentId;return eo&&(window.scCGSHMRCache[w]=(window.scCGSHMRCache[w]||0)+1),p.state={globalStyle:y,styledComponentId:w},p}return u.prototype.componentWillUnmount=function(){window.scCGSHMRCache[this.state.styledComponentId]&&(window.scCGSHMRCache[this.state.styledComponentId]-=1),window.scCGSHMRCache[this.state.styledComponentId]===0&&this.state.globalStyle.removeStyles(this.styleSheet)},u.prototype.render=function(){var p=this;return M(Og,{children:function(g){p.styleSheet=g||Nr.master;var y=p.state.globalStyle;return y.isStatic?(y.renderStyles(p_,p.styleSheet),null):M(Af,{children:function(w){var v=p.constructor.defaultProps,c=Wn({},p.props);return typeof w<"u"&&(c.theme=_g(p.props,w,v)),y.renderStyles(c,p.styleSheet),null}})}})},u}(Cr.Component);return a.globalStyle=s,a.styledComponentId=o,a}var eI=function(t){return t.replace(/\s|\\n/g,"")};function tI(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Nf.apply(void 0,[e].concat(n)),o=ux(kg(eI(JSON.stringify(i))));return new ax(o,vg(i,o,"@keyframes"))}var nI=function(e){var t=Cr.forwardRef(function(n,r){return M(Af,{children:function(i){var o=e.defaultProps,s=_g(n,i,o);return M(e,{...n,theme:s,ref:r})}})});return Ig(t,e),t.displayName="WithTheme("+yg(e)+")",t},rI={StyleSheet:Nr};const iI=Object.freeze(Object.defineProperty({__proto__:null,default:Cp,createGlobalStyle:Z_,css:Nf,isStyledComponent:Al,keyframes:tI,ServerStyleSheet:G_,StyleSheetConsumer:Og,StyleSheetContext:Pg,StyleSheetManager:cx,ThemeConsumer:Af,ThemeContext:$c,ThemeProvider:K_,withTheme:nI,__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS:rI},Symbol.toStringTag,{value:"Module"})),oI=dm(iI);(function(e){(function(t,n){for(var r in n)t[r]=n[r]})(e,function(t){var n={};function r(i){if(n[i])return n[i].exports;var o=n[i]={i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(i,o,s){r.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:s})},r.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},r.t=function(i,o){if(1&o&&(i=r(i)),8&o||4&o&&typeof i=="object"&&i&&i.__esModule)return i;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&o&&typeof i!="string")for(var a in i)r.d(s,a,function(l){return i[l]}.bind(null,a));return s},r.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(o,"a",o),o},r.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},r.p="",r(r.s=3)}([function(t,n){t.exports=T.exports},function(t,n){t.exports=Hb()},function(t,n){t.exports=oI},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MetroSpinner=n.WhisperSpinner=n.ClassicSpinner=n.TraceSpinner=n.JellyfishSpinner=n.MagicSpinner=n.FlapperSpinner=n.HoopSpinner=n.RingSpinner=n.RainbowSpinner=n.PongSpinner=n.CombSpinner=n.GooSpinner=n.SwishSpinner=n.RotateSpinner=n.ClapSpinner=n.FlagSpinner=n.SphereSpinner=n.FillSpinner=n.CubeSpinner=n.ImpulseSpinner=n.DominoSpinner=n.SequenceSpinner=n.PulseSpinner=n.SpiralSpinner=n.CircleSpinner=n.GuardSpinner=n.HeartSpinner=n.StageSpinner=n.FireworkSpinner=n.PushSpinner=n.WaveSpinner=n.BarsSpinner=n.SwapSpinner=n.GridSpinner=n.BallSpinner=void 0;var i=r(4),o=r(5),s=r(6),a=r(7),l=r(8),u=r(9),d=r(10),p=r(11),g=r(12),y=r(13),w=r(14),v=r(15),c=r(16),f=r(17),h=r(18),m=r(19),S=r(20),b=r(21),x=r(22),E=r(23),z=r(24),k=r(25),C=r(26),_=r(27),N=r(28),R=r(29),V=r(30),O=r(31),$=r(32),L=r(33),P=r(34),A=r(35),j=r(36),Q=r(37),oe=r(38),He=r(39);n.BallSpinner=i.BallSpinner,n.GridSpinner=o.GridSpinner,n.SwapSpinner=s.SwapSpinner,n.BarsSpinner=a.BarsSpinner,n.WaveSpinner=l.WaveSpinner,n.PushSpinner=u.PushSpinner,n.FireworkSpinner=d.FireworkSpinner,n.StageSpinner=p.StageSpinner,n.HeartSpinner=g.HeartSpinner,n.GuardSpinner=y.GuardSpinner,n.CircleSpinner=w.CircleSpinner,n.SpiralSpinner=v.SpiralSpinner,n.PulseSpinner=c.PulseSpinner,n.SequenceSpinner=f.SequenceSpinner,n.DominoSpinner=h.DominoSpinner,n.ImpulseSpinner=m.ImpulseSpinner,n.CubeSpinner=S.CubeSpinner,n.FillSpinner=b.FillSpinner,n.SphereSpinner=x.SphereSpinner,n.FlagSpinner=E.FlagSpinner,n.ClapSpinner=z.ClapSpinner,n.RotateSpinner=k.RotateSpinner,n.SwishSpinner=C.SwishSpinner,n.GooSpinner=_.GooSpinner,n.CombSpinner=N.CombSpinner,n.PongSpinner=R.PongSpinner,n.RainbowSpinner=V.RainbowSpinner,n.RingSpinner=O.RingSpinner,n.HoopSpinner=$.HoopSpinner,n.FlapperSpinner=L.FlapperSpinner,n.MagicSpinner=P.MagicSpinner,n.JellyfishSpinner=A.JellyfishSpinner,n.TraceSpinner=j.TraceSpinner,n.ClassicSpinner=Q.ClassicSpinner,n.WhisperSpinner=oe.WhisperSpinner,n.MetroSpinner=He.MetroSpinner},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.BallSpinner=void 0;var i=g([`
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
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.BallSpinner=function(c){var f=c.size,h=c.color,m=c.loading,S=c.sizeUnit;return m&&a.default.createElement(w,{size:f},a.default.createElement(v,{color:h,size:f,sizeUnit:S})," ")},w=d.default.div.withConfig({displayName:"ball__Wrapper",componentId:"sc-1edcqkl-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit}),v=d.default.div.withConfig({displayName:"ball__Ball",componentId:"sc-1edcqkl-1"})(s,function(c){return""+c.size/3+c.sizeUnit},function(c){return""+c.size/3+c.sizeUnit},function(c){return c.color},function(c){return function(f){return(0,u.keyframes)(i,f.size/2,f.sizeUnit,-f.size/2,f.sizeUnit)}(c)});y.defaultProps={loading:!0,size:40,color:"#00ff89",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GridSpinner=void 0;var i=g([`
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
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.GridSpinner=function(c){var f=c.size,h=c.color,m=c.loading,S=c.sizeUnit;return m&&a.default.createElement(w,{size:f,sizeUnit:S},function(b){for(var x=b.countBallsInLine,E=b.color,z=b.size,k=b.sizeUnit,C=[],_=0,N=0;N<x;N++)for(var R=0;R<x;R++)C.push(a.default.createElement(v,{color:E,size:z,x:N*(z/3+z/12),y:R*(z/3+z/12),key:_.toString(),sizeUnit:k})),_++;return C}({countBallsInLine:3,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"grid__Wrapper",componentId:"sc-11vno70-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"grid__Ball",componentId:"sc-11vno70-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/6+c.sizeUnit},function(c){return""+c.size/6+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.y,c.sizeUnit,c.x,c.sizeUnit,c.size/4,c.sizeUnit,c.size/4,c.sizeUnit,c.size/2-c.size/8,c.sizeUnit,c.size/2-c.size/8,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit)});y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SwapSpinner=void 0;var i=g([`
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
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function g(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=function(f){switch(f.index){case 0:return{x:f.size-f.size/4,y:f.y};case 1:return{x:f.x,y:f.y-f.size/2+f.size/8};case 2:return{x:0,y:f.y}}},w=n.SwapSpinner=function(f){var h=f.size,m=f.color,S=f.loading,b=f.sizeUnit;return S&&a.default.createElement(v,{size:h,sizeUnit:b},function(x){for(var E=x.countBalls,z=x.color,k=x.size,C=x.sizeUnit,_=[],N=0;N<E;N++)_.push(a.default.createElement(c,{color:z,size:k,x:N*(k/4+k/8),y:k/2-k/8,key:N.toString(),index:N,sizeUnit:C}));return _}({countBalls:3,color:m,size:h,sizeUnit:b}))},v=d.default.div.withConfig({displayName:"swap__Wrapper",componentId:"sc-1a8o1b-0"})(o,function(f){return""+f.size+f.sizeUnit},function(f){return""+(f.size/2+f.size/8)+f.sizeUnit}),c=d.default.div.withConfig({displayName:"swap__Ball",componentId:"sc-1a8o1b-1"})(s,function(f){return""+f.y+f.sizeUnit},function(f){return""+f.x+f.sizeUnit},function(f){return""+f.size/4+f.sizeUnit},function(f){return""+f.size/4+f.sizeUnit},function(f){return f.color},function(f){return(0,u.keyframes)(i,f.y,f.x,y(f).y,y(f).x,f.y,f.x)});w.defaultProps={loading:!0,size:40,color:"#4b4c56",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.BarsSpinner=void 0;var i=g([`
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
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.BarsSpinner=function(c){var f=c.size,h=c.color,m=c.loading,S=c.sizeUnit;return m&&a.default.createElement(w,{size:f,sizeUnit:S},function(b,x,E,z){for(var k=[],C=0;C<b;C++)k.push(a.default.createElement(v,{color:x,size:E,sizeUnit:z,x:C*(E/5+E/25)-E/12,key:C.toString(),index:C}));return k}(5,h,f,S))},w=d.default.div.withConfig({displayName:"bars__Wrapper",componentId:"sc-1sb659-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"bars__Bar",componentId:"sc-1sb659-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/20+c.sizeUnit},function(c){return""+c.size+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.size/20,c.sizeUnit,c.size/6,c.sizeUnit,c.size/20,c.sizeUnit)},function(c){return .15*c.index});y.defaultProps={loading:!0,size:40,color:"#00ff89",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.WaveSpinner=void 0;var i=g([`
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
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function g(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=(0,u.keyframes)(i),w=n.WaveSpinner=function(f){var h=f.size,m=f.color,S=f.loading,b=f.sizeUnit;return S&&a.default.createElement(v,{size:h,sizeUnit:b},function(x){for(var E=x.countBars,z=x.color,k=x.size,C=x.sizeUnit,_=[],N=0;N<E;N++)_.push(a.default.createElement(c,{color:z,size:k,x:N*(k/5+(k/15-k/100)),y:0,key:N.toString(),index:N,sizeUnit:C}));return _}({countBars:10,color:m,size:h,sizeUnit:b}))},v=d.default.div.withConfig({displayName:"wave__Wrapper",componentId:"sc-8a0z7x-0"})(o,function(f){return""+2.5*f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=d.default.div.withConfig({displayName:"wave__Bar",componentId:"sc-8a0z7x-1"})(s,function(f){return""+(f.y+f.size/10)+f.sizeUnit},function(f){return""+f.x+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return""+f.size/10+f.sizeUnit},function(f){return""+(f.size-f.size/10)+f.sizeUnit},function(f){return f.color},y,function(f){return .15*f.index});w.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PushSpinner=void 0;var i=g([`
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
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.PushSpinner=function(c){var f=c.size,h=c.color,m=c.loading,S=c.sizeUnit;return m&&a.default.createElement(w,{size:f,sizeUnit:S},function(b){for(var x=b.countBars,E=b.color,z=b.size,k=b.sizeUnit,C=[],_=0;_<x;_++)C.push(a.default.createElement(v,{color:E,size:z,x:_*(z/5+(z/15-z/100)),y:0,key:_.toString(),index:_,sizeUnit:k}));return C}({countBars:10,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"push__Wrapper",componentId:"ypksxs-0"})(o,function(c){return""+2.5*c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"push__Bar",componentId:"ypksxs-1"})(s,function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.sizeUnit,c.sizeUnit,c.sizeUnit)},function(c){return .15*c.index});y.defaultProps={loading:!0,size:30,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FireworkSpinner=void 0;var i=p([`
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
`]),s=d(r(0)),a=d(r(1)),l=r(2),u=d(l);function d(v){return v&&v.__esModule?v:{default:v}}function p(v,c){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(c)}}))}var g=(0,l.keyframes)(i),y=n.FireworkSpinner=function(v){var c=v.size,f=v.color,h=v.loading,m=v.sizeUnit;return h&&s.default.createElement(w,{size:c,color:f,sizeUnit:m})},w=u.default.div.withConfig({displayName:"firework__Wrapper",componentId:"sc-1bn5a2-0"})(o,function(v){return""+v.size/10+v.sizeUnit},function(v){return v.color},function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size+v.sizeUnit},g);y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.StageSpinner=void 0;var i=g([`
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
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.StageSpinner=function(c){var f=c.size,h=c.color,m=c.loading,S=c.sizeUnit;return m&&a.default.createElement(w,{size:f,sizeUnit:S},function(b){for(var x=b.countBalls,E=b.color,z=b.size,k=b.sizeUnit,C=[],_=0,N=0;N<x;N++)C.push(a.default.createElement(v,{color:E,size:z,index:N,x:N*(z/2.5),y:z/2-z/10,key:_.toString(),sizeUnit:k})),_++;return C}({countBalls:3,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"stage__Wrapper",componentId:"sc-161krao-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"stage__Ball",componentId:"sc-161krao-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.y,c.sizeUnit,c.x,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit,c.y+c.size/2,c.sizeUnit,c.x,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit)},function(c){return .2*c.index});y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.HeartSpinner=void 0;var i=p([`
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
`]),s=d(r(0)),a=d(r(1)),l=r(2),u=d(l);function d(v){return v&&v.__esModule?v:{default:v}}function p(v,c){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(c)}}))}var g=(0,l.keyframes)(i),y=n.HeartSpinner=function(v){var c=v.size,f=v.color,h=v.loading,m=v.sizeUnit;return h&&s.default.createElement(w,{size:c,color:f,sizeUnit:m})},w=u.default.div.withConfig({displayName:"heart__Wrapper",componentId:"sc-12jb06u-0"})(o,function(v){return""+v.size+v.sizeUnit},function(v){return""+(v.size-v.size/10)+v.sizeUnit},g,function(v){return""+v.size/20+v.sizeUnit},function(v){return""+v.size/2+v.sizeUnit},function(v){return""+v.size/2+v.sizeUnit},function(v){return""+(v.size-v.size/5)+v.sizeUnit},function(v){return v.color},function(v){return""+v.size/2+v.sizeUnit},function(v){return""+v.size/2+v.sizeUnit});y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GuardSpinner=void 0;var i=w([`
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
`]),u=y(r(0)),d=y(r(1)),p=r(2),g=y(p);function y(b){return b&&b.__esModule?b:{default:b}}function w(b,x){return Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(x)}}))}var v=(0,p.keyframes)(i),c=n.GuardSpinner=function(b){var x=b.size,E=b.backColor,z=b.frontColor,k=b.loading,C=b.sizeUnit;return k&&u.default.createElement(f,{size:x,sizeUnit:C},function(_){for(var N=_.countCubesInLine,R=_.backColor,V=_.frontColor,O=_.size,$=_.sizeUnit,L=[],P=0,A=0;A<N;A++)for(var j=0;j<N;j++)L.push(u.default.createElement(h,{size:O,x:A*(O/4+O/8),y:j*(O/4+O/8),key:P.toString(),sizeUnit:$},u.default.createElement(m,{size:O,index:P,sizeUnit:$},u.default.createElement(S,{front:!0,size:O,color:V,sizeUnit:$}),u.default.createElement(S,{left:!0,size:O,color:R,sizeUnit:$})))),P++;return L}({countCubesInLine:3,backColor:E,frontColor:z,size:x,sizeUnit:C}))},f=g.default.div.withConfig({displayName:"guard__Wrapper",componentId:"sc-13axfn9-0"})(o,function(b){return""+b.size+b.sizeUnit},function(b){return""+b.size+b.sizeUnit},function(b){return""+3*b.size+b.sizeUnit}),h=g.default.div.withConfig({displayName:"guard__CubeWrapper",componentId:"sc-13axfn9-1"})(s,function(b){return""+b.y+b.sizeUnit},function(b){return""+b.x+b.sizeUnit},function(b){return""+b.size+b.sizeUnit},function(b){return""+b.size+b.sizeUnit}),m=g.default.div.withConfig({displayName:"guard__Cube",componentId:"sc-13axfn9-2"})(a,function(b){return""+b.size/4+b.sizeUnit},function(b){return""+b.size/4+b.sizeUnit},v,function(b){return .125*b.index}),S=g.default.div.withConfig({displayName:"guard__Side",componentId:"sc-13axfn9-3"})(l,function(b){return b.color},function(b){return b.front?0:-90},function(b){return""+b.size/8+b.sizeUnit});c.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#373846",sizeUnit:"px"},c.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CircleSpinner=void 0;var i=p([`
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
`]),s=d(r(0)),a=d(r(1)),l=r(2),u=d(l);function d(v){return v&&v.__esModule?v:{default:v}}function p(v,c){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(c)}}))}var g=(0,l.keyframes)(i),y=n.CircleSpinner=function(v){var c=v.size,f=v.color,h=v.loading,m=v.sizeUnit;return h&&s.default.createElement(w,{size:c,color:f,sizeUnit:m})},w=u.default.div.withConfig({displayName:"circle__Wrapper",componentId:"sc-16bbsoy-0"})(o,function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size/5+v.sizeUnit},function(v){return v.color},g);y.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},y.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SpiralSpinner=void 0;var i=w([`
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
`]),u=y(r(0)),d=y(r(1)),p=r(2),g=y(p);function y(b){return b&&b.__esModule?b:{default:b}}function w(b,x){return Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(x)}}))}var v=(0,p.keyframes)(i),c=n.SpiralSpinner=function(b){var x=b.size,E=b.backColor,z=b.frontColor,k=b.loading,C=b.sizeUnit;return k&&u.default.createElement(f,{size:x,sizeUnit:C},function(_){for(var N=_.countCubesInLine,R=_.backColor,V=_.frontColor,O=_.size,$=_.sizeUnit,L=[],P=0,A=0;A<N;A++)L.push(u.default.createElement(h,{x:A*(O/4),y:0,key:P.toString(),sizeUnit:$},u.default.createElement(m,{size:O,index:P,sizeUnit:$},u.default.createElement(S,{front:!0,size:O,color:V,sizeUnit:$}),u.default.createElement(S,{back:!0,size:O,color:V,sizeUnit:$}),u.default.createElement(S,{bottom:!0,size:O,color:R,sizeUnit:$}),u.default.createElement(S,{top:!0,size:O,color:R,sizeUnit:$})))),P++;return L}({countCubesInLine:4,backColor:E,frontColor:z,size:x,sizeUnit:C}))},f=g.default.div.withConfig({displayName:"spiral__Wrapper",componentId:"sc-1898s0q-0"})(o,function(b){return""+b.size+b.sizeUnit},function(b){return""+b.size/4+b.sizeUnit},function(b){return""+3*b.size+b.sizeUnit}),h=g.default.div.withConfig({displayName:"spiral__CubeWrapper",componentId:"sc-1898s0q-1"})(s,function(b){return""+b.y+b.sizeUnit},function(b){return""+b.x+b.sizeUnit}),m=g.default.div.withConfig({displayName:"spiral__Cube",componentId:"sc-1898s0q-2"})(a,function(b){return""+b.size/4+b.sizeUnit},function(b){return""+b.size/4+b.sizeUnit},v,function(b){return .15*b.index}),S=g.default.div.withConfig({displayName:"spiral__Side",componentId:"sc-1898s0q-3"})(l,function(b){return b.color},function(b){return function(x){return x.top?90:x.bottom?-90:0}(b)},function(b){return b.back?180:0},function(b){return""+b.size/8+b.sizeUnit});c.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PulseSpinner=void 0;var i=g([`
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
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function g(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=(0,u.keyframes)(i),w=n.PulseSpinner=function(f){var h=f.size,m=f.color,S=f.loading,b=f.sizeUnit;return S&&a.default.createElement(v,{size:h,sizeUnit:b},function(x){for(var E=x.countCubeInLine,z=x.color,k=x.size,C=x.sizeUnit,_=[],N=0,R=0;R<E;R++)_.push(a.default.createElement(c,{color:z,size:k,x:R*(k/3+k/15),y:0,key:N.toString(),index:R,sizeUnit:C})),N++;return _}({countCubeInLine:3,color:m,size:h,sizeUnit:b}))},v=d.default.div.withConfig({displayName:"pulse__Wrapper",componentId:"sc-1yr0qmr-0"})(o,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size/2.5+f.sizeUnit}),c=d.default.div.withConfig({displayName:"pulse__Cube",componentId:"sc-1yr0qmr-1"})(s,function(f){return""+f.y+f.sizeUnit},function(f){return""+f.x+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return""+f.size/2.5+f.sizeUnit},function(f){return f.color},y,function(f){return .15*f.index});w.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SequenceSpinner=void 0;var i=w([`
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
`]),u=y(r(0)),d=y(r(1)),p=r(2),g=y(p);function y(S){return S&&S.__esModule?S:{default:S}}function w(S,b){return Object.freeze(Object.defineProperties(S,{raw:{value:Object.freeze(b)}}))}var v=n.SequenceSpinner=function(S){var b=S.size,x=S.backColor,E=S.frontColor,z=S.loading,k=S.sizeUnit;return z&&u.default.createElement(c,{size:b,sizeUnit:k},function(C){for(var _=C.countCubesInLine,N=C.backColor,R=C.frontColor,V=C.size,O=C.sizeUnit,$=[],L=0,P=0;P<_;P++)$.push(u.default.createElement(f,{x:P*(V/8+V/11),y:0,key:L.toString(),sizeUnit:O},u.default.createElement(h,{size:V,index:L,sizeUnit:O},u.default.createElement(m,{front:!0,size:V,color:R,sizeUnit:O}),u.default.createElement(m,{left:!0,size:V,color:N,sizeUnit:O})))),L++;return $}({countCubesInLine:5,backColor:x,frontColor:E,size:b,sizeUnit:k}))},c=g.default.div.withConfig({displayName:"sequence__Wrapper",componentId:"sc-61fmm1-0"})(o,function(S){return""+S.size+S.sizeUnit},function(S){return""+S.size/1.75+S.sizeUnit},function(S){return""+3*S.size+S.sizeUnit}),f=g.default.div.withConfig({displayName:"sequence__CubeWrapper",componentId:"sc-61fmm1-1"})(s,function(S){return""+S.y+S.sizeUnit},function(S){return""+S.x+S.sizeUnit}),h=g.default.div.withConfig({displayName:"sequence__Cube",componentId:"sc-61fmm1-2"})(a,function(S){return""+S.size/8+S.sizeUnit},function(S){return""+S.size/1.75+S.sizeUnit},function(S){return(0,p.keyframes)(i,S.size,S.sizeUnit,S.size,S.sizeUnit)},function(S){return .1*S.index}),m=g.default.div.withConfig({displayName:"sequence__Side",componentId:"sc-61fmm1-3"})(l,function(S){return S.color},function(S){return S.front?0:-90},function(S){return""+S.size/16+S.sizeUnit});v.defaultProps={loading:!0,size:40,frontColor:"#4b4c56",backColor:"#00ff89",sizeUnit:"px"},v.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.DominoSpinner=void 0;var i=g([`
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
`]),o=g([`
    position: relative;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.DominoSpinner=function(c){var f=c.size,h=c.color,m=c.loading,S=c.sizeUnit,b=function(x,E){for(var z=[],k=0;k<=x+1;k++)z.push(E/8*-k);return z}(7,f);return m&&a.default.createElement(w,{size:f,sizeUnit:S},function(x){for(var E=x.countBars,z=x.rotatesPoints,k=x.translatesPoints,C=x.color,_=x.size,N=x.sizeUnit,R=[],V=0;V<E;V++)R.push(a.default.createElement(v,{color:C,size:_,translatesPoints:k,rotate:z[V],key:V.toString(),index:V,sizeUnit:N}));return R}({countBars:7,rotatesPoints:[0,0,0,10,40,60,70],translatesPoints:b,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"domino__Wrapper",componentId:"sc-81zu9-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),v=d.default.div.withConfig({displayName:"domino__Bar",componentId:"sc-81zu9-1"})(s,function(c){return""+c.size/30+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.translatesPoints[0],c.sizeUnit,c.translatesPoints[1],c.sizeUnit,c.translatesPoints[2],c.sizeUnit,c.translatesPoints[3],c.sizeUnit,c.translatesPoints[4],c.sizeUnit,c.translatesPoints[5],c.sizeUnit,c.translatesPoints[6],c.sizeUnit,c.translatesPoints[7],c.sizeUnit,c.translatesPoints[8],c.sizeUnit)},function(c){return-.42*c.index},function(c){return""+(c.size-15*c.index)+c.sizeUnit},function(c){return c.rotate});y.defaultProps={loading:!0,size:100,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ImpulseSpinner=void 0;var i=g([`
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
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.ImpulseSpinner=function(c){var f=c.size,h=c.frontColor,m=c.backColor,S=c.loading,b=c.sizeUnit;return S&&a.default.createElement(w,{size:f,sizeUnit:b},function(x){for(var E=x.countBalls,z=x.frontColor,k=x.backColor,C=x.size,_=x.sizeUnit,N=[],R=0;R<E;R++)N.push(a.default.createElement(v,{frontColor:z,backColor:k,size:C,x:R*(C/5+C/5),y:0,key:R.toString(),index:R,sizeUnit:_}));return N}({countBalls:3,frontColor:h,backColor:m,size:f,sizeUnit:b}))},w=d.default.div.withConfig({displayName:"impulse__Wrapper",componentId:"sc-1eafdhu-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),v=d.default.div.withConfig({displayName:"impulse__Ball",componentId:"sc-1eafdhu-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.frontColor},function(c){return(0,u.keyframes)(i,c.backColor,c.frontColor,c.backColor,c.backColor)},function(c){return .125*c.index});y.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,frontColor:l.default.string,backColor:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CubeSpinner=void 0;var i=w([`
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
`]),u=y(r(0)),d=y(r(1)),p=r(2),g=y(p);function y(b){return b&&b.__esModule?b:{default:b}}function w(b,x){return Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(x)}}))}var v=(0,p.keyframes)(i),c=n.CubeSpinner=function(b){var x=b.size,E=b.backColor,z=b.frontColor,k=b.loading,C=b.sizeUnit;return k&&u.default.createElement(f,{size:x,sizeUnit:C},u.default.createElement(h,{x:0,y:0,sizeUnit:C},u.default.createElement(m,{size:x,sizeUnit:C},u.default.createElement(S,{front:!0,size:x,color:z,sizeUnit:C}),u.default.createElement(S,{back:!0,size:x,color:z,sizeUnit:C}),u.default.createElement(S,{bottom:!0,size:x,color:E,sizeUnit:C}),u.default.createElement(S,{top:!0,size:x,color:E,sizeUnit:C}),u.default.createElement(S,{left:!0,size:x,color:E,sizeUnit:C}),u.default.createElement(S,{right:!0,size:x,color:E,sizeUnit:C}))))},f=g.default.div.withConfig({displayName:"cube__Wrapper",componentId:"sc-1iks05k-0"})(o,function(b){return""+b.size+b.sizeUnit},function(b){return""+b.size+b.sizeUnit},function(b){return""+4*b.size+b.sizeUnit}),h=g.default.div.withConfig({displayName:"cube__CubeWrapper",componentId:"sc-1iks05k-1"})(s,function(b){return""+b.y+b.sizeUnit},function(b){return""+b.x+b.sizeUnit}),m=g.default.div.withConfig({displayName:"cube__Cube",componentId:"sc-1iks05k-2"})(a,function(b){return""+b.size+b.sizeUnit},function(b){return""+b.size+b.sizeUnit},v),S=g.default.div.withConfig({displayName:"cube__Side",componentId:"sc-1iks05k-3"})(l,function(b){return b.color},function(b){return function(x){return x.top?90:x.bottom?-90:0}(b)},function(b){return function(x){return x.left?90:x.right?-90:x.back?180:0}(b)},function(b){return""+b.size/2+b.sizeUnit});c.defaultProps={loading:!0,size:25,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FillSpinner=void 0;var i=y([`
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
`]),o=y([`
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
`]),s=y([`
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
`]),a=y([`
    width: 100%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`],[`
    width: 100%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`]),l=g(r(0)),u=g(r(1)),d=r(2),p=g(d);function g(m){return m&&m.__esModule?m:{default:m}}function y(m,S){return Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(S)}}))}var w=(0,d.keyframes)(i),v=(0,d.keyframes)(o),c=n.FillSpinner=function(m){var S=m.size,b=m.color,x=m.loading,E=m.sizeUnit;return x&&l.default.createElement(f,{size:S,color:b,sizeUnit:E},l.default.createElement(h,{color:b,size:S,sizeUnit:E}))},f=p.default.div.withConfig({displayName:"fill__Wrapper",componentId:"ehv7z4-0"})(s,function(m){return""+m.size+m.sizeUnit},function(m){return""+m.size+m.sizeUnit},function(m){return""+m.size/8+m.sizeUnit},function(m){return m.color},w),h=p.default.div.withConfig({displayName:"fill__Plane",componentId:"ehv7z4-1"})(a,function(m){return m.color},v);c.defaultProps={loading:!0,size:20,color:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SphereSpinner=void 0;var i=y([`
    to{
        transform: rotate(360deg);
    }
`],[`
    to{
        transform: rotate(360deg);
    }
`]),o=y([`
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
`]),s=y([`
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
`]),a=y([`
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
`]),l=g(r(0)),u=g(r(1)),d=r(2),p=g(d);function g(h){return h&&h.__esModule?h:{default:h}}function y(h,m){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(m)}}))}var w=(0,d.keyframes)(i),v=n.SphereSpinner=function(h){var m=h.size,S=h.color,b=h.loading,x=h.sizeUnit,E=m/2,z=m/5;return b&&l.default.createElement(c,{size:m,sizeUnit:x},function(k){for(var C=k.countBalls,_=k.radius,N=k.angle,R=k.color,V=k.size,O=k.ballSize,$=k.sizeUnit,L=[],P=O/2,A=0;A<C;A++){var j=Math.sin(N*A*(Math.PI/180))*_-P,Q=Math.cos(N*A*(Math.PI/180))*_-P;L.push(l.default.createElement(f,{color:R,ballSize:O,size:V,x:j,y:Q,key:A.toString(),index:A,sizeUnit:$}))}return L}({countBalls:7,radius:E,angle:360/7,color:S,size:m,ballSize:z,sizeUnit:x}))},c=p.default.div.withConfig({displayName:"sphere__Wrapper",componentId:"sc-1t5xu9p-0"})(s,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},w),f=p.default.div.withConfig({displayName:"sphere__Ball",componentId:"sc-1t5xu9p-1"})(a,function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return h.color},function(h){return""+h.x+h.sizeUnit},function(h){return""+h.y+h.sizeUnit},function(h){return function(m){return(0,d.keyframes)(o,m.x,m.sizeUnit,m.y,m.sizeUnit,m.size/12,m.sizeUnit,m.size/12,m.sizeUnit,m.size/12,m.sizeUnit,m.size/12,m.sizeUnit,m.x,m.sizeUnit,m.y,m.sizeUnit)}(h)},function(h){return .3*h.index});v.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},v.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FlagSpinner=void 0;var i=y([`
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
`]),o=y([`
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
`]),s=y([`
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
`]),a=y([`
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
`]),l=g(r(0)),u=g(r(1)),d=r(2),p=g(d);function g(h){return h&&h.__esModule?h:{default:h}}function y(h,m){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(m)}}))}var w=n.FlagSpinner=function(h){var m=h.size,S=h.color,b=h.loading,x=h.sizeUnit;return b&&l.default.createElement(v,{size:m,sizeUnit:x},function(E){for(var z=E.countPlaneInLine,k=E.color,C=E.size,_=E.sizeUnit,N=[],R=[],V=0,O=0;O<z;O++){for(var $=0;$<z;$++)R.push(l.default.createElement(f,{color:k,size:C,x:O*(C/6+C/9),y:$*(C/6+C/9)+C/10,key:O+$.toString(),index:V,sizeUnit:_})),V++;N.push(l.default.createElement(c,{index:V,key:V.toString(),size:C,sizeUnit:_},[].concat(R))),R.length=0}return N}({countPlaneInLine:4,color:S,size:m,sizeUnit:x}))},v=p.default.div.withConfig({displayName:"flag__Wrapper",componentId:"sc-3eh05c-0"})(o,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit}),c=p.default.div.withConfig({displayName:"flag__Line",componentId:"sc-3eh05c-1"})(s,function(h){return(0,d.keyframes)(i,-h.size/5,h.sizeUnit)},function(h){return .05*h.index}),f=p.default.div.withConfig({displayName:"flag__Plane",componentId:"sc-3eh05c-2"})(a,function(h){return""+h.y+h.sizeUnit},function(h){return""+h.x+h.sizeUnit},function(h){return""+h.size/6+h.sizeUnit},function(h){return""+h.size/6+h.sizeUnit},function(h){return h.color});w.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},w.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ClapSpinner=void 0;var i=y([`
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
`]),o=y([`
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
`]),s=y([`
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
`]),a=y([`
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
`]),l=g(r(0)),u=g(r(1)),d=r(2),p=g(d);function g(h){return h&&h.__esModule?h:{default:h}}function y(h,m){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(m)}}))}var w=(0,d.keyframes)(i),v=n.ClapSpinner=function(h){var m=h.size,S=h.frontColor,b=h.backColor,x=h.loading,E=h.sizeUnit,z=m/2,k=m/5;return x&&l.default.createElement(c,{size:m,sizeUnit:E},function(C){for(var _=C.countBalls,N=C.radius,R=C.angle,V=C.frontColor,O=C.backColor,$=C.size,L=C.ballSize,P=C.sizeUnit,A=[],j=L/2,Q=0;Q<_;Q++){var oe=Math.sin(R*Q*(Math.PI/180))*N-j,He=Math.cos(R*Q*(Math.PI/180))*N-j;A.push(l.default.createElement(f,{frontColor:V,backColor:O,ballSize:L,size:$,sizeUnit:P,x:oe,y:He,key:Q.toString(),index:Q}))}return A}({countBalls:7,radius:z,angle:360/7,frontColor:S,backColor:b,size:m,ballSize:k,sizeUnit:E}))},c=p.default.div.withConfig({displayName:"clap__Wrapper",componentId:"sc-12p9tb5-0"})(s,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},w),f=p.default.div.withConfig({displayName:"clap__Ball",componentId:"sc-12p9tb5-1"})(a,function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return h.frontColor},function(h){return""+h.x+h.sizeUnit},function(h){return""+h.y+h.sizeUnit},function(h){return function(m){return(0,d.keyframes)(o,m.x,m.sizeUnit,m.y,m.sizeUnit,m.x,m.sizeUnit,m.y,m.sizeUnit,m.x,m.sizeUnit,m.y,m.sizeUnit,m.backColor,m.x,m.sizeUnit,m.y,m.sizeUnit)}(h)},function(h){return .2*h.index});v.defaultProps={loading:!0,size:30,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:u.default.bool,size:u.default.number,frontColor:u.default.string,backColor:u.default.string,sizeUnit:u.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RotateSpinner=void 0;var i=g([`
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
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function g(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=(0,u.keyframes)(i),w=n.RotateSpinner=function(f){var h=f.size,m=f.color,S=f.loading,b=f.sizeUnit,x=h/2,E=h/5;return S&&a.default.createElement(v,{size:h,sizeUnit:b},function(z){for(var k=z.countBalls,C=z.radius,_=z.angle,N=z.color,R=z.size,V=z.ballSize,O=z.sizeUnit,$=[],L=V/2,P=0;P<k;P++){var A=Math.sin(_*P*(Math.PI/180))*C-L,j=Math.cos(_*P*(Math.PI/180))*C-L;$.push(a.default.createElement(c,{color:N,ballSize:V,size:R,x:A,y:j,key:P.toString(),index:P,sizeUnit:O}))}return $}({countBalls:8,radius:x,angle:45,color:m,size:h,ballSize:E,sizeUnit:b}))},v=d.default.div.withConfig({displayName:"rotate__Wrapper",componentId:"sc-1b62bh9-0"})(o,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=d.default.div.withConfig({displayName:"rotate__Ball",componentId:"sc-1b62bh9-1"})(s,function(f){return""+f.ballSize+f.sizeUnit},function(f){return""+f.ballSize+f.sizeUnit},function(f){return f.color},y,function(f){return .3*f.index});w.defaultProps={loading:!0,size:45,color:"#00ff89",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SwishSpinner=void 0;var i=g([`
    50% {
        transform: scale(0);
        background-color: `,`;
    }
`],[`
    50% {
        transform: scale(0);
        background-color: `,`;
    }
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.SwishSpinner=function(c){var f=c.size,h=c.frontColor,m=c.backColor,S=c.loading,b=c.sizeUnit;return S&&a.default.createElement(w,{size:f,sizeUnit:b},function(x){for(var E=x.countBallsInLine,z=x.frontColor,k=x.backColor,C=x.size,_=x.sizeUnit,N=[],R=0,V=0;V<E;V++)for(var O=0;O<E;O++)N.push(a.default.createElement(v,{frontColor:z,backColor:k,size:C,x:V*(C/3+C/15),y:O*(C/3+C/15),key:R.toString(),index:R,sizeUnit:_})),R++;return N}({countBallsInLine:3,frontColor:h,backColor:m,size:f,sizeUnit:b}))},w=d.default.div.withConfig({displayName:"swish__Wrapper",componentId:"e0szto-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"swish__Ball",componentId:"e0szto-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.frontColor},function(c){return(0,u.keyframes)(i,c.backColor)},function(c){return .1*c.index});y.defaultProps={loading:!0,size:40,frontColor:"#4b4c56",backColor:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,frontColor:l.default.string,backColor:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GooSpinner=void 0;var i=w([`
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
`]),u=y(r(0)),d=y(r(1)),p=r(2),g=y(p);function y(m){return m&&m.__esModule?m:{default:m}}function w(m,S){return Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(S)}}))}var v=n.GooSpinner=function(m){var S=m.size,b=m.color,x=m.loading,E=m.sizeUnit;return x&&u.default.createElement(c,{size:S,sizeUnit:E},u.default.createElement(f,{size:S,sizeUnit:E},function(z){for(var k=z.countBalls,C=z.color,_=z.size,N=z.sizeUnit,R=[],V=_/4,O=[-V,V],$=0;$<k;$++)R.push(u.default.createElement(h,{color:C,size:_,x:_/2-_/6,y:_/2-_/6,key:$.toString(),translateTo:O[$],index:$,sizeUnit:N}));return R}({countBalls:2,color:b,size:S,sizeUnit:E})),u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1"},u.default.createElement("defs",null,u.default.createElement("filter",{id:"goo"},u.default.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"6",result:"blur"}),u.default.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -5",result:"goo"}),u.default.createElement("feBlend",{in:"SourceGraphic",in2:"goo"})))))},c=g.default.div.withConfig({displayName:"goo__Wrapper",componentId:"sc-12keask-0"})(s,function(m){return""+m.size+m.sizeUnit},function(m){return""+m.size+m.sizeUnit}),f=g.default.div.withConfig({displayName:"goo__BallsWrapper",componentId:"sc-12keask-1"})(a,function(m){return""+m.size+m.sizeUnit},function(m){return""+m.size+m.sizeUnit},function(){return(0,p.keyframes)(i)}),h=g.default.div.withConfig({displayName:"goo__Ball",componentId:"sc-12keask-2"})(l,function(m){return""+m.y+m.sizeUnit},function(m){return""+m.x+m.sizeUnit},function(m){return""+m.size/3+m.sizeUnit},function(m){return""+m.size/3+m.sizeUnit},function(m){return m.color},function(m){return(0,p.keyframes)(o,m.translateTo,m.sizeUnit)});v.defaultProps={loading:!0,size:55,color:"#fff",sizeUnit:"px"},v.propTypes={loading:d.default.bool,size:d.default.number,color:d.default.string,sizeUnit:d.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CombSpinner=void 0;var i=g([`
    to {
        transform: rotate(450deg);
    }
`],[`
    to {
        transform: rotate(450deg);
    }
`]),o=g([`
    position: relative;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.CombSpinner=function(c){var f=c.size,h=c.color,m=c.loading,S=c.sizeUnit,b=f/9;return m&&a.default.createElement(w,{size:f,sizeUnit:S},function(x){for(var E=x.countBars,z=x.color,k=x.size,C=x.sizeUnit,_=[],N=0;N<E;N++)_.push(a.default.createElement(v,{color:z,size:k,key:N.toString(),sizeUnit:C,index:N}));return _}({countBars:b,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"comb__Wrapper",componentId:"x9t4ur-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),v=d.default.div.withConfig({displayName:"comb__Bar",componentId:"x9t4ur-1"})(s,function(c){return""+c.size/60+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+9*c.index+c.sizeUnit},function(c){return c.color},function(){return(0,u.keyframes)(i)},function(c){return .05*c.index});y.defaultProps={loading:!0,size:100,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PongSpinner=void 0;var i=w([`
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
`]),u=y(r(0)),d=y(r(1)),p=r(2),g=y(p);function y(m){return m&&m.__esModule?m:{default:m}}function w(m,S){return Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(S)}}))}var v=n.PongSpinner=function(m){var S=m.size,b=m.color,x=m.loading,E=m.sizeUnit;return x&&u.default.createElement(c,{size:S,sizeUnit:E},u.default.createElement(h,{left:!0,color:b,size:S,sizeUnit:E}),u.default.createElement(f,{color:b,size:S,sizeUnit:E}),u.default.createElement(h,{right:!0,color:b,size:S,sizeUnit:E}))},c=g.default.div.withConfig({displayName:"pong__Wrapper",componentId:"sc-1lbqo08-0"})(s,function(m){return""+m.size+m.sizeUnit},function(m){return""+m.size/1.75+m.sizeUnit}),f=g.default.div.withConfig({displayName:"pong__Ball",componentId:"sc-1lbqo08-1"})(a,function(m){return""+m.size/8+m.sizeUnit},function(m){return""+m.size/8+m.sizeUnit},function(m){return m.color},function(m){return function(S){return(0,p.keyframes)(o,S.size/3.5-S.size/8,S.sizeUnit,S.size/12,S.sizeUnit,S.size/3.5,S.sizeUnit,S.size-S.size/8,S.sizeUnit,S.size/1.75-S.size/8,S.sizeUnit,S.size/12,S.sizeUnit,S.size/3.5,S.sizeUnit,S.size-S.size/8,S.sizeUnit,S.size/3.5-S.size/8,S.sizeUnit,S.size/12,S.sizeUnit)}(m)}),h=g.default.div.withConfig({displayName:"pong__Player",componentId:"sc-1lbqo08-2"})(l,function(m){return""+m.size/12+m.sizeUnit},function(m){return""+m.size/3+m.sizeUnit},function(m){return m.color},function(m){return m.left?0:m.size},function(m){return m.right?0:m.size},function(m){return function(S){return(0,p.keyframes)(i,S.left?0:S.size/3.5,S.sizeUnit,S.left?S.size/3.5:0,S.sizeUnit,S.left?0:S.size/3.5,S.sizeUnit)}(m)});v.defaultProps={loading:!0,size:60,color:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:d.default.bool,size:d.default.number,color:d.default.string,sizeUnit:d.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RainbowSpinner=void 0;var i=g([`
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
`]),o=g([`
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.RainbowSpinner=function(c){var f=c.size,h=c.color,m=c.loading,S=c.sizeUnit;return m&&a.default.createElement(w,{size:f,sizeUnit:S},a.default.createElement(v,{size:f,color:h,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"rainbow__Wrapper",componentId:"sc-1ugdhww-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit}),v=d.default.div.withConfig({displayName:"rainbow__Line",componentId:"sc-1ugdhww-1"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit},function(c){return c.color},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.sizeUnit,c.sizeUnit,c.sizeUnit,c.sizeUnit,c.sizeUnit)});y.defaultProps={loading:!0,size:50,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RingSpinner=void 0;var i=y([`
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
`]),o=y([`
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
`]),s=y([`
    width: `,`;
    height: `,`;
`],[`
    width: `,`;
    height: `,`;
`]),a=y([`
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
`]),l=g(r(0)),u=g(r(1)),d=r(2),p=g(d);function g(f){return f&&f.__esModule?f:{default:f}}function y(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var w=n.RingSpinner=function(f){var h=f.size,m=f.color,S=f.loading,b=f.sizeUnit;return S&&l.default.createElement(v,{size:h,sizeUnit:b},l.default.createElement(c,{size:h,color:m,sizeUnit:b}))},v=p.default.div.withConfig({displayName:"ring__Wrapper",componentId:"sc-1ki0q4s-0"})(s,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=p.default.div.withConfig({displayName:"ring__Circle",componentId:"sc-1ki0q4s-1"})(a,function(f){return"inset 0 0 0 "+f.size/10+f.sizeUnit+" "+f.color},function(f){return(0,d.keyframes)(i,f.size/10,f.sizeUnit,f.color,f.color)},function(f){return f.color},function(f){return(0,d.keyframes)(o,f.color,f.size/10,f.sizeUnit,f.color)});w.defaultProps={loading:!0,size:30,color:"#00ff89",sizeUnit:"px"},w.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.HoopSpinner=void 0;var i=g([`
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
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.HoopSpinner=function(c){var f=c.size,h=c.color,m=c.loading,S=c.sizeUnit;return m&&a.default.createElement(w,{size:f,sizeUnit:S},function(b){for(var x=b.countBallsInLine,E=b.color,z=b.size,k=b.sizeUnit,C=[],_=0,N=0;N<x;N++)C.push(a.default.createElement(v,{color:E,size:z,key:_.toString(),index:N,sizeUnit:k})),_++;return C}({countBallsInLine:6,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"hoop__Wrapper",componentId:"sc-6dao9o-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"hoop__Ball",componentId:"sc-6dao9o-1"})(s,function(c){return""+c.size/1.5+c.sizeUnit},function(c){return""+c.size/1.5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return 1-.2*c.index},function(c){return(0,u.keyframes)(i,c.color,"rotateX(65deg) rotateY(45deg) translateZ(-"+1.5*c.size+c.sizeUnit+") scale(0.1)","rotateX(65deg) rotateY(-45deg) translateZ(-"+1.5*c.size+c.sizeUnit+") scale(0.1)")},function(c){return 200*c.index});y.defaultProps={loading:!0,size:45,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FlapperSpinner=void 0;var i=g([`
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
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.FlapperSpinner=function(c){var f=c.size,h=c.color,m=c.loading,S=c.sizeUnit,b=f/2,x=f/1.5;return m&&a.default.createElement(w,{size:f,sizeUnit:S},function(E){for(var z=E.countBalls,k=E.radius,C=E.angle,_=E.color,N=E.size,R=E.ballSize,V=E.sizeUnit,O=[],$=R/2,L=0;L<z;L++){var P=Math.sin(C*L*(Math.PI/180))*k-$,A=Math.cos(C*L*(Math.PI/180))*k-$;O.push(a.default.createElement(v,{color:_,ballSize:R,size:N,x:P,y:A,key:L.toString(),index:L,sizeUnit:V}))}return O}({countBalls:7,radius:b,angle:360/7,color:h,size:f,ballSize:x,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"flapper__Wrapper",componentId:"kzbmuk-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"flapper__Ball",componentId:"kzbmuk-1"})(s,function(c){return""+c.size/2+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit},function(c){return""+c.ballSize+c.sizeUnit},function(c){return""+c.ballSize+c.sizeUnit},function(c){return c.color},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.y+c.sizeUnit},function(c){return function(f){return(0,u.keyframes)(i,f.x,f.sizeUnit,f.y,f.sizeUnit)}(c)},function(c){return .1*c.index});y.defaultProps={loading:!0,size:30,color:"#00ff89",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MagicSpinner=void 0;var i=g([`
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
`],[`
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.MagicSpinner=function(c){var f=c.size,h=c.color,m=c.loading,S=c.sizeUnit,b=f/12;return m&&a.default.createElement(w,{size:f,sizeUnit:S},function(x){for(var E=x.countBalls,z=x.color,k=x.size,C=x.sizeUnit,_=[],N=0;N<E;N++)_.push(a.default.createElement(v,{color:z,countBalls:E,size:k,key:N.toString(),index:N,sizeUnit:C}));return _}({countBalls:b,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"magic__Wrapper",componentId:"dtlj8d-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"magic__Ball",componentId:"dtlj8d-1"})(s,function(c){return""+c.index*(c.size/c.countBalls)+c.sizeUnit},function(c){return""+c.index*(c.size/c.countBalls)+c.sizeUnit},function(c){return c.color},function(){return(0,u.keyframes)(i)},function(c){return .05*c.index});y.defaultProps={loading:!0,size:70,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.JellyfishSpinner=void 0;var i=g([`
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
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.JellyfishSpinner=function(c){var f=c.size,h=c.color,m=c.loading,S=c.sizeUnit;return m&&a.default.createElement(w,{size:f,sizeUnit:S},function(b){for(var x=b.countBalls,E=b.color,z=b.size,k=b.sizeUnit,C=[],_=0,N=0;N<x;N++)C.push(a.default.createElement(v,{color:E,size:z,countRings:x,key:_.toString(),index:N,sizeUnit:k})),_++;return C}({countBalls:6,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"jellyfish__Wrapper",componentId:"qquojd-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"jellyfish__Ring",componentId:"qquojd-1"})(s,function(c){return""+c.index*(c.size/c.countRings)+c.sizeUnit},function(c){return""+c.index*(c.size/c.countRings)/2+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,"translateY("+-c.size/5+c.sizeUnit+");","translateY("+c.size/4+c.sizeUnit+")","translateY("+-c.size/5+c.sizeUnit+")")},function(c){return 100*c.index});y.defaultProps={loading:!0,size:60,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.TraceSpinner=void 0;var i=w([`
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
`]),u=y(r(0)),d=y(r(1)),p=r(2),g=y(p);function y(m){return m&&m.__esModule?m:{default:m}}function w(m,S){return Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(S)}}))}var v=n.TraceSpinner=function(m){var S=m.size,b=m.frontColor,x=m.backColor,E=m.loading,z=m.sizeUnit;return E&&u.default.createElement(c,{size:S,sizeUnit:z},function(k){for(var C=k.countBalls,_=k.frontColor,N=k.backColor,R=k.size,V=k.sizeUnit,O=[],$=[0,1,3,2],L=0,P=0;P<C/2;P++)for(var A=0;A<C/2;A++)O.push(u.default.createElement(f,{frontColor:_,backColor:N,size:R,x:A*(R/2+R/10),y:P*(R/2+R/10),key:$[L].toString(),index:$[L],sizeUnit:V})),L++;return O}({countBalls:4,frontColor:b,backColor:x,size:S,sizeUnit:z}),u.default.createElement(h,{frontColor:b,size:S,sizeUnit:z}))},c=g.default.div.withConfig({displayName:"trace__Wrapper",componentId:"k17r81-0"})(s,function(m){return""+m.size+m.sizeUnit},function(m){return""+m.size+m.sizeUnit}),f=g.default.div.withConfig({displayName:"trace__Ball",componentId:"k17r81-1"})(a,function(m){return""+m.y+m.sizeUnit},function(m){return""+m.x+m.sizeUnit},function(m){return""+m.size/5+m.sizeUnit},function(m){return""+m.size/5+m.sizeUnit},function(m){return""+m.size/10+m.sizeUnit},function(m){return m.backColor},function(m){return(0,p.keyframes)(i,m.size/10,m.sizeUnit,m.backColor,m.size/10,m.sizeUnit,m.frontColor,m.size/10,m.sizeUnit,m.backColor,m.size/10,m.sizeUnit,m.backColor)},function(m){return 1*m.index}),h=(0,g.default)(f)(l,function(m){return m.frontColor},function(m){return m.frontColor},function(m){return(0,p.keyframes)(o,m.size/2+m.size/10,m.sizeUnit,m.size/2+m.size/10,m.sizeUnit,m.size/2+m.size/10,m.sizeUnit,m.size/2+m.size/10,m.sizeUnit)});v.defaultProps={loading:!0,size:35,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ClassicSpinner=void 0;var i=g([`
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
`]),o=g([`
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
`]),s=g([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function g(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=(0,u.keyframes)(i),w=n.ClassicSpinner=function(f){var h=f.size,m=f.color,S=f.loading,b=f.sizeUnit,x=h/2;return S&&a.default.createElement(v,{size:h,sizeUnit:b},function(E){for(var z=E.countBars,k=E.color,C=E.size,_=E.barSize,N=E.sizeUnit,R=[],V=0;V<z;V++){var O=360/z*V,$=-C/2;R.push(a.default.createElement(c,{countBars:z,color:k,barSize:_,size:C,rotate:O,translate:$,key:V.toString(),index:V,sizeUnit:N}))}return R}({countBars:16,radius:x,color:m,size:h,sizeUnit:b}))},v=d.default.div.withConfig({displayName:"classic__Wrapper",componentId:"sc-1ycp7u6-0"})(o,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=d.default.div.withConfig({displayName:"classic__Bar",componentId:"sc-1ycp7u6-1"})(s,function(f){return""+f.size/10+f.sizeUnit},function(f){return""+f.size/4+f.sizeUnit},function(f){return f.color},function(f){return"rotate("+f.rotate+"deg)"},function(f){return"translate(0, "+f.translate+f.sizeUnit+")"},y,function(f){return .06*f.countBars},function(f){return .06*f.index});w.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.WhisperSpinner=void 0;var i=y([`
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
`]),o=y([`
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
`]),s=y([`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 10s infinite;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 10s infinite;
`]),a=y([`
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
`]),l=g(r(0)),u=g(r(1)),d=r(2),p=g(d);function g(f){return f&&f.__esModule?f:{default:f}}function y(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var w=n.WhisperSpinner=function(f){var h=f.size,m=f.frontColor,S=f.backColor,b=f.loading,x=f.sizeUnit;return b&&l.default.createElement(v,{size:h,sizeUnit:x},function(E){for(var z=E.countBallsInLine,k=E.frontColor,C=E.backColor,_=E.size,N=E.sizeUnit,R=[],V=0,O=0;O<z;O++)for(var $=0;$<z;$++)R.push(l.default.createElement(c,{frontColor:k,backColor:C,size:_,key:V.toString(),index:V,sizeUnit:N})),V++;return R}({countBallsInLine:3,frontColor:m,backColor:S,size:h,sizeUnit:x}))},v=p.default.div.withConfig({displayName:"whisper__Wrapper",componentId:"k8uff3-0"})(s,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit},function(){return(0,d.keyframes)(o)}),c=p.default.div.withConfig({displayName:"whisper__Ball",componentId:"k8uff3-1"})(a,function(f){return""+f.size/15+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return f.frontColor},function(f){return(0,d.keyframes)(i,f.backColor,f.frontColor)});w.defaultProps={loading:!0,size:50,frontColor:"#4b4c56",backColor:"#00ff89",sizeUnit:"px"},w.propTypes={loading:u.default.bool,size:u.default.number,frontColor:u.default.string,backColor:u.default.string,sizeUnit:u.default.string}},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MetroSpinner=void 0;var i=y([`
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
`]),o=y([`
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
`]),s=y([`
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
`]),a=y([`
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
`]),l=g(r(0)),u=g(r(1)),d=r(2),p=g(d);function g(h){return h&&h.__esModule?h:{default:h}}function y(h,m){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(m)}}))}var w=(0,d.keyframes)(i),v=n.MetroSpinner=function(h){var m=h.size,S=h.color,b=h.loading,x=h.sizeUnit,E=m/2,z=m/8;return b&&l.default.createElement(c,{size:m,sizeUnit:x},function(k){for(var C=k.countBalls,_=k.radius,N=k.angle,R=k.color,V=k.size,O=k.ballSize,$=k.sizeUnit,L=[],P=O/2,A=0;A<C;A++){var j=Math.sin(N*A*(Math.PI/180))*_-P,Q=Math.cos(N*A*(Math.PI/180))*_-P;L.push(l.default.createElement(f,{countBalls:C,color:R,ballSize:O,size:V,sizeUnit:$,x:j,y:Q,key:A.toString(),index:A+1}))}return L}({countBalls:9,radius:E,angle:40,color:S,size:m,ballSize:z,sizeUnit:x}))},c=p.default.div.withConfig({displayName:"metro__Wrapper",componentId:"sc-2iqssn-0"})(s,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},w),f=p.default.div.withConfig({displayName:"metro__Ball",componentId:"sc-2iqssn-1"})(a,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},function(h){return(0,d.keyframes)(o,h.size/2/h.countBalls*(h.index-1)/h.size*100,(h.size/2/h.countBalls+1e-4)*(h.index-1)/h.size*100,"rotate("+(0-360/h.countBalls*(h.index-2))+"deg)",(h.size/2/h.countBalls*(h.index-0)+2)/h.size*100,"rotate("+(0-360/h.countBalls*(h.index-1))+"deg)",(h.size/2+h.size/2/h.countBalls*(h.index-0)+2)/h.size*100,"rotate("+(0-360/h.countBalls*(h.index-1))+"deg)","rotate("+(0-360/h.countBalls*(h.countBalls-1))+"deg)")},function(h){return"rotate("+360/h.countBalls*h.index+"deg)"},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.color});v.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},v.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}}]))})(Wb);const sI=()=>M("div",{className:"h-screen w-screen bg-main-dark-bg flex justify-center items-center",children:M(Wb.GuardSpinner,{})});var Ng={},uo={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(uo);var th={};function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function Tu(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function kr(e,t,n={clone:!0}){const r=n.clone?B({},e):e;return Tu(e)&&Tu(t)&&Object.keys(t).forEach(i=>{i!=="__proto__"&&(Tu(t[i])&&i in e&&Tu(e[i])?r[i]=kr(e[i],t[i],n):r[i]=t[i])}),r}function ms(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function Be(e){if(typeof e!="string")throw new Error(ms(7));return e.charAt(0).toUpperCase()+e.slice(1)}function aI(...e){return e.reduce((t,n)=>n==null?t:function(...i){t.apply(this,i),n.apply(this,i)},()=>{})}function lI(e,t=166){let n;function r(...i){const o=()=>{e.apply(this,i)};clearTimeout(n),n=setTimeout(o,t)}return r.clear=()=>{clearTimeout(n)},r}function uI(e,t){return()=>null}function cI(e,t){return T.exports.isValidElement(e)&&t.indexOf(e.type.muiName)!==-1}function Ag(e){return e&&e.ownerDocument||document}function fI(e){return Ag(e).defaultView||window}function dI(e,t){return()=>null}function Uc(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const hI=typeof window<"u"?T.exports.useLayoutEffect:T.exports.useEffect,gs=hI;let Mv=0;function pI(e){const[t,n]=T.exports.useState(e),r=e||t;return T.exports.useEffect(()=>{t==null&&(Mv+=1,n(`mui-${Mv}`))},[t]),r}const Lv=os["useId"];function dx(e){if(Lv!==void 0){const t=Lv();return e!=null?e:t}return pI(e)}function mI(e,t,n,r,i){return null}function hx({controlled:e,default:t,name:n,state:r="value"}){const{current:i}=T.exports.useRef(e!==void 0),[o,s]=T.exports.useState(t),a=i?e:o,l=T.exports.useCallback(u=>{i||s(u)},[]);return[a,l]}function px(e){const t=T.exports.useRef(e);return gs(()=>{t.current=e}),T.exports.useCallback((...n)=>(0,t.current)(...n),[])}function to(...e){return T.exports.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Uc(n,t)})},e)}let Rf=!0,zp=!1,jv;const gI={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function yI(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&gI[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function vI(e){e.metaKey||e.altKey||e.ctrlKey||(Rf=!0)}function nh(){Rf=!1}function wI(){this.visibilityState==="hidden"&&zp&&(Rf=!0)}function SI(e){e.addEventListener("keydown",vI,!0),e.addEventListener("mousedown",nh,!0),e.addEventListener("pointerdown",nh,!0),e.addEventListener("touchstart",nh,!0),e.addEventListener("visibilitychange",wI,!0)}function bI(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Rf||yI(t)}function mx(){const e=T.exports.useCallback(i=>{i!=null&&SI(i.ownerDocument)},[]),t=T.exports.useRef(!1);function n(){return t.current?(zp=!0,window.clearTimeout(jv),jv=window.setTimeout(()=>{zp=!1},100),t.current=!1,!0):!1}function r(i){return bI(i)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}const xI=e=>{const t=T.exports.useRef({});return T.exports.useEffect(()=>{t.current=e}),t.current},gx=xI;function EI(e,t){const n=B({},t);return Object.keys(e).forEach(r=>{n[r]===void 0&&(n[r]=e[r])}),n}function Rl(e,t,n){const r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((o,s)=>(s&&(o.push(t(s)),n&&n[s]&&o.push(n[s])),o),[]).join(" ")}),r}const Fv=e=>e,CI=()=>{let e=Fv;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Fv}}},zI=CI(),yx=zI,kI={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function Ns(e,t,n="Mui"){const r=kI[t];return r?`${n}-${r}`:`${yx.generate(e)}-${t}`}function $l(e,t,n="Mui"){const r={};return t.forEach(i=>{r[i]=Ns(e,i,n)}),r}function et(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function vx(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=vx(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function xr(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=vx(e))&&(r&&(r+=" "),r+=t);return r}function wx(e){return typeof e=="string"}function ma(e,t,n){return wx(e)?t:B({},t,{ownerState:B({},t.ownerState,n)})}function TI(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function _I(e,t){return typeof e=="function"?e(t):e}function Bv(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function II(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:o}=e;if(!t){const y=xr(i==null?void 0:i.className,r==null?void 0:r.className,o,n==null?void 0:n.className),w=B({},n==null?void 0:n.style,i==null?void 0:i.style,r==null?void 0:r.style),v=B({},n,i,r);return y.length>0&&(v.className=y),Object.keys(w).length>0&&(v.style=w),{props:v,internalRef:void 0}}const s=TI(B({},i,r)),a=Bv(r),l=Bv(i),u=t(s),d=xr(u==null?void 0:u.className,n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),p=B({},u==null?void 0:u.style,n==null?void 0:n.style,i==null?void 0:i.style,r==null?void 0:r.style),g=B({},u,n,l,a);return d.length>0&&(g.className=d),Object.keys(p).length>0&&(g.style=p),{props:g,internalRef:u.ref}}const PI=["elementType","externalSlotProps","ownerState"];function kp(e){var t;const{elementType:n,externalSlotProps:r,ownerState:i}=e,o=et(e,PI),s=_I(r,i),{props:a,internalRef:l}=II(B({},o,{externalSlotProps:s})),u=to(l,s==null?void 0:s.ref,(t=e.additionalProps)==null?void 0:t.ref);return ma(n,B({},a,{ref:u}),i)}function OI(e){const{badgeContent:t,invisible:n=!1,max:r=99,showZero:i=!1}=e,o=gx({badgeContent:t,max:r});let s=n;n===!1&&t===0&&!i&&(s=!0);const{badgeContent:a,max:l=r}=s?o:e,u=a&&Number(a)>l?`${l}+`:a;return{badgeContent:a,invisible:s,max:l,displayValue:u}}function NI(e){return Ns("MuiBadge",e)}$l("MuiBadge",["root","badge","invisible"]);const AI=["badgeContent","component","children","invisible","max","slotProps","slots","showZero"],RI=e=>{const{invisible:t}=e;return Rl({root:["root"],badge:["badge",t&&"invisible"]},NI,void 0)},$I=T.exports.forwardRef(function(t,n){const{component:r,children:i,max:o=99,slotProps:s={},slots:a={},showZero:l=!1}=t,u=et(t,AI),{badgeContent:d,max:p,displayValue:g,invisible:y}=OI(B({},t,{max:o})),w=B({},t,{badgeContent:d,invisible:y,max:p,showZero:l}),v=RI(w),c=r||a.root||"span",f=kp({elementType:c,externalSlotProps:s.root,externalForwardedProps:u,additionalProps:{ref:n},ownerState:w,className:v.root}),h=a.badge||"span",m=kp({elementType:h,externalSlotProps:s.badge,ownerState:w,className:v.badge});return Zt(c,B({},f,{children:[i,M(h,B({},m,{children:g}))]}))}),UI=$I;var on="top",An="bottom",Rn="right",sn="left",Rg="auto",Ul=[on,An,Rn,sn],ys="start",ol="end",DI="clippingParents",Sx="viewport",oa="popper",MI="reference",Vv=Ul.reduce(function(e,t){return e.concat([t+"-"+ys,t+"-"+ol])},[]),bx=[].concat(Ul,[Rg]).reduce(function(e,t){return e.concat([t,t+"-"+ys,t+"-"+ol])},[]),LI="beforeRead",jI="read",FI="afterRead",BI="beforeMain",VI="main",WI="afterMain",HI="beforeWrite",qI="write",KI="afterWrite",GI=[LI,jI,FI,BI,VI,WI,HI,qI,KI];function ur(e){return e?(e.nodeName||"").toLowerCase():null}function $n(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function no(e){var t=$n(e).Element;return e instanceof t||e instanceof Element}function Pn(e){var t=$n(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function $g(e){if(typeof ShadowRoot>"u")return!1;var t=$n(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function YI(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},i=t.attributes[n]||{},o=t.elements[n];!Pn(o)||!ur(o)||(Object.assign(o.style,r),Object.keys(i).forEach(function(s){var a=i[s];a===!1?o.removeAttribute(s):o.setAttribute(s,a===!0?"":a)}))})}function XI(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var i=t.elements[r],o=t.attributes[r]||{},s=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),a=s.reduce(function(l,u){return l[u]="",l},{});!Pn(i)||!ur(i)||(Object.assign(i.style,a),Object.keys(o).forEach(function(l){i.removeAttribute(l)}))})}}const QI={name:"applyStyles",enabled:!0,phase:"write",fn:YI,effect:XI,requires:["computeStyles"]};function sr(e){return e.split("-")[0]}var Wi=Math.max,Dc=Math.min,vs=Math.round;function Tp(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function xx(){return!/^((?!chrome|android).)*safari/i.test(Tp())}function ws(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,o=1;t&&Pn(e)&&(i=e.offsetWidth>0&&vs(r.width)/e.offsetWidth||1,o=e.offsetHeight>0&&vs(r.height)/e.offsetHeight||1);var s=no(e)?$n(e):window,a=s.visualViewport,l=!xx()&&n,u=(r.left+(l&&a?a.offsetLeft:0))/i,d=(r.top+(l&&a?a.offsetTop:0))/o,p=r.width/i,g=r.height/o;return{width:p,height:g,top:d,right:u+p,bottom:d+g,left:u,x:u,y:d}}function Ug(e){var t=ws(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Ex(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&$g(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ar(e){return $n(e).getComputedStyle(e)}function JI(e){return["table","td","th"].indexOf(ur(e))>=0}function yi(e){return((no(e)?e.ownerDocument:e.document)||window.document).documentElement}function $f(e){return ur(e)==="html"?e:e.assignedSlot||e.parentNode||($g(e)?e.host:null)||yi(e)}function Wv(e){return!Pn(e)||Ar(e).position==="fixed"?null:e.offsetParent}function ZI(e){var t=/firefox/i.test(Tp()),n=/Trident/i.test(Tp());if(n&&Pn(e)){var r=Ar(e);if(r.position==="fixed")return null}var i=$f(e);for($g(i)&&(i=i.host);Pn(i)&&["html","body"].indexOf(ur(i))<0;){var o=Ar(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function Dl(e){for(var t=$n(e),n=Wv(e);n&&JI(n)&&Ar(n).position==="static";)n=Wv(n);return n&&(ur(n)==="html"||ur(n)==="body"&&Ar(n).position==="static")?t:n||ZI(e)||t}function Dg(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Oa(e,t,n){return Wi(e,Dc(t,n))}function eP(e,t,n){var r=Oa(e,t,n);return r>n?n:r}function Cx(){return{top:0,right:0,bottom:0,left:0}}function zx(e){return Object.assign({},Cx(),e)}function kx(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var tP=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,zx(typeof t!="number"?t:kx(t,Ul))};function nP(e){var t,n=e.state,r=e.name,i=e.options,o=n.elements.arrow,s=n.modifiersData.popperOffsets,a=sr(n.placement),l=Dg(a),u=[sn,Rn].indexOf(a)>=0,d=u?"height":"width";if(!(!o||!s)){var p=tP(i.padding,n),g=Ug(o),y=l==="y"?on:sn,w=l==="y"?An:Rn,v=n.rects.reference[d]+n.rects.reference[l]-s[l]-n.rects.popper[d],c=s[l]-n.rects.reference[l],f=Dl(o),h=f?l==="y"?f.clientHeight||0:f.clientWidth||0:0,m=v/2-c/2,S=p[y],b=h-g[d]-p[w],x=h/2-g[d]/2+m,E=Oa(S,x,b),z=l;n.modifiersData[r]=(t={},t[z]=E,t.centerOffset=E-x,t)}}function rP(e){var t=e.state,n=e.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||!Ex(t.elements.popper,i)||(t.elements.arrow=i))}const iP={name:"arrow",enabled:!0,phase:"main",fn:nP,effect:rP,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ss(e){return e.split("-")[1]}var oP={top:"auto",right:"auto",bottom:"auto",left:"auto"};function sP(e){var t=e.x,n=e.y,r=window,i=r.devicePixelRatio||1;return{x:vs(t*i)/i||0,y:vs(n*i)/i||0}}function Hv(e){var t,n=e.popper,r=e.popperRect,i=e.placement,o=e.variation,s=e.offsets,a=e.position,l=e.gpuAcceleration,u=e.adaptive,d=e.roundOffsets,p=e.isFixed,g=s.x,y=g===void 0?0:g,w=s.y,v=w===void 0?0:w,c=typeof d=="function"?d({x:y,y:v}):{x:y,y:v};y=c.x,v=c.y;var f=s.hasOwnProperty("x"),h=s.hasOwnProperty("y"),m=sn,S=on,b=window;if(u){var x=Dl(n),E="clientHeight",z="clientWidth";if(x===$n(n)&&(x=yi(n),Ar(x).position!=="static"&&a==="absolute"&&(E="scrollHeight",z="scrollWidth")),x=x,i===on||(i===sn||i===Rn)&&o===ol){S=An;var k=p&&x===b&&b.visualViewport?b.visualViewport.height:x[E];v-=k-r.height,v*=l?1:-1}if(i===sn||(i===on||i===An)&&o===ol){m=Rn;var C=p&&x===b&&b.visualViewport?b.visualViewport.width:x[z];y-=C-r.width,y*=l?1:-1}}var _=Object.assign({position:a},u&&oP),N=d===!0?sP({x:y,y:v}):{x:y,y:v};if(y=N.x,v=N.y,l){var R;return Object.assign({},_,(R={},R[S]=h?"0":"",R[m]=f?"0":"",R.transform=(b.devicePixelRatio||1)<=1?"translate("+y+"px, "+v+"px)":"translate3d("+y+"px, "+v+"px, 0)",R))}return Object.assign({},_,(t={},t[S]=h?v+"px":"",t[m]=f?y+"px":"",t.transform="",t))}function aP(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0?!0:r,o=n.adaptive,s=o===void 0?!0:o,a=n.roundOffsets,l=a===void 0?!0:a,u={placement:sr(t.placement),variation:Ss(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Hv(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Hv(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const lP={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:aP,data:{}};var _u={passive:!0};function uP(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,o=i===void 0?!0:i,s=r.resize,a=s===void 0?!0:s,l=$n(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&u.forEach(function(d){d.addEventListener("scroll",n.update,_u)}),a&&l.addEventListener("resize",n.update,_u),function(){o&&u.forEach(function(d){d.removeEventListener("scroll",n.update,_u)}),a&&l.removeEventListener("resize",n.update,_u)}}const cP={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:uP,data:{}};var fP={left:"right",right:"left",bottom:"top",top:"bottom"};function Ju(e){return e.replace(/left|right|bottom|top/g,function(t){return fP[t]})}var dP={start:"end",end:"start"};function qv(e){return e.replace(/start|end/g,function(t){return dP[t]})}function Mg(e){var t=$n(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Lg(e){return ws(yi(e)).left+Mg(e).scrollLeft}function hP(e,t){var n=$n(e),r=yi(e),i=n.visualViewport,o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;var u=xx();(u||!u&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a+Lg(e),y:l}}function pP(e){var t,n=yi(e),r=Mg(e),i=(t=e.ownerDocument)==null?void 0:t.body,o=Wi(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=Wi(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+Lg(e),l=-r.scrollTop;return Ar(i||n).direction==="rtl"&&(a+=Wi(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:a,y:l}}function jg(e){var t=Ar(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Tx(e){return["html","body","#document"].indexOf(ur(e))>=0?e.ownerDocument.body:Pn(e)&&jg(e)?e:Tx($f(e))}function Na(e,t){var n;t===void 0&&(t=[]);var r=Tx(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),o=$n(r),s=i?[o].concat(o.visualViewport||[],jg(r)?r:[]):r,a=t.concat(s);return i?a:a.concat(Na($f(s)))}function _p(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function mP(e,t){var n=ws(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Kv(e,t,n){return t===Sx?_p(hP(e,n)):no(t)?mP(t,n):_p(pP(yi(e)))}function gP(e){var t=Na($f(e)),n=["absolute","fixed"].indexOf(Ar(e).position)>=0,r=n&&Pn(e)?Dl(e):e;return no(r)?t.filter(function(i){return no(i)&&Ex(i,r)&&ur(i)!=="body"}):[]}function yP(e,t,n,r){var i=t==="clippingParents"?gP(e):[].concat(t),o=[].concat(i,[n]),s=o[0],a=o.reduce(function(l,u){var d=Kv(e,u,r);return l.top=Wi(d.top,l.top),l.right=Dc(d.right,l.right),l.bottom=Dc(d.bottom,l.bottom),l.left=Wi(d.left,l.left),l},Kv(e,s,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function _x(e){var t=e.reference,n=e.element,r=e.placement,i=r?sr(r):null,o=r?Ss(r):null,s=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,l;switch(i){case on:l={x:s,y:t.y-n.height};break;case An:l={x:s,y:t.y+t.height};break;case Rn:l={x:t.x+t.width,y:a};break;case sn:l={x:t.x-n.width,y:a};break;default:l={x:t.x,y:t.y}}var u=i?Dg(i):null;if(u!=null){var d=u==="y"?"height":"width";switch(o){case ys:l[u]=l[u]-(t[d]/2-n[d]/2);break;case ol:l[u]=l[u]+(t[d]/2-n[d]/2);break}}return l}function sl(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,o=n.strategy,s=o===void 0?e.strategy:o,a=n.boundary,l=a===void 0?DI:a,u=n.rootBoundary,d=u===void 0?Sx:u,p=n.elementContext,g=p===void 0?oa:p,y=n.altBoundary,w=y===void 0?!1:y,v=n.padding,c=v===void 0?0:v,f=zx(typeof c!="number"?c:kx(c,Ul)),h=g===oa?MI:oa,m=e.rects.popper,S=e.elements[w?h:g],b=yP(no(S)?S:S.contextElement||yi(e.elements.popper),l,d,s),x=ws(e.elements.reference),E=_x({reference:x,element:m,strategy:"absolute",placement:i}),z=_p(Object.assign({},m,E)),k=g===oa?z:x,C={top:b.top-k.top+f.top,bottom:k.bottom-b.bottom+f.bottom,left:b.left-k.left+f.left,right:k.right-b.right+f.right},_=e.modifiersData.offset;if(g===oa&&_){var N=_[i];Object.keys(C).forEach(function(R){var V=[Rn,An].indexOf(R)>=0?1:-1,O=[on,An].indexOf(R)>=0?"y":"x";C[R]+=N[O]*V})}return C}function vP(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?bx:l,d=Ss(r),p=d?a?Vv:Vv.filter(function(w){return Ss(w)===d}):Ul,g=p.filter(function(w){return u.indexOf(w)>=0});g.length===0&&(g=p);var y=g.reduce(function(w,v){return w[v]=sl(e,{placement:v,boundary:i,rootBoundary:o,padding:s})[sr(v)],w},{});return Object.keys(y).sort(function(w,v){return y[w]-y[v]})}function wP(e){if(sr(e)===Rg)return[];var t=Ju(e);return[qv(e),t,qv(t)]}function SP(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,o=i===void 0?!0:i,s=n.altAxis,a=s===void 0?!0:s,l=n.fallbackPlacements,u=n.padding,d=n.boundary,p=n.rootBoundary,g=n.altBoundary,y=n.flipVariations,w=y===void 0?!0:y,v=n.allowedAutoPlacements,c=t.options.placement,f=sr(c),h=f===c,m=l||(h||!w?[Ju(c)]:wP(c)),S=[c].concat(m).reduce(function(nt,Ae){return nt.concat(sr(Ae)===Rg?vP(t,{placement:Ae,boundary:d,rootBoundary:p,padding:u,flipVariations:w,allowedAutoPlacements:v}):Ae)},[]),b=t.rects.reference,x=t.rects.popper,E=new Map,z=!0,k=S[0],C=0;C<S.length;C++){var _=S[C],N=sr(_),R=Ss(_)===ys,V=[on,An].indexOf(N)>=0,O=V?"width":"height",$=sl(t,{placement:_,boundary:d,rootBoundary:p,altBoundary:g,padding:u}),L=V?R?Rn:sn:R?An:on;b[O]>x[O]&&(L=Ju(L));var P=Ju(L),A=[];if(o&&A.push($[N]<=0),a&&A.push($[L]<=0,$[P]<=0),A.every(function(nt){return nt})){k=_,z=!1;break}E.set(_,A)}if(z)for(var j=w?3:1,Q=function(Ae){var Re=S.find(function(Le){var qe=E.get(Le);if(qe)return qe.slice(0,Ae).every(function($e){return $e})});if(Re)return k=Re,"break"},oe=j;oe>0;oe--){var He=Q(oe);if(He==="break")break}t.placement!==k&&(t.modifiersData[r]._skip=!0,t.placement=k,t.reset=!0)}}const bP={name:"flip",enabled:!0,phase:"main",fn:SP,requiresIfExists:["offset"],data:{_skip:!1}};function Gv(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Yv(e){return[on,Rn,An,sn].some(function(t){return e[t]>=0})}function xP(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,s=sl(t,{elementContext:"reference"}),a=sl(t,{altBoundary:!0}),l=Gv(s,r),u=Gv(a,i,o),d=Yv(l),p=Yv(u);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:d,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":p})}const EP={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:xP};function CP(e,t,n){var r=sr(e),i=[sn,on].indexOf(r)>=0?-1:1,o=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,s=o[0],a=o[1];return s=s||0,a=(a||0)*i,[sn,Rn].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function zP(e){var t=e.state,n=e.options,r=e.name,i=n.offset,o=i===void 0?[0,0]:i,s=bx.reduce(function(d,p){return d[p]=CP(p,t.rects,o),d},{}),a=s[t.placement],l=a.x,u=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=s}const kP={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:zP};function TP(e){var t=e.state,n=e.name;t.modifiersData[n]=_x({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const _P={name:"popperOffsets",enabled:!0,phase:"read",fn:TP,data:{}};function IP(e){return e==="x"?"y":"x"}function PP(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,o=i===void 0?!0:i,s=n.altAxis,a=s===void 0?!1:s,l=n.boundary,u=n.rootBoundary,d=n.altBoundary,p=n.padding,g=n.tether,y=g===void 0?!0:g,w=n.tetherOffset,v=w===void 0?0:w,c=sl(t,{boundary:l,rootBoundary:u,padding:p,altBoundary:d}),f=sr(t.placement),h=Ss(t.placement),m=!h,S=Dg(f),b=IP(S),x=t.modifiersData.popperOffsets,E=t.rects.reference,z=t.rects.popper,k=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,C=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),_=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,N={x:0,y:0};if(!!x){if(o){var R,V=S==="y"?on:sn,O=S==="y"?An:Rn,$=S==="y"?"height":"width",L=x[S],P=L+c[V],A=L-c[O],j=y?-z[$]/2:0,Q=h===ys?E[$]:z[$],oe=h===ys?-z[$]:-E[$],He=t.elements.arrow,nt=y&&He?Ug(He):{width:0,height:0},Ae=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Cx(),Re=Ae[V],Le=Ae[O],qe=Oa(0,E[$],nt[$]),$e=m?E[$]/2-j-qe-Re-C.mainAxis:Q-qe-Re-C.mainAxis,qn=m?-E[$]/2+j+qe+Le+C.mainAxis:oe+qe+Le+C.mainAxis,je=t.elements.arrow&&Dl(t.elements.arrow),Bs=je?S==="y"?je.clientTop||0:je.clientLeft||0:0,Wt=(R=_==null?void 0:_[S])!=null?R:0,un=L+$e-Wt-Bs,$t=L+qn-Wt,dr=Oa(y?Dc(P,un):P,L,y?Wi(A,$t):A);x[S]=dr,N[S]=dr-L}if(a){var cn,Et=S==="x"?on:sn,Kn=S==="x"?An:Rn,Ht=x[b],qt=b==="y"?"height":"width",Un=Ht+c[Et],Gn=Ht-c[Kn],Yn=[on,sn].indexOf(f)!==-1,Ut=(cn=_==null?void 0:_[b])!=null?cn:0,hr=Yn?Un:Ht-E[qt]-z[qt]-Ut+C.altAxis,Ei=Yn?Ht+E[qt]+z[qt]-Ut-C.altAxis:Gn,Lr=y&&Yn?eP(hr,Ht,Ei):Oa(y?hr:Un,Ht,y?Ei:Gn);x[b]=Lr,N[b]=Lr-Ht}t.modifiersData[r]=N}}const OP={name:"preventOverflow",enabled:!0,phase:"main",fn:PP,requiresIfExists:["offset"]};function NP(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function AP(e){return e===$n(e)||!Pn(e)?Mg(e):NP(e)}function RP(e){var t=e.getBoundingClientRect(),n=vs(t.width)/e.offsetWidth||1,r=vs(t.height)/e.offsetHeight||1;return n!==1||r!==1}function $P(e,t,n){n===void 0&&(n=!1);var r=Pn(t),i=Pn(t)&&RP(t),o=yi(t),s=ws(e,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((ur(t)!=="body"||jg(o))&&(a=AP(t)),Pn(t)?(l=ws(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):o&&(l.x=Lg(o))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function UP(e){var t=new Map,n=new Set,r=[];e.forEach(function(o){t.set(o.name,o)});function i(o){n.add(o.name);var s=[].concat(o.requires||[],o.requiresIfExists||[]);s.forEach(function(a){if(!n.has(a)){var l=t.get(a);l&&i(l)}}),r.push(o)}return e.forEach(function(o){n.has(o.name)||i(o)}),r}function DP(e){var t=UP(e);return GI.reduce(function(n,r){return n.concat(t.filter(function(i){return i.phase===r}))},[])}function MP(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function LP(e){var t=e.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var Xv={placement:"bottom",modifiers:[],strategy:"absolute"};function Qv(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function jP(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,o=i===void 0?Xv:i;return function(a,l,u){u===void 0&&(u=o);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},Xv,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},p=[],g=!1,y={state:d,setOptions:function(f){var h=typeof f=="function"?f(d.options):f;v(),d.options=Object.assign({},o,d.options,h),d.scrollParents={reference:no(a)?Na(a):a.contextElement?Na(a.contextElement):[],popper:Na(l)};var m=DP(LP([].concat(r,d.options.modifiers)));return d.orderedModifiers=m.filter(function(S){return S.enabled}),w(),y.update()},forceUpdate:function(){if(!g){var f=d.elements,h=f.reference,m=f.popper;if(!!Qv(h,m)){d.rects={reference:$P(h,Dl(m),d.options.strategy==="fixed"),popper:Ug(m)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(C){return d.modifiersData[C.name]=Object.assign({},C.data)});for(var S=0;S<d.orderedModifiers.length;S++){if(d.reset===!0){d.reset=!1,S=-1;continue}var b=d.orderedModifiers[S],x=b.fn,E=b.options,z=E===void 0?{}:E,k=b.name;typeof x=="function"&&(d=x({state:d,options:z,name:k,instance:y})||d)}}}},update:MP(function(){return new Promise(function(c){y.forceUpdate(),c(d)})}),destroy:function(){v(),g=!0}};if(!Qv(a,l))return y;y.setOptions(u).then(function(c){!g&&u.onFirstUpdate&&u.onFirstUpdate(c)});function w(){d.orderedModifiers.forEach(function(c){var f=c.name,h=c.options,m=h===void 0?{}:h,S=c.effect;if(typeof S=="function"){var b=S({state:d,name:f,instance:y,options:m}),x=function(){};p.push(b||x)}})}function v(){p.forEach(function(c){return c()}),p=[]}return y}}var FP=[cP,_P,lP,QI,kP,bP,OP,iP,EP],BP=jP({defaultModifiers:FP});function VP(e){return typeof e=="function"?e():e}const WP=T.exports.forwardRef(function(t,n){const{children:r,container:i,disablePortal:o=!1}=t,[s,a]=T.exports.useState(null),l=to(T.exports.isValidElement(r)?r.ref:null,n);return gs(()=>{o||a(VP(i)||document.body)},[i,o]),gs(()=>{if(s&&!o)return Uc(n,s),()=>{Uc(n,null)}},[n,s,o]),o?T.exports.isValidElement(r)?T.exports.cloneElement(r,{ref:l}):r:M(T.exports.Fragment,{children:s&&ef.exports.createPortal(r,s)})}),HP=WP;function qP(e){return Ns("MuiPopperUnstyled",e)}$l("MuiPopperUnstyled",["root"]);const KP=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],GP=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function YP(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function Ip(e){return typeof e=="function"?e():e}const XP=()=>Rl({root:["root"]},qP,{}),QP={},JP=T.exports.forwardRef(function(t,n){var r;const{anchorEl:i,children:o,component:s,direction:a,disablePortal:l,modifiers:u,open:d,ownerState:p,placement:g,popperOptions:y,popperRef:w,slotProps:v={},slots:c={},TransitionProps:f}=t,h=et(t,KP),m=T.exports.useRef(null),S=to(m,n),b=T.exports.useRef(null),x=to(b,w),E=T.exports.useRef(x);gs(()=>{E.current=x},[x]),T.exports.useImperativeHandle(w,()=>b.current,[]);const z=YP(g,a),[k,C]=T.exports.useState(z);T.exports.useEffect(()=>{b.current&&b.current.forceUpdate()}),gs(()=>{if(!i||!d)return;const O=P=>{C(P.placement)};Ip(i);let $=[{name:"preventOverflow",options:{altBoundary:l}},{name:"flip",options:{altBoundary:l}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:P})=>{O(P)}}];u!=null&&($=$.concat(u)),y&&y.modifiers!=null&&($=$.concat(y.modifiers));const L=BP(Ip(i),m.current,B({placement:z},y,{modifiers:$}));return E.current(L),()=>{L.destroy(),E.current(null)}},[i,l,u,d,y,z]);const _={placement:k};f!==null&&(_.TransitionProps=f);const N=XP(),R=(r=s!=null?s:c.root)!=null?r:"div",V=kp({elementType:R,externalSlotProps:v.root,externalForwardedProps:h,additionalProps:{role:"tooltip",ref:S},ownerState:B({},t,p),className:N.root});return M(R,B({},V,{children:typeof o=="function"?o(_):o}))}),ZP=T.exports.forwardRef(function(t,n){const{anchorEl:r,children:i,container:o,direction:s="ltr",disablePortal:a=!1,keepMounted:l=!1,modifiers:u,open:d,placement:p="bottom",popperOptions:g=QP,popperRef:y,style:w,transition:v=!1}=t,c=et(t,GP),[f,h]=T.exports.useState(!0),m=()=>{h(!1)},S=()=>{h(!0)};if(!l&&!d&&(!v||f))return null;const b=o||(r?Ag(Ip(r)).body:void 0);return M(HP,{disablePortal:a,container:b,children:M(JP,B({anchorEl:r,direction:s,disablePortal:a,modifiers:u,ref:n,open:v?!f:d,placement:p,popperOptions:g,popperRef:y},c,{style:B({position:"fixed",top:0,left:0,display:!d&&l&&(!v||f)?"none":null},w),TransitionProps:v?{in:d,onEnter:m,onExited:S}:null,children:i}))})}),eO=ZP;function Ix(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var tO=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,nO=Ix(function(e){return tO.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function rO(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function iO(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var oO=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(iO(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=rO(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),_t="-ms-",Mc="-moz-",ye="-webkit-",Px="comm",Fg="rule",Bg="decl",sO="@import",Ox="@keyframes",aO=Math.abs,Uf=String.fromCharCode,lO=Object.assign;function uO(e,t){return yt(e,0)^45?(((t<<2^yt(e,0))<<2^yt(e,1))<<2^yt(e,2))<<2^yt(e,3):0}function Nx(e){return e.trim()}function cO(e,t){return(e=t.exec(e))?e[0]:e}function we(e,t,n){return e.replace(t,n)}function Pp(e,t){return e.indexOf(t)}function yt(e,t){return e.charCodeAt(t)|0}function al(e,t,n){return e.slice(t,n)}function Zn(e){return e.length}function Vg(e){return e.length}function Iu(e,t){return t.push(e),e}function fO(e,t){return e.map(t).join("")}var Df=1,bs=1,Ax=0,ln=0,Je=0,As="";function Mf(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Df,column:bs,length:s,return:""}}function sa(e,t){return lO(Mf("",null,null,"",null,null,0),e,{length:-e.length},t)}function dO(){return Je}function hO(){return Je=ln>0?yt(As,--ln):0,bs--,Je===10&&(bs=1,Df--),Je}function gn(){return Je=ln<Ax?yt(As,ln++):0,bs++,Je===10&&(bs=1,Df++),Je}function ar(){return yt(As,ln)}function Zu(){return ln}function Ml(e,t){return al(As,e,t)}function ll(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rx(e){return Df=bs=1,Ax=Zn(As=e),ln=0,[]}function $x(e){return As="",e}function ec(e){return Nx(Ml(ln-1,Op(e===91?e+2:e===40?e+1:e)))}function pO(e){for(;(Je=ar())&&Je<33;)gn();return ll(e)>2||ll(Je)>3?"":" "}function mO(e,t){for(;--t&&gn()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return Ml(e,Zu()+(t<6&&ar()==32&&gn()==32))}function Op(e){for(;gn();)switch(Je){case e:return ln;case 34:case 39:e!==34&&e!==39&&Op(Je);break;case 40:e===41&&Op(e);break;case 92:gn();break}return ln}function gO(e,t){for(;gn()&&e+Je!==47+10;)if(e+Je===42+42&&ar()===47)break;return"/*"+Ml(t,ln-1)+"*"+Uf(e===47?e:gn())}function yO(e){for(;!ll(ar());)gn();return Ml(e,ln)}function vO(e){return $x(tc("",null,null,null,[""],e=Rx(e),0,[0],e))}function tc(e,t,n,r,i,o,s,a,l){for(var u=0,d=0,p=s,g=0,y=0,w=0,v=1,c=1,f=1,h=0,m="",S=i,b=o,x=r,E=m;c;)switch(w=h,h=gn()){case 40:if(w!=108&&yt(E,p-1)==58){Pp(E+=we(ec(h),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:E+=ec(h);break;case 9:case 10:case 13:case 32:E+=pO(w);break;case 92:E+=mO(Zu()-1,7);continue;case 47:switch(ar()){case 42:case 47:Iu(wO(gO(gn(),Zu()),t,n),l);break;default:E+="/"}break;case 123*v:a[u++]=Zn(E)*f;case 125*v:case 59:case 0:switch(h){case 0:case 125:c=0;case 59+d:y>0&&Zn(E)-p&&Iu(y>32?Zv(E+";",r,n,p-1):Zv(we(E," ","")+";",r,n,p-2),l);break;case 59:E+=";";default:if(Iu(x=Jv(E,t,n,u,d,i,a,m,S=[],b=[],p),o),h===123)if(d===0)tc(E,t,x,x,S,o,p,a,b);else switch(g===99&&yt(E,3)===110?100:g){case 100:case 109:case 115:tc(e,x,x,r&&Iu(Jv(e,x,x,0,0,i,a,m,i,S=[],p),b),i,b,p,a,r?S:b);break;default:tc(E,x,x,x,[""],b,0,a,b)}}u=d=y=0,v=f=1,m=E="",p=s;break;case 58:p=1+Zn(E),y=w;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&hO()==125)continue}switch(E+=Uf(h),h*v){case 38:f=d>0?1:(E+="\f",-1);break;case 44:a[u++]=(Zn(E)-1)*f,f=1;break;case 64:ar()===45&&(E+=ec(gn())),g=ar(),d=p=Zn(m=E+=yO(Zu())),h++;break;case 45:w===45&&Zn(E)==2&&(v=0)}}return o}function Jv(e,t,n,r,i,o,s,a,l,u,d){for(var p=i-1,g=i===0?o:[""],y=Vg(g),w=0,v=0,c=0;w<r;++w)for(var f=0,h=al(e,p+1,p=aO(v=s[w])),m=e;f<y;++f)(m=Nx(v>0?g[f]+" "+h:we(h,/&\f/g,g[f])))&&(l[c++]=m);return Mf(e,t,n,i===0?Fg:a,l,u,d)}function wO(e,t,n){return Mf(e,t,n,Px,Uf(dO()),al(e,2,-2),0)}function Zv(e,t,n,r){return Mf(e,t,n,Bg,al(e,0,r),al(e,r+1,-1),r)}function Zo(e,t){for(var n="",r=Vg(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function SO(e,t,n,r){switch(e.type){case sO:case Bg:return e.return=e.return||e.value;case Px:return"";case Ox:return e.return=e.value+"{"+Zo(e.children,r)+"}";case Fg:e.value=e.props.join(",")}return Zn(n=Zo(e.children,r))?e.return=e.value+"{"+n+"}":""}function bO(e){var t=Vg(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function xO(e){return function(t){t.root||(t=t.return)&&e(t)}}var EO=function(t,n,r){for(var i=0,o=0;i=o,o=ar(),i===38&&o===12&&(n[r]=1),!ll(o);)gn();return Ml(t,ln)},CO=function(t,n){var r=-1,i=44;do switch(ll(i)){case 0:i===38&&ar()===12&&(n[r]=1),t[r]+=EO(ln-1,n,r);break;case 2:t[r]+=ec(i);break;case 4:if(i===44){t[++r]=ar()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Uf(i)}while(i=gn());return t},zO=function(t,n){return $x(CO(Rx(t),n))},e1=new WeakMap,kO=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!e1.get(r))&&!i){e1.set(t,!0);for(var o=[],s=zO(n,o),a=r.props,l=0,u=0;l<s.length;l++)for(var d=0;d<a.length;d++,u++)t.props[u]=o[l]?s[l].replace(/&\f/g,a[d]):a[d]+" "+s[l]}}},TO=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ux(e,t){switch(uO(e,t)){case 5103:return ye+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+e+Mc+e+_t+e+e;case 6828:case 4268:return ye+e+_t+e+e;case 6165:return ye+e+_t+"flex-"+e+e;case 5187:return ye+e+we(e,/(\w+).+(:[^]+)/,ye+"box-$1$2"+_t+"flex-$1$2")+e;case 5443:return ye+e+_t+"flex-item-"+we(e,/flex-|-self/,"")+e;case 4675:return ye+e+_t+"flex-line-pack"+we(e,/align-content|flex-|-self/,"")+e;case 5548:return ye+e+_t+we(e,"shrink","negative")+e;case 5292:return ye+e+_t+we(e,"basis","preferred-size")+e;case 6060:return ye+"box-"+we(e,"-grow","")+ye+e+_t+we(e,"grow","positive")+e;case 4554:return ye+we(e,/([^-])(transform)/g,"$1"+ye+"$2")+e;case 6187:return we(we(we(e,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),e,"")+e;case 5495:case 3959:return we(e,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return we(we(e,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+_t+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+e+e;case 4095:case 3583:case 4068:case 2532:return we(e,/(.+)-inline(.+)/,ye+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zn(e)-1-t>6)switch(yt(e,t+1)){case 109:if(yt(e,t+4)!==45)break;case 102:return we(e,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+Mc+(yt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Pp(e,"stretch")?Ux(we(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(yt(e,t+1)!==115)break;case 6444:switch(yt(e,Zn(e)-3-(~Pp(e,"!important")&&10))){case 107:return we(e,":",":"+ye)+e;case 101:return we(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ye+(yt(e,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+_t+"$2box$3")+e}break;case 5936:switch(yt(e,t+11)){case 114:return ye+e+_t+we(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ye+e+_t+we(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ye+e+_t+we(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ye+e+_t+e+e}return e}var _O=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Bg:t.return=Ux(t.value,t.length);break;case Ox:return Zo([sa(t,{value:we(t.value,"@","@"+ye)})],i);case Fg:if(t.length)return fO(t.props,function(o){switch(cO(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Zo([sa(t,{props:[we(o,/:(read-\w+)/,":"+Mc+"$1")]})],i);case"::placeholder":return Zo([sa(t,{props:[we(o,/:(plac\w+)/,":"+ye+"input-$1")]}),sa(t,{props:[we(o,/:(plac\w+)/,":"+Mc+"$1")]}),sa(t,{props:[we(o,/:(plac\w+)/,_t+"input-$1")]})],i)}return""})}},IO=[_O],PO=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var c=v.getAttribute("data-emotion");c.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||IO,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var c=v.getAttribute("data-emotion").split(" "),f=1;f<c.length;f++)o[c[f]]=!0;a.push(v)});var l,u=[kO,TO];{var d,p=[SO,xO(function(v){d.insert(v)})],g=bO(u.concat(i,p)),y=function(c){return Zo(vO(c),g)};l=function(c,f,h,m){d=h,y(c?c+"{"+f.styles+"}":f.styles),m&&(w.inserted[f.name]=!0)}}var w={key:n,sheet:new oO({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return w.sheet.hydrate(a),w},OO=!0;function NO(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Dx=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||OO===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},AO=function(t,n,r){Dx(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function RO(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var $O={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},UO=/[A-Z]|^ms/g,DO=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Mx=function(t){return t.charCodeAt(1)===45},t1=function(t){return t!=null&&typeof t!="boolean"},rh=Ix(function(e){return Mx(e)?e:e.replace(UO,"-$&").toLowerCase()}),n1=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(DO,function(r,i,o){return er={name:i,styles:o,next:er},i})}return $O[t]!==1&&!Mx(t)&&typeof n=="number"&&n!==0?n+"px":n};function ul(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return er={name:n.name,styles:n.styles,next:er},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)er={name:r.name,styles:r.styles,next:er},r=r.next;var i=n.styles+";";return i}return MO(e,t,n)}case"function":{if(e!==void 0){var o=er,s=n(e);return er=o,ul(e,t,s)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function MO(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ul(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":t1(s)&&(r+=rh(o)+":"+n1(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var a=0;a<s.length;a++)t1(s[a])&&(r+=rh(o)+":"+n1(o,s[a])+";");else{var l=ul(e,t,s);switch(o){case"animation":case"animationName":{r+=rh(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var r1=/label:\s*([^\s;\n{]+)\s*(;|$)/g,er,LO=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";er=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=ul(r,n,s)):o+=s[0];for(var a=1;a<t.length;a++)o+=ul(r,n,t[a]),i&&(o+=s[a]);r1.lastIndex=0;for(var l="",u;(u=r1.exec(o))!==null;)l+="-"+u[1];var d=RO(o)+l;return{name:d,styles:o,next:er}},jO=function(t){return t()},FO=os["useInsertionEffect"]?os["useInsertionEffect"]:!1,BO=FO||jO,Lx=T.exports.createContext(typeof HTMLElement<"u"?PO({key:"css"}):null);Lx.Provider;var VO=function(t){return T.exports.forwardRef(function(n,r){var i=T.exports.useContext(Lx);return t(n,i,r)})},jx=T.exports.createContext({}),WO=nO,HO=function(t){return t!=="theme"},i1=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?WO:HO},o1=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},qO=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Dx(n,r,i),BO(function(){return AO(n,r,i)}),null},KO=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var a=o1(t,n,r),l=a||i1(i),u=!l("as");return function(){var d=arguments,p=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&p.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)p.push.apply(p,d);else{p.push(d[0][0]);for(var g=d.length,y=1;y<g;y++)p.push(d[y],d[0][y])}var w=VO(function(v,c,f){var h=u&&v.as||i,m="",S=[],b=v;if(v.theme==null){b={};for(var x in v)b[x]=v[x];b.theme=T.exports.useContext(jx)}typeof v.className=="string"?m=NO(c.registered,S,v.className):v.className!=null&&(m=v.className+" ");var E=LO(p.concat(S),c.registered,b);m+=c.key+"-"+E.name,s!==void 0&&(m+=" "+s);var z=u&&a===void 0?i1(h):l,k={};for(var C in v)u&&C==="as"||z(C)&&(k[C]=v[C]);return k.className=m,k.ref=f,T.exports.createElement(T.exports.Fragment,null,T.exports.createElement(qO,{cache:c,serialized:E,isStringTag:typeof h=="string"}),T.exports.createElement(h,k))});return w.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=i,w.__emotion_styles=p,w.__emotion_forwardProp=a,Object.defineProperty(w,"toString",{value:function(){return"."+s}}),w.withComponent=function(v,c){return e(v,B({},n,c,{shouldForwardProp:o1(w,c,!0)})).apply(void 0,p)},w}},GO=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Np=KO.bind();GO.forEach(function(e){Np[e]=Np(e)});const YO=Np;/** @license MUI v5.10.8
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function XO(e,t){return YO(e,t)}const QO=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))};function Aa(e,t){return t?kr(e,t,{clone:!1}):e}const Wg={xs:0,sm:600,md:900,lg:1200,xl:1536},s1={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Wg[e]}px)`};function vi(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const o=r.breakpoints||s1;return t.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(t[l]),s),{})}if(typeof t=="object"){const o=r.breakpoints||s1;return Object.keys(t).reduce((s,a)=>{if(Object.keys(o.values||Wg).indexOf(a)!==-1){const l=o.up(a);s[l]=n(t[a],a)}else{const l=a;s[l]=t[l]}return s},{})}return n(t)}function JO(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,i)=>{const o=e.up(i);return r[o]={},r},{}))||{}}function ZO(e,t){return e.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},t)}function Hg(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,e);if(r!=null)return r}return t.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,e)}function a1(e,t,n,r=n){let i;return typeof e=="function"?i=e(n):Array.isArray(e)?i=e[n]||r:i=Hg(e,n)||r,t&&(i=t(i,r)),i}function G(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:i}=e,o=s=>{if(s[t]==null)return null;const a=s[t],l=s.theme,u=Hg(l,r)||{};return vi(s,a,p=>{let g=a1(u,i,p);return p===g&&typeof p=="string"&&(g=a1(u,i,`${t}${p==="default"?"":Be(p)}`,p)),n===!1?g:{[n]:g}})};return o.propTypes={},o.filterProps=[t],o}function wi(...e){const t=e.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>t[o]?Aa(i,t[o](r)):i,{});return n.propTypes={},n.filterProps=e.reduce((r,i)=>r.concat(i.filterProps),[]),n}function e5(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const t5={m:"margin",p:"padding"},n5={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},l1={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},r5=e5(e=>{if(e.length>2)if(l1[e])e=l1[e];else return[e];const[t,n]=e.split(""),r=t5[t],i=n5[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),i5=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],o5=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],Fx=[...i5,...o5];function Ll(e,t,n,r){var i;const o=(i=Hg(e,t,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function Bx(e){return Ll(e,"spacing",8)}function jl(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function s5(e,t){return n=>e.reduce((r,i)=>(r[i]=jl(t,n),r),{})}function a5(e,t,n,r){if(t.indexOf(n)===-1)return null;const i=r5(n),o=s5(i,r),s=e[n];return vi(e,s,o)}function l5(e,t){const n=Bx(e.theme);return Object.keys(e).map(r=>a5(e,t,r,n)).reduce(Aa,{})}function Lf(e){return l5(e,Fx)}Lf.propTypes={};Lf.filterProps=Fx;function Fl(e){return typeof e!="number"?e:`${e}px solid`}const u5=G({prop:"border",themeKey:"borders",transform:Fl}),c5=G({prop:"borderTop",themeKey:"borders",transform:Fl}),f5=G({prop:"borderRight",themeKey:"borders",transform:Fl}),d5=G({prop:"borderBottom",themeKey:"borders",transform:Fl}),h5=G({prop:"borderLeft",themeKey:"borders",transform:Fl}),p5=G({prop:"borderColor",themeKey:"palette"}),m5=G({prop:"borderTopColor",themeKey:"palette"}),g5=G({prop:"borderRightColor",themeKey:"palette"}),y5=G({prop:"borderBottomColor",themeKey:"palette"}),v5=G({prop:"borderLeftColor",themeKey:"palette"}),qg=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Ll(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:jl(t,r)});return vi(e,e.borderRadius,n)}return null};qg.propTypes={};qg.filterProps=["borderRadius"];const w5=wi(u5,c5,f5,d5,h5,p5,m5,g5,y5,v5,qg),Vx=w5,S5=G({prop:"displayPrint",cssProperty:!1,transform:e=>({"@media print":{display:e}})}),b5=G({prop:"display"}),x5=G({prop:"overflow"}),E5=G({prop:"textOverflow"}),C5=G({prop:"visibility"}),z5=G({prop:"whiteSpace"}),Wx=wi(S5,b5,x5,E5,C5,z5),k5=G({prop:"flexBasis"}),T5=G({prop:"flexDirection"}),_5=G({prop:"flexWrap"}),I5=G({prop:"justifyContent"}),P5=G({prop:"alignItems"}),O5=G({prop:"alignContent"}),N5=G({prop:"order"}),A5=G({prop:"flex"}),R5=G({prop:"flexGrow"}),$5=G({prop:"flexShrink"}),U5=G({prop:"alignSelf"}),D5=G({prop:"justifyItems"}),M5=G({prop:"justifySelf"}),L5=wi(k5,T5,_5,I5,P5,O5,N5,A5,R5,$5,U5,D5,M5),Hx=L5,Kg=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Ll(e.theme,"spacing",8),n=r=>({gap:jl(t,r)});return vi(e,e.gap,n)}return null};Kg.propTypes={};Kg.filterProps=["gap"];const Gg=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Ll(e.theme,"spacing",8),n=r=>({columnGap:jl(t,r)});return vi(e,e.columnGap,n)}return null};Gg.propTypes={};Gg.filterProps=["columnGap"];const Yg=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Ll(e.theme,"spacing",8),n=r=>({rowGap:jl(t,r)});return vi(e,e.rowGap,n)}return null};Yg.propTypes={};Yg.filterProps=["rowGap"];const j5=G({prop:"gridColumn"}),F5=G({prop:"gridRow"}),B5=G({prop:"gridAutoFlow"}),V5=G({prop:"gridAutoColumns"}),W5=G({prop:"gridAutoRows"}),H5=G({prop:"gridTemplateColumns"}),q5=G({prop:"gridTemplateRows"}),K5=G({prop:"gridTemplateAreas"}),G5=G({prop:"gridArea"}),Y5=wi(Kg,Gg,Yg,j5,F5,B5,V5,W5,H5,q5,K5,G5),qx=Y5;function Xg(e,t){return t==="grey"?t:e}const X5=G({prop:"color",themeKey:"palette",transform:Xg}),Q5=G({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Xg}),J5=G({prop:"backgroundColor",themeKey:"palette",transform:Xg}),Z5=wi(X5,Q5,J5),Kx=Z5,eN=G({prop:"position"}),tN=G({prop:"zIndex",themeKey:"zIndex"}),nN=G({prop:"top"}),rN=G({prop:"right"}),iN=G({prop:"bottom"}),oN=G({prop:"left"}),Gx=wi(eN,tN,nN,rN,iN,oN),sN=G({prop:"boxShadow",themeKey:"shadows"}),Yx=sN;function Si(e){return e<=1&&e!==0?`${e*100}%`:e}const aN=G({prop:"width",transform:Si}),Xx=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,i,o;return{maxWidth:((r=e.theme)==null||(i=r.breakpoints)==null||(o=i.values)==null?void 0:o[n])||Wg[n]||Si(n)}};return vi(e,e.maxWidth,t)}return null};Xx.filterProps=["maxWidth"];const lN=G({prop:"minWidth",transform:Si}),uN=G({prop:"height",transform:Si}),cN=G({prop:"maxHeight",transform:Si}),fN=G({prop:"minHeight",transform:Si});G({prop:"size",cssProperty:"width",transform:Si});G({prop:"size",cssProperty:"height",transform:Si});const dN=G({prop:"boxSizing"}),hN=wi(aN,Xx,lN,uN,cN,fN,dN),Qx=hN,pN=G({prop:"fontFamily",themeKey:"typography"}),mN=G({prop:"fontSize",themeKey:"typography"}),gN=G({prop:"fontStyle",themeKey:"typography"}),yN=G({prop:"fontWeight",themeKey:"typography"}),vN=G({prop:"letterSpacing"}),wN=G({prop:"textTransform"}),SN=G({prop:"lineHeight"}),bN=G({prop:"textAlign"}),xN=G({prop:"typography",cssProperty:!1,themeKey:"typography"}),EN=wi(xN,pN,mN,gN,yN,vN,SN,bN,wN),Jx=EN,u1={borders:Vx.filterProps,display:Wx.filterProps,flexbox:Hx.filterProps,grid:qx.filterProps,positions:Gx.filterProps,palette:Kx.filterProps,shadows:Yx.filterProps,sizing:Qx.filterProps,spacing:Lf.filterProps,typography:Jx.filterProps},Zx={borders:Vx,display:Wx,flexbox:Hx,grid:qx,positions:Gx,palette:Kx,shadows:Yx,sizing:Qx,spacing:Lf,typography:Jx};Object.keys(u1).reduce((e,t)=>(u1[t].forEach(n=>{e[n]=Zx[t]}),e),{});function CN(...e){const t=e.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function zN(e,t){return typeof e=="function"?e(t):e}function kN(e=Zx){const t=Object.keys(e).reduce((i,o)=>(e[o].filterProps.forEach(s=>{i[s]=e[o]}),i),{});function n(i,o,s){const a={[i]:o,theme:s},l=t[i];return l?l(a):{[i]:o}}function r(i){const{sx:o,theme:s={}}=i||{};if(!o)return null;function a(l){let u=l;if(typeof l=="function")u=l(s);else if(typeof l!="object")return l;if(!u)return null;const d=JO(s.breakpoints),p=Object.keys(d);let g=d;return Object.keys(u).forEach(y=>{const w=zN(u[y],s);if(w!=null)if(typeof w=="object")if(t[y])g=Aa(g,n(y,w,s));else{const v=vi({theme:s},w,c=>({[y]:c}));CN(v,w)?g[y]=r({sx:w,theme:s}):g=Aa(g,v)}else g=Aa(g,n(y,w,s))}),ZO(p,g)}return Array.isArray(o)?o.map(a):a(o)}return r}const eE=kN();eE.filterProps=["sx"];const TN=eE,_N=["values","unit","step"],IN=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>B({},n,{[r.key]:r.val}),{})};function PN(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,i=et(e,_N),o=IN(t),s=Object.keys(o);function a(g){return`@media (min-width:${typeof t[g]=="number"?t[g]:g}${n})`}function l(g){return`@media (max-width:${(typeof t[g]=="number"?t[g]:g)-r/100}${n})`}function u(g,y){const w=s.indexOf(y);return`@media (min-width:${typeof t[g]=="number"?t[g]:g}${n}) and (max-width:${(w!==-1&&typeof t[s[w]]=="number"?t[s[w]]:y)-r/100}${n})`}function d(g){return s.indexOf(g)+1<s.length?u(g,s[s.indexOf(g)+1]):a(g)}function p(g){const y=s.indexOf(g);return y===0?a(s[1]):y===s.length-1?l(s[y]):u(g,s[s.indexOf(g)+1]).replace("@media","@media not all and")}return B({keys:s,values:o,up:a,down:l,between:u,only:d,not:p,unit:n},i)}const ON={borderRadius:4},NN=ON;function AN(e=8){if(e.mui)return e;const t=Bx({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=t(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}const RN=["breakpoints","palette","spacing","shape"];function Qg(e={},...t){const{breakpoints:n={},palette:r={},spacing:i,shape:o={}}=e,s=et(e,RN),a=PN(n),l=AN(i);let u=kr({breakpoints:a,direction:"ltr",components:{},palette:B({mode:"light"},r),spacing:l,shape:B({},NN,o)},s);return u=t.reduce((d,p)=>kr(d,p),u),u}const $N=T.exports.createContext(null),tE=$N;function nE(){return T.exports.useContext(tE)}const UN=typeof Symbol=="function"&&Symbol.for,DN=UN?Symbol.for("mui.nested"):"__THEME_NESTED__";function MN(e,t){return typeof t=="function"?t(e):B({},e,t)}function LN(e){const{children:t,theme:n}=e,r=nE(),i=T.exports.useMemo(()=>{const o=r===null?n:MN(r,n);return o!=null&&(o[DN]=r!==null),o},[n,r]);return M(tE.Provider,{value:i,children:t})}function jN(e){return Object.keys(e).length===0}function rE(e=null){const t=nE();return!t||jN(t)?e:t}const FN=Qg();function Jg(e=FN){return rE(e)}const BN=["variant"];function c1(e){return e.length===0}function iE(e){const{variant:t}=e,n=et(e,BN);let r=t||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=c1(r)?e[i]:Be(e[i]):r+=`${c1(r)?i:Be(i)}${Be(e[i].toString())}`}),r}const VN=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],WN=["theme"],HN=["theme"];function aa(e){return Object.keys(e).length===0}function qN(e){return typeof e=="string"&&e.charCodeAt(0)>96}const KN=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,GN=(e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const r={};return n.forEach(i=>{const o=iE(i.props);r[o]=i.style}),r},YN=(e,t,n,r)=>{var i,o;const{ownerState:s={}}=e,a=[],l=n==null||(i=n.components)==null||(o=i[r])==null?void 0:o.variants;return l&&l.forEach(u=>{let d=!0;Object.keys(u.props).forEach(p=>{s[p]!==u.props[p]&&e[p]!==u.props[p]&&(d=!1)}),d&&a.push(t[iE(u.props)])}),a};function nc(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const XN=Qg();function QN(e={}){const{defaultTheme:t=XN,rootShouldForwardProp:n=nc,slotShouldForwardProp:r=nc,styleFunctionSx:i=TN}=e,o=s=>{const a=aa(s.theme)?t:s.theme;return i(B({},s,{theme:a}))};return o.__mui_systemSx=!0,(s,a={})=>{QO(s,S=>S.filter(b=>!(b!=null&&b.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:d,skipSx:p,overridesResolver:g}=a,y=et(a,VN),w=d!==void 0?d:u&&u!=="Root"||!1,v=p||!1;let c,f=nc;u==="Root"?f=n:u?f=r:qN(s)&&(f=void 0);const h=XO(s,B({shouldForwardProp:f,label:c},y)),m=(S,...b)=>{const x=b?b.map(C=>typeof C=="function"&&C.__emotion_real!==C?_=>{let{theme:N}=_,R=et(_,WN);return C(B({theme:aa(N)?t:N},R))}:C):[];let E=S;l&&g&&x.push(C=>{const _=aa(C.theme)?t:C.theme,N=KN(l,_);if(N){const R={};return Object.entries(N).forEach(([V,O])=>{R[V]=typeof O=="function"?O(B({},C,{theme:_})):O}),g(C,R)}return null}),l&&!w&&x.push(C=>{const _=aa(C.theme)?t:C.theme;return YN(C,GN(l,_),_,l)}),v||x.push(o);const z=x.length-b.length;if(Array.isArray(S)&&z>0){const C=new Array(z).fill("");E=[...S,...C],E.raw=[...S.raw,...C]}else typeof S=="function"&&S.__emotion_real!==S&&(E=C=>{let{theme:_}=C,N=et(C,HN);return S(B({theme:aa(_)?t:_},N))});return h(E,...x)};return h.withConfig&&(m.withConfig=h.withConfig),m}}function JN(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:EI(t.components[n].defaultProps,r)}function ZN({props:e,name:t,defaultTheme:n}){const r=Jg(n);return JN({theme:r,name:t,props:e})}function Zg(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function eA(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function ro(e){if(e.type)return e;if(e.charAt(0)==="#")return ro(eA(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(ms(9,e));let r=e.substring(t+1,e.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(ms(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function jf(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function tA(e){e=ro(e);const{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,o=r*Math.min(i,1-i),s=(u,d=(u+n/30)%12)=>i-o*Math.max(Math.min(d-3,9-d,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(a+="a",l.push(t[3])),jf({type:a,values:l})}function f1(e){e=ro(e);let t=e.type==="hsl"||e.type==="hsla"?ro(tA(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function nA(e,t){const n=f1(e),r=f1(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function oE(e,t){return e=ro(e),t=Zg(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,jf(e)}function rA(e,t){if(e=ro(e),t=Zg(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return jf(e)}function iA(e,t){if(e=ro(e),t=Zg(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return jf(e)}const oA={};function sA(e){const t=Jg();return M(jx.Provider,{value:typeof t=="object"?t:oA,children:e.children})}function aA(e){const{children:t,theme:n}=e;return M(LN,{theme:n,children:M(sA,{children:t})})}function lA(e,t){return B({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const uA={black:"#000",white:"#fff"},cl=uA,cA={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},fA=cA,dA={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Co=dA,hA={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},zo=hA,pA={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},la=pA,mA={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},ko=mA,gA={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},To=gA,yA={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},_o=yA,vA=["mode","contrastThreshold","tonalOffset"],d1={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:cl.white,default:cl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},ih={text:{primary:cl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:cl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function h1(e,t,n,r){const i=r.light||r,o=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=iA(e.main,i):t==="dark"&&(e.dark=rA(e.main,o)))}function wA(e="light"){return e==="dark"?{main:ko[200],light:ko[50],dark:ko[400]}:{main:ko[700],light:ko[400],dark:ko[800]}}function SA(e="light"){return e==="dark"?{main:Co[200],light:Co[50],dark:Co[400]}:{main:Co[500],light:Co[300],dark:Co[700]}}function bA(e="light"){return e==="dark"?{main:zo[500],light:zo[300],dark:zo[700]}:{main:zo[700],light:zo[400],dark:zo[800]}}function xA(e="light"){return e==="dark"?{main:To[400],light:To[300],dark:To[700]}:{main:To[700],light:To[500],dark:To[900]}}function EA(e="light"){return e==="dark"?{main:_o[400],light:_o[300],dark:_o[700]}:{main:_o[800],light:_o[500],dark:_o[900]}}function CA(e="light"){return e==="dark"?{main:la[400],light:la[300],dark:la[700]}:{main:"#ed6c02",light:la[500],dark:la[900]}}function zA(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,i=et(e,vA),o=e.primary||wA(t),s=e.secondary||SA(t),a=e.error||bA(t),l=e.info||xA(t),u=e.success||EA(t),d=e.warning||CA(t);function p(v){return nA(v,ih.text.primary)>=n?ih.text.primary:d1.text.primary}const g=({color:v,name:c,mainShade:f=500,lightShade:h=300,darkShade:m=700})=>{if(v=B({},v),!v.main&&v[f]&&(v.main=v[f]),!v.hasOwnProperty("main"))throw new Error(ms(11,c?` (${c})`:"",f));if(typeof v.main!="string")throw new Error(ms(12,c?` (${c})`:"",JSON.stringify(v.main)));return h1(v,"light",h,r),h1(v,"dark",m,r),v.contrastText||(v.contrastText=p(v.main)),v},y={dark:ih,light:d1};return kr(B({common:B({},cl),mode:t,primary:g({color:o,name:"primary"}),secondary:g({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:g({color:a,name:"error"}),warning:g({color:d,name:"warning"}),info:g({color:l,name:"info"}),success:g({color:u,name:"success"}),grey:fA,contrastThreshold:n,getContrastText:p,augmentColor:g,tonalOffset:r},y[t]),i)}const kA=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function TA(e){return Math.round(e*1e5)/1e5}const p1={textTransform:"uppercase"},m1='"Roboto", "Helvetica", "Arial", sans-serif';function _A(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=m1,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:d,pxToRem:p}=n,g=et(n,kA),y=i/14,w=p||(f=>`${f/u*y}rem`),v=(f,h,m,S,b)=>B({fontFamily:r,fontWeight:f,fontSize:w(h),lineHeight:m},r===m1?{letterSpacing:`${TA(S/h)}em`}:{},b,d),c={h1:v(o,96,1.167,-1.5),h2:v(o,60,1.2,-.5),h3:v(s,48,1.167,0),h4:v(s,34,1.235,.25),h5:v(s,24,1.334,0),h6:v(a,20,1.6,.15),subtitle1:v(s,16,1.75,.15),subtitle2:v(a,14,1.57,.1),body1:v(s,16,1.5,.15),body2:v(s,14,1.43,.15),button:v(a,14,1.75,.4,p1),caption:v(s,12,1.66,.4),overline:v(s,12,2.66,1,p1)};return kr(B({htmlFontSize:u,pxToRem:w,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},c),g,{clone:!1})}const IA=.2,PA=.14,OA=.12;function Pe(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${IA})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${PA})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${OA})`].join(",")}const NA=["none",Pe(0,2,1,-1,0,1,1,0,0,1,3,0),Pe(0,3,1,-2,0,2,2,0,0,1,5,0),Pe(0,3,3,-2,0,3,4,0,0,1,8,0),Pe(0,2,4,-1,0,4,5,0,0,1,10,0),Pe(0,3,5,-1,0,5,8,0,0,1,14,0),Pe(0,3,5,-1,0,6,10,0,0,1,18,0),Pe(0,4,5,-2,0,7,10,1,0,2,16,1),Pe(0,5,5,-3,0,8,10,1,0,3,14,2),Pe(0,5,6,-3,0,9,12,1,0,3,16,2),Pe(0,6,6,-3,0,10,14,1,0,4,18,3),Pe(0,6,7,-4,0,11,15,1,0,4,20,3),Pe(0,7,8,-4,0,12,17,2,0,5,22,4),Pe(0,7,8,-4,0,13,19,2,0,5,24,4),Pe(0,7,9,-4,0,14,21,2,0,5,26,4),Pe(0,8,9,-5,0,15,22,2,0,6,28,5),Pe(0,8,10,-5,0,16,24,2,0,6,30,5),Pe(0,8,11,-5,0,17,26,2,0,6,32,5),Pe(0,9,11,-5,0,18,28,2,0,7,34,6),Pe(0,9,12,-6,0,19,29,2,0,7,36,6),Pe(0,10,13,-6,0,20,31,3,0,8,38,7),Pe(0,10,13,-6,0,21,33,3,0,8,40,7),Pe(0,10,14,-6,0,22,35,3,0,8,42,7),Pe(0,11,14,-7,0,23,36,3,0,9,44,8),Pe(0,11,15,-7,0,24,38,3,0,9,46,8)],AA=NA,RA=["duration","easing","delay"],$A={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},UA={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function g1(e){return`${Math.round(e)}ms`}function DA(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function MA(e){const t=B({},$A,e.easing),n=B({},UA,e.duration);return B({getAutoHeightDuration:DA,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=t.easeInOut,delay:l=0}=o;return et(o,RA),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof s=="string"?s:g1(s)} ${a} ${typeof l=="string"?l:g1(l)}`).join(",")}},e,{easing:t,duration:n})}const LA={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},jA=LA,FA=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function sE(e={},...t){const{mixins:n={},palette:r={},transitions:i={},typography:o={}}=e,s=et(e,FA);if(e.vars)throw new Error(ms(18));const a=zA(r),l=Qg(e);let u=kr(l,{mixins:lA(l.breakpoints,n),palette:a,shadows:AA.slice(),typography:_A(a,o),transitions:MA(i),zIndex:B({},jA)});return u=kr(u,s),u=t.reduce((d,p)=>kr(d,p),u),u}const BA=sE(),e0=BA;function Ff({props:e,name:t}){return ZN({props:e,name:t,defaultTheme:e0})}const VA=e=>nc(e)&&e!=="classes",WA=QN({defaultTheme:e0,rootShouldForwardProp:VA}),co=WA;function HA(e){return Ns("MuiSvgIcon",e)}$l("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const qA=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],KA=e=>{const{color:t,fontSize:n,classes:r}=e,i={root:["root",t!=="inherit"&&`color${Be(t)}`,`fontSize${Be(n)}`]};return Rl(i,HA,r)},GA=co("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${Be(n.color)}`],t[`fontSize${Be(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,i,o,s,a,l,u,d,p,g,y,w,v,c,f,h;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=e.transitions)==null||(o=i.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((s=e.typography)==null||(a=s.pxToRem)==null?void 0:a.call(s,20))||"1.25rem",medium:((l=e.typography)==null||(u=l.pxToRem)==null?void 0:u.call(l,24))||"1.5rem",large:((d=e.typography)==null||(p=d.pxToRem)==null?void 0:p.call(d,35))||"2.1875rem"}[t.fontSize],color:(g=(y=(e.vars||e).palette)==null||(w=y[t.color])==null?void 0:w.main)!=null?g:{action:(v=(e.vars||e).palette)==null||(c=v.action)==null?void 0:c.active,disabled:(f=(e.vars||e).palette)==null||(h=f.action)==null?void 0:h.disabled,inherit:void 0}[t.color]}}),aE=T.exports.forwardRef(function(t,n){const r=Ff({props:t,name:"MuiSvgIcon"}),{children:i,className:o,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:d=!1,titleAccess:p,viewBox:g="0 0 24 24"}=r,y=et(r,qA),w=B({},r,{color:s,component:a,fontSize:l,instanceFontSize:t.fontSize,inheritViewBox:d,viewBox:g}),v={};d||(v.viewBox=g);const c=KA(w);return Zt(GA,B({as:a,className:xr(c.root,o),focusable:"false",color:u,"aria-hidden":p?void 0:!0,role:p?"img":void 0,ref:n},v,y,{ownerState:w,children:[i,p?M("title",{children:p}):null]}))});aE.muiName="SvgIcon";const y1=aE;function YA(e,t){function n(r,i){return M(y1,B({"data-testid":`${t}Icon`,ref:i},r,{children:e}))}return n.muiName=y1.muiName,T.exports.memo(T.exports.forwardRef(n))}const XA={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),yx.configure(e)}},QA=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:XA,capitalize:Be,createChainedFunction:aI,createSvgIcon:YA,debounce:lI,deprecatedPropType:uI,isMuiElement:cI,ownerDocument:Ag,ownerWindow:fI,requirePropFactory:dI,setRef:Uc,unstable_useEnhancedEffect:gs,unstable_useId:dx,unsupportedProp:mI,useControlled:hx,useEventCallback:px,useForkRef:to,useIsFocusVisible:mx},Symbol.toStringTag,{value:"Module"})),JA=dm(QA);var v1;function Rs(){return v1||(v1=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=JA}(th)),th}const $s=dm(yT);var ZA=uo.exports;Object.defineProperty(Ng,"__esModule",{value:!0});var lE=Ng.default=void 0,eR=ZA(Rs()),tR=$s,nR=(0,eR.default)((0,tR.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");lE=Ng.default=nR;var t0={},rR=uo.exports;Object.defineProperty(t0,"__esModule",{value:!0});var uE=t0.default=void 0,iR=rR(Rs()),oR=$s,sR=(0,iR.default)((0,oR.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");uE=t0.default=sR;var n0={},aR=uo.exports;Object.defineProperty(n0,"__esModule",{value:!0});var cE=n0.default=void 0,lR=aR(Rs()),uR=$s,cR=(0,lR.default)((0,uR.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");cE=n0.default=cR;var r0={},fR=uo.exports;Object.defineProperty(r0,"__esModule",{value:!0});var fE=r0.default=void 0,dR=fR(Rs()),hR=$s,pR=(0,dR.default)((0,hR.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}),"NotificationsNone");fE=r0.default=pR;var i0={},mR=uo.exports;Object.defineProperty(i0,"__esModule",{value:!0});var dE=i0.default=void 0,gR=mR(Rs()),yR=$s,vR=(0,gR.default)((0,yR.jsx)("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"}),"DarkMode");dE=i0.default=vR;function hE(){return Jg(e0)}function Ap(e,t){return Ap=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ap(e,t)}function wR(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ap(e,t)}const w1={disabled:!1},pE=Cr.createContext(null);var SR=function(t){return t.scrollTop},ga="unmounted",Ai="exited",Ri="entering",Oo="entered",Rp="exiting",Mr=function(e){wR(t,e);function t(r,i){var o;o=e.call(this,r,i)||this;var s=i,a=s&&!s.isMounting?r.enter:r.appear,l;return o.appearStatus=null,r.in?a?(l=Ai,o.appearStatus=Ri):l=Oo:r.unmountOnExit||r.mountOnEnter?l=ga:l=Ai,o.state={status:l},o.nextCallback=null,o}t.getDerivedStateFromProps=function(i,o){var s=i.in;return s&&o.status===ga?{status:Ai}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var o=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==Ri&&s!==Oo&&(o=Ri):(s===Ri||s===Oo)&&(o=Rp)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,o,s,a;return o=s=a=i,i!=null&&typeof i!="number"&&(o=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:o,enter:s,appear:a}},n.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===Ri){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:zu.findDOMNode(this);s&&SR(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ai&&this.setState({status:ga})},n.performEnter=function(i){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[zu.findDOMNode(this),a],u=l[0],d=l[1],p=this.getTimeouts(),g=a?p.appear:p.enter;if(!i&&!s||w1.disabled){this.safeSetState({status:Oo},function(){o.props.onEntered(u)});return}this.props.onEnter(u,d),this.safeSetState({status:Ri},function(){o.props.onEntering(u,d),o.onTransitionEnd(g,function(){o.safeSetState({status:Oo},function(){o.props.onEntered(u,d)})})})},n.performExit=function(){var i=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:zu.findDOMNode(this);if(!o||w1.disabled){this.safeSetState({status:Ai},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Rp},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:Ai},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},n.setNextCallback=function(i){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(i,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:zu.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=l[0],d=l[1];this.props.addEndListener(u,d)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===ga)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=et(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return M(pE.Provider,{value:null,children:typeof s=="function"?s(i,a):Cr.cloneElement(Cr.Children.only(s),a)})},t}(Cr.Component);Mr.contextType=pE;Mr.propTypes={};function Io(){}Mr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Io,onEntering:Io,onEntered:Io,onExit:Io,onExiting:Io,onExited:Io};Mr.UNMOUNTED=ga;Mr.EXITED=Ai;Mr.ENTERING=Ri;Mr.ENTERED=Oo;Mr.EXITING=Rp;const bR=Mr,xR=e=>e.scrollTop;function S1(e,t){var n,r;const{timeout:i,easing:o,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof i=="number"?i:i[t.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof o=="object"?o[t.mode]:o,delay:s.transitionDelay}}const ER=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function $p(e){return`scale(${e}, ${e**2})`}const CR={entering:{opacity:1,transform:$p(1)},entered:{opacity:1,transform:"none"}},oh=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),mE=T.exports.forwardRef(function(t,n){const{addEndListener:r,appear:i=!0,children:o,easing:s,in:a,onEnter:l,onEntered:u,onEntering:d,onExit:p,onExited:g,onExiting:y,style:w,timeout:v="auto",TransitionComponent:c=bR}=t,f=et(t,ER),h=T.exports.useRef(),m=T.exports.useRef(),S=hE(),b=T.exports.useRef(null),x=to(b,o.ref,n),E=O=>$=>{if(O){const L=b.current;$===void 0?O(L):O(L,$)}},z=E(d),k=E((O,$)=>{xR(O);const{duration:L,delay:P,easing:A}=S1({style:w,timeout:v,easing:s},{mode:"enter"});let j;v==="auto"?(j=S.transitions.getAutoHeightDuration(O.clientHeight),m.current=j):j=L,O.style.transition=[S.transitions.create("opacity",{duration:j,delay:P}),S.transitions.create("transform",{duration:oh?j:j*.666,delay:P,easing:A})].join(","),l&&l(O,$)}),C=E(u),_=E(y),N=E(O=>{const{duration:$,delay:L,easing:P}=S1({style:w,timeout:v,easing:s},{mode:"exit"});let A;v==="auto"?(A=S.transitions.getAutoHeightDuration(O.clientHeight),m.current=A):A=$,O.style.transition=[S.transitions.create("opacity",{duration:A,delay:L}),S.transitions.create("transform",{duration:oh?A:A*.666,delay:oh?L:L||A*.333,easing:P})].join(","),O.style.opacity=0,O.style.transform=$p(.75),p&&p(O)}),R=E(g),V=O=>{v==="auto"&&(h.current=setTimeout(O,m.current||0)),r&&r(b.current,O)};return T.exports.useEffect(()=>()=>{clearTimeout(h.current)},[]),M(c,B({appear:i,in:a,nodeRef:b,onEnter:k,onEntered:C,onEntering:z,onExit:N,onExited:R,onExiting:_,addEndListener:V,timeout:v==="auto"?null:v},f,{children:(O,$)=>T.exports.cloneElement(o,B({style:B({opacity:0,transform:$p(.75),visibility:O==="exited"&&!a?"hidden":void 0},CR[O],w,o.props.style),ref:x},$))}))});mE.muiSupportAuto=!0;const b1=mE,zR=["components","componentsProps","slots","slotProps"],kR=co(eO,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),TR=T.exports.forwardRef(function(t,n){var r;const i=rE(),o=Ff({props:t,name:"MuiPopper"}),{components:s,componentsProps:a,slots:l,slotProps:u}=o,d=et(o,zR),p=(r=l==null?void 0:l.root)!=null?r:s==null?void 0:s.Root;return M(kR,B({direction:i==null?void 0:i.direction,slots:{root:p},slotProps:u!=null?u:a},d,{ref:n}))}),gE=TR;function _R(e){return Ns("MuiTooltip",e)}const IR=$l("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),Qr=IR,PR=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function OR(e){return Math.round(e*1e5)/1e5}const NR=e=>{const{classes:t,disableInteractive:n,arrow:r,touch:i,placement:o}=e,s={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",i&&"touch",`tooltipPlacement${Be(o.split("-")[0])}`],arrow:["arrow"]};return Rl(s,_R,t)},AR=co(gE,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})(({theme:e,ownerState:t,open:n})=>B({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${Qr.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${Qr.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${Qr.arrow}`]:B({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${Qr.arrow}`]:B({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),RR=co("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t[`tooltipPlacement${Be(n.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>B({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:oE(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${OR(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${Qr.popper}[data-popper-placement*="left"] &`]:B({transformOrigin:"right center"},t.isRtl?B({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):B({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${Qr.popper}[data-popper-placement*="right"] &`]:B({transformOrigin:"left center"},t.isRtl?B({marginRight:"14px"},t.touch&&{marginRight:"24px"}):B({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${Qr.popper}[data-popper-placement*="top"] &`]:B({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${Qr.popper}[data-popper-placement*="bottom"] &`]:B({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),$R=co("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:oE(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Pu=!1,sh=null;function Ou(e,t){return n=>{t&&t(n),e(n)}}const UR=T.exports.forwardRef(function(t,n){var r,i,o,s,a,l,u,d,p,g,y,w,v,c,f,h,m,S,b;const x=Ff({props:t,name:"MuiTooltip"}),{arrow:E=!1,children:z,components:k={},componentsProps:C={},describeChild:_=!1,disableFocusListener:N=!1,disableHoverListener:R=!1,disableInteractive:V=!1,disableTouchListener:O=!1,enterDelay:$=100,enterNextDelay:L=0,enterTouchDelay:P=700,followCursor:A=!1,id:j,leaveDelay:Q=0,leaveTouchDelay:oe=1500,onClose:He,onOpen:nt,open:Ae,placement:Re="bottom",PopperComponent:Le,PopperProps:qe={},slotProps:$e={},slots:qn={},title:je,TransitionComponent:Bs=b1,TransitionProps:Wt}=x,un=et(x,PR),$t=hE(),dr=$t.direction==="rtl",[cn,Et]=T.exports.useState(),[Kn,Ht]=T.exports.useState(null),qt=T.exports.useRef(!1),Un=V||A,Gn=T.exports.useRef(),Yn=T.exports.useRef(),Ut=T.exports.useRef(),hr=T.exports.useRef(),[Ei,Lr]=hx({controlled:Ae,default:!1,name:"Tooltip",state:"open"});let xn=Ei;const Vs=dx(j),Ci=T.exports.useRef(),zi=T.exports.useCallback(()=>{Ci.current!==void 0&&(document.body.style.WebkitUserSelect=Ci.current,Ci.current=void 0),clearTimeout(hr.current)},[]);T.exports.useEffect(()=>()=>{clearTimeout(Gn.current),clearTimeout(Yn.current),clearTimeout(Ut.current),zi()},[zi]);const tu=F=>{clearTimeout(sh),Pu=!0,Lr(!0),nt&&!xn&&nt(F)},Dt=px(F=>{clearTimeout(sh),sh=setTimeout(()=>{Pu=!1},800+Q),Lr(!1),He&&xn&&He(F),clearTimeout(Gn.current),Gn.current=setTimeout(()=>{qt.current=!1},$t.transitions.duration.shortest)}),En=F=>{qt.current&&F.type!=="touchstart"||(cn&&cn.removeAttribute("title"),clearTimeout(Yn.current),clearTimeout(Ut.current),$||Pu&&L?Yn.current=setTimeout(()=>{tu(F)},Pu?L:$):tu(F))},Dn=F=>{clearTimeout(Yn.current),clearTimeout(Ut.current),Ut.current=setTimeout(()=>{Dt(F)},Q)},{isFocusVisibleRef:fn,onBlur:dn,onFocus:Ws,ref:nu}=mx(),[,Hs]=T.exports.useState(!1),po=F=>{dn(F),fn.current===!1&&(Hs(!1),Dn(F))},mo=F=>{cn||Et(F.currentTarget),Ws(F),fn.current===!0&&(Hs(!0),En(F))},go=F=>{qt.current=!0;const q=z.props;q.onTouchStart&&q.onTouchStart(F)},Cn=En,yo=Dn,dd=F=>{go(F),clearTimeout(Ut.current),clearTimeout(Gn.current),zi(),Ci.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",hr.current=setTimeout(()=>{document.body.style.WebkitUserSelect=Ci.current,En(F)},P)},hd=F=>{z.props.onTouchEnd&&z.props.onTouchEnd(F),zi(),clearTimeout(Ut.current),Ut.current=setTimeout(()=>{Dt(F)},oe)};T.exports.useEffect(()=>{if(!xn)return;function F(q){(q.key==="Escape"||q.key==="Esc")&&Dt(q)}return document.addEventListener("keydown",F),()=>{document.removeEventListener("keydown",F)}},[Dt,xn]);const pd=to(z.ref,nu,Et,n);!je&&je!==0&&(xn=!1);const ki=T.exports.useRef({x:0,y:0}),qs=T.exports.useRef(),md=F=>{const q=z.props;q.onMouseMove&&q.onMouseMove(F),ki.current={x:F.clientX,y:F.clientY},qs.current&&qs.current.update()},jr={},pr=typeof je=="string";_?(jr.title=!xn&&pr&&!R?je:null,jr["aria-describedby"]=xn?Vs:null):(jr["aria-label"]=pr?je:null,jr["aria-labelledby"]=xn&&!pr?Vs:null);const Ct=B({},jr,un,z.props,{className:xr(un.className,z.props.className),onTouchStart:go,ref:pd},A?{onMouseMove:md}:{}),Kt={};O||(Ct.onTouchStart=dd,Ct.onTouchEnd=hd),R||(Ct.onMouseOver=Ou(Cn,Ct.onMouseOver),Ct.onMouseLeave=Ou(yo,Ct.onMouseLeave),Un||(Kt.onMouseOver=Cn,Kt.onMouseLeave=yo)),N||(Ct.onFocus=Ou(mo,Ct.onFocus),Ct.onBlur=Ou(po,Ct.onBlur),Un||(Kt.onFocus=mo,Kt.onBlur=po));const Ti=T.exports.useMemo(()=>{var F;let q=[{name:"arrow",enabled:Boolean(Kn),options:{element:Kn,padding:4}}];return(F=qe.popperOptions)!=null&&F.modifiers&&(q=q.concat(qe.popperOptions.modifiers)),B({},qe.popperOptions,{modifiers:q})},[Kn,qe]),mr=B({},x,{isRtl:dr,arrow:E,disableInteractive:Un,placement:Re,PopperComponentProp:Le,touch:qt.current}),vo=NR(mr),Ks=(r=(i=qn.popper)!=null?i:k.Popper)!=null?r:AR,wo=(o=(s=(a=qn.transition)!=null?a:k.Transition)!=null?s:Bs)!=null?o:b1,_i=(l=(u=qn.tooltip)!=null?u:k.Tooltip)!=null?l:RR,ru=(d=(p=qn.arrow)!=null?p:k.Arrow)!=null?d:$R,Fr=ma(Ks,B({},qe,(g=$e.popper)!=null?g:C.popper,{className:xr(vo.popper,qe==null?void 0:qe.className,(y=(w=$e.popper)!=null?w:C.popper)==null?void 0:y.className)}),mr),gd=ma(wo,B({},Wt,(v=$e.transition)!=null?v:C.transition),mr),Gs=ma(_i,B({},(c=$e.tooltip)!=null?c:C.tooltip,{className:xr(vo.tooltip,(f=(h=$e.tooltip)!=null?h:C.tooltip)==null?void 0:f.className)}),mr),Ii=ma(ru,B({},(m=$e.arrow)!=null?m:C.arrow,{className:xr(vo.arrow,(S=(b=$e.arrow)!=null?b:C.arrow)==null?void 0:S.className)}),mr);return Zt(T.exports.Fragment,{children:[T.exports.cloneElement(z,Ct),M(Ks,B({as:Le!=null?Le:gE,placement:Re,anchorEl:A?{getBoundingClientRect:()=>({top:ki.current.y,left:ki.current.x,right:ki.current.x,bottom:ki.current.y,width:0,height:0})}:cn,popperRef:qs,open:cn?xn:!1,id:Vs,transition:!0},Kt,Fr,{popperOptions:Ti,children:({TransitionProps:F})=>M(wo,B({timeout:$t.transitions.duration.shorter},F,gd,{"data-foo":"bar",children:Zt(_i,B({},Gs,{children:[je,E?M(ru,B({},Ii,{ref:Ht})):null]}))}))}))]})}),Nu=UR,DR=e=>!e||!wx(e),x1=DR;function MR(e){return Ns("MuiBadge",e)}const LR=$l("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),Vr=LR,jR=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],ah=10,lh=4,FR=e=>{const{color:t,anchorOrigin:n,invisible:r,overlap:i,variant:o,classes:s={}}=e,a={root:["root"],badge:["badge",o,r&&"invisible",`anchorOrigin${Be(n.vertical)}${Be(n.horizontal)}`,`anchorOrigin${Be(n.vertical)}${Be(n.horizontal)}${Be(i)}`,`overlap${Be(i)}`,t!=="default"&&`color${Be(t)}`]};return Rl(a,MR,s)},BR=co("span",{name:"MuiBadge",slot:"Root",overridesResolver:(e,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),VR=co("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.badge,t[n.variant],t[`anchorOrigin${Be(n.anchorOrigin.vertical)}${Be(n.anchorOrigin.horizontal)}${Be(n.overlap)}`],n.color!=="default"&&t[`color${Be(n.color)}`],n.invisible&&t.invisible]}})(({theme:e,ownerState:t})=>B({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:ah*2,lineHeight:1,padding:"0 6px",height:ah*2,borderRadius:ah,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},t.color!=="default"&&{backgroundColor:(e.vars||e).palette[t.color].main,color:(e.vars||e).palette[t.color].contrastText},t.variant==="dot"&&{borderRadius:lh,height:lh*2,minWidth:lh*2,padding:0},t.anchorOrigin.vertical==="top"&&t.anchorOrigin.horizontal==="right"&&t.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${Vr.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},t.anchorOrigin.vertical==="bottom"&&t.anchorOrigin.horizontal==="right"&&t.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${Vr.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},t.anchorOrigin.vertical==="top"&&t.anchorOrigin.horizontal==="left"&&t.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${Vr.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},t.anchorOrigin.vertical==="bottom"&&t.anchorOrigin.horizontal==="left"&&t.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${Vr.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},t.anchorOrigin.vertical==="top"&&t.anchorOrigin.horizontal==="right"&&t.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${Vr.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},t.anchorOrigin.vertical==="bottom"&&t.anchorOrigin.horizontal==="right"&&t.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${Vr.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},t.anchorOrigin.vertical==="top"&&t.anchorOrigin.horizontal==="left"&&t.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${Vr.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},t.anchorOrigin.vertical==="bottom"&&t.anchorOrigin.horizontal==="left"&&t.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${Vr.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},t.invisible&&{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})})),WR=T.exports.forwardRef(function(t,n){var r,i,o,s,a,l;const u=Ff({props:t,name:"MuiBadge"}),{anchorOrigin:d={vertical:"top",horizontal:"right"},className:p,component:g="span",components:y={},componentsProps:w={},overlap:v="rectangular",color:c="default",invisible:f=!1,max:h,badgeContent:m,slots:S,slotProps:b,showZero:x=!1,variant:E="standard"}=u,z=et(u,jR),k=gx({anchorOrigin:d,color:c,overlap:v,variant:E});let C=f;f===!1&&(m===0&&!x||m==null&&E!=="dot")&&(C=!0);const{color:_=c,overlap:N=v,anchorOrigin:R=d,variant:V=E}=C?k:u,O=B({},u,{anchorOrigin:R,invisible:C,color:_,overlap:N,variant:V}),$=FR(O);let L;V!=="dot"&&(L=m&&Number(m)>h?`${h}+`:m);const P=(r=(i=S==null?void 0:S.root)!=null?i:y.Root)!=null?r:BR,A=(o=(s=S==null?void 0:S.badge)!=null?s:y.Badge)!=null?o:VR,j=(a=b==null?void 0:b.root)!=null?a:w.root,Q=(l=b==null?void 0:b.badge)!=null?l:w.badge;return M(UI,B({invisible:f,badgeContent:L,showZero:x,max:h},z,{slots:{root:P,badge:A},className:xr(j==null?void 0:j.className,$.root,p),slotProps:{root:B({},j,x1(P)&&{as:g,ownerState:B({},j==null?void 0:j.ownerState,{anchorOrigin:R,color:_,overlap:N,variant:V})}),badge:B({},Q,{className:xr($.badge,Q==null?void 0:Q.className)},x1(A)&&{ownerState:B({},Q==null?void 0:Q.ownerState,{anchorOrigin:R,color:_,overlap:N,variant:V})})},ref:n}))}),HR=WR;var o0={},qR=uo.exports;Object.defineProperty(o0,"__esModule",{value:!0});var yE=o0.default=void 0,KR=qR(Rs()),GR=$s,YR=(0,KR.default)((0,GR.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"}),"CancelOutlined");yE=o0.default=YR;const XR=({customFuncOne:e,customFuncTwo:t,disabledSide:n,mobileNav:r,microStatus:i})=>{let o=0;return Zt("div",{className:"flex justify-evenly items-center p-3 relative mx-3",children:[M("button",{type:"button",onClick:n?t:e,className:"hover:scale-110 transition-all duration-150 ease-in-out",children:r?M(yE,{fontSize:"large"}):M(lE,{fontSize:"large"})}),Zt("div",{className:"flex gap-2 items-center sm:text-lg text-md",children:[M("div",{className:`${i[0]?"bg-green-400":"bg-red-400"} h-3 w-3 ml-5 rounded-full`}),!n&&M("p",{children:i[0]?"Online":"Offline"})]}),M("div",{className:"w-full"}),Zt("div",{className:"flex gap-2 sm:gap-4",children:[M(Nu,{title:"Theme",children:M("button",{type:"button",onClick:()=>{},className:"hover:scale-110 transition-all duration-150 ease-in-out outline-none",children:M(dE,{fontSize:"large"})})}),!r&&M(Nu,{title:"Notifications",className:"hover:scale-110 transition-all duration-150 ease-in-out",children:M("button",{type:"button",onClick:()=>{},children:M(HR,{badgeContent:o,color:"info",overlap:"circular",children:M(fE,{fontSize:"large"})})})}),!r&&M(Nu,{title:"Settings",className:"hover:scale-110 transition-all duration-150 ease-in-out hover:rotate-180",children:M("button",{type:"button",onClick:()=>{},children:M(cE,{fontSize:"large"})})}),!r&&M(Nu,{title:"Profile",className:"hover:scale-110 transition-all duration-150 ease-in-out",children:M("button",{type:"button",onClick:()=>{},children:M(uE,{fontSize:"large"})})})]}),M("div",{})]})};/**
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
 */const vE=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},QR=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},wE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,p=(o&3)<<4|a>>4;let g=(a&15)<<2|u>>6,y=u&63;l||(y=64,s||(g=64)),r.push(n[d],n[p],n[g],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vE(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):QR(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw Error();const g=o<<2|a>>4;if(r.push(g),u!==64){const y=a<<4&240|u>>2;if(r.push(y),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},JR=function(e){const t=vE(e);return wE.encodeByteArray(t,!0)},Lc=function(e){return JR(e).replace(/\./g,"")},ZR=function(e){try{return wE.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function e$(){return typeof indexedDB=="object"}function t$(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function n$(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const r$=()=>n$().__FIREBASE_DEFAULTS__,i$=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},o$=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ZR(e[1]);return t&&JSON.parse(t)},SE=()=>{try{return r$()||i$()||o$()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},s$=e=>{var t,n;return(n=(t=SE())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},a$=e=>{const t=s$(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},l$=()=>{var e;return(e=SE())===null||e===void 0?void 0:e.config};/**
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
 */class u${constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function c$(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Lc(JSON.stringify(n)),Lc(JSON.stringify(s)),a].join(".")}/**
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
 */const f$="FirebaseError";class Us extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=f$,Object.setPrototypeOf(this,Us.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bE.prototype.create)}}class bE{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?d$(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Us(i,a,r)}}function d$(e,t){return e.replace(h$,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const h$=/\{\$([^}]+)}/g;function Up(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(E1(o)&&E1(s)){if(!Up(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function E1(e){return e!==null&&typeof e=="object"}/**
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
 */function xE(e){return e&&e._delegate?e._delegate:e}class fl{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const $i="[DEFAULT]";/**
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
 */class p${constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new u$;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(g$(t))try{this.getOrInitializeService({instanceIdentifier:$i})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=$i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=$i){return this.instances.has(t)}getOptions(t=$i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:m$(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=$i){return this.component?this.component.multipleInstances?t:$i:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function m$(e){return e===$i?void 0:e}function g$(e){return e.instantiationMode==="EAGER"}/**
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
 */class y${constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new p$(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Se||(Se={}));const v$={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},w$=Se.INFO,S$={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},b$=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=S$[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class EE{constructor(t){this.name=t,this._logLevel=w$,this._logHandler=b$,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?v$[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...t),this._logHandler(this,Se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...t),this._logHandler(this,Se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...t),this._logHandler(this,Se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...t),this._logHandler(this,Se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...t),this._logHandler(this,Se.ERROR,...t)}}const x$=(e,t)=>t.some(n=>e instanceof n);let C1,z1;function E$(){return C1||(C1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C$(){return z1||(z1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CE=new WeakMap,Dp=new WeakMap,zE=new WeakMap,uh=new WeakMap,s0=new WeakMap;function z$(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(ai(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&CE.set(n,e)}).catch(()=>{}),s0.set(t,e),t}function k$(e){if(Dp.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Dp.set(e,t)}let Mp={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Dp.get(e);if(t==="objectStoreNames")return e.objectStoreNames||zE.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ai(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function T$(e){Mp=e(Mp)}function _$(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ch(this),t,...n);return zE.set(r,t.sort?t.sort():[t]),ai(r)}:C$().includes(e)?function(...t){return e.apply(ch(this),t),ai(CE.get(this))}:function(...t){return ai(e.apply(ch(this),t))}}function I$(e){return typeof e=="function"?_$(e):(e instanceof IDBTransaction&&k$(e),x$(e,E$())?new Proxy(e,Mp):e)}function ai(e){if(e instanceof IDBRequest)return z$(e);if(uh.has(e))return uh.get(e);const t=I$(e);return t!==e&&(uh.set(e,t),s0.set(t,e)),t}const ch=e=>s0.get(e);function P$(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=ai(s);return r&&s.addEventListener("upgradeneeded",l=>{r(ai(s.result),l.oldVersion,l.newVersion,ai(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const O$=["get","getKey","getAll","getAllKeys","count"],N$=["put","add","delete","clear"],fh=new Map;function k1(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fh.get(t))return fh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=N$.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||O$.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return fh.set(t,o),o}T$(e=>({...e,get:(t,n,r)=>k1(t,n)||e.get(t,n,r),has:(t,n)=>!!k1(t,n)||e.has(t,n)}));/**
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
 */class A${constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(R$(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function R$(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Lp="@firebase/app",T1="0.8.4";/**
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
 */const io=new EE("@firebase/app"),$$="@firebase/app-compat",U$="@firebase/analytics-compat",D$="@firebase/analytics",M$="@firebase/app-check-compat",L$="@firebase/app-check",j$="@firebase/auth",F$="@firebase/auth-compat",B$="@firebase/database",V$="@firebase/database-compat",W$="@firebase/functions",H$="@firebase/functions-compat",q$="@firebase/installations",K$="@firebase/installations-compat",G$="@firebase/messaging",Y$="@firebase/messaging-compat",X$="@firebase/performance",Q$="@firebase/performance-compat",J$="@firebase/remote-config",Z$="@firebase/remote-config-compat",eU="@firebase/storage",tU="@firebase/storage-compat",nU="@firebase/firestore",rU="@firebase/firestore-compat",iU="firebase",oU="9.14.0";/**
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
 */const jp="[DEFAULT]",sU={[Lp]:"fire-core",[$$]:"fire-core-compat",[D$]:"fire-analytics",[U$]:"fire-analytics-compat",[L$]:"fire-app-check",[M$]:"fire-app-check-compat",[j$]:"fire-auth",[F$]:"fire-auth-compat",[B$]:"fire-rtdb",[V$]:"fire-rtdb-compat",[W$]:"fire-fn",[H$]:"fire-fn-compat",[q$]:"fire-iid",[K$]:"fire-iid-compat",[G$]:"fire-fcm",[Y$]:"fire-fcm-compat",[X$]:"fire-perf",[Q$]:"fire-perf-compat",[J$]:"fire-rc",[Z$]:"fire-rc-compat",[eU]:"fire-gcs",[tU]:"fire-gcs-compat",[nU]:"fire-fst",[rU]:"fire-fst-compat","fire-js":"fire-js",[iU]:"fire-js-all"};/**
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
 */const jc=new Map,Fp=new Map;function aU(e,t){try{e.container.addComponent(t)}catch(n){io.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Fc(e){const t=e.name;if(Fp.has(t))return io.debug(`There were multiple attempts to register component ${t}.`),!1;Fp.set(t,e);for(const n of jc.values())aU(n,e);return!0}function lU(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const uU={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},li=new bE("app","Firebase",uU);/**
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
 */class cU{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fl("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw li.create("app-deleted",{appName:this._name})}}/**
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
 */const fU=oU;function kE(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:jp,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw li.create("bad-app-name",{appName:String(i)});if(n||(n=l$()),!n)throw li.create("no-options");const o=jc.get(i);if(o){if(Up(n,o.options)&&Up(r,o.config))return o;throw li.create("duplicate-app",{appName:i})}const s=new y$(i);for(const l of Fp.values())s.addComponent(l);const a=new cU(n,r,s);return jc.set(i,a),a}function dU(e=jp){const t=jc.get(e);if(!t&&e===jp)return kE();if(!t)throw li.create("no-app",{appName:e});return t}function es(e,t,n){var r;let i=(r=sU[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),io.warn(a.join(" "));return}Fc(new fl(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const hU="firebase-heartbeat-database",pU=1,dl="firebase-heartbeat-store";let dh=null;function TE(){return dh||(dh=P$(hU,pU,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(dl)}}}).catch(e=>{throw li.create("idb-open",{originalErrorMessage:e.message})})),dh}async function mU(e){var t;try{return(await TE()).transaction(dl).objectStore(dl).get(_E(e))}catch(n){if(n instanceof Us)io.warn(n.message);else{const r=li.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});io.warn(r.message)}}}async function _1(e,t){var n;try{const i=(await TE()).transaction(dl,"readwrite");return await i.objectStore(dl).put(t,_E(e)),i.done}catch(r){if(r instanceof Us)io.warn(r.message);else{const i=li.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});io.warn(i.message)}}}function _E(e){return`${e.name}!${e.options.appId}`}/**
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
 */const gU=1024,yU=30*24*60*60*1e3;class vU{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SU(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=I1();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=yU}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=I1(),{heartbeatsToSend:n,unsentEntries:r}=wU(this._heartbeatsCache.heartbeats),i=Lc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function I1(){return new Date().toISOString().substring(0,10)}function wU(e,t=gU){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),P1(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),P1(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SU{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return e$()?t$().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mU(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _1(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _1(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function P1(e){return Lc(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function bU(e){Fc(new fl("platform-logger",t=>new A$(t),"PRIVATE")),Fc(new fl("heartbeat",t=>new vU(t),"PRIVATE")),es(Lp,T1,e),es(Lp,T1,"esm2017"),es("fire-js","")}bU("");var xU="firebase",EU="9.14.0";/**
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
 */es(xU,EU,"app");var CU=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Y,a0=a0||{},te=CU||self;function Bc(){}function Bf(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Bl(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function zU(e){return Object.prototype.hasOwnProperty.call(e,hh)&&e[hh]||(e[hh]=++kU)}var hh="closure_uid_"+(1e9*Math.random()>>>0),kU=0;function TU(e,t,n){return e.call.apply(e.bind,arguments)}function _U(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Ot(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ot=TU:Ot=_U,Ot.apply(null,arguments)}function Au(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function xt(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return t.prototype[i].apply(r,s)}}function bi(){this.s=this.s,this.o=this.o}var IU=0;bi.prototype.s=!1;bi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),IU!=0)&&zU(this)};bi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const IE=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function l0(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function O1(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Bf(r)){const i=e.length||0,o=r.length||0;e.length=i+o;for(let s=0;s<o;s++)e[i+s]=r[s]}else e.push(r)}}function Nt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Nt.prototype.h=function(){this.defaultPrevented=!0};var PU=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{te.addEventListener("test",Bc,t),te.removeEventListener("test",Bc,t)}catch{}return e}();function Vc(e){return/^[\s\xa0]*$/.test(e)}var N1=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ph(e,t){return e<t?-1:e>t?1:0}function Vf(){var e=te.navigator;return e&&(e=e.userAgent)?e:""}function nr(e){return Vf().indexOf(e)!=-1}function u0(e){return u0[" "](e),e}u0[" "]=Bc;function OU(e){var t=RU;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var NU=nr("Opera"),xs=nr("Trident")||nr("MSIE"),PE=nr("Edge"),Bp=PE||xs,OE=nr("Gecko")&&!(Vf().toLowerCase().indexOf("webkit")!=-1&&!nr("Edge"))&&!(nr("Trident")||nr("MSIE"))&&!nr("Edge"),AU=Vf().toLowerCase().indexOf("webkit")!=-1&&!nr("Edge");function NE(){var e=te.document;return e?e.documentMode:void 0}var Wc;e:{var mh="",gh=function(){var e=Vf();if(OE)return/rv:([^\);]+)(\)|;)/.exec(e);if(PE)return/Edge\/([\d\.]+)/.exec(e);if(xs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(AU)return/WebKit\/(\S+)/.exec(e);if(NU)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(gh&&(mh=gh?gh[1]:""),xs){var yh=NE();if(yh!=null&&yh>parseFloat(mh)){Wc=String(yh);break e}}Wc=mh}var RU={};function $U(){return OU(function(){let e=0;const t=N1(String(Wc)).split("."),n=N1("9").split("."),r=Math.max(t.length,n.length);for(let s=0;e==0&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i[0].length==0&&o[0].length==0)break;e=ph(i[1].length==0?0:parseInt(i[1],10),o[1].length==0?0:parseInt(o[1],10))||ph(i[2].length==0,o[2].length==0)||ph(i[2],o[2]),i=i[3],o=o[3]}while(e==0)}return 0<=e})}var Vp;if(te.document&&xs){var A1=NE();Vp=A1||parseInt(Wc,10)||void 0}else Vp=void 0;var UU=Vp;function hl(e,t){if(Nt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(OE){e:{try{u0(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:DU[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&hl.X.h.call(this)}}xt(hl,Nt);var DU={2:"touch",3:"pen",4:"mouse"};hl.prototype.h=function(){hl.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Vl="closure_listenable_"+(1e6*Math.random()|0),MU=0;function LU(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++MU,this.ba=this.ea=!1}function Wf(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function c0(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function AE(e){const t={};for(const n in e)t[n]=e[n];return t}const R1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function RE(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<R1.length;o++)n=R1[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Hf(e){this.src=e,this.g={},this.h=0}Hf.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=Hp(e,t,r,i);return-1<s?(t=e[s],n||(t.ea=!1)):(t=new LU(t,this.src,o,!!r,i),t.ea=n,e.push(t)),t};function Wp(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=IE(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(Wf(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Hp(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ba&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}var f0="closure_lm_"+(1e6*Math.random()|0),vh={};function $E(e,t,n,r,i){if(r&&r.once)return DE(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)$E(e,t[o],n,r,i);return null}return n=p0(n),e&&e[Vl]?e.N(t,n,Bl(r)?!!r.capture:!!r,i):UE(e,t,n,!1,r,i)}function UE(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=Bl(i)?!!i.capture:!!i,a=h0(e);if(a||(e[f0]=a=new Hf(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=jU(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)PU||(i=s),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(LE(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jU(){function e(n){return t.call(e.src,e.listener,n)}const t=FU;return e}function DE(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)DE(e,t[o],n,r,i);return null}return n=p0(n),e&&e[Vl]?e.O(t,n,Bl(r)?!!r.capture:!!r,i):UE(e,t,n,!0,r,i)}function ME(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)ME(e,t[o],n,r,i);else r=Bl(r)?!!r.capture:!!r,n=p0(n),e&&e[Vl]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=Hp(o,n,r,i),-1<n&&(Wf(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=h0(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Hp(t,n,r,i)),(n=-1<e?t[e]:null)&&d0(n))}function d0(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Vl])Wp(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(LE(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=h0(t))?(Wp(n,e),n.h==0&&(n.src=null,t[f0]=null)):Wf(e)}}}function LE(e){return e in vh?vh[e]:vh[e]="on"+e}function FU(e,t){if(e.ba)e=!0;else{t=new hl(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&d0(e),e=n.call(r,t)}return e}function h0(e){return e=e[f0],e instanceof Hf?e:null}var wh="__closure_events_fn_"+(1e9*Math.random()>>>0);function p0(e){return typeof e=="function"?e:(e[wh]||(e[wh]=function(t){return e.handleEvent(t)}),e[wh])}function ft(){bi.call(this),this.i=new Hf(this),this.P=this,this.I=null}xt(ft,bi);ft.prototype[Vl]=!0;ft.prototype.removeEventListener=function(e,t,n,r){ME(this,e,t,n,r)};function St(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new Nt(t,e);else if(t instanceof Nt)t.target=t.target||e;else{var i=t;t=new Nt(r,e),RE(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=Ru(s,r,!0,t)&&i}if(s=t.g=e,i=Ru(s,r,!0,t)&&i,i=Ru(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=Ru(s,r,!1,t)&&i}ft.prototype.M=function(){if(ft.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Wf(n[r]);delete e.g[t],e.h--}}this.I=null};ft.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ft.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Ru(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&Wp(e.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var m0=te.JSON.stringify;function BU(){var e=BE;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class VU{constructor(){this.h=this.g=null}add(t,n){const r=jE.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var jE=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new WU,e=>e.reset());class WU{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function HU(e){te.setTimeout(()=>{throw e},0)}function FE(e,t){qp||qU(),Kp||(qp(),Kp=!0),BE.add(e,t)}var qp;function qU(){var e=te.Promise.resolve(void 0);qp=function(){e.then(KU)}}var Kp=!1,BE=new VU;function KU(){for(var e;e=BU();){try{e.h.call(e.g)}catch(n){HU(n)}var t=jE;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Kp=!1}function qf(e,t){ft.call(this),this.h=e||1,this.g=t||te,this.j=Ot(this.lb,this),this.l=Date.now()}xt(qf,ft);Y=qf.prototype;Y.ca=!1;Y.R=null;Y.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),St(this,"tick"),this.ca&&(g0(this),this.start()))}};Y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function g0(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}Y.M=function(){qf.X.M.call(this),g0(this),delete this.g};function y0(e,t,n){if(typeof e=="function")n&&(e=Ot(e,n));else if(e&&typeof e.handleEvent=="function")e=Ot(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:te.setTimeout(e,t||0)}function VE(e){e.g=y0(()=>{e.g=null,e.i&&(e.i=!1,VE(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class GU extends bi{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:VE(this)}M(){super.M(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pl(e){bi.call(this),this.h=e,this.g={}}xt(pl,bi);var $1=[];function WE(e,t,n,r){Array.isArray(n)||(n&&($1[0]=n.toString()),n=$1);for(var i=0;i<n.length;i++){var o=$E(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function HE(e){c0(e.g,function(t,n){this.g.hasOwnProperty(n)&&d0(t)},e),e.g={}}pl.prototype.M=function(){pl.X.M.call(this),HE(this)};pl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Kf(){this.g=!0}Kf.prototype.Aa=function(){this.g=!1};function YU(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var d=u[0];u=u[1];var p=d.split("_");s=2<=p.length&&p[1]=="type"?s+(d+"="+u+"&"):s+(d+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+s})}function XU(e,t,n,r,i,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+s})}function Wo(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+JU(e,n)+(r?" "+r:"")})}function QU(e,t){e.info(function(){return"TIMEOUT: "+t})}Kf.prototype.info=function(){};function JU(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return m0(n)}catch{return t}}var fo={},U1=null;function Gf(){return U1=U1||new ft}fo.Pa="serverreachability";function qE(e){Nt.call(this,fo.Pa,e)}xt(qE,Nt);function ml(e){const t=Gf();St(t,new qE(t))}fo.STAT_EVENT="statevent";function KE(e,t){Nt.call(this,fo.STAT_EVENT,e),this.stat=t}xt(KE,Nt);function jt(e){const t=Gf();St(t,new KE(t,e))}fo.Qa="timingevent";function GE(e,t){Nt.call(this,fo.Qa,e),this.size=t}xt(GE,Nt);function Wl(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){e()},t)}var Yf={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},YE={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function v0(){}v0.prototype.h=null;function D1(e){return e.h||(e.h=e.i())}function XE(){}var Hl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function w0(){Nt.call(this,"d")}xt(w0,Nt);function S0(){Nt.call(this,"c")}xt(S0,Nt);var Gp;function Xf(){}xt(Xf,v0);Xf.prototype.g=function(){return new XMLHttpRequest};Xf.prototype.i=function(){return{}};Gp=new Xf;function ql(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new pl(this),this.O=ZU,e=Bp?125:void 0,this.T=new qf(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new QE}function QE(){this.i=null,this.g="",this.h=!1}var ZU=45e3,Yp={},Hc={};Y=ql.prototype;Y.setTimeout=function(e){this.O=e};function Xp(e,t,n){e.K=1,e.v=Jf(Rr(t)),e.s=n,e.P=!0,JE(e,null)}function JE(e,t){e.F=Date.now(),Kl(e),e.A=Rr(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),sC(n.i,"t",r),e.C=0,n=e.l.H,e.h=new QE,e.g=TC(e.l,n?t:null,!e.s),0<e.N&&(e.L=new GU(Ot(e.La,e,e.g),e.N)),WE(e.S,e.g,"readystatechange",e.ib),t=e.H?AE(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),ml(),YU(e.j,e.u,e.A,e.m,e.U,e.s)}Y.ib=function(e){e=e.target;const t=this.L;t&&Er(e)==3?t.l():this.La(e)};Y.La=function(e){try{if(e==this.g)e:{const d=Er(this.g);var t=this.g.Ea();const p=this.g.aa();if(!(3>d)&&(d!=3||Bp||this.g&&(this.h.h||this.g.fa()||F1(this.g)))){this.I||d!=4||t==7||(t==8||0>=p?ml(3):ml(2)),Qf(this);var n=this.g.aa();this.Y=n;t:if(ZE(this)){var r=F1(this.g);e="";var i=r.length,o=Er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Li(this),Ra(this);var s="";break t}this.h.i=new te.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=n==200,XU(this.j,this.u,this.A,this.m,this.U,d,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vc(a)){var u=a;break t}}u=null}if(n=u)Wo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Qp(this,n);else{this.i=!1,this.o=3,jt(12),Li(this),Ra(this);break e}}this.P?(eC(this,d,s),Bp&&this.i&&d==3&&(WE(this.S,this.T,"tick",this.hb),this.T.start())):(Wo(this.j,this.m,s,null),Qp(this,s)),d==4&&Li(this),this.i&&!this.I&&(d==4?EC(this.l,this):(this.i=!1,Kl(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,jt(12)):(this.o=0,jt(13)),Li(this),Ra(this)}}}catch{}finally{}};function ZE(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function eC(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=e4(e,n),i==Hc){t==4&&(e.o=4,jt(14),r=!1),Wo(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Yp){e.o=4,jt(15),Wo(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Wo(e.j,e.m,i,null),Qp(e,i);ZE(e)&&i!=Hc&&i!=Yp&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,jt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),T0(t),t.K=!0,jt(11))):(Wo(e.j,e.m,n,"[Invalid Chunked Response]"),Li(e),Ra(e))}Y.hb=function(){if(this.g){var e=Er(this.g),t=this.g.fa();this.C<t.length&&(Qf(this),eC(this,e,t),this.i&&e!=4&&Kl(this))}};function e4(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Hc:(n=Number(t.substring(n,r)),isNaN(n)?Yp:(r+=1,r+n>t.length?Hc:(t=t.substr(r,n),e.C=r+n,t)))}Y.cancel=function(){this.I=!0,Li(this)};function Kl(e){e.V=Date.now()+e.O,tC(e,e.O)}function tC(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Wl(Ot(e.gb,e),t)}function Qf(e){e.B&&(te.clearTimeout(e.B),e.B=null)}Y.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(QU(this.j,this.A),this.K!=2&&(ml(),jt(17)),Li(this),this.o=2,Ra(this)):tC(this,this.V-e)};function Ra(e){e.l.G==0||e.I||EC(e.l,e)}function Li(e){Qf(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,g0(e.T),HE(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Qp(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Jp(n.h,e))){if(!e.J&&Jp(n.h,e)&&n.G==3){try{var r=n.Fa.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Gc(n),td(n);else break e;k0(n),jt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Wl(Ot(n.cb,n),6e3));if(1>=uC(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ji(n,11)}else if((e.J||n.g==e)&&Gc(n),!Vc(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const d=u[3];d!=null&&(n.ma=d,n.j.info("VER="+n.ma));const p=u[4];p!=null&&(n.Ca=p,n.j.info("SVER="+n.Ca));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=e.g;if(y){const w=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var o=r.h;o.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(b0(o,o.h),o.h=null))}if(r.D){const v=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Ne(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=e;if(r.sa=kC(r,r.H?r.ka:null,r.V),s.J){cC(r.h,s);var a=s,l=r.J;l&&a.setTimeout(l),a.B&&(Qf(a),Kl(a)),r.g=s}else bC(r);0<n.i.length&&nd(n)}else u[0]!="stop"&&u[0]!="close"||ji(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ji(n,7):z0(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ml(4)}catch{}}function t4(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Bf(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function n4(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Bf(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function nC(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Bf(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=n4(e),r=t4(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}var rC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function r4(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Hi(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Hi){this.h=t!==void 0?t:e.h,qc(this,e.j),this.s=e.s,this.g=e.g,Kc(this,e.m),this.l=e.l,t=e.i;var n=new gl;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),M1(this,n),this.o=e.o}else e&&(n=String(e).match(rC))?(this.h=!!t,qc(this,n[1]||"",!0),this.s=ya(n[2]||""),this.g=ya(n[3]||"",!0),Kc(this,n[4]),this.l=ya(n[5]||"",!0),M1(this,n[6]||"",!0),this.o=ya(n[7]||"")):(this.h=!!t,this.i=new gl(null,this.h))}Hi.prototype.toString=function(){var e=[],t=this.j;t&&e.push(va(t,L1,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(va(t,L1,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(va(n,n.charAt(0)=="/"?s4:o4,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",va(n,l4)),e.join("")};function Rr(e){return new Hi(e)}function qc(e,t,n){e.j=n?ya(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Kc(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function M1(e,t,n){t instanceof gl?(e.i=t,u4(e.i,e.h)):(n||(t=va(t,a4)),e.i=new gl(t,e.h))}function Ne(e,t,n){e.i.set(t,n)}function Jf(e){return Ne(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ya(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function va(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,i4),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function i4(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var L1=/[#\/\?@]/g,o4=/[#\?:]/g,s4=/[#\?]/g,a4=/[#\?@]/g,l4=/#/g;function gl(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function xi(e){e.g||(e.g=new Map,e.h=0,e.i&&r4(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}Y=gl.prototype;Y.add=function(e,t){xi(this),this.i=null,e=Ds(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function iC(e,t){xi(e),t=Ds(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function oC(e,t){return xi(e),t=Ds(e,t),e.g.has(t)}Y.forEach=function(e,t){xi(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};Y.oa=function(){xi(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let o=0;o<i.length;o++)n.push(t[r])}return n};Y.W=function(e){xi(this);let t=[];if(typeof e=="string")oC(this,e)&&(t=t.concat(this.g.get(Ds(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};Y.set=function(e,t){return xi(this),this.i=null,e=Ds(this,e),oC(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};Y.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function sC(e,t,n){iC(e,t),0<n.length&&(e.i=null,e.g.set(Ds(e,t),l0(n)),e.h+=n.length)}Y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function Ds(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function u4(e,t){t&&!e.j&&(xi(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(iC(this,r),sC(this,i,n))},e)),e.j=t}var c4=class{constructor(e,t){this.h=e,this.g=t}};function aC(e){this.l=e||f4,te.PerformanceNavigationTiming?(e=te.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(te.g&&te.g.Ga&&te.g.Ga()&&te.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var f4=10;function lC(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function uC(e){return e.h?1:e.g?e.g.size:0}function Jp(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function b0(e,t){e.g?e.g.add(t):e.h=t}function cC(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}aC.prototype.cancel=function(){if(this.i=fC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function fC(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return l0(e.i)}function x0(){}x0.prototype.stringify=function(e){return te.JSON.stringify(e,void 0)};x0.prototype.parse=function(e){return te.JSON.parse(e,void 0)};function d4(){this.g=new x0}function h4(e,t,n){const r=n||"";try{nC(e,function(i,o){let s=i;Bl(i)&&(s=m0(i)),t.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function p4(e,t){const n=new Kf;if(te.Image){const r=new Image;r.onload=Au($u,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Au($u,n,r,"TestLoadImage: error",!1,t),r.onabort=Au($u,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Au($u,n,r,"TestLoadImage: timeout",!1,t),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function $u(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Gl(e){this.l=e.ac||null,this.j=e.jb||!1}xt(Gl,v0);Gl.prototype.g=function(){return new Zf(this.l,this.j)};Gl.prototype.i=function(e){return function(){return e}}({});function Zf(e,t){ft.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=E0,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xt(Zf,ft);var E0=0;Y=Zf.prototype;Y.open=function(e,t){if(this.readyState!=E0)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,yl(this)};Y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||te).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};Y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yl(this)),this.readyState=E0};Y.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,yl(this)),this.g&&(this.readyState=3,yl(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dC(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function dC(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}Y.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Yl(this):yl(this),this.readyState==3&&dC(this)}};Y.Va=function(e){this.g&&(this.response=this.responseText=e,Yl(this))};Y.Ua=function(e){this.g&&(this.response=e,Yl(this))};Y.ga=function(){this.g&&Yl(this)};function Yl(e){e.readyState=4,e.l=null,e.j=null,e.A=null,yl(e)}Y.setRequestHeader=function(e,t){this.v.append(e,t)};Y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};Y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function yl(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Zf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var m4=te.JSON.parse;function We(e){ft.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hC,this.K=this.L=!1}xt(We,ft);var hC="",g4=/^https?$/i,y4=["POST","PUT"];Y=We.prototype;Y.Ka=function(e){this.L=e};Y.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Gp.g(),this.C=this.u?D1(this.u):D1(Gp),this.g.onreadystatechange=Ot(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(o){j1(this,o);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=te.FormData&&e instanceof te.FormData,!(0<=IE(y4,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{gC(this),0<this.B&&((this.K=v4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ot(this.qa,this)):this.A=y0(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){j1(this,o)}};function v4(e){return xs&&$U()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}Y.qa=function(){typeof a0<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,St(this,"timeout"),this.abort(8))};function j1(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,pC(e),ed(e)}function pC(e){e.D||(e.D=!0,St(e,"complete"),St(e,"error"))}Y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,St(this,"complete"),St(this,"abort"),ed(this))};Y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ed(this,!0)),We.X.M.call(this)};Y.Ha=function(){this.s||(this.F||this.v||this.l?mC(this):this.fb())};Y.fb=function(){mC(this)};function mC(e){if(e.h&&typeof a0<"u"&&(!e.C[1]||Er(e)!=4||e.aa()!=2)){if(e.v&&Er(e)==4)y0(e.Ha,0,e);else if(St(e,"readystatechange"),Er(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(rC)[1]||null;if(!i&&te.self&&te.self.location){var o=te.self.location.protocol;i=o.substr(0,o.length-1)}r=!g4.test(i?i.toLowerCase():"")}n=r}if(n)St(e,"complete"),St(e,"success");else{e.m=6;try{var s=2<Er(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.aa()+"]",pC(e)}}finally{ed(e)}}}}function ed(e,t){if(e.g){gC(e);const n=e.g,r=e.C[0]?Bc:null;e.g=null,e.C=null,t||St(e,"ready");try{n.onreadystatechange=r}catch{}}}function gC(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(te.clearTimeout(e.A),e.A=null)}function Er(e){return e.g?e.g.readyState:0}Y.aa=function(){try{return 2<Er(this)?this.g.status:-1}catch{return-1}};Y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Y.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),m4(t)}};function F1(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case hC:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}Y.Ea=function(){return this.m};Y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function yC(e){let t="";return c0(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function C0(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=yC(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Ne(e,t,n))}function ua(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function vC(e){this.Ca=0,this.i=[],this.j=new Kf,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ua("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ua("baseRetryDelayMs",5e3,e),this.bb=ua("retryDelaySeedMs",1e4,e),this.$a=ua("forwardChannelMaxRetries",2,e),this.ta=ua("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new aC(e&&e.concurrentRequestLimit),this.Fa=new d4,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Y=vC.prototype;Y.ma=8;Y.G=1;function z0(e){if(wC(e),e.G==3){var t=e.U++,n=Rr(e.F);Ne(n,"SID",e.I),Ne(n,"RID",t),Ne(n,"TYPE","terminate"),Xl(e,n),t=new ql(e,e.j,t,void 0),t.K=2,t.v=Jf(Rr(n)),n=!1,te.navigator&&te.navigator.sendBeacon&&(n=te.navigator.sendBeacon(t.v.toString(),"")),!n&&te.Image&&(new Image().src=t.v,n=!0),n||(t.g=TC(t.l,null),t.g.da(t.v)),t.F=Date.now(),Kl(t)}zC(e)}function td(e){e.g&&(T0(e),e.g.cancel(),e.g=null)}function wC(e){td(e),e.u&&(te.clearTimeout(e.u),e.u=null),Gc(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&te.clearTimeout(e.m),e.m=null)}function nd(e){lC(e.h)||e.m||(e.m=!0,FE(e.Ja,e),e.C=0)}function w4(e,t){return uC(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Wl(Ot(e.Ja,e,t),CC(e,e.C)),e.C++,!0)}Y.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new ql(this,this.j,e,void 0);let o=this.s;if(this.S&&(o?(o=AE(o),RE(o,this.S)):o=this.S),this.o!==null||this.N||(i.H=o,o=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=SC(this,i,t),n=Rr(this.F),Ne(n,"RID",e),Ne(n,"CVER",22),this.D&&Ne(n,"X-HTTP-Session-Id",this.D),Xl(this,n),o&&(this.N?t="headers="+encodeURIComponent(String(yC(o)))+"&"+t:this.o&&C0(n,this.o,o)),b0(this.h,i),this.Ya&&Ne(n,"TYPE","init"),this.O?(Ne(n,"$req",t),Ne(n,"SID","null"),i.Z=!0,Xp(i,n,null)):Xp(i,n,t),this.G=2}}else this.G==3&&(e?B1(this,e):this.i.length==0||lC(this.h)||B1(this))};function B1(e,t){var n;t?n=t.m:n=e.U++;const r=Rr(e.F);Ne(r,"SID",e.I),Ne(r,"RID",n),Ne(r,"AID",e.T),Xl(e,r),e.o&&e.s&&C0(r,e.o,e.s),n=new ql(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=SC(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),b0(e.h,n),Xp(n,r,t)}function Xl(e,t){e.ia&&c0(e.ia,function(n,r){Ne(t,r,n)}),e.l&&nC({},function(n,r){Ne(t,r,n)})}function SC(e,t,n){n=Math.min(e.i.length,n);var r=e.l?Ot(e.l.Ra,e.l,e):null;e:{var i=e.i;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const d=i[l].g;if(u-=o,0>u)o=Math.max(0,i[l].h-100),a=!1;else try{h4(d,s,"req"+u+"_")}catch{r&&r(d)}}if(a){r=s.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function bC(e){e.g||e.u||(e.Z=1,FE(e.Ia,e),e.A=0)}function k0(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Wl(Ot(e.Ia,e),CC(e,e.A)),e.A++,!0)}Y.Ia=function(){if(this.u=null,xC(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Wl(Ot(this.eb,this),e)}};Y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,jt(10),td(this),xC(this))};function T0(e){e.B!=null&&(te.clearTimeout(e.B),e.B=null)}function xC(e){e.g=new ql(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Rr(e.sa);Ne(t,"RID","rpc"),Ne(t,"SID",e.I),Ne(t,"CI",e.L?"0":"1"),Ne(t,"AID",e.T),Ne(t,"TYPE","xmlhttp"),Xl(e,t),e.o&&e.s&&C0(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Jf(Rr(t)),n.s=null,n.P=!0,JE(n,e)}Y.cb=function(){this.v!=null&&(this.v=null,td(this),k0(this),jt(19))};function Gc(e){e.v!=null&&(te.clearTimeout(e.v),e.v=null)}function EC(e,t){var n=null;if(e.g==t){Gc(e),T0(e),e.g=null;var r=2}else if(Jp(e.h,t))n=t.D,cC(e.h,t),r=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=Gf(),St(r,new GE(r,n)),nd(e)}else bC(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(r==1&&w4(e,t)||r==2&&k0(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:ji(e,5);break;case 4:ji(e,10);break;case 3:ji(e,6);break;default:ji(e,2)}}}function CC(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function ji(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=Ot(e.kb,e);n||(n=new Hi("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||qc(n,"https"),Jf(n)),p4(n.toString(),r)}else jt(2);e.G=0,e.l&&e.l.va(t),zC(e),wC(e)}Y.kb=function(e){e?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function zC(e){if(e.G=0,e.la=[],e.l){const t=fC(e.h);(t.length!=0||e.i.length!=0)&&(O1(e.la,t),O1(e.la,e.i),e.h.i.length=0,l0(e.i),e.i.length=0),e.l.ua()}}function kC(e,t,n){var r=n instanceof Hi?Rr(n):new Hi(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),Kc(r,r.m);else{var i=te.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Hi(null,void 0);r&&qc(o,r),t&&(o.g=t),i&&Kc(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.za,n&&t&&Ne(r,n,t),Ne(r,"VER",e.ma),Xl(e,r),r}function TC(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new We(new Gl({jb:!0})):new We(e.ra),t.Ka(e.H),t}function _C(){}Y=_C.prototype;Y.xa=function(){};Y.wa=function(){};Y.va=function(){};Y.ua=function(){};Y.Ra=function(){};function Yc(){if(xs&&!(10<=Number(UU)))throw Error("Environmental error: no available transport.")}Yc.prototype.g=function(e,t){return new vn(e,t)};function vn(e,t){ft.call(this),this.g=new vC(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Vc(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Vc(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ms(this)}xt(vn,ft);vn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;jt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=kC(e,null,e.V),nd(e)};vn.prototype.close=function(){z0(this.g)};vn.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=m0(e),e=n);t.i.push(new c4(t.ab++,e)),t.G==3&&nd(t)};vn.prototype.M=function(){this.g.l=null,delete this.j,z0(this.g),delete this.g,vn.X.M.call(this)};function IC(e){w0.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}xt(IC,w0);function PC(){S0.call(this),this.status=1}xt(PC,S0);function Ms(e){this.g=e}xt(Ms,_C);Ms.prototype.xa=function(){St(this.g,"a")};Ms.prototype.wa=function(e){St(this.g,new IC(e))};Ms.prototype.va=function(e){St(this.g,new PC)};Ms.prototype.ua=function(){St(this.g,"b")};Yc.prototype.createWebChannel=Yc.prototype.g;vn.prototype.send=vn.prototype.u;vn.prototype.open=vn.prototype.m;vn.prototype.close=vn.prototype.close;Yf.NO_ERROR=0;Yf.TIMEOUT=8;Yf.HTTP_ERROR=6;YE.COMPLETE="complete";XE.EventType=Hl;Hl.OPEN="a";Hl.CLOSE="b";Hl.ERROR="c";Hl.MESSAGE="d";ft.prototype.listen=ft.prototype.N;We.prototype.listenOnce=We.prototype.O;We.prototype.getLastError=We.prototype.Oa;We.prototype.getLastErrorCode=We.prototype.Ea;We.prototype.getStatus=We.prototype.aa;We.prototype.getResponseJson=We.prototype.Sa;We.prototype.getResponseText=We.prototype.fa;We.prototype.send=We.prototype.da;We.prototype.setWithCredentials=We.prototype.Ka;var S4=function(){return new Yc},b4=function(){return Gf()},Sh=Yf,x4=YE,E4=fo,V1={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},C4=Gl,Uu=XE,z4=We;const W1="@firebase/firestore";/**
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
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let Ls="9.14.0";/**
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
 */const oo=new EE("@firebase/firestore");function H1(){return oo.logLevel}function J(e,...t){if(oo.logLevel<=Se.DEBUG){const n=t.map(_0);oo.debug(`Firestore (${Ls}): ${e}`,...n)}}function $r(e,...t){if(oo.logLevel<=Se.ERROR){const n=t.map(_0);oo.error(`Firestore (${Ls}): ${e}`,...n)}}function Zp(e,...t){if(oo.logLevel<=Se.WARN){const n=t.map(_0);oo.warn(`Firestore (${Ls}): ${e}`,...n)}}function _0(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function ie(e="Unexpected state"){const t=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: `+e;throw $r(t),new Error(t)}function tt(e,t){e||ie()}function ge(e,t){return e}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Us{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ts{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class OC{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class k4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class T4{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _4{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new ts;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ts,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ts)}},0),s()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(tt(typeof r.accessToken=="string"),new OC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new It(t)}}class I4{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=It.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(tt(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class P4{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new I4(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O4{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N4{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const r=o=>{o.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.A;return this.A=o.token,J("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.T.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.T.getImmediate({optional:!0});o?i(o):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(tt(typeof n.token=="string"),this.A=n.token,new O4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function A4(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class R4{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=A4(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function be(e,t){return e<t?-1:e>t?1:0}function Es(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class an{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return an.fromMillis(Date.now())}static fromDate(t){return an.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new an(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?be(this.nanoseconds,t.nanoseconds):be(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class se{constructor(t){this.timestamp=t}static fromTimestamp(t){return new se(t)}static min(){return new se(new an(0,0))}static max(){return new se(new an(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vl{constructor(t,n,r){n===void 0?n=0:n>t.length&&ie(),r===void 0?r=t.length-n:r>t.length-n&&ie(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return vl.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof vl?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const o=t.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Ve extends vl{construct(t,n,r){return new Ve(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new ee(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const $4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends vl{construct(t,n,r){return new Qt(t,n,r)}static isValidIdentifier(t){return $4.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new ee(H.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ee(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new ee(H.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
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
 */class Z{constructor(t){this.path=t}static fromPath(t){return new Z(Ve.fromString(t))}static fromName(t){return new Z(Ve.fromString(t).popFirst(5))}static empty(){return new Z(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ve.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Ve.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Z(new Ve(t.slice()))}}function U4(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new an(n+1,0):new an(n,r));return new fi(i,Z.empty(),t)}function D4(e){return new fi(e.readTime,e.key,-1)}class fi{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new fi(se.min(),Z.empty(),-1)}static max(){return new fi(se.max(),Z.empty(),-1)}}function M4(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Z.comparator(e.documentKey,t.documentKey),n!==0?n:be(e.largestBatchId,t.largestBatchId))}/**
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
 */const L4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class j4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function I0(e){if(e.code!==H.FAILED_PRECONDITION||e.message!==L4)throw e;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new D((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):D.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):D.reject(n)}static resolve(t){return new D((n,r)=>{n(t)})}static reject(t){return new D((n,r)=>{r(t)})}static waitFor(t){return new D((n,r)=>{let i=0,o=0,s=!1;t.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(t){let n=D.resolve(!1);for(const r of t)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(t,n){return new D((r,i)=>{const o=t.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const u=l;n(t[u]).next(d=>{s[u]=d,++a,a===o&&r(s)},d=>i(d))}})}static doWhile(t,n){return new D((r,i)=>{const o=()=>{t()===!0?n().next(()=>{o()},i):r()};o()})}}function Ql(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class P0{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}/**
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
 */function q1(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rd(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function F4(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */P0.at=-1;class dt{constructor(t,n){this.comparator=t,this.root=n||gt.EMPTY}insert(t,n){return new dt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(t){return new dt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,gt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Du(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Du(this.root,t,this.comparator,!1)}getReverseIterator(){return new Du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Du(this.root,t,this.comparator,!0)}}class Du{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=n?r(t.key,n):1,n&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class gt{constructor(t,n,r,i,o){this.key=t,this.value=n,this.color=r!=null?r:gt.RED,this.left=i!=null?i:gt.EMPTY,this.right=o!=null?o:gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,o){return new gt(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const t=this.left.check();if(t!==this.right.check())throw ie();return t+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,t,n,r,i){return this}insert(e,t,n){return new gt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(t){this.comparator=t,this.data=new dt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new K1(this.data.getIterator())}getIteratorFrom(t){return new K1(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new st(this.comparator);return n.data=t,n}}class K1{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qi{constructor(t){this.fields=t,t.sort(Qt.comparator)}static empty(){return new qi([])}unionWith(t){let n=new st(Qt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new qi(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Es(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Rt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new Rt(n)}static fromUint8Array(t){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(t);return new Rt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return be(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const B4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function di(e){if(tt(!!e),typeof e=="string"){let t=0;const n=B4.exec(e);if(tt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Qe(e.seconds),nanos:Qe(e.nanos)}}function Qe(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Cs(e){return typeof e=="string"?Rt.fromBase64String(e):Rt.fromUint8Array(e)}/**
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
 */function NC(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function AC(e){const t=e.mapValue.fields.__previous_value__;return NC(t)?AC(t):t}function wl(e){const t=di(e.mapValue.fields.__local_write_time__.timestampValue);return new an(t.seconds,t.nanos)}/**
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
 */class V4{constructor(t,n,r,i,o,s,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Sl{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Sl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Sl&&t.projectId===this.projectId&&t.database===this.database}}function id(e){return e==null}function em(e){return e===0&&1/e==-1/0}/**
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
 */const Mu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function so(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?NC(e)?4:W4(e)?9007199254740991:10:ie()}function cr(e,t){if(e===t)return!0;const n=so(e);if(n!==so(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return wl(e).isEqual(wl(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=di(r.timestampValue),s=di(i.timestampValue);return o.seconds===s.seconds&&o.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return Cs(r.bytesValue).isEqual(Cs(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return Qe(r.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(r.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Qe(r.integerValue)===Qe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Qe(r.doubleValue),s=Qe(i.doubleValue);return o===s?em(o)===em(s):isNaN(o)&&isNaN(s)}return!1}(e,t);case 9:return Es(e.arrayValue.values||[],t.arrayValue.values||[],cr);case 10:return function(r,i){const o=r.mapValue.fields||{},s=i.mapValue.fields||{};if(q1(o)!==q1(s))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(s[a]===void 0||!cr(o[a],s[a])))return!1;return!0}(e,t);default:return ie()}}function bl(e,t){return(e.values||[]).find(n=>cr(n,t))!==void 0}function zs(e,t){if(e===t)return 0;const n=so(e),r=so(t);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(e.booleanValue,t.booleanValue);case 2:return function(i,o){const s=Qe(i.integerValue||i.doubleValue),a=Qe(o.integerValue||o.doubleValue);return s<a?-1:s>a?1:s===a?0:isNaN(s)?isNaN(a)?0:-1:1}(e,t);case 3:return G1(e.timestampValue,t.timestampValue);case 4:return G1(wl(e),wl(t));case 5:return be(e.stringValue,t.stringValue);case 6:return function(i,o){const s=Cs(i),a=Cs(o);return s.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const s=i.split("/"),a=o.split("/");for(let l=0;l<s.length&&l<a.length;l++){const u=be(s[l],a[l]);if(u!==0)return u}return be(s.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const s=be(Qe(i.latitude),Qe(o.latitude));return s!==0?s:be(Qe(i.longitude),Qe(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const s=i.values||[],a=o.values||[];for(let l=0;l<s.length&&l<a.length;++l){const u=zs(s[l],a[l]);if(u)return u}return be(s.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Mu.mapValue&&o===Mu.mapValue)return 0;if(i===Mu.mapValue)return 1;if(o===Mu.mapValue)return-1;const s=i.fields||{},a=Object.keys(s),l=o.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let d=0;d<a.length&&d<u.length;++d){const p=be(a[d],u[d]);if(p!==0)return p;const g=zs(s[a[d]],l[u[d]]);if(g!==0)return g}return be(a.length,u.length)}(e.mapValue,t.mapValue);default:throw ie()}}function G1(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return be(e,t);const n=di(e),r=di(t),i=be(n.seconds,r.seconds);return i!==0?i:be(n.nanos,r.nanos)}function ns(e){return tm(e)}function tm(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const i=di(r);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Cs(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Z.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let i="[",o=!0;for(const s of r.values||[])o?o=!1:i+=",",i+=tm(s);return i+"]"}(e.arrayValue):"mapValue"in e?function(r){const i=Object.keys(r.fields||{}).sort();let o="{",s=!0;for(const a of i)s?s=!1:o+=",",o+=`${a}:${tm(r.fields[a])}`;return o+"}"}(e.mapValue):ie();var t,n}function nm(e){return!!e&&"integerValue"in e}function O0(e){return!!e&&"arrayValue"in e}function Y1(e){return!!e&&"nullValue"in e}function X1(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function bh(e){return!!e&&"mapValue"in e}function $a(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return rd(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=$a(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=$a(e.arrayValue.values[n]);return t}return Object.assign({},e)}function W4(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class rr{constructor(t){this.value=t}static empty(){return new rr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!bh(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=$a(n)}setAll(t){let n=Qt.emptyPath(),r={},i=[];t.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=$a(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(t){const n=this.field(t.popLast());bh(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return cr(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];bh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){rd(n,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new rr($a(this.value))}}/**
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
 */class vt{constructor(t,n,r,i,o,s){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.data=o,this.documentState=s}static newInvalidDocument(t){return new vt(t,0,se.min(),se.min(),rr.empty(),0)}static newFoundDocument(t,n,r){return new vt(t,1,n,se.min(),r,0)}static newNoDocument(t,n){return new vt(t,2,n,se.min(),rr.empty(),0)}static newUnknownDocument(t,n){return new vt(t,3,n,se.min(),rr.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class H4{constructor(t,n=null,r=[],i=[],o=null,s=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ht=null}}function Q1(e,t=null,n=[],r=[],i=null,o=null,s=null){return new H4(e,t,n,r,i,o,s)}function N0(e){const t=ge(e);if(t.ht===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ns(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),id(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ns(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ns(r)).join(",")),t.ht=n}return t.ht}function q4(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ns(r.value)}`;var r}).join(", ")}]`),id(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ns(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ns(n)).join(",")),`Target(${t})`}function A0(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!e3(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!cr(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Z1(e.startAt,t.startAt)&&Z1(e.endAt,t.endAt)}function rm(e){return Z.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class en extends class{}{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.lt(t,n,r):new K4(t,n,r):n==="array-contains"?new X4(t,r):n==="in"?new Q4(t,r):n==="not-in"?new J4(t,r):n==="array-contains-any"?new Z4(t,r):new en(t,n,r)}static lt(t,n,r){return n==="in"?new G4(t,r):new Y4(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.ft(zs(n,this.value)):n!==null&&so(this.value)===so(n)&&this.ft(zs(n,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return ie()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class K4 extends en{constructor(t,n,r){super(t,n,r),this.key=Z.fromName(r.referenceValue)}matches(t){const n=Z.comparator(t.key,this.key);return this.ft(n)}}class G4 extends en{constructor(t,n){super(t,"in",n),this.keys=RC("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Y4 extends en{constructor(t,n){super(t,"not-in",n),this.keys=RC("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function RC(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class X4 extends en{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return O0(n)&&bl(n.arrayValue,this.value)}}class Q4 extends en{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&bl(this.value.arrayValue,n)}}class J4 extends en{constructor(t,n){super(t,"not-in",n)}matches(t){if(bl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!bl(this.value.arrayValue,n)}}class Z4 extends en{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!O0(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bl(this.value.arrayValue,r))}}class Xc{constructor(t,n){this.position=t,this.inclusive=n}}class Ua{constructor(t,n="asc"){this.field=t,this.dir=n}}function e3(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function J1(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(o.field.isKeyField()?r=Z.comparator(Z.fromName(s.referenceValue),n.key):r=zs(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Z1(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!cr(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class od{constructor(t,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function t3(e,t,n,r,i,o,s,a){return new od(e,t,n,r,i,o,s,a)}function R0(e){return new od(e)}function ew(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function n3(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function r3(e){for(const t of e.filters)if(t.dt())return t.field;return null}function i3(e){return e.collectionGroup!==null}function xl(e){const t=ge(e);if(t._t===null){t._t=[];const n=r3(t),r=n3(t);if(n!==null&&r===null)n.isKeyField()||t._t.push(new Ua(n)),t._t.push(new Ua(Qt.keyField(),"asc"));else{let i=!1;for(const o of t.explicitOrderBy)t._t.push(o),o.field.isKeyField()&&(i=!0);if(!i){const o=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new Ua(Qt.keyField(),o))}}}return t._t}function Ur(e){const t=ge(e);if(!t.wt)if(t.limitType==="F")t.wt=Q1(t.path,t.collectionGroup,xl(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const o of xl(t)){const s=o.dir==="desc"?"asc":"desc";n.push(new Ua(o.field,s))}const r=t.endAt?new Xc(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Xc(t.startAt.position,t.startAt.inclusive):null;t.wt=Q1(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.wt}function im(e,t,n){return new od(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function sd(e,t){return A0(Ur(e),Ur(t))&&e.limitType===t.limitType}function $C(e){return`${N0(Ur(e))}|lt:${e.limitType}`}function om(e){return`Query(target=${q4(Ur(e))}; limitType=${e.limitType})`}function $0(e,t){return t.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(i,o,s){const a=J1(i,o,s);return i.inclusive?a<=0:a<0}(n.startAt,xl(n),r)||n.endAt&&!function(i,o,s){const a=J1(i,o,s);return i.inclusive?a>=0:a>0}(n.endAt,xl(n),r))}(e,t)}function o3(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function UC(e){return(t,n)=>{let r=!1;for(const i of xl(e)){const o=s3(i,t,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function s3(e,t,n){const r=e.field.isKeyField()?Z.comparator(t.key,n.key):function(i,o,s){const a=o.data.field(i),l=s.data.field(i);return a!==null&&l!==null?zs(a,l):ie()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
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
 */function a3(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:em(t)?"-0":t}}function l3(e){return{integerValue:""+e}}/**
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
 */class ad{constructor(){this._=void 0}}function u3(e,t,n){return e instanceof sm?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Qc?DC(e,t):e instanceof Jc?MC(e,t):function(r,i){const o=f3(r,i),s=tw(o)+tw(r.yt);return nm(o)&&nm(r.yt)?l3(s):a3(r.It,s)}(e,t)}function c3(e,t,n){return e instanceof Qc?DC(e,t):e instanceof Jc?MC(e,t):n}function f3(e,t){return e instanceof am?nm(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class sm extends ad{}class Qc extends ad{constructor(t){super(),this.elements=t}}function DC(e,t){const n=LC(t);for(const r of e.elements)n.some(i=>cr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Jc extends ad{constructor(t){super(),this.elements=t}}function MC(e,t){let n=LC(t);for(const r of e.elements)n=n.filter(i=>!cr(i,r));return{arrayValue:{values:n}}}class am extends ad{constructor(t,n){super(),this.It=t,this.yt=n}}function tw(e){return Qe(e.integerValue||e.doubleValue)}function LC(e){return O0(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function d3(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof Qc&&r instanceof Qc||n instanceof Jc&&r instanceof Jc?Es(n.elements,r.elements,cr):n instanceof am&&r instanceof am?cr(n.yt,r.yt):n instanceof sm&&r instanceof sm}(e.transform,t.transform)}class Ki{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ki}static exists(t){return new Ki(void 0,t)}static updateTime(t){return new Ki(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rc(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class U0{}function jC(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new p3(e.key,Ki.none()):new D0(e.key,e.data,Ki.none());{const n=e.data,r=rr.empty();let i=new st(Qt.comparator);for(let o of t.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new ld(e.key,r,new qi(i.toArray()),Ki.none())}}function h3(e,t,n){e instanceof D0?function(r,i,o){const s=r.value.clone(),a=rw(r.fieldTransforms,i,o.transformResults);s.setAll(a),i.convertToFoundDocument(o.version,s).setHasCommittedMutations()}(e,t,n):e instanceof ld?function(r,i,o){if(!rc(r.precondition,i))return void i.convertToUnknownDocument(o.version);const s=rw(r.fieldTransforms,i,o.transformResults),a=i.data;a.setAll(FC(r)),a.setAll(s),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Da(e,t,n,r){return e instanceof D0?function(i,o,s,a){if(!rc(i.precondition,o))return s;const l=i.value.clone(),u=iw(i.fieldTransforms,a,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof ld?function(i,o,s,a){if(!rc(i.precondition,o))return s;const l=iw(i.fieldTransforms,a,o),u=o.data;return u.setAll(FC(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),s===null?null:s.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(e,t,n,r):function(i,o,s){return rc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):s}(e,t,n)}function nw(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Es(n,r,(i,o)=>d3(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class D0 extends U0{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ld extends U0{constructor(t,n,r,i,o=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function FC(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function rw(e,t,n){const r=new Map;tt(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,c3(s,a,n[i]))}return r}function iw(e,t,n){const r=new Map;for(const i of e){const o=i.transform,s=n.data.field(i.field);r.set(i.field,u3(o,s,t))}return r}class p3 extends U0{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class m3{constructor(t){this.count=t}}/**
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
 */var Xe,fe;function BC(e){if(e===void 0)return $r("GRPC error has no .code"),H.UNKNOWN;switch(e){case Xe.OK:return H.OK;case Xe.CANCELLED:return H.CANCELLED;case Xe.UNKNOWN:return H.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return H.INTERNAL;case Xe.UNAVAILABLE:return H.UNAVAILABLE;case Xe.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Xe.NOT_FOUND:return H.NOT_FOUND;case Xe.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Xe.ABORTED:return H.ABORTED;case Xe.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Xe.DATA_LOSS:return H.DATA_LOSS;default:return ie()}}(fe=Xe||(Xe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class js{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){rd(this.inner,(n,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return F4(this.inner)}size(){return this.innerSize}}/**
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
 */const g3=new dt(Z.comparator);function hi(){return g3}const VC=new dt(Z.comparator);function wa(...e){let t=VC;for(const n of e)t=t.insert(n.key,n);return t}function y3(e){let t=VC;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Fi(){return Ma()}function WC(){return Ma()}function Ma(){return new js(e=>e.toString(),(e,t)=>e.isEqual(t))}new dt(Z.comparator);const v3=new st(Z.comparator);function he(...e){let t=v3;for(const n of e)t=t.add(n);return t}const w3=new st(be);function HC(){return w3}/**
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
 */class ud{constructor(t,n,r,i,o){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Jl.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new ud(se.min(),i,HC(),hi(),he())}}class Jl{constructor(t,n,r,i,o){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Jl(r,n,he(),he(),he())}}/**
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
 */class ic{constructor(t,n,r,i){this.Tt=t,this.removedTargetIds=n,this.key=r,this.Et=i}}class qC{constructor(t,n){this.targetId=t,this.At=n}}class KC{constructor(t,n,r=Rt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ow{constructor(){this.Rt=0,this.bt=aw(),this.Pt=Rt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=he(),n=he(),r=he();return this.bt.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ie()}}),new Jl(this.Pt,this.vt,t,n,r)}Nt(){this.Vt=!1,this.bt=aw()}kt(t,n){this.Vt=!0,this.bt=this.bt.insert(t,n)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class S3{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=hi(),this.qt=sw(),this.Kt=new st(be)}Gt(t){for(const n of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(n,t.Et):this.jt(n,t.key,t.Et);for(const n of t.removedTargetIds)this.jt(n,t.key,t.Et)}Wt(t){this.forEachTarget(t,n=>{const r=this.zt(n);switch(t.state){case 0:this.Ht(n)&&r.Ct(t.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(t.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(t.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(t.resumeToken));break;default:ie()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(t){const n=t.targetId,r=t.At.count,i=this.Xt(n);if(i){const o=i.target;if(rm(o))if(r===0){const s=new Z(o.path);this.jt(n,s,vt.newNoDocument(s,se.min()))}else tt(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(t){const n=new Map;this.Lt.forEach((o,s)=>{const a=this.Xt(s);if(a){if(o.current&&rm(a.target)){const l=new Z(a.target.path);this.Ut.get(l)!==null||this.ee(s,l)||this.jt(s,l,vt.newNoDocument(l,t))}o.Dt&&(n.set(s,o.xt()),o.Nt())}});let r=he();this.qt.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(o))}),this.Ut.forEach((o,s)=>s.setReadTime(t));const i=new ud(t,n,this.Kt,this.Ut,r);return this.Ut=hi(),this.qt=sw(),this.Kt=new st(be),i}Qt(t,n){if(!this.Ht(t))return;const r=this.ee(t,n.key)?2:0;this.zt(t).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(t))}jt(t,n,r){if(!this.Ht(t))return;const i=this.zt(t);this.ee(t,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(t)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(t){this.Lt.delete(t)}Zt(t){const n=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let n=this.Lt.get(t);return n||(n=new ow,this.Lt.set(t,n)),n}ne(t){let n=this.qt.get(t);return n||(n=new st(be),this.qt=this.qt.insert(t,n)),n}Ht(t){const n=this.Xt(t)!==null;return n||J("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.Lt.get(t);return n&&n.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new ow),this.Bt.getRemoteKeysForTarget(t).forEach(n=>{this.jt(t,n,null)})}ee(t,n){return this.Bt.getRemoteKeysForTarget(t).has(n)}}function sw(){return new dt(Z.comparator)}function aw(){return new dt(Z.comparator)}/**
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
 */const b3=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),x3=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class E3{constructor(t,n){this.databaseId=t,this.gt=n}}function C3(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function z3(e,t){return e.gt?t.toBase64():t.toUint8Array()}function El(e){return tt(!!e),se.fromTimestamp(function(t){const n=di(t);return new an(n.seconds,n.nanos)}(e))}function k3(e,t){return function(n){return new Ve(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function GC(e){const t=Ve.fromString(e);return tt(QC(t)),t}function xh(e,t){const n=GC(t);if(n.get(1)!==e.databaseId.projectId)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Z(YC(n))}function lm(e,t){return k3(e.databaseId,t)}function T3(e){const t=GC(e);return t.length===4?Ve.emptyPath():YC(t)}function lw(e){return new Ve(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function YC(e){return tt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function _3(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ie()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(l,u){return l.gt?(tt(u===void 0||typeof u=="string"),Rt.fromBase64String(u||"")):(tt(u===void 0||u instanceof Uint8Array),Rt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(l){const u=l.code===void 0?H.UNKNOWN:BC(l.code);return new ee(u,l.message||"")}(s);n=new KC(r,i,o,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=xh(e,r.document.name),o=El(r.document.updateTime),s=new rr({mapValue:{fields:r.document.fields}}),a=vt.newFoundDocument(i,o,s),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ic(l,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=xh(e,r.document),o=r.readTime?El(r.readTime):se.min(),s=vt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new ic([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=xh(e,r.document),o=r.removedTargetIds||[];n=new ic([],o,i,null)}else{if(!("filter"in t))return ie();{t.filter;const r=t.filter;r.targetId;const i=r.count||0,o=new m3(i),s=r.targetId;n=new qC(s,o)}}return n}function I3(e,t){return{documents:[lm(e,t.path)]}}function P3(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=lm(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=lm(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(d=>function(p){if(p.op==="=="){if(X1(p.value))return{unaryFilter:{field:Po(p.field),op:"IS_NAN"}};if(Y1(p.value))return{unaryFilter:{field:Po(p.field),op:"IS_NULL"}}}else if(p.op==="!="){if(X1(p.value))return{unaryFilter:{field:Po(p.field),op:"IS_NOT_NAN"}};if(Y1(p.value))return{unaryFilter:{field:Po(p.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Po(p.field),op:R3(p.op),value:p.value}}}(d));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Po(d.field),direction:A3(d.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(l,u){return l.gt||id(u)?u:{value:u}}(e,t.limit);var a;return s!==null&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function O3(e){let t=T3(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){tt(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let o=[];n.where&&(o=XC(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(d=>function(p){return new Ua(Ho(p.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d)));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,id(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new Xc(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new Xc(g,p)}(n.endAt)),t3(t,i,s,o,a,"F",l,u)}function N3(e,t){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ie()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function XC(e){return e?e.unaryFilter!==void 0?[U3(e)]:e.fieldFilter!==void 0?[$3(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>XC(t)).reduce((t,n)=>t.concat(n)):ie():[]}function A3(e){return b3[e]}function R3(e){return x3[e]}function Po(e){return{fieldPath:e.canonicalString()}}function Ho(e){return Qt.fromServerFormat(e.fieldPath)}function $3(e){return en.create(Ho(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(e.fieldFilter.op),e.fieldFilter.value)}function U3(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ho(e.unaryFilter.field);return en.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ho(e.unaryFilter.field);return en.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ho(e.unaryFilter.field);return en.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ho(e.unaryFilter.field);return en.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}function QC(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class D3{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&h3(o,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Da(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Da(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=WC();return this.mutations.forEach(i=>{const o=t.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=jC(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),he())}isEqual(t){return this.batchId===t.batchId&&Es(this.mutations,t.mutations,(n,r)=>nw(n,r))&&Es(this.baseMutations,t.baseMutations,(n,r)=>nw(n,r))}}/**
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
 */class M3{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Gi{constructor(t,n,r,i,o=se.min(),s=se.min(),a=Rt.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(t){return new Gi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class L3{constructor(t){this.re=t}}function j3(e){const t=O3({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?im(t,t.limit,"L"):t}/**
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
 */class F3{constructor(){this.Ye=new B3}addToCollectionParentIndex(t,n){return this.Ye.add(n),D.resolve()}getCollectionParents(t,n){return D.resolve(this.Ye.getEntries(n))}addFieldIndex(t,n){return D.resolve()}deleteFieldIndex(t,n){return D.resolve()}getDocumentsMatchingTarget(t,n){return D.resolve(null)}getIndexType(t,n){return D.resolve(0)}getFieldIndexes(t,n){return D.resolve([])}getNextCollectionGroupToUpdate(t){return D.resolve(null)}getMinOffset(t,n){return D.resolve(fi.min())}getMinOffsetFromCollectionGroup(t,n){return D.resolve(fi.min())}updateCollectionGroup(t,n,r){return D.resolve()}updateIndexEntries(t,n){return D.resolve()}}class B3{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new st(Ve.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new st(Ve.comparator)).toArray()}}/**
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
 */class ks{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new ks(0)}static vn(){return new ks(-1)}}/**
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
 */class V3{constructor(){this.changes=new js(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class W3{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class H3{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.getBaseDocument(t,n,r))).next(i=>(r!==null&&Da(r.mutation,i,qi.empty(),an.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,he()).next(()=>r))}getLocalViewOfDocuments(t,n,r=he()){const i=Fi();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(o=>{let s=wa();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(t,n){const r=Fi();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,he()))}populateOverlays(t,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(t,n,r,i){let o=hi();const s=Ma(),a=Ma();return n.forEach((l,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof ld)?o=o.insert(u.key,u):d!==void 0&&(s.set(u.key,d.mutation.getFieldMask()),Da(d.mutation,u,d.mutation.getFieldMask(),an.now()))}),this.recalculateAndSaveOverlays(t,o).next(l=>(l.forEach((u,d)=>s.set(u,d)),n.forEach((u,d)=>{var p;return a.set(u,new W3(d,(p=s.get(u))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ma();let i=new dt((s,a)=>s-a),o=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||qi.empty();d=a.applyToLocalView(u,d),r.set(l,d);const p=(i.get(a.batchId)||he()).add(l);i=i.insert(a.batchId,p)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,p=WC();d.forEach(g=>{if(!o.has(g)){const y=jC(n.get(g),r.get(g));y!==null&&p.set(g,y),o=o.add(g)}}),s.push(this.documentOverlayCache.saveOverlays(t,u,p))}return D.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return Z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):i3(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-o.size):D.resolve(Fi());let a=-1,l=o;return s.next(u=>D.forEach(u,(d,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),o.get(d)?D.resolve():this.getBaseDocument(t,d,p).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(t,u,o)).next(()=>this.computeViews(t,l,u,he())).next(d=>({batchId:a,changes:y3(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Z(n)).next(r=>{let i=wa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let o=wa();return this.indexManager.getCollectionParents(t,i).next(s=>D.forEach(s,a=>{const l=function(u,d){return new od(d,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(u=>{u.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,r).next(o=>(i=o,this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId))).next(o=>{o.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,vt.newInvalidDocument(u)))});let s=wa();return i.forEach((a,l)=>{const u=o.get(a);u!==void 0&&Da(u.mutation,l,qi.empty(),an.now()),$0(n,l)&&(s=s.insert(a,l))}),s})}getBaseDocument(t,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):D.resolve(vt.newInvalidDocument(n))}}/**
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
 */class q3{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return D.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:El(r.createTime)}),D.resolve()}getNamedQuery(t,n){return D.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(r){return{name:r.name,query:j3(r.bundledQuery),readTime:El(r.readTime)}}(n)),D.resolve()}}/**
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
 */class K3{constructor(){this.overlays=new dt(Z.comparator),this.es=new Map}getOverlay(t,n){return D.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Fi();return D.forEach(n,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,o)=>{this.ue(t,n,o)}),D.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.es.delete(r)),D.resolve()}getOverlaysForCollection(t,n,r){const i=Fi(),o=n.length+1,s=new Z(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let o=new dt((u,d)=>u-d);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=o.get(u.largestBatchId);d===null&&(d=Fi(),o=o.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=Fi(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return D.resolve(a)}ue(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new M3(n,r));let o=this.es.get(n);o===void 0&&(o=he(),this.es.set(n,o)),this.es.set(n,o.add(r.key))}}/**
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
 */class M0{constructor(){this.ns=new st(at.ss),this.rs=new st(at.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const r=new at(t,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.cs(new at(t,n))}hs(t,n){t.forEach(r=>this.removeReference(r,n))}ls(t){const n=new Z(new Ve([])),r=new at(n,t),i=new at(n,t+1),o=[];return this.rs.forEachInRange([r,i],s=>{this.cs(s),o.push(s.key)}),o}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new Z(new Ve([])),r=new at(n,t),i=new at(n,t+1);let o=he();return this.rs.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(t){const n=new at(t,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return Z.comparator(t.key,n.key)||be(t._s,n._s)}static os(t,n){return be(t._s,n._s)||Z.comparator(t.key,n.key)}}/**
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
 */class G3{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new st(at.ss)}checkEmpty(t){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const o=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new D3(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.gs=this.gs.add(new at(a.key,o)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return D.resolve(s)}lookupMutationBatch(t,n){return D.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.ps(r),o=i<0?0:i;return D.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new at(n,0),i=new at(n,Number.POSITIVE_INFINITY),o=[];return this.gs.forEachInRange([r,i],s=>{const a=this.ys(s._s);o.push(a)}),D.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new st(be);return n.forEach(i=>{const o=new at(i,0),s=new at(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([o,s],a=>{r=r.add(a._s)})}),D.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let o=r;Z.isDocumentKey(o)||(o=o.child(""));const s=new at(new Z(o),0);let a=new st(be);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},s),D.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){tt(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return D.forEach(n.mutations,i=>{const o=new at(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=r})}An(t){}containsKey(t,n){const r=new at(n,0),i=this.gs.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,D.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Y3{constructor(t){this.Es=t,this.docs=new dt(Z.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(t,n){let r=hi();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():vt.newInvalidDocument(i))}),D.resolve(r)}getAllFromCollection(t,n,r){let i=hi();const o=new Z(n.child("")),s=this.docs.getIteratorFrom(o);for(;s.hasNext();){const{key:a,value:{document:l}}=s.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||M4(D4(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(t,n,r,i){ie()}As(t,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new X3(this)}getSize(t){return D.resolve(this.size)}}class X3 extends V3{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(r)}),D.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
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
 */class Q3{constructor(t){this.persistence=t,this.Rs=new js(n=>N0(n),A0),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.bs=0,this.Ps=new M0,this.targetCount=0,this.vs=ks.Pn()}forEachTarget(t,n){return this.Rs.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(t){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return D.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),D.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new ks(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,D.resolve()}updateTargetData(t,n){return this.Dn(n),D.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(t,n,r){let i=0;const o=[];return this.Rs.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(s),o.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),D.waitFor(o).next(()=>i)}getTargetCount(t){return D.resolve(this.targetCount)}getTargetData(t,n){const r=this.Rs.get(n)||null;return D.resolve(r)}addMatchingKeys(t,n,r){return this.Ps.us(n,r),D.resolve()}removeMatchingKeys(t,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(t,s))}),D.waitFor(o)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),D.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ps.ds(n);return D.resolve(r)}containsKey(t,n){return D.resolve(this.Ps.containsKey(n))}}/**
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
 */class J3{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new P0(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Q3(this),this.indexManager=new F3,this.remoteDocumentCache=function(r){return new Y3(r)}(r=>this.referenceDelegate.xs(r)),this.It=new L3(n),this.Ns=new q3(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new K3,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Vs[t.toKey()];return r||(r=new G3(n,this.referenceDelegate),this.Vs[t.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,r){J("MemoryPersistence","Starting transaction:",t);const i=new Z3(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(o=>this.referenceDelegate.Os(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ms(t,n){return D.or(Object.values(this.Vs).map(r=>()=>r.containsKey(t,n)))}}class Z3 extends j4{constructor(t){super(),this.currentSequenceNumber=t}}class L0{constructor(t){this.persistence=t,this.Fs=new M0,this.$s=null}static Bs(t){return new L0(t)}get Ls(){if(this.$s)return this.$s;throw ie()}addReference(t,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),D.resolve()}removeReference(t,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),D.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),D.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(o=>this.Ls.add(o.toString()))}).next(()=>r.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Ls,r=>{const i=Z.fromPath(r);return this.Us(t,i).next(o=>{o||n.removeEntry(i,se.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.Us(t,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}Us(t,n){return D.or([()=>D.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
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
 */class j0{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Si=r,this.Di=i}static Ci(t,n){let r=he(),i=he();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new j0(t,n.fromCache,r,i)}}/**
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
 */class eD{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.ki(t,n).next(o=>o||this.Oi(t,n,i,r)).next(o=>o||this.Mi(t,n))}ki(t,n){if(ew(n))return D.resolve(null);let r=Ur(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=im(n,null,"F"),r=Ur(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const s=he(...o);return this.Ni.getDocuments(t,s).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,s,l.readTime)?this.ki(t,im(n,null,"F")):this.Bi(t,u,n,l)}))})))}Oi(t,n,r,i){return ew(n)||i.isEqual(se.min())?this.Mi(t,n):this.Ni.getDocuments(t,r).next(o=>{const s=this.Fi(n,o);return this.$i(n,s,r,i)?this.Mi(t,n):(H1()<=Se.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),om(n)),this.Bi(t,s,n,U4(i,-1)))})}Fi(t,n){let r=new st(UC(t));return n.forEach((i,o)=>{$0(t,o)&&(r=r.add(o))}),r}$i(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const o=t.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Mi(t,n){return H1()<=Se.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",om(n)),this.Ni.getDocumentsMatchingQuery(t,n,fi.min())}Bi(t,n,r,i){return this.Ni.getDocumentsMatchingQuery(t,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
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
 */class tD{constructor(t,n,r,i){this.persistence=t,this.Li=n,this.It=i,this.Ui=new dt(be),this.qi=new js(o=>N0(o),A0),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(r)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new H3(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ui))}}function nD(e,t,n,r){return new tD(e,t,n,r)}async function JC(e,t){const n=ge(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.Qi(t),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=he();for(const u of i){s.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of o){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:s,addedBatchIds:a}))})})}function ZC(e){const t=ge(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function rD(e,t){const n=ge(e),r=t.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];t.targetChanges.forEach((d,p)=>{const g=i.get(p);if(!g)return;a.push(n.Cs.removeMatchingKeys(o,d.removedDocuments,p).next(()=>n.Cs.addMatchingKeys(o,d.addedDocuments,p)));let y=g.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.has(p)?y=y.withResumeToken(Rt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(p,y),function(w,v,c){return w.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:c.addedDocuments.size+c.modifiedDocuments.size+c.removedDocuments.size>0}(g,y,d)&&a.push(n.Cs.updateTargetData(o,y))});let l=hi(),u=he();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,d))}),a.push(iD(o,s,t.documentUpdates).next(d=>{l=d.Wi,u=d.zi})),!r.isEqual(se.min())){const d=n.Cs.getLastRemoteSnapshotVersion(o).next(p=>n.Cs.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(d)}return D.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,u)).next(()=>l)}).then(o=>(n.Ui=i,o))}function iD(e,t,n){let r=he(),i=he();return n.forEach(o=>r=r.add(o)),t.getEntries(e,r).next(o=>{let s=hi();return n.forEach((a,l)=>{const u=o.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(t.removeEntry(a,l.readTime),s=s.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),s=s.insert(a,l)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:s,zi:i}})}function oD(e,t){const n=ge(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,t).next(o=>o?(i=o,D.resolve(i)):n.Cs.allocateTargetId(r).next(s=>(i=new Gi(t,s,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(t,r.targetId)),r})}async function um(e,t,n){const r=ge(e),i=r.Ui.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Ql(s))throw s;J("LocalStore",`Failed to update sequence numbers for target ${t}: ${s}`)}r.Ui=r.Ui.remove(t),r.qi.delete(i.target)}function uw(e,t,n){const r=ge(e);let i=se.min(),o=he();return r.persistence.runTransaction("Execute query","readonly",s=>function(a,l,u){const d=ge(a),p=d.qi.get(u);return p!==void 0?D.resolve(d.Ui.get(p)):d.Cs.getTargetData(l,u)}(r,s,Ur(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.Li.getDocumentsMatchingQuery(s,t,n?i:se.min(),n?o:he())).next(a=>(sD(r,o3(t),a),{documents:a,Hi:o})))}function sD(e,t,n){let r=e.Ki.get(t)||se.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),e.Ki.set(t,r)}class cw{constructor(){this.activeTargetIds=HC()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class aD{constructor(){this.Lr=new cw,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,n,r){this.Ur[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new cw,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class lD{qr(t){}shutdown(){}}/**
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
 */class fw{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const uD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cD{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
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
 */class fD extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,r,i,o){const s=this.ho(t,n);J("RestConnection","Sending: ",s,r);const a={};return this.lo(a,i,o),this.fo(t,s,a,r).then(l=>(J("RestConnection","Received: ",l),l),l=>{throw Zp("RestConnection",`${t} failed with error: `,l,"url: ",s,"request:",r),l})}_o(t,n,r,i,o,s){return this.ao(t,n,r,i,o)}lo(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ls,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}ho(t,n){const r=uD[t];return`${this.oo}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,r,i){return new Promise((o,s)=>{const a=new z4;a.setWithCredentials(!0),a.listenOnce(x4.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case Sh.NO_ERROR:const d=a.getResponseJson();J("Connection","XHR received:",JSON.stringify(d)),o(d);break;case Sh.TIMEOUT:J("Connection",'RPC "'+t+'" timed out'),s(new ee(H.DEADLINE_EXCEEDED,"Request time out"));break;case Sh.HTTP_ERROR:const p=a.getStatus();if(J("Connection",'RPC "'+t+'" failed with status:',p,"response text:",a.getResponseText()),p>0){let g=a.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=(u=g)===null||u===void 0?void 0:u.error;if(y&&y.status&&y.message){const w=function(v){const c=v.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(c)>=0?c:H.UNKNOWN}(y.status);s(new ee(w,y.message))}else s(new ee(H.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new ee(H.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{J("Connection",'RPC "'+t+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(t,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=S4(),s=b4(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new C4({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");J("Connection","Creating WebChannel: "+l,a);const u=o.createWebChannel(l,a);let d=!1,p=!1;const g=new cD({Hr:w=>{p?J("Connection","Not sending because WebChannel is closed:",w):(d||(J("Connection","Opening WebChannel transport."),u.open(),d=!0),J("Connection","WebChannel sending:",w),u.send(w))},Jr:()=>u.close()}),y=(w,v,c)=>{w.listen(v,f=>{try{c(f)}catch(h){setTimeout(()=>{throw h},0)}})};return y(u,Uu.EventType.OPEN,()=>{p||J("Connection","WebChannel transport opened.")}),y(u,Uu.EventType.CLOSE,()=>{p||(p=!0,J("Connection","WebChannel transport closed"),g.io())}),y(u,Uu.EventType.ERROR,w=>{p||(p=!0,Zp("Connection","WebChannel transport errored:",w),g.io(new ee(H.UNAVAILABLE,"The operation could not be completed")))}),y(u,Uu.EventType.MESSAGE,w=>{var v;if(!p){const c=w.data[0];tt(!!c);const f=c,h=f.error||((v=f[0])===null||v===void 0?void 0:v.error);if(h){J("Connection","WebChannel received error:",h);const m=h.status;let S=function(x){const E=Xe[x];if(E!==void 0)return BC(E)}(m),b=h.message;S===void 0&&(S=H.INTERNAL,b="Unknown error status: "+m+" with message "+h.message),p=!0,g.io(new ee(S,b)),u.close()}else J("Connection","WebChannel received:",c),g.ro(c)}}),y(s,E4.STAT_EVENT,w=>{w.stat===V1.PROXY?J("Connection","Detected buffering proxy"):w.stat===V1.NOPROXY&&J("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.so()},0),g}}function Eh(){return typeof document<"u"?document:null}/**
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
 */function ez(e){return new E3(e,!0)}class tz{constructor(t,n,r=1e3,i=1.5,o=6e4){this.Hs=t,this.timerId=n,this.mo=r,this.yo=i,this.po=o,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&J("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class dD{constructor(t,n,r,i,o,s,a,l){this.Hs=t,this.vo=r,this.Vo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new tz(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?($r(n.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{t(()=>{const i=new ee(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(t,n){const r=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return J("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hD extends dD{constructor(t,n,r,i,o,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.It=o}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=_3(this.It,t),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?El(o.readTime):se.min()}(t);return this.listener.Wo(n,r)}zo(t){const n={};n.database=lw(this.It),n.addTarget=function(i,o){let s;const a=o.target;return s=rm(a)?{documents:I3(i,a)}:{query:P3(i,a)},s.targetId=o.targetId,o.resumeToken.approximateByteSize()>0?s.resumeToken=z3(i,o.resumeToken):o.snapshotVersion.compareTo(se.min())>0&&(s.readTime=C3(i,o.snapshotVersion.toTimestamp())),s}(this.It,t);const r=N3(this.It,t);r&&(n.labels=r),this.Bo(n)}Ho(t){const n={};n.database=lw(this.It),n.removeTarget=t,this.Bo(n)}}/**
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
 */class pD extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.ao(t,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(H.UNKNOWN,i.toString())})}_o(t,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection._o(t,n,r,o,s,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(H.UNKNOWN,o.toString())})}terminate(){this.nu=!0}}class mD{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?($r(n),this.ou=!1):J("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class gD{constructor(t,n,r,i,o){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=o,this.mu.qr(s=>{r.enqueueAndForget(async()=>{eu(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ge(a);l._u.add(4),await Zl(l),l.gu.set("Unknown"),l._u.delete(4),await cd(l)}(this))})}),this.gu=new mD(r,i)}}async function cd(e){if(eu(e))for(const t of e.wu)await t(!0)}async function Zl(e){for(const t of e.wu)await t(!1)}function nz(e,t){const n=ge(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),V0(n)?B0(n):Fs(n).ko()&&F0(n,t))}function rz(e,t){const n=ge(e),r=Fs(n);n.du.delete(t),r.ko()&&iz(n,t),n.du.size===0&&(r.ko()?r.Fo():eu(n)&&n.gu.set("Unknown"))}function F0(e,t){e.yu.Mt(t.targetId),Fs(e).zo(t)}function iz(e,t){e.yu.Mt(t),Fs(e).Ho(t)}function B0(e){e.yu=new S3({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),Fs(e).start(),e.gu.uu()}function V0(e){return eu(e)&&!Fs(e).No()&&e.du.size>0}function eu(e){return ge(e)._u.size===0}function oz(e){e.yu=void 0}async function yD(e){e.du.forEach((t,n)=>{F0(e,t)})}async function vD(e,t){oz(e),V0(e)?(e.gu.hu(t),B0(e)):e.gu.set("Unknown")}async function wD(e,t,n){if(e.gu.set("Online"),t instanceof KC&&t.state===2&&t.cause)try{await async function(r,i){const o=i.cause;for(const s of i.targetIds)r.du.has(s)&&(await r.remoteSyncer.rejectListen(s,o),r.du.delete(s),r.yu.removeTarget(s))}(e,t)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await dw(e,r)}else if(t instanceof ic?e.yu.Gt(t):t instanceof qC?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(se.min()))try{const r=await ZC(e.localStore);n.compareTo(r)>=0&&await function(i,o){const s=i.yu.te(o);return s.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,o))}}),s.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Rt.EMPTY_BYTE_STRING,l.snapshotVersion)),iz(i,a);const u=new Gi(l.target,a,1,l.sequenceNumber);F0(i,u)}),i.remoteSyncer.applyRemoteEvent(s)}(e,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await dw(e,r)}}async function dw(e,t,n){if(!Ql(t))throw t;e._u.add(1),await Zl(e),e.gu.set("Offline"),n||(n=()=>ZC(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await cd(e)})}async function hw(e,t){const n=ge(e);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=eu(n);n._u.add(3),await Zl(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await cd(n)}async function SD(e,t){const n=ge(e);t?(n._u.delete(2),await cd(n)):t||(n._u.add(2),await Zl(n),n.gu.set("Unknown"))}function Fs(e){return e.pu||(e.pu=function(t,n,r){const i=ge(t);return i.su(),new hD(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(e.datastore,e.asyncQueue,{Yr:yD.bind(null,e),Zr:vD.bind(null,e),Wo:wD.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),V0(e)?B0(e):e.gu.set("Unknown")):(await e.pu.stop(),oz(e))})),e.pu}/**
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
 */class W0{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ts,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(t,n,r,i,o){const s=Date.now()+r,a=new W0(t,n,s,i,o);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(H.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sz(e,t){if($r("AsyncQueue",`${t}: ${e}`),Ql(e))return new ee(H.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class rs{constructor(t){this.comparator=t?(n,r)=>t(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=wa(),this.sortedSet=new dt(this.comparator)}static emptySet(t){return new rs(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof rs)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new rs;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class pw{constructor(){this.Tu=new dt(Z.comparator)}track(t){const n=t.doc.key,r=this.Tu.get(n);r?t.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Tu=this.Tu.remove(n):t.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):ie():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,r)=>{t.push(r)}),t}}class Ts{constructor(t,n,r,i,o,s,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new Ts(t,n,rs.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&sd(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class bD{constructor(){this.Au=void 0,this.listeners=[]}}class xD{constructor(){this.queries=new js(t=>$C(t),sd),this.onlineState="Unknown",this.Ru=new Set}}async function ED(e,t){const n=ge(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new bD),i)try{o.Au=await n.onListen(r)}catch(s){const a=sz(s,`Initialization of query '${om(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,o),o.listeners.push(t),t.bu(n.onlineState),o.Au&&t.Pu(o.Au)&&H0(n)}async function CD(e,t){const n=ge(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const s=o.listeners.indexOf(t);s>=0&&(o.listeners.splice(s,1),i=o.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function zD(e,t){const n=ge(e);let r=!1;for(const i of t){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.listeners)a.Pu(i)&&(r=!0);s.Au=i}}r&&H0(n)}function kD(e,t,n){const r=ge(e),i=r.queries.get(t);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(t)}function H0(e){e.Ru.forEach(t=>{t.next()})}class TD{constructor(t,n,r){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ts(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=Ts.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
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
 */class az{constructor(t){this.key=t}}class lz{constructor(t){this.key=t}}class _D{constructor(t,n){this.query=t,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=he(),this.mutatedKeys=he(),this.Gu=UC(t),this.Qu=new rs(this.Gu)}get ju(){return this.Uu}Wu(t,n){const r=n?n.zu:new pw,i=n?n.Qu:this.Qu;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,p)=>{const g=i.get(d),y=$0(this.query,p)?p:null,w=!!g&&this.mutatedKeys.has(g.key),v=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let c=!1;g&&y?g.data.isEqual(y.data)?w!==v&&(r.track({type:3,doc:y}),c=!0):this.Hu(g,y)||(r.track({type:2,doc:y}),c=!0,(l&&this.Gu(y,l)>0||u&&this.Gu(y,u)<0)&&(a=!0)):!g&&y?(r.track({type:0,doc:y}),c=!0):g&&!y&&(r.track({type:1,doc:g}),c=!0,(l||u)&&(a=!0)),c&&(y?(s=s.add(y),o=v?o.add(d):o.delete(d)):(s=s.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const d=this.query.limitType==="F"?s.last():s.first();s=s.delete(d.key),o=o.delete(d.key),r.track({type:1,doc:d})}return{Qu:s,zu:r,$i:a,mutatedKeys:o}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const o=t.zu.Eu();o.sort((u,d)=>function(p,g){const y=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return y(p)-y(g)}(u.type,d.type)||this.Gu(u.doc,d.doc)),this.Ju(r);const s=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,o.length!==0||l?{snapshot:new Ts(this.query,t.Qu,i,o,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new pw,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=he(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return t.forEach(r=>{this.Ku.has(r)||n.push(new lz(r))}),this.Ku.forEach(r=>{t.has(r)||n.push(new az(r))}),n}tc(t){this.Uu=t.Hi,this.Ku=he();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return Ts.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class ID{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class PD{constructor(t){this.key=t,this.nc=!1}}class OD{constructor(t,n,r,i,o,s){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new js(a=>$C(a),sd),this.rc=new Map,this.oc=new Set,this.uc=new dt(Z.comparator),this.cc=new Map,this.ac=new M0,this.hc={},this.lc=new Map,this.fc=ks.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function ND(e,t){const n=LD(e);let r,i;const o=n.ic.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.ec();else{const s=await oD(n.localStore,Ur(t));n.isPrimaryClient&&nz(n.remoteStore,s);const a=n.sharedClientState.addLocalQueryTarget(s.targetId);r=s.targetId,i=await AD(n,t,r,a==="current",s.resumeToken)}return i}async function AD(e,t,n,r,i){e._c=(p,g,y)=>async function(w,v,c,f){let h=v.view.Wu(c);h.$i&&(h=await uw(w.localStore,v.query,!1).then(({documents:b})=>v.view.Wu(b,h)));const m=f&&f.targetChanges.get(v.targetId),S=v.view.applyChanges(h,w.isPrimaryClient,m);return gw(w,v.targetId,S.Xu),S.snapshot}(e,p,g,y);const o=await uw(e.localStore,t,!0),s=new _D(t,o.Hi),a=s.Wu(o.documents),l=Jl.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=s.applyChanges(a,e.isPrimaryClient,l);gw(e,n,u.Xu);const d=new ID(t,n,s);return e.ic.set(t,d),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function RD(e,t){const n=ge(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(o=>!sd(o,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await um(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),rz(n.remoteStore,r.targetId),cm(n,r.targetId)}).catch(I0)):(cm(n,r.targetId),await um(n.localStore,r.targetId,!0))}async function uz(e,t){const n=ge(e);try{const r=await rD(n.localStore,t);t.targetChanges.forEach((i,o)=>{const s=n.cc.get(o);s&&(tt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.nc=!0:i.modifiedDocuments.size>0?tt(s.nc):i.removedDocuments.size>0&&(tt(s.nc),s.nc=!1))}),await fz(n,r,t)}catch(r){await I0(r)}}function mw(e,t,n){const r=ge(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((o,s)=>{const a=s.view.bu(t);a.snapshot&&i.push(a.snapshot)}),function(o,s){const a=ge(o);a.onlineState=s;let l=!1;a.queries.forEach((u,d)=>{for(const p of d.listeners)p.bu(s)&&(l=!0)}),l&&H0(a)}(r.eventManager,t),i.length&&r.sc.Wo(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function $D(e,t,n){const r=ge(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),o=i&&i.key;if(o){let s=new dt(Z.comparator);s=s.insert(o,vt.newNoDocument(o,se.min()));const a=he().add(o),l=new ud(se.min(),new Map,new st(be),s,a);await uz(r,l),r.uc=r.uc.remove(o),r.cc.delete(t),q0(r)}else await um(r.localStore,t,!1).then(()=>cm(r,t,n)).catch(I0)}function cm(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(r=>{e.ac.containsKey(r)||cz(e,r)})}function cz(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(rz(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),q0(e))}function gw(e,t,n){for(const r of n)r instanceof az?(e.ac.addReference(r.key,t),UD(e,r)):r instanceof lz?(J("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||cz(e,r.key)):ie()}function UD(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(J("SyncEngine","New document in limbo: "+n),e.oc.add(r),q0(e))}function q0(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new Z(Ve.fromString(t)),r=e.fc.next();e.cc.set(r,new PD(n)),e.uc=e.uc.insert(n,r),nz(e.remoteStore,new Gi(Ur(R0(n.path)),r,2,P0.at))}}async function fz(e,t,n){const r=ge(e),i=[],o=[],s=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{s.push(r._c(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const d=j0.Ci(l.targetId,u);o.push(d)}}))}),await Promise.all(s),r.sc.Wo(i),await async function(a,l){const u=ge(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>D.forEach(l,p=>D.forEach(p.Si,g=>u.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>D.forEach(p.Di,g=>u.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!Ql(d))throw d;J("LocalStore","Failed to update sequence numbers: "+d)}for(const d of l){const p=d.targetId;if(!d.fromCache){const g=u.Ui.get(p),y=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(y);u.Ui=u.Ui.insert(p,w)}}}(r.localStore,o))}async function DD(e,t){const n=ge(e);if(!n.currentUser.isEqual(t)){J("SyncEngine","User change. New user:",t.toKey());const r=await JC(n.localStore,t);n.currentUser=t,function(i,o){i.lc.forEach(s=>{s.forEach(a=>{a.reject(new ee(H.CANCELLED,o))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await fz(n,r.ji)}}function MD(e,t){const n=ge(e),r=n.cc.get(t);if(r&&r.nc)return he().add(r.key);{let i=he();const o=n.rc.get(t);if(!o)return i;for(const s of o){const a=n.ic.get(s);i=i.unionWith(a.view.ju)}return i}}function LD(e){const t=ge(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=uz.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=MD.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=$D.bind(null,t),t.sc.Wo=zD.bind(null,t.eventManager),t.sc.wc=kD.bind(null,t.eventManager),t}class jD{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=ez(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return nD(this.persistence,new eD,t.initialUser,this.It)}yc(t){return new J3(L0.Bs,this.It)}gc(t){return new aD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class FD{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DD.bind(null,this.syncEngine),await SD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new xD}createDatastore(t){const n=ez(t.databaseInfo.databaseId),r=(i=t.databaseInfo,new fD(i));var i;return function(o,s,a,l){return new pD(o,s,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,i=t.asyncQueue,o=a=>mw(this.syncEngine,a,0),s=fw.C()?new fw:new lD,new gD(n,r,i,o,s);var n,r,i,o,s}createSyncEngine(t,n){return function(r,i,o,s,a,l,u){const d=new OD(r,i,o,s,a,l);return u&&(d.dc=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=ge(t);J("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Zl(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function BD(e,t,n){if(!n)throw new ee(H.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function VD(e,t,n,r){if(t===!0&&r===!0)throw new ee(H.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function yw(e){if(Z.isDocumentKey(e))throw new ee(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function WD(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ie()}function oc(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ee(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=WD(e);throw new ee(H.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const vw=new Map;class ww{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new ee(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new ee(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,VD("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class K0{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ww({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ee(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new ee(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ww(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new k4;switch(n.type){case"gapi":const r=n.client;return new P4(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ee(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=vw.get(t);n&&(J("ComponentProvider","Removing Datastore"),vw.delete(t),n.terminate())}(this),Promise.resolve()}}function HD(e,t,n,r={}){var i;const o=(e=oc(e,K0))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==t&&Zp("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let s,a;if(typeof r.mockUserToken=="string")s=r.mockUserToken,a=It.MOCK_USER;else{s=c$(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new ee(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new It(l)}e._authCredentials=new T4(new OC(s,a))}}/**
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
 */class ho{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new is(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ho(this.firestore,t,this._key)}}class fd{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new fd(this.firestore,t,this._query)}}class is extends fd{constructor(t,n,r){super(t,n,R0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ho(this.firestore,null,new Z(t))}withConverter(t){return new is(this.firestore,t,this._path)}}function Sw(e,t,...n){if(e=xE(e),BD("collection","path",t),e instanceof K0){const r=Ve.fromString(t,...n);return yw(r),new is(e,null,r)}{if(!(e instanceof ho||e instanceof is))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ve.fromString(t,...n));return yw(r),new is(e.firestore,null,r)}}/**
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
 */class qD{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):$r("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class KD{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=R4.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{J("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ts;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=sz(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function GD(e,t){e.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await JC(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function YD(e,t){e.asyncQueue.verifyOperationInProgress();const n=await XD(e);J("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>hw(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,o)=>hw(t.remoteStore,o)),e.onlineComponents=t}async function XD(e){return e.offlineComponents||(J("FirestoreClient","Using default OfflineComponentProvider"),await GD(e,new jD)),e.offlineComponents}async function QD(e){return e.onlineComponents||(J("FirestoreClient","Using default OnlineComponentProvider"),await YD(e,new FD)),e.onlineComponents}async function bw(e){const t=await QD(e),n=t.eventManager;return n.onListen=ND.bind(null,t.syncEngine),n.onUnlisten=RD.bind(null,t.syncEngine),n}class JD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new tz(this,"async_queue_retry"),this.Wc=()=>{const n=Eh();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Eh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const n=Eh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new ts;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Ql(t))throw t;J("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(r);throw $r("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(t,n,r){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=W0.createAndSchedule(this,t,n,r,o=>this.Yc(o));return this.qc.push(i),i}zc(){this.Kc&&ie()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.qc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.qc.indexOf(t);this.qc.splice(n,1)}}function xw(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(e,["next","error","complete"])}class fm extends K0{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new JD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dz(this),this._firestoreClient.terminate()}}function ZD(e,t){const n=typeof e=="object"?e:dU(),r=typeof e=="string"?e:t||"(default)",i=lU(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=a$("firestore");o&&HD(i,...o)}return i}function eM(e){return e._firestoreClient||dz(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function dz(e){var t;const n=e._freezeSettings(),r=function(i,o,s,a){return new V4(i,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new KD(e._authCredentials,e._appCheckCredentials,e._queue,r)}/**
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
 */class Zc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Zc(Rt.fromBase64String(t))}catch(n){throw new ee(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Zc(Rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class hz{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ee(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class tM{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ee(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ee(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return be(this._lat,t._lat)||be(this._long,t._long)}}const nM=new RegExp("[~\\*/\\[\\]]");function rM(e,t,n){if(t.search(nM)>=0)throw Ew(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new hz(...t.split("."))._internalPath}catch{throw Ew(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ew(e,t,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new ee(H.INVALID_ARGUMENT,a+e+l)}/**
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
 */class pz{constructor(t,n,r,i,o){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ho(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new iM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(mz("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iM extends pz{data(){return super.data()}}function mz(e,t){return typeof t=="string"?rM(e,t):t instanceof hz?t._internalPath:t._delegate._internalPath}/**
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
 */function oM(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new ee(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class sM{convertValue(t,n="none"){switch(so(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Qe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Cs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw ie()}}convertObject(t,n){const r={};return rd(t.fields,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(t){return new tM(Qe(t.latitude),Qe(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=AC(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wl(t));default:return null}}convertTimestamp(t){const n=di(t);return new an(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Ve.fromString(t);tt(QC(r));const i=new Sl(r.get(1),r.get(3)),o=new Z(r.popFirst(5));return i.isEqual(n)||$r(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */class Sa{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gz extends pz{constructor(t,n,r,i,o,s){super(t,n,r,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new sc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(mz("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class sc extends gz{data(t={}){return super.data(t)}}class aM{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Sa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new sc(this._firestore,this._userDataWriter,r.key,r,new Sa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(s=>{const a=new sc(r._firestore,r._userDataWriter,s.doc.key,s.doc,new Sa(r._snapshot.mutatedKeys.has(s.doc.key),r._snapshot.fromCache),r.query.converter);return s.doc,{type:"added",doc:a,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(s=>i||s.type!==3).map(s=>{const a=new sc(r._firestore,r._userDataWriter,s.doc.key,s.doc,new Sa(r._snapshot.mutatedKeys.has(s.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return s.type!==0&&(l=o.indexOf(s.doc.key),o=o.delete(s.doc.key)),s.type!==1&&(o=o.add(s.doc),u=o.indexOf(s.doc.key)),{type:lM(s.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lM(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}class yz extends sM{constructor(t){super(),this.firestore=t}convertBytes(t){return new Zc(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ho(this.firestore,null,n)}}function Cw(e,...t){var n,r,i;e=xE(e);let o={includeMetadataChanges:!1},s=0;typeof t[s]!="object"||xw(t[s])||(o=t[s],s++);const a={includeMetadataChanges:o.includeMetadataChanges};if(xw(t[s])){const p=t[s];t[s]=(n=p.next)===null||n===void 0?void 0:n.bind(p),t[s+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),t[s+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let l,u,d;if(e instanceof ho)u=oc(e.firestore,fm),d=R0(e._key.path),l={next:p=>{t[s]&&t[s](uM(u,e,p))},error:t[s+1],complete:t[s+2]};else{const p=oc(e,fd);u=oc(p.firestore,fm),d=p._query;const g=new yz(u);l={next:y=>{t[s]&&t[s](new aM(u,g,p,y))},error:t[s+1],complete:t[s+2]},oM(e._query)}return function(p,g,y,w){const v=new qD(w),c=new TD(g,v,y);return p.asyncQueue.enqueueAndForget(async()=>ED(await bw(p),c)),()=>{v.bc(),p.asyncQueue.enqueueAndForget(async()=>CD(await bw(p),c))}}(eM(u),d,a,l)}function uM(e,t,n){const r=n.docs.get(t._key),i=new yz(e);return new gz(e,i,t._key,r,new Sa(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Ls=n})(fU),Fc(new fl("firestore",(n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),s=new fm(new _4(n.getProvider("auth-internal")),new N4(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ee(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sl(a.options.projectId,l)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),es(W1,"3.7.3",e),es(W1,"3.7.3","esm2017")})();const cM={apiKey:"AIzaSyCeiMOP52fq_dPAdTG3sWCSbSLDGuJwS2g",authDomain:"esp32-monitor-2244b.firebaseapp.com",databaseURL:"https://esp32-monitor-2244b-default-rtdb.firebaseio.com",projectId:"esp32-monitor-2244b",storageBucket:"esp32-monitor-2244b.appspot.com",messagingSenderId:"280167063041",appId:"1:280167063041:web:83c702f2d2df8ef88b2a00",measurementId:"G-ER8PQC6BYT"},fM=kE(cM),zw=ZD(fM),kw=T.exports.lazy(()=>yf(()=>import("./Overview.1fab1c69.js"),[])),dM=T.exports.lazy(()=>yf(()=>import("./DeviceStatistics.84c4c432.js"),[])),hM=T.exports.lazy(()=>yf(()=>import("./Sidebar.430cb9f9.js"),["assets/Sidebar.430cb9f9.js","assets/CalendarViewMonth.95bbe88a.js"])),pM=T.exports.lazy(()=>yf(()=>import("./MobileNavigation.c02c40db.js"),["assets/MobileNavigation.c02c40db.js","assets/CalendarViewMonth.95bbe88a.js"])),mM=sE({palette:{mode:"dark"}});function gM(){const[e,t]=T.exports.useState(!1),[n,r]=T.exports.useState(1920),[i,o]=T.exports.useState(!0),[s,a]=T.exports.useState(!1),[l,u]=T.exports.useState(!0),[d,p]=T.exports.useState({}),[g,y]=T.exports.useState({});T.exports.useEffect(()=>Cw(Sw(zw,"Sensors"),v=>y(v.docs.map(c=>({...c.data(),id:c.id})))),[]),T.exports.useEffect(()=>Cw(Sw(zw,"DeviceStatistics"),v=>p(v.docs.map(c=>({...c.data(),id:c.id})))),[]);let w=Array.isArray(d)&&d.map(v=>v.isOnline);return T.exports.useEffect(()=>{const v=()=>r(window.innerWidth);return window.addEventListener("resize",v),v(),()=>window.removeEventListener("resize",v)}),T.exports.useEffect(()=>{n<=900?(o(!1),a(!0),u(!1)):(a(!1),u(!0),t(!1))},[n,o]),T.exports.useState(!1),M(T.exports.Suspense,{fallback:M(sI,{}),children:M(aA,{theme:mM,children:M("div",{className:"App",children:M(qT,{children:Zt("div",{className:"flex relative bg-main-dark-bg text-slate-200",children:[M("div",{className:`${i?"w-72 ":"w-0 overflow-hidden"} 
              bg-secondary-dark-bg transition-all duration-150 ease-out`,children:M(hM,{sideIsOpen:i})}),Zt("div",{className:`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${!1} ? 'md:ml-72' : ' flex-2'`,children:[Zt("div",{className:"fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full",children:[M("div",{className:`${e?"h-screen":"h-0 overflow-hidden"}
                  bg-main-dark-bg transition-all duration-150 ease-linear fixed`,children:M(pM,{handleMobileNavOpen:()=>t(!e),mobileNavOpen:!0})}),M(XR,{customFuncOne:()=>o(!i),customFuncTwo:()=>t(!e),disabledSide:s,mobileNav:e,microStatus:w})]}),M("div",{children:Zt(FT,{children:[M(Qu,{path:"/",element:M(kw,{sensorData:g})}),M(Qu,{path:"/overview",element:M(kw,{sensorData:g})}),M(Qu,{path:"/device-statistics",element:M(dM,{deviceData:d})})]})})]})]})})})})})}Ch.createRoot(document.getElementById("root")).render(M(Cr.StrictMode,{children:M(gM,{})}));export{yM as N,B as _,$l as a,co as b,Be as c,et as d,xr as e,Rl as f,Ns as g,yf as h,Zt as i,M as j,Rs as k,uo as l,$s as m,T as r,LO as s,Ff as u};
