import{s as X,g as ee,a as re,b as T,c as m,_ as l,r as p,u as te,d as oe,j as n,e as se,f as ae,h as K,i as ne}from"./index.f666507b.js";var q={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=typeof Symbol=="function"&&Symbol.for,A=s?Symbol.for("react.element"):60103,D=s?Symbol.for("react.portal"):60106,d=s?Symbol.for("react.fragment"):60107,y=s?Symbol.for("react.strict_mode"):60108,v=s?Symbol.for("react.profiler"):60114,S=s?Symbol.for("react.provider"):60109,h=s?Symbol.for("react.context"):60110,I=s?Symbol.for("react.async_mode"):60111,g=s?Symbol.for("react.concurrent_mode"):60111,x=s?Symbol.for("react.forward_ref"):60112,$=s?Symbol.for("react.suspense"):60113,ie=s?Symbol.for("react.suspense_list"):60120,b=s?Symbol.for("react.memo"):60115,C=s?Symbol.for("react.lazy"):60116,ce=s?Symbol.for("react.block"):60121,le=s?Symbol.for("react.fundamental"):60117,fe=s?Symbol.for("react.responder"):60118,ue=s?Symbol.for("react.scope"):60119;function a(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case A:switch(e=e.type,e){case I:case g:case d:case v:case y:case $:return e;default:switch(e=e&&e.$$typeof,e){case h:case x:case C:case b:case S:return e;default:return r}}case D:return r}}}function B(e){return a(e)===g}t.AsyncMode=I;t.ConcurrentMode=g;t.ContextConsumer=h;t.ContextProvider=S;t.Element=A;t.ForwardRef=x;t.Fragment=d;t.Lazy=C;t.Memo=b;t.Portal=D;t.Profiler=v;t.StrictMode=y;t.Suspense=$;t.isAsyncMode=function(e){return B(e)||a(e)===I};t.isConcurrentMode=B;t.isContextConsumer=function(e){return a(e)===h};t.isContextProvider=function(e){return a(e)===S};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===A};t.isForwardRef=function(e){return a(e)===x};t.isFragment=function(e){return a(e)===d};t.isLazy=function(e){return a(e)===C};t.isMemo=function(e){return a(e)===b};t.isPortal=function(e){return a(e)===D};t.isProfiler=function(e){return a(e)===v};t.isStrictMode=function(e){return a(e)===y};t.isSuspense=function(e){return a(e)===$};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===d||e===g||e===v||e===y||e===$||e===ie||typeof e=="object"&&e!==null&&(e.$$typeof===C||e.$$typeof===b||e.$$typeof===S||e.$$typeof===h||e.$$typeof===x||e.$$typeof===le||e.$$typeof===fe||e.$$typeof===ue||e.$$typeof===ce)};t.typeOf=a;(function(e){e.exports=t})(q);var G=q.exports,me={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Y={};Y[G.ForwardRef]=me;Y[G.Memo]=pe;function z(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return X(r)}var Z=function(){var r=z.apply(void 0,arguments),o="animation-"+r.name;return{name:o,styles:"@keyframes "+o+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function de(e){return ee("MuiCircularProgress",e)}re("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const ye=["className","color","disableShrink","size","style","thickness","value","variant"];let _=e=>e,L,U,V,W;const i=44,ve=Z(L||(L=_`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Se=Z(U||(U=_`
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
`)),he=e=>{const{classes:r,variant:o,color:c,disableShrink:P}=e,k={root:["root",o,`color${m(c)}`],svg:["svg"],circle:["circle",`circle${m(o)}`,P&&"circleDisableShrink"]};return ae(k,de,r)},ge=T("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,r[o.variant],r[`color${m(o.color)}`]]}})(({ownerState:e,theme:r})=>l({display:"inline-block"},e.variant==="determinate"&&{transition:r.transitions.create("transform")},e.color!=="inherit"&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&z(V||(V=_`
      animation: ${0} 1.4s linear infinite;
    `),ve)),xe=T("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),$e=T("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.circle,r[`circle${m(o.variant)}`],o.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>l({stroke:"currentColor"},e.variant==="determinate"&&{transition:r.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&z(W||(W=_`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Se)),be=p.exports.forwardRef(function(r,o){const c=te({props:r,name:"MuiCircularProgress"}),{className:P,color:k="primary",disableShrink:H=!1,size:M=40,style:J,thickness:f=3.6,value:w=0,variant:N="indeterminate"}=c,Q=oe(c,ye),u=l({},c,{color:k,disableShrink:H,size:M,thickness:f,value:w,variant:N}),R=he(u),E={},j={},F={};if(N==="determinate"){const O=2*Math.PI*((i-f)/2);E.strokeDasharray=O.toFixed(3),F["aria-valuenow"]=Math.round(w),E.strokeDashoffset=`${((100-w)/100*O).toFixed(3)}px`,j.transform="rotate(-90deg)"}return n(ge,l({className:se(R.root,P),style:l({width:M,height:M},j,J),ownerState:u,ref:o,role:"progressbar"},F,Q,{children:n(xe,{className:R.svg,ownerState:u,viewBox:`${i/2} ${i/2} ${i} ${i}`,children:n($e,{className:R.circle,style:E,ownerState:u,cx:i,cy:i,r:(i-f)/2,fill:"none",strokeWidth:f})})}))}),Ce=be,_e=p.exports.lazy(()=>K(()=>import("./SimpleCard.6b91634b.js"),["assets/SimpleCard.6b91634b.js","assets/index.f666507b.js","assets/index.3c4c57b6.css"]));p.exports.lazy(()=>K(()=>import("./Widget.edeb0f16.js"),["assets/Widget.edeb0f16.js","assets/index.f666507b.js","assets/index.3c4c57b6.css"]));const ke=({sensorData:e})=>ne("div",{className:"mt-16 md:mt-12 flex flex-col gap-10",children:[n("div",{className:"flex flex-wrap justify-center gap-6 sm:px-4",children:Array.isArray(e)&&e.map(r=>n("div",{children:n(p.exports.Suspense,{fallback:n(Ce,{}),children:n(_e,{title:r.name,data:n("p",{children:r.reading}),icon:r.id})})},r.id))}),n("div",{className:"flex flex-wrap justify-center items-center gap-4 sm:px-4",children:n("div",{})})]});export{ke as default};
