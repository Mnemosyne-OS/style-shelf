var Cp=Object.defineProperty;var Mp=(e,n,t)=>n in e?Cp(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var $i=(e,n,t)=>Mp(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function Ep(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wc={exports:{}},$s={},Sc={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jr=Symbol.for("react.element"),Tp=Symbol.for("react.portal"),Np=Symbol.for("react.fragment"),jp=Symbol.for("react.strict_mode"),Op=Symbol.for("react.profiler"),Ap=Symbol.for("react.provider"),Up=Symbol.for("react.context"),Lp=Symbol.for("react.forward_ref"),Rp=Symbol.for("react.suspense"),Pp=Symbol.for("react.memo"),Fp=Symbol.for("react.lazy"),Bi=Symbol.iterator;function zp(e){return e===null||typeof e!="object"?null:(e=Bi&&e[Bi]||e["@@iterator"],typeof e=="function"?e:null)}var Ic={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cc=Object.assign,Mc={};function Rt(e,n,t){this.props=e,this.context=n,this.refs=Mc,this.updater=t||Ic}Rt.prototype.isReactComponent={};Rt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Rt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ec(){}Ec.prototype=Rt.prototype;function zo(e,n,t){this.props=e,this.context=n,this.refs=Mc,this.updater=t||Ic}var Do=zo.prototype=new Ec;Do.constructor=zo;Cc(Do,Rt.prototype);Do.isPureReactComponent=!0;var Wi=Array.isArray,Tc=Object.prototype.hasOwnProperty,Ho={current:null},Nc={key:!0,ref:!0,__self:!0,__source:!0};function jc(e,n,t){var r,s={},a=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(a=""+n.key),n)Tc.call(n,r)&&!Nc.hasOwnProperty(r)&&(s[r]=n[r]);var i=arguments.length-2;if(i===1)s.children=t;else if(1<i){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+2];s.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)s[r]===void 0&&(s[r]=i[r]);return{$$typeof:jr,type:e,key:a,ref:o,props:s,_owner:Ho.current}}function Dp(e,n){return{$$typeof:jr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function $o(e){return typeof e=="object"&&e!==null&&e.$$typeof===jr}function Hp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Vi=/\/+/g;function pa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Hp(""+e.key):n.toString(36)}function ss(e,n,t,r,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case jr:case Tp:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+pa(o,0):r,Wi(s)?(t="",e!=null&&(t=e.replace(Vi,"$&/")+"/"),ss(s,n,t,"",function(c){return c})):s!=null&&($o(s)&&(s=Dp(s,t+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Vi,"$&/")+"/")+e)),n.push(s)),1;if(o=0,r=r===""?".":r+":",Wi(e))for(var i=0;i<e.length;i++){a=e[i];var l=r+pa(a,i);o+=ss(a,n,t,l,s)}else if(l=zp(e),typeof l=="function")for(e=l.call(e),i=0;!(a=e.next()).done;)a=a.value,l=r+pa(a,i++),o+=ss(a,n,t,l,s);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Dr(e,n,t){if(e==null)return e;var r=[],s=0;return ss(e,r,"","",function(a){return n.call(t,a,s++)}),r}function $p(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},as={transition:null},Bp={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:as,ReactCurrentOwner:Ho};function Oc(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Dr,forEach:function(e,n,t){Dr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Dr(e,function(){n++}),n},toArray:function(e){return Dr(e,function(n){return n})||[]},only:function(e){if(!$o(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Rt;R.Fragment=Np;R.Profiler=Op;R.PureComponent=zo;R.StrictMode=jp;R.Suspense=Rp;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bp;R.act=Oc;R.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cc({},e.props),s=e.key,a=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,o=Ho.current),n.key!==void 0&&(s=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in n)Tc.call(n,l)&&!Nc.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&i!==void 0?i[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){i=Array(l);for(var c=0;c<l;c++)i[c]=arguments[c+2];r.children=i}return{$$typeof:jr,type:e.type,key:s,ref:a,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:Up,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ap,_context:e},e.Consumer=e};R.createElement=jc;R.createFactory=function(e){var n=jc.bind(null,e);return n.type=e,n};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Lp,render:e}};R.isValidElement=$o;R.lazy=function(e){return{$$typeof:Fp,_payload:{_status:-1,_result:e},_init:$p}};R.memo=function(e,n){return{$$typeof:Pp,type:e,compare:n===void 0?null:n}};R.startTransition=function(e){var n=as.transition;as.transition={};try{e()}finally{as.transition=n}};R.unstable_act=Oc;R.useCallback=function(e,n){return fe.current.useCallback(e,n)};R.useContext=function(e){return fe.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};R.useEffect=function(e,n){return fe.current.useEffect(e,n)};R.useId=function(){return fe.current.useId()};R.useImperativeHandle=function(e,n,t){return fe.current.useImperativeHandle(e,n,t)};R.useInsertionEffect=function(e,n){return fe.current.useInsertionEffect(e,n)};R.useLayoutEffect=function(e,n){return fe.current.useLayoutEffect(e,n)};R.useMemo=function(e,n){return fe.current.useMemo(e,n)};R.useReducer=function(e,n,t){return fe.current.useReducer(e,n,t)};R.useRef=function(e){return fe.current.useRef(e)};R.useState=function(e){return fe.current.useState(e)};R.useSyncExternalStore=function(e,n,t){return fe.current.useSyncExternalStore(e,n,t)};R.useTransition=function(){return fe.current.useTransition()};R.version="18.3.1";Sc.exports=R;var k=Sc.exports;const Wp=Ep(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp=k,Gp=Symbol.for("react.element"),Kp=Symbol.for("react.fragment"),Qp=Object.prototype.hasOwnProperty,qp=Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yp={key:!0,ref:!0,__self:!0,__source:!0};function Ac(e,n,t){var r,s={},a=null,o=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Qp.call(n,r)&&!Yp.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)s[r]===void 0&&(s[r]=n[r]);return{$$typeof:Gp,type:e,key:a,ref:o,props:s,_owner:qp.current}}$s.Fragment=Kp;$s.jsx=Ac;$s.jsxs=Ac;wc.exports=$s;var p=wc.exports,Fa={},Uc={exports:{}},Me={},Lc={exports:{}},Rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(M,U){var L=M.length;M.push(U);e:for(;0<L;){var H=L-1>>>1,Z=M[H];if(0<s(Z,U))M[H]=U,M[L]=Z,L=H;else break e}}function t(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var U=M[0],L=M.pop();if(L!==U){M[0]=L;e:for(var H=0,Z=M.length,Dn=Z>>>1;H<Dn;){var _e=2*(H+1)-1,st=M[_e],Pe=_e+1,Te=M[Pe];if(0>s(st,L))Pe<Z&&0>s(Te,st)?(M[H]=Te,M[Pe]=L,H=Pe):(M[H]=st,M[_e]=L,H=_e);else if(Pe<Z&&0>s(Te,L))M[H]=Te,M[Pe]=L,H=Pe;else break e}}return U}function s(M,U){var L=M.sortIndex-U.sortIndex;return L!==0?L:M.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var l=[],c=[],d=1,u=null,g=3,v=!1,y=!1,w=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(M){for(var U=t(c);U!==null;){if(U.callback===null)r(c);else if(U.startTime<=M)r(c),U.sortIndex=U.expirationTime,n(l,U);else break;U=t(c)}}function x(M){if(w=!1,h(M),!y)if(t(l)!==null)y=!0,rt(S);else{var U=t(c);U!==null&&Qe(x,U.startTime-M)}}function S(M,U){y=!1,w&&(w=!1,m(E),E=-1),v=!0;var L=g;try{for(h(U),u=t(l);u!==null&&(!(u.expirationTime>U)||M&&!ke());){var H=u.callback;if(typeof H=="function"){u.callback=null,g=u.priorityLevel;var Z=H(u.expirationTime<=U);U=e.unstable_now(),typeof Z=="function"?u.callback=Z:u===t(l)&&r(l),h(U)}else r(l);u=t(l)}if(u!==null)var Dn=!0;else{var _e=t(c);_e!==null&&Qe(x,_e.startTime-U),Dn=!1}return Dn}finally{u=null,g=L,v=!1}}var T=!1,C=null,E=-1,F=5,A=-1;function ke(){return!(e.unstable_now()-A<F)}function gn(){if(C!==null){var M=e.unstable_now();A=M;var U=!0;try{U=C(!0,M)}finally{U?Ke():(T=!1,C=null)}}else T=!1}var Ke;if(typeof f=="function")Ke=function(){f(gn)};else if(typeof MessageChannel<"u"){var zn=new MessageChannel,Pr=zn.port2;zn.port1.onmessage=gn,Ke=function(){Pr.postMessage(null)}}else Ke=function(){I(gn,0)};function rt(M){C=M,T||(T=!0,Ke())}function Qe(M,U){E=I(function(){M(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,rt(S))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(M){switch(g){case 1:case 2:case 3:var U=3;break;default:U=g}var L=g;g=U;try{return M()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,U){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var L=g;g=M;try{return U()}finally{g=L}},e.unstable_scheduleCallback=function(M,U,L){var H=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?H+L:H):L=H,M){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,M={id:d++,callback:U,priorityLevel:M,startTime:L,expirationTime:Z,sortIndex:-1},L>H?(M.sortIndex=L,n(c,M),t(l)===null&&M===t(c)&&(w?(m(E),E=-1):w=!0,Qe(x,L-H))):(M.sortIndex=Z,n(l,M),y||v||(y=!0,rt(S))),M},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(M){var U=g;return function(){var L=g;g=U;try{return M.apply(this,arguments)}finally{g=L}}}})(Rc);Lc.exports=Rc;var Zp=Lc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp=k,Ce=Zp;function _(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pc=new Set,fr={};function nt(e,n){Tt(e,n),Tt(e+"Capture",n)}function Tt(e,n){for(fr[e]=n,e=0;e<n.length;e++)Pc.add(n[e])}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),za=Object.prototype.hasOwnProperty,Jp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gi={},Ki={};function ef(e){return za.call(Ki,e)?!0:za.call(Gi,e)?!1:Jp.test(e)?Ki[e]=!0:(Gi[e]=!0,!1)}function nf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tf(e,n,t,r){if(n===null||typeof n>"u"||nf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function me(e,n,t,r,s,a,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=o}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];oe[n]=new me(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bo=/[\-:]([a-z])/g;function Wo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Bo,Wo);oe[n]=new me(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Bo,Wo);oe[n]=new me(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Bo,Wo);oe[n]=new me(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vo(e,n,t,r){var s=oe.hasOwnProperty(n)?oe[n]:null;(s!==null?s.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(tf(n,t,s,r)&&(t=null),r||s===null?ef(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,r=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var mn=Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hr=Symbol.for("react.element"),dt=Symbol.for("react.portal"),pt=Symbol.for("react.fragment"),Go=Symbol.for("react.strict_mode"),Da=Symbol.for("react.profiler"),Fc=Symbol.for("react.provider"),zc=Symbol.for("react.context"),Ko=Symbol.for("react.forward_ref"),Ha=Symbol.for("react.suspense"),$a=Symbol.for("react.suspense_list"),Qo=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),Dc=Symbol.for("react.offscreen"),Qi=Symbol.iterator;function Ht(e){return e===null||typeof e!="object"?null:(e=Qi&&e[Qi]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,fa;function Xt(e){if(fa===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);fa=n&&n[1]||""}return`
`+fa+e}var ma=!1;function ga(e,n){if(!e||ma)return"";ma=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),a=r.stack.split(`
`),o=s.length-1,i=a.length-1;1<=o&&0<=i&&s[o]!==a[i];)i--;for(;1<=o&&0<=i;o--,i--)if(s[o]!==a[i]){if(o!==1||i!==1)do if(o--,i--,0>i||s[o]!==a[i]){var l=`
`+s[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=i);break}}}finally{ma=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Xt(e):""}function rf(e){switch(e.tag){case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 2:case 15:return e=ga(e.type,!1),e;case 11:return e=ga(e.type.render,!1),e;case 1:return e=ga(e.type,!0),e;default:return""}}function Ba(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pt:return"Fragment";case dt:return"Portal";case Da:return"Profiler";case Go:return"StrictMode";case Ha:return"Suspense";case $a:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zc:return(e.displayName||"Context")+".Consumer";case Fc:return(e._context.displayName||"Context")+".Provider";case Ko:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qo:return n=e.displayName||null,n!==null?n:Ba(e.type)||"Memo";case bn:n=e._payload,e=e._init;try{return Ba(e(n))}catch{}}return null}function sf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ba(n);case 8:return n===Go?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function af(e){var n=Hc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $r(e){e._valueTracker||(e._valueTracker=af(e))}function $c(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Hc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wa(e,n){var t=n.checked;return q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function qi(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Un(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Bc(e,n){n=n.checked,n!=null&&Vo(e,"checked",n,!1)}function Va(e,n){Bc(e,n);var t=Un(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ga(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ga(e,n.type,Un(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Yi(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ga(e,n,t){(n!=="number"||vs(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Jt=Array.isArray;function wt(e,n,t,r){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Un(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function Ka(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(_(91));return q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zi(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(_(92));if(Jt(t)){if(1<t.length)throw Error(_(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Un(t)}}function Wc(e,n){var t=Un(n.value),r=Un(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Xi(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Vc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Vc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Br,Gc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,s)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Br=Br||document.createElement("div"),Br.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function mr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},of=["Webkit","ms","Moz","O"];Object.keys(rr).forEach(function(e){of.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),rr[n]=rr[e]})});function Kc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||rr.hasOwnProperty(e)&&rr[e]?(""+n).trim():n+"px"}function Qc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,s=Kc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,s):e[t]=s}}var lf=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(e,n){if(n){if(lf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(_(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(_(61))}if(n.style!=null&&typeof n.style!="object")throw Error(_(62))}}function Ya(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Za=null;function qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xa=null,St=null,It=null;function Ji(e){if(e=Ur(e)){if(typeof Xa!="function")throw Error(_(280));var n=e.stateNode;n&&(n=Ks(n),Xa(e.stateNode,e.type,n))}}function qc(e){St?It?It.push(e):It=[e]:St=e}function Yc(){if(St){var e=St,n=It;if(It=St=null,Ji(e),n)for(e=0;e<n.length;e++)Ji(n[e])}}function Zc(e,n){return e(n)}function Xc(){}var ha=!1;function Jc(e,n,t){if(ha)return e(n,t);ha=!0;try{return Zc(e,n,t)}finally{ha=!1,(St!==null||It!==null)&&(Xc(),Yc())}}function gr(e,n){var t=e.stateNode;if(t===null)return null;var r=Ks(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(_(231,n,typeof t));return t}var Ja=!1;if(un)try{var $t={};Object.defineProperty($t,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",$t,$t),window.removeEventListener("test",$t,$t)}catch{Ja=!1}function cf(e,n,t,r,s,a,o,i,l){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(d){this.onError(d)}}var sr=!1,ys=null,bs=!1,eo=null,uf={onError:function(e){sr=!0,ys=e}};function df(e,n,t,r,s,a,o,i,l){sr=!1,ys=null,cf.apply(uf,arguments)}function pf(e,n,t,r,s,a,o,i,l){if(df.apply(this,arguments),sr){if(sr){var c=ys;sr=!1,ys=null}else throw Error(_(198));bs||(bs=!0,eo=c)}}function tt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function eu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function el(e){if(tt(e)!==e)throw Error(_(188))}function ff(e){var n=e.alternate;if(!n){if(n=tt(e),n===null)throw Error(_(188));return n!==e?null:e}for(var t=e,r=n;;){var s=t.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){t=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===t)return el(s),e;if(a===r)return el(s),n;a=a.sibling}throw Error(_(188))}if(t.return!==r.return)t=s,r=a;else{for(var o=!1,i=s.child;i;){if(i===t){o=!0,t=s,r=a;break}if(i===r){o=!0,r=s,t=a;break}i=i.sibling}if(!o){for(i=a.child;i;){if(i===t){o=!0,t=a,r=s;break}if(i===r){o=!0,r=a,t=s;break}i=i.sibling}if(!o)throw Error(_(189))}}if(t.alternate!==r)throw Error(_(190))}if(t.tag!==3)throw Error(_(188));return t.stateNode.current===t?e:n}function nu(e){return e=ff(e),e!==null?tu(e):null}function tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=tu(e);if(n!==null)return n;e=e.sibling}return null}var ru=Ce.unstable_scheduleCallback,nl=Ce.unstable_cancelCallback,mf=Ce.unstable_shouldYield,gf=Ce.unstable_requestPaint,X=Ce.unstable_now,hf=Ce.unstable_getCurrentPriorityLevel,Yo=Ce.unstable_ImmediatePriority,su=Ce.unstable_UserBlockingPriority,xs=Ce.unstable_NormalPriority,vf=Ce.unstable_LowPriority,au=Ce.unstable_IdlePriority,Bs=null,nn=null;function yf(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Bs,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:kf,bf=Math.log,xf=Math.LN2;function kf(e){return e>>>=0,e===0?32:31-(bf(e)/xf|0)|0}var Wr=64,Vr=4194304;function er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ks(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,o=t&268435455;if(o!==0){var i=o&~s;i!==0?r=er(i):(a&=o,a!==0&&(r=er(a)))}else o=t&~s,o!==0?r=er(o):a!==0&&(r=er(a));if(r===0)return 0;if(n!==0&&n!==r&&!(n&s)&&(s=r&-r,a=n&-n,s>=a||s===16&&(a&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Be(n),s=1<<t,r|=e[t],n&=~s;return r}function _f(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Be(a),i=1<<o,l=s[o];l===-1?(!(i&t)||i&r)&&(s[o]=_f(i,n)):l<=n&&(e.expiredLanes|=i),a&=~i}}function no(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ou(){var e=Wr;return Wr<<=1,!(Wr&4194240)&&(Wr=64),e}function va(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Or(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Be(n),e[n]=t}function Sf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-Be(t),a=1<<s;n[s]=0,r[s]=-1,e[s]=-1,t&=~a}}function Zo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Be(t),s=1<<r;s&n|e[r]&n&&(e[r]|=n),t&=~s}}var z=0;function iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lu,Xo,cu,uu,du,to=!1,Gr=[],In=null,Cn=null,Mn=null,hr=new Map,vr=new Map,kn=[],If="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tl(e,n){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":hr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(n.pointerId)}}function Bt(e,n,t,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},n!==null&&(n=Ur(n),n!==null&&Xo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Cf(e,n,t,r,s){switch(n){case"focusin":return In=Bt(In,e,n,t,r,s),!0;case"dragenter":return Cn=Bt(Cn,e,n,t,r,s),!0;case"mouseover":return Mn=Bt(Mn,e,n,t,r,s),!0;case"pointerover":var a=s.pointerId;return hr.set(a,Bt(hr.get(a)||null,e,n,t,r,s)),!0;case"gotpointercapture":return a=s.pointerId,vr.set(a,Bt(vr.get(a)||null,e,n,t,r,s)),!0}return!1}function pu(e){var n=Vn(e.target);if(n!==null){var t=tt(n);if(t!==null){if(n=t.tag,n===13){if(n=eu(t),n!==null){e.blockedOn=n,du(e.priority,function(){cu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function os(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ro(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Za=r,t.target.dispatchEvent(r),Za=null}else return n=Ur(t),n!==null&&Xo(n),e.blockedOn=t,!1;n.shift()}return!0}function rl(e,n,t){os(e)&&t.delete(n)}function Mf(){to=!1,In!==null&&os(In)&&(In=null),Cn!==null&&os(Cn)&&(Cn=null),Mn!==null&&os(Mn)&&(Mn=null),hr.forEach(rl),vr.forEach(rl)}function Wt(e,n){e.blockedOn===n&&(e.blockedOn=null,to||(to=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Mf)))}function yr(e){function n(s){return Wt(s,e)}if(0<Gr.length){Wt(Gr[0],e);for(var t=1;t<Gr.length;t++){var r=Gr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&Wt(In,e),Cn!==null&&Wt(Cn,e),Mn!==null&&Wt(Mn,e),hr.forEach(n),vr.forEach(n),t=0;t<kn.length;t++)r=kn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<kn.length&&(t=kn[0],t.blockedOn===null);)pu(t),t.blockedOn===null&&kn.shift()}var Ct=mn.ReactCurrentBatchConfig,_s=!0;function Ef(e,n,t,r){var s=z,a=Ct.transition;Ct.transition=null;try{z=1,Jo(e,n,t,r)}finally{z=s,Ct.transition=a}}function Tf(e,n,t,r){var s=z,a=Ct.transition;Ct.transition=null;try{z=4,Jo(e,n,t,r)}finally{z=s,Ct.transition=a}}function Jo(e,n,t,r){if(_s){var s=ro(e,n,t,r);if(s===null)Ma(e,n,r,ws,t),tl(e,r);else if(Cf(s,e,n,t,r))r.stopPropagation();else if(tl(e,r),n&4&&-1<If.indexOf(e)){for(;s!==null;){var a=Ur(s);if(a!==null&&lu(a),a=ro(e,n,t,r),a===null&&Ma(e,n,r,ws,t),a===s)break;s=a}s!==null&&r.stopPropagation()}else Ma(e,n,r,null,t)}}var ws=null;function ro(e,n,t,r){if(ws=null,e=qo(r),e=Vn(e),e!==null)if(n=tt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=eu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ws=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hf()){case Yo:return 1;case su:return 4;case xs:case vf:return 16;case au:return 536870912;default:return 16}default:return 16}}var wn=null,ei=null,is=null;function mu(){if(is)return is;var e,n=ei,t=n.length,r,s="value"in wn?wn.value:wn.textContent,a=s.length;for(e=0;e<t&&n[e]===s[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===s[a-r];r++);return is=s.slice(e,1<r?1-r:void 0)}function ls(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Kr(){return!0}function sl(){return!1}function Ee(e){function n(t,r,s,a,o){this._reactName=t,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Kr:sl,this.isPropagationStopped=sl,this}return q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),n}var Pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ni=Ee(Pt),Ar=q({},Pt,{view:0,detail:0}),Nf=Ee(Ar),ya,ba,Vt,Ws=q({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ti,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vt&&(Vt&&e.type==="mousemove"?(ya=e.screenX-Vt.screenX,ba=e.screenY-Vt.screenY):ba=ya=0,Vt=e),ya)},movementY:function(e){return"movementY"in e?e.movementY:ba}}),al=Ee(Ws),jf=q({},Ws,{dataTransfer:0}),Of=Ee(jf),Af=q({},Ar,{relatedTarget:0}),xa=Ee(Af),Uf=q({},Pt,{animationName:0,elapsedTime:0,pseudoElement:0}),Lf=Ee(Uf),Rf=q({},Pt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pf=Ee(Rf),Ff=q({},Pt,{data:0}),ol=Ee(Ff),zf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Df={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $f(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Hf[e])?!!n[e]:!1}function ti(){return $f}var Bf=q({},Ar,{key:function(e){if(e.key){var n=zf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ls(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Df[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ti,charCode:function(e){return e.type==="keypress"?ls(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ls(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wf=Ee(Bf),Vf=q({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),il=Ee(Vf),Gf=q({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ti}),Kf=Ee(Gf),Qf=q({},Pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),qf=Ee(Qf),Yf=q({},Ws,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zf=Ee(Yf),Xf=[9,13,27,32],ri=un&&"CompositionEvent"in window,ar=null;un&&"documentMode"in document&&(ar=document.documentMode);var Jf=un&&"TextEvent"in window&&!ar,gu=un&&(!ri||ar&&8<ar&&11>=ar),ll=" ",cl=!1;function hu(e,n){switch(e){case"keyup":return Xf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ft=!1;function em(e,n){switch(e){case"compositionend":return vu(n);case"keypress":return n.which!==32?null:(cl=!0,ll);case"textInput":return e=n.data,e===ll&&cl?null:e;default:return null}}function nm(e,n){if(ft)return e==="compositionend"||!ri&&hu(e,n)?(e=mu(),is=ei=wn=null,ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gu&&n.locale!=="ko"?null:n.data;default:return null}}var tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ul(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!tm[e.type]:n==="textarea"}function yu(e,n,t,r){qc(r),n=Ss(n,"onChange"),0<n.length&&(t=new ni("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var or=null,br=null;function rm(e){Tu(e,0)}function Vs(e){var n=ht(e);if($c(n))return e}function sm(e,n){if(e==="change")return n}var bu=!1;if(un){var ka;if(un){var _a="oninput"in document;if(!_a){var dl=document.createElement("div");dl.setAttribute("oninput","return;"),_a=typeof dl.oninput=="function"}ka=_a}else ka=!1;bu=ka&&(!document.documentMode||9<document.documentMode)}function pl(){or&&(or.detachEvent("onpropertychange",xu),br=or=null)}function xu(e){if(e.propertyName==="value"&&Vs(br)){var n=[];yu(n,br,e,qo(e)),Jc(rm,n)}}function am(e,n,t){e==="focusin"?(pl(),or=n,br=t,or.attachEvent("onpropertychange",xu)):e==="focusout"&&pl()}function om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vs(br)}function im(e,n){if(e==="click")return Vs(n)}function lm(e,n){if(e==="input"||e==="change")return Vs(n)}function cm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ge=typeof Object.is=="function"?Object.is:cm;function xr(e,n){if(Ge(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var s=t[r];if(!za.call(n,s)||!Ge(e[s],n[s]))return!1}return!0}function fl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ml(e,n){var t=fl(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=fl(t)}}function ku(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ku(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function _u(){for(var e=window,n=vs();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=vs(e.document)}return n}function si(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function um(e){var n=_u(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ku(t.ownerDocument.documentElement,t)){if(r!==null&&si(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=ml(t,a);var o=ml(t,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dm=un&&"documentMode"in document&&11>=document.documentMode,mt=null,so=null,ir=null,ao=!1;function gl(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ao||mt==null||mt!==vs(r)||(r=mt,"selectionStart"in r&&si(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ir&&xr(ir,r)||(ir=r,r=Ss(so,"onSelect"),0<r.length&&(n=new ni("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=mt)))}function Qr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var gt={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionend:Qr("Transition","TransitionEnd")},wa={},wu={};un&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete gt.animationend.animation,delete gt.animationiteration.animation,delete gt.animationstart.animation),"TransitionEvent"in window||delete gt.transitionend.transition);function Gs(e){if(wa[e])return wa[e];if(!gt[e])return e;var n=gt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in wu)return wa[e]=n[t];return e}var Su=Gs("animationend"),Iu=Gs("animationiteration"),Cu=Gs("animationstart"),Mu=Gs("transitionend"),Eu=new Map,hl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(e,n){Eu.set(e,n),nt(n,[e])}for(var Sa=0;Sa<hl.length;Sa++){var Ia=hl[Sa],pm=Ia.toLowerCase(),fm=Ia[0].toUpperCase()+Ia.slice(1);Rn(pm,"on"+fm)}Rn(Su,"onAnimationEnd");Rn(Iu,"onAnimationIteration");Rn(Cu,"onAnimationStart");Rn("dblclick","onDoubleClick");Rn("focusin","onFocus");Rn("focusout","onBlur");Rn(Mu,"onTransitionEnd");Tt("onMouseEnter",["mouseout","mouseover"]);Tt("onMouseLeave",["mouseout","mouseover"]);Tt("onPointerEnter",["pointerout","pointerover"]);Tt("onPointerLeave",["pointerout","pointerover"]);nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nt("onBeforeInput",["compositionend","keypress","textInput","paste"]);nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mm=new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));function vl(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,pf(r,n,void 0,e),e.currentTarget=null}function Tu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],s=r.event;r=r.listeners;e:{var a=void 0;if(n)for(var o=r.length-1;0<=o;o--){var i=r[o],l=i.instance,c=i.currentTarget;if(i=i.listener,l!==a&&s.isPropagationStopped())break e;vl(s,i,c),a=l}else for(o=0;o<r.length;o++){if(i=r[o],l=i.instance,c=i.currentTarget,i=i.listener,l!==a&&s.isPropagationStopped())break e;vl(s,i,c),a=l}}}if(bs)throw e=eo,bs=!1,eo=null,e}function B(e,n){var t=n[uo];t===void 0&&(t=n[uo]=new Set);var r=e+"__bubble";t.has(r)||(Nu(n,e,2,!1),t.add(r))}function Ca(e,n,t){var r=0;n&&(r|=4),Nu(t,e,r,n)}var qr="_reactListening"+Math.random().toString(36).slice(2);function kr(e){if(!e[qr]){e[qr]=!0,Pc.forEach(function(t){t!=="selectionchange"&&(mm.has(t)||Ca(t,!1,e),Ca(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[qr]||(n[qr]=!0,Ca("selectionchange",!1,n))}}function Nu(e,n,t,r){switch(fu(n)){case 1:var s=Ef;break;case 4:s=Tf;break;default:s=Jo}t=s.bind(null,n,t,e),s=void 0,!Ja||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function Ma(e,n,t,r,s){var a=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var i=r.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;i!==null;){if(o=Vn(i),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}i=i.parentNode}}r=r.return}Jc(function(){var c=a,d=qo(t),u=[];e:{var g=Eu.get(e);if(g!==void 0){var v=ni,y=e;switch(e){case"keypress":if(ls(t)===0)break e;case"keydown":case"keyup":v=Wf;break;case"focusin":y="focus",v=xa;break;case"focusout":y="blur",v=xa;break;case"beforeblur":case"afterblur":v=xa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=al;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Kf;break;case Su:case Iu:case Cu:v=Lf;break;case Mu:v=qf;break;case"scroll":v=Nf;break;case"wheel":v=Zf;break;case"copy":case"cut":case"paste":v=Pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=il}var w=(n&4)!==0,I=!w&&e==="scroll",m=w?g!==null?g+"Capture":null:g;w=[];for(var f=c,h;f!==null;){h=f;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,m!==null&&(x=gr(f,m),x!=null&&w.push(_r(f,x,h)))),I)break;f=f.return}0<w.length&&(g=new v(g,y,null,t,d),u.push({event:g,listeners:w}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&t!==Za&&(y=t.relatedTarget||t.fromElement)&&(Vn(y)||y[dn]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=t.relatedTarget||t.toElement,v=c,y=y?Vn(y):null,y!==null&&(I=tt(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(w=al,x="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=il,x="onPointerLeave",m="onPointerEnter",f="pointer"),I=v==null?g:ht(v),h=y==null?g:ht(y),g=new w(x,f+"leave",v,t,d),g.target=I,g.relatedTarget=h,x=null,Vn(d)===c&&(w=new w(m,f+"enter",y,t,d),w.target=h,w.relatedTarget=I,x=w),I=x,v&&y)n:{for(w=v,m=y,f=0,h=w;h;h=ut(h))f++;for(h=0,x=m;x;x=ut(x))h++;for(;0<f-h;)w=ut(w),f--;for(;0<h-f;)m=ut(m),h--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break n;w=ut(w),m=ut(m)}w=null}else w=null;v!==null&&yl(u,g,v,w,!1),y!==null&&I!==null&&yl(u,I,y,w,!0)}}e:{if(g=c?ht(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var S=sm;else if(ul(g))if(bu)S=lm;else{S=om;var T=am}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=im);if(S&&(S=S(e,c))){yu(u,S,t,d);break e}T&&T(e,g,c),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&Ga(g,"number",g.value)}switch(T=c?ht(c):window,e){case"focusin":(ul(T)||T.contentEditable==="true")&&(mt=T,so=c,ir=null);break;case"focusout":ir=so=mt=null;break;case"mousedown":ao=!0;break;case"contextmenu":case"mouseup":case"dragend":ao=!1,gl(u,t,d);break;case"selectionchange":if(dm)break;case"keydown":case"keyup":gl(u,t,d)}var C;if(ri)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ft?hu(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(gu&&t.locale!=="ko"&&(ft||E!=="onCompositionStart"?E==="onCompositionEnd"&&ft&&(C=mu()):(wn=d,ei="value"in wn?wn.value:wn.textContent,ft=!0)),T=Ss(c,E),0<T.length&&(E=new ol(E,e,null,t,d),u.push({event:E,listeners:T}),C?E.data=C:(C=vu(t),C!==null&&(E.data=C)))),(C=Jf?em(e,t):nm(e,t))&&(c=Ss(c,"onBeforeInput"),0<c.length&&(d=new ol("onBeforeInput","beforeinput",null,t,d),u.push({event:d,listeners:c}),d.data=C))}Tu(u,n)})}function _r(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ss(e,n){for(var t=n+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=gr(e,t),a!=null&&r.unshift(_r(e,a,s)),a=gr(e,n),a!=null&&r.push(_r(e,a,s))),e=e.return}return r}function ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yl(e,n,t,r,s){for(var a=n._reactName,o=[];t!==null&&t!==r;){var i=t,l=i.alternate,c=i.stateNode;if(l!==null&&l===r)break;i.tag===5&&c!==null&&(i=c,s?(l=gr(t,a),l!=null&&o.unshift(_r(t,l,i))):s||(l=gr(t,a),l!=null&&o.push(_r(t,l,i)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var gm=/\r\n?/g,hm=/\u0000|\uFFFD/g;function bl(e){return(typeof e=="string"?e:""+e).replace(gm,`
`).replace(hm,"")}function Yr(e,n,t){if(n=bl(n),bl(e)!==n&&t)throw Error(_(425))}function Is(){}var oo=null,io=null;function lo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var co=typeof setTimeout=="function"?setTimeout:void 0,vm=typeof clearTimeout=="function"?clearTimeout:void 0,xl=typeof Promise=="function"?Promise:void 0,ym=typeof queueMicrotask=="function"?queueMicrotask:typeof xl<"u"?function(e){return xl.resolve(null).then(e).catch(bm)}:co;function bm(e){setTimeout(function(){throw e})}function Ea(e,n){var t=n,r=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(r===0){e.removeChild(s),yr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=s}while(t);yr(n)}function En(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function kl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ft=Math.random().toString(36).slice(2),en="__reactFiber$"+Ft,wr="__reactProps$"+Ft,dn="__reactContainer$"+Ft,uo="__reactEvents$"+Ft,xm="__reactListeners$"+Ft,km="__reactHandles$"+Ft;function Vn(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[dn]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=kl(e);e!==null;){if(t=e[en])return t;e=kl(e)}return n}e=t,t=e.parentNode}return null}function Ur(e){return e=e[en]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Ks(e){return e[wr]||null}var po=[],vt=-1;function Pn(e){return{current:e}}function W(e){0>vt||(e.current=po[vt],po[vt]=null,vt--)}function $(e,n){vt++,po[vt]=e.current,e.current=n}var Ln={},ue=Pn(Ln),ye=Pn(!1),Yn=Ln;function Nt(e,n){var t=e.type.contextTypes;if(!t)return Ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in t)s[a]=n[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function be(e){return e=e.childContextTypes,e!=null}function Cs(){W(ye),W(ue)}function _l(e,n,t){if(ue.current!==Ln)throw Error(_(168));$(ue,n),$(ye,t)}function ju(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var s in r)if(!(s in n))throw Error(_(108,sf(e)||"Unknown",s));return q({},t,r)}function Ms(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,Yn=ue.current,$(ue,e),$(ye,ye.current),!0}function wl(e,n,t){var r=e.stateNode;if(!r)throw Error(_(169));t?(e=ju(e,n,Yn),r.__reactInternalMemoizedMergedChildContext=e,W(ye),W(ue),$(ue,e)):W(ye),$(ye,t)}var sn=null,Qs=!1,Ta=!1;function Ou(e){sn===null?sn=[e]:sn.push(e)}function _m(e){Qs=!0,Ou(e)}function Fn(){if(!Ta&&sn!==null){Ta=!0;var e=0,n=z;try{var t=sn;for(z=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}sn=null,Qs=!1}catch(s){throw sn!==null&&(sn=sn.slice(e+1)),ru(Yo,Fn),s}finally{z=n,Ta=!1}}return null}var yt=[],bt=0,Es=null,Ts=0,je=[],Oe=0,Zn=null,an=1,on="";function $n(e,n){yt[bt++]=Ts,yt[bt++]=Es,Es=e,Ts=n}function Au(e,n,t){je[Oe++]=an,je[Oe++]=on,je[Oe++]=Zn,Zn=e;var r=an;e=on;var s=32-Be(r)-1;r&=~(1<<s),t+=1;var a=32-Be(n)+s;if(30<a){var o=s-s%5;a=(r&(1<<o)-1).toString(32),r>>=o,s-=o,an=1<<32-Be(n)+s|t<<s|r,on=a+e}else an=1<<a|t<<s|r,on=e}function ai(e){e.return!==null&&($n(e,1),Au(e,1,0))}function oi(e){for(;e===Es;)Es=yt[--bt],yt[bt]=null,Ts=yt[--bt],yt[bt]=null;for(;e===Zn;)Zn=je[--Oe],je[Oe]=null,on=je[--Oe],je[Oe]=null,an=je[--Oe],je[Oe]=null}var Ie=null,Se=null,G=!1,$e=null;function Uu(e,n){var t=Ae(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Sl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ie=e,Se=En(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ie=e,Se=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Zn!==null?{id:an,overflow:on}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ae(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ie=e,Se=null,!0):!1;default:return!1}}function fo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function mo(e){if(G){var n=Se;if(n){var t=n;if(!Sl(e,n)){if(fo(e))throw Error(_(418));n=En(t.nextSibling);var r=Ie;n&&Sl(e,n)?Uu(r,t):(e.flags=e.flags&-4097|2,G=!1,Ie=e)}}else{if(fo(e))throw Error(_(418));e.flags=e.flags&-4097|2,G=!1,Ie=e}}}function Il(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Zr(e){if(e!==Ie)return!1;if(!G)return Il(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!lo(e.type,e.memoizedProps)),n&&(n=Se)){if(fo(e))throw Lu(),Error(_(418));for(;n;)Uu(e,n),n=En(n.nextSibling)}if(Il(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Se=En(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Se=null}}else Se=Ie?En(e.stateNode.nextSibling):null;return!0}function Lu(){for(var e=Se;e;)e=En(e.nextSibling)}function jt(){Se=Ie=null,G=!1}function ii(e){$e===null?$e=[e]:$e.push(e)}var wm=mn.ReactCurrentBatchConfig;function Gt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(_(309));var r=t.stateNode}if(!r)throw Error(_(147,e));var s=r,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(o){var i=s.refs;o===null?delete i[a]:i[a]=o},n._stringRef=a,n)}if(typeof e!="string")throw Error(_(284));if(!t._owner)throw Error(_(290,e))}return e}function Xr(e,n){throw e=Object.prototype.toString.call(n),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Cl(e){var n=e._init;return n(e._payload)}function Ru(e){function n(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function t(m,f){if(!e)return null;for(;f!==null;)n(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function s(m,f){return m=On(m,f),m.index=0,m.sibling=null,m}function a(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=2,f):h):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function i(m,f,h,x){return f===null||f.tag!==6?(f=Ra(h,m.mode,x),f.return=m,f):(f=s(f,h),f.return=m,f)}function l(m,f,h,x){var S=h.type;return S===pt?d(m,f,h.props.children,x,h.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===bn&&Cl(S)===f.type)?(x=s(f,h.props),x.ref=Gt(m,f,h),x.return=m,x):(x=gs(h.type,h.key,h.props,null,m.mode,x),x.ref=Gt(m,f,h),x.return=m,x)}function c(m,f,h,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Pa(h,m.mode,x),f.return=m,f):(f=s(f,h.children||[]),f.return=m,f)}function d(m,f,h,x,S){return f===null||f.tag!==7?(f=qn(h,m.mode,x,S),f.return=m,f):(f=s(f,h),f.return=m,f)}function u(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ra(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Hr:return h=gs(f.type,f.key,f.props,null,m.mode,h),h.ref=Gt(m,null,f),h.return=m,h;case dt:return f=Pa(f,m.mode,h),f.return=m,f;case bn:var x=f._init;return u(m,x(f._payload),h)}if(Jt(f)||Ht(f))return f=qn(f,m.mode,h,null),f.return=m,f;Xr(m,f)}return null}function g(m,f,h,x){var S=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:i(m,f,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Hr:return h.key===S?l(m,f,h,x):null;case dt:return h.key===S?c(m,f,h,x):null;case bn:return S=h._init,g(m,f,S(h._payload),x)}if(Jt(h)||Ht(h))return S!==null?null:d(m,f,h,x,null);Xr(m,h)}return null}function v(m,f,h,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(h)||null,i(f,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Hr:return m=m.get(x.key===null?h:x.key)||null,l(f,m,x,S);case dt:return m=m.get(x.key===null?h:x.key)||null,c(f,m,x,S);case bn:var T=x._init;return v(m,f,h,T(x._payload),S)}if(Jt(x)||Ht(x))return m=m.get(h)||null,d(f,m,x,S,null);Xr(f,x)}return null}function y(m,f,h,x){for(var S=null,T=null,C=f,E=f=0,F=null;C!==null&&E<h.length;E++){C.index>E?(F=C,C=null):F=C.sibling;var A=g(m,C,h[E],x);if(A===null){C===null&&(C=F);break}e&&C&&A.alternate===null&&n(m,C),f=a(A,f,E),T===null?S=A:T.sibling=A,T=A,C=F}if(E===h.length)return t(m,C),G&&$n(m,E),S;if(C===null){for(;E<h.length;E++)C=u(m,h[E],x),C!==null&&(f=a(C,f,E),T===null?S=C:T.sibling=C,T=C);return G&&$n(m,E),S}for(C=r(m,C);E<h.length;E++)F=v(C,m,E,h[E],x),F!==null&&(e&&F.alternate!==null&&C.delete(F.key===null?E:F.key),f=a(F,f,E),T===null?S=F:T.sibling=F,T=F);return e&&C.forEach(function(ke){return n(m,ke)}),G&&$n(m,E),S}function w(m,f,h,x){var S=Ht(h);if(typeof S!="function")throw Error(_(150));if(h=S.call(h),h==null)throw Error(_(151));for(var T=S=null,C=f,E=f=0,F=null,A=h.next();C!==null&&!A.done;E++,A=h.next()){C.index>E?(F=C,C=null):F=C.sibling;var ke=g(m,C,A.value,x);if(ke===null){C===null&&(C=F);break}e&&C&&ke.alternate===null&&n(m,C),f=a(ke,f,E),T===null?S=ke:T.sibling=ke,T=ke,C=F}if(A.done)return t(m,C),G&&$n(m,E),S;if(C===null){for(;!A.done;E++,A=h.next())A=u(m,A.value,x),A!==null&&(f=a(A,f,E),T===null?S=A:T.sibling=A,T=A);return G&&$n(m,E),S}for(C=r(m,C);!A.done;E++,A=h.next())A=v(C,m,E,A.value,x),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?E:A.key),f=a(A,f,E),T===null?S=A:T.sibling=A,T=A);return e&&C.forEach(function(gn){return n(m,gn)}),G&&$n(m,E),S}function I(m,f,h,x){if(typeof h=="object"&&h!==null&&h.type===pt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Hr:e:{for(var S=h.key,T=f;T!==null;){if(T.key===S){if(S=h.type,S===pt){if(T.tag===7){t(m,T.sibling),f=s(T,h.props.children),f.return=m,m=f;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===bn&&Cl(S)===T.type){t(m,T.sibling),f=s(T,h.props),f.ref=Gt(m,T,h),f.return=m,m=f;break e}t(m,T);break}else n(m,T);T=T.sibling}h.type===pt?(f=qn(h.props.children,m.mode,x,h.key),f.return=m,m=f):(x=gs(h.type,h.key,h.props,null,m.mode,x),x.ref=Gt(m,f,h),x.return=m,m=x)}return o(m);case dt:e:{for(T=h.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){t(m,f.sibling),f=s(f,h.children||[]),f.return=m,m=f;break e}else{t(m,f);break}else n(m,f);f=f.sibling}f=Pa(h,m.mode,x),f.return=m,m=f}return o(m);case bn:return T=h._init,I(m,f,T(h._payload),x)}if(Jt(h))return y(m,f,h,x);if(Ht(h))return w(m,f,h,x);Xr(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(t(m,f.sibling),f=s(f,h),f.return=m,m=f):(t(m,f),f=Ra(h,m.mode,x),f.return=m,m=f),o(m)):t(m,f)}return I}var Ot=Ru(!0),Pu=Ru(!1),Ns=Pn(null),js=null,xt=null,li=null;function ci(){li=xt=js=null}function ui(e){var n=Ns.current;W(Ns),e._currentValue=n}function go(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Mt(e,n){js=e,li=xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(he=!0),e.firstContext=null)}function Le(e){var n=e._currentValue;if(li!==e)if(e={context:e,memoizedValue:n,next:null},xt===null){if(js===null)throw Error(_(308));xt=e,js.dependencies={lanes:0,firstContext:e}}else xt=xt.next=e;return n}var Gn=null;function di(e){Gn===null?Gn=[e]:Gn.push(e)}function Fu(e,n,t,r){var s=n.interleaved;return s===null?(t.next=t,di(n)):(t.next=s.next,s.next=t),n.interleaved=t,pn(e,r)}function pn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var xn=!1;function pi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Tn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,P&2){var s=r.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),r.pending=n,pn(e,t)}return s=r.interleaved,s===null?(n.next=n,di(r)):(n.next=s.next,s.next=n),r.interleaved=n,pn(e,t)}function cs(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Zo(e,t)}}function Ml(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var s=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?s=a=o:a=a.next=o,t=t.next}while(t!==null);a===null?s=a=n:a=a.next=n}else s=a=n;t={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Os(e,n,t,r){var s=e.updateQueue;xn=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var l=i,c=l.next;l.next=null,o===null?a=c:o.next=c,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,i=d.lastBaseUpdate,i!==o&&(i===null?d.firstBaseUpdate=c:i.next=c,d.lastBaseUpdate=l))}if(a!==null){var u=s.baseState;o=0,d=c=l=null,i=a;do{var g=i.lane,v=i.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=e,w=i;switch(g=n,v=t,w.tag){case 1:if(y=w.payload,typeof y=="function"){u=y.call(v,u,g);break e}u=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(v,u,g):y,g==null)break e;u=q({},u,g);break e;case 2:xn=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[i]:g.push(i))}else v={eventTime:v,lane:g,tag:i.tag,payload:i.payload,callback:i.callback,next:null},d===null?(c=d=v,l=u):d=d.next=v,o|=g;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;g=i,i=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(d===null&&(l=u),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=d,n=s.shared.interleaved,n!==null){s=n;do o|=s.lane,s=s.next;while(s!==n)}else a===null&&(s.shared.lanes=0);Jn|=o,e.lanes=o,e.memoizedState=u}}function El(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],s=r.callback;if(s!==null){if(r.callback=null,r=t,typeof s!="function")throw Error(_(191,s));s.call(r)}}}var Lr={},tn=Pn(Lr),Sr=Pn(Lr),Ir=Pn(Lr);function Kn(e){if(e===Lr)throw Error(_(174));return e}function fi(e,n){switch($(Ir,n),$(Sr,e),$(tn,Lr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Qa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Qa(n,e)}W(tn),$(tn,n)}function At(){W(tn),W(Sr),W(Ir)}function Du(e){Kn(Ir.current);var n=Kn(tn.current),t=Qa(n,e.type);n!==t&&($(Sr,e),$(tn,t))}function mi(e){Sr.current===e&&(W(tn),W(Sr))}var K=Pn(0);function As(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Na=[];function gi(){for(var e=0;e<Na.length;e++)Na[e]._workInProgressVersionPrimary=null;Na.length=0}var us=mn.ReactCurrentDispatcher,ja=mn.ReactCurrentBatchConfig,Xn=0,Q=null,ee=null,te=null,Us=!1,lr=!1,Cr=0,Sm=0;function ie(){throw Error(_(321))}function hi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ge(e[t],n[t]))return!1;return!0}function vi(e,n,t,r,s,a){if(Xn=a,Q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,us.current=e===null||e.memoizedState===null?Em:Tm,e=t(r,s),lr){a=0;do{if(lr=!1,Cr=0,25<=a)throw Error(_(301));a+=1,te=ee=null,n.updateQueue=null,us.current=Nm,e=t(r,s)}while(lr)}if(us.current=Ls,n=ee!==null&&ee.next!==null,Xn=0,te=ee=Q=null,Us=!1,n)throw Error(_(300));return e}function yi(){var e=Cr!==0;return Cr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?Q.memoizedState=te=e:te=te.next=e,te}function Re(){if(ee===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var n=te===null?Q.memoizedState:te.next;if(n!==null)te=n,ee=e;else{if(e===null)throw Error(_(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},te===null?Q.memoizedState=te=e:te=te.next=e}return te}function Mr(e,n){return typeof n=="function"?n(e):n}function Oa(e){var n=Re(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=ee,s=r.baseQueue,a=t.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}r.baseQueue=s=a,t.pending=null}if(s!==null){a=s.next,r=r.baseState;var i=o=null,l=null,c=a;do{var d=c.lane;if((Xn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(i=l=u,o=r):l=l.next=u,Q.lanes|=d,Jn|=d}c=c.next}while(c!==null&&c!==a);l===null?o=r:l.next=i,Ge(r,n.memoizedState)||(he=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){s=e;do a=s.lane,Q.lanes|=a,Jn|=a,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Aa(e){var n=Re(),t=n.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=e;var r=t.dispatch,s=t.pending,a=n.memoizedState;if(s!==null){t.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);Ge(a,n.memoizedState)||(he=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,r]}function Hu(){}function $u(e,n){var t=Q,r=Re(),s=n(),a=!Ge(r.memoizedState,s);if(a&&(r.memoizedState=s,he=!0),r=r.queue,bi(Vu.bind(null,t,r,e),[e]),r.getSnapshot!==n||a||te!==null&&te.memoizedState.tag&1){if(t.flags|=2048,Er(9,Wu.bind(null,t,r,s,n),void 0,null),re===null)throw Error(_(349));Xn&30||Bu(t,n,s)}return s}function Bu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Wu(e,n,t,r){n.value=t,n.getSnapshot=r,Gu(n)&&Ku(e)}function Vu(e,n,t){return t(function(){Gu(n)&&Ku(e)})}function Gu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ge(e,t)}catch{return!0}}function Ku(e){var n=pn(e,1);n!==null&&We(n,e,1,-1)}function Tl(e){var n=Je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},n.queue=e,e=e.dispatch=Mm.bind(null,Q,e),[n.memoizedState,e]}function Er(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Qu(){return Re().memoizedState}function ds(e,n,t,r){var s=Je();Q.flags|=e,s.memoizedState=Er(1|n,t,void 0,r===void 0?null:r)}function qs(e,n,t,r){var s=Re();r=r===void 0?null:r;var a=void 0;if(ee!==null){var o=ee.memoizedState;if(a=o.destroy,r!==null&&hi(r,o.deps)){s.memoizedState=Er(n,t,a,r);return}}Q.flags|=e,s.memoizedState=Er(1|n,t,a,r)}function Nl(e,n){return ds(8390656,8,e,n)}function bi(e,n){return qs(2048,8,e,n)}function qu(e,n){return qs(4,2,e,n)}function Yu(e,n){return qs(4,4,e,n)}function Zu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xu(e,n,t){return t=t!=null?t.concat([e]):null,qs(4,4,Zu.bind(null,n,e),t)}function xi(){}function Ju(e,n){var t=Re();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&hi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function ed(e,n){var t=Re();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&hi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function nd(e,n,t){return Xn&21?(Ge(t,n)||(t=ou(),Q.lanes|=t,Jn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=t)}function Im(e,n){var t=z;z=t!==0&&4>t?t:4,e(!0);var r=ja.transition;ja.transition={};try{e(!1),n()}finally{z=t,ja.transition=r}}function td(){return Re().memoizedState}function Cm(e,n,t){var r=jn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},rd(e))sd(n,t);else if(t=Fu(e,n,t,r),t!==null){var s=pe();We(t,e,r,s),ad(t,n,r)}}function Mm(e,n,t){var r=jn(e),s={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(rd(e))sd(n,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var o=n.lastRenderedState,i=a(o,t);if(s.hasEagerState=!0,s.eagerState=i,Ge(i,o)){var l=n.interleaved;l===null?(s.next=s,di(n)):(s.next=l.next,l.next=s),n.interleaved=s;return}}catch{}finally{}t=Fu(e,n,s,r),t!==null&&(s=pe(),We(t,e,r,s),ad(t,n,r))}}function rd(e){var n=e.alternate;return e===Q||n!==null&&n===Q}function sd(e,n){lr=Us=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ad(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Zo(e,t)}}var Ls={readContext:Le,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Em={readContext:Le,useCallback:function(e,n){return Je().memoizedState=[e,n===void 0?null:n],e},useContext:Le,useEffect:Nl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ds(4194308,4,Zu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ds(4194308,4,e,n)},useInsertionEffect:function(e,n){return ds(4,2,e,n)},useMemo:function(e,n){var t=Je();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Je();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Cm.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var n=Je();return e={current:e},n.memoizedState=e},useState:Tl,useDebugValue:xi,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Tl(!1),n=e[0];return e=Im.bind(null,e[1]),Je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Q,s=Je();if(G){if(t===void 0)throw Error(_(407));t=t()}else{if(t=n(),re===null)throw Error(_(349));Xn&30||Bu(r,n,t)}s.memoizedState=t;var a={value:t,getSnapshot:n};return s.queue=a,Nl(Vu.bind(null,r,a,e),[e]),r.flags|=2048,Er(9,Wu.bind(null,r,a,t,n),void 0,null),t},useId:function(){var e=Je(),n=re.identifierPrefix;if(G){var t=on,r=an;t=(r&~(1<<32-Be(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Cr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Sm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Tm={readContext:Le,useCallback:Ju,useContext:Le,useEffect:bi,useImperativeHandle:Xu,useInsertionEffect:qu,useLayoutEffect:Yu,useMemo:ed,useReducer:Oa,useRef:Qu,useState:function(){return Oa(Mr)},useDebugValue:xi,useDeferredValue:function(e){var n=Re();return nd(n,ee.memoizedState,e)},useTransition:function(){var e=Oa(Mr)[0],n=Re().memoizedState;return[e,n]},useMutableSource:Hu,useSyncExternalStore:$u,useId:td,unstable_isNewReconciler:!1},Nm={readContext:Le,useCallback:Ju,useContext:Le,useEffect:bi,useImperativeHandle:Xu,useInsertionEffect:qu,useLayoutEffect:Yu,useMemo:ed,useReducer:Aa,useRef:Qu,useState:function(){return Aa(Mr)},useDebugValue:xi,useDeferredValue:function(e){var n=Re();return ee===null?n.memoizedState=e:nd(n,ee.memoizedState,e)},useTransition:function(){var e=Aa(Mr)[0],n=Re().memoizedState;return[e,n]},useMutableSource:Hu,useSyncExternalStore:$u,useId:td,unstable_isNewReconciler:!1};function De(e,n){if(e&&e.defaultProps){n=q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ho(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ys={isMounted:function(e){return(e=e._reactInternals)?tt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=pe(),s=jn(e),a=ln(r,s);a.payload=n,t!=null&&(a.callback=t),n=Tn(e,a,s),n!==null&&(We(n,e,s,r),cs(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=pe(),s=jn(e),a=ln(r,s);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=Tn(e,a,s),n!==null&&(We(n,e,s,r),cs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=pe(),r=jn(e),s=ln(t,r);s.tag=2,n!=null&&(s.callback=n),n=Tn(e,s,r),n!==null&&(We(n,e,r,t),cs(n,e,r))}};function jl(e,n,t,r,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):n.prototype&&n.prototype.isPureReactComponent?!xr(t,r)||!xr(s,a):!0}function od(e,n,t){var r=!1,s=Ln,a=n.contextType;return typeof a=="object"&&a!==null?a=Le(a):(s=be(n)?Yn:ue.current,r=n.contextTypes,a=(r=r!=null)?Nt(e,s):Ln),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ys,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),n}function Ol(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ys.enqueueReplaceState(n,n.state,null)}function vo(e,n,t,r){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},pi(e);var a=n.contextType;typeof a=="object"&&a!==null?s.context=Le(a):(a=be(n)?Yn:ue.current,s.context=Nt(e,a)),s.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(ho(e,n,a,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&Ys.enqueueReplaceState(s,s.state,null),Os(e,t,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Ut(e,n){try{var t="",r=n;do t+=rf(r),r=r.return;while(r);var s=t}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:s,digest:null}}function Ua(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function yo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var jm=typeof WeakMap=="function"?WeakMap:Map;function id(e,n,t){t=ln(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ps||(Ps=!0,Eo=r),yo(e,n)},t}function ld(e,n,t){t=ln(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=n.value;t.payload=function(){return r(s)},t.callback=function(){yo(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){yo(e,n),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Al(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new jm;var s=new Set;r.set(n,s)}else s=r.get(n),s===void 0&&(s=new Set,r.set(n,s));s.has(t)||(s.add(t),e=Vm.bind(null,e,n,t),n.then(e,e))}function Ul(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ll(e,n,t,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=ln(-1,1),n.tag=2,Tn(t,n,1))),t.lanes|=1),e)}var Om=mn.ReactCurrentOwner,he=!1;function de(e,n,t,r){n.child=e===null?Pu(n,null,t,r):Ot(n,e.child,t,r)}function Rl(e,n,t,r,s){t=t.render;var a=n.ref;return Mt(n,s),r=vi(e,n,t,r,a,s),t=yi(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,fn(e,n,s)):(G&&t&&ai(n),n.flags|=1,de(e,n,r,s),n.child)}function Pl(e,n,t,r,s){if(e===null){var a=t.type;return typeof a=="function"&&!Ei(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,cd(e,n,a,r,s)):(e=gs(t.type,null,r,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(t=t.compare,t=t!==null?t:xr,t(o,r)&&e.ref===n.ref)return fn(e,n,s)}return n.flags|=1,e=On(a,r),e.ref=n.ref,e.return=n,n.child=e}function cd(e,n,t,r,s){if(e!==null){var a=e.memoizedProps;if(xr(a,r)&&e.ref===n.ref)if(he=!1,n.pendingProps=r=a,(e.lanes&s)!==0)e.flags&131072&&(he=!0);else return n.lanes=e.lanes,fn(e,n,s)}return bo(e,n,t,r,s)}function ud(e,n,t){var r=n.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(_t,we),we|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,$(_t,we),we|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:t,$(_t,we),we|=r}else a!==null?(r=a.baseLanes|t,n.memoizedState=null):r=t,$(_t,we),we|=r;return de(e,n,s,t),n.child}function dd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function bo(e,n,t,r,s){var a=be(t)?Yn:ue.current;return a=Nt(n,a),Mt(n,s),t=vi(e,n,t,r,a,s),r=yi(),e!==null&&!he?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,fn(e,n,s)):(G&&r&&ai(n),n.flags|=1,de(e,n,t,s),n.child)}function Fl(e,n,t,r,s){if(be(t)){var a=!0;Ms(n)}else a=!1;if(Mt(n,s),n.stateNode===null)ps(e,n),od(n,t,r),vo(n,t,r,s),r=!0;else if(e===null){var o=n.stateNode,i=n.memoizedProps;o.props=i;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Le(c):(c=be(t)?Yn:ue.current,c=Nt(n,c));var d=t.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==r||l!==c)&&Ol(n,o,r,c),xn=!1;var g=n.memoizedState;o.state=g,Os(n,r,o,s),l=n.memoizedState,i!==r||g!==l||ye.current||xn?(typeof d=="function"&&(ho(n,t,d,r),l=n.memoizedState),(i=xn||jl(n,t,i,r,g,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),o.props=r,o.state=l,o.context=c,r=i):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,zu(e,n),i=n.memoizedProps,c=n.type===n.elementType?i:De(n.type,i),o.props=c,u=n.pendingProps,g=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Le(l):(l=be(t)?Yn:ue.current,l=Nt(n,l));var v=t.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==u||g!==l)&&Ol(n,o,r,l),xn=!1,g=n.memoizedState,o.state=g,Os(n,r,o,s);var y=n.memoizedState;i!==u||g!==y||ye.current||xn?(typeof v=="function"&&(ho(n,t,v,r),y=n.memoizedState),(c=xn||jl(n,t,c,r,g,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return xo(e,n,t,r,a,s)}function xo(e,n,t,r,s,a){dd(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return s&&wl(n,t,!1),fn(e,n,a);r=n.stateNode,Om.current=n;var i=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Ot(n,e.child,null,a),n.child=Ot(n,null,i,a)):de(e,n,i,a),n.memoizedState=r.state,s&&wl(n,t,!0),n.child}function pd(e){var n=e.stateNode;n.pendingContext?_l(e,n.pendingContext,n.pendingContext!==n.context):n.context&&_l(e,n.context,!1),fi(e,n.containerInfo)}function zl(e,n,t,r,s){return jt(),ii(s),n.flags|=256,de(e,n,t,r),n.child}var ko={dehydrated:null,treeContext:null,retryLane:0};function _o(e){return{baseLanes:e,cachePool:null,transitions:null}}function fd(e,n,t){var r=n.pendingProps,s=K.current,a=!1,o=(n.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(s&2)!==0),i?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),$(K,s&1),e===null)return mo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,a?(r=n.mode,a=n.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Js(o,r,0,null),e=qn(e,r,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=_o(t),n.memoizedState=ko,e):ki(n,o));if(s=e.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return Am(e,n,o,r,i,s,t);if(a){a=r.fallback,o=n.mode,s=e.child,i=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&n.child!==s?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=On(s,l),r.subtreeFlags=s.subtreeFlags&14680064),i!==null?a=On(i,a):(a=qn(a,o,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,o=e.child.memoizedState,o=o===null?_o(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~t,n.memoizedState=ko,r}return a=e.child,e=a.sibling,r=On(a,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ki(e,n){return n=Js({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Jr(e,n,t,r){return r!==null&&ii(r),Ot(n,e.child,null,t),e=ki(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Am(e,n,t,r,s,a,o){if(t)return n.flags&256?(n.flags&=-257,r=Ua(Error(_(422))),Jr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=r.fallback,s=n.mode,r=Js({mode:"visible",children:r.children},s,0,null),a=qn(a,s,o,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,n.mode&1&&Ot(n,e.child,null,o),n.child.memoizedState=_o(o),n.memoizedState=ko,a);if(!(n.mode&1))return Jr(e,n,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var i=r.dgst;return r=i,a=Error(_(419)),r=Ua(a,r,void 0),Jr(e,n,o,r)}if(i=(o&e.childLanes)!==0,he||i){if(r=re,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,pn(e,s),We(r,e,s,-1))}return Mi(),r=Ua(Error(_(421))),Jr(e,n,o,r)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=Gm.bind(null,e),s._reactRetry=n,null):(e=a.treeContext,Se=En(s.nextSibling),Ie=n,G=!0,$e=null,e!==null&&(je[Oe++]=an,je[Oe++]=on,je[Oe++]=Zn,an=e.id,on=e.overflow,Zn=n),n=ki(n,r.children),n.flags|=4096,n)}function Dl(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),go(e.return,n,t)}function La(e,n,t,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:s}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=t,a.tailMode=s)}function md(e,n,t){var r=n.pendingProps,s=r.revealOrder,a=r.tail;if(de(e,n,r.children,t),r=K.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dl(e,t,n);else if(e.tag===19)Dl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(K,r),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&As(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),La(n,!1,s,t,a);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&As(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}La(n,!0,t,null,a);break;case"together":La(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ps(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function fn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Jn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(_(153));if(n.child!==null){for(e=n.child,t=On(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=On(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Um(e,n,t){switch(n.tag){case 3:pd(n),jt();break;case 5:Du(n);break;case 1:be(n.type)&&Ms(n);break;case 4:fi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,s=n.memoizedProps.value;$(Ns,r._currentValue),r._currentValue=s;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?($(K,K.current&1),n.flags|=128,null):t&n.child.childLanes?fd(e,n,t):($(K,K.current&1),e=fn(e,n,t),e!==null?e.sibling:null);$(K,K.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return md(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),$(K,K.current),r)break;return null;case 22:case 23:return n.lanes=0,ud(e,n,t)}return fn(e,n,t)}var gd,wo,hd,vd;gd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};wo=function(){};hd=function(e,n,t,r){var s=e.memoizedProps;if(s!==r){e=n.stateNode,Kn(tn.current);var a=null;switch(t){case"input":s=Wa(e,s),r=Wa(e,r),a=[];break;case"select":s=q({},s,{value:void 0}),r=q({},r,{value:void 0}),a=[];break;case"textarea":s=Ka(e,s),r=Ka(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Is)}qa(t,r);var o;t=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var i=s[c];for(o in i)i.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fr.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var l=r[c];if(i=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&l!==i&&(l!=null||i!=null))if(c==="style")if(i){for(o in i)!i.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&i[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(a||(a=[]),a.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,i=i?i.__html:void 0,l!=null&&i!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fr.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&B("scroll",e),a||i===l||(a=[])):(a=a||[]).push(c,l))}t&&(a=a||[]).push("style",t);var c=a;(n.updateQueue=c)&&(n.flags|=4)}};vd=function(e,n,t,r){t!==r&&(n.flags|=4)};function Kt(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Lm(e,n,t){var r=n.pendingProps;switch(oi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(n),null;case 1:return be(n.type)&&Cs(),le(n),null;case 3:return r=n.stateNode,At(),W(ye),W(ue),gi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,$e!==null&&(jo($e),$e=null))),wo(e,n),le(n),null;case 5:mi(n);var s=Kn(Ir.current);if(t=n.type,e!==null&&n.stateNode!=null)hd(e,n,t,r,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(_(166));return le(n),null}if(e=Kn(tn.current),Zr(n)){r=n.stateNode,t=n.type;var a=n.memoizedProps;switch(r[en]=n,r[wr]=a,e=(n.mode&1)!==0,t){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(s=0;s<nr.length;s++)B(nr[s],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":qi(r,a),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},B("invalid",r);break;case"textarea":Zi(r,a),B("invalid",r)}qa(t,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var i=a[o];o==="children"?typeof i=="string"?r.textContent!==i&&(a.suppressHydrationWarning!==!0&&Yr(r.textContent,i,e),s=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Yr(r.textContent,i,e),s=["children",""+i]):fr.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&B("scroll",r)}switch(t){case"input":$r(r),Yi(r,a,!0);break;case"textarea":$r(r),Xi(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Is)}r=s,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[en]=n,e[wr]=r,gd(e,n,!1,!1),n.stateNode=e;e:{switch(o=Ya(t,r),t){case"dialog":B("cancel",e),B("close",e),s=r;break;case"iframe":case"object":case"embed":B("load",e),s=r;break;case"video":case"audio":for(s=0;s<nr.length;s++)B(nr[s],e);s=r;break;case"source":B("error",e),s=r;break;case"img":case"image":case"link":B("error",e),B("load",e),s=r;break;case"details":B("toggle",e),s=r;break;case"input":qi(e,r),s=Wa(e,r),B("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=q({},r,{value:void 0}),B("invalid",e);break;case"textarea":Zi(e,r),s=Ka(e,r),B("invalid",e);break;default:s=r}qa(t,s),i=s;for(a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="style"?Qc(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gc(e,l)):a==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&mr(e,l):typeof l=="number"&&mr(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(fr.hasOwnProperty(a)?l!=null&&a==="onScroll"&&B("scroll",e):l!=null&&Vo(e,a,l,o))}switch(t){case"input":$r(e),Yi(e,r,!1);break;case"textarea":$r(e),Xi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?wt(e,!!r.multiple,a,!1):r.defaultValue!=null&&wt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Is)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return le(n),null;case 6:if(e&&n.stateNode!=null)vd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(_(166));if(t=Kn(Ir.current),Kn(tn.current),Zr(n)){if(r=n.stateNode,t=n.memoizedProps,r[en]=n,(a=r.nodeValue!==t)&&(e=Ie,e!==null))switch(e.tag){case 3:Yr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yr(r.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[en]=n,n.stateNode=r}return le(n),null;case 13:if(W(K),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Se!==null&&n.mode&1&&!(n.flags&128))Lu(),jt(),n.flags|=98560,a=!1;else if(a=Zr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[en]=n}else jt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;le(n),a=!1}else $e!==null&&(jo($e),$e=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):Mi())),n.updateQueue!==null&&(n.flags|=4),le(n),null);case 4:return At(),wo(e,n),e===null&&kr(n.stateNode.containerInfo),le(n),null;case 10:return ui(n.type._context),le(n),null;case 17:return be(n.type)&&Cs(),le(n),null;case 19:if(W(K),a=n.memoizedState,a===null)return le(n),null;if(r=(n.flags&128)!==0,o=a.rendering,o===null)if(r)Kt(a,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=As(e),o!==null){for(n.flags|=128,Kt(a,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)a=t,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return $(K,K.current&1|2),n.child}e=e.sibling}a.tail!==null&&X()>Lt&&(n.flags|=128,r=!0,Kt(a,!1),n.lanes=4194304)}else{if(!r)if(e=As(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Kt(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!G)return le(n),null}else 2*X()-a.renderingStartTime>Lt&&t!==1073741824&&(n.flags|=128,r=!0,Kt(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(t=a.last,t!==null?t.sibling=o:n.child=o,a.last=o)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=X(),n.sibling=null,t=K.current,$(K,r?t&1|2:t&1),n):(le(n),null);case 22:case 23:return Ci(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?we&1073741824&&(le(n),n.subtreeFlags&6&&(n.flags|=8192)):le(n),null;case 24:return null;case 25:return null}throw Error(_(156,n.tag))}function Rm(e,n){switch(oi(n),n.tag){case 1:return be(n.type)&&Cs(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return At(),W(ye),W(ue),gi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return mi(n),null;case 13:if(W(K),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(_(340));jt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(K),null;case 4:return At(),null;case 10:return ui(n.type._context),null;case 22:case 23:return Ci(),null;case 24:return null;default:return null}}var es=!1,ce=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,j=null;function kt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Y(e,n,r)}else t.current=null}function So(e,n,t){try{t()}catch(r){Y(e,n,r)}}var Hl=!1;function Fm(e,n){if(oo=_s,e=_u(),si(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var o=0,i=-1,l=-1,c=0,d=0,u=e,g=null;n:for(;;){for(var v;u!==t||s!==0&&u.nodeType!==3||(i=o+s),u!==a||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)g=u,u=v;for(;;){if(u===e)break n;if(g===t&&++c===s&&(i=o),g===a&&++d===r&&(l=o),(v=u.nextSibling)!==null)break;u=g,g=u.parentNode}u=v}t=i===-1||l===-1?null:{start:i,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(io={focusedElem:e,selectionRange:t},_s=!1,j=n;j!==null;)if(n=j,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,j=e;else for(;j!==null;){n=j;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,I=y.memoizedState,m=n.stateNode,f=m.getSnapshotBeforeUpdate(n.elementType===n.type?w:De(n.type,w),I);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(x){Y(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,j=e;break}j=n.return}return y=Hl,Hl=!1,y}function cr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&So(n,t,a)}s=s.next}while(s!==r)}}function Zs(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Io(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function yd(e){var n=e.alternate;n!==null&&(e.alternate=null,yd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[en],delete n[wr],delete n[uo],delete n[xm],delete n[km])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bd(e){return e.tag===5||e.tag===3||e.tag===4}function $l(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Co(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Is));else if(r!==4&&(e=e.child,e!==null))for(Co(e,n,t),e=e.sibling;e!==null;)Co(e,n,t),e=e.sibling}function Mo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mo(e,n,t),e=e.sibling;e!==null;)Mo(e,n,t),e=e.sibling}var se=null,He=!1;function yn(e,n,t){for(t=t.child;t!==null;)xd(e,n,t),t=t.sibling}function xd(e,n,t){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Bs,t)}catch{}switch(t.tag){case 5:ce||kt(t,n);case 6:var r=se,s=He;se=null,yn(e,n,t),se=r,He=s,se!==null&&(He?(e=se,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):se.removeChild(t.stateNode));break;case 18:se!==null&&(He?(e=se,t=t.stateNode,e.nodeType===8?Ea(e.parentNode,t):e.nodeType===1&&Ea(e,t),yr(e)):Ea(se,t.stateNode));break;case 4:r=se,s=He,se=t.stateNode.containerInfo,He=!0,yn(e,n,t),se=r,He=s;break;case 0:case 11:case 14:case 15:if(!ce&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&So(t,n,o),s=s.next}while(s!==r)}yn(e,n,t);break;case 1:if(!ce&&(kt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(i){Y(t,n,i)}yn(e,n,t);break;case 21:yn(e,n,t);break;case 22:t.mode&1?(ce=(r=ce)||t.memoizedState!==null,yn(e,n,t),ce=r):yn(e,n,t);break;default:yn(e,n,t)}}function Bl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Pm),n.forEach(function(r){var s=Km.bind(null,e,r);t.has(r)||(t.add(r),r.then(s,s))})}}function ze(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];try{var a=e,o=n,i=o;e:for(;i!==null;){switch(i.tag){case 5:se=i.stateNode,He=!1;break e;case 3:se=i.stateNode.containerInfo,He=!0;break e;case 4:se=i.stateNode.containerInfo,He=!0;break e}i=i.return}if(se===null)throw Error(_(160));xd(a,o,s),se=null,He=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){Y(s,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)kd(n,e),n=n.sibling}function kd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(n,e),Ze(e),r&4){try{cr(3,e,e.return),Zs(3,e)}catch(w){Y(e,e.return,w)}try{cr(5,e,e.return)}catch(w){Y(e,e.return,w)}}break;case 1:ze(n,e),Ze(e),r&512&&t!==null&&kt(t,t.return);break;case 5:if(ze(n,e),Ze(e),r&512&&t!==null&&kt(t,t.return),e.flags&32){var s=e.stateNode;try{mr(s,"")}catch(w){Y(e,e.return,w)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=t!==null?t.memoizedProps:a,i=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&Bc(s,a),Ya(i,o);var c=Ya(i,a);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?Qc(s,u):d==="dangerouslySetInnerHTML"?Gc(s,u):d==="children"?mr(s,u):Vo(s,d,u,c)}switch(i){case"input":Va(s,a);break;case"textarea":Wc(s,a);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?wt(s,!!a.multiple,v,!1):g!==!!a.multiple&&(a.defaultValue!=null?wt(s,!!a.multiple,a.defaultValue,!0):wt(s,!!a.multiple,a.multiple?[]:"",!1))}s[wr]=a}catch(w){Y(e,e.return,w)}}break;case 6:if(ze(n,e),Ze(e),r&4){if(e.stateNode===null)throw Error(_(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(w){Y(e,e.return,w)}}break;case 3:if(ze(n,e),Ze(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(w){Y(e,e.return,w)}break;case 4:ze(n,e),Ze(e);break;case 13:ze(n,e),Ze(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Si=X())),r&4&&Bl(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(ce=(c=ce)||d,ze(n,e),ce=c):ze(n,e),Ze(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(j=e,d=e.child;d!==null;){for(u=j=d;j!==null;){switch(g=j,v=g.child,g.tag){case 0:case 11:case 14:case 15:cr(4,g,g.return);break;case 1:kt(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(w){Y(r,t,w)}}break;case 5:kt(g,g.return);break;case 22:if(g.memoizedState!==null){Vl(u);continue}}v!==null?(v.return=g,j=v):Vl(u)}d=d.sibling}e:for(d=null,u=e;;){if(u.tag===5){if(d===null){d=u;try{s=u.stateNode,c?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,i.style.display=Kc("display",o))}catch(w){Y(e,e.return,w)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(w){Y(e,e.return,w)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:ze(n,e),Ze(e),r&4&&Bl(e);break;case 21:break;default:ze(n,e),Ze(e)}}function Ze(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(bd(t)){var r=t;break e}t=t.return}throw Error(_(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(mr(s,""),r.flags&=-33);var a=$l(e);Mo(e,a,s);break;case 3:case 4:var o=r.stateNode.containerInfo,i=$l(e);Co(e,i,o);break;default:throw Error(_(161))}}catch(l){Y(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zm(e,n,t){j=e,_d(e)}function _d(e,n,t){for(var r=(e.mode&1)!==0;j!==null;){var s=j,a=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||es;if(!o){var i=s.alternate,l=i!==null&&i.memoizedState!==null||ce;i=es;var c=ce;if(es=o,(ce=l)&&!c)for(j=s;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?Gl(s):l!==null?(l.return=o,j=l):Gl(s);for(;a!==null;)j=a,_d(a),a=a.sibling;j=s,es=i,ce=c}Wl(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,j=a):Wl(e)}}function Wl(e){for(;j!==null;){var n=j;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ce||Zs(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ce)if(t===null)r.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:De(n.type,t.memoizedProps);r.componentDidUpdate(s,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&El(n,a,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}El(n,o,t)}break;case 5:var i=n.stateNode;if(t===null&&n.flags&4){t=i;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&yr(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ce||n.flags&512&&Io(n)}catch(g){Y(n,n.return,g)}}if(n===e){j=null;break}if(t=n.sibling,t!==null){t.return=n.return,j=t;break}j=n.return}}function Vl(e){for(;j!==null;){var n=j;if(n===e){j=null;break}var t=n.sibling;if(t!==null){t.return=n.return,j=t;break}j=n.return}}function Gl(e){for(;j!==null;){var n=j;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Zs(4,n)}catch(l){Y(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var s=n.return;try{r.componentDidMount()}catch(l){Y(n,s,l)}}var a=n.return;try{Io(n)}catch(l){Y(n,a,l)}break;case 5:var o=n.return;try{Io(n)}catch(l){Y(n,o,l)}}}catch(l){Y(n,n.return,l)}if(n===e){j=null;break}var i=n.sibling;if(i!==null){i.return=n.return,j=i;break}j=n.return}}var Dm=Math.ceil,Rs=mn.ReactCurrentDispatcher,_i=mn.ReactCurrentOwner,Ue=mn.ReactCurrentBatchConfig,P=0,re=null,J=null,ae=0,we=0,_t=Pn(0),ne=0,Tr=null,Jn=0,Xs=0,wi=0,ur=null,ge=null,Si=0,Lt=1/0,rn=null,Ps=!1,Eo=null,Nn=null,ns=!1,Sn=null,Fs=0,dr=0,To=null,fs=-1,ms=0;function pe(){return P&6?X():fs!==-1?fs:fs=X()}function jn(e){return e.mode&1?P&2&&ae!==0?ae&-ae:wm.transition!==null?(ms===0&&(ms=ou()),ms):(e=z,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e):1}function We(e,n,t,r){if(50<dr)throw dr=0,To=null,Error(_(185));Or(e,t,r),(!(P&2)||e!==re)&&(e===re&&(!(P&2)&&(Xs|=t),ne===4&&_n(e,ae)),xe(e,r),t===1&&P===0&&!(n.mode&1)&&(Lt=X()+500,Qs&&Fn()))}function xe(e,n){var t=e.callbackNode;wf(e,n);var r=ks(e,e===re?ae:0);if(r===0)t!==null&&nl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&nl(t),n===1)e.tag===0?_m(Kl.bind(null,e)):Ou(Kl.bind(null,e)),ym(function(){!(P&6)&&Fn()}),t=null;else{switch(iu(r)){case 1:t=Yo;break;case 4:t=su;break;case 16:t=xs;break;case 536870912:t=au;break;default:t=xs}t=Nd(t,wd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function wd(e,n){if(fs=-1,ms=0,P&6)throw Error(_(327));var t=e.callbackNode;if(Et()&&e.callbackNode!==t)return null;var r=ks(e,e===re?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=zs(e,r);else{n=r;var s=P;P|=2;var a=Id();(re!==e||ae!==n)&&(rn=null,Lt=X()+500,Qn(e,n));do try{Bm();break}catch(i){Sd(e,i)}while(!0);ci(),Rs.current=a,P=s,J!==null?n=0:(re=null,ae=0,n=ne)}if(n!==0){if(n===2&&(s=no(e),s!==0&&(r=s,n=No(e,s))),n===1)throw t=Tr,Qn(e,0),_n(e,r),xe(e,X()),t;if(n===6)_n(e,r);else{if(s=e.current.alternate,!(r&30)&&!Hm(s)&&(n=zs(e,r),n===2&&(a=no(e),a!==0&&(r=a,n=No(e,a))),n===1))throw t=Tr,Qn(e,0),_n(e,r),xe(e,X()),t;switch(e.finishedWork=s,e.finishedLanes=r,n){case 0:case 1:throw Error(_(345));case 2:Bn(e,ge,rn);break;case 3:if(_n(e,r),(r&130023424)===r&&(n=Si+500-X(),10<n)){if(ks(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=co(Bn.bind(null,e,ge,rn),n);break}Bn(e,ge,rn);break;case 4:if(_n(e,r),(r&4194240)===r)break;for(n=e.eventTimes,s=-1;0<r;){var o=31-Be(r);a=1<<o,o=n[o],o>s&&(s=o),r&=~a}if(r=s,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dm(r/1960))-r,10<r){e.timeoutHandle=co(Bn.bind(null,e,ge,rn),r);break}Bn(e,ge,rn);break;case 5:Bn(e,ge,rn);break;default:throw Error(_(329))}}}return xe(e,X()),e.callbackNode===t?wd.bind(null,e):null}function No(e,n){var t=ur;return e.current.memoizedState.isDehydrated&&(Qn(e,n).flags|=256),e=zs(e,n),e!==2&&(n=ge,ge=t,n!==null&&jo(n)),e}function jo(e){ge===null?ge=e:ge.push.apply(ge,e)}function Hm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var s=t[r],a=s.getSnapshot;s=s.value;try{if(!Ge(a(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _n(e,n){for(n&=~wi,n&=~Xs,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Be(n),r=1<<t;e[t]=-1,n&=~r}}function Kl(e){if(P&6)throw Error(_(327));Et();var n=ks(e,0);if(!(n&1))return xe(e,X()),null;var t=zs(e,n);if(e.tag!==0&&t===2){var r=no(e);r!==0&&(n=r,t=No(e,r))}if(t===1)throw t=Tr,Qn(e,0),_n(e,n),xe(e,X()),t;if(t===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Bn(e,ge,rn),xe(e,X()),null}function Ii(e,n){var t=P;P|=1;try{return e(n)}finally{P=t,P===0&&(Lt=X()+500,Qs&&Fn())}}function et(e){Sn!==null&&Sn.tag===0&&!(P&6)&&Et();var n=P;P|=1;var t=Ue.transition,r=z;try{if(Ue.transition=null,z=1,e)return e()}finally{z=r,Ue.transition=t,P=n,!(P&6)&&Fn()}}function Ci(){we=_t.current,W(_t)}function Qn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,vm(t)),J!==null)for(t=J.return;t!==null;){var r=t;switch(oi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cs();break;case 3:At(),W(ye),W(ue),gi();break;case 5:mi(r);break;case 4:At();break;case 13:W(K);break;case 19:W(K);break;case 10:ui(r.type._context);break;case 22:case 23:Ci()}t=t.return}if(re=e,J=e=On(e.current,null),ae=we=n,ne=0,Tr=null,wi=Xs=Jn=0,ge=ur=null,Gn!==null){for(n=0;n<Gn.length;n++)if(t=Gn[n],r=t.interleaved,r!==null){t.interleaved=null;var s=r.next,a=t.pending;if(a!==null){var o=a.next;a.next=s,r.next=o}t.pending=r}Gn=null}return e}function Sd(e,n){do{var t=J;try{if(ci(),us.current=Ls,Us){for(var r=Q.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Us=!1}if(Xn=0,te=ee=Q=null,lr=!1,Cr=0,_i.current=null,t===null||t.return===null){ne=1,Tr=n,J=null;break}e:{var a=e,o=t.return,i=t,l=n;if(n=ae,i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=i,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Ul(o);if(v!==null){v.flags&=-257,Ll(v,o,i,a,n),v.mode&1&&Al(a,c,n),n=v,l=c;var y=n.updateQueue;if(y===null){var w=new Set;w.add(l),n.updateQueue=w}else y.add(l);break e}else{if(!(n&1)){Al(a,c,n),Mi();break e}l=Error(_(426))}}else if(G&&i.mode&1){var I=Ul(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Ll(I,o,i,a,n),ii(Ut(l,i));break e}}a=l=Ut(l,i),ne!==4&&(ne=2),ur===null?ur=[a]:ur.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var m=id(a,l,n);Ml(a,m);break e;case 1:i=l;var f=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Nn===null||!Nn.has(h)))){a.flags|=65536,n&=-n,a.lanes|=n;var x=ld(a,i,n);Ml(a,x);break e}}a=a.return}while(a!==null)}Md(t)}catch(S){n=S,J===t&&t!==null&&(J=t=t.return);continue}break}while(!0)}function Id(){var e=Rs.current;return Rs.current=Ls,e===null?Ls:e}function Mi(){(ne===0||ne===3||ne===2)&&(ne=4),re===null||!(Jn&268435455)&&!(Xs&268435455)||_n(re,ae)}function zs(e,n){var t=P;P|=2;var r=Id();(re!==e||ae!==n)&&(rn=null,Qn(e,n));do try{$m();break}catch(s){Sd(e,s)}while(!0);if(ci(),P=t,Rs.current=r,J!==null)throw Error(_(261));return re=null,ae=0,ne}function $m(){for(;J!==null;)Cd(J)}function Bm(){for(;J!==null&&!mf();)Cd(J)}function Cd(e){var n=Td(e.alternate,e,we);e.memoizedProps=e.pendingProps,n===null?Md(e):J=n,_i.current=null}function Md(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Rm(t,n),t!==null){t.flags&=32767,J=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,J=null;return}}else if(t=Lm(t,n,we),t!==null){J=t;return}if(n=n.sibling,n!==null){J=n;return}J=n=e}while(n!==null);ne===0&&(ne=5)}function Bn(e,n,t){var r=z,s=Ue.transition;try{Ue.transition=null,z=1,Wm(e,n,t,r)}finally{Ue.transition=s,z=r}return null}function Wm(e,n,t,r){do Et();while(Sn!==null);if(P&6)throw Error(_(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Sf(e,a),e===re&&(J=re=null,ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ns||(ns=!0,Nd(xs,function(){return Et(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=Ue.transition,Ue.transition=null;var o=z;z=1;var i=P;P|=4,_i.current=null,Fm(e,t),kd(t,e),um(io),_s=!!oo,io=oo=null,e.current=t,zm(t),gf(),P=i,z=o,Ue.transition=a}else e.current=t;if(ns&&(ns=!1,Sn=e,Fs=s),a=e.pendingLanes,a===0&&(Nn=null),yf(t.stateNode),xe(e,X()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ps)throw Ps=!1,e=Eo,Eo=null,e;return Fs&1&&e.tag!==0&&Et(),a=e.pendingLanes,a&1?e===To?dr++:(dr=0,To=e):dr=0,Fn(),null}function Et(){if(Sn!==null){var e=iu(Fs),n=Ue.transition,t=z;try{if(Ue.transition=null,z=16>e?16:e,Sn===null)var r=!1;else{if(e=Sn,Sn=null,Fs=0,P&6)throw Error(_(331));var s=P;for(P|=4,j=e.current;j!==null;){var a=j,o=a.child;if(j.flags&16){var i=a.deletions;if(i!==null){for(var l=0;l<i.length;l++){var c=i[l];for(j=c;j!==null;){var d=j;switch(d.tag){case 0:case 11:case 15:cr(8,d,a)}var u=d.child;if(u!==null)u.return=d,j=u;else for(;j!==null;){d=j;var g=d.sibling,v=d.return;if(yd(d),d===c){j=null;break}if(g!==null){g.return=v,j=g;break}j=v}}}var y=a.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var I=w.sibling;w.sibling=null,w=I}while(w!==null)}}j=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,j=o;else e:for(;j!==null;){if(a=j,a.flags&2048)switch(a.tag){case 0:case 11:case 15:cr(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,j=m;break e}j=a.return}}var f=e.current;for(j=f;j!==null;){o=j;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,j=h;else e:for(o=f;j!==null;){if(i=j,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Zs(9,i)}}catch(S){Y(i,i.return,S)}if(i===o){j=null;break e}var x=i.sibling;if(x!==null){x.return=i.return,j=x;break e}j=i.return}}if(P=s,Fn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Bs,e)}catch{}r=!0}return r}finally{z=t,Ue.transition=n}}return!1}function Ql(e,n,t){n=Ut(t,n),n=id(e,n,1),e=Tn(e,n,1),n=pe(),e!==null&&(Or(e,1,n),xe(e,n))}function Y(e,n,t){if(e.tag===3)Ql(e,e,t);else for(;n!==null;){if(n.tag===3){Ql(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){e=Ut(t,e),e=ld(n,e,1),n=Tn(n,e,1),e=pe(),n!==null&&(Or(n,1,e),xe(n,e));break}}n=n.return}}function Vm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=pe(),e.pingedLanes|=e.suspendedLanes&t,re===e&&(ae&t)===t&&(ne===4||ne===3&&(ae&130023424)===ae&&500>X()-Si?Qn(e,0):wi|=t),xe(e,n)}function Ed(e,n){n===0&&(e.mode&1?(n=Vr,Vr<<=1,!(Vr&130023424)&&(Vr=4194304)):n=1);var t=pe();e=pn(e,n),e!==null&&(Or(e,n,t),xe(e,t))}function Gm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ed(e,t)}function Km(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(n),Ed(e,t)}var Td;Td=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ye.current)he=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return he=!1,Um(e,n,t);he=!!(e.flags&131072)}else he=!1,G&&n.flags&1048576&&Au(n,Ts,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ps(e,n),e=n.pendingProps;var s=Nt(n,ue.current);Mt(n,t),s=vi(null,n,r,e,s,t);var a=yi();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,be(r)?(a=!0,Ms(n)):a=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,pi(n),s.updater=Ys,n.stateNode=s,s._reactInternals=n,vo(n,r,e,t),n=xo(null,n,r,!0,a,t)):(n.tag=0,G&&a&&ai(n),de(null,n,s,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ps(e,n),e=n.pendingProps,s=r._init,r=s(r._payload),n.type=r,s=n.tag=qm(r),e=De(r,e),s){case 0:n=bo(null,n,r,e,t);break e;case 1:n=Fl(null,n,r,e,t);break e;case 11:n=Rl(null,n,r,e,t);break e;case 14:n=Pl(null,n,r,De(r.type,e),t);break e}throw Error(_(306,r,""))}return n;case 0:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:De(r,s),bo(e,n,r,s,t);case 1:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:De(r,s),Fl(e,n,r,s,t);case 3:e:{if(pd(n),e===null)throw Error(_(387));r=n.pendingProps,a=n.memoizedState,s=a.element,zu(e,n),Os(n,r,null,t);var o=n.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){s=Ut(Error(_(423)),n),n=zl(e,n,r,t,s);break e}else if(r!==s){s=Ut(Error(_(424)),n),n=zl(e,n,r,t,s);break e}else for(Se=En(n.stateNode.containerInfo.firstChild),Ie=n,G=!0,$e=null,t=Pu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(jt(),r===s){n=fn(e,n,t);break e}de(e,n,r,t)}n=n.child}return n;case 5:return Du(n),e===null&&mo(n),r=n.type,s=n.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,lo(r,s)?o=null:a!==null&&lo(r,a)&&(n.flags|=32),dd(e,n),de(e,n,o,t),n.child;case 6:return e===null&&mo(n),null;case 13:return fd(e,n,t);case 4:return fi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ot(n,null,r,t):de(e,n,r,t),n.child;case 11:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:De(r,s),Rl(e,n,r,s,t);case 7:return de(e,n,n.pendingProps,t),n.child;case 8:return de(e,n,n.pendingProps.children,t),n.child;case 12:return de(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,s=n.pendingProps,a=n.memoizedProps,o=s.value,$(Ns,r._currentValue),r._currentValue=o,a!==null)if(Ge(a.value,o)){if(a.children===s.children&&!ye.current){n=fn(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var i=a.dependencies;if(i!==null){o=a.child;for(var l=i.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=ln(-1,t&-t),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),go(a.return,t,n),i.lanes|=t;break}l=l.next}}else if(a.tag===10)o=a.type===n.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(_(341));o.lanes|=t,i=o.alternate,i!==null&&(i.lanes|=t),go(o,t,n),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===n){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}de(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,r=n.pendingProps.children,Mt(n,t),s=Le(s),r=r(s),n.flags|=1,de(e,n,r,t),n.child;case 14:return r=n.type,s=De(r,n.pendingProps),s=De(r.type,s),Pl(e,n,r,s,t);case 15:return cd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:De(r,s),ps(e,n),n.tag=1,be(r)?(e=!0,Ms(n)):e=!1,Mt(n,t),od(n,r,s),vo(n,r,s,t),xo(null,n,r,!0,e,t);case 19:return md(e,n,t);case 22:return ud(e,n,t)}throw Error(_(156,n.tag))};function Nd(e,n){return ru(e,n)}function Qm(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,n,t,r){return new Qm(e,n,t,r)}function Ei(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qm(e){if(typeof e=="function")return Ei(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ko)return 11;if(e===Qo)return 14}return 2}function On(e,n){var t=e.alternate;return t===null?(t=Ae(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function gs(e,n,t,r,s,a){var o=2;if(r=e,typeof e=="function")Ei(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case pt:return qn(t.children,s,a,n);case Go:o=8,s|=8;break;case Da:return e=Ae(12,t,n,s|2),e.elementType=Da,e.lanes=a,e;case Ha:return e=Ae(13,t,n,s),e.elementType=Ha,e.lanes=a,e;case $a:return e=Ae(19,t,n,s),e.elementType=$a,e.lanes=a,e;case Dc:return Js(t,s,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fc:o=10;break e;case zc:o=9;break e;case Ko:o=11;break e;case Qo:o=14;break e;case bn:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return n=Ae(o,t,n,s),n.elementType=e,n.type=r,n.lanes=a,n}function qn(e,n,t,r){return e=Ae(7,e,r,n),e.lanes=t,e}function Js(e,n,t,r){return e=Ae(22,e,r,n),e.elementType=Dc,e.lanes=t,e.stateNode={isHidden:!1},e}function Ra(e,n,t){return e=Ae(6,e,null,n),e.lanes=t,e}function Pa(e,n,t){return n=Ae(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ym(e,n,t,r,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=va(0),this.expirationTimes=va(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=va(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ti(e,n,t,r,s,a,o,i,l){return e=new Ym(e,n,t,i,l),n===1?(n=1,a===!0&&(n|=8)):n=0,a=Ae(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},pi(a),e}function Zm(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function jd(e){if(!e)return Ln;e=e._reactInternals;e:{if(tt(e)!==e||e.tag!==1)throw Error(_(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(_(171))}if(e.tag===1){var t=e.type;if(be(t))return ju(e,t,n)}return n}function Od(e,n,t,r,s,a,o,i,l){return e=Ti(t,r,!0,e,s,a,o,i,l),e.context=jd(null),t=e.current,r=pe(),s=jn(t),a=ln(r,s),a.callback=n??null,Tn(t,a,s),e.current.lanes=s,Or(e,s,r),xe(e,r),e}function ea(e,n,t,r){var s=n.current,a=pe(),o=jn(s);return t=jd(t),n.context===null?n.context=t:n.pendingContext=t,n=ln(a,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Tn(s,n,o),e!==null&&(We(e,s,o,a),cs(e,s,o)),o}function Ds(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ql(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ni(e,n){ql(e,n),(e=e.alternate)&&ql(e,n)}function Xm(){return null}var Ad=typeof reportError=="function"?reportError:function(e){console.error(e)};function ji(e){this._internalRoot=e}na.prototype.render=ji.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(_(409));ea(e,n,null,null)};na.prototype.unmount=ji.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;et(function(){ea(null,e,null,null)}),n[dn]=null}};function na(e){this._internalRoot=e}na.prototype.unstable_scheduleHydration=function(e){if(e){var n=uu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<kn.length&&n!==0&&n<kn[t].priority;t++);kn.splice(t,0,e),t===0&&pu(e)}};function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yl(){}function Jm(e,n,t,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var c=Ds(o);a.call(c)}}var o=Od(n,r,e,0,null,!1,!1,"",Yl);return e._reactRootContainer=o,e[dn]=o.current,kr(e.nodeType===8?e.parentNode:e),et(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var i=r;r=function(){var c=Ds(l);i.call(c)}}var l=Ti(e,0,!1,null,null,!1,!1,"",Yl);return e._reactRootContainer=l,e[dn]=l.current,kr(e.nodeType===8?e.parentNode:e),et(function(){ea(n,l,t,r)}),l}function ra(e,n,t,r,s){var a=t._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var i=s;s=function(){var l=Ds(o);i.call(l)}}ea(n,o,e,s)}else o=Jm(t,n,e,s,r);return Ds(o)}lu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=er(n.pendingLanes);t!==0&&(Zo(n,t|1),xe(n,X()),!(P&6)&&(Lt=X()+500,Fn()))}break;case 13:et(function(){var r=pn(e,1);if(r!==null){var s=pe();We(r,e,1,s)}}),Ni(e,1)}};Xo=function(e){if(e.tag===13){var n=pn(e,134217728);if(n!==null){var t=pe();We(n,e,134217728,t)}Ni(e,134217728)}};cu=function(e){if(e.tag===13){var n=jn(e),t=pn(e,n);if(t!==null){var r=pe();We(t,e,n,r)}Ni(e,n)}};uu=function(){return z};du=function(e,n){var t=z;try{return z=e,n()}finally{z=t}};Xa=function(e,n,t){switch(n){case"input":if(Va(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var s=Ks(r);if(!s)throw Error(_(90));$c(r),Va(r,s)}}}break;case"textarea":Wc(e,t);break;case"select":n=t.value,n!=null&&wt(e,!!t.multiple,n,!1)}};Zc=Ii;Xc=et;var eg={usingClientEntryPoint:!1,Events:[Ur,ht,Ks,qc,Yc,Ii]},Qt={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ng={bundleType:Qt.bundleType,version:Qt.version,rendererPackageName:Qt.rendererPackageName,rendererConfig:Qt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nu(e),e===null?null:e.stateNode},findFiberByHostInstance:Qt.findFiberByHostInstance||Xm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{Bs=ts.inject(ng),nn=ts}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eg;Me.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oi(n))throw Error(_(200));return Zm(e,n,null,t)};Me.createRoot=function(e,n){if(!Oi(e))throw Error(_(299));var t=!1,r="",s=Ad;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Ti(e,1,!1,null,null,t,!1,r,s),e[dn]=n.current,kr(e.nodeType===8?e.parentNode:e),new ji(n)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=nu(n),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return et(e)};Me.hydrate=function(e,n,t){if(!ta(n))throw Error(_(200));return ra(null,e,n,!0,t)};Me.hydrateRoot=function(e,n,t){if(!Oi(e))throw Error(_(405));var r=t!=null&&t.hydratedSources||null,s=!1,a="",o=Ad;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Od(n,null,e,1,t??null,s,!1,a,o),e[dn]=n.current,kr(e),r)for(e=0;e<r.length;e++)t=r[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new na(n)};Me.render=function(e,n,t){if(!ta(n))throw Error(_(200));return ra(null,e,n,!1,t)};Me.unmountComponentAtNode=function(e){if(!ta(e))throw Error(_(40));return e._reactRootContainer?(et(function(){ra(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};Me.unstable_batchedUpdates=Ii;Me.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ta(t))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return ra(e,n,t,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function Ud(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ud)}catch(e){console.error(e)}}Ud(),Uc.exports=Me;var tg=Uc.exports,Zl=tg;Fa.createRoot=Zl.createRoot,Fa.hydrateRoot=Zl.hydrateRoot;const hs={styleId:null,itemIds:[]},Ld="style-shelf.cart";function Xl(e,n){return{...e,styleId:n}}function rg(e,n){return e.itemIds.includes(n)?{...e,itemIds:e.itemIds.filter(t=>t!==n)}:{...e,itemIds:[...e.itemIds,n]}}function sg(e,n){return{...e,itemIds:e.itemIds.filter(t=>t!==n)}}function ag(e,n){return e.styleId===n||e.itemIds.includes(n)}function og(e){return e.itemIds.length+(e.styleId?1:0)}function Rd(e,n){var o;const t=new Map(n.entries.map(i=>[i.id,i])),r=[];let s=e.styleId;s&&((o=t.get(s))==null?void 0:o.kind)!=="style"&&(r.push(s),s=null);const a=[];for(const i of e.itemIds){if(a.includes(i))continue;const l=t.get(i);if(!l||l.kind==="style"){r.push(i);continue}a.push(i)}return{cart:{styleId:s,itemIds:a},dropped:r}}function ig(e){if(!e)return hs;try{const n=JSON.parse(e);if(typeof n!="object"||n===null)return hs;const{styleId:t,itemIds:r}=n;return{styleId:typeof t=="string"?t:null,itemIds:Array.isArray(r)?r.filter(s=>typeof s=="string"):[]}}catch(n){return console.warn("[style-shelf] stored cart unreadable, starting empty:",n instanceof Error?n.message:n),hs}}const lg=`<div class="ss-alert-banner" role="status"><span class="ss-alert-banner__icon">i</span><span class="ss-alert-banner__text">A new version is ready.</span><button class="ss-alert-banner__action" type="button">Update</button></div>
`,cg=`.ss-alert-banner {
  box-sizing: border-box;
  display: flex; align-items: center; gap: var(--space-md);
  width: min(100%, 360px);
  padding: var(--space-md) var(--space-lg);
  border: 1px solid var(--border-accent); border-radius: var(--radius-md);
  background: var(--accent-glow);
  font: 14px/1.4 var(--font-ui); color: var(--text-primary);
}
.ss-alert-banner__icon {
  flex: none; width: 24px; height: 24px; display: grid; place-items: center;
  border-radius: 50%; background: var(--accent); color: var(--bg-void);
  font: 700 13px/1 var(--font-mono);
}
.ss-alert-banner__text { flex: 1; }
.ss-alert-banner__action {
  flex: none; padding: 6px 12px; border: 1px solid var(--border-accent); border-radius: var(--radius-sm);
  background: transparent; color: var(--text-accent); font: 600 12px/1 var(--font-ui); cursor: pointer;
}
`,ug=`{
  "id": "alert-banner",
  "kind": "alert",
  "title": {
    "en": "Banner",
    "fr": "Bandeau",
    "es": "Banner"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "feedback",
    "page"
  ]
}
`,dg=`<div class="ss-alert-stripe">
<div class="ss-alert-stripe__item" role="status"><strong>Saved</strong>Your changes are on disk.</div>
<div class="ss-alert-stripe__item" role="status"><strong>Slow network</strong>Uploads may take longer.</div>
<div class="ss-alert-stripe__item" role="alert"><strong>Sync failed</strong>The server did not answer.</div>
</div>
`,pg=`.ss-alert-stripe {
  box-sizing: border-box; display: grid; gap: var(--space-sm); width: min(100%, 320px); font-family: var(--font-ui); }
.ss-alert-stripe__item {
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--border-subtle);
  border-left: 4px solid var(--status-active);
  border-radius: var(--radius-sm);
  background: var(--bg-panel);
  color: var(--text-primary);
  font-size: 13px; line-height: 1.4;
}
.ss-alert-stripe__item strong { display: block; font-weight: 600; }
.ss-alert-stripe__item:nth-child(2) { border-left-color: var(--status-warning); }
.ss-alert-stripe__item:nth-child(3) { border-left-color: var(--status-overload); }
`,fg=`{
  "id": "alert-stripe",
  "kind": "alert",
  "title": {
    "en": "Striped alert",
    "fr": "Alerte à liseré",
    "es": "Alerta con franja"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "feedback",
    "status"
  ]
}
`,mg=`<div class="ss-bg-grid ss-preview-fill"></div>
`,gg=`.ss-bg-grid {
  background-color: var(--bg-void);
  background-image:
    linear-gradient(var(--accent-glow) 1px, transparent 1px),
    linear-gradient(90deg, var(--accent-glow) 1px, transparent 1px);
  background-size: 28px 28px;
}
`,hg=`{
  "id": "bg-grid",
  "kind": "background",
  "title": {
    "en": "Line grid",
    "fr": "Grille de lignes",
    "es": "Cuadrícula de líneas"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "backdrop",
    "sf"
  ]
}
`,vg=`<div class="ss-bg-mesh ss-preview-fill"></div>
`,yg=`.ss-bg-mesh {
  background:
    radial-gradient(circle at 15% 20%, color-mix(in srgb, var(--accent) 28%, transparent), transparent 45%),
    radial-gradient(circle at 85% 30%, color-mix(in srgb, var(--status-active) 22%, transparent), transparent 45%),
    radial-gradient(circle at 50% 90%, color-mix(in srgb, var(--accent-dim) 26%, transparent), transparent 50%),
    var(--bg-surface);
}
`,bg=`{
  "id": "bg-mesh",
  "kind": "background",
  "title": {
    "en": "Color mesh",
    "fr": "Maillage de couleurs",
    "es": "Malla de color"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "backdrop",
    "gradient"
  ]
}
`,xg=`<div class="ss-bg-radial ss-preview-fill"></div>
`,kg=`.ss-bg-radial {
  background:
    radial-gradient(ellipse 70% 55% at 50% 0%, var(--accent-glow), transparent 70%),
    var(--bg-void);
}
`,_g=`{
  "id": "bg-radial",
  "kind": "background",
  "title": {
    "en": "Top glow",
    "fr": "Lueur du haut",
    "es": "Resplandor superior"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "backdrop",
    "glow"
  ]
}
`,wg=`<span class="ss-badge-count">Inbox<span class="ss-badge-count__n">12</span></span>
`,Sg=`.ss-badge-count {
  position: relative; display: inline-flex; align-items: center;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--border-subtle); border-radius: var(--radius-md);
  background: var(--bg-panel); color: var(--text-primary);
  font: 500 14px/1 var(--font-ui);
}
.ss-badge-count__n {
  position: absolute; top: -8px; right: -8px;
  min-width: 20px; height: 20px; padding: 0 6px;
  display: grid; place-items: center;
  border-radius: 999px;
  background: var(--accent); color: var(--bg-void);
  font: 700 11px/1 var(--font-mono);
}
`,Ig=`{
  "id": "badge-count",
  "kind": "badge",
  "title": {
    "en": "Counter",
    "fr": "Compteur",
    "es": "Contador"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "notification"
  ]
}
`,Cg=`<div class="ss-badge-dot"><span class="ss-badge-dot__item">Online</span><span class="ss-badge-dot__item">Syncing</span><span class="ss-badge-dot__item">Offline</span></div>
`,Mg=`.ss-badge-dot { display: grid; gap: var(--space-sm); font: 13px/1.4 var(--font-ui); color: var(--text-primary); }
.ss-badge-dot__item { display: inline-flex; align-items: center; gap: 8px; }
.ss-badge-dot__item::before {
  content: ""; width: 8px; height: 8px; border-radius: 50%;
  background: var(--status-active);
  box-shadow: 0 0 0 3px var(--bg-hover);
}
.ss-badge-dot__item:nth-child(2)::before { background: var(--status-warning); }
.ss-badge-dot__item:nth-child(3)::before { background: var(--status-overload); }
`,Eg=`{
  "id": "badge-dot",
  "kind": "badge",
  "title": {
    "en": "Status dot",
    "fr": "Pastille d'état",
    "es": "Punto de estado"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "status"
  ]
}
`,Tg=`<div class="ss-badge-soft"><span class="ss-badge-soft__item">New</span><span class="ss-badge-soft__item">Beta</span><span class="ss-badge-soft__item">Draft</span></div>
`,Ng=`.ss-badge-soft { display: flex; gap: var(--space-sm); flex-wrap: wrap; font-family: var(--font-ui); }
.ss-badge-soft__item {
  display: inline-flex; align-items: center;
  padding: 3px 10px;
  border-radius: var(--radius-sm);
  background: var(--accent-glow);
  color: var(--text-accent);
  font: 600 12px/1.4 var(--font-ui);
}
.ss-badge-soft__item:nth-child(2) { background: var(--bg-hover); color: var(--text-secondary); }
.ss-badge-soft__item:nth-child(3) { background: var(--bg-surface); color: var(--text-muted); border: 1px solid var(--border-subtle); }
`,jg=`{
  "id": "badge-soft",
  "kind": "badge",
  "title": {
    "en": "Soft badge",
    "fr": "Badge doux",
    "es": "Insignia suave"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "label",
    "status"
  ]
}
`,Og=`<button class="ss-btn-bracket" type="button">Engage</button>
`,Ag=`.ss-btn-bracket {
  --ss-btn-bracket-c: var(--accent-border);
  font: 600 12px/1 var(--font-mono);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: var(--space-md) var(--space-lg);
  border: 1px solid var(--border-subtle);
  border-radius: 0;
  color: var(--text-primary);
  cursor: pointer;
  background:
    linear-gradient(var(--ss-btn-bracket-c), var(--ss-btn-bracket-c)) 0 0 / 12px 1px no-repeat,
    linear-gradient(var(--ss-btn-bracket-c), var(--ss-btn-bracket-c)) 0 0 / 1px 12px no-repeat,
    linear-gradient(var(--ss-btn-bracket-c), var(--ss-btn-bracket-c)) 100% 0 / 12px 1px no-repeat,
    linear-gradient(var(--ss-btn-bracket-c), var(--ss-btn-bracket-c)) 100% 0 / 1px 12px no-repeat,
    linear-gradient(var(--ss-btn-bracket-c), var(--ss-btn-bracket-c)) 0 100% / 12px 1px no-repeat,
    linear-gradient(var(--ss-btn-bracket-c), var(--ss-btn-bracket-c)) 0 100% / 1px 12px no-repeat,
    linear-gradient(var(--ss-btn-bracket-c), var(--ss-btn-bracket-c)) 100% 100% / 12px 1px no-repeat,
    linear-gradient(var(--ss-btn-bracket-c), var(--ss-btn-bracket-c)) 100% 100% / 1px 12px no-repeat,
    var(--bg-panel);
  transition: box-shadow var(--transition-fast);
}
.ss-btn-bracket:hover { --ss-btn-bracket-c: var(--accent); box-shadow: var(--shadow-accent); }
.ss-btn-bracket:focus-visible { outline: 1px solid var(--accent); outline-offset: 3px; }
`,Ug=`{
  "id": "btn-bracket",
  "kind": "button",
  "title": {
    "en": "Corner brackets",
    "fr": "Crochets",
    "es": "Corchetes"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "action",
    "hud",
    "sf"
  ]
}
`,Lg=`<button class="ss-btn-elastic" type="button">Boing</button>
`,Rg=`.ss-btn-elastic {
  font: 600 14px/1 var(--font-ui);
  padding: var(--space-sm) var(--space-lg);
  border: 1px solid var(--border-accent);
  border-radius: 999px;
  background: var(--accent-glow);
  color: var(--text-accent);
  cursor: pointer;
  /* A spring written as a curve: it overshoots, comes back, settles. */
  transition: transform 650ms linear(0, 0.33 8%, 1.06 22%, 1.19 30%, 1.13 38%, 0.98 52%, 0.95 60%, 1.01 76%, 1);
}
.ss-btn-elastic:hover { transform: scale(1.08); }
.ss-btn-elastic:active { transform: scale(0.92); transition-duration: 120ms; }
.ss-btn-elastic:focus-visible { outline: 2px solid var(--accent-border); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) {
  .ss-btn-elastic { transition: none; }
}
`,Pg=`{
  "id": "btn-elastic",
  "kind": "button",
  "title": {
    "en": "Elastic",
    "fr": "Élastique",
    "es": "Elástico"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "action",
    "wow",
    "spring"
  ]
}
`,Fg=`<button class="ss-btn-ghost" type="button">Cancel</button>
`,zg=`.ss-btn-ghost {
  font: 600 14px/1 var(--font-ui);
  padding: var(--space-sm) var(--space-lg);
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--text-accent);
  cursor: pointer;
  transition: background var(--transition-fast);
}
.ss-btn-ghost:hover { background: var(--bg-hover); }
.ss-btn-ghost:focus-visible { outline: 2px solid var(--accent-border); outline-offset: 2px; }
`,Dg=`{
  "id": "btn-ghost",
  "kind": "button",
  "title": {
    "en": "Ghost",
    "fr": "Fantôme",
    "es": "Fantasma"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "action",
    "secondary"
  ]
}
`,Hg=`<button class="ss-btn-glow" type="button">Launch</button>
`,$g=`.ss-btn-glow {
  font: 600 14px/1 var(--font-ui);
  padding: var(--space-sm) var(--space-lg);
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-md);
  background: var(--bg-panel);
  color: var(--text-primary);
  cursor: pointer;
  transition: box-shadow var(--transition-normal), background var(--transition-fast);
}
.ss-btn-glow:hover { box-shadow: var(--shadow-accent); background: var(--bg-hover); }
.ss-btn-glow:focus-visible { outline: 2px solid var(--accent-border); outline-offset: 2px; }
`,Bg=`{
  "id": "btn-glow",
  "kind": "button",
  "title": {
    "en": "Glow edge",
    "fr": "Bord lumineux",
    "es": "Borde luminoso"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "action",
    "glow"
  ]
}
`,Wg=`<button class="ss-btn-pill" type="button">+ Add tag</button>
`,Vg=`.ss-btn-pill {
  font: 600 13px/1 var(--font-ui);
  padding: var(--space-sm) var(--space-md);
  border: 1px solid transparent;
  border-radius: 999px;
  background: var(--accent-glow);
  color: var(--text-accent);
  cursor: pointer;
  transition: border-color var(--transition-fast);
}
.ss-btn-pill:hover { border-color: var(--accent-border); }
.ss-btn-pill:focus-visible { outline: 2px solid var(--accent-border); outline-offset: 2px; }
`,Gg=`{
  "id": "btn-pill",
  "kind": "button",
  "title": {
    "en": "Pill",
    "fr": "Pilule",
    "es": "Píldora"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "action",
    "soft"
  ]
}
`,Kg=`<button class="ss-btn-press" type="button">Save</button>
`,Qg=`.ss-btn-press {
  font: 700 14px/1 var(--font-ui);
  padding: var(--space-sm) var(--space-lg);
  border: 2px solid var(--text-primary);
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  color: var(--text-primary);
  box-shadow: 3px 3px 0 var(--text-primary);
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}
.ss-btn-press:hover { background: var(--bg-hover); }
.ss-btn-press:active { transform: translate(3px, 3px); box-shadow: 0 0 0 var(--text-primary); }
.ss-btn-press:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
`,qg=`{
  "id": "btn-press",
  "kind": "button",
  "title": {
    "en": "Hard press",
    "fr": "Pression",
    "es": "Presión"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "action",
    "bold"
  ]
}
`,Yg=`<button class="ss-btn-shimmer" type="button">Get started</button>
`,Zg=`.ss-btn-shimmer {
  position: relative; overflow: hidden;
  font: 600 14px/1 var(--font-ui);
  padding: var(--space-sm) var(--space-lg);
  border: 1px solid var(--accent);
  border-radius: var(--radius-md);
  background: var(--accent);
  color: var(--bg-void);
  cursor: pointer;
}
.ss-btn-shimmer::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(110deg, transparent 30%, color-mix(in srgb, var(--bg-void) 35%, transparent) 50%, transparent 70%);
  transform: translateX(-100%);
  animation: ss-btn-shimmer 2.2s ease-in-out infinite;
}
.ss-btn-shimmer:focus-visible { outline: 2px solid var(--accent-border); outline-offset: 2px; }
@keyframes ss-btn-shimmer {
  60%, 100% { transform: translateX(100%); }
}
@media (prefers-reduced-motion: reduce) {
  .ss-btn-shimmer::after { animation: none; }
}
`,Xg=`{
  "id": "btn-shimmer",
  "kind": "button",
  "title": {
    "en": "Shimmer",
    "fr": "Reflet",
    "es": "Destello"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "action",
    "wow"
  ]
}
`,Jg=`<button class="ss-btn-solid" type="button">Continue</button>
`,e0=`.ss-btn-solid {
  font: 600 14px/1 var(--font-ui);
  padding: var(--space-sm) var(--space-lg);
  border: 1px solid var(--accent);
  border-radius: var(--radius-md);
  background: var(--accent);
  color: var(--bg-void);
  box-shadow: var(--shadow-card);
  cursor: pointer;
  transition: background var(--transition-fast), transform var(--transition-fast);
}
.ss-btn-solid:hover { background: var(--accent-dim); }
.ss-btn-solid:active { transform: translateY(1px); }
.ss-btn-solid:focus-visible { outline: 2px solid var(--accent-border); outline-offset: 2px; }
`,n0=`{
  "id": "btn-solid",
  "kind": "button",
  "title": {
    "en": "Solid",
    "fr": "Plein",
    "es": "Sólido"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "action"
  ]
}
`,t0=`<article class="ss-card-basic"><p class="ss-card-basic__meta">Note · 2 min</p><h3 class="ss-card-basic__title">Morning review</h3><p class="ss-card-basic__body">Three tasks left, one meeting at ten.</p></article>
`,r0=`.ss-card-basic {
  width: min(100%, 300px);
  padding: var(--space-lg);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  box-shadow: var(--shadow-card);
  font-family: var(--font-ui);
}
.ss-card-basic__meta { margin: 0 0 var(--space-sm); font: 11px/1.2 var(--font-mono); letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); }
.ss-card-basic__title { margin: 0 0 var(--space-sm); font-size: 17px; color: var(--text-primary); }
.ss-card-basic__body { margin: 0; font-size: 14px; line-height: 1.5; color: var(--text-secondary); }
`,s0=`{
  "id": "card-basic",
  "kind": "card",
  "title": {
    "en": "Content card",
    "fr": "Carte de contenu",
    "es": "Tarjeta de contenido"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "layout"
  ]
}
`,a0=`<div class="ss-card-beam"><p class="ss-card-beam__title">Pro plan</p><p class="ss-card-beam__text">A light runs around the edge.</p></div>
`,o0=`@property --ss-card-beam-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
.ss-card-beam {
  position: relative;
  width: min(100%, 260px);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  font-family: var(--font-ui);
  isolation: isolate;
}
.ss-card-beam::before {
  content: ""; position: absolute; inset: 0; padding: 1px; z-index: -1;
  border-radius: inherit;
  background: conic-gradient(from var(--ss-card-beam-angle), transparent 0 70%, var(--accent) 85%, transparent 100%), var(--border-subtle);
  /* Only the 1px ring shows: the content box is cut out of the mask, so a translucent card ground stays clean. */
  -webkit-mask: linear-gradient(currentColor 0 0) content-box, linear-gradient(currentColor 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(currentColor 0 0) content-box exclude, linear-gradient(currentColor 0 0);
  animation: ss-card-beam 3s linear infinite;
}
.ss-card-beam__title { margin: 0 0 6px; font-size: 16px; font-weight: 600; color: var(--text-primary); }
.ss-card-beam__text { margin: 0; font-size: 13px; color: var(--text-secondary); }
@keyframes ss-card-beam {
  to { --ss-card-beam-angle: 360deg; }
}
@media (prefers-reduced-motion: reduce) {
  .ss-card-beam::before { animation: none; }
}
`,i0=`{
  "id": "card-beam",
  "kind": "card",
  "title": {
    "en": "Border beam",
    "fr": "Bordure lumineuse",
    "es": "Borde luminoso"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "wow",
    "highlight"
  ]
}
`,l0=`<article class="ss-card-media"><div class="ss-card-media__cover"></div><div class="ss-card-media__body"><h3 class="ss-card-media__title">Coastline at dusk</h3><span class="ss-card-media__tag">photo</span></div></article>
`,c0=`.ss-card-media {
  width: min(100%, 260px);
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  box-shadow: var(--shadow-card);
  font-family: var(--font-ui);
  transition: transform var(--transition-normal);
}
.ss-card-media:hover { transform: translateY(-2px); }
.ss-card-media__cover { height: 90px; background: linear-gradient(135deg, var(--accent-glow), var(--bg-surface)); }
.ss-card-media__body { padding: var(--space-md); }
.ss-card-media__title { margin: 0 0 var(--space-sm); font-size: 15px; color: var(--text-primary); }
.ss-card-media__tag { display: inline-block; padding: 3px 8px; border-radius: 999px; background: var(--accent-glow); color: var(--text-accent); font: 11px/1.2 var(--font-mono); }
`,u0=`{
  "id": "card-media",
  "kind": "card",
  "title": {
    "en": "Media card",
    "fr": "Carte média",
    "es": "Tarjeta multimedia"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "layout",
    "gallery"
  ]
}
`,d0=`<div class="ss-card-spotlight"><p class="ss-card-spotlight__title">Hover me</p><p class="ss-card-spotlight__text">A light sweeps across the card.</p></div>
`,p0=`.ss-card-spotlight {
  position: relative; overflow: hidden;
  width: min(100%, 260px);
  padding: var(--space-lg);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  font-family: var(--font-ui);
}
.ss-card-spotlight::before {
  content: ""; position: absolute; width: 220px; height: 220px; left: -110px; top: -110px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--accent-glow), transparent 70%);
  opacity: 0;
  transition: transform 700ms ease, opacity 300ms ease;
  pointer-events: none;
}
.ss-card-spotlight:hover::before { opacity: 1; transform: translate(240px, 140px); }
.ss-card-spotlight:hover { border-color: var(--border-accent); }
.ss-card-spotlight__title { position: relative; margin: 0 0 6px; font-size: 16px; font-weight: 600; color: var(--text-primary); }
.ss-card-spotlight__text { position: relative; margin: 0; font-size: 13px; color: var(--text-secondary); }
@media (prefers-reduced-motion: reduce) {
  .ss-card-spotlight::before { transition: none; }
}
`,f0=`{
  "id": "card-spotlight",
  "kind": "card",
  "title": {
    "en": "Spotlight",
    "fr": "Projecteur",
    "es": "Foco"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "wow",
    "hover"
  ]
}
`,m0=`<div class="ss-card-stat"><p class="ss-card-stat__label">Active users</p><p class="ss-card-stat__value">1 284</p><p class="ss-card-stat__trend">+12 % this week</p></div>
`,g0=`.ss-card-stat {
  min-width: 180px;
  padding: var(--space-md) var(--space-lg);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  background: var(--bg-panel);
  font-family: var(--font-ui);
}
.ss-card-stat__label { margin: 0; font: 11px/1.2 var(--font-mono); letter-spacing: 0.16em; text-transform: uppercase; color: var(--text-muted); }
.ss-card-stat__value { margin: var(--space-sm) 0 4px; font: 600 30px/1 var(--font-mono); color: var(--text-accent); }
.ss-card-stat__trend { margin: 0; font-size: 13px; color: var(--status-active); }
`,h0=`{
  "id": "card-stat",
  "kind": "card",
  "title": {
    "en": "Stat card",
    "fr": "Carte chiffre",
    "es": "Tarjeta de cifra"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "data",
    "dashboard"
  ]
}
`,v0=`{
  "id": "motion",
  "kind": "engine",
  "title": {
    "en": "Motion",
    "fr": "Motion",
    "es": "Motion"
  },
  "license": "MIT",
  "author": "Motion (motiondivision)",
  "github": "motiondivision",
  "tier": "free",
  "tags": [
    "spring",
    "gesture",
    "layout"
  ],
  "homepage": "https://motion.dev",
  "packages": {
    "react": "motion",
    "any": "motion"
  },
  "use": {
    "en": "Springs, layout animations and gestures: the base of elastic buttons.",
    "fr": "Ressorts, animations de mise en page et gestes : la base des boutons élastiques.",
    "es": "Muelles, animaciones de diseño y gestos: la base de los botones elásticos."
  }
}
`,y0=`{
  "id": "react-spring",
  "kind": "engine",
  "title": {
    "en": "React Spring",
    "fr": "React Spring",
    "es": "React Spring"
  },
  "license": "MIT",
  "author": "Poimandres (pmndrs)",
  "github": "pmndrs",
  "tier": "free",
  "tags": [
    "spring",
    "physics"
  ],
  "homepage": "https://www.react-spring.dev",
  "packages": {
    "react": "@react-spring/web"
  },
  "use": {
    "en": "Physics-based spring animations, smooth and fast.",
    "fr": "Animations à ressort fondées sur la physique, fluides et rapides.",
    "es": "Animaciones de muelle basadas en la física, fluidas y rápidas."
  }
}
`,b0=`{
  "id": "sonner",
  "kind": "engine",
  "title": {
    "en": "Sonner",
    "fr": "Sonner",
    "es": "Sonner"
  },
  "license": "MIT",
  "author": "Emil Kowalski",
  "github": "emilkowalski",
  "tier": "free",
  "tags": [
    "toast",
    "feedback"
  ],
  "homepage": "https://sonner.emilkowal.ski",
  "packages": {
    "react": "sonner"
  },
  "use": {
    "en": "Animated toast notifications.",
    "fr": "Notifications toast animées.",
    "es": "Notificaciones toast animadas."
  }
}
`,x0=`{
  "id": "use-gesture",
  "kind": "engine",
  "title": {
    "en": "use-gesture",
    "fr": "use-gesture",
    "es": "use-gesture"
  },
  "license": "MIT",
  "author": "Poimandres (pmndrs)",
  "github": "pmndrs",
  "tier": "free",
  "tags": [
    "gesture",
    "drag"
  ],
  "homepage": "https://use-gesture.netlify.app",
  "packages": {
    "react": "@use-gesture/react",
    "any": "@use-gesture/vanilla"
  },
  "use": {
    "en": "Drag, pinch and hover tied to springs: the rubber-band effect.",
    "fr": "Glisser, pincer et survoler liés aux ressorts : l'effet élastique.",
    "es": "Arrastrar, pellizcar y pasar el puntero unidos a muelles: el efecto elástico."
  }
}
`,k0=`{
  "id": "vaul",
  "kind": "engine",
  "title": {
    "en": "Vaul",
    "fr": "Vaul",
    "es": "Vaul"
  },
  "license": "MIT",
  "author": "Emil Kowalski",
  "github": "emilkowalski",
  "tier": "free",
  "tags": [
    "drawer",
    "drag"
  ],
  "homepage": "https://vaul.emilkowal.ski",
  "packages": {
    "react": "vaul"
  },
  "use": {
    "en": "A drawer you drag, with natural physics.",
    "fr": "Un tiroir qu'on fait glisser, avec une physique naturelle.",
    "es": "Un cajón que se arrastra, con física natural."
  }
}
`,_0=`MIT License

Copyright (c) Tailwind Labs, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,w0=`{
  "id": "heroicons",
  "kind": "icons",
  "title": {
    "en": "Heroicons",
    "fr": "Heroicons",
    "es": "Heroicons"
  },
  "license": "MIT",
  "author": "Tailwind Labs",
  "tier": "free",
  "tags": [
    "icons",
    "outline",
    "solid"
  ],
  "homepage": "https://heroicons.com",
  "packages": {
    "react": "@heroicons/react",
    "vue": "@heroicons/vue"
  }
}
`,S0=`{
  "package": "heroicons",
  "version": "2.2.0",
  "samples": [
    {
      "name": "home",
      "file": "24/outline/home.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke-width=\\"1.5\\" stroke=\\"currentColor\\" aria-hidden=\\"true\\" data-slot=\\"icon\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25\\"/></svg>"
    },
    {
      "name": "search",
      "file": "24/outline/magnifying-glass.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke-width=\\"1.5\\" stroke=\\"currentColor\\" aria-hidden=\\"true\\" data-slot=\\"icon\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z\\"/></svg>"
    },
    {
      "name": "settings",
      "file": "24/outline/cog-6-tooth.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke-width=\\"1.5\\" stroke=\\"currentColor\\" aria-hidden=\\"true\\" data-slot=\\"icon\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z\\"/><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z\\"/></svg>"
    },
    {
      "name": "user",
      "file": "24/outline/user.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke-width=\\"1.5\\" stroke=\\"currentColor\\" aria-hidden=\\"true\\" data-slot=\\"icon\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z\\"/></svg>"
    },
    {
      "name": "heart",
      "file": "24/outline/heart.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke-width=\\"1.5\\" stroke=\\"currentColor\\" aria-hidden=\\"true\\" data-slot=\\"icon\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z\\"/></svg>"
    },
    {
      "name": "star",
      "file": "24/outline/star.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke-width=\\"1.5\\" stroke=\\"currentColor\\" aria-hidden=\\"true\\" data-slot=\\"icon\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z\\"/></svg>"
    },
    {
      "name": "bell",
      "file": "24/outline/bell.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke-width=\\"1.5\\" stroke=\\"currentColor\\" aria-hidden=\\"true\\" data-slot=\\"icon\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0\\"/></svg>"
    },
    {
      "name": "trash",
      "file": "24/outline/trash.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke-width=\\"1.5\\" stroke=\\"currentColor\\" aria-hidden=\\"true\\" data-slot=\\"icon\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0\\"/></svg>"
    }
  ]
}
`,I0=`ISC License

Copyright (c) 2026 Lucide Icons and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---

The following Lucide icons are derived from the Feather project:

airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out

The MIT License (MIT) (for the icons listed above)

Copyright (c) 2013-present Cole Bemis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,C0=`{
  "id": "lucide",
  "kind": "icons",
  "title": {
    "en": "Lucide",
    "fr": "Lucide",
    "es": "Lucide"
  },
  "license": "ISC",
  "author": "Lucide Contributors",
  "tier": "free",
  "tags": [
    "icons",
    "outline"
  ],
  "homepage": "https://lucide.dev",
  "packages": {
    "any": "lucide",
    "react": "lucide-react",
    "vue": "lucide-vue-next",
    "svelte": "lucide-svelte"
  }
}
`,M0=`{
  "package": "lucide-static",
  "version": "1.62.0",
  "samples": [
    {
      "name": "home",
      "file": "icons/house.svg",
      "svg": "<svg class=\\"lucide lucide-house\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" ><path d=\\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\\" /><path d=\\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\\" /></svg>"
    },
    {
      "name": "search",
      "file": "icons/search.svg",
      "svg": "<svg class=\\"lucide lucide-search\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" ><path d=\\"m21 21-4.34-4.34\\" /><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\" /></svg>"
    },
    {
      "name": "settings",
      "file": "icons/settings.svg",
      "svg": "<svg class=\\"lucide lucide-settings\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" ><path d=\\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\\" /><circle cx=\\"12\\" cy=\\"12\\" r=\\"3\\" /></svg>"
    },
    {
      "name": "user",
      "file": "icons/user.svg",
      "svg": "<svg class=\\"lucide lucide-user\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" ><path d=\\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\\" /><circle cx=\\"12\\" cy=\\"7\\" r=\\"4\\" /></svg>"
    },
    {
      "name": "heart",
      "file": "icons/heart.svg",
      "svg": "<svg class=\\"lucide lucide-heart\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" ><path d=\\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\\" /></svg>"
    },
    {
      "name": "star",
      "file": "icons/star.svg",
      "svg": "<svg class=\\"lucide lucide-star\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" ><path d=\\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\\" /></svg>"
    },
    {
      "name": "bell",
      "file": "icons/bell.svg",
      "svg": "<svg class=\\"lucide lucide-bell\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" ><path d=\\"M10.268 21a2 2 0 0 0 3.464 0\\" /><path d=\\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\\" /></svg>"
    },
    {
      "name": "trash",
      "file": "icons/trash-2.svg",
      "svg": "<svg class=\\"lucide lucide-trash-2\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" ><path d=\\"M10 11v6\\" /><path d=\\"M14 11v6\\" /><path d=\\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\\" /><path d=\\"M3 6h18\\" /><path d=\\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\\" /></svg>"
    }
  ]
}
`,E0=`MIT License

Copyright (c) 2023 Phosphor Icons

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,T0=`{
  "id": "phosphor",
  "kind": "icons",
  "title": {
    "en": "Phosphor",
    "fr": "Phosphor",
    "es": "Phosphor"
  },
  "license": "MIT",
  "author": "Phosphor Icons",
  "tier": "free",
  "tags": [
    "icons",
    "outline",
    "filled",
    "duotone"
  ],
  "homepage": "https://phosphoricons.com",
  "packages": {
    "any": "@phosphor-icons/web",
    "react": "@phosphor-icons/react",
    "vue": "@phosphor-icons/vue"
  }
}
`,N0=`{
  "package": "@phosphor-icons/core",
  "version": "2.1.1",
  "samples": [
    {
      "name": "home",
      "file": "assets/regular/house.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 256 256\\" fill=\\"currentColor\\"><path d=\\"M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z\\"/></svg>"
    },
    {
      "name": "search",
      "file": "assets/regular/magnifying-glass.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 256 256\\" fill=\\"currentColor\\"><path d=\\"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z\\"/></svg>"
    },
    {
      "name": "settings",
      "file": "assets/regular/gear.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 256 256\\" fill=\\"currentColor\\"><path d=\\"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z\\"/></svg>"
    },
    {
      "name": "user",
      "file": "assets/regular/user.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 256 256\\" fill=\\"currentColor\\"><path d=\\"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z\\"/></svg>"
    },
    {
      "name": "heart",
      "file": "assets/regular/heart.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 256 256\\" fill=\\"currentColor\\"><path d=\\"M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z\\"/></svg>"
    },
    {
      "name": "star",
      "file": "assets/regular/star.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 256 256\\" fill=\\"currentColor\\"><path d=\\"M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z\\"/></svg>"
    },
    {
      "name": "bell",
      "file": "assets/regular/bell.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 256 256\\" fill=\\"currentColor\\"><path d=\\"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z\\"/></svg>"
    },
    {
      "name": "trash",
      "file": "assets/regular/trash.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 256 256\\" fill=\\"currentColor\\"><path d=\\"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z\\"/></svg>"
    }
  ]
}
`,j0=`MIT License

Copyright (c) 2020-2026 Paweł Kuna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,O0=`{
  "id": "tabler",
  "kind": "icons",
  "title": {
    "en": "Tabler Icons",
    "fr": "Tabler Icons",
    "es": "Tabler Icons"
  },
  "license": "MIT",
  "author": "Paweł Kuna",
  "tier": "free",
  "tags": [
    "icons",
    "outline",
    "filled"
  ],
  "homepage": "https://tabler.io/icons",
  "packages": {
    "any": "@tabler/icons",
    "react": "@tabler/icons-react",
    "vue": "@tabler/icons-vue",
    "svelte": "@tabler/icons-svelte"
  }
}
`,A0=`{
  "package": "@tabler/icons",
  "version": "3.50.0",
  "samples": [
    {
      "name": "home",
      "file": "icons/outline/home.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"icon icon-tabler icons-tabler-outline icon-tabler-home\\" ><path stroke=\\"none\\" d=\\"M0 0h24v24H0z\\" fill=\\"none\\" /><path d=\\"M5 12l-2 0l9 -9l9 9l-2 0\\" /><path d=\\"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7\\" /><path d=\\"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6\\" /></svg>"
    },
    {
      "name": "search",
      "file": "icons/outline/search.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"icon icon-tabler icons-tabler-outline icon-tabler-search\\" ><path stroke=\\"none\\" d=\\"M0 0h24v24H0z\\" fill=\\"none\\" /><path d=\\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\\" /><path d=\\"M21 21l-6 -6\\" /></svg>"
    },
    {
      "name": "settings",
      "file": "icons/outline/settings.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"icon icon-tabler icons-tabler-outline icon-tabler-settings\\" ><path stroke=\\"none\\" d=\\"M0 0h24v24H0z\\" fill=\\"none\\" /><path d=\\"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065\\" /><path d=\\"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\\" /></svg>"
    },
    {
      "name": "user",
      "file": "icons/outline/user.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"icon icon-tabler icons-tabler-outline icon-tabler-user\\" ><path stroke=\\"none\\" d=\\"M0 0h24v24H0z\\" fill=\\"none\\" /><path d=\\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\\" /><path d=\\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\\" /></svg>"
    },
    {
      "name": "heart",
      "file": "icons/outline/heart.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"icon icon-tabler icons-tabler-outline icon-tabler-heart\\" ><path stroke=\\"none\\" d=\\"M0 0h24v24H0z\\" fill=\\"none\\" /><path d=\\"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572\\" /></svg>"
    },
    {
      "name": "star",
      "file": "icons/outline/star.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"icon icon-tabler icons-tabler-outline icon-tabler-star\\" ><path stroke=\\"none\\" d=\\"M0 0h24v24H0z\\" fill=\\"none\\" /><path d=\\"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245\\" /></svg>"
    },
    {
      "name": "bell",
      "file": "icons/outline/bell.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"icon icon-tabler icons-tabler-outline icon-tabler-bell\\" ><path stroke=\\"none\\" d=\\"M0 0h24v24H0z\\" fill=\\"none\\" /><path d=\\"M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6\\" /><path d=\\"M9 17v1a3 3 0 0 0 6 0v-1\\" /></svg>"
    },
    {
      "name": "trash",
      "file": "icons/outline/trash.svg",
      "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"icon icon-tabler icons-tabler-outline icon-tabler-trash\\" ><path stroke=\\"none\\" d=\\"M0 0h24v24H0z\\" fill=\\"none\\" /><path d=\\"M4 7l16 0\\" /><path d=\\"M10 11l0 6\\" /><path d=\\"M14 11l0 6\\" /><path d=\\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\\" /><path d=\\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\\" /></svg>"
    }
  ]
}
`,U0=`<label class="ss-field-text"><span class="ss-field-text__label">Email</span><input class="ss-field-text__input" type="email" placeholder="name@example.com"></label>
`,L0=`.ss-field-text { display: grid; gap: 6px; width: min(100%, 280px); font-family: var(--font-ui); }
.ss-field-text__label { font: 11px/1.2 var(--font-mono); letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); }
.ss-field-text__input {
  font: 14px/1.2 var(--font-ui);
  padding: 10px 12px;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  background: var(--bg-panel);
  color: var(--text-primary);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}
.ss-field-text__input::placeholder { color: var(--text-muted); }
.ss-field-text__input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-glow); }
`,R0=`{
  "id": "field-text",
  "kind": "input",
  "title": {
    "en": "Text field",
    "fr": "Champ texte",
    "es": "Campo de texto"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "form"
  ]
}
`,P0=`<div class="ss-segmented" role="radiogroup"><input class="ss-segmented__input" type="radio" name="ss-seg" id="ss-seg-d" checked><label class="ss-segmented__option" for="ss-seg-d">Day</label><input class="ss-segmented__input" type="radio" name="ss-seg" id="ss-seg-w"><label class="ss-segmented__option" for="ss-seg-w">Week</label><input class="ss-segmented__input" type="radio" name="ss-seg" id="ss-seg-m"><label class="ss-segmented__option" for="ss-seg-m">Month</label></div>
`,F0=`.ss-segmented { display: inline-flex; padding: 3px; gap: 3px; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); background: var(--bg-panel); font: 13px/1 var(--font-ui); }
.ss-segmented__input { position: absolute; opacity: 0; pointer-events: none; }
.ss-segmented__option {
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  cursor: pointer;
  transition: background var(--transition-fast), color var(--transition-fast);
}
.ss-segmented__option:hover { background: var(--bg-hover); }
.ss-segmented__input:checked + .ss-segmented__option { background: var(--accent-glow); color: var(--text-accent); box-shadow: inset 0 0 0 1px var(--accent-border); }
.ss-segmented__input:focus-visible + .ss-segmented__option { outline: 2px solid var(--accent-border); }
`,z0=`{
  "id": "segmented",
  "kind": "input",
  "title": {
    "en": "Segmented",
    "fr": "Segments",
    "es": "Segmentado"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "form",
    "choice"
  ]
}
`,D0=`<label class="ss-switch"><input class="ss-switch__input" type="checkbox" checked> Notifications</label>
`,H0=`.ss-switch { display: inline-flex; align-items: center; gap: var(--space-sm); font: 14px/1 var(--font-ui); color: var(--text-primary); cursor: pointer; }
.ss-switch__input {
  appearance: none;
  position: relative;
  width: 40px;
  height: 22px;
  margin: 0;
  border: 1px solid var(--border-subtle);
  border-radius: 999px;
  background: var(--bg-surface);
  cursor: pointer;
  transition: background var(--transition-normal), border-color var(--transition-normal);
}
.ss-switch__input::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--text-muted);
  transition: transform var(--transition-normal), background var(--transition-normal);
}
.ss-switch__input:checked { background: var(--accent-glow); border-color: var(--accent); }
.ss-switch__input:checked::after { transform: translateX(18px); background: var(--accent); }
.ss-switch__input:focus-visible { outline: 2px solid var(--accent-border); outline-offset: 2px; }
`,$0=`{
  "id": "switch",
  "kind": "input",
  "title": {
    "en": "Switch",
    "fr": "Interrupteur",
    "es": "Interruptor"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "form",
    "toggle"
  ]
}
`,B0=`<details class="ss-menu-dropdown" open><summary class="ss-menu-dropdown__toggle">Options</summary><ul class="ss-menu-dropdown__list"><li><a class="ss-menu-dropdown__item">Rename</a></li><li><a class="ss-menu-dropdown__item">Duplicate</a></li><li><a class="ss-menu-dropdown__item">Delete</a></li></ul></details>
`,W0=`.ss-menu-dropdown { position: relative; display: inline-block; margin-bottom: 130px; font-family: var(--font-ui); }
.ss-menu-dropdown__toggle {
  list-style: none; display: inline-flex; align-items: center; gap: 8px;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--border-subtle); border-radius: var(--radius-md);
  background: var(--bg-panel); color: var(--text-primary);
  font: 500 13px/1 var(--font-ui); cursor: pointer;
}
.ss-menu-dropdown__toggle::-webkit-details-marker { display: none; }
.ss-menu-dropdown__toggle::after { content: ""; width: 6px; height: 6px; border: solid var(--text-muted); border-width: 0 2px 2px 0; transform: rotate(45deg) translateY(-2px); }
.ss-menu-dropdown__list {
  position: absolute; top: calc(100% + 6px); left: 0; z-index: 1;
  min-width: 180px; margin: 0; padding: 6px; list-style: none;
  border: 1px solid var(--border-subtle); border-radius: var(--radius-md);
  background: var(--bg-surface); box-shadow: var(--shadow-card);
}
.ss-menu-dropdown__item {
  display: block; padding: 8px 10px; border-radius: var(--radius-sm);
  color: var(--text-secondary); font-size: 13px; text-decoration: none;
}
.ss-menu-dropdown__item:hover { background: var(--bg-hover); color: var(--text-primary); }
.ss-menu-dropdown__item:last-child { color: var(--status-overload); }
`,V0=`{
  "id": "menu-dropdown",
  "kind": "menu",
  "title": {
    "en": "Dropdown menu",
    "fr": "Menu déroulant",
    "es": "Menú desplegable"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "navigation",
    "native"
  ]
}
`,G0=`<nav class="ss-menu-sidebar"><p class="ss-menu-sidebar__title">Workspace</p><a class="ss-menu-sidebar__item" aria-current="page">Overview</a><a class="ss-menu-sidebar__item">Projects</a><a class="ss-menu-sidebar__item">Team</a><a class="ss-menu-sidebar__item">Settings</a></nav>
`,K0=`.ss-menu-sidebar {
  width: 200px; padding: var(--space-sm);
  border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);
  background: var(--bg-surface); font-family: var(--font-ui);
}
.ss-menu-sidebar__title { margin: 4px 10px 8px; font: 11px/1 var(--font-mono); letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); }
.ss-menu-sidebar__item {
  display: block; padding: 8px 10px; border-radius: var(--radius-sm);
  color: var(--text-secondary); font-size: 13px; text-decoration: none;
  transition: background var(--transition-fast);
}
.ss-menu-sidebar__item:hover { background: var(--bg-hover); color: var(--text-primary); }
.ss-menu-sidebar__item[aria-current] { background: var(--accent-glow); color: var(--text-accent); font-weight: 600; box-shadow: inset 3px 0 0 var(--accent); }
`,Q0=`{
  "id": "menu-sidebar",
  "kind": "menu",
  "title": {
    "en": "Sidebar nav",
    "fr": "Navigation latérale",
    "es": "Navegación lateral"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "navigation"
  ]
}
`,q0=`<div class="ss-fade-up" style="padding:16px 22px;border:1px solid var(--border-subtle);border-radius:var(--radius-md);background:var(--bg-card);color:var(--text-primary);font-family:var(--font-ui)">Hello there</div>
`,Y0=`.ss-fade-up { animation: ss-fade-up 520ms cubic-bezier(.2, .7, .2, 1) both; }
@keyframes ss-fade-up {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  .ss-fade-up { animation: none; }
}
`,Z0=`{
  "id": "fade-up",
  "kind": "motion",
  "title": {
    "en": "Fade up",
    "fr": "Apparition montante",
    "es": "Aparición ascendente"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "motion",
    "entrance"
  ]
}
`,X0=`<p class="ss-gradient-text">Make it wow</p>
`,J0=`.ss-gradient-text {
  margin: 0;
  font: 800 32px/1.1 var(--font-ui);
  background: linear-gradient(90deg, var(--accent), var(--status-warning), var(--accent-dim), var(--accent)) 0 0 / 300% 100%;
  -webkit-background-clip: text; background-clip: text;
  color: transparent;
  animation: ss-gradient-text 6s linear infinite;
}
@keyframes ss-gradient-text {
  to { background-position: 300% 0; }
}
@media (prefers-reduced-motion: reduce) {
  .ss-gradient-text { animation: none; }
}
`,eh=`{
  "id": "gradient-text",
  "kind": "motion",
  "title": {
    "en": "Gradient text",
    "fr": "Texte en dégradé",
    "es": "Texto degradado"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "wow",
    "title"
  ]
}
`,nh=`<span class="ss-icon-ring" aria-label="Notifications"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></span>
`,th=`.ss-icon-ring {
  display: inline-grid; place-items: center;
  width: 48px; height: 48px;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  background: var(--bg-panel);
  color: var(--text-accent);
}
.ss-icon-ring svg { width: 24px; height: 24px; transform-origin: 50% 10%; }
.ss-icon-ring:hover svg { animation: ss-icon-ring 900ms ease-in-out; }
@keyframes ss-icon-ring {
  10%, 30%, 50% { transform: rotate(14deg); }
  20%, 40%, 60% { transform: rotate(-14deg); }
  70%, 100% { transform: rotate(0); }
}
@media (prefers-reduced-motion: reduce) {
  .ss-icon-ring:hover svg { animation: none; }
}
`,rh=`{
  "id": "icon-ring",
  "kind": "motion",
  "title": {
    "en": "Ringing icon",
    "fr": "Icône qui sonne",
    "es": "Icono que suena"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "wow",
    "icon",
    "hover"
  ]
}
`,sh=`<div class="ss-marquee"><div class="ss-marquee__track"><span class="ss-marquee__item">ACME</span><span class="ss-marquee__item">Globex</span><span class="ss-marquee__item">Initech</span><span class="ss-marquee__item">Umbrella</span><span class="ss-marquee__item">ACME</span><span class="ss-marquee__item">Globex</span><span class="ss-marquee__item">Initech</span><span class="ss-marquee__item">Umbrella</span></div></div>
`,ah=`.ss-marquee {
  width: min(100%, 300px); overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, var(--bg-void) 15%, var(--bg-void) 85%, transparent);
  font: 600 13px/1 var(--font-mono);
  color: var(--text-secondary);
}
.ss-marquee__track { display: flex; gap: var(--space-lg); width: max-content; animation: ss-marquee 12s linear infinite; }
.ss-marquee__item { padding: 8px 12px; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); background: var(--bg-panel); }
@keyframes ss-marquee {
  to { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
  .ss-marquee__track { animation: none; }
}
`,oh=`{
  "id": "marquee",
  "kind": "motion",
  "title": {
    "en": "Marquee",
    "fr": "Défilement",
    "es": "Marquesina"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "wow",
    "loop",
    "logos"
  ]
}
`,ih=`<span class="ss-pulse-ring" role="status" aria-label="Live"></span>
`,lh=`.ss-pulse-ring { position: relative; width: 14px; height: 14px; border-radius: 50%; background: var(--status-active); }
.ss-pulse-ring::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid var(--status-active);
  animation: ss-pulse-ring 1.6s ease-out infinite;
}
@keyframes ss-pulse-ring {
  from { opacity: 0.9; transform: scale(1); }
  to { opacity: 0; transform: scale(2.8); }
}
@media (prefers-reduced-motion: reduce) {
  .ss-pulse-ring::after { animation: none; }
}
`,ch=`{
  "id": "pulse-ring",
  "kind": "motion",
  "title": {
    "en": "Pulse ring",
    "fr": "Anneau pulsant",
    "es": "Anillo pulsante"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "motion",
    "status",
    "live"
  ]
}
`,uh=`<div class="ss-scale-in" style="padding:16px 22px;border:1px solid var(--border-accent);border-radius:var(--radius-md);background:var(--bg-panel);color:var(--text-primary);font-family:var(--font-ui)">Saved</div>
`,dh=`.ss-scale-in { animation: ss-scale-in 360ms cubic-bezier(.2, .9, .3, 1.2) both; }
@keyframes ss-scale-in {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  .ss-scale-in { animation: none; }
}
`,ph=`{
  "id": "scale-in",
  "kind": "motion",
  "title": {
    "en": "Scale in",
    "fr": "Zoom d'entrée",
    "es": "Escala de entrada"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "motion",
    "entrance"
  ]
}
`,fh=`<div class="ss-shimmer"><div class="ss-shimmer__line"></div><div class="ss-shimmer__line"></div><div class="ss-shimmer__line"></div></div>
`,mh=`.ss-shimmer { display: grid; gap: 10px; width: min(100%, 240px); }
.ss-shimmer__line {
  height: 12px;
  border-radius: var(--radius-sm);
  background: linear-gradient(90deg, var(--bg-panel) 0%, var(--bg-hover) 40%, var(--bg-panel) 80%) 0 0 / 300% 100%;
  animation: ss-shimmer 1.4s linear infinite;
}
.ss-shimmer__line:nth-child(2) { width: 80%; }
.ss-shimmer__line:nth-child(3) { width: 55%; }
@keyframes ss-shimmer {
  from { background-position: 100% 0; }
  to { background-position: 0 0; }
}
@media (prefers-reduced-motion: reduce) {
  .ss-shimmer__line { animation: none; }
}
`,gh=`{
  "id": "shimmer",
  "kind": "motion",
  "title": {
    "en": "Loading shimmer",
    "fr": "Chargement scintillant",
    "es": "Carga brillante"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "motion",
    "loading",
    "skeleton"
  ]
}
`,hh=`<aside class="ss-slide-in">Upload finished</aside>
`,vh=`.ss-slide-in {
  width: min(100%, 220px);
  padding: var(--space-md);
  border: 1px solid var(--border-subtle);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  color: var(--text-primary);
  font: 14px/1.4 var(--font-ui);
  box-shadow: var(--shadow-card);
  animation: ss-slide-in 480ms cubic-bezier(.2, .8, .2, 1) both;
}
@keyframes ss-slide-in {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  .ss-slide-in { animation: none; }
}
`,yh=`{
  "id": "slide-in",
  "kind": "motion",
  "title": {
    "en": "Slide-in panel",
    "fr": "Panneau glissant",
    "es": "Panel deslizante"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "motion",
    "entrance",
    "panel"
  ]
}
`,bh=`<div class="ss-spinner" role="status" aria-label="Loading"></div>
`,xh=`.ss-spinner {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 3px solid var(--accent-glow);
  border-top-color: var(--accent);
  animation: ss-spinner 0.8s linear infinite;
}
@keyframes ss-spinner { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {
  .ss-spinner { animation: none; }
}
`,kh=`{
  "id": "spinner",
  "kind": "motion",
  "title": {
    "en": "Ring spinner",
    "fr": "Anneau de chargement",
    "es": "Anillo de carga"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "motion",
    "loading"
  ]
}
`,_h=`<ul class="ss-stagger-list"><li>Inbox</li><li>Drafts</li><li>Sent</li><li>Archive</li></ul>
`,wh=`.ss-stagger-list { display: grid; gap: 6px; margin: 0; padding: 0; list-style: none; width: min(100%, 220px); font: 14px/1.2 var(--font-ui); }
.ss-stagger-list li {
  padding: 9px 12px;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  color: var(--text-primary);
  animation: ss-stagger-list 420ms cubic-bezier(.2, .7, .2, 1) both;
}
.ss-stagger-list li:nth-child(2) { animation-delay: 80ms; }
.ss-stagger-list li:nth-child(3) { animation-delay: 160ms; }
.ss-stagger-list li:nth-child(4) { animation-delay: 240ms; }
@keyframes ss-stagger-list {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  .ss-stagger-list li { animation: none; }
}
`,Sh=`{
  "id": "stagger-list",
  "kind": "motion",
  "title": {
    "en": "Staggered list",
    "fr": "Liste en cascade",
    "es": "Lista escalonada"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "motion",
    "entrance",
    "list"
  ]
}
`,Ih=`<div class="ss-typing-dots" role="status" aria-label="Typing"><span></span><span></span><span></span></div>
`,Ch=`.ss-typing-dots { display: inline-flex; gap: 5px; padding: 10px 14px; border-radius: var(--radius-lg); background: var(--bg-card); border: 1px solid var(--border-subtle); }
.ss-typing-dots span { width: 7px; height: 7px; border-radius: 50%; background: var(--text-muted); animation: ss-typing-dots 1.1s ease-in-out infinite; }
.ss-typing-dots span:nth-child(2) { animation-delay: 0.15s; }
.ss-typing-dots span:nth-child(3) { animation-delay: 0.3s; }
@keyframes ss-typing-dots {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(-5px); opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .ss-typing-dots span { animation: none; }
}
`,Mh=`{
  "id": "typing-dots",
  "kind": "motion",
  "title": {
    "en": "Typing dots",
    "fr": "Points de saisie",
    "es": "Puntos de escritura"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "motion",
    "chat",
    "loading"
  ]
}
`,Eh=`<div class="ss-placeholder-card" aria-busy="true" aria-label="Loading"><div class="ss-placeholder-card__avatar"></div><div class="ss-placeholder-card__lines"><div class="ss-placeholder-card__line"></div><div class="ss-placeholder-card__line"></div></div><div class="ss-placeholder-card__block"></div></div>
`,Th=`.ss-placeholder-card {
  box-sizing: border-box;
  display: grid; grid-template-columns: 44px 1fr; gap: var(--space-md); align-items: center;
  width: min(100%, 300px); padding: var(--space-md);
  border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); background: var(--bg-surface);
}
.ss-placeholder-card__avatar, .ss-placeholder-card__line, .ss-placeholder-card__block {
  background: linear-gradient(90deg, var(--bg-panel) 0%, var(--bg-hover) 40%, var(--bg-panel) 80%) 0 0 / 300% 100%;
  animation: ss-placeholder-card 1.4s linear infinite;
}
.ss-placeholder-card__avatar { width: 44px; height: 44px; border-radius: 50%; }
.ss-placeholder-card__lines { display: grid; gap: 8px; }
.ss-placeholder-card__line { height: 10px; border-radius: var(--radius-sm); }
.ss-placeholder-card__line:last-child { width: 60%; }
.ss-placeholder-card__block { grid-column: 1 / -1; height: 72px; border-radius: var(--radius-md); }
@keyframes ss-placeholder-card {
  from { background-position: 100% 0; }
  to { background-position: 0 0; }
}
@media (prefers-reduced-motion: reduce) {
  .ss-placeholder-card__avatar, .ss-placeholder-card__line, .ss-placeholder-card__block { animation: none; }
}
`,Nh=`{
  "id": "placeholder-card",
  "kind": "placeholder",
  "title": {
    "en": "Card skeleton",
    "fr": "Squelette de carte",
    "es": "Esqueleto de tarjeta"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "loading"
  ]
}
`,jh=`<div class="ss-placeholder-pulse" aria-busy="true" aria-label="Loading"><div class="ss-placeholder-pulse__row"><span></span><span></span><span></span></div><div class="ss-placeholder-pulse__row"><span></span><span></span><span></span></div><div class="ss-placeholder-pulse__row"><span></span><span></span><span></span></div></div>
`,Oh=`.ss-placeholder-pulse { display: grid; gap: 10px; width: min(100%, 280px); }
.ss-placeholder-pulse__row { display: grid; grid-template-columns: 24px 1fr 48px; gap: 10px; align-items: center; }
.ss-placeholder-pulse__row > span {
  height: 12px; border-radius: var(--radius-sm); background: var(--bg-hover);
  animation: ss-placeholder-pulse 1.6s ease-in-out infinite;
}
.ss-placeholder-pulse__row > span:first-child { height: 24px; border-radius: var(--radius-sm); }
.ss-placeholder-pulse__row:nth-child(2) > span { animation-delay: 0.15s; }
.ss-placeholder-pulse__row:nth-child(3) > span { animation-delay: 0.3s; }
@keyframes ss-placeholder-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
@media (prefers-reduced-motion: reduce) {
  .ss-placeholder-pulse__row > span { animation: none; }
}
`,Ah=`{
  "id": "placeholder-pulse",
  "kind": "placeholder",
  "title": {
    "en": "Pulsing rows",
    "fr": "Lignes pulsées",
    "es": "Filas pulsantes"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "loading",
    "list"
  ]
}
`,Uh=`{
  "id": "brutal",
  "kind": "style",
  "title": {
    "en": "Brutalist",
    "fr": "Brutaliste",
    "es": "Brutalista"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "light",
    "bold"
  ],
  "manifest": {
    "id": "brutal",
    "name": "Brutalist",
    "version": "1.0.0",
    "author": "Mnemosyne OS",
    "description": "Thick black lines, hard shadows, electric blue.",
    "tokens": {
      "--accent": "#2b2bff",
      "--accent-dim": "#1a1ad0",
      "--accent-glow": "rgba(43, 43, 255, 0.14)",
      "--accent-border": "#000000",
      "--bg-void": "#fffdf2",
      "--bg-surface": "#fff6c9",
      "--bg-panel": "#ffffff",
      "--bg-card": "#ffffff",
      "--bg-hover": "#fff1a8",
      "--text-primary": "#000000",
      "--text-secondary": "#1a1a1a",
      "--text-muted": "#3d3d3d",
      "--text-accent": "#2b2bff",
      "--font-ui": "'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "0px",
      "--radius-md": "0px",
      "--radius-lg": "0px",
      "--border-subtle": "#000000",
      "--border-accent": "#000000",
      "--shadow-card": "4px 4px 0 #000000",
      "--shadow-accent": "6px 6px 0 #000000",
      "--transition-fast": "90ms linear",
      "--transition-normal": "160ms linear",
      "--status-active": "#007a3d",
      "--status-warning": "#8a5a00",
      "--status-overload": "#c40000"
    }
  }
}
`,Lh=`{
  "id": "daisy-abyss",
  "kind": "style",
  "title": {
    "en": "Abyss (daisyUI)",
    "fr": "Abyss (daisyUI)",
    "es": "Abyss (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "dark",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-abyss",
    "name": "Abyss (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"abyss\\" (dark), from saadeghi/daisyui packages/daisyui/src/themes/abyss.css at bf3bac3a397b, MIT.",
    "tokens": {
      "--accent": "#c2fd17",
      "--accent-dim": "#f8ffee",
      "--accent-glow": "rgba(194, 253, 23, 0.16)",
      "--accent-border": "rgba(194, 253, 23, 0.45)",
      "--bg-void": "#001a1e",
      "--bg-surface": "#000e11",
      "--bg-panel": "#000e11",
      "--bg-card": "#000e11",
      "--bg-hover": "rgba(194, 253, 23, 0.08)",
      "--text-primary": "#ffd6a7",
      "--text-secondary": "#c6ad8a",
      "--text-muted": "#887f69",
      "--text-accent": "#c2fd17",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "32px",
      "--radius-md": "4px",
      "--radius-lg": "8px",
      "--border-subtle": "#000406",
      "--border-accent": "rgba(194, 253, 23, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.7)",
      "--shadow-accent": "0 0 22px -6px rgba(194, 253, 23, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#01df72",
      "--status-warning": "#fec32d",
      "--status-overload": "#f04e4f"
    }
  }
}
`,Rh=`{
  "id": "daisy-acid",
  "kind": "style",
  "title": {
    "en": "Acid (daisyUI)",
    "fr": "Acid (daisyUI)",
    "es": "Acid (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-acid",
    "name": "Acid (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"acid\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/acid.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 72% to 56% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#c101b9",
      "--accent-dim": "#a0099a",
      "--accent-glow": "rgba(193, 1, 185, 0.16)",
      "--accent-border": "rgba(193, 1, 185, 0.45)",
      "--bg-void": "#f8f8f8",
      "--bg-surface": "#eeeeee",
      "--bg-panel": "#eeeeee",
      "--bg-card": "#eeeeee",
      "--bg-hover": "rgba(193, 1, 185, 0.08)",
      "--text-primary": "#000000",
      "--text-secondary": "#151515",
      "--text-muted": "#535353",
      "--text-accent": "#c101b9",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "16px",
      "--radius-lg": "16px",
      "--border-subtle": "#e1e1e1",
      "--border-accent": "rgba(193, 1, 185, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(193, 1, 185, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#0a7b4e",
      "--status-warning": "#7a6d06",
      "--status-overload": "#d8120a"
    }
  }
}
`,Ph=`{
  "id": "daisy-aqua",
  "kind": "style",
  "title": {
    "en": "Aqua (daisyUI)",
    "fr": "Aqua (daisyUI)",
    "es": "Aqua (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "dark",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-aqua",
    "name": "Aqua (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"aqua\\" (dark), from saadeghi/daisyui packages/daisyui/src/themes/aqua.css at bf3bac3a397b, MIT. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#13ecf3",
      "--accent-dim": "#93fbff",
      "--accent-glow": "rgba(19, 236, 243, 0.16)",
      "--accent-border": "rgba(19, 236, 243, 0.45)",
      "--bg-void": "#1a368b",
      "--bg-surface": "#162455",
      "--bg-panel": "#162455",
      "--bg-card": "#162455",
      "--bg-hover": "rgba(19, 236, 243, 0.08)",
      "--text-primary": "#b8e6fe",
      "--text-secondary": "#95c2e8",
      "--text-muted": "#80acda",
      "--text-accent": "#13ecf3",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#091444",
      "--border-accent": "rgba(19, 236, 243, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.7)",
      "--shadow-accent": "0 0 22px -6px rgba(19, 236, 243, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#41be64",
      "--status-warning": "#f38f33",
      "--status-overload": "#fe8679"
    }
  }
}
`,Fh=`{
  "id": "daisy-autumn",
  "kind": "style",
  "title": {
    "en": "Autumn (daisyUI)",
    "fr": "Autumn (daisyUI)",
    "es": "Autumn (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-autumn",
    "name": "Autumn (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"autumn\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/autumn.css at bf3bac3a397b, MIT. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#8c0327",
      "--accent-dim": "#6c011c",
      "--accent-glow": "rgba(140, 3, 39, 0.16)",
      "--accent-border": "rgba(140, 3, 39, 0.45)",
      "--bg-void": "#f1f1f1",
      "--bg-surface": "#dbdbdb",
      "--bg-panel": "#dbdbdb",
      "--bg-card": "#dbdbdb",
      "--bg-hover": "rgba(140, 3, 39, 0.08)",
      "--text-primary": "#141414",
      "--text-secondary": "#393939",
      "--text-muted": "#606060",
      "--text-accent": "#8c0327",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#c5c5c5",
      "--border-accent": "rgba(140, 3, 39, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(140, 3, 39, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#1d6c5b",
      "--status-warning": "#934d06",
      "--status-overload": "#c20523"
    }
  }
}
`,zh=`{
  "id": "daisy-black",
  "kind": "style",
  "title": {
    "en": "Black (daisyUI)",
    "fr": "Black (daisyUI)",
    "es": "Black (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "dark",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-black",
    "name": "Black (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"black\\" (dark), from saadeghi/daisyui packages/daisyui/src/themes/black.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 35% to 59% (oklch) so text on it reads at 4.5:1. Changed: success lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#7e7e7e",
      "--accent-dim": "#939393",
      "--accent-glow": "rgba(126, 126, 126, 0.16)",
      "--accent-border": "rgba(126, 126, 126, 0.45)",
      "--bg-void": "#000000",
      "--bg-surface": "#141414",
      "--bg-panel": "#141414",
      "--bg-card": "#141414",
      "--bg-hover": "rgba(126, 126, 126, 0.08)",
      "--text-primary": "#d6d6d6",
      "--text-secondary": "#9e9e9e",
      "--text-muted": "#7f7f7f",
      "--text-accent": "#7e7e7e",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "0px",
      "--radius-md": "0px",
      "--radius-lg": "0px",
      "--border-subtle": "#1b1b1b",
      "--border-accent": "rgba(126, 126, 126, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(126, 126, 126, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#249120",
      "--status-warning": "#ffff00",
      "--status-overload": "#ff0301"
    }
  }
}
`,Dh=`{
  "id": "daisy-bumblebee",
  "kind": "style",
  "title": {
    "en": "Bumblebee (daisyUI)",
    "fr": "Bumblebee (daisyUI)",
    "es": "Bumblebee (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-bumblebee",
    "name": "Bumblebee (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"bumblebee\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/bumblebee.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 85% to 55% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#886d00",
      "--accent-dim": "#705a04",
      "--accent-glow": "rgba(136, 109, 0, 0.16)",
      "--accent-border": "rgba(136, 109, 0, 0.45)",
      "--bg-void": "#ffffff",
      "--bg-surface": "#f5f5f5",
      "--bg-panel": "#f5f5f5",
      "--bg-card": "#f5f5f5",
      "--bg-hover": "rgba(136, 109, 0, 0.08)",
      "--text-primary": "#161616",
      "--text-secondary": "#3d3d3d",
      "--text-muted": "#707070",
      "--text-accent": "#886d00",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#e4e4e4",
      "--border-accent": "rgba(136, 109, 0, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(136, 109, 0, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#087f59",
      "--status-warning": "#8d6a09",
      "--status-overload": "#d03440"
    }
  }
}
`,Hh=`{
  "id": "daisy-business",
  "kind": "style",
  "title": {
    "en": "Business (daisyUI)",
    "fr": "Business (daisyUI)",
    "es": "Business (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "dark",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-business",
    "name": "Business (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"business\\" (dark), from saadeghi/daisyui packages/daisyui/src/themes/business.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 42% to 62% (oklch) so text on it reads at 4.5:1. Changed: error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#588ac1",
      "--accent-dim": "#6da0d8",
      "--accent-glow": "rgba(88, 138, 193, 0.16)",
      "--accent-border": "rgba(88, 138, 193, 0.45)",
      "--bg-void": "#202020",
      "--bg-surface": "#1c1c1c",
      "--bg-panel": "#1c1c1c",
      "--bg-card": "#1c1c1c",
      "--bg-hover": "rgba(88, 138, 193, 0.08)",
      "--text-primary": "#cdcdcd",
      "--text-secondary": "#a7a7a7",
      "--text-muted": "#878787",
      "--text-accent": "#588ac1",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "0px",
      "--radius-md": "4px",
      "--radius-lg": "4px",
      "--border-subtle": "#181818",
      "--border-accent": "rgba(88, 138, 193, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(88, 138, 193, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#6bb187",
      "--status-warning": "#dbae5a",
      "--status-overload": "#d76555"
    }
  }
}
`,$h=`{
  "id": "daisy-caramellatte",
  "kind": "style",
  "title": {
    "en": "Caramellatte (daisyUI)",
    "fr": "Caramellatte (daisyUI)",
    "es": "Caramellatte (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-caramellatte",
    "name": "Caramellatte (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"caramellatte\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/caramellatte.css at bf3bac3a397b, MIT. Changed: warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#000000",
      "--accent-dim": "#000000",
      "--accent-glow": "rgba(0, 0, 0, 0.16)",
      "--accent-border": "rgba(0, 0, 0, 0.45)",
      "--bg-void": "#fff7ee",
      "--bg-surface": "#feecd3",
      "--bg-panel": "#feecd3",
      "--bg-card": "#feecd3",
      "--bg-hover": "rgba(0, 0, 0, 0.08)",
      "--text-primary": "#7c2808",
      "--text-secondary": "#98523a",
      "--text-muted": "#9e5a42",
      "--text-accent": "#000000",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "32px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#ffd6a7",
      "--border-accent": "rgba(0, 0, 0, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(0, 0, 0, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#045f45",
      "--status-warning": "#8a6702",
      "--status-overload": "#cb2f3c"
    }
  }
}
`,Bh=`{
  "id": "daisy-cmyk",
  "kind": "style",
  "title": {
    "en": "Cmyk (daisyUI)",
    "fr": "Cmyk (daisyUI)",
    "es": "Cmyk (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-cmyk",
    "name": "Cmyk (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"cmyk\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/cmyk.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 72% to 52% (oklch) so text on it reads at 4.5:1. Changed: warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#0271a6",
      "--accent-dim": "#045c88",
      "--accent-glow": "rgba(2, 113, 166, 0.16)",
      "--accent-border": "rgba(2, 113, 166, 0.45)",
      "--bg-void": "#ffffff",
      "--bg-surface": "#eeeeee",
      "--bg-panel": "#eeeeee",
      "--bg-card": "#eeeeee",
      "--bg-hover": "rgba(2, 113, 166, 0.08)",
      "--text-primary": "#161616",
      "--text-secondary": "#3d3d3d",
      "--text-muted": "#6b6b6b",
      "--text-accent": "#0271a6",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#dedede",
      "--border-accent": "rgba(2, 113, 166, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(2, 113, 166, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#823290",
      "--status-warning": "#ab5307",
      "--status-overload": "#d1231c"
    }
  }
}
`,Wh=`{
  "id": "daisy-coffee",
  "kind": "style",
  "title": {
    "en": "Coffee (daisyUI)",
    "fr": "Coffee (daisyUI)",
    "es": "Coffee (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "dark",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-coffee",
    "name": "Coffee (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"coffee\\" (dark), from saadeghi/daisyui packages/daisyui/src/themes/coffee.css at bf3bac3a397b, MIT.",
    "tokens": {
      "--accent": "#db924c",
      "--accent-dim": "#f3a862",
      "--accent-glow": "rgba(219, 146, 76, 0.16)",
      "--accent-border": "rgba(219, 146, 76, 0.45)",
      "--bg-void": "#261b25",
      "--bg-surface": "#1e151d",
      "--bg-panel": "#1e151d",
      "--bg-card": "#1e151d",
      "--bg-hover": "rgba(219, 146, 76, 0.08)",
      "--text-primary": "#c59f61",
      "--text-secondary": "#a28256",
      "--text-muted": "#a08155",
      "--text-accent": "#db924c",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#120a11",
      "--border-accent": "rgba(219, 146, 76, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(219, 146, 76, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#9db787",
      "--status-warning": "#ffd260",
      "--status-overload": "#fc9581"
    }
  }
}
`,Vh=`{
  "id": "daisy-corporate",
  "kind": "style",
  "title": {
    "en": "Corporate (daisyUI)",
    "fr": "Corporate (daisyUI)",
    "es": "Corporate (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-corporate",
    "name": "Corporate (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"corporate\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/corporate.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 58% to 52% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#066ea6",
      "--accent-dim": "#055988",
      "--accent-glow": "rgba(6, 110, 166, 0.16)",
      "--accent-border": "rgba(6, 110, 166, 0.45)",
      "--bg-void": "#ffffff",
      "--bg-surface": "#e8e8e8",
      "--bg-panel": "#e8e8e8",
      "--bg-card": "#e8e8e8",
      "--bg-hover": "rgba(6, 110, 166, 0.08)",
      "--text-primary": "#181a2a",
      "--text-secondary": "#3f4150",
      "--text-muted": "#666874",
      "--text-accent": "#066ea6",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "4px",
      "--radius-md": "4px",
      "--radius-lg": "4px",
      "--border-subtle": "#d1d1d1",
      "--border-accent": "rgba(6, 110, 166, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(6, 110, 166, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#097934",
      "--status-warning": "#7f6605",
      "--status-overload": "#c52838"
    }
  }
}
`,Gh=`{
  "id": "daisy-cupcake",
  "kind": "style",
  "title": {
    "en": "Cupcake (daisyUI)",
    "fr": "Cupcake (daisyUI)",
    "es": "Cupcake (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-cupcake",
    "name": "Cupcake (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"cupcake\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/cupcake.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 85% to 51% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#087769",
      "--accent-dim": "#066155",
      "--accent-glow": "rgba(8, 119, 105, 0.16)",
      "--accent-border": "rgba(8, 119, 105, 0.45)",
      "--bg-void": "#faf7f5",
      "--bg-surface": "#efeae6",
      "--bg-panel": "#efeae6",
      "--bg-card": "#efeae6",
      "--bg-hover": "rgba(8, 119, 105, 0.08)",
      "--text-primary": "#291334",
      "--text-secondary": "#4e3b57",
      "--text-muted": "#73647a",
      "--text-accent": "#087769",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "32px",
      "--radius-lg": "16px",
      "--border-subtle": "#e7e2df",
      "--border-accent": "rgba(8, 119, 105, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(8, 119, 105, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#087852",
      "--status-warning": "#856504",
      "--status-overload": "#d20642"
    }
  }
}
`,Kh=`{
  "id": "daisy-cyberpunk",
  "kind": "style",
  "title": {
    "en": "Cyberpunk (daisyUI)",
    "fr": "Cyberpunk (daisyUI)",
    "es": "Cyberpunk (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-cyberpunk",
    "name": "Cyberpunk (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"cyberpunk\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/cyberpunk.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 74% to 53% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#b5375d",
      "--accent-dim": "#9d1e4a",
      "--accent-glow": "rgba(181, 55, 93, 0.16)",
      "--accent-border": "rgba(181, 55, 93, 0.45)",
      "--bg-void": "#fff260",
      "--bg-surface": "#f7e83a",
      "--bg-panel": "#f7e83a",
      "--bg-card": "#f7e83a",
      "--bg-hover": "rgba(181, 55, 93, 0.08)",
      "--text-primary": "#000000",
      "--text-secondary": "#161403",
      "--text-muted": "#55501b",
      "--text-accent": "#b5375d",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "0px",
      "--radius-md": "0px",
      "--radius-lg": "0px",
      "--border-subtle": "#e3d40e",
      "--border-accent": "rgba(181, 55, 93, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(181, 55, 93, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#03744b",
      "--status-warning": "#836000",
      "--status-overload": "#bc333b"
    }
  }
}
`,Qh=`{
  "id": "daisy-dark",
  "kind": "style",
  "title": {
    "en": "Dark (daisyUI)",
    "fr": "Dark (daisyUI)",
    "es": "Dark (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "dark",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-dark",
    "name": "Dark (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"dark\\" (dark), from saadeghi/daisyui packages/daisyui/src/themes/dark.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 58% to 64% (oklch) so text on it reads at 4.5:1.",
    "tokens": {
      "--accent": "#747cfd",
      "--accent-dim": "#8d98fe",
      "--accent-glow": "rgba(116, 124, 253, 0.16)",
      "--accent-border": "rgba(116, 124, 253, 0.45)",
      "--bg-void": "#1d232a",
      "--bg-surface": "#191e24",
      "--bg-panel": "#191e24",
      "--bg-card": "#191e24",
      "--bg-hover": "rgba(116, 124, 253, 0.08)",
      "--text-primary": "#f3f8ff",
      "--text-secondary": "#c3c9d0",
      "--text-muted": "#8a9098",
      "--text-accent": "#747cfd",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "8px",
      "--radius-md": "4px",
      "--radius-lg": "8px",
      "--border-subtle": "#15191e",
      "--border-accent": "rgba(116, 124, 253, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.7)",
      "--shadow-accent": "0 0 22px -6px rgba(116, 124, 253, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#11d093",
      "--status-warning": "#f6b907",
      "--status-overload": "#fe6880"
    }
  }
}
`,qh=`{
  "id": "daisy-dim",
  "kind": "style",
  "title": {
    "en": "Dim (daisyUI)",
    "fr": "Dim (daisyUI)",
    "es": "Dim (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "dark",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-dim",
    "name": "Dim (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"dim\\" (dark), from saadeghi/daisyui packages/daisyui/src/themes/dim.css at bf3bac3a397b, MIT.",
    "tokens": {
      "--accent": "#9fe88d",
      "--accent-dim": "#b7ffa6",
      "--accent-glow": "rgba(159, 232, 141, 0.16)",
      "--accent-border": "rgba(159, 232, 141, 0.45)",
      "--bg-void": "#2a303c",
      "--bg-surface": "#242933",
      "--bg-panel": "#242933",
      "--bg-card": "#242933",
      "--bg-hover": "rgba(159, 232, 141, 0.08)",
      "--text-primary": "#b2ccd6",
      "--text-secondary": "#94aab5",
      "--text-muted": "#879ba6",
      "--text-accent": "#9fe88d",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#20252e",
      "--border-accent": "rgba(159, 232, 141, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(159, 232, 141, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#62efbd",
      "--status-warning": "#efd057",
      "--status-overload": "#ffae9b"
    }
  }
}
`,Yh=`{
  "id": "daisy-dracula",
  "kind": "style",
  "title": {
    "en": "Dracula (daisyUI)",
    "fr": "Dracula (daisyUI)",
    "es": "Dracula (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "dark",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-dracula",
    "name": "Dracula (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"dracula\\" (dark), from saadeghi/daisyui packages/daisyui/src/themes/dracula.css at bf3bac3a397b, MIT.",
    "tokens": {
      "--accent": "#ff79c6",
      "--accent-dim": "#fea5d5",
      "--accent-glow": "rgba(255, 121, 198, 0.16)",
      "--accent-border": "rgba(255, 121, 198, 0.45)",
      "--bg-void": "#282a36",
      "--bg-surface": "#232530",
      "--bg-panel": "#232530",
      "--bg-card": "#232530",
      "--bg-hover": "rgba(255, 121, 198, 0.08)",
      "--text-primary": "#f8f8f3",
      "--text-secondary": "#cacaca",
      "--text-muted": "#939498",
      "--text-accent": "#ff79c6",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#1f202a",
      "--border-accent": "rgba(255, 121, 198, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(255, 121, 198, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#51fa7b",
      "--status-warning": "#f1fa8c",
      "--status-overload": "#ff5555"
    }
  }
}
`,Zh=`{
  "id": "daisy-emerald",
  "kind": "style",
  "title": {
    "en": "Emerald (daisyUI)",
    "fr": "Emerald (daisyUI)",
    "es": "Emerald (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-emerald",
    "name": "Emerald (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"emerald\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/emerald.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 77% to 50% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#02783f",
      "--accent-dim": "#026132",
      "--accent-glow": "rgba(2, 120, 63, 0.16)",
      "--accent-border": "rgba(2, 120, 63, 0.45)",
      "--bg-void": "#ffffff",
      "--bg-surface": "#e8e8e8",
      "--bg-panel": "#e8e8e8",
      "--bg-card": "#e8e8e8",
      "--bg-hover": "rgba(2, 120, 63, 0.08)",
      "--text-primary": "#333c4d",
      "--text-secondary": "#575f6e",
      "--text-muted": "#616876",
      "--text-accent": "#02783f",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#d1d1d1",
      "--border-accent": "rgba(2, 120, 63, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(2, 120, 63, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#0b774e",
      "--status-warning": "#866307",
      "--status-overload": "#be343d"
    }
  }
}
`,Xh=`{
  "id": "daisy-fantasy",
  "kind": "style",
  "title": {
    "en": "Fantasy (daisyUI)",
    "fr": "Fantasy (daisyUI)",
    "es": "Fantasy (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-fantasy",
    "name": "Fantasy (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"fantasy\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/fantasy.css at bf3bac3a397b, MIT. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#6a0371",
      "--accent-dim": "#4e0254",
      "--accent-glow": "rgba(106, 3, 113, 0.16)",
      "--accent-border": "rgba(106, 3, 113, 0.45)",
      "--bg-void": "#ffffff",
      "--bg-surface": "#e8e8e8",
      "--bg-panel": "#e8e8e8",
      "--bg-card": "#e8e8e8",
      "--bg-hover": "rgba(106, 3, 113, 0.08)",
      "--text-primary": "#1f2937",
      "--text-secondary": "#464e5b",
      "--text-muted": "#616973",
      "--text-accent": "#6a0371",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#d1d1d1",
      "--border-accent": "rgba(106, 3, 113, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(106, 3, 113, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#0b774e",
      "--status-warning": "#866307",
      "--status-overload": "#be343d"
    }
  }
}
`,Jh=`{
  "id": "daisy-forest",
  "kind": "style",
  "title": {
    "en": "Forest (daisyUI)",
    "fr": "Forest (daisyUI)",
    "es": "Forest (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "dark",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-forest",
    "name": "Forest (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"forest\\" (dark), from saadeghi/daisyui packages/daisyui/src/themes/forest.css at bf3bac3a397b, MIT.",
    "tokens": {
      "--accent": "#1fb854",
      "--accent-dim": "#42cf6a",
      "--accent-glow": "rgba(31, 184, 84, 0.16)",
      "--accent-border": "rgba(31, 184, 84, 0.45)",
      "--bg-void": "#1b1717",
      "--bg-surface": "#161212",
      "--bg-panel": "#161212",
      "--bg-card": "#161212",
      "--bg-hover": "rgba(31, 184, 84, 0.08)",
      "--text-primary": "#cac9c9",
      "--text-secondary": "#a3a1a1",
      "--text-muted": "#838181",
      "--text-accent": "#1fb854",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "32px",
      "--radius-lg": "16px",
      "--border-subtle": "#110d0d",
      "--border-accent": "rgba(31, 184, 84, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(31, 184, 84, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#06a96f",
      "--status-warning": "#fec233",
      "--status-overload": "#fe7071"
    }
  }
}
`,e1=`{
  "id": "daisy-garden",
  "kind": "style",
  "title": {
    "en": "Garden (daisyUI)",
    "fr": "Garden (daisyUI)",
    "es": "Garden (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-garden",
    "name": "Garden (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"garden\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/garden.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 62% to 49% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#b30055",
      "--accent-dim": "#910044",
      "--accent-glow": "rgba(179, 0, 85, 0.16)",
      "--accent-border": "rgba(179, 0, 85, 0.45)",
      "--bg-void": "#e9e7e7",
      "--bg-surface": "#d4d2d2",
      "--bg-panel": "#d4d2d2",
      "--bg-card": "#d4d2d2",
      "--bg-hover": "rgba(179, 0, 85, 0.08)",
      "--text-primary": "#100f0f",
      "--text-secondary": "#343333",
      "--text-muted": "#5b5959",
      "--text-accent": "#b30055",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#bebdbd",
      "--border-accent": "rgba(179, 0, 85, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(179, 0, 85, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#086843",
      "--status-warning": "#755503",
      "--status-overload": "#ae2330"
    }
  }
}
`,n1=`{
  "id": "daisy-halloween",
  "kind": "style",
  "title": {
    "en": "Halloween (daisyUI)",
    "fr": "Halloween (daisyUI)",
    "es": "Halloween (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "dark",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-halloween",
    "name": "Halloween (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"halloween\\" (dark), from saadeghi/daisyui packages/daisyui/src/themes/halloween.css at bf3bac3a397b, MIT.",
    "tokens": {
      "--accent": "#fe9a37",
      "--accent-dim": "#febc85",
      "--accent-glow": "rgba(254, 154, 55, 0.16)",
      "--accent-border": "rgba(254, 154, 55, 0.45)",
      "--bg-void": "#1b1816",
      "--bg-surface": "#0b0908",
      "--bg-panel": "#0b0908",
      "--bg-card": "#0b0908",
      "--bg-hover": "rgba(254, 154, 55, 0.08)",
      "--text-primary": "#cdcdcd",
      "--text-secondary": "#a5a5a4",
      "--text-muted": "#838281",
      "--text-accent": "#fe9a37",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#000000",
      "--border-accent": "rgba(254, 154, 55, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.7)",
      "--shadow-accent": "0 0 22px -6px rgba(254, 154, 55, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#18a34a",
      "--status-warning": "#d97708",
      "--status-overload": "#f35248"
    }
  }
}
`,t1=`{
  "id": "daisy-lemonade",
  "kind": "style",
  "title": {
    "en": "Lemonade (daisyUI)",
    "fr": "Lemonade (daisyUI)",
    "es": "Lemonade (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-lemonade",
    "name": "Lemonade (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"lemonade\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/lemonade.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 59% to 50% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#3c7305",
      "--accent-dim": "#2f5d03",
      "--accent-glow": "rgba(60, 115, 5, 0.16)",
      "--accent-border": "rgba(60, 115, 5, 0.45)",
      "--bg-void": "#f8fdef",
      "--bg-surface": "#e1e6d9",
      "--bg-panel": "#e1e6d9",
      "--bg-card": "#e1e6d9",
      "--bg-hover": "rgba(60, 115, 5, 0.08)",
      "--text-primary": "#151614",
      "--text-secondary": "#3b3d39",
      "--text-muted": "#636660",
      "--text-accent": "#3c7305",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#cbcfc3",
      "--border-accent": "rgba(60, 115, 5, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(60, 115, 5, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#4e6d5b",
      "--status-warning": "#6a6647",
      "--status-overload": "#815d5a"
    }
  }
}
`,r1=`{
  "id": "daisy-light",
  "kind": "style",
  "title": {
    "en": "Light (daisyUI)",
    "fr": "Light (daisyUI)",
    "es": "Light (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-light",
    "name": "Light (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"light\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/light.css at bf3bac3a397b, MIT. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#422ad5",
      "--accent-dim": "#3404b9",
      "--accent-glow": "rgba(66, 42, 213, 0.16)",
      "--accent-border": "rgba(66, 42, 213, 0.45)",
      "--bg-void": "#ffffff",
      "--bg-surface": "#f8f8f8",
      "--bg-panel": "#f8f8f8",
      "--bg-card": "#f8f8f8",
      "--bg-hover": "rgba(66, 42, 213, 0.08)",
      "--text-primary": "#18181b",
      "--text-secondary": "#3f3f42",
      "--text-muted": "#717173",
      "--text-accent": "#422ad5",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "8px",
      "--radius-md": "4px",
      "--radius-lg": "8px",
      "--border-subtle": "#eeeeee",
      "--border-accent": "rgba(66, 42, 213, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(66, 42, 213, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#0d815a",
      "--status-warning": "#916c04",
      "--status-overload": "#cc3957"
    }
  }
}
`,s1=`{
  "id": "daisy-lofi",
  "kind": "style",
  "title": {
    "en": "Lofi (daisyUI)",
    "fr": "Lofi (daisyUI)",
    "es": "Lofi (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-lofi",
    "name": "Lofi (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"lofi\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/lofi.css at bf3bac3a397b, MIT. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#0d0d0d",
      "--accent-dim": "#020202",
      "--accent-glow": "rgba(13, 13, 13, 0.16)",
      "--accent-border": "rgba(13, 13, 13, 0.45)",
      "--bg-void": "#ffffff",
      "--bg-surface": "#f5f5f5",
      "--bg-panel": "#f5f5f5",
      "--bg-card": "#f5f5f5",
      "--bg-hover": "rgba(13, 13, 13, 0.08)",
      "--text-primary": "#000000",
      "--text-secondary": "#161616",
      "--text-muted": "#555555",
      "--text-accent": "#0d0d0d",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "32px",
      "--radius-md": "4px",
      "--radius-lg": "8px",
      "--border-subtle": "#ebebeb",
      "--border-accent": "rgba(13, 13, 13, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(13, 13, 13, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#01805a",
      "--status-warning": "#92690f",
      "--status-overload": "#b05549"
    }
  }
}
`,a1=`{
  "id": "daisy-luxury",
  "kind": "style",
  "title": {
    "en": "Luxury (daisyUI)",
    "fr": "Luxury (daisyUI)",
    "es": "Luxury (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "dark",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-luxury",
    "name": "Luxury (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"luxury\\" (dark), from saadeghi/daisyui packages/daisyui/src/themes/luxury.css at bf3bac3a397b, MIT.",
    "tokens": {
      "--accent": "#ffffff",
      "--accent-dim": "#ffffff",
      "--accent-glow": "rgba(255, 255, 255, 0.16)",
      "--accent-border": "rgba(255, 255, 255, 0.45)",
      "--bg-void": "#09090b",
      "--bg-surface": "#171618",
      "--bg-panel": "#171618",
      "--bg-card": "#171618",
      "--bg-hover": "rgba(255, 255, 255, 0.08)",
      "--text-primary": "#dca54d",
      "--text-secondary": "#ac8241",
      "--text-muted": "#a0793d",
      "--text-accent": "#ffffff",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#1e1d1f",
      "--border-accent": "rgba(255, 255, 255, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.7)",
      "--shadow-accent": "0 0 22px -6px rgba(255, 255, 255, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#87d03a",
      "--status-warning": "#e2d563",
      "--status-overload": "#ff6f6f"
    }
  }
}
`,o1=`{
  "id": "daisy-night",
  "kind": "style",
  "title": {
    "en": "Night (daisyUI)",
    "fr": "Night (daisyUI)",
    "es": "Night (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "dark",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-night",
    "name": "Night (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"night\\" (dark), from saadeghi/daisyui packages/daisyui/src/themes/night.css at bf3bac3a397b, MIT.",
    "tokens": {
      "--accent": "#3abdf7",
      "--accent-dim": "#7bd1fe",
      "--accent-glow": "rgba(58, 189, 247, 0.16)",
      "--accent-border": "rgba(58, 189, 247, 0.45)",
      "--bg-void": "#0f172a",
      "--bg-surface": "#0c1425",
      "--bg-panel": "#0c1425",
      "--bg-card": "#0c1425",
      "--bg-hover": "rgba(58, 189, 247, 0.08)",
      "--text-primary": "#c9cbd0",
      "--text-secondary": "#9fa3ac",
      "--text-muted": "#7b808d",
      "--text-accent": "#3abdf7",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#0a1120",
      "--border-accent": "rgba(58, 189, 247, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(58, 189, 247, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#2fd4bf",
      "--status-warning": "#f4bf51",
      "--status-overload": "#fb7085"
    }
  }
}
`,i1=`{
  "id": "daisy-nord",
  "kind": "style",
  "title": {
    "en": "Nord (daisyUI)",
    "fr": "Nord (daisyUI)",
    "es": "Nord (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-nord",
    "name": "Nord (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"nord\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/nord.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 59% to 52% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#496b95",
      "--accent-dim": "#365780",
      "--accent-glow": "rgba(73, 107, 149, 0.16)",
      "--accent-border": "rgba(73, 107, 149, 0.45)",
      "--bg-void": "#eceff4",
      "--bg-surface": "#e5e9f0",
      "--bg-panel": "#e5e9f0",
      "--bg-card": "#e5e9f0",
      "--bg-hover": "rgba(73, 107, 149, 0.08)",
      "--text-primary": "#2e3440",
      "--text-secondary": "#505561",
      "--text-muted": "#636973",
      "--text-accent": "#496b95",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "4px",
      "--radius-lg": "8px",
      "--border-subtle": "#d8dee9",
      "--border-accent": "rgba(73, 107, 149, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(73, 107, 149, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#587043",
      "--status-warning": "#816423",
      "--status-overload": "#a64b55"
    }
  }
}
`,l1=`{
  "id": "daisy-pastel",
  "kind": "style",
  "title": {
    "en": "Pastel (daisyUI)",
    "fr": "Pastel (daisyUI)",
    "es": "Pastel (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-pastel",
    "name": "Pastel (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"pastel\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/pastel.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 90% to 56% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#7d6b91",
      "--accent-dim": "#69577c",
      "--accent-glow": "rgba(125, 107, 145, 0.16)",
      "--accent-border": "rgba(125, 107, 145, 0.45)",
      "--bg-void": "#ffffff",
      "--bg-surface": "#f9fafb",
      "--bg-panel": "#f9fafb",
      "--bg-card": "#f9fafb",
      "--bg-hover": "rgba(125, 107, 145, 0.08)",
      "--text-primary": "#161616",
      "--text-secondary": "#3d3d3d",
      "--text-muted": "#727272",
      "--text-accent": "#7d6b91",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "32px",
      "--radius-lg": "16px",
      "--border-subtle": "#e5e6e7",
      "--border-accent": "rgba(125, 107, 145, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(125, 107, 145, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#06844a",
      "--status-warning": "#a46301",
      "--status-overload": "#b1595c"
    }
  }
}
`,c1=`{
  "id": "daisy-retro",
  "kind": "style",
  "title": {
    "en": "Retro (daisyUI)",
    "fr": "Retro (daisyUI)",
    "es": "Retro (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-retro",
    "name": "Retro (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"retro\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/retro.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 80% to 49% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#984347",
      "--accent-dim": "#812f34",
      "--accent-glow": "rgba(152, 67, 71, 0.16)",
      "--accent-border": "rgba(152, 67, 71, 0.45)",
      "--bg-void": "#ece3ca",
      "--bg-surface": "#e4d8b4",
      "--bg-panel": "#e4d8b4",
      "--bg-card": "#e4d8b4",
      "--bg-hover": "rgba(152, 67, 71, 0.08)",
      "--text-primary": "#793205",
      "--text-secondary": "#8d4e2b",
      "--text-muted": "#8d4e2b",
      "--text-accent": "#984347",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "4px",
      "--radius-md": "4px",
      "--radius-lg": "8px",
      "--border-subtle": "#dbca9b",
      "--border-accent": "rgba(152, 67, 71, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(152, 67, 71, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#096962",
      "--status-warning": "#a43b05",
      "--status-overload": "#b9172d"
    }
  }
}
`,u1=`{
  "id": "daisy-silk",
  "kind": "style",
  "title": {
    "en": "Silk (daisyUI)",
    "fr": "Silk (daisyUI)",
    "es": "Silk (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-silk",
    "name": "Silk (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"silk\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/silk.css at bf3bac3a397b, MIT. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#1c1c29",
      "--accent-dim": "#0d0c18",
      "--accent-glow": "rgba(28, 28, 41, 0.16)",
      "--accent-border": "rgba(28, 28, 41, 0.45)",
      "--bg-void": "#f7f5f3",
      "--bg-surface": "#f3ede9",
      "--bg-panel": "#f3ede9",
      "--bg-card": "#f3ede9",
      "--bg-hover": "rgba(28, 28, 41, 0.08)",
      "--text-primary": "#4b4743",
      "--text-secondary": "#6a6763",
      "--text-muted": "#6f6c68",
      "--text-accent": "#1c1c29",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "32px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#e2ddd9",
      "--border-accent": "rgba(28, 28, 41, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(28, 28, 41, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#517640",
      "--status-warning": "#8d6506",
      "--status-overload": "#b74749"
    }
  }
}
`,d1=`{
  "id": "daisy-sunset",
  "kind": "style",
  "title": {
    "en": "Sunset (daisyUI)",
    "fr": "Sunset (daisyUI)",
    "es": "Sunset (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "dark",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-sunset",
    "name": "Sunset (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"sunset\\" (dark), from saadeghi/daisyui packages/daisyui/src/themes/sunset.css at bf3bac3a397b, MIT.",
    "tokens": {
      "--accent": "#ff865b",
      "--accent-dim": "#ffab8f",
      "--accent-glow": "rgba(255, 134, 91, 0.16)",
      "--accent-border": "rgba(255, 134, 91, 0.45)",
      "--bg-void": "#121c22",
      "--bg-surface": "#0e171e",
      "--bg-panel": "#0e171e",
      "--bg-card": "#0e171e",
      "--bg-hover": "rgba(255, 134, 91, 0.08)",
      "--text-primary": "#9fb9d0",
      "--text-secondary": "#8096aa",
      "--text-muted": "#708597",
      "--text-accent": "#ff865b",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#091319",
      "--border-accent": "rgba(255, 134, 91, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(255, 134, 91, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#addfad",
      "--status-warning": "#f1c892",
      "--status-overload": "#ffbbbd"
    }
  }
}
`,p1=`{
  "id": "daisy-synthwave",
  "kind": "style",
  "title": {
    "en": "Synthwave (daisyUI)",
    "fr": "Synthwave (daisyUI)",
    "es": "Synthwave (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "dark",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-synthwave",
    "name": "Synthwave (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"synthwave\\" (dark), from saadeghi/daisyui packages/daisyui/src/themes/synthwave.css at bf3bac3a397b, MIT.",
    "tokens": {
      "--accent": "#f861b4",
      "--accent-dim": "#fe8bc6",
      "--accent-glow": "rgba(248, 97, 180, 0.16)",
      "--accent-border": "rgba(248, 97, 180, 0.45)",
      "--bg-void": "#09002f",
      "--bg-surface": "#120b3d",
      "--bg-panel": "#120b3d",
      "--bg-card": "#120b3d",
      "--bg-hover": "rgba(248, 97, 180, 0.08)",
      "--text-primary": "#a2b2ff",
      "--text-secondary": "#7e8ad2",
      "--text-muted": "#6f79be",
      "--text-accent": "#f861b4",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#1c184b",
      "--border-accent": "rgba(248, 97, 180, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(248, 97, 180, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#1bd0ba",
      "--status-warning": "#fede1c",
      "--status-overload": "#ec8c78"
    }
  }
}
`,f1=`{
  "id": "daisy-valentine",
  "kind": "style",
  "title": {
    "en": "Valentine (daisyUI)",
    "fr": "Valentine (daisyUI)",
    "es": "Valentine (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-valentine",
    "name": "Valentine (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"valentine\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/valentine.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 65% to 55% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#c91079",
      "--accent-dim": "#a80664",
      "--accent-glow": "rgba(201, 16, 121, 0.16)",
      "--accent-border": "rgba(201, 16, 121, 0.45)",
      "--bg-void": "#fcf2f8",
      "--bg-surface": "#f9e4f0",
      "--bg-panel": "#f9e4f0",
      "--bg-card": "#f9e4f0",
      "--bg-hover": "rgba(201, 16, 121, 0.08)",
      "--text-primary": "#be0e5b",
      "--text-secondary": "#c42a64",
      "--text-muted": "#c42a64",
      "--text-accent": "#c91079",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "32px",
      "--radius-lg": "16px",
      "--border-subtle": "#f9cbe5",
      "--border-accent": "rgba(201, 16, 121, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(201, 16, 121, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#027755",
      "--status-warning": "#a25407",
      "--status-overload": "#d50021"
    }
  }
}
`,m1=`{
  "id": "daisy-winter",
  "kind": "style",
  "title": {
    "en": "Winter (daisyUI)",
    "fr": "Winter (daisyUI)",
    "es": "Winter (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-winter",
    "name": "Winter (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"winter\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/winter.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 57% to 55% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#026ce3",
      "--accent-dim": "#0659bc",
      "--accent-glow": "rgba(2, 108, 227, 0.16)",
      "--accent-border": "rgba(2, 108, 227, 0.45)",
      "--bg-void": "#ffffff",
      "--bg-surface": "#f2f7fe",
      "--bg-panel": "#f2f7fe",
      "--bg-card": "#f2f7fe",
      "--bg-hover": "rgba(2, 108, 227, 0.08)",
      "--text-primary": "#394e6a",
      "--text-secondary": "#5d6f86",
      "--text-muted": "#617289",
      "--text-accent": "#026ce3",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "8px",
      "--radius-lg": "16px",
      "--border-subtle": "#e3e9f4",
      "--border-accent": "rgba(2, 108, 227, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(2, 108, 227, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#2b7c7f",
      "--status-warning": "#836e56",
      "--status-overload": "#ac5859"
    }
  }
}
`,g1=`{
  "id": "daisy-wireframe",
  "kind": "style",
  "title": {
    "en": "Wireframe (daisyUI)",
    "fr": "Wireframe (daisyUI)",
    "es": "Wireframe (daisyUI)"
  },
  "license": "MIT",
  "author": "daisyUI (Pouya Saadeghi and contributors)",
  "github": "saadeghi",
  "tier": "free",
  "tags": [
    "light",
    "daisyui"
  ],
  "manifest": {
    "id": "daisy-wireframe",
    "name": "Wireframe (daisyUI)",
    "version": "1.0.0",
    "author": "daisyUI (Pouya Saadeghi and contributors)",
    "description": "daisyUI theme \\"wireframe\\" (light), from saadeghi/daisyui packages/daisyui/src/themes/wireframe.css at bf3bac3a397b, MIT. Changed: accent lightness moved from 87% to 54% (oklch) so text on it reads at 4.5:1.",
    "tokens": {
      "--accent": "#707070",
      "--accent-dim": "#5c5c5c",
      "--accent-glow": "rgba(112, 112, 112, 0.16)",
      "--accent-border": "rgba(112, 112, 112, 0.45)",
      "--bg-void": "#ffffff",
      "--bg-surface": "#f5f5f5",
      "--bg-panel": "#f5f5f5",
      "--bg-card": "#f5f5f5",
      "--bg-hover": "rgba(112, 112, 112, 0.08)",
      "--text-primary": "#161616",
      "--text-secondary": "#3d3d3d",
      "--text-muted": "#707070",
      "--text-accent": "#707070",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "0px",
      "--radius-md": "4px",
      "--radius-lg": "4px",
      "--border-subtle": "#ebebeb",
      "--border-accent": "rgba(112, 112, 112, 0.45)",
      "--shadow-card": "none",
      "--shadow-accent": "0 0 22px -6px rgba(112, 112, 112, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#045f45",
      "--status-warning": "#933e05",
      "--status-overload": "#9d0410"
    }
  }
}
`,h1=`{
  "id": "hud-night",
  "kind": "style",
  "title": {
    "en": "HUD night",
    "fr": "HUD de nuit",
    "es": "HUD nocturno"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "dark",
    "sf",
    "hud"
  ],
  "manifest": {
    "id": "hud-night",
    "name": "HUD night",
    "version": "1.0.0",
    "author": "Mnemosyne OS",
    "description": "Cyan light on a night ground, square corners, mono readouts.",
    "tokens": {
      "--accent": "#5fe3ff",
      "--accent-dim": "#2fa6c0",
      "--accent-glow": "rgba(95, 227, 255, 0.18)",
      "--accent-border": "rgba(95, 227, 255, 0.42)",
      "--bg-void": "#03060c",
      "--bg-surface": "#07101a",
      "--bg-panel": "rgba(255, 255, 255, 0.05)",
      "--bg-card": "rgba(255, 255, 255, 0.06)",
      "--bg-hover": "rgba(95, 227, 255, 0.08)",
      "--text-primary": "#e6f4fb",
      "--text-secondary": "#b9d3e2",
      "--text-muted": "#8fa8ba",
      "--text-accent": "#5fe3ff",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "0px",
      "--radius-md": "0px",
      "--radius-lg": "0px",
      "--border-subtle": "rgba(95, 227, 255, 0.14)",
      "--border-accent": "rgba(95, 227, 255, 0.42)",
      "--shadow-card": "0 10px 30px -14px rgba(0, 0, 0, 0.7)",
      "--shadow-accent": "0 0 24px -6px rgba(95, 227, 255, 0.55)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#3fd68a",
      "--status-warning": "#ffbe5c",
      "--status-overload": "#ff7070"
    }
  }
}
`,v1=`{
  "id": "liquid-glass",
  "kind": "style",
  "title": {
    "en": "Liquid glass",
    "fr": "Verre liquide",
    "es": "Vidrio líquido"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "dark",
    "glass"
  ],
  "manifest": {
    "id": "liquid-glass",
    "name": "Liquid glass",
    "version": "1.0.0",
    "author": "Mnemosyne OS",
    "description": "Translucent light over a deep ground, soft radii, green action.",
    "tokens": {
      "--accent": "#3fd68a",
      "--accent-dim": "#2fae6f",
      "--accent-glow": "rgba(63, 214, 138, 0.2)",
      "--accent-border": "rgba(63, 214, 138, 0.55)",
      "--bg-void": "#0d1320",
      "--bg-surface": "#141c2c",
      "--bg-panel": "rgba(255, 255, 255, 0.08)",
      "--bg-card": "rgba(255, 255, 255, 0.09)",
      "--bg-hover": "rgba(255, 255, 255, 0.13)",
      "--text-primary": "#f1f5fb",
      "--text-secondary": "#c9d3e3",
      "--text-muted": "#9aa7bd",
      "--text-accent": "#6be6a8",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "10px",
      "--radius-md": "14px",
      "--radius-lg": "20px",
      "--border-subtle": "rgba(255, 255, 255, 0.18)",
      "--border-accent": "rgba(63, 214, 138, 0.55)",
      "--shadow-card": "inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 8px 24px -10px rgba(0, 0, 0, 0.5)",
      "--shadow-accent": "0 0 22px -6px rgba(63, 214, 138, 0.6)",
      "--transition-fast": "140ms ease",
      "--transition-normal": "260ms ease",
      "--status-active": "#3fd68a",
      "--status-warning": "#ffc46b",
      "--status-overload": "#ff7a7a"
    }
  }
}
`,y1=`{
  "id": "minimal-light",
  "kind": "style",
  "title": {
    "en": "Minimal light",
    "fr": "Minimal clair",
    "es": "Minimalista claro"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "light",
    "minimal"
  ],
  "manifest": {
    "id": "minimal-light",
    "name": "Minimal light",
    "version": "1.0.0",
    "author": "Mnemosyne OS",
    "description": "White ground, near-black text, one blue accent.",
    "tokens": {
      "--accent": "#2a5fe6",
      "--accent-dim": "#1f4bc0",
      "--accent-glow": "rgba(42, 95, 230, 0.14)",
      "--accent-border": "rgba(42, 95, 230, 0.4)",
      "--bg-void": "#ffffff",
      "--bg-surface": "#f6f7f9",
      "--bg-panel": "#ffffff",
      "--bg-card": "#ffffff",
      "--bg-hover": "#f0f2f5",
      "--text-primary": "#111418",
      "--text-secondary": "#3b424c",
      "--text-muted": "#5f6874",
      "--text-accent": "#2a5fe6",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "6px",
      "--radius-md": "10px",
      "--radius-lg": "14px",
      "--border-subtle": "#e3e6eb",
      "--border-accent": "rgba(42, 95, 230, 0.4)",
      "--shadow-card": "0 1px 2px rgba(17, 20, 24, 0.06), 0 8px 24px -12px rgba(17, 20, 24, 0.18)",
      "--shadow-accent": "0 6px 16px -6px rgba(42, 95, 230, 0.45)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "220ms ease",
      "--status-active": "#1d7a46",
      "--status-warning": "#8a5a00",
      "--status-overload": "#c0262d"
    }
  }
}
`,b1=`{
  "id": "mnemosyne-dark",
  "kind": "style",
  "title": {
    "en": "Mnemosyne OS Dark",
    "fr": "Mnemosyne OS Sombre",
    "es": "Mnemosyne OS Oscuro"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "dark",
    "mnemosyne-os"
  ],
  "manifest": {
    "id": "mnemosyne-dark",
    "name": "Mnemosyne OS Dark",
    "version": "1.0.0",
    "author": "Mnemosyne OS",
    "description": "The Mnemosyne OS theme \\"dark\\", read from the host's globals.css. Translucent text and ground colours are flattened over the page ground for this preview; inside a cartridge the kit reads the host's live variables.",
    "tokens": {
      "--accent": "#7c4dff",
      "--accent-dim": "#633ecc",
      "--accent-glow": "color-mix(in srgb, #7c4dff 16%, transparent)",
      "--accent-border": "rgba(124, 77, 255, 0.45)",
      "--bg-void": "#141416",
      "--bg-surface": "#1d1d1f",
      "--bg-panel": "#161619",
      "--bg-card": "#161619",
      "--bg-hover": "rgba(255, 255, 255, 0.07)",
      "--text-primary": "#f5f0e8",
      "--text-secondary": "#d3cfc9",
      "--text-muted": "#9b9894",
      "--text-accent": "#7c4dff",
      "--font-ui": "'Inter', -apple-system, system-ui, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, 'Roboto Mono', monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "6px",
      "--radius-md": "10px",
      "--radius-lg": "16px",
      "--border-subtle": "rgba(255, 255, 255, 0.06)",
      "--border-accent": "rgba(255, 255, 255, 0.18)",
      "--shadow-card": "0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.6)",
      "--shadow-accent": "0 0 22px -6px rgba(124, 77, 255, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#69b683",
      "--status-warning": "#dc9c47",
      "--status-overload": "#dc6969"
    }
  }
}
`,x1=`{
  "id": "mnemosyne-glass",
  "kind": "style",
  "title": {
    "en": "Mnemosyne OS Glass",
    "fr": "Mnemosyne OS Verre",
    "es": "Mnemosyne OS Cristal"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "dark",
    "mnemosyne-os"
  ],
  "manifest": {
    "id": "mnemosyne-glass",
    "name": "Mnemosyne OS Glass",
    "version": "1.0.0",
    "author": "Mnemosyne OS",
    "description": "The Mnemosyne OS theme \\"glass\\", read from the host's globals.css. Translucent text and ground colours are flattened over the page ground for this preview; inside a cartridge the kit reads the host's live variables.",
    "tokens": {
      "--accent": "#0a84ff",
      "--accent-dim": "#086acc",
      "--accent-glow": "color-mix(in srgb, #0A84FF 16%, transparent)",
      "--accent-border": "rgba(10, 132, 255, 0.45)",
      "--bg-void": "#0c0e1a",
      "--bg-surface": "#1b1c28",
      "--bg-panel": "#161822",
      "--bg-card": "#161822",
      "--bg-hover": "rgba(255, 255, 255, 0.1)",
      "--text-primary": "#f5f0e8",
      "--text-secondary": "#d2cec9",
      "--text-muted": "#aaa8a6",
      "--text-accent": "#0a84ff",
      "--font-ui": "'Inter', -apple-system, system-ui, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, 'Roboto Mono', monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "6px",
      "--radius-md": "10px",
      "--radius-lg": "16px",
      "--border-subtle": "rgba(255, 255, 255, 0.1)",
      "--border-accent": "rgba(255, 255, 255, 0.28)",
      "--shadow-card": "0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 12px 40px rgba(0, 0, 0, 0.45)",
      "--shadow-accent": "0 0 22px -6px rgba(10, 132, 255, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#68b583",
      "--status-warning": "#db9b48",
      "--status-overload": "#db686a"
    }
  }
}
`,k1=`{
  "id": "mnemosyne-light",
  "kind": "style",
  "title": {
    "en": "Mnemosyne OS Light",
    "fr": "Mnemosyne OS Clair",
    "es": "Mnemosyne OS Claro"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "light",
    "mnemosyne-os"
  ],
  "manifest": {
    "id": "mnemosyne-light",
    "name": "Mnemosyne OS Light",
    "version": "1.0.0",
    "author": "Mnemosyne OS",
    "description": "The Mnemosyne OS theme \\"light\\", read from the host's globals.css. Translucent text and ground colours are flattened over the page ground for this preview; inside a cartridge the kit reads the host's live variables.",
    "tokens": {
      "--accent": "#5b34c9",
      "--accent-dim": "#492aa1",
      "--accent-glow": "color-mix(in srgb, #5B34C9 16%, transparent)",
      "--accent-border": "rgba(91, 52, 201, 0.45)",
      "--bg-void": "#EBEBF0",
      "--bg-surface": "#ffffff",
      "--bg-panel": "#ffffff",
      "--bg-card": "#ffffff",
      "--bg-hover": "#FFFFFF",
      "--text-primary": "#1c1c1e",
      "--text-secondary": "#3a3a3c",
      "--text-muted": "#636366",
      "--text-accent": "#5b34c9",
      "--font-ui": "'Inter', -apple-system, system-ui, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, 'Roboto Mono', monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "6px",
      "--radius-md": "10px",
      "--radius-lg": "16px",
      "--border-subtle": "rgba(60, 60, 67, 0.20)",
      "--border-accent": "rgba(60, 60, 67, 0.58)",
      "--shadow-card": "0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.10), 0 0 0 0.5px rgba(0,0,0,0.06)",
      "--shadow-accent": "0 0 22px -6px rgba(91, 52, 201, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#145a24",
      "--status-warning": "#7d3a00",
      "--status-overload": "#8b1212"
    }
  }
}
`,_1=`{
  "id": "mnemosyne-tokyo-night",
  "kind": "style",
  "title": {
    "en": "Mnemosyne OS Tokyo Night",
    "fr": "Mnemosyne OS Tokyo Night",
    "es": "Mnemosyne OS Tokyo Night"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "dark",
    "mnemosyne-os"
  ],
  "manifest": {
    "id": "mnemosyne-tokyo-night",
    "name": "Mnemosyne OS Tokyo Night",
    "version": "1.0.0",
    "author": "Mnemosyne OS",
    "description": "The Mnemosyne OS theme \\"tokyo-night\\", read from the host's globals.css. Translucent text and ground colours are flattened over the page ground for this preview; inside a cartridge the kit reads the host's live variables. Palette ported by the host from Tokyo Night by Enkia (MIT).",
    "tokens": {
      "--accent": "#7aa2f7",
      "--accent-dim": "#6282c6",
      "--accent-glow": "color-mix(in srgb, #7aa2f7 16%, transparent)",
      "--accent-border": "rgba(122, 162, 247, 0.45)",
      "--bg-void": "#1a1b26",
      "--bg-surface": "#21232f",
      "--bg-panel": "#16161e",
      "--bg-card": "#16161e",
      "--bg-hover": "rgba(169, 177, 214, 0.09)",
      "--text-primary": "#c0caf5",
      "--text-secondary": "#a9b1d6",
      "--text-muted": "#828bb8",
      "--text-accent": "#7aa2f7",
      "--font-ui": "'Inter', -apple-system, system-ui, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, 'Roboto Mono', monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "6px",
      "--radius-md": "10px",
      "--radius-lg": "16px",
      "--border-subtle": "rgba(65, 72, 104, 0.55)",
      "--border-accent": "rgba(122, 162, 247, 0.5)",
      "--shadow-card": "0 0 0 1px rgba(65, 72, 104, 0.35), 0 8px 32px rgba(0, 0, 0, 0.6)",
      "--shadow-accent": "0 0 22px -6px rgba(122, 162, 247, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#9ece6a",
      "--status-warning": "#e0af68",
      "--status-overload": "#f7768e"
    }
  }
}
`,w1=`{
  "id": "neon-pop",
  "kind": "style",
  "title": {
    "en": "Neon pop",
    "fr": "Néon",
    "es": "Neón"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "dark",
    "neon",
    "playful"
  ],
  "manifest": {
    "id": "neon-pop",
    "name": "Neon pop",
    "version": "1.0.0",
    "author": "Mnemosyne OS",
    "description": "Deep violet night, magenta light, round and bright.",
    "tokens": {
      "--accent": "#ff3dcb",
      "--accent-dim": "#c42a9c",
      "--accent-glow": "rgba(255, 61, 203, 0.25)",
      "--accent-border": "rgba(255, 61, 203, 0.55)",
      "--bg-void": "#0b0614",
      "--bg-surface": "#140b24",
      "--bg-panel": "#1b1030",
      "--bg-card": "#1f1236",
      "--bg-hover": "#2a1846",
      "--text-primary": "#f6ecff",
      "--text-secondary": "#d5c2ee",
      "--text-muted": "#a593c0",
      "--text-accent": "#ff7ee0",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "10px",
      "--radius-md": "16px",
      "--radius-lg": "24px",
      "--border-subtle": "rgba(255, 255, 255, 0.1)",
      "--border-accent": "rgba(255, 61, 203, 0.55)",
      "--shadow-card": "0 12px 32px -14px rgba(0, 0, 0, 0.8)",
      "--shadow-accent": "0 0 28px -4px rgba(255, 61, 203, 0.7)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "260ms cubic-bezier(.2, .8, .2, 1)",
      "--status-active": "#3dffb5",
      "--status-warning": "#ffd166",
      "--status-overload": "#ff5c7a"
    }
  }
}
`,S1=`{
  "id": "paper",
  "kind": "style",
  "title": {
    "en": "Paper",
    "fr": "Papier",
    "es": "Papel"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "light",
    "warm",
    "editorial"
  ],
  "manifest": {
    "id": "paper",
    "name": "Paper",
    "version": "1.0.0",
    "author": "Mnemosyne OS",
    "description": "Warm paper, ink text, terracotta accent, a serif voice.",
    "tokens": {
      "--accent": "#a8411f",
      "--accent-dim": "#86331a",
      "--accent-glow": "rgba(168, 65, 31, 0.16)",
      "--accent-border": "rgba(168, 65, 31, 0.45)",
      "--bg-void": "#f3ece0",
      "--bg-surface": "#ebe2d2",
      "--bg-panel": "#fbf7f0",
      "--bg-card": "#fffdf8",
      "--bg-hover": "#efe6d6",
      "--text-primary": "#2b2420",
      "--text-secondary": "#4f443c",
      "--text-muted": "#655950",
      "--text-accent": "#a8411f",
      "--font-ui": "ui-serif, Georgia, 'Times New Roman', serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "4px",
      "--radius-md": "8px",
      "--radius-lg": "12px",
      "--border-subtle": "rgba(43, 36, 32, 0.16)",
      "--border-accent": "rgba(168, 65, 31, 0.45)",
      "--shadow-card": "2px 3px 0 rgba(43, 36, 32, 0.12), 0 10px 22px -16px rgba(43, 36, 32, 0.45)",
      "--shadow-accent": "0 6px 18px -8px rgba(168, 65, 31, 0.45)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#2c7146",
      "--status-warning": "#8c5b00",
      "--status-overload": "#b3261e"
    }
  }
}
`,I1=`{
  "id": "skeleton-crimson",
  "kind": "style",
  "title": {
    "en": "Crimson (Skeleton)",
    "fr": "Crimson (Skeleton)",
    "es": "Crimson (Skeleton)"
  },
  "license": "MIT",
  "author": "@ak4zh for the Skeleton community (via kyrolabs/skeleton-theme)",
  "github": "ak4zh",
  "tier": "free",
  "tags": [
    "light",
    "skeleton"
  ],
  "manifest": {
    "id": "skeleton-crimson",
    "name": "Crimson (Skeleton)",
    "version": "1.0.0",
    "author": "@ak4zh for the Skeleton community (via kyrolabs/skeleton-theme)",
    "description": "Skeleton theme \\"crimson\\" (light), from kyrolabs/skeleton-theme src/themes/theme-crimson.css at d40eb56c0477, MIT. Changed: accent lightness moved from 56% to 50% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#b90d32",
      "--accent-dim": "#990026",
      "--accent-glow": "rgba(185, 13, 50, 0.16)",
      "--accent-border": "rgba(185, 13, 50, 0.45)",
      "--bg-void": "#dfe0e2",
      "--bg-surface": "#d5d5d9",
      "--bg-panel": "#d5d5d9",
      "--bg-card": "#d5d5d9",
      "--bg-hover": "rgba(185, 13, 50, 0.08)",
      "--text-primary": "#15171f",
      "--text-secondary": "#373941",
      "--text-muted": "#595b62",
      "--text-accent": "#b90d32",
      "--font-ui": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "24px",
      "--radius-md": "24px",
      "--radius-lg": "24px",
      "--border-subtle": "#cacbcf",
      "--border-accent": "rgba(185, 13, 50, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(185, 13, 50, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#4d6421",
      "--status-warning": "#725a00",
      "--status-overload": "#904448"
    }
  }
}
`,C1=`{
  "id": "skeleton-gold-nouveau",
  "kind": "style",
  "title": {
    "en": "Gold Nouveau (Skeleton)",
    "fr": "Gold Nouveau (Skeleton)",
    "es": "Gold Nouveau (Skeleton)"
  },
  "license": "MIT",
  "author": "@Sarenor for the Skeleton community (via kyrolabs/skeleton-theme)",
  "github": "Sarenor",
  "tier": "free",
  "tags": [
    "light",
    "skeleton"
  ],
  "manifest": {
    "id": "skeleton-gold-nouveau",
    "name": "Gold Nouveau (Skeleton)",
    "version": "1.0.0",
    "author": "@Sarenor for the Skeleton community (via kyrolabs/skeleton-theme)",
    "description": "Skeleton theme \\"gold-nouveau\\" (light), from kyrolabs/skeleton-theme src/themes/theme-gold-nouveau.css at d40eb56c0477, MIT. Changed: success, warning lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#744aa1",
      "--accent-dim": "#60368b",
      "--accent-glow": "rgba(116, 74, 161, 0.16)",
      "--accent-border": "rgba(116, 74, 161, 0.45)",
      "--bg-void": "#faf8fc",
      "--bg-surface": "#f2eef7",
      "--bg-panel": "#f2eef7",
      "--bg-card": "#f2eef7",
      "--bg-hover": "rgba(116, 74, 161, 0.08)",
      "--text-primary": "#120b18",
      "--text-secondary": "#39323f",
      "--text-muted": "#706a75",
      "--text-accent": "#744aa1",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "4px",
      "--radius-md": "4px",
      "--radius-lg": "4px",
      "--border-subtle": "#e5dcef",
      "--border-accent": "rgba(116, 74, 161, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(116, 74, 161, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#257c40",
      "--status-warning": "#a55901",
      "--status-overload": "#8f0f22"
    }
  }
}
`,M1=`{
  "id": "skeleton-hamlindigo",
  "kind": "style",
  "title": {
    "en": "Hamlindigo (Skeleton)",
    "fr": "Hamlindigo (Skeleton)",
    "es": "Hamlindigo (Skeleton)"
  },
  "license": "MIT",
  "author": "@rcgy for the Skeleton community (via kyrolabs/skeleton-theme)",
  "tier": "free",
  "tags": [
    "light",
    "skeleton"
  ],
  "manifest": {
    "id": "skeleton-hamlindigo",
    "name": "Hamlindigo (Skeleton)",
    "version": "1.0.0",
    "author": "@rcgy for the Skeleton community (via kyrolabs/skeleton-theme)",
    "description": "Skeleton theme \\"hamlindigo\\" (light), from kyrolabs/skeleton-theme src/themes/theme-hamlindigo.css at d40eb56c0477, MIT. Changed: accent lightness moved from 80% to 51% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#516492",
      "--accent-dim": "#3e507d",
      "--accent-glow": "rgba(81, 100, 146, 0.16)",
      "--accent-border": "rgba(81, 100, 146, 0.45)",
      "--bg-void": "#e8eaf1",
      "--bg-surface": "#e0e4ed",
      "--bg-panel": "#e0e4ed",
      "--bg-card": "#e0e4ed",
      "--bg-hover": "rgba(81, 100, 146, 0.08)",
      "--text-primary": "#000000",
      "--text-secondary": "#131314",
      "--text-muted": "#4d4d50",
      "--text-accent": "#516492",
      "--font-ui": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "2px",
      "--radius-md": "2px",
      "--radius-lg": "2px",
      "--border-subtle": "#d8dde8",
      "--border-accent": "rgba(81, 100, 146, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(81, 100, 146, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#20715c",
      "--status-warning": "#836001",
      "--status-overload": "#925367"
    }
  }
}
`,E1=`{
  "id": "skeleton-modern",
  "kind": "style",
  "title": {
    "en": "Modern (Skeleton)",
    "fr": "Modern (Skeleton)",
    "es": "Modern (Skeleton)"
  },
  "license": "MIT",
  "author": "Skeleton Labs (via kyrolabs/skeleton-theme)",
  "github": "skeletonlabs",
  "tier": "free",
  "tags": [
    "light",
    "skeleton"
  ],
  "manifest": {
    "id": "skeleton-modern",
    "name": "Modern (Skeleton)",
    "version": "1.0.0",
    "author": "Skeleton Labs (via kyrolabs/skeleton-theme)",
    "description": "Skeleton theme \\"modern\\" (light), from kyrolabs/skeleton-theme src/themes/theme-modern.css at d40eb56c0477, MIT. Changed: accent lightness moved from 66% to 53% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#bf0f74",
      "--accent-dim": "#9f045f",
      "--accent-glow": "rgba(191, 15, 116, 0.16)",
      "--accent-border": "rgba(191, 15, 116, 0.45)",
      "--bg-void": "#e8e8fd",
      "--bg-surface": "#e0e0fc",
      "--bg-panel": "#e0e0fc",
      "--bg-card": "#e0e0fc",
      "--bg-hover": "rgba(191, 15, 116, 0.08)",
      "--text-primary": "#313276",
      "--text-secondary": "#505591",
      "--text-muted": "#5a5f99",
      "--text-accent": "#bf0f74",
      "--font-ui": "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "9999px",
      "--radius-md": "9999px",
      "--radius-lg": "24px",
      "--border-subtle": "#d8d9fc",
      "--border-accent": "rgba(191, 15, 116, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(191, 15, 116, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#456f02",
      "--status-warning": "#7f5f03",
      "--status-overload": "#c91323"
    }
  }
}
`,T1=`{
  "id": "skeleton-rocket",
  "kind": "style",
  "title": {
    "en": "Rocket (Skeleton)",
    "fr": "Rocket (Skeleton)",
    "es": "Rocket (Skeleton)"
  },
  "license": "MIT",
  "author": "Skeleton Labs (via kyrolabs/skeleton-theme)",
  "github": "skeletonlabs",
  "tier": "free",
  "tags": [
    "light",
    "skeleton"
  ],
  "manifest": {
    "id": "skeleton-rocket",
    "name": "Rocket (Skeleton)",
    "version": "1.0.0",
    "author": "Skeleton Labs (via kyrolabs/skeleton-theme)",
    "description": "Skeleton theme \\"rocket\\" (light), from kyrolabs/skeleton-theme src/themes/theme-rocket.css at d40eb56c0477, MIT. Changed: accent lightness moved from 71% to 50% (oklch) so text on it reads at 4.5:1. Changed: success, warning lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#056f82",
      "--accent-dim": "#035969",
      "--accent-glow": "rgba(5, 111, 130, 0.16)",
      "--accent-border": "rgba(5, 111, 130, 0.45)",
      "--bg-void": "#e8eaee",
      "--bg-surface": "#e0e3e8",
      "--bg-panel": "#e0e3e8",
      "--bg-card": "#e0e3e8",
      "--bg-hover": "rgba(5, 111, 130, 0.08)",
      "--text-primary": "#035968",
      "--text-secondary": "#316c7a",
      "--text-muted": "#316c7a",
      "--text-accent": "#056f82",
      "--font-ui": "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "0px",
      "--radius-md": "0px",
      "--radius-lg": "0px",
      "--border-subtle": "#d8dce2",
      "--border-accent": "rgba(5, 111, 130, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(5, 111, 130, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#267403",
      "--status-warning": "#7e6106",
      "--status-overload": "#b52c55"
    }
  }
}
`,N1=`{
  "id": "skeleton-sahara",
  "kind": "style",
  "title": {
    "en": "Sahara (Skeleton)",
    "fr": "Sahara (Skeleton)",
    "es": "Sahara (Skeleton)"
  },
  "license": "MIT",
  "author": "Skeleton Labs (via kyrolabs/skeleton-theme)",
  "github": "skeletonlabs",
  "tier": "free",
  "tags": [
    "light",
    "skeleton"
  ],
  "manifest": {
    "id": "skeleton-sahara",
    "name": "Sahara (Skeleton)",
    "version": "1.0.0",
    "author": "Skeleton Labs (via kyrolabs/skeleton-theme)",
    "description": "Skeleton theme \\"sahara\\" (light), from kyrolabs/skeleton-theme src/themes/theme-sahara.css at d40eb56c0477, MIT. Changed: accent lightness moved from 78% to 51% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#885d07",
      "--accent-dim": "#6f4b06",
      "--accent-glow": "rgba(136, 93, 7, 0.16)",
      "--accent-border": "rgba(136, 93, 7, 0.45)",
      "--bg-void": "#f9e4e8",
      "--bg-surface": "#f8dce0",
      "--bg-panel": "#f8dce0",
      "--bg-card": "#f8dce0",
      "--bg-hover": "rgba(136, 93, 7, 0.08)",
      "--text-primary": "#1c635b",
      "--text-secondary": "#356e67",
      "--text-muted": "#356e67",
      "--text-accent": "#885d07",
      "--font-ui": "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "9999px",
      "--radius-md": "9999px",
      "--radius-lg": "24px",
      "--border-subtle": "#f6d3d9",
      "--border-accent": "rgba(136, 93, 7, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(136, 93, 7, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#456f02",
      "--status-warning": "#7c6204",
      "--status-overload": "#b03376"
    }
  }
}
`,j1=`{
  "id": "skeleton-seafoam",
  "kind": "style",
  "title": {
    "en": "Seafoam (Skeleton)",
    "fr": "Seafoam (Skeleton)",
    "es": "Seafoam (Skeleton)"
  },
  "license": "MIT",
  "author": "Skeleton Labs (via kyrolabs/skeleton-theme)",
  "github": "skeletonlabs",
  "tier": "free",
  "tags": [
    "light",
    "skeleton"
  ],
  "manifest": {
    "id": "skeleton-seafoam",
    "name": "Seafoam (Skeleton)",
    "version": "1.0.0",
    "author": "Skeleton Labs (via kyrolabs/skeleton-theme)",
    "description": "Skeleton theme \\"seafoam\\" (light), from kyrolabs/skeleton-theme src/themes/theme-seafoam.css at d40eb56c0477, MIT. Changed: accent lightness moved from 81% to 52% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#2b7773",
      "--accent-dim": "#0e635f",
      "--accent-glow": "rgba(43, 119, 115, 0.16)",
      "--accent-border": "rgba(43, 119, 115, 0.45)",
      "--bg-void": "#def8f9",
      "--bg-surface": "#d3f6f6",
      "--bg-panel": "#d3f6f6",
      "--bg-card": "#d3f6f6",
      "--bg-hover": "rgba(43, 119, 115, 0.08)",
      "--text-primary": "#126668",
      "--text-secondary": "#327678",
      "--text-muted": "#327678",
      "--text-accent": "#2b7773",
      "--font-ui": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "16px",
      "--radius-md": "16px",
      "--radius-lg": "16px",
      "--border-subtle": "#c9f4f4",
      "--border-accent": "rgba(43, 119, 115, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(43, 119, 115, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#017b55",
      "--status-warning": "#737009",
      "--status-overload": "#c4383a"
    }
  }
}
`,O1=`{
  "id": "skeleton-seasonal",
  "kind": "style",
  "title": {
    "en": "Seasonal (Skeleton)",
    "fr": "Seasonal (Skeleton)",
    "es": "Seasonal (Skeleton)"
  },
  "license": "MIT",
  "author": "Skeleton Labs (via kyrolabs/skeleton-theme)",
  "github": "skeletonlabs",
  "tier": "free",
  "tags": [
    "light",
    "skeleton"
  ],
  "manifest": {
    "id": "skeleton-seasonal",
    "name": "Seasonal (Skeleton)",
    "version": "1.0.0",
    "author": "Skeleton Labs (via kyrolabs/skeleton-theme)",
    "description": "Skeleton theme \\"seasonal\\" (light), from kyrolabs/skeleton-theme src/themes/theme-seasonal.css at d40eb56c0477, MIT. Changed: accent lightness moved from 69% to 46% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#056659",
      "--accent-dim": "#015046",
      "--accent-glow": "rgba(5, 102, 89, 0.16)",
      "--accent-border": "rgba(5, 102, 89, 0.45)",
      "--bg-void": "#dbdee2",
      "--bg-surface": "#cfd3d8",
      "--bg-panel": "#cfd3d8",
      "--bg-card": "#cfd3d8",
      "--bg-hover": "rgba(5, 102, 89, 0.08)",
      "--text-primary": "#0f233e",
      "--text-secondary": "#33445d",
      "--text-muted": "#4c5b71",
      "--text-accent": "#056659",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "12px",
      "--radius-md": "12px",
      "--radius-lg": "12px",
      "--border-subtle": "#c3c8cf",
      "--border-accent": "rgba(5, 102, 89, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(5, 102, 89, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#466403",
      "--status-warning": "#6e590a",
      "--status-overload": "#ae2334"
    }
  }
}
`,A1=`{
  "id": "skeleton-skeleton",
  "kind": "style",
  "title": {
    "en": "Skeleton (Skeleton)",
    "fr": "Skeleton (Skeleton)",
    "es": "Skeleton (Skeleton)"
  },
  "license": "MIT",
  "author": "Skeleton Labs (via kyrolabs/skeleton-theme)",
  "github": "skeletonlabs",
  "tier": "free",
  "tags": [
    "light",
    "skeleton"
  ],
  "manifest": {
    "id": "skeleton-skeleton",
    "name": "Skeleton (Skeleton)",
    "version": "1.0.0",
    "author": "Skeleton Labs (via kyrolabs/skeleton-theme)",
    "description": "Skeleton theme \\"skeleton\\" (light), from kyrolabs/skeleton-theme src/themes/theme-skeleton.css at d40eb56c0477, MIT. Changed: accent lightness moved from 70% to 48% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#04704c",
      "--accent-dim": "#025a3c",
      "--accent-glow": "rgba(4, 112, 76, 0.16)",
      "--accent-border": "rgba(4, 112, 76, 0.45)",
      "--bg-void": "#e4e6ee",
      "--bg-surface": "#dbdee9",
      "--bg-panel": "#dbdee9",
      "--bg-card": "#dbdee9",
      "--bg-hover": "rgba(4, 112, 76, 0.08)",
      "--text-primary": "#000000",
      "--text-secondary": "#121314",
      "--text-muted": "#4b4c4f",
      "--text-accent": "#04704c",
      "--font-ui": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "9999px",
      "--radius-md": "9999px",
      "--radius-lg": "8px",
      "--border-subtle": "#d2d6e3",
      "--border-accent": "rgba(4, 112, 76, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(4, 112, 76, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#446c05",
      "--status-warning": "#7d5e00",
      "--status-overload": "#be0968"
    }
  }
}
`,U1=`{
  "id": "skeleton-vintage",
  "kind": "style",
  "title": {
    "en": "Vintage (Skeleton)",
    "fr": "Vintage (Skeleton)",
    "es": "Vintage (Skeleton)"
  },
  "license": "MIT",
  "author": "Skeleton Labs (via kyrolabs/skeleton-theme)",
  "github": "skeletonlabs",
  "tier": "free",
  "tags": [
    "light",
    "skeleton"
  ],
  "manifest": {
    "id": "skeleton-vintage",
    "name": "Vintage (Skeleton)",
    "version": "1.0.0",
    "author": "Skeleton Labs (via kyrolabs/skeleton-theme)",
    "description": "Skeleton theme \\"vintage\\" (light), from kyrolabs/skeleton-theme src/themes/theme-vintage.css at d40eb56c0477, MIT. Changed: accent lightness moved from 71% to 49% (oklch) so text on it reads at 4.5:1. Changed: success, warning, error lightness moved so they read as text at 4.5:1.",
    "tokens": {
      "--accent": "#8d4e07",
      "--accent-dim": "#723e04",
      "--accent-glow": "rgba(141, 78, 7, 0.16)",
      "--accent-border": "rgba(141, 78, 7, 0.45)",
      "--bg-void": "#e2e1e0",
      "--bg-surface": "#d9d7d6",
      "--bg-panel": "#d9d7d6",
      "--bg-card": "#d9d7d6",
      "--bg-hover": "rgba(141, 78, 7, 0.08)",
      "--text-primary": "#73420d",
      "--text-secondary": "#81542c",
      "--text-muted": "#81542c",
      "--text-accent": "#8d4e07",
      "--font-ui": "'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
      "--font-mono": "ui-monospace, 'Cascadia Mono', 'SF Mono', Consolas, monospace",
      "--space-sm": "8px",
      "--space-md": "14px",
      "--space-lg": "22px",
      "--radius-sm": "2px",
      "--radius-md": "2px",
      "--radius-lg": "4px",
      "--border-subtle": "#cfcdcc",
      "--border-accent": "rgba(141, 78, 7, 0.45)",
      "--shadow-card": "0 8px 22px -12px rgba(0, 0, 0, 0.28)",
      "--shadow-accent": "0 0 22px -6px rgba(141, 78, 7, 0.5)",
      "--transition-fast": "120ms ease",
      "--transition-normal": "240ms ease",
      "--status-active": "#336b02",
      "--status-warning": "#7e5705",
      "--status-overload": "#964642"
    }
  }
}
`,L1=`<table class="ss-table-lined"><thead><tr><th>Service</th><th>State</th></tr></thead><tbody><tr><td>API</td><td><span class="ss-table-lined__state">Up</span></td></tr><tr><td>Search</td><td><span class="ss-table-lined__state">Degraded</span></td></tr><tr><td>Mail</td><td><span class="ss-table-lined__state">Up</span></td></tr></tbody></table>
`,R1=`.ss-table-lined { width: min(100%, 360px); border-collapse: collapse; font: 13px/1.3 var(--font-ui); color: var(--text-primary); }
.ss-table-lined th { padding: 8px 4px; text-align: left; border-bottom: 1px solid var(--border-accent); color: var(--text-secondary); font-weight: 600; }
.ss-table-lined td { padding: 10px 4px; border-bottom: 1px solid var(--border-subtle); }
.ss-table-lined__state { display: inline-block; padding: 2px 8px; border-radius: 999px; background: var(--bg-hover); color: var(--text-secondary); font-size: 11px; }
.ss-table-lined__state::before { content: ""; display: inline-block; width: 6px; height: 6px; margin-right: 6px; border-radius: 50%; background: var(--status-active); vertical-align: middle; }
.ss-table-lined tr:nth-child(2) .ss-table-lined__state::before { background: var(--status-warning); }
`,P1=`{
  "id": "table-lined",
  "kind": "table",
  "title": {
    "en": "Lined table",
    "fr": "Tableau à filets",
    "es": "Tabla con líneas"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "data",
    "minimal"
  ]
}
`,F1=`<table class="ss-table-zebra"><thead><tr><th>Name</th><th>Role</th><th>Tasks</th></tr></thead><tbody><tr><td>Ada</td><td>Lead</td><td>12</td></tr><tr><td>Linus</td><td>Dev</td><td>8</td></tr><tr><td>Grace</td><td>Ops</td><td>5</td></tr></tbody></table>
`,z1=`.ss-table-zebra {
  width: min(100%, 360px); border-collapse: separate; border-spacing: 0;
  border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden;
  font: 13px/1.3 var(--font-ui); color: var(--text-primary);
}
.ss-table-zebra th {
  padding: 10px 12px; text-align: left;
  background: var(--bg-surface); color: var(--text-muted);
  font: 600 11px/1 var(--font-mono); letter-spacing: 0.1em; text-transform: uppercase;
}
.ss-table-zebra td { padding: 10px 12px; }
.ss-table-zebra tbody tr:nth-child(even) td { background: var(--bg-panel); }
.ss-table-zebra tbody tr:hover td { background: var(--bg-hover); }
.ss-table-zebra td:last-child { text-align: right; font-family: var(--font-mono); color: var(--text-accent); }
`,D1=`{
  "id": "table-zebra",
  "kind": "table",
  "title": {
    "en": "Striped table",
    "fr": "Tableau rayé",
    "es": "Tabla rayada"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "data"
  ]
}
`,H1=`<span class="ss-tooltip-bubble" data-open><button class="ss-tooltip-bubble__trigger" type="button" aria-describedby="tip">Share</button><span class="ss-tooltip-bubble__tip" id="tip" role="tooltip">Copy the link</span></span>
`,$1=`.ss-tooltip-bubble { position: relative; display: inline-block; margin-top: 44px; font-family: var(--font-ui); }
.ss-tooltip-bubble__trigger {
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--border-subtle); border-radius: var(--radius-md);
  background: var(--bg-panel); color: var(--text-primary); font: 500 13px/1 var(--font-ui); cursor: help;
}
.ss-tooltip-bubble__tip {
  position: absolute; bottom: calc(100% + 10px); left: 50%;
  transform: translate(-50%, 4px);
  padding: 6px 10px; white-space: nowrap;
  border-radius: var(--radius-sm);
  background: var(--text-primary); color: var(--bg-void);
  font: 12px/1.3 var(--font-ui);
  opacity: 0; pointer-events: none;
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}
.ss-tooltip-bubble__tip::after {
  content: ""; position: absolute; top: 100%; left: 50%; margin-left: -5px;
  border: 5px solid transparent; border-top-color: var(--text-primary);
}
.ss-tooltip-bubble:hover .ss-tooltip-bubble__tip,
.ss-tooltip-bubble:focus-within .ss-tooltip-bubble__tip,
.ss-tooltip-bubble[data-open] .ss-tooltip-bubble__tip { opacity: 1; transform: translate(-50%, 0); }
`,B1=`{
  "id": "tooltip-bubble",
  "kind": "tooltip",
  "title": {
    "en": "Bubble tooltip",
    "fr": "Infobulle",
    "es": "Tooltip burbuja"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "hint"
  ]
}
`,W1=`<span class="ss-tooltip-panel" data-open><span class="ss-tooltip-panel__trigger" tabindex="0" aria-describedby="tip-panel">Vault</span><span class="ss-tooltip-panel__tip" id="tip-panel" role="tooltip"><strong>Vault</strong>A separate store of memories, one per part of your life.</span></span>
`,V1=`.ss-tooltip-panel {
  box-sizing: border-box; position: relative; display: inline-block; margin-bottom: 92px; font-family: var(--font-ui); }
.ss-tooltip-panel__trigger {
  color: var(--text-accent); font: 600 14px/1 var(--font-ui);
  text-decoration: underline dotted; text-underline-offset: 4px; cursor: help;
}
.ss-tooltip-panel__tip {
  position: absolute; top: calc(100% + 10px); left: 50%;
  width: 200px; transform: translateX(-50%); padding: var(--space-md);
  border: 1px solid var(--border-accent); border-radius: var(--radius-md);
  background: var(--bg-surface); box-shadow: var(--shadow-card);
  color: var(--text-secondary); font: 12px/1.45 var(--font-ui);
  opacity: 0; pointer-events: none; transition: opacity var(--transition-fast);
}
.ss-tooltip-panel__tip strong { display: block; margin-bottom: 4px; color: var(--text-primary); font-size: 13px; }
.ss-tooltip-panel:hover .ss-tooltip-panel__tip,
.ss-tooltip-panel:focus-within .ss-tooltip-panel__tip,
.ss-tooltip-panel[data-open] .ss-tooltip-panel__tip { opacity: 1; }
`,G1=`{
  "id": "tooltip-panel",
  "kind": "tooltip",
  "title": {
    "en": "Panel tooltip",
    "fr": "Infobulle panneau",
    "es": "Tooltip panel"
  },
  "license": "MIT",
  "author": "Mnemosyne OS",
  "tier": "free",
  "tags": [
    "hint",
    "rich"
  ]
}
`;var K1=new Set(["--accent","--accent-dim","--accent-glow","--accent-border","--bg-void","--bg-surface","--bg-panel","--bg-card","--bg-hover","--status-active","--status-idle","--status-hibernating","--status-overload","--status-warning","--text-primary","--text-secondary","--text-muted","--text-accent","--font-mono","--font-ui","--space-xs","--space-sm","--space-md","--space-lg","--space-xl","--space-2xl","--radius-sm","--radius-md","--radius-lg","--border-accent","--border-subtle","--border-overload","--shadow-panel","--shadow-card","--shadow-accent","--shadow-overload","--transition-fast","--transition-normal","--transition-slow","--titlebar-height","--panel-left-width","--panel-right-width"]);function Ai(e){if(typeof e!="object"||e===null)return{ok:!1,error:"Manifest must be a JSON object"};const n=e;if(typeof n.id!="string"||!n.id.trim())return{ok:!1,error:'Missing or invalid "id" field (must be non-empty string)'};if(/\s/.test(n.id))return{ok:!1,error:`"id" must not contain spaces: "${n.id}"`};if(n.id==="mnemo-default")return{ok:!1,error:'"mnemo-default" is a reserved skin ID and cannot be overridden'};if(typeof n.name!="string"||!n.name.trim())return{ok:!1,error:'Missing or invalid "name" field'};if(typeof n.version!="string")return{ok:!1,error:'Missing or invalid "version" field'};if(typeof n.tokens!="object"||n.tokens===null||Array.isArray(n.tokens))return{ok:!1,error:'"tokens" must be a JSON object'};const t=n.tokens;for(const[r,s]of Object.entries(t)){if(!r.startsWith("--"))return{ok:!1,error:`Invalid token key "${r}" — must start with "--"`};if(!K1.has(r))return{ok:!1,error:`Unknown token "${r}" — not in the SDK allowlist`};if(typeof s!="string")return{ok:!1,error:`Token "${r}" value must be a string, got ${typeof s}`}}return{ok:!0,skin:{id:n.id.trim(),name:n.name.trim(),version:n.version.trim(),author:typeof n.author=="string"?n.author.trim():void 0,description:typeof n.description=="string"?n.description.trim():void 0,preview:typeof n.preview=="string"?n.preview:void 0,tokens:t}}}const Q1=/^[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$/;function Pd(e){const n=e.trim().replace(/^@/,"");return Q1.test(n)?n:null}function Jl(e){return e.trim().startsWith("@")?Pd(e):null}function q1(e){return`https://github.com/${e}`}function Y1(e,n=20){return`https://github.com/${e}.png?size=${n*2}`}const Fd=["button","card","input","badge","alert","tooltip","menu","table","placeholder","motion","background"],Oo=["style",...Fd,"icons","engine"],Z1={style:"styles",button:"buttons",card:"cards",input:"inputs",badge:"badges",alert:"alerts",tooltip:"tooltips",menu:"menus",table:"tables",placeholder:"placeholders",motion:"motion",background:"backgrounds",icons:"icons",engine:"engines"},X1=/^[a-z0-9]+(?:-[a-z0-9]+)*$/,ec=new Map(Object.entries(Z1).map(([e,n])=>[n,e]));function J1(e){const n=e.replace(/\\/g,"/"),t=n.lastIndexOf("catalog/");return t<0?null:n.slice(t+8)}function sa(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function zd(e){if(!sa(e))return"title: missing";for(const n of["en","fr","es"])if(typeof e[n]!="string"||!e[n].trim())return`title.${n}: missing`;return{en:e.en,fr:e.fr,es:e.es}}function nc(e,n,t){if(e.id!==n)return`id "${String(e.id)}" is not its folder "${n}"`;if(e.kind!==t)return`kind "${String(e.kind)}" is not its folder's "${t}"`;const r=zd(e.title);if(typeof r=="string")return r;if(typeof e.license!="string"||!e.license.trim())return"license: missing";if(typeof e.author!="string"||!e.author.trim())return"author: missing";if(e.tier!=="free"&&e.tier!=="premium")return`tier "${String(e.tier)}" is neither free nor premium`;const s=e.tags===void 0?[]:e.tags;if(!Array.isArray(s)||s.some(o=>typeof o!="string"))return"tags: not a list of words";let a;if(e.github!==void 0){const o=typeof e.github=="string"?Pd(e.github):null;if(!o||o!==e.github)return`github "${String(e.github)}" is not a GitHub username`;a=o}return{title:r,license:e.license,author:e.author,tier:e.tier,tags:s,...a?{github:a}:{}}}function Ao(e,n){if(e===void 0)return`${n}: missing`;try{const t=JSON.parse(e);return sa(t)?t:`${n}: not an object`}catch(t){return`${n}: ${t instanceof Error?t.message:String(t)}`}}const ev=/<script|\son[a-z]+\s*=|javascript:|<foreignObject/i;function nv(e){if(e===void 0)return[];const n=Ao(e,"samples.json");if(typeof n=="string")return n;if(!Array.isArray(n.samples))return"samples.json: no samples list";const t=[];for(const r of n.samples){if(!sa(r)||typeof r.name!="string"||typeof r.svg!="string")return"samples.json: a sample without name or svg";const s=r.svg.trim();if(!s.startsWith("<svg")||!s.endsWith("</svg>"))return`samples.json: ${r.name} is not one <svg>`;if(ev.test(s))return`samples.json: ${r.name} holds something that runs`;t.push({name:r.name,svg:s})}return t}function tv(e,n,t){var i;if(!X1.test(n))return`id "${n}" is not lowercase words joined by dashes`;if(e==="style"){const l=Ao(t.get("style.json"),"style.json");if(typeof l=="string")return l;const c=nc(l,n,e);if(typeof c=="string")return c;const d=Ai(l.manifest);if(!d.ok)return`manifest: ${d.error}`;const u=d.skin;return u.id!==n?`manifest.id "${u.id}" is not its folder "${n}"`:{...c,id:n,kind:e,manifest:u}}const r=Ao(t.get("entry.json"),"entry.json");if(typeof r=="string")return r;const s=nc(r,n,e);if(typeof s=="string")return s;if(e==="icons"||e==="engine"){if(typeof r.homepage!="string"||!r.homepage.startsWith("https://"))return"homepage: not an https address";const l=r.packages;if(!sa(l)||Object.keys(l).length===0||Object.values(l).some(u=>typeof u!="string"||!u.trim()))return"packages: not a list of npm packages";if(e==="engine"){const u=zd(r.use);return typeof u=="string"?u.replace(/^title/,"use"):{...s,id:n,kind:e,homepage:r.homepage,packages:l,use:u}}const c=nv(t.get("samples.json"));if(typeof c=="string")return c;const d=((i=t.get("LICENSE.txt"))==null?void 0:i.trim())||null;return c.length>0&&!d?"LICENSE.txt: missing next to samples.json":{...s,id:n,kind:e,homepage:r.homepage,packages:l,samples:c,licenseText:d}}const a=t.get("element.css"),o=t.get("demo.html");return a!=null&&a.trim()?o!=null&&o.trim()?{...s,id:n,kind:e,css:a.trim(),html:o.trim()}:"demo.html: missing":"element.css: missing"}function rv(e){const n=new Map,t=[];for(const[i,l]of Object.entries(e)){const c=J1(i),d=(c==null?void 0:c.split("/"))??[];if(d.length!==3){t.push({path:i,reason:"not in a catalog/<kind>/<id>/ folder"});continue}const u=`${d[0]}/${d[1]}`;n.has(u)||n.set(u,new Map),n.get(u).set(d[2],l)}const r=[],s=new Set,a=i=>{const l=ec.get(i.split("/")[0]);return l?Oo.indexOf(l):Oo.length},o=[...n.keys()].sort((i,l)=>a(i)-a(l)||(i<l?-1:i>l?1:0));for(const i of o){const[l,c]=i.split("/"),d=ec.get(l),u=`catalog/${i}`;if(!d){t.push({path:u,reason:`"${l}" is not a kind of the catalogue`});continue}const g=tv(d,c,n.get(i));if(typeof g=="string"){t.push({path:u,reason:g});continue}if(s.has(g.id)){t.push({path:u,reason:`id "${g.id}" is already taken by another entry`});continue}s.add(g.id),r.push(g)}return{entries:r,refused:t}}function sv(e){return Fd.includes(e)}const av=Object.assign({"../../catalog/alerts/alert-banner/demo.html":lg,"../../catalog/alerts/alert-banner/element.css":cg,"../../catalog/alerts/alert-banner/entry.json":ug,"../../catalog/alerts/alert-stripe/demo.html":dg,"../../catalog/alerts/alert-stripe/element.css":pg,"../../catalog/alerts/alert-stripe/entry.json":fg,"../../catalog/backgrounds/bg-grid/demo.html":mg,"../../catalog/backgrounds/bg-grid/element.css":gg,"../../catalog/backgrounds/bg-grid/entry.json":hg,"../../catalog/backgrounds/bg-mesh/demo.html":vg,"../../catalog/backgrounds/bg-mesh/element.css":yg,"../../catalog/backgrounds/bg-mesh/entry.json":bg,"../../catalog/backgrounds/bg-radial/demo.html":xg,"../../catalog/backgrounds/bg-radial/element.css":kg,"../../catalog/backgrounds/bg-radial/entry.json":_g,"../../catalog/badges/badge-count/demo.html":wg,"../../catalog/badges/badge-count/element.css":Sg,"../../catalog/badges/badge-count/entry.json":Ig,"../../catalog/badges/badge-dot/demo.html":Cg,"../../catalog/badges/badge-dot/element.css":Mg,"../../catalog/badges/badge-dot/entry.json":Eg,"../../catalog/badges/badge-soft/demo.html":Tg,"../../catalog/badges/badge-soft/element.css":Ng,"../../catalog/badges/badge-soft/entry.json":jg,"../../catalog/buttons/btn-bracket/demo.html":Og,"../../catalog/buttons/btn-bracket/element.css":Ag,"../../catalog/buttons/btn-bracket/entry.json":Ug,"../../catalog/buttons/btn-elastic/demo.html":Lg,"../../catalog/buttons/btn-elastic/element.css":Rg,"../../catalog/buttons/btn-elastic/entry.json":Pg,"../../catalog/buttons/btn-ghost/demo.html":Fg,"../../catalog/buttons/btn-ghost/element.css":zg,"../../catalog/buttons/btn-ghost/entry.json":Dg,"../../catalog/buttons/btn-glow/demo.html":Hg,"../../catalog/buttons/btn-glow/element.css":$g,"../../catalog/buttons/btn-glow/entry.json":Bg,"../../catalog/buttons/btn-pill/demo.html":Wg,"../../catalog/buttons/btn-pill/element.css":Vg,"../../catalog/buttons/btn-pill/entry.json":Gg,"../../catalog/buttons/btn-press/demo.html":Kg,"../../catalog/buttons/btn-press/element.css":Qg,"../../catalog/buttons/btn-press/entry.json":qg,"../../catalog/buttons/btn-shimmer/demo.html":Yg,"../../catalog/buttons/btn-shimmer/element.css":Zg,"../../catalog/buttons/btn-shimmer/entry.json":Xg,"../../catalog/buttons/btn-solid/demo.html":Jg,"../../catalog/buttons/btn-solid/element.css":e0,"../../catalog/buttons/btn-solid/entry.json":n0,"../../catalog/cards/card-basic/demo.html":t0,"../../catalog/cards/card-basic/element.css":r0,"../../catalog/cards/card-basic/entry.json":s0,"../../catalog/cards/card-beam/demo.html":a0,"../../catalog/cards/card-beam/element.css":o0,"../../catalog/cards/card-beam/entry.json":i0,"../../catalog/cards/card-media/demo.html":l0,"../../catalog/cards/card-media/element.css":c0,"../../catalog/cards/card-media/entry.json":u0,"../../catalog/cards/card-spotlight/demo.html":d0,"../../catalog/cards/card-spotlight/element.css":p0,"../../catalog/cards/card-spotlight/entry.json":f0,"../../catalog/cards/card-stat/demo.html":m0,"../../catalog/cards/card-stat/element.css":g0,"../../catalog/cards/card-stat/entry.json":h0,"../../catalog/engines/motion/entry.json":v0,"../../catalog/engines/react-spring/entry.json":y0,"../../catalog/engines/sonner/entry.json":b0,"../../catalog/engines/use-gesture/entry.json":x0,"../../catalog/engines/vaul/entry.json":k0,"../../catalog/icons/heroicons/LICENSE.txt":_0,"../../catalog/icons/heroicons/entry.json":w0,"../../catalog/icons/heroicons/samples.json":S0,"../../catalog/icons/lucide/LICENSE.txt":I0,"../../catalog/icons/lucide/entry.json":C0,"../../catalog/icons/lucide/samples.json":M0,"../../catalog/icons/phosphor/LICENSE.txt":E0,"../../catalog/icons/phosphor/entry.json":T0,"../../catalog/icons/phosphor/samples.json":N0,"../../catalog/icons/tabler/LICENSE.txt":j0,"../../catalog/icons/tabler/entry.json":O0,"../../catalog/icons/tabler/samples.json":A0,"../../catalog/inputs/field-text/demo.html":U0,"../../catalog/inputs/field-text/element.css":L0,"../../catalog/inputs/field-text/entry.json":R0,"../../catalog/inputs/segmented/demo.html":P0,"../../catalog/inputs/segmented/element.css":F0,"../../catalog/inputs/segmented/entry.json":z0,"../../catalog/inputs/switch/demo.html":D0,"../../catalog/inputs/switch/element.css":H0,"../../catalog/inputs/switch/entry.json":$0,"../../catalog/menus/menu-dropdown/demo.html":B0,"../../catalog/menus/menu-dropdown/element.css":W0,"../../catalog/menus/menu-dropdown/entry.json":V0,"../../catalog/menus/menu-sidebar/demo.html":G0,"../../catalog/menus/menu-sidebar/element.css":K0,"../../catalog/menus/menu-sidebar/entry.json":Q0,"../../catalog/motion/fade-up/demo.html":q0,"../../catalog/motion/fade-up/element.css":Y0,"../../catalog/motion/fade-up/entry.json":Z0,"../../catalog/motion/gradient-text/demo.html":X0,"../../catalog/motion/gradient-text/element.css":J0,"../../catalog/motion/gradient-text/entry.json":eh,"../../catalog/motion/icon-ring/demo.html":nh,"../../catalog/motion/icon-ring/element.css":th,"../../catalog/motion/icon-ring/entry.json":rh,"../../catalog/motion/marquee/demo.html":sh,"../../catalog/motion/marquee/element.css":ah,"../../catalog/motion/marquee/entry.json":oh,"../../catalog/motion/pulse-ring/demo.html":ih,"../../catalog/motion/pulse-ring/element.css":lh,"../../catalog/motion/pulse-ring/entry.json":ch,"../../catalog/motion/scale-in/demo.html":uh,"../../catalog/motion/scale-in/element.css":dh,"../../catalog/motion/scale-in/entry.json":ph,"../../catalog/motion/shimmer/demo.html":fh,"../../catalog/motion/shimmer/element.css":mh,"../../catalog/motion/shimmer/entry.json":gh,"../../catalog/motion/slide-in/demo.html":hh,"../../catalog/motion/slide-in/element.css":vh,"../../catalog/motion/slide-in/entry.json":yh,"../../catalog/motion/spinner/demo.html":bh,"../../catalog/motion/spinner/element.css":xh,"../../catalog/motion/spinner/entry.json":kh,"../../catalog/motion/stagger-list/demo.html":_h,"../../catalog/motion/stagger-list/element.css":wh,"../../catalog/motion/stagger-list/entry.json":Sh,"../../catalog/motion/typing-dots/demo.html":Ih,"../../catalog/motion/typing-dots/element.css":Ch,"../../catalog/motion/typing-dots/entry.json":Mh,"../../catalog/placeholders/placeholder-card/demo.html":Eh,"../../catalog/placeholders/placeholder-card/element.css":Th,"../../catalog/placeholders/placeholder-card/entry.json":Nh,"../../catalog/placeholders/placeholder-pulse/demo.html":jh,"../../catalog/placeholders/placeholder-pulse/element.css":Oh,"../../catalog/placeholders/placeholder-pulse/entry.json":Ah,"../../catalog/styles/brutal/style.json":Uh,"../../catalog/styles/daisy-abyss/style.json":Lh,"../../catalog/styles/daisy-acid/style.json":Rh,"../../catalog/styles/daisy-aqua/style.json":Ph,"../../catalog/styles/daisy-autumn/style.json":Fh,"../../catalog/styles/daisy-black/style.json":zh,"../../catalog/styles/daisy-bumblebee/style.json":Dh,"../../catalog/styles/daisy-business/style.json":Hh,"../../catalog/styles/daisy-caramellatte/style.json":$h,"../../catalog/styles/daisy-cmyk/style.json":Bh,"../../catalog/styles/daisy-coffee/style.json":Wh,"../../catalog/styles/daisy-corporate/style.json":Vh,"../../catalog/styles/daisy-cupcake/style.json":Gh,"../../catalog/styles/daisy-cyberpunk/style.json":Kh,"../../catalog/styles/daisy-dark/style.json":Qh,"../../catalog/styles/daisy-dim/style.json":qh,"../../catalog/styles/daisy-dracula/style.json":Yh,"../../catalog/styles/daisy-emerald/style.json":Zh,"../../catalog/styles/daisy-fantasy/style.json":Xh,"../../catalog/styles/daisy-forest/style.json":Jh,"../../catalog/styles/daisy-garden/style.json":e1,"../../catalog/styles/daisy-halloween/style.json":n1,"../../catalog/styles/daisy-lemonade/style.json":t1,"../../catalog/styles/daisy-light/style.json":r1,"../../catalog/styles/daisy-lofi/style.json":s1,"../../catalog/styles/daisy-luxury/style.json":a1,"../../catalog/styles/daisy-night/style.json":o1,"../../catalog/styles/daisy-nord/style.json":i1,"../../catalog/styles/daisy-pastel/style.json":l1,"../../catalog/styles/daisy-retro/style.json":c1,"../../catalog/styles/daisy-silk/style.json":u1,"../../catalog/styles/daisy-sunset/style.json":d1,"../../catalog/styles/daisy-synthwave/style.json":p1,"../../catalog/styles/daisy-valentine/style.json":f1,"../../catalog/styles/daisy-winter/style.json":m1,"../../catalog/styles/daisy-wireframe/style.json":g1,"../../catalog/styles/hud-night/style.json":h1,"../../catalog/styles/liquid-glass/style.json":v1,"../../catalog/styles/minimal-light/style.json":y1,"../../catalog/styles/mnemosyne-dark/style.json":b1,"../../catalog/styles/mnemosyne-glass/style.json":x1,"../../catalog/styles/mnemosyne-light/style.json":k1,"../../catalog/styles/mnemosyne-tokyo-night/style.json":_1,"../../catalog/styles/neon-pop/style.json":w1,"../../catalog/styles/paper/style.json":S1,"../../catalog/styles/skeleton-crimson/style.json":I1,"../../catalog/styles/skeleton-gold-nouveau/style.json":C1,"../../catalog/styles/skeleton-hamlindigo/style.json":M1,"../../catalog/styles/skeleton-modern/style.json":E1,"../../catalog/styles/skeleton-rocket/style.json":T1,"../../catalog/styles/skeleton-sahara/style.json":N1,"../../catalog/styles/skeleton-seafoam/style.json":j1,"../../catalog/styles/skeleton-seasonal/style.json":O1,"../../catalog/styles/skeleton-skeleton/style.json":A1,"../../catalog/styles/skeleton-vintage/style.json":U1,"../../catalog/tables/table-lined/demo.html":L1,"../../catalog/tables/table-lined/element.css":R1,"../../catalog/tables/table-lined/entry.json":P1,"../../catalog/tables/table-zebra/demo.html":F1,"../../catalog/tables/table-zebra/element.css":z1,"../../catalog/tables/table-zebra/entry.json":D1,"../../catalog/tooltips/tooltip-bubble/demo.html":H1,"../../catalog/tooltips/tooltip-bubble/element.css":$1,"../../catalog/tooltips/tooltip-bubble/entry.json":B1,"../../catalog/tooltips/tooltip-panel/demo.html":W1,"../../catalog/tooltips/tooltip-panel/element.css":V1,"../../catalog/tooltips/tooltip-panel/entry.json":G1});let rs=null;function ov(){if(!rs){rs=rv(av);for(const e of rs.refused)console.warn(`[style-shelf] catalogue entry refused: ${e.path}: ${e.reason}`)}return rs}const iv={owner:"Mnemosyne-OS",repo:"style-shelf",branch:"main",catalogDir:"catalog"},tc="style-shelf.contributions",lv=60*60*1e3,cv=15e3;function uv(e){if(!Array.isArray(e))return null;const n=[];for(const t of e){if(typeof t!="object"||t===null)continue;const r=t;if(typeof r.merged_at!="string"||typeof r.number!="number"||typeof r.title!="string"||typeof r.html_url!="string")continue;const s=r.user;n.push({number:r.number,title:r.title,author:typeof(s==null?void 0:s.login)=="string"?s.login:"?",mergedAt:r.merged_at,url:r.html_url})}return n.sort((t,r)=>t.mergedAt<r.mergedAt?1:t.mergedAt>r.mergedAt?-1:0)}function dv(e){if(!e)return null;try{const n=JSON.parse(e),t=pv(n.items);return typeof n.at=="string"&&t?{at:n.at,items:t}:null}catch(n){return console.warn("[style-shelf] contributions cache unreadable:",n instanceof Error?n.message:n),null}}function pv(e){return Array.isArray(e)&&e.every(n=>n&&typeof n.number=="number"&&typeof n.title=="string"&&typeof n.mergedAt=="string"&&typeof n.url=="string")?e:null}async function fv(e,n){const t=dv(n.read()),r=n.now();if(t&&r.getTime()-Date.parse(t.at)<lv)return{kind:"list",items:t.items,at:t.at,stale:!1};const s=new AbortController,a=setTimeout(()=>s.abort(),cv);let o;try{const i=await n.fetch(`https://api.github.com/repos/${encodeURIComponent(e.owner)}/${encodeURIComponent(e.repo)}/pulls?state=closed&per_page=50`,{signal:s.signal,headers:{Accept:"application/vnd.github+json"}});if(i.ok){const l=uv(await i.json());if(l){const c=r.toISOString();return n.write(JSON.stringify({at:c,items:l})),{kind:"list",items:l,at:c,stale:!1}}o="not a list of pull requests"}else o=`HTTP ${i.status}`}catch(i){o=s.signal.aborted?"TIMEOUT":i instanceof Error?i.message:String(i)}finally{clearTimeout(a)}return console.warn(`[style-shelf] contributions not read: ${o}`),t?{kind:"list",items:t.items,at:t.at,stale:!0}:{kind:"unavailable",reason:o}}const Dd={appTitle:"Style Shelf",host:{standalone:"Browser",foreign:"Embedded",mnemosyne:"Mnemosyne OS",pending:"Looking for Mnemosyne"},kinds:{label:"Kinds",all:"All",favorites:"Favourites",style:"Styles",button:"Buttons",card:"Cards",input:"Fields",badge:"Badges",alert:"Alerts",tooltip:"Tooltips",menu:"Menus",table:"Tables",placeholder:"Loading skeletons",motion:"Motion",background:"Backgrounds",icons:"Icons",engine:"Engines"},kindOne:{style:"Style",button:"Button",card:"Card",input:"Field",badge:"Badge",alert:"Alert",tooltip:"Tooltip",menu:"Menu",table:"Table",placeholder:"Loading skeleton",motion:"Motion",background:"Background",icons:"Icon pack",engine:"Animation engine"},view:{label:"Tile size",small:"Overview",medium:"Medium tiles",large:"Large tiles"},tile:{add:"Add {name} to the cart",remove:"Take {name} out of the cart",choose:"Choose the style {name}",chosen:"Chosen style",premium:"Premium",preview:"Preview of {name}",hover:"Hover to play",adapt:"Adapt {name}",edit:"Edit {name}",personal:"Mine",loading:"Loading",proposedBy:"Proposed by {name} on GitHub",favorite:"Add {name} to the favourites",unfavorite:"Take {name} out of the favourites",repainting:"Applying the style, previews left: {n}"},cart:{open:"Cart",title:"Cart",close:"Close the cart",style:"Style",items:"Elements",licenses:"Licences",empty:"Empty",needStyle:"Choose a style",remove:"Take {name} out",write:"Write into the project",download:"Download the kit",copyBrief:"Copy the brief",copied:"Copied",copyFailed:"Copy refused: {detail}",writing:"Writing",folder:"Folder",files:"Files",ide:"IDE",written:"{count} files written",writeFailed:"{step} not written: {detail}",writtenBefore:"{count} files written before it",copyInstruction:"Copy the instruction",instruction:"Read style-shelf/BRIEF.md and apply this kit to the project."},catalog:{refused:"{count} entries refused",dropped:"{count} items left the catalogue, taken out of the cart",empty:"Nothing here"},studio:{title:"Atelier",name:"Name",author:"Author",authorHint:"Name, or @handle to be credited with your GitHub picture",basedOn:"from {name}",keep:"Keep",export:"Export",propose:"Propose",delete:"Delete",confirmDelete:"Confirm delete",close:"Close the atelier",groupsLabel:"Token groups",newName:"My {name}",groups:{accent:"Accent",grounds:"Grounds",text:"Text",shapes:"Shapes",depth:"Depth",motion:"Motion",status:"Status"},pairs:{text:"Text",muted:"Muted text",accentText:"Accent text",onAccent:"Text on accent"},ratio:"{ratio}:1, {min} expected",unmeasurable:"not measurable",invalid:"Not kept: {detail}"},personal:{import:"Import a style",imported:"Style {name} imported",importFailed:"Import refused: {detail}",restored:"{count} personal styles restored from Mnemosyne OS",refused:"{count} personal styles unreadable, left out",mirrorFailed:"Mnemosyne OS did not keep its copy: {detail}"},contrib:{tab:"Contributions",catalogTab:"Catalogue",views:"Views",loading:"Reading the pull requests",unavailable:"List unavailable: {detail}",stale:"List of {date}",empty:"No contribution merged yet",by:"by {author}",open:"Open pull request #{number}",noAuthor:"An author is needed to propose",tooLong:"Too long to propose by link ({size} characters)",openFailed:"GitHub did not open: {detail}",openHere:"Open on GitHub"},premium:{label:"Premium"},page:{open:"Whole-page preview",title:"Whole-page preview",copyTitle:"What you copy",close:"Close the preview",frame:"A page drawn in the style",briefLabel:"The brief",copy:"Copy",fromCart:"The {count} elements of the cart",allElements:"Every element of the catalogue"},explain:{title:"What happens",write:"choose the folder of the project, as it is: no folder to create. Style Shelf creates {dir} in it by itself, with four files:",files:{kitJson:"the style and the elements, with their code and licences, as data",tokensCss:"the colours, radii, shadows and fonts of the style",elementsCss:"the CSS of each element in the cart",briefMd:"the instruction for the IDE agent (Claude Code, Cursor…), which adapts the kit to the project"},nothingElse:"Nothing else in the project is read, changed or deleted. Writing again replaces these four files.",permission:"The first time, Mnemosyne OS asks for the files permission: its wording is the same for every app that touches files. Refusing it writes nothing.",download:"saves kit.json in the downloads folder.",copy:"shows the page drawn in the theme beside the brief, then copies the brief to paste in the IDE. Needs no permission."},hostCopy:{themes:"Themes restored from Mnemosyne OS: {count}",favorites:"Favourites restored from Mnemosyne OS: {count}",unreadable:"The copy kept by Mnemosyne OS could not be read: changes stay on this page only ({detail})"},themes:{title:"My themes",name:"Theme name",save:"Save as a theme",update:"Update this theme",none:"No theme yet",summary:"{style} · elements: {count}",load:"Load {name}",delete:"Delete {name}",confirm:"Confirm: delete {name}",needStyle:"A theme needs a style",styleGone:"style no longer in the catalogue",dropped:"Items of this theme gone from the catalogue: {count}",refused:"Stored themes that could not be read: {count}"}},mv={appTitle:"Style Shelf",host:{standalone:"Navigateur",foreign:"Intégrée",mnemosyne:"Mnemosyne OS",pending:"Recherche de Mnemosyne"},kinds:{label:"Catégories",all:"Tout",favorites:"Favoris",style:"Styles",button:"Boutons",card:"Cartes",input:"Champs",badge:"Badges",alert:"Alertes",tooltip:"Infobulles",menu:"Menus",table:"Tableaux",placeholder:"Squelettes de chargement",motion:"Motion",background:"Fonds",icons:"Icônes",engine:"Moteurs"},kindOne:{style:"Style",button:"Bouton",card:"Carte",input:"Champ",badge:"Badge",alert:"Alerte",tooltip:"Infobulle",menu:"Menu",table:"Tableau",placeholder:"Squelette de chargement",motion:"Motion",background:"Fond",icons:"Pack d'icônes",engine:"Moteur d'animation"},view:{label:"Taille des tuiles",small:"Vue d'ensemble",medium:"Tuiles moyennes",large:"Grandes tuiles"},tile:{add:"Ajouter {name} au panier",remove:"Retirer {name} du panier",choose:"Choisir le style {name}",chosen:"Style choisi",premium:"Premium",preview:"Aperçu de {name}",hover:"Survoler pour jouer",adapt:"Adapter {name}",edit:"Modifier {name}",personal:"Perso",loading:"Chargement",proposedBy:"Proposé par {name} sur GitHub",favorite:"Ajouter {name} aux favoris",unfavorite:"Retirer {name} des favoris",repainting:"Application du style, aperçus restants : {n}"},cart:{open:"Panier",title:"Panier",close:"Fermer le panier",style:"Style",items:"Éléments",licenses:"Licences",empty:"Vide",needStyle:"Choisir un style",remove:"Retirer {name}",write:"Écrire dans le projet",download:"Télécharger le kit",copyBrief:"Copier le brief",copied:"Copié",copyFailed:"Copie refusée : {detail}",writing:"Écriture",folder:"Dossier",files:"Fichiers",ide:"IDE",written:"{count} fichiers écrits",writeFailed:"{step} non écrit : {detail}",writtenBefore:"{count} fichiers écrits avant",copyInstruction:"Copier la consigne",instruction:"Lire style-shelf/BRIEF.md et appliquer ce kit au projet."},catalog:{refused:"{count} entrées refusées",dropped:"{count} éléments sortis du catalogue, retirés du panier",empty:"Rien ici"},studio:{title:"Atelier",name:"Nom",author:"Auteur",authorHint:"Nom, ou @pseudo pour être crédité avec sa photo GitHub",basedOn:"à partir de {name}",keep:"Garder",export:"Exporter",propose:"Proposer",delete:"Supprimer",confirmDelete:"Confirmer",close:"Fermer l'atelier",groupsLabel:"Groupes de jetons",newName:"Mon {name}",groups:{accent:"Accent",grounds:"Fonds",text:"Texte",shapes:"Formes",depth:"Relief",motion:"Mouvement",status:"Statuts"},pairs:{text:"Texte",muted:"Texte discret",accentText:"Texte d'accent",onAccent:"Texte sur l'accent"},ratio:"{ratio}:1, {min} attendu",unmeasurable:"non mesurable",invalid:"Non gardé : {detail}"},personal:{import:"Importer un style",imported:"Style {name} importé",importFailed:"Import refusé : {detail}",restored:"{count} styles personnels restaurés depuis Mnemosyne OS",refused:"{count} styles personnels illisibles, laissés de côté",mirrorFailed:"Mnemosyne OS n'a pas gardé sa copie : {detail}"},contrib:{tab:"Contributions",catalogTab:"Catalogue",views:"Vues",loading:"Lecture des pull requests",unavailable:"Liste indisponible : {detail}",stale:"Liste du {date}",empty:"Aucune contribution fusionnée",by:"par {author}",open:"Ouvrir la pull request #{number}",noAuthor:"Un auteur est nécessaire pour proposer",tooLong:"Trop long pour une proposition par lien ({size} caractères)",openFailed:"GitHub ne s'est pas ouvert : {detail}",openHere:"Ouvrir sur GitHub"},premium:{label:"Premium"},page:{open:"Aperçu de la page entière",title:"Aperçu de la page entière",copyTitle:"Ce que vous copiez",close:"Fermer l'aperçu",frame:"Une page dessinée dans le style",briefLabel:"Le brief",copy:"Copier",fromCart:"Les {count} éléments du panier",allElements:"Tous les éléments du catalogue"},explain:{title:"Ce qui va se passer",write:"choisir le dossier du projet tel qu’il est : aucun dossier à créer. Style Shelf y crée {dir} tout seul, avec quatre fichiers :",files:{kitJson:"le style et les éléments, avec leur code et leurs licences, en données",tokensCss:"les couleurs, rayons, ombres et polices du style",elementsCss:"le CSS de chaque élément du panier",briefMd:"la consigne pour l'agent de l'IDE (Claude Code, Cursor…), qui adapte le kit au projet"},nothingElse:"Rien d’autre du projet n’est lu, modifié ni supprimé. Écrire à nouveau remplace ces quatre fichiers.",permission:"La première fois, Mnemosyne OS demande la permission des fichiers : son texte est le même pour toutes les apps qui touchent aux fichiers. La refuser n’écrit rien.",download:"enregistre kit.json dans le dossier des téléchargements.",copy:"montre la page dessinée dans le thème à côté du brief, puis copie le brief à coller dans l'IDE. Aucune permission."},hostCopy:{themes:"Thèmes restaurés depuis Mnemosyne OS : {count}",favorites:"Favoris restaurés depuis Mnemosyne OS : {count}",unreadable:"La copie gardée par Mnemosyne OS est illisible : les changements restent sur cette page seulement ({detail})"},themes:{title:"Mes thèmes",name:"Nom du thème",save:"Enregistrer comme thème",update:"Mettre à jour ce thème",none:"Aucun thème pour le moment",summary:"{style} · éléments : {count}",load:"Charger {name}",delete:"Supprimer {name}",confirm:"Confirmer : supprimer {name}",needStyle:"Un thème demande un style",styleGone:"style sorti du catalogue",dropped:"Éléments de ce thème sortis du catalogue : {count}",refused:"Thèmes enregistrés illisibles : {count}"}},gv={appTitle:"Style Shelf",host:{standalone:"Navegador",foreign:"Integrada",mnemosyne:"Mnemosyne OS",pending:"Buscando Mnemosyne"},kinds:{label:"Categorías",all:"Todo",favorites:"Favoritos",style:"Estilos",button:"Botones",card:"Tarjetas",input:"Campos",badge:"Insignias",alert:"Alertas",tooltip:"Tooltips",menu:"Menús",table:"Tablas",placeholder:"Esqueletos de carga",motion:"Motion",background:"Fondos",icons:"Iconos",engine:"Motores"},kindOne:{style:"Estilo",button:"Botón",card:"Tarjeta",input:"Campo",badge:"Insignia",alert:"Alerta",tooltip:"Tooltip",menu:"Menú",table:"Tabla",placeholder:"Esqueleto de carga",motion:"Motion",background:"Fondo",icons:"Pack de iconos",engine:"Motor de animación"},view:{label:"Tamaño de las fichas",small:"Vista general",medium:"Fichas medianas",large:"Fichas grandes"},tile:{add:"Añadir {name} al carrito",remove:"Quitar {name} del carrito",choose:"Elegir el estilo {name}",chosen:"Estilo elegido",premium:"Premium",preview:"Vista previa de {name}",hover:"Pasar el puntero para reproducir",adapt:"Adaptar {name}",edit:"Editar {name}",personal:"Mío",loading:"Cargando",proposedBy:"Propuesto por {name} en GitHub",favorite:"Añadir {name} a favoritos",unfavorite:"Quitar {name} de favoritos",repainting:"Aplicando el estilo, vistas previas restantes: {n}"},cart:{open:"Carrito",title:"Carrito",close:"Cerrar el carrito",style:"Estilo",items:"Elementos",licenses:"Licencias",empty:"Vacío",needStyle:"Elegir un estilo",remove:"Quitar {name}",write:"Escribir en el proyecto",download:"Descargar el kit",copyBrief:"Copiar el brief",copied:"Copiado",copyFailed:"Copia rechazada: {detail}",writing:"Escritura",folder:"Carpeta",files:"Archivos",ide:"IDE",written:"{count} archivos escritos",writeFailed:"{step} no escrito: {detail}",writtenBefore:"{count} archivos escritos antes",copyInstruction:"Copiar la instrucción",instruction:"Leer style-shelf/BRIEF.md y aplicar este kit al proyecto."},catalog:{refused:"{count} entradas rechazadas",dropped:"{count} elementos salieron del catálogo, quitados del carrito",empty:"Nada aquí"},studio:{title:"Taller",name:"Nombre",author:"Autor",authorHint:"Nombre, o @usuario para aparecer con la foto de GitHub",basedOn:"a partir de {name}",keep:"Guardar",export:"Exportar",propose:"Proponer",delete:"Eliminar",confirmDelete:"Confirmar",close:"Cerrar el taller",groupsLabel:"Grupos de tokens",newName:"Mi {name}",groups:{accent:"Acento",grounds:"Fondos",text:"Texto",shapes:"Formas",depth:"Relieve",motion:"Movimiento",status:"Estados"},pairs:{text:"Texto",muted:"Texto discreto",accentText:"Texto de acento",onAccent:"Texto sobre el acento"},ratio:"{ratio}:1, {min} esperado",unmeasurable:"no medible",invalid:"No guardado: {detail}"},personal:{import:"Importar un estilo",imported:"Estilo {name} importado",importFailed:"Importación rechazada: {detail}",restored:"{count} estilos personales restaurados desde Mnemosyne OS",refused:"{count} estilos personales ilegibles, apartados",mirrorFailed:"Mnemosyne OS no guardó su copia: {detail}"},contrib:{tab:"Contribuciones",catalogTab:"Catálogo",views:"Vistas",loading:"Leyendo las pull requests",unavailable:"Lista no disponible: {detail}",stale:"Lista del {date}",empty:"Ninguna contribución fusionada todavía",by:"por {author}",open:"Abrir la pull request #{number}",noAuthor:"Hace falta un autor para proponer",tooLong:"Demasiado largo para proponer por enlace ({size} caracteres)",openFailed:"GitHub no se abrió: {detail}",openHere:"Abrir en GitHub"},premium:{label:"Premium"},page:{open:"Vista previa de página completa",title:"Vista previa de página completa",copyTitle:"Lo que copia",close:"Cerrar la vista previa",frame:"Una página dibujada en el estilo",briefLabel:"El brief",copy:"Copiar",fromCart:"Los {count} elementos del carrito",allElements:"Todos los elementos del catálogo"},explain:{title:"Qué va a pasar",write:"elegir la carpeta del proyecto tal como está: no hay que crear ninguna carpeta. Style Shelf crea {dir} en ella por sí mismo, con cuatro archivos:",files:{kitJson:"el estilo y los elementos, con su código y sus licencias, como datos",tokensCss:"los colores, radios, sombras y fuentes del estilo",elementsCss:"el CSS de cada elemento del carrito",briefMd:"la instrucción para el agente del IDE (Claude Code, Cursor…), que adapta el kit al proyecto"},nothingElse:"Nada más del proyecto se lee, cambia ni borra. Escribir de nuevo reemplaza estos cuatro archivos.",permission:"La primera vez, Mnemosyne OS pide el permiso de archivos: su texto es el mismo para todas las apps que tocan archivos. Rechazarlo no escribe nada.",download:"guarda kit.json en la carpeta de descargas.",copy:"muestra la página dibujada en el tema junto al brief, y luego copia el brief para pegarlo en el IDE. Sin permiso."},hostCopy:{themes:"Temas restaurados desde Mnemosyne OS: {count}",favorites:"Favoritos restaurados desde Mnemosyne OS: {count}",unreadable:"La copia guardada por Mnemosyne OS no se pudo leer: los cambios se quedan solo en esta página ({detail})"},themes:{title:"Mis temas",name:"Nombre del tema",save:"Guardar como tema",update:"Actualizar este tema",none:"Aún no hay temas",summary:"{style} · elementos: {count}",load:"Cargar {name}",delete:"Eliminar {name}",confirm:"Confirmar: eliminar {name}",needStyle:"Un tema necesita un estilo",styleGone:"estilo fuera del catálogo",dropped:"Elementos de este tema fuera del catálogo: {count}",refused:"Temas guardados ilegibles: {count}"}},hv={en:Dd,fr:mv,es:gv};function vv(e){return hv[(e??"en").slice(0,2).toLowerCase()]??Dd}function O(e,n){return e.replace(/\{(\w+)\}/g,(t,r)=>r in n?String(n[r]):t)}function An(e,n){const t=(n??"en").slice(0,2).toLowerCase();return t==="fr"?e.fr:t==="es"?e.es:e.en}const yv={cart:p.jsxs(p.Fragment,{children:[p.jsx("path",{d:"M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L19.5 8H6.2"}),p.jsx("circle",{cx:"9",cy:"19",r:"1.4"}),p.jsx("circle",{cx:"17",cy:"19",r:"1.4"})]}),plus:p.jsx("path",{d:"M12 5v14M5 12h14"}),check:p.jsx("path",{d:"M5 12.5l4.5 4.5L19 7.5"}),close:p.jsx("path",{d:"M6 6l12 12M18 6L6 18"}),grid9:p.jsx(p.Fragment,{children:[4,10,16].flatMap(e=>[4,10,16].map(n=>p.jsx("rect",{x:n,y:e,width:"4",height:"4"},`${n}-${e}`)))}),grid4:p.jsx(p.Fragment,{children:[4,13].flatMap(e=>[4,13].map(n=>p.jsx("rect",{x:n,y:e,width:"7",height:"7"},`${n}-${e}`)))}),grid1:p.jsx("rect",{x:"4",y:"4",width:"16",height:"16"}),sliders:p.jsxs(p.Fragment,{children:[p.jsx("path",{d:"M5 4v16M12 4v16M19 4v16"}),p.jsx("circle",{cx:"5",cy:"15",r:"2"}),p.jsx("circle",{cx:"12",cy:"8",r:"2"}),p.jsx("circle",{cx:"19",cy:"13",r:"2"})]}),pen:p.jsx("path",{d:"M4 20l4-1 11-11-3-3L5 16l-1 4zM14 6l3 3"}),upload:p.jsx("path",{d:"M12 16V4M7 9l5-5 5 5M5 20h14"}),eye:p.jsxs(p.Fragment,{children:[p.jsx("path",{d:"M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"}),p.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),star:p.jsx("path",{d:"M12 4l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.4l-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z"}),external:p.jsx("path",{d:"M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"})};function ve({name:e,size:n=18}){return p.jsx("svg",{viewBox:"0 0 24 24",width:n,height:n,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,focusable:"false",children:yv[e]})}function bv({view:e,lang:n,w:t,onOpen:r}){if(e.kind==="loading")return p.jsx("p",{className:"muted empty",role:"status",children:t.contrib.loading});if(e.kind==="unavailable")return p.jsx("p",{className:"error empty",role:"alert",children:O(t.contrib.unavailable,{detail:e.reason})});const s=a=>new Date(a).toLocaleDateString(n,{day:"numeric",month:"short",year:"numeric"});return p.jsxs("section",{className:"contrib",children:[e.stale&&p.jsx("p",{className:"notice",children:O(t.contrib.stale,{date:s(e.at)})}),e.items.length===0?p.jsx("p",{className:"muted empty",children:t.contrib.empty}):p.jsx("ol",{className:"contrib-list",children:e.items.map(a=>p.jsxs("li",{className:"hud",children:[p.jsxs("span",{className:"num",children:["#",a.number]}),p.jsx("span",{className:"contrib-title",children:a.title}),p.jsxs("span",{className:"lab",children:[O(t.contrib.by,{author:a.author})," · ",s(a.mergedAt)]}),p.jsx("button",{type:"button",className:"icon-btn small","aria-label":O(t.contrib.open,{number:a.number}),title:O(t.contrib.open,{number:a.number}),onClick:()=>r(a.url),children:p.jsx(ve,{name:"external",size:14})})]},a.number))})]})}const Uo="style-shelf.personal",Hs="my-",xv="https://unpkg.com/@mnemosyne_os/design-sdk/skin-schema.json";function kv(e){return e.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40).replace(/-+$/g,"")}function Hd(e,n){const t=`${Hs}${kv(e)||"style"}`;if(!n.has(t))return t;let r=2;for(;n.has(`${t}-${r}`);)r+=1;return`${t}-${r}`}function _v(e,n,t,r){const s={};for(const[a,o]of Object.entries(e.manifest.tokens))typeof o=="string"&&(s[a]=o);return{id:Hd(n,t),name:n,author:"",basedOn:e.manifest.id,license:e.license,baseAuthor:e.author,updatedAt:r,tokens:s}}function rc(e,n,t){return{...e,tokens:{...e.tokens,[n]:t}}}function Rr(e){return{id:e.id,name:e.name,version:"1.0.0",author:e.author.trim()||e.baseAuthor,description:`Based on ${e.basedOn} (${e.license}, ${e.baseAuthor}).`,tokens:{...e.tokens}}}function wv(e){const n=Rr(e);return{id:e.id,kind:"style",title:{en:e.name,fr:e.name,es:e.name},license:e.license,author:n.author??e.baseAuthor,tier:"free",tags:["personal"],manifest:n,personal:{basedOn:e.basedOn,updatedAt:e.updatedAt}}}function $d(e){if(!e.name.trim())return"name: missing";const n=Ai(Rr(e));return n.ok?null:n.error}function Bd(e){const n={...e};for(const t of["--border-subtle","--border-accent"]){const r=/^\s*[\d.]+px\s+(?:solid|dashed|dotted|double)\s+(.+)$/.exec(n[t]??"");r&&(n[t]=r[1].trim())}return n}function Lo(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Sv(e){if(!Lo(e))return null;const{id:n,name:t,author:r,basedOn:s,license:a,baseAuthor:o,updatedAt:i,tokens:l}=e;if(typeof n!="string"||!n.startsWith(Hs)||typeof t!="string"||!t.trim()||typeof s!="string"||typeof a!="string"||typeof o!="string"||typeof i!="string"||!Lo(l)||Object.values(l).some(d=>typeof d!="string"))return null;const c={id:n,name:t,author:typeof r=="string"?r:"",basedOn:s,license:a,baseAuthor:o,updatedAt:i,tokens:Bd(l)};return $d(c)===null?c:null}function Ro(e){if(!e)return{styles:[],refused:0};let n;try{n=JSON.parse(e)}catch(s){return console.warn("[style-shelf] personal styles unreadable:",s instanceof Error?s.message:s),{styles:[],refused:1}}if(!Array.isArray(n))return{styles:[],refused:1};const t=[];let r=0;for(const s of n){const a=Sv(s);if(!a||t.some(o=>o.id===a.id)){r+=1;continue}t.push(a)}return{styles:t,refused:r}}function Wd(e){return JSON.stringify(e)}function Iv(e,n){return e.some(t=>t.id===n.id)?e.map(t=>t.id===n.id?n:t):[n,...e]}function Cv(e){return`${JSON.stringify({$schema:xv,...Rr(e)},null,2)}
`}function Mv(e,n,t,r){let s;try{s=JSON.parse(e)}catch(l){return{error:l instanceof Error?l.message:String(l)}}Lo(s)&&delete s.$schema;const a=Ai(s);if(!a.ok)return{error:a.error};const o=a.skin,i={};for(const[l,c]of Object.entries({...n.manifest.tokens,...o.tokens}))typeof c=="string"&&(i[l]=c);return{id:Hd(o.name,t),name:o.name,author:o.author??"",basedOn:o.id,license:"unknown",baseAuthor:o.author??"unknown",updatedAt:r,tokens:Bd(i)}}const Ev=8e3;function Tv(e){return e.id.startsWith(Hs)?e.id.slice(Hs.length):e.id}function Nv(e){const n=Tv(e),t=e.author.trim(),r={...Rr(e),id:n,author:t},s={id:n,kind:"style",title:{en:e.name,fr:e.name,es:e.name},license:"MIT",author:t,tier:"free",tags:["community"],...Jl(t)?{github:Jl(t)}:{},manifest:r};return{path:`styles/${n}/style.json`,content:`${JSON.stringify(s,null,2)}
`}}function jv(e,n){if(!n.author.trim())return{ok:!1,error:"NO_AUTHOR"};const t=Nv(n),r=`${e.catalogDir.replace(/\/+$/,"")}/${t.path}`,s=`https://github.com/${encodeURIComponent(e.owner)}/${encodeURIComponent(e.repo)}/new/${encodeURIComponent(e.branch)}?filename=${encodeURIComponent(r)}&value=${encodeURIComponent(t.content)}`;return s.length>Ev?{ok:!1,error:"TOO_LONG",size:s.length}:{ok:!0,url:s}}function Ov(){var n;const e=t=>!!t&&t!=="null"&&t!=="file://";try{const t=(n=window.location.ancestorOrigins)==null?void 0:n[0];if(e(t))return t}catch{}try{if(document.referrer){const t=new URL(document.referrer).origin;if(e(t))return t}}catch{}return"*"}var Xe=Ov(),qt=3e5;function Av(){return Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10)}function sc(e){const n=e==null?void 0:e.reason;return n instanceof Error?n:new DOMException("The stream was aborted.","AbortError")}function Uv(e){const n=document.documentElement.style;for(const[t,r]of Object.entries(e))t.startsWith("--")&&n.setProperty(t,r)}function Lv(e,n={}){const t=n.apply!==!1,r=s=>{if(s.source!==window.parent)return;const a=s.data;if(!a||a.type!=="MNEMO_CONFIG_UPDATE")return;t&&(a.theme&&document.documentElement.setAttribute("data-theme",a.theme),a.tokens&&Uv(a.tokens));const o={theme:a.theme,lang:a.lang,tokens:a.tokens,zoom:a.zoom,version:a.version,update:a.update,assistantName:a.assistantName};e==null||e(o)};return window.addEventListener("message",r),()=>window.removeEventListener("message",r)}var ac=["orbit","pan","depth","zoom","recenter","point","select","next","prev","action"],Rv=class{constructor(e){$i(this,"pluginId");this.pluginId=e}invoke(e,n,t=qt){return new Promise((r,s)=>{if(window.parent===window){s(new Error(`No Mnemosyne host: "${e}" was invoked outside the shell (this page is not embedded in a host iframe).`));return}const a=Math.random().toString(36).substring(7);let o,i=!1;const l=d=>{i||(i=!0,window.removeEventListener("message",c),o!==void 0&&window.clearTimeout(o),d())},c=d=>{d.source===window.parent&&(!d.data||d.data.type!=="MNEMO_PLUGIN_REPLY"||d.data.messageId===a&&l(()=>{d.data.success?r(d.data.data):s(new Error(d.data.error||"Unknown host error"))}))};window.addEventListener("message",c),t>0&&(o=window.setTimeout(()=>l(()=>s(new Error(`Host did not reply to "${e}" within ${Math.round(t/1e3)}s`))),t)),window.parent.postMessage({type:"MNEMO_PLUGIN_REQUEST",pluginId:this.pluginId,messageId:a,action:e,payload:n},Xe)})}stream(e,n,t={}){const{onChunk:r,signal:s}=t,a=t.timeoutMs??qt;return new Promise((o,i)=>{if(window.parent===window){i(new Error(`No Mnemosyne host: "${e}" was streamed outside the shell (this page is not embedded in a host iframe).`));return}if(s!=null&&s.aborted){i(sc(s));return}const l=Av();let c="",d,u=!1;const g=()=>{d!==void 0&&(window.clearTimeout(d),d=void 0)},v=()=>{a<=0||(g(),d=window.setTimeout(()=>y(()=>i(new Error(`Host stalled on "${e}" — no chunk within ${Math.round(a/1e3)}s`))),a))},y=m=>{u||(u=!0,window.removeEventListener("message",I),s&&s.removeEventListener("abort",w),g(),m())},w=()=>{try{window.parent.postMessage({type:"MNEMO_PLUGIN_CANCEL",pluginId:this.pluginId,messageId:l},Xe)}catch{}y(()=>i(sc(s)))},I=m=>{if(m.source!==window.parent)return;const f=m.data;if(!(!f||f.messageId!==l))switch(f.type){case"MNEMO_PLUGIN_CHUNK":{if(u)return;const h=typeof f.chunk=="string"?f.chunk:"";if(h){c+=h;try{r==null||r(h)}catch(x){console.error("[MNEMO-SDK] onChunk consumer threw:",x)}}v();break}case"MNEMO_PLUGIN_DONE":y(()=>o({text:c,data:f.data}));break;case"MNEMO_PLUGIN_ERROR":y(()=>i(new Error(f.error||"Unknown host stream error")));break}};window.addEventListener("message",I),s&&s.addEventListener("abort",w),v(),window.parent.postMessage({type:"MNEMO_PLUGIN_REQUEST",pluginId:this.pluginId,messageId:l,action:e,payload:n,stream:!0},Xe)})}inferModel(e){return this.invoke("model.infer",e)}showUpdateInHub(){return this.invoke("hub.showUpdate")}getModelConfig(){return this.invoke("model.getConfig")}status(){return this.invoke("mnemosyne.status")}query(e){return this.invoke("mnemosyne.query",{query:e})}ingest(e,n="SOCIAL_NODE"){return this.invoke("mnemosyne.ingest",{content:e,spineType:n})}socialIngest(e,n,t="SOCIAL_NODE"){return this.invoke("social.ingest",{vault:e,content:n,spineType:t})}socialQuery(e,n=100){return this.invoke("social.query",{vault:e,limit:n})}getTopologyMap(e){return this.invoke("getTopologyMap",e)}getScannedPapers(){return this.invoke("vault.getScannedPapers")}ensureSandbox(){return this.invoke("vault.sandbox.ensure",{})}describeVaultTile(e){return this.invoke("vault.sandbox.describeTile",e)}scanTree(){return this.invoke("vault.scanTree")}setDocWatch(e,n){return this.invoke("vault.setDocWatch",{path:e,config:n})}removeDocWatch(e,n){return this.invoke("vault.removeDocWatch",{path:e,watchPath:n})}selectFolder(e){return this.invoke("dialog.selectFolder",e,0)}selectFile(e){return this.invoke("dialog.selectFile",{filters:e},0)}readFile(e){return this.invoke("dialog.readFile",{filePath:e})}writeFile(e,n){return this.invoke("dialog.writeFile",{filePath:e,content:n})}readDir(e){return this.invoke("dialog.readDir",{dirPath:e})}openInOS(e){return this.invoke("dialog.openInOS",{filePath:e})}deleteProjectDir(e){return this.invoke("dialog.deleteProjectDir",{dirPath:e})}forgetSandbox(e){return this.invoke("vault.sandbox.forget",{ids:e})}getLinkedDev(){return this.invoke("plugins.getLinkedDev")}linkDev(e){return this.invoke("plugins.linkDev",{dirPath:e})}unlinkDev(e){return this.invoke("plugins.unlinkDev",{dirPath:e})}launchPlugin(e){return this.invoke("plugins.launch",{id:e})}onGestures(e,n=qt){const t=Math.random().toString(36).substring(7);let r=!1,s,a=null;const o=new Promise((d,u)=>{a={resolve:d,reject:u}});o.catch(()=>{});const i=d=>{s!==void 0&&(window.clearTimeout(s),s=void 0);const u=a;a=null,u&&d(u)},l=d=>{if(d.source!==window.parent)return;const u=d.data;if(!(!u||typeof u.type!="string")){if(u.type==="MNEMO_GESTURE_READY"&&u.requestId===t){const g=Array.isArray(u.takes)?u.takes.filter(y=>typeof y=="string"&&ac.includes(y)):[],v=Array.isArray(u.actions)?u.actions.filter(y=>typeof y=="string"):[];i(y=>y.resolve({takes:g,actions:v}));return}if(u.type==="MNEMO_GESTURE_REFUSED"&&u.requestId===t){window.removeEventListener("message",l),i(g=>g.reject(new Error(typeof u.error=="string"?u.error:"The host refused the gestures")));return}if(u.type==="MNEMO_GESTURE"&&u.requestId===t&&!r){const g=u.gesture;if(!g||!ac.includes(g.kind))return;const v=e[g.kind];if(!v)return;try{v(g)}catch(y){console.error(`[MnemoCartridgeSDK] the "${g.kind}" gesture handler threw:`,y)}}}},c=()=>{r||(r=!0,window.removeEventListener("message",l),i(d=>d.reject(new Error("Gestures were turned off before the host answered"))),window.parent!==window&&window.parent.postMessage({type:"MNEMO_GESTURE_UNSUBSCRIBE",pluginId:this.pluginId,requestId:t},Xe))};return window.parent===window?(r=!0,i(d=>d.reject(new Error("No Mnemosyne host: gestures were asked outside the shell (this page is not embedded in a host iframe)."))),{ready:o,off:c}):(window.addEventListener("message",l),n>0&&(s=window.setTimeout(()=>i(d=>d.reject(new Error(`Host did not answer the gesture request within ${Math.round(n/1e3)}s`))),n)),window.parent.postMessage({type:"MNEMO_GESTURE_SUBSCRIBE",pluginId:this.pluginId,requestId:t},Xe),{ready:o,off:c})}onAgentActions(e,n=qt){const t=Math.random().toString(36).substring(7);let r=!1,s,a=null;const o=new Promise((u,g)=>{a={resolve:u,reject:g}});o.catch(()=>{});const i=u=>{s!==void 0&&(window.clearTimeout(s),s=void 0);const g=a;a=null,g&&u(g)},l=(u,g)=>{window.parent.postMessage({type:"MNEMO_AGENT_RESULT",pluginId:this.pluginId,requestId:t,callId:u,...g},Xe)},c=u=>{if(u.source!==window.parent)return;const g=u.data;if(!(!g||typeof g.type!="string"||g.requestId!==t)){if(g.type==="MNEMO_AGENT_READY"){i(v=>v.resolve({actions:Array.isArray(g.actions)?g.actions.filter(y=>typeof y=="string"):[]}));return}if(g.type==="MNEMO_AGENT_REFUSED"){window.removeEventListener("message",c),i(v=>v.reject(new Error(typeof g.error=="string"?g.error:"The host refused the agent actions")));return}if(g.type==="MNEMO_AGENT_CALL"&&typeof g.callId=="string"&&!r){const v=typeof g.action=="string"?e[g.action]:void 0;if(!v){l(g.callId,{ok:!1,error:`this window has no handler for "${String(g.action)}"`});return}Promise.resolve().then(()=>v(g.args&&typeof g.args=="object"?g.args:{})).then(y=>l(g.callId,{ok:!0,result:y===void 0?null:y}),y=>l(g.callId,{ok:!1,error:y instanceof Error?y.message:String(y)}))}}},d=()=>{r||(r=!0,window.removeEventListener("message",c),i(u=>u.reject(new Error("Agent actions were turned off before the host answered"))),window.parent!==window&&window.parent.postMessage({type:"MNEMO_AGENT_UNSUBSCRIBE",pluginId:this.pluginId,requestId:t},Xe))};return window.parent===window?(r=!0,i(u=>u.reject(new Error("No Mnemosyne host: agent actions were asked outside the shell."))),{ready:o,off:d}):(window.addEventListener("message",c),n>0&&(s=window.setTimeout(()=>i(u=>u.reject(new Error(`Host did not answer the agent actions within ${Math.round(n/1e3)}s`))),n)),window.parent.postMessage({type:"MNEMO_AGENT_SUBSCRIBE",pluginId:this.pluginId,requestId:t,actions:Object.keys(e)},Xe),{ready:o,off:d})}onMouthWatch(e,n=qt){const t=Math.random().toString(36).substring(7);let r=!1,s,a=null;const o=new Promise((d,u)=>{a={resolve:d,reject:u}});o.catch(()=>{});const i=d=>{s!==void 0&&(window.clearTimeout(s),s=void 0);const u=a;a=null,u&&d(u)},l=d=>{var g;if(d.source!==window.parent)return;const u=d.data;if(!(!u||typeof u.type!="string"||u.requestId!==t)){if(u.type==="MNEMO_MOUTH_READY")i(v=>v.resolve({camera:u.camera===!0}));else if(u.type==="MNEMO_MOUTH_REFUSED")window.removeEventListener("message",l),i(v=>v.reject(new Error(typeof u.error=="string"?u.error:"The host refused the camera observation")));else if(u.type==="MNEMO_MOUTH_CAMERA"&&!r)try{(g=e.onCamera)==null||g.call(e,u.camera===!0)}catch(v){console.error("[MnemoCartridgeSDK] the onCamera handler threw:",v)}else if(u.type==="MNEMO_MOUTH_CONTACT"&&!r){const v=u.contact;if(!v||!Number.isFinite(v.at)||!Number.isFinite(v.ms))return;try{e.contact({at:v.at,ms:v.ms})}catch(y){console.error("[MnemoCartridgeSDK] the contact handler threw:",y)}}}},c=()=>{r||(r=!0,window.removeEventListener("message",l),i(d=>d.reject(new Error("The observation was turned off before the host answered"))),window.parent!==window&&window.parent.postMessage({type:"MNEMO_MOUTH_UNSUBSCRIBE",pluginId:this.pluginId,requestId:t},Xe))};return window.parent===window?(r=!0,i(d=>d.reject(new Error("No Mnemosyne host: the camera observation was asked outside the shell."))),{ready:o,off:c}):(window.addEventListener("message",l),n>0&&(s=window.setTimeout(()=>i(d=>d.reject(new Error(`Host did not answer the camera observation request within ${Math.round(n/1e3)}s`))),n)),window.parent.postMessage({type:"MNEMO_MOUTH_SUBSCRIBE",pluginId:this.pluginId,requestId:t},Xe),{ready:o,off:c})}getSystemMetrics(){return this.invoke("metrics.get")}creditsStatus(){return this.invoke("credits.status")}};const Pv="@mnemosyne-plugins/style-shelf",cn=new Rv(Pv),Vd={framed:()=>window.parent!==window,ask:e=>cn.invoke("getStatus",void 0,e),setTimer:(e,n)=>window.setTimeout(e,n),clearTimer:e=>window.clearTimeout(e)},oc=15e3,Fv={pickFolder:()=>cn.selectFolder(),mkdir:e=>cn.invoke("dialog.mkdir",{dirPath:e},oc),writeFile:(e,n)=>cn.invoke("dialog.writeFile",{filePath:e,content:n},oc)};function zv(e){const n=Array.isArray(e==null?void 0:e.capabilities)?e.capabilities.filter(r=>typeof r=="string"):[],t=typeof(e==null?void 0:e.platform)=="string"?e.platform:null;return{kind:"mnemosyne",capabilities:n,platform:t}}function Dv(e){return e.kind==="mnemosyne"}function Hv(e,n){return e.kind==="mnemosyne"&&e.capabilities.includes(n)}const tr="POPUP_BLOCKED";async function $v(e,n){if(n)try{const t=await cn.invoke("shell.openExternal",{url:e},15e3);return t&&t.success===!1?t.error??"refused":null}catch(t){return t instanceof Error?t.message:String(t)}try{const t=window.open(e,"_blank");return t?(t.opener=null,null):tr}catch(t){return t instanceof Error?t.message:String(t)}}const ic="style-shelf.favorites";function lc(e){if(!e)return[];try{const n=JSON.parse(e);return Array.isArray(n)?[...new Set(n.filter(t=>typeof t=="string"))]:[]}catch(n){return console.warn("[style-shelf] stored favourites unreadable, starting with none:",n instanceof Error?n.message:n),[]}}function Bv(e,n){return e.includes(n)?e.filter(t=>t!==n):[...e,n]}function Wv(e,n){return e.filter(t=>n.has(t))}const Vv={"--accent-glow":"--accent-soft","--bg-hover":"--bg-surface-hover","--bg-card":"--bg-panel","--text-accent":"--accent","--border-accent":"--border-active","--shadow-card":"--shadow-widget","--status-active":"--accent-success-text","--status-warning":"--accent-warning-text","--status-overload":"--accent-danger-text"};function Gv(e,n){const t=Vv[e];return t?`var(${t}, ${n})`:n}const pr="style-shelf",Kv=["kit.json","tokens.css","elements.css","BRIEF.md"],Qv="style-shelf-kit/1";function Gd(e,n,t){const r=new Map(n.entries.map(d=>[d.id,d])),s=e.styleId?r.get(e.styleId):void 0;if(!s||s.kind!=="style")return{ok:!1,missing:"style"};const a=[],o=[],i=[];for(const d of e.itemIds){const u=r.get(d);!u||u.kind==="style"||(u.kind==="icons"?o.push({id:u.id,title:u.title,license:u.license,author:u.author,homepage:u.homepage,packages:u.packages}):u.kind==="engine"?i.push({id:u.id,title:u.title,license:u.license,author:u.author,homepage:u.homepage,packages:u.packages,use:u.use}):a.push({id:u.id,kind:u.kind,title:u.title,license:u.license,author:u.author,tier:u.tier,css:u.css,html:u.html}))}const l=[...new Set([s.license,...a.map(d=>d.license),...o.map(d=>d.license),...i.map(d=>d.license)])].sort(),c={format:Qv,createdAt:t,style:{...s.manifest,title:s.title,license:s.license},elements:a,icons:o,engines:i,licenses:l};return{ok:!0,kit:c,files:[{name:"kit.json",content:`${JSON.stringify(c,null,2)}
`},{name:"tokens.css",content:qv(s)},{name:"elements.css",content:Qd(a)},{name:"BRIEF.md",content:Ui(c,{embedFiles:!1})}]}}function Kd(e){return`:root {
${Object.entries(e.tokens).map(([t,r])=>`  ${t}: ${Gv(t,String(r))};`).join(`
`)}
}`}function qv(e){return`/* Style Shelf · ${e.title.en} (${e.id}) · ${e.license} · ${e.author} */
${Kd(e.manifest)}
`}function Qd(e){return e.length===0?`/* Style Shelf · no element in this kit */
`:`${e.map(n=>`/* ── ${n.title.en} (${n.kind}, ${n.id}) · ${n.license} · ${n.author} ── */
${n.css}
`).join(`
`)}`}function Yv(e){const n=Object.entries(e.packages).map(([t,r])=>`${t}: \`${r}\``).join(", ");return`- **${e.title.en}** · ${e.license} · ${e.homepage} · ${n}`}function Ui(e,n){const t=e.style,r=[`# Style Shelf kit: ${t.title.en}`,"","Apply this kit to the project.","",`1. Load the style's variables once at the app root${n.embedFiles?" (the `tokens.css` block below)":" (`tokens.css`)"}, or turn them into the project's own theme (Tailwind config, CSS-in-JS theme, design tokens). Keep their names.`,"2. Build each element below in the project's framework and component style. Read every colour, radius, spacing, font, shadow and duration from the variables: never hard-code a value the style defines.","3. Keep each `prefers-reduced-motion` rule an element has.","4. Install the icon packs and the animation engines listed, with the package for the project's framework. Use each engine for what its line says: springs, gestures, toasts, drawers.","5. Keep the licence notices.","6. If the project is a Mnemosyne OS cartridge, call `onHostConfig()` from `@mnemosyne_os/cartridge-sdk` in its entry file. The app then takes the user's theme: `tokens.css` already reads the host's variables first. Border variables are colours: write `1px solid var(--border-subtle)`.","","## Style","",`- **${t.title.en}** (\`${t.id}\`) · ${t.license} · ${t.author??"unknown"}${t.description?` · ${t.description}`:""}`,"","## Elements",""];e.elements.length===0&&r.push("None.","");for(const s of e.elements)r.push(`### ${s.title.en} (${s.kind}, \`${s.id}\`) · ${s.license}`,"","Markup of the preview:","","```html",s.html,"```","");r.push("## Animation engines",""),e.engines.length===0&&r.push("None.");for(const s of e.engines){const a=Object.entries(s.packages).map(([o,i])=>`${o}: \`${i}\``).join(", ");r.push(`- **${s.title.en}** · ${s.license} · ${s.homepage} · ${a}: ${s.use.en}`)}r.push("","## Icon packs",""),e.icons.length===0&&r.push("None.");for(const s of e.icons)r.push(Yv(s));return r.push("","## Licences","",e.licenses.join(", "),""),n.embedFiles?r.push("## tokens.css","","```css",Kd(t),"```","","## elements.css","","```css",Qd(e.elements).trimEnd(),"```",""):r.push("## Files","","- `tokens.css`: the variables","- `elements.css`: the CSS of each element","- `kit.json`: everything above, as data",""),r.join(`
`)}function cc(e,n){const t=e.includes("\\")&&!e.includes("/")?"\\":"/";return e.endsWith(t)?`${e}${n}`:`${e}${t}${n}`}function Yt(e,n){return n!==void 0?n instanceof Error?n.message:String(n):(e==null?void 0:e.error)??"no answer"}async function Zv(e,n){let t;try{t=await n.pickFolder()}catch(a){return{ok:!1,cancelled:!1,step:"folder",error:Yt(void 0,a),written:[]}}if(!t)return{ok:!1,cancelled:!0};const r=cc(t,pr);try{const a=await n.mkdir(r);if(!(a!=null&&a.success))return{ok:!1,cancelled:!1,step:pr,error:Yt(a),written:[]}}catch(a){return{ok:!1,cancelled:!1,step:pr,error:Yt(void 0,a),written:[]}}const s=[];for(const a of e){try{const o=await n.writeFile(cc(r,a.name),a.content);if(!(o!=null&&o.success))return{ok:!1,cancelled:!1,step:a.name,error:Yt(o),written:s}}catch(o){return{ok:!1,cancelled:!1,step:a.name,error:Yt(void 0,o),written:s}}s.push(a.name)}return{ok:!0,dir:r,written:s}}function Xv(){try{return window.localStorage}catch(e){return console.warn("[style-shelf] no local storage here, choices are not remembered:",e),null}}function uc(e,n,t,r){try{const s=e==null?void 0:e.getItem(n);return s&&t.includes(s)?s:r}catch(s){return console.warn(`[style-shelf] choice ${n} unreadable:`,s),r}}function Wn(e,n,t){try{e==null||e.setItem(n,t)}catch(r){console.warn(`[style-shelf] choice ${n} not remembered:`,r)}}function Jv(e,n=15e3){return new Promise((t,r)=>{const s=new FileReader,a=window.setTimeout(()=>{s.abort(),r(new Error("TIMEOUT"))},n);s.onload=()=>{window.clearTimeout(a),t(String(s.result??""))},s.onerror=()=>{window.clearTimeout(a),r(s.error??new Error("unreadable"))},s.readAsText(e)})}function dc(e,n,t="application/json"){const r=URL.createObjectURL(new Blob([n],{type:t})),s=document.createElement("a");s.href=r,s.download=e,document.body.appendChild(s),s.click(),s.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}async function ey(e){var r;let n="no clipboard";if((r=navigator.clipboard)!=null&&r.writeText)try{return await navigator.clipboard.writeText(e),null}catch(s){n=s instanceof Error?s.message:String(s)}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();try{return document.execCommand("copy")?null:n}catch(s){return s instanceof Error?s.message:String(s)}finally{t.remove()}}const ny=["personal","themes","favorites"],ty={get:()=>cn.invoke("state.get"),set:e=>cn.invoke("state.set",{state:{...e}})};function Po(e){return!e||e.trim()===""||e.trim()==="[]"}function ry(e,n,t="personal"){var s;if(!Po(e))return null;const r=(s=n==null?void 0:n.state)==null?void 0:s[t];return typeof r=="string"&&!Po(r)?r:null}const pc={personal:0,themes:0,favorites:0};function sy(e,n,t,r){const[s,a]=k.useState(pc),[o,i]=k.useState(null),[l,c]=k.useState(null),[d,u]=k.useState(!1),g=k.useRef(new Set),v=k.useRef(!1),y=k.useRef(t);y.current=t;const w=k.useRef(r);w.current=r,k.useEffect(()=>{if(!e||v.current)return;v.current=!0;let x=!0;return n.get().then(S=>{var C;if(!x)return;const T={...pc};for(const E of ny){const F=ry(y.current[E],S,E);if(F){T[E]=w.current(E,F,"replace");continue}const A=(C=S==null?void 0:S.state)==null?void 0:C[E];g.current.has(E)&&typeof A=="string"&&!Po(A)&&(T[E]=w.current(E,A,"merge"))}a(T),u(!0)},S=>{const T=S instanceof Error?S.message:String(S);console.warn("[style-shelf] host copy unreadable, nothing will be written to it:",T),x&&(c(T),u(!0))}),()=>{x=!1}},[e,n]);const{personal:I,themes:m,favorites:f}=t;k.useEffect(()=>{!e||!d||l!==null||g.current.size===0||n.set({personal:I,themes:m,favorites:f}).then(()=>i(null),x=>{const S=x instanceof Error?x.message:String(x);console.warn("[style-shelf] host copy not written:",S),i(S)})},[I,m,f,e,d,l,n]);const h=k.useCallback(x=>{g.current.add(x)},[]);return{restored:s,error:o,readError:l,markChanged:h}}function ay(e){const[n]=k.useState(()=>{try{return Ro((e==null?void 0:e.getItem(Uo))??null)}catch(l){return console.warn("[style-shelf] personal styles unreadable:",l),{styles:[],refused:0}}}),[t,r]=k.useState(n.styles),s=k.useCallback(l=>{r(c=>{const d=l(c);return Wn(e,Uo,Wd(d)),d})},[e]),a=k.useCallback(l=>s(c=>Iv(c,l)),[s]),o=k.useCallback(l=>s(c=>c.filter(d=>d.id!==l)),[s]),i=k.useCallback((l,c)=>{const d=Ro(l).styles;if(c==="replace")return d.length>0&&s(()=>d),d.length;const u=d.filter(g=>!t.some(v=>v.id===g.id));return u.length>0&&s(g=>[...g,...u.filter(v=>!g.some(y=>y.id===v.id))]),u.length},[s,t]);return{styles:t,refusedAtLoad:n.refused,keep:a,remove:o,restore:i}}const oy="style-shelf.premium";function iy(e){return e&&Hv(e,oy)?"open":"unknown"}function qd(e,n){const t=new Set(n.entries.filter(r=>r.tier==="premium").map(r=>r.id));return[e.styleId,...e.itemIds].filter(r=>!!r&&t.has(r))}function Yd(e,n){return e.length===0?null:`premium gate: ${e.length} premium entr${e.length===1?"y":"ies"} (${e.join(", ")}), access ${n}, not enforced (doc 186 §9)`}const Zd=`
html, body { margin: 0; height: 100%; }
body {
  display: grid; place-items: center; padding: 12px; box-sizing: border-box;
  background: var(--bg-void); color: var(--text-primary); font-family: var(--font-ui);
  overflow: hidden;
}
.ss-preview-fill { position: fixed; inset: 0; }
.ss-preview-icons { display: grid; grid-template-columns: repeat(4, 30px); gap: 14px; color: var(--text-accent); }
.ss-preview-icons svg { width: 26px; height: 26px; display: block; }
body:not(:hover) *, body:not(:hover) *::before, body:not(:hover) *::after { animation: none !important; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}`;function Li(e){return`:root {
${Object.entries(e.tokens).map(([t,r])=>`  ${t}: ${r};`).join(`
`)}
}`}function Nr(e){return e.replace(/<\/style/gi,"<\\/style")}function Ve(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ly(e,n){return`<div style="width:min(100%,300px);padding:var(--space-lg);border:1px solid var(--border-subtle);border-radius:var(--radius-lg);background:var(--bg-card);box-shadow:var(--shadow-card)">
<p style="margin:0 0 6px;font:11px/1.2 var(--font-mono);letter-spacing:.16em;text-transform:uppercase;color:var(--text-muted)">${Ve(e.manifest.id)}</p>
<p style="margin:0 0 14px;font-size:18px;font-weight:600;color:var(--text-primary)">${Ve(n)}</p>
<div style="display:flex;gap:8px;flex-wrap:wrap">
<span style="padding:8px 14px;border-radius:var(--radius-md);background:var(--accent);color:var(--bg-void);font-weight:600;font-size:13px">Aa</span>
<span style="padding:8px 14px;border-radius:var(--radius-md);border:1px solid var(--border-accent);color:var(--text-accent);font-size:13px">Aa</span>
<span style="padding:8px 10px;border-radius:999px;background:var(--accent-glow);color:var(--text-accent);font:12px var(--font-mono)">#tag</span>
</div></div>`}function cy(e,n){const t=e.packages.react??e.packages.any??Object.values(e.packages)[0],r=e.samples.map(s=>`<span title="${Ve(s.name)}">${s.svg}</span>`).join("");return`<div style="text-align:center;display:grid;gap:12px;justify-items:center">
${r?`<div class="ss-preview-icons">${r}</div>`:""}
<p style="margin:0;font-size:16px;font-weight:600;color:var(--text-primary)">${Ve(n)}</p>
<code style="font:12px var(--font-mono);color:var(--text-muted)">${Ve(t)}</code></div>`}function uy(e,n,t){const r=e.packages.react??e.packages.any??Object.values(e.packages)[0];return`<div style="display:grid;gap:10px;justify-items:center;text-align:center;max-width:260px">
<p style="margin:0;font-size:18px;font-weight:600;color:var(--text-primary)">${Ve(n)}</p>
<code style="padding:4px 10px;border:1px solid var(--border-subtle);border-radius:var(--radius-sm);font:12px var(--font-mono);color:var(--text-accent)">npm i ${Ve(r)}</code>
<p style="margin:0;font-size:13px;line-height:1.4;color:var(--text-secondary)">${Ve(t)}</p></div>`}function dy(e,n){const t=`<div style="display:grid;gap:var(--space-md);width:min(100%,380px)">
<div style="padding:var(--space-lg);border:1px solid var(--border-subtle);border-radius:var(--radius-lg);background:var(--bg-card);box-shadow:var(--shadow-card)">
<p style="margin:0 0 6px;font:11px/1.2 var(--font-mono);letter-spacing:.16em;text-transform:uppercase;color:var(--text-muted)">${Ve(e.id)}</p>
<p style="margin:0 0 8px;font-size:20px;font-weight:600;color:var(--text-primary)">${Ve(n)}</p>
<p style="margin:0 0 16px;font-size:14px;line-height:1.5;color:var(--text-secondary)">Aa Bb Cc 0123 · <span style="color:var(--text-accent)">accent</span></p>
<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
<span style="padding:var(--space-sm) var(--space-lg);border-radius:var(--radius-md);background:var(--accent);color:var(--bg-void);font-weight:600;font-size:13px;box-shadow:var(--shadow-accent)">Aa</span>
<span style="padding:var(--space-sm) var(--space-lg);border-radius:var(--radius-md);border:1px solid var(--border-accent);color:var(--text-accent);font-size:13px">Aa</span>
<span style="padding:6px 10px;border-radius:999px;background:var(--accent-glow);color:var(--text-accent);font:12px var(--font-mono)">#tag</span>
</div></div>
<div style="display:flex;gap:10px;align-items:center;padding:10px 12px;border:1px solid var(--border-subtle);border-radius:var(--radius-sm);background:var(--bg-panel);color:var(--text-muted);font-size:14px">name@example.com</div>
<div style="display:flex;gap:14px;align-items:center;padding:10px 12px;border-radius:var(--radius-md);background:var(--bg-surface);font:12px var(--font-mono);color:var(--text-secondary)">
<span style="display:inline-flex;gap:6px;align-items:center"><i style="width:9px;height:9px;border-radius:50%;background:var(--status-active)"></i>ok</span>
<span style="display:inline-flex;gap:6px;align-items:center"><i style="width:9px;height:9px;border-radius:50%;background:var(--status-warning)"></i>!</span>
<span style="display:inline-flex;gap:6px;align-items:center"><i style="width:9px;height:9px;border-radius:50%;background:var(--status-overload)"></i>×</span>
<span style="margin-left:auto;padding:4px 10px;border-radius:var(--radius-sm);background:var(--bg-hover);transition:background var(--transition-normal)">hover</span>
</div></div>`;return`<!doctype html><html><head><meta charset="utf-8"><style>${Nr(Li(e))}
${Zd}</style></head><body>${t}</body></html>`}function py(e,n,t,r=""){let s="",a;n.kind==="style"?a=ly(n,t):n.kind==="icons"?a=cy(n,t):n.kind==="engine"?a=uy(n,t,r):(s=n.css,a=n.html);const o=Li((n.kind==="style"?n:e).manifest);return`<!doctype html><html><head><meta charset="utf-8"><style>${Nr(o)}
${Zd}
${Nr(s)}</style></head><body>${a}</body></html>`}const fy=`
html, body { margin: 0; }
body { background: var(--bg-void); color: var(--text-primary); font-family: var(--font-ui); line-height: 1.5; }
.ss-page-ground { position: fixed; inset: 0; z-index: 0; }
.ss-page { position: relative; z-index: 1; max-width: 1080px; margin: 0 auto; padding: 0 24px 48px; }
.ss-page-head { display: flex; align-items: center; gap: 24px; padding: 18px 0; border-bottom: 1px solid var(--border-subtle); }
.ss-page-logo { font-weight: 700; letter-spacing: 0.08em; color: var(--text-accent); }
.ss-page-nav { display: flex; gap: 18px; margin-left: auto; font-size: 14px; color: var(--text-secondary); }
.ss-page-hero { padding: 48px 0 32px; max-width: 640px; }
.ss-page-hero h1 { margin: 0 0 12px; font-size: clamp(28px, 5vw, 44px); line-height: 1.1; color: var(--text-primary); }
.ss-page-hero p { margin: 0; font-size: 17px; color: var(--text-secondary); }
.ss-page-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr)); gap: 20px; }
.ss-page-block { display: grid; gap: 10px; align-content: start; padding: var(--space-lg); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); background: var(--bg-card); box-shadow: var(--shadow-card); }
.ss-page-block h2 { margin: 0; font-size: 15px; color: var(--text-primary); }
.ss-page-block p { margin: 0; font-size: 13px; color: var(--text-muted); }
.ss-page-demo { position: relative; transform: translateZ(0); overflow: hidden; min-height: 150px; display: grid; place-items: center; padding: 12px; border-radius: var(--radius-md); }
.ss-page-icons { display: flex; flex-wrap: wrap; gap: 14px; color: var(--text-accent); }
.ss-page-icons svg { width: 26px; height: 26px; display: block; }
.ss-page-foot { margin-top: 40px; padding-top: 18px; border-top: 1px solid var(--border-subtle); font-size: 13px; color: var(--text-muted); }
body:not(:hover) *, body:not(:hover) *::before, body:not(:hover) *::after { animation: none !important; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}`,Zt=["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.","Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."];function my(e,{elements:n,icons:t},r){const s=n.find(c=>c.kind==="background"),a=n.filter(c=>c!==s),o=n.map(c=>c.css).join(`
`),i=(c,d,u)=>`<section class="ss-page-block"><h2>${Ve(c)}</h2><p>${Zt[d%Zt.length]}</p>${u}</section>`,l=`${s?`<div class="ss-page-ground">${s.html}</div>`:""}
<div class="ss-page">
<header class="ss-page-head"><span class="ss-page-logo">LOREM</span><nav class="ss-page-nav"><span>Ipsum</span><span>Dolor</span><span>Sit amet</span></nav></header>
<section class="ss-page-hero"><h1>Lorem ipsum dolor sit amet</h1><p>${Zt[0]} ${Zt[1]}</p></section>
<main class="ss-page-grid">
${a.map((c,d)=>i(r(c.id),d,`<div class="ss-page-demo">${c.html}</div>`)).join(`
`)}
${t.map((c,d)=>i(r(c.id),a.length+d,`<div class="ss-page-icons">${c.samples.map(u=>u.svg).join("")}</div>`)).join(`
`)}
</main>
<footer class="ss-page-foot">${Zt[3]}</footer>
</div>`;return`<!doctype html><html><head><meta charset="utf-8"><style>${Nr(Li(e.manifest))}
${fy}
${Nr(o)}</style></head><body>${l}</body></html>`}function gy(e){const n=[],t=[],r=new Set;let s=null;const a=()=>r.forEach(l=>l());function o(){s=null;try{for(let l=0;l<e.batch;l++){const c=n.shift()??t.shift();if(!c)break;c.run()}}finally{n.length+t.length>0&&(s=e.setTimer(o,e.every)),a()}}function i(l,c){const d={run:l};return(c?n:t).push(d),s===null&&(s=e.setTimer(o,0)),a(),()=>{const u=n.includes(d)?n:t,g=u.indexOf(d);g<0||(u.splice(g,1),n.length+t.length===0&&s!==null&&(e.clearTimer(s),s=null),a())}}return{schedule:i,pending:()=>n.length+t.length,subscribe:l=>(r.add(l),()=>r.delete(l))}}const Fo=gy({batch:4,every:32,setTimer:(e,n)=>setTimeout(e,n),clearTimer:e=>clearTimeout(e)});function fc(e){const n=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());if(!n)return null;const t=n[1].length===3?n[1].split("").map(r=>r+r).join(""):n[1];return[0,2,4].map(r=>parseInt(t.slice(r,r+2),16))}function mc([e,n,t]){const r=s=>{const a=s/255;return a<=.03928?a/12.92:((a+.055)/1.055)**2.4};return .2126*r(e)+.7152*r(n)+.0722*r(t)}function hy(e,n){const t=fc(e),r=fc(n);if(!t||!r)return null;const[s,a]=[mc(t),mc(r)].sort((o,i)=>i-o);return(s+.05)/(a+.05)}const Xd=4.5,vy=[["text","--text-primary","--bg-void"],["muted","--text-muted","--bg-void"],["accentText","--text-accent","--bg-void"],["onAccent","--bg-void","--accent"]];function yy(e){const n=[];for(const[t,r,s]of vy){const a=hy(e[r]??"",e[s]??"");(a===null||a<Xd)&&n.push({pair:t,ratio:a})}return n}const gc=[{id:"accent",tokens:["--accent","--accent-dim","--accent-glow","--accent-border","--text-accent"],show:"--accent"},{id:"grounds",tokens:["--bg-void","--bg-surface","--bg-panel","--bg-card","--bg-hover"],show:"--bg-void"},{id:"text",tokens:["--text-primary","--text-secondary","--text-muted","--font-ui","--font-mono"],show:"--text-primary"},{id:"shapes",tokens:["--radius-sm","--radius-md","--radius-lg","--space-sm","--space-md","--space-lg","--border-subtle","--border-accent"],show:"--radius-md"},{id:"depth",tokens:["--shadow-card","--shadow-accent"],show:"--shadow-card"},{id:"motion",tokens:["--transition-fast","--transition-normal"],show:"--transition-normal"},{id:"status",tokens:["--status-active","--status-warning","--status-overload"],show:"--status-active"}];function hc(e){return/^#[0-9a-f]{6}$/i.test(e.trim())}function by(e){const{w:n}=e,[t,r]=k.useState(e.draft),[s,a]=k.useState("accent"),[o,i]=k.useState(!1),l=$d(t),c=yy(t.tokens),d=k.useMemo(()=>dy(Rr(t),t.name||" "),[t]),u=gc.find(v=>v.id===s),g=k.useMemo(()=>new Intl.NumberFormat(e.lang,{maximumFractionDigits:1}),[e.lang]);return k.useEffect(()=>{const v=y=>{y.key==="Escape"&&e.onClose()};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[e.onClose]),p.jsxs("div",{className:"studio",role:"dialog","aria-label":n.studio.title,children:[p.jsxs("header",{className:"studio-bar",children:[p.jsx("span",{className:"lab brand",children:n.studio.title}),p.jsxs("label",{className:"field",children:[p.jsx("span",{className:"lab",children:n.studio.name}),p.jsx("input",{value:t.name,onChange:v=>r({...t,name:v.target.value})})]}),p.jsxs("label",{className:"field",children:[p.jsx("span",{className:"lab",children:n.studio.author}),p.jsx("input",{value:t.author,placeholder:n.studio.authorHint,onChange:v=>r({...t,author:v.target.value})})]}),p.jsx("span",{className:"lab based",children:O(n.studio.basedOn,{name:t.basedOn})}),p.jsxs("div",{className:"studio-actions",children:[p.jsx("button",{type:"button",className:"primary",disabled:!!l,onClick:()=>e.onKeep({...t,name:t.name.trim()}),children:n.studio.keep}),p.jsx("button",{type:"button",disabled:!!l,onClick:()=>e.onExport(t),children:n.studio.export}),e.onPropose&&p.jsx("button",{type:"button",disabled:!!l,onClick:()=>{var v;return(v=e.onPropose)==null?void 0:v.call(e,t)},children:n.studio.propose}),!e.isNew&&p.jsx("button",{type:"button",className:o?"danger":"",onClick:()=>o?e.onDelete(t.id):i(!0),children:o?n.studio.confirmDelete:n.studio.delete}),p.jsx("button",{type:"button",className:"icon-btn","aria-label":n.studio.close,title:n.studio.close,onClick:e.onClose,children:p.jsx(ve,{name:"close"})})]})]}),l&&p.jsx("p",{className:"error",role:"alert",children:O(n.studio.invalid,{detail:l})}),e.proposeError&&p.jsx("p",{className:"error",role:"alert",children:e.proposeError}),e.linkHere&&p.jsx("p",{className:"notice",children:p.jsx("a",{className:"link",href:e.linkHere,target:"_blank",rel:"noopener noreferrer",children:n.contrib.openHere})}),p.jsxs("div",{className:"atelier",children:[p.jsx("ol",{className:"nodes","aria-label":n.studio.groupsLabel,children:gc.map((v,y)=>{const w=t.tokens[v.show]??"";return p.jsx("li",{children:p.jsxs("button",{type:"button",className:`node${s===v.id?" chosen":""}`,"aria-pressed":s===v.id,onClick:()=>a(v.id),children:[p.jsx("span",{className:`num${s===v.id?" done":""}`,children:String(y+1).padStart(2,"0")}),p.jsx("span",{className:"lab",children:n.studio.groups[v.id]}),hc(w)?p.jsx("span",{className:"swatch",style:{background:w},"aria-hidden":!0}):p.jsx("span",{className:"node-val",children:w})]})},v.id)})}),p.jsx("div",{className:"stage",children:p.jsx("iframe",{className:"preview",sandbox:"",srcDoc:d,title:O(n.tile.preview,{name:t.name})})}),p.jsxs("section",{className:"panel hud","aria-label":n.studio.groups[s],children:[p.jsx("h2",{className:"lab",children:n.studio.groups[s]}),u.tokens.map(v=>{const y=t.tokens[v]??"";return p.jsxs("label",{className:"token",children:[p.jsx("span",{className:"lab",children:v}),p.jsxs("span",{className:"token-inputs",children:[hc(y)&&p.jsx("input",{type:"color",value:y,"aria-label":v,onChange:w=>r(rc(t,v,w.target.value))}),p.jsx("input",{type:"text",value:y,spellCheck:!1,onChange:w=>r(rc(t,v,w.target.value))})]})]},v)}),c.length>0&&p.jsx("ul",{className:"issues",children:c.map(v=>p.jsxs("li",{className:"notice",children:[n.studio.pairs[v.pair]," · ",v.ratio===null?n.studio.unmeasurable:O(n.studio.ratio,{ratio:g.format(v.ratio),min:g.format(Xd)})]},v.pair))})]})]})]})}const vc="style-shelf.themes",xy=(e,n)=>e.trim().toLocaleLowerCase()===n.trim().toLocaleLowerCase();function Jd(e,n){return e.find(t=>xy(t.name,n))}function yc(e){return e.normalize("NFD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"theme"}function ky(e,n,t,r){const s=n.trim();if(!s||!t.styleId)return null;const a={name:s,styleId:t.styleId,itemIds:[...t.itemIds],updatedAt:r},o=Jd(e,s);if(o)return e.map(c=>c.id===o.id?{...c,...a}:c);const i=new Set(e.map(c=>c.id));let l=`theme-${yc(s)}`;for(let c=2;i.has(l);c++)l=`theme-${yc(s)}-${c}`;return[{id:l,...a},...e]}function _y(e,n){return e.filter(t=>t.id!==n)}function wy(e){return{styleId:e.styleId,itemIds:[...e.itemIds]}}function Sy(e){if(typeof e!="object"||e===null)return!1;const n=e;return typeof n.id=="string"&&typeof n.name=="string"&&n.name.trim()!==""&&typeof n.styleId=="string"&&typeof n.updatedAt=="string"&&Array.isArray(n.itemIds)&&n.itemIds.every(t=>typeof t=="string")}function bc(e){if(!e)return{themes:[],refused:0};try{const n=JSON.parse(e);if(!Array.isArray(n))return{themes:[],refused:1};const t=n.filter(Sy);return{themes:t,refused:n.length-t.length}}catch(n){return console.warn("[style-shelf] stored themes unreadable:",n instanceof Error?n.message:n),{themes:[],refused:1}}}const Iy={"kit.json":"kitJson","tokens.css":"tokensCss","elements.css":"elementsCss","BRIEF.md":"briefMd"};function Cy(e){const{cart:n,catalog:t,lang:r,w:s}=e,a=new Map(t.entries.map(I=>[I.id,I])),o=n.styleId?a.get(n.styleId):void 0,i=n.itemIds.map(I=>a.get(I)).filter(I=>!!I),l=[...new Set([o,...i].filter(I=>!!I).map(I=>I.license))].sort(),c=!!o,d=e.writeState.kind==="done"?e.writeState.outcome:null,[u,g]=k.useState(""),[v,y]=k.useState(null),w=Jd(e.themes,u);return k.useEffect(()=>{const I=m=>{m.key==="Escape"&&e.onClose()};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[e.onClose]),p.jsx("div",{className:"cart-veil",onClick:e.onClose,children:p.jsxs("aside",{className:"cart hud",role:"dialog","aria-label":s.cart.title,onClick:I=>I.stopPropagation(),children:[p.jsxs("header",{className:"cart-head",children:[p.jsx("span",{className:"lab",children:s.cart.title}),p.jsx("button",{type:"button",className:"icon-btn","aria-label":s.cart.close,title:s.cart.close,onClick:e.onClose,children:p.jsx(ve,{name:"close"})})]}),p.jsxs("section",{className:"cart-sec",children:[p.jsxs("h2",{className:"lab",children:[p.jsx("span",{className:`num${c?" done":""}`,children:"01"})," ",s.cart.style]}),o?p.jsx("p",{className:"cart-style",children:An(o.title,r)}):p.jsx("p",{className:"todo",children:s.cart.needStyle})]}),p.jsxs("section",{className:"cart-sec",children:[p.jsxs("h2",{className:"lab",children:[p.jsx("span",{className:`num${i.length?" done":""}`,children:"02"})," ",s.cart.items," · ",i.length]}),i.length===0?p.jsx("p",{className:"muted",children:s.cart.empty}):p.jsx("ul",{className:"cart-items",children:i.map(I=>{const m=An(I.title,r);return p.jsxs("li",{children:[p.jsx("span",{className:"lab",children:s.kindOne[I.kind]}),p.jsx("span",{className:"cart-item-name",children:m}),p.jsx("button",{type:"button",className:"icon-btn small","aria-label":O(s.cart.remove,{name:m}),title:O(s.cart.remove,{name:m}),onClick:()=>e.onRemove(I.id),children:p.jsx(ve,{name:"close",size:14})})]},I.id)})})]}),p.jsxs("section",{className:"cart-sec",children:[p.jsxs("h2",{className:"lab",children:[p.jsx("span",{className:"num",children:"03"})," ",s.cart.licenses]}),p.jsx("p",{className:"licenses",children:l.length?l.map(I=>p.jsx("span",{className:"badge gold",children:I},I)):p.jsx("span",{className:"muted",children:s.cart.empty})})]}),p.jsxs("section",{className:"cart-sec","aria-label":s.themes.title,children:[p.jsxs("h2",{className:"lab",children:[p.jsx("span",{className:`num${e.themes.length?" done":""}`,children:"04"})," ",s.themes.title," · ",e.themes.length]}),p.jsxs("form",{className:"theme-save",onSubmit:I=>{I.preventDefault(),c&&u.trim()&&(e.onSaveTheme(u),g(""))},children:[p.jsx("input",{"aria-label":s.themes.name,placeholder:s.themes.name,value:u,maxLength:60,onChange:I=>g(I.target.value)}),p.jsx("button",{type:"submit",disabled:!c||!u.trim(),title:c?void 0:s.themes.needStyle,children:w?s.themes.update:s.themes.save})]}),e.themes.length===0?p.jsx("p",{className:"muted",children:s.themes.none}):p.jsx("ul",{className:"cart-items themes",children:e.themes.map(I=>{const m=a.get(I.styleId),f=O(s.themes.summary,{style:m?An(m.title,r):s.themes.styleGone,count:I.itemIds.length}),h=v===I.id;return p.jsxs("li",{children:[p.jsxs("span",{className:"theme-meta",children:[p.jsx("span",{className:"cart-item-name",children:I.name}),p.jsx("span",{className:"lab",children:f})]}),p.jsx("button",{type:"button",className:"icon-btn small","aria-label":O(s.themes.load,{name:I.name}),onClick:()=>{y(null),e.onLoadTheme(I)},children:p.jsx(ve,{name:"upload",size:14})}),p.jsx("button",{type:"button",className:`icon-btn small${h?" danger":""}`,"aria-label":O(h?s.themes.confirm:s.themes.delete,{name:I.name}),title:O(h?s.themes.confirm:s.themes.delete,{name:I.name}),onClick:()=>{h?(e.onDeleteTheme(I.id),y(null)):y(I.id)},children:p.jsx(ve,{name:"close",size:14})})]},I.id)})})]}),p.jsxs("div",{className:"cart-actions",children:[e.inMnemosyne?p.jsx("button",{type:"button",className:"primary",disabled:!c||e.writeState.kind==="writing",onClick:e.onWrite,children:e.writeState.kind==="writing"?s.cart.writing:s.cart.write}):p.jsx("button",{type:"button",className:"primary",disabled:!c,onClick:e.onDownload,children:s.cart.download}),p.jsx("button",{type:"button",disabled:!c,onClick:e.onCopyBrief,children:e.copyState.kind==="copied"&&e.copyState.what==="brief"?s.cart.copied:s.cart.copyBrief})]}),p.jsxs("section",{className:"cart-explain","aria-label":s.explain.title,children:[p.jsx("span",{className:"lab",children:s.explain.title}),e.inMnemosyne?p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:[p.jsx("strong",{children:s.cart.write})," · ",O(s.explain.write,{dir:`${pr}/`})]}),p.jsx("ul",{className:"kit-files",children:Kv.map(I=>p.jsxs("li",{children:[p.jsxs("code",{children:[pr,"/",I]}),p.jsx("span",{children:s.explain.files[Iy[I]]})]},I))}),p.jsx("p",{className:"muted",children:s.explain.nothingElse}),p.jsx("p",{className:"muted",children:s.explain.permission})]}):p.jsxs("p",{children:[p.jsx("strong",{children:s.cart.download})," · ",s.explain.download]}),p.jsxs("p",{children:[p.jsx("strong",{children:s.cart.copyBrief})," · ",s.explain.copy]})]}),e.copyState.kind==="failed"&&p.jsx("p",{className:"error",role:"alert",children:O(s.cart.copyFailed,{detail:e.copyState.detail})}),d&&d.ok&&p.jsxs("ol",{className:"rail","aria-label":O(s.cart.written,{count:d.written.length}),children:[p.jsxs("li",{className:"done",children:[p.jsx("span",{className:"num done",children:"01"}),p.jsx("span",{className:"lab",children:s.cart.folder}),p.jsx("code",{className:"path",children:d.dir})]}),p.jsxs("li",{className:"done",children:[p.jsx("span",{className:"num done",children:"02"}),p.jsx("span",{className:"lab",children:s.cart.files}),p.jsx("span",{children:O(s.cart.written,{count:d.written.length})})]}),p.jsxs("li",{children:[p.jsx("span",{className:"num",children:"03"}),p.jsx("span",{className:"lab",children:s.cart.ide}),p.jsx("button",{type:"button",onClick:e.onCopyInstruction,children:e.copyState.kind==="copied"&&e.copyState.what==="instruction"?s.cart.copied:s.cart.copyInstruction})]})]}),d&&!d.ok&&!d.cancelled&&p.jsxs("p",{className:"error",role:"alert",children:[O(s.cart.writeFailed,{step:d.step,detail:d.error}),d.written.length>0&&` · ${O(s.cart.writtenBefore,{count:d.written.length})}`]})]})})}function My({state:e,w:n}){const t=(e==null?void 0:e.kind)??"pending",r=e?n.host[e.kind]:n.host.pending;return p.jsxs("span",{className:`host-badge ${t}`,role:"status","aria-live":"polite",children:[p.jsx("span",{className:"dot","aria-hidden":!0}),r]})}function Ey({doc:e,styleName:n,scope:t,w:r,onClose:s,copy:a}){k.useEffect(()=>{const i=l=>{l.key==="Escape"&&(l.stopImmediatePropagation(),s())};return window.addEventListener("keydown",i,!0),()=>window.removeEventListener("keydown",i,!0)},[s]);const o=(a==null?void 0:a.state.kind)==="copied"&&a.state.what==="brief";return p.jsxs("div",{className:"studio page-view",role:"dialog","aria-label":a?r.page.copyTitle:r.page.title,children:[p.jsxs("header",{className:"studio-bar",children:[p.jsx("span",{className:"lab brand",children:a?r.page.copyTitle:r.page.title}),p.jsx("span",{className:"page-style",children:n}),p.jsx("span",{className:"lab",children:t}),p.jsxs("div",{className:"studio-actions",children:[a&&p.jsx("button",{type:"button",className:"primary",onClick:a.onCopy,children:o?r.cart.copied:r.page.copy}),p.jsx("button",{type:"button",className:"icon-btn","aria-label":r.page.close,title:r.page.close,onClick:s,children:p.jsx(ve,{name:"close"})})]})]}),(a==null?void 0:a.state.kind)==="failed"&&p.jsx("p",{className:"error",role:"alert",children:O(r.cart.copyFailed,{detail:a.state.detail})}),p.jsxs("div",{className:`page-body${a?" with-brief":""}`,children:[p.jsx("iframe",{className:"page-frame",sandbox:"",srcDoc:e,title:r.page.frame}),a&&p.jsxs("section",{className:"brief hud","aria-label":r.page.briefLabel,children:[p.jsx("span",{className:"lab",children:r.page.briefLabel}),p.jsx("pre",{className:"brief-text",children:a.text})]})]})]})}function Ty({handle:e,w:n,onOpen:t}){const[r,s]=k.useState(!1),a=q1(e),o=O(n.tile.proposedBy,{name:`@${e}`});return p.jsxs("a",{className:"credit",href:a,target:"_blank",rel:"noopener noreferrer","aria-label":o,title:o,onClick:i=>{i.preventDefault(),t(a)},children:[r?p.jsx("span",{className:"credit-initial","aria-hidden":"true",children:e[0].toUpperCase()}):p.jsx("img",{src:Y1(e),alt:"",width:20,height:20,loading:"lazy",referrerPolicy:"no-referrer",onError:()=>s(!0)}),p.jsxs("span",{className:"credit-handle",children:["@",e]})]})}const Ny=15e3,jy=k.memo(function({entry:n,previewStyle:t,inCart:r,favorite:s,lang:a,w:o,onToggle:i,onFavorite:l,onOpenLink:c,onAtelier:d}){const u=An(n.title,a),g=n.kind==="engine"?An(n.use,a):"",v=k.useMemo(()=>py(t,n,u,g),[t,n,u,g]),[y,w]=k.useState(v),[I,m]=k.useState(null),f=k.useRef(null),h=k.useRef(!1),x=y!==v||I!==y;k.useEffect(()=>{const E=f.current;if(!E||typeof IntersectionObserver>"u")return;const F=new IntersectionObserver(([A])=>{h.current=A.isIntersecting});return F.observe(E),()=>F.disconnect()},[]),k.useEffect(()=>{if(v!==y)return Fo.schedule(()=>w(v),h.current)},[v,y]),k.useEffect(()=>{if(I===y)return;const E=setTimeout(()=>m(y),Ny);return()=>clearTimeout(E)},[I,y]);const S=n.kind==="style"?r?o.tile.chosen:O(o.tile.choose,{name:u}):O(r?o.tile.remove:o.tile.add,{name:u}),T=O(s?o.tile.unfavorite:o.tile.favorite,{name:u}),C=n.kind==="style"?O(n.personal?o.tile.edit:o.tile.adapt,{name:u}):"";return p.jsxs("article",{ref:f,className:`tile hud${r?" chosen":""}`,"data-entry":n.id,"data-kind":n.kind,"aria-busy":x,children:[p.jsxs("div",{className:"preview-wrap",children:[p.jsx("iframe",{className:`preview${x?" stale":""}`,sandbox:"",srcDoc:y,title:O(o.tile.preview,{name:u}),loading:"lazy",onLoad:()=>m(y)}),x&&p.jsxs("div",{className:"preview-loading",role:"status",children:[p.jsx("span",{className:"ring","aria-hidden":"true"}),p.jsx("span",{className:"lab",children:o.tile.loading})]}),n.github&&p.jsx(Ty,{handle:n.github,w:o,onOpen:c})]}),p.jsxs("footer",{className:"tile-foot",children:[p.jsxs("div",{className:"tile-meta",children:[p.jsx("span",{className:"lab",children:o.kindOne[n.kind]}),p.jsx("span",{className:"tile-name",children:u})]}),p.jsxs("span",{className:"tile-tags",children:[n.kind==="style"&&n.personal&&p.jsx("span",{className:"badge holo",children:o.tile.personal}),n.tier==="premium"&&p.jsx("span",{className:"badge gold",children:o.tile.premium}),p.jsx("span",{className:"badge gold",title:n.author,children:n.license})]}),n.kind==="style"&&d&&p.jsx("button",{type:"button",className:"icon-btn","aria-label":C,title:C,onClick:()=>d(n),children:p.jsx(ve,{name:n.personal?"pen":"sliders"})}),p.jsx("button",{type:"button",className:`icon-btn fav${s?" chosen":""}`,"aria-pressed":s,"aria-label":T,title:T,onClick:()=>l(n.id),children:p.jsx(ve,{name:"star"})}),p.jsx("button",{type:"button",className:`icon-btn${r?" chosen":""}`,"aria-pressed":r,"aria-label":S,title:S,onClick:()=>i(n),children:p.jsx(ve,{name:r?"check":"plus"})})]})]})});function Oy(e,n=()=>new Date){const t=Gd(e.cart,e.catalog,n().toISOString());if(!t.ok)return{ready:!1,missing:["style"],itemIds:[...e.cart.itemIds]};const r=qd(e.cart,e.catalog),s=Yd(r,e.premiumAccess);return s&&console.info(`[style-shelf] ${s}`),{ready:!0,kit:t.kit,brief:Ui(t.kit,{embedFiles:!0}),writtenTo:e.writtenTo,premium:{ids:r,access:e.premiumAccess}}}function Ay(e){return{cart:()=>Oy(e())}}function Uy(e){const n=k.useRef(e);return n.current=e,k.useEffect(()=>{if(typeof cn.onAgentActions!="function"){console.warn("[style-shelf] this SDK build has no onAgentActions; the IDE cannot read the cart");return}const t=cn.onAgentActions(Ay(()=>n.current));return t.ready.catch(r=>console.warn("[style-shelf] agent actions not served:",r instanceof Error?r.message:r)),()=>t.off()},[]),null}const Ly=1500,Ry=15e3;function Py(e,n){if(!n.framed())return e({kind:"standalone"}),()=>{};let t=!0,r=!1;const s=n.setTimer(()=>{t&&!r&&e({kind:"foreign"})},Ly);return n.ask(Ry).then(a=>{t&&(r=!0,n.clearTimer(s),e(zv(a)))},a=>{t&&console.info("[style-shelf] no Mnemosyne host answered:",a instanceof Error?a.message:a)}),()=>{t=!1,n.clearTimer(s)}}function Fy(e=Vd){const[n,t]=k.useState(null);return k.useEffect(()=>Py(t,e),[e]),n}function zy(){const[e,n]=k.useState(()=>typeof navigator<"u"&&navigator.language||"en");return k.useEffect(()=>Lv(t=>{t.lang&&n(t.lang)},{apply:!1}),[]),e}const xc=["small","medium","large"],kc=["all","favorites",...Oo,"premium"],Dy={small:"grid9",medium:"grid4",large:"grid1"},Hy="hud-night",$y=(e,n)=>window.fetch(e,n);function _c(e,n){return n.length===0?e:{entries:[...n.map(wv),...e.entries],refused:e.refused}}function By(e,n){try{return Rd(ig((n==null?void 0:n.getItem(Ld))??null),e)}catch(t){return console.warn("[style-shelf] stored cart unreadable, starting empty:",t),{cart:hs,dropped:[]}}}function Wy({catalog:e=ov(),detectDeps:n=Vd,doors:t=Fv,mirror:r=ty,contribRepo:s=iv,contribFetch:a=$y,openUrl:o=$v,now:i=()=>new Date}){const l=Fy(n),c=zy(),d=vv(c),u=k.useMemo(()=>Xv(),[]),g=!!l&&Dv(l),v=ay(u),y=k.useMemo(()=>_c(e,v.styles),[e,v.styles]),[{cart:w,dropped:I}]=k.useState(()=>{let b=[];try{b=Ro((u==null?void 0:u.getItem(Uo))??null).styles}catch(N){console.warn("[style-shelf] storage unreadable:",N)}return By(_c(e,b),u)}),[m,f]=k.useState(w),[h,x]=k.useState(()=>uc(u,"style-shelf.filter",kc,"all")),[S,T]=k.useState(()=>uc(u,"style-shelf.size",xc,"medium")),[C,E]=k.useState("catalog"),[F,A]=k.useState({kind:"loading"}),[ke,gn]=k.useState(!1),[Ke,zn]=k.useState({kind:"idle"}),[Pr,rt]=k.useState({kind:"idle"}),[Qe,M]=k.useState(null),[U,L]=k.useState(null),[H,Z]=k.useState(null),[Dn,_e]=k.useState(null),st=k.useRef(null),[Pe]=k.useState(()=>{try{return bc((u==null?void 0:u.getItem(vc))??null)}catch(b){return console.warn("[style-shelf] storage unreadable:",b),{themes:[],refused:0}}}),[Te,aa]=k.useState(Pe.themes),[at,oa]=k.useState(null),[hn,Ri]=k.useState(()=>{try{return lc((u==null?void 0:u.getItem(ic))??null)}catch(b){return console.warn("[style-shelf] storage unreadable:",b),[]}});k.useEffect(()=>Wn(u,Ld,JSON.stringify(m)),[u,m]),k.useEffect(()=>Wn(u,"style-shelf.filter",h),[u,h]),k.useEffect(()=>Wn(u,"style-shelf.size",S),[u,S]),k.useEffect(()=>Wn(u,ic,JSON.stringify(hn)),[u,hn]),k.useEffect(()=>Wn(u,vc,JSON.stringify(Te)),[u,Te]);const ep=k.useMemo(()=>({personal:Wd(v.styles),themes:JSON.stringify(Te),favorites:JSON.stringify(hn)}),[v.styles,Te,hn]),[Pi,np]=k.useState(0),tp=k.useCallback((b,N,D)=>{if(b==="personal")return v.restore(N,D);if(b==="themes"){const Hn=bc(N);np(Hn.refused);const ct=D==="merge"?Hn.themes.filter(zr=>!Te.some(da=>da.id===zr.id)):Hn.themes;return ct.length>0&&aa(zr=>D==="merge"?[...zr,...ct.filter(da=>!zr.some(Ip=>Ip.id===da.id))]:ct),ct.length}const V=lc(N),lt=D==="merge"?V.filter(Hn=>!hn.includes(Hn)):V;return lt.length>0&&Ri(Hn=>D==="merge"?[...V,...Hn.filter(ct=>!V.includes(ct))]:lt),lt.length},[v,Te,hn]),Fe=sy(g,r,ep,tp),{markChanged:qe}=Fe,ia=k.useMemo(()=>y.entries.filter(b=>b.kind==="style"),[y]),rp=ia.find(b=>b.id===m.styleId),Fi=k.useSyncExternalStore(Fo.subscribe,Fo.pending),Ye=rp??ia.find(b=>b.id===Hy)??ia[0],zt=k.useMemo(()=>new Set(Wv(hn,new Set(y.entries.map(b=>b.id)))),[hn,y]),la=k.useMemo(()=>{const b=new Map([["all",y.entries.length]]);zt.size>0&&b.set("favorites",zt.size);for(const N of y.entries)b.set(N.kind,(b.get(N.kind)??0)+1),N.tier==="premium"&&b.set("premium",(b.get("premium")??0)+1);return b},[y,zt]),ot=h==="all"||la.has(h)?h:"all",zi=ot==="all"?y.entries:y.entries.filter(b=>ot==="premium"?b.tier==="premium":ot==="favorites"?zt.has(b.id):b.kind===ot),Dt=k.useMemo(()=>{const b=new Map(y.entries.map(V=>[V.id,V])),N=m.itemIds.map(V=>b.get(V)).filter(V=>!!V),D=N.length>0?N:y.entries;return{fromCart:N.length,elements:D.filter(V=>sv(V.kind)),icons:D.filter(V=>V.kind==="icons"),name:V=>{const lt=b.get(V);return lt?An(lt.title,c):V}}},[y,m.itemIds,c]),sp=k.useMemo(()=>at&&Ye?my(Ye,Dt,Dt.name):"",[at,Ye,Dt]),ap=Ke.kind==="done"&&Ke.outcome.ok?Ke.outcome.dir:null,ca=iy(l);k.useEffect(()=>{if(C!=="contrib"||!s)return;let b=!0;return A({kind:"loading"}),fv(s,{fetch:a,now:i,read:()=>{try{return(u==null?void 0:u.getItem(tc))??null}catch(N){return console.warn("[style-shelf] storage unreadable:",N),null}},write:N=>Wn(u,tc,N)}).then(N=>{b&&A(N)}),()=>{b=!1}},[C,s,a,u]);const vn=k.useCallback(b=>{f(b),zn({kind:"idle"}),rt({kind:"idle"})},[]),op=k.useCallback(b=>{vn(N=>b.kind==="style"?Xl(N,N.styleId===b.id?null:b.id):rg(N,b.id))},[vn]),ip=k.useCallback(b=>{qe("favorites"),Ri(N=>Bv(N,b))},[qe]),lp=k.useCallback(b=>{qe("themes"),aa(N=>ky(N,b,m,i().toISOString())??N)},[m,i,qe]),cp=k.useCallback(b=>{const{cart:N,dropped:D}=Rd(wy(b),y);vn(()=>N),_e(D.length>0?{tone:"notice",text:O(d.themes.dropped,{count:D.length})}:null)},[y,vn,d]),up=k.useCallback(b=>{qe("themes"),aa(N=>_y(N,b))},[qe]),dp=k.useCallback(b=>vn(N=>sg(N,b)),[vn]),pp=k.useCallback(()=>gn(!1),[]),it=k.useCallback(()=>{const b=Gd(m,y,i().toISOString()),N=Yd(qd(m,y),ca);return b.ok&&N&&console.info(`[style-shelf] ${N}`),b},[m,y,i,ca]),fp=k.useCallback(async()=>{const b=it();if(!b.ok)return;zn({kind:"writing"});const N=await Zv(b.files,t);!N.ok&&!N.cancelled&&console.warn(`[style-shelf] kit not written at ${N.step}: ${N.error}`),zn(N.ok||!N.cancelled?{kind:"done",outcome:N}:{kind:"idle"})},[it,t]),mp=k.useCallback(()=>{const b=it();b.ok&&dc("style-shelf-kit.json",b.files[0].content)},[it]),ua=k.useCallback(async(b,N)=>{const D=await ey(b);D&&console.warn("[style-shelf] copy refused:",D),rt(D?{kind:"failed",detail:D}:{kind:"copied",what:N})},[]),gp=k.useCallback(()=>{const b=it();b.ok&&oa({brief:Ui(b.kit,{embedFiles:!0})})},[it]),hp=k.useCallback(()=>oa(null),[]),vp=k.useCallback(()=>void ua(d.cart.instruction,"instruction"),[ua,d]),Fr=k.useCallback(()=>new Set(y.entries.map(b=>b.id)),[y]),yp=k.useCallback(b=>{L(null);const N=v.styles.find(V=>V.id===b.id);if(N){M({draft:N,isNew:!1});return}const D=O(d.studio.newName,{name:An(b.title,c)});M({draft:_v(b,D,Fr(),i().toISOString()),isNew:!0})},[v.styles,d,c,Fr,i]),bp=k.useCallback(b=>{qe("personal"),v.keep({...b,updatedAt:i().toISOString()}),m.styleId===b.id&&zn({kind:"idle"}),M(null)},[v,m.styleId,i,qe]),xp=k.useCallback(b=>{qe("personal"),v.remove(b),m.styleId===b&&vn(N=>Xl(N,null)),M(null)},[v,m.styleId,vn,qe]),kp=k.useCallback(b=>dc(`${b.id}.json`,Cv(b)),[]),_p=k.useCallback(()=>M(null),[]),wp=k.useCallback(async b=>{if(!s)return;const N=jv(s,b);if(!N.ok){L(N.error==="NO_AUTHOR"?d.contrib.noAuthor:O(d.contrib.tooLong,{size:N.size}));return}const D=await o(N.url,g);Z(D===tr?N.url:null),L(D&&D!==tr?O(d.contrib.openFailed,{detail:D}):null)},[s,d,o,g]),Sp=k.useCallback(async b=>{if(!b||!Ye)return;let N;try{N=await Jv(b)}catch(V){_e({tone:"error",text:O(d.personal.importFailed,{detail:V instanceof Error?V.message:String(V)})});return}const D=Mv(N,Ye,Fr(),i().toISOString());if("error"in D){_e({tone:"error",text:O(d.personal.importFailed,{detail:D.error})});return}_e({tone:"notice",text:O(d.personal.imported,{name:D.name})}),L(null),M({draft:D,isNew:!0})},[Ye,Fr,i,d]),Di=k.useCallback(b=>{o(b,g).then(N=>{Z(N===tr?b:null),N&&N!==tr&&_e({tone:"error",text:O(d.contrib.openFailed,{detail:N})})})},[o,g,d]),Hi=og(m),Ne=[];return y.refused.length>0&&Ne.push({tone:"error",text:O(d.catalog.refused,{count:y.refused.length}),title:y.refused.map(b=>`${b.path}: ${b.reason}`).join(`
`)}),I.length>0&&Ne.push({tone:"notice",text:O(d.catalog.dropped,{count:I.length}),title:I.join(", ")}),Pe.refused+Pi>0&&Ne.push({tone:"error",text:O(d.themes.refused,{count:Pe.refused+Pi})}),v.refusedAtLoad>0&&Ne.push({tone:"error",text:O(d.personal.refused,{count:v.refusedAtLoad})}),Fe.restored.personal>0&&Ne.push({tone:"notice",text:O(d.personal.restored,{count:Fe.restored.personal})}),Fe.restored.themes>0&&Ne.push({tone:"notice",text:O(d.hostCopy.themes,{count:Fe.restored.themes})}),Fe.restored.favorites>0&&Ne.push({tone:"notice",text:O(d.hostCopy.favorites,{count:Fe.restored.favorites})}),Fe.readError&&Ne.push({tone:"error",text:O(d.hostCopy.unreadable,{detail:Fe.readError})}),Fe.error&&Ne.push({tone:"error",text:O(d.personal.mirrorFailed,{detail:Fe.error})}),Dn&&Ne.push(Dn),p.jsxs("div",{className:"hud-root app",children:[p.jsxs("header",{className:"topbar",children:[p.jsx("span",{className:"brand lab",children:d.appTitle}),p.jsx(My,{state:l,w:d}),s&&p.jsxs("div",{className:"segmented views",role:"group","aria-label":d.contrib.views,children:[p.jsx("button",{type:"button",className:`icon-btn${C==="catalog"?" chosen":""}`,"aria-pressed":C==="catalog",onClick:()=>E("catalog"),children:d.contrib.catalogTab}),p.jsx("button",{type:"button",className:`icon-btn${C==="contrib"?" chosen":""}`,"aria-pressed":C==="contrib",onClick:()=>E("contrib"),children:d.contrib.tab})]}),p.jsx("button",{type:"button",className:"icon-btn","aria-label":d.page.open,title:d.page.open,onClick:()=>oa({brief:null}),children:p.jsx(ve,{name:"eye"})}),p.jsx("button",{type:"button",className:"icon-btn","aria-label":d.personal.import,title:d.personal.import,onClick:()=>{var b;return(b=st.current)==null?void 0:b.click()},children:p.jsx(ve,{name:"upload"})}),p.jsx("input",{ref:st,type:"file",accept:".json,application/json",hidden:!0,onChange:b=>{var N;Sp((N=b.target.files)==null?void 0:N[0]),b.target.value=""}}),p.jsxs("button",{type:"button",className:"cart-btn","aria-label":`${d.cart.open} · ${Hi}`,title:d.cart.open,onClick:()=>gn(!0),children:[p.jsx(ve,{name:"cart"}),p.jsx("span",{className:"count",children:Hi})]})]}),C==="catalog"&&p.jsxs("div",{className:"toolbar",children:[p.jsx("div",{className:"kinds",role:"group","aria-label":d.kinds.label,children:kc.filter(b=>b==="all"||la.has(b)).map(b=>p.jsxs("button",{type:"button",className:`chip-tile${ot===b?" chosen":""}`,"aria-pressed":ot===b,onClick:()=>x(b),children:[b==="all"?d.kinds.all:b==="favorites"?d.kinds.favorites:b==="premium"?d.premium.label:d.kinds[b],p.jsx("span",{className:"lab n",children:la.get(b)??0})]},b))}),p.jsx("div",{className:"segmented",role:"group","aria-label":d.view.label,children:xc.map(b=>p.jsx("button",{type:"button",className:`icon-btn${S===b?" chosen":""}`,"aria-pressed":S===b,"aria-label":d.view[b],title:d.view[b],onClick:()=>T(b),children:p.jsx(ve,{name:Dy[b]})},b))}),p.jsx("p",{className:"repaint lab",role:"status","aria-live":"polite",children:Fi>0?O(d.tile.repainting,{n:Fi}):""})]}),(Ne.length>0||H&&!Qe)&&p.jsxs("div",{className:"notices",children:[Ne.map(b=>p.jsx("p",{className:b.tone,title:b.title,children:b.text},b.text)),H&&!Qe&&p.jsx("p",{className:"notice",children:p.jsx("a",{className:"link",href:H,target:"_blank",rel:"noopener noreferrer",children:d.contrib.openHere})})]}),C==="contrib"&&s?p.jsx(bv,{view:F,lang:c,w:d,onOpen:Di}):Ye&&zi.length>0?p.jsx("main",{className:`grid size-${S}`,children:zi.map(b=>p.jsx(jy,{entry:b,previewStyle:Ye,inCart:ag(m,b.id),favorite:zt.has(b.id),lang:c,w:d,onToggle:op,onFavorite:ip,onOpenLink:Di,onAtelier:yp},b.id))}):p.jsx("p",{className:"muted empty",children:d.catalog.empty}),ke&&p.jsx(Cy,{cart:m,catalog:y,lang:c,w:d,inMnemosyne:g,writeState:Ke,copyState:Pr,onRemove:dp,onClose:pp,onWrite:fp,onDownload:mp,onCopyBrief:gp,onCopyInstruction:vp,themes:Te,onSaveTheme:lp,onLoadTheme:cp,onDeleteTheme:up}),at&&Ye&&p.jsx(Ey,{doc:sp,styleName:An(Ye.title,c),scope:Dt.fromCart>0?O(d.page.fromCart,{count:Dt.fromCart}):d.page.allElements,w:d,onClose:hp,copy:at.brief===null?void 0:{text:at.brief,state:Pr,onCopy:()=>void ua(at.brief,"brief")}}),Qe&&p.jsx(by,{draft:Qe.draft,isNew:Qe.isNew,lang:c,w:d,onKeep:bp,onDelete:xp,onClose:_p,onExport:kp,onPropose:s?wp:void 0,proposeError:U,linkHere:H},Qe.draft.id),g&&p.jsx(Uy,{cart:m,catalog:y,writtenTo:ap,premiumAccess:ca})]})}Fa.createRoot(document.getElementById("root")).render(p.jsx(Wp.StrictMode,{children:p.jsx(Wy,{})}));
