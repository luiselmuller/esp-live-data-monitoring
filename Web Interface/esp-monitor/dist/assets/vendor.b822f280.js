function CT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var eB=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function yg(t){var e=t.default;if(typeof e=="function"){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var I={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zl=Symbol.for("react.element"),TT=Symbol.for("react.portal"),zT=Symbol.for("react.fragment"),IT=Symbol.for("react.strict_mode"),PT=Symbol.for("react.profiler"),OT=Symbol.for("react.provider"),RT=Symbol.for("react.context"),AT=Symbol.for("react.forward_ref"),NT=Symbol.for("react.suspense"),UT=Symbol.for("react.memo"),$T=Symbol.for("react.lazy"),dv=Symbol.iterator;function DT(t){return t===null||typeof t!="object"?null:(t=dv&&t[dv]||t["@@iterator"],typeof t=="function"?t:null)}var ib={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ob=Object.assign,sb={};function ra(t,e,n){this.props=t,this.context=e,this.refs=sb,this.updater=n||ib}ra.prototype.isReactComponent={};ra.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ra.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ab(){}ab.prototype=ra.prototype;function vg(t,e,n){this.props=t,this.context=e,this.refs=sb,this.updater=n||ib}var wg=vg.prototype=new ab;wg.constructor=vg;ob(wg,ra.prototype);wg.isPureReactComponent=!0;var hv=Array.isArray,lb=Object.prototype.hasOwnProperty,Sg={current:null},ub={key:!0,ref:!0,__self:!0,__source:!0};function cb(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)lb.call(e,r)&&!ub.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Zl,type:t,key:o,ref:s,props:i,_owner:Sg.current}}function MT(t,e){return{$$typeof:Zl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zl}function LT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pv=/\/+/g;function Eh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?LT(""+t.key):e.toString(36)}function wc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Zl:case TT:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Eh(s,0):r,hv(i)?(n="",t!=null&&(n=t.replace(pv,"$&/")+"/"),wc(i,e,n,"",function(u){return u})):i!=null&&(bg(i)&&(i=MT(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(pv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",hv(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Eh(o,a);s+=wc(o,e,n,l,i)}else if(l=DT(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Eh(o,a++),s+=wc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Bu(t,e,n){if(t==null)return t;var r=[],i=0;return wc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function jT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Sc={transition:null},FT={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Sc,ReactCurrentOwner:Sg};le.Children={map:Bu,forEach:function(t,e,n){Bu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bu(t,function(){e++}),e},toArray:function(t){return Bu(t,function(e){return e})||[]},only:function(t){if(!bg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=ra;le.Fragment=zT;le.Profiler=PT;le.PureComponent=vg;le.StrictMode=IT;le.Suspense=NT;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FT;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ob({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Sg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)lb.call(e,l)&&!ub.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Zl,type:t.type,key:i,ref:o,props:r,_owner:s}};le.createContext=function(t){return t={$$typeof:RT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:OT,_context:t},t.Consumer=t};le.createElement=cb;le.createFactory=function(t){var e=cb.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:AT,render:t}};le.isValidElement=bg;le.lazy=function(t){return{$$typeof:$T,_payload:{_status:-1,_result:t},_init:jT}};le.memo=function(t,e){return{$$typeof:UT,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=Sc.transition;Sc.transition={};try{t()}finally{Sc.transition=e}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(t,e){return qt.current.useCallback(t,e)};le.useContext=function(t){return qt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};le.useEffect=function(t,e){return qt.current.useEffect(t,e)};le.useId=function(){return qt.current.useId()};le.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return qt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};le.useRef=function(t){return qt.current.useRef(t)};le.useState=function(t){return qt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return qt.current.useTransition()};le.version="18.2.0";(function(t){t.exports=le})(I);const yi=rb(I.exports),Rs=CT({__proto__:null,default:yi},[I.exports]);var mv={},Bf={exports:{}},En={},fb={exports:{}},db={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,A){var j=P.length;P.push(A);e:for(;0<j;){var Y=j-1>>>1,se=P[Y];if(0<i(se,A))P[Y]=A,P[j]=se,j=Y;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],j=P.pop();if(j!==A){P[0]=j;e:for(var Y=0,se=P.length,Ke=se>>>1;Y<Ke;){var it=2*(Y+1)-1,De=P[it],Me=it+1,Ve=P[Me];if(0>i(De,j))Me<se&&0>i(Ve,De)?(P[Y]=Ve,P[Me]=j,Y=Me):(P[Y]=De,P[it]=j,Y=it);else if(Me<se&&0>i(Ve,j))P[Y]=Ve,P[Me]=j,Y=Me;else break e}}return A}function i(P,A){var j=P.sortIndex-A.sortIndex;return j!==0?j:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,p=null,m=3,y=!1,w=!1,v=!1,c=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=P)r(u),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(u)}}function S(P){if(v=!1,g(P),!w)if(n(l)!==null)w=!0,U(b);else{var A=n(u);A!==null&&L(S,A.startTime-P)}}function b(P,A){w=!1,v&&(v=!1,f(_),_=-1),y=!0;var j=m;try{for(g(A),p=n(l);p!==null&&(!(p.expirationTime>A)||P&&!T());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,m=p.priorityLevel;var se=Y(p.expirationTime<=A);A=t.unstable_now(),typeof se=="function"?p.callback=se:p===n(l)&&r(l),g(A)}else r(l);p=n(l)}if(p!==null)var Ke=!0;else{var it=n(u);it!==null&&L(S,it.startTime-A),Ke=!1}return Ke}finally{p=null,m=j,y=!1}}var E=!1,k=null,_=-1,C=5,x=-1;function T(){return!(t.unstable_now()-x<C)}function R(){if(k!==null){var P=t.unstable_now();x=P;var A=!0;try{A=k(!0,P)}finally{A?N():(E=!1,k=null)}}else E=!1}var N;if(typeof h=="function")N=function(){h(R)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,O=B.port2;B.port1.onmessage=R,N=function(){O.postMessage(null)}}else N=function(){c(R,0)};function U(P){k=P,E||(E=!0,N())}function L(P,A){_=c(function(){P(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,U(b))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var j=m;m=A;try{return P()}finally{m=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=m;m=P;try{return A()}finally{m=j}},t.unstable_scheduleCallback=function(P,A,j){var Y=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Y+j:Y):j=Y,P){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=j+se,P={id:d++,callback:A,priorityLevel:P,startTime:j,expirationTime:se,sortIndex:-1},j>Y?(P.sortIndex=j,e(u,P),n(l)===null&&P===n(u)&&(v?(f(_),_=-1):v=!0,L(S,j-Y))):(P.sortIndex=se,e(l,P),w||y||(w=!0,U(b))),P},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(P){var A=m;return function(){var j=m;m=A;try{return P.apply(this,arguments)}finally{m=j}}}})(db);(function(t){t.exports=db})(fb);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hb=I.exports,Sn=fb.exports;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pb=new Set,hl={};function Uo(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(hl[t]=e,t=0;t<e.length;t++)pb.add(e[t])}var $r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ip=Object.prototype.hasOwnProperty,BT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gv={},yv={};function VT(t){return Ip.call(yv,t)?!0:Ip.call(gv,t)?!1:BT.test(t)?yv[t]=!0:(gv[t]=!0,!1)}function WT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HT(t,e,n,r){if(e===null||typeof e>"u"||WT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Eg=/[\-:]([a-z])/g;function kg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Eg,kg);xt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Eg,kg);xt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Eg,kg);xt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function xg(t,e,n,r){var i=xt.hasOwnProperty(e)?xt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HT(e,n,i,r)&&(n=null),r||i===null?VT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gr=hb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vu=Symbol.for("react.element"),rs=Symbol.for("react.portal"),is=Symbol.for("react.fragment"),_g=Symbol.for("react.strict_mode"),Pp=Symbol.for("react.profiler"),mb=Symbol.for("react.provider"),gb=Symbol.for("react.context"),Cg=Symbol.for("react.forward_ref"),Op=Symbol.for("react.suspense"),Rp=Symbol.for("react.suspense_list"),Tg=Symbol.for("react.memo"),oi=Symbol.for("react.lazy"),yb=Symbol.for("react.offscreen"),vv=Symbol.iterator;function xa(t){return t===null||typeof t!="object"?null:(t=vv&&t[vv]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,kh;function Da(t){if(kh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kh=e&&e[1]||""}return`
`+kh+t}var xh=!1;function _h(t,e){if(!t||xh)return"";xh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{xh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Da(t):""}function qT(t){switch(t.tag){case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return t=_h(t.type,!1),t;case 11:return t=_h(t.type.render,!1),t;case 1:return t=_h(t.type,!0),t;default:return""}}function Ap(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case is:return"Fragment";case rs:return"Portal";case Pp:return"Profiler";case _g:return"StrictMode";case Op:return"Suspense";case Rp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gb:return(t.displayName||"Context")+".Consumer";case mb:return(t._context.displayName||"Context")+".Provider";case Cg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tg:return e=t.displayName||null,e!==null?e:Ap(t.type)||"Memo";case oi:e=t._payload,t=t._init;try{return Ap(t(e))}catch{}}return null}function KT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ap(e);case 8:return e===_g?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vb(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function GT(t){var e=vb(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wu(t){t._valueTracker||(t._valueTracker=GT(t))}function wb(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vb(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Np(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function wv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Oi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sb(t,e){e=e.checked,e!=null&&xg(t,"checked",e,!1)}function Up(t,e){Sb(t,e);var n=Oi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$p(t,e.type,n):e.hasOwnProperty("defaultValue")&&$p(t,e.type,Oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $p(t,e,n){(e!=="number"||Vc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ma=Array.isArray;function vs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Oi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Dp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Ma(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Oi(n)}}function bb(t,e){var n=Oi(e.value),r=Oi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ev(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Eb(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Eb(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hu,kb=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Hu=Hu||document.createElement("div"),Hu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XT=["Webkit","ms","Moz","O"];Object.keys(Ga).forEach(function(t){XT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ga[e]=Ga[t]})});function xb(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ga.hasOwnProperty(t)&&Ga[t]?(""+e).trim():e+"px"}function _b(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xb(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var YT=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lp(t,e){if(e){if(YT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function jp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fp=null;function zg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bp=null,ws=null,Ss=null;function kv(t){if(t=nu(t)){if(typeof Bp!="function")throw Error($(280));var e=t.stateNode;e&&(e=Kf(e),Bp(t.stateNode,t.type,e))}}function Cb(t){ws?Ss?Ss.push(t):Ss=[t]:ws=t}function Tb(){if(ws){var t=ws,e=Ss;if(Ss=ws=null,kv(t),e)for(t=0;t<e.length;t++)kv(e[t])}}function zb(t,e){return t(e)}function Ib(){}var Ch=!1;function Pb(t,e,n){if(Ch)return t(e,n);Ch=!0;try{return zb(t,e,n)}finally{Ch=!1,(ws!==null||Ss!==null)&&(Ib(),Tb())}}function ml(t,e){var n=t.stateNode;if(n===null)return null;var r=Kf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var Vp=!1;if($r)try{var _a={};Object.defineProperty(_a,"passive",{get:function(){Vp=!0}}),window.addEventListener("test",_a,_a),window.removeEventListener("test",_a,_a)}catch{Vp=!1}function QT(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Xa=!1,Wc=null,Hc=!1,Wp=null,JT={onError:function(t){Xa=!0,Wc=t}};function ZT(t,e,n,r,i,o,s,a,l){Xa=!1,Wc=null,QT.apply(JT,arguments)}function ez(t,e,n,r,i,o,s,a,l){if(ZT.apply(this,arguments),Xa){if(Xa){var u=Wc;Xa=!1,Wc=null}else throw Error($(198));Hc||(Hc=!0,Wp=u)}}function $o(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ob(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xv(t){if($o(t)!==t)throw Error($(188))}function tz(t){var e=t.alternate;if(!e){if(e=$o(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return xv(i),t;if(o===r)return xv(i),e;o=o.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function Rb(t){return t=tz(t),t!==null?Ab(t):null}function Ab(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ab(t);if(e!==null)return e;t=t.sibling}return null}var Nb=Sn.unstable_scheduleCallback,_v=Sn.unstable_cancelCallback,nz=Sn.unstable_shouldYield,rz=Sn.unstable_requestPaint,Ye=Sn.unstable_now,iz=Sn.unstable_getCurrentPriorityLevel,Ig=Sn.unstable_ImmediatePriority,Ub=Sn.unstable_UserBlockingPriority,qc=Sn.unstable_NormalPriority,oz=Sn.unstable_LowPriority,$b=Sn.unstable_IdlePriority,Vf=null,cr=null;function sz(t){if(cr&&typeof cr.onCommitFiberRoot=="function")try{cr.onCommitFiberRoot(Vf,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:uz,az=Math.log,lz=Math.LN2;function uz(t){return t>>>=0,t===0?32:31-(az(t)/lz|0)|0}var qu=64,Ku=4194304;function La(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=La(a):(o&=s,o!==0&&(r=La(o)))}else s=n&~i,s!==0?r=La(s):o!==0&&(r=La(o));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qn(e),i=1<<n,r|=t[n],e&=~i;return r}function cz(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fz(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-qn(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=cz(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Hp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Db(){var t=qu;return qu<<=1,(qu&4194240)===0&&(qu=64),t}function Th(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function eu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function dz(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Pg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ke=0;function Mb(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Lb,Og,jb,Fb,Bb,qp=!1,Gu=[],vi=null,wi=null,Si=null,gl=new Map,yl=new Map,ai=[],hz="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cv(t,e){switch(t){case"focusin":case"focusout":vi=null;break;case"dragenter":case"dragleave":wi=null;break;case"mouseover":case"mouseout":Si=null;break;case"pointerover":case"pointerout":gl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(e.pointerId)}}function Ca(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=nu(e),e!==null&&Og(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pz(t,e,n,r,i){switch(e){case"focusin":return vi=Ca(vi,t,e,n,r,i),!0;case"dragenter":return wi=Ca(wi,t,e,n,r,i),!0;case"mouseover":return Si=Ca(Si,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return gl.set(o,Ca(gl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,yl.set(o,Ca(yl.get(o)||null,t,e,n,r,i)),!0}return!1}function Vb(t){var e=oo(t.target);if(e!==null){var n=$o(e);if(n!==null){if(e=n.tag,e===13){if(e=Ob(n),e!==null){t.blockedOn=e,Bb(t.priority,function(){jb(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fp=r,n.target.dispatchEvent(r),Fp=null}else return e=nu(n),e!==null&&Og(e),t.blockedOn=n,!1;e.shift()}return!0}function Tv(t,e,n){bc(t)&&n.delete(e)}function mz(){qp=!1,vi!==null&&bc(vi)&&(vi=null),wi!==null&&bc(wi)&&(wi=null),Si!==null&&bc(Si)&&(Si=null),gl.forEach(Tv),yl.forEach(Tv)}function Ta(t,e){t.blockedOn===e&&(t.blockedOn=null,qp||(qp=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,mz)))}function vl(t){function e(i){return Ta(i,t)}if(0<Gu.length){Ta(Gu[0],t);for(var n=1;n<Gu.length;n++){var r=Gu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vi!==null&&Ta(vi,t),wi!==null&&Ta(wi,t),Si!==null&&Ta(Si,t),gl.forEach(e),yl.forEach(e),n=0;n<ai.length;n++)r=ai[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ai.length&&(n=ai[0],n.blockedOn===null);)Vb(n),n.blockedOn===null&&ai.shift()}var bs=Gr.ReactCurrentBatchConfig,Gc=!0;function gz(t,e,n,r){var i=ke,o=bs.transition;bs.transition=null;try{ke=1,Rg(t,e,n,r)}finally{ke=i,bs.transition=o}}function yz(t,e,n,r){var i=ke,o=bs.transition;bs.transition=null;try{ke=4,Rg(t,e,n,r)}finally{ke=i,bs.transition=o}}function Rg(t,e,n,r){if(Gc){var i=Kp(t,e,n,r);if(i===null)Dh(t,e,r,Xc,n),Cv(t,r);else if(pz(i,t,e,n,r))r.stopPropagation();else if(Cv(t,r),e&4&&-1<hz.indexOf(t)){for(;i!==null;){var o=nu(i);if(o!==null&&Lb(o),o=Kp(t,e,n,r),o===null&&Dh(t,e,r,Xc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Dh(t,e,r,null,n)}}var Xc=null;function Kp(t,e,n,r){if(Xc=null,t=zg(r),t=oo(t),t!==null)if(e=$o(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ob(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xc=t,null}function Wb(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iz()){case Ig:return 1;case Ub:return 4;case qc:case oz:return 16;case $b:return 536870912;default:return 16}default:return 16}}var hi=null,Ag=null,Ec=null;function Hb(){if(Ec)return Ec;var t,e=Ag,n=e.length,r,i="value"in hi?hi.value:hi.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Ec=i.slice(t,1<r?1-r:void 0)}function kc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xu(){return!0}function zv(){return!1}function kn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xu:zv,this.isPropagationStopped=zv,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xu)},persist:function(){},isPersistent:Xu}),e}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ng=kn(ia),tu=Be({},ia,{view:0,detail:0}),vz=kn(tu),zh,Ih,za,Wf=Be({},tu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ug,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==za&&(za&&t.type==="mousemove"?(zh=t.screenX-za.screenX,Ih=t.screenY-za.screenY):Ih=zh=0,za=t),zh)},movementY:function(t){return"movementY"in t?t.movementY:Ih}}),Iv=kn(Wf),wz=Be({},Wf,{dataTransfer:0}),Sz=kn(wz),bz=Be({},tu,{relatedTarget:0}),Ph=kn(bz),Ez=Be({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),kz=kn(Ez),xz=Be({},ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_z=kn(xz),Cz=Be({},ia,{data:0}),Pv=kn(Cz),Tz={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zz={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iz={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pz(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Iz[t])?!!e[t]:!1}function Ug(){return Pz}var Oz=Be({},tu,{key:function(t){if(t.key){var e=Tz[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=kc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zz[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ug,charCode:function(t){return t.type==="keypress"?kc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rz=kn(Oz),Az=Be({},Wf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ov=kn(Az),Nz=Be({},tu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ug}),Uz=kn(Nz),$z=Be({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dz=kn($z),Mz=Be({},Wf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lz=kn(Mz),jz=[9,13,27,32],$g=$r&&"CompositionEvent"in window,Ya=null;$r&&"documentMode"in document&&(Ya=document.documentMode);var Fz=$r&&"TextEvent"in window&&!Ya,qb=$r&&(!$g||Ya&&8<Ya&&11>=Ya),Rv=String.fromCharCode(32),Av=!1;function Kb(t,e){switch(t){case"keyup":return jz.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gb(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function Bz(t,e){switch(t){case"compositionend":return Gb(e);case"keypress":return e.which!==32?null:(Av=!0,Rv);case"textInput":return t=e.data,t===Rv&&Av?null:t;default:return null}}function Vz(t,e){if(os)return t==="compositionend"||!$g&&Kb(t,e)?(t=Hb(),Ec=Ag=hi=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qb&&e.locale!=="ko"?null:e.data;default:return null}}var Wz={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Wz[t.type]:e==="textarea"}function Xb(t,e,n,r){Cb(r),e=Yc(e,"onChange"),0<e.length&&(n=new Ng("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qa=null,wl=null;function Hz(t){sE(t,0)}function Hf(t){var e=ls(t);if(wb(e))return t}function qz(t,e){if(t==="change")return e}var Yb=!1;if($r){var Oh;if($r){var Rh="oninput"in document;if(!Rh){var Uv=document.createElement("div");Uv.setAttribute("oninput","return;"),Rh=typeof Uv.oninput=="function"}Oh=Rh}else Oh=!1;Yb=Oh&&(!document.documentMode||9<document.documentMode)}function $v(){Qa&&(Qa.detachEvent("onpropertychange",Qb),wl=Qa=null)}function Qb(t){if(t.propertyName==="value"&&Hf(wl)){var e=[];Xb(e,wl,t,zg(t)),Pb(Hz,e)}}function Kz(t,e,n){t==="focusin"?($v(),Qa=e,wl=n,Qa.attachEvent("onpropertychange",Qb)):t==="focusout"&&$v()}function Gz(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hf(wl)}function Xz(t,e){if(t==="click")return Hf(e)}function Yz(t,e){if(t==="input"||t==="change")return Hf(e)}function Qz(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:Qz;function Sl(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ip.call(e,i)||!Yn(t[i],e[i]))return!1}return!0}function Dv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mv(t,e){var n=Dv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dv(n)}}function Jb(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jb(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zb(){for(var t=window,e=Vc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vc(t.document)}return e}function Dg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Jz(t){var e=Zb(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jb(n.ownerDocument.documentElement,n)){if(r!==null&&Dg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Mv(n,o);var s=Mv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zz=$r&&"documentMode"in document&&11>=document.documentMode,ss=null,Gp=null,Ja=null,Xp=!1;function Lv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xp||ss==null||ss!==Vc(r)||(r=ss,"selectionStart"in r&&Dg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ja&&Sl(Ja,r)||(Ja=r,r=Yc(Gp,"onSelect"),0<r.length&&(e=new Ng("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ss)))}function Yu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:Yu("Animation","AnimationEnd"),animationiteration:Yu("Animation","AnimationIteration"),animationstart:Yu("Animation","AnimationStart"),transitionend:Yu("Transition","TransitionEnd")},Ah={},eE={};$r&&(eE=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function qf(t){if(Ah[t])return Ah[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in eE)return Ah[t]=e[n];return t}var tE=qf("animationend"),nE=qf("animationiteration"),rE=qf("animationstart"),iE=qf("transitionend"),oE=new Map,jv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Di(t,e){oE.set(t,e),Uo(e,[t])}for(var Nh=0;Nh<jv.length;Nh++){var Uh=jv[Nh],eI=Uh.toLowerCase(),tI=Uh[0].toUpperCase()+Uh.slice(1);Di(eI,"on"+tI)}Di(tE,"onAnimationEnd");Di(nE,"onAnimationIteration");Di(rE,"onAnimationStart");Di("dblclick","onDoubleClick");Di("focusin","onFocus");Di("focusout","onBlur");Di(iE,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);Uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nI=new Set("cancel close invalid load scroll toggle".split(" ").concat(ja));function Fv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ez(r,e,void 0,t),t.currentTarget=null}function sE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Fv(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Fv(i,a,u),o=l}}}if(Hc)throw t=Wp,Hc=!1,Wp=null,t}function Oe(t,e){var n=e[em];n===void 0&&(n=e[em]=new Set);var r=t+"__bubble";n.has(r)||(aE(e,t,2,!1),n.add(r))}function $h(t,e,n){var r=0;e&&(r|=4),aE(n,t,r,e)}var Qu="_reactListening"+Math.random().toString(36).slice(2);function bl(t){if(!t[Qu]){t[Qu]=!0,pb.forEach(function(n){n!=="selectionchange"&&(nI.has(n)||$h(n,!1,t),$h(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qu]||(e[Qu]=!0,$h("selectionchange",!1,e))}}function aE(t,e,n,r){switch(Wb(e)){case 1:var i=gz;break;case 4:i=yz;break;default:i=Rg}n=i.bind(null,e,n,t),i=void 0,!Vp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dh(t,e,n,r,i){var o=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=oo(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Pb(function(){var u=o,d=zg(n),p=[];e:{var m=oE.get(t);if(m!==void 0){var y=Ng,w=t;switch(t){case"keypress":if(kc(n)===0)break e;case"keydown":case"keyup":y=Rz;break;case"focusin":w="focus",y=Ph;break;case"focusout":w="blur",y=Ph;break;case"beforeblur":case"afterblur":y=Ph;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Iv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Sz;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Uz;break;case tE:case nE:case rE:y=kz;break;case iE:y=Dz;break;case"scroll":y=vz;break;case"wheel":y=Lz;break;case"copy":case"cut":case"paste":y=_z;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ov}var v=(e&4)!==0,c=!v&&t==="scroll",f=v?m!==null?m+"Capture":null:m;v=[];for(var h=u,g;h!==null;){g=h;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,f!==null&&(S=ml(h,f),S!=null&&v.push(El(h,S,g)))),c)break;h=h.return}0<v.length&&(m=new y(m,w,null,n,d),p.push({event:m,listeners:v}))}}if((e&7)===0){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Fp&&(w=n.relatedTarget||n.fromElement)&&(oo(w)||w[Dr]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?oo(w):null,w!==null&&(c=$o(w),w!==c||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(v=Iv,S="onMouseLeave",f="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=Ov,S="onPointerLeave",f="onPointerEnter",h="pointer"),c=y==null?m:ls(y),g=w==null?m:ls(w),m=new v(S,h+"leave",y,n,d),m.target=c,m.relatedTarget=g,S=null,oo(d)===u&&(v=new v(f,h+"enter",w,n,d),v.target=g,v.relatedTarget=c,S=v),c=S,y&&w)t:{for(v=y,f=w,h=0,g=v;g;g=Go(g))h++;for(g=0,S=f;S;S=Go(S))g++;for(;0<h-g;)v=Go(v),h--;for(;0<g-h;)f=Go(f),g--;for(;h--;){if(v===f||f!==null&&v===f.alternate)break t;v=Go(v),f=Go(f)}v=null}else v=null;y!==null&&Bv(p,m,y,v,!1),w!==null&&c!==null&&Bv(p,c,w,v,!0)}}e:{if(m=u?ls(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var b=qz;else if(Nv(m))if(Yb)b=Yz;else{b=Gz;var E=Kz}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=Xz);if(b&&(b=b(t,u))){Xb(p,b,n,d);break e}E&&E(t,m,u),t==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&$p(m,"number",m.value)}switch(E=u?ls(u):window,t){case"focusin":(Nv(E)||E.contentEditable==="true")&&(ss=E,Gp=u,Ja=null);break;case"focusout":Ja=Gp=ss=null;break;case"mousedown":Xp=!0;break;case"contextmenu":case"mouseup":case"dragend":Xp=!1,Lv(p,n,d);break;case"selectionchange":if(Zz)break;case"keydown":case"keyup":Lv(p,n,d)}var k;if($g)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else os?Kb(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(qb&&n.locale!=="ko"&&(os||_!=="onCompositionStart"?_==="onCompositionEnd"&&os&&(k=Hb()):(hi=d,Ag="value"in hi?hi.value:hi.textContent,os=!0)),E=Yc(u,_),0<E.length&&(_=new Pv(_,t,null,n,d),p.push({event:_,listeners:E}),k?_.data=k:(k=Gb(n),k!==null&&(_.data=k)))),(k=Fz?Bz(t,n):Vz(t,n))&&(u=Yc(u,"onBeforeInput"),0<u.length&&(d=new Pv("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=k))}sE(p,e)})}function El(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ml(t,n),o!=null&&r.unshift(El(t,o,i)),o=ml(t,e),o!=null&&r.push(El(t,o,i))),t=t.return}return r}function Go(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ml(n,o),l!=null&&s.unshift(El(n,l,a))):i||(l=ml(n,o),l!=null&&s.push(El(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var rI=/\r\n?/g,iI=/\u0000|\uFFFD/g;function Vv(t){return(typeof t=="string"?t:""+t).replace(rI,`
`).replace(iI,"")}function Ju(t,e,n){if(e=Vv(e),Vv(t)!==e&&n)throw Error($(425))}function Qc(){}var Yp=null,Qp=null;function Jp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zp=typeof setTimeout=="function"?setTimeout:void 0,oI=typeof clearTimeout=="function"?clearTimeout:void 0,Wv=typeof Promise=="function"?Promise:void 0,sI=typeof queueMicrotask=="function"?queueMicrotask:typeof Wv<"u"?function(t){return Wv.resolve(null).then(t).catch(aI)}:Zp;function aI(t){setTimeout(function(){throw t})}function Mh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),vl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vl(e)}function bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oa=Math.random().toString(36).slice(2),sr="__reactFiber$"+oa,kl="__reactProps$"+oa,Dr="__reactContainer$"+oa,em="__reactEvents$"+oa,lI="__reactListeners$"+oa,uI="__reactHandles$"+oa;function oo(t){var e=t[sr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dr]||n[sr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hv(t);t!==null;){if(n=t[sr])return n;t=Hv(t)}return e}t=n,n=t.parentNode}return null}function nu(t){return t=t[sr]||t[Dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Kf(t){return t[kl]||null}var tm=[],us=-1;function Mi(t){return{current:t}}function Re(t){0>us||(t.current=tm[us],tm[us]=null,us--)}function Ie(t,e){us++,tm[us]=t.current,t.current=e}var Ri={},$t=Mi(Ri),on=Mi(!1),bo=Ri;function Ns(t,e){var n=t.type.contextTypes;if(!n)return Ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function sn(t){return t=t.childContextTypes,t!=null}function Jc(){Re(on),Re($t)}function qv(t,e,n){if($t.current!==Ri)throw Error($(168));Ie($t,e),Ie(on,n)}function lE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,KT(t)||"Unknown",i));return Be({},n,r)}function Zc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ri,bo=$t.current,Ie($t,t),Ie(on,on.current),!0}function Kv(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=lE(t,e,bo),r.__reactInternalMemoizedMergedChildContext=t,Re(on),Re($t),Ie($t,t)):Re(on),Ie(on,n)}var zr=null,Gf=!1,Lh=!1;function uE(t){zr===null?zr=[t]:zr.push(t)}function cI(t){Gf=!0,uE(t)}function Li(){if(!Lh&&zr!==null){Lh=!0;var t=0,e=ke;try{var n=zr;for(ke=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zr=null,Gf=!1}catch(i){throw zr!==null&&(zr=zr.slice(t+1)),Nb(Ig,Li),i}finally{ke=e,Lh=!1}}return null}var cs=[],fs=0,ef=null,tf=0,Pn=[],On=0,Eo=null,Ir=1,Pr="";function eo(t,e){cs[fs++]=tf,cs[fs++]=ef,ef=t,tf=e}function cE(t,e,n){Pn[On++]=Ir,Pn[On++]=Pr,Pn[On++]=Eo,Eo=t;var r=Ir;t=Pr;var i=32-qn(r)-1;r&=~(1<<i),n+=1;var o=32-qn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ir=1<<32-qn(e)+i|n<<i|r,Pr=o+t}else Ir=1<<o|n<<i|r,Pr=t}function Mg(t){t.return!==null&&(eo(t,1),cE(t,1,0))}function Lg(t){for(;t===ef;)ef=cs[--fs],cs[fs]=null,tf=cs[--fs],cs[fs]=null;for(;t===Eo;)Eo=Pn[--On],Pn[On]=null,Pr=Pn[--On],Pn[On]=null,Ir=Pn[--On],Pn[On]=null}var vn=null,yn=null,Ne=!1,Hn=null;function fE(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,yn=bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Eo!==null?{id:Ir,overflow:Pr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,yn=null,!0):!1;default:return!1}}function nm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rm(t){if(Ne){var e=yn;if(e){var n=e;if(!Gv(t,e)){if(nm(t))throw Error($(418));e=bi(n.nextSibling);var r=vn;e&&Gv(t,e)?fE(r,n):(t.flags=t.flags&-4097|2,Ne=!1,vn=t)}}else{if(nm(t))throw Error($(418));t.flags=t.flags&-4097|2,Ne=!1,vn=t}}}function Xv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Zu(t){if(t!==vn)return!1;if(!Ne)return Xv(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jp(t.type,t.memoizedProps)),e&&(e=yn)){if(nm(t))throw dE(),Error($(418));for(;e;)fE(t,e),e=bi(e.nextSibling)}if(Xv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=vn?bi(t.stateNode.nextSibling):null;return!0}function dE(){for(var t=yn;t;)t=bi(t.nextSibling)}function Us(){yn=vn=null,Ne=!1}function jg(t){Hn===null?Hn=[t]:Hn.push(t)}var fI=Gr.ReactCurrentBatchConfig;function Vn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var nf=Mi(null),rf=null,ds=null,Fg=null;function Bg(){Fg=ds=rf=null}function Vg(t){var e=nf.current;Re(nf),t._currentValue=e}function im(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){rf=t,Fg=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(nn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Fg!==t)if(t={context:t,memoizedValue:e,next:null},ds===null){if(rf===null)throw Error($(308));ds=t,rf.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return e}var so=null;function Wg(t){so===null?so=[t]:so.push(t)}function hE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Wg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mr(t,r)}function Mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var si=!1;function Hg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ei(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(me&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mr(t,n)}return i=r.interleaved,i===null?(e.next=e,Wg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mr(t,n)}function xc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pg(t,n)}}function Yv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function of(t,e,n,r){var i=t.updateQueue;si=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,y=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,v=a;switch(m=e,y=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){p=w.call(y,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,m=typeof w=="function"?w.call(y,p,m):w,m==null)break e;p=Be({},p,m);break e;case 2:si=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=p):d=d.next=y,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);xo|=s,t.lanes=s,t.memoizedState=p}}function Qv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var mE=new hb.Component().refs;function om(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xf={isMounted:function(t){return(t=t._reactInternals)?$o(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=xi(t),o=Nr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Ei(t,o,i),e!==null&&(Kn(e,t,i,r),xc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=xi(t),o=Nr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ei(t,o,i),e!==null&&(Kn(e,t,i,r),xc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),r=xi(t),i=Nr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ei(t,i,r),e!==null&&(Kn(e,t,r,n),xc(e,t,r))}};function Jv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Sl(n,r)||!Sl(i,o):!0}function gE(t,e,n){var r=!1,i=Ri,o=e.contextType;return typeof o=="object"&&o!==null?o=Un(o):(i=sn(e)?bo:$t.current,r=e.contextTypes,o=(r=r!=null)?Ns(t,i):Ri),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Zv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xf.enqueueReplaceState(e,e.state,null)}function sm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=mE,Hg(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Un(o):(o=sn(e)?bo:$t.current,i.context=Ns(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(om(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xf.enqueueReplaceState(i,i.state,null),of(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ia(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===mE&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function ec(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function e1(t){var e=t._init;return e(t._payload)}function yE(t){function e(f,h){if(t){var g=f.deletions;g===null?(f.deletions=[h],f.flags|=16):g.push(h)}}function n(f,h){if(!t)return null;for(;h!==null;)e(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=_i(f,h),f.index=0,f.sibling=null,f}function o(f,h,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<h?(f.flags|=2,h):g):(f.flags|=2,h)):(f.flags|=1048576,h)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,h,g,S){return h===null||h.tag!==6?(h=qh(g,f.mode,S),h.return=f,h):(h=i(h,g),h.return=f,h)}function l(f,h,g,S){var b=g.type;return b===is?d(f,h,g.props.children,S,g.key):h!==null&&(h.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===oi&&e1(b)===h.type)?(S=i(h,g.props),S.ref=Ia(f,h,g),S.return=f,S):(S=Pc(g.type,g.key,g.props,null,f.mode,S),S.ref=Ia(f,h,g),S.return=f,S)}function u(f,h,g,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Kh(g,f.mode,S),h.return=f,h):(h=i(h,g.children||[]),h.return=f,h)}function d(f,h,g,S,b){return h===null||h.tag!==7?(h=ho(g,f.mode,S,b),h.return=f,h):(h=i(h,g),h.return=f,h)}function p(f,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=qh(""+h,f.mode,g),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Vu:return g=Pc(h.type,h.key,h.props,null,f.mode,g),g.ref=Ia(f,null,h),g.return=f,g;case rs:return h=Kh(h,f.mode,g),h.return=f,h;case oi:var S=h._init;return p(f,S(h._payload),g)}if(Ma(h)||xa(h))return h=ho(h,f.mode,g,null),h.return=f,h;ec(f,h)}return null}function m(f,h,g,S){var b=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(f,h,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Vu:return g.key===b?l(f,h,g,S):null;case rs:return g.key===b?u(f,h,g,S):null;case oi:return b=g._init,m(f,h,b(g._payload),S)}if(Ma(g)||xa(g))return b!==null?null:d(f,h,g,S,null);ec(f,g)}return null}function y(f,h,g,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(g)||null,a(h,f,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vu:return f=f.get(S.key===null?g:S.key)||null,l(h,f,S,b);case rs:return f=f.get(S.key===null?g:S.key)||null,u(h,f,S,b);case oi:var E=S._init;return y(f,h,g,E(S._payload),b)}if(Ma(S)||xa(S))return f=f.get(g)||null,d(h,f,S,b,null);ec(h,S)}return null}function w(f,h,g,S){for(var b=null,E=null,k=h,_=h=0,C=null;k!==null&&_<g.length;_++){k.index>_?(C=k,k=null):C=k.sibling;var x=m(f,k,g[_],S);if(x===null){k===null&&(k=C);break}t&&k&&x.alternate===null&&e(f,k),h=o(x,h,_),E===null?b=x:E.sibling=x,E=x,k=C}if(_===g.length)return n(f,k),Ne&&eo(f,_),b;if(k===null){for(;_<g.length;_++)k=p(f,g[_],S),k!==null&&(h=o(k,h,_),E===null?b=k:E.sibling=k,E=k);return Ne&&eo(f,_),b}for(k=r(f,k);_<g.length;_++)C=y(k,f,_,g[_],S),C!==null&&(t&&C.alternate!==null&&k.delete(C.key===null?_:C.key),h=o(C,h,_),E===null?b=C:E.sibling=C,E=C);return t&&k.forEach(function(T){return e(f,T)}),Ne&&eo(f,_),b}function v(f,h,g,S){var b=xa(g);if(typeof b!="function")throw Error($(150));if(g=b.call(g),g==null)throw Error($(151));for(var E=b=null,k=h,_=h=0,C=null,x=g.next();k!==null&&!x.done;_++,x=g.next()){k.index>_?(C=k,k=null):C=k.sibling;var T=m(f,k,x.value,S);if(T===null){k===null&&(k=C);break}t&&k&&T.alternate===null&&e(f,k),h=o(T,h,_),E===null?b=T:E.sibling=T,E=T,k=C}if(x.done)return n(f,k),Ne&&eo(f,_),b;if(k===null){for(;!x.done;_++,x=g.next())x=p(f,x.value,S),x!==null&&(h=o(x,h,_),E===null?b=x:E.sibling=x,E=x);return Ne&&eo(f,_),b}for(k=r(f,k);!x.done;_++,x=g.next())x=y(k,f,_,x.value,S),x!==null&&(t&&x.alternate!==null&&k.delete(x.key===null?_:x.key),h=o(x,h,_),E===null?b=x:E.sibling=x,E=x);return t&&k.forEach(function(R){return e(f,R)}),Ne&&eo(f,_),b}function c(f,h,g,S){if(typeof g=="object"&&g!==null&&g.type===is&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Vu:e:{for(var b=g.key,E=h;E!==null;){if(E.key===b){if(b=g.type,b===is){if(E.tag===7){n(f,E.sibling),h=i(E,g.props.children),h.return=f,f=h;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===oi&&e1(b)===E.type){n(f,E.sibling),h=i(E,g.props),h.ref=Ia(f,E,g),h.return=f,f=h;break e}n(f,E);break}else e(f,E);E=E.sibling}g.type===is?(h=ho(g.props.children,f.mode,S,g.key),h.return=f,f=h):(S=Pc(g.type,g.key,g.props,null,f.mode,S),S.ref=Ia(f,h,g),S.return=f,f=S)}return s(f);case rs:e:{for(E=g.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(f,h.sibling),h=i(h,g.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else e(f,h);h=h.sibling}h=Kh(g,f.mode,S),h.return=f,f=h}return s(f);case oi:return E=g._init,c(f,h,E(g._payload),S)}if(Ma(g))return w(f,h,g,S);if(xa(g))return v(f,h,g,S);ec(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(f,h.sibling),h=i(h,g),h.return=f,f=h):(n(f,h),h=qh(g,f.mode,S),h.return=f,f=h),s(f)):n(f,h)}return c}var $s=yE(!0),vE=yE(!1),ru={},fr=Mi(ru),xl=Mi(ru),_l=Mi(ru);function ao(t){if(t===ru)throw Error($(174));return t}function qg(t,e){switch(Ie(_l,e),Ie(xl,t),Ie(fr,ru),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mp(e,t)}Re(fr),Ie(fr,e)}function Ds(){Re(fr),Re(xl),Re(_l)}function wE(t){ao(_l.current);var e=ao(fr.current),n=Mp(e,t.type);e!==n&&(Ie(xl,t),Ie(fr,n))}function Kg(t){xl.current===t&&(Re(fr),Re(xl))}var je=Mi(0);function sf(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jh=[];function Gg(){for(var t=0;t<jh.length;t++)jh[t]._workInProgressVersionPrimary=null;jh.length=0}var _c=Gr.ReactCurrentDispatcher,Fh=Gr.ReactCurrentBatchConfig,ko=0,Fe=null,st=null,ct=null,af=!1,Za=!1,Cl=0,dI=0;function It(){throw Error($(321))}function Xg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Yg(t,e,n,r,i,o){if(ko=o,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_c.current=t===null||t.memoizedState===null?gI:yI,t=n(r,i),Za){o=0;do{if(Za=!1,Cl=0,25<=o)throw Error($(301));o+=1,ct=st=null,e.updateQueue=null,_c.current=vI,t=n(r,i)}while(Za)}if(_c.current=lf,e=st!==null&&st.next!==null,ko=0,ct=st=Fe=null,af=!1,e)throw Error($(300));return t}function Qg(){var t=Cl!==0;return Cl=0,t}function rr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Fe.memoizedState=ct=t:ct=ct.next=t,ct}function $n(){if(st===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=st.next;var e=ct===null?Fe.memoizedState:ct.next;if(e!==null)ct=e,st=t;else{if(t===null)throw Error($(310));st=t,t={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},ct===null?Fe.memoizedState=ct=t:ct=ct.next=t}return ct}function Tl(t,e){return typeof e=="function"?e(t):e}function Bh(t){var e=$n(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=st,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((ko&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,Fe.lanes|=d,xo|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Yn(r,e.memoizedState)||(nn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Fe.lanes|=o,xo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vh(t){var e=$n(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Yn(o,e.memoizedState)||(nn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function SE(){}function bE(t,e){var n=Fe,r=$n(),i=e(),o=!Yn(r.memoizedState,i);if(o&&(r.memoizedState=i,nn=!0),r=r.queue,Jg(xE.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ct!==null&&ct.memoizedState.tag&1){if(n.flags|=2048,zl(9,kE.bind(null,n,r,i,e),void 0,null),ft===null)throw Error($(349));(ko&30)!==0||EE(n,e,i)}return i}function EE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kE(t,e,n,r){e.value=n,e.getSnapshot=r,_E(e)&&CE(t)}function xE(t,e,n){return n(function(){_E(e)&&CE(t)})}function _E(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function CE(t){var e=Mr(t,1);e!==null&&Kn(e,t,1,-1)}function t1(t){var e=rr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:t},e.queue=t,t=t.dispatch=mI.bind(null,Fe,t),[e.memoizedState,t]}function zl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function TE(){return $n().memoizedState}function Cc(t,e,n,r){var i=rr();Fe.flags|=t,i.memoizedState=zl(1|e,n,void 0,r===void 0?null:r)}function Yf(t,e,n,r){var i=$n();r=r===void 0?null:r;var o=void 0;if(st!==null){var s=st.memoizedState;if(o=s.destroy,r!==null&&Xg(r,s.deps)){i.memoizedState=zl(e,n,o,r);return}}Fe.flags|=t,i.memoizedState=zl(1|e,n,o,r)}function n1(t,e){return Cc(8390656,8,t,e)}function Jg(t,e){return Yf(2048,8,t,e)}function zE(t,e){return Yf(4,2,t,e)}function IE(t,e){return Yf(4,4,t,e)}function PE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function OE(t,e,n){return n=n!=null?n.concat([t]):null,Yf(4,4,PE.bind(null,e,t),n)}function Zg(){}function RE(t,e){var n=$n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function AE(t,e){var n=$n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function NE(t,e,n){return(ko&21)===0?(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n):(Yn(n,e)||(n=Db(),Fe.lanes|=n,xo|=n,t.baseState=!0),e)}function hI(t,e){var n=ke;ke=n!==0&&4>n?n:4,t(!0);var r=Fh.transition;Fh.transition={};try{t(!1),e()}finally{ke=n,Fh.transition=r}}function UE(){return $n().memoizedState}function pI(t,e,n){var r=xi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$E(t))DE(e,n);else if(n=hE(t,e,n,r),n!==null){var i=Ht();Kn(n,t,r,i),ME(n,e,r)}}function mI(t,e,n){var r=xi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($E(t))DE(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Yn(a,s)){var l=e.interleaved;l===null?(i.next=i,Wg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=hE(t,e,i,r),n!==null&&(i=Ht(),Kn(n,t,r,i),ME(n,e,r))}}function $E(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function DE(t,e){Za=af=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ME(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pg(t,n)}}var lf={readContext:Un,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},gI={readContext:Un,useCallback:function(t,e){return rr().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:n1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cc(4194308,4,PE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cc(4,2,t,e)},useMemo:function(t,e){var n=rr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pI.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=rr();return t={current:t},e.memoizedState=t},useState:t1,useDebugValue:Zg,useDeferredValue:function(t){return rr().memoizedState=t},useTransition:function(){var t=t1(!1),e=t[0];return t=hI.bind(null,t[1]),rr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=rr();if(Ne){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),ft===null)throw Error($(349));(ko&30)!==0||EE(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,n1(xE.bind(null,r,o,t),[t]),r.flags|=2048,zl(9,kE.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=rr(),e=ft.identifierPrefix;if(Ne){var n=Pr,r=Ir;n=(r&~(1<<32-qn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Cl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yI={readContext:Un,useCallback:RE,useContext:Un,useEffect:Jg,useImperativeHandle:OE,useInsertionEffect:zE,useLayoutEffect:IE,useMemo:AE,useReducer:Bh,useRef:TE,useState:function(){return Bh(Tl)},useDebugValue:Zg,useDeferredValue:function(t){var e=$n();return NE(e,st.memoizedState,t)},useTransition:function(){var t=Bh(Tl)[0],e=$n().memoizedState;return[t,e]},useMutableSource:SE,useSyncExternalStore:bE,useId:UE,unstable_isNewReconciler:!1},vI={readContext:Un,useCallback:RE,useContext:Un,useEffect:Jg,useImperativeHandle:OE,useInsertionEffect:zE,useLayoutEffect:IE,useMemo:AE,useReducer:Vh,useRef:TE,useState:function(){return Vh(Tl)},useDebugValue:Zg,useDeferredValue:function(t){var e=$n();return st===null?e.memoizedState=t:NE(e,st.memoizedState,t)},useTransition:function(){var t=Vh(Tl)[0],e=$n().memoizedState;return[t,e]},useMutableSource:SE,useSyncExternalStore:bE,useId:UE,unstable_isNewReconciler:!1};function Ms(t,e){try{var n="",r=e;do n+=qT(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Wh(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function am(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wI=typeof WeakMap=="function"?WeakMap:Map;function LE(t,e,n){n=Nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){cf||(cf=!0,ym=r),am(t,e)},n}function jE(t,e,n){n=Nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){am(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){am(t,e),typeof r!="function"&&(ki===null?ki=new Set([this]):ki.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function r1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=AI.bind(null,t,e,n),e.then(t,t))}function i1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function o1(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nr(-1,1),e.tag=2,Ei(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var SI=Gr.ReactCurrentOwner,nn=!1;function Vt(t,e,n,r){e.child=t===null?vE(e,null,n,r):$s(e,t.child,n,r)}function s1(t,e,n,r,i){n=n.render;var o=e.ref;return Es(e,i),r=Yg(t,e,n,r,o,i),n=Qg(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(Ne&&n&&Mg(e),e.flags|=1,Vt(t,e,r,i),e.child)}function a1(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!a0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,FE(t,e,o,r,i)):(t=Pc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,(t.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Sl,n(s,r)&&t.ref===e.ref)return Lr(t,e,i)}return e.flags|=1,t=_i(o,r),t.ref=e.ref,t.return=e,e.child=t}function FE(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Sl(o,r)&&t.ref===e.ref)if(nn=!1,e.pendingProps=r=o,(t.lanes&i)!==0)(t.flags&131072)!==0&&(nn=!0);else return e.lanes=t.lanes,Lr(t,e,i)}return lm(t,e,n,r,i)}function BE(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(ps,gn),gn|=n;else{if((n&1073741824)===0)return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(ps,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ie(ps,gn),gn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Ie(ps,gn),gn|=r;return Vt(t,e,i,n),e.child}function VE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lm(t,e,n,r,i){var o=sn(n)?bo:$t.current;return o=Ns(e,o),Es(e,i),n=Yg(t,e,n,r,o,i),r=Qg(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(Ne&&r&&Mg(e),e.flags|=1,Vt(t,e,n,i),e.child)}function l1(t,e,n,r,i){if(sn(n)){var o=!0;Zc(e)}else o=!1;if(Es(e,i),e.stateNode===null)Tc(t,e),gE(e,n,r),sm(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Un(u):(u=sn(n)?bo:$t.current,u=Ns(e,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Zv(e,s,r,u),si=!1;var m=e.memoizedState;s.state=m,of(e,r,s,i),l=e.memoizedState,a!==r||m!==l||on.current||si?(typeof d=="function"&&(om(e,n,d,r),l=e.memoizedState),(a=si||Jv(e,n,a,r,m,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,pE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Vn(e.type,a),s.props=u,p=e.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=sn(n)?bo:$t.current,l=Ns(e,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==l)&&Zv(e,s,r,l),si=!1,m=e.memoizedState,s.state=m,of(e,r,s,i);var w=e.memoizedState;a!==p||m!==w||on.current||si?(typeof y=="function"&&(om(e,n,y,r),w=e.memoizedState),(u=si||Jv(e,n,u,r,m,w,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return um(t,e,n,r,o,i)}function um(t,e,n,r,i,o){VE(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Kv(e,n,!1),Lr(t,e,o);r=e.stateNode,SI.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=$s(e,t.child,null,o),e.child=$s(e,null,a,o)):Vt(t,e,a,o),e.memoizedState=r.state,i&&Kv(e,n,!0),e.child}function WE(t){var e=t.stateNode;e.pendingContext?qv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qv(t,e.context,!1),qg(t,e.containerInfo)}function u1(t,e,n,r,i){return Us(),jg(i),e.flags|=256,Vt(t,e,n,r),e.child}var cm={dehydrated:null,treeContext:null,retryLane:0};function fm(t){return{baseLanes:t,cachePool:null,transitions:null}}function HE(t,e,n){var r=e.pendingProps,i=je.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(je,i&1),t===null)return rm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Zf(s,r,0,null),t=ho(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=fm(n),e.memoizedState=cm,t):e0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return bI(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=_i(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=_i(a,o):(o=ho(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?fm(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=cm,r}return o=t.child,t=o.sibling,r=_i(o,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function e0(t,e){return e=Zf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tc(t,e,n,r){return r!==null&&jg(r),$s(e,t.child,null,n),t=e0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bI(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Wh(Error($(422))),tc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Zf({mode:"visible",children:r.children},i,0,null),o=ho(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,(e.mode&1)!==0&&$s(e,t.child,null,s),e.child.memoizedState=fm(s),e.memoizedState=cm,o);if((e.mode&1)===0)return tc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error($(419)),r=Wh(o,r,void 0),tc(t,e,s,r)}if(a=(s&t.childLanes)!==0,nn||a){if(r=ft,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Mr(t,i),Kn(r,t,i,-1))}return s0(),r=Wh(Error($(421))),tc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=NI.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,yn=bi(i.nextSibling),vn=e,Ne=!0,Hn=null,t!==null&&(Pn[On++]=Ir,Pn[On++]=Pr,Pn[On++]=Eo,Ir=t.id,Pr=t.overflow,Eo=e),e=e0(e,r.children),e.flags|=4096,e)}function c1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),im(t.return,e,n)}function Hh(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function qE(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Vt(t,e,r.children,n),r=je.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&c1(t,n,e);else if(t.tag===19)c1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(je,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&sf(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Hh(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&sf(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Hh(e,!0,n,null,o);break;case"together":Hh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tc(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xo|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=_i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function EI(t,e,n){switch(e.tag){case 3:WE(e),Us();break;case 5:wE(e);break;case 1:sn(e.type)&&Zc(e);break;case 4:qg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(nf,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(je,je.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?HE(t,e,n):(Ie(je,je.current&1),t=Lr(t,e,n),t!==null?t.sibling:null);Ie(je,je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return qE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(je,je.current),r)break;return null;case 22:case 23:return e.lanes=0,BE(t,e,n)}return Lr(t,e,n)}var KE,dm,GE,XE;KE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dm=function(){};GE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ao(fr.current);var o=null;switch(n){case"input":i=Np(t,i),r=Np(t,r),o=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),o=[];break;case"textarea":i=Dp(t,i),r=Dp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qc)}Lp(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hl.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Oe("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};XE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Pa(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function kI(t,e,n){var r=e.pendingProps;switch(Lg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(e),null;case 1:return sn(e.type)&&Jc(),Pt(e),null;case 3:return r=e.stateNode,Ds(),Re(on),Re($t),Gg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Hn!==null&&(Sm(Hn),Hn=null))),dm(t,e),Pt(e),null;case 5:Kg(e);var i=ao(_l.current);if(n=e.type,t!==null&&e.stateNode!=null)GE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return Pt(e),null}if(t=ao(fr.current),Zu(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[sr]=e,r[kl]=o,t=(e.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<ja.length;i++)Oe(ja[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":wv(r,o),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Oe("invalid",r);break;case"textarea":bv(r,o),Oe("invalid",r)}Lp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ju(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ju(r.textContent,a,t),i=["children",""+a]):hl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Oe("scroll",r)}switch(n){case"input":Wu(r),Sv(r,o,!0);break;case"textarea":Wu(r),Ev(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Eb(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[sr]=e,t[kl]=r,KE(t,e,!1,!1),e.stateNode=t;e:{switch(s=jp(n,r),n){case"dialog":Oe("cancel",t),Oe("close",t),i=r;break;case"iframe":case"object":case"embed":Oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<ja.length;i++)Oe(ja[i],t);i=r;break;case"source":Oe("error",t),i=r;break;case"img":case"image":case"link":Oe("error",t),Oe("load",t),i=r;break;case"details":Oe("toggle",t),i=r;break;case"input":wv(t,r),i=Np(t,r),Oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),Oe("invalid",t);break;case"textarea":bv(t,r),i=Dp(t,r),Oe("invalid",t);break;default:i=r}Lp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?_b(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kb(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pl(t,l):typeof l=="number"&&pl(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(hl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Oe("scroll",t):l!=null&&xg(t,o,l,s))}switch(n){case"input":Wu(t),Sv(t,r,!1);break;case"textarea":Wu(t),Ev(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Oi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?vs(t,!!r.multiple,o,!1):r.defaultValue!=null&&vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Qc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pt(e),null;case 6:if(t&&e.stateNode!=null)XE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=ao(_l.current),ao(fr.current),Zu(e)){if(r=e.stateNode,n=e.memoizedProps,r[sr]=e,(o=r.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Ju(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ju(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sr]=e,e.stateNode=r}return Pt(e),null;case 13:if(Re(je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&yn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)dE(),Us(),e.flags|=98560,o=!1;else if(o=Zu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error($(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[sr]=e}else Us(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Pt(e),o=!1}else Hn!==null&&(Sm(Hn),Hn=null),o=!0;if(!o)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(je.current&1)!==0?at===0&&(at=3):s0())),e.updateQueue!==null&&(e.flags|=4),Pt(e),null);case 4:return Ds(),dm(t,e),t===null&&bl(e.stateNode.containerInfo),Pt(e),null;case 10:return Vg(e.type._context),Pt(e),null;case 17:return sn(e.type)&&Jc(),Pt(e),null;case 19:if(Re(je),o=e.memoizedState,o===null)return Pt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Pa(o,!1);else{if(at!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=sf(t),s!==null){for(e.flags|=128,Pa(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(je,je.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ye()>Ls&&(e.flags|=128,r=!0,Pa(o,!1),e.lanes=4194304)}else{if(!r)if(t=sf(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ne)return Pt(e),null}else 2*Ye()-o.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,r=!0,Pa(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ye(),e.sibling=null,n=je.current,Ie(je,r?n&1|2:n&1),e):(Pt(e),null);case 22:case 23:return o0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(gn&1073741824)!==0&&(Pt(e),e.subtreeFlags&6&&(e.flags|=8192)):Pt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function xI(t,e){switch(Lg(e),e.tag){case 1:return sn(e.type)&&Jc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ds(),Re(on),Re($t),Gg(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Kg(e),null;case 13:if(Re(je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(je),null;case 4:return Ds(),null;case 10:return Vg(e.type._context),null;case 22:case 23:return o0(),null;case 24:return null;default:return null}}var nc=!1,At=!1,_I=typeof WeakSet=="function"?WeakSet:Set,q=null;function hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){He(t,e,r)}else n.current=null}function hm(t,e,n){try{n()}catch(r){He(t,e,r)}}var f1=!1;function CI(t,e){if(Yp=Gc,t=Zb(),Dg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,p=t,m=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===t)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qp={focusedElem:t,selectionRange:n},Gc=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var w=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,c=w.memoizedState,f=e.stateNode,h=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:Vn(e.type,v),c);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(S){He(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return w=f1,f1=!1,w}function el(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&hm(e,n,o)}i=i.next}while(i!==r)}}function Qf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function pm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function YE(t){var e=t.alternate;e!==null&&(t.alternate=null,YE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sr],delete e[kl],delete e[em],delete e[lI],delete e[uI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function QE(t){return t.tag===5||t.tag===3||t.tag===4}function d1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||QE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qc));else if(r!==4&&(t=t.child,t!==null))for(mm(t,e,n),t=t.sibling;t!==null;)mm(t,e,n),t=t.sibling}function gm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gm(t,e,n),t=t.sibling;t!==null;)gm(t,e,n),t=t.sibling}var vt=null,Wn=!1;function ti(t,e,n){for(n=n.child;n!==null;)JE(t,e,n),n=n.sibling}function JE(t,e,n){if(cr&&typeof cr.onCommitFiberUnmount=="function")try{cr.onCommitFiberUnmount(Vf,n)}catch{}switch(n.tag){case 5:At||hs(n,e);case 6:var r=vt,i=Wn;vt=null,ti(t,e,n),vt=r,Wn=i,vt!==null&&(Wn?(t=vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(Wn?(t=vt,n=n.stateNode,t.nodeType===8?Mh(t.parentNode,n):t.nodeType===1&&Mh(t,n),vl(t)):Mh(vt,n.stateNode));break;case 4:r=vt,i=Wn,vt=n.stateNode.containerInfo,Wn=!0,ti(t,e,n),vt=r,Wn=i;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&hm(n,e,s),i=i.next}while(i!==r)}ti(t,e,n);break;case 1:if(!At&&(hs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){He(n,e,a)}ti(t,e,n);break;case 21:ti(t,e,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,ti(t,e,n),At=r):ti(t,e,n);break;default:ti(t,e,n)}}function h1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _I),e.forEach(function(r){var i=UI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:vt=a.stateNode,Wn=!1;break e;case 3:vt=a.stateNode.containerInfo,Wn=!0;break e;case 4:vt=a.stateNode.containerInfo,Wn=!0;break e}a=a.return}if(vt===null)throw Error($(160));JE(o,s,i),vt=null,Wn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){He(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ZE(e,t),e=e.sibling}function ZE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),nr(t),r&4){try{el(3,t,t.return),Qf(3,t)}catch(v){He(t,t.return,v)}try{el(5,t,t.return)}catch(v){He(t,t.return,v)}}break;case 1:Bn(e,t),nr(t),r&512&&n!==null&&hs(n,n.return);break;case 5:if(Bn(e,t),nr(t),r&512&&n!==null&&hs(n,n.return),t.flags&32){var i=t.stateNode;try{pl(i,"")}catch(v){He(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Sb(i,o),jp(a,s);var u=jp(a,o);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?_b(i,p):d==="dangerouslySetInnerHTML"?kb(i,p):d==="children"?pl(i,p):xg(i,d,p,u)}switch(a){case"input":Up(i,o);break;case"textarea":bb(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?vs(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?vs(i,!!o.multiple,o.defaultValue,!0):vs(i,!!o.multiple,o.multiple?[]:"",!1))}i[kl]=o}catch(v){He(t,t.return,v)}}break;case 6:if(Bn(e,t),nr(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(v){He(t,t.return,v)}}break;case 3:if(Bn(e,t),nr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vl(e.containerInfo)}catch(v){He(t,t.return,v)}break;case 4:Bn(e,t),nr(t);break;case 13:Bn(e,t),nr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(r0=Ye())),r&4&&h1(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(At=(u=At)||d,Bn(e,t),At=u):Bn(e,t),nr(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&(t.mode&1)!==0)for(q=t,d=t.child;d!==null;){for(p=q=d;q!==null;){switch(m=q,y=m.child,m.tag){case 0:case 11:case 14:case 15:el(4,m,m.return);break;case 1:hs(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(v){He(r,n,v)}}break;case 5:hs(m,m.return);break;case 22:if(m.memoizedState!==null){m1(p);continue}}y!==null?(y.return=m,q=y):m1(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xb("display",s))}catch(v){He(t,t.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){He(t,t.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Bn(e,t),nr(t),r&4&&h1(t);break;case 21:break;default:Bn(e,t),nr(t)}}function nr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(QE(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pl(i,""),r.flags&=-33);var o=d1(t);gm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=d1(t);mm(t,a,s);break;default:throw Error($(161))}}catch(l){He(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function TI(t,e,n){q=t,ek(t)}function ek(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||nc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||At;a=nc;var u=At;if(nc=s,(At=l)&&!u)for(q=i;q!==null;)s=q,l=s.child,s.tag===22&&s.memoizedState!==null?g1(i):l!==null?(l.return=s,q=l):g1(i);for(;o!==null;)q=o,ek(o),o=o.sibling;q=i,nc=a,At=u}p1(t)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,q=o):p1(t)}}function p1(t){for(;q!==null;){var e=q;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:At||Qf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!At)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Qv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&vl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}At||e.flags&512&&pm(e)}catch(m){He(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function m1(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function g1(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qf(4,e)}catch(l){He(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){He(e,i,l)}}var o=e.return;try{pm(e)}catch(l){He(e,o,l)}break;case 5:var s=e.return;try{pm(e)}catch(l){He(e,s,l)}}}catch(l){He(e,e.return,l)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var zI=Math.ceil,uf=Gr.ReactCurrentDispatcher,t0=Gr.ReactCurrentOwner,An=Gr.ReactCurrentBatchConfig,me=0,ft=null,nt=null,Et=0,gn=0,ps=Mi(0),at=0,Il=null,xo=0,Jf=0,n0=0,tl=null,en=null,r0=0,Ls=1/0,Tr=null,cf=!1,ym=null,ki=null,rc=!1,pi=null,ff=0,nl=0,vm=null,zc=-1,Ic=0;function Ht(){return(me&6)!==0?Ye():zc!==-1?zc:zc=Ye()}function xi(t){return(t.mode&1)===0?1:(me&2)!==0&&Et!==0?Et&-Et:fI.transition!==null?(Ic===0&&(Ic=Db()),Ic):(t=ke,t!==0||(t=window.event,t=t===void 0?16:Wb(t.type)),t)}function Kn(t,e,n,r){if(50<nl)throw nl=0,vm=null,Error($(185));eu(t,n,r),((me&2)===0||t!==ft)&&(t===ft&&((me&2)===0&&(Jf|=n),at===4&&li(t,Et)),an(t,r),n===1&&me===0&&(e.mode&1)===0&&(Ls=Ye()+500,Gf&&Li()))}function an(t,e){var n=t.callbackNode;fz(t,e);var r=Kc(t,t===ft?Et:0);if(r===0)n!==null&&_v(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_v(n),e===1)t.tag===0?cI(y1.bind(null,t)):uE(y1.bind(null,t)),sI(function(){(me&6)===0&&Li()}),n=null;else{switch(Mb(r)){case 1:n=Ig;break;case 4:n=Ub;break;case 16:n=qc;break;case 536870912:n=$b;break;default:n=qc}n=lk(n,tk.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tk(t,e){if(zc=-1,Ic=0,(me&6)!==0)throw Error($(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var r=Kc(t,t===ft?Et:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=df(t,r);else{e=r;var i=me;me|=2;var o=rk();(ft!==t||Et!==e)&&(Tr=null,Ls=Ye()+500,fo(t,e));do try{OI();break}catch(a){nk(t,a)}while(1);Bg(),uf.current=o,me=i,nt!==null?e=0:(ft=null,Et=0,e=at)}if(e!==0){if(e===2&&(i=Hp(t),i!==0&&(r=i,e=wm(t,i))),e===1)throw n=Il,fo(t,0),li(t,r),an(t,Ye()),n;if(e===6)li(t,r);else{if(i=t.current.alternate,(r&30)===0&&!II(i)&&(e=df(t,r),e===2&&(o=Hp(t),o!==0&&(r=o,e=wm(t,o))),e===1))throw n=Il,fo(t,0),li(t,r),an(t,Ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:to(t,en,Tr);break;case 3:if(li(t,r),(r&130023424)===r&&(e=r0+500-Ye(),10<e)){if(Kc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Zp(to.bind(null,t,en,Tr),e);break}to(t,en,Tr);break;case 4:if(li(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-qn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zI(r/1960))-r,10<r){t.timeoutHandle=Zp(to.bind(null,t,en,Tr),r);break}to(t,en,Tr);break;case 5:to(t,en,Tr);break;default:throw Error($(329))}}}return an(t,Ye()),t.callbackNode===n?tk.bind(null,t):null}function wm(t,e){var n=tl;return t.current.memoizedState.isDehydrated&&(fo(t,e).flags|=256),t=df(t,e),t!==2&&(e=en,en=n,e!==null&&Sm(e)),t}function Sm(t){en===null?en=t:en.push.apply(en,t)}function II(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Yn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function li(t,e){for(e&=~n0,e&=~Jf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),r=1<<n;t[n]=-1,e&=~r}}function y1(t){if((me&6)!==0)throw Error($(327));ks();var e=Kc(t,0);if((e&1)===0)return an(t,Ye()),null;var n=df(t,e);if(t.tag!==0&&n===2){var r=Hp(t);r!==0&&(e=r,n=wm(t,r))}if(n===1)throw n=Il,fo(t,0),li(t,e),an(t,Ye()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,to(t,en,Tr),an(t,Ye()),null}function i0(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(Ls=Ye()+500,Gf&&Li())}}function _o(t){pi!==null&&pi.tag===0&&(me&6)===0&&ks();var e=me;me|=1;var n=An.transition,r=ke;try{if(An.transition=null,ke=1,t)return t()}finally{ke=r,An.transition=n,me=e,(me&6)===0&&Li()}}function o0(){gn=ps.current,Re(ps)}function fo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oI(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(Lg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jc();break;case 3:Ds(),Re(on),Re($t),Gg();break;case 5:Kg(r);break;case 4:Ds();break;case 13:Re(je);break;case 19:Re(je);break;case 10:Vg(r.type._context);break;case 22:case 23:o0()}n=n.return}if(ft=t,nt=t=_i(t.current,null),Et=gn=e,at=0,Il=null,n0=Jf=xo=0,en=tl=null,so!==null){for(e=0;e<so.length;e++)if(n=so[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}so=null}return t}function nk(t,e){do{var n=nt;try{if(Bg(),_c.current=lf,af){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}af=!1}if(ko=0,ct=st=Fe=null,Za=!1,Cl=0,t0.current=null,n===null||n.return===null){at=1,Il=e,nt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Et,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=i1(s);if(y!==null){y.flags&=-257,o1(y,s,a,o,e),y.mode&1&&r1(o,u,e),e=y,l=u;var w=e.updateQueue;if(w===null){var v=new Set;v.add(l),e.updateQueue=v}else w.add(l);break e}else{if((e&1)===0){r1(o,u,e),s0();break e}l=Error($(426))}}else if(Ne&&a.mode&1){var c=i1(s);if(c!==null){(c.flags&65536)===0&&(c.flags|=256),o1(c,s,a,o,e),jg(Ms(l,a));break e}}o=l=Ms(l,a),at!==4&&(at=2),tl===null?tl=[o]:tl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=LE(o,l,e);Yv(o,f);break e;case 1:a=l;var h=o.type,g=o.stateNode;if((o.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ki===null||!ki.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var S=jE(o,a,e);Yv(o,S);break e}}o=o.return}while(o!==null)}ok(n)}catch(b){e=b,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(1)}function rk(){var t=uf.current;return uf.current=lf,t===null?lf:t}function s0(){(at===0||at===3||at===2)&&(at=4),ft===null||(xo&268435455)===0&&(Jf&268435455)===0||li(ft,Et)}function df(t,e){var n=me;me|=2;var r=rk();(ft!==t||Et!==e)&&(Tr=null,fo(t,e));do try{PI();break}catch(i){nk(t,i)}while(1);if(Bg(),me=n,uf.current=r,nt!==null)throw Error($(261));return ft=null,Et=0,at}function PI(){for(;nt!==null;)ik(nt)}function OI(){for(;nt!==null&&!nz();)ik(nt)}function ik(t){var e=ak(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?ok(t):nt=e,t0.current=null}function ok(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=kI(n,e,gn),n!==null){nt=n;return}}else{if(n=xI(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{at=6,nt=null;return}}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);at===0&&(at=5)}function to(t,e,n){var r=ke,i=An.transition;try{An.transition=null,ke=1,RI(t,e,n,r)}finally{An.transition=i,ke=r}return null}function RI(t,e,n,r){do ks();while(pi!==null);if((me&6)!==0)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(dz(t,o),t===ft&&(nt=ft=null,Et=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||rc||(rc=!0,lk(qc,function(){return ks(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=An.transition,An.transition=null;var s=ke;ke=1;var a=me;me|=4,t0.current=null,CI(t,n),ZE(n,t),Jz(Qp),Gc=!!Yp,Qp=Yp=null,t.current=n,TI(n),rz(),me=a,ke=s,An.transition=o}else t.current=n;if(rc&&(rc=!1,pi=t,ff=i),o=t.pendingLanes,o===0&&(ki=null),sz(n.stateNode),an(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(cf)throw cf=!1,t=ym,ym=null,t;return(ff&1)!==0&&t.tag!==0&&ks(),o=t.pendingLanes,(o&1)!==0?t===vm?nl++:(nl=0,vm=t):nl=0,Li(),null}function ks(){if(pi!==null){var t=Mb(ff),e=An.transition,n=ke;try{if(An.transition=null,ke=16>t?16:t,pi===null)var r=!1;else{if(t=pi,pi=null,ff=0,(me&6)!==0)throw Error($(331));var i=me;for(me|=4,q=t.current;q!==null;){var o=q,s=o.child;if((q.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(q=u;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:el(8,d,o)}var p=d.child;if(p!==null)p.return=d,q=p;else for(;q!==null;){d=q;var m=d.sibling,y=d.return;if(YE(d),d===u){q=null;break}if(m!==null){m.return=y,q=m;break}q=y}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var c=v.sibling;v.sibling=null,v=c}while(v!==null)}}q=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,q=s;else e:for(;q!==null;){if(o=q,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:el(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,q=f;break e}q=o.return}}var h=t.current;for(q=h;q!==null;){s=q;var g=s.child;if((s.subtreeFlags&2064)!==0&&g!==null)g.return=s,q=g;else e:for(s=h;q!==null;){if(a=q,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Qf(9,a)}}catch(b){He(a,a.return,b)}if(a===s){q=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,q=S;break e}q=a.return}}if(me=i,Li(),cr&&typeof cr.onPostCommitFiberRoot=="function")try{cr.onPostCommitFiberRoot(Vf,t)}catch{}r=!0}return r}finally{ke=n,An.transition=e}}return!1}function v1(t,e,n){e=Ms(n,e),e=LE(t,e,1),t=Ei(t,e,1),e=Ht(),t!==null&&(eu(t,1,e),an(t,e))}function He(t,e,n){if(t.tag===3)v1(t,t,n);else for(;e!==null;){if(e.tag===3){v1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ki===null||!ki.has(r))){t=Ms(n,t),t=jE(e,t,1),e=Ei(e,t,1),t=Ht(),e!==null&&(eu(e,1,t),an(e,t));break}}e=e.return}}function AI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,ft===t&&(Et&n)===n&&(at===4||at===3&&(Et&130023424)===Et&&500>Ye()-r0?fo(t,0):n0|=n),an(t,e)}function sk(t,e){e===0&&((t.mode&1)===0?e=1:(e=Ku,Ku<<=1,(Ku&130023424)===0&&(Ku=4194304)));var n=Ht();t=Mr(t,e),t!==null&&(eu(t,e,n),an(t,n))}function NI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sk(t,n)}function UI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),sk(t,n)}var ak;ak=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)nn=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return nn=!1,EI(t,e,n);nn=(t.flags&131072)!==0}else nn=!1,Ne&&(e.flags&1048576)!==0&&cE(e,tf,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tc(t,e),t=e.pendingProps;var i=Ns(e,$t.current);Es(e,n),i=Yg(null,e,r,t,i,n);var o=Qg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(r)?(o=!0,Zc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hg(e),i.updater=Xf,e.stateNode=i,i._reactInternals=e,sm(e,r,t,n),e=um(null,e,r,!0,o,n)):(e.tag=0,Ne&&o&&Mg(e),Vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Tc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=DI(r),t=Vn(r,t),i){case 0:e=lm(null,e,r,t,n);break e;case 1:e=l1(null,e,r,t,n);break e;case 11:e=s1(null,e,r,t,n);break e;case 14:e=a1(null,e,r,Vn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),lm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),l1(t,e,r,i,n);case 3:e:{if(WE(e),t===null)throw Error($(387));r=e.pendingProps,o=e.memoizedState,i=o.element,pE(t,e),of(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Ms(Error($(423)),e),e=u1(t,e,r,n,i);break e}else if(r!==i){i=Ms(Error($(424)),e),e=u1(t,e,r,n,i);break e}else for(yn=bi(e.stateNode.containerInfo.firstChild),vn=e,Ne=!0,Hn=null,n=vE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),r===i){e=Lr(t,e,n);break e}Vt(t,e,r,n)}e=e.child}return e;case 5:return wE(e),t===null&&rm(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Jp(r,i)?s=null:o!==null&&Jp(r,o)&&(e.flags|=32),VE(t,e),Vt(t,e,s,n),e.child;case 6:return t===null&&rm(e),null;case 13:return HE(t,e,n);case 4:return qg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$s(e,null,r,n):Vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),s1(t,e,r,i,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Ie(nf,r._currentValue),r._currentValue=s,o!==null)if(Yn(o.value,s)){if(o.children===i.children&&!on.current){e=Lr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Nr(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),im(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error($(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),im(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Es(e,n),i=Un(i),r=r(i),e.flags|=1,Vt(t,e,r,n),e.child;case 14:return r=e.type,i=Vn(r,e.pendingProps),i=Vn(r.type,i),a1(t,e,r,i,n);case 15:return FE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Tc(t,e),e.tag=1,sn(r)?(t=!0,Zc(e)):t=!1,Es(e,n),gE(e,r,i),sm(e,r,i,n),um(null,e,r,!0,t,n);case 19:return qE(t,e,n);case 22:return BE(t,e,n)}throw Error($(156,e.tag))};function lk(t,e){return Nb(t,e)}function $I(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,r){return new $I(t,e,n,r)}function a0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DI(t){if(typeof t=="function")return a0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cg)return 11;if(t===Tg)return 14}return 2}function _i(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")a0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case is:return ho(n.children,i,o,e);case _g:s=8,i|=8;break;case Pp:return t=Rn(12,n,e,i|2),t.elementType=Pp,t.lanes=o,t;case Op:return t=Rn(13,n,e,i),t.elementType=Op,t.lanes=o,t;case Rp:return t=Rn(19,n,e,i),t.elementType=Rp,t.lanes=o,t;case yb:return Zf(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mb:s=10;break e;case gb:s=9;break e;case Cg:s=11;break e;case Tg:s=14;break e;case oi:s=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Rn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function ho(t,e,n,r){return t=Rn(7,t,r,e),t.lanes=n,t}function Zf(t,e,n,r){return t=Rn(22,t,r,e),t.elementType=yb,t.lanes=n,t.stateNode={isHidden:!1},t}function qh(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function Kh(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function MI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Th(0),this.expirationTimes=Th(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Th(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function l0(t,e,n,r,i,o,s,a,l){return t=new MI(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Rn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hg(o),t}function LI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function uk(t){if(!t)return Ri;t=t._reactInternals;e:{if($o(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(sn(n))return lE(t,n,e)}return e}function ck(t,e,n,r,i,o,s,a,l){return t=l0(n,r,!0,t,i,o,s,a,l),t.context=uk(null),n=t.current,r=Ht(),i=xi(n),o=Nr(r,i),o.callback=e!=null?e:null,Ei(n,o,i),t.current.lanes=i,eu(t,i,r),an(t,r),t}function ed(t,e,n,r){var i=e.current,o=Ht(),s=xi(i);return n=uk(n),e.context===null?e.context=n:e.pendingContext=n,e=Nr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ei(i,e,s),t!==null&&(Kn(t,i,s,o),xc(t,i,s)),s}function hf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function w1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function u0(t,e){w1(t,e),(t=t.alternate)&&w1(t,e)}function jI(){return null}var fk=typeof reportError=="function"?reportError:function(t){console.error(t)};function c0(t){this._internalRoot=t}td.prototype.render=c0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));ed(t,e,null,null)};td.prototype.unmount=c0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_o(function(){ed(null,t,null,null)}),e[Dr]=null}};function td(t){this._internalRoot=t}td.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fb();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ai.length&&e!==0&&e<ai[n].priority;n++);ai.splice(n,0,t),n===0&&Vb(t)}};function f0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function S1(){}function FI(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=hf(s);o.call(u)}}var s=ck(e,r,t,0,null,!1,!1,"",S1);return t._reactRootContainer=s,t[Dr]=s.current,bl(t.nodeType===8?t.parentNode:t),_o(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=hf(l);a.call(u)}}var l=l0(t,0,!1,null,null,!1,!1,"",S1);return t._reactRootContainer=l,t[Dr]=l.current,bl(t.nodeType===8?t.parentNode:t),_o(function(){ed(e,l,n,r)}),l}function rd(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=hf(s);a.call(l)}}ed(e,s,t,i)}else s=FI(n,e,t,i,r);return hf(s)}Lb=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=La(e.pendingLanes);n!==0&&(Pg(e,n|1),an(e,Ye()),(me&6)===0&&(Ls=Ye()+500,Li()))}break;case 13:_o(function(){var r=Mr(t,1);if(r!==null){var i=Ht();Kn(r,t,1,i)}}),u0(t,1)}};Og=function(t){if(t.tag===13){var e=Mr(t,134217728);if(e!==null){var n=Ht();Kn(e,t,134217728,n)}u0(t,134217728)}};jb=function(t){if(t.tag===13){var e=xi(t),n=Mr(t,e);if(n!==null){var r=Ht();Kn(n,t,e,r)}u0(t,e)}};Fb=function(){return ke};Bb=function(t,e){var n=ke;try{return ke=t,e()}finally{ke=n}};Bp=function(t,e,n){switch(e){case"input":if(Up(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kf(r);if(!i)throw Error($(90));wb(r),Up(r,i)}}}break;case"textarea":bb(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};zb=i0;Ib=_o;var BI={usingClientEntryPoint:!1,Events:[nu,ls,Kf,Cb,Tb,i0]},Oa={findFiberByHostInstance:oo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},VI={bundleType:Oa.bundleType,version:Oa.version,rendererPackageName:Oa.rendererPackageName,rendererConfig:Oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rb(t),t===null?null:t.stateNode},findFiberByHostInstance:Oa.findFiberByHostInstance||jI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Vf=ic.inject(VI),cr=ic}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BI;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f0(e))throw Error($(200));return LI(t,e,null,n)};En.createRoot=function(t,e){if(!f0(t))throw Error($(299));var n=!1,r="",i=fk;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=l0(t,1,!1,null,null,n,!1,r,i),t[Dr]=e.current,bl(t.nodeType===8?t.parentNode:t),new c0(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=Rb(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return _o(t)};En.hydrate=function(t,e,n){if(!nd(e))throw Error($(200));return rd(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!f0(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=fk;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=ck(e,null,t,1,n!=null?n:null,i,!1,o,s),t[Dr]=e.current,bl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new td(e)};En.render=function(t,e,n){if(!nd(e))throw Error($(200));return rd(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!nd(t))throw Error($(40));return t._reactRootContainer?(_o(function(){rd(null,null,t,!1,function(){t._reactRootContainer=null,t[Dr]=null})}),!0):!1};En.unstable_batchedUpdates=i0;En.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nd(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return rd(t,e,n,!1,r)};En.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=En})(Bf);const oc=rb(Bf.exports);var b1=Bf.exports;mv.createRoot=b1.createRoot,mv.hydrateRoot=b1.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pl(){return Pl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pl.apply(this,arguments)}var mi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mi||(mi={}));const E1="popstate";function WI(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return bm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ol(i)}return KI(e,n,null,t)}function HI(){return Math.random().toString(36).substr(2,8)}function k1(t){return{usr:t.state,key:t.key}}function bm(t,e,n,r){return n===void 0&&(n=null),Pl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?sa(e):e,{state:n,key:e&&e.key||r||HI()})}function Ol(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function sa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function qI(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:Ol(t);return new URL(n,e)}function KI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=mi.Pop,l=null;function u(){a=mi.Pop,l&&l({action:a,location:m.location})}function d(y,w){a=mi.Push;let v=bm(m.location,y,w);n&&n(v,y);let c=k1(v),f=m.createHref(v);try{s.pushState(c,"",f)}catch{i.location.assign(f)}o&&l&&l({action:a,location:m.location})}function p(y,w){a=mi.Replace;let v=bm(m.location,y,w);n&&n(v,y);let c=k1(v),f=m.createHref(v);s.replaceState(c,"",f),o&&l&&l({action:a,location:m.location})}let m={get action(){return a},get location(){return t(i,s)},listen(y){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(E1,u),l=y,()=>{i.removeEventListener(E1,u),l=null}},createHref(y){return e(i,y)},encodeLocation(y){let w=qI(Ol(y));return Pl({},y,{pathname:w.pathname,search:w.search,hash:w.hash})},push:d,replace:p,go(y){return s.go(y)}};return m}var x1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(x1||(x1={}));function GI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?sa(e):e,i=hk(r.pathname||"/",n);if(i==null)return null;let o=dk(t);XI(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=iP(o[a],aP(i));return s}function dk(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,o)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(dt(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let a=Ci([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(dt(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),dk(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:nP(a,i.index),routesMeta:l})}),e}function XI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:rP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const YI=/^:\w+$/,QI=3,JI=2,ZI=1,eP=10,tP=-2,_1=t=>t==="*";function nP(t,e){let n=t.split("/"),r=n.length;return n.some(_1)&&(r+=tP),e&&(r+=JI),n.filter(i=>!_1(i)).reduce((i,o)=>i+(YI.test(o)?QI:o===""?ZI:eP),r)}function rP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function iP(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=oP({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let p=a.route;o.push({params:r,pathname:Ci([i,d.pathname]),pathnameBase:fP(Ci([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=Ci([i,d.pathnameBase]))}return o}function oP(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=sP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,p)=>{if(d==="*"){let m=a[p]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=lP(a[p]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:t}}function sP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),d0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function aP(t){try{return decodeURI(t)}catch(e){return d0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function lP(t,e){try{return decodeURIComponent(t)}catch(n){return d0(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function hk(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function dt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function d0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function uP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?sa(t):t;return{pathname:n?n.startsWith("/")?n:cP(n,e):e,search:dP(r),hash:hP(i)}}function cP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function mk(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=sa(t):(i=Pl({},t),dt(!i.pathname||!i.pathname.includes("?"),Gh("?","pathname","search",i)),dt(!i.pathname||!i.pathname.includes("#"),Gh("#","pathname","hash",i)),dt(!i.search||!i.search.includes("#"),Gh("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let p=e.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?e[p]:"/"}let l=uP(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Ci=t=>t.join("/").replace(/\/\/+/g,"/"),fP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),dP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class pP{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function mP(t){return t instanceof pP}const gP=new Set(["POST","PUT","PATCH","DELETE"]);[...gP];var id={exports:{}},od={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yP=I.exports,vP=Symbol.for("react.element"),wP=Symbol.for("react.fragment"),SP=Object.prototype.hasOwnProperty,bP=yP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,EP={key:!0,ref:!0,__self:!0,__source:!0};function gk(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)SP.call(e,r)&&!EP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:vP,type:t,key:o,ref:s,props:i,_owner:bP.current}}od.Fragment=wP;od.jsx=gk;od.jsxs=gk;(function(t){t.exports=od})(id);const yk=id.exports.Fragment,ee=id.exports.jsx,Co=id.exports.jsxs,kP=Object.freeze(Object.defineProperty({__proto__:null,Fragment:yk,jsx:ee,jsxs:Co},Symbol.toStringTag,{value:"Module"}));/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Em(){return Em=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Em.apply(this,arguments)}function xP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const _P=typeof Object.is=="function"?Object.is:xP,{useState:CP,useEffect:TP,useLayoutEffect:zP,useDebugValue:IP}=Rs;function PP(t,e,n){const r=e(),[{inst:i},o]=CP({inst:{value:r,getSnapshot:e}});return zP(()=>{i.value=r,i.getSnapshot=e,Xh(i)&&o({inst:i})},[t,r,e]),TP(()=>(Xh(i)&&o({inst:i}),t(()=>{Xh(i)&&o({inst:i})})),[t]),IP(r),r}function Xh(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!_P(n,r)}catch{return!0}}function OP(t,e,n){return e()}const RP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AP=!RP,NP=AP?OP:PP;"useSyncExternalStore"in Rs&&(t=>t.useSyncExternalStore)(Rs);const UP=I.exports.createContext(null),$P=I.exports.createContext(null),h0=I.exports.createContext(null),p0=I.exports.createContext(null),sd=I.exports.createContext(null),iu=I.exports.createContext({outlet:null,matches:[]}),vk=I.exports.createContext(null);function DP(t,e){let{relative:n}=e===void 0?{}:e;ou()||dt(!1);let{basename:r,navigator:i}=I.exports.useContext(p0),{hash:o,pathname:s,search:a}=m0(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Ci([r,s])),i.createHref({pathname:l,search:a,hash:o})}function ou(){return I.exports.useContext(sd)!=null}function su(){return ou()||dt(!1),I.exports.useContext(sd).location}function MP(){ou()||dt(!1);let{basename:t,navigator:e}=I.exports.useContext(p0),{matches:n}=I.exports.useContext(iu),{pathname:r}=su(),i=JSON.stringify(pk(n).map(a=>a.pathnameBase)),o=I.exports.useRef(!1);return I.exports.useEffect(()=>{o.current=!0}),I.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){e.go(a);return}let u=mk(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Ci([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function m0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.exports.useContext(iu),{pathname:i}=su(),o=JSON.stringify(pk(r).map(s=>s.pathnameBase));return I.exports.useMemo(()=>mk(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function LP(t,e){ou()||dt(!1);let n=I.exports.useContext(h0),{matches:r}=I.exports.useContext(iu),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let a=su(),l;if(e){var u;let w=typeof e=="string"?sa(e):e;s==="/"||((u=w.pathname)==null?void 0:u.startsWith(s))||dt(!1),l=w}else l=a;let d=l.pathname||"/",p=s==="/"?d:d.slice(s.length)||"/",m=GI(t,{pathname:p}),y=VP(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Ci([s,w.pathname]),pathnameBase:w.pathnameBase==="/"?s:Ci([s,w.pathnameBase])})),r,n||void 0);return e&&y?ee(sd.Provider,{value:{location:Em({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:mi.Pop},children:y}):y}function jP(){let t=HP(),e=mP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return Co(yk,{children:[ee("h2",{children:"Unhandled Thrown Error!"}),ee("h3",{style:{fontStyle:"italic"},children:e}),n?ee("pre",{style:i,children:n}):null,ee("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),Co("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",ee("code",{style:o,children:"errorElement"})," props on\xA0",ee("code",{style:o,children:"<Route>"})]})]})}class FP extends I.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?ee(vk.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function BP(t){let{routeContext:e,match:n,children:r}=t,i=I.exports.useContext(UP);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),ee(iu.Provider,{value:e,children:r})}function VP(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||dt(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||ee(jP,{}):null,d=()=>ee(BP,{match:s,routeContext:{outlet:o,matches:e.concat(r.slice(0,a+1))},children:l?u:s.route.element!==void 0?s.route.element:o});return n&&(s.route.errorElement||a===0)?ee(FP,{location:n.location,component:u,error:l,children:d()}):d()},null)}var C1;(function(t){t.UseRevalidator="useRevalidator"})(C1||(C1={}));var km;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(km||(km={}));function WP(t){let e=I.exports.useContext(h0);return e||dt(!1),e}function HP(){var t;let e=I.exports.useContext(vk),n=WP(km.UseRouteError),r=I.exports.useContext(iu),i=r.matches[r.matches.length-1];return e||(r||dt(!1),i.route.id||dt(!1),(t=n.errors)==null?void 0:t[i.route.id])}function qP(t){dt(!1)}function KP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=mi.Pop,navigator:o,static:s=!1}=t;ou()&&dt(!1);let a=e.replace(/^\/*/,"/"),l=I.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=sa(r));let{pathname:u="/",search:d="",hash:p="",state:m=null,key:y="default"}=r,w=I.exports.useMemo(()=>{let v=hk(u,a);return v==null?null:{pathname:v,search:d,hash:p,state:m,key:y}},[a,u,d,p,m,y]);return w==null?null:ee(p0.Provider,{value:l,children:ee(sd.Provider,{children:n,value:{location:w,navigationType:i}})})}function tB(t){let{children:e,location:n}=t,r=I.exports.useContext($P),i=r&&!e?r.router.routes:xm(e);return LP(i,n)}var T1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(T1||(T1={}));new Promise(()=>{});function xm(t,e){e===void 0&&(e=[]);let n=[];return I.exports.Children.forEach(t,(r,i)=>{if(!I.exports.isValidElement(r))return;if(r.type===I.exports.Fragment){n.push.apply(n,xm(r.props.children,e));return}r.type!==qP&&dt(!1),!r.props.index||!r.props.children||dt(!1);let o=[...e,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=xm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function GP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XP(t,e){return t.button===0&&(!e||e==="_self")&&!GP(t)}const YP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],QP=["aria-current","caseSensitive","className","end","style","to","children"];function nB(t){let{basename:e,children:n,window:r}=t,i=I.exports.useRef();i.current==null&&(i.current=WI({window:r,v5Compat:!0}));let o=i.current,[s,a]=I.exports.useState({action:o.action,location:o.location});return I.exports.useLayoutEffect(()=>o.listen(a),[o]),ee(KP,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:o})}const JP=I.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d}=e,p=wk(e,YP),m=DP(u,{relative:i}),y=ZP(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i});function w(v){r&&r(v),v.defaultPrevented||y(v)}return ee("a",{...p,href:m,onClick:o?r:w,ref:n,target:l})}),rB=I.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,children:u}=e,d=wk(e,QP),p=m0(l,{relative:d.relative}),m=su(),y=I.exports.useContext(h0),w=p.pathname,v=m.pathname,c=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(v=v.toLowerCase(),c=c?c.toLowerCase():null,w=w.toLowerCase());let f=v===w||!s&&v.startsWith(w)&&v.charAt(w.length)==="/",h=c!=null&&(c===w||!s&&c.startsWith(w)&&c.charAt(w.length)==="/"),g=f?r:void 0,S;typeof o=="function"?S=o({isActive:f,isPending:h}):S=[o,f?"active":null,h?"pending":null].filter(Boolean).join(" ");let b=typeof a=="function"?a({isActive:f,isPending:h}):a;return ee(JP,{...d,"aria-current":g,className:S,ref:n,style:b,to:l,children:typeof u=="function"?u({isActive:f,isPending:h}):u})});var z1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(z1||(z1={}));var I1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(I1||(I1={}));function ZP(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=MP(),l=su(),u=m0(t,{relative:s});return I.exports.useCallback(d=>{if(XP(d,n)){d.preventDefault();let p=r!==void 0?r:Ol(l)===Ol(u);a(t,{replace:p,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,t,o,s])}var eO={},Yh={exports:{}},Qh,P1;function tO(){if(P1)return Qh;P1=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Qh=t,Qh}var Jh,O1;function nO(){if(O1)return Jh;O1=1;var t=tO();function e(){}function n(){}return n.resetWarningCache=e,Jh=function(){function r(s,a,l,u,d,p){if(p!==t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function i(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:e};return o.PropTypes=o,o},Jh}var R1;function Sk(){return R1||(R1=1,Yh.exports=nO()()),Yh.exports}var bk={exports:{}};(function(t,e){(function(n){t.exports=n(null)})(function n(r){var i=/^\0+/g,o=/[\0\r\f]/g,s=/: */g,a=/zoo|gra/,l=/([,: ])(transform)/g,u=/,+\s*(?![^(]*[)])/g,d=/ +\s*(?![^(]*[)])/g,p=/ *[\0] */g,m=/,\r+?/g,y=/([\t\r\n ])*\f?&/g,w=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,v=/\W+/g,c=/@(k\w+)\s*(\S*)\s*/,f=/::(place)/g,h=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,S=/([[}=:>])\s+/g,b=/(\{[^{]+?);(?=\})/g,E=/\s{2,}/g,k=/([^\(])(:+) */g,_=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,x=/([\s\S]*?);/g,T=/-self|flex-/g,R=/[^]*?(:[rp][el]a[\w-]+)[^]*/,N=/stretch|:\s*\w+\-(?:conte|avail)/,B=/([^-])(image-set\()/,O="-webkit-",U="-moz-",L="-ms-",P=59,A=125,j=123,Y=40,se=41,Ke=91,it=93,De=10,Me=13,Ve=9,Ge=64,Le=32,Qn=38,We=45,ma=95,Gt=42,dn=44,Lt=58,br=39,hn=34,Ct=47,Jn=62,Xt=43,Yt=126,jn=0,Zn=12,er=11,jt=107,Er=109,qi=115,Jr=112,Cn=111,ga=105,Ki=99,Gi=100,Uu=112,Ft=1,Tn=1,Fn=0,pn=1,mn=1,ya=1,$u=0,va=0,Lo=0,jo=[],Fo=[],zn=0,Bo=null,ph=-2,mh=-1,gh=0,Xi=1,wa=2,yh=3,Zr=0,kr=1,Tt="",Qt="",Yi="";function xr(F,H,X,ie,W){for(var Se,z,he=0,ue=0,Je=0,ce=0,ot=0,Ce=0,fe=0,Bt=0,Jt=0,Ho=0,Zt=0,_r=0,Mu=0,tr=0,ge=0,In=0,qo=0,Ea=0,Te=0,Zi=X.length,ka=Zi-1,zt="",re="",Pe="",Xe="",Lu="",wh="";ge<Zi;){if(fe=X.charCodeAt(ge),ge===ka&&ue+ce+Je+he!==0&&(ue!==0&&(fe=ue===Ct?De:Ct),ce=Je=he=0,Zi++,ka++),ue+ce+Je+he===0){if(ge===ka&&(In>0&&(re=re.replace(o,"")),re.trim().length>0)){switch(fe){case Le:case Ve:case P:case Me:case De:break;default:re+=X.charAt(ge)}fe=P}if(qo===1)switch(fe){case j:case A:case P:case hn:case br:case Y:case se:case dn:qo=0;case Ve:case Me:case De:case Le:break;default:for(qo=0,Te=ge,ot=fe,ge--,fe=P;Te<Zi;)switch(X.charCodeAt(Te++)){case De:case Me:case P:++ge,fe=ot,Te=Zi;break;case Lt:In>0&&(++ge,fe=ot);case j:Te=Zi}}switch(fe){case j:for(ot=(re=re.trim()).charCodeAt(0),Zt=1,Te=++ge;ge<Zi;){switch(fe=X.charCodeAt(ge)){case j:Zt++;break;case A:Zt--;break;case Ct:switch(Ce=X.charCodeAt(ge+1)){case Gt:case Ct:ge=vh(Ce,ge,ka,X)}break;case Ke:fe++;case Y:fe++;case hn:case br:for(;ge++<ka&&X.charCodeAt(ge)!==fe;);}if(Zt===0)break;ge++}switch(Pe=X.substring(Te,ge),ot===jn&&(ot=(re=re.replace(i,"").trim()).charCodeAt(0)),ot){case Ge:switch(In>0&&(re=re.replace(o,"")),Ce=re.charCodeAt(1)){case Gi:case Er:case qi:case We:Se=H;break;default:Se=jo}if(Te=(Pe=xr(H,Se,Pe,Ce,W+1)).length,Lo>0&&Te===0&&(Te=re.length),zn>0&&(Se=Vo(jo,re,Ea),z=ei(yh,Pe,Se,H,Tn,Ft,Te,Ce,W,ie),re=Se.join(""),z!==void 0&&(Te=(Pe=z.trim()).length)===0&&(Ce=0,Pe="")),Te>0)switch(Ce){case qi:re=re.replace(C,Du);case Gi:case Er:case We:Pe=re+"{"+Pe+"}";break;case jt:Pe=(re=re.replace(c,"$1 $2"+(kr>0?Tt:"")))+"{"+Pe+"}",mn===1||mn===2&&Qi("@"+Pe,3)?Pe="@"+O+Pe+"@"+Pe:Pe="@"+Pe;break;default:Pe=re+Pe,ie===Uu&&(Xe+=Pe,Pe="")}else Pe="";break;default:Pe=xr(H,Vo(H,re,Ea),Pe,ie,W+1)}Lu+=Pe,_r=0,qo=0,tr=0,In=0,Ea=0,Mu=0,re="",Pe="",fe=X.charCodeAt(++ge);break;case A:case P:if((Te=(re=(In>0?re.replace(o,""):re).trim()).length)>1)switch(tr===0&&((ot=re.charCodeAt(0))===We||ot>96&&ot<123)&&(Te=(re=re.replace(" ",":")).length),zn>0&&(z=ei(Xi,re,H,F,Tn,Ft,Xe.length,ie,W,ie))!==void 0&&(Te=(re=z.trim()).length)===0&&(re="\0\0"),ot=re.charCodeAt(0),Ce=re.charCodeAt(1),ot){case jn:break;case Ge:if(Ce===ga||Ce===Ki){wh+=re+X.charAt(ge);break}default:if(re.charCodeAt(Te-1)===Lt)break;Xe+=Wo(re,ot,Ce,re.charCodeAt(2))}_r=0,qo=0,tr=0,In=0,Ea=0,re="",fe=X.charCodeAt(++ge)}}switch(fe){case Me:case De:if(ue+ce+Je+he+va===0)switch(Ho){case se:case br:case hn:case Ge:case Yt:case Jn:case Gt:case Xt:case Ct:case We:case Lt:case dn:case P:case j:case A:break;default:tr>0&&(qo=1)}ue===Ct?ue=0:pn+_r===0&&ie!==jt&&re.length>0&&(In=1,re+="\0"),zn*Zr>0&&ei(gh,re,H,F,Tn,Ft,Xe.length,ie,W,ie),Ft=1,Tn++;break;case P:case A:if(ue+ce+Je+he===0){Ft++;break}default:switch(Ft++,zt=X.charAt(ge),fe){case Ve:case Le:if(ce+he+ue===0)switch(Bt){case dn:case Lt:case Ve:case Le:zt="";break;default:fe!==Le&&(zt=" ")}break;case jn:zt="\\0";break;case Zn:zt="\\f";break;case er:zt="\\v";break;case Qn:ce+ue+he===0&&pn>0&&(Ea=1,In=1,zt="\f"+zt);break;case 108:if(ce+ue+he+Fn===0&&tr>0)switch(ge-tr){case 2:Bt===Jr&&X.charCodeAt(ge-3)===Lt&&(Fn=Bt);case 8:Jt===Cn&&(Fn=Jt)}break;case Lt:ce+ue+he===0&&(tr=ge);break;case dn:ue+Je+ce+he===0&&(In=1,zt+="\r");break;case hn:case br:ue===0&&(ce=ce===fe?0:ce===0?fe:ce);break;case Ke:ce+ue+Je===0&&he++;break;case it:ce+ue+Je===0&&he--;break;case se:ce+ue+he===0&&Je--;break;case Y:if(ce+ue+he===0){if(_r===0)switch(2*Bt+3*Jt){case 533:break;default:Zt=0,_r=1}Je++}break;case Ge:ue+Je+ce+he+tr+Mu===0&&(Mu=1);break;case Gt:case Ct:if(ce+he+Je>0)break;switch(ue){case 0:switch(2*fe+3*X.charCodeAt(ge+1)){case 235:ue=Ct;break;case 220:Te=ge,ue=Gt}break;case Gt:fe===Ct&&Bt===Gt&&Te+2!==ge&&(X.charCodeAt(Te+2)===33&&(Xe+=X.substring(Te,ge+1)),zt="",ue=0)}}if(ue===0){if(pn+ce+he+Mu===0&&ie!==jt&&fe!==P)switch(fe){case dn:case Yt:case Jn:case Xt:case se:case Y:if(_r===0){switch(Bt){case Ve:case Le:case De:case Me:zt+="\0";break;default:zt="\0"+zt+(fe===dn?"":"\0")}In=1}else switch(fe){case Y:tr+7===ge&&Bt===108&&(tr=0),_r=++Zt;break;case se:(_r=--Zt)==0&&(In=1,zt+="\0")}break;case Ve:case Le:switch(Bt){case jn:case j:case A:case P:case dn:case Zn:case Ve:case Le:case De:case Me:break;default:_r===0&&(In=1,zt+="\0")}}re+=zt,fe!==Le&&fe!==Ve&&(Ho=fe)}}Jt=Bt,Bt=fe,ge++}if(Te=Xe.length,Lo>0&&Te===0&&Lu.length===0&&H[0].length!==0&&(ie!==Er||H.length===1&&(pn>0?Qt:Yi)===H[0])&&(Te=H.join(",").length+2),Te>0){if(Se=pn===0&&ie!==jt?function(sv){for(var Cr,yt,ju=0,av=sv.length,lv=Array(av);ju<av;++ju){for(var Sh=sv[ju].split(p),Fu="",Ko=0,bh=0,uv=0,cv=0,fv=Sh.length;Ko<fv;++Ko)if(!((bh=(yt=Sh[Ko]).length)===0&&fv>1)){if(uv=Fu.charCodeAt(Fu.length-1),cv=yt.charCodeAt(0),Cr="",Ko!==0)switch(uv){case Gt:case Yt:case Jn:case Xt:case Le:case Y:break;default:Cr=" "}switch(cv){case Qn:yt=Cr+Qt;case Yt:case Jn:case Xt:case Le:case se:case Y:break;case Ke:yt=Cr+yt+Qt;break;case Lt:switch(2*yt.charCodeAt(1)+3*yt.charCodeAt(2)){case 530:if(ya>0){yt=Cr+yt.substring(8,bh-1);break}default:(Ko<1||Sh[Ko-1].length<1)&&(yt=Cr+Qt+yt)}break;case dn:Cr="";default:bh>1&&yt.indexOf(":")>0?yt=Cr+yt.replace(k,"$1"+Qt+"$2"):yt=Cr+yt+Qt}Fu+=yt}lv[ju]=Fu.replace(o,"").trim()}return lv}(H):H,zn>0&&(z=ei(wa,Xe,Se,F,Tn,Ft,Te,ie,W,ie))!==void 0&&(Xe=z).length===0)return wh+Xe+Lu;if(Xe=Se.join(",")+"{"+Xe+"}",mn*Fn!=0){switch(mn===2&&!Qi(Xe,2)&&(Fn=0),Fn){case Cn:Xe=Xe.replace(h,":"+U+"$1")+Xe;break;case Jr:Xe=Xe.replace(f,"::"+O+"input-$1")+Xe.replace(f,"::"+U+"$1")+Xe.replace(f,":"+L+"input-$1")+Xe}Fn=0}}return wh+Xe+Lu}function Vo(F,H,X){var ie=H.trim().split(m),W=ie,Se=ie.length,z=F.length;switch(z){case 0:case 1:for(var he=0,ue=z===0?"":F[0]+" ";he<Se;++he)W[he]=Sa(ue,W[he],X,z).trim();break;default:he=0;var Je=0;for(W=[];he<Se;++he)for(var ce=0;ce<z;++ce)W[Je++]=Sa(F[ce]+" ",ie[he],X,z).trim()}return W}function Sa(F,H,X,ie){var W=H,Se=W.charCodeAt(0);switch(Se<33&&(Se=(W=W.trim()).charCodeAt(0)),Se){case Qn:switch(pn+ie){case 0:case 1:if(F.trim().length===0)break;default:return W.replace(y,"$1"+F.trim())}break;case Lt:switch(W.charCodeAt(1)){case 103:if(ya>0&&pn>0)return W.replace(w,"$1").replace(y,"$1"+Yi);break;default:return F.trim()+W.replace(y,"$1"+F.trim())}default:if(X*pn>0&&W.indexOf("\f")>0)return W.replace(y,(F.charCodeAt(0)===Lt?"":"$1")+F.trim())}return F+W}function Wo(F,H,X,ie){var W,Se=0,z=F+";",he=2*H+3*X+4*ie;if(he===944)return function(ue){var Je=ue.length,ce=ue.indexOf(":",9)+1,ot=ue.substring(0,ce).trim(),Ce=ue.substring(ce,Je-1).trim();switch(ue.charCodeAt(9)*kr){case 0:break;case We:if(ue.charCodeAt(10)!==110)break;default:for(var fe=Ce.split((Ce="",u)),Bt=0,ce=0,Je=fe.length;Bt<Je;ce=0,++Bt){for(var Jt=fe[Bt],Ho=Jt.split(d);Jt=Ho[ce];){var Zt=Jt.charCodeAt(0);if(kr===1&&(Zt>Ge&&Zt<90||Zt>96&&Zt<123||Zt===ma||Zt===We&&Jt.charCodeAt(1)!==We))switch(isNaN(parseFloat(Jt))+(Jt.indexOf("(")!==-1)){case 1:switch(Jt){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:Jt+=Tt}}Ho[ce++]=Jt}Ce+=(Bt===0?"":",")+Ho.join(" ")}}return Ce=ot+Ce+";",mn===1||mn===2&&Qi(Ce,1)?O+Ce+Ce:Ce}(z);if(mn===0||mn===2&&!Qi(z,1))return z;switch(he){case 1015:return z.charCodeAt(10)===97?O+z+z:z;case 951:return z.charCodeAt(3)===116?O+z+z:z;case 963:return z.charCodeAt(5)===110?O+z+z:z;case 1009:if(z.charCodeAt(4)!==100)break;case 969:case 942:return O+z+z;case 978:return O+z+U+z+z;case 1019:case 983:return O+z+U+z+L+z+z;case 883:return z.charCodeAt(8)===We?O+z+z:z.indexOf("image-set(",11)>0?z.replace(B,"$1"+O+"$2")+z:z;case 932:if(z.charCodeAt(4)===We)switch(z.charCodeAt(5)){case 103:return O+"box-"+z.replace("-grow","")+O+z+L+z.replace("grow","positive")+z;case 115:return O+z+L+z.replace("shrink","negative")+z;case 98:return O+z+L+z.replace("basis","preferred-size")+z}return O+z+L+z+z;case 964:return O+z+L+"flex-"+z+z;case 1023:if(z.charCodeAt(8)!==99)break;return W=z.substring(z.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),O+"box-pack"+W+O+z+L+"flex-pack"+W+z;case 1005:return a.test(z)?z.replace(s,":"+O)+z.replace(s,":"+U)+z:z;case 1e3:switch(Se=(W=z.substring(13).trim()).indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(Se)){case 226:W=z.replace(_,"tb");break;case 232:W=z.replace(_,"tb-rl");break;case 220:W=z.replace(_,"lr");break;default:return z}return O+z+L+W+z;case 1017:if(z.indexOf("sticky",9)===-1)return z;case 975:switch(Se=(z=F).length-10,he=(W=(z.charCodeAt(Se)===33?z.substring(0,Se):z).substring(F.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|W.charCodeAt(7))){case 203:if(W.charCodeAt(8)<111)break;case 115:z=z.replace(W,O+W)+";"+z;break;case 207:case 102:z=z.replace(W,O+(he>102?"inline-":"")+"box")+";"+z.replace(W,O+W)+";"+z.replace(W,L+W+"box")+";"+z}return z+";";case 938:if(z.charCodeAt(5)===We)switch(z.charCodeAt(6)){case 105:return W=z.replace("-items",""),O+z+O+"box-"+W+L+"flex-"+W+z;case 115:return O+z+L+"flex-item-"+z.replace(T,"")+z;default:return O+z+L+"flex-line-pack"+z.replace("align-content","").replace(T,"")+z}break;case 973:case 989:if(z.charCodeAt(3)!==We||z.charCodeAt(4)===122)break;case 931:case 953:if(N.test(F)===!0)return(W=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?Wo(F.replace("stretch","fill-available"),H,X,ie).replace(":fill-available",":stretch"):z.replace(W,O+W)+z.replace(W,U+W.replace("fill-",""))+z;break;case 962:if(z=O+z+(z.charCodeAt(5)===102?L+z:"")+z,X+ie===211&&z.charCodeAt(13)===105&&z.indexOf("transform",10)>0)return z.substring(0,z.indexOf(";",27)+1).replace(l,"$1"+O+"$2")+z}return z}function Qi(F,H){var X=F.indexOf(H===1?":":"{"),ie=F.substring(0,H!==3?X:10),W=F.substring(X+1,F.length-1);return Bo(H!==2?ie:ie.replace(R,"$1"),W,H)}function Du(F,H){var X=Wo(H,H.charCodeAt(0),H.charCodeAt(1),H.charCodeAt(2));return X!==H+";"?X.replace(x," or ($1)").substring(4):"("+H+")"}function ei(F,H,X,ie,W,Se,z,he,ue,Je){for(var ce,ot=0,Ce=H;ot<zn;++ot)switch(ce=Fo[ot].call(Ji,F,Ce,X,ie,W,Se,z,he,ue,Je)){case void 0:case!1:case!0:case null:break;default:Ce=ce}if(Ce!==H)return Ce}function vh(F,H,X,ie){for(var W=H+1;W<X;++W)switch(ie.charCodeAt(W)){case Ct:if(F===Gt&&ie.charCodeAt(W-1)===Gt&&H+2!==W)return W+1;break;case De:if(F===Ct)return W+1}return W}function ba(F){for(var H in F){var X=F[H];switch(H){case"keyframe":kr=0|X;break;case"global":ya=0|X;break;case"cascade":pn=0|X;break;case"compress":$u=0|X;break;case"semicolon":va=0|X;break;case"preserve":Lo=0|X;break;case"prefix":Bo=null,X?typeof X!="function"?mn=1:(mn=2,Bo=X):mn=0}}return ba}function Ji(F,H){if(this!==void 0&&this.constructor===Ji)return n(F);var X=F,ie=X.charCodeAt(0);ie<33&&(ie=(X=X.trim()).charCodeAt(0)),kr>0&&(Tt=X.replace(v,ie===Ke?"":"-")),ie=1,pn===1?Yi=X:Qt=X;var W,Se=[Yi];zn>0&&(W=ei(mh,H,Se,Se,Tn,Ft,0,0,0,0))!==void 0&&typeof W=="string"&&(H=W);var z=xr(jo,Se,H,0,0);return zn>0&&(W=ei(ph,z,Se,Se,Tn,Ft,z.length,0,0,0))!==void 0&&typeof(z=W)!="string"&&(ie=0),Tt="",Yi="",Qt="",Fn=0,Tn=1,Ft=1,$u*ie==0?z:z.replace(o,"").replace(g,"").replace(S,"$1").replace(b,"$1").replace(E," ")}return Ji.use=function F(H){switch(H){case void 0:case null:zn=Fo.length=0;break;default:if(typeof H=="function")Fo[zn++]=H;else if(typeof H=="object")for(var X=0,ie=H.length;X<ie;++X)F(H[X]);else Zr=0|!!H}return F},Ji.set=ba,r!==void 0&&ba(r),Ji})})(bk);const Ek=bk.exports;var kk={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){return function(n){var r="/*|*/",i=r+"}";function o(s){if(s)try{n(s+"}")}catch{}}return function(a,l,u,d,p,m,y,w,v,c){switch(a){case 1:if(v===0&&l.charCodeAt(0)===64)return n(l+";"),"";break;case 2:if(w===0)return l+r;break;case 3:switch(w){case 102:case 112:return n(u[0]+l),"";default:return l+(c===0?r:"")}case-2:l.split(i).forEach(o)}}}})})(kk);const rO=kk.exports;var iO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},g0={exports:{}},xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mt=typeof Symbol=="function"&&Symbol.for,y0=mt?Symbol.for("react.element"):60103,v0=mt?Symbol.for("react.portal"):60106,ad=mt?Symbol.for("react.fragment"):60107,ld=mt?Symbol.for("react.strict_mode"):60108,ud=mt?Symbol.for("react.profiler"):60114,cd=mt?Symbol.for("react.provider"):60109,fd=mt?Symbol.for("react.context"):60110,w0=mt?Symbol.for("react.async_mode"):60111,dd=mt?Symbol.for("react.concurrent_mode"):60111,hd=mt?Symbol.for("react.forward_ref"):60112,pd=mt?Symbol.for("react.suspense"):60113,oO=mt?Symbol.for("react.suspense_list"):60120,md=mt?Symbol.for("react.memo"):60115,gd=mt?Symbol.for("react.lazy"):60116,sO=mt?Symbol.for("react.block"):60121,aO=mt?Symbol.for("react.fundamental"):60117,lO=mt?Symbol.for("react.responder"):60118,uO=mt?Symbol.for("react.scope"):60119;function xn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case y0:switch(t=t.type,t){case w0:case dd:case ad:case ud:case ld:case pd:return t;default:switch(t=t&&t.$$typeof,t){case fd:case hd:case gd:case md:case cd:return t;default:return e}}case v0:return e}}}function xk(t){return xn(t)===dd}xe.AsyncMode=w0;xe.ConcurrentMode=dd;xe.ContextConsumer=fd;xe.ContextProvider=cd;xe.Element=y0;xe.ForwardRef=hd;xe.Fragment=ad;xe.Lazy=gd;xe.Memo=md;xe.Portal=v0;xe.Profiler=ud;xe.StrictMode=ld;xe.Suspense=pd;xe.isAsyncMode=function(t){return xk(t)||xn(t)===w0};xe.isConcurrentMode=xk;xe.isContextConsumer=function(t){return xn(t)===fd};xe.isContextProvider=function(t){return xn(t)===cd};xe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===y0};xe.isForwardRef=function(t){return xn(t)===hd};xe.isFragment=function(t){return xn(t)===ad};xe.isLazy=function(t){return xn(t)===gd};xe.isMemo=function(t){return xn(t)===md};xe.isPortal=function(t){return xn(t)===v0};xe.isProfiler=function(t){return xn(t)===ud};xe.isStrictMode=function(t){return xn(t)===ld};xe.isSuspense=function(t){return xn(t)===pd};xe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ad||t===dd||t===ud||t===ld||t===pd||t===oO||typeof t=="object"&&t!==null&&(t.$$typeof===gd||t.$$typeof===md||t.$$typeof===cd||t.$$typeof===fd||t.$$typeof===hd||t.$$typeof===aO||t.$$typeof===lO||t.$$typeof===uO||t.$$typeof===sO)};xe.typeOf=xn;(function(t){t.exports=xe})(g0);var A1=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function cO(t,e){return!!(t===e||A1(t)&&A1(e))}function fO(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!cO(t[n],e[n]))return!1;return!0}function _k(t,e){e===void 0&&(e=fO);var n,r=[],i,o=!1;function s(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return o&&n===this&&e(a,r)||(i=t.apply(this,a),o=!0,n=this,r=a),i}return s}var iB=Sk();function dO(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var hO=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,pO=dO(function(t){return hO.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function S0(t){return Object.prototype.toString.call(t).slice(8,-1)}function Fa(t){return S0(t)!=="Object"?!1:t.constructor===Object&&Object.getPrototypeOf(t)===Object.prototype}function N1(t){return S0(t)==="Array"}function U1(t){return S0(t)==="Symbol"}/*! *****************************************************************************
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
***************************************************************************** */function $1(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function D1(t,e,n,r){var i=r.propertyIsEnumerable(e)?"enumerable":"nonenumerable";i==="enumerable"&&(t[e]=n),i==="nonenumerable"&&Object.defineProperty(t,e,{value:n,enumerable:!1,writable:!0,configurable:!0})}function Ck(t,e,n){if(!Fa(e))return n&&N1(n)&&n.forEach(function(u){e=u(t,e)}),e;var r={};if(Fa(t)){var i=Object.getOwnPropertyNames(t),o=Object.getOwnPropertySymbols(t);r=$1(i,o).reduce(function(u,d){var p=t[d];return(!U1(d)&&!Object.getOwnPropertyNames(e).includes(d)||U1(d)&&!Object.getOwnPropertySymbols(e).includes(d))&&D1(u,d,p,t),u},{})}var s=Object.getOwnPropertyNames(e),a=Object.getOwnPropertySymbols(e),l=$1(s,a).reduce(function(u,d){var p=e[d],m=Fa(t)?t[d]:void 0;return n&&N1(n)&&n.forEach(function(y){p=y(m,p)}),m!==void 0&&Fa(p)&&(p=Ck(m,p,n)),D1(u,d,p,e),u},r);return l}function mO(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=null,i=t;return Fa(t)&&t.extensions&&Object.keys(t).length===1&&(i={},r=t.extensions),e.reduce(function(o,s){return Ck(o,s,r)},i)}var M1=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Tk=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wr=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},gO=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Gn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},au=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},yO=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(t,r)||(n[r]=t[r]);return n},js=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},b0=function(t){return(typeof t>"u"?"undefined":Tk(t))==="object"&&t.constructor===Object},pf=Object.freeze([]),rl=Object.freeze({});function jr(t){return typeof t=="function"}function E0(t){return t.displayName||t.name||"Component"}function vO(t){return typeof t=="function"&&!(t.prototype&&t.prototype.isReactComponent)}function lu(t){return t&&typeof t.styledComponentId=="string"}var Rl=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",yd="data-styled-version",wO="data-styled-streamed",To=typeof window<"u"&&"HTMLElement"in window,zk=typeof SC_DISABLE_SPEEDY=="boolean"&&SC_DISABLE_SPEEDY||typeof process<"u"&&(process.env.REACT_APP_SC_DISABLE_SPEEDY||process.env.SC_DISABLE_SPEEDY)||!1,SO={},gr=function(t){au(e,t);function e(n){wr(this,e);for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var s,s=js(this,t.call(this,"An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+n+" for more information."+(i.length>0?" Additional arguments: "+i.join(", "):"")));return js(s)}return e}(Error),bO=/^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,EO=function(t){var e=""+(t||""),n=[];return e.replace(bO,function(r,i,o){return n.push({componentId:i,matchIndex:o}),r}),n.map(function(r,i){var o=r.componentId,s=r.matchIndex,a=n[i+1],l=a?e.slice(s,a.matchIndex):e.slice(s);return{componentId:o,cssFromDOM:l}})},kO=/^\s*\/\/.*$/gm,Ik=new Ek({global:!1,cascade:!0,keyframe:!1,prefix:!1,compress:!1,semicolon:!0}),Pk=new Ek({global:!1,cascade:!0,keyframe:!1,prefix:!0,compress:!1,semicolon:!1}),_m=[],Ok=function(e){if(e===-2){var n=_m;return _m=[],n}},Rk=rO(function(t){_m.push(t)}),Ak=void 0,xs=void 0,Nk=void 0,xO=function(e,n,r){return n>0&&r.slice(0,n).indexOf(xs)!==-1&&r.slice(n-xs.length,n)!==xs?"."+Ak:e},_O=function(e,n,r){e===2&&r.length&&r[0].lastIndexOf(xs)>0&&(r[0]=r[0].replace(Nk,xO))};Pk.use([_O,Rk,Ok]);Ik.use([Rk,Ok]);var CO=function(e){return Ik("",e)};function k0(t,e,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"&",i=t.join("").replace(kO,""),o=e&&n?n+" "+e+" { "+i+" }":i;return Ak=r,xs=e,Nk=new RegExp("\\"+xs+"\\b","g"),Pk(n||!e?"":e,o)}var x0=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},_0=function(e,n,r){if(r){var i=e[n]||(e[n]=Object.create(null));i[r]=!0}},mf=function(e,n){e[n]=Object.create(null)},C0=function(e){return function(n,r){return e[n]!==void 0&&e[n][r]}},Uk=function(e){var n="";for(var r in e)n+=Object.keys(e[r]).join(" ")+" ";return n.trim()},TO=function(e){var n=Object.create(null);for(var r in e)n[r]=Gn({},e[r]);return n},Zh=function(e){if(e.sheet)return e.sheet;for(var n=e.ownerDocument.styleSheets.length,r=0;r<n;r+=1){var i=e.ownerDocument.styleSheets[r];if(i.ownerNode===e)return i}throw new gr(10)},zO=function(e,n,r){if(!n)return!1;var i=e.cssRules.length;try{e.insertRule(n,r<=i?r:i)}catch{return!1}return!0},IO=function(e,n,r){for(var i=n-r,o=n;o>i;o-=1)e.deleteRule(o)},T0=function(e){return`
/* sc-component-id: `+e+` */
`},ep=function(e,n){for(var r=0,i=0;i<=n;i+=1)r+=e[i];return r},PO=function(e,n,r){var i=document;e?i=e.ownerDocument:n&&(i=n.ownerDocument);var o=i.createElement("style");o.setAttribute(Rl,""),o.setAttribute(yd,"4.4.1");var s=x0();if(s&&o.setAttribute("nonce",s),o.appendChild(i.createTextNode("")),e&&!n)e.appendChild(o);else{if(!n||!e||!n.parentNode)throw new gr(6);n.parentNode.insertBefore(o,r?n:n.nextSibling)}return o},z0=function(e,n){return function(r){var i=x0(),o=[i&&'nonce="'+i+'"',Rl+'="'+Uk(n)+'"',yd+'="4.4.1"',r],s=o.filter(Boolean).join(" ");return"<style "+s+">"+e()+"</style>"}},I0=function(e,n){return function(){var r,i=(r={},r[Rl]=Uk(n),r[yd]="4.4.1",r),o=x0();return o&&(i.nonce=o),ee("style",{...i,dangerouslySetInnerHTML:{__html:e()}})}},P0=function(e){return function(){return Object.keys(e)}},OO=function(e,n){var r=Object.create(null),i=Object.create(null),o=[],s=n!==void 0,a=!1,l=function(y){var w=i[y];return w!==void 0?w:(i[y]=o.length,o.push(0),mf(r,y),i[y])},u=function(y,w,v){for(var c=l(y),f=Zh(e),h=ep(o,c),g=0,S=[],b=w.length,E=0;E<b;E+=1){var k=w[E],_=s;_&&k.indexOf("@import")!==-1?S.push(k):zO(f,k,h+g)&&(_=!1,g+=1)}s&&S.length>0&&(a=!0,n().insertRules(y+"-import",S)),o[c]+=g,_0(r,y,v)},d=function(y){var w=i[y];if(w!==void 0&&e.isConnected!==!1){var v=o[w],c=Zh(e),f=ep(o,w)-1;IO(c,f,v),o[w]=0,mf(r,y),s&&a&&n().removeRules(y+"-import")}},p=function(){var y=Zh(e),w=y.cssRules,v="";for(var c in i){v+=T0(c);for(var f=i[c],h=ep(o,f),g=o[f],S=h-g;S<h;S+=1){var b=w[S];b!==void 0&&(v+=b.cssText)}}return v};return{clone:function(){throw new gr(5)},css:p,getIds:P0(i),hasNameForId:C0(r),insertMarker:l,insertRules:u,removeRules:d,sealed:!1,styleTag:e,toElement:I0(p,r),toHTML:z0(p,r)}},L1=function(e,n){return e.createTextNode(T0(n))},RO=function(e,n){var r=Object.create(null),i=Object.create(null),o=n!==void 0,s=!1,a=function(m){var y=i[m];return y!==void 0?y:(i[m]=L1(e.ownerDocument,m),e.appendChild(i[m]),r[m]=Object.create(null),i[m])},l=function(m,y,w){for(var v=a(m),c=[],f=y.length,h=0;h<f;h+=1){var g=y[h],S=o;if(S&&g.indexOf("@import")!==-1)c.push(g);else{S=!1;var b=h===f-1?"":" ";v.appendData(""+g+b)}}_0(r,m,w),o&&c.length>0&&(s=!0,n().insertRules(m+"-import",c))},u=function(m){var y=i[m];if(y!==void 0){var w=L1(e.ownerDocument,m);e.replaceChild(w,y),i[m]=w,mf(r,m),o&&s&&n().removeRules(m+"-import")}},d=function(){var m="";for(var y in i)m+=i[y].data;return m};return{clone:function(){throw new gr(5)},css:d,getIds:P0(i),hasNameForId:C0(r),insertMarker:a,insertRules:l,removeRules:u,sealed:!1,styleTag:e,toElement:I0(d,r),toHTML:z0(d,r)}},AO=function t(e,n){var r=e===void 0?Object.create(null):e,i=n===void 0?Object.create(null):n,o=function(m){var y=i[m];return y!==void 0?y:i[m]=[""]},s=function(m,y,w){var v=o(m);v[0]+=y.join(" "),_0(r,m,w)},a=function(m){var y=i[m];y!==void 0&&(y[0]="",mf(r,m))},l=function(){var m="";for(var y in i){var w=i[y][0];w&&(m+=T0(y)+w)}return m},u=function(){var m=TO(r),y=Object.create(null);for(var w in i)y[w]=[i[w][0]];return t(m,y)},d={clone:u,css:l,getIds:P0(i),hasNameForId:C0(r),insertMarker:o,insertRules:s,removeRules:a,sealed:!1,styleTag:null,toElement:I0(l,r),toHTML:z0(l,r)};return d},j1=function(e,n,r,i,o){if(To&&!r){var s=PO(e,n,i);return zk?RO(s,o):OO(s,o)}return AO()},NO=function(e,n,r){for(var i=0,o=r.length;i<o;i+=1){var s=r[i],a=s.componentId,l=s.cssFromDOM,u=CO(l);e.insertRules(a,u)}for(var d=0,p=n.length;d<p;d+=1){var m=n[d];m.parentNode&&m.parentNode.removeChild(m)}},UO=/\s+/,gf=void 0;To?gf=zk?40:1e3:gf=-1;var F1=0,tp=void 0,Fr=function(){function t(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:To?document.head:null,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;wr(this,t),this.getImportRuleTag=function(){var i=e.importRuleTag;if(i!==void 0)return i;var o=e.tags[0],s=!0;return e.importRuleTag=j1(e.target,o?o.styleTag:null,e.forceServer,s)},F1+=1,this.id=F1,this.forceServer=r,this.target=r?null:n,this.tagMap={},this.deferred={},this.rehydratedNames={},this.ignoreRehydratedNames={},this.tags=[],this.capacity=1,this.clones=[]}return t.prototype.rehydrate=function(){if(!To||this.forceServer)return this;var n=[],r=[],i=!1,o=document.querySelectorAll("style["+Rl+"]["+yd+'="4.4.1"]'),s=o.length;if(!s)return this;for(var a=0;a<s;a+=1){var l=o[a];i||(i=!!l.getAttribute(wO));for(var u=(l.getAttribute(Rl)||"").trim().split(UO),d=u.length,p=0,m;p<d;p+=1)m=u[p],this.rehydratedNames[m]=!0;r.push.apply(r,EO(l.textContent)),n.push(l)}var y=r.length;if(!y)return this;var w=this.makeTag(null);NO(w,n,r),this.capacity=Math.max(1,gf-y),this.tags.push(w);for(var v=0;v<y;v+=1)this.tagMap[r[v].componentId]=w;return this},t.reset=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;tp=new t(void 0,n).rehydrate()},t.prototype.clone=function(){var n=new t(this.target,this.forceServer);return this.clones.push(n),n.tags=this.tags.map(function(r){for(var i=r.getIds(),o=r.clone(),s=0;s<i.length;s+=1)n.tagMap[i[s]]=o;return o}),n.rehydratedNames=Gn({},this.rehydratedNames),n.deferred=Gn({},this.deferred),n},t.prototype.sealAllTags=function(){this.capacity=1,this.tags.forEach(function(n){n.sealed=!0})},t.prototype.makeTag=function(n){var r=n?n.styleTag:null,i=!1;return j1(this.target,r,this.forceServer,i,this.getImportRuleTag)},t.prototype.getTagForId=function(n){var r=this.tagMap[n];if(r!==void 0&&!r.sealed)return r;var i=this.tags[this.tags.length-1];return this.capacity-=1,this.capacity===0&&(this.capacity=gf,i=this.makeTag(i),this.tags.push(i)),this.tagMap[n]=i},t.prototype.hasId=function(n){return this.tagMap[n]!==void 0},t.prototype.hasNameForId=function(n,r){if(this.ignoreRehydratedNames[n]===void 0&&this.rehydratedNames[r])return!0;var i=this.tagMap[n];return i!==void 0&&i.hasNameForId(n,r)},t.prototype.deferredInject=function(n,r){if(this.tagMap[n]===void 0){for(var i=this.clones,o=0;o<i.length;o+=1)i[o].deferredInject(n,r);this.getTagForId(n).insertMarker(n),this.deferred[n]=r}},t.prototype.inject=function(n,r,i){for(var o=this.clones,s=0;s<o.length;s+=1)o[s].inject(n,r,i);var a=this.getTagForId(n);if(this.deferred[n]!==void 0){var l=this.deferred[n].concat(r);a.insertRules(n,l,i),this.deferred[n]=void 0}else a.insertRules(n,r,i)},t.prototype.remove=function(n){var r=this.tagMap[n];if(r!==void 0){for(var i=this.clones,o=0;o<i.length;o+=1)i[o].remove(n);r.removeRules(n),this.ignoreRehydratedNames[n]=!0,this.deferred[n]=void 0}},t.prototype.toHTML=function(){return this.tags.map(function(n){return n.toHTML()}).join("")},t.prototype.toReactElements=function(){var n=this.id;return this.tags.map(function(r,i){var o="sc-"+n+"-"+i;return I.exports.cloneElement(r.toElement(),{key:o})})},gO(t,null,[{key:"master",get:function(){return tp||(tp=new t().rehydrate())}},{key:"instance",get:function(){return t.master}}]),t}(),$k=function(){function t(e,n){var r=this;wr(this,t),this.inject=function(i){i.hasNameForId(r.id,r.name)||i.inject(r.id,r.rules,r.name)},this.toString=function(){throw new gr(12,String(r.name))},this.name=e,this.rules=n,this.id="sc-keyframes-"+e}return t.prototype.getName=function(){return this.name},t}(),$O=/([A-Z])/g,DO=/^ms-/;function B1(t){return t.replace($O,"-$1").toLowerCase().replace(DO,"-ms-")}function MO(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!(t in iO)?e+"px":String(e).trim()}var Dk=function(e){return e==null||e===!1||e===""},LO=function t(e,n){var r=[],i=Object.keys(e);return i.forEach(function(o){if(!Dk(e[o])){if(b0(e[o]))return r.push.apply(r,t(e[o],o)),r;if(jr(e[o]))return r.push(B1(o)+":",e[o],";"),r;r.push(B1(o)+": "+MO(o,e[o])+";")}return r}),n?[n+" {"].concat(r,["}"]):r};function Fs(t,e,n){if(Array.isArray(t)){for(var r=[],i=0,o=t.length,s;i<o;i+=1)s=Fs(t[i],e,n),s!==null&&(Array.isArray(s)?r.push.apply(r,s):r.push(s));return r}if(Dk(t))return null;if(lu(t))return"."+t.styledComponentId;if(jr(t))if(vO(t)&&e){var a=t(e);return Fs(a,e,n)}else return t;return t instanceof $k?n?(t.inject(n),t.getName()):t:b0(t)?LO(t):t.toString()}function vd(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return jr(t)||b0(t)?Fs(M1(pf,[t].concat(n))):Fs(M1(t,n))}function Cm(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:rl;if(!g0.exports.isValidElementType(e))throw new gr(1,String(e));var r=function(){return t(e,n,vd.apply(void 0,arguments))};return r.withConfig=function(i){return Cm(t,e,Gn({},n,i))},r.attrs=function(i){return Cm(t,e,Gn({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r}function O0(t){for(var e=t.length|0,n=e|0,r=0,i;e>=4;)i=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,i=1540483477*(i&65535)+((1540483477*(i>>>16)&65535)<<16),i^=i>>>24,i=1540483477*(i&65535)+((1540483477*(i>>>16)&65535)<<16),n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16)^i,e-=4,++r;switch(e){case 3:n^=(t.charCodeAt(r+2)&255)<<16;case 2:n^=(t.charCodeAt(r+1)&255)<<8;case 1:n^=t.charCodeAt(r)&255,n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16)}return n^=n>>>13,n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16),(n^n>>>15)>>>0}var sc=52,V1=function(e){return String.fromCharCode(e+(e>25?39:97))};function Mk(t){var e="",n=void 0;for(n=t;n>sc;n=Math.floor(n/sc))e=V1(n%sc)+e;return V1(n%sc)+e}function jO(t){for(var e in t)if(jr(t[e]))return!0;return!1}function R0(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(Array.isArray(r)&&!R0(r,e))return!1;if(jr(r)&&!lu(r))return!1}return!e.some(function(i){return jr(i)||jO(i)})}var W1=function(e){return Mk(O0(e))},H1=function(){function t(e,n,r){wr(this,t),this.rules=e,this.isStatic=R0(e,n),this.componentId=r,Fr.master.hasId(r)||Fr.master.deferredInject(r,[])}return t.prototype.generateAndInjectStyles=function(n,r){var i=this.isStatic,o=this.componentId,s=this.lastClassName;if(To&&i&&typeof s=="string"&&r.hasNameForId(o,s))return s;var a=Fs(this.rules,n,r),l=W1(this.componentId+a.join(""));return r.hasNameForId(o,l)||r.inject(this.componentId,k0(a,"."+l,void 0,o),l),this.lastClassName=l,l},t.generateName=function(n){return W1(n)},t}(),A0=function(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:rl,r=n?t.theme===n.theme:!1,i=t.theme&&!r?t.theme:e||n.theme;return i},FO=/[[\].#*$><+~=|^:(),"'`-]+/g,BO=/(^-|-$)/g;function Tm(t){return t.replace(FO,"-").replace(BO,"")}function yf(t){return typeof t=="string"&&!0}function VO(t){return yf(t)?"styled."+t:"Styled("+E0(t)+")"}var np,q1={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},WO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},K1=(np={},np[g0.exports.ForwardRef]={$$typeof:!0,render:!0},np),HO=Object.defineProperty,qO=Object.getOwnPropertyNames,G1=Object.getOwnPropertySymbols,KO=G1===void 0?function(){return[]}:G1,GO=Object.getOwnPropertyDescriptor,XO=Object.getPrototypeOf,YO=Object.prototype,QO=Array.prototype;function N0(t,e,n){if(typeof e!="string"){var r=XO(e);r&&r!==YO&&N0(t,r,n);for(var i=QO.concat(qO(e),KO(e)),o=K1[t.$$typeof]||q1,s=K1[e.$$typeof]||q1,a=i.length,l=void 0,u=void 0;a--;)if(u=i[a],!WO[u]&&!(n&&n[u])&&!(s&&s[u])&&!(o&&o[u])&&(l=GO(e,u),l))try{HO(t,u,l)}catch{}return t}return t}function JO(t){return!!(t&&t.prototype&&t.prototype.isReactComponent)}var vf=I.exports.createContext(),wd=vf.Consumer,ZO=function(t){au(e,t);function e(n){wr(this,e);var r=js(this,t.call(this,n));return r.getContext=_k(r.getContext.bind(r)),r.renderInner=r.renderInner.bind(r),r}return e.prototype.render=function(){return this.props.children?ee(vf.Consumer,{children:this.renderInner}):null},e.prototype.renderInner=function(r){var i=this.getContext(this.props.theme,r);return ee(vf.Provider,{value:i,children:this.props.children})},e.prototype.getTheme=function(r,i){if(jr(r)){var o=r(i);return o}if(r===null||Array.isArray(r)||(typeof r>"u"?"undefined":Tk(r))!=="object")throw new gr(8);return Gn({},i,r)},e.prototype.getContext=function(r,i){return this.getTheme(r,i)},e}(I.exports.Component),eR=function(){function t(){wr(this,t),this.masterSheet=Fr.master,this.instance=this.masterSheet.clone(),this.sealed=!1}return t.prototype.seal=function(){if(!this.sealed){var n=this.masterSheet.clones.indexOf(this.instance);this.masterSheet.clones.splice(n,1),this.sealed=!0}},t.prototype.collectStyles=function(n){if(this.sealed)throw new gr(2);return ee(Lk,{sheet:this.instance,children:n})},t.prototype.getStyleTags=function(){return this.seal(),this.instance.toHTML()},t.prototype.getStyleElement=function(){return this.seal(),this.instance.toReactElements()},t.prototype.interleaveWithNodeStream=function(n){throw new gr(3)},t}(),U0=I.exports.createContext(),$0=U0.Consumer,Lk=function(t){au(e,t);function e(n){wr(this,e);var r=js(this,t.call(this,n));return r.getContext=_k(r.getContext),r}return e.prototype.getContext=function(r,i){if(r)return r;if(i)return new Fr(i);throw new gr(4)},e.prototype.render=function(){var r=this.props,i=r.children,o=r.sheet,s=r.target;return ee(U0.Provider,{value:this.getContext(o,s),children:i})},e}(I.exports.Component),X1={};function tR(t,e,n){var r=typeof e!="string"?"sc":Tm(e),i=(X1[r]||0)+1;X1[r]=i;var o=r+"-"+t.generateName(r+i);return n?n+"-"+o:o}var nR=function(t){au(e,t);function e(){wr(this,e);var n=js(this,t.call(this));return n.attrs={},n.renderOuter=n.renderOuter.bind(n),n.renderInner=n.renderInner.bind(n),n}return e.prototype.render=function(){return ee($0,{children:this.renderOuter})},e.prototype.renderOuter=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Fr.master;return this.styleSheet=r,this.props.forwardedComponent.componentStyle.isStatic?this.renderInner():ee(wd,{children:this.renderInner})},e.prototype.renderInner=function(r){var i=this.props.forwardedComponent,o=i.componentStyle,s=i.defaultProps;i.displayName;var a=i.foldedComponentIds,l=i.styledComponentId,u=i.target,d=void 0;o.isStatic?d=this.generateAndInjectStyles(rl,this.props):d=this.generateAndInjectStyles(A0(this.props,r,s)||rl,this.props);var p=this.props.as||this.attrs.as||u,m=yf(p),y={},w=Gn({},this.props,this.attrs),v=void 0;for(v in w)v==="forwardedComponent"||v==="as"||(v==="forwardedRef"?y.ref=w[v]:v==="forwardedAs"?y.as=w[v]:(!m||pO(v))&&(y[v]=w[v]));return this.props.style&&this.attrs.style&&(y.style=Gn({},this.attrs.style,this.props.style)),y.className=Array.prototype.concat(a,l,d!==l?d:null,this.props.className,this.attrs.className).filter(Boolean).join(" "),I.exports.createElement(p,y)},e.prototype.buildExecutionContext=function(r,i,o){var s=this,a=Gn({},i,{theme:r});return o.length&&(this.attrs={},o.forEach(function(l){var u=l,d=!1,p=void 0,m=void 0;jr(u)&&(u=u(a),d=!0);for(m in u)p=u[m],d||jr(p)&&!JO(p)&&!lu(p)&&(p=p(a)),s.attrs[m]=p,a[m]=p})),a},e.prototype.generateAndInjectStyles=function(r,i){var o=i.forwardedComponent,s=o.attrs,a=o.componentStyle;if(o.warnTooManyClasses,a.isStatic&&!s.length)return a.generateAndInjectStyles(rl,this.styleSheet);var l=a.generateAndInjectStyles(this.buildExecutionContext(r,i,s),this.styleSheet);return l},e}(I.exports.Component);function jk(t,e,n){var r=lu(t),i=!yf(t),o=e.displayName,s=o===void 0?VO(t):o,a=e.componentId,l=a===void 0?tR(H1,e.displayName,e.parentComponentId):a,u=e.ParentComponent,d=u===void 0?nR:u,p=e.attrs,m=p===void 0?pf:p,y=e.displayName&&e.componentId?Tm(e.displayName)+"-"+e.componentId:e.componentId||l,w=r&&t.attrs?Array.prototype.concat(t.attrs,m).filter(Boolean):m,v=new H1(r?t.componentStyle.rules.concat(n):n,w,y),c=void 0,f=function(g,S){return ee(d,{...g,forwardedComponent:c,forwardedRef:S})};return f.displayName=s,c=yi.forwardRef(f),c.displayName=s,c.attrs=w,c.componentStyle=v,c.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):pf,c.styledComponentId=y,c.target=r?t.target:t,c.withComponent=function(g){var S=e.componentId,b=yO(e,["componentId"]),E=S&&S+"-"+(yf(g)?g:Tm(E0(g))),k=Gn({},b,{attrs:w,componentId:E,ParentComponent:d});return jk(g,k,n)},Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?mO(t.defaultProps,g):g}}),c.toString=function(){return"."+c.styledComponentId},i&&N0(c,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,styledComponentId:!0,target:!0,withComponent:!0}),c}var rR=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],zm=function(e){return Cm(jk,e)};rR.forEach(function(t){zm[t]=zm(t)});var iR=function(){function t(e,n){wr(this,t),this.rules=e,this.componentId=n,this.isStatic=R0(e,pf),Fr.master.hasId(n)||Fr.master.deferredInject(n,[])}return t.prototype.createStyles=function(n,r){var i=Fs(this.rules,n,r),o=k0(i,"");r.inject(this.componentId,o)},t.prototype.removeStyles=function(n){var r=this.componentId;n.hasId(r)&&n.remove(r)},t.prototype.renderStyles=function(n,r){this.removeStyles(r),this.createStyles(n,r)},t}();To&&(window.scCGSHMRCache={});function oR(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=vd.apply(void 0,[t].concat(n)),o="sc-global-"+O0(JSON.stringify(i)),s=new iR(i,o),a=function(l){au(u,l);function u(d){wr(this,u);var p=js(this,l.call(this,d)),m=p.constructor,y=m.globalStyle,w=m.styledComponentId;return To&&(window.scCGSHMRCache[w]=(window.scCGSHMRCache[w]||0)+1),p.state={globalStyle:y,styledComponentId:w},p}return u.prototype.componentWillUnmount=function(){window.scCGSHMRCache[this.state.styledComponentId]&&(window.scCGSHMRCache[this.state.styledComponentId]-=1),window.scCGSHMRCache[this.state.styledComponentId]===0&&this.state.globalStyle.removeStyles(this.styleSheet)},u.prototype.render=function(){var p=this;return ee($0,{children:function(m){p.styleSheet=m||Fr.master;var y=p.state.globalStyle;return y.isStatic?(y.renderStyles(SO,p.styleSheet),null):ee(wd,{children:function(w){var v=p.constructor.defaultProps,c=Gn({},p.props);return typeof w<"u"&&(c.theme=A0(p.props,w,v)),y.renderStyles(c,p.styleSheet),null}})}})},u}(yi.Component);return a.globalStyle=s,a.styledComponentId=o,a}var sR=function(e){return e.replace(/\s|\\n/g,"")};function aR(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=vd.apply(void 0,[t].concat(n)),o=Mk(O0(sR(JSON.stringify(i))));return new $k(o,k0(i,o,"@keyframes"))}var lR=function(t){var e=yi.forwardRef(function(n,r){return ee(wd,{children:function(i){var o=t.defaultProps,s=A0(n,i,o);return ee(t,{...n,theme:s,ref:r})}})});return N0(e,t),e.displayName="WithTheme("+E0(t)+")",e},uR={StyleSheet:Fr};const cR=Object.freeze(Object.defineProperty({__proto__:null,default:zm,createGlobalStyle:oR,css:vd,isStyledComponent:lu,keyframes:aR,ServerStyleSheet:eR,StyleSheetConsumer:$0,StyleSheetContext:U0,StyleSheetManager:Lk,ThemeConsumer:wd,ThemeContext:vf,ThemeProvider:ZO,withTheme:lR,__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS:uR},Symbol.toStringTag,{value:"Module"})),fR=yg(cR);(function(t){(function(e,n){for(var r in n)e[r]=n[r]})(t,function(e){var n={};function r(i){if(n[i])return n[i].exports;var o=n[i]={i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(i,o,s){r.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:s})},r.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},r.t=function(i,o){if(1&o&&(i=r(i)),8&o||4&o&&typeof i=="object"&&i&&i.__esModule)return i;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&o&&typeof i!="string")for(var a in i)r.d(s,a,function(l){return i[l]}.bind(null,a));return s},r.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(o,"a",o),o},r.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},r.p="",r(r.s=3)}([function(e,n){e.exports=I.exports},function(e,n){e.exports=Sk()},function(e,n){e.exports=fR},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MetroSpinner=n.WhisperSpinner=n.ClassicSpinner=n.TraceSpinner=n.JellyfishSpinner=n.MagicSpinner=n.FlapperSpinner=n.HoopSpinner=n.RingSpinner=n.RainbowSpinner=n.PongSpinner=n.CombSpinner=n.GooSpinner=n.SwishSpinner=n.RotateSpinner=n.ClapSpinner=n.FlagSpinner=n.SphereSpinner=n.FillSpinner=n.CubeSpinner=n.ImpulseSpinner=n.DominoSpinner=n.SequenceSpinner=n.PulseSpinner=n.SpiralSpinner=n.CircleSpinner=n.GuardSpinner=n.HeartSpinner=n.StageSpinner=n.FireworkSpinner=n.PushSpinner=n.WaveSpinner=n.BarsSpinner=n.SwapSpinner=n.GridSpinner=n.BallSpinner=void 0;var i=r(4),o=r(5),s=r(6),a=r(7),l=r(8),u=r(9),d=r(10),p=r(11),m=r(12),y=r(13),w=r(14),v=r(15),c=r(16),f=r(17),h=r(18),g=r(19),S=r(20),b=r(21),E=r(22),k=r(23),_=r(24),C=r(25),x=r(26),T=r(27),R=r(28),N=r(29),B=r(30),O=r(31),U=r(32),L=r(33),P=r(34),A=r(35),j=r(36),Y=r(37),se=r(38),Ke=r(39);n.BallSpinner=i.BallSpinner,n.GridSpinner=o.GridSpinner,n.SwapSpinner=s.SwapSpinner,n.BarsSpinner=a.BarsSpinner,n.WaveSpinner=l.WaveSpinner,n.PushSpinner=u.PushSpinner,n.FireworkSpinner=d.FireworkSpinner,n.StageSpinner=p.StageSpinner,n.HeartSpinner=m.HeartSpinner,n.GuardSpinner=y.GuardSpinner,n.CircleSpinner=w.CircleSpinner,n.SpiralSpinner=v.SpiralSpinner,n.PulseSpinner=c.PulseSpinner,n.SequenceSpinner=f.SequenceSpinner,n.DominoSpinner=h.DominoSpinner,n.ImpulseSpinner=g.ImpulseSpinner,n.CubeSpinner=S.CubeSpinner,n.FillSpinner=b.FillSpinner,n.SphereSpinner=E.SphereSpinner,n.FlagSpinner=k.FlagSpinner,n.ClapSpinner=_.ClapSpinner,n.RotateSpinner=C.RotateSpinner,n.SwishSpinner=x.SwishSpinner,n.GooSpinner=T.GooSpinner,n.CombSpinner=R.CombSpinner,n.PongSpinner=N.PongSpinner,n.RainbowSpinner=B.RainbowSpinner,n.RingSpinner=O.RingSpinner,n.HoopSpinner=U.HoopSpinner,n.FlapperSpinner=L.FlapperSpinner,n.MagicSpinner=P.MagicSpinner,n.JellyfishSpinner=A.JellyfishSpinner,n.TraceSpinner=j.TraceSpinner,n.ClassicSpinner=Y.ClassicSpinner,n.WhisperSpinner=se.WhisperSpinner,n.MetroSpinner=Ke.MetroSpinner},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.BallSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.BallSpinner=function(c){var f=c.size,h=c.color,g=c.loading,S=c.sizeUnit;return g&&a.default.createElement(w,{size:f},a.default.createElement(v,{color:h,size:f,sizeUnit:S})," ")},w=d.default.div.withConfig({displayName:"ball__Wrapper",componentId:"sc-1edcqkl-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit}),v=d.default.div.withConfig({displayName:"ball__Ball",componentId:"sc-1edcqkl-1"})(s,function(c){return""+c.size/3+c.sizeUnit},function(c){return""+c.size/3+c.sizeUnit},function(c){return c.color},function(c){return function(f){return(0,u.keyframes)(i,f.size/2,f.sizeUnit,-f.size/2,f.sizeUnit)}(c)});y.defaultProps={loading:!0,size:40,color:"#00ff89",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GridSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.GridSpinner=function(c){var f=c.size,h=c.color,g=c.loading,S=c.sizeUnit;return g&&a.default.createElement(w,{size:f,sizeUnit:S},function(b){for(var E=b.countBallsInLine,k=b.color,_=b.size,C=b.sizeUnit,x=[],T=0,R=0;R<E;R++)for(var N=0;N<E;N++)x.push(a.default.createElement(v,{color:k,size:_,x:R*(_/3+_/12),y:N*(_/3+_/12),key:T.toString(),sizeUnit:C})),T++;return x}({countBallsInLine:3,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"grid__Wrapper",componentId:"sc-11vno70-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"grid__Ball",componentId:"sc-11vno70-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/6+c.sizeUnit},function(c){return""+c.size/6+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.y,c.sizeUnit,c.x,c.sizeUnit,c.size/4,c.sizeUnit,c.size/4,c.sizeUnit,c.size/2-c.size/8,c.sizeUnit,c.size/2-c.size/8,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit)});y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SwapSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function m(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=function(f){switch(f.index){case 0:return{x:f.size-f.size/4,y:f.y};case 1:return{x:f.x,y:f.y-f.size/2+f.size/8};case 2:return{x:0,y:f.y}}},w=n.SwapSpinner=function(f){var h=f.size,g=f.color,S=f.loading,b=f.sizeUnit;return S&&a.default.createElement(v,{size:h,sizeUnit:b},function(E){for(var k=E.countBalls,_=E.color,C=E.size,x=E.sizeUnit,T=[],R=0;R<k;R++)T.push(a.default.createElement(c,{color:_,size:C,x:R*(C/4+C/8),y:C/2-C/8,key:R.toString(),index:R,sizeUnit:x}));return T}({countBalls:3,color:g,size:h,sizeUnit:b}))},v=d.default.div.withConfig({displayName:"swap__Wrapper",componentId:"sc-1a8o1b-0"})(o,function(f){return""+f.size+f.sizeUnit},function(f){return""+(f.size/2+f.size/8)+f.sizeUnit}),c=d.default.div.withConfig({displayName:"swap__Ball",componentId:"sc-1a8o1b-1"})(s,function(f){return""+f.y+f.sizeUnit},function(f){return""+f.x+f.sizeUnit},function(f){return""+f.size/4+f.sizeUnit},function(f){return""+f.size/4+f.sizeUnit},function(f){return f.color},function(f){return(0,u.keyframes)(i,f.y,f.x,y(f).y,y(f).x,f.y,f.x)});w.defaultProps={loading:!0,size:40,color:"#4b4c56",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.BarsSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.BarsSpinner=function(c){var f=c.size,h=c.color,g=c.loading,S=c.sizeUnit;return g&&a.default.createElement(w,{size:f,sizeUnit:S},function(b,E,k,_){for(var C=[],x=0;x<b;x++)C.push(a.default.createElement(v,{color:E,size:k,sizeUnit:_,x:x*(k/5+k/25)-k/12,key:x.toString(),index:x}));return C}(5,h,f,S))},w=d.default.div.withConfig({displayName:"bars__Wrapper",componentId:"sc-1sb659-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"bars__Bar",componentId:"sc-1sb659-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/20+c.sizeUnit},function(c){return""+c.size+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.size/20,c.sizeUnit,c.size/6,c.sizeUnit,c.size/20,c.sizeUnit)},function(c){return .15*c.index});y.defaultProps={loading:!0,size:40,color:"#00ff89",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.WaveSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function m(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=(0,u.keyframes)(i),w=n.WaveSpinner=function(f){var h=f.size,g=f.color,S=f.loading,b=f.sizeUnit;return S&&a.default.createElement(v,{size:h,sizeUnit:b},function(E){for(var k=E.countBars,_=E.color,C=E.size,x=E.sizeUnit,T=[],R=0;R<k;R++)T.push(a.default.createElement(c,{color:_,size:C,x:R*(C/5+(C/15-C/100)),y:0,key:R.toString(),index:R,sizeUnit:x}));return T}({countBars:10,color:g,size:h,sizeUnit:b}))},v=d.default.div.withConfig({displayName:"wave__Wrapper",componentId:"sc-8a0z7x-0"})(o,function(f){return""+2.5*f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=d.default.div.withConfig({displayName:"wave__Bar",componentId:"sc-8a0z7x-1"})(s,function(f){return""+(f.y+f.size/10)+f.sizeUnit},function(f){return""+f.x+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return""+f.size/10+f.sizeUnit},function(f){return""+(f.size-f.size/10)+f.sizeUnit},function(f){return f.color},y,function(f){return .15*f.index});w.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PushSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.PushSpinner=function(c){var f=c.size,h=c.color,g=c.loading,S=c.sizeUnit;return g&&a.default.createElement(w,{size:f,sizeUnit:S},function(b){for(var E=b.countBars,k=b.color,_=b.size,C=b.sizeUnit,x=[],T=0;T<E;T++)x.push(a.default.createElement(v,{color:k,size:_,x:T*(_/5+(_/15-_/100)),y:0,key:T.toString(),index:T,sizeUnit:C}));return x}({countBars:10,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"push__Wrapper",componentId:"ypksxs-0"})(o,function(c){return""+2.5*c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"push__Bar",componentId:"ypksxs-1"})(s,function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.sizeUnit,c.sizeUnit,c.sizeUnit)},function(c){return .15*c.index});y.defaultProps={loading:!0,size:30,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FireworkSpinner=void 0;var i=p([`
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
`]),s=d(r(0)),a=d(r(1)),l=r(2),u=d(l);function d(v){return v&&v.__esModule?v:{default:v}}function p(v,c){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(c)}}))}var m=(0,l.keyframes)(i),y=n.FireworkSpinner=function(v){var c=v.size,f=v.color,h=v.loading,g=v.sizeUnit;return h&&s.default.createElement(w,{size:c,color:f,sizeUnit:g})},w=u.default.div.withConfig({displayName:"firework__Wrapper",componentId:"sc-1bn5a2-0"})(o,function(v){return""+v.size/10+v.sizeUnit},function(v){return v.color},function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size+v.sizeUnit},m);y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.StageSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.StageSpinner=function(c){var f=c.size,h=c.color,g=c.loading,S=c.sizeUnit;return g&&a.default.createElement(w,{size:f,sizeUnit:S},function(b){for(var E=b.countBalls,k=b.color,_=b.size,C=b.sizeUnit,x=[],T=0,R=0;R<E;R++)x.push(a.default.createElement(v,{color:k,size:_,index:R,x:R*(_/2.5),y:_/2-_/10,key:T.toString(),sizeUnit:C})),T++;return x}({countBalls:3,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"stage__Wrapper",componentId:"sc-161krao-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"stage__Ball",componentId:"sc-161krao-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.y,c.sizeUnit,c.x,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit,c.y+c.size/2,c.sizeUnit,c.x,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit)},function(c){return .2*c.index});y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.HeartSpinner=void 0;var i=p([`
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
`]),s=d(r(0)),a=d(r(1)),l=r(2),u=d(l);function d(v){return v&&v.__esModule?v:{default:v}}function p(v,c){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(c)}}))}var m=(0,l.keyframes)(i),y=n.HeartSpinner=function(v){var c=v.size,f=v.color,h=v.loading,g=v.sizeUnit;return h&&s.default.createElement(w,{size:c,color:f,sizeUnit:g})},w=u.default.div.withConfig({displayName:"heart__Wrapper",componentId:"sc-12jb06u-0"})(o,function(v){return""+v.size+v.sizeUnit},function(v){return""+(v.size-v.size/10)+v.sizeUnit},m,function(v){return""+v.size/20+v.sizeUnit},function(v){return""+v.size/2+v.sizeUnit},function(v){return""+v.size/2+v.sizeUnit},function(v){return""+(v.size-v.size/5)+v.sizeUnit},function(v){return v.color},function(v){return""+v.size/2+v.sizeUnit},function(v){return""+v.size/2+v.sizeUnit});y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GuardSpinner=void 0;var i=w([`
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
`]),u=y(r(0)),d=y(r(1)),p=r(2),m=y(p);function y(b){return b&&b.__esModule?b:{default:b}}function w(b,E){return Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(E)}}))}var v=(0,p.keyframes)(i),c=n.GuardSpinner=function(b){var E=b.size,k=b.backColor,_=b.frontColor,C=b.loading,x=b.sizeUnit;return C&&u.default.createElement(f,{size:E,sizeUnit:x},function(T){for(var R=T.countCubesInLine,N=T.backColor,B=T.frontColor,O=T.size,U=T.sizeUnit,L=[],P=0,A=0;A<R;A++)for(var j=0;j<R;j++)L.push(u.default.createElement(h,{size:O,x:A*(O/4+O/8),y:j*(O/4+O/8),key:P.toString(),sizeUnit:U},u.default.createElement(g,{size:O,index:P,sizeUnit:U},u.default.createElement(S,{front:!0,size:O,color:B,sizeUnit:U}),u.default.createElement(S,{left:!0,size:O,color:N,sizeUnit:U})))),P++;return L}({countCubesInLine:3,backColor:k,frontColor:_,size:E,sizeUnit:x}))},f=m.default.div.withConfig({displayName:"guard__Wrapper",componentId:"sc-13axfn9-0"})(o,function(b){return""+b.size+b.sizeUnit},function(b){return""+b.size+b.sizeUnit},function(b){return""+3*b.size+b.sizeUnit}),h=m.default.div.withConfig({displayName:"guard__CubeWrapper",componentId:"sc-13axfn9-1"})(s,function(b){return""+b.y+b.sizeUnit},function(b){return""+b.x+b.sizeUnit},function(b){return""+b.size+b.sizeUnit},function(b){return""+b.size+b.sizeUnit}),g=m.default.div.withConfig({displayName:"guard__Cube",componentId:"sc-13axfn9-2"})(a,function(b){return""+b.size/4+b.sizeUnit},function(b){return""+b.size/4+b.sizeUnit},v,function(b){return .125*b.index}),S=m.default.div.withConfig({displayName:"guard__Side",componentId:"sc-13axfn9-3"})(l,function(b){return b.color},function(b){return b.front?0:-90},function(b){return""+b.size/8+b.sizeUnit});c.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#373846",sizeUnit:"px"},c.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CircleSpinner=void 0;var i=p([`
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
`]),s=d(r(0)),a=d(r(1)),l=r(2),u=d(l);function d(v){return v&&v.__esModule?v:{default:v}}function p(v,c){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(c)}}))}var m=(0,l.keyframes)(i),y=n.CircleSpinner=function(v){var c=v.size,f=v.color,h=v.loading,g=v.sizeUnit;return h&&s.default.createElement(w,{size:c,color:f,sizeUnit:g})},w=u.default.div.withConfig({displayName:"circle__Wrapper",componentId:"sc-16bbsoy-0"})(o,function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size/5+v.sizeUnit},function(v){return v.color},m);y.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},y.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SpiralSpinner=void 0;var i=w([`
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
`]),u=y(r(0)),d=y(r(1)),p=r(2),m=y(p);function y(b){return b&&b.__esModule?b:{default:b}}function w(b,E){return Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(E)}}))}var v=(0,p.keyframes)(i),c=n.SpiralSpinner=function(b){var E=b.size,k=b.backColor,_=b.frontColor,C=b.loading,x=b.sizeUnit;return C&&u.default.createElement(f,{size:E,sizeUnit:x},function(T){for(var R=T.countCubesInLine,N=T.backColor,B=T.frontColor,O=T.size,U=T.sizeUnit,L=[],P=0,A=0;A<R;A++)L.push(u.default.createElement(h,{x:A*(O/4),y:0,key:P.toString(),sizeUnit:U},u.default.createElement(g,{size:O,index:P,sizeUnit:U},u.default.createElement(S,{front:!0,size:O,color:B,sizeUnit:U}),u.default.createElement(S,{back:!0,size:O,color:B,sizeUnit:U}),u.default.createElement(S,{bottom:!0,size:O,color:N,sizeUnit:U}),u.default.createElement(S,{top:!0,size:O,color:N,sizeUnit:U})))),P++;return L}({countCubesInLine:4,backColor:k,frontColor:_,size:E,sizeUnit:x}))},f=m.default.div.withConfig({displayName:"spiral__Wrapper",componentId:"sc-1898s0q-0"})(o,function(b){return""+b.size+b.sizeUnit},function(b){return""+b.size/4+b.sizeUnit},function(b){return""+3*b.size+b.sizeUnit}),h=m.default.div.withConfig({displayName:"spiral__CubeWrapper",componentId:"sc-1898s0q-1"})(s,function(b){return""+b.y+b.sizeUnit},function(b){return""+b.x+b.sizeUnit}),g=m.default.div.withConfig({displayName:"spiral__Cube",componentId:"sc-1898s0q-2"})(a,function(b){return""+b.size/4+b.sizeUnit},function(b){return""+b.size/4+b.sizeUnit},v,function(b){return .15*b.index}),S=m.default.div.withConfig({displayName:"spiral__Side",componentId:"sc-1898s0q-3"})(l,function(b){return b.color},function(b){return function(E){return E.top?90:E.bottom?-90:0}(b)},function(b){return b.back?180:0},function(b){return""+b.size/8+b.sizeUnit});c.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PulseSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function m(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=(0,u.keyframes)(i),w=n.PulseSpinner=function(f){var h=f.size,g=f.color,S=f.loading,b=f.sizeUnit;return S&&a.default.createElement(v,{size:h,sizeUnit:b},function(E){for(var k=E.countCubeInLine,_=E.color,C=E.size,x=E.sizeUnit,T=[],R=0,N=0;N<k;N++)T.push(a.default.createElement(c,{color:_,size:C,x:N*(C/3+C/15),y:0,key:R.toString(),index:N,sizeUnit:x})),R++;return T}({countCubeInLine:3,color:g,size:h,sizeUnit:b}))},v=d.default.div.withConfig({displayName:"pulse__Wrapper",componentId:"sc-1yr0qmr-0"})(o,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size/2.5+f.sizeUnit}),c=d.default.div.withConfig({displayName:"pulse__Cube",componentId:"sc-1yr0qmr-1"})(s,function(f){return""+f.y+f.sizeUnit},function(f){return""+f.x+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return""+f.size/2.5+f.sizeUnit},function(f){return f.color},y,function(f){return .15*f.index});w.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SequenceSpinner=void 0;var i=w([`
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
`]),u=y(r(0)),d=y(r(1)),p=r(2),m=y(p);function y(S){return S&&S.__esModule?S:{default:S}}function w(S,b){return Object.freeze(Object.defineProperties(S,{raw:{value:Object.freeze(b)}}))}var v=n.SequenceSpinner=function(S){var b=S.size,E=S.backColor,k=S.frontColor,_=S.loading,C=S.sizeUnit;return _&&u.default.createElement(c,{size:b,sizeUnit:C},function(x){for(var T=x.countCubesInLine,R=x.backColor,N=x.frontColor,B=x.size,O=x.sizeUnit,U=[],L=0,P=0;P<T;P++)U.push(u.default.createElement(f,{x:P*(B/8+B/11),y:0,key:L.toString(),sizeUnit:O},u.default.createElement(h,{size:B,index:L,sizeUnit:O},u.default.createElement(g,{front:!0,size:B,color:N,sizeUnit:O}),u.default.createElement(g,{left:!0,size:B,color:R,sizeUnit:O})))),L++;return U}({countCubesInLine:5,backColor:E,frontColor:k,size:b,sizeUnit:C}))},c=m.default.div.withConfig({displayName:"sequence__Wrapper",componentId:"sc-61fmm1-0"})(o,function(S){return""+S.size+S.sizeUnit},function(S){return""+S.size/1.75+S.sizeUnit},function(S){return""+3*S.size+S.sizeUnit}),f=m.default.div.withConfig({displayName:"sequence__CubeWrapper",componentId:"sc-61fmm1-1"})(s,function(S){return""+S.y+S.sizeUnit},function(S){return""+S.x+S.sizeUnit}),h=m.default.div.withConfig({displayName:"sequence__Cube",componentId:"sc-61fmm1-2"})(a,function(S){return""+S.size/8+S.sizeUnit},function(S){return""+S.size/1.75+S.sizeUnit},function(S){return(0,p.keyframes)(i,S.size,S.sizeUnit,S.size,S.sizeUnit)},function(S){return .1*S.index}),g=m.default.div.withConfig({displayName:"sequence__Side",componentId:"sc-61fmm1-3"})(l,function(S){return S.color},function(S){return S.front?0:-90},function(S){return""+S.size/16+S.sizeUnit});v.defaultProps={loading:!0,size:40,frontColor:"#4b4c56",backColor:"#00ff89",sizeUnit:"px"},v.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.DominoSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.DominoSpinner=function(c){var f=c.size,h=c.color,g=c.loading,S=c.sizeUnit,b=function(E,k){for(var _=[],C=0;C<=E+1;C++)_.push(k/8*-C);return _}(7,f);return g&&a.default.createElement(w,{size:f,sizeUnit:S},function(E){for(var k=E.countBars,_=E.rotatesPoints,C=E.translatesPoints,x=E.color,T=E.size,R=E.sizeUnit,N=[],B=0;B<k;B++)N.push(a.default.createElement(v,{color:x,size:T,translatesPoints:C,rotate:_[B],key:B.toString(),index:B,sizeUnit:R}));return N}({countBars:7,rotatesPoints:[0,0,0,10,40,60,70],translatesPoints:b,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"domino__Wrapper",componentId:"sc-81zu9-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),v=d.default.div.withConfig({displayName:"domino__Bar",componentId:"sc-81zu9-1"})(s,function(c){return""+c.size/30+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.translatesPoints[0],c.sizeUnit,c.translatesPoints[1],c.sizeUnit,c.translatesPoints[2],c.sizeUnit,c.translatesPoints[3],c.sizeUnit,c.translatesPoints[4],c.sizeUnit,c.translatesPoints[5],c.sizeUnit,c.translatesPoints[6],c.sizeUnit,c.translatesPoints[7],c.sizeUnit,c.translatesPoints[8],c.sizeUnit)},function(c){return-.42*c.index},function(c){return""+(c.size-15*c.index)+c.sizeUnit},function(c){return c.rotate});y.defaultProps={loading:!0,size:100,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ImpulseSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.ImpulseSpinner=function(c){var f=c.size,h=c.frontColor,g=c.backColor,S=c.loading,b=c.sizeUnit;return S&&a.default.createElement(w,{size:f,sizeUnit:b},function(E){for(var k=E.countBalls,_=E.frontColor,C=E.backColor,x=E.size,T=E.sizeUnit,R=[],N=0;N<k;N++)R.push(a.default.createElement(v,{frontColor:_,backColor:C,size:x,x:N*(x/5+x/5),y:0,key:N.toString(),index:N,sizeUnit:T}));return R}({countBalls:3,frontColor:h,backColor:g,size:f,sizeUnit:b}))},w=d.default.div.withConfig({displayName:"impulse__Wrapper",componentId:"sc-1eafdhu-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),v=d.default.div.withConfig({displayName:"impulse__Ball",componentId:"sc-1eafdhu-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.frontColor},function(c){return(0,u.keyframes)(i,c.backColor,c.frontColor,c.backColor,c.backColor)},function(c){return .125*c.index});y.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,frontColor:l.default.string,backColor:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CubeSpinner=void 0;var i=w([`
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
`]),u=y(r(0)),d=y(r(1)),p=r(2),m=y(p);function y(b){return b&&b.__esModule?b:{default:b}}function w(b,E){return Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(E)}}))}var v=(0,p.keyframes)(i),c=n.CubeSpinner=function(b){var E=b.size,k=b.backColor,_=b.frontColor,C=b.loading,x=b.sizeUnit;return C&&u.default.createElement(f,{size:E,sizeUnit:x},u.default.createElement(h,{x:0,y:0,sizeUnit:x},u.default.createElement(g,{size:E,sizeUnit:x},u.default.createElement(S,{front:!0,size:E,color:_,sizeUnit:x}),u.default.createElement(S,{back:!0,size:E,color:_,sizeUnit:x}),u.default.createElement(S,{bottom:!0,size:E,color:k,sizeUnit:x}),u.default.createElement(S,{top:!0,size:E,color:k,sizeUnit:x}),u.default.createElement(S,{left:!0,size:E,color:k,sizeUnit:x}),u.default.createElement(S,{right:!0,size:E,color:k,sizeUnit:x}))))},f=m.default.div.withConfig({displayName:"cube__Wrapper",componentId:"sc-1iks05k-0"})(o,function(b){return""+b.size+b.sizeUnit},function(b){return""+b.size+b.sizeUnit},function(b){return""+4*b.size+b.sizeUnit}),h=m.default.div.withConfig({displayName:"cube__CubeWrapper",componentId:"sc-1iks05k-1"})(s,function(b){return""+b.y+b.sizeUnit},function(b){return""+b.x+b.sizeUnit}),g=m.default.div.withConfig({displayName:"cube__Cube",componentId:"sc-1iks05k-2"})(a,function(b){return""+b.size+b.sizeUnit},function(b){return""+b.size+b.sizeUnit},v),S=m.default.div.withConfig({displayName:"cube__Side",componentId:"sc-1iks05k-3"})(l,function(b){return b.color},function(b){return function(E){return E.top?90:E.bottom?-90:0}(b)},function(b){return function(E){return E.left?90:E.right?-90:E.back?180:0}(b)},function(b){return""+b.size/2+b.sizeUnit});c.defaultProps={loading:!0,size:25,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FillSpinner=void 0;var i=y([`
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
`]),l=m(r(0)),u=m(r(1)),d=r(2),p=m(d);function m(g){return g&&g.__esModule?g:{default:g}}function y(g,S){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(S)}}))}var w=(0,d.keyframes)(i),v=(0,d.keyframes)(o),c=n.FillSpinner=function(g){var S=g.size,b=g.color,E=g.loading,k=g.sizeUnit;return E&&l.default.createElement(f,{size:S,color:b,sizeUnit:k},l.default.createElement(h,{color:b,size:S,sizeUnit:k}))},f=p.default.div.withConfig({displayName:"fill__Wrapper",componentId:"ehv7z4-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size/8+g.sizeUnit},function(g){return g.color},w),h=p.default.div.withConfig({displayName:"fill__Plane",componentId:"ehv7z4-1"})(a,function(g){return g.color},v);c.defaultProps={loading:!0,size:20,color:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SphereSpinner=void 0;var i=y([`
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
`]),l=m(r(0)),u=m(r(1)),d=r(2),p=m(d);function m(h){return h&&h.__esModule?h:{default:h}}function y(h,g){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(g)}}))}var w=(0,d.keyframes)(i),v=n.SphereSpinner=function(h){var g=h.size,S=h.color,b=h.loading,E=h.sizeUnit,k=g/2,_=g/5;return b&&l.default.createElement(c,{size:g,sizeUnit:E},function(C){for(var x=C.countBalls,T=C.radius,R=C.angle,N=C.color,B=C.size,O=C.ballSize,U=C.sizeUnit,L=[],P=O/2,A=0;A<x;A++){var j=Math.sin(R*A*(Math.PI/180))*T-P,Y=Math.cos(R*A*(Math.PI/180))*T-P;L.push(l.default.createElement(f,{color:N,ballSize:O,size:B,x:j,y:Y,key:A.toString(),index:A,sizeUnit:U}))}return L}({countBalls:7,radius:k,angle:360/7,color:S,size:g,ballSize:_,sizeUnit:E}))},c=p.default.div.withConfig({displayName:"sphere__Wrapper",componentId:"sc-1t5xu9p-0"})(s,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},w),f=p.default.div.withConfig({displayName:"sphere__Ball",componentId:"sc-1t5xu9p-1"})(a,function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return h.color},function(h){return""+h.x+h.sizeUnit},function(h){return""+h.y+h.sizeUnit},function(h){return function(g){return(0,d.keyframes)(o,g.x,g.sizeUnit,g.y,g.sizeUnit,g.size/12,g.sizeUnit,g.size/12,g.sizeUnit,g.size/12,g.sizeUnit,g.size/12,g.sizeUnit,g.x,g.sizeUnit,g.y,g.sizeUnit)}(h)},function(h){return .3*h.index});v.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},v.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FlagSpinner=void 0;var i=y([`
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
`]),l=m(r(0)),u=m(r(1)),d=r(2),p=m(d);function m(h){return h&&h.__esModule?h:{default:h}}function y(h,g){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(g)}}))}var w=n.FlagSpinner=function(h){var g=h.size,S=h.color,b=h.loading,E=h.sizeUnit;return b&&l.default.createElement(v,{size:g,sizeUnit:E},function(k){for(var _=k.countPlaneInLine,C=k.color,x=k.size,T=k.sizeUnit,R=[],N=[],B=0,O=0;O<_;O++){for(var U=0;U<_;U++)N.push(l.default.createElement(f,{color:C,size:x,x:O*(x/6+x/9),y:U*(x/6+x/9)+x/10,key:O+U.toString(),index:B,sizeUnit:T})),B++;R.push(l.default.createElement(c,{index:B,key:B.toString(),size:x,sizeUnit:T},[].concat(N))),N.length=0}return R}({countPlaneInLine:4,color:S,size:g,sizeUnit:E}))},v=p.default.div.withConfig({displayName:"flag__Wrapper",componentId:"sc-3eh05c-0"})(o,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit}),c=p.default.div.withConfig({displayName:"flag__Line",componentId:"sc-3eh05c-1"})(s,function(h){return(0,d.keyframes)(i,-h.size/5,h.sizeUnit)},function(h){return .05*h.index}),f=p.default.div.withConfig({displayName:"flag__Plane",componentId:"sc-3eh05c-2"})(a,function(h){return""+h.y+h.sizeUnit},function(h){return""+h.x+h.sizeUnit},function(h){return""+h.size/6+h.sizeUnit},function(h){return""+h.size/6+h.sizeUnit},function(h){return h.color});w.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},w.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ClapSpinner=void 0;var i=y([`
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
`]),l=m(r(0)),u=m(r(1)),d=r(2),p=m(d);function m(h){return h&&h.__esModule?h:{default:h}}function y(h,g){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(g)}}))}var w=(0,d.keyframes)(i),v=n.ClapSpinner=function(h){var g=h.size,S=h.frontColor,b=h.backColor,E=h.loading,k=h.sizeUnit,_=g/2,C=g/5;return E&&l.default.createElement(c,{size:g,sizeUnit:k},function(x){for(var T=x.countBalls,R=x.radius,N=x.angle,B=x.frontColor,O=x.backColor,U=x.size,L=x.ballSize,P=x.sizeUnit,A=[],j=L/2,Y=0;Y<T;Y++){var se=Math.sin(N*Y*(Math.PI/180))*R-j,Ke=Math.cos(N*Y*(Math.PI/180))*R-j;A.push(l.default.createElement(f,{frontColor:B,backColor:O,ballSize:L,size:U,sizeUnit:P,x:se,y:Ke,key:Y.toString(),index:Y}))}return A}({countBalls:7,radius:_,angle:360/7,frontColor:S,backColor:b,size:g,ballSize:C,sizeUnit:k}))},c=p.default.div.withConfig({displayName:"clap__Wrapper",componentId:"sc-12p9tb5-0"})(s,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},w),f=p.default.div.withConfig({displayName:"clap__Ball",componentId:"sc-12p9tb5-1"})(a,function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return h.frontColor},function(h){return""+h.x+h.sizeUnit},function(h){return""+h.y+h.sizeUnit},function(h){return function(g){return(0,d.keyframes)(o,g.x,g.sizeUnit,g.y,g.sizeUnit,g.x,g.sizeUnit,g.y,g.sizeUnit,g.x,g.sizeUnit,g.y,g.sizeUnit,g.backColor,g.x,g.sizeUnit,g.y,g.sizeUnit)}(h)},function(h){return .2*h.index});v.defaultProps={loading:!0,size:30,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:u.default.bool,size:u.default.number,frontColor:u.default.string,backColor:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RotateSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function m(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=(0,u.keyframes)(i),w=n.RotateSpinner=function(f){var h=f.size,g=f.color,S=f.loading,b=f.sizeUnit,E=h/2,k=h/5;return S&&a.default.createElement(v,{size:h,sizeUnit:b},function(_){for(var C=_.countBalls,x=_.radius,T=_.angle,R=_.color,N=_.size,B=_.ballSize,O=_.sizeUnit,U=[],L=B/2,P=0;P<C;P++){var A=Math.sin(T*P*(Math.PI/180))*x-L,j=Math.cos(T*P*(Math.PI/180))*x-L;U.push(a.default.createElement(c,{color:R,ballSize:B,size:N,x:A,y:j,key:P.toString(),index:P,sizeUnit:O}))}return U}({countBalls:8,radius:E,angle:45,color:g,size:h,ballSize:k,sizeUnit:b}))},v=d.default.div.withConfig({displayName:"rotate__Wrapper",componentId:"sc-1b62bh9-0"})(o,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=d.default.div.withConfig({displayName:"rotate__Ball",componentId:"sc-1b62bh9-1"})(s,function(f){return""+f.ballSize+f.sizeUnit},function(f){return""+f.ballSize+f.sizeUnit},function(f){return f.color},y,function(f){return .3*f.index});w.defaultProps={loading:!0,size:45,color:"#00ff89",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SwishSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.SwishSpinner=function(c){var f=c.size,h=c.frontColor,g=c.backColor,S=c.loading,b=c.sizeUnit;return S&&a.default.createElement(w,{size:f,sizeUnit:b},function(E){for(var k=E.countBallsInLine,_=E.frontColor,C=E.backColor,x=E.size,T=E.sizeUnit,R=[],N=0,B=0;B<k;B++)for(var O=0;O<k;O++)R.push(a.default.createElement(v,{frontColor:_,backColor:C,size:x,x:B*(x/3+x/15),y:O*(x/3+x/15),key:N.toString(),index:N,sizeUnit:T})),N++;return R}({countBallsInLine:3,frontColor:h,backColor:g,size:f,sizeUnit:b}))},w=d.default.div.withConfig({displayName:"swish__Wrapper",componentId:"e0szto-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"swish__Ball",componentId:"e0szto-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.frontColor},function(c){return(0,u.keyframes)(i,c.backColor)},function(c){return .1*c.index});y.defaultProps={loading:!0,size:40,frontColor:"#4b4c56",backColor:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,frontColor:l.default.string,backColor:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GooSpinner=void 0;var i=w([`
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
`]),u=y(r(0)),d=y(r(1)),p=r(2),m=y(p);function y(g){return g&&g.__esModule?g:{default:g}}function w(g,S){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(S)}}))}var v=n.GooSpinner=function(g){var S=g.size,b=g.color,E=g.loading,k=g.sizeUnit;return E&&u.default.createElement(c,{size:S,sizeUnit:k},u.default.createElement(f,{size:S,sizeUnit:k},function(_){for(var C=_.countBalls,x=_.color,T=_.size,R=_.sizeUnit,N=[],B=T/4,O=[-B,B],U=0;U<C;U++)N.push(u.default.createElement(h,{color:x,size:T,x:T/2-T/6,y:T/2-T/6,key:U.toString(),translateTo:O[U],index:U,sizeUnit:R}));return N}({countBalls:2,color:b,size:S,sizeUnit:k})),u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1"},u.default.createElement("defs",null,u.default.createElement("filter",{id:"goo"},u.default.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"6",result:"blur"}),u.default.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -5",result:"goo"}),u.default.createElement("feBlend",{in:"SourceGraphic",in2:"goo"})))))},c=m.default.div.withConfig({displayName:"goo__Wrapper",componentId:"sc-12keask-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit}),f=m.default.div.withConfig({displayName:"goo__BallsWrapper",componentId:"sc-12keask-1"})(a,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit},function(){return(0,p.keyframes)(i)}),h=m.default.div.withConfig({displayName:"goo__Ball",componentId:"sc-12keask-2"})(l,function(g){return""+g.y+g.sizeUnit},function(g){return""+g.x+g.sizeUnit},function(g){return""+g.size/3+g.sizeUnit},function(g){return""+g.size/3+g.sizeUnit},function(g){return g.color},function(g){return(0,p.keyframes)(o,g.translateTo,g.sizeUnit)});v.defaultProps={loading:!0,size:55,color:"#fff",sizeUnit:"px"},v.propTypes={loading:d.default.bool,size:d.default.number,color:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CombSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.CombSpinner=function(c){var f=c.size,h=c.color,g=c.loading,S=c.sizeUnit,b=f/9;return g&&a.default.createElement(w,{size:f,sizeUnit:S},function(E){for(var k=E.countBars,_=E.color,C=E.size,x=E.sizeUnit,T=[],R=0;R<k;R++)T.push(a.default.createElement(v,{color:_,size:C,key:R.toString(),sizeUnit:x,index:R}));return T}({countBars:b,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"comb__Wrapper",componentId:"x9t4ur-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),v=d.default.div.withConfig({displayName:"comb__Bar",componentId:"x9t4ur-1"})(s,function(c){return""+c.size/60+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+9*c.index+c.sizeUnit},function(c){return c.color},function(){return(0,u.keyframes)(i)},function(c){return .05*c.index});y.defaultProps={loading:!0,size:100,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PongSpinner=void 0;var i=w([`
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
`]),u=y(r(0)),d=y(r(1)),p=r(2),m=y(p);function y(g){return g&&g.__esModule?g:{default:g}}function w(g,S){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(S)}}))}var v=n.PongSpinner=function(g){var S=g.size,b=g.color,E=g.loading,k=g.sizeUnit;return E&&u.default.createElement(c,{size:S,sizeUnit:k},u.default.createElement(h,{left:!0,color:b,size:S,sizeUnit:k}),u.default.createElement(f,{color:b,size:S,sizeUnit:k}),u.default.createElement(h,{right:!0,color:b,size:S,sizeUnit:k}))},c=m.default.div.withConfig({displayName:"pong__Wrapper",componentId:"sc-1lbqo08-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size/1.75+g.sizeUnit}),f=m.default.div.withConfig({displayName:"pong__Ball",componentId:"sc-1lbqo08-1"})(a,function(g){return""+g.size/8+g.sizeUnit},function(g){return""+g.size/8+g.sizeUnit},function(g){return g.color},function(g){return function(S){return(0,p.keyframes)(o,S.size/3.5-S.size/8,S.sizeUnit,S.size/12,S.sizeUnit,S.size/3.5,S.sizeUnit,S.size-S.size/8,S.sizeUnit,S.size/1.75-S.size/8,S.sizeUnit,S.size/12,S.sizeUnit,S.size/3.5,S.sizeUnit,S.size-S.size/8,S.sizeUnit,S.size/3.5-S.size/8,S.sizeUnit,S.size/12,S.sizeUnit)}(g)}),h=m.default.div.withConfig({displayName:"pong__Player",componentId:"sc-1lbqo08-2"})(l,function(g){return""+g.size/12+g.sizeUnit},function(g){return""+g.size/3+g.sizeUnit},function(g){return g.color},function(g){return g.left?0:g.size},function(g){return g.right?0:g.size},function(g){return function(S){return(0,p.keyframes)(i,S.left?0:S.size/3.5,S.sizeUnit,S.left?S.size/3.5:0,S.sizeUnit,S.left?0:S.size/3.5,S.sizeUnit)}(g)});v.defaultProps={loading:!0,size:60,color:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:d.default.bool,size:d.default.number,color:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RainbowSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.RainbowSpinner=function(c){var f=c.size,h=c.color,g=c.loading,S=c.sizeUnit;return g&&a.default.createElement(w,{size:f,sizeUnit:S},a.default.createElement(v,{size:f,color:h,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"rainbow__Wrapper",componentId:"sc-1ugdhww-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit}),v=d.default.div.withConfig({displayName:"rainbow__Line",componentId:"sc-1ugdhww-1"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit},function(c){return c.color},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.sizeUnit,c.sizeUnit,c.sizeUnit,c.sizeUnit,c.sizeUnit)});y.defaultProps={loading:!0,size:50,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RingSpinner=void 0;var i=y([`
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
`]),l=m(r(0)),u=m(r(1)),d=r(2),p=m(d);function m(f){return f&&f.__esModule?f:{default:f}}function y(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var w=n.RingSpinner=function(f){var h=f.size,g=f.color,S=f.loading,b=f.sizeUnit;return S&&l.default.createElement(v,{size:h,sizeUnit:b},l.default.createElement(c,{size:h,color:g,sizeUnit:b}))},v=p.default.div.withConfig({displayName:"ring__Wrapper",componentId:"sc-1ki0q4s-0"})(s,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=p.default.div.withConfig({displayName:"ring__Circle",componentId:"sc-1ki0q4s-1"})(a,function(f){return"inset 0 0 0 "+f.size/10+f.sizeUnit+" "+f.color},function(f){return(0,d.keyframes)(i,f.size/10,f.sizeUnit,f.color,f.color)},function(f){return f.color},function(f){return(0,d.keyframes)(o,f.color,f.size/10,f.sizeUnit,f.color)});w.defaultProps={loading:!0,size:30,color:"#00ff89",sizeUnit:"px"},w.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.HoopSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.HoopSpinner=function(c){var f=c.size,h=c.color,g=c.loading,S=c.sizeUnit;return g&&a.default.createElement(w,{size:f,sizeUnit:S},function(b){for(var E=b.countBallsInLine,k=b.color,_=b.size,C=b.sizeUnit,x=[],T=0,R=0;R<E;R++)x.push(a.default.createElement(v,{color:k,size:_,key:T.toString(),index:R,sizeUnit:C})),T++;return x}({countBallsInLine:6,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"hoop__Wrapper",componentId:"sc-6dao9o-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"hoop__Ball",componentId:"sc-6dao9o-1"})(s,function(c){return""+c.size/1.5+c.sizeUnit},function(c){return""+c.size/1.5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return 1-.2*c.index},function(c){return(0,u.keyframes)(i,c.color,"rotateX(65deg) rotateY(45deg) translateZ(-"+1.5*c.size+c.sizeUnit+") scale(0.1)","rotateX(65deg) rotateY(-45deg) translateZ(-"+1.5*c.size+c.sizeUnit+") scale(0.1)")},function(c){return 200*c.index});y.defaultProps={loading:!0,size:45,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FlapperSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.FlapperSpinner=function(c){var f=c.size,h=c.color,g=c.loading,S=c.sizeUnit,b=f/2,E=f/1.5;return g&&a.default.createElement(w,{size:f,sizeUnit:S},function(k){for(var _=k.countBalls,C=k.radius,x=k.angle,T=k.color,R=k.size,N=k.ballSize,B=k.sizeUnit,O=[],U=N/2,L=0;L<_;L++){var P=Math.sin(x*L*(Math.PI/180))*C-U,A=Math.cos(x*L*(Math.PI/180))*C-U;O.push(a.default.createElement(v,{color:T,ballSize:N,size:R,x:P,y:A,key:L.toString(),index:L,sizeUnit:B}))}return O}({countBalls:7,radius:b,angle:360/7,color:h,size:f,ballSize:E,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"flapper__Wrapper",componentId:"kzbmuk-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"flapper__Ball",componentId:"kzbmuk-1"})(s,function(c){return""+c.size/2+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit},function(c){return""+c.ballSize+c.sizeUnit},function(c){return""+c.ballSize+c.sizeUnit},function(c){return c.color},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.y+c.sizeUnit},function(c){return function(f){return(0,u.keyframes)(i,f.x,f.sizeUnit,f.y,f.sizeUnit)}(c)},function(c){return .1*c.index});y.defaultProps={loading:!0,size:30,color:"#00ff89",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MagicSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.MagicSpinner=function(c){var f=c.size,h=c.color,g=c.loading,S=c.sizeUnit,b=f/12;return g&&a.default.createElement(w,{size:f,sizeUnit:S},function(E){for(var k=E.countBalls,_=E.color,C=E.size,x=E.sizeUnit,T=[],R=0;R<k;R++)T.push(a.default.createElement(v,{color:_,countBalls:k,size:C,key:R.toString(),index:R,sizeUnit:x}));return T}({countBalls:b,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"magic__Wrapper",componentId:"dtlj8d-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"magic__Ball",componentId:"dtlj8d-1"})(s,function(c){return""+c.index*(c.size/c.countBalls)+c.sizeUnit},function(c){return""+c.index*(c.size/c.countBalls)+c.sizeUnit},function(c){return c.color},function(){return(0,u.keyframes)(i)},function(c){return .05*c.index});y.defaultProps={loading:!0,size:70,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.JellyfishSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(c){return c&&c.__esModule?c:{default:c}}function m(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.JellyfishSpinner=function(c){var f=c.size,h=c.color,g=c.loading,S=c.sizeUnit;return g&&a.default.createElement(w,{size:f,sizeUnit:S},function(b){for(var E=b.countBalls,k=b.color,_=b.size,C=b.sizeUnit,x=[],T=0,R=0;R<E;R++)x.push(a.default.createElement(v,{color:k,size:_,countRings:E,key:T.toString(),index:R,sizeUnit:C})),T++;return x}({countBalls:6,color:h,size:f,sizeUnit:S}))},w=d.default.div.withConfig({displayName:"jellyfish__Wrapper",componentId:"qquojd-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"jellyfish__Ring",componentId:"qquojd-1"})(s,function(c){return""+c.index*(c.size/c.countRings)+c.sizeUnit},function(c){return""+c.index*(c.size/c.countRings)/2+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,"translateY("+-c.size/5+c.sizeUnit+");","translateY("+c.size/4+c.sizeUnit+")","translateY("+-c.size/5+c.sizeUnit+")")},function(c){return 100*c.index});y.defaultProps={loading:!0,size:60,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.TraceSpinner=void 0;var i=w([`
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
`]),u=y(r(0)),d=y(r(1)),p=r(2),m=y(p);function y(g){return g&&g.__esModule?g:{default:g}}function w(g,S){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(S)}}))}var v=n.TraceSpinner=function(g){var S=g.size,b=g.frontColor,E=g.backColor,k=g.loading,_=g.sizeUnit;return k&&u.default.createElement(c,{size:S,sizeUnit:_},function(C){for(var x=C.countBalls,T=C.frontColor,R=C.backColor,N=C.size,B=C.sizeUnit,O=[],U=[0,1,3,2],L=0,P=0;P<x/2;P++)for(var A=0;A<x/2;A++)O.push(u.default.createElement(f,{frontColor:T,backColor:R,size:N,x:A*(N/2+N/10),y:P*(N/2+N/10),key:U[L].toString(),index:U[L],sizeUnit:B})),L++;return O}({countBalls:4,frontColor:b,backColor:E,size:S,sizeUnit:_}),u.default.createElement(h,{frontColor:b,size:S,sizeUnit:_}))},c=m.default.div.withConfig({displayName:"trace__Wrapper",componentId:"k17r81-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit}),f=m.default.div.withConfig({displayName:"trace__Ball",componentId:"k17r81-1"})(a,function(g){return""+g.y+g.sizeUnit},function(g){return""+g.x+g.sizeUnit},function(g){return""+g.size/5+g.sizeUnit},function(g){return""+g.size/5+g.sizeUnit},function(g){return""+g.size/10+g.sizeUnit},function(g){return g.backColor},function(g){return(0,p.keyframes)(i,g.size/10,g.sizeUnit,g.backColor,g.size/10,g.sizeUnit,g.frontColor,g.size/10,g.sizeUnit,g.backColor,g.size/10,g.sizeUnit,g.backColor)},function(g){return 1*g.index}),h=(0,m.default)(f)(l,function(g){return g.frontColor},function(g){return g.frontColor},function(g){return(0,p.keyframes)(o,g.size/2+g.size/10,g.sizeUnit,g.size/2+g.size/10,g.sizeUnit,g.size/2+g.size/10,g.sizeUnit,g.size/2+g.size/10,g.sizeUnit)});v.defaultProps={loading:!0,size:35,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ClassicSpinner=void 0;var i=m([`
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
`]),a=p(r(0)),l=p(r(1)),u=r(2),d=p(u);function p(f){return f&&f.__esModule?f:{default:f}}function m(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=(0,u.keyframes)(i),w=n.ClassicSpinner=function(f){var h=f.size,g=f.color,S=f.loading,b=f.sizeUnit,E=h/2;return S&&a.default.createElement(v,{size:h,sizeUnit:b},function(k){for(var _=k.countBars,C=k.color,x=k.size,T=k.barSize,R=k.sizeUnit,N=[],B=0;B<_;B++){var O=360/_*B,U=-x/2;N.push(a.default.createElement(c,{countBars:_,color:C,barSize:T,size:x,rotate:O,translate:U,key:B.toString(),index:B,sizeUnit:R}))}return N}({countBars:16,radius:E,color:g,size:h,sizeUnit:b}))},v=d.default.div.withConfig({displayName:"classic__Wrapper",componentId:"sc-1ycp7u6-0"})(o,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=d.default.div.withConfig({displayName:"classic__Bar",componentId:"sc-1ycp7u6-1"})(s,function(f){return""+f.size/10+f.sizeUnit},function(f){return""+f.size/4+f.sizeUnit},function(f){return f.color},function(f){return"rotate("+f.rotate+"deg)"},function(f){return"translate(0, "+f.translate+f.sizeUnit+")"},y,function(f){return .06*f.countBars},function(f){return .06*f.index});w.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.WhisperSpinner=void 0;var i=y([`
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
`]),l=m(r(0)),u=m(r(1)),d=r(2),p=m(d);function m(f){return f&&f.__esModule?f:{default:f}}function y(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var w=n.WhisperSpinner=function(f){var h=f.size,g=f.frontColor,S=f.backColor,b=f.loading,E=f.sizeUnit;return b&&l.default.createElement(v,{size:h,sizeUnit:E},function(k){for(var _=k.countBallsInLine,C=k.frontColor,x=k.backColor,T=k.size,R=k.sizeUnit,N=[],B=0,O=0;O<_;O++)for(var U=0;U<_;U++)N.push(l.default.createElement(c,{frontColor:C,backColor:x,size:T,key:B.toString(),index:B,sizeUnit:R})),B++;return N}({countBallsInLine:3,frontColor:g,backColor:S,size:h,sizeUnit:E}))},v=p.default.div.withConfig({displayName:"whisper__Wrapper",componentId:"k8uff3-0"})(s,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit},function(){return(0,d.keyframes)(o)}),c=p.default.div.withConfig({displayName:"whisper__Ball",componentId:"k8uff3-1"})(a,function(f){return""+f.size/15+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return f.frontColor},function(f){return(0,d.keyframes)(i,f.backColor,f.frontColor)});w.defaultProps={loading:!0,size:50,frontColor:"#4b4c56",backColor:"#00ff89",sizeUnit:"px"},w.propTypes={loading:u.default.bool,size:u.default.number,frontColor:u.default.string,backColor:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MetroSpinner=void 0;var i=y([`
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
`]),l=m(r(0)),u=m(r(1)),d=r(2),p=m(d);function m(h){return h&&h.__esModule?h:{default:h}}function y(h,g){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(g)}}))}var w=(0,d.keyframes)(i),v=n.MetroSpinner=function(h){var g=h.size,S=h.color,b=h.loading,E=h.sizeUnit,k=g/2,_=g/8;return b&&l.default.createElement(c,{size:g,sizeUnit:E},function(C){for(var x=C.countBalls,T=C.radius,R=C.angle,N=C.color,B=C.size,O=C.ballSize,U=C.sizeUnit,L=[],P=O/2,A=0;A<x;A++){var j=Math.sin(R*A*(Math.PI/180))*T-P,Y=Math.cos(R*A*(Math.PI/180))*T-P;L.push(l.default.createElement(f,{countBalls:x,color:N,ballSize:O,size:B,sizeUnit:U,x:j,y:Y,key:A.toString(),index:A+1}))}return L}({countBalls:9,radius:k,angle:40,color:S,size:g,ballSize:_,sizeUnit:E}))},c=p.default.div.withConfig({displayName:"metro__Wrapper",componentId:"sc-2iqssn-0"})(s,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},w),f=p.default.div.withConfig({displayName:"metro__Ball",componentId:"sc-2iqssn-1"})(a,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},function(h){return(0,d.keyframes)(o,h.size/2/h.countBalls*(h.index-1)/h.size*100,(h.size/2/h.countBalls+1e-4)*(h.index-1)/h.size*100,"rotate("+(0-360/h.countBalls*(h.index-2))+"deg)",(h.size/2/h.countBalls*(h.index-0)+2)/h.size*100,"rotate("+(0-360/h.countBalls*(h.index-1))+"deg)",(h.size/2+h.size/2/h.countBalls*(h.index-0)+2)/h.size*100,"rotate("+(0-360/h.countBalls*(h.index-1))+"deg)","rotate("+(0-360/h.countBalls*(h.countBalls-1))+"deg)")},function(h){return"rotate("+360/h.countBalls*h.index+"deg)"},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.color});v.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},v.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}}]))})(eO);function Qe(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function M(){return M=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},M.apply(this,arguments)}function Fk(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Fk(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function ur(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=Fk(t))&&(r&&(r+=" "),r+=e);return r}function ac(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function Ur(t,e,n={clone:!0}){const r=n.clone?M({},t):t;return ac(t)&&ac(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(ac(e[i])&&i in t&&ac(t[i])?r[i]=Ur(t[i],e[i],n):r[i]=e[i])}),r}function Bs(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}function ze(t){if(typeof t!="string")throw new Error(Bs(7));return t.charAt(0).toUpperCase()+t.slice(1)}function dR(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function hR(t,e=166){let n;function r(...i){const o=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(o,e)}return r.clear=()=>{clearTimeout(n)},r}function pR(t,e){return()=>null}function mR(t,e){return I.exports.isValidElement(t)&&e.indexOf(t.type.muiName)!==-1}function _s(t){return t&&t.ownerDocument||document}function gR(t){return _s(t).defaultView||window}function yR(t,e){return()=>null}function wf(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const vR=typeof window<"u"?I.exports.useLayoutEffect:I.exports.useEffect,Vs=vR;let Y1=0;function wR(t){const[e,n]=I.exports.useState(t),r=t||e;return I.exports.useEffect(()=>{e==null&&(Y1+=1,n(`mui-${Y1}`))},[e]),r}const Q1=Rs["useId"];function Bk(t){if(Q1!==void 0){const e=Q1();return t!=null?t:e}return wR(t)}function SR(t,e,n,r,i){return null}function Vk({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=I.exports.useRef(t!==void 0),[o,s]=I.exports.useState(e),a=i?t:o,l=I.exports.useCallback(u=>{i||s(u)},[]);return[a,l]}function D0(t){const e=I.exports.useRef(t);return Vs(()=>{e.current=t}),I.exports.useCallback((...n)=>(0,e.current)(...n),[])}function Ai(...t){return I.exports.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{wf(n,e)})},t)}let Sd=!0,Im=!1,J1;const bR={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function ER(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&bR[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function kR(t){t.metaKey||t.altKey||t.ctrlKey||(Sd=!0)}function rp(){Sd=!1}function xR(){this.visibilityState==="hidden"&&Im&&(Sd=!0)}function _R(t){t.addEventListener("keydown",kR,!0),t.addEventListener("mousedown",rp,!0),t.addEventListener("pointerdown",rp,!0),t.addEventListener("touchstart",rp,!0),t.addEventListener("visibilitychange",xR,!0)}function CR(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return Sd||ER(e)}function Wk(){const t=I.exports.useCallback(i=>{i!=null&&_R(i.ownerDocument)},[]),e=I.exports.useRef(!1);function n(){return e.current?(Im=!0,window.clearTimeout(J1),J1=window.setTimeout(()=>{Im=!1},100),e.current=!1,!0):!1}function r(i){return CR(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}const TR=t=>{const e=I.exports.useRef({});return I.exports.useEffect(()=>{e.current=t}),e.current},Hk=TR;function zR(t,e){const n=M({},e);return Object.keys(t).forEach(r=>{n[r]===void 0&&(n[r]=t[r])}),n}function aa(t,e,n){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((o,s)=>(s&&(o.push(e(s)),n&&n[s]&&o.push(n[s])),o),[]).join(" ")}),r}const Z1=t=>t,IR=()=>{let t=Z1;return{configure(e){t=e},generate(e){return t(e)},reset(){t=Z1}}},PR=IR(),qk=PR,OR={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function Do(t,e,n="Mui"){const r=OR[e];return r?`${n}-${r}`:`${qk.generate(t)}-${e}`}function la(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=Do(t,i,n)}),r}function Kk(t){return typeof t=="string"}function Ba(t,e,n){return Kk(t)?e:M({},e,{ownerState:M({},e.ownerState,n)})}function RR(t,e=[]){if(t===void 0)return{};const n={};return Object.keys(t).filter(r=>r.match(/^on[A-Z]/)&&typeof t[r]=="function"&&!e.includes(r)).forEach(r=>{n[r]=t[r]}),n}function AR(t,e){return typeof t=="function"?t(e):t}function ew(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(n=>!(n.match(/^on[A-Z]/)&&typeof t[n]=="function")).forEach(n=>{e[n]=t[n]}),e}function NR(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:o}=t;if(!e){const y=ur(i==null?void 0:i.className,r==null?void 0:r.className,o,n==null?void 0:n.className),w=M({},n==null?void 0:n.style,i==null?void 0:i.style,r==null?void 0:r.style),v=M({},n,i,r);return y.length>0&&(v.className=y),Object.keys(w).length>0&&(v.style=w),{props:v,internalRef:void 0}}const s=RR(M({},i,r)),a=ew(r),l=ew(i),u=e(s),d=ur(u==null?void 0:u.className,n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),p=M({},u==null?void 0:u.style,n==null?void 0:n.style,i==null?void 0:i.style,r==null?void 0:r.style),m=M({},u,n,l,a);return d.length>0&&(m.className=d),Object.keys(p).length>0&&(m.style=p),{props:m,internalRef:u.ref}}const UR=["elementType","externalSlotProps","ownerState"];function Pm(t){var e;const{elementType:n,externalSlotProps:r,ownerState:i}=t,o=Qe(t,UR),s=AR(r,i),{props:a,internalRef:l}=NR(M({},o,{externalSlotProps:s})),u=Ai(l,s==null?void 0:s.ref,(e=t.additionalProps)==null?void 0:e.ref);return Ba(n,M({},a,{ref:u}),i)}function $R(t){const{badgeContent:e,invisible:n=!1,max:r=99,showZero:i=!1}=t,o=Hk({badgeContent:e,max:r});let s=n;n===!1&&e===0&&!i&&(s=!0);const{badgeContent:a,max:l=r}=s?o:t,u=a&&Number(a)>l?`${l}+`:a;return{badgeContent:a,invisible:s,max:l,displayValue:u}}function DR(t){return Do("MuiBadge",t)}la("MuiBadge",["root","badge","invisible"]);const MR=["badgeContent","component","children","invisible","max","slotProps","slots","showZero"],LR=t=>{const{invisible:e}=t;return aa({root:["root"],badge:["badge",e&&"invisible"]},DR,void 0)},jR=I.exports.forwardRef(function(e,n){const{component:r,children:i,max:o=99,slotProps:s={},slots:a={},showZero:l=!1}=e,u=Qe(e,MR),{badgeContent:d,max:p,displayValue:m,invisible:y}=$R(M({},e,{max:o})),w=M({},e,{badgeContent:d,invisible:y,max:p,showZero:l}),v=LR(w),c=r||a.root||"span",f=Pm({elementType:c,externalSlotProps:s.root,externalForwardedProps:u,additionalProps:{ref:n},ownerState:w,className:v.root}),h=a.badge||"span",g=Pm({elementType:h,externalSlotProps:s.badge,ownerState:w,className:v.badge});return Co(c,M({},f,{children:[i,ee(h,M({},g,{children:m}))]}))}),FR=jR;function tw(t){return t.substring(2).toLowerCase()}function BR(t,e){return e.documentElement.clientWidth<t.clientX||e.documentElement.clientHeight<t.clientY}function oB(t){const{children:e,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:i,touchEvent:o="onTouchEnd"}=t,s=I.exports.useRef(!1),a=I.exports.useRef(null),l=I.exports.useRef(!1),u=I.exports.useRef(!1);I.exports.useEffect(()=>(setTimeout(()=>{l.current=!0},0),()=>{l.current=!1}),[]);const d=Ai(e.ref,a),p=D0(w=>{const v=u.current;u.current=!1;const c=_s(a.current);if(!l.current||!a.current||"clientX"in w&&BR(w,c))return;if(s.current){s.current=!1;return}let f;w.composedPath?f=w.composedPath().indexOf(a.current)>-1:f=!c.documentElement.contains(w.target)||a.current.contains(w.target),!f&&(n||!v)&&i(w)}),m=w=>v=>{u.current=!0;const c=e.props[w];c&&c(v)},y={ref:d};return o!==!1&&(y[o]=m(o)),I.exports.useEffect(()=>{if(o!==!1){const w=tw(o),v=_s(a.current),c=()=>{s.current=!0};return v.addEventListener(w,p),v.addEventListener("touchmove",c),()=>{v.removeEventListener(w,p),v.removeEventListener("touchmove",c)}}},[p,o]),r!==!1&&(y[r]=m(r)),I.exports.useEffect(()=>{if(r!==!1){const w=tw(r),v=_s(a.current);return v.addEventListener(w,p),()=>{v.removeEventListener(w,p)}}},[p,r]),ee(I.exports.Fragment,{children:I.exports.cloneElement(e,y)})}var ln="top",Dn="bottom",Mn="right",un="left",M0="auto",uu=[ln,Dn,Mn,un],Ws="start",Al="end",VR="clippingParents",Gk="viewport",Ra="popper",WR="reference",nw=uu.reduce(function(t,e){return t.concat([e+"-"+Ws,e+"-"+Al])},[]),Xk=[].concat(uu,[M0]).reduce(function(t,e){return t.concat([e,e+"-"+Ws,e+"-"+Al])},[]),HR="beforeRead",qR="read",KR="afterRead",GR="beforeMain",XR="main",YR="afterMain",QR="beforeWrite",JR="write",ZR="afterWrite",e2=[HR,qR,KR,GR,XR,YR,QR,JR,ZR];function yr(t){return t?(t.nodeName||"").toLowerCase():null}function Ln(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function zo(t){var e=Ln(t).Element;return t instanceof e||t instanceof Element}function Nn(t){var e=Ln(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function L0(t){if(typeof ShadowRoot>"u")return!1;var e=Ln(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function t2(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},i=e.attributes[n]||{},o=e.elements[n];!Nn(o)||!yr(o)||(Object.assign(o.style,r),Object.keys(i).forEach(function(s){var a=i[s];a===!1?o.removeAttribute(s):o.setAttribute(s,a===!0?"":a)}))})}function n2(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var i=e.elements[r],o=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),a=s.reduce(function(l,u){return l[u]="",l},{});!Nn(i)||!yr(i)||(Object.assign(i.style,a),Object.keys(o).forEach(function(l){i.removeAttribute(l)}))})}}const r2={name:"applyStyles",enabled:!0,phase:"write",fn:t2,effect:n2,requires:["computeStyles"]};function dr(t){return t.split("-")[0]}var po=Math.max,Sf=Math.min,Hs=Math.round;function Om(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Yk(){return!/^((?!chrome|android).)*safari/i.test(Om())}function qs(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,o=1;e&&Nn(t)&&(i=t.offsetWidth>0&&Hs(r.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Hs(r.height)/t.offsetHeight||1);var s=zo(t)?Ln(t):window,a=s.visualViewport,l=!Yk()&&n,u=(r.left+(l&&a?a.offsetLeft:0))/i,d=(r.top+(l&&a?a.offsetTop:0))/o,p=r.width/i,m=r.height/o;return{width:p,height:m,top:d,right:u+p,bottom:d+m,left:u,x:u,y:d}}function j0(t){var e=qs(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function Qk(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&L0(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Br(t){return Ln(t).getComputedStyle(t)}function i2(t){return["table","td","th"].indexOf(yr(t))>=0}function ji(t){return((zo(t)?t.ownerDocument:t.document)||window.document).documentElement}function bd(t){return yr(t)==="html"?t:t.assignedSlot||t.parentNode||(L0(t)?t.host:null)||ji(t)}function rw(t){return!Nn(t)||Br(t).position==="fixed"?null:t.offsetParent}function o2(t){var e=/firefox/i.test(Om()),n=/Trident/i.test(Om());if(n&&Nn(t)){var r=Br(t);if(r.position==="fixed")return null}var i=bd(t);for(L0(i)&&(i=i.host);Nn(i)&&["html","body"].indexOf(yr(i))<0;){var o=Br(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function cu(t){for(var e=Ln(t),n=rw(t);n&&i2(n)&&Br(n).position==="static";)n=rw(n);return n&&(yr(n)==="html"||yr(n)==="body"&&Br(n).position==="static")?e:n||o2(t)||e}function F0(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function il(t,e,n){return po(t,Sf(e,n))}function s2(t,e,n){var r=il(t,e,n);return r>n?n:r}function Jk(){return{top:0,right:0,bottom:0,left:0}}function Zk(t){return Object.assign({},Jk(),t)}function ex(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var a2=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Zk(typeof e!="number"?e:ex(e,uu))};function l2(t){var e,n=t.state,r=t.name,i=t.options,o=n.elements.arrow,s=n.modifiersData.popperOffsets,a=dr(n.placement),l=F0(a),u=[un,Mn].indexOf(a)>=0,d=u?"height":"width";if(!(!o||!s)){var p=a2(i.padding,n),m=j0(o),y=l==="y"?ln:un,w=l==="y"?Dn:Mn,v=n.rects.reference[d]+n.rects.reference[l]-s[l]-n.rects.popper[d],c=s[l]-n.rects.reference[l],f=cu(o),h=f?l==="y"?f.clientHeight||0:f.clientWidth||0:0,g=v/2-c/2,S=p[y],b=h-m[d]-p[w],E=h/2-m[d]/2+g,k=il(S,E,b),_=l;n.modifiersData[r]=(e={},e[_]=k,e.centerOffset=k-E,e)}}function u2(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||!Qk(e.elements.popper,i)||(e.elements.arrow=i))}const c2={name:"arrow",enabled:!0,phase:"main",fn:l2,effect:u2,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ks(t){return t.split("-")[1]}var f2={top:"auto",right:"auto",bottom:"auto",left:"auto"};function d2(t){var e=t.x,n=t.y,r=window,i=r.devicePixelRatio||1;return{x:Hs(e*i)/i||0,y:Hs(n*i)/i||0}}function iw(t){var e,n=t.popper,r=t.popperRect,i=t.placement,o=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,u=t.adaptive,d=t.roundOffsets,p=t.isFixed,m=s.x,y=m===void 0?0:m,w=s.y,v=w===void 0?0:w,c=typeof d=="function"?d({x:y,y:v}):{x:y,y:v};y=c.x,v=c.y;var f=s.hasOwnProperty("x"),h=s.hasOwnProperty("y"),g=un,S=ln,b=window;if(u){var E=cu(n),k="clientHeight",_="clientWidth";if(E===Ln(n)&&(E=ji(n),Br(E).position!=="static"&&a==="absolute"&&(k="scrollHeight",_="scrollWidth")),E=E,i===ln||(i===un||i===Mn)&&o===Al){S=Dn;var C=p&&E===b&&b.visualViewport?b.visualViewport.height:E[k];v-=C-r.height,v*=l?1:-1}if(i===un||(i===ln||i===Dn)&&o===Al){g=Mn;var x=p&&E===b&&b.visualViewport?b.visualViewport.width:E[_];y-=x-r.width,y*=l?1:-1}}var T=Object.assign({position:a},u&&f2),R=d===!0?d2({x:y,y:v}):{x:y,y:v};if(y=R.x,v=R.y,l){var N;return Object.assign({},T,(N={},N[S]=h?"0":"",N[g]=f?"0":"",N.transform=(b.devicePixelRatio||1)<=1?"translate("+y+"px, "+v+"px)":"translate3d("+y+"px, "+v+"px, 0)",N))}return Object.assign({},T,(e={},e[S]=h?v+"px":"",e[g]=f?y+"px":"",e.transform="",e))}function h2(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,o=n.adaptive,s=o===void 0?!0:o,a=n.roundOffsets,l=a===void 0?!0:a,u={placement:dr(e.placement),variation:Ks(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,iw(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,iw(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const p2={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:h2,data:{}};var lc={passive:!0};function m2(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,o=i===void 0?!0:i,s=r.resize,a=s===void 0?!0:s,l=Ln(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&u.forEach(function(d){d.addEventListener("scroll",n.update,lc)}),a&&l.addEventListener("resize",n.update,lc),function(){o&&u.forEach(function(d){d.removeEventListener("scroll",n.update,lc)}),a&&l.removeEventListener("resize",n.update,lc)}}const g2={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:m2,data:{}};var y2={left:"right",right:"left",bottom:"top",top:"bottom"};function Oc(t){return t.replace(/left|right|bottom|top/g,function(e){return y2[e]})}var v2={start:"end",end:"start"};function ow(t){return t.replace(/start|end/g,function(e){return v2[e]})}function B0(t){var e=Ln(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function V0(t){return qs(ji(t)).left+B0(t).scrollLeft}function w2(t,e){var n=Ln(t),r=ji(t),i=n.visualViewport,o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;var u=Yk();(u||!u&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a+V0(t),y:l}}function S2(t){var e,n=ji(t),r=B0(t),i=(e=t.ownerDocument)==null?void 0:e.body,o=po(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=po(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+V0(t),l=-r.scrollTop;return Br(i||n).direction==="rtl"&&(a+=po(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:a,y:l}}function W0(t){var e=Br(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function tx(t){return["html","body","#document"].indexOf(yr(t))>=0?t.ownerDocument.body:Nn(t)&&W0(t)?t:tx(bd(t))}function ol(t,e){var n;e===void 0&&(e=[]);var r=tx(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),o=Ln(r),s=i?[o].concat(o.visualViewport||[],W0(r)?r:[]):r,a=e.concat(s);return i?a:a.concat(ol(bd(s)))}function Rm(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function b2(t,e){var n=qs(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function sw(t,e,n){return e===Gk?Rm(w2(t,n)):zo(e)?b2(e,n):Rm(S2(ji(t)))}function E2(t){var e=ol(bd(t)),n=["absolute","fixed"].indexOf(Br(t).position)>=0,r=n&&Nn(t)?cu(t):t;return zo(r)?e.filter(function(i){return zo(i)&&Qk(i,r)&&yr(i)!=="body"}):[]}function k2(t,e,n,r){var i=e==="clippingParents"?E2(t):[].concat(e),o=[].concat(i,[n]),s=o[0],a=o.reduce(function(l,u){var d=sw(t,u,r);return l.top=po(d.top,l.top),l.right=Sf(d.right,l.right),l.bottom=Sf(d.bottom,l.bottom),l.left=po(d.left,l.left),l},sw(t,s,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function nx(t){var e=t.reference,n=t.element,r=t.placement,i=r?dr(r):null,o=r?Ks(r):null,s=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case ln:l={x:s,y:e.y-n.height};break;case Dn:l={x:s,y:e.y+e.height};break;case Mn:l={x:e.x+e.width,y:a};break;case un:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var u=i?F0(i):null;if(u!=null){var d=u==="y"?"height":"width";switch(o){case Ws:l[u]=l[u]-(e[d]/2-n[d]/2);break;case Al:l[u]=l[u]+(e[d]/2-n[d]/2);break}}return l}function Nl(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,o=n.strategy,s=o===void 0?t.strategy:o,a=n.boundary,l=a===void 0?VR:a,u=n.rootBoundary,d=u===void 0?Gk:u,p=n.elementContext,m=p===void 0?Ra:p,y=n.altBoundary,w=y===void 0?!1:y,v=n.padding,c=v===void 0?0:v,f=Zk(typeof c!="number"?c:ex(c,uu)),h=m===Ra?WR:Ra,g=t.rects.popper,S=t.elements[w?h:m],b=k2(zo(S)?S:S.contextElement||ji(t.elements.popper),l,d,s),E=qs(t.elements.reference),k=nx({reference:E,element:g,strategy:"absolute",placement:i}),_=Rm(Object.assign({},g,k)),C=m===Ra?_:E,x={top:b.top-C.top+f.top,bottom:C.bottom-b.bottom+f.bottom,left:b.left-C.left+f.left,right:C.right-b.right+f.right},T=t.modifiersData.offset;if(m===Ra&&T){var R=T[i];Object.keys(x).forEach(function(N){var B=[Mn,Dn].indexOf(N)>=0?1:-1,O=[ln,Dn].indexOf(N)>=0?"y":"x";x[N]+=R[O]*B})}return x}function x2(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?Xk:l,d=Ks(r),p=d?a?nw:nw.filter(function(w){return Ks(w)===d}):uu,m=p.filter(function(w){return u.indexOf(w)>=0});m.length===0&&(m=p);var y=m.reduce(function(w,v){return w[v]=Nl(t,{placement:v,boundary:i,rootBoundary:o,padding:s})[dr(v)],w},{});return Object.keys(y).sort(function(w,v){return y[w]-y[v]})}function _2(t){if(dr(t)===M0)return[];var e=Oc(t);return[ow(t),e,ow(e)]}function C2(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,o=i===void 0?!0:i,s=n.altAxis,a=s===void 0?!0:s,l=n.fallbackPlacements,u=n.padding,d=n.boundary,p=n.rootBoundary,m=n.altBoundary,y=n.flipVariations,w=y===void 0?!0:y,v=n.allowedAutoPlacements,c=e.options.placement,f=dr(c),h=f===c,g=l||(h||!w?[Oc(c)]:_2(c)),S=[c].concat(g).reduce(function(it,De){return it.concat(dr(De)===M0?x2(e,{placement:De,boundary:d,rootBoundary:p,padding:u,flipVariations:w,allowedAutoPlacements:v}):De)},[]),b=e.rects.reference,E=e.rects.popper,k=new Map,_=!0,C=S[0],x=0;x<S.length;x++){var T=S[x],R=dr(T),N=Ks(T)===Ws,B=[ln,Dn].indexOf(R)>=0,O=B?"width":"height",U=Nl(e,{placement:T,boundary:d,rootBoundary:p,altBoundary:m,padding:u}),L=B?N?Mn:un:N?Dn:ln;b[O]>E[O]&&(L=Oc(L));var P=Oc(L),A=[];if(o&&A.push(U[R]<=0),a&&A.push(U[L]<=0,U[P]<=0),A.every(function(it){return it})){C=T,_=!1;break}k.set(T,A)}if(_)for(var j=w?3:1,Y=function(De){var Me=S.find(function(Ve){var Ge=k.get(Ve);if(Ge)return Ge.slice(0,De).every(function(Le){return Le})});if(Me)return C=Me,"break"},se=j;se>0;se--){var Ke=Y(se);if(Ke==="break")break}e.placement!==C&&(e.modifiersData[r]._skip=!0,e.placement=C,e.reset=!0)}}const T2={name:"flip",enabled:!0,phase:"main",fn:C2,requiresIfExists:["offset"],data:{_skip:!1}};function aw(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function lw(t){return[ln,Mn,Dn,un].some(function(e){return t[e]>=0})}function z2(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,o=e.modifiersData.preventOverflow,s=Nl(e,{elementContext:"reference"}),a=Nl(e,{altBoundary:!0}),l=aw(s,r),u=aw(a,i,o),d=lw(l),p=lw(u);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:d,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":p})}const I2={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:z2};function P2(t,e,n){var r=dr(t),i=[un,ln].indexOf(r)>=0?-1:1,o=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,s=o[0],a=o[1];return s=s||0,a=(a||0)*i,[un,Mn].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function O2(t){var e=t.state,n=t.options,r=t.name,i=n.offset,o=i===void 0?[0,0]:i,s=Xk.reduce(function(d,p){return d[p]=P2(p,e.rects,o),d},{}),a=s[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=s}const R2={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:O2};function A2(t){var e=t.state,n=t.name;e.modifiersData[n]=nx({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const N2={name:"popperOffsets",enabled:!0,phase:"read",fn:A2,data:{}};function U2(t){return t==="x"?"y":"x"}function $2(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,o=i===void 0?!0:i,s=n.altAxis,a=s===void 0?!1:s,l=n.boundary,u=n.rootBoundary,d=n.altBoundary,p=n.padding,m=n.tether,y=m===void 0?!0:m,w=n.tetherOffset,v=w===void 0?0:w,c=Nl(e,{boundary:l,rootBoundary:u,padding:p,altBoundary:d}),f=dr(e.placement),h=Ks(e.placement),g=!h,S=F0(f),b=U2(S),E=e.modifiersData.popperOffsets,k=e.rects.reference,_=e.rects.popper,C=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,x=typeof C=="number"?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),T=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,R={x:0,y:0};if(!!E){if(o){var N,B=S==="y"?ln:un,O=S==="y"?Dn:Mn,U=S==="y"?"height":"width",L=E[S],P=L+c[B],A=L-c[O],j=y?-_[U]/2:0,Y=h===Ws?k[U]:_[U],se=h===Ws?-_[U]:-k[U],Ke=e.elements.arrow,it=y&&Ke?j0(Ke):{width:0,height:0},De=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Jk(),Me=De[B],Ve=De[O],Ge=il(0,k[U],it[U]),Le=g?k[U]/2-j-Ge-Me-x.mainAxis:Y-Ge-Me-x.mainAxis,Qn=g?-k[U]/2+j+Ge+Ve+x.mainAxis:se+Ge+Ve+x.mainAxis,We=e.elements.arrow&&cu(e.elements.arrow),ma=We?S==="y"?We.clientTop||0:We.clientLeft||0:0,Gt=(N=T==null?void 0:T[S])!=null?N:0,dn=L+Le-Gt-ma,Lt=L+Qn-Gt,br=il(y?Sf(P,dn):P,L,y?po(A,Lt):A);E[S]=br,R[S]=br-L}if(a){var hn,Ct=S==="x"?ln:un,Jn=S==="x"?Dn:Mn,Xt=E[b],Yt=b==="y"?"height":"width",jn=Xt+c[Ct],Zn=Xt-c[Jn],er=[ln,un].indexOf(f)!==-1,jt=(hn=T==null?void 0:T[b])!=null?hn:0,Er=er?jn:Xt-k[Yt]-_[Yt]-jt+x.altAxis,qi=er?Xt+k[Yt]+_[Yt]-jt-x.altAxis:Zn,Jr=y&&er?s2(Er,Xt,qi):il(y?Er:jn,Xt,y?qi:Zn);E[b]=Jr,R[b]=Jr-Xt}e.modifiersData[r]=R}}const D2={name:"preventOverflow",enabled:!0,phase:"main",fn:$2,requiresIfExists:["offset"]};function M2(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function L2(t){return t===Ln(t)||!Nn(t)?B0(t):M2(t)}function j2(t){var e=t.getBoundingClientRect(),n=Hs(e.width)/t.offsetWidth||1,r=Hs(e.height)/t.offsetHeight||1;return n!==1||r!==1}function F2(t,e,n){n===void 0&&(n=!1);var r=Nn(e),i=Nn(e)&&j2(e),o=ji(e),s=qs(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((yr(e)!=="body"||W0(o))&&(a=L2(e)),Nn(e)?(l=qs(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):o&&(l.x=V0(o))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function B2(t){var e=new Map,n=new Set,r=[];t.forEach(function(o){e.set(o.name,o)});function i(o){n.add(o.name);var s=[].concat(o.requires||[],o.requiresIfExists||[]);s.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),r.push(o)}return t.forEach(function(o){n.has(o.name)||i(o)}),r}function V2(t){var e=B2(t);return e2.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function W2(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function H2(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var uw={placement:"bottom",modifiers:[],strategy:"absolute"};function cw(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function q2(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,o=i===void 0?uw:i;return function(a,l,u){u===void 0&&(u=o);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},uw,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},p=[],m=!1,y={state:d,setOptions:function(f){var h=typeof f=="function"?f(d.options):f;v(),d.options=Object.assign({},o,d.options,h),d.scrollParents={reference:zo(a)?ol(a):a.contextElement?ol(a.contextElement):[],popper:ol(l)};var g=V2(H2([].concat(r,d.options.modifiers)));return d.orderedModifiers=g.filter(function(S){return S.enabled}),w(),y.update()},forceUpdate:function(){if(!m){var f=d.elements,h=f.reference,g=f.popper;if(!!cw(h,g)){d.rects={reference:F2(h,cu(g),d.options.strategy==="fixed"),popper:j0(g)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(x){return d.modifiersData[x.name]=Object.assign({},x.data)});for(var S=0;S<d.orderedModifiers.length;S++){if(d.reset===!0){d.reset=!1,S=-1;continue}var b=d.orderedModifiers[S],E=b.fn,k=b.options,_=k===void 0?{}:k,C=b.name;typeof E=="function"&&(d=E({state:d,options:_,name:C,instance:y})||d)}}}},update:W2(function(){return new Promise(function(c){y.forceUpdate(),c(d)})}),destroy:function(){v(),m=!0}};if(!cw(a,l))return y;y.setOptions(u).then(function(c){!m&&u.onFirstUpdate&&u.onFirstUpdate(c)});function w(){d.orderedModifiers.forEach(function(c){var f=c.name,h=c.options,g=h===void 0?{}:h,S=c.effect;if(typeof S=="function"){var b=S({state:d,name:f,instance:y,options:g}),E=function(){};p.push(b||E)}})}function v(){p.forEach(function(c){return c()}),p=[]}return y}}var K2=[g2,N2,p2,r2,R2,T2,D2,c2,I2],G2=q2({defaultModifiers:K2});function X2(t){return typeof t=="function"?t():t}const Y2=I.exports.forwardRef(function(e,n){const{children:r,container:i,disablePortal:o=!1}=e,[s,a]=I.exports.useState(null),l=Ai(I.exports.isValidElement(r)?r.ref:null,n);return Vs(()=>{o||a(X2(i)||document.body)},[i,o]),Vs(()=>{if(s&&!o)return wf(n,s),()=>{wf(n,null)}},[n,s,o]),o?I.exports.isValidElement(r)?I.exports.cloneElement(r,{ref:l}):r:ee(I.exports.Fragment,{children:s&&Bf.exports.createPortal(r,s)})}),Q2=Y2;function J2(t){return Do("MuiPopperUnstyled",t)}la("MuiPopperUnstyled",["root"]);const Z2=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],eA=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function tA(t,e){if(e==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function Am(t){return typeof t=="function"?t():t}const nA=()=>aa({root:["root"]},J2,{}),rA={},iA=I.exports.forwardRef(function(e,n){var r;const{anchorEl:i,children:o,component:s,direction:a,disablePortal:l,modifiers:u,open:d,ownerState:p,placement:m,popperOptions:y,popperRef:w,slotProps:v={},slots:c={},TransitionProps:f}=e,h=Qe(e,Z2),g=I.exports.useRef(null),S=Ai(g,n),b=I.exports.useRef(null),E=Ai(b,w),k=I.exports.useRef(E);Vs(()=>{k.current=E},[E]),I.exports.useImperativeHandle(w,()=>b.current,[]);const _=tA(m,a),[C,x]=I.exports.useState(_);I.exports.useEffect(()=>{b.current&&b.current.forceUpdate()}),Vs(()=>{if(!i||!d)return;const O=P=>{x(P.placement)};Am(i);let U=[{name:"preventOverflow",options:{altBoundary:l}},{name:"flip",options:{altBoundary:l}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:P})=>{O(P)}}];u!=null&&(U=U.concat(u)),y&&y.modifiers!=null&&(U=U.concat(y.modifiers));const L=G2(Am(i),g.current,M({placement:_},y,{modifiers:U}));return k.current(L),()=>{L.destroy(),k.current(null)}},[i,l,u,d,y,_]);const T={placement:C};f!==null&&(T.TransitionProps=f);const R=nA(),N=(r=s!=null?s:c.root)!=null?r:"div",B=Pm({elementType:N,externalSlotProps:v.root,externalForwardedProps:h,additionalProps:{role:"tooltip",ref:S},ownerState:M({},e,p),className:R.root});return ee(N,M({},B,{children:typeof o=="function"?o(T):o}))}),oA=I.exports.forwardRef(function(e,n){const{anchorEl:r,children:i,container:o,direction:s="ltr",disablePortal:a=!1,keepMounted:l=!1,modifiers:u,open:d,placement:p="bottom",popperOptions:m=rA,popperRef:y,style:w,transition:v=!1}=e,c=Qe(e,eA),[f,h]=I.exports.useState(!0),g=()=>{h(!1)},S=()=>{h(!0)};if(!l&&!d&&(!v||f))return null;const b=o||(r?_s(Am(r)).body:void 0);return ee(Q2,{disablePortal:a,container:b,children:ee(iA,M({anchorEl:r,direction:s,disablePortal:a,modifiers:u,ref:n,open:v?!f:d,placement:p,popperOptions:m,popperRef:y},c,{style:M({position:"fixed",top:0,left:0,display:!d&&l&&(!v||f)?"none":null},w),TransitionProps:v?{in:d,onEnter:g,onExited:S}:null,children:i}))})}),sA=oA;function rx(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var aA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,lA=rx(function(t){return aA.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function uA(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function cA(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var fA=function(){function t(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(cA(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=uA(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Ot="-ms-",bf="-moz-",ve="-webkit-",ix="comm",H0="rule",q0="decl",dA="@import",ox="@keyframes",hA=Math.abs,Ed=String.fromCharCode,pA=Object.assign;function mA(t,e){return St(t,0)^45?(((e<<2^St(t,0))<<2^St(t,1))<<2^St(t,2))<<2^St(t,3):0}function sx(t){return t.trim()}function gA(t,e){return(t=e.exec(t))?t[0]:t}function be(t,e,n){return t.replace(e,n)}function Nm(t,e){return t.indexOf(e)}function St(t,e){return t.charCodeAt(e)|0}function Ul(t,e,n){return t.slice(e,n)}function ir(t){return t.length}function K0(t){return t.length}function uc(t,e){return e.push(t),t}function yA(t,e){return t.map(e).join("")}var kd=1,Gs=1,ax=0,fn=0,tt=0,ua="";function xd(t,e,n,r,i,o,s){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:kd,column:Gs,length:s,return:""}}function Aa(t,e){return pA(xd("",null,null,"",null,null,0),t,{length:-t.length},e)}function vA(){return tt}function wA(){return tt=fn>0?St(ua,--fn):0,Gs--,tt===10&&(Gs=1,kd--),tt}function wn(){return tt=fn<ax?St(ua,fn++):0,Gs++,tt===10&&(Gs=1,kd++),tt}function hr(){return St(ua,fn)}function Rc(){return fn}function fu(t,e){return Ul(ua,t,e)}function $l(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function lx(t){return kd=Gs=1,ax=ir(ua=t),fn=0,[]}function ux(t){return ua="",t}function Ac(t){return sx(fu(fn-1,Um(t===91?t+2:t===40?t+1:t)))}function SA(t){for(;(tt=hr())&&tt<33;)wn();return $l(t)>2||$l(tt)>3?"":" "}function bA(t,e){for(;--e&&wn()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return fu(t,Rc()+(e<6&&hr()==32&&wn()==32))}function Um(t){for(;wn();)switch(tt){case t:return fn;case 34:case 39:t!==34&&t!==39&&Um(tt);break;case 40:t===41&&Um(t);break;case 92:wn();break}return fn}function EA(t,e){for(;wn()&&t+tt!==47+10;)if(t+tt===42+42&&hr()===47)break;return"/*"+fu(e,fn-1)+"*"+Ed(t===47?t:wn())}function kA(t){for(;!$l(hr());)wn();return fu(t,fn)}function xA(t){return ux(Nc("",null,null,null,[""],t=lx(t),0,[0],t))}function Nc(t,e,n,r,i,o,s,a,l){for(var u=0,d=0,p=s,m=0,y=0,w=0,v=1,c=1,f=1,h=0,g="",S=i,b=o,E=r,k=g;c;)switch(w=h,h=wn()){case 40:if(w!=108&&St(k,p-1)==58){Nm(k+=be(Ac(h),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:k+=Ac(h);break;case 9:case 10:case 13:case 32:k+=SA(w);break;case 92:k+=bA(Rc()-1,7);continue;case 47:switch(hr()){case 42:case 47:uc(_A(EA(wn(),Rc()),e,n),l);break;default:k+="/"}break;case 123*v:a[u++]=ir(k)*f;case 125*v:case 59:case 0:switch(h){case 0:case 125:c=0;case 59+d:y>0&&ir(k)-p&&uc(y>32?dw(k+";",r,n,p-1):dw(be(k," ","")+";",r,n,p-2),l);break;case 59:k+=";";default:if(uc(E=fw(k,e,n,u,d,i,a,g,S=[],b=[],p),o),h===123)if(d===0)Nc(k,e,E,E,S,o,p,a,b);else switch(m===99&&St(k,3)===110?100:m){case 100:case 109:case 115:Nc(t,E,E,r&&uc(fw(t,E,E,0,0,i,a,g,i,S=[],p),b),i,b,p,a,r?S:b);break;default:Nc(k,E,E,E,[""],b,0,a,b)}}u=d=y=0,v=f=1,g=k="",p=s;break;case 58:p=1+ir(k),y=w;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&wA()==125)continue}switch(k+=Ed(h),h*v){case 38:f=d>0?1:(k+="\f",-1);break;case 44:a[u++]=(ir(k)-1)*f,f=1;break;case 64:hr()===45&&(k+=Ac(wn())),m=hr(),d=p=ir(g=k+=kA(Rc())),h++;break;case 45:w===45&&ir(k)==2&&(v=0)}}return o}function fw(t,e,n,r,i,o,s,a,l,u,d){for(var p=i-1,m=i===0?o:[""],y=K0(m),w=0,v=0,c=0;w<r;++w)for(var f=0,h=Ul(t,p+1,p=hA(v=s[w])),g=t;f<y;++f)(g=sx(v>0?m[f]+" "+h:be(h,/&\f/g,m[f])))&&(l[c++]=g);return xd(t,e,n,i===0?H0:a,l,u,d)}function _A(t,e,n){return xd(t,e,n,ix,Ed(vA()),Ul(t,2,-2),0)}function dw(t,e,n,r){return xd(t,e,n,q0,Ul(t,0,r),Ul(t,r+1,-1),r)}function Cs(t,e){for(var n="",r=K0(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function CA(t,e,n,r){switch(t.type){case dA:case q0:return t.return=t.return||t.value;case ix:return"";case ox:return t.return=t.value+"{"+Cs(t.children,r)+"}";case H0:t.value=t.props.join(",")}return ir(n=Cs(t.children,r))?t.return=t.value+"{"+n+"}":""}function TA(t){var e=K0(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function zA(t){return function(e){e.root||(e=e.return)&&t(e)}}var IA=function(e,n,r){for(var i=0,o=0;i=o,o=hr(),i===38&&o===12&&(n[r]=1),!$l(o);)wn();return fu(e,fn)},PA=function(e,n){var r=-1,i=44;do switch($l(i)){case 0:i===38&&hr()===12&&(n[r]=1),e[r]+=IA(fn-1,n,r);break;case 2:e[r]+=Ac(i);break;case 4:if(i===44){e[++r]=hr()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Ed(i)}while(i=wn());return e},OA=function(e,n){return ux(PA(lx(e),n))},hw=new WeakMap,RA=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!hw.get(r))&&!i){hw.set(e,!0);for(var o=[],s=OA(n,o),a=r.props,l=0,u=0;l<s.length;l++)for(var d=0;d<a.length;d++,u++)e.props[u]=o[l]?s[l].replace(/&\f/g,a[d]):a[d]+" "+s[l]}}},AA=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function cx(t,e){switch(mA(t,e)){case 5103:return ve+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ve+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ve+t+bf+t+Ot+t+t;case 6828:case 4268:return ve+t+Ot+t+t;case 6165:return ve+t+Ot+"flex-"+t+t;case 5187:return ve+t+be(t,/(\w+).+(:[^]+)/,ve+"box-$1$2"+Ot+"flex-$1$2")+t;case 5443:return ve+t+Ot+"flex-item-"+be(t,/flex-|-self/,"")+t;case 4675:return ve+t+Ot+"flex-line-pack"+be(t,/align-content|flex-|-self/,"")+t;case 5548:return ve+t+Ot+be(t,"shrink","negative")+t;case 5292:return ve+t+Ot+be(t,"basis","preferred-size")+t;case 6060:return ve+"box-"+be(t,"-grow","")+ve+t+Ot+be(t,"grow","positive")+t;case 4554:return ve+be(t,/([^-])(transform)/g,"$1"+ve+"$2")+t;case 6187:return be(be(be(t,/(zoom-|grab)/,ve+"$1"),/(image-set)/,ve+"$1"),t,"")+t;case 5495:case 3959:return be(t,/(image-set\([^]*)/,ve+"$1$`$1");case 4968:return be(be(t,/(.+:)(flex-)?(.*)/,ve+"box-pack:$3"+Ot+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ve+t+t;case 4095:case 3583:case 4068:case 2532:return be(t,/(.+)-inline(.+)/,ve+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ir(t)-1-e>6)switch(St(t,e+1)){case 109:if(St(t,e+4)!==45)break;case 102:return be(t,/(.+:)(.+)-([^]+)/,"$1"+ve+"$2-$3$1"+bf+(St(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Nm(t,"stretch")?cx(be(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(St(t,e+1)!==115)break;case 6444:switch(St(t,ir(t)-3-(~Nm(t,"!important")&&10))){case 107:return be(t,":",":"+ve)+t;case 101:return be(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ve+(St(t,14)===45?"inline-":"")+"box$3$1"+ve+"$2$3$1"+Ot+"$2box$3")+t}break;case 5936:switch(St(t,e+11)){case 114:return ve+t+Ot+be(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ve+t+Ot+be(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ve+t+Ot+be(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return ve+t+Ot+t+t}return t}var NA=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case q0:e.return=cx(e.value,e.length);break;case ox:return Cs([Aa(e,{value:be(e.value,"@","@"+ve)})],i);case H0:if(e.length)return yA(e.props,function(o){switch(gA(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Cs([Aa(e,{props:[be(o,/:(read-\w+)/,":"+bf+"$1")]})],i);case"::placeholder":return Cs([Aa(e,{props:[be(o,/:(plac\w+)/,":"+ve+"input-$1")]}),Aa(e,{props:[be(o,/:(plac\w+)/,":"+bf+"$1")]}),Aa(e,{props:[be(o,/:(plac\w+)/,Ot+"input-$1")]})],i)}return""})}},UA=[NA],$A=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var c=v.getAttribute("data-emotion");c.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=e.stylisPlugins||UA,o={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var c=v.getAttribute("data-emotion").split(" "),f=1;f<c.length;f++)o[c[f]]=!0;a.push(v)});var l,u=[RA,AA];{var d,p=[CA,zA(function(v){d.insert(v)})],m=TA(u.concat(i,p)),y=function(c){return Cs(xA(c),m)};l=function(c,f,h,g){d=h,y(c?c+"{"+f.styles+"}":f.styles),g&&(w.inserted[f.name]=!0)}}var w={key:n,sheet:new fA({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:l};return w.sheet.hydrate(a),w},fx={exports:{}},_e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gt=typeof Symbol=="function"&&Symbol.for,G0=gt?Symbol.for("react.element"):60103,X0=gt?Symbol.for("react.portal"):60106,_d=gt?Symbol.for("react.fragment"):60107,Cd=gt?Symbol.for("react.strict_mode"):60108,Td=gt?Symbol.for("react.profiler"):60114,zd=gt?Symbol.for("react.provider"):60109,Id=gt?Symbol.for("react.context"):60110,Y0=gt?Symbol.for("react.async_mode"):60111,Pd=gt?Symbol.for("react.concurrent_mode"):60111,Od=gt?Symbol.for("react.forward_ref"):60112,Rd=gt?Symbol.for("react.suspense"):60113,DA=gt?Symbol.for("react.suspense_list"):60120,Ad=gt?Symbol.for("react.memo"):60115,Nd=gt?Symbol.for("react.lazy"):60116,MA=gt?Symbol.for("react.block"):60121,LA=gt?Symbol.for("react.fundamental"):60117,jA=gt?Symbol.for("react.responder"):60118,FA=gt?Symbol.for("react.scope"):60119;function _n(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case G0:switch(t=t.type,t){case Y0:case Pd:case _d:case Td:case Cd:case Rd:return t;default:switch(t=t&&t.$$typeof,t){case Id:case Od:case Nd:case Ad:case zd:return t;default:return e}}case X0:return e}}}function dx(t){return _n(t)===Pd}_e.AsyncMode=Y0;_e.ConcurrentMode=Pd;_e.ContextConsumer=Id;_e.ContextProvider=zd;_e.Element=G0;_e.ForwardRef=Od;_e.Fragment=_d;_e.Lazy=Nd;_e.Memo=Ad;_e.Portal=X0;_e.Profiler=Td;_e.StrictMode=Cd;_e.Suspense=Rd;_e.isAsyncMode=function(t){return dx(t)||_n(t)===Y0};_e.isConcurrentMode=dx;_e.isContextConsumer=function(t){return _n(t)===Id};_e.isContextProvider=function(t){return _n(t)===zd};_e.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===G0};_e.isForwardRef=function(t){return _n(t)===Od};_e.isFragment=function(t){return _n(t)===_d};_e.isLazy=function(t){return _n(t)===Nd};_e.isMemo=function(t){return _n(t)===Ad};_e.isPortal=function(t){return _n(t)===X0};_e.isProfiler=function(t){return _n(t)===Td};_e.isStrictMode=function(t){return _n(t)===Cd};_e.isSuspense=function(t){return _n(t)===Rd};_e.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===_d||t===Pd||t===Td||t===Cd||t===Rd||t===DA||typeof t=="object"&&t!==null&&(t.$$typeof===Nd||t.$$typeof===Ad||t.$$typeof===zd||t.$$typeof===Id||t.$$typeof===Od||t.$$typeof===LA||t.$$typeof===jA||t.$$typeof===FA||t.$$typeof===MA)};_e.typeOf=_n;(function(t){t.exports=_e})(fx);var hx=fx.exports,BA={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},VA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},px={};px[hx.ForwardRef]=BA;px[hx.Memo]=VA;var WA=!0;function HA(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var mx=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||WA===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},qA=function(e,n,r){mx(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+i:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function KA(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var GA={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},XA=/[A-Z]|^ms/g,YA=/_EMO_([^_]+?)_([^]*?)_EMO_/g,gx=function(e){return e.charCodeAt(1)===45},pw=function(e){return e!=null&&typeof e!="boolean"},ip=rx(function(t){return gx(t)?t:t.replace(XA,"-$&").toLowerCase()}),mw=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(YA,function(r,i,o){return or={name:i,styles:o,next:or},i})}return GA[e]!==1&&!gx(e)&&typeof n=="number"&&n!==0?n+"px":n};function Dl(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return or={name:n.name,styles:n.styles,next:or},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)or={name:r.name,styles:r.styles,next:or},r=r.next;var i=n.styles+";";return i}return QA(t,e,n)}case"function":{if(t!==void 0){var o=or,s=n(t);return or=o,Dl(t,e,s)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function QA(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Dl(t,e,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")e!=null&&e[s]!==void 0?r+=o+"{"+e[s]+"}":pw(s)&&(r+=ip(o)+":"+mw(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var a=0;a<s.length;a++)pw(s[a])&&(r+=ip(o)+":"+mw(o,s[a])+";");else{var l=Dl(t,e,s);switch(o){case"animation":case"animationName":{r+=ip(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var gw=/label:\s*([^\s;\n{]+)\s*(;|$)/g,or,yx=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,o="";or=void 0;var s=e[0];s==null||s.raw===void 0?(i=!1,o+=Dl(r,n,s)):o+=s[0];for(var a=1;a<e.length;a++)o+=Dl(r,n,e[a]),i&&(o+=s[a]);gw.lastIndex=0;for(var l="",u;(u=gw.exec(o))!==null;)l+="-"+u[1];var d=KA(o)+l;return{name:d,styles:o,next:or}},JA=function(e){return e()},ZA=Rs["useInsertionEffect"]?Rs["useInsertionEffect"]:!1,eN=ZA||JA,vx=I.exports.createContext(typeof HTMLElement<"u"?$A({key:"css"}):null);vx.Provider;var tN=function(e){return I.exports.forwardRef(function(n,r){var i=I.exports.useContext(vx);return e(n,i,r)})},nN=I.exports.createContext({});function Q0(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return yx(e)}var wx=function(){var e=Q0.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},rN=lA,iN=function(e){return e!=="theme"},yw=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?rN:iN},vw=function(e,n,r){var i;if(n){var o=n.shouldForwardProp;i=e.__emotion_forwardProp&&o?function(s){return e.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},oN=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return mx(n,r,i),eN(function(){return qA(n,r,i)}),null},sN=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,o,s;n!==void 0&&(o=n.label,s=n.target);var a=vw(e,n,r),l=a||yw(i),u=!l("as");return function(){var d=arguments,p=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(o!==void 0&&p.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)p.push.apply(p,d);else{p.push(d[0][0]);for(var m=d.length,y=1;y<m;y++)p.push(d[y],d[0][y])}var w=tN(function(v,c,f){var h=u&&v.as||i,g="",S=[],b=v;if(v.theme==null){b={};for(var E in v)b[E]=v[E];b.theme=I.exports.useContext(nN)}typeof v.className=="string"?g=HA(c.registered,S,v.className):v.className!=null&&(g=v.className+" ");var k=yx(p.concat(S),c.registered,b);g+=c.key+"-"+k.name,s!==void 0&&(g+=" "+s);var _=u&&a===void 0?yw(h):l,C={};for(var x in v)u&&x==="as"||_(x)&&(C[x]=v[x]);return C.className=g,C.ref=f,I.exports.createElement(I.exports.Fragment,null,I.exports.createElement(oN,{cache:c,serialized:k,isStringTag:typeof h=="string"}),I.exports.createElement(h,C))});return w.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",w.defaultProps=e.defaultProps,w.__emotion_real=w,w.__emotion_base=i,w.__emotion_styles=p,w.__emotion_forwardProp=a,Object.defineProperty(w,"toString",{value:function(){return"."+s}}),w.withComponent=function(v,c){return t(v,M({},n,c,{shouldForwardProp:vw(w,c,!0)})).apply(void 0,p)},w}},aN=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],$m=sN.bind();aN.forEach(function(t){$m[t]=$m(t)});const lN=$m;/** @license MUI v5.10.8
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function uN(t,e){return lN(t,e)}const cN=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))};function sl(t,e){return e?Ur(t,e,{clone:!1}):t}const J0={xs:0,sm:600,md:900,lg:1200,xl:1536},ww={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${J0[t]}px)`};function Fi(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const o=r.breakpoints||ww;return e.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(e[l]),s),{})}if(typeof e=="object"){const o=r.breakpoints||ww;return Object.keys(e).reduce((s,a)=>{if(Object.keys(o.values||J0).indexOf(a)!==-1){const l=o.up(a);s[l]=n(e[a],a)}else{const l=a;s[l]=e[l]}return s},{})}return n(e)}function fN(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const o=t.up(i);return r[o]={},r},{}))||{}}function dN(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function Z0(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function Sw(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=Z0(t,n)||r,e&&(i=e(i,r)),i}function K(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,o=s=>{if(s[e]==null)return null;const a=s[e],l=s.theme,u=Z0(l,r)||{};return Fi(s,a,p=>{let m=Sw(u,i,p);return p===m&&typeof p=="string"&&(m=Sw(u,i,`${e}${p==="default"?"":ze(p)}`,p)),n===!1?m:{[n]:m}})};return o.propTypes={},o.filterProps=[e],o}function Bi(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>e[o]?sl(i,e[o](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function hN(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const pN={m:"margin",p:"padding"},mN={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},bw={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},gN=hN(t=>{if(t.length>2)if(bw[t])t=bw[t];else return[t];const[e,n]=t.split(""),r=pN[e],i=mN[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),yN=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],vN=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],Sx=[...yN,...vN];function du(t,e,n,r){var i;const o=(i=Z0(t,e,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function bx(t){return du(t,"spacing",8)}function hu(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function wN(t,e){return n=>t.reduce((r,i)=>(r[i]=hu(e,n),r),{})}function SN(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=gN(n),o=wN(i,r),s=t[n];return Fi(t,s,o)}function bN(t,e){const n=bx(t.theme);return Object.keys(t).map(r=>SN(t,e,r,n)).reduce(sl,{})}function Ud(t){return bN(t,Sx)}Ud.propTypes={};Ud.filterProps=Sx;function pu(t){return typeof t!="number"?t:`${t}px solid`}const EN=K({prop:"border",themeKey:"borders",transform:pu}),kN=K({prop:"borderTop",themeKey:"borders",transform:pu}),xN=K({prop:"borderRight",themeKey:"borders",transform:pu}),_N=K({prop:"borderBottom",themeKey:"borders",transform:pu}),CN=K({prop:"borderLeft",themeKey:"borders",transform:pu}),TN=K({prop:"borderColor",themeKey:"palette"}),zN=K({prop:"borderTopColor",themeKey:"palette"}),IN=K({prop:"borderRightColor",themeKey:"palette"}),PN=K({prop:"borderBottomColor",themeKey:"palette"}),ON=K({prop:"borderLeftColor",themeKey:"palette"}),ey=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=du(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:hu(e,r)});return Fi(t,t.borderRadius,n)}return null};ey.propTypes={};ey.filterProps=["borderRadius"];const RN=Bi(EN,kN,xN,_N,CN,TN,zN,IN,PN,ON,ey),Ex=RN,AN=K({prop:"displayPrint",cssProperty:!1,transform:t=>({"@media print":{display:t}})}),NN=K({prop:"display"}),UN=K({prop:"overflow"}),$N=K({prop:"textOverflow"}),DN=K({prop:"visibility"}),MN=K({prop:"whiteSpace"}),kx=Bi(AN,NN,UN,$N,DN,MN),LN=K({prop:"flexBasis"}),jN=K({prop:"flexDirection"}),FN=K({prop:"flexWrap"}),BN=K({prop:"justifyContent"}),VN=K({prop:"alignItems"}),WN=K({prop:"alignContent"}),HN=K({prop:"order"}),qN=K({prop:"flex"}),KN=K({prop:"flexGrow"}),GN=K({prop:"flexShrink"}),XN=K({prop:"alignSelf"}),YN=K({prop:"justifyItems"}),QN=K({prop:"justifySelf"}),JN=Bi(LN,jN,FN,BN,VN,WN,HN,qN,KN,GN,XN,YN,QN),xx=JN,ty=t=>{if(t.gap!==void 0&&t.gap!==null){const e=du(t.theme,"spacing",8),n=r=>({gap:hu(e,r)});return Fi(t,t.gap,n)}return null};ty.propTypes={};ty.filterProps=["gap"];const ny=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=du(t.theme,"spacing",8),n=r=>({columnGap:hu(e,r)});return Fi(t,t.columnGap,n)}return null};ny.propTypes={};ny.filterProps=["columnGap"];const ry=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=du(t.theme,"spacing",8),n=r=>({rowGap:hu(e,r)});return Fi(t,t.rowGap,n)}return null};ry.propTypes={};ry.filterProps=["rowGap"];const ZN=K({prop:"gridColumn"}),eU=K({prop:"gridRow"}),tU=K({prop:"gridAutoFlow"}),nU=K({prop:"gridAutoColumns"}),rU=K({prop:"gridAutoRows"}),iU=K({prop:"gridTemplateColumns"}),oU=K({prop:"gridTemplateRows"}),sU=K({prop:"gridTemplateAreas"}),aU=K({prop:"gridArea"}),lU=Bi(ty,ny,ry,ZN,eU,tU,nU,rU,iU,oU,sU,aU),_x=lU;function iy(t,e){return e==="grey"?e:t}const uU=K({prop:"color",themeKey:"palette",transform:iy}),cU=K({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:iy}),fU=K({prop:"backgroundColor",themeKey:"palette",transform:iy}),dU=Bi(uU,cU,fU),Cx=dU,hU=K({prop:"position"}),pU=K({prop:"zIndex",themeKey:"zIndex"}),mU=K({prop:"top"}),gU=K({prop:"right"}),yU=K({prop:"bottom"}),vU=K({prop:"left"}),Tx=Bi(hU,pU,mU,gU,yU,vU),wU=K({prop:"boxShadow",themeKey:"shadows"}),zx=wU;function Vi(t){return t<=1&&t!==0?`${t*100}%`:t}const SU=K({prop:"width",transform:Vi}),Ix=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i,o;return{maxWidth:((r=t.theme)==null||(i=r.breakpoints)==null||(o=i.values)==null?void 0:o[n])||J0[n]||Vi(n)}};return Fi(t,t.maxWidth,e)}return null};Ix.filterProps=["maxWidth"];const bU=K({prop:"minWidth",transform:Vi}),EU=K({prop:"height",transform:Vi}),kU=K({prop:"maxHeight",transform:Vi}),xU=K({prop:"minHeight",transform:Vi});K({prop:"size",cssProperty:"width",transform:Vi});K({prop:"size",cssProperty:"height",transform:Vi});const _U=K({prop:"boxSizing"}),CU=Bi(SU,Ix,bU,EU,kU,xU,_U),Px=CU,TU=K({prop:"fontFamily",themeKey:"typography"}),zU=K({prop:"fontSize",themeKey:"typography"}),IU=K({prop:"fontStyle",themeKey:"typography"}),PU=K({prop:"fontWeight",themeKey:"typography"}),OU=K({prop:"letterSpacing"}),RU=K({prop:"textTransform"}),AU=K({prop:"lineHeight"}),NU=K({prop:"textAlign"}),UU=K({prop:"typography",cssProperty:!1,themeKey:"typography"}),$U=Bi(UU,TU,zU,IU,PU,OU,AU,NU,RU),Ox=$U,Ew={borders:Ex.filterProps,display:kx.filterProps,flexbox:xx.filterProps,grid:_x.filterProps,positions:Tx.filterProps,palette:Cx.filterProps,shadows:zx.filterProps,sizing:Px.filterProps,spacing:Ud.filterProps,typography:Ox.filterProps},Rx={borders:Ex,display:kx,flexbox:xx,grid:_x,positions:Tx,palette:Cx,shadows:zx,sizing:Px,spacing:Ud,typography:Ox};Object.keys(Ew).reduce((t,e)=>(Ew[e].forEach(n=>{t[n]=Rx[e]}),t),{});function DU(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function MU(t,e){return typeof t=="function"?t(e):t}function LU(t=Rx){const e=Object.keys(t).reduce((i,o)=>(t[o].filterProps.forEach(s=>{i[s]=t[o]}),i),{});function n(i,o,s){const a={[i]:o,theme:s},l=e[i];return l?l(a):{[i]:o}}function r(i){const{sx:o,theme:s={}}=i||{};if(!o)return null;function a(l){let u=l;if(typeof l=="function")u=l(s);else if(typeof l!="object")return l;if(!u)return null;const d=fN(s.breakpoints),p=Object.keys(d);let m=d;return Object.keys(u).forEach(y=>{const w=MU(u[y],s);if(w!=null)if(typeof w=="object")if(e[y])m=sl(m,n(y,w,s));else{const v=Fi({theme:s},w,c=>({[y]:c}));DU(v,w)?m[y]=r({sx:w,theme:s}):m=sl(m,v)}else m=sl(m,n(y,w,s))}),dN(p,m)}return Array.isArray(o)?o.map(a):a(o)}return r}const Ax=LU();Ax.filterProps=["sx"];const jU=Ax,FU=["values","unit","step"],BU=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>M({},n,{[r.key]:r.val}),{})};function VU(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=Qe(t,FU),o=BU(e),s=Object.keys(o);function a(m){return`@media (min-width:${typeof e[m]=="number"?e[m]:m}${n})`}function l(m){return`@media (max-width:${(typeof e[m]=="number"?e[m]:m)-r/100}${n})`}function u(m,y){const w=s.indexOf(y);return`@media (min-width:${typeof e[m]=="number"?e[m]:m}${n}) and (max-width:${(w!==-1&&typeof e[s[w]]=="number"?e[s[w]]:y)-r/100}${n})`}function d(m){return s.indexOf(m)+1<s.length?u(m,s[s.indexOf(m)+1]):a(m)}function p(m){const y=s.indexOf(m);return y===0?a(s[1]):y===s.length-1?l(s[y]):u(m,s[s.indexOf(m)+1]).replace("@media","@media not all and")}return M({keys:s,values:o,up:a,down:l,between:u,only:d,not:p,unit:n},i)}const WU={borderRadius:4},HU=WU;function qU(t=8){if(t.mui)return t;const e=bx({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=e(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}const KU=["breakpoints","palette","spacing","shape"];function oy(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:o={}}=t,s=Qe(t,KU),a=VU(n),l=qU(i);let u=Ur({breakpoints:a,direction:"ltr",components:{},palette:M({mode:"light"},r),spacing:l,shape:M({},HU,o)},s);return u=e.reduce((d,p)=>Ur(d,p),u),u}const GU=I.exports.createContext(null),XU=GU;function YU(){return I.exports.useContext(XU)}function QU(t){return Object.keys(t).length===0}function Nx(t=null){const e=YU();return!e||QU(e)?t:e}const JU=oy();function Ux(t=JU){return Nx(t)}const ZU=["variant"];function kw(t){return t.length===0}function $x(t){const{variant:e}=t,n=Qe(t,ZU);let r=e||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=kw(r)?t[i]:ze(t[i]):r+=`${kw(r)?i:ze(i)}${ze(t[i].toString())}`}),r}const e$=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],t$=["theme"],n$=["theme"];function Na(t){return Object.keys(t).length===0}function r$(t){return typeof t=="string"&&t.charCodeAt(0)>96}const i$=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,o$=(t,e)=>{let n=[];e&&e.components&&e.components[t]&&e.components[t].variants&&(n=e.components[t].variants);const r={};return n.forEach(i=>{const o=$x(i.props);r[o]=i.style}),r},s$=(t,e,n,r)=>{var i,o;const{ownerState:s={}}=t,a=[],l=n==null||(i=n.components)==null||(o=i[r])==null?void 0:o.variants;return l&&l.forEach(u=>{let d=!0;Object.keys(u.props).forEach(p=>{s[p]!==u.props[p]&&t[p]!==u.props[p]&&(d=!1)}),d&&a.push(e[$x(u.props)])}),a};function Uc(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const a$=oy();function l$(t={}){const{defaultTheme:e=a$,rootShouldForwardProp:n=Uc,slotShouldForwardProp:r=Uc,styleFunctionSx:i=jU}=t,o=s=>{const a=Na(s.theme)?e:s.theme;return i(M({},s,{theme:a}))};return o.__mui_systemSx=!0,(s,a={})=>{cN(s,S=>S.filter(b=>!(b!=null&&b.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:d,skipSx:p,overridesResolver:m}=a,y=Qe(a,e$),w=d!==void 0?d:u&&u!=="Root"||!1,v=p||!1;let c,f=Uc;u==="Root"?f=n:u?f=r:r$(s)&&(f=void 0);const h=uN(s,M({shouldForwardProp:f,label:c},y)),g=(S,...b)=>{const E=b?b.map(x=>typeof x=="function"&&x.__emotion_real!==x?T=>{let{theme:R}=T,N=Qe(T,t$);return x(M({theme:Na(R)?e:R},N))}:x):[];let k=S;l&&m&&E.push(x=>{const T=Na(x.theme)?e:x.theme,R=i$(l,T);if(R){const N={};return Object.entries(R).forEach(([B,O])=>{N[B]=typeof O=="function"?O(M({},x,{theme:T})):O}),m(x,N)}return null}),l&&!w&&E.push(x=>{const T=Na(x.theme)?e:x.theme;return s$(x,o$(l,T),T,l)}),v||E.push(o);const _=E.length-b.length;if(Array.isArray(S)&&_>0){const x=new Array(_).fill("");k=[...S,...x],k.raw=[...S.raw,...x]}else typeof S=="function"&&S.__emotion_real!==S&&(k=x=>{let{theme:T}=x,R=Qe(x,n$);return S(M({theme:Na(T)?e:T},R))});return h(k,...E)};return h.withConfig&&(g.withConfig=h.withConfig),g}}function u$(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:zR(e.components[n].defaultProps,r)}function c$({props:t,name:e,defaultTheme:n}){const r=Ux(n);return u$({theme:r,name:e,props:t})}function sy(t,e=0,n=1){return Math.min(Math.max(e,t),n)}function f$(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Io(t){if(t.type)return t;if(t.charAt(0)==="#")return Io(f$(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Bs(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(Bs(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function $d(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function d$(t){t=Io(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,o=r*Math.min(i,1-i),s=(u,d=(u+n/30)%12)=>i-o*Math.max(Math.min(d-3,9-d,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),$d({type:a,values:l})}function xw(t){t=Io(t);let e=t.type==="hsl"||t.type==="hsla"?Io(d$(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function h$(t,e){const n=xw(t),r=xw(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Dx(t,e){return t=Io(t),e=sy(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,$d(t)}function p$(t,e){if(t=Io(t),e=sy(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return $d(t)}function m$(t,e){if(t=Io(t),e=sy(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return $d(t)}function g$(t,e){return M({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const y$={black:"#000",white:"#fff"},Ml=y$,v$={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},w$=v$,S$={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Xo=S$,b$={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Yo=b$,E$={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Ua=E$,k$={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Qo=k$,x$={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Jo=x$,_$={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Zo=_$,C$=["mode","contrastThreshold","tonalOffset"],_w={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Ml.white,default:Ml.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},op={text:{primary:Ml.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Ml.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Cw(t,e,n,r){const i=r.light||r,o=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=m$(t.main,i):e==="dark"&&(t.dark=p$(t.main,o)))}function T$(t="light"){return t==="dark"?{main:Qo[200],light:Qo[50],dark:Qo[400]}:{main:Qo[700],light:Qo[400],dark:Qo[800]}}function z$(t="light"){return t==="dark"?{main:Xo[200],light:Xo[50],dark:Xo[400]}:{main:Xo[500],light:Xo[300],dark:Xo[700]}}function I$(t="light"){return t==="dark"?{main:Yo[500],light:Yo[300],dark:Yo[700]}:{main:Yo[700],light:Yo[400],dark:Yo[800]}}function P$(t="light"){return t==="dark"?{main:Jo[400],light:Jo[300],dark:Jo[700]}:{main:Jo[700],light:Jo[500],dark:Jo[900]}}function O$(t="light"){return t==="dark"?{main:Zo[400],light:Zo[300],dark:Zo[700]}:{main:Zo[800],light:Zo[500],dark:Zo[900]}}function R$(t="light"){return t==="dark"?{main:Ua[400],light:Ua[300],dark:Ua[700]}:{main:"#ed6c02",light:Ua[500],dark:Ua[900]}}function A$(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=Qe(t,C$),o=t.primary||T$(e),s=t.secondary||z$(e),a=t.error||I$(e),l=t.info||P$(e),u=t.success||O$(e),d=t.warning||R$(e);function p(v){return h$(v,op.text.primary)>=n?op.text.primary:_w.text.primary}const m=({color:v,name:c,mainShade:f=500,lightShade:h=300,darkShade:g=700})=>{if(v=M({},v),!v.main&&v[f]&&(v.main=v[f]),!v.hasOwnProperty("main"))throw new Error(Bs(11,c?` (${c})`:"",f));if(typeof v.main!="string")throw new Error(Bs(12,c?` (${c})`:"",JSON.stringify(v.main)));return Cw(v,"light",h,r),Cw(v,"dark",g,r),v.contrastText||(v.contrastText=p(v.main)),v},y={dark:op,light:_w};return Ur(M({common:M({},Ml),mode:e,primary:m({color:o,name:"primary"}),secondary:m({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:m({color:a,name:"error"}),warning:m({color:d,name:"warning"}),info:m({color:l,name:"info"}),success:m({color:u,name:"success"}),grey:w$,contrastThreshold:n,getContrastText:p,augmentColor:m,tonalOffset:r},y[e]),i)}const N$=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function U$(t){return Math.round(t*1e5)/1e5}const Tw={textTransform:"uppercase"},zw='"Roboto", "Helvetica", "Arial", sans-serif';function $$(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=zw,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:d,pxToRem:p}=n,m=Qe(n,N$),y=i/14,w=p||(f=>`${f/u*y}rem`),v=(f,h,g,S,b)=>M({fontFamily:r,fontWeight:f,fontSize:w(h),lineHeight:g},r===zw?{letterSpacing:`${U$(S/h)}em`}:{},b,d),c={h1:v(o,96,1.167,-1.5),h2:v(o,60,1.2,-.5),h3:v(s,48,1.167,0),h4:v(s,34,1.235,.25),h5:v(s,24,1.334,0),h6:v(a,20,1.6,.15),subtitle1:v(s,16,1.75,.15),subtitle2:v(a,14,1.57,.1),body1:v(s,16,1.5,.15),body2:v(s,14,1.43,.15),button:v(a,14,1.75,.4,Tw),caption:v(s,12,1.66,.4),overline:v(s,12,2.66,1,Tw)};return Ur(M({htmlFontSize:u,pxToRem:w,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},c),m,{clone:!1})}const D$=.2,M$=.14,L$=.12;function Ae(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${D$})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${M$})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${L$})`].join(",")}const j$=["none",Ae(0,2,1,-1,0,1,1,0,0,1,3,0),Ae(0,3,1,-2,0,2,2,0,0,1,5,0),Ae(0,3,3,-2,0,3,4,0,0,1,8,0),Ae(0,2,4,-1,0,4,5,0,0,1,10,0),Ae(0,3,5,-1,0,5,8,0,0,1,14,0),Ae(0,3,5,-1,0,6,10,0,0,1,18,0),Ae(0,4,5,-2,0,7,10,1,0,2,16,1),Ae(0,5,5,-3,0,8,10,1,0,3,14,2),Ae(0,5,6,-3,0,9,12,1,0,3,16,2),Ae(0,6,6,-3,0,10,14,1,0,4,18,3),Ae(0,6,7,-4,0,11,15,1,0,4,20,3),Ae(0,7,8,-4,0,12,17,2,0,5,22,4),Ae(0,7,8,-4,0,13,19,2,0,5,24,4),Ae(0,7,9,-4,0,14,21,2,0,5,26,4),Ae(0,8,9,-5,0,15,22,2,0,6,28,5),Ae(0,8,10,-5,0,16,24,2,0,6,30,5),Ae(0,8,11,-5,0,17,26,2,0,6,32,5),Ae(0,9,11,-5,0,18,28,2,0,7,34,6),Ae(0,9,12,-6,0,19,29,2,0,7,36,6),Ae(0,10,13,-6,0,20,31,3,0,8,38,7),Ae(0,10,13,-6,0,21,33,3,0,8,40,7),Ae(0,10,14,-6,0,22,35,3,0,8,42,7),Ae(0,11,14,-7,0,23,36,3,0,9,44,8),Ae(0,11,15,-7,0,24,38,3,0,9,46,8)],F$=j$,B$=["duration","easing","delay"],V$={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},W$={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Iw(t){return`${Math.round(t)}ms`}function H$(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function q$(t){const e=M({},V$,t.easing),n=M({},W$,t.duration);return M({getAutoHeightDuration:H$,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=e.easeInOut,delay:l=0}=o;return Qe(o,B$),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof s=="string"?s:Iw(s)} ${a} ${typeof l=="string"?l:Iw(l)}`).join(",")}},t,{easing:e,duration:n})}const K$={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},G$=K$,X$=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Y$(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:o={}}=t,s=Qe(t,X$);if(t.vars)throw new Error(Bs(18));const a=A$(r),l=oy(t);let u=Ur(l,{mixins:g$(l.breakpoints,n),palette:a,shadows:F$.slice(),typography:$$(a,o),transitions:q$(i),zIndex:M({},G$)});return u=Ur(u,s),u=e.reduce((d,p)=>Ur(d,p),u),u}const Q$=Y$(),ay=Q$,J$=t=>Uc(t)&&t!=="classes",Z$=l$({defaultTheme:ay,rootShouldForwardProp:J$}),Sr=Z$;function Mx(){return Ux(ay)}function mu({props:t,name:e}){return c$({props:t,name:e,defaultTheme:ay})}function Dm(t,e){return Dm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Dm(t,e)}function eD(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Dm(t,e)}const Pw={disabled:!1},Lx=yi.createContext(null);var tD=function(e){return e.scrollTop},Va="unmounted",no="exited",ro="entering",ns="entered",Mm="exiting",Xr=function(t){eD(e,t);function e(r,i){var o;o=t.call(this,r,i)||this;var s=i,a=s&&!s.isMounting?r.enter:r.appear,l;return o.appearStatus=null,r.in?a?(l=no,o.appearStatus=ro):l=ns:r.unmountOnExit||r.mountOnEnter?l=Va:l=no,o.state={status:l},o.nextCallback=null,o}e.getDerivedStateFromProps=function(i,o){var s=i.in;return s&&o.status===Va?{status:no}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var o=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==ro&&s!==ns&&(o=ro):(s===ro||s===ns)&&(o=Mm)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,o,s,a;return o=s=a=i,i!=null&&typeof i!="number"&&(o=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:o,enter:s,appear:a}},n.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===ro){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:oc.findDOMNode(this);s&&tD(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===no&&this.setState({status:Va})},n.performEnter=function(i){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[oc.findDOMNode(this),a],u=l[0],d=l[1],p=this.getTimeouts(),m=a?p.appear:p.enter;if(!i&&!s||Pw.disabled){this.safeSetState({status:ns},function(){o.props.onEntered(u)});return}this.props.onEnter(u,d),this.safeSetState({status:ro},function(){o.props.onEntering(u,d),o.onTransitionEnd(m,function(){o.safeSetState({status:ns},function(){o.props.onEntered(u,d)})})})},n.performExit=function(){var i=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:oc.findDOMNode(this);if(!o||Pw.disabled){this.safeSetState({status:no},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Mm},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:no},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},n.setNextCallback=function(i){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(i,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:oc.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=l[0],d=l[1];this.props.addEndListener(u,d)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Va)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=Qe(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ee(Lx.Provider,{value:null,children:typeof s=="function"?s(i,a):yi.cloneElement(yi.Children.only(s),a)})},e}(yi.Component);Xr.contextType=Lx;Xr.propTypes={};function es(){}Xr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:es,onEntering:es,onEntered:es,onExit:es,onExiting:es,onExited:es};Xr.UNMOUNTED=Va;Xr.EXITED=no;Xr.ENTERING=ro;Xr.ENTERED=ns;Xr.EXITING=Mm;const nD=Xr,rD=t=>t.scrollTop;function Ow(t,e){var n,r;const{timeout:i,easing:o,style:s={}}=t;return{duration:(n=s.transitionDuration)!=null?n:typeof i=="number"?i:i[e.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof o=="object"?o[e.mode]:o,delay:s.transitionDelay}}const iD=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Lm(t){return`scale(${t}, ${t**2})`}const oD={entering:{opacity:1,transform:Lm(1)},entered:{opacity:1,transform:"none"}},sp=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),jx=I.exports.forwardRef(function(e,n){const{addEndListener:r,appear:i=!0,children:o,easing:s,in:a,onEnter:l,onEntered:u,onEntering:d,onExit:p,onExited:m,onExiting:y,style:w,timeout:v="auto",TransitionComponent:c=nD}=e,f=Qe(e,iD),h=I.exports.useRef(),g=I.exports.useRef(),S=Mx(),b=I.exports.useRef(null),E=Ai(b,o.ref,n),k=O=>U=>{if(O){const L=b.current;U===void 0?O(L):O(L,U)}},_=k(d),C=k((O,U)=>{rD(O);const{duration:L,delay:P,easing:A}=Ow({style:w,timeout:v,easing:s},{mode:"enter"});let j;v==="auto"?(j=S.transitions.getAutoHeightDuration(O.clientHeight),g.current=j):j=L,O.style.transition=[S.transitions.create("opacity",{duration:j,delay:P}),S.transitions.create("transform",{duration:sp?j:j*.666,delay:P,easing:A})].join(","),l&&l(O,U)}),x=k(u),T=k(y),R=k(O=>{const{duration:U,delay:L,easing:P}=Ow({style:w,timeout:v,easing:s},{mode:"exit"});let A;v==="auto"?(A=S.transitions.getAutoHeightDuration(O.clientHeight),g.current=A):A=U,O.style.transition=[S.transitions.create("opacity",{duration:A,delay:L}),S.transitions.create("transform",{duration:sp?A:A*.666,delay:sp?L:L||A*.333,easing:P})].join(","),O.style.opacity=0,O.style.transform=Lm(.75),p&&p(O)}),N=k(m),B=O=>{v==="auto"&&(h.current=setTimeout(O,g.current||0)),r&&r(b.current,O)};return I.exports.useEffect(()=>()=>{clearTimeout(h.current)},[]),ee(c,M({appear:i,in:a,nodeRef:b,onEnter:C,onEntered:x,onEntering:_,onExit:R,onExited:N,onExiting:T,addEndListener:B,timeout:v==="auto"?null:v},f,{children:(O,U)=>I.exports.cloneElement(o,M({style:M({opacity:0,transform:Lm(.75),visibility:O==="exited"&&!a?"hidden":void 0},oD[O],w,o.props.style),ref:E},U))}))});jx.muiSupportAuto=!0;const Rw=jx,sD=["components","componentsProps","slots","slotProps"],aD=Sr(sA,{name:"MuiPopper",slot:"Root",overridesResolver:(t,e)=>e.root})({}),lD=I.exports.forwardRef(function(e,n){var r;const i=Nx(),o=mu({props:e,name:"MuiPopper"}),{components:s,componentsProps:a,slots:l,slotProps:u}=o,d=Qe(o,sD),p=(r=l==null?void 0:l.root)!=null?r:s==null?void 0:s.Root;return ee(aD,M({direction:i==null?void 0:i.direction,slots:{root:p},slotProps:u!=null?u:a},d,{ref:n}))}),Fx=lD;function uD(t){return Do("MuiTooltip",t)}const cD=la("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),gi=cD,fD=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function dD(t){return Math.round(t*1e5)/1e5}const hD=t=>{const{classes:e,disableInteractive:n,arrow:r,touch:i,placement:o}=t,s={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",i&&"touch",`tooltipPlacement${ze(o.split("-")[0])}`],arrow:["arrow"]};return aa(s,uD,e)},pD=Sr(Fx,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(({theme:t,ownerState:e,open:n})=>M({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${gi.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${gi.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${gi.arrow}`]:M({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${gi.arrow}`]:M({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),mD=Sr("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${ze(n.placement.split("-")[0])}`]]}})(({theme:t,ownerState:e})=>M({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:Dx(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${dD(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${gi.popper}[data-popper-placement*="left"] &`]:M({transformOrigin:"right center"},e.isRtl?M({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):M({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${gi.popper}[data-popper-placement*="right"] &`]:M({transformOrigin:"left center"},e.isRtl?M({marginRight:"14px"},e.touch&&{marginRight:"24px"}):M({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${gi.popper}[data-popper-placement*="top"] &`]:M({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${gi.popper}[data-popper-placement*="bottom"] &`]:M({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),gD=Sr("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:Dx(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let cc=!1,ap=null;function fc(t,e){return n=>{e&&e(n),t(n)}}const yD=I.exports.forwardRef(function(e,n){var r,i,o,s,a,l,u,d,p,m,y,w,v,c,f,h,g,S,b;const E=mu({props:e,name:"MuiTooltip"}),{arrow:k=!1,children:_,components:C={},componentsProps:x={},describeChild:T=!1,disableFocusListener:R=!1,disableHoverListener:N=!1,disableInteractive:B=!1,disableTouchListener:O=!1,enterDelay:U=100,enterNextDelay:L=0,enterTouchDelay:P=700,followCursor:A=!1,id:j,leaveDelay:Y=0,leaveTouchDelay:se=1500,onClose:Ke,onOpen:it,open:De,placement:Me="bottom",PopperComponent:Ve,PopperProps:Ge={},slotProps:Le={},slots:Qn={},title:We,TransitionComponent:ma=Rw,TransitionProps:Gt}=E,dn=Qe(E,fD),Lt=Mx(),br=Lt.direction==="rtl",[hn,Ct]=I.exports.useState(),[Jn,Xt]=I.exports.useState(null),Yt=I.exports.useRef(!1),jn=B||A,Zn=I.exports.useRef(),er=I.exports.useRef(),jt=I.exports.useRef(),Er=I.exports.useRef(),[qi,Jr]=Vk({controlled:De,default:!1,name:"Tooltip",state:"open"});let Cn=qi;const ga=Bk(j),Ki=I.exports.useRef(),Gi=I.exports.useCallback(()=>{Ki.current!==void 0&&(document.body.style.WebkitUserSelect=Ki.current,Ki.current=void 0),clearTimeout(Er.current)},[]);I.exports.useEffect(()=>()=>{clearTimeout(Zn.current),clearTimeout(er.current),clearTimeout(jt.current),Gi()},[Gi]);const Uu=F=>{clearTimeout(ap),cc=!0,Jr(!0),it&&!Cn&&it(F)},Ft=D0(F=>{clearTimeout(ap),ap=setTimeout(()=>{cc=!1},800+Y),Jr(!1),Ke&&Cn&&Ke(F),clearTimeout(Zn.current),Zn.current=setTimeout(()=>{Yt.current=!1},Lt.transitions.duration.shortest)}),Tn=F=>{Yt.current&&F.type!=="touchstart"||(hn&&hn.removeAttribute("title"),clearTimeout(er.current),clearTimeout(jt.current),U||cc&&L?er.current=setTimeout(()=>{Uu(F)},cc?L:U):Uu(F))},Fn=F=>{clearTimeout(er.current),clearTimeout(jt.current),jt.current=setTimeout(()=>{Ft(F)},Y)},{isFocusVisibleRef:pn,onBlur:mn,onFocus:ya,ref:$u}=Wk(),[,va]=I.exports.useState(!1),Lo=F=>{mn(F),pn.current===!1&&(va(!1),Fn(F))},jo=F=>{hn||Ct(F.currentTarget),ya(F),pn.current===!0&&(va(!0),Tn(F))},Fo=F=>{Yt.current=!0;const H=_.props;H.onTouchStart&&H.onTouchStart(F)},zn=Tn,Bo=Fn,ph=F=>{Fo(F),clearTimeout(jt.current),clearTimeout(Zn.current),Gi(),Ki.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Er.current=setTimeout(()=>{document.body.style.WebkitUserSelect=Ki.current,Tn(F)},P)},mh=F=>{_.props.onTouchEnd&&_.props.onTouchEnd(F),Gi(),clearTimeout(jt.current),jt.current=setTimeout(()=>{Ft(F)},se)};I.exports.useEffect(()=>{if(!Cn)return;function F(H){(H.key==="Escape"||H.key==="Esc")&&Ft(H)}return document.addEventListener("keydown",F),()=>{document.removeEventListener("keydown",F)}},[Ft,Cn]);const gh=Ai(_.ref,$u,Ct,n);!We&&We!==0&&(Cn=!1);const Xi=I.exports.useRef({x:0,y:0}),wa=I.exports.useRef(),yh=F=>{const H=_.props;H.onMouseMove&&H.onMouseMove(F),Xi.current={x:F.clientX,y:F.clientY},wa.current&&wa.current.update()},Zr={},kr=typeof We=="string";T?(Zr.title=!Cn&&kr&&!N?We:null,Zr["aria-describedby"]=Cn?ga:null):(Zr["aria-label"]=kr?We:null,Zr["aria-labelledby"]=Cn&&!kr?ga:null);const Tt=M({},Zr,dn,_.props,{className:ur(dn.className,_.props.className),onTouchStart:Fo,ref:gh},A?{onMouseMove:yh}:{}),Qt={};O||(Tt.onTouchStart=ph,Tt.onTouchEnd=mh),N||(Tt.onMouseOver=fc(zn,Tt.onMouseOver),Tt.onMouseLeave=fc(Bo,Tt.onMouseLeave),jn||(Qt.onMouseOver=zn,Qt.onMouseLeave=Bo)),R||(Tt.onFocus=fc(jo,Tt.onFocus),Tt.onBlur=fc(Lo,Tt.onBlur),jn||(Qt.onFocus=jo,Qt.onBlur=Lo));const Yi=I.exports.useMemo(()=>{var F;let H=[{name:"arrow",enabled:Boolean(Jn),options:{element:Jn,padding:4}}];return(F=Ge.popperOptions)!=null&&F.modifiers&&(H=H.concat(Ge.popperOptions.modifiers)),M({},Ge.popperOptions,{modifiers:H})},[Jn,Ge]),xr=M({},E,{isRtl:br,arrow:k,disableInteractive:jn,placement:Me,PopperComponentProp:Ve,touch:Yt.current}),Vo=hD(xr),Sa=(r=(i=Qn.popper)!=null?i:C.Popper)!=null?r:pD,Wo=(o=(s=(a=Qn.transition)!=null?a:C.Transition)!=null?s:ma)!=null?o:Rw,Qi=(l=(u=Qn.tooltip)!=null?u:C.Tooltip)!=null?l:mD,Du=(d=(p=Qn.arrow)!=null?p:C.Arrow)!=null?d:gD,ei=Ba(Sa,M({},Ge,(m=Le.popper)!=null?m:x.popper,{className:ur(Vo.popper,Ge==null?void 0:Ge.className,(y=(w=Le.popper)!=null?w:x.popper)==null?void 0:y.className)}),xr),vh=Ba(Wo,M({},Gt,(v=Le.transition)!=null?v:x.transition),xr),ba=Ba(Qi,M({},(c=Le.tooltip)!=null?c:x.tooltip,{className:ur(Vo.tooltip,(f=(h=Le.tooltip)!=null?h:x.tooltip)==null?void 0:f.className)}),xr),Ji=Ba(Du,M({},(g=Le.arrow)!=null?g:x.arrow,{className:ur(Vo.arrow,(S=(b=Le.arrow)!=null?b:x.arrow)==null?void 0:S.className)}),xr);return Co(I.exports.Fragment,{children:[I.exports.cloneElement(_,Tt),ee(Sa,M({as:Ve!=null?Ve:Fx,placement:Me,anchorEl:A?{getBoundingClientRect:()=>({top:Xi.current.y,left:Xi.current.x,right:Xi.current.x,bottom:Xi.current.y,width:0,height:0})}:hn,popperRef:wa,open:hn?Cn:!1,id:ga,transition:!0},Qt,ei,{popperOptions:Yi,children:({TransitionProps:F})=>ee(Wo,M({timeout:Lt.transitions.duration.shorter},F,vh,{"data-foo":"bar",children:Co(Qi,M({},ba,{children:[We,k?ee(Du,M({},Ji,{ref:Xt})):null]}))}))}))]})}),sB=yD;function vD(t){return Do("MuiSvgIcon",t)}la("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const wD=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],SD=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${ze(e)}`,`fontSize${ze(n)}`]};return aa(i,vD,r)},bD=Sr("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${ze(n.color)}`],e[`fontSize${ze(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,o,s,a,l,u,d,p,m,y,w,v,c,f,h;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(o=i.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((s=t.typography)==null||(a=s.pxToRem)==null?void 0:a.call(s,20))||"1.25rem",medium:((l=t.typography)==null||(u=l.pxToRem)==null?void 0:u.call(l,24))||"1.5rem",large:((d=t.typography)==null||(p=d.pxToRem)==null?void 0:p.call(d,35))||"2.1875rem"}[e.fontSize],color:(m=(y=(t.vars||t).palette)==null||(w=y[e.color])==null?void 0:w.main)!=null?m:{action:(v=(t.vars||t).palette)==null||(c=v.action)==null?void 0:c.active,disabled:(f=(t.vars||t).palette)==null||(h=f.action)==null?void 0:h.disabled,inherit:void 0}[e.color]}}),Bx=I.exports.forwardRef(function(e,n){const r=mu({props:e,name:"MuiSvgIcon"}),{children:i,className:o,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:d=!1,titleAccess:p,viewBox:m="0 0 24 24"}=r,y=Qe(r,wD),w=M({},r,{color:s,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:m}),v={};d||(v.viewBox=m);const c=SD(w);return Co(bD,M({as:a,className:ur(c.root,o),focusable:"false",color:u,"aria-hidden":p?void 0:!0,role:p?"img":void 0,ref:n},v,y,{ownerState:w,children:[i,p?ee("title",{children:p}):null]}))});Bx.muiName="SvgIcon";const Aw=Bx;function ED(t,e){function n(r,i){return ee(Aw,M({"data-testid":`${e}Icon`,ref:i},r,{children:t}))}return n.muiName=Aw.muiName,I.exports.memo(I.exports.forwardRef(n))}const kD={configure:t=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),qk.configure(t)}},xD=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:kD,capitalize:ze,createChainedFunction:dR,createSvgIcon:ED,debounce:hR,deprecatedPropType:pR,isMuiElement:mR,ownerDocument:_s,ownerWindow:gR,requirePropFactory:yR,setRef:wf,unstable_useEnhancedEffect:Vs,unstable_useId:Bk,unsupportedProp:SR,useControlled:Vk,useEventCallback:D0,useForkRef:Ai,useIsFocusVisible:Wk},Symbol.toStringTag,{value:"Module"})),_D=t=>!t||!Kk(t),Nw=_D;function CD(t){return Do("MuiBadge",t)}const TD=la("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),ni=TD,zD=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],lp=10,up=4,ID=t=>{const{color:e,anchorOrigin:n,invisible:r,overlap:i,variant:o,classes:s={}}=t,a={root:["root"],badge:["badge",o,r&&"invisible",`anchorOrigin${ze(n.vertical)}${ze(n.horizontal)}`,`anchorOrigin${ze(n.vertical)}${ze(n.horizontal)}${ze(i)}`,`overlap${ze(i)}`,e!=="default"&&`color${ze(e)}`]};return aa(a,CD,s)},PD=Sr("span",{name:"MuiBadge",slot:"Root",overridesResolver:(t,e)=>e.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),OD=Sr("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.badge,e[n.variant],e[`anchorOrigin${ze(n.anchorOrigin.vertical)}${ze(n.anchorOrigin.horizontal)}${ze(n.overlap)}`],n.color!=="default"&&e[`color${ze(n.color)}`],n.invisible&&e.invisible]}})(({theme:t,ownerState:e})=>M({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:lp*2,lineHeight:1,padding:"0 6px",height:lp*2,borderRadius:lp,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},e.color!=="default"&&{backgroundColor:(t.vars||t).palette[e.color].main,color:(t.vars||t).palette[e.color].contrastText},e.variant==="dot"&&{borderRadius:up,height:up*2,minWidth:up*2,padding:0},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${ni.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${ni.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${ni.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${ni.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${ni.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${ni.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${ni.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${ni.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.invisible&&{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})})),RD=I.exports.forwardRef(function(e,n){var r,i,o,s,a,l;const u=mu({props:e,name:"MuiBadge"}),{anchorOrigin:d={vertical:"top",horizontal:"right"},className:p,component:m="span",components:y={},componentsProps:w={},overlap:v="rectangular",color:c="default",invisible:f=!1,max:h,badgeContent:g,slots:S,slotProps:b,showZero:E=!1,variant:k="standard"}=u,_=Qe(u,zD),C=Hk({anchorOrigin:d,color:c,overlap:v,variant:k});let x=f;f===!1&&(g===0&&!E||g==null&&k!=="dot")&&(x=!0);const{color:T=c,overlap:R=v,anchorOrigin:N=d,variant:B=k}=x?C:u,O=M({},u,{anchorOrigin:N,invisible:x,color:T,overlap:R,variant:B}),U=ID(O);let L;B!=="dot"&&(L=g&&Number(g)>h?`${h}+`:g);const P=(r=(i=S==null?void 0:S.root)!=null?i:y.Root)!=null?r:PD,A=(o=(s=S==null?void 0:S.badge)!=null?s:y.Badge)!=null?o:OD,j=(a=b==null?void 0:b.root)!=null?a:w.root,Y=(l=b==null?void 0:b.badge)!=null?l:w.badge;return ee(FR,M({invisible:f,badgeContent:L,showZero:E,max:h},_,{slots:{root:P,badge:A},className:ur(j==null?void 0:j.className,U.root,p),slotProps:{root:M({},j,Nw(P)&&{as:m,ownerState:M({},j==null?void 0:j.ownerState,{anchorOrigin:N,color:T,overlap:R,variant:B})}),badge:M({},Y,{className:ur(U.badge,Y==null?void 0:Y.className)},Nw(A)&&{ownerState:M({},Y==null?void 0:Y.ownerState,{anchorOrigin:N,color:T,overlap:R,variant:B})})},ref:n}))}),aB=RD;function AD(t){return Do("MuiCircularProgress",t)}la("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const ND=["className","color","disableShrink","size","style","thickness","value","variant"];let Dd=t=>t,Uw,$w,Dw,Mw;const ri=44,UD=wx(Uw||(Uw=Dd`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),$D=wx($w||($w=Dd`
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
`)),DD=t=>{const{classes:e,variant:n,color:r,disableShrink:i}=t,o={root:["root",n,`color${ze(r)}`],svg:["svg"],circle:["circle",`circle${ze(n)}`,i&&"circleDisableShrink"]};return aa(o,AD,e)},MD=Sr("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`color${ze(n.color)}`]]}})(({ownerState:t,theme:e})=>M({display:"inline-block"},t.variant==="determinate"&&{transition:e.transitions.create("transform")},t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main}),({ownerState:t})=>t.variant==="indeterminate"&&Q0(Dw||(Dw=Dd`
      animation: ${0} 1.4s linear infinite;
    `),UD)),LD=Sr("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),jD=Sr("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.circle,e[`circle${ze(n.variant)}`],n.disableShrink&&e.circleDisableShrink]}})(({ownerState:t,theme:e})=>M({stroke:"currentColor"},t.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&Q0(Mw||(Mw=Dd`
      animation: ${0} 1.4s ease-in-out infinite;
    `),$D)),FD=I.exports.forwardRef(function(e,n){const r=mu({props:e,name:"MuiCircularProgress"}),{className:i,color:o="primary",disableShrink:s=!1,size:a=40,style:l,thickness:u=3.6,value:d=0,variant:p="indeterminate"}=r,m=Qe(r,ND),y=M({},r,{color:o,disableShrink:s,size:a,thickness:u,value:d,variant:p}),w=DD(y),v={},c={},f={};if(p==="determinate"){const h=2*Math.PI*((ri-u)/2);v.strokeDasharray=h.toFixed(3),f["aria-valuenow"]=Math.round(d),v.strokeDashoffset=`${((100-d)/100*h).toFixed(3)}px`,c.transform="rotate(-90deg)"}return ee(MD,M({className:ur(w.root,i),style:M({width:a,height:a},c,l),ownerState:y,ref:n,role:"progressbar"},f,m,{children:ee(LD,{className:w.svg,ownerState:y,viewBox:`${ri/2} ${ri/2} ${ri} ${ri}`,children:ee(jD,{className:w.circle,style:v,ownerState:y,cx:ri,cy:ri,r:(ri-u)/2,fill:"none",strokeWidth:u})})}))}),lB=FD;var ly={},Vx={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(Vx);var cp={};const BD=yg(xD);var Lw;function VD(){return Lw||(Lw=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=BD}(cp)),cp}const WD=yg(kP);var HD=Vx.exports;Object.defineProperty(ly,"__esModule",{value:!0});var qD=ly.default=void 0,KD=HD(VD()),GD=WD,XD=(0,KD.default)((0,GD.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"}),"CheckBoxOutlined");qD=ly.default=XD;/**
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
 */const Wx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},YD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Hx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=o>>2,p=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,y=u&63;l||(y=64,s||(m=64)),r.push(n[d],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw Error();const m=o<<2|a>>4;if(r.push(m),u!==64){const y=a<<4&240|u>>2;if(r.push(y),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},QD=function(t){const e=Wx(t);return Hx.encodeByteArray(e,!0)},Ef=function(t){return QD(t).replace(/\./g,"")},qx=function(t){try{return Hx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function ZD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eM(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tM(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nM(){return typeof indexedDB=="object"}function rM(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function iM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oM=()=>iM().__FIREBASE_DEFAULTS__,sM=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aM=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qx(t[1]);return e&&JSON.parse(e)},uy=()=>{try{return oM()||sM()||aM()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kx=t=>{var e,n;return(n=(e=uy())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lM=t=>{const e=Kx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uM=()=>{var t;return(t=uy())===null||t===void 0?void 0:t.config},Gx=t=>{var e;return(e=uy())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cM{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fM(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ef(JSON.stringify(n)),Ef(JSON.stringify(s)),a].join(".")}/**
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
 */const dM="FirebaseError";class Yr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dM,Object.setPrototypeOf(this,Yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gu.prototype.create)}}class gu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?hM(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Yr(i,a,r)}}function hM(t,e){return t.replace(pM,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pM=/\{\$([^}]+)}/g;function mM(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(jw(o)&&jw(s)){if(!kf(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jw(t){return t!==null&&typeof t=="object"}/**
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
 */function yu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gM(t,e){const n=new yM(t,e);return n.subscribe.bind(n)}class yM{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vM(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=fp),i.error===void 0&&(i.error=fp),i.complete===void 0&&(i.complete=fp);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vM(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fp(){}/**
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
 */function Qr(t){return t&&t._delegate?t._delegate:t}class Po{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const io="[DEFAULT]";/**
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
 */class wM{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cM;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bM(e))try{this.getOrInitializeService({instanceIdentifier:io})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=io){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=io){return this.instances.has(e)}getOptions(e=io){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SM(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=io){return this.component?this.component.multipleInstances?e:io:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SM(t){return t===io?void 0:t}function bM(t){return t.instantiationMode==="EAGER"}/**
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
 */class EM{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wM(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const kM={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},xM=we.INFO,_M={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},CM=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_M[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cy{constructor(e){this.name=e,this._logLevel=xM,this._logHandler=CM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kM[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const TM=(t,e)=>e.some(n=>t instanceof n);let Fw,Bw;function zM(){return Fw||(Fw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IM(){return Bw||(Bw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xx=new WeakMap,jm=new WeakMap,Yx=new WeakMap,dp=new WeakMap,fy=new WeakMap;function PM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Ti(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Xx.set(n,t)}).catch(()=>{}),fy.set(e,t),e}function OM(t){if(jm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});jm.set(t,e)}let Fm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ti(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RM(t){Fm=t(Fm)}function AM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hp(this),e,...n);return Yx.set(r,e.sort?e.sort():[e]),Ti(r)}:IM().includes(t)?function(...e){return t.apply(hp(this),e),Ti(Xx.get(this))}:function(...e){return Ti(t.apply(hp(this),e))}}function NM(t){return typeof t=="function"?AM(t):(t instanceof IDBTransaction&&OM(t),TM(t,zM())?new Proxy(t,Fm):t)}function Ti(t){if(t instanceof IDBRequest)return PM(t);if(dp.has(t))return dp.get(t);const e=NM(t);return e!==t&&(dp.set(t,e),fy.set(e,t)),e}const hp=t=>fy.get(t);function UM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Ti(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ti(s.result),l.oldVersion,l.newVersion,Ti(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const $M=["get","getKey","getAll","getAllKeys","count"],DM=["put","add","delete","clear"],pp=new Map;function Vw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pp.get(e))return pp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=DM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$M.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return pp.set(e,o),o}RM(t=>({...t,get:(e,n,r)=>Vw(e,n)||t.get(e,n,r),has:(e,n)=>!!Vw(e,n)||t.has(e,n)}));/**
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
 */class MM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bm="@firebase/app",Ww="0.8.4";/**
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
 */const Oo=new cy("@firebase/app"),jM="@firebase/app-compat",FM="@firebase/analytics-compat",BM="@firebase/analytics",VM="@firebase/app-check-compat",WM="@firebase/app-check",HM="@firebase/auth",qM="@firebase/auth-compat",KM="@firebase/database",GM="@firebase/database-compat",XM="@firebase/functions",YM="@firebase/functions-compat",QM="@firebase/installations",JM="@firebase/installations-compat",ZM="@firebase/messaging",e5="@firebase/messaging-compat",t5="@firebase/performance",n5="@firebase/performance-compat",r5="@firebase/remote-config",i5="@firebase/remote-config-compat",o5="@firebase/storage",s5="@firebase/storage-compat",a5="@firebase/firestore",l5="@firebase/firestore-compat",u5="firebase",c5="9.14.0";/**
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
 */const Vm="[DEFAULT]",f5={[Bm]:"fire-core",[jM]:"fire-core-compat",[BM]:"fire-analytics",[FM]:"fire-analytics-compat",[WM]:"fire-app-check",[VM]:"fire-app-check-compat",[HM]:"fire-auth",[qM]:"fire-auth-compat",[KM]:"fire-rtdb",[GM]:"fire-rtdb-compat",[XM]:"fire-fn",[YM]:"fire-fn-compat",[QM]:"fire-iid",[JM]:"fire-iid-compat",[ZM]:"fire-fcm",[e5]:"fire-fcm-compat",[t5]:"fire-perf",[n5]:"fire-perf-compat",[r5]:"fire-rc",[i5]:"fire-rc-compat",[o5]:"fire-gcs",[s5]:"fire-gcs-compat",[a5]:"fire-fst",[l5]:"fire-fst-compat","fire-js":"fire-js",[u5]:"fire-js-all"};/**
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
 */const xf=new Map,Wm=new Map;function d5(t,e){try{t.container.addComponent(e)}catch(n){Oo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xs(t){const e=t.name;if(Wm.has(e))return Oo.debug(`There were multiple attempts to register component ${e}.`),!1;Wm.set(e,t);for(const n of xf.values())d5(n,t);return!0}function dy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const h5={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zi=new gu("app","Firebase",h5);/**
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
 */class p5{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Po("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zi.create("app-deleted",{appName:this._name})}}/**
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
 */const vu=c5;function m5(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw zi.create("bad-app-name",{appName:String(i)});if(n||(n=uM()),!n)throw zi.create("no-options");const o=xf.get(i);if(o){if(kf(n,o.options)&&kf(r,o.config))return o;throw zi.create("duplicate-app",{appName:i})}const s=new EM(i);for(const l of Wm.values())s.addComponent(l);const a=new p5(n,r,s);return xf.set(i,a),a}function Qx(t=Vm){const e=xf.get(t);if(!e&&t===Vm)return m5();if(!e)throw zi.create("no-app",{appName:t});return e}function Ii(t,e,n){var r;let i=(r=f5[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oo.warn(a.join(" "));return}Xs(new Po(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const g5="firebase-heartbeat-database",y5=1,Ll="firebase-heartbeat-store";let mp=null;function Jx(){return mp||(mp=UM(g5,y5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ll)}}}).catch(t=>{throw zi.create("idb-open",{originalErrorMessage:t.message})})),mp}async function v5(t){var e;try{return(await Jx()).transaction(Ll).objectStore(Ll).get(Zx(t))}catch(n){if(n instanceof Yr)Oo.warn(n.message);else{const r=zi.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Oo.warn(r.message)}}}async function Hw(t,e){var n;try{const i=(await Jx()).transaction(Ll,"readwrite");return await i.objectStore(Ll).put(e,Zx(t)),i.done}catch(r){if(r instanceof Yr)Oo.warn(r.message);else{const i=zi.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Oo.warn(i.message)}}}function Zx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const w5=1024,S5=30*24*60*60*1e3;class b5{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new k5(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qw();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=S5}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qw(),{heartbeatsToSend:n,unsentEntries:r}=E5(this._heartbeatsCache.heartbeats),i=Ef(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qw(){return new Date().toISOString().substring(0,10)}function E5(t,e=w5){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Kw(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class k5{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nM()?rM().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await v5(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Kw(t){return Ef(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function x5(t){Xs(new Po("platform-logger",e=>new MM(e),"PRIVATE")),Xs(new Po("heartbeat",e=>new b5(e),"PRIVATE")),Ii(Bm,Ww,t),Ii(Bm,Ww,"esm2017"),Ii("fire-js","")}x5("");var _5="firebase",C5="9.14.0";/**
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
 */Ii(_5,C5,"app");var T5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,hy=hy||{},ne=T5||self;function _f(){}function Md(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function wu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function z5(t){return Object.prototype.hasOwnProperty.call(t,gp)&&t[gp]||(t[gp]=++I5)}var gp="closure_uid_"+(1e9*Math.random()>>>0),I5=0;function P5(t,e,n){return t.call.apply(t.bind,arguments)}function O5(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Nt=P5:Nt=O5,Nt.apply(null,arguments)}function dc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function _t(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return e.prototype[i].apply(r,s)}}function Wi(){this.s=this.s,this.o=this.o}var R5=0;Wi.prototype.s=!1;Wi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),R5!=0)&&z5(this)};Wi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const e_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function py(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Gw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Md(r)){const i=t.length||0,o=r.length||0;t.length=i+o;for(let s=0;s<o;s++)t[i+s]=r[s]}else t.push(r)}}function Ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ut.prototype.h=function(){this.defaultPrevented=!0};var A5=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",_f,e),ne.removeEventListener("test",_f,e)}catch{}return t}();function Cf(t){return/^[\s\xa0]*$/.test(t)}var Xw=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function yp(t,e){return t<e?-1:t>e?1:0}function Ld(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function ar(t){return Ld().indexOf(t)!=-1}function my(t){return my[" "](t),t}my[" "]=_f;function N5(t){var e=D5;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var U5=ar("Opera"),Ys=ar("Trident")||ar("MSIE"),t_=ar("Edge"),Hm=t_||Ys,n_=ar("Gecko")&&!(Ld().toLowerCase().indexOf("webkit")!=-1&&!ar("Edge"))&&!(ar("Trident")||ar("MSIE"))&&!ar("Edge"),$5=Ld().toLowerCase().indexOf("webkit")!=-1&&!ar("Edge");function r_(){var t=ne.document;return t?t.documentMode:void 0}var Tf;e:{var vp="",wp=function(){var t=Ld();if(n_)return/rv:([^\);]+)(\)|;)/.exec(t);if(t_)return/Edge\/([\d\.]+)/.exec(t);if(Ys)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($5)return/WebKit\/(\S+)/.exec(t);if(U5)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(wp&&(vp=wp?wp[1]:""),Ys){var Sp=r_();if(Sp!=null&&Sp>parseFloat(vp)){Tf=String(Sp);break e}}Tf=vp}var D5={};function M5(){return N5(function(){let t=0;const e=Xw(String(Tf)).split("."),n=Xw("9").split("."),r=Math.max(e.length,n.length);for(let s=0;t==0&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i[0].length==0&&o[0].length==0)break;t=yp(i[1].length==0?0:parseInt(i[1],10),o[1].length==0?0:parseInt(o[1],10))||yp(i[2].length==0,o[2].length==0)||yp(i[2],o[2]),i=i[3],o=o[3]}while(t==0)}return 0<=t})}var qm;if(ne.document&&Ys){var Yw=r_();qm=Yw||parseInt(Tf,10)||void 0}else qm=void 0;var L5=qm;function jl(t,e){if(Ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(n_){e:{try{my(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:j5[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&jl.X.h.call(this)}}_t(jl,Ut);var j5={2:"touch",3:"pen",4:"mouse"};jl.prototype.h=function(){jl.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Su="closure_listenable_"+(1e6*Math.random()|0),F5=0;function B5(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++F5,this.ba=this.ea=!1}function jd(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function gy(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function i_(t){const e={};for(const n in t)e[n]=t[n];return e}const Qw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function o_(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let o=0;o<Qw.length;o++)n=Qw[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Fd(t){this.src=t,this.g={},this.h=0}Fd.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=Gm(t,e,r,i);return-1<s?(e=t[s],n||(e.ea=!1)):(e=new B5(e,this.src,o,!!r,i),e.ea=n,t.push(e)),e};function Km(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=e_(r,e),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(jd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Gm(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ba&&o.listener==e&&o.capture==!!n&&o.ha==r)return i}return-1}var yy="closure_lm_"+(1e6*Math.random()|0),bp={};function s_(t,e,n,r,i){if(r&&r.once)return l_(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)s_(t,e[o],n,r,i);return null}return n=Sy(n),t&&t[Su]?t.N(e,n,wu(r)?!!r.capture:!!r,i):a_(t,e,n,!1,r,i)}function a_(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=wu(i)?!!i.capture:!!i,a=wy(t);if(a||(t[yy]=a=new Fd(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=V5(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)A5||(i=s),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(c_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function V5(){function t(n){return e.call(t.src,t.listener,n)}const e=W5;return t}function l_(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)l_(t,e[o],n,r,i);return null}return n=Sy(n),t&&t[Su]?t.O(e,n,wu(r)?!!r.capture:!!r,i):a_(t,e,n,!0,r,i)}function u_(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)u_(t,e[o],n,r,i);else r=wu(r)?!!r.capture:!!r,n=Sy(n),t&&t[Su]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=Gm(o,n,r,i),-1<n&&(jd(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=wy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Gm(e,n,r,i)),(n=-1<t?e[t]:null)&&vy(n))}function vy(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Su])Km(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(c_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=wy(e))?(Km(n,t),n.h==0&&(n.src=null,e[yy]=null)):jd(t)}}}function c_(t){return t in bp?bp[t]:bp[t]="on"+t}function W5(t,e){if(t.ba)t=!0;else{e=new jl(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&vy(t),t=n.call(r,e)}return t}function wy(t){return t=t[yy],t instanceof Fd?t:null}var Ep="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sy(t){return typeof t=="function"?t:(t[Ep]||(t[Ep]=function(e){return t.handleEvent(e)}),t[Ep])}function ht(){Wi.call(this),this.i=new Fd(this),this.P=this,this.I=null}_t(ht,Wi);ht.prototype[Su]=!0;ht.prototype.removeEventListener=function(t,e,n,r){u_(this,t,e,n,r)};function kt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ut(e,t);else if(e instanceof Ut)e.target=e.target||t;else{var i=e;e=new Ut(r,t),o_(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=hc(s,r,!0,e)&&i}if(s=e.g=t,i=hc(s,r,!0,e)&&i,i=hc(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=hc(s,r,!1,e)&&i}ht.prototype.M=function(){if(ht.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)jd(n[r]);delete t.g[e],t.h--}}this.I=null};ht.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ht.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function hc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&Km(t.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var by=ne.JSON.stringify;function H5(){var t=h_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class q5{constructor(){this.h=this.g=null}add(e,n){const r=f_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var f_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new K5,t=>t.reset());class K5{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function G5(t){ne.setTimeout(()=>{throw t},0)}function d_(t,e){Xm||X5(),Ym||(Xm(),Ym=!0),h_.add(t,e)}var Xm;function X5(){var t=ne.Promise.resolve(void 0);Xm=function(){t.then(Y5)}}var Ym=!1,h_=new q5;function Y5(){for(var t;t=H5();){try{t.h.call(t.g)}catch(n){G5(n)}var e=f_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ym=!1}function Bd(t,e){ht.call(this),this.h=t||1,this.g=e||ne,this.j=Nt(this.lb,this),this.l=Date.now()}_t(Bd,ht);G=Bd.prototype;G.ca=!1;G.R=null;G.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),kt(this,"tick"),this.ca&&(Ey(this),this.start()))}};G.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ey(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}G.M=function(){Bd.X.M.call(this),Ey(this),delete this.g};function ky(t,e,n){if(typeof t=="function")n&&(t=Nt(t,n));else if(t&&typeof t.handleEvent=="function")t=Nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function p_(t){t.g=ky(()=>{t.g=null,t.i&&(t.i=!1,p_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Q5 extends Wi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:p_(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fl(t){Wi.call(this),this.h=t,this.g={}}_t(Fl,Wi);var Jw=[];function m_(t,e,n,r){Array.isArray(n)||(n&&(Jw[0]=n.toString()),n=Jw);for(var i=0;i<n.length;i++){var o=s_(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function g_(t){gy(t.g,function(e,n){this.g.hasOwnProperty(n)&&vy(e)},t),t.g={}}Fl.prototype.M=function(){Fl.X.M.call(this),g_(this)};Fl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vd(){this.g=!0}Vd.prototype.Aa=function(){this.g=!1};function J5(t,e,n,r,i,o){t.info(function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var d=u[0];u=u[1];var p=d.split("_");s=2<=p.length&&p[1]=="type"?s+(d+"="+u+"&"):s+(d+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+s})}function Z5(t,e,n,r,i,o,s){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+o+" "+s})}function ms(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tL(t,n)+(r?" "+r:"")})}function eL(t,e){t.info(function(){return"TIMEOUT: "+e})}Vd.prototype.info=function(){};function tL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return by(n)}catch{return e}}var Mo={},Zw=null;function Wd(){return Zw=Zw||new ht}Mo.Pa="serverreachability";function y_(t){Ut.call(this,Mo.Pa,t)}_t(y_,Ut);function Bl(t){const e=Wd();kt(e,new y_(e))}Mo.STAT_EVENT="statevent";function v_(t,e){Ut.call(this,Mo.STAT_EVENT,t),this.stat=e}_t(v_,Ut);function Wt(t){const e=Wd();kt(e,new v_(e,t))}Mo.Qa="timingevent";function w_(t,e){Ut.call(this,Mo.Qa,t),this.size=e}_t(w_,Ut);function bu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var Hd={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},S_={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function xy(){}xy.prototype.h=null;function eS(t){return t.h||(t.h=t.i())}function b_(){}var Eu={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function _y(){Ut.call(this,"d")}_t(_y,Ut);function Cy(){Ut.call(this,"c")}_t(Cy,Ut);var Qm;function qd(){}_t(qd,xy);qd.prototype.g=function(){return new XMLHttpRequest};qd.prototype.i=function(){return{}};Qm=new qd;function ku(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Fl(this),this.O=nL,t=Hm?125:void 0,this.T=new Bd(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new E_}function E_(){this.i=null,this.g="",this.h=!1}var nL=45e3,Jm={},zf={};G=ku.prototype;G.setTimeout=function(t){this.O=t};function Zm(t,e,n){t.K=1,t.v=Gd(Vr(e)),t.s=n,t.P=!0,k_(t,null)}function k_(t,e){t.F=Date.now(),xu(t),t.A=Vr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),O_(n.i,"t",r),t.C=0,n=t.l.H,t.h=new E_,t.g=J_(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Q5(Nt(t.La,t,t.g),t.N)),m_(t.S,t.g,"readystatechange",t.ib),e=t.H?i_(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Bl(),J5(t.j,t.u,t.A,t.m,t.U,t.s)}G.ib=function(t){t=t.target;const e=this.L;e&&Or(t)==3?e.l():this.La(t)};G.La=function(t){try{if(t==this.g)e:{const d=Or(this.g);var e=this.g.Ea();const p=this.g.aa();if(!(3>d)&&(d!=3||Hm||this.g&&(this.h.h||this.g.fa()||iS(this.g)))){this.I||d!=4||e==7||(e==8||0>=p?Bl(3):Bl(2)),Kd(this);var n=this.g.aa();this.Y=n;t:if(x_(this)){var r=iS(this.g);t="";var i=r.length,o=Or(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){lo(this),al(this);var s="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=n==200,Z5(this.j,this.u,this.A,this.m,this.U,d,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Cf(a)){var u=a;break t}}u=null}if(n=u)ms(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,eg(this,n);else{this.i=!1,this.o=3,Wt(12),lo(this),al(this);break e}}this.P?(__(this,d,s),Hm&&this.i&&d==3&&(m_(this.S,this.T,"tick",this.hb),this.T.start())):(ms(this.j,this.m,s,null),eg(this,s)),d==4&&lo(this),this.i&&!this.I&&(d==4?G_(this.l,this):(this.i=!1,xu(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,Wt(12)):(this.o=0,Wt(13)),lo(this),al(this)}}}catch{}finally{}};function x_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function __(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=rL(t,n),i==zf){e==4&&(t.o=4,Wt(14),r=!1),ms(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Jm){t.o=4,Wt(15),ms(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ms(t.j,t.m,i,null),eg(t,i);x_(t)&&i!=zf&&i!=Jm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ay(e),e.K=!0,Wt(11))):(ms(t.j,t.m,n,"[Invalid Chunked Response]"),lo(t),al(t))}G.hb=function(){if(this.g){var t=Or(this.g),e=this.g.fa();this.C<e.length&&(Kd(this),__(this,t,e),this.i&&t!=4&&xu(this))}};function rL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?zf:(n=Number(e.substring(n,r)),isNaN(n)?Jm:(r+=1,r+n>e.length?zf:(e=e.substr(r,n),t.C=r+n,e)))}G.cancel=function(){this.I=!0,lo(this)};function xu(t){t.V=Date.now()+t.O,C_(t,t.O)}function C_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=bu(Nt(t.gb,t),e)}function Kd(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}G.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(eL(this.j,this.A),this.K!=2&&(Bl(),Wt(17)),lo(this),this.o=2,al(this)):C_(this,this.V-t)};function al(t){t.l.G==0||t.I||G_(t.l,t)}function lo(t){Kd(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ey(t.T),g_(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function eg(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||tg(n.h,t))){if(!t.J&&tg(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Of(n),Qd(n);else break e;Ry(n),Wt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=bu(Nt(n.cb,n),6e3));if(1>=N_(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else uo(n,11)}else if((t.J||n.g==t)&&Of(n),!Cf(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const d=u[3];d!=null&&(n.ma=d,n.j.info("VER="+n.ma));const p=u[4];p!=null&&(n.Ca=p,n.j.info("SVER="+n.Ca));const m=u[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const w=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var o=r.h;o.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(Ty(o,o.h),o.h=null))}if(r.D){const v=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Ue(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=t;if(r.sa=Q_(r,r.H?r.ka:null,r.V),s.J){U_(r.h,s);var a=s,l=r.J;l&&a.setTimeout(l),a.B&&(Kd(a),xu(a)),r.g=s}else q_(r);0<n.i.length&&Jd(n)}else u[0]!="stop"&&u[0]!="close"||uo(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?uo(n,7):Oy(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Bl(4)}catch{}}function iL(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Md(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function oL(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Md(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function T_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Md(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=oL(t),r=iL(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}var z_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function mo(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof mo){this.h=e!==void 0?e:t.h,If(this,t.j),this.s=t.s,this.g=t.g,Pf(this,t.m),this.l=t.l,e=t.i;var n=new Vl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),tS(this,n),this.o=t.o}else t&&(n=String(t).match(z_))?(this.h=!!e,If(this,n[1]||"",!0),this.s=Wa(n[2]||""),this.g=Wa(n[3]||"",!0),Pf(this,n[4]),this.l=Wa(n[5]||"",!0),tS(this,n[6]||"",!0),this.o=Wa(n[7]||"")):(this.h=!!e,this.i=new Vl(null,this.h))}mo.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ha(e,nS,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ha(e,nS,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ha(n,n.charAt(0)=="/"?uL:lL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ha(n,fL)),t.join("")};function Vr(t){return new mo(t)}function If(t,e,n){t.j=n?Wa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pf(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function tS(t,e,n){e instanceof Vl?(t.i=e,dL(t.i,t.h)):(n||(e=Ha(e,cL)),t.i=new Vl(e,t.h))}function Ue(t,e,n){t.i.set(e,n)}function Gd(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Wa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ha(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,aL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function aL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var nS=/[#\/\?@]/g,lL=/[#\?:]/g,uL=/[#\?]/g,cL=/[#\?@]/g,fL=/#/g;function Vl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Hi(t){t.g||(t.g=new Map,t.h=0,t.i&&sL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=Vl.prototype;G.add=function(t,e){Hi(this),this.i=null,t=ca(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function I_(t,e){Hi(t),e=ca(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function P_(t,e){return Hi(t),e=ca(t,e),t.g.has(e)}G.forEach=function(t,e){Hi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};G.oa=function(){Hi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let o=0;o<i.length;o++)n.push(e[r])}return n};G.W=function(t){Hi(this);let e=[];if(typeof t=="string")P_(this,t)&&(e=e.concat(this.g.get(ca(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return Hi(this),this.i=null,t=ca(this,t),P_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function O_(t,e,n){I_(t,e),0<n.length&&(t.i=null,t.g.set(ca(t,e),py(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};function ca(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dL(t,e){e&&!t.j&&(Hi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(I_(this,r),O_(this,i,n))},t)),t.j=e}var hL=class{constructor(t,e){this.h=t,this.g=e}};function R_(t){this.l=t||pL,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ga&&ne.g.Ga()&&ne.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pL=10;function A_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function N_(t){return t.h?1:t.g?t.g.size:0}function tg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ty(t,e){t.g?t.g.add(e):t.h=e}function U_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}R_.prototype.cancel=function(){if(this.i=$_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return py(t.i)}function zy(){}zy.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)};zy.prototype.parse=function(t){return ne.JSON.parse(t,void 0)};function mL(){this.g=new zy}function gL(t,e,n){const r=n||"";try{T_(t,function(i,o){let s=i;wu(i)&&(s=by(i)),e.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function yL(t,e){const n=new Vd;if(ne.Image){const r=new Image;r.onload=dc(pc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=dc(pc,n,r,"TestLoadImage: error",!1,e),r.onabort=dc(pc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=dc(pc,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function pc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function _u(t){this.l=t.ac||null,this.j=t.jb||!1}_t(_u,xy);_u.prototype.g=function(){return new Xd(this.l,this.j)};_u.prototype.i=function(t){return function(){return t}}({});function Xd(t,e){ht.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Iy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_t(Xd,ht);var Iy=0;G=Xd.prototype;G.open=function(t,e){if(this.readyState!=Iy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Wl(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ne).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cu(this)),this.readyState=Iy};G.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Wl(this)),this.g&&(this.readyState=3,Wl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;D_(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function D_(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}G.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Cu(this):Wl(this),this.readyState==3&&D_(this)}};G.Va=function(t){this.g&&(this.response=this.responseText=t,Cu(this))};G.Ua=function(t){this.g&&(this.response=t,Cu(this))};G.ga=function(){this.g&&Cu(this)};function Cu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Wl(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Wl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Xd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var vL=ne.JSON.parse;function qe(t){ht.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=M_,this.K=this.L=!1}_t(qe,ht);var M_="",wL=/^https?$/i,SL=["POST","PUT"];G=qe.prototype;G.Ka=function(t){this.L=t};G.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qm.g(),this.C=this.u?eS(this.u):eS(Qm),this.g.onreadystatechange=Nt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){rS(this,o);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=ne.FormData&&t instanceof ne.FormData,!(0<=e_(SL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{F_(this),0<this.B&&((this.K=bL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Nt(this.qa,this)):this.A=ky(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){rS(this,o)}};function bL(t){return Ys&&M5()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.qa=function(){typeof hy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))};function rS(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,L_(t),Yd(t)}function L_(t){t.D||(t.D=!0,kt(t,"complete"),kt(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),Yd(this))};G.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yd(this,!0)),qe.X.M.call(this)};G.Ha=function(){this.s||(this.F||this.v||this.l?j_(this):this.fb())};G.fb=function(){j_(this)};function j_(t){if(t.h&&typeof hy<"u"&&(!t.C[1]||Or(t)!=4||t.aa()!=2)){if(t.v&&Or(t)==4)ky(t.Ha,0,t);else if(kt(t,"readystatechange"),Or(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(z_)[1]||null;if(!i&&ne.self&&ne.self.location){var o=ne.self.location.protocol;i=o.substr(0,o.length-1)}r=!wL.test(i?i.toLowerCase():"")}n=r}if(n)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var s=2<Or(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.aa()+"]",L_(t)}}finally{Yd(t)}}}}function Yd(t,e){if(t.g){F_(t);const n=t.g,r=t.C[0]?_f:null;t.g=null,t.C=null,e||kt(t,"ready");try{n.onreadystatechange=r}catch{}}}function F_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function Or(t){return t.g?t.g.readyState:0}G.aa=function(){try{return 2<Or(this)?this.g.status:-1}catch{return-1}};G.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),vL(e)}};function iS(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case M_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}G.Ea=function(){return this.m};G.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function B_(t){let e="";return gy(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Py(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=B_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ue(t,e,n))}function $a(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function V_(t){this.Ca=0,this.i=[],this.j=new Vd,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=$a("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=$a("baseRetryDelayMs",5e3,t),this.bb=$a("retryDelaySeedMs",1e4,t),this.$a=$a("forwardChannelMaxRetries",2,t),this.ta=$a("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new R_(t&&t.concurrentRequestLimit),this.Fa=new mL,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}G=V_.prototype;G.ma=8;G.G=1;function Oy(t){if(W_(t),t.G==3){var e=t.U++,n=Vr(t.F);Ue(n,"SID",t.I),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),Tu(t,n),e=new ku(t,t.j,e,void 0),e.K=2,e.v=Gd(Vr(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=J_(e.l,null),e.g.da(e.v)),e.F=Date.now(),xu(e)}Y_(t)}function Qd(t){t.g&&(Ay(t),t.g.cancel(),t.g=null)}function W_(t){Qd(t),t.u&&(ne.clearTimeout(t.u),t.u=null),Of(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function Jd(t){A_(t.h)||t.m||(t.m=!0,d_(t.Ja,t),t.C=0)}function EL(t,e){return N_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=bu(Nt(t.Ja,t,e),X_(t,t.C)),t.C++,!0)}G.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ku(this,this.j,t,void 0);let o=this.s;if(this.S&&(o?(o=i_(o),o_(o,this.S)):o=this.S),this.o!==null||this.N||(i.H=o,o=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=H_(this,i,e),n=Vr(this.F),Ue(n,"RID",t),Ue(n,"CVER",22),this.D&&Ue(n,"X-HTTP-Session-Id",this.D),Tu(this,n),o&&(this.N?e="headers="+encodeURIComponent(String(B_(o)))+"&"+e:this.o&&Py(n,this.o,o)),Ty(this.h,i),this.Ya&&Ue(n,"TYPE","init"),this.O?(Ue(n,"$req",e),Ue(n,"SID","null"),i.Z=!0,Zm(i,n,null)):Zm(i,n,e),this.G=2}}else this.G==3&&(t?oS(this,t):this.i.length==0||A_(this.h)||oS(this))};function oS(t,e){var n;e?n=e.m:n=t.U++;const r=Vr(t.F);Ue(r,"SID",t.I),Ue(r,"RID",n),Ue(r,"AID",t.T),Tu(t,r),t.o&&t.s&&Py(r,t.o,t.s),n=new ku(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=H_(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ty(t.h,n),Zm(n,r,e)}function Tu(t,e){t.ia&&gy(t.ia,function(n,r){Ue(e,r,n)}),t.l&&T_({},function(n,r){Ue(e,r,n)})}function H_(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Nt(t.l.Ra,t.l,t):null;e:{var i=t.i;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const d=i[l].g;if(u-=o,0>u)o=Math.max(0,i[l].h-100),a=!1;else try{gL(d,s,"req"+u+"_")}catch{r&&r(d)}}if(a){r=s.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function q_(t){t.g||t.u||(t.Z=1,d_(t.Ia,t),t.A=0)}function Ry(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=bu(Nt(t.Ia,t),X_(t,t.A)),t.A++,!0)}G.Ia=function(){if(this.u=null,K_(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=bu(Nt(this.eb,this),t)}};G.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Wt(10),Qd(this),K_(this))};function Ay(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function K_(t){t.g=new ku(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Vr(t.sa);Ue(e,"RID","rpc"),Ue(e,"SID",t.I),Ue(e,"CI",t.L?"0":"1"),Ue(e,"AID",t.T),Ue(e,"TYPE","xmlhttp"),Tu(t,e),t.o&&t.s&&Py(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Gd(Vr(e)),n.s=null,n.P=!0,k_(n,t)}G.cb=function(){this.v!=null&&(this.v=null,Qd(this),Ry(this),Wt(19))};function Of(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function G_(t,e){var n=null;if(t.g==e){Of(t),Ay(t),t.g=null;var r=2}else if(tg(t.h,e))n=e.D,U_(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Wd(),kt(r,new w_(r,n)),Jd(t)}else q_(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&EL(t,e)||r==2&&Ry(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:uo(t,5);break;case 4:uo(t,10);break;case 3:uo(t,6);break;default:uo(t,2)}}}function X_(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function uo(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Nt(t.kb,t);n||(n=new mo("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||If(n,"https"),Gd(n)),yL(n.toString(),r)}else Wt(2);t.G=0,t.l&&t.l.va(e),Y_(t),W_(t)}G.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Wt(2)):(this.j.info("Failed to ping google.com"),Wt(1))};function Y_(t){if(t.G=0,t.la=[],t.l){const e=$_(t.h);(e.length!=0||t.i.length!=0)&&(Gw(t.la,e),Gw(t.la,t.i),t.h.i.length=0,py(t.i),t.i.length=0),t.l.ua()}}function Q_(t,e,n){var r=n instanceof mo?Vr(n):new mo(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Pf(r,r.m);else{var i=ne.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new mo(null,void 0);r&&If(o,r),e&&(o.g=e),i&&Pf(o,i),n&&(o.l=n),r=o}return n=t.D,e=t.za,n&&e&&Ue(r,n,e),Ue(r,"VER",t.ma),Tu(t,r),r}function J_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new qe(new _u({jb:!0})):new qe(t.ra),e.Ka(t.H),e}function Z_(){}G=Z_.prototype;G.xa=function(){};G.wa=function(){};G.va=function(){};G.ua=function(){};G.Ra=function(){};function Rf(){if(Ys&&!(10<=Number(L5)))throw Error("Environmental error: no available transport.")}Rf.prototype.g=function(t,e){return new bn(t,e)};function bn(t,e){ht.call(this),this.g=new V_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Cf(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Cf(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fa(this)}_t(bn,ht);bn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Wt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Q_(t,null,t.V),Jd(t)};bn.prototype.close=function(){Oy(this.g)};bn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=by(t),t=n);e.i.push(new hL(e.ab++,t)),e.G==3&&Jd(e)};bn.prototype.M=function(){this.g.l=null,delete this.j,Oy(this.g),delete this.g,bn.X.M.call(this)};function eC(t){_y.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}_t(eC,_y);function tC(){Cy.call(this),this.status=1}_t(tC,Cy);function fa(t){this.g=t}_t(fa,Z_);fa.prototype.xa=function(){kt(this.g,"a")};fa.prototype.wa=function(t){kt(this.g,new eC(t))};fa.prototype.va=function(t){kt(this.g,new tC)};fa.prototype.ua=function(){kt(this.g,"b")};Rf.prototype.createWebChannel=Rf.prototype.g;bn.prototype.send=bn.prototype.u;bn.prototype.open=bn.prototype.m;bn.prototype.close=bn.prototype.close;Hd.NO_ERROR=0;Hd.TIMEOUT=8;Hd.HTTP_ERROR=6;S_.COMPLETE="complete";b_.EventType=Eu;Eu.OPEN="a";Eu.CLOSE="b";Eu.ERROR="c";Eu.MESSAGE="d";ht.prototype.listen=ht.prototype.N;qe.prototype.listenOnce=qe.prototype.O;qe.prototype.getLastError=qe.prototype.Oa;qe.prototype.getLastErrorCode=qe.prototype.Ea;qe.prototype.getStatus=qe.prototype.aa;qe.prototype.getResponseJson=qe.prototype.Sa;qe.prototype.getResponseText=qe.prototype.fa;qe.prototype.send=qe.prototype.da;qe.prototype.setWithCredentials=qe.prototype.Ka;var kL=function(){return new Rf},xL=function(){return Wd()},kp=Hd,_L=S_,CL=Mo,sS={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},TL=_u,mc=b_,zL=qe;const aS="@firebase/firestore";/**
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
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
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
 */let da="9.14.0";/**
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
 */const Ro=new cy("@firebase/firestore");function lS(){return Ro.logLevel}function Q(t,...e){if(Ro.logLevel<=we.DEBUG){const n=e.map(Ny);Ro.debug(`Firestore (${da}): ${t}`,...n)}}function Wr(t,...e){if(Ro.logLevel<=we.ERROR){const n=e.map(Ny);Ro.error(`Firestore (${da}): ${t}`,...n)}}function ng(t,...e){if(Ro.logLevel<=we.WARN){const n=e.map(Ny);Ro.warn(`Firestore (${da}): ${t}`,...n)}}function Ny(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${da}) INTERNAL ASSERTION FAILED: `+t;throw Wr(e),new Error(e)}function rt(t,e){t||oe()}function ye(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Yr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class go{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class nC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class PL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OL{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new go;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new go,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new go)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rt(typeof r.accessToken=="string"),new nC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return rt(e===null||typeof e=="string"),new Rt(e)}}class RL{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(rt(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class AL{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new RL(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UL{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=o=>{o.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.A;return this.A=o.token,Q("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.T.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.T.getImmediate({optional:!0});o?i(o):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(rt(typeof n.token=="string"),this.A=n.token,new NL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function $L(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class rC{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=$L(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function Qs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class cn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return cn.fromMillis(Date.now())}static fromDate(e){return cn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new cn(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new cn(0,0))}static max(){return new ae(new cn(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Hl{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends Hl{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const DL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tn extends Hl{construct(e,n,r){return new tn(e,n,r)}static isValidIdentifier(e){return DL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tn(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Z(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new Z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tn(n)}static emptyPath(){return new tn([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J($e.fromString(e))}static fromName(e){return new J($e.fromString(e).popFirst(5))}static empty(){return new J($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new $e(e.slice()))}}function ML(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new cn(n+1,0):new cn(n,r));return new Ni(i,J.empty(),e)}function LL(t){return new Ni(t.readTime,t.key,-1)}class Ni{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ni(ae.min(),J.empty(),-1)}static max(){return new Ni(ae.max(),J.empty(),-1)}}function jL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const FL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Uy(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==FL)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const u=l;n(e[u]).next(d=>{s[u]=d,++a,a===o&&r(s)},d=>i(d))}})}static doWhile(e,n){return new D((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function zu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class $y{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function uS(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zd(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VL(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */$y.at=-1;class pt{constructor(e,n){this.comparator=e,this.root=n||wt.EMPTY}insert(e,n){return new pt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(e){return new pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gc(this.root,e,this.comparator,!1)}getReverseIterator(){return new gc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gc(this.root,e,this.comparator,!0)}}class gc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r!=null?r:wt.RED,this.left=i!=null?i:wt.EMPTY,this.right=o!=null?o:wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new wt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return wt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(t,e,n,r,i){return this}insert(t,e,n){return new wt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cS(this.data.getIterator())}getIteratorFrom(e){return new cS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class cS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yo{constructor(e){this.fields=e,e.sort(tn.comparator)}static empty(){return new yo([])}unionWith(e){let n=new lt(tn.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yo(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Mt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const WL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ui(t){if(rt(!!t),typeof t=="string"){let e=0;const n=WL.exec(t);if(rt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:et(t.seconds),nanos:et(t.nanos)}}function et(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Js(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
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
 */function iC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function oC(t){const e=t.mapValue.fields.__previous_value__;return iC(e)?oC(e):e}function ql(t){const e=Ui(t.mapValue.fields.__local_write_time__.timestampValue);return new cn(e.seconds,e.nanos)}/**
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
 */class HL{constructor(e,n,r,i,o,s,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Kl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Kl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Kl&&e.projectId===this.projectId&&e.database===this.database}}function eh(t){return t==null}function rg(t){return t===0&&1/t==-1/0}/**
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
 */const yc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ao(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?iC(t)?4:qL(t)?9007199254740991:10:oe()}function vr(t,e){if(t===e)return!0;const n=Ao(t);if(n!==Ao(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ql(t).isEqual(ql(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Ui(r.timestampValue),s=Ui(i.timestampValue);return o.seconds===s.seconds&&o.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Js(r.bytesValue).isEqual(Js(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return et(r.geoPointValue.latitude)===et(i.geoPointValue.latitude)&&et(r.geoPointValue.longitude)===et(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return et(r.integerValue)===et(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=et(r.doubleValue),s=et(i.doubleValue);return o===s?rg(o)===rg(s):isNaN(o)&&isNaN(s)}return!1}(t,e);case 9:return Qs(t.arrayValue.values||[],e.arrayValue.values||[],vr);case 10:return function(r,i){const o=r.mapValue.fields||{},s=i.mapValue.fields||{};if(uS(o)!==uS(s))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(s[a]===void 0||!vr(o[a],s[a])))return!1;return!0}(t,e);default:return oe()}}function Gl(t,e){return(t.values||[]).find(n=>vr(n,e))!==void 0}function Zs(t,e){if(t===e)return 0;const n=Ao(t),r=Ao(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const s=et(i.integerValue||i.doubleValue),a=et(o.integerValue||o.doubleValue);return s<a?-1:s>a?1:s===a?0:isNaN(s)?isNaN(a)?0:-1:1}(t,e);case 3:return fS(t.timestampValue,e.timestampValue);case 4:return fS(ql(t),ql(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(i,o){const s=Js(i),a=Js(o);return s.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const s=i.split("/"),a=o.split("/");for(let l=0;l<s.length&&l<a.length;l++){const u=Ee(s[l],a[l]);if(u!==0)return u}return Ee(s.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const s=Ee(et(i.latitude),et(o.latitude));return s!==0?s:Ee(et(i.longitude),et(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const s=i.values||[],a=o.values||[];for(let l=0;l<s.length&&l<a.length;++l){const u=Zs(s[l],a[l]);if(u)return u}return Ee(s.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===yc.mapValue&&o===yc.mapValue)return 0;if(i===yc.mapValue)return 1;if(o===yc.mapValue)return-1;const s=i.fields||{},a=Object.keys(s),l=o.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let d=0;d<a.length&&d<u.length;++d){const p=Ee(a[d],u[d]);if(p!==0)return p;const m=Zs(s[a[d]],l[u[d]]);if(m!==0)return m}return Ee(a.length,u.length)}(t.mapValue,e.mapValue);default:throw oe()}}function fS(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Ui(t),r=Ui(e),i=Ee(n.seconds,r.seconds);return i!==0?i:Ee(n.nanos,r.nanos)}function Ts(t){return ig(t)}function ig(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ui(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Js(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,J.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",o=!0;for(const s of r.values||[])o?o=!1:i+=",",i+=ig(s);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let o="{",s=!0;for(const a of i)s?s=!1:o+=",",o+=`${a}:${ig(r.fields[a])}`;return o+"}"}(t.mapValue):oe();var e,n}function og(t){return!!t&&"integerValue"in t}function Dy(t){return!!t&&"arrayValue"in t}function dS(t){return!!t&&"nullValue"in t}function hS(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xp(t){return!!t&&"mapValue"in t}function ll(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zd(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ll(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ll(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class lr{constructor(e){this.value=e}static empty(){return new lr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xp(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ll(n)}setAll(e){let n=tn.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=ll(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());xp(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xp(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Zd(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new lr(ll(this.value))}}/**
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
 */class bt{constructor(e,n,r,i,o,s){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=o,this.documentState=s}static newInvalidDocument(e){return new bt(e,0,ae.min(),ae.min(),lr.empty(),0)}static newFoundDocument(e,n,r){return new bt(e,1,n,ae.min(),r,0)}static newNoDocument(e,n){return new bt(e,2,n,ae.min(),lr.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,ae.min(),lr.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class KL{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ht=null}}function pS(t,e=null,n=[],r=[],i=null,o=null,s=null){return new KL(t,e,n,r,i,o,s)}function My(t){const e=ye(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ts(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),eh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ts(r)).join(",")),e.ht=n}return e.ht}function GL(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ts(r.value)}`;var r}).join(", ")}]`),eh(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ts(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ts(n)).join(",")),`Target(${e})`}function Ly(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!n3(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!vr(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gS(t.startAt,e.startAt)&&gS(t.endAt,e.endAt)}function sg(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class rn extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new XL(e,n,r):n==="array-contains"?new JL(e,r):n==="in"?new ZL(e,r):n==="not-in"?new e3(e,r):n==="array-contains-any"?new t3(e,r):new rn(e,n,r)}static lt(e,n,r){return n==="in"?new YL(e,r):new QL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Zs(n,this.value)):n!==null&&Ao(this.value)===Ao(n)&&this.ft(Zs(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class XL extends rn{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.ft(n)}}class YL extends rn{constructor(e,n){super(e,"in",n),this.keys=sC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QL extends rn{constructor(e,n){super(e,"not-in",n),this.keys=sC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class JL extends rn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dy(n)&&Gl(n.arrayValue,this.value)}}class ZL extends rn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gl(this.value.arrayValue,n)}}class e3 extends rn{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Gl(this.value.arrayValue,n)}}class t3 extends rn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Gl(this.value.arrayValue,r))}}class Af{constructor(e,n){this.position=e,this.inclusive=n}}class ul{constructor(e,n="asc"){this.field=e,this.dir=n}}function n3(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function mS(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=J.comparator(J.fromName(s.referenceValue),n.key):r=Zs(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function gS(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class th{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function r3(t,e,n,r,i,o,s,a){return new th(t,e,n,r,i,o,s,a)}function nh(t){return new th(t)}function yS(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function i3(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function o3(t){for(const e of t.filters)if(e.dt())return e.field;return null}function s3(t){return t.collectionGroup!==null}function Xl(t){const e=ye(t);if(e._t===null){e._t=[];const n=o3(e),r=i3(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new ul(n)),e._t.push(new ul(tn.keyField(),"asc"));else{let i=!1;for(const o of e.explicitOrderBy)e._t.push(o),o.field.isKeyField()&&(i=!0);if(!i){const o=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ul(tn.keyField(),o))}}}return e._t}function Hr(t){const e=ye(t);if(!e.wt)if(e.limitType==="F")e.wt=pS(e.path,e.collectionGroup,Xl(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const o of Xl(e)){const s=o.dir==="desc"?"asc":"desc";n.push(new ul(o.field,s))}const r=e.endAt?new Af(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Af(e.startAt.position,e.startAt.inclusive):null;e.wt=pS(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function ag(t,e,n){return new th(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rh(t,e){return Ly(Hr(t),Hr(e))&&t.limitType===e.limitType}function aC(t){return`${My(Hr(t))}|lt:${t.limitType}`}function lg(t){return`Query(target=${GL(Hr(t))}; limitType=${t.limitType})`}function jy(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):J.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,o,s){const a=mS(i,o,s);return i.inclusive?a<=0:a<0}(n.startAt,Xl(n),r)||n.endAt&&!function(i,o,s){const a=mS(i,o,s);return i.inclusive?a>=0:a>0}(n.endAt,Xl(n),r))}(t,e)}function a3(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lC(t){return(e,n)=>{let r=!1;for(const i of Xl(t)){const o=l3(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function l3(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(i,o,s){const a=o.data.field(i),l=s.data.field(i);return a!==null&&l!==null?Zs(a,l):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
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
 */function u3(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rg(e)?"-0":e}}function c3(t){return{integerValue:""+t}}/**
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
 */class ih{constructor(){this._=void 0}}function f3(t,e,n){return t instanceof ug?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Nf?uC(t,e):t instanceof Uf?cC(t,e):function(r,i){const o=h3(r,i),s=vS(o)+vS(r.yt);return og(o)&&og(r.yt)?c3(s):u3(r.It,s)}(t,e)}function d3(t,e,n){return t instanceof Nf?uC(t,e):t instanceof Uf?cC(t,e):n}function h3(t,e){return t instanceof cg?og(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ug extends ih{}class Nf extends ih{constructor(e){super(),this.elements=e}}function uC(t,e){const n=fC(e);for(const r of t.elements)n.some(i=>vr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Uf extends ih{constructor(e){super(),this.elements=e}}function cC(t,e){let n=fC(e);for(const r of t.elements)n=n.filter(i=>!vr(i,r));return{arrayValue:{values:n}}}class cg extends ih{constructor(e,n){super(),this.It=e,this.yt=n}}function vS(t){return et(t.integerValue||t.doubleValue)}function fC(t){return Dy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function p3(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Nf&&r instanceof Nf||n instanceof Uf&&r instanceof Uf?Qs(n.elements,r.elements,vr):n instanceof cg&&r instanceof cg?vr(n.yt,r.yt):n instanceof ug&&r instanceof ug}(t.transform,e.transform)}class vo{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vo}static exists(e){return new vo(void 0,e)}static updateTime(e){return new vo(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $c(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fy{}function dC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new g3(t.key,vo.none()):new By(t.key,t.data,vo.none());{const n=t.data,r=lr.empty();let i=new lt(tn.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new oh(t.key,r,new yo(i.toArray()),vo.none())}}function m3(t,e,n){t instanceof By?function(r,i,o){const s=r.value.clone(),a=SS(r.fieldTransforms,i,o.transformResults);s.setAll(a),i.convertToFoundDocument(o.version,s).setHasCommittedMutations()}(t,e,n):t instanceof oh?function(r,i,o){if(!$c(r.precondition,i))return void i.convertToUnknownDocument(o.version);const s=SS(r.fieldTransforms,i,o.transformResults),a=i.data;a.setAll(hC(r)),a.setAll(s),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function cl(t,e,n,r){return t instanceof By?function(i,o,s,a){if(!$c(i.precondition,o))return s;const l=i.value.clone(),u=bS(i.fieldTransforms,a,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof oh?function(i,o,s,a){if(!$c(i.precondition,o))return s;const l=bS(i.fieldTransforms,a,o),u=o.data;return u.setAll(hC(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),s===null?null:s.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,s){return $c(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):s}(t,e,n)}function wS(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Qs(n,r,(i,o)=>p3(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class By extends Fy{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class oh extends Fy{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function hC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function SS(t,e,n){const r=new Map;rt(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,d3(s,a,n[i]))}return r}function bS(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,f3(o,s,e))}return r}class g3 extends Fy{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class y3{constructor(e){this.count=e}}/**
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
 */var Ze,de;function pC(t){if(t===void 0)return Wr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ze.OK:return V.OK;case Ze.CANCELLED:return V.CANCELLED;case Ze.UNKNOWN:return V.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return V.INTERNAL;case Ze.UNAVAILABLE:return V.UNAVAILABLE;case Ze.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ze.NOT_FOUND:return V.NOT_FOUND;case Ze.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ze.ABORTED:return V.ABORTED;case Ze.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ze.DATA_LOSS:return V.DATA_LOSS;default:return oe()}}(de=Ze||(Ze={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ha{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zd(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return VL(this.inner)}size(){return this.innerSize}}/**
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
 */const v3=new pt(J.comparator);function $i(){return v3}const mC=new pt(J.comparator);function qa(...t){let e=mC;for(const n of t)e=e.insert(n.key,n);return e}function w3(t){let e=mC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function co(){return fl()}function gC(){return fl()}function fl(){return new ha(t=>t.toString(),(t,e)=>t.isEqual(e))}new pt(J.comparator);const S3=new lt(J.comparator);function pe(...t){let e=S3;for(const n of t)e=e.add(n);return e}const b3=new lt(Ee);function yC(){return b3}/**
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
 */class sh{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Iu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sh(ae.min(),i,yC(),$i(),pe())}}class Iu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Iu(r,n,pe(),pe(),pe())}}/**
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
 */class Dc{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class vC{constructor(e,n){this.targetId=e,this.At=n}}class wC{constructor(e,n,r=Mt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ES{constructor(){this.Rt=0,this.bt=xS(),this.Pt=Mt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=pe(),n=pe(),r=pe();return this.bt.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:oe()}}),new Iu(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=xS()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class E3{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=$i(),this.qt=kS(),this.Kt=new lt(Ee)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const o=i.target;if(sg(o))if(r===0){const s=new J(o.path);this.jt(n,s,bt.newNoDocument(s,ae.min()))}else rt(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((o,s)=>{const a=this.Xt(s);if(a){if(o.current&&sg(a.target)){const l=new J(a.target.path);this.Ut.get(l)!==null||this.ee(s,l)||this.jt(s,l,bt.newNoDocument(l,e))}o.Dt&&(n.set(s,o.xt()),o.Nt())}});let r=pe();this.qt.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(o))}),this.Ut.forEach((o,s)=>s.setReadTime(e));const i=new sh(e,n,this.Kt,this.Ut,r);return this.Ut=$i(),this.qt=kS(),this.Kt=new lt(Ee),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new ES,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new lt(Ee),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new ES),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function kS(){return new pt(J.comparator)}function xS(){return new pt(J.comparator)}/**
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
 */const k3=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),x3=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class _3{constructor(e,n){this.databaseId=e,this.gt=n}}function C3(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function T3(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Yl(t){return rt(!!t),ae.fromTimestamp(function(e){const n=Ui(e);return new cn(n.seconds,n.nanos)}(t))}function z3(t,e){return function(n){return new $e(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function SC(t){const e=$e.fromString(t);return rt(kC(e)),e}function _p(t,e){const n=SC(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(bC(n))}function fg(t,e){return z3(t.databaseId,e)}function I3(t){const e=SC(t);return e.length===4?$e.emptyPath():bC(e)}function _S(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bC(t){return rt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function P3(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(l,u){return l.gt?(rt(u===void 0||typeof u=="string"),Mt.fromBase64String(u||"")):(rt(u===void 0||u instanceof Uint8Array),Mt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(l){const u=l.code===void 0?V.UNKNOWN:pC(l.code);return new Z(u,l.message||"")}(s);n=new wC(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_p(t,r.document.name),o=Yl(r.document.updateTime),s=new lr({mapValue:{fields:r.document.fields}}),a=bt.newFoundDocument(i,o,s),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Dc(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_p(t,r.document),o=r.readTime?Yl(r.readTime):ae.min(),s=bt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Dc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_p(t,r.document),o=r.removedTargetIds||[];n=new Dc([],o,i,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,o=new y3(i),s=r.targetId;n=new vC(s,o)}}return n}function O3(t,e){return{documents:[fg(t,e.path)]}}function R3(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=fg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(d=>function(p){if(p.op==="=="){if(hS(p.value))return{unaryFilter:{field:ts(p.field),op:"IS_NAN"}};if(dS(p.value))return{unaryFilter:{field:ts(p.field),op:"IS_NULL"}}}else if(p.op==="!="){if(hS(p.value))return{unaryFilter:{field:ts(p.field),op:"IS_NOT_NAN"}};if(dS(p.value))return{unaryFilter:{field:ts(p.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(p.field),op:$3(p.op),value:p.value}}}(d));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:ts(d.field),direction:U3(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(l,u){return l.gt||eh(u)?u:{value:u}}(t,e.limit);var a;return s!==null&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function A3(t){let e=I3(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){rt(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let o=[];n.where&&(o=EC(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(d=>function(p){return new ul(gs(p.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d)));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,eh(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,m=d.values||[];return new Af(m,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,m=d.values||[];return new Af(m,p)}(n.endAt)),r3(e,i,s,o,a,"F",l,u)}function N3(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return oe()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function EC(t){return t?t.unaryFilter!==void 0?[M3(t)]:t.fieldFilter!==void 0?[D3(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>EC(e)).reduce((e,n)=>e.concat(n)):oe():[]}function U3(t){return k3[t]}function $3(t){return x3[t]}function ts(t){return{fieldPath:t.canonicalString()}}function gs(t){return tn.fromServerFormat(t.fieldPath)}function D3(t){return rn.create(gs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(t.fieldFilter.op),t.fieldFilter.value)}function M3(t){switch(t.unaryFilter.op){case"IS_NAN":const e=gs(t.unaryFilter.field);return rn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=gs(t.unaryFilter.field);return rn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=gs(t.unaryFilter.field);return rn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=gs(t.unaryFilter.field);return rn.create(i,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}function kC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class L3{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&m3(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=cl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=cl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gC();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=dC(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pe())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(n,r)=>wS(n,r))&&Qs(this.baseMutations,e.baseMutations,(n,r)=>wS(n,r))}}/**
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
 */class j3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wo{constructor(e,n,r,i,o=ae.min(),s=ae.min(),a=Mt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(e){return new wo(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new wo(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new wo(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class F3{constructor(e){this.re=e}}function B3(t){const e=A3({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ag(e,e.limit,"L"):e}/**
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
 */class V3{constructor(){this.Ye=new W3}addToCollectionParentIndex(e,n){return this.Ye.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(Ni.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(Ni.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class W3{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new lt($e.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new lt($e.comparator)).toArray()}}/**
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
 */class ea{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ea(0)}static vn(){return new ea(-1)}}/**
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
 */class H3{constructor(){this.changes=new ha(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class q3{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class K3{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&cl(r.mutation,i,yo.empty(),cn.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=pe()){const i=co();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=qa();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=co();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,pe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=$i();const s=fl(),a=fl();return n.forEach((l,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof oh)?o=o.insert(u.key,u):d!==void 0&&(s.set(u.key,d.mutation.getFieldMask()),cl(d.mutation,u,d.mutation.getFieldMask(),cn.now()))}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((u,d)=>s.set(u,d)),n.forEach((u,d)=>{var p;return a.set(u,new q3(d,(p=s.get(u))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fl();let i=new pt((s,a)=>s-a),o=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||yo.empty();d=a.applyToLocalView(u,d),r.set(l,d);const p=(i.get(a.batchId)||pe()).add(l);i=i.insert(a.batchId,p)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,p=gC();d.forEach(m=>{if(!o.has(m)){const y=dC(n.get(m),r.get(m));y!==null&&p.set(m,y),o=o.add(m)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,p))}return D.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return J.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):s3(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):D.resolve(co());let a=-1,l=o;return s.next(u=>D.forEach(u,(d,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),o.get(d)?D.resolve():this.getBaseDocument(e,d,p).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,l,u,pe())).next(d=>({batchId:a,changes:w3(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=qa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let o=qa();return this.indexManager.getCollectionParents(e,i).next(s=>D.forEach(s,a=>{const l=function(u,d){return new th(d,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(o=>(i=o,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(o=>{o.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,bt.newInvalidDocument(u)))});let s=qa();return i.forEach((a,l)=>{const u=o.get(a);u!==void 0&&cl(u.mutation,l,yo.empty(),cn.now()),jy(n,l)&&(s=s.insert(a,l))}),s})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):D.resolve(bt.newInvalidDocument(n))}}/**
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
 */class G3{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return D.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Yl(r.createTime)}),D.resolve()}getNamedQuery(e,n){return D.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:B3(r.bundledQuery),readTime:Yl(r.readTime)}}(n)),D.resolve()}}/**
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
 */class X3{constructor(){this.overlays=new pt(J.comparator),this.es=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=co();return D.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ue(e,n,o)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.es.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=co(),o=n.length+1,s=new J(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new pt((u,d)=>u-d);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=o.get(u.largestBatchId);d===null&&(d=co(),o=o.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=co(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return D.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new j3(n,r));let o=this.es.get(n);o===void 0&&(o=pe(),this.es.set(n,o)),this.es.set(n,o.add(r.key))}}/**
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
 */class Vy{constructor(){this.ns=new lt(ut.ss),this.rs=new lt(ut.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new ut(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new ut(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new J(new $e([])),r=new ut(n,e),i=new ut(n,e+1),o=[];return this.rs.forEachInRange([r,i],s=>{this.cs(s),o.push(s.key)}),o}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new J(new $e([])),r=new ut(n,e),i=new ut(n,e+1);let o=pe();return this.rs.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new ut(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return J.comparator(e.key,n.key)||Ee(e._s,n._s)}static os(e,n){return Ee(e._s,n._s)||J.comparator(e.key,n.key)}}/**
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
 */class Y3{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new lt(ut.ss)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new L3(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.gs=this.gs.add(new ut(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(s)}lookupMutationBatch(e,n){return D.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),o=i<0?0:i;return D.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),o=[];return this.gs.forEachInRange([r,i],s=>{const a=this.ys(s._s);o.push(a)}),D.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(Ee);return n.forEach(i=>{const o=new ut(i,0),s=new ut(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([o,s],a=>{r=r.add(a._s)})}),D.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;J.isDocumentKey(o)||(o=o.child(""));const s=new ut(new J(o),0);let a=new lt(Ee);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},s),D.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){rt(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return D.forEach(n.mutations,i=>{const o=new ut(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new ut(n,0),i=this.gs.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Q3{constructor(e){this.Es=e,this.docs=new pt(J.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=$i();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():bt.newInvalidDocument(i))}),D.resolve(r)}getAllFromCollection(e,n,r){let i=$i();const o=new J(n.child("")),s=this.docs.getIteratorFrom(o);for(;s.hasNext();){const{key:a,value:{document:l}}=s.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||jL(LL(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,n,r,i){oe()}As(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new J3(this)}getSize(e){return D.resolve(this.size)}}class J3 extends H3{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class Z3{constructor(e){this.persistence=e,this.Rs=new ha(n=>My(n),Ly),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Vy,this.targetCount=0,this.vs=ea.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),D.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ea(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.Dn(n),D.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Rs.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(o).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),D.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Ps.containsKey(n))}}/**
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
 */class e4{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new $y(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Z3(this),this.indexManager=new V3,this.remoteDocumentCache=function(r){return new Q3(r)}(r=>this.referenceDelegate.xs(r)),this.It=new F3(n),this.Ns=new G3(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new X3,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new Y3(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new t4(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(o=>this.referenceDelegate.Os(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ms(e,n){return D.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class t4 extends BL{constructor(e){super(),this.currentSequenceNumber=e}}class Wy{constructor(e){this.persistence=e,this.Fs=new Vy,this.$s=null}static Bs(e){return new Wy(e)}get Ls(){if(this.$s)return this.$s;throw oe()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),D.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Ls.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Ls,r=>{const i=J.fromPath(r);return this.Us(e,i).next(o=>{o||n.removeEntry(i,ae.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return D.or([()=>D.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Hy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=pe(),i=pe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Hy(e,n.fromCache,r,i)}}/**
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
 */class n4{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(o=>o||this.Oi(e,n,i,r)).next(o=>o||this.Mi(e,n))}ki(e,n){if(yS(n))return D.resolve(null);let r=Hr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ag(n,null,"F"),r=Hr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=pe(...o);return this.Ni.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,s,l.readTime)?this.ki(e,ag(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return yS(n)||i.isEqual(ae.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(o=>{const s=this.Fi(n,o);return this.$i(n,s,r,i)?this.Mi(e,n):(lS()<=we.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),lg(n)),this.Bi(e,s,n,ML(i,-1)))})}Fi(e,n){let r=new lt(lC(e));return n.forEach((i,o)=>{jy(e,o)&&(r=r.add(o))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Mi(e,n){return lS()<=we.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",lg(n)),this.Ni.getDocumentsMatchingQuery(e,n,Ni.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
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
 */class r4{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new pt(Ee),this.qi=new ha(o=>My(o),Ly),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new K3(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function i4(t,e,n,r){return new r4(t,e,n,r)}async function xC(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=pe();for(const u of i){s.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of o){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:s,addedBatchIds:a}))})})}function _C(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function o4(t,e){const n=ye(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;a.push(n.Cs.removeMatchingKeys(o,d.removedDocuments,p).next(()=>n.Cs.addMatchingKeys(o,d.addedDocuments,p)));let y=m.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.has(p)?y=y.withResumeToken(Mt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(p,y),function(w,v,c){return w.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:c.addedDocuments.size+c.modifiedDocuments.size+c.removedDocuments.size>0}(m,y,d)&&a.push(n.Cs.updateTargetData(o,y))});let l=$i(),u=pe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,d))}),a.push(s4(o,s,e.documentUpdates).next(d=>{l=d.Wi,u=d.zi})),!r.isEqual(ae.min())){const d=n.Cs.getLastRemoteSnapshotVersion(o).next(p=>n.Cs.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(d)}return D.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,u)).next(()=>l)}).then(o=>(n.Ui=i,o))}function s4(t,e,n){let r=pe(),i=pe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=$i();return n.forEach((a,l)=>{const u=o.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:s,zi:i}})}function a4(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(o=>o?(i=o,D.resolve(i)):n.Cs.allocateTargetId(r).next(s=>(i=new wo(e,s,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function dg(t,e,n){const r=ye(t),i=r.Ui.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!zu(s))throw s;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function CS(t,e,n){const r=ye(t);let i=ae.min(),o=pe();return r.persistence.runTransaction("Execute query","readonly",s=>function(a,l,u){const d=ye(a),p=d.qi.get(u);return p!==void 0?D.resolve(d.Ui.get(p)):d.Cs.getTargetData(l,u)}(r,s,Hr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.Li.getDocumentsMatchingQuery(s,e,n?i:ae.min(),n?o:pe())).next(a=>(l4(r,a3(e),a),{documents:a,Hi:o})))}function l4(t,e,n){let r=t.Ki.get(e)||ae.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.Ki.set(e,r)}class TS{constructor(){this.activeTargetIds=yC()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class u4{constructor(){this.Lr=new TS,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new TS,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class c4{qr(e){}shutdown(){}}/**
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
 */class zS{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const f4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class d4{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class h4 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,o){const s=this.ho(e,n);Q("RestConnection","Sending: ",s,r);const a={};return this.lo(a,i,o),this.fo(e,s,a,r).then(l=>(Q("RestConnection","Received: ",l),l),l=>{throw ng("RestConnection",`${e} failed with error: `,l,"url: ",s,"request:",r),l})}_o(e,n,r,i,o,s){return this.ao(e,n,r,i,o)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+da,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}ho(e,n){const r=f4[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((o,s)=>{const a=new zL;a.setWithCredentials(!0),a.listenOnce(_L.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case kp.NO_ERROR:const d=a.getResponseJson();Q("Connection","XHR received:",JSON.stringify(d)),o(d);break;case kp.TIMEOUT:Q("Connection",'RPC "'+e+'" timed out'),s(new Z(V.DEADLINE_EXCEEDED,"Request time out"));break;case kp.HTTP_ERROR:const p=a.getStatus();if(Q("Connection",'RPC "'+e+'" failed with status:',p,"response text:",a.getResponseText()),p>0){let m=a.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=(u=m)===null||u===void 0?void 0:u.error;if(y&&y.status&&y.message){const w=function(v){const c=v.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(c)>=0?c:V.UNKNOWN}(y.status);s(new Z(w,y.message))}else s(new Z(V.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new Z(V.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{Q("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kL(),s=xL(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new TL({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");Q("Connection","Creating WebChannel: "+l,a);const u=o.createWebChannel(l,a);let d=!1,p=!1;const m=new d4({Hr:w=>{p?Q("Connection","Not sending because WebChannel is closed:",w):(d||(Q("Connection","Opening WebChannel transport."),u.open(),d=!0),Q("Connection","WebChannel sending:",w),u.send(w))},Jr:()=>u.close()}),y=(w,v,c)=>{w.listen(v,f=>{try{c(f)}catch(h){setTimeout(()=>{throw h},0)}})};return y(u,mc.EventType.OPEN,()=>{p||Q("Connection","WebChannel transport opened.")}),y(u,mc.EventType.CLOSE,()=>{p||(p=!0,Q("Connection","WebChannel transport closed"),m.io())}),y(u,mc.EventType.ERROR,w=>{p||(p=!0,ng("Connection","WebChannel transport errored:",w),m.io(new Z(V.UNAVAILABLE,"The operation could not be completed")))}),y(u,mc.EventType.MESSAGE,w=>{var v;if(!p){const c=w.data[0];rt(!!c);const f=c,h=f.error||((v=f[0])===null||v===void 0?void 0:v.error);if(h){Q("Connection","WebChannel received error:",h);const g=h.status;let S=function(E){const k=Ze[E];if(k!==void 0)return pC(k)}(g),b=h.message;S===void 0&&(S=V.INTERNAL,b="Unknown error status: "+g+" with message "+h.message),p=!0,m.io(new Z(S,b)),u.close()}else Q("Connection","WebChannel received:",c),m.ro(c)}}),y(s,CL.STAT_EVENT,w=>{w.stat===sS.PROXY?Q("Connection","Detected buffering proxy"):w.stat===sS.NOPROXY&&Q("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.so()},0),m}}function Cp(){return typeof document<"u"?document:null}/**
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
 */function CC(t){return new _3(t,!0)}class TC{constructor(e,n,r=1e3,i=1.5,o=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=o,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class p4{constructor(e,n,r,i,o,s,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new TC(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Wr(n.toString()),Wr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new Z(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class m4 extends p4{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.It=o}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=P3(this.It,e),r=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?Yl(o.readTime):ae.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=_S(this.It),n.addTarget=function(i,o){let s;const a=o.target;return s=sg(a)?{documents:O3(i,a)}:{query:R3(i,a)},s.targetId=o.targetId,o.resumeToken.approximateByteSize()>0?s.resumeToken=T3(i,o.resumeToken):o.snapshotVersion.compareTo(ae.min())>0&&(s.readTime=C3(i,o.snapshotVersion.toTimestamp())),s}(this.It,e);const r=N3(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=_S(this.It),n.removeTarget=e,this.Bo(n)}}/**
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
 */class g4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new Z(V.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.ao(e,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(V.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection._o(e,n,r,o,s,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(V.UNKNOWN,o.toString())})}terminate(){this.nu=!0}}class y4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Wr(n),this.ou=!1):Q("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class v4{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=o,this.mu.qr(s=>{r.enqueueAndForget(async()=>{Ou(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ye(a);l._u.add(4),await Pu(l),l.gu.set("Unknown"),l._u.delete(4),await ah(l)}(this))})}),this.gu=new y4(r,i)}}async function ah(t){if(Ou(t))for(const e of t.wu)await e(!0)}async function Pu(t){for(const e of t.wu)await e(!1)}function zC(t,e){const n=ye(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Gy(n)?Ky(n):pa(n).ko()&&qy(n,e))}function IC(t,e){const n=ye(t),r=pa(n);n.du.delete(e),r.ko()&&PC(n,e),n.du.size===0&&(r.ko()?r.Fo():Ou(n)&&n.gu.set("Unknown"))}function qy(t,e){t.yu.Mt(e.targetId),pa(t).zo(e)}function PC(t,e){t.yu.Mt(e),pa(t).Ho(e)}function Ky(t){t.yu=new E3({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),pa(t).start(),t.gu.uu()}function Gy(t){return Ou(t)&&!pa(t).No()&&t.du.size>0}function Ou(t){return ye(t)._u.size===0}function OC(t){t.yu=void 0}async function w4(t){t.du.forEach((e,n)=>{qy(t,e)})}async function S4(t,e){OC(t),Gy(t)?(t.gu.hu(e),Ky(t)):t.gu.set("Unknown")}async function b4(t,e,n){if(t.gu.set("Online"),e instanceof wC&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const s of i.targetIds)r.du.has(s)&&(await r.remoteSyncer.rejectListen(s,o),r.du.delete(s),r.yu.removeTarget(s))}(t,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await IS(t,r)}else if(e instanceof Dc?t.yu.Gt(e):e instanceof vC?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(ae.min()))try{const r=await _C(t.localStore);n.compareTo(r)>=0&&await function(i,o){const s=i.yu.te(o);return s.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,o))}}),s.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Mt.EMPTY_BYTE_STRING,l.snapshotVersion)),PC(i,a);const u=new wo(l.target,a,1,l.sequenceNumber);qy(i,u)}),i.remoteSyncer.applyRemoteEvent(s)}(t,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await IS(t,r)}}async function IS(t,e,n){if(!zu(e))throw e;t._u.add(1),await Pu(t),t.gu.set("Offline"),n||(n=()=>_C(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ah(t)})}async function PS(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Ou(n);n._u.add(3),await Pu(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ah(n)}async function E4(t,e){const n=ye(t);e?(n._u.delete(2),await ah(n)):e||(n._u.add(2),await Pu(n),n.gu.set("Unknown"))}function pa(t){return t.pu||(t.pu=function(e,n,r){const i=ye(e);return i.su(),new m4(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:w4.bind(null,t),Zr:S4.bind(null,t),Wo:b4.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Gy(t)?Ky(t):t.gu.set("Unknown")):(await t.pu.stop(),OC(t))})),t.pu}/**
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
 */class Xy{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new go,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new Xy(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function RC(t,e){if(Wr("AsyncQueue",`${e}: ${t}`),zu(t))return new Z(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class zs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=qa(),this.sortedSet=new pt(this.comparator)}static emptySet(e){return new zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class OS{constructor(){this.Tu=new pt(J.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):oe():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ta{constructor(e,n,r,i,o,s,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new ta(e,n,zs.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class k4{constructor(){this.Au=void 0,this.listeners=[]}}class x4{constructor(){this.queries=new ha(e=>aC(e),rh),this.onlineState="Unknown",this.Ru=new Set}}async function AC(t,e){const n=ye(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new k4),i)try{o.Au=await n.onListen(r)}catch(s){const a=RC(s,`Initialization of query '${lg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,o),o.listeners.push(e),e.bu(n.onlineState),o.Au&&e.Pu(o.Au)&&Yy(n)}async function NC(t,e){const n=ye(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const s=o.listeners.indexOf(e);s>=0&&(o.listeners.splice(s,1),i=o.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _4(t,e){const n=ye(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.listeners)a.Pu(i)&&(r=!0);s.Au=i}}r&&Yy(n)}function C4(t,e,n){const r=ye(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function Yy(t){t.Ru.forEach(e=>{e.next()})}class UC{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ta(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ta.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class $C{constructor(e){this.key=e}}class DC{constructor(e){this.key=e}}class T4{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=pe(),this.mutatedKeys=pe(),this.Gu=lC(e),this.Qu=new zs(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new OS,i=n?n.Qu:this.Qu;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),y=jy(this.query,p)?p:null,w=!!m&&this.mutatedKeys.has(m.key),v=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let c=!1;m&&y?m.data.isEqual(y.data)?w!==v&&(r.track({type:3,doc:y}),c=!0):this.Hu(m,y)||(r.track({type:2,doc:y}),c=!0,(l&&this.Gu(y,l)>0||u&&this.Gu(y,u)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),c=!0):m&&!y&&(r.track({type:1,doc:m}),c=!0,(l||u)&&(a=!0)),c&&(y?(s=s.add(y),o=v?o.add(d):o.delete(d)):(s=s.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const d=this.query.limitType==="F"?s.last():s.first();s=s.delete(d.key),o=o.delete(d.key),r.track({type:1,doc:d})}return{Qu:s,zu:r,$i:a,mutatedKeys:o}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const o=e.zu.Eu();o.sort((u,d)=>function(p,m){const y=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return y(p)-y(m)}(u.type,d.type)||this.Gu(u.doc,d.doc)),this.Ju(r);const s=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,o.length!==0||l?{snapshot:new ta(this.query,e.Qu,i,o,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new OS,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=pe(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new DC(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new $C(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=pe();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ta.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class z4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class I4{constructor(e){this.key=e,this.nc=!1}}class P4{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new ha(a=>aC(a),rh),this.rc=new Map,this.oc=new Set,this.uc=new pt(J.comparator),this.cc=new Map,this.ac=new Vy,this.hc={},this.lc=new Map,this.fc=ea.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function O4(t,e){const n=M4(t);let r,i;const o=n.ic.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.ec();else{const s=await a4(n.localStore,Hr(e));n.isPrimaryClient&&zC(n.remoteStore,s);const a=n.sharedClientState.addLocalQueryTarget(s.targetId);r=s.targetId,i=await R4(n,e,r,a==="current",s.resumeToken)}return i}async function R4(t,e,n,r,i){t._c=(p,m,y)=>async function(w,v,c,f){let h=v.view.Wu(c);h.$i&&(h=await CS(w.localStore,v.query,!1).then(({documents:b})=>v.view.Wu(b,h)));const g=f&&f.targetChanges.get(v.targetId),S=v.view.applyChanges(h,w.isPrimaryClient,g);return AS(w,v.targetId,S.Xu),S.snapshot}(t,p,m,y);const o=await CS(t.localStore,e,!0),s=new T4(e,o.Hi),a=s.Wu(o.documents),l=Iu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=s.applyChanges(a,t.isPrimaryClient,l);AS(t,n,u.Xu);const d=new z4(e,n,s);return t.ic.set(e,d),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function A4(t,e){const n=ye(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(o=>!rh(o,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dg(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),IC(n.remoteStore,r.targetId),hg(n,r.targetId)}).catch(Uy)):(hg(n,r.targetId),await dg(n.localStore,r.targetId,!0))}async function MC(t,e){const n=ye(t);try{const r=await o4(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.cc.get(o);s&&(rt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.nc=!0:i.modifiedDocuments.size>0?rt(s.nc):i.removedDocuments.size>0&&(rt(s.nc),s.nc=!1))}),await jC(n,r,e)}catch(r){await Uy(r)}}function RS(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((o,s)=>{const a=s.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(o,s){const a=ye(o);a.onlineState=s;let l=!1;a.queries.forEach((u,d)=>{for(const p of d.listeners)p.bu(s)&&(l=!0)}),l&&Yy(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function N4(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),o=i&&i.key;if(o){let s=new pt(J.comparator);s=s.insert(o,bt.newNoDocument(o,ae.min()));const a=pe().add(o),l=new sh(ae.min(),new Map,new lt(Ee),s,a);await MC(r,l),r.uc=r.uc.remove(o),r.cc.delete(e),Qy(r)}else await dg(r.localStore,e,!1).then(()=>hg(r,e,n)).catch(Uy)}function hg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||LC(t,r)})}function LC(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(IC(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Qy(t))}function AS(t,e,n){for(const r of n)r instanceof $C?(t.ac.addReference(r.key,e),U4(t,r)):r instanceof DC?(Q("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||LC(t,r.key)):oe()}function U4(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(Q("SyncEngine","New document in limbo: "+n),t.oc.add(r),Qy(t))}function Qy(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new J($e.fromString(e)),r=t.fc.next();t.cc.set(r,new I4(n)),t.uc=t.uc.insert(n,r),zC(t.remoteStore,new wo(Hr(nh(n.path)),r,2,$y.at))}}async function jC(t,e,n){const r=ye(t),i=[],o=[],s=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{s.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const d=Hy.Ci(l.targetId,u);o.push(d)}}))}),await Promise.all(s),r.sc.Wo(i),await async function(a,l){const u=ye(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>D.forEach(l,p=>D.forEach(p.Si,m=>u.persistence.referenceDelegate.addReference(d,p.targetId,m)).next(()=>D.forEach(p.Di,m=>u.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))}catch(d){if(!zu(d))throw d;Q("LocalStore","Failed to update sequence numbers: "+d)}for(const d of l){const p=d.targetId;if(!d.fromCache){const m=u.Ui.get(p),y=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(y);u.Ui=u.Ui.insert(p,w)}}}(r.localStore,o))}async function $4(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await xC(n.localStore,e);n.currentUser=e,function(i,o){i.lc.forEach(s=>{s.forEach(a=>{a.reject(new Z(V.CANCELLED,o))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jC(n,r.ji)}}function D4(t,e){const n=ye(t),r=n.cc.get(e);if(r&&r.nc)return pe().add(r.key);{let i=pe();const o=n.rc.get(e);if(!o)return i;for(const s of o){const a=n.ic.get(s);i=i.unionWith(a.view.ju)}return i}}function M4(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=MC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=D4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=N4.bind(null,e),e.sc.Wo=_4.bind(null,e.eventManager),e.sc.wc=C4.bind(null,e.eventManager),e}class L4{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=CC(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return i4(this.persistence,new n4,e.initialUser,this.It)}yc(e){return new e4(Wy.Bs,this.It)}gc(e){return new u4}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class j4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>RS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$4.bind(null,this.syncEngine),await E4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new x4}createDatastore(e){const n=CC(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new h4(i));var i;return function(o,s,a,l){return new g4(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,o=a=>RS(this.syncEngine,a,0),s=zS.C()?new zS:new c4,new v4(n,r,i,o,s);var n,r,i,o,s}createSyncEngine(e,n){return function(r,i,o,s,a,l,u){const d=new P4(r,i,o,s,a,l);return u&&(d.dc=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ye(e);Q("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Pu(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function FC(t,e,n){if(!n)throw new Z(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function F4(t,e,n,r){if(e===!0&&r===!0)throw new Z(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function NS(t){if(!J.isDocumentKey(t))throw new Z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function US(t){if(J.isDocumentKey(t))throw new Z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function B4(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function Is(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=B4(t);throw new Z(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const $S=new Map;class DS{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,F4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class lh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new DS({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new DS(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new IL;switch(n.type){case"gapi":const r=n.client;return new AL(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=$S.get(e);n&&(Q("ComponentProvider","Removing Datastore"),$S.delete(e),n.terminate())}(this),Promise.resolve()}}function V4(t,e,n,r={}){var i;const o=(t=Is(t,lh))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==e&&ng("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let s,a;if(typeof r.mockUserToken=="string")s=r.mockUserToken,a=Rt.MOCK_USER;else{s=fM(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new Z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Rt(l)}t._authCredentials=new PL(new nC(s,a))}}/**
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
 */class Xn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xn(this.firestore,e,this._key)}}class uh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new uh(this.firestore,e,this._query)}}class Pi extends uh{constructor(e,n,r){super(e,n,nh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xn(this.firestore,null,new J(e))}withConverter(e){return new Pi(this.firestore,e,this._path)}}function uB(t,e,...n){if(t=Qr(t),FC("collection","path",e),t instanceof lh){const r=$e.fromString(e,...n);return US(r),new Pi(t,null,r)}{if(!(t instanceof Xn||t instanceof Pi))throw new Z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return US(r),new Pi(t.firestore,null,r)}}function cB(t,e,...n){if(t=Qr(t),arguments.length===1&&(e=rC.R()),FC("doc","path",e),t instanceof lh){const r=$e.fromString(e,...n);return NS(r),new Xn(t,null,new J(r))}{if(!(t instanceof Xn||t instanceof Pi))throw new Z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return NS(r),new Xn(t.firestore,t instanceof Pi?t.converter:null,new J(r))}}/**
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
 */class BC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Wr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class W4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Rt.UNAUTHENTICATED,this.clientId=rC.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{Q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Z(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new go;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=RC(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function H4(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function q4(t,e){t.asyncQueue.verifyOperationInProgress();const n=await K4(t);Q("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>PS(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,o)=>PS(e.remoteStore,o)),t.onlineComponents=e}async function K4(t){return t.offlineComponents||(Q("FirestoreClient","Using default OfflineComponentProvider"),await H4(t,new L4)),t.offlineComponents}async function G4(t){return t.onlineComponents||(Q("FirestoreClient","Using default OnlineComponentProvider"),await q4(t,new j4)),t.onlineComponents}async function pg(t){const e=await G4(t),n=e.eventManager;return n.onListen=O4.bind(null,e.syncEngine),n.onUnlisten=A4.bind(null,e.syncEngine),n}function X4(t,e,n={}){const r=new go;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,s,a,l){const u=new BC({next:p=>{o.enqueueAndForget(()=>NC(i,d));const m=p.docs.has(s);!m&&p.fromCache?l.reject(new Z(V.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&a&&a.source==="server"?l.reject(new Z(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),d=new UC(nh(s.path),u,{includeMetadataChanges:!0,Nu:!0});return AC(i,d)}(await pg(t),t.asyncQueue,e,n,r)),r.promise}class Y4{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new TC(this,"async_queue_retry"),this.Wc=()=>{const n=Cp();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Cp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Cp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new go;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!zu(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(r);throw Wr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Xy.createAndSchedule(this,e,n,r,o=>this.Yc(o));return this.qc.push(i),i}zc(){this.Kc&&oe()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function MS(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class $f extends lh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Y4,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||WC(this),this._firestoreClient.terminate()}}function fB(t,e){const n=typeof t=="object"?t:Qx(),r=typeof t=="string"?t:e||"(default)",i=dy(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=lM("firestore");o&&V4(i,...o)}return i}function VC(t){return t._firestoreClient||WC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function WC(t){var e;const n=t._freezeSettings(),r=function(i,o,s,a){return new HL(i,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new W4(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class Df{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Df(Mt.fromBase64String(e))}catch(n){throw new Z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Df(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class HC{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Q4{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}const J4=new RegExp("[~\\*/\\[\\]]");function Z4(t,e,n){if(e.search(J4)>=0)throw LS(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new HC(...e.split("."))._internalPath}catch{throw LS(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function LS(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new Z(V.INVALID_ARGUMENT,a+t+l)}/**
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
 */class qC{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Xn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ej(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(KC("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ej extends qC{data(){return super.data()}}function KC(t,e){return typeof e=="string"?Z4(t,e):e instanceof HC?e._internalPath:e._delegate._internalPath}/**
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
 */function tj(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class nj{convertValue(e,n="none"){switch(Ao(e)){case 0:return null;case 1:return e.booleanValue;case 2:return et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Js(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw oe()}}convertObject(e,n){const r={};return Zd(e.fields,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new Q4(et(e.latitude),et(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=oC(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ql(e));default:return null}}convertTimestamp(e){const n=Ui(e);return new cn(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);rt(kC(r));const i=new Kl(r.get(1),r.get(3)),o=new J(r.popFirst(5));return i.isEqual(n)||Wr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */class Ka{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GC extends qC{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(KC("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Mc extends GC{data(e={}){return super.data(e)}}class rj{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ka(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Mc(this._firestore,this._userDataWriter,r.key,r,new Ka(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(s=>{const a=new Mc(r._firestore,r._userDataWriter,s.doc.key,s.doc,new Ka(r._snapshot.mutatedKeys.has(s.doc.key),r._snapshot.fromCache),r.query.converter);return s.doc,{type:"added",doc:a,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(s=>i||s.type!==3).map(s=>{const a=new Mc(r._firestore,r._userDataWriter,s.doc.key,s.doc,new Ka(r._snapshot.mutatedKeys.has(s.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return s.type!==0&&(l=o.indexOf(s.doc.key),o=o.delete(s.doc.key)),s.type!==1&&(o=o.add(s.doc),u=o.indexOf(s.doc.key)),{type:ij(s.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ij(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
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
 */function dB(t){t=Is(t,Xn);const e=Is(t.firestore,$f);return X4(VC(e),t._key).then(n=>YC(e,t,n))}class XC extends nj{constructor(e){super(),this.firestore=e}convertBytes(e){return new Df(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xn(this.firestore,null,n)}}function hB(t,...e){var n,r,i;t=Qr(t);let o={includeMetadataChanges:!1},s=0;typeof e[s]!="object"||MS(e[s])||(o=e[s],s++);const a={includeMetadataChanges:o.includeMetadataChanges};if(MS(e[s])){const p=e[s];e[s]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[s+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[s+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let l,u,d;if(t instanceof Xn)u=Is(t.firestore,$f),d=nh(t._key.path),l={next:p=>{e[s]&&e[s](YC(u,t,p))},error:e[s+1],complete:e[s+2]};else{const p=Is(t,uh);u=Is(p.firestore,$f),d=p._query;const m=new XC(u);l={next:y=>{e[s]&&e[s](new rj(u,m,p,y))},error:e[s+1],complete:e[s+2]},tj(t._query)}return function(p,m,y,w){const v=new BC(w),c=new UC(m,v,y);return p.asyncQueue.enqueueAndForget(async()=>AC(await pg(p),c)),()=>{v.bc(),p.asyncQueue.enqueueAndForget(async()=>NC(await pg(p),c))}}(VC(u),d,a,l)}function YC(t,e,n){const r=n.docs.get(e._key),i=new XC(t);return new GC(t,i,e._key,r,new Ka(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){da=n})(vu),Xs(new Po("firestore",(n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),s=new $f(new OL(n.getProvider("auth-internal")),new UL(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kl(a.options.projectId,l)}(o,r),o);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),Ii(aS,"3.7.3",t),Ii(aS,"3.7.3","esm2017")})();function Jy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function QC(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oj=QC,JC=new gu("auth","Firebase",QC());/**
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
 */const jS=new cy("@firebase/auth");function Lc(t,...e){jS.logLevel<=we.ERROR&&jS.error(`Auth (${vu}): ${t}`,...e)}/**
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
 */function qr(t,...e){throw Zy(t,...e)}function pr(t,...e){return Zy(t,...e)}function sj(t,e,n){const r=Object.assign(Object.assign({},oj()),{[e]:n});return new gu("auth","Firebase",r).create(e,{appName:t.name})}function Zy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return JC.create(t,...e)}function te(t,e,...n){if(!t)throw Zy(e,...n)}function Rr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lc(e),new Error(e)}function Kr(t,e){t||Rr(e)}/**
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
 */const FS=new Map;function Ar(t){Kr(t instanceof Function,"Expected a class definition");let e=FS.get(t);return e?(Kr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,FS.set(t,e),e)}/**
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
 */function aj(t,e){const n=dy(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(kf(o,e!=null?e:{}))return i;qr(i,"already-initialized")}return n.initialize({options:e})}function lj(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function mg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uj(){return BS()==="http:"||BS()==="https:"}function BS(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cj(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uj()||ZD()||"connection"in navigator)?navigator.onLine:!0}function fj(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ru{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kr(n>e,"Short delay should be less than long delay!"),this.isMobile=JD()||eM()}get(){return cj()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ev(t,e){Kr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ZC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dj={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const hj=new Ru(3e4,6e4);function pj(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ch(t,e,n,r,i={}){return eT(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=yu(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ZC.fetch()(tT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function eT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dj),e);try{const i=new gj(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw vc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vc(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw vc(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw vc(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw sj(t,d,u);qr(t,d)}}catch(i){if(i instanceof Yr)throw i;qr(t,"network-request-failed")}}async function mj(t,e,n,r,i={}){const o=await ch(t,e,n,r,i);return"mfaPendingCredential"in o&&qr(t,"multi-factor-auth-required",{_serverResponse:o}),o}function tT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ev(t.config,i):`${t.config.apiScheme}://${i}`}class gj{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pr(this.auth,"network-request-failed")),hj.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pr(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function yj(t,e){return ch(t,"POST","/v1/accounts:delete",e)}async function vj(t,e){return ch(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function dl(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wj(t,e=!1){const n=Qr(t),r=await n.getIdToken(e),i=tv(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:dl(Tp(i.auth_time)),issuedAtTime:dl(Tp(i.iat)),expirationTime:dl(Tp(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Tp(t){return Number(t)*1e3}function tv(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Lc("JWT malformed, contained fewer than 3 sections"),null;try{const o=qx(r);return o?JSON.parse(o):(Lc("Failed to decode base64 JWT payload"),null)}catch(o){return Lc("Caught error parsing JWT payload as JSON",(e=o)===null||e===void 0?void 0:e.toString()),null}}function Sj(t){const e=tv(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ql(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yr&&bj(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bj({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ej{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=dl(this.lastLoginAt),this.creationTime=dl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mf(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ql(t,vj(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?_j(o.providerUserInfo):[],a=xj(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new nT(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function kj(t){const e=Qr(t);await Mf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xj(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _j(t){return t.map(e=>{var{providerId:n}=e,r=Jy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Cj(t,e){const n=await eT(t,{},async()=>{const r=yu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=tT(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ZC.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Jl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sj(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Cj(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Jl;return r&&(te(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(te(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jl,this.toJSON())}_performRefresh(){return Rr("not implemented")}}/**
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
 */function ii(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class So{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Jy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ej(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new nT(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Ql(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wj(this,e)}reload(){return kj(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new So(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ql(this,yj(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,c=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:S,isAnonymous:b,providerData:E,stsTokenManager:k}=n;te(g&&k,e,"internal-error");const _=Jl.fromJSON(this.name,k);te(typeof g=="string",e,"internal-error"),ii(p,e.name),ii(m,e.name),te(typeof S=="boolean",e,"internal-error"),te(typeof b=="boolean",e,"internal-error"),ii(y,e.name),ii(w,e.name),ii(v,e.name),ii(c,e.name),ii(f,e.name),ii(h,e.name);const C=new So({uid:g,auth:e,email:m,emailVerified:S,displayName:p,isAnonymous:b,photoURL:w,phoneNumber:y,tenantId:v,stsTokenManager:_,createdAt:f,lastLoginAt:h});return E&&Array.isArray(E)&&(C.providerData=E.map(x=>Object.assign({},x))),c&&(C._redirectEventId=c),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new Jl;i.updateFromServerResponse(n);const o=new So({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Mf(o),o}}/**
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
 */class rT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rT.type="NONE";const VS=rT;/**
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
 */function jc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=jc(this.userKey,i.apiKey,o),this.fullPersistenceKey=jc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?So._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ps(Ar(VS),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Ar(VS);const s=jc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const p=So._fromJSON(e,d);u!==o&&(a=p),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Ps(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Ps(o,e,r))}}/**
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
 */function WS(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lT(e))return"Blackberry";if(uT(e))return"Webos";if(nv(e))return"Safari";if((e.includes("chrome/")||oT(e))&&!e.includes("edge/"))return"Chrome";if(aT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iT(t=Dt()){return/firefox\//i.test(t)}function nv(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oT(t=Dt()){return/crios\//i.test(t)}function sT(t=Dt()){return/iemobile/i.test(t)}function aT(t=Dt()){return/android/i.test(t)}function lT(t=Dt()){return/blackberry/i.test(t)}function uT(t=Dt()){return/webos/i.test(t)}function fh(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tj(t=Dt()){var e;return fh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zj(){return tM()&&document.documentMode===10}function cT(t=Dt()){return fh(t)||aT(t)||uT(t)||lT(t)||/windows phone/i.test(t)||sT(t)}function Ij(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function fT(t,e=[]){let n;switch(t){case"Browser":n=WS(Dt());break;case"Worker":n=`${WS(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vu}/${r}`}/**
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
 */class Pj{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Oj{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new HS(this),this.idTokenSubscription=new HS(this),this.beforeStateQueue=new Pj(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=JC,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ar(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ps.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Mf(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fj()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Qr(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ar(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Ps.create(this,[Ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return te(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function rv(t){return Qr(t)}class HS{constructor(e){this.auth=e,this.observer=null,this.addObserver=gM(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Rj(t,e,n){const r=rv(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=dT(e),{host:s,port:a}=Aj(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Nj()}function dT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Aj(t){const e=dT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:qS(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:qS(s)}}}function qS(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Nj(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class hT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rr("not implemented")}_getIdTokenResponse(e){return Rr("not implemented")}_linkToIdToken(e,n){return Rr("not implemented")}_getReauthenticationResolver(e){return Rr("not implemented")}}/**
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
 */async function Os(t,e){return mj(t,"POST","/v1/accounts:signInWithIdp",pj(t,e))}/**
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
 */const Uj="http://localhost";class No extends hT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new No(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Jy(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new No(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Os(e,n)}buildRequest(){const e={requestUri:Uj,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yu(n)}return e}}/**
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
 */class pT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Au extends pT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ui extends Au{constructor(){super("facebook.com")}static credential(e){return No._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";ui.PROVIDER_ID="facebook.com";/**
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
 */class ci extends Au{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return No._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ci.credential(n,r)}catch{return null}}}ci.GOOGLE_SIGN_IN_METHOD="google.com";ci.PROVIDER_ID="google.com";/**
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
 */class fi extends Au{constructor(){super("github.com")}static credential(e){return No._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
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
 */class di extends Au{constructor(){super("twitter.com")}static credential(e,n){return No._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return di.credential(n,r)}catch{return null}}}di.TWITTER_SIGN_IN_METHOD="twitter.com";di.PROVIDER_ID="twitter.com";/**
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
 */class na{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await So._fromIdTokenResponse(e,r,i),s=KS(r);return new na({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=KS(r);return new na({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function KS(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Lf extends Yr{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Lf.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Lf(e,n,r,i)}}function mT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Lf._fromErrorAndOperation(t,o,e,r):o})}async function $j(t,e,n=!1){const r=await Ql(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return na._forOperation(t,"link",r)}/**
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
 */async function Dj(t,e,n=!1){var r;const{auth:i}=t,o="reauthenticate";try{const s=await Ql(t,mT(i,o,e,t),n);te(s.idToken,i,"internal-error");const a=tv(s.idToken);te(a,i,"internal-error");const{sub:l}=a;return te(t.uid===l,i,"user-mismatch"),na._forOperation(t,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&qr(i,"user-mismatch"),s}}/**
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
 */async function Mj(t,e,n=!1){const r="signIn",i=await mT(t,r,e),o=await na._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function Lj(t,e,n,r){return Qr(t).onIdTokenChanged(e,n,r)}function jj(t,e,n){return Qr(t).beforeAuthStateChanged(e,n)}const jf="__sak";/**
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
 */class gT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jf,"1"),this.storage.removeItem(jf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Fj(){const t=Dt();return nv(t)||fh(t)}const Bj=1e3,Vj=10;class yT extends gT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fj()&&Ij(),this.fallbackToPolling=cT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);zj()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Vj):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yT.type="LOCAL";const Wj=yT;/**
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
 */class vT extends gT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vT.type="SESSION";const wT=vT;/**
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
 */function Hj(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new dh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await Hj(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dh.receivers=[];/**
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
 */function iv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qj{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=iv("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function mr(){return window}function Kj(t){mr().location.href=t}/**
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
 */function ST(){return typeof mr().WorkerGlobalScope<"u"&&typeof mr().importScripts=="function"}async function Gj(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xj(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Yj(){return ST()?self:null}/**
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
 */const bT="firebaseLocalStorageDb",Qj=1,Ff="firebaseLocalStorage",ET="fbase_key";class Nu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hh(t,e){return t.transaction([Ff],e?"readwrite":"readonly").objectStore(Ff)}function Jj(){const t=indexedDB.deleteDatabase(bT);return new Nu(t).toPromise()}function gg(){const t=indexedDB.open(bT,Qj);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ff,{keyPath:ET})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ff)?e(r):(r.close(),await Jj(),e(await gg()))})})}async function GS(t,e,n){const r=hh(t,!0).put({[ET]:e,value:n});return new Nu(r).toPromise()}async function Zj(t,e){const n=hh(t,!1).get(e),r=await new Nu(n).toPromise();return r===void 0?null:r.value}function XS(t,e){const n=hh(t,!0).delete(e);return new Nu(n).toPromise()}const eF=800,tF=3;class kT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tF)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ST()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dh._getInstance(Yj()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gj(),!this.activeServiceWorker)return;this.sender=new qj(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xj()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gg();return await GS(e,jf,"1"),await XS(e,jf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>GS(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Zj(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>XS(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=hh(i,!1).getAll();return new Nu(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kT.type="LOCAL";const nF=kT;/**
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
 */function rF(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iF(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=pr("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",rF().appendChild(r)})}function oF(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ru(3e4,6e4);/**
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
 */function sF(t,e){return e?Ar(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ov extends hT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aF(t){return Mj(t.auth,new ov(t),t.bypassAuthState)}function lF(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Dj(n,new ov(t),t.bypassAuthState)}async function uF(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),$j(n,new ov(t),t.bypassAuthState)}/**
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
 */class xT{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aF;case"linkViaPopup":case"linkViaRedirect":return uF;case"reauthViaPopup":case"reauthViaRedirect":return lF;default:qr(this.auth,"internal-error")}}resolve(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cF=new Ru(2e3,1e4);class ys extends xT{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Kr(this.filter.length===1,"Popup operations only handle one event");const e=iv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pr(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,cF.get())};e()}}ys.currentPopupAction=null;/**
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
 */const fF="pendingRedirect",Fc=new Map;class dF extends xT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fc.get(this.auth._key());if(!e){try{const r=await hF(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fc.set(this.auth._key(),e)}return this.bypassAuthState||Fc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hF(t,e){const n=gF(e),r=mF(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pF(t,e){Fc.set(t._key(),e)}function mF(t){return Ar(t._redirectPersistence)}function gF(t){return jc(fF,t.config.apiKey,t.name)}async function yF(t,e,n=!1){const r=rv(t),i=sF(r,e),s=await new dF(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const vF=10*60*1e3;class wF{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SF(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_T(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vF&&this.cachedEventUids.clear(),this.cachedEventUids.has(YS(e))}saveEventToCache(e){this.cachedEventUids.add(YS(e)),this.lastProcessedEventTime=Date.now()}}function YS(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _T({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SF(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _T(t);default:return!1}}/**
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
 */async function bF(t,e={}){return ch(t,"GET","/v1/projects",e)}/**
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
 */const EF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kF=/^https?/;async function xF(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bF(t);for(const n of e)try{if(_F(n))return}catch{}qr(t,"unauthorized-domain")}function _F(t){const e=mg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!kF.test(n))return!1;if(EF.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const CF=new Ru(3e4,6e4);function QS(){const t=mr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TF(t){return new Promise((e,n)=>{var r,i,o;function s(){QS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{QS(),n(pr(t,"network-request-failed"))},timeout:CF.get()})}if(!((i=(r=mr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=mr().gapi)===null||o===void 0)&&o.load)s();else{const a=oF("iframefcb");return mr()[a]=()=>{gapi.load?s():n(pr(t,"network-request-failed"))},iF(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Bc=null,e})}let Bc=null;function zF(t){return Bc=Bc||TF(t),Bc}/**
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
 */const IF=new Ru(5e3,15e3),PF="__/auth/iframe",OF="emulator/auth/iframe",RF={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NF(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ev(e,OF):`https://${t.config.authDomain}/${PF}`,r={apiKey:e.apiKey,appName:t.name,v:vu},i=AF.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${yu(r).slice(1)}`}async function UF(t){const e=await zF(t),n=mr().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:NF(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RF,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=pr(t,"network-request-failed"),a=mr().setTimeout(()=>{o(s)},IF.get());function l(){mr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const $F={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DF=500,MF=600,LF="_blank",jF="http://localhost";class JS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FF(t,e,n,r=DF,i=MF){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},$F),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Dt().toLowerCase();n&&(a=oT(u)?LF:n),iT(u)&&(e=e||jF,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[y,w])=>`${m}${y}=${w},`,"");if(Tj(u)&&a!=="_self")return BF(e||"",a),new JS(null);const p=window.open(e||"",a,d);te(p,t,"popup-blocked");try{p.focus()}catch{}return new JS(p)}function BF(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const VF="__/auth/handler",WF="emulator/auth/handler";function ZS(t,e,n,r,i,o){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vu,eventId:i};if(e instanceof pT){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",mM(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(e instanceof Au){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${HF(t)}?${yu(a).slice(1)}`}function HF({config:t}){return t.emulator?ev(t,WF):`https://${t.authDomain}/${VF}`}/**
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
 */const zp="webStorageSupport";class qF{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wT,this._completeRedirectFn=yF,this._overrideRedirectResult=pF}async _openPopup(e,n,r,i){var o;Kr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=ZS(e,n,r,mg(),i);return FF(e,s,iv())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Kj(ZS(e,n,r,mg(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Kr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UF(e),r=new wF(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zp,{type:zp},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[zp];s!==void 0&&n(!!s),qr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xF(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cT()||nv()||fh()}}const KF=qF;var eb="@firebase/auth",tb="0.20.11";/**
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
 */class GF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YF(t){Xs(new Po("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{te(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),te(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fT(t)},d=new Oj(a,l,u);return lj(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xs(new Po("auth-internal",e=>{const n=rv(e.getProvider("auth").getImmediate());return(r=>new GF(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ii(eb,tb,XF(t)),Ii(eb,tb,"esm2017")}/**
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
 */const QF=5*60,JF=Gx("authIdTokenMaxAge")||QF;let nb=null;const ZF=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JF)return;const i=n==null?void 0:n.token;nb!==i&&(nb=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pB(t=Qx()){const e=dy(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aj(t,{popupRedirectResolver:KF,persistence:[nF,Wj,wT]}),r=Gx("authTokenSyncURL");if(r){const o=ZF(r);jj(n,o,()=>o(n.currentUser)),Lj(n,s=>o(s))}const i=Kx("auth");return i&&Rj(n,`http://${i}`),n}YF("Browser");export{aB as B,oB as C,yk as F,hB as I,fB as L,rB as N,tB as R,sB as T,Co as a,lB as b,dB as c,qD as d,uB as e,nB as f,pB as g,qP as h,m5 as i,ee as j,mv as k,eO as l,yi as m,VD as n,Vx as o,WD as p,eB as q,I as r,cB as s,iB as t,Bf as u,rb as v,g0 as w};
