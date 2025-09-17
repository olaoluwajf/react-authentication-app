(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function s(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(c){if(c.ep)return;c.ep=!0;const d=s(c);fetch(c.href,d)}})();function Eh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ml={exports:{}},Wi={},Fl={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function Hg(){if(mf)return oe;mf=1;var i=Symbol.for("react.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),M=Symbol.iterator;function C(_){return _===null||typeof _!="object"?null:(_=M&&_[M]||_["@@iterator"],typeof _=="function"?_:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ue=Object.assign,J={};function ie(_,A,re){this.props=_,this.context=A,this.refs=J,this.updater=re||ae}ie.prototype.isReactComponent={},ie.prototype.setState=function(_,A){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,A,"setState")},ie.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function be(){}be.prototype=ie.prototype;function X(_,A,re){this.props=_,this.context=A,this.refs=J,this.updater=re||ae}var Pe=X.prototype=new be;Pe.constructor=X,ue(Pe,ie.prototype),Pe.isPureReactComponent=!0;var _e=Array.isArray,ye=Object.prototype.hasOwnProperty,ze={current:null},Oe={key:!0,ref:!0,__self:!0,__source:!0};function nt(_,A,re){var se,le={},ce=null,we=null;if(A!=null)for(se in A.ref!==void 0&&(we=A.ref),A.key!==void 0&&(ce=""+A.key),A)ye.call(A,se)&&!Oe.hasOwnProperty(se)&&(le[se]=A[se]);var me=arguments.length-2;if(me===1)le.children=re;else if(1<me){for(var Ie=Array(me),Ze=0;Ze<me;Ze++)Ie[Ze]=arguments[Ze+2];le.children=Ie}if(_&&_.defaultProps)for(se in me=_.defaultProps,me)le[se]===void 0&&(le[se]=me[se]);return{$$typeof:i,type:_,key:ce,ref:we,props:le,_owner:ze.current}}function je(_,A){return{$$typeof:i,type:_.type,key:A,ref:_.ref,props:_.props,_owner:_._owner}}function Xe(_){return typeof _=="object"&&_!==null&&_.$$typeof===i}function Ge(_){var A={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(re){return A[re]})}var te=/\/+/g;function ne(_,A){return typeof _=="object"&&_!==null&&_.key!=null?Ge(""+_.key):A.toString(36)}function de(_,A,re,se,le){var ce=typeof _;(ce==="undefined"||ce==="boolean")&&(_=null);var we=!1;if(_===null)we=!0;else switch(ce){case"string":case"number":we=!0;break;case"object":switch(_.$$typeof){case i:case n:we=!0}}if(we)return we=_,le=le(we),_=se===""?"."+ne(we,0):se,_e(le)?(re="",_!=null&&(re=_.replace(te,"$&/")+"/"),de(le,A,re,"",function(Ze){return Ze})):le!=null&&(Xe(le)&&(le=je(le,re+(!le.key||we&&we.key===le.key?"":(""+le.key).replace(te,"$&/")+"/")+_)),A.push(le)),1;if(we=0,se=se===""?".":se+":",_e(_))for(var me=0;me<_.length;me++){ce=_[me];var Ie=se+ne(ce,me);we+=de(ce,A,re,Ie,le)}else if(Ie=C(_),typeof Ie=="function")for(_=Ie.call(_),me=0;!(ce=_.next()).done;)ce=ce.value,Ie=se+ne(ce,me++),we+=de(ce,A,re,Ie,le);else if(ce==="object")throw A=String(_),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return we}function Te(_,A,re){if(_==null)return _;var se=[],le=0;return de(_,se,"","",function(ce){return A.call(re,ce,le++)}),se}function Ee(_){if(_._status===-1){var A=_._result;A=A(),A.then(function(re){(_._status===0||_._status===-1)&&(_._status=1,_._result=re)},function(re){(_._status===0||_._status===-1)&&(_._status=2,_._result=re)}),_._status===-1&&(_._status=0,_._result=A)}if(_._status===1)return _._result.default;throw _._result}var fe={current:null},U={transition:null},G={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:U,ReactCurrentOwner:ze};function b(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:Te,forEach:function(_,A,re){Te(_,function(){A.apply(this,arguments)},re)},count:function(_){var A=0;return Te(_,function(){A++}),A},toArray:function(_){return Te(_,function(A){return A})||[]},only:function(_){if(!Xe(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},oe.Component=ie,oe.Fragment=s,oe.Profiler=c,oe.PureComponent=X,oe.StrictMode=a,oe.Suspense=w,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,oe.act=b,oe.cloneElement=function(_,A,re){if(_==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+_+".");var se=ue({},_.props),le=_.key,ce=_.ref,we=_._owner;if(A!=null){if(A.ref!==void 0&&(ce=A.ref,we=ze.current),A.key!==void 0&&(le=""+A.key),_.type&&_.type.defaultProps)var me=_.type.defaultProps;for(Ie in A)ye.call(A,Ie)&&!Oe.hasOwnProperty(Ie)&&(se[Ie]=A[Ie]===void 0&&me!==void 0?me[Ie]:A[Ie])}var Ie=arguments.length-2;if(Ie===1)se.children=re;else if(1<Ie){me=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)me[Ze]=arguments[Ze+2];se.children=me}return{$$typeof:i,type:_.type,key:le,ref:ce,props:se,_owner:we}},oe.createContext=function(_){return _={$$typeof:h,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},_.Provider={$$typeof:d,_context:_},_.Consumer=_},oe.createElement=nt,oe.createFactory=function(_){var A=nt.bind(null,_);return A.type=_,A},oe.createRef=function(){return{current:null}},oe.forwardRef=function(_){return{$$typeof:p,render:_}},oe.isValidElement=Xe,oe.lazy=function(_){return{$$typeof:O,_payload:{_status:-1,_result:_},_init:Ee}},oe.memo=function(_,A){return{$$typeof:T,type:_,compare:A===void 0?null:A}},oe.startTransition=function(_){var A=U.transition;U.transition={};try{_()}finally{U.transition=A}},oe.unstable_act=b,oe.useCallback=function(_,A){return fe.current.useCallback(_,A)},oe.useContext=function(_){return fe.current.useContext(_)},oe.useDebugValue=function(){},oe.useDeferredValue=function(_){return fe.current.useDeferredValue(_)},oe.useEffect=function(_,A){return fe.current.useEffect(_,A)},oe.useId=function(){return fe.current.useId()},oe.useImperativeHandle=function(_,A,re){return fe.current.useImperativeHandle(_,A,re)},oe.useInsertionEffect=function(_,A){return fe.current.useInsertionEffect(_,A)},oe.useLayoutEffect=function(_,A){return fe.current.useLayoutEffect(_,A)},oe.useMemo=function(_,A){return fe.current.useMemo(_,A)},oe.useReducer=function(_,A,re){return fe.current.useReducer(_,A,re)},oe.useRef=function(_){return fe.current.useRef(_)},oe.useState=function(_){return fe.current.useState(_)},oe.useSyncExternalStore=function(_,A,re){return fe.current.useSyncExternalStore(_,A,re)},oe.useTransition=function(){return fe.current.useTransition()},oe.version="18.3.1",oe}var gf;function lu(){return gf||(gf=1,Fl.exports=Hg()),Fl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf;function Wg(){if(yf)return Wi;yf=1;var i=lu(),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(p,w,T){var O,M={},C=null,ae=null;T!==void 0&&(C=""+T),w.key!==void 0&&(C=""+w.key),w.ref!==void 0&&(ae=w.ref);for(O in w)a.call(w,O)&&!d.hasOwnProperty(O)&&(M[O]=w[O]);if(p&&p.defaultProps)for(O in w=p.defaultProps,w)M[O]===void 0&&(M[O]=w[O]);return{$$typeof:n,type:p,key:C,ref:ae,props:M,_owner:c.current}}return Wi.Fragment=s,Wi.jsx=h,Wi.jsxs=h,Wi}var vf;function Kg(){return vf||(vf=1,Ml.exports=Wg()),Ml.exports}var q=Kg(),Xt=lu();const wt=Eh(Xt);var _o={},Ul={exports:{}},vt={},Vl={exports:{}},bl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf;function Gg(){return wf||(wf=1,(function(i){function n(U,G){var b=U.length;U.push(G);e:for(;0<b;){var _=b-1>>>1,A=U[_];if(0<c(A,G))U[_]=G,U[b]=A,b=_;else break e}}function s(U){return U.length===0?null:U[0]}function a(U){if(U.length===0)return null;var G=U[0],b=U.pop();if(b!==G){U[0]=b;e:for(var _=0,A=U.length,re=A>>>1;_<re;){var se=2*(_+1)-1,le=U[se],ce=se+1,we=U[ce];if(0>c(le,b))ce<A&&0>c(we,le)?(U[_]=we,U[ce]=b,_=ce):(U[_]=le,U[se]=b,_=se);else if(ce<A&&0>c(we,b))U[_]=we,U[ce]=b,_=ce;else break e}}return G}function c(U,G){var b=U.sortIndex-G.sortIndex;return b!==0?b:U.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;i.unstable_now=function(){return d.now()}}else{var h=Date,p=h.now();i.unstable_now=function(){return h.now()-p}}var w=[],T=[],O=1,M=null,C=3,ae=!1,ue=!1,J=!1,ie=typeof setTimeout=="function"?setTimeout:null,be=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Pe(U){for(var G=s(T);G!==null;){if(G.callback===null)a(T);else if(G.startTime<=U)a(T),G.sortIndex=G.expirationTime,n(w,G);else break;G=s(T)}}function _e(U){if(J=!1,Pe(U),!ue)if(s(w)!==null)ue=!0,Ee(ye);else{var G=s(T);G!==null&&fe(_e,G.startTime-U)}}function ye(U,G){ue=!1,J&&(J=!1,be(nt),nt=-1),ae=!0;var b=C;try{for(Pe(G),M=s(w);M!==null&&(!(M.expirationTime>G)||U&&!Ge());){var _=M.callback;if(typeof _=="function"){M.callback=null,C=M.priorityLevel;var A=_(M.expirationTime<=G);G=i.unstable_now(),typeof A=="function"?M.callback=A:M===s(w)&&a(w),Pe(G)}else a(w);M=s(w)}if(M!==null)var re=!0;else{var se=s(T);se!==null&&fe(_e,se.startTime-G),re=!1}return re}finally{M=null,C=b,ae=!1}}var ze=!1,Oe=null,nt=-1,je=5,Xe=-1;function Ge(){return!(i.unstable_now()-Xe<je)}function te(){if(Oe!==null){var U=i.unstable_now();Xe=U;var G=!0;try{G=Oe(!0,U)}finally{G?ne():(ze=!1,Oe=null)}}else ze=!1}var ne;if(typeof X=="function")ne=function(){X(te)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Te=de.port2;de.port1.onmessage=te,ne=function(){Te.postMessage(null)}}else ne=function(){ie(te,0)};function Ee(U){Oe=U,ze||(ze=!0,ne())}function fe(U,G){nt=ie(function(){U(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(U){U.callback=null},i.unstable_continueExecution=function(){ue||ae||(ue=!0,Ee(ye))},i.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<U?Math.floor(1e3/U):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return s(w)},i.unstable_next=function(U){switch(C){case 1:case 2:case 3:var G=3;break;default:G=C}var b=C;C=G;try{return U()}finally{C=b}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(U,G){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var b=C;C=U;try{return G()}finally{C=b}},i.unstable_scheduleCallback=function(U,G,b){var _=i.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?_+b:_):b=_,U){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=b+A,U={id:O++,callback:G,priorityLevel:U,startTime:b,expirationTime:A,sortIndex:-1},b>_?(U.sortIndex=b,n(T,U),s(w)===null&&U===s(T)&&(J?(be(nt),nt=-1):J=!0,fe(_e,b-_))):(U.sortIndex=A,n(w,U),ue||ae||(ue=!0,Ee(ye))),U},i.unstable_shouldYield=Ge,i.unstable_wrapCallback=function(U){var G=C;return function(){var b=C;C=G;try{return U.apply(this,arguments)}finally{C=b}}}})(bl)),bl}var _f;function qg(){return _f||(_f=1,Vl.exports=Gg()),Vl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef;function Qg(){if(Ef)return vt;Ef=1;var i=lu(),n=qg();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,c={};function d(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(c[e]=t,e=0;e<t.length;e++)a.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,O={},M={};function C(e){return w.call(M,e)?!0:w.call(O,e)?!1:T.test(e)?M[e]=!0:(O[e]=!0,!1)}function ae(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ue(e,t,r,o){if(t===null||typeof t>"u"||ae(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function J(e,t,r,o,l,u,f){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=f}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new J(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new J(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new J(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new J(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new J(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new J(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){ie[e]=new J(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){ie[e]=new J(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){ie[e]=new J(e,5,!1,e.toLowerCase(),null,!1,!1)});var be=/[\-:]([a-z])/g;function X(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(be,X);ie[t]=new J(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(be,X);ie[t]=new J(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(be,X);ie[t]=new J(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new J(e,1,!1,e.toLowerCase(),null,!1,!1)}),ie.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){ie[e]=new J(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pe(e,t,r,o){var l=ie.hasOwnProperty(t)?ie[t]:null;(l!==null?l.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ue(t,r,l,o)&&(r=null),o||l===null?C(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,o=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var _e=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ye=Symbol.for("react.element"),ze=Symbol.for("react.portal"),Oe=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),je=Symbol.for("react.profiler"),Xe=Symbol.for("react.provider"),Ge=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),Te=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),U=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var b=Object.assign,_;function A(e){if(_===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);_=t&&t[1]||""}return`
`+_+e}var re=!1;function se(e,t){if(!e||re)return"";re=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var o=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){o=k}e.call(t.prototype)}else{try{throw Error()}catch(k){o=k}e()}}catch(k){if(k&&o&&typeof k.stack=="string"){for(var l=k.stack.split(`
`),u=o.stack.split(`
`),f=l.length-1,m=u.length-1;1<=f&&0<=m&&l[f]!==u[m];)m--;for(;1<=f&&0<=m;f--,m--)if(l[f]!==u[m]){if(f!==1||m!==1)do if(f--,m--,0>m||l[f]!==u[m]){var y=`
`+l[f].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=f&&0<=m);break}}}finally{re=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?A(e):""}function le(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Oe:return"Fragment";case ze:return"Portal";case je:return"Profiler";case nt:return"StrictMode";case ne:return"Suspense";case de:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ge:return(e.displayName||"Context")+".Consumer";case Xe:return(e._context.displayName||"Context")+".Provider";case te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Te:return t=e.displayName||null,t!==null?t:ce(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}function we(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(t);case 8:return t===nt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ie(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ze(e){var t=Ie(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){o=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(f){o=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _r(e){e._valueTracker||(e._valueTracker=Ze(e))}function si(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=Ie(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function Er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sr(e,t){var r=t.checked;return b({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function oi(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=me(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ds(e,t){t=t.checked,t!=null&&Pe(e,"checked",t,!1)}function ai(e,t){ds(e,t);var r=me(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ir(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ir(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Go(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ir(e,t,r){(t!=="number"||Er(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var g=Array.isArray;function S(e,t,r,o){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&o&&(e[r].defaultSelected=!0)}else{for(r=""+me(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function P(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return b({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function V(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(s(92));if(g(r)){if(1<r.length)throw Error(s(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:me(r)}}function F(e,t){var r=me(t.value),o=me(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function L(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function K(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?K(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ve,at=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ve=ve||document.createElement("div"),ve.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ve.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wt(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ft={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qo=["Webkit","ms","Moz","O"];Object.keys(ft).forEach(function(e){qo.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ft[t]=ft[e]})});function kr(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ft.hasOwnProperty(e)&&ft[e]?(""+t).trim():t+"px"}function Tr(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,l=kr(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,l):e[r]=l}}var Qo=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cr(e,t){if(t){if(Qo[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function li(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pr=null;function Yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jo=null,Ar=null,Rr=null;function Du(e){if(e=Ni(e)){if(typeof Jo!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Ls(t),Jo(e.stateNode,e.type,t))}}function Ou(e){Ar?Rr?Rr.push(e):Rr=[e]:Ar=e}function xu(){if(Ar){var e=Ar,t=Rr;if(Rr=Ar=null,Du(e),t)for(e=0;e<t.length;e++)Du(t[e])}}function Lu(e,t){return e(t)}function Mu(){}var Xo=!1;function Fu(e,t,r){if(Xo)return e(t,r);Xo=!0;try{return Lu(e,t,r)}finally{Xo=!1,(Ar!==null||Rr!==null)&&(Mu(),xu())}}function ui(e,t){var r=e.stateNode;if(r===null)return null;var o=Ls(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,t,typeof r));return r}var Zo=!1;if(p)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){Zo=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{Zo=!1}function Yp(e,t,r,o,l,u,f,m,y){var k=Array.prototype.slice.call(arguments,3);try{t.apply(r,k)}catch(N){this.onError(N)}}var di=!1,fs=null,hs=!1,ea=null,Jp={onError:function(e){di=!0,fs=e}};function Xp(e,t,r,o,l,u,f,m,y){di=!1,fs=null,Yp.apply(Jp,arguments)}function Zp(e,t,r,o,l,u,f,m,y){if(Xp.apply(this,arguments),di){if(di){var k=fs;di=!1,fs=null}else throw Error(s(198));hs||(hs=!0,ea=k)}}function Jn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Uu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vu(e){if(Jn(e)!==e)throw Error(s(188))}function em(e){var t=e.alternate;if(!t){if(t=Jn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var r=e,o=t;;){var l=r.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){r=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===r)return Vu(l),e;if(u===o)return Vu(l),t;u=u.sibling}throw Error(s(188))}if(r.return!==o.return)r=l,o=u;else{for(var f=!1,m=l.child;m;){if(m===r){f=!0,r=l,o=u;break}if(m===o){f=!0,o=l,r=u;break}m=m.sibling}if(!f){for(m=u.child;m;){if(m===r){f=!0,r=u,o=l;break}if(m===o){f=!0,o=u,r=l;break}m=m.sibling}if(!f)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:t}function bu(e){return e=em(e),e!==null?zu(e):null}function zu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zu(e);if(t!==null)return t;e=e.sibling}return null}var ju=n.unstable_scheduleCallback,Bu=n.unstable_cancelCallback,tm=n.unstable_shouldYield,nm=n.unstable_requestPaint,Fe=n.unstable_now,rm=n.unstable_getCurrentPriorityLevel,ta=n.unstable_ImmediatePriority,$u=n.unstable_UserBlockingPriority,ps=n.unstable_NormalPriority,im=n.unstable_LowPriority,Hu=n.unstable_IdlePriority,ms=null,Kt=null;function sm(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(ms,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:lm,om=Math.log,am=Math.LN2;function lm(e){return e>>>=0,e===0?32:31-(om(e)/am|0)|0}var gs=64,ys=4194304;function fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vs(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,l=e.suspendedLanes,u=e.pingedLanes,f=r&268435455;if(f!==0){var m=f&~l;m!==0?o=fi(m):(u&=f,u!==0&&(o=fi(u)))}else f=r&~l,f!==0?o=fi(f):u!==0&&(o=fi(u));if(o===0)return 0;if(t!==0&&t!==o&&(t&l)===0&&(l=o&-o,u=t&-t,l>=u||l===16&&(u&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-xt(t),l=1<<r,o|=e[r],t&=~l;return o}function um(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cm(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var f=31-xt(u),m=1<<f,y=l[f];y===-1?((m&r)===0||(m&o)!==0)&&(l[f]=um(m,t)):y<=t&&(e.expiredLanes|=m),u&=~m}}function na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wu(){var e=gs;return gs<<=1,(gs&4194240)===0&&(gs=64),e}function ra(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function hi(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=r}function dm(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-xt(r),u=1<<l;t[l]=0,o[l]=-1,e[l]=-1,r&=~u}}function ia(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-xt(r),l=1<<o;l&t|e[o]&t&&(e[o]|=t),r&=~l}}var Se=0;function Ku(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Gu,sa,qu,Qu,Yu,oa=!1,ws=[],Sn=null,In=null,kn=null,pi=new Map,mi=new Map,Tn=[],fm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ju(e,t){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":pi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(t.pointerId)}}function gi(e,t,r,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Ni(t),t!==null&&sa(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function hm(e,t,r,o,l){switch(t){case"focusin":return Sn=gi(Sn,e,t,r,o,l),!0;case"dragenter":return In=gi(In,e,t,r,o,l),!0;case"mouseover":return kn=gi(kn,e,t,r,o,l),!0;case"pointerover":var u=l.pointerId;return pi.set(u,gi(pi.get(u)||null,e,t,r,o,l)),!0;case"gotpointercapture":return u=l.pointerId,mi.set(u,gi(mi.get(u)||null,e,t,r,o,l)),!0}return!1}function Xu(e){var t=Xn(e.target);if(t!==null){var r=Jn(t);if(r!==null){if(t=r.tag,t===13){if(t=Uu(r),t!==null){e.blockedOn=t,Yu(e.priority,function(){qu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=la(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Pr=o,r.target.dispatchEvent(o),Pr=null}else return t=Ni(r),t!==null&&sa(t),e.blockedOn=r,!1;t.shift()}return!0}function Zu(e,t,r){_s(e)&&r.delete(t)}function pm(){oa=!1,Sn!==null&&_s(Sn)&&(Sn=null),In!==null&&_s(In)&&(In=null),kn!==null&&_s(kn)&&(kn=null),pi.forEach(Zu),mi.forEach(Zu)}function yi(e,t){e.blockedOn===t&&(e.blockedOn=null,oa||(oa=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,pm)))}function vi(e){function t(l){return yi(l,e)}if(0<ws.length){yi(ws[0],e);for(var r=1;r<ws.length;r++){var o=ws[r];o.blockedOn===e&&(o.blockedOn=null)}}for(Sn!==null&&yi(Sn,e),In!==null&&yi(In,e),kn!==null&&yi(kn,e),pi.forEach(t),mi.forEach(t),r=0;r<Tn.length;r++)o=Tn[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<Tn.length&&(r=Tn[0],r.blockedOn===null);)Xu(r),r.blockedOn===null&&Tn.shift()}var Nr=_e.ReactCurrentBatchConfig,Es=!0;function mm(e,t,r,o){var l=Se,u=Nr.transition;Nr.transition=null;try{Se=1,aa(e,t,r,o)}finally{Se=l,Nr.transition=u}}function gm(e,t,r,o){var l=Se,u=Nr.transition;Nr.transition=null;try{Se=4,aa(e,t,r,o)}finally{Se=l,Nr.transition=u}}function aa(e,t,r,o){if(Es){var l=la(e,t,r,o);if(l===null)Ta(e,t,o,Ss,r),Ju(e,o);else if(hm(l,e,t,r,o))o.stopPropagation();else if(Ju(e,o),t&4&&-1<fm.indexOf(e)){for(;l!==null;){var u=Ni(l);if(u!==null&&Gu(u),u=la(e,t,r,o),u===null&&Ta(e,t,o,Ss,r),u===l)break;l=u}l!==null&&o.stopPropagation()}else Ta(e,t,o,null,r)}}var Ss=null;function la(e,t,r,o){if(Ss=null,e=Yo(o),e=Xn(e),e!==null)if(t=Jn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Uu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ss=e,null}function ec(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rm()){case ta:return 1;case $u:return 4;case ps:case im:return 16;case Hu:return 536870912;default:return 16}default:return 16}}var Cn=null,ua=null,Is=null;function tc(){if(Is)return Is;var e,t=ua,r=t.length,o,l="value"in Cn?Cn.value:Cn.textContent,u=l.length;for(e=0;e<r&&t[e]===l[e];e++);var f=r-e;for(o=1;o<=f&&t[r-o]===l[u-o];o++);return Is=l.slice(e,1<o?1-o:void 0)}function ks(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ts(){return!0}function nc(){return!1}function St(e){function t(r,o,l,u,f){this._reactName=r,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(r=e[m],this[m]=r?r(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ts:nc,this.isPropagationStopped=nc,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ts)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ts)},persist:function(){},isPersistent:Ts}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=St(Dr),wi=b({},Dr,{view:0,detail:0}),ym=St(wi),da,fa,_i,Cs=b({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_i&&(_i&&e.type==="mousemove"?(da=e.screenX-_i.screenX,fa=e.screenY-_i.screenY):fa=da=0,_i=e),da)},movementY:function(e){return"movementY"in e?e.movementY:fa}}),rc=St(Cs),vm=b({},Cs,{dataTransfer:0}),wm=St(vm),_m=b({},wi,{relatedTarget:0}),ha=St(_m),Em=b({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sm=St(Em),Im=b({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),km=St(Im),Tm=b({},Dr,{data:0}),ic=St(Tm),Cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Am[e])?!!t[e]:!1}function pa(){return Rm}var Nm=b({},wi,{key:function(e){if(e.key){var t=Cm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pa,charCode:function(e){return e.type==="keypress"?ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dm=St(Nm),Om=b({},Cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sc=St(Om),xm=b({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pa}),Lm=St(xm),Mm=b({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fm=St(Mm),Um=b({},Cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vm=St(Um),bm=[9,13,27,32],ma=p&&"CompositionEvent"in window,Ei=null;p&&"documentMode"in document&&(Ei=document.documentMode);var zm=p&&"TextEvent"in window&&!Ei,oc=p&&(!ma||Ei&&8<Ei&&11>=Ei),ac=" ",lc=!1;function uc(e,t){switch(e){case"keyup":return bm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function jm(e,t){switch(e){case"compositionend":return cc(t);case"keypress":return t.which!==32?null:(lc=!0,ac);case"textInput":return e=t.data,e===ac&&lc?null:e;default:return null}}function Bm(e,t){if(Or)return e==="compositionend"||!ma&&uc(e,t)?(e=tc(),Is=ua=Cn=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oc&&t.locale!=="ko"?null:t.data;default:return null}}var $m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$m[e.type]:t==="textarea"}function fc(e,t,r,o){Ou(o),t=Ds(t,"onChange"),0<t.length&&(r=new ca("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Si=null,Ii=null;function Hm(e){Nc(e,0)}function Ps(e){var t=Ur(e);if(si(t))return e}function Wm(e,t){if(e==="change")return t}var hc=!1;if(p){var ga;if(p){var ya="oninput"in document;if(!ya){var pc=document.createElement("div");pc.setAttribute("oninput","return;"),ya=typeof pc.oninput=="function"}ga=ya}else ga=!1;hc=ga&&(!document.documentMode||9<document.documentMode)}function mc(){Si&&(Si.detachEvent("onpropertychange",gc),Ii=Si=null)}function gc(e){if(e.propertyName==="value"&&Ps(Ii)){var t=[];fc(t,Ii,e,Yo(e)),Fu(Hm,t)}}function Km(e,t,r){e==="focusin"?(mc(),Si=t,Ii=r,Si.attachEvent("onpropertychange",gc)):e==="focusout"&&mc()}function Gm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ps(Ii)}function qm(e,t){if(e==="click")return Ps(t)}function Qm(e,t){if(e==="input"||e==="change")return Ps(t)}function Ym(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:Ym;function ki(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var l=r[o];if(!w.call(t,l)||!Lt(e[l],t[l]))return!1}return!0}function yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vc(e,t){var r=yc(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=yc(r)}}function wc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _c(){for(var e=window,t=Er();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Er(e.document)}return t}function va(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jm(e){var t=_c(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&wc(r.ownerDocument.documentElement,r)){if(o!==null&&va(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,u=Math.min(o.start,l);o=o.end===void 0?u:Math.min(o.end,l),!e.extend&&u>o&&(l=o,o=u,u=l),l=vc(r,u);var f=vc(r,o);l&&f&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==f.node||e.focusOffset!==f.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),u>o?(e.addRange(t),e.extend(f.node,f.offset)):(t.setEnd(f.node,f.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xm=p&&"documentMode"in document&&11>=document.documentMode,xr=null,wa=null,Ti=null,_a=!1;function Ec(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;_a||xr==null||xr!==Er(o)||(o=xr,"selectionStart"in o&&va(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ti&&ki(Ti,o)||(Ti=o,o=Ds(wa,"onSelect"),0<o.length&&(t=new ca("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=xr)))}function As(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Lr={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionend:As("Transition","TransitionEnd")},Ea={},Sc={};p&&(Sc=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Rs(e){if(Ea[e])return Ea[e];if(!Lr[e])return e;var t=Lr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Sc)return Ea[e]=t[r];return e}var Ic=Rs("animationend"),kc=Rs("animationiteration"),Tc=Rs("animationstart"),Cc=Rs("transitionend"),Pc=new Map,Ac="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){Pc.set(e,t),d(t,[e])}for(var Sa=0;Sa<Ac.length;Sa++){var Ia=Ac[Sa],Zm=Ia.toLowerCase(),eg=Ia[0].toUpperCase()+Ia.slice(1);Pn(Zm,"on"+eg)}Pn(Ic,"onAnimationEnd"),Pn(kc,"onAnimationIteration"),Pn(Tc,"onAnimationStart"),Pn("dblclick","onDoubleClick"),Pn("focusin","onFocus"),Pn("focusout","onBlur"),Pn(Cc,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function Rc(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,Zp(o,t,void 0,e),e.currentTarget=null}function Nc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],l=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var f=o.length-1;0<=f;f--){var m=o[f],y=m.instance,k=m.currentTarget;if(m=m.listener,y!==u&&l.isPropagationStopped())break e;Rc(l,m,k),u=y}else for(f=0;f<o.length;f++){if(m=o[f],y=m.instance,k=m.currentTarget,m=m.listener,y!==u&&l.isPropagationStopped())break e;Rc(l,m,k),u=y}}}if(hs)throw e=ea,hs=!1,ea=null,e}function Ae(e,t){var r=t[Da];r===void 0&&(r=t[Da]=new Set);var o=e+"__bubble";r.has(o)||(Dc(t,e,2,!1),r.add(o))}function ka(e,t,r){var o=0;t&&(o|=4),Dc(r,e,o,t)}var Ns="_reactListening"+Math.random().toString(36).slice(2);function Pi(e){if(!e[Ns]){e[Ns]=!0,a.forEach(function(r){r!=="selectionchange"&&(tg.has(r)||ka(r,!1,e),ka(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ns]||(t[Ns]=!0,ka("selectionchange",!1,t))}}function Dc(e,t,r,o){switch(ec(t)){case 1:var l=mm;break;case 4:l=gm;break;default:l=aa}r=l.bind(null,t,r,e),l=void 0,!Zo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function Ta(e,t,r,o,l){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var f=o.tag;if(f===3||f===4){var m=o.stateNode.containerInfo;if(m===l||m.nodeType===8&&m.parentNode===l)break;if(f===4)for(f=o.return;f!==null;){var y=f.tag;if((y===3||y===4)&&(y=f.stateNode.containerInfo,y===l||y.nodeType===8&&y.parentNode===l))return;f=f.return}for(;m!==null;){if(f=Xn(m),f===null)return;if(y=f.tag,y===5||y===6){o=u=f;continue e}m=m.parentNode}}o=o.return}Fu(function(){var k=u,N=Yo(r),D=[];e:{var R=Pc.get(e);if(R!==void 0){var z=ca,B=e;switch(e){case"keypress":if(ks(r)===0)break e;case"keydown":case"keyup":z=Dm;break;case"focusin":B="focus",z=ha;break;case"focusout":B="blur",z=ha;break;case"beforeblur":case"afterblur":z=ha;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Lm;break;case Ic:case kc:case Tc:z=Sm;break;case Cc:z=Fm;break;case"scroll":z=ym;break;case"wheel":z=Vm;break;case"copy":case"cut":case"paste":z=km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=sc}var $=(t&4)!==0,Ue=!$&&e==="scroll",E=$?R!==null?R+"Capture":null:R;$=[];for(var v=k,I;v!==null;){I=v;var x=I.stateNode;if(I.tag===5&&x!==null&&(I=x,E!==null&&(x=ui(v,E),x!=null&&$.push(Ai(v,x,I)))),Ue)break;v=v.return}0<$.length&&(R=new z(R,B,null,r,N),D.push({event:R,listeners:$}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",R&&r!==Pr&&(B=r.relatedTarget||r.fromElement)&&(Xn(B)||B[an]))break e;if((z||R)&&(R=N.window===N?N:(R=N.ownerDocument)?R.defaultView||R.parentWindow:window,z?(B=r.relatedTarget||r.toElement,z=k,B=B?Xn(B):null,B!==null&&(Ue=Jn(B),B!==Ue||B.tag!==5&&B.tag!==6)&&(B=null)):(z=null,B=k),z!==B)){if($=rc,x="onMouseLeave",E="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&($=sc,x="onPointerLeave",E="onPointerEnter",v="pointer"),Ue=z==null?R:Ur(z),I=B==null?R:Ur(B),R=new $(x,v+"leave",z,r,N),R.target=Ue,R.relatedTarget=I,x=null,Xn(N)===k&&($=new $(E,v+"enter",B,r,N),$.target=I,$.relatedTarget=Ue,x=$),Ue=x,z&&B)t:{for($=z,E=B,v=0,I=$;I;I=Mr(I))v++;for(I=0,x=E;x;x=Mr(x))I++;for(;0<v-I;)$=Mr($),v--;for(;0<I-v;)E=Mr(E),I--;for(;v--;){if($===E||E!==null&&$===E.alternate)break t;$=Mr($),E=Mr(E)}$=null}else $=null;z!==null&&Oc(D,R,z,$,!1),B!==null&&Ue!==null&&Oc(D,Ue,B,$,!0)}}e:{if(R=k?Ur(k):window,z=R.nodeName&&R.nodeName.toLowerCase(),z==="select"||z==="input"&&R.type==="file")var W=Wm;else if(dc(R))if(hc)W=Qm;else{W=Gm;var Q=Km}else(z=R.nodeName)&&z.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(W=qm);if(W&&(W=W(e,k))){fc(D,W,r,N);break e}Q&&Q(e,R,k),e==="focusout"&&(Q=R._wrapperState)&&Q.controlled&&R.type==="number"&&Ir(R,"number",R.value)}switch(Q=k?Ur(k):window,e){case"focusin":(dc(Q)||Q.contentEditable==="true")&&(xr=Q,wa=k,Ti=null);break;case"focusout":Ti=wa=xr=null;break;case"mousedown":_a=!0;break;case"contextmenu":case"mouseup":case"dragend":_a=!1,Ec(D,r,N);break;case"selectionchange":if(Xm)break;case"keydown":case"keyup":Ec(D,r,N)}var Y;if(ma)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Or?uc(e,r)&&(ee="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ee="onCompositionStart");ee&&(oc&&r.locale!=="ko"&&(Or||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Or&&(Y=tc()):(Cn=N,ua="value"in Cn?Cn.value:Cn.textContent,Or=!0)),Q=Ds(k,ee),0<Q.length&&(ee=new ic(ee,e,null,r,N),D.push({event:ee,listeners:Q}),Y?ee.data=Y:(Y=cc(r),Y!==null&&(ee.data=Y)))),(Y=zm?jm(e,r):Bm(e,r))&&(k=Ds(k,"onBeforeInput"),0<k.length&&(N=new ic("onBeforeInput","beforeinput",null,r,N),D.push({event:N,listeners:k}),N.data=Y))}Nc(D,t)})}function Ai(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ds(e,t){for(var r=t+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=ui(e,r),u!=null&&o.unshift(Ai(e,u,l)),u=ui(e,t),u!=null&&o.push(Ai(e,u,l))),e=e.return}return o}function Mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oc(e,t,r,o,l){for(var u=t._reactName,f=[];r!==null&&r!==o;){var m=r,y=m.alternate,k=m.stateNode;if(y!==null&&y===o)break;m.tag===5&&k!==null&&(m=k,l?(y=ui(r,u),y!=null&&f.unshift(Ai(r,y,m))):l||(y=ui(r,u),y!=null&&f.push(Ai(r,y,m)))),r=r.return}f.length!==0&&e.push({event:t,listeners:f})}var ng=/\r\n?/g,rg=/\u0000|\uFFFD/g;function xc(e){return(typeof e=="string"?e:""+e).replace(ng,`
`).replace(rg,"")}function Os(e,t,r){if(t=xc(t),xc(e)!==t&&r)throw Error(s(425))}function xs(){}var Ca=null,Pa=null;function Aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ra=typeof setTimeout=="function"?setTimeout:void 0,ig=typeof clearTimeout=="function"?clearTimeout:void 0,Lc=typeof Promise=="function"?Promise:void 0,sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Lc<"u"?function(e){return Lc.resolve(null).then(e).catch(og)}:Ra;function og(e){setTimeout(function(){throw e})}function Na(e,t){var r=t,o=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(o===0){e.removeChild(l),vi(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=l}while(r);vi(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Mc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Fr,Ri="__reactProps$"+Fr,an="__reactContainer$"+Fr,Da="__reactEvents$"+Fr,ag="__reactListeners$"+Fr,lg="__reactHandles$"+Fr;function Xn(e){var t=e[Gt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[an]||r[Gt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Mc(e);e!==null;){if(r=e[Gt])return r;e=Mc(e)}return t}e=r,r=e.parentNode}return null}function Ni(e){return e=e[Gt]||e[an],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Ls(e){return e[Ri]||null}var Oa=[],Vr=-1;function Rn(e){return{current:e}}function Re(e){0>Vr||(e.current=Oa[Vr],Oa[Vr]=null,Vr--)}function Ce(e,t){Vr++,Oa[Vr]=e.current,e.current=t}var Nn={},rt=Rn(Nn),ht=Rn(!1),Zn=Nn;function br(e,t){var r=e.type.contextTypes;if(!r)return Nn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in r)l[u]=t[u];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function pt(e){return e=e.childContextTypes,e!=null}function Ms(){Re(ht),Re(rt)}function Fc(e,t,r){if(rt.current!==Nn)throw Error(s(168));Ce(rt,t),Ce(ht,r)}function Uc(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var l in o)if(!(l in t))throw Error(s(108,we(e)||"Unknown",l));return b({},r,o)}function Fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,Zn=rt.current,Ce(rt,e),Ce(ht,ht.current),!0}function Vc(e,t,r){var o=e.stateNode;if(!o)throw Error(s(169));r?(e=Uc(e,t,Zn),o.__reactInternalMemoizedMergedChildContext=e,Re(ht),Re(rt),Ce(rt,e)):Re(ht),Ce(ht,r)}var ln=null,Us=!1,xa=!1;function bc(e){ln===null?ln=[e]:ln.push(e)}function ug(e){Us=!0,bc(e)}function Dn(){if(!xa&&ln!==null){xa=!0;var e=0,t=Se;try{var r=ln;for(Se=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}ln=null,Us=!1}catch(l){throw ln!==null&&(ln=ln.slice(e+1)),ju(ta,Dn),l}finally{Se=t,xa=!1}}return null}var zr=[],jr=0,Vs=null,bs=0,Pt=[],At=0,er=null,un=1,cn="";function tr(e,t){zr[jr++]=bs,zr[jr++]=Vs,Vs=e,bs=t}function zc(e,t,r){Pt[At++]=un,Pt[At++]=cn,Pt[At++]=er,er=e;var o=un;e=cn;var l=32-xt(o)-1;o&=~(1<<l),r+=1;var u=32-xt(t)+l;if(30<u){var f=l-l%5;u=(o&(1<<f)-1).toString(32),o>>=f,l-=f,un=1<<32-xt(t)+l|r<<l|o,cn=u+e}else un=1<<u|r<<l|o,cn=e}function La(e){e.return!==null&&(tr(e,1),zc(e,1,0))}function Ma(e){for(;e===Vs;)Vs=zr[--jr],zr[jr]=null,bs=zr[--jr],zr[jr]=null;for(;e===er;)er=Pt[--At],Pt[At]=null,cn=Pt[--At],Pt[At]=null,un=Pt[--At],Pt[At]=null}var It=null,kt=null,Ne=!1,Mt=null;function jc(e,t){var r=Ot(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Bc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,kt=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=er!==null?{id:un,overflow:cn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ot(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,It=e,kt=null,!0):!1;default:return!1}}function Fa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ua(e){if(Ne){var t=kt;if(t){var r=t;if(!Bc(e,t)){if(Fa(e))throw Error(s(418));t=An(r.nextSibling);var o=It;t&&Bc(e,t)?jc(o,r):(e.flags=e.flags&-4097|2,Ne=!1,It=e)}}else{if(Fa(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ne=!1,It=e}}}function $c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function zs(e){if(e!==It)return!1;if(!Ne)return $c(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Aa(e.type,e.memoizedProps)),t&&(t=kt)){if(Fa(e))throw Hc(),Error(s(418));for(;t;)jc(e,t),t=An(t.nextSibling)}if($c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){kt=An(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=It?An(e.stateNode.nextSibling):null;return!0}function Hc(){for(var e=kt;e;)e=An(e.nextSibling)}function Br(){kt=It=null,Ne=!1}function Va(e){Mt===null?Mt=[e]:Mt.push(e)}var cg=_e.ReactCurrentBatchConfig;function Di(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(s(309));var o=r.stateNode}if(!o)throw Error(s(147,e));var l=o,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(f){var m=l.refs;f===null?delete m[u]:m[u]=f},t._stringRef=u,t)}if(typeof e!="string")throw Error(s(284));if(!r._owner)throw Error(s(290,e))}return e}function js(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wc(e){var t=e._init;return t(e._payload)}function Kc(e){function t(E,v){if(e){var I=E.deletions;I===null?(E.deletions=[v],E.flags|=16):I.push(v)}}function r(E,v){if(!e)return null;for(;v!==null;)t(E,v),v=v.sibling;return null}function o(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function l(E,v){return E=bn(E,v),E.index=0,E.sibling=null,E}function u(E,v,I){return E.index=I,e?(I=E.alternate,I!==null?(I=I.index,I<v?(E.flags|=2,v):I):(E.flags|=2,v)):(E.flags|=1048576,v)}function f(E){return e&&E.alternate===null&&(E.flags|=2),E}function m(E,v,I,x){return v===null||v.tag!==6?(v=Rl(I,E.mode,x),v.return=E,v):(v=l(v,I),v.return=E,v)}function y(E,v,I,x){var W=I.type;return W===Oe?N(E,v,I.props.children,x,I.key):v!==null&&(v.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Ee&&Wc(W)===v.type)?(x=l(v,I.props),x.ref=Di(E,v,I),x.return=E,x):(x=fo(I.type,I.key,I.props,null,E.mode,x),x.ref=Di(E,v,I),x.return=E,x)}function k(E,v,I,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=Nl(I,E.mode,x),v.return=E,v):(v=l(v,I.children||[]),v.return=E,v)}function N(E,v,I,x,W){return v===null||v.tag!==7?(v=ur(I,E.mode,x,W),v.return=E,v):(v=l(v,I),v.return=E,v)}function D(E,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Rl(""+v,E.mode,I),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ye:return I=fo(v.type,v.key,v.props,null,E.mode,I),I.ref=Di(E,null,v),I.return=E,I;case ze:return v=Nl(v,E.mode,I),v.return=E,v;case Ee:var x=v._init;return D(E,x(v._payload),I)}if(g(v)||G(v))return v=ur(v,E.mode,I,null),v.return=E,v;js(E,v)}return null}function R(E,v,I,x){var W=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return W!==null?null:m(E,v,""+I,x);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ye:return I.key===W?y(E,v,I,x):null;case ze:return I.key===W?k(E,v,I,x):null;case Ee:return W=I._init,R(E,v,W(I._payload),x)}if(g(I)||G(I))return W!==null?null:N(E,v,I,x,null);js(E,I)}return null}function z(E,v,I,x,W){if(typeof x=="string"&&x!==""||typeof x=="number")return E=E.get(I)||null,m(v,E,""+x,W);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ye:return E=E.get(x.key===null?I:x.key)||null,y(v,E,x,W);case ze:return E=E.get(x.key===null?I:x.key)||null,k(v,E,x,W);case Ee:var Q=x._init;return z(E,v,I,Q(x._payload),W)}if(g(x)||G(x))return E=E.get(I)||null,N(v,E,x,W,null);js(v,x)}return null}function B(E,v,I,x){for(var W=null,Q=null,Y=v,ee=v=0,Ye=null;Y!==null&&ee<I.length;ee++){Y.index>ee?(Ye=Y,Y=null):Ye=Y.sibling;var ge=R(E,Y,I[ee],x);if(ge===null){Y===null&&(Y=Ye);break}e&&Y&&ge.alternate===null&&t(E,Y),v=u(ge,v,ee),Q===null?W=ge:Q.sibling=ge,Q=ge,Y=Ye}if(ee===I.length)return r(E,Y),Ne&&tr(E,ee),W;if(Y===null){for(;ee<I.length;ee++)Y=D(E,I[ee],x),Y!==null&&(v=u(Y,v,ee),Q===null?W=Y:Q.sibling=Y,Q=Y);return Ne&&tr(E,ee),W}for(Y=o(E,Y);ee<I.length;ee++)Ye=z(Y,E,ee,I[ee],x),Ye!==null&&(e&&Ye.alternate!==null&&Y.delete(Ye.key===null?ee:Ye.key),v=u(Ye,v,ee),Q===null?W=Ye:Q.sibling=Ye,Q=Ye);return e&&Y.forEach(function(zn){return t(E,zn)}),Ne&&tr(E,ee),W}function $(E,v,I,x){var W=G(I);if(typeof W!="function")throw Error(s(150));if(I=W.call(I),I==null)throw Error(s(151));for(var Q=W=null,Y=v,ee=v=0,Ye=null,ge=I.next();Y!==null&&!ge.done;ee++,ge=I.next()){Y.index>ee?(Ye=Y,Y=null):Ye=Y.sibling;var zn=R(E,Y,ge.value,x);if(zn===null){Y===null&&(Y=Ye);break}e&&Y&&zn.alternate===null&&t(E,Y),v=u(zn,v,ee),Q===null?W=zn:Q.sibling=zn,Q=zn,Y=Ye}if(ge.done)return r(E,Y),Ne&&tr(E,ee),W;if(Y===null){for(;!ge.done;ee++,ge=I.next())ge=D(E,ge.value,x),ge!==null&&(v=u(ge,v,ee),Q===null?W=ge:Q.sibling=ge,Q=ge);return Ne&&tr(E,ee),W}for(Y=o(E,Y);!ge.done;ee++,ge=I.next())ge=z(Y,E,ee,ge.value,x),ge!==null&&(e&&ge.alternate!==null&&Y.delete(ge.key===null?ee:ge.key),v=u(ge,v,ee),Q===null?W=ge:Q.sibling=ge,Q=ge);return e&&Y.forEach(function($g){return t(E,$g)}),Ne&&tr(E,ee),W}function Ue(E,v,I,x){if(typeof I=="object"&&I!==null&&I.type===Oe&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ye:e:{for(var W=I.key,Q=v;Q!==null;){if(Q.key===W){if(W=I.type,W===Oe){if(Q.tag===7){r(E,Q.sibling),v=l(Q,I.props.children),v.return=E,E=v;break e}}else if(Q.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Ee&&Wc(W)===Q.type){r(E,Q.sibling),v=l(Q,I.props),v.ref=Di(E,Q,I),v.return=E,E=v;break e}r(E,Q);break}else t(E,Q);Q=Q.sibling}I.type===Oe?(v=ur(I.props.children,E.mode,x,I.key),v.return=E,E=v):(x=fo(I.type,I.key,I.props,null,E.mode,x),x.ref=Di(E,v,I),x.return=E,E=x)}return f(E);case ze:e:{for(Q=I.key;v!==null;){if(v.key===Q)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){r(E,v.sibling),v=l(v,I.children||[]),v.return=E,E=v;break e}else{r(E,v);break}else t(E,v);v=v.sibling}v=Nl(I,E.mode,x),v.return=E,E=v}return f(E);case Ee:return Q=I._init,Ue(E,v,Q(I._payload),x)}if(g(I))return B(E,v,I,x);if(G(I))return $(E,v,I,x);js(E,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(r(E,v.sibling),v=l(v,I),v.return=E,E=v):(r(E,v),v=Rl(I,E.mode,x),v.return=E,E=v),f(E)):r(E,v)}return Ue}var $r=Kc(!0),Gc=Kc(!1),Bs=Rn(null),$s=null,Hr=null,ba=null;function za(){ba=Hr=$s=null}function ja(e){var t=Bs.current;Re(Bs),e._currentValue=t}function Ba(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function Wr(e,t){$s=e,ba=Hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(mt=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(ba!==e)if(e={context:e,memoizedValue:t,next:null},Hr===null){if($s===null)throw Error(s(308));Hr=e,$s.dependencies={lanes:0,firstContext:e}}else Hr=Hr.next=e;return t}var nr=null;function $a(e){nr===null?nr=[e]:nr.push(e)}function qc(e,t,r,o){var l=t.interleaved;return l===null?(r.next=r,$a(t)):(r.next=l.next,l.next=r),t.interleaved=r,dn(e,o)}function dn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var On=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(pe&2)!==0){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,dn(e,r)}return l=o.interleaved,l===null?(t.next=t,$a(o)):(t.next=l.next,l.next=t),o.interleaved=t,dn(e,r)}function Hs(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,ia(e,r)}}function Yc(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var l=null,u=null;if(r=r.firstBaseUpdate,r!==null){do{var f={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};u===null?l=u=f:u=u.next=f,r=r.next}while(r!==null);u===null?l=u=t:u=u.next=t}else l=u=t;r={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ws(e,t,r,o){var l=e.updateQueue;On=!1;var u=l.firstBaseUpdate,f=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var y=m,k=y.next;y.next=null,f===null?u=k:f.next=k,f=y;var N=e.alternate;N!==null&&(N=N.updateQueue,m=N.lastBaseUpdate,m!==f&&(m===null?N.firstBaseUpdate=k:m.next=k,N.lastBaseUpdate=y))}if(u!==null){var D=l.baseState;f=0,N=k=y=null,m=u;do{var R=m.lane,z=m.eventTime;if((o&R)===R){N!==null&&(N=N.next={eventTime:z,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var B=e,$=m;switch(R=t,z=r,$.tag){case 1:if(B=$.payload,typeof B=="function"){D=B.call(z,D,R);break e}D=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=$.payload,R=typeof B=="function"?B.call(z,D,R):B,R==null)break e;D=b({},D,R);break e;case 2:On=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,R=l.effects,R===null?l.effects=[m]:R.push(m))}else z={eventTime:z,lane:R,tag:m.tag,payload:m.payload,callback:m.callback,next:null},N===null?(k=N=z,y=D):N=N.next=z,f|=R;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;R=m,m=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);if(N===null&&(y=D),l.baseState=y,l.firstBaseUpdate=k,l.lastBaseUpdate=N,t=l.shared.interleaved,t!==null){l=t;do f|=l.lane,l=l.next;while(l!==t)}else u===null&&(l.shared.lanes=0);sr|=f,e.lanes=f,e.memoizedState=D}}function Jc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],l=o.callback;if(l!==null){if(o.callback=null,o=r,typeof l!="function")throw Error(s(191,l));l.call(o)}}}var Oi={},qt=Rn(Oi),xi=Rn(Oi),Li=Rn(Oi);function rr(e){if(e===Oi)throw Error(s(174));return e}function Wa(e,t){switch(Ce(Li,t),Ce(xi,e),Ce(qt,Oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:he(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=he(t,e)}Re(qt),Ce(qt,t)}function Kr(){Re(qt),Re(xi),Re(Li)}function Xc(e){rr(Li.current);var t=rr(qt.current),r=he(t,e.type);t!==r&&(Ce(xi,e),Ce(qt,r))}function Ka(e){xi.current===e&&(Re(qt),Re(xi))}var xe=Rn(0);function Ks(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ga=[];function qa(){for(var e=0;e<Ga.length;e++)Ga[e]._workInProgressVersionPrimary=null;Ga.length=0}var Gs=_e.ReactCurrentDispatcher,Qa=_e.ReactCurrentBatchConfig,ir=0,Le=null,We=null,qe=null,qs=!1,Mi=!1,Fi=0,dg=0;function it(){throw Error(s(321))}function Ya(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Lt(e[r],t[r]))return!1;return!0}function Ja(e,t,r,o,l,u){if(ir=u,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gs.current=e===null||e.memoizedState===null?mg:gg,e=r(o,l),Mi){u=0;do{if(Mi=!1,Fi=0,25<=u)throw Error(s(301));u+=1,qe=We=null,t.updateQueue=null,Gs.current=yg,e=r(o,l)}while(Mi)}if(Gs.current=Js,t=We!==null&&We.next!==null,ir=0,qe=We=Le=null,qs=!1,t)throw Error(s(300));return e}function Xa(){var e=Fi!==0;return Fi=0,e}function Qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Le.memoizedState=qe=e:qe=qe.next=e,qe}function Nt(){if(We===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=qe===null?Le.memoizedState:qe.next;if(t!==null)qe=t,We=e;else{if(e===null)throw Error(s(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},qe===null?Le.memoizedState=qe=e:qe=qe.next=e}return qe}function Ui(e,t){return typeof t=="function"?t(e):t}function Za(e){var t=Nt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var o=We,l=o.baseQueue,u=r.pending;if(u!==null){if(l!==null){var f=l.next;l.next=u.next,u.next=f}o.baseQueue=l=u,r.pending=null}if(l!==null){u=l.next,o=o.baseState;var m=f=null,y=null,k=u;do{var N=k.lane;if((ir&N)===N)y!==null&&(y=y.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),o=k.hasEagerState?k.eagerState:e(o,k.action);else{var D={lane:N,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};y===null?(m=y=D,f=o):y=y.next=D,Le.lanes|=N,sr|=N}k=k.next}while(k!==null&&k!==u);y===null?f=o:y.next=m,Lt(o,t.memoizedState)||(mt=!0),t.memoizedState=o,t.baseState=f,t.baseQueue=y,r.lastRenderedState=o}if(e=r.interleaved,e!==null){l=e;do u=l.lane,Le.lanes|=u,sr|=u,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function el(e){var t=Nt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var o=r.dispatch,l=r.pending,u=t.memoizedState;if(l!==null){r.pending=null;var f=l=l.next;do u=e(u,f.action),f=f.next;while(f!==l);Lt(u,t.memoizedState)||(mt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),r.lastRenderedState=u}return[u,o]}function Zc(){}function ed(e,t){var r=Le,o=Nt(),l=t(),u=!Lt(o.memoizedState,l);if(u&&(o.memoizedState=l,mt=!0),o=o.queue,tl(rd.bind(null,r,o,e),[e]),o.getSnapshot!==t||u||qe!==null&&qe.memoizedState.tag&1){if(r.flags|=2048,Vi(9,nd.bind(null,r,o,l,t),void 0,null),Qe===null)throw Error(s(349));(ir&30)!==0||td(r,t,l)}return l}function td(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function nd(e,t,r,o){t.value=r,t.getSnapshot=o,id(t)&&sd(e)}function rd(e,t,r){return r(function(){id(t)&&sd(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Lt(e,r)}catch{return!0}}function sd(e){var t=dn(e,1);t!==null&&bt(t,e,1,-1)}function od(e){var t=Qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:e},t.queue=e,e=e.dispatch=pg.bind(null,Le,e),[t.memoizedState,e]}function Vi(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function ad(){return Nt().memoizedState}function Qs(e,t,r,o){var l=Qt();Le.flags|=e,l.memoizedState=Vi(1|t,r,void 0,o===void 0?null:o)}function Ys(e,t,r,o){var l=Nt();o=o===void 0?null:o;var u=void 0;if(We!==null){var f=We.memoizedState;if(u=f.destroy,o!==null&&Ya(o,f.deps)){l.memoizedState=Vi(t,r,u,o);return}}Le.flags|=e,l.memoizedState=Vi(1|t,r,u,o)}function ld(e,t){return Qs(8390656,8,e,t)}function tl(e,t){return Ys(2048,8,e,t)}function ud(e,t){return Ys(4,2,e,t)}function cd(e,t){return Ys(4,4,e,t)}function dd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fd(e,t,r){return r=r!=null?r.concat([e]):null,Ys(4,4,dd.bind(null,t,e),r)}function nl(){}function hd(e,t){var r=Nt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Ya(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function pd(e,t){var r=Nt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Ya(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function md(e,t,r){return(ir&21)===0?(e.baseState&&(e.baseState=!1,mt=!0),e.memoizedState=r):(Lt(r,t)||(r=Wu(),Le.lanes|=r,sr|=r,e.baseState=!0),t)}function fg(e,t){var r=Se;Se=r!==0&&4>r?r:4,e(!0);var o=Qa.transition;Qa.transition={};try{e(!1),t()}finally{Se=r,Qa.transition=o}}function gd(){return Nt().memoizedState}function hg(e,t,r){var o=Un(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},yd(e))vd(t,r);else if(r=qc(e,t,r,o),r!==null){var l=ut();bt(r,e,o,l),wd(r,t,o)}}function pg(e,t,r){var o=Un(e),l={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(yd(e))vd(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,m=u(f,r);if(l.hasEagerState=!0,l.eagerState=m,Lt(m,f)){var y=t.interleaved;y===null?(l.next=l,$a(t)):(l.next=y.next,y.next=l),t.interleaved=l;return}}catch{}finally{}r=qc(e,t,l,o),r!==null&&(l=ut(),bt(r,e,o,l),wd(r,t,o))}}function yd(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function vd(e,t){Mi=qs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function wd(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,ia(e,r)}}var Js={readContext:Rt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},mg={readContext:Rt,useCallback:function(e,t){return Qt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:ld,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Qs(4194308,4,dd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Qs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qs(4,2,e,t)},useMemo:function(e,t){var r=Qt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Qt();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=hg.bind(null,Le,e),[o.memoizedState,e]},useRef:function(e){var t=Qt();return e={current:e},t.memoizedState=e},useState:od,useDebugValue:nl,useDeferredValue:function(e){return Qt().memoizedState=e},useTransition:function(){var e=od(!1),t=e[0];return e=fg.bind(null,e[1]),Qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=Le,l=Qt();if(Ne){if(r===void 0)throw Error(s(407));r=r()}else{if(r=t(),Qe===null)throw Error(s(349));(ir&30)!==0||td(o,t,r)}l.memoizedState=r;var u={value:r,getSnapshot:t};return l.queue=u,ld(rd.bind(null,o,u,e),[e]),o.flags|=2048,Vi(9,nd.bind(null,o,u,r,t),void 0,null),r},useId:function(){var e=Qt(),t=Qe.identifierPrefix;if(Ne){var r=cn,o=un;r=(o&~(1<<32-xt(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=Fi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=dg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gg={readContext:Rt,useCallback:hd,useContext:Rt,useEffect:tl,useImperativeHandle:fd,useInsertionEffect:ud,useLayoutEffect:cd,useMemo:pd,useReducer:Za,useRef:ad,useState:function(){return Za(Ui)},useDebugValue:nl,useDeferredValue:function(e){var t=Nt();return md(t,We.memoizedState,e)},useTransition:function(){var e=Za(Ui)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:Zc,useSyncExternalStore:ed,useId:gd,unstable_isNewReconciler:!1},yg={readContext:Rt,useCallback:hd,useContext:Rt,useEffect:tl,useImperativeHandle:fd,useInsertionEffect:ud,useLayoutEffect:cd,useMemo:pd,useReducer:el,useRef:ad,useState:function(){return el(Ui)},useDebugValue:nl,useDeferredValue:function(e){var t=Nt();return We===null?t.memoizedState=e:md(t,We.memoizedState,e)},useTransition:function(){var e=el(Ui)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:Zc,useSyncExternalStore:ed,useId:gd,unstable_isNewReconciler:!1};function Ft(e,t){if(e&&e.defaultProps){t=b({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function rl(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:b({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Xs={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=ut(),l=Un(e),u=fn(o,l);u.payload=t,r!=null&&(u.callback=r),t=xn(e,u,l),t!==null&&(bt(t,e,l,o),Hs(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=ut(),l=Un(e),u=fn(o,l);u.tag=1,u.payload=t,r!=null&&(u.callback=r),t=xn(e,u,l),t!==null&&(bt(t,e,l,o),Hs(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ut(),o=Un(e),l=fn(r,o);l.tag=2,t!=null&&(l.callback=t),t=xn(e,l,o),t!==null&&(bt(t,e,o,r),Hs(t,e,o))}};function _d(e,t,r,o,l,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,f):t.prototype&&t.prototype.isPureReactComponent?!ki(r,o)||!ki(l,u):!0}function Ed(e,t,r){var o=!1,l=Nn,u=t.contextType;return typeof u=="object"&&u!==null?u=Rt(u):(l=pt(t)?Zn:rt.current,o=t.contextTypes,u=(o=o!=null)?br(e,l):Nn),t=new t(r,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xs,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),t}function Sd(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&Xs.enqueueReplaceState(t,t.state,null)}function il(e,t,r,o){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},Ha(e);var u=t.contextType;typeof u=="object"&&u!==null?l.context=Rt(u):(u=pt(t)?Zn:rt.current,l.context=br(e,u)),l.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(rl(e,t,u,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Xs.enqueueReplaceState(l,l.state,null),Ws(e,r,l,o),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Gr(e,t){try{var r="",o=t;do r+=le(o),o=o.return;while(o);var l=r}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:l,digest:null}}function sl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ol(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var vg=typeof WeakMap=="function"?WeakMap:Map;function Id(e,t,r){r=fn(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){so||(so=!0,El=o),ol(e,t)},r}function kd(e,t,r){r=fn(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var l=t.value;r.payload=function(){return o(l)},r.callback=function(){ol(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(r.callback=function(){ol(e,t),typeof o!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var f=t.stack;this.componentDidCatch(t.value,{componentStack:f!==null?f:""})}),r}function Td(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new vg;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(r)||(l.add(r),e=Og.bind(null,e,t,r),t.then(e,e))}function Cd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pd(e,t,r,o,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=fn(-1,1),t.tag=2,xn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var wg=_e.ReactCurrentOwner,mt=!1;function lt(e,t,r,o){t.child=e===null?Gc(t,null,r,o):$r(t,e.child,r,o)}function Ad(e,t,r,o,l){r=r.render;var u=t.ref;return Wr(t,l),o=Ja(e,t,r,o,u,l),r=Xa(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,hn(e,t,l)):(Ne&&r&&La(t),t.flags|=1,lt(e,t,o,l),t.child)}function Rd(e,t,r,o,l){if(e===null){var u=r.type;return typeof u=="function"&&!Al(u)&&u.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=u,Nd(e,t,u,o,l)):(e=fo(r.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&l)===0){var f=u.memoizedProps;if(r=r.compare,r=r!==null?r:ki,r(f,o)&&e.ref===t.ref)return hn(e,t,l)}return t.flags|=1,e=bn(u,o),e.ref=t.ref,e.return=t,t.child=e}function Nd(e,t,r,o,l){if(e!==null){var u=e.memoizedProps;if(ki(u,o)&&e.ref===t.ref)if(mt=!1,t.pendingProps=o=u,(e.lanes&l)!==0)(e.flags&131072)!==0&&(mt=!0);else return t.lanes=e.lanes,hn(e,t,l)}return al(e,t,r,o,l)}function Dd(e,t,r){var o=t.pendingProps,l=o.children,u=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Qr,Tt),Tt|=r;else{if((r&1073741824)===0)return e=u!==null?u.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(Qr,Tt),Tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:r,Ce(Qr,Tt),Tt|=o}else u!==null?(o=u.baseLanes|r,t.memoizedState=null):o=r,Ce(Qr,Tt),Tt|=o;return lt(e,t,l,r),t.child}function Od(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function al(e,t,r,o,l){var u=pt(r)?Zn:rt.current;return u=br(t,u),Wr(t,l),r=Ja(e,t,r,o,u,l),o=Xa(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,hn(e,t,l)):(Ne&&o&&La(t),t.flags|=1,lt(e,t,r,l),t.child)}function xd(e,t,r,o,l){if(pt(r)){var u=!0;Fs(t)}else u=!1;if(Wr(t,l),t.stateNode===null)eo(e,t),Ed(t,r,o),il(t,r,o,l),o=!0;else if(e===null){var f=t.stateNode,m=t.memoizedProps;f.props=m;var y=f.context,k=r.contextType;typeof k=="object"&&k!==null?k=Rt(k):(k=pt(r)?Zn:rt.current,k=br(t,k));var N=r.getDerivedStateFromProps,D=typeof N=="function"||typeof f.getSnapshotBeforeUpdate=="function";D||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==o||y!==k)&&Sd(t,f,o,k),On=!1;var R=t.memoizedState;f.state=R,Ws(t,o,f,l),y=t.memoizedState,m!==o||R!==y||ht.current||On?(typeof N=="function"&&(rl(t,r,N,o),y=t.memoizedState),(m=On||_d(t,r,m,o,R,y,k))?(D||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=y),f.props=o,f.state=y,f.context=k,o=m):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{f=t.stateNode,Qc(e,t),m=t.memoizedProps,k=t.type===t.elementType?m:Ft(t.type,m),f.props=k,D=t.pendingProps,R=f.context,y=r.contextType,typeof y=="object"&&y!==null?y=Rt(y):(y=pt(r)?Zn:rt.current,y=br(t,y));var z=r.getDerivedStateFromProps;(N=typeof z=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==D||R!==y)&&Sd(t,f,o,y),On=!1,R=t.memoizedState,f.state=R,Ws(t,o,f,l);var B=t.memoizedState;m!==D||R!==B||ht.current||On?(typeof z=="function"&&(rl(t,r,z,o),B=t.memoizedState),(k=On||_d(t,r,k,o,R,B,y)||!1)?(N||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,B,y),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,B,y)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=B),f.props=o,f.state=B,f.context=y,o=k):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),o=!1)}return ll(e,t,r,o,u,l)}function ll(e,t,r,o,l,u){Od(e,t);var f=(t.flags&128)!==0;if(!o&&!f)return l&&Vc(t,r,!1),hn(e,t,u);o=t.stateNode,wg.current=t;var m=f&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&f?(t.child=$r(t,e.child,null,u),t.child=$r(t,null,m,u)):lt(e,t,m,u),t.memoizedState=o.state,l&&Vc(t,r,!0),t.child}function Ld(e){var t=e.stateNode;t.pendingContext?Fc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fc(e,t.context,!1),Wa(e,t.containerInfo)}function Md(e,t,r,o,l){return Br(),Va(l),t.flags|=256,lt(e,t,r,o),t.child}var ul={dehydrated:null,treeContext:null,retryLane:0};function cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fd(e,t,r){var o=t.pendingProps,l=xe.current,u=!1,f=(t.flags&128)!==0,m;if((m=f)||(m=e!==null&&e.memoizedState===null?!1:(l&2)!==0),m?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ce(xe,l&1),e===null)return Ua(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(f=o.children,e=o.fallback,u?(o=t.mode,u=t.child,f={mode:"hidden",children:f},(o&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=f):u=ho(f,o,0,null),e=ur(e,o,r,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=cl(r),t.memoizedState=ul,e):dl(t,f));if(l=e.memoizedState,l!==null&&(m=l.dehydrated,m!==null))return _g(e,t,f,o,m,l,r);if(u){u=o.fallback,f=t.mode,l=e.child,m=l.sibling;var y={mode:"hidden",children:o.children};return(f&1)===0&&t.child!==l?(o=t.child,o.childLanes=0,o.pendingProps=y,t.deletions=null):(o=bn(l,y),o.subtreeFlags=l.subtreeFlags&14680064),m!==null?u=bn(m,u):(u=ur(u,f,r,null),u.flags|=2),u.return=t,o.return=t,o.sibling=u,t.child=o,o=u,u=t.child,f=e.child.memoizedState,f=f===null?cl(r):{baseLanes:f.baseLanes|r,cachePool:null,transitions:f.transitions},u.memoizedState=f,u.childLanes=e.childLanes&~r,t.memoizedState=ul,o}return u=e.child,e=u.sibling,o=bn(u,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function dl(e,t){return t=ho({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zs(e,t,r,o){return o!==null&&Va(o),$r(t,e.child,null,r),e=dl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _g(e,t,r,o,l,u,f){if(r)return t.flags&256?(t.flags&=-257,o=sl(Error(s(422))),Zs(e,t,f,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=o.fallback,l=t.mode,o=ho({mode:"visible",children:o.children},l,0,null),u=ur(u,l,f,null),u.flags|=2,o.return=t,u.return=t,o.sibling=u,t.child=o,(t.mode&1)!==0&&$r(t,e.child,null,f),t.child.memoizedState=cl(f),t.memoizedState=ul,u);if((t.mode&1)===0)return Zs(e,t,f,null);if(l.data==="$!"){if(o=l.nextSibling&&l.nextSibling.dataset,o)var m=o.dgst;return o=m,u=Error(s(419)),o=sl(u,o,void 0),Zs(e,t,f,o)}if(m=(f&e.childLanes)!==0,mt||m){if(o=Qe,o!==null){switch(f&-f){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(o.suspendedLanes|f))!==0?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,dn(e,l),bt(o,e,l,-1))}return Pl(),o=sl(Error(s(421))),Zs(e,t,f,o)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=xg.bind(null,e),l._reactRetry=t,null):(e=u.treeContext,kt=An(l.nextSibling),It=t,Ne=!0,Mt=null,e!==null&&(Pt[At++]=un,Pt[At++]=cn,Pt[At++]=er,un=e.id,cn=e.overflow,er=t),t=dl(t,o.children),t.flags|=4096,t)}function Ud(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ba(e.return,t,r)}function fl(e,t,r,o,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:l}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=r,u.tailMode=l)}function Vd(e,t,r){var o=t.pendingProps,l=o.revealOrder,u=o.tail;if(lt(e,t,o.children,r),o=xe.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ud(e,r,t);else if(e.tag===19)Ud(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ce(xe,o),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&Ks(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),fl(t,!1,l,r,u);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ks(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}fl(t,!0,r,null,u);break;case"together":fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function eo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function hn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),sr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,r=bn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=bn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Eg(e,t,r){switch(t.tag){case 3:Ld(t),Br();break;case 5:Xc(t);break;case 1:pt(t.type)&&Fs(t);break;case 4:Wa(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,l=t.memoizedProps.value;Ce(Bs,o._currentValue),o._currentValue=l;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ce(xe,xe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Fd(e,t,r):(Ce(xe,xe.current&1),e=hn(e,t,r),e!==null?e.sibling:null);Ce(xe,xe.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return Vd(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ce(xe,xe.current),o)break;return null;case 22:case 23:return t.lanes=0,Dd(e,t,r)}return hn(e,t,r)}var bd,hl,zd,jd;bd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},hl=function(){},zd=function(e,t,r,o){var l=e.memoizedProps;if(l!==o){e=t.stateNode,rr(qt.current);var u=null;switch(r){case"input":l=Sr(e,l),o=Sr(e,o),u=[];break;case"select":l=b({},l,{value:void 0}),o=b({},o,{value:void 0}),u=[];break;case"textarea":l=P(e,l),o=P(e,o),u=[];break;default:typeof l.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=xs)}Cr(r,o);var f;r=null;for(k in l)if(!o.hasOwnProperty(k)&&l.hasOwnProperty(k)&&l[k]!=null)if(k==="style"){var m=l[k];for(f in m)m.hasOwnProperty(f)&&(r||(r={}),r[f]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(c.hasOwnProperty(k)?u||(u=[]):(u=u||[]).push(k,null));for(k in o){var y=o[k];if(m=l?.[k],o.hasOwnProperty(k)&&y!==m&&(y!=null||m!=null))if(k==="style")if(m){for(f in m)!m.hasOwnProperty(f)||y&&y.hasOwnProperty(f)||(r||(r={}),r[f]="");for(f in y)y.hasOwnProperty(f)&&m[f]!==y[f]&&(r||(r={}),r[f]=y[f])}else r||(u||(u=[]),u.push(k,r)),r=y;else k==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,m=m?m.__html:void 0,y!=null&&m!==y&&(u=u||[]).push(k,y)):k==="children"?typeof y!="string"&&typeof y!="number"||(u=u||[]).push(k,""+y):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(c.hasOwnProperty(k)?(y!=null&&k==="onScroll"&&Ae("scroll",e),u||m===y||(u=[])):(u=u||[]).push(k,y))}r&&(u=u||[]).push("style",r);var k=u;(t.updateQueue=k)&&(t.flags|=4)}},jd=function(e,t,r,o){r!==o&&(t.flags|=4)};function bi(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function st(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,o|=l.subtreeFlags&14680064,o|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function Sg(e,t,r){var o=t.pendingProps;switch(Ma(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(t),null;case 1:return pt(t.type)&&Ms(),st(t),null;case 3:return o=t.stateNode,Kr(),Re(ht),Re(rt),qa(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(zs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mt!==null&&(kl(Mt),Mt=null))),hl(e,t),st(t),null;case 5:Ka(t);var l=rr(Li.current);if(r=t.type,e!==null&&t.stateNode!=null)zd(e,t,r,o,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(s(166));return st(t),null}if(e=rr(qt.current),zs(t)){o=t.stateNode,r=t.type;var u=t.memoizedProps;switch(o[Gt]=t,o[Ri]=u,e=(t.mode&1)!==0,r){case"dialog":Ae("cancel",o),Ae("close",o);break;case"iframe":case"object":case"embed":Ae("load",o);break;case"video":case"audio":for(l=0;l<Ci.length;l++)Ae(Ci[l],o);break;case"source":Ae("error",o);break;case"img":case"image":case"link":Ae("error",o),Ae("load",o);break;case"details":Ae("toggle",o);break;case"input":oi(o,u),Ae("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},Ae("invalid",o);break;case"textarea":V(o,u),Ae("invalid",o)}Cr(r,u),l=null;for(var f in u)if(u.hasOwnProperty(f)){var m=u[f];f==="children"?typeof m=="string"?o.textContent!==m&&(u.suppressHydrationWarning!==!0&&Os(o.textContent,m,e),l=["children",m]):typeof m=="number"&&o.textContent!==""+m&&(u.suppressHydrationWarning!==!0&&Os(o.textContent,m,e),l=["children",""+m]):c.hasOwnProperty(f)&&m!=null&&f==="onScroll"&&Ae("scroll",o)}switch(r){case"input":_r(o),Go(o,u,!0);break;case"textarea":_r(o),L(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=xs)}o=l,t.updateQueue=o,o!==null&&(t.flags|=4)}else{f=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=K(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=f.createElement(r,{is:o.is}):(e=f.createElement(r),r==="select"&&(f=e,o.multiple?f.multiple=!0:o.size&&(f.size=o.size))):e=f.createElementNS(e,r),e[Gt]=t,e[Ri]=o,bd(e,t,!1,!1),t.stateNode=e;e:{switch(f=li(r,o),r){case"dialog":Ae("cancel",e),Ae("close",e),l=o;break;case"iframe":case"object":case"embed":Ae("load",e),l=o;break;case"video":case"audio":for(l=0;l<Ci.length;l++)Ae(Ci[l],e);l=o;break;case"source":Ae("error",e),l=o;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),l=o;break;case"details":Ae("toggle",e),l=o;break;case"input":oi(e,o),l=Sr(e,o),Ae("invalid",e);break;case"option":l=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},l=b({},o,{value:void 0}),Ae("invalid",e);break;case"textarea":V(e,o),l=P(e,o),Ae("invalid",e);break;default:l=o}Cr(r,l),m=l;for(u in m)if(m.hasOwnProperty(u)){var y=m[u];u==="style"?Tr(e,y):u==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&at(e,y)):u==="children"?typeof y=="string"?(r!=="textarea"||y!=="")&&Wt(e,y):typeof y=="number"&&Wt(e,""+y):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?y!=null&&u==="onScroll"&&Ae("scroll",e):y!=null&&Pe(e,u,y,f))}switch(r){case"input":_r(e),Go(e,o,!1);break;case"textarea":_r(e),L(e);break;case"option":o.value!=null&&e.setAttribute("value",""+me(o.value));break;case"select":e.multiple=!!o.multiple,u=o.value,u!=null?S(e,!!o.multiple,u,!1):o.defaultValue!=null&&S(e,!!o.multiple,o.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=xs)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return st(t),null;case 6:if(e&&t.stateNode!=null)jd(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(s(166));if(r=rr(Li.current),rr(qt.current),zs(t)){if(o=t.stateNode,r=t.memoizedProps,o[Gt]=t,(u=o.nodeValue!==r)&&(e=It,e!==null))switch(e.tag){case 3:Os(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Os(o.nodeValue,r,(e.mode&1)!==0)}u&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Gt]=t,t.stateNode=o}return st(t),null;case 13:if(Re(xe),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&kt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Hc(),Br(),t.flags|=98560,u=!1;else if(u=zs(t),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Gt]=t}else Br(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;st(t),u=!1}else Mt!==null&&(kl(Mt),Mt=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xe.current&1)!==0?Ke===0&&(Ke=3):Pl())),t.updateQueue!==null&&(t.flags|=4),st(t),null);case 4:return Kr(),hl(e,t),e===null&&Pi(t.stateNode.containerInfo),st(t),null;case 10:return ja(t.type._context),st(t),null;case 17:return pt(t.type)&&Ms(),st(t),null;case 19:if(Re(xe),u=t.memoizedState,u===null)return st(t),null;if(o=(t.flags&128)!==0,f=u.rendering,f===null)if(o)bi(u,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=Ks(e),f!==null){for(t.flags|=128,bi(u,!1),o=f.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)u=r,e=o,u.flags&=14680066,f=u.alternate,f===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=f.childLanes,u.lanes=f.lanes,u.child=f.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=f.memoizedProps,u.memoizedState=f.memoizedState,u.updateQueue=f.updateQueue,u.type=f.type,e=f.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ce(xe,xe.current&1|2),t.child}e=e.sibling}u.tail!==null&&Fe()>Yr&&(t.flags|=128,o=!0,bi(u,!1),t.lanes=4194304)}else{if(!o)if(e=Ks(f),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),bi(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ne)return st(t),null}else 2*Fe()-u.renderingStartTime>Yr&&r!==1073741824&&(t.flags|=128,o=!0,bi(u,!1),t.lanes=4194304);u.isBackwards?(f.sibling=t.child,t.child=f):(r=u.last,r!==null?r.sibling=f:t.child=f,u.last=f)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Fe(),t.sibling=null,r=xe.current,Ce(xe,o?r&1|2:r&1),t):(st(t),null);case 22:case 23:return Cl(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(Tt&1073741824)!==0&&(st(t),t.subtreeFlags&6&&(t.flags|=8192)):st(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Ig(e,t){switch(Ma(t),t.tag){case 1:return pt(t.type)&&Ms(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kr(),Re(ht),Re(rt),qa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ka(t),null;case 13:if(Re(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(xe),null;case 4:return Kr(),null;case 10:return ja(t.type._context),null;case 22:case 23:return Cl(),null;case 24:return null;default:return null}}var to=!1,ot=!1,kg=typeof WeakSet=="function"?WeakSet:Set,j=null;function qr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Me(e,t,o)}else r.current=null}function pl(e,t,r){try{r()}catch(o){Me(e,t,o)}}var Bd=!1;function Tg(e,t){if(Ca=Es,e=_c(),va(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{r.nodeType,u.nodeType}catch{r=null;break e}var f=0,m=-1,y=-1,k=0,N=0,D=e,R=null;t:for(;;){for(var z;D!==r||l!==0&&D.nodeType!==3||(m=f+l),D!==u||o!==0&&D.nodeType!==3||(y=f+o),D.nodeType===3&&(f+=D.nodeValue.length),(z=D.firstChild)!==null;)R=D,D=z;for(;;){if(D===e)break t;if(R===r&&++k===l&&(m=f),R===u&&++N===o&&(y=f),(z=D.nextSibling)!==null)break;D=R,R=D.parentNode}D=z}r=m===-1||y===-1?null:{start:m,end:y}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pa={focusedElem:e,selectionRange:r},Es=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var B=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var $=B.memoizedProps,Ue=B.memoizedState,E=t.stateNode,v=E.getSnapshotBeforeUpdate(t.elementType===t.type?$:Ft(t.type,$),Ue);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=t.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(x){Me(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return B=Bd,Bd=!1,B}function zi(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&pl(t,r,u)}l=l.next}while(l!==o)}}function no(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function ml(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function $d(e){var t=e.alternate;t!==null&&(e.alternate=null,$d(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gt],delete t[Ri],delete t[Da],delete t[ag],delete t[lg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hd(e){return e.tag===5||e.tag===3||e.tag===4}function Wd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gl(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=xs));else if(o!==4&&(e=e.child,e!==null))for(gl(e,t,r),e=e.sibling;e!==null;)gl(e,t,r),e=e.sibling}function yl(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(yl(e,t,r),e=e.sibling;e!==null;)yl(e,t,r),e=e.sibling}var et=null,Ut=!1;function Ln(e,t,r){for(r=r.child;r!==null;)Kd(e,t,r),r=r.sibling}function Kd(e,t,r){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(ms,r)}catch{}switch(r.tag){case 5:ot||qr(r,t);case 6:var o=et,l=Ut;et=null,Ln(e,t,r),et=o,Ut=l,et!==null&&(Ut?(e=et,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):et.removeChild(r.stateNode));break;case 18:et!==null&&(Ut?(e=et,r=r.stateNode,e.nodeType===8?Na(e.parentNode,r):e.nodeType===1&&Na(e,r),vi(e)):Na(et,r.stateNode));break;case 4:o=et,l=Ut,et=r.stateNode.containerInfo,Ut=!0,Ln(e,t,r),et=o,Ut=l;break;case 0:case 11:case 14:case 15:if(!ot&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){l=o=o.next;do{var u=l,f=u.destroy;u=u.tag,f!==void 0&&((u&2)!==0||(u&4)!==0)&&pl(r,t,f),l=l.next}while(l!==o)}Ln(e,t,r);break;case 1:if(!ot&&(qr(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(m){Me(r,t,m)}Ln(e,t,r);break;case 21:Ln(e,t,r);break;case 22:r.mode&1?(ot=(o=ot)||r.memoizedState!==null,Ln(e,t,r),ot=o):Ln(e,t,r);break;default:Ln(e,t,r)}}function Gd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new kg),t.forEach(function(o){var l=Lg.bind(null,e,o);r.has(o)||(r.add(o),o.then(l,l))})}}function Vt(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var l=r[o];try{var u=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 5:et=m.stateNode,Ut=!1;break e;case 3:et=m.stateNode.containerInfo,Ut=!0;break e;case 4:et=m.stateNode.containerInfo,Ut=!0;break e}m=m.return}if(et===null)throw Error(s(160));Kd(u,f,l),et=null,Ut=!1;var y=l.alternate;y!==null&&(y.return=null),l.return=null}catch(k){Me(l,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qd(t,e),t=t.sibling}function qd(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vt(t,e),Yt(e),o&4){try{zi(3,e,e.return),no(3,e)}catch($){Me(e,e.return,$)}try{zi(5,e,e.return)}catch($){Me(e,e.return,$)}}break;case 1:Vt(t,e),Yt(e),o&512&&r!==null&&qr(r,r.return);break;case 5:if(Vt(t,e),Yt(e),o&512&&r!==null&&qr(r,r.return),e.flags&32){var l=e.stateNode;try{Wt(l,"")}catch($){Me(e,e.return,$)}}if(o&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,f=r!==null?r.memoizedProps:u,m=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{m==="input"&&u.type==="radio"&&u.name!=null&&ds(l,u),li(m,f);var k=li(m,u);for(f=0;f<y.length;f+=2){var N=y[f],D=y[f+1];N==="style"?Tr(l,D):N==="dangerouslySetInnerHTML"?at(l,D):N==="children"?Wt(l,D):Pe(l,N,D,k)}switch(m){case"input":ai(l,u);break;case"textarea":F(l,u);break;case"select":var R=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var z=u.value;z!=null?S(l,!!u.multiple,z,!1):R!==!!u.multiple&&(u.defaultValue!=null?S(l,!!u.multiple,u.defaultValue,!0):S(l,!!u.multiple,u.multiple?[]:"",!1))}l[Ri]=u}catch($){Me(e,e.return,$)}}break;case 6:if(Vt(t,e),Yt(e),o&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch($){Me(e,e.return,$)}}break;case 3:if(Vt(t,e),Yt(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{vi(t.containerInfo)}catch($){Me(e,e.return,$)}break;case 4:Vt(t,e),Yt(e);break;case 13:Vt(t,e),Yt(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(_l=Fe())),o&4&&Gd(e);break;case 22:if(N=r!==null&&r.memoizedState!==null,e.mode&1?(ot=(k=ot)||N,Vt(t,e),ot=k):Vt(t,e),Yt(e),o&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!N&&(e.mode&1)!==0)for(j=e,N=e.child;N!==null;){for(D=j=N;j!==null;){switch(R=j,z=R.child,R.tag){case 0:case 11:case 14:case 15:zi(4,R,R.return);break;case 1:qr(R,R.return);var B=R.stateNode;if(typeof B.componentWillUnmount=="function"){o=R,r=R.return;try{t=o,B.props=t.memoizedProps,B.state=t.memoizedState,B.componentWillUnmount()}catch($){Me(o,r,$)}}break;case 5:qr(R,R.return);break;case 22:if(R.memoizedState!==null){Jd(D);continue}}z!==null?(z.return=R,j=z):Jd(D)}N=N.sibling}e:for(N=null,D=e;;){if(D.tag===5){if(N===null){N=D;try{l=D.stateNode,k?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(m=D.stateNode,y=D.memoizedProps.style,f=y!=null&&y.hasOwnProperty("display")?y.display:null,m.style.display=kr("display",f))}catch($){Me(e,e.return,$)}}}else if(D.tag===6){if(N===null)try{D.stateNode.nodeValue=k?"":D.memoizedProps}catch($){Me(e,e.return,$)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;N===D&&(N=null),D=D.return}N===D&&(N=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Vt(t,e),Yt(e),o&4&&Gd(e);break;case 21:break;default:Vt(t,e),Yt(e)}}function Yt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Hd(r)){var o=r;break e}r=r.return}throw Error(s(160))}switch(o.tag){case 5:var l=o.stateNode;o.flags&32&&(Wt(l,""),o.flags&=-33);var u=Wd(e);yl(e,u,l);break;case 3:case 4:var f=o.stateNode.containerInfo,m=Wd(e);gl(e,m,f);break;default:throw Error(s(161))}}catch(y){Me(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cg(e,t,r){j=e,Qd(e)}function Qd(e,t,r){for(var o=(e.mode&1)!==0;j!==null;){var l=j,u=l.child;if(l.tag===22&&o){var f=l.memoizedState!==null||to;if(!f){var m=l.alternate,y=m!==null&&m.memoizedState!==null||ot;m=to;var k=ot;if(to=f,(ot=y)&&!k)for(j=l;j!==null;)f=j,y=f.child,f.tag===22&&f.memoizedState!==null?Xd(l):y!==null?(y.return=f,j=y):Xd(l);for(;u!==null;)j=u,Qd(u),u=u.sibling;j=l,to=m,ot=k}Yd(e)}else(l.subtreeFlags&8772)!==0&&u!==null?(u.return=l,j=u):Yd(e)}}function Yd(e){for(;j!==null;){var t=j;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ot||no(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ot)if(r===null)o.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Ft(t.type,r.memoizedProps);o.componentDidUpdate(l,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&Jc(t,u,o);break;case 3:var f=t.updateQueue;if(f!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Jc(t,f,r)}break;case 5:var m=t.stateNode;if(r===null&&t.flags&4){r=m;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&r.focus();break;case"img":y.src&&(r.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var N=k.memoizedState;if(N!==null){var D=N.dehydrated;D!==null&&vi(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}ot||t.flags&512&&ml(t)}catch(R){Me(t,t.return,R)}}if(t===e){j=null;break}if(r=t.sibling,r!==null){r.return=t.return,j=r;break}j=t.return}}function Jd(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var r=t.sibling;if(r!==null){r.return=t.return,j=r;break}j=t.return}}function Xd(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{no(4,t)}catch(y){Me(t,r,y)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var l=t.return;try{o.componentDidMount()}catch(y){Me(t,l,y)}}var u=t.return;try{ml(t)}catch(y){Me(t,u,y)}break;case 5:var f=t.return;try{ml(t)}catch(y){Me(t,f,y)}}}catch(y){Me(t,t.return,y)}if(t===e){j=null;break}var m=t.sibling;if(m!==null){m.return=t.return,j=m;break}j=t.return}}var Pg=Math.ceil,ro=_e.ReactCurrentDispatcher,vl=_e.ReactCurrentOwner,Dt=_e.ReactCurrentBatchConfig,pe=0,Qe=null,Be=null,tt=0,Tt=0,Qr=Rn(0),Ke=0,ji=null,sr=0,io=0,wl=0,Bi=null,gt=null,_l=0,Yr=1/0,pn=null,so=!1,El=null,Mn=null,oo=!1,Fn=null,ao=0,$i=0,Sl=null,lo=-1,uo=0;function ut(){return(pe&6)!==0?Fe():lo!==-1?lo:lo=Fe()}function Un(e){return(e.mode&1)===0?1:(pe&2)!==0&&tt!==0?tt&-tt:cg.transition!==null?(uo===0&&(uo=Wu()),uo):(e=Se,e!==0||(e=window.event,e=e===void 0?16:ec(e.type)),e)}function bt(e,t,r,o){if(50<$i)throw $i=0,Sl=null,Error(s(185));hi(e,r,o),((pe&2)===0||e!==Qe)&&(e===Qe&&((pe&2)===0&&(io|=r),Ke===4&&Vn(e,tt)),yt(e,o),r===1&&pe===0&&(t.mode&1)===0&&(Yr=Fe()+500,Us&&Dn()))}function yt(e,t){var r=e.callbackNode;cm(e,t);var o=vs(e,e===Qe?tt:0);if(o===0)r!==null&&Bu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&Bu(r),t===1)e.tag===0?ug(ef.bind(null,e)):bc(ef.bind(null,e)),sg(function(){(pe&6)===0&&Dn()}),r=null;else{switch(Ku(o)){case 1:r=ta;break;case 4:r=$u;break;case 16:r=ps;break;case 536870912:r=Hu;break;default:r=ps}r=uf(r,Zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Zd(e,t){if(lo=-1,uo=0,(pe&6)!==0)throw Error(s(327));var r=e.callbackNode;if(Jr()&&e.callbackNode!==r)return null;var o=vs(e,e===Qe?tt:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=co(e,o);else{t=o;var l=pe;pe|=2;var u=nf();(Qe!==e||tt!==t)&&(pn=null,Yr=Fe()+500,ar(e,t));do try{Ng();break}catch(m){tf(e,m)}while(!0);za(),ro.current=u,pe=l,Be!==null?t=0:(Qe=null,tt=0,t=Ke)}if(t!==0){if(t===2&&(l=na(e),l!==0&&(o=l,t=Il(e,l))),t===1)throw r=ji,ar(e,0),Vn(e,o),yt(e,Fe()),r;if(t===6)Vn(e,o);else{if(l=e.current.alternate,(o&30)===0&&!Ag(l)&&(t=co(e,o),t===2&&(u=na(e),u!==0&&(o=u,t=Il(e,u))),t===1))throw r=ji,ar(e,0),Vn(e,o),yt(e,Fe()),r;switch(e.finishedWork=l,e.finishedLanes=o,t){case 0:case 1:throw Error(s(345));case 2:lr(e,gt,pn);break;case 3:if(Vn(e,o),(o&130023424)===o&&(t=_l+500-Fe(),10<t)){if(vs(e,0)!==0)break;if(l=e.suspendedLanes,(l&o)!==o){ut(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ra(lr.bind(null,e,gt,pn),t);break}lr(e,gt,pn);break;case 4:if(Vn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,l=-1;0<o;){var f=31-xt(o);u=1<<f,f=t[f],f>l&&(l=f),o&=~u}if(o=l,o=Fe()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Pg(o/1960))-o,10<o){e.timeoutHandle=Ra(lr.bind(null,e,gt,pn),o);break}lr(e,gt,pn);break;case 5:lr(e,gt,pn);break;default:throw Error(s(329))}}}return yt(e,Fe()),e.callbackNode===r?Zd.bind(null,e):null}function Il(e,t){var r=Bi;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=co(e,t),e!==2&&(t=gt,gt=r,t!==null&&kl(t)),e}function kl(e){gt===null?gt=e:gt.push.apply(gt,e)}function Ag(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var l=r[o],u=l.getSnapshot;l=l.value;try{if(!Lt(u(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(e,t){for(t&=~wl,t&=~io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-xt(t),o=1<<r;e[r]=-1,t&=~o}}function ef(e){if((pe&6)!==0)throw Error(s(327));Jr();var t=vs(e,0);if((t&1)===0)return yt(e,Fe()),null;var r=co(e,t);if(e.tag!==0&&r===2){var o=na(e);o!==0&&(t=o,r=Il(e,o))}if(r===1)throw r=ji,ar(e,0),Vn(e,t),yt(e,Fe()),r;if(r===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lr(e,gt,pn),yt(e,Fe()),null}function Tl(e,t){var r=pe;pe|=1;try{return e(t)}finally{pe=r,pe===0&&(Yr=Fe()+500,Us&&Dn())}}function or(e){Fn!==null&&Fn.tag===0&&(pe&6)===0&&Jr();var t=pe;pe|=1;var r=Dt.transition,o=Se;try{if(Dt.transition=null,Se=1,e)return e()}finally{Se=o,Dt.transition=r,pe=t,(pe&6)===0&&Dn()}}function Cl(){Tt=Qr.current,Re(Qr)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,ig(r)),Be!==null)for(r=Be.return;r!==null;){var o=r;switch(Ma(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ms();break;case 3:Kr(),Re(ht),Re(rt),qa();break;case 5:Ka(o);break;case 4:Kr();break;case 13:Re(xe);break;case 19:Re(xe);break;case 10:ja(o.type._context);break;case 22:case 23:Cl()}r=r.return}if(Qe=e,Be=e=bn(e.current,null),tt=Tt=t,Ke=0,ji=null,wl=io=sr=0,gt=Bi=null,nr!==null){for(t=0;t<nr.length;t++)if(r=nr[t],o=r.interleaved,o!==null){r.interleaved=null;var l=o.next,u=r.pending;if(u!==null){var f=u.next;u.next=l,o.next=f}r.pending=o}nr=null}return e}function tf(e,t){do{var r=Be;try{if(za(),Gs.current=Js,qs){for(var o=Le.memoizedState;o!==null;){var l=o.queue;l!==null&&(l.pending=null),o=o.next}qs=!1}if(ir=0,qe=We=Le=null,Mi=!1,Fi=0,vl.current=null,r===null||r.return===null){Ke=1,ji=t,Be=null;break}e:{var u=e,f=r.return,m=r,y=t;if(t=tt,m.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var k=y,N=m,D=N.tag;if((N.mode&1)===0&&(D===0||D===11||D===15)){var R=N.alternate;R?(N.updateQueue=R.updateQueue,N.memoizedState=R.memoizedState,N.lanes=R.lanes):(N.updateQueue=null,N.memoizedState=null)}var z=Cd(f);if(z!==null){z.flags&=-257,Pd(z,f,m,u,t),z.mode&1&&Td(u,k,t),t=z,y=k;var B=t.updateQueue;if(B===null){var $=new Set;$.add(y),t.updateQueue=$}else B.add(y);break e}else{if((t&1)===0){Td(u,k,t),Pl();break e}y=Error(s(426))}}else if(Ne&&m.mode&1){var Ue=Cd(f);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),Pd(Ue,f,m,u,t),Va(Gr(y,m));break e}}u=y=Gr(y,m),Ke!==4&&(Ke=2),Bi===null?Bi=[u]:Bi.push(u),u=f;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var E=Id(u,y,t);Yc(u,E);break e;case 1:m=y;var v=u.type,I=u.stateNode;if((u.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Mn===null||!Mn.has(I)))){u.flags|=65536,t&=-t,u.lanes|=t;var x=kd(u,m,t);Yc(u,x);break e}}u=u.return}while(u!==null)}sf(r)}catch(W){t=W,Be===r&&r!==null&&(Be=r=r.return);continue}break}while(!0)}function nf(){var e=ro.current;return ro.current=Js,e===null?Js:e}function Pl(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Qe===null||(sr&268435455)===0&&(io&268435455)===0||Vn(Qe,tt)}function co(e,t){var r=pe;pe|=2;var o=nf();(Qe!==e||tt!==t)&&(pn=null,ar(e,t));do try{Rg();break}catch(l){tf(e,l)}while(!0);if(za(),pe=r,ro.current=o,Be!==null)throw Error(s(261));return Qe=null,tt=0,Ke}function Rg(){for(;Be!==null;)rf(Be)}function Ng(){for(;Be!==null&&!tm();)rf(Be)}function rf(e){var t=lf(e.alternate,e,Tt);e.memoizedProps=e.pendingProps,t===null?sf(e):Be=t,vl.current=null}function sf(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Sg(r,t,Tt),r!==null){Be=r;return}}else{if(r=Ig(r,t),r!==null){r.flags&=32767,Be=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,Be=null;return}}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);Ke===0&&(Ke=5)}function lr(e,t,r){var o=Se,l=Dt.transition;try{Dt.transition=null,Se=1,Dg(e,t,r,o)}finally{Dt.transition=l,Se=o}return null}function Dg(e,t,r,o){do Jr();while(Fn!==null);if((pe&6)!==0)throw Error(s(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var u=r.lanes|r.childLanes;if(dm(e,u),e===Qe&&(Be=Qe=null,tt=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||oo||(oo=!0,uf(ps,function(){return Jr(),null})),u=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||u){u=Dt.transition,Dt.transition=null;var f=Se;Se=1;var m=pe;pe|=4,vl.current=null,Tg(e,r),qd(r,e),Jm(Pa),Es=!!Ca,Pa=Ca=null,e.current=r,Cg(r),nm(),pe=m,Se=f,Dt.transition=u}else e.current=r;if(oo&&(oo=!1,Fn=e,ao=l),u=e.pendingLanes,u===0&&(Mn=null),sm(r.stateNode),yt(e,Fe()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],o(l.value,{componentStack:l.stack,digest:l.digest});if(so)throw so=!1,e=El,El=null,e;return(ao&1)!==0&&e.tag!==0&&Jr(),u=e.pendingLanes,(u&1)!==0?e===Sl?$i++:($i=0,Sl=e):$i=0,Dn(),null}function Jr(){if(Fn!==null){var e=Ku(ao),t=Dt.transition,r=Se;try{if(Dt.transition=null,Se=16>e?16:e,Fn===null)var o=!1;else{if(e=Fn,Fn=null,ao=0,(pe&6)!==0)throw Error(s(331));var l=pe;for(pe|=4,j=e.current;j!==null;){var u=j,f=u.child;if((j.flags&16)!==0){var m=u.deletions;if(m!==null){for(var y=0;y<m.length;y++){var k=m[y];for(j=k;j!==null;){var N=j;switch(N.tag){case 0:case 11:case 15:zi(8,N,u)}var D=N.child;if(D!==null)D.return=N,j=D;else for(;j!==null;){N=j;var R=N.sibling,z=N.return;if($d(N),N===k){j=null;break}if(R!==null){R.return=z,j=R;break}j=z}}}var B=u.alternate;if(B!==null){var $=B.child;if($!==null){B.child=null;do{var Ue=$.sibling;$.sibling=null,$=Ue}while($!==null)}}j=u}}if((u.subtreeFlags&2064)!==0&&f!==null)f.return=u,j=f;else e:for(;j!==null;){if(u=j,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:zi(9,u,u.return)}var E=u.sibling;if(E!==null){E.return=u.return,j=E;break e}j=u.return}}var v=e.current;for(j=v;j!==null;){f=j;var I=f.child;if((f.subtreeFlags&2064)!==0&&I!==null)I.return=f,j=I;else e:for(f=v;j!==null;){if(m=j,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:no(9,m)}}catch(W){Me(m,m.return,W)}if(m===f){j=null;break e}var x=m.sibling;if(x!==null){x.return=m.return,j=x;break e}j=m.return}}if(pe=l,Dn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(ms,e)}catch{}o=!0}return o}finally{Se=r,Dt.transition=t}}return!1}function of(e,t,r){t=Gr(r,t),t=Id(e,t,1),e=xn(e,t,1),t=ut(),e!==null&&(hi(e,1,t),yt(e,t))}function Me(e,t,r){if(e.tag===3)of(e,e,r);else for(;t!==null;){if(t.tag===3){of(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Mn===null||!Mn.has(o))){e=Gr(r,e),e=kd(t,e,1),t=xn(t,e,1),e=ut(),t!==null&&(hi(t,1,e),yt(t,e));break}}t=t.return}}function Og(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=ut(),e.pingedLanes|=e.suspendedLanes&r,Qe===e&&(tt&r)===r&&(Ke===4||Ke===3&&(tt&130023424)===tt&&500>Fe()-_l?ar(e,0):wl|=r),yt(e,t)}function af(e,t){t===0&&((e.mode&1)===0?t=1:(t=ys,ys<<=1,(ys&130023424)===0&&(ys=4194304)));var r=ut();e=dn(e,t),e!==null&&(hi(e,t,r),yt(e,r))}function xg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),af(e,r)}function Lg(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(s(314))}o!==null&&o.delete(t),af(e,r)}var lf;lf=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ht.current)mt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return mt=!1,Eg(e,t,r);mt=(e.flags&131072)!==0}else mt=!1,Ne&&(t.flags&1048576)!==0&&zc(t,bs,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;eo(e,t),e=t.pendingProps;var l=br(t,rt.current);Wr(t,r),l=Ja(null,t,o,e,l,r);var u=Xa();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(o)?(u=!0,Fs(t)):u=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ha(t),l.updater=Xs,t.stateNode=l,l._reactInternals=t,il(t,o,e,r),t=ll(null,t,o,!0,u,r)):(t.tag=0,Ne&&u&&La(t),lt(null,t,l,r),t=t.child),t;case 16:o=t.elementType;e:{switch(eo(e,t),e=t.pendingProps,l=o._init,o=l(o._payload),t.type=o,l=t.tag=Fg(o),e=Ft(o,e),l){case 0:t=al(null,t,o,e,r);break e;case 1:t=xd(null,t,o,e,r);break e;case 11:t=Ad(null,t,o,e,r);break e;case 14:t=Rd(null,t,o,Ft(o.type,e),r);break e}throw Error(s(306,o,""))}return t;case 0:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Ft(o,l),al(e,t,o,l,r);case 1:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Ft(o,l),xd(e,t,o,l,r);case 3:e:{if(Ld(t),e===null)throw Error(s(387));o=t.pendingProps,u=t.memoizedState,l=u.element,Qc(e,t),Ws(t,o,null,r);var f=t.memoizedState;if(o=f.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){l=Gr(Error(s(423)),t),t=Md(e,t,o,r,l);break e}else if(o!==l){l=Gr(Error(s(424)),t),t=Md(e,t,o,r,l);break e}else for(kt=An(t.stateNode.containerInfo.firstChild),It=t,Ne=!0,Mt=null,r=Gc(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Br(),o===l){t=hn(e,t,r);break e}lt(e,t,o,r)}t=t.child}return t;case 5:return Xc(t),e===null&&Ua(t),o=t.type,l=t.pendingProps,u=e!==null?e.memoizedProps:null,f=l.children,Aa(o,l)?f=null:u!==null&&Aa(o,u)&&(t.flags|=32),Od(e,t),lt(e,t,f,r),t.child;case 6:return e===null&&Ua(t),null;case 13:return Fd(e,t,r);case 4:return Wa(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=$r(t,null,o,r):lt(e,t,o,r),t.child;case 11:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Ft(o,l),Ad(e,t,o,l,r);case 7:return lt(e,t,t.pendingProps,r),t.child;case 8:return lt(e,t,t.pendingProps.children,r),t.child;case 12:return lt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,l=t.pendingProps,u=t.memoizedProps,f=l.value,Ce(Bs,o._currentValue),o._currentValue=f,u!==null)if(Lt(u.value,f)){if(u.children===l.children&&!ht.current){t=hn(e,t,r);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var m=u.dependencies;if(m!==null){f=u.child;for(var y=m.firstContext;y!==null;){if(y.context===o){if(u.tag===1){y=fn(-1,r&-r),y.tag=2;var k=u.updateQueue;if(k!==null){k=k.shared;var N=k.pending;N===null?y.next=y:(y.next=N.next,N.next=y),k.pending=y}}u.lanes|=r,y=u.alternate,y!==null&&(y.lanes|=r),Ba(u.return,r,t),m.lanes|=r;break}y=y.next}}else if(u.tag===10)f=u.type===t.type?null:u.child;else if(u.tag===18){if(f=u.return,f===null)throw Error(s(341));f.lanes|=r,m=f.alternate,m!==null&&(m.lanes|=r),Ba(f,r,t),f=u.sibling}else f=u.child;if(f!==null)f.return=u;else for(f=u;f!==null;){if(f===t){f=null;break}if(u=f.sibling,u!==null){u.return=f.return,f=u;break}f=f.return}u=f}lt(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,o=t.pendingProps.children,Wr(t,r),l=Rt(l),o=o(l),t.flags|=1,lt(e,t,o,r),t.child;case 14:return o=t.type,l=Ft(o,t.pendingProps),l=Ft(o.type,l),Rd(e,t,o,l,r);case 15:return Nd(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Ft(o,l),eo(e,t),t.tag=1,pt(o)?(e=!0,Fs(t)):e=!1,Wr(t,r),Ed(t,o,l),il(t,o,l,r),ll(null,t,o,!0,e,r);case 19:return Vd(e,t,r);case 22:return Dd(e,t,r)}throw Error(s(156,t.tag))};function uf(e,t){return ju(e,t)}function Mg(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,r,o){return new Mg(e,t,r,o)}function Al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fg(e){if(typeof e=="function")return Al(e)?1:0;if(e!=null){if(e=e.$$typeof,e===te)return 11;if(e===Te)return 14}return 2}function bn(e,t){var r=e.alternate;return r===null?(r=Ot(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function fo(e,t,r,o,l,u){var f=2;if(o=e,typeof e=="function")Al(e)&&(f=1);else if(typeof e=="string")f=5;else e:switch(e){case Oe:return ur(r.children,l,u,t);case nt:f=8,l|=8;break;case je:return e=Ot(12,r,t,l|2),e.elementType=je,e.lanes=u,e;case ne:return e=Ot(13,r,t,l),e.elementType=ne,e.lanes=u,e;case de:return e=Ot(19,r,t,l),e.elementType=de,e.lanes=u,e;case fe:return ho(r,l,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xe:f=10;break e;case Ge:f=9;break e;case te:f=11;break e;case Te:f=14;break e;case Ee:f=16,o=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=Ot(f,r,t,l),t.elementType=e,t.type=o,t.lanes=u,t}function ur(e,t,r,o){return e=Ot(7,e,o,t),e.lanes=r,e}function ho(e,t,r,o){return e=Ot(22,e,o,t),e.elementType=fe,e.lanes=r,e.stateNode={isHidden:!1},e}function Rl(e,t,r){return e=Ot(6,e,null,t),e.lanes=r,e}function Nl(e,t,r){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ug(e,t,r,o,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=o,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Dl(e,t,r,o,l,u,f,m,y){return e=new Ug(e,t,r,m,y),t===1?(t=1,u===!0&&(t|=8)):t=0,u=Ot(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ha(u),e}function Vg(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ze,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function cf(e){if(!e)return Nn;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var r=e.type;if(pt(r))return Uc(e,r,t)}return t}function df(e,t,r,o,l,u,f,m,y){return e=Dl(r,o,!0,e,l,u,f,m,y),e.context=cf(null),r=e.current,o=ut(),l=Un(r),u=fn(o,l),u.callback=t??null,xn(r,u,l),e.current.lanes=l,hi(e,l,o),yt(e,o),e}function po(e,t,r,o){var l=t.current,u=ut(),f=Un(l);return r=cf(r),t.context===null?t.context=r:t.pendingContext=r,t=fn(u,f),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=xn(l,t,f),e!==null&&(bt(e,l,f,u),Hs(e,l,f)),f}function mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ff(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ol(e,t){ff(e,t),(e=e.alternate)&&ff(e,t)}function bg(){return null}var hf=typeof reportError=="function"?reportError:function(e){console.error(e)};function xl(e){this._internalRoot=e}go.prototype.render=xl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));po(e,t,null,null)},go.prototype.unmount=xl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){po(null,e,null,null)}),t[an]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Tn.length&&t!==0&&t<Tn[r].priority;r++);Tn.splice(r,0,e),r===0&&Xu(e)}};function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pf(){}function zg(e,t,r,o,l){if(l){if(typeof o=="function"){var u=o;o=function(){var k=mo(f);u.call(k)}}var f=df(t,o,e,0,null,!1,!1,"",pf);return e._reactRootContainer=f,e[an]=f.current,Pi(e.nodeType===8?e.parentNode:e),or(),f}for(;l=e.lastChild;)e.removeChild(l);if(typeof o=="function"){var m=o;o=function(){var k=mo(y);m.call(k)}}var y=Dl(e,0,!1,null,null,!1,!1,"",pf);return e._reactRootContainer=y,e[an]=y.current,Pi(e.nodeType===8?e.parentNode:e),or(function(){po(t,y,r,o)}),y}function vo(e,t,r,o,l){var u=r._reactRootContainer;if(u){var f=u;if(typeof l=="function"){var m=l;l=function(){var y=mo(f);m.call(y)}}po(t,f,e,l)}else f=zg(r,t,e,l,o);return mo(f)}Gu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=fi(t.pendingLanes);r!==0&&(ia(t,r|1),yt(t,Fe()),(pe&6)===0&&(Yr=Fe()+500,Dn()))}break;case 13:or(function(){var o=dn(e,1);if(o!==null){var l=ut();bt(o,e,1,l)}}),Ol(e,1)}},sa=function(e){if(e.tag===13){var t=dn(e,134217728);if(t!==null){var r=ut();bt(t,e,134217728,r)}Ol(e,134217728)}},qu=function(e){if(e.tag===13){var t=Un(e),r=dn(e,t);if(r!==null){var o=ut();bt(r,e,t,o)}Ol(e,t)}},Qu=function(){return Se},Yu=function(e,t){var r=Se;try{return Se=e,t()}finally{Se=r}},Jo=function(e,t,r){switch(t){case"input":if(ai(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var l=Ls(o);if(!l)throw Error(s(90));si(o),ai(o,l)}}}break;case"textarea":F(e,r);break;case"select":t=r.value,t!=null&&S(e,!!r.multiple,t,!1)}},Lu=Tl,Mu=or;var jg={usingClientEntryPoint:!1,Events:[Ni,Ur,Ls,Ou,xu,Tl]},Hi={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bg={bundleType:Hi.bundleType,version:Hi.version,rendererPackageName:Hi.rendererPackageName,rendererConfig:Hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_e.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bu(e),e===null?null:e.stateNode},findFiberByHostInstance:Hi.findFiberByHostInstance||bg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{ms=wo.inject(Bg),Kt=wo}catch{}}return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jg,vt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ll(t))throw Error(s(200));return Vg(e,t,null,r)},vt.createRoot=function(e,t){if(!Ll(e))throw Error(s(299));var r=!1,o="",l=hf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Dl(e,1,!1,null,null,r,!1,o,l),e[an]=t.current,Pi(e.nodeType===8?e.parentNode:e),new xl(t)},vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=bu(t),e=e===null?null:e.stateNode,e},vt.flushSync=function(e){return or(e)},vt.hydrate=function(e,t,r){if(!yo(t))throw Error(s(200));return vo(null,e,t,!0,r)},vt.hydrateRoot=function(e,t,r){if(!Ll(e))throw Error(s(405));var o=r!=null&&r.hydratedSources||null,l=!1,u="",f=hf;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),t=df(t,null,e,1,r??null,l,!1,u,f),e[an]=t.current,Pi(e),o)for(e=0;e<o.length;e++)r=o[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new go(t)},vt.render=function(e,t,r){if(!yo(t))throw Error(s(200));return vo(null,e,t,!1,r)},vt.unmountComponentAtNode=function(e){if(!yo(e))throw Error(s(40));return e._reactRootContainer?(or(function(){vo(null,null,e,!1,function(){e._reactRootContainer=null,e[an]=null})}),!0):!1},vt.unstable_batchedUpdates=Tl,vt.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!yo(r))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return vo(e,t,r,!1,o)},vt.version="18.3.1-next-f1338f8080-20240426",vt}var Sf;function Yg(){if(Sf)return Ul.exports;Sf=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),Ul.exports=Qg(),Ul.exports}var If;function Jg(){if(If)return _o;If=1;var i=Yg();return _o.createRoot=i.createRoot,_o.hydrateRoot=i.hydrateRoot,_o}var Xg=Jg();const Zg=Eh(Xg);var is=i=>i.type==="checkbox",dr=i=>i instanceof Date,ct=i=>i==null;const Sh=i=>typeof i=="object";var Ve=i=>!ct(i)&&!Array.isArray(i)&&Sh(i)&&!dr(i),ey=i=>Ve(i)&&i.target?is(i.target)?i.target.checked:i.target.value:i,ty=i=>i.substring(0,i.search(/\.\d+(\.|$)/))||i,ny=(i,n)=>i.has(ty(n)),ry=i=>{const n=i.constructor&&i.constructor.prototype;return Ve(n)&&n.hasOwnProperty("isPrototypeOf")},uu=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Je(i){let n;const s=Array.isArray(i),a=typeof FileList<"u"?i instanceof FileList:!1;if(i instanceof Date)n=new Date(i);else if(!(uu&&(i instanceof Blob||a))&&(s||Ve(i)))if(n=s?[]:Object.create(Object.getPrototypeOf(i)),!s&&!ry(i))n=i;else for(const c in i)i.hasOwnProperty(c)&&(n[c]=Je(i[c]));else return i;return n}var bo=i=>/^\w*$/.test(i),He=i=>i===void 0,cu=i=>Array.isArray(i)?i.filter(Boolean):[],du=i=>cu(i.replace(/["|']|\]/g,"").split(/\.|\[/)),H=(i,n,s)=>{if(!n||!Ve(i))return s;const a=(bo(n)?[n]:du(n)).reduce((c,d)=>ct(c)?c:c[d],i);return He(a)||a===i?He(i[n])?s:i[n]:a},Jt=i=>typeof i=="boolean",De=(i,n,s)=>{let a=-1;const c=bo(n)?[n]:du(n),d=c.length,h=d-1;for(;++a<d;){const p=c[a];let w=s;if(a!==h){const T=i[p];w=Ve(T)||Array.isArray(T)?T:isNaN(+c[a+1])?{}:[]}if(p==="__proto__"||p==="constructor"||p==="prototype")return;i[p]=w,i=i[p]}};const kf={BLUR:"blur",FOCUS_OUT:"focusout"},zt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},mn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},iy=wt.createContext(null);iy.displayName="HookFormContext";var sy=(i,n,s,a=!0)=>{const c={defaultValues:n._defaultValues};for(const d in i)Object.defineProperty(c,d,{get:()=>{const h=d;return n._proxyFormState[h]!==zt.all&&(n._proxyFormState[h]=!a||zt.all),i[h]}});return c};const oy=typeof window<"u"?wt.useLayoutEffect:wt.useEffect;var Zt=i=>typeof i=="string",ay=(i,n,s,a,c)=>Zt(i)?(a&&n.watch.add(i),H(s,i,c)):Array.isArray(i)?i.map(d=>(a&&n.watch.add(d),H(s,d))):(a&&(n.watchAll=!0),s),Jl=i=>ct(i)||!Sh(i);function Bn(i,n,s=new WeakSet){if(Jl(i)||Jl(n))return i===n;if(dr(i)&&dr(n))return i.getTime()===n.getTime();const a=Object.keys(i),c=Object.keys(n);if(a.length!==c.length)return!1;if(s.has(i)||s.has(n))return!0;s.add(i),s.add(n);for(const d of a){const h=i[d];if(!c.includes(d))return!1;if(d!=="ref"){const p=n[d];if(dr(h)&&dr(p)||Ve(h)&&Ve(p)||Array.isArray(h)&&Array.isArray(p)?!Bn(h,p,s):h!==p)return!1}}return!0}var ly=(i,n,s,a,c)=>n?{...s[i],types:{...s[i]&&s[i].types?s[i].types:{},[a]:c||!0}}:{},Yi=i=>Array.isArray(i)?i:[i],Tf=()=>{let i=[];return{get observers(){return i},next:c=>{for(const d of i)d.next&&d.next(c)},subscribe:c=>(i.push(c),{unsubscribe:()=>{i=i.filter(d=>d!==c)}}),unsubscribe:()=>{i=[]}}},_t=i=>Ve(i)&&!Object.keys(i).length,fu=i=>i.type==="file",jt=i=>typeof i=="function",Po=i=>{if(!uu)return!1;const n=i?i.ownerDocument:0;return i instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},Ih=i=>i.type==="select-multiple",hu=i=>i.type==="radio",uy=i=>hu(i)||is(i),zl=i=>Po(i)&&i.isConnected;function cy(i,n){const s=n.slice(0,-1).length;let a=0;for(;a<s;)i=He(i)?a++:i[n[a++]];return i}function dy(i){for(const n in i)if(i.hasOwnProperty(n)&&!He(i[n]))return!1;return!0}function $e(i,n){const s=Array.isArray(n)?n:bo(n)?[n]:du(n),a=s.length===1?i:cy(i,s),c=s.length-1,d=s[c];return a&&delete a[d],c!==0&&(Ve(a)&&_t(a)||Array.isArray(a)&&dy(a))&&$e(i,s.slice(0,-1)),i}var kh=i=>{for(const n in i)if(jt(i[n]))return!0;return!1};function Ao(i,n={}){const s=Array.isArray(i);if(Ve(i)||s)for(const a in i)Array.isArray(i[a])||Ve(i[a])&&!kh(i[a])?(n[a]=Array.isArray(i[a])?[]:{},Ao(i[a],n[a])):ct(i[a])||(n[a]=!0);return n}function Th(i,n,s){const a=Array.isArray(i);if(Ve(i)||a)for(const c in i)Array.isArray(i[c])||Ve(i[c])&&!kh(i[c])?He(n)||Jl(s[c])?s[c]=Array.isArray(i[c])?Ao(i[c],[]):{...Ao(i[c])}:Th(i[c],ct(n)?{}:n[c],s[c]):s[c]=!Bn(i[c],n[c]);return s}var Ki=(i,n)=>Th(i,n,Ao(n));const Cf={value:!1,isValid:!1},Pf={value:!0,isValid:!0};var Ch=i=>{if(Array.isArray(i)){if(i.length>1){const n=i.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:n,isValid:!!n.length}}return i[0].checked&&!i[0].disabled?i[0].attributes&&!He(i[0].attributes.value)?He(i[0].value)||i[0].value===""?Pf:{value:i[0].value,isValid:!0}:Pf:Cf}return Cf},Ph=(i,{valueAsNumber:n,valueAsDate:s,setValueAs:a})=>He(i)?i:n?i===""?NaN:i&&+i:s&&Zt(i)?new Date(i):a?a(i):i;const Af={isValid:!1,value:null};var Ah=i=>Array.isArray(i)?i.reduce((n,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:n,Af):Af;function Rf(i){const n=i.ref;return fu(n)?n.files:hu(n)?Ah(i.refs).value:Ih(n)?[...n.selectedOptions].map(({value:s})=>s):is(n)?Ch(i.refs).value:Ph(He(n.value)?i.ref.value:n.value,i)}var fy=(i,n,s,a)=>{const c={};for(const d of i){const h=H(n,d);h&&De(c,d,h._f)}return{criteriaMode:s,names:[...i],fields:c,shouldUseNativeValidation:a}},Ro=i=>i instanceof RegExp,Gi=i=>He(i)?i:Ro(i)?i.source:Ve(i)?Ro(i.value)?i.value.source:i.value:i,Nf=i=>({isOnSubmit:!i||i===zt.onSubmit,isOnBlur:i===zt.onBlur,isOnChange:i===zt.onChange,isOnAll:i===zt.all,isOnTouch:i===zt.onTouched});const Df="AsyncFunction";var hy=i=>!!i&&!!i.validate&&!!(jt(i.validate)&&i.validate.constructor.name===Df||Ve(i.validate)&&Object.values(i.validate).find(n=>n.constructor.name===Df)),py=i=>i.mount&&(i.required||i.min||i.max||i.maxLength||i.minLength||i.pattern||i.validate),Of=(i,n,s)=>!s&&(n.watchAll||n.watch.has(i)||[...n.watch].some(a=>i.startsWith(a)&&/^\.\w+/.test(i.slice(a.length))));const Ji=(i,n,s,a)=>{for(const c of s||Object.keys(i)){const d=H(i,c);if(d){const{_f:h,...p}=d;if(h){if(h.refs&&h.refs[0]&&n(h.refs[0],c)&&!a)return!0;if(h.ref&&n(h.ref,h.name)&&!a)return!0;if(Ji(p,n))break}else if(Ve(p)&&Ji(p,n))break}}};function xf(i,n,s){const a=H(i,s);if(a||bo(s))return{error:a,name:s};const c=s.split(".");for(;c.length;){const d=c.join("."),h=H(n,d),p=H(i,d);if(h&&!Array.isArray(h)&&s!==d)return{name:s};if(p&&p.type)return{name:d,error:p};if(p&&p.root&&p.root.type)return{name:`${d}.root`,error:p.root};c.pop()}return{name:s}}var my=(i,n,s,a)=>{s(i);const{name:c,...d}=i;return _t(d)||Object.keys(d).length>=Object.keys(n).length||Object.keys(d).find(h=>n[h]===(!a||zt.all))},gy=(i,n,s)=>!i||!n||i===n||Yi(i).some(a=>a&&(s?a===n:a.startsWith(n)||n.startsWith(a))),yy=(i,n,s,a,c)=>c.isOnAll?!1:!s&&c.isOnTouch?!(n||i):(s?a.isOnBlur:c.isOnBlur)?!i:(s?a.isOnChange:c.isOnChange)?i:!0,vy=(i,n)=>!cu(H(i,n)).length&&$e(i,n),wy=(i,n,s)=>{const a=Yi(H(i,s));return De(a,"root",n[s]),De(i,s,a),i},So=i=>Zt(i);function Lf(i,n,s="validate"){if(So(i)||Array.isArray(i)&&i.every(So)||Jt(i)&&!i)return{type:s,message:So(i)?i:"",ref:n}}var Xr=i=>Ve(i)&&!Ro(i)?i:{value:i,message:""},Mf=async(i,n,s,a,c,d)=>{const{ref:h,refs:p,required:w,maxLength:T,minLength:O,min:M,max:C,pattern:ae,validate:ue,name:J,valueAsNumber:ie,mount:be}=i._f,X=H(s,J);if(!be||n.has(J))return{};const Pe=p?p[0]:h,_e=te=>{c&&Pe.reportValidity&&(Pe.setCustomValidity(Jt(te)?"":te||""),Pe.reportValidity())},ye={},ze=hu(h),Oe=is(h),nt=ze||Oe,je=(ie||fu(h))&&He(h.value)&&He(X)||Po(h)&&h.value===""||X===""||Array.isArray(X)&&!X.length,Xe=ly.bind(null,J,a,ye),Ge=(te,ne,de,Te=mn.maxLength,Ee=mn.minLength)=>{const fe=te?ne:de;ye[J]={type:te?Te:Ee,message:fe,ref:h,...Xe(te?Te:Ee,fe)}};if(d?!Array.isArray(X)||!X.length:w&&(!nt&&(je||ct(X))||Jt(X)&&!X||Oe&&!Ch(p).isValid||ze&&!Ah(p).isValid)){const{value:te,message:ne}=So(w)?{value:!!w,message:w}:Xr(w);if(te&&(ye[J]={type:mn.required,message:ne,ref:Pe,...Xe(mn.required,ne)},!a))return _e(ne),ye}if(!je&&(!ct(M)||!ct(C))){let te,ne;const de=Xr(C),Te=Xr(M);if(!ct(X)&&!isNaN(X)){const Ee=h.valueAsNumber||X&&+X;ct(de.value)||(te=Ee>de.value),ct(Te.value)||(ne=Ee<Te.value)}else{const Ee=h.valueAsDate||new Date(X),fe=b=>new Date(new Date().toDateString()+" "+b),U=h.type=="time",G=h.type=="week";Zt(de.value)&&X&&(te=U?fe(X)>fe(de.value):G?X>de.value:Ee>new Date(de.value)),Zt(Te.value)&&X&&(ne=U?fe(X)<fe(Te.value):G?X<Te.value:Ee<new Date(Te.value))}if((te||ne)&&(Ge(!!te,de.message,Te.message,mn.max,mn.min),!a))return _e(ye[J].message),ye}if((T||O)&&!je&&(Zt(X)||d&&Array.isArray(X))){const te=Xr(T),ne=Xr(O),de=!ct(te.value)&&X.length>+te.value,Te=!ct(ne.value)&&X.length<+ne.value;if((de||Te)&&(Ge(de,te.message,ne.message),!a))return _e(ye[J].message),ye}if(ae&&!je&&Zt(X)){const{value:te,message:ne}=Xr(ae);if(Ro(te)&&!X.match(te)&&(ye[J]={type:mn.pattern,message:ne,ref:h,...Xe(mn.pattern,ne)},!a))return _e(ne),ye}if(ue){if(jt(ue)){const te=await ue(X,s),ne=Lf(te,Pe);if(ne&&(ye[J]={...ne,...Xe(mn.validate,ne.message)},!a))return _e(ne.message),ye}else if(Ve(ue)){let te={};for(const ne in ue){if(!_t(te)&&!a)break;const de=Lf(await ue[ne](X,s),Pe,ne);de&&(te={...de,...Xe(ne,de.message)},_e(de.message),a&&(ye[J]=te))}if(!_t(te)&&(ye[J]={ref:Pe,...te},!a))return ye}}return _e(!0),ye};const _y={mode:zt.onSubmit,reValidateMode:zt.onChange,shouldFocusError:!0};function Ey(i={}){let n={..._y,...i},s={submitCount:0,isDirty:!1,isReady:!1,isLoading:jt(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},a={},c=Ve(n.defaultValues)||Ve(n.values)?Je(n.defaultValues||n.values)||{}:{},d=n.shouldUnregister?{}:Je(c),h={action:!1,mount:!1,watch:!1},p={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},w,T=0;const O={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let M={...O};const C={array:Tf(),state:Tf()},ae=n.criteriaMode===zt.all,ue=g=>S=>{clearTimeout(T),T=setTimeout(g,S)},J=async g=>{if(!n.disabled&&(O.isValid||M.isValid||g)){const S=n.resolver?_t((await Oe()).errors):await je(a,!0);S!==s.isValid&&C.state.next({isValid:S})}},ie=(g,S)=>{!n.disabled&&(O.isValidating||O.validatingFields||M.isValidating||M.validatingFields)&&((g||Array.from(p.mount)).forEach(P=>{P&&(S?De(s.validatingFields,P,S):$e(s.validatingFields,P))}),C.state.next({validatingFields:s.validatingFields,isValidating:!_t(s.validatingFields)}))},be=(g,S=[],P,V,F=!0,L=!0)=>{if(V&&P&&!n.disabled){if(h.action=!0,L&&Array.isArray(H(a,g))){const K=P(H(a,g),V.argA,V.argB);F&&De(a,g,K)}if(L&&Array.isArray(H(s.errors,g))){const K=P(H(s.errors,g),V.argA,V.argB);F&&De(s.errors,g,K),vy(s.errors,g)}if((O.touchedFields||M.touchedFields)&&L&&Array.isArray(H(s.touchedFields,g))){const K=P(H(s.touchedFields,g),V.argA,V.argB);F&&De(s.touchedFields,g,K)}(O.dirtyFields||M.dirtyFields)&&(s.dirtyFields=Ki(c,d)),C.state.next({name:g,isDirty:Ge(g,S),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else De(d,g,S)},X=(g,S)=>{De(s.errors,g,S),C.state.next({errors:s.errors})},Pe=g=>{s.errors=g,C.state.next({errors:s.errors,isValid:!1})},_e=(g,S,P,V)=>{const F=H(a,g);if(F){const L=H(d,g,He(P)?H(c,g):P);He(L)||V&&V.defaultChecked||S?De(d,g,S?L:Rf(F._f)):de(g,L),h.mount&&J()}},ye=(g,S,P,V,F)=>{let L=!1,K=!1;const he={name:g};if(!n.disabled){if(!P||V){(O.isDirty||M.isDirty)&&(K=s.isDirty,s.isDirty=he.isDirty=Ge(),L=K!==he.isDirty);const ve=Bn(H(c,g),S);K=!!H(s.dirtyFields,g),ve?$e(s.dirtyFields,g):De(s.dirtyFields,g,!0),he.dirtyFields=s.dirtyFields,L=L||(O.dirtyFields||M.dirtyFields)&&K!==!ve}if(P){const ve=H(s.touchedFields,g);ve||(De(s.touchedFields,g,P),he.touchedFields=s.touchedFields,L=L||(O.touchedFields||M.touchedFields)&&ve!==P)}L&&F&&C.state.next(he)}return L?he:{}},ze=(g,S,P,V)=>{const F=H(s.errors,g),L=(O.isValid||M.isValid)&&Jt(S)&&s.isValid!==S;if(n.delayError&&P?(w=ue(()=>X(g,P)),w(n.delayError)):(clearTimeout(T),w=null,P?De(s.errors,g,P):$e(s.errors,g)),(P?!Bn(F,P):F)||!_t(V)||L){const K={...V,...L&&Jt(S)?{isValid:S}:{},errors:s.errors,name:g};s={...s,...K},C.state.next(K)}},Oe=async g=>{ie(g,!0);const S=await n.resolver(d,n.context,fy(g||p.mount,a,n.criteriaMode,n.shouldUseNativeValidation));return ie(g),S},nt=async g=>{const{errors:S}=await Oe(g);if(g)for(const P of g){const V=H(S,P);V?De(s.errors,P,V):$e(s.errors,P)}else s.errors=S;return S},je=async(g,S,P={valid:!0})=>{for(const V in g){const F=g[V];if(F){const{_f:L,...K}=F;if(L){const he=p.array.has(L.name),ve=F._f&&hy(F._f);ve&&O.validatingFields&&ie([V],!0);const at=await Mf(F,p.disabled,d,ae,n.shouldUseNativeValidation&&!S,he);if(ve&&O.validatingFields&&ie([V]),at[L.name]&&(P.valid=!1,S))break;!S&&(H(at,L.name)?he?wy(s.errors,at,L.name):De(s.errors,L.name,at[L.name]):$e(s.errors,L.name))}!_t(K)&&await je(K,S,P)}}return P.valid},Xe=()=>{for(const g of p.unMount){const S=H(a,g);S&&(S._f.refs?S._f.refs.every(P=>!zl(P)):!zl(S._f.ref))&&we(g)}p.unMount=new Set},Ge=(g,S)=>!n.disabled&&(g&&S&&De(d,g,S),!Bn(b(),c)),te=(g,S,P)=>ay(g,p,{...h.mount?d:He(S)?c:Zt(g)?{[g]:S}:S},P,S),ne=g=>cu(H(h.mount?d:c,g,n.shouldUnregister?H(c,g,[]):[])),de=(g,S,P={})=>{const V=H(a,g);let F=S;if(V){const L=V._f;L&&(!L.disabled&&De(d,g,Ph(S,L)),F=Po(L.ref)&&ct(S)?"":S,Ih(L.ref)?[...L.ref.options].forEach(K=>K.selected=F.includes(K.value)):L.refs?is(L.ref)?L.refs.forEach(K=>{(!K.defaultChecked||!K.disabled)&&(Array.isArray(F)?K.checked=!!F.find(he=>he===K.value):K.checked=F===K.value||!!F)}):L.refs.forEach(K=>K.checked=K.value===F):fu(L.ref)?L.ref.value="":(L.ref.value=F,L.ref.type||C.state.next({name:g,values:Je(d)})))}(P.shouldDirty||P.shouldTouch)&&ye(g,F,P.shouldTouch,P.shouldDirty,!0),P.shouldValidate&&G(g)},Te=(g,S,P)=>{for(const V in S){if(!S.hasOwnProperty(V))return;const F=S[V],L=g+"."+V,K=H(a,L);(p.array.has(g)||Ve(F)||K&&!K._f)&&!dr(F)?Te(L,F,P):de(L,F,P)}},Ee=(g,S,P={})=>{const V=H(a,g),F=p.array.has(g),L=Je(S);De(d,g,L),F?(C.array.next({name:g,values:Je(d)}),(O.isDirty||O.dirtyFields||M.isDirty||M.dirtyFields)&&P.shouldDirty&&C.state.next({name:g,dirtyFields:Ki(c,d),isDirty:Ge(g,L)})):V&&!V._f&&!ct(L)?Te(g,L,P):de(g,L,P),Of(g,p)&&C.state.next({...s,name:g}),C.state.next({name:h.mount?g:void 0,values:Je(d)})},fe=async g=>{h.mount=!0;const S=g.target;let P=S.name,V=!0;const F=H(a,P),L=ve=>{V=Number.isNaN(ve)||dr(ve)&&isNaN(ve.getTime())||Bn(ve,H(d,P,ve))},K=Nf(n.mode),he=Nf(n.reValidateMode);if(F){let ve,at;const Wt=S.type?Rf(F._f):ey(g),ft=g.type===kf.BLUR||g.type===kf.FOCUS_OUT,qo=!py(F._f)&&!n.resolver&&!H(s.errors,P)&&!F._f.deps||yy(ft,H(s.touchedFields,P),s.isSubmitted,he,K),kr=Of(P,p,ft);De(d,P,Wt),ft?(!S||!S.readOnly)&&(F._f.onBlur&&F._f.onBlur(g),w&&w(0)):F._f.onChange&&F._f.onChange(g);const Tr=ye(P,Wt,ft),Qo=!_t(Tr)||kr;if(!ft&&C.state.next({name:P,type:g.type,values:Je(d)}),qo)return(O.isValid||M.isValid)&&(n.mode==="onBlur"?ft&&J():ft||J()),Qo&&C.state.next({name:P,...kr?{}:Tr});if(!ft&&kr&&C.state.next({...s}),n.resolver){const{errors:Cr}=await Oe([P]);if(L(Wt),V){const li=xf(s.errors,a,P),Pr=xf(Cr,a,li.name||P);ve=Pr.error,P=Pr.name,at=_t(Cr)}}else ie([P],!0),ve=(await Mf(F,p.disabled,d,ae,n.shouldUseNativeValidation))[P],ie([P]),L(Wt),V&&(ve?at=!1:(O.isValid||M.isValid)&&(at=await je(a,!0)));V&&(F._f.deps&&G(F._f.deps),ze(P,at,ve,Tr))}},U=(g,S)=>{if(H(s.errors,S)&&g.focus)return g.focus(),1},G=async(g,S={})=>{let P,V;const F=Yi(g);if(n.resolver){const L=await nt(He(g)?g:F);P=_t(L),V=g?!F.some(K=>H(L,K)):P}else g?(V=(await Promise.all(F.map(async L=>{const K=H(a,L);return await je(K&&K._f?{[L]:K}:K)}))).every(Boolean),!(!V&&!s.isValid)&&J()):V=P=await je(a);return C.state.next({...!Zt(g)||(O.isValid||M.isValid)&&P!==s.isValid?{}:{name:g},...n.resolver||!g?{isValid:P}:{},errors:s.errors}),S.shouldFocus&&!V&&Ji(a,U,g?F:p.mount),V},b=g=>{const S={...h.mount?d:c};return He(g)?S:Zt(g)?H(S,g):g.map(P=>H(S,P))},_=(g,S)=>({invalid:!!H((S||s).errors,g),isDirty:!!H((S||s).dirtyFields,g),error:H((S||s).errors,g),isValidating:!!H(s.validatingFields,g),isTouched:!!H((S||s).touchedFields,g)}),A=g=>{g&&Yi(g).forEach(S=>$e(s.errors,S)),C.state.next({errors:g?s.errors:{}})},re=(g,S,P)=>{const V=(H(a,g,{_f:{}})._f||{}).ref,F=H(s.errors,g)||{},{ref:L,message:K,type:he,...ve}=F;De(s.errors,g,{...ve,...S,ref:V}),C.state.next({name:g,errors:s.errors,isValid:!1}),P&&P.shouldFocus&&V&&V.focus&&V.focus()},se=(g,S)=>jt(g)?C.state.subscribe({next:P=>"values"in P&&g(te(void 0,S),P)}):te(g,S,!0),le=g=>C.state.subscribe({next:S=>{gy(g.name,S.name,g.exact)&&my(S,g.formState||O,ai,g.reRenderRoot)&&g.callback({values:{...d},...s,...S,defaultValues:c})}}).unsubscribe,ce=g=>(h.mount=!0,M={...M,...g.formState},le({...g,formState:M})),we=(g,S={})=>{for(const P of g?Yi(g):p.mount)p.mount.delete(P),p.array.delete(P),S.keepValue||($e(a,P),$e(d,P)),!S.keepError&&$e(s.errors,P),!S.keepDirty&&$e(s.dirtyFields,P),!S.keepTouched&&$e(s.touchedFields,P),!S.keepIsValidating&&$e(s.validatingFields,P),!n.shouldUnregister&&!S.keepDefaultValue&&$e(c,P);C.state.next({values:Je(d)}),C.state.next({...s,...S.keepDirty?{isDirty:Ge()}:{}}),!S.keepIsValid&&J()},me=({disabled:g,name:S})=>{(Jt(g)&&h.mount||g||p.disabled.has(S))&&(g?p.disabled.add(S):p.disabled.delete(S))},Ie=(g,S={})=>{let P=H(a,g);const V=Jt(S.disabled)||Jt(n.disabled);return De(a,g,{...P||{},_f:{...P&&P._f?P._f:{ref:{name:g}},name:g,mount:!0,...S}}),p.mount.add(g),P?me({disabled:Jt(S.disabled)?S.disabled:n.disabled,name:g}):_e(g,!0,S.value),{...V?{disabled:S.disabled||n.disabled}:{},...n.progressive?{required:!!S.required,min:Gi(S.min),max:Gi(S.max),minLength:Gi(S.minLength),maxLength:Gi(S.maxLength),pattern:Gi(S.pattern)}:{},name:g,onChange:fe,onBlur:fe,ref:F=>{if(F){Ie(g,S),P=H(a,g);const L=He(F.value)&&F.querySelectorAll&&F.querySelectorAll("input,select,textarea")[0]||F,K=uy(L),he=P._f.refs||[];if(K?he.find(ve=>ve===L):L===P._f.ref)return;De(a,g,{_f:{...P._f,...K?{refs:[...he.filter(zl),L,...Array.isArray(H(c,g))?[{}]:[]],ref:{type:L.type,name:g}}:{ref:L}}}),_e(g,!1,void 0,L)}else P=H(a,g,{}),P._f&&(P._f.mount=!1),(n.shouldUnregister||S.shouldUnregister)&&!(ny(p.array,g)&&h.action)&&p.unMount.add(g)}}},Ze=()=>n.shouldFocusError&&Ji(a,U,p.mount),_r=g=>{Jt(g)&&(C.state.next({disabled:g}),Ji(a,(S,P)=>{const V=H(a,P);V&&(S.disabled=V._f.disabled||g,Array.isArray(V._f.refs)&&V._f.refs.forEach(F=>{F.disabled=V._f.disabled||g}))},0,!1))},si=(g,S)=>async P=>{let V;P&&(P.preventDefault&&P.preventDefault(),P.persist&&P.persist());let F=Je(d);if(C.state.next({isSubmitting:!0}),n.resolver){const{errors:L,values:K}=await Oe();s.errors=L,F=Je(K)}else await je(a);if(p.disabled.size)for(const L of p.disabled)$e(F,L);if($e(s.errors,"root"),_t(s.errors)){C.state.next({errors:{}});try{await g(F,P)}catch(L){V=L}}else S&&await S({...s.errors},P),Ze(),setTimeout(Ze);if(C.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:_t(s.errors)&&!V,submitCount:s.submitCount+1,errors:s.errors}),V)throw V},Er=(g,S={})=>{H(a,g)&&(He(S.defaultValue)?Ee(g,Je(H(c,g))):(Ee(g,S.defaultValue),De(c,g,Je(S.defaultValue))),S.keepTouched||$e(s.touchedFields,g),S.keepDirty||($e(s.dirtyFields,g),s.isDirty=S.defaultValue?Ge(g,Je(H(c,g))):Ge()),S.keepError||($e(s.errors,g),O.isValid&&J()),C.state.next({...s}))},Sr=(g,S={})=>{const P=g?Je(g):c,V=Je(P),F=_t(g),L=F?c:V;if(S.keepDefaultValues||(c=P),!S.keepValues){if(S.keepDirtyValues){const K=new Set([...p.mount,...Object.keys(Ki(c,d))]);for(const he of Array.from(K))H(s.dirtyFields,he)?De(L,he,H(d,he)):Ee(he,H(L,he))}else{if(uu&&He(g))for(const K of p.mount){const he=H(a,K);if(he&&he._f){const ve=Array.isArray(he._f.refs)?he._f.refs[0]:he._f.ref;if(Po(ve)){const at=ve.closest("form");if(at){at.reset();break}}}}if(S.keepFieldsRef)for(const K of p.mount)Ee(K,H(L,K));else a={}}d=n.shouldUnregister?S.keepDefaultValues?Je(c):{}:Je(L),C.array.next({values:{...L}}),C.state.next({values:{...L}})}p={mount:S.keepDirtyValues?p.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!O.isValid||!!S.keepIsValid||!!S.keepDirtyValues,h.watch=!!n.shouldUnregister,C.state.next({submitCount:S.keepSubmitCount?s.submitCount:0,isDirty:F?!1:S.keepDirty?s.isDirty:!!(S.keepDefaultValues&&!Bn(g,c)),isSubmitted:S.keepIsSubmitted?s.isSubmitted:!1,dirtyFields:F?{}:S.keepDirtyValues?S.keepDefaultValues&&d?Ki(c,d):s.dirtyFields:S.keepDefaultValues&&g?Ki(c,g):S.keepDirty?s.dirtyFields:{},touchedFields:S.keepTouched?s.touchedFields:{},errors:S.keepErrors?s.errors:{},isSubmitSuccessful:S.keepIsSubmitSuccessful?s.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:c})},oi=(g,S)=>Sr(jt(g)?g(d):g,S),ds=(g,S={})=>{const P=H(a,g),V=P&&P._f;if(V){const F=V.refs?V.refs[0]:V.ref;F.focus&&(F.focus(),S.shouldSelect&&jt(F.select)&&F.select())}},ai=g=>{s={...s,...g}},Ir={control:{register:Ie,unregister:we,getFieldState:_,handleSubmit:si,setError:re,_subscribe:le,_runSchema:Oe,_focusError:Ze,_getWatch:te,_getDirty:Ge,_setValid:J,_setFieldArray:be,_setDisabledField:me,_setErrors:Pe,_getFieldArray:ne,_reset:Sr,_resetDefaultValues:()=>jt(n.defaultValues)&&n.defaultValues().then(g=>{oi(g,n.resetOptions),C.state.next({isLoading:!1})}),_removeUnmounted:Xe,_disableForm:_r,_subjects:C,_proxyFormState:O,get _fields(){return a},get _formValues(){return d},get _state(){return h},set _state(g){h=g},get _defaultValues(){return c},get _names(){return p},set _names(g){p=g},get _formState(){return s},get _options(){return n},set _options(g){n={...n,...g}}},subscribe:ce,trigger:G,register:Ie,handleSubmit:si,watch:se,setValue:Ee,getValues:b,reset:oi,resetField:Er,clearErrors:A,unregister:we,setError:re,setFocus:ds,getFieldState:_};return{...Ir,formControl:Ir}}function Sy(i={}){const n=wt.useRef(void 0),s=wt.useRef(void 0),[a,c]=wt.useState({isDirty:!1,isValidating:!1,isLoading:jt(i.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:i.errors||{},disabled:i.disabled||!1,isReady:!1,defaultValues:jt(i.defaultValues)?void 0:i.defaultValues});if(!n.current)if(i.formControl)n.current={...i.formControl,formState:a},i.defaultValues&&!jt(i.defaultValues)&&i.formControl.reset(i.defaultValues,i.resetOptions);else{const{formControl:h,...p}=Ey(i);n.current={...p,formState:a}}const d=n.current.control;return d._options=i,oy(()=>{const h=d._subscribe({formState:d._proxyFormState,callback:()=>c({...d._formState}),reRenderRoot:!0});return c(p=>({...p,isReady:!0})),d._formState.isReady=!0,h},[d]),wt.useEffect(()=>d._disableForm(i.disabled),[d,i.disabled]),wt.useEffect(()=>{i.mode&&(d._options.mode=i.mode),i.reValidateMode&&(d._options.reValidateMode=i.reValidateMode)},[d,i.mode,i.reValidateMode]),wt.useEffect(()=>{i.errors&&(d._setErrors(i.errors),d._focusError())},[d,i.errors]),wt.useEffect(()=>{i.shouldUnregister&&d._subjects.state.next({values:d._getWatch()})},[d,i.shouldUnregister]),wt.useEffect(()=>{if(d._proxyFormState.isDirty){const h=d._getDirty();h!==a.isDirty&&d._subjects.state.next({isDirty:h})}},[d,a.isDirty]),wt.useEffect(()=>{i.values&&!Bn(i.values,s.current)?(d._reset(i.values,{keepFieldsRef:!0,...d._options.resetOptions}),s.current=i.values,c(h=>({...h}))):d._resetDefaultValues()},[d,i.values]),wt.useEffect(()=>{d._state.mount||(d._setValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),n.current.formState=sy(a,d),n.current}const Iy=()=>{};var Ff={};/**
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
 */const Rh=function(i){const n=[];let s=0;for(let a=0;a<i.length;a++){let c=i.charCodeAt(a);c<128?n[s++]=c:c<2048?(n[s++]=c>>6|192,n[s++]=c&63|128):(c&64512)===55296&&a+1<i.length&&(i.charCodeAt(a+1)&64512)===56320?(c=65536+((c&1023)<<10)+(i.charCodeAt(++a)&1023),n[s++]=c>>18|240,n[s++]=c>>12&63|128,n[s++]=c>>6&63|128,n[s++]=c&63|128):(n[s++]=c>>12|224,n[s++]=c>>6&63|128,n[s++]=c&63|128)}return n},ky=function(i){const n=[];let s=0,a=0;for(;s<i.length;){const c=i[s++];if(c<128)n[a++]=String.fromCharCode(c);else if(c>191&&c<224){const d=i[s++];n[a++]=String.fromCharCode((c&31)<<6|d&63)}else if(c>239&&c<365){const d=i[s++],h=i[s++],p=i[s++],w=((c&7)<<18|(d&63)<<12|(h&63)<<6|p&63)-65536;n[a++]=String.fromCharCode(55296+(w>>10)),n[a++]=String.fromCharCode(56320+(w&1023))}else{const d=i[s++],h=i[s++];n[a++]=String.fromCharCode((c&15)<<12|(d&63)<<6|h&63)}}return n.join("")},Nh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,n){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let c=0;c<i.length;c+=3){const d=i[c],h=c+1<i.length,p=h?i[c+1]:0,w=c+2<i.length,T=w?i[c+2]:0,O=d>>2,M=(d&3)<<4|p>>4;let C=(p&15)<<2|T>>6,ae=T&63;w||(ae=64,h||(C=64)),a.push(s[O],s[M],s[C],s[ae])}return a.join("")},encodeString(i,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(i):this.encodeByteArray(Rh(i),n)},decodeString(i,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(i):ky(this.decodeStringToByteArray(i,n))},decodeStringToByteArray(i,n){this.init_();const s=n?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let c=0;c<i.length;){const d=s[i.charAt(c++)],p=c<i.length?s[i.charAt(c)]:0;++c;const T=c<i.length?s[i.charAt(c)]:64;++c;const M=c<i.length?s[i.charAt(c)]:64;if(++c,d==null||p==null||T==null||M==null)throw new Ty;const C=d<<2|p>>4;if(a.push(C),T!==64){const ae=p<<4&240|T>>2;if(a.push(ae),M!==64){const ue=T<<6&192|M;a.push(ue)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Ty extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cy=function(i){const n=Rh(i);return Nh.encodeByteArray(n,!0)},Dh=function(i){return Cy(i).replace(/\./g,"")},Oh=function(i){try{return Nh.decodeString(i,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
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
 */function Py(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ay=()=>Py().__FIREBASE_DEFAULTS__,Ry=()=>{if(typeof process>"u"||typeof Ff>"u")return;const i=Ff.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Ny=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=i&&Oh(i[1]);return n&&JSON.parse(n)},pu=()=>{try{return Iy()||Ay()||Ry()||Ny()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Dy=i=>pu()?.emulatorHosts?.[i],xh=()=>pu()?.config,Lh=i=>pu()?.[`_${i}`];/**
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
 */class Oy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,s)=>{this.resolve=n,this.reject=s})}wrapCallback(n){return(s,a)=>{s?this.reject(s):this.resolve(a),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(s):n(s,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xy(i){return(await fetch(i,{credentials:"include"})).ok}const Xi={};function Ly(){const i={prod:[],emulator:[]};for(const n of Object.keys(Xi))Xi[n]?i.emulator.push(n):i.prod.push(n);return i}function My(i){let n=document.getElementById(i),s=!1;return n||(n=document.createElement("div"),n.setAttribute("id",i),s=!0),{created:s,element:n}}let Uf=!1;function Fy(i,n){if(typeof window>"u"||typeof document>"u"||!zo(window.location.host)||Xi[i]===n||Xi[i]||Uf)return;Xi[i]=n;function s(C){return`__firebase__banner__${C}`}const a="__firebase__banner",d=Ly().prod.length>0;function h(){const C=document.getElementById(a);C&&C.remove()}function p(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function w(C,ae){C.setAttribute("width","24"),C.setAttribute("id",ae),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function T(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{Uf=!0,h()},C}function O(C,ae){C.setAttribute("id",ae),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function M(){const C=My(a),ae=s("text"),ue=document.getElementById(ae)||document.createElement("span"),J=s("learnmore"),ie=document.getElementById(J)||document.createElement("a"),be=s("preprendIcon"),X=document.getElementById(be)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const Pe=C.element;p(Pe),O(ie,J);const _e=T();w(X,be),Pe.append(X,ue,ie,_e),document.body.appendChild(Pe)}d?(ue.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(X.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,ue.innerText="Preview backend running in this workspace."),ue.setAttribute("id",ae)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",M):M()}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function Vy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mh(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function by(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zy(){const i=dt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Fh(){try{return typeof indexedDB=="object"}catch{return!1}}function Uh(){return new Promise((i,n)=>{try{let s=!0;const a="validate-browser-context-for-indexeddb-analytics-module",c=self.indexedDB.open(a);c.onsuccess=()=>{c.result.close(),s||self.indexedDB.deleteDatabase(a),i(!0)},c.onupgradeneeded=()=>{s=!1},c.onerror=()=>{n(c.error?.message||"")}}catch(s){n(s)}})}function jy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const By="FirebaseError";class sn extends Error{constructor(n,s,a){super(s),this.code=n,this.customData=a,this.name=By,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(n,s,a){this.service=n,this.serviceName=s,this.errors=a}create(n,...s){const a=s[0]||{},c=`${this.service}/${n}`,d=this.errors[n],h=d?$y(d,a):"Error",p=`${this.serviceName}: ${h} (${c}).`;return new sn(c,p,a)}}function $y(i,n){return i.replace(Hy,(s,a)=>{const c=n[a];return c!=null?String(c):`<${a}?>`})}const Hy=/\{\$([^}]+)}/g;function Wy(i){for(const n in i)if(Object.prototype.hasOwnProperty.call(i,n))return!1;return!0}function hr(i,n){if(i===n)return!0;const s=Object.keys(i),a=Object.keys(n);for(const c of s){if(!a.includes(c))return!1;const d=i[c],h=n[c];if(Vf(d)&&Vf(h)){if(!hr(d,h))return!1}else if(d!==h)return!1}for(const c of a)if(!s.includes(c))return!1;return!0}function Vf(i){return i!==null&&typeof i=="object"}/**
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
 */function ss(i){const n=[];for(const[s,a]of Object.entries(i))Array.isArray(a)?a.forEach(c=>{n.push(encodeURIComponent(s)+"="+encodeURIComponent(c))}):n.push(encodeURIComponent(s)+"="+encodeURIComponent(a));return n.length?"&"+n.join("&"):""}function qi(i){const n={};return i.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[c,d]=a.split("=");n[decodeURIComponent(c)]=decodeURIComponent(d)}}),n}function Qi(i){const n=i.indexOf("?");if(!n)return"";const s=i.indexOf("#",n);return i.substring(n,s>0?s:void 0)}function Ky(i,n){const s=new Gy(i,n);return s.subscribe.bind(s)}class Gy{constructor(n,s){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=s,this.task.then(()=>{n(this)}).catch(a=>{this.error(a)})}next(n){this.forEachObserver(s=>{s.next(n)})}error(n){this.forEachObserver(s=>{s.error(n)}),this.close(n)}complete(){this.forEachObserver(n=>{n.complete()}),this.close()}subscribe(n,s,a){let c;if(n===void 0&&s===void 0&&a===void 0)throw new Error("Missing Observer.");qy(n,["next","error","complete"])?c=n:c={next:n,error:s,complete:a},c.next===void 0&&(c.next=jl),c.error===void 0&&(c.error=jl),c.complete===void 0&&(c.complete=jl);const d=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?c.error(this.finalError):c.complete()}catch{}}),this.observers.push(c),d}unsubscribeOne(n){this.observers===void 0||this.observers[n]===void 0||(delete this.observers[n],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(n){if(!this.finalized)for(let s=0;s<this.observers.length;s++)this.sendOne(s,n)}sendOne(n,s){this.task.then(()=>{if(this.observers!==void 0&&this.observers[n]!==void 0)try{s(this.observers[n])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(n){this.finalized||(this.finalized=!0,n!==void 0&&(this.finalError=n),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qy(i,n){if(typeof i!="object"||i===null)return!1;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}function jl(){}/**
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
 */const Qy=1e3,Yy=2,Jy=14400*1e3,Xy=.5;function bf(i,n=Qy,s=Yy){const a=n*Math.pow(s,i),c=Math.round(Xy*a*(Math.random()-.5)*2);return Math.min(Jy,a+c)}/**
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
 */function on(i){return i&&i._delegate?i._delegate:i}class rn{constructor(n,s,a){this.name=n,this.instanceFactory=s,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
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
 */const cr="[DEFAULT]";/**
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
 */class Zy{constructor(n,s){this.name=n,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const s=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(s)){const a=new Oy;if(this.instancesDeferred.set(s,a),this.isInitialized(s)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:s});c&&a.resolve(c)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(n){const s=this.normalizeInstanceIdentifier(n?.identifier),a=n?.optional??!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(tv(n))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);try{const d=this.getOrInitializeService({instanceIdentifier:c});a.resolve(d)}catch{}}}}clearInstance(n=cr){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...n.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=cr){return this.instances.has(n)}getOptions(n=cr){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:s={}}=n,a=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const c=this.getOrInitializeService({instanceIdentifier:a,options:s});for(const[d,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(d);a===p&&h.resolve(c)}return c}onInit(n,s){const a=this.normalizeInstanceIdentifier(s),c=this.onInitCallbacks.get(a)??new Set;c.add(n),this.onInitCallbacks.set(a,c);const d=this.instances.get(a);return d&&n(d,a),()=>{c.delete(n)}}invokeOnInitCallbacks(n,s){const a=this.onInitCallbacks.get(s);if(a)for(const c of a)try{c(n,s)}catch{}}getOrInitializeService({instanceIdentifier:n,options:s={}}){let a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:ev(n),options:s}),this.instances.set(n,a),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch{}return a||null}normalizeInstanceIdentifier(n=cr){return this.component?this.component.multipleInstances?n:cr:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ev(i){return i===cr?void 0:i}function tv(i){return i.instantiationMode==="EAGER"}/**
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
 */class nv{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const s=this.getProvider(n.name);if(s.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);s.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const s=new Zy(n,this);return this.providers.set(n,s),s}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const rv={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},iv=ke.INFO,sv={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},ov=(i,n,...s)=>{if(n<i.logLevel)return;const a=new Date().toISOString(),c=sv[n];if(c)console[c](`[${a}]  ${i.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class mu{constructor(n){this.name=n,this._logLevel=iv,this._logHandler=ov,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in ke))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?rv[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...n),this._logHandler(this,ke.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...n),this._logHandler(this,ke.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...n),this._logHandler(this,ke.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...n),this._logHandler(this,ke.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...n),this._logHandler(this,ke.ERROR,...n)}}const av=(i,n)=>n.some(s=>i instanceof s);let zf,jf;function lv(){return zf||(zf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uv(){return jf||(jf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vh=new WeakMap,Xl=new WeakMap,bh=new WeakMap,Bl=new WeakMap,gu=new WeakMap;function cv(i){const n=new Promise((s,a)=>{const c=()=>{i.removeEventListener("success",d),i.removeEventListener("error",h)},d=()=>{s(Gn(i.result)),c()},h=()=>{a(i.error),c()};i.addEventListener("success",d),i.addEventListener("error",h)});return n.then(s=>{s instanceof IDBCursor&&Vh.set(s,i)}).catch(()=>{}),gu.set(n,i),n}function dv(i){if(Xl.has(i))return;const n=new Promise((s,a)=>{const c=()=>{i.removeEventListener("complete",d),i.removeEventListener("error",h),i.removeEventListener("abort",h)},d=()=>{s(),c()},h=()=>{a(i.error||new DOMException("AbortError","AbortError")),c()};i.addEventListener("complete",d),i.addEventListener("error",h),i.addEventListener("abort",h)});Xl.set(i,n)}let Zl={get(i,n,s){if(i instanceof IDBTransaction){if(n==="done")return Xl.get(i);if(n==="objectStoreNames")return i.objectStoreNames||bh.get(i);if(n==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return Gn(i[n])},set(i,n,s){return i[n]=s,!0},has(i,n){return i instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in i}};function fv(i){Zl=i(Zl)}function hv(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...s){const a=i.call($l(this),n,...s);return bh.set(a,n.sort?n.sort():[n]),Gn(a)}:uv().includes(i)?function(...n){return i.apply($l(this),n),Gn(Vh.get(this))}:function(...n){return Gn(i.apply($l(this),n))}}function pv(i){return typeof i=="function"?hv(i):(i instanceof IDBTransaction&&dv(i),av(i,lv())?new Proxy(i,Zl):i)}function Gn(i){if(i instanceof IDBRequest)return cv(i);if(Bl.has(i))return Bl.get(i);const n=pv(i);return n!==i&&(Bl.set(i,n),gu.set(n,i)),n}const $l=i=>gu.get(i);function zh(i,n,{blocked:s,upgrade:a,blocking:c,terminated:d}={}){const h=indexedDB.open(i,n),p=Gn(h);return a&&h.addEventListener("upgradeneeded",w=>{a(Gn(h.result),w.oldVersion,w.newVersion,Gn(h.transaction),w)}),s&&h.addEventListener("blocked",w=>s(w.oldVersion,w.newVersion,w)),p.then(w=>{d&&w.addEventListener("close",()=>d()),c&&w.addEventListener("versionchange",T=>c(T.oldVersion,T.newVersion,T))}).catch(()=>{}),p}const mv=["get","getKey","getAll","getAllKeys","count"],gv=["put","add","delete","clear"],Hl=new Map;function Bf(i,n){if(!(i instanceof IDBDatabase&&!(n in i)&&typeof n=="string"))return;if(Hl.get(n))return Hl.get(n);const s=n.replace(/FromIndex$/,""),a=n!==s,c=gv.includes(s);if(!(s in(a?IDBIndex:IDBObjectStore).prototype)||!(c||mv.includes(s)))return;const d=async function(h,...p){const w=this.transaction(h,c?"readwrite":"readonly");let T=w.store;return a&&(T=T.index(p.shift())),(await Promise.all([T[s](...p),c&&w.done]))[0]};return Hl.set(n,d),d}fv(i=>({...i,get:(n,s,a)=>Bf(n,s)||i.get(n,s,a),has:(n,s)=>!!Bf(n,s)||i.has(n,s)}));/**
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
 */class yv{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(vv(s)){const a=s.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(s=>s).join(" ")}}function vv(i){return i.getComponent()?.type==="VERSION"}const eu="@firebase/app",$f="0.14.2";/**
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
 */const wn=new mu("@firebase/app"),wv="@firebase/app-compat",_v="@firebase/analytics-compat",Ev="@firebase/analytics",Sv="@firebase/app-check-compat",Iv="@firebase/app-check",kv="@firebase/auth",Tv="@firebase/auth-compat",Cv="@firebase/database",Pv="@firebase/data-connect",Av="@firebase/database-compat",Rv="@firebase/functions",Nv="@firebase/functions-compat",Dv="@firebase/installations",Ov="@firebase/installations-compat",xv="@firebase/messaging",Lv="@firebase/messaging-compat",Mv="@firebase/performance",Fv="@firebase/performance-compat",Uv="@firebase/remote-config",Vv="@firebase/remote-config-compat",bv="@firebase/storage",zv="@firebase/storage-compat",jv="@firebase/firestore",Bv="@firebase/ai",$v="@firebase/firestore-compat",Hv="firebase",Wv="12.2.0";/**
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
 */const tu="[DEFAULT]",Kv={[eu]:"fire-core",[wv]:"fire-core-compat",[Ev]:"fire-analytics",[_v]:"fire-analytics-compat",[Iv]:"fire-app-check",[Sv]:"fire-app-check-compat",[kv]:"fire-auth",[Tv]:"fire-auth-compat",[Cv]:"fire-rtdb",[Pv]:"fire-data-connect",[Av]:"fire-rtdb-compat",[Rv]:"fire-fn",[Nv]:"fire-fn-compat",[Dv]:"fire-iid",[Ov]:"fire-iid-compat",[xv]:"fire-fcm",[Lv]:"fire-fcm-compat",[Mv]:"fire-perf",[Fv]:"fire-perf-compat",[Uv]:"fire-rc",[Vv]:"fire-rc-compat",[bv]:"fire-gcs",[zv]:"fire-gcs-compat",[jv]:"fire-fst",[$v]:"fire-fst-compat",[Bv]:"fire-vertex","fire-js":"fire-js",[Hv]:"fire-js-all"};/**
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
 */const No=new Map,Gv=new Map,nu=new Map;function Hf(i,n){try{i.container.addComponent(n)}catch(s){wn.debug(`Component ${n.name} failed to register with FirebaseApp ${i.name}`,s)}}function _n(i){const n=i.name;if(nu.has(n))return wn.debug(`There were multiple attempts to register component ${n}.`),!1;nu.set(n,i);for(const s of No.values())Hf(s,i);for(const s of Gv.values())Hf(s,i);return!0}function ri(i,n){const s=i.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),i.container.getProvider(n)}function Bt(i){return i==null?!1:i.settings!==void 0}/**
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
 */const qv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new vr("app","Firebase",qv);/**
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
 */class Qv{constructor(n,s,a){this._isDeleted=!1,this._options={...n},this._config={...s},this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const os=Wv;function jh(i,n={}){let s=i;typeof n!="object"&&(n={name:n});const a={name:tu,automaticDataCollectionEnabled:!0,...n},c=a.name;if(typeof c!="string"||!c)throw qn.create("bad-app-name",{appName:String(c)});if(s||(s=xh()),!s)throw qn.create("no-options");const d=No.get(c);if(d){if(hr(s,d.options)&&hr(a,d.config))return d;throw qn.create("duplicate-app",{appName:c})}const h=new nv(c);for(const w of nu.values())h.addComponent(w);const p=new Qv(s,a,h);return No.set(c,p),p}function Bh(i=tu){const n=No.get(i);if(!n&&i===tu&&xh())return jh();if(!n)throw qn.create("no-app",{appName:i});return n}function en(i,n,s){let a=Kv[i]??i;s&&(a+=`-${s}`);const c=a.match(/\s|\//),d=n.match(/\s|\//);if(c||d){const h=[`Unable to register library "${a}" with version "${n}":`];c&&h.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&d&&h.push("and"),d&&h.push(`version name "${n}" contains illegal characters (whitespace or "/")`),wn.warn(h.join(" "));return}_n(new rn(`${a}-version`,()=>({library:a,version:n}),"VERSION"))}/**
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
 */const Yv="firebase-heartbeat-database",Jv=1,ts="firebase-heartbeat-store";let Wl=null;function $h(){return Wl||(Wl=zh(Yv,Jv,{upgrade:(i,n)=>{switch(n){case 0:try{i.createObjectStore(ts)}catch(s){console.warn(s)}}}}).catch(i=>{throw qn.create("idb-open",{originalErrorMessage:i.message})})),Wl}async function Xv(i){try{const s=(await $h()).transaction(ts),a=await s.objectStore(ts).get(Hh(i));return await s.done,a}catch(n){if(n instanceof sn)wn.warn(n.message);else{const s=qn.create("idb-get",{originalErrorMessage:n?.message});wn.warn(s.message)}}}async function Wf(i,n){try{const a=(await $h()).transaction(ts,"readwrite");await a.objectStore(ts).put(n,Hh(i)),await a.done}catch(s){if(s instanceof sn)wn.warn(s.message);else{const a=qn.create("idb-set",{originalErrorMessage:s?.message});wn.warn(a.message)}}}function Hh(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Zv=1024,ew=30;class tw{constructor(n){this.container=n,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new rw(s),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Kf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>ew){const c=iw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){wn.warn(n)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kf(),{heartbeatsToSend:s,unsentEntries:a}=nw(this._heartbeatsCache.heartbeats),c=Dh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return wn.warn(n),""}}}function Kf(){return new Date().toISOString().substring(0,10)}function nw(i,n=Zv){const s=[];let a=i.slice();for(const c of i){const d=s.find(h=>h.agent===c.agent);if(d){if(d.dates.push(c.date),Gf(s)>n){d.dates.pop();break}}else if(s.push({agent:c.agent,dates:[c.date]}),Gf(s)>n){s.pop();break}a=a.slice(1)}return{heartbeatsToSend:s,unsentEntries:a}}class rw{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fh()?Uh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await Xv(this.app);return s?.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){if(await this._canUseIndexedDBPromise){const a=await this.read();return Wf(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){if(await this._canUseIndexedDBPromise){const a=await this.read();return Wf(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...n.heartbeats]})}else return}}function Gf(i){return Dh(JSON.stringify({version:2,heartbeats:i})).length}function iw(i){if(i.length===0)return-1;let n=0,s=i[0].date;for(let a=1;a<i.length;a++)i[a].date<s&&(s=i[a].date,n=a);return n}/**
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
 */function sw(i){_n(new rn("platform-logger",n=>new yv(n),"PRIVATE")),_n(new rn("heartbeat",n=>new tw(n),"PRIVATE")),en(eu,$f,i),en(eu,$f,"esm2020"),en("fire-js","")}sw("");var ow="firebase",aw="12.2.1";/**
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
 */en(ow,aw,"app");function Wh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lw=Wh,Kh=new vr("auth","Firebase",Wh());/**
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
 */const Do=new mu("@firebase/auth");function uw(i,...n){Do.logLevel<=ke.WARN&&Do.warn(`Auth (${os}): ${i}`,...n)}function Io(i,...n){Do.logLevel<=ke.ERROR&&Do.error(`Auth (${os}): ${i}`,...n)}/**
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
 */function Ht(i,...n){throw yu(i,...n)}function tn(i,...n){return yu(i,...n)}function Gh(i,n,s){const a={...lw(),[n]:s};return new vr("auth","Firebase",a).create(n,{appName:i.name})}function vn(i){return Gh(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yu(i,...n){if(typeof i!="string"){const s=n[0],a=[...n.slice(1)];return a[0]&&(a[0].appName=i.name),i._errorFactory.create(s,...a)}return Kh.create(i,...n)}function Z(i,n,...s){if(!i)throw yu(n,...s)}function gn(i){const n="INTERNAL ASSERTION FAILED: "+i;throw Io(n),new Error(n)}function En(i,n){i||gn(n)}/**
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
 */function ru(){return typeof self<"u"&&self.location?.href||""}function cw(){return qf()==="http:"||qf()==="https:"}function qf(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function dw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cw()||Mh()||"connection"in navigator)?navigator.onLine:!0}function fw(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class as{constructor(n,s){this.shortDelay=n,this.longDelay=s,En(s>n,"Short delay should be less than long delay!"),this.isMobile=Uy()||by()}get(){return dw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vu(i,n){En(i.emulator,"Emulator should always be set here");const{url:s}=i.emulator;return n?`${s}${n.startsWith("/")?n.slice(1):n}`:s}/**
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
 */class qh{static initialize(n,s,a){this.fetchImpl=n,s&&(this.headersImpl=s),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mw=new as(3e4,6e4);function Qn(i,n){return i.tenantId&&!n.tenantId?{...n,tenantId:i.tenantId}:n}async function Yn(i,n,s,a,c={}){return Qh(i,c,async()=>{let d={},h={};a&&(n==="GET"?h=a:d={body:JSON.stringify(a)});const p=ss({key:i.config.apiKey,...h}).slice(1),w=await i._getAdditionalHeaders();w["Content-Type"]="application/json",i.languageCode&&(w["X-Firebase-Locale"]=i.languageCode);const T={method:n,headers:w,...d};return Vy()||(T.referrerPolicy="no-referrer"),i.emulatorConfig&&zo(i.emulatorConfig.host)&&(T.credentials="include"),qh.fetch()(await Yh(i,i.config.apiHost,s,p),T)})}async function Qh(i,n,s){i._canInitEmulator=!1;const a={...hw,...n};try{const c=new yw(i),d=await Promise.race([s(),c.promise]);c.clearNetworkTimeout();const h=await d.json();if("needConfirmation"in h)throw Eo(i,"account-exists-with-different-credential",h);if(d.ok&&!("errorMessage"in h))return h;{const p=d.ok?h.errorMessage:h.error.message,[w,T]=p.split(" : ");if(w==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(i,"credential-already-in-use",h);if(w==="EMAIL_EXISTS")throw Eo(i,"email-already-in-use",h);if(w==="USER_DISABLED")throw Eo(i,"user-disabled",h);const O=a[w]||w.toLowerCase().replace(/[_\s]+/g,"-");if(T)throw Gh(i,O,T);Ht(i,O)}}catch(c){if(c instanceof sn)throw c;Ht(i,"network-request-failed",{message:String(c)})}}async function ls(i,n,s,a,c={}){const d=await Yn(i,n,s,a,c);return"mfaPendingCredential"in d&&Ht(i,"multi-factor-auth-required",{_serverResponse:d}),d}async function Yh(i,n,s,a){const c=`${n}${s}?${a}`,d=i,h=d.config.emulator?vu(i.config,c):`${i.config.apiScheme}://${c}`;return pw.includes(s)&&(await d._persistenceManagerAvailable,d._getPersistenceType()==="COOKIE")?d._getPersistence()._getFinalTarget(h).toString():h}function gw(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(n){this.auth=n,this.timer=null,this.promise=new Promise((s,a)=>{this.timer=setTimeout(()=>a(tn(this.auth,"network-request-failed")),mw.get())})}}function Eo(i,n,s){const a={appName:i.name};s.email&&(a.email=s.email),s.phoneNumber&&(a.phoneNumber=s.phoneNumber);const c=tn(i,n,a);return c.customData._tokenResponse=s,c}function Qf(i){return i!==void 0&&i.enterprise!==void 0}class vw{constructor(n){if(this.siteKey="",this.recaptchaEnforcementState=[],n.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=n.recaptchaEnforcementState}getProviderEnforcementState(n){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const s of this.recaptchaEnforcementState)if(s.provider&&s.provider===n)return gw(s.enforcementState);return null}isProviderEnabled(n){return this.getProviderEnforcementState(n)==="ENFORCE"||this.getProviderEnforcementState(n)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ww(i,n){return Yn(i,"GET","/v2/recaptchaConfig",Qn(i,n))}/**
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
 */async function _w(i,n){return Yn(i,"POST","/v1/accounts:delete",n)}async function Oo(i,n){return Yn(i,"POST","/v1/accounts:lookup",n)}/**
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
 */function Zi(i){if(i)try{const n=new Date(Number(i));if(!isNaN(n.getTime()))return n.toUTCString()}catch{}}async function Ew(i,n=!1){const s=on(i),a=await s.getIdToken(n),c=wu(a);Z(c&&c.exp&&c.auth_time&&c.iat,s.auth,"internal-error");const d=typeof c.firebase=="object"?c.firebase:void 0,h=d?.sign_in_provider;return{claims:c,token:a,authTime:Zi(Kl(c.auth_time)),issuedAtTime:Zi(Kl(c.iat)),expirationTime:Zi(Kl(c.exp)),signInProvider:h||null,signInSecondFactor:d?.sign_in_second_factor||null}}function Kl(i){return Number(i)*1e3}function wu(i){const[n,s,a]=i.split(".");if(n===void 0||s===void 0||a===void 0)return Io("JWT malformed, contained fewer than 3 sections"),null;try{const c=Oh(s);return c?JSON.parse(c):(Io("Failed to decode base64 JWT payload"),null)}catch(c){return Io("Caught error parsing JWT payload as JSON",c?.toString()),null}}function Yf(i){const n=wu(i);return Z(n,"internal-error"),Z(typeof n.exp<"u","internal-error"),Z(typeof n.iat<"u","internal-error"),Number(n.exp)-Number(n.iat)}/**
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
 */async function ns(i,n,s=!1){if(s)return n;try{return await n}catch(a){throw a instanceof sn&&Sw(a)&&i.auth.currentUser===i&&await i.auth.signOut(),a}}function Sw({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Iw{constructor(n){this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(n){if(n){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(n=!1){if(!this.isRunning)return;const s=this.getInterval(n);this.timerId=setTimeout(async()=>{await this.iteration()},s)}async iteration(){try{await this.user.getIdToken(!0)}catch(n){n?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class iu{constructor(n,s){this.createdAt=n,this.lastLoginAt=s,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zi(this.lastLoginAt),this.creationTime=Zi(this.createdAt)}_copy(n){this.createdAt=n.createdAt,this.lastLoginAt=n.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xo(i){const n=i.auth,s=await i.getIdToken(),a=await ns(i,Oo(n,{idToken:s}));Z(a?.users.length,n,"internal-error");const c=a.users[0];i._notifyReloadListener(c);const d=c.providerUserInfo?.length?Jh(c.providerUserInfo):[],h=Tw(i.providerData,d),p=i.isAnonymous,w=!(i.email&&c.passwordHash)&&!h?.length,T=p?w:!1,O={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:h,metadata:new iu(c.createdAt,c.lastLoginAt),isAnonymous:T};Object.assign(i,O)}async function kw(i){const n=on(i);await xo(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}function Tw(i,n){return[...i.filter(a=>!n.some(c=>c.providerId===a.providerId)),...n]}function Jh(i){return i.map(({providerId:n,...s})=>({providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}))}/**
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
 */async function Cw(i,n){const s=await Qh(i,{},async()=>{const a=ss({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:c,apiKey:d}=i.config,h=await Yh(i,c,"/v1/token",`key=${d}`),p=await i._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const w={method:"POST",headers:p,body:a};return i.emulatorConfig&&zo(i.emulatorConfig.host)&&(w.credentials="include"),qh.fetch()(h,w)});return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}async function Pw(i,n){return Yn(i,"POST","/v2/accounts:revokeToken",Qn(i,n))}/**
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
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(n){Z(n.idToken,"internal-error"),Z(typeof n.idToken<"u","internal-error"),Z(typeof n.refreshToken<"u","internal-error");const s="expiresIn"in n&&typeof n.expiresIn<"u"?Number(n.expiresIn):Yf(n.idToken);this.updateTokensAndExpiration(n.idToken,n.refreshToken,s)}updateFromIdToken(n){Z(n.length!==0,"internal-error");const s=Yf(n);this.updateTokensAndExpiration(n,null,s)}async getToken(n,s=!1){return!s&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,n,"user-token-expired"),this.refreshToken?(await this.refresh(n,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(n,s){const{accessToken:a,refreshToken:c,expiresIn:d}=await Cw(n,s);this.updateTokensAndExpiration(a,c,Number(d))}updateTokensAndExpiration(n,s,a){this.refreshToken=s||null,this.accessToken=n||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(n,s){const{refreshToken:a,accessToken:c,expirationTime:d}=s,h=new ei;return a&&(Z(typeof a=="string","internal-error",{appName:n}),h.refreshToken=a),c&&(Z(typeof c=="string","internal-error",{appName:n}),h.accessToken=c),d&&(Z(typeof d=="number","internal-error",{appName:n}),h.expirationTime=d),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(n){this.accessToken=n.accessToken,this.refreshToken=n.refreshToken,this.expirationTime=n.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function jn(i,n){Z(typeof i=="string"||typeof i>"u","internal-error",{appName:n})}class $t{constructor({uid:n,auth:s,stsTokenManager:a,...c}){this.providerId="firebase",this.proactiveRefresh=new Iw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new iu(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(n){const s=await ns(this,this.stsTokenManager.getToken(this.auth,n));return Z(s,this.auth,"internal-error"),this.accessToken!==s&&(this.accessToken=s,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),s}getIdTokenResult(n){return Ew(this,n)}reload(){return kw(this)}_assign(n){this!==n&&(Z(this.uid===n.uid,this.auth,"internal-error"),this.displayName=n.displayName,this.photoURL=n.photoURL,this.email=n.email,this.emailVerified=n.emailVerified,this.phoneNumber=n.phoneNumber,this.isAnonymous=n.isAnonymous,this.tenantId=n.tenantId,this.providerData=n.providerData.map(s=>({...s})),this.metadata._copy(n.metadata),this.stsTokenManager._assign(n.stsTokenManager))}_clone(n){const s=new $t({...this,auth:n,stsTokenManager:this.stsTokenManager._clone()});return s.metadata._copy(this.metadata),s}_onReload(n){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=n,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(n){this.reloadListener?this.reloadListener(n):this.reloadUserInfo=n}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(n,s=!1){let a=!1;n.idToken&&n.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(n),a=!0),s&&await xo(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(vn(this.auth));const n=await this.getIdToken();return await ns(this,_w(this.auth,{idToken:n})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(n=>({...n})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(n,s){const a=s.displayName??void 0,c=s.email??void 0,d=s.phoneNumber??void 0,h=s.photoURL??void 0,p=s.tenantId??void 0,w=s._redirectEventId??void 0,T=s.createdAt??void 0,O=s.lastLoginAt??void 0,{uid:M,emailVerified:C,isAnonymous:ae,providerData:ue,stsTokenManager:J}=s;Z(M&&J,n,"internal-error");const ie=ei.fromJSON(this.name,J);Z(typeof M=="string",n,"internal-error"),jn(a,n.name),jn(c,n.name),Z(typeof C=="boolean",n,"internal-error"),Z(typeof ae=="boolean",n,"internal-error"),jn(d,n.name),jn(h,n.name),jn(p,n.name),jn(w,n.name),jn(T,n.name),jn(O,n.name);const be=new $t({uid:M,auth:n,email:c,emailVerified:C,displayName:a,isAnonymous:ae,photoURL:h,phoneNumber:d,tenantId:p,stsTokenManager:ie,createdAt:T,lastLoginAt:O});return ue&&Array.isArray(ue)&&(be.providerData=ue.map(X=>({...X}))),w&&(be._redirectEventId=w),be}static async _fromIdTokenResponse(n,s,a=!1){const c=new ei;c.updateFromServerResponse(s);const d=new $t({uid:s.localId,auth:n,stsTokenManager:c,isAnonymous:a});return await xo(d),d}static async _fromGetAccountInfoResponse(n,s,a){const c=s.users[0];Z(c.localId!==void 0,"internal-error");const d=c.providerUserInfo!==void 0?Jh(c.providerUserInfo):[],h=!(c.email&&c.passwordHash)&&!d?.length,p=new ei;p.updateFromIdToken(a);const w=new $t({uid:c.localId,auth:n,stsTokenManager:p,isAnonymous:h}),T={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:d,metadata:new iu(c.createdAt,c.lastLoginAt),isAnonymous:!(c.email&&c.passwordHash)&&!d?.length};return Object.assign(w,T),w}}/**
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
 */const Jf=new Map;function yn(i){En(i instanceof Function,"Expected a class definition");let n=Jf.get(i);return n?(En(n instanceof i,"Instance stored in cache mismatched with class"),n):(n=new i,Jf.set(i,n),n)}/**
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
 */class Xh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(n,s){this.storage[n]=s}async _get(n){const s=this.storage[n];return s===void 0?null:s}async _remove(n){delete this.storage[n]}_addListener(n,s){}_removeListener(n,s){}}Xh.type="NONE";const Xf=Xh;/**
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
 */function ko(i,n,s){return`firebase:${i}:${n}:${s}`}class ti{constructor(n,s,a){this.persistence=n,this.auth=s,this.userKey=a;const{config:c,name:d}=this.auth;this.fullUserKey=ko(this.userKey,c.apiKey,d),this.fullPersistenceKey=ko("persistence",c.apiKey,d),this.boundEventHandler=s._onStorageEvent.bind(s),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(n){return this.persistence._set(this.fullUserKey,n.toJSON())}async getCurrentUser(){const n=await this.persistence._get(this.fullUserKey);if(!n)return null;if(typeof n=="string"){const s=await Oo(this.auth,{idToken:n}).catch(()=>{});return s?$t._fromGetAccountInfoResponse(this.auth,s,n):null}return $t._fromJSON(this.auth,n)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(n){if(this.persistence===n)return;const s=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=n,s)return this.setCurrentUser(s)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(n,s,a="authUser"){if(!s.length)return new ti(yn(Xf),n,a);const c=(await Promise.all(s.map(async T=>{if(await T._isAvailable())return T}))).filter(T=>T);let d=c[0]||yn(Xf);const h=ko(a,n.config.apiKey,n.name);let p=null;for(const T of s)try{const O=await T._get(h);if(O){let M;if(typeof O=="string"){const C=await Oo(n,{idToken:O}).catch(()=>{});if(!C)break;M=await $t._fromGetAccountInfoResponse(n,C,O)}else M=$t._fromJSON(n,O);T!==d&&(p=M),d=T;break}}catch{}const w=c.filter(T=>T._shouldAllowMigration);return!d._shouldAllowMigration||!w.length?new ti(d,n,a):(d=w[0],p&&await d._set(h,p.toJSON()),await Promise.all(s.map(async T=>{if(T!==d)try{await T._remove(h)}catch{}})),new ti(d,n,a))}}/**
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
 */function Zf(i){const n=i.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(np(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(Zh(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(ip(n))return"Blackberry";if(sp(n))return"Webos";if(ep(n))return"Safari";if((n.includes("chrome/")||tp(n))&&!n.includes("edge/"))return"Chrome";if(rp(n))return"Android";{const s=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=i.match(s);if(a?.length===2)return a[1]}return"Other"}function Zh(i=dt()){return/firefox\//i.test(i)}function ep(i=dt()){const n=i.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function tp(i=dt()){return/crios\//i.test(i)}function np(i=dt()){return/iemobile/i.test(i)}function rp(i=dt()){return/android/i.test(i)}function ip(i=dt()){return/blackberry/i.test(i)}function sp(i=dt()){return/webos/i.test(i)}function _u(i=dt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Aw(i=dt()){return _u(i)&&!!window.navigator?.standalone}function Rw(){return zy()&&document.documentMode===10}function op(i=dt()){return _u(i)||rp(i)||sp(i)||ip(i)||/windows phone/i.test(i)||np(i)}/**
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
 */function ap(i,n=[]){let s;switch(i){case"Browser":s=Zf(dt());break;case"Worker":s=`${Zf(dt())}-${i}`;break;default:s=i}const a=n.length?n.join(","):"FirebaseCore-web";return`${s}/JsCore/${os}/${a}`}/**
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
 */class Nw{constructor(n){this.auth=n,this.queue=[]}pushCallback(n,s){const a=d=>new Promise((h,p)=>{try{const w=n(d);h(w)}catch(w){p(w)}});a.onAbort=s,this.queue.push(a);const c=this.queue.length-1;return()=>{this.queue[c]=()=>Promise.resolve()}}async runMiddleware(n){if(this.auth.currentUser===n)return;const s=[];try{for(const a of this.queue)await a(n),a.onAbort&&s.push(a.onAbort)}catch(a){s.reverse();for(const c of s)try{c()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(i,n={}){return Yn(i,"GET","/v2/passwordPolicy",Qn(i,n))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=6;class xw{constructor(n){const s=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=s.minPasswordLength??Ow,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=n.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=n.forceUpgradeOnSignin??!1,this.schemaVersion=n.schemaVersion}validatePassword(n){const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(n,s),this.validatePasswordCharacterOptions(n,s),s.isValid&&(s.isValid=s.meetsMinPasswordLength??!0),s.isValid&&(s.isValid=s.meetsMaxPasswordLength??!0),s.isValid&&(s.isValid=s.containsLowercaseLetter??!0),s.isValid&&(s.isValid=s.containsUppercaseLetter??!0),s.isValid&&(s.isValid=s.containsNumericCharacter??!0),s.isValid&&(s.isValid=s.containsNonAlphanumericCharacter??!0),s}validatePasswordLengthOptions(n,s){const a=this.customStrengthOptions.minPasswordLength,c=this.customStrengthOptions.maxPasswordLength;a&&(s.meetsMinPasswordLength=n.length>=a),c&&(s.meetsMaxPasswordLength=n.length<=c)}validatePasswordCharacterOptions(n,s){this.updatePasswordCharacterOptionsStatuses(s,!1,!1,!1,!1);let a;for(let c=0;c<n.length;c++)a=n.charAt(c),this.updatePasswordCharacterOptionsStatuses(s,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(n,s,a,c,d){this.customStrengthOptions.containsLowercaseLetter&&(n.containsLowercaseLetter||(n.containsLowercaseLetter=s)),this.customStrengthOptions.containsUppercaseLetter&&(n.containsUppercaseLetter||(n.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(n.containsNumericCharacter||(n.containsNumericCharacter=c)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(n.containsNonAlphanumericCharacter||(n.containsNonAlphanumericCharacter=d))}}/**
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
 */class Lw{constructor(n,s,a,c){this.app=n,this.heartbeatServiceProvider=s,this.appCheckServiceProvider=a,this.config=c,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eh(this),this.idTokenSubscription=new eh(this),this.beforeStateQueue=new Nw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=c.sdkClientVersion,this._persistenceManagerAvailable=new Promise(d=>this._resolvePersistenceManagerAvailable=d)}_initializeWithPersistence(n,s){return s&&(this._popupRedirectResolver=yn(s)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ti.create(this,n),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(s),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const n=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!n)){if(this.currentUser&&n&&this.currentUser.uid===n.uid){this._currentUser._assign(n),await this.currentUser.getIdToken();return}await this._updateCurrentUser(n,!0)}}async initializeCurrentUserFromIdToken(n){try{const s=await Oo(this,{idToken:n}),a=await $t._fromGetAccountInfoResponse(this,s,n);await this.directlySetCurrentUser(a)}catch(s){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",s),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(n){if(Bt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(h,h))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,c=!1;if(n&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=this.redirectUser?._redirectEventId,h=a?._redirectEventId,p=await this.tryRedirectSignIn(n);(!d||d===h)&&p?.user&&(a=p.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(d){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(n){let s=null;try{s=await this._popupRedirectResolver._completeRedirectFn(this,n,!0)}catch{await this._setRedirectUser(null)}return s}async reloadAndSetCurrentUserOrClear(n){try{await xo(n)}catch(s){if(s?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(n)}useDeviceLanguage(){this.languageCode=fw()}async _delete(){this._deleted=!0}async updateCurrentUser(n){if(Bt(this.app))return Promise.reject(vn(this));const s=n?on(n):null;return s&&Z(s.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(s&&s._clone(this))}async _updateCurrentUser(n,s=!1){if(!this._deleted)return n&&Z(this.tenantId===n.tenantId,this,"tenant-id-mismatch"),s||await this.beforeStateQueue.runMiddleware(n),this.queue(async()=>{await this.directlySetCurrentUser(n),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(n){return Bt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(n))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(n){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const s=this._getPasswordPolicyInternal();return s.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):s.validatePassword(n)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const n=await Dw(this),s=new xw(n);this.tenantId===null?this._projectPasswordPolicy=s:this._tenantPasswordPolicies[this.tenantId]=s}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(n){this._errorFactory=new vr("auth","Firebase",n())}onAuthStateChanged(n,s,a){return this.registerStateListener(this.authStateSubscription,n,s,a)}beforeAuthStateChanged(n,s){return this.beforeStateQueue.pushCallback(n,s)}onIdTokenChanged(n,s,a){return this.registerStateListener(this.idTokenSubscription,n,s,a)}authStateReady(){return new Promise((n,s)=>{if(this.currentUser)n();else{const a=this.onAuthStateChanged(()=>{a(),n()},s)}})}async revokeAccessToken(n){if(this.currentUser){const s=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:n,idToken:s};this.tenantId!=null&&(a.tenantId=this.tenantId),await Pw(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(n,s){const a=await this.getOrInitRedirectPersistenceManager(s);return n===null?a.removeCurrentUser():a.setCurrentUser(n)}async getOrInitRedirectPersistenceManager(n){if(!this.redirectPersistenceManager){const s=n&&yn(n)||this._popupRedirectResolver;Z(s,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[yn(s._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(n){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===n?this._currentUser:this.redirectUser?._redirectEventId===n?this.redirectUser:null}async _persistUserIfCurrent(n){if(n===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(n))}_notifyListenersIfCurrent(n){n===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=this.currentUser?.uid??null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(n,s,a,c){if(this._deleted)return()=>{};const d=typeof s=="function"?s:s.next.bind(s);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(p,this,"internal-error"),p.then(()=>{h||d(this.currentUser)}),typeof s=="function"){const w=n.addObserver(s,a,c);return()=>{h=!0,w()}}else{const w=n.addObserver(s);return()=>{h=!0,w()}}}async directlySetCurrentUser(n){this.currentUser&&this.currentUser!==n&&this._currentUser._stopProactiveRefresh(),n&&this.isProactiveRefreshEnabled&&n._startProactiveRefresh(),this.currentUser=n,n?await this.assertedPersistence.setCurrentUser(n):await this.assertedPersistence.removeCurrentUser()}queue(n){return this.operations=this.operations.then(n,n),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(n){!n||this.frameworks.includes(n)||(this.frameworks.push(n),this.frameworks.sort(),this.clientVersion=ap(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();s&&(n["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return n?.error&&uw(`Error while retrieving App Check token: ${n.error}`),n?.token}}function wr(i){return on(i)}class eh{constructor(n){this.auth=n,this.observer=null,this.addObserver=Ky(s=>this.observer=s)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let jo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mw(i){jo=i}function lp(i){return jo.loadJS(i)}function Fw(){return jo.recaptchaEnterpriseScript}function Uw(){return jo.gapiScript}function Vw(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class bw{constructor(){this.enterprise=new zw}ready(n){n()}execute(n,s){return Promise.resolve("token")}render(n,s){return""}}class zw{ready(n){n()}execute(n,s){return Promise.resolve("token")}render(n,s){return""}}const jw="recaptcha-enterprise",up="NO_RECAPTCHA";class Bw{constructor(n){this.type=jw,this.auth=wr(n)}async verify(n="verify",s=!1){async function a(d){if(!s){if(d.tenantId==null&&d._agentRecaptchaConfig!=null)return d._agentRecaptchaConfig.siteKey;if(d.tenantId!=null&&d._tenantRecaptchaConfigs[d.tenantId]!==void 0)return d._tenantRecaptchaConfigs[d.tenantId].siteKey}return new Promise(async(h,p)=>{ww(d,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(w=>{if(w.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const T=new vw(w);return d.tenantId==null?d._agentRecaptchaConfig=T:d._tenantRecaptchaConfigs[d.tenantId]=T,h(T.siteKey)}}).catch(w=>{p(w)})})}function c(d,h,p){const w=window.grecaptcha;Qf(w)?w.enterprise.ready(()=>{w.enterprise.execute(d,{action:n}).then(T=>{h(T)}).catch(()=>{h(up)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bw().execute("siteKey",{action:"verify"}):new Promise((d,h)=>{a(this.auth).then(p=>{if(!s&&Qf(window.grecaptcha))c(p,d,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let w=Fw();w.length!==0&&(w+=p),lp(w).then(()=>{c(p,d,h)}).catch(T=>{h(T)})}}).catch(p=>{h(p)})})}}async function th(i,n,s,a=!1,c=!1){const d=new Bw(i);let h;if(c)h=up;else try{h=await d.verify(s)}catch{h=await d.verify(s,!0)}const p={...n};if(s==="mfaSmsEnrollment"||s==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const w=p.phoneEnrollmentInfo.phoneNumber,T=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:w,recaptchaToken:T,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const w=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:w,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return a?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function su(i,n,s,a,c){if(i._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await th(i,n,s,s==="getOobCode");return a(i,d)}else return a(i,n).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${s} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await th(i,n,s,s==="getOobCode");return a(i,h)}else return Promise.reject(d)})}/**
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
 */function $w(i,n){const s=ri(i,"auth");if(s.isInitialized()){const c=s.getImmediate(),d=s.getOptions();if(hr(d,n??{}))return c;Ht(c,"already-initialized")}return s.initialize({options:n})}function Hw(i,n){const s=n?.persistence||[],a=(Array.isArray(s)?s:[s]).map(yn);n?.errorMap&&i._updateErrorMap(n.errorMap),i._initializeWithPersistence(a,n?.popupRedirectResolver)}function Ww(i,n,s){const a=wr(i);Z(/^https?:\/\//.test(n),a,"invalid-emulator-scheme");const c=!1,d=cp(n),{host:h,port:p}=Kw(n),w=p===null?"":`:${p}`,T={url:`${d}//${h}${w}/`},O=Object.freeze({host:h,port:p,protocol:d.replace(":",""),options:Object.freeze({disableWarnings:c})});if(!a._canInitEmulator){Z(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),Z(hr(T,a.config.emulator)&&hr(O,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=T,a.emulatorConfig=O,a.settings.appVerificationDisabledForTesting=!0,zo(h)?(xy(`${d}//${h}${w}`),Fy("Auth",!0)):Gw()}function cp(i){const n=i.indexOf(":");return n<0?"":i.substr(0,n+1)}function Kw(i){const n=cp(i),s=/(\/\/)?([^?#/]+)/.exec(i.substr(n.length));if(!s)return{host:"",port:null};const a=s[2].split("@").pop()||"",c=/^(\[[^\]]+\])(:|$)/.exec(a);if(c){const d=c[1];return{host:d,port:nh(a.substr(d.length+1))}}else{const[d,h]=a.split(":");return{host:d,port:nh(h)}}}function nh(i){if(!i)return null;const n=Number(i);return isNaN(n)?null:n}function Gw(){function i(){const n=document.createElement("p"),s=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",s.position="fixed",s.width="100%",s.backgroundColor="#ffffff",s.border=".1em solid #000000",s.color="#b50000",s.bottom="0px",s.left="0px",s.margin="0px",s.zIndex="10000",s.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Eu{constructor(n,s){this.providerId=n,this.signInMethod=s}toJSON(){return gn("not implemented")}_getIdTokenResponse(n){return gn("not implemented")}_linkToIdToken(n,s){return gn("not implemented")}_getReauthenticationResolver(n){return gn("not implemented")}}async function qw(i,n){return Yn(i,"POST","/v1/accounts:signUp",n)}/**
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
 */async function Qw(i,n){return ls(i,"POST","/v1/accounts:signInWithPassword",Qn(i,n))}/**
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
 */async function Yw(i,n){return ls(i,"POST","/v1/accounts:signInWithEmailLink",Qn(i,n))}async function Jw(i,n){return ls(i,"POST","/v1/accounts:signInWithEmailLink",Qn(i,n))}/**
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
 */class rs extends Eu{constructor(n,s,a,c=null){super("password",a),this._email=n,this._password=s,this._tenantId=c}static _fromEmailAndPassword(n,s){return new rs(n,s,"password")}static _fromEmailAndCode(n,s,a=null){return new rs(n,s,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(n){const s=typeof n=="string"?JSON.parse(n):n;if(s?.email&&s?.password){if(s.signInMethod==="password")return this._fromEmailAndPassword(s.email,s.password);if(s.signInMethod==="emailLink")return this._fromEmailAndCode(s.email,s.password,s.tenantId)}return null}async _getIdTokenResponse(n){switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return su(n,s,"signInWithPassword",Qw);case"emailLink":return Yw(n,{email:this._email,oobCode:this._password});default:Ht(n,"internal-error")}}async _linkToIdToken(n,s){switch(this.signInMethod){case"password":const a={idToken:s,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return su(n,a,"signUpPassword",qw);case"emailLink":return Jw(n,{idToken:s,email:this._email,oobCode:this._password});default:Ht(n,"internal-error")}}_getReauthenticationResolver(n){return this._getIdTokenResponse(n)}}/**
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
 */async function ni(i,n){return ls(i,"POST","/v1/accounts:signInWithIdp",Qn(i,n))}/**
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
 */const Xw="http://localhost";class pr extends Eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(n){const s=new pr(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(s.idToken=n.idToken),n.accessToken&&(s.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(s.nonce=n.nonce),n.pendingToken&&(s.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(s.accessToken=n.oauthToken,s.secret=n.oauthTokenSecret):Ht("argument-error"),s}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(n){const s=typeof n=="string"?JSON.parse(n):n,{providerId:a,signInMethod:c,...d}=s;if(!a||!c)return null;const h=new pr(a,c);return h.idToken=d.idToken||void 0,h.accessToken=d.accessToken||void 0,h.secret=d.secret,h.nonce=d.nonce,h.pendingToken=d.pendingToken||null,h}_getIdTokenResponse(n){const s=this.buildRequest();return ni(n,s)}_linkToIdToken(n,s){const a=this.buildRequest();return a.idToken=s,ni(n,a)}_getReauthenticationResolver(n){const s=this.buildRequest();return s.autoCreate=!1,ni(n,s)}buildRequest(){const n={requestUri:Xw,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{const s={};this.idToken&&(s.id_token=this.idToken),this.accessToken&&(s.access_token=this.accessToken),this.secret&&(s.oauth_token_secret=this.secret),s.providerId=this.providerId,this.nonce&&!this.pendingToken&&(s.nonce=this.nonce),n.postBody=ss(s)}return n}}/**
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
 */function Zw(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function e_(i){const n=qi(Qi(i)).link,s=n?qi(Qi(n)).deep_link_id:null,a=qi(Qi(i)).deep_link_id;return(a?qi(Qi(a)).link:null)||a||s||n||i}class Su{constructor(n){const s=qi(Qi(n)),a=s.apiKey??null,c=s.oobCode??null,d=Zw(s.mode??null);Z(a&&c&&d,"argument-error"),this.apiKey=a,this.operation=d,this.code=c,this.continueUrl=s.continueUrl??null,this.languageCode=s.lang??null,this.tenantId=s.tenantId??null}static parseLink(n){const s=e_(n);try{return new Su(s)}catch{return null}}}/**
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
 */class ii{constructor(){this.providerId=ii.PROVIDER_ID}static credential(n,s){return rs._fromEmailAndPassword(n,s)}static credentialWithLink(n,s){const a=Su.parseLink(s);return Z(a,"argument-error"),rs._fromEmailAndCode(n,a.code,a.tenantId)}}ii.PROVIDER_ID="password";ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class dp{constructor(n){this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(n){this.defaultLanguageCode=n}setCustomParameters(n){return this.customParameters=n,this}getCustomParameters(){return this.customParameters}}/**
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
 */class us extends dp{constructor(){super(...arguments),this.scopes=[]}addScope(n){return this.scopes.includes(n)||this.scopes.push(n),this}getScopes(){return[...this.scopes]}}/**
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
 */class $n extends us{constructor(){super("facebook.com")}static credential(n){return pr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return $n.credentialFromTaggedObject(n)}static credentialFromError(n){return $n.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return $n.credential(n.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
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
 */class Hn extends us{constructor(){super("google.com"),this.addScope("profile")}static credential(n,s){return pr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:s})}static credentialFromResult(n){return Hn.credentialFromTaggedObject(n)}static credentialFromError(n){return Hn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthIdToken:s,oauthAccessToken:a}=n;if(!s&&!a)return null;try{return Hn.credential(s,a)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
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
 */class Wn extends us{constructor(){super("github.com")}static credential(n){return pr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return Wn.credentialFromTaggedObject(n)}static credentialFromError(n){return Wn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return Wn.credential(n.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
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
 */class Kn extends us{constructor(){super("twitter.com")}static credential(n,s){return pr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:s})}static credentialFromResult(n){return Kn.credentialFromTaggedObject(n)}static credentialFromError(n){return Kn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthAccessToken:s,oauthTokenSecret:a}=n;if(!s||!a)return null;try{return Kn.credential(s,a)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
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
 */async function t_(i,n){return ls(i,"POST","/v1/accounts:signUp",Qn(i,n))}/**
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
 */class mr{constructor(n){this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}static async _fromIdTokenResponse(n,s,a,c=!1){const d=await $t._fromIdTokenResponse(n,a,c),h=rh(a);return new mr({user:d,providerId:h,_tokenResponse:a,operationType:s})}static async _forOperation(n,s,a){await n._updateTokensIfNecessary(a,!0);const c=rh(a);return new mr({user:n,providerId:c,_tokenResponse:a,operationType:s})}}function rh(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Lo extends sn{constructor(n,s,a,c){super(s.code,s.message),this.operationType=a,this.user=c,Object.setPrototypeOf(this,Lo.prototype),this.customData={appName:n.name,tenantId:n.tenantId??void 0,_serverResponse:s.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(n,s,a,c){return new Lo(n,s,a,c)}}function fp(i,n,s,a){return(n==="reauthenticate"?s._getReauthenticationResolver(i):s._getIdTokenResponse(i)).catch(d=>{throw d.code==="auth/multi-factor-auth-required"?Lo._fromErrorAndOperation(i,d,n,a):d})}async function n_(i,n,s=!1){const a=await ns(i,n._linkToIdToken(i.auth,await i.getIdToken()),s);return mr._forOperation(i,"link",a)}/**
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
 */async function r_(i,n,s=!1){const{auth:a}=i;if(Bt(a.app))return Promise.reject(vn(a));const c="reauthenticate";try{const d=await ns(i,fp(a,c,n,i),s);Z(d.idToken,a,"internal-error");const h=wu(d.idToken);Z(h,a,"internal-error");const{sub:p}=h;return Z(i.uid===p,a,"user-mismatch"),mr._forOperation(i,c,d)}catch(d){throw d?.code==="auth/user-not-found"&&Ht(a,"user-mismatch"),d}}/**
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
 */async function hp(i,n,s=!1){if(Bt(i.app))return Promise.reject(vn(i));const a="signIn",c=await fp(i,a,n),d=await mr._fromIdTokenResponse(i,a,c);return s||await i._updateCurrentUser(d.user),d}async function i_(i,n){return hp(wr(i),n)}/**
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
 */async function pp(i){const n=wr(i);n._getPasswordPolicyInternal()&&await n._updatePasswordPolicy()}async function s_(i,n,s){if(Bt(i.app))return Promise.reject(vn(i));const a=wr(i),h=await su(a,{returnSecureToken:!0,email:n,password:s,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",t_).catch(w=>{throw w.code==="auth/password-does-not-meet-requirements"&&pp(i),w}),p=await mr._fromIdTokenResponse(a,"signIn",h);return await a._updateCurrentUser(p.user),p}function o_(i,n,s){return Bt(i.app)?Promise.reject(vn(i)):i_(on(i),ii.credential(n,s)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&pp(i),a})}function a_(i,n,s,a){return on(i).onIdTokenChanged(n,s,a)}function l_(i,n,s){return on(i).beforeAuthStateChanged(n,s)}function u_(i,n,s,a){return on(i).onAuthStateChanged(n,s,a)}const Mo="__sak";/**
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
 */class mp{constructor(n,s){this.storageRetriever=n,this.type=s}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(n,s){return this.storage.setItem(n,JSON.stringify(s)),Promise.resolve()}_get(n){const s=this.storage.getItem(n);return Promise.resolve(s?JSON.parse(s):null)}_remove(n){return this.storage.removeItem(n),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const c_=1e3,d_=10;class gp extends mp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(n,s)=>this.onStorageEvent(n,s),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=op(),this._shouldAllowMigration=!0}forAllChangedKeys(n){for(const s of Object.keys(this.listeners)){const a=this.storage.getItem(s),c=this.localCache[s];a!==c&&n(s,c,a)}}onStorageEvent(n,s=!1){if(!n.key){this.forAllChangedKeys((h,p,w)=>{this.notifyListeners(h,w)});return}const a=n.key;s?this.detachListener():this.stopPolling();const c=()=>{const h=this.storage.getItem(a);!s&&this.localCache[a]===h||this.notifyListeners(a,h)},d=this.storage.getItem(a);Rw()&&d!==n.newValue&&n.newValue!==n.oldValue?setTimeout(c,d_):c()}notifyListeners(n,s){this.localCache[n]=s;const a=this.listeners[n];if(a)for(const c of Array.from(a))c(s&&JSON.parse(s))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((n,s,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:n,oldValue:s,newValue:a}),!0)})},c_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(n,s){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(s)}_removeListener(n,s){this.listeners[n]&&(this.listeners[n].delete(s),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(n,s){await super._set(n,s),this.localCache[n]=JSON.stringify(s)}async _get(n){const s=await super._get(n);return this.localCache[n]=JSON.stringify(s),s}async _remove(n){await super._remove(n),delete this.localCache[n]}}gp.type="LOCAL";const f_=gp;/**
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
 */class yp extends mp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(n,s){}_removeListener(n,s){}}yp.type="SESSION";const vp=yp;/**
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
 */function h_(i){return Promise.all(i.map(async n=>{try{return{fulfilled:!0,value:await n}}catch(s){return{fulfilled:!1,reason:s}}}))}/**
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
 */class Bo{constructor(n){this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(n){const s=this.receivers.find(c=>c.isListeningto(n));if(s)return s;const a=new Bo(n);return this.receivers.push(a),a}isListeningto(n){return this.eventTarget===n}async handleEvent(n){const s=n,{eventId:a,eventType:c,data:d}=s.data,h=this.handlersMap[c];if(!h?.size)return;s.ports[0].postMessage({status:"ack",eventId:a,eventType:c});const p=Array.from(h).map(async T=>T(s.origin,d)),w=await h_(p);s.ports[0].postMessage({status:"done",eventId:a,eventType:c,response:w})}_subscribe(n,s){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[n]||(this.handlersMap[n]=new Set),this.handlersMap[n].add(s)}_unsubscribe(n,s){this.handlersMap[n]&&s&&this.handlersMap[n].delete(s),(!s||this.handlersMap[n].size===0)&&delete this.handlersMap[n],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bo.receivers=[];/**
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
 */function Iu(i="",n=10){let s="";for(let a=0;a<n;a++)s+=Math.floor(Math.random()*10);return i+s}/**
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
 */class p_{constructor(n){this.target=n,this.handlers=new Set}removeMessageHandler(n){n.messageChannel&&(n.messageChannel.port1.removeEventListener("message",n.onMessage),n.messageChannel.port1.close()),this.handlers.delete(n)}async _send(n,s,a=50){const c=typeof MessageChannel<"u"?new MessageChannel:null;if(!c)throw new Error("connection_unavailable");let d,h;return new Promise((p,w)=>{const T=Iu("",20);c.port1.start();const O=setTimeout(()=>{w(new Error("unsupported_event"))},a);h={messageChannel:c,onMessage(M){const C=M;if(C.data.eventId===T)switch(C.data.status){case"ack":clearTimeout(O),d=setTimeout(()=>{w(new Error("timeout"))},3e3);break;case"done":clearTimeout(d),p(C.data.response);break;default:clearTimeout(O),clearTimeout(d),w(new Error("invalid_response"));break}}},this.handlers.add(h),c.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:n,eventId:T,data:s},[c.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function nn(){return window}function m_(i){nn().location.href=i}/**
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
 */function wp(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function g_(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function y_(){return navigator?.serviceWorker?.controller||null}function v_(){return wp()?self:null}/**
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
 */const _p="firebaseLocalStorageDb",w_=1,Fo="firebaseLocalStorage",Ep="fbase_key";class cs{constructor(n){this.request=n}toPromise(){return new Promise((n,s)=>{this.request.addEventListener("success",()=>{n(this.request.result)}),this.request.addEventListener("error",()=>{s(this.request.error)})})}}function $o(i,n){return i.transaction([Fo],n?"readwrite":"readonly").objectStore(Fo)}function __(){const i=indexedDB.deleteDatabase(_p);return new cs(i).toPromise()}function ou(){const i=indexedDB.open(_p,w_);return new Promise((n,s)=>{i.addEventListener("error",()=>{s(i.error)}),i.addEventListener("upgradeneeded",()=>{const a=i.result;try{a.createObjectStore(Fo,{keyPath:Ep})}catch(c){s(c)}}),i.addEventListener("success",async()=>{const a=i.result;a.objectStoreNames.contains(Fo)?n(a):(a.close(),await __(),n(await ou()))})})}async function ih(i,n,s){const a=$o(i,!0).put({[Ep]:n,value:s});return new cs(a).toPromise()}async function E_(i,n){const s=$o(i,!1).get(n),a=await new cs(s).toPromise();return a===void 0?null:a.value}function sh(i,n){const s=$o(i,!0).delete(n);return new cs(s).toPromise()}const S_=800,I_=3;class Sp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ou(),this.db)}async _withRetries(n){let s=0;for(;;)try{const a=await this._openDb();return await n(a)}catch(a){if(s++>I_)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bo._getInstance(v_()),this.receiver._subscribe("keyChanged",async(n,s)=>({keyProcessed:(await this._poll()).includes(s.key)})),this.receiver._subscribe("ping",async(n,s)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await g_(),!this.activeServiceWorker)return;this.sender=new p_(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&n[0]?.fulfilled&&n[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(n){if(!(!this.sender||!this.activeServiceWorker||y_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:n},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const n=await ou();return await ih(n,Mo,"1"),await sh(n,Mo),!0}catch{}return!1}async _withPendingWrite(n){this.pendingWrites++;try{await n()}finally{this.pendingWrites--}}async _set(n,s){return this._withPendingWrite(async()=>(await this._withRetries(a=>ih(a,n,s)),this.localCache[n]=s,this.notifyServiceWorker(n)))}async _get(n){const s=await this._withRetries(a=>E_(a,n));return this.localCache[n]=s,s}async _remove(n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sh(s,n)),delete this.localCache[n],this.notifyServiceWorker(n)))}async _poll(){const n=await this._withRetries(c=>{const d=$o(c,!1).getAll();return new cs(d).toPromise()});if(!n)return[];if(this.pendingWrites!==0)return[];const s=[],a=new Set;if(n.length!==0)for(const{fbase_key:c,value:d}of n)a.add(c),JSON.stringify(this.localCache[c])!==JSON.stringify(d)&&(this.notifyListeners(c,d),s.push(c));for(const c of Object.keys(this.localCache))this.localCache[c]&&!a.has(c)&&(this.notifyListeners(c,null),s.push(c));return s}notifyListeners(n,s){this.localCache[n]=s;const a=this.listeners[n];if(a)for(const c of Array.from(a))c(s)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(n,s){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[n]||(this.listeners[n]=new Set,this._get(n)),this.listeners[n].add(s)}_removeListener(n,s){this.listeners[n]&&(this.listeners[n].delete(s),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sp.type="LOCAL";const k_=Sp;new as(3e4,6e4);/**
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
 */function T_(i,n){return n?yn(n):(Z(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class ku extends Eu{constructor(n){super("custom","custom"),this.params=n}_getIdTokenResponse(n){return ni(n,this._buildIdpRequest())}_linkToIdToken(n,s){return ni(n,this._buildIdpRequest(s))}_getReauthenticationResolver(n){return ni(n,this._buildIdpRequest())}_buildIdpRequest(n){const s={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(s.idToken=n),s}}function C_(i){return hp(i.auth,new ku(i),i.bypassAuthState)}function P_(i){const{auth:n,user:s}=i;return Z(s,n,"internal-error"),r_(s,new ku(i),i.bypassAuthState)}async function A_(i){const{auth:n,user:s}=i;return Z(s,n,"internal-error"),n_(s,new ku(i),i.bypassAuthState)}/**
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
 */class Ip{constructor(n,s,a,c,d=!1){this.auth=n,this.resolver=a,this.user=c,this.bypassAuthState=d,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(s)?s:[s]}execute(){return new Promise(async(n,s)=>{this.pendingPromise={resolve:n,reject:s};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(n){const{urlResponse:s,sessionId:a,postBody:c,tenantId:d,error:h,type:p}=n;if(h){this.reject(h);return}const w={auth:this.auth,requestUri:s,sessionId:a,tenantId:d||void 0,postBody:c||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(w))}catch(T){this.reject(T)}}onError(n){this.reject(n)}getIdpTask(n){switch(n){case"signInViaPopup":case"signInViaRedirect":return C_;case"linkViaPopup":case"linkViaRedirect":return A_;case"reauthViaPopup":case"reauthViaRedirect":return P_;default:Ht(this.auth,"internal-error")}}resolve(n){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(n),this.unregisterAndCleanUp()}reject(n){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(n),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const R_=new as(2e3,1e4);class Zr extends Ip{constructor(n,s,a,c,d){super(n,s,c,d),this.provider=a,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const n=await this.execute();return Z(n,this.auth,"internal-error"),n}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const n=Iu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(s=>{this.reject(s)}),this.resolver._isIframeWebStorageSupported(this.auth,s=>{s||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const n=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(n,R_.get())};n()}}Zr.currentPopupAction=null;/**
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
 */const N_="pendingRedirect",To=new Map;class D_ extends Ip{constructor(n,s,a=!1){super(n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],s,void 0,a),this.eventId=null}async execute(){let n=To.get(this.auth._key());if(!n){try{const a=await O_(this.resolver,this.auth)?await super.execute():null;n=()=>Promise.resolve(a)}catch(s){n=()=>Promise.reject(s)}To.set(this.auth._key(),n)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),n()}async onAuthEvent(n){if(n.type==="signInViaRedirect")return super.onAuthEvent(n);if(n.type==="unknown"){this.resolve(null);return}if(n.eventId){const s=await this.auth._redirectUserForId(n.eventId);if(s)return this.user=s,super.onAuthEvent(n);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O_(i,n){const s=M_(n),a=L_(i);if(!await a._isAvailable())return!1;const c=await a._get(s)==="true";return await a._remove(s),c}function x_(i,n){To.set(i._key(),n)}function L_(i){return yn(i._redirectPersistence)}function M_(i){return ko(N_,i.config.apiKey,i.name)}async function F_(i,n,s=!1){if(Bt(i.app))return Promise.reject(vn(i));const a=wr(i),c=T_(a,n),h=await new D_(a,c,s).execute();return h&&!s&&(delete h.user._redirectEventId,await a._persistUserIfCurrent(h.user),await a._setRedirectUser(null,n)),h}/**
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
 */const U_=600*1e3;class V_{constructor(n){this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(n){this.consumers.add(n),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,n)&&(this.sendToConsumer(this.queuedRedirectEvent,n),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(n){this.consumers.delete(n)}onEvent(n){if(this.hasEventBeenHandled(n))return!1;let s=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(n,a)&&(s=!0,this.sendToConsumer(n,a),this.saveEventToCache(n))}),this.hasHandledPotentialRedirect||!b_(n)||(this.hasHandledPotentialRedirect=!0,s||(this.queuedRedirectEvent=n,s=!0)),s}sendToConsumer(n,s){if(n.error&&!kp(n)){const a=n.error.code?.split("auth/")[1]||"internal-error";s.onError(tn(this.auth,a))}else s.onAuthEvent(n)}isEventForConsumer(n,s){const a=s.eventId===null||!!n.eventId&&n.eventId===s.eventId;return s.filter.includes(n.type)&&a}hasEventBeenHandled(n){return Date.now()-this.lastProcessedEventTime>=U_&&this.cachedEventUids.clear(),this.cachedEventUids.has(oh(n))}saveEventToCache(n){this.cachedEventUids.add(oh(n)),this.lastProcessedEventTime=Date.now()}}function oh(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(n=>n).join("-")}function kp({type:i,error:n}){return i==="unknown"&&n?.code==="auth/no-auth-event"}function b_(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kp(i);default:return!1}}/**
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
 */async function z_(i,n={}){return Yn(i,"GET","/v1/projects",n)}/**
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
 */const j_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,B_=/^https?/;async function $_(i){if(i.config.emulator)return;const{authorizedDomains:n}=await z_(i);for(const s of n)try{if(H_(s))return}catch{}Ht(i,"unauthorized-domain")}function H_(i){const n=ru(),{protocol:s,hostname:a}=new URL(n);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&a===""?s==="chrome-extension:"&&i.replace("chrome-extension://","")===n.replace("chrome-extension://",""):s==="chrome-extension:"&&h.hostname===a}if(!B_.test(s))return!1;if(j_.test(i))return a===i;const c=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+c+"|"+c+")$","i").test(a)}/**
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
 */const W_=new as(3e4,6e4);function ah(){const i=nn().___jsl;if(i?.H){for(const n of Object.keys(i.H))if(i.H[n].r=i.H[n].r||[],i.H[n].L=i.H[n].L||[],i.H[n].r=[...i.H[n].L],i.CP)for(let s=0;s<i.CP.length;s++)i.CP[s]=null}}function K_(i){return new Promise((n,s)=>{function a(){ah(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{ah(),s(tn(i,"network-request-failed"))},timeout:W_.get()})}if(nn().gapi?.iframes?.Iframe)n(gapi.iframes.getContext());else if(nn().gapi?.load)a();else{const c=Vw("iframefcb");return nn()[c]=()=>{gapi.load?a():s(tn(i,"network-request-failed"))},lp(`${Uw()}?onload=${c}`).catch(d=>s(d))}}).catch(n=>{throw Co=null,n})}let Co=null;function G_(i){return Co=Co||K_(i),Co}/**
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
 */const q_=new as(5e3,15e3),Q_="__/auth/iframe",Y_="emulator/auth/iframe",J_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},X_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Z_(i){const n=i.config;Z(n.authDomain,i,"auth-domain-config-required");const s=n.emulator?vu(n,Y_):`https://${i.config.authDomain}/${Q_}`,a={apiKey:n.apiKey,appName:i.name,v:os},c=X_.get(i.config.apiHost);c&&(a.eid=c);const d=i._getFrameworks();return d.length&&(a.fw=d.join(",")),`${s}?${ss(a).slice(1)}`}async function e0(i){const n=await G_(i),s=nn().gapi;return Z(s,i,"internal-error"),n.open({where:document.body,url:Z_(i),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:J_,dontclear:!0},a=>new Promise(async(c,d)=>{await a.restyle({setHideOnLeave:!1});const h=tn(i,"network-request-failed"),p=nn().setTimeout(()=>{d(h)},q_.get());function w(){nn().clearTimeout(p),c(a)}a.ping(w).then(w,()=>{d(h)})}))}/**
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
 */const t0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},n0=500,r0=600,i0="_blank",s0="http://localhost";class lh{constructor(n){this.window=n,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function o0(i,n,s,a=n0,c=r0){const d=Math.max((window.screen.availHeight-c)/2,0).toString(),h=Math.max((window.screen.availWidth-a)/2,0).toString();let p="";const w={...t0,width:a.toString(),height:c.toString(),top:d,left:h},T=dt().toLowerCase();s&&(p=tp(T)?i0:s),Zh(T)&&(n=n||s0,w.scrollbars="yes");const O=Object.entries(w).reduce((C,[ae,ue])=>`${C}${ae}=${ue},`,"");if(Aw(T)&&p!=="_self")return a0(n||"",p),new lh(null);const M=window.open(n||"",p,O);Z(M,i,"popup-blocked");try{M.focus()}catch{}return new lh(M)}function a0(i,n){const s=document.createElement("a");s.href=i,s.target=n;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(a)}/**
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
 */const l0="__/auth/handler",u0="emulator/auth/handler",c0=encodeURIComponent("fac");async function uh(i,n,s,a,c,d){Z(i.config.authDomain,i,"auth-domain-config-required"),Z(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:s,redirectUrl:a,v:os,eventId:c};if(n instanceof dp){n.setDefaultLanguage(i.languageCode),h.providerId=n.providerId||"",Wy(n.getCustomParameters())||(h.customParameters=JSON.stringify(n.getCustomParameters()));for(const[O,M]of Object.entries({}))h[O]=M}if(n instanceof us){const O=n.getScopes().filter(M=>M!=="");O.length>0&&(h.scopes=O.join(","))}i.tenantId&&(h.tid=i.tenantId);const p=h;for(const O of Object.keys(p))p[O]===void 0&&delete p[O];const w=await i._getAppCheckToken(),T=w?`#${c0}=${encodeURIComponent(w)}`:"";return`${d0(i)}?${ss(p).slice(1)}${T}`}function d0({config:i}){return i.emulator?vu(i,u0):`https://${i.authDomain}/${l0}`}/**
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
 */const Gl="webStorageSupport";class f0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vp,this._completeRedirectFn=F_,this._overrideRedirectResult=x_}async _openPopup(n,s,a,c){En(this.eventManagers[n._key()]?.manager,"_initialize() not called before _openPopup()");const d=await uh(n,s,a,ru(),c);return o0(n,d,Iu())}async _openRedirect(n,s,a,c){await this._originValidation(n);const d=await uh(n,s,a,ru(),c);return m_(d),new Promise(()=>{})}_initialize(n){const s=n._key();if(this.eventManagers[s]){const{manager:c,promise:d}=this.eventManagers[s];return c?Promise.resolve(c):(En(d,"If manager is not set, promise should be"),d)}const a=this.initAndGetManager(n);return this.eventManagers[s]={promise:a},a.catch(()=>{delete this.eventManagers[s]}),a}async initAndGetManager(n){const s=await e0(n),a=new V_(n);return s.register("authEvent",c=>(Z(c?.authEvent,n,"invalid-auth-event"),{status:a.onEvent(c.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[n._key()]={manager:a},this.iframes[n._key()]=s,a}_isIframeWebStorageSupported(n,s){this.iframes[n._key()].send(Gl,{type:Gl},c=>{const d=c?.[0]?.[Gl];d!==void 0&&s(!!d),Ht(n,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(n){const s=n._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=$_(n)),this.originValidationPromises[s]}get _shouldInitProactively(){return op()||ep()||_u()}}const h0=f0;var ch="@firebase/auth",dh="1.11.0";/**
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
 */class p0{constructor(n){this.auth=n,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(n){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(n)}:null}addAuthTokenListener(n){if(this.assertAuthConfigured(),this.internalListeners.has(n))return;const s=this.auth.onIdTokenChanged(a=>{n(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(n,s),this.updateProactiveRefresh()}removeAuthTokenListener(n){this.assertAuthConfigured();const s=this.internalListeners.get(n);s&&(this.internalListeners.delete(n),s(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function m0(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function g0(i){_n(new rn("auth",(n,{options:s})=>{const a=n.getProvider("app").getImmediate(),c=n.getProvider("heartbeat"),d=n.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=a.options;Z(h&&!h.includes(":"),"invalid-api-key",{appName:a.name});const w={apiKey:h,authDomain:p,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ap(i)},T=new Lw(a,c,d,w);return Hw(T,s),T},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,s,a)=>{n.getProvider("auth-internal").initialize()})),_n(new rn("auth-internal",n=>{const s=wr(n.getProvider("auth").getImmediate());return(a=>new p0(a))(s)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(ch,dh,m0(i)),en(ch,dh,"esm2020")}/**
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
 */const y0=300,v0=Lh("authIdTokenMaxAge")||y0;let fh=null;const w0=i=>async n=>{const s=n&&await n.getIdTokenResult(),a=s&&(new Date().getTime()-Date.parse(s.issuedAtTime))/1e3;if(a&&a>v0)return;const c=s?.token;fh!==c&&(fh=c,await fetch(i,{method:c?"POST":"DELETE",headers:c?{Authorization:`Bearer ${c}`}:{}}))};function _0(i=Bh()){const n=ri(i,"auth");if(n.isInitialized())return n.getImmediate();const s=$w(i,{popupRedirectResolver:h0,persistence:[k_,f_,vp]}),a=Lh("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const d=new URL(a,location.origin);if(location.origin===d.origin){const h=w0(d.toString());l_(s,h,()=>h(s.currentUser)),a_(s,p=>h(p))}}const c=Dy("auth");return c&&Ww(s,`http://${c}`),s}function E0(){return document.getElementsByTagName("head")?.[0]??document}Mw({loadJS(i){return new Promise((n,s)=>{const a=document.createElement("script");a.setAttribute("src",i),a.onload=n,a.onerror=c=>{const d=tn("internal-error");d.customData=c,s(d)},a.type="text/javascript",a.charset="UTF-8",E0().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});g0("Browser");const Tp="@firebase/installations",Tu="0.6.19";/**
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
 */const Cp=1e4,Pp=`w:${Tu}`,Ap="FIS_v2",S0="https://firebaseinstallations.googleapis.com/v1",I0=3600*1e3,k0="installations",T0="Installations";/**
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
 */const C0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gr=new vr(k0,T0,C0);function Rp(i){return i instanceof sn&&i.code.includes("request-failed")}/**
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
 */function Np({projectId:i}){return`${S0}/projects/${i}/installations`}function Dp(i){return{token:i.token,requestStatus:2,expiresIn:A0(i.expiresIn),creationTime:Date.now()}}async function Op(i,n){const a=(await n.json()).error;return gr.create("request-failed",{requestName:i,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function xp({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function P0(i,{refreshToken:n}){const s=xp(i);return s.append("Authorization",R0(n)),s}async function Lp(i){const n=await i();return n.status>=500&&n.status<600?i():n}function A0(i){return Number(i.replace("s","000"))}function R0(i){return`${Ap} ${i}`}/**
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
 */async function N0({appConfig:i,heartbeatServiceProvider:n},{fid:s}){const a=Np(i),c=xp(i),d=n.getImmediate({optional:!0});if(d){const T=await d.getHeartbeatsHeader();T&&c.append("x-firebase-client",T)}const h={fid:s,authVersion:Ap,appId:i.appId,sdkVersion:Pp},p={method:"POST",headers:c,body:JSON.stringify(h)},w=await Lp(()=>fetch(a,p));if(w.ok){const T=await w.json();return{fid:T.fid||s,registrationStatus:2,refreshToken:T.refreshToken,authToken:Dp(T.authToken)}}else throw await Op("Create Installation",w)}/**
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
 */function Mp(i){return new Promise(n=>{setTimeout(n,i)})}/**
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
 */function D0(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const O0=/^[cdef][\w-]{21}$/,au="";function x0(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const s=L0(i);return O0.test(s)?s:au}catch{return au}}function L0(i){return D0(i).substr(0,22)}/**
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
 */function Ho(i){return`${i.appName}!${i.appId}`}/**
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
 */const Fp=new Map;function Up(i,n){const s=Ho(i);Vp(s,n),M0(s,n)}function Vp(i,n){const s=Fp.get(i);if(s)for(const a of s)a(n)}function M0(i,n){const s=F0();s&&s.postMessage({key:i,fid:n}),U0()}let fr=null;function F0(){return!fr&&"BroadcastChannel"in self&&(fr=new BroadcastChannel("[Firebase] FID Change"),fr.onmessage=i=>{Vp(i.data.key,i.data.fid)}),fr}function U0(){Fp.size===0&&fr&&(fr.close(),fr=null)}/**
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
 */const V0="firebase-installations-database",b0=1,yr="firebase-installations-store";let ql=null;function Cu(){return ql||(ql=zh(V0,b0,{upgrade:(i,n)=>{switch(n){case 0:i.createObjectStore(yr)}}})),ql}async function Uo(i,n){const s=Ho(i),c=(await Cu()).transaction(yr,"readwrite"),d=c.objectStore(yr),h=await d.get(s);return await d.put(n,s),await c.done,(!h||h.fid!==n.fid)&&Up(i,n.fid),n}async function bp(i){const n=Ho(i),a=(await Cu()).transaction(yr,"readwrite");await a.objectStore(yr).delete(n),await a.done}async function Wo(i,n){const s=Ho(i),c=(await Cu()).transaction(yr,"readwrite"),d=c.objectStore(yr),h=await d.get(s),p=n(h);return p===void 0?await d.delete(s):await d.put(p,s),await c.done,p&&(!h||h.fid!==p.fid)&&Up(i,p.fid),p}/**
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
 */async function Pu(i){let n;const s=await Wo(i.appConfig,a=>{const c=z0(a),d=j0(i,c);return n=d.registrationPromise,d.installationEntry});return s.fid===au?{installationEntry:await n}:{installationEntry:s,registrationPromise:n}}function z0(i){const n=i||{fid:x0(),registrationStatus:0};return zp(n)}function j0(i,n){if(n.registrationStatus===0){if(!navigator.onLine){const c=Promise.reject(gr.create("app-offline"));return{installationEntry:n,registrationPromise:c}}const s={fid:n.fid,registrationStatus:1,registrationTime:Date.now()},a=B0(i,s);return{installationEntry:s,registrationPromise:a}}else return n.registrationStatus===1?{installationEntry:n,registrationPromise:$0(i)}:{installationEntry:n}}async function B0(i,n){try{const s=await N0(i,n);return Uo(i.appConfig,s)}catch(s){throw Rp(s)&&s.customData.serverCode===409?await bp(i.appConfig):await Uo(i.appConfig,{fid:n.fid,registrationStatus:0}),s}}async function $0(i){let n=await hh(i.appConfig);for(;n.registrationStatus===1;)await Mp(100),n=await hh(i.appConfig);if(n.registrationStatus===0){const{installationEntry:s,registrationPromise:a}=await Pu(i);return a||s}return n}function hh(i){return Wo(i,n=>{if(!n)throw gr.create("installation-not-found");return zp(n)})}function zp(i){return H0(i)?{fid:i.fid,registrationStatus:0}:i}function H0(i){return i.registrationStatus===1&&i.registrationTime+Cp<Date.now()}/**
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
 */async function W0({appConfig:i,heartbeatServiceProvider:n},s){const a=K0(i,s),c=P0(i,s),d=n.getImmediate({optional:!0});if(d){const T=await d.getHeartbeatsHeader();T&&c.append("x-firebase-client",T)}const h={installation:{sdkVersion:Pp,appId:i.appId}},p={method:"POST",headers:c,body:JSON.stringify(h)},w=await Lp(()=>fetch(a,p));if(w.ok){const T=await w.json();return Dp(T)}else throw await Op("Generate Auth Token",w)}function K0(i,{fid:n}){return`${Np(i)}/${n}/authTokens:generate`}/**
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
 */async function Au(i,n=!1){let s;const a=await Wo(i.appConfig,d=>{if(!jp(d))throw gr.create("not-registered");const h=d.authToken;if(!n&&Q0(h))return d;if(h.requestStatus===1)return s=G0(i,n),d;{if(!navigator.onLine)throw gr.create("app-offline");const p=J0(d);return s=q0(i,p),p}});return s?await s:a.authToken}async function G0(i,n){let s=await ph(i.appConfig);for(;s.authToken.requestStatus===1;)await Mp(100),s=await ph(i.appConfig);const a=s.authToken;return a.requestStatus===0?Au(i,n):a}function ph(i){return Wo(i,n=>{if(!jp(n))throw gr.create("not-registered");const s=n.authToken;return X0(s)?{...n,authToken:{requestStatus:0}}:n})}async function q0(i,n){try{const s=await W0(i,n),a={...n,authToken:s};return await Uo(i.appConfig,a),s}catch(s){if(Rp(s)&&(s.customData.serverCode===401||s.customData.serverCode===404))await bp(i.appConfig);else{const a={...n,authToken:{requestStatus:0}};await Uo(i.appConfig,a)}throw s}}function jp(i){return i!==void 0&&i.registrationStatus===2}function Q0(i){return i.requestStatus===2&&!Y0(i)}function Y0(i){const n=Date.now();return n<i.creationTime||i.creationTime+i.expiresIn<n+I0}function J0(i){const n={requestStatus:1,requestTime:Date.now()};return{...i,authToken:n}}function X0(i){return i.requestStatus===1&&i.requestTime+Cp<Date.now()}/**
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
 */async function Z0(i){const n=i,{installationEntry:s,registrationPromise:a}=await Pu(n);return a?a.catch(console.error):Au(n).catch(console.error),s.fid}/**
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
 */async function e1(i,n=!1){const s=i;return await t1(s),(await Au(s,n)).token}async function t1(i){const{registrationPromise:n}=await Pu(i);n&&await n}/**
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
 */function n1(i){if(!i||!i.options)throw Ql("App Configuration");if(!i.name)throw Ql("App Name");const n=["projectId","apiKey","appId"];for(const s of n)if(!i.options[s])throw Ql(s);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function Ql(i){return gr.create("missing-app-config-values",{valueName:i})}/**
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
 */const Bp="installations",r1="installations-internal",i1=i=>{const n=i.getProvider("app").getImmediate(),s=n1(n),a=ri(n,"heartbeat");return{app:n,appConfig:s,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},s1=i=>{const n=i.getProvider("app").getImmediate(),s=ri(n,Bp).getImmediate();return{getId:()=>Z0(s),getToken:c=>e1(s,c)}};function o1(){_n(new rn(Bp,i1,"PUBLIC")),_n(new rn(r1,s1,"PRIVATE"))}o1();en(Tp,Tu);en(Tp,Tu,"esm2020");/**
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
 */const Vo="analytics",a1="firebase_id",l1="origin",u1=60*1e3,c1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ru="https://www.googletagmanager.com/gtag/js";/**
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
 */const Et=new mu("@firebase/analytics");/**
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
 */const d1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new vr("analytics","Analytics",d1);/**
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
 */function f1(i){if(!i.startsWith(Ru)){const n=Ct.create("invalid-gtag-resource",{gtagURL:i});return Et.warn(n.message),""}return i}function $p(i){return Promise.all(i.map(n=>n.catch(s=>s)))}function h1(i,n){let s;return window.trustedTypes&&(s=window.trustedTypes.createPolicy(i,n)),s}function p1(i,n){const s=h1("firebase-js-sdk-policy",{createScriptURL:f1}),a=document.createElement("script"),c=`${Ru}?l=${i}&id=${n}`;a.src=s?s?.createScriptURL(c):c,a.async=!0,document.head.appendChild(a)}function m1(i){let n=[];return Array.isArray(window[i])?n=window[i]:window[i]=n,n}async function g1(i,n,s,a,c,d){const h=a[c];try{if(h)await n[h];else{const w=(await $p(s)).find(T=>T.measurementId===c);w&&await n[w.appId]}}catch(p){Et.error(p)}i("config",c,d)}async function y1(i,n,s,a,c){try{let d=[];if(c&&c.send_to){let h=c.send_to;Array.isArray(h)||(h=[h]);const p=await $p(s);for(const w of h){const T=p.find(M=>M.measurementId===w),O=T&&n[T.appId];if(O)d.push(O);else{d=[];break}}}d.length===0&&(d=Object.values(n)),await Promise.all(d),i("event",a,c||{})}catch(d){Et.error(d)}}function v1(i,n,s,a){async function c(d,...h){try{if(d==="event"){const[p,w]=h;await y1(i,n,s,p,w)}else if(d==="config"){const[p,w]=h;await g1(i,n,s,a,p,w)}else if(d==="consent"){const[p,w]=h;i("consent",p,w)}else if(d==="get"){const[p,w,T]=h;i("get",p,w,T)}else if(d==="set"){const[p]=h;i("set",p)}else i(d,...h)}catch(p){Et.error(p)}}return c}function w1(i,n,s,a,c){let d=function(...h){window[a].push(arguments)};return window[c]&&typeof window[c]=="function"&&(d=window[c]),window[c]=v1(d,i,n,s),{gtagCore:d,wrappedGtag:window[c]}}function _1(i){const n=window.document.getElementsByTagName("script");for(const s of Object.values(n))if(s.src&&s.src.includes(Ru)&&s.src.includes(i))return s;return null}/**
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
 */const E1=30,S1=1e3;class I1{constructor(n={},s=S1){this.throttleMetadata=n,this.intervalMillis=s}getThrottleMetadata(n){return this.throttleMetadata[n]}setThrottleMetadata(n,s){this.throttleMetadata[n]=s}deleteThrottleMetadata(n){delete this.throttleMetadata[n]}}const Hp=new I1;function k1(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function T1(i){const{appId:n,apiKey:s}=i,a={method:"GET",headers:k1(s)},c=c1.replace("{app-id}",n),d=await fetch(c,a);if(d.status!==200&&d.status!==304){let h="";try{const p=await d.json();p.error?.message&&(h=p.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:d.status,responseMessage:h})}return d.json()}async function C1(i,n=Hp,s){const{appId:a,apiKey:c,measurementId:d}=i.options;if(!a)throw Ct.create("no-app-id");if(!c){if(d)return{measurementId:d,appId:a};throw Ct.create("no-api-key")}const h=n.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new R1;return setTimeout(async()=>{p.abort()},u1),Wp({appId:a,apiKey:c,measurementId:d},h,p,n)}async function Wp(i,{throttleEndTimeMillis:n,backoffCount:s},a,c=Hp){const{appId:d,measurementId:h}=i;try{await P1(a,n)}catch(p){if(h)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:d,measurementId:h};throw p}try{const p=await T1(i);return c.deleteThrottleMetadata(d),p}catch(p){const w=p;if(!A1(w)){if(c.deleteThrottleMetadata(d),h)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${w?.message}]`),{appId:d,measurementId:h};throw p}const T=Number(w?.customData?.httpStatus)===503?bf(s,c.intervalMillis,E1):bf(s,c.intervalMillis),O={throttleEndTimeMillis:Date.now()+T,backoffCount:s+1};return c.setThrottleMetadata(d,O),Et.debug(`Calling attemptFetch again in ${T} millis`),Wp(i,O,a,c)}}function P1(i,n){return new Promise((s,a)=>{const c=Math.max(n-Date.now(),0),d=setTimeout(s,c);i.addEventListener(()=>{clearTimeout(d),a(Ct.create("fetch-throttle",{throttleEndTimeMillis:n}))})})}function A1(i){if(!(i instanceof sn)||!i.customData)return!1;const n=Number(i.customData.httpStatus);return n===429||n===500||n===503||n===504}class R1{constructor(){this.listeners=[]}addEventListener(n){this.listeners.push(n)}abort(){this.listeners.forEach(n=>n())}}async function N1(i,n,s,a,c){if(c&&c.global){i("event",s,a);return}else{const d=await n,h={...a,send_to:d};i("event",s,h)}}/**
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
 */async function D1(){if(Fh())try{await Uh()}catch(i){return Et.warn(Ct.create("indexeddb-unavailable",{errorInfo:i?.toString()}).message),!1}else return Et.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function O1(i,n,s,a,c,d,h){const p=C1(i);p.then(C=>{s[C.measurementId]=C.appId,i.options.measurementId&&C.measurementId!==i.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>Et.error(C)),n.push(p);const w=D1().then(C=>{if(C)return a.getId()}),[T,O]=await Promise.all([p,w]);_1(d)||p1(d,T.measurementId),c("js",new Date);const M=h?.config??{};return M[l1]="firebase",M.update=!0,O!=null&&(M[a1]=O),c("config",T.measurementId,M),T.measurementId}/**
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
 */class x1{constructor(n){this.app=n}_delete(){return delete es[this.app.options.appId],Promise.resolve()}}let es={},mh=[];const gh={};let Yl="dataLayer",L1="gtag",yh,Kp,vh=!1;function M1(){const i=[];if(Mh()&&i.push("This is a browser extension environment."),jy()||i.push("Cookies are not available."),i.length>0){const n=i.map((a,c)=>`(${c+1}) ${a}`).join(" "),s=Ct.create("invalid-analytics-context",{errorInfo:n});Et.warn(s.message)}}function F1(i,n,s){M1();const a=i.options.appId;if(!a)throw Ct.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(es[a]!=null)throw Ct.create("already-exists",{id:a});if(!vh){m1(Yl);const{wrappedGtag:d,gtagCore:h}=w1(es,mh,gh,Yl,L1);Kp=d,yh=h,vh=!0}return es[a]=O1(i,mh,gh,n,yh,Yl,s),new x1(i)}function U1(i=Bh()){i=on(i);const n=ri(i,Vo);return n.isInitialized()?n.getImmediate():V1(i)}function V1(i,n={}){const s=ri(i,Vo);if(s.isInitialized()){const c=s.getImmediate();if(hr(n,s.getOptions()))return c;throw Ct.create("already-initialized")}return s.initialize({options:n})}function b1(i,n,s,a){i=on(i),N1(Kp,es[i.app.options.appId],n,s,a).catch(c=>Et.error(c))}const wh="@firebase/analytics",_h="0.10.18";function z1(){_n(new rn(Vo,(n,{options:s})=>{const a=n.getProvider("app").getImmediate(),c=n.getProvider("installations-internal").getImmediate();return F1(a,c,s)},"PUBLIC")),_n(new rn("analytics-internal",i,"PRIVATE")),en(wh,_h),en(wh,_h,"esm2020");function i(n){try{const s=n.getProvider(Vo).getImmediate();return{logEvent:(a,c,d)=>b1(s,a,c,d)}}catch(s){throw Ct.create("interop-component-reg-failed",{reason:s})}}}z1();const j1={apiKey:"AIzaSyDJYN_1iv9hp6yPVkIBOmcyOKi0o_bU_XI",authDomain:"authentication-91426.firebaseapp.com",projectId:"authentication-91426",storageBucket:"authentication-91426.firebasestorage.app",messagingSenderId:"446357982184",appId:"1:446357982184:web:4eccfde37be54fd4c5b25d",measurementId:"G-8N7XDSWKFJ"},Gp=jh(j1),Ko=_0(Gp);U1(Gp);const B1=async(i,n)=>o_(Ko,i,n),$1=async(i,n)=>s_(Ko,i,n),qp=()=>Ko.signOut(),H1=["ayomade24@proton.me","famirojujoshua@gmail.com"],Qp=wt.createContext();function Nu(){return Xt.useContext(Qp)}function W1({children:i}){const[n,s]=Xt.useState(null),[a,c]=Xt.useState(!1),[d,h]=Xt.useState(null),[p,w]=Xt.useState(!0);return Xt.useEffect(()=>u_(Ko,O=>{O?(s(O),c(!0),H1.includes(O.email)?h("admin"):h("user")):(s(null),c(!1),h(null)),w(!1)}),[]),q.jsx(Qp.Provider,{value:{currentUser:n,userLoggedIn:a,role:d,loading:p},children:!p&&i})}function K1(){const{register:i,handleSubmit:n,formState:{errors:s}}=Sy(),[a,c]=Xt.useState(!0),[d,h]=Xt.useState(!1),[p,w]=Xt.useState(""),T=M=>{M.preventDefault(),c(!a),w("")},O=async M=>{h(!0),w("");try{a?await $1(M.email,M.password):await B1(M.email,M.password)}catch(C){w(C.message)}finally{h(!1)}};return q.jsxs("div",{className:"form-section left",children:[q.jsxs("div",{className:"logo",children:[q.jsxs("div",{className:"decoration-logo",children:[q.jsx("div",{className:"yellow-logo"}),q.jsx("div",{className:"green-logo"})]}),"Push"]}),q.jsx("div",{className:"title",children:a?"Sign Up for Push":"Login to Push"}),q.jsxs("form",{onSubmit:n(O),children:[a&&q.jsxs("div",{className:"input-group-1",children:[q.jsxs("div",{className:"name-inputs",children:[q.jsx("label",{children:"First Name"}),q.jsx("input",{type:"text",placeholder:"First Name",...i("firstName",{required:"First name is required"})}),s.firstName&&q.jsx("p",{className:"error",children:s.firstName.message})]}),q.jsxs("div",{className:"name-inputs",children:[q.jsx("label",{children:"Last Name"}),q.jsx("input",{type:"text",placeholder:"Last Name",...i("lastName",{required:"Last name is required"})}),s.lastName&&q.jsx("p",{className:"error",children:s.lastName.message})]})]}),q.jsxs("div",{className:"input-group",children:[q.jsx("label",{children:"Email Address"}),q.jsx("input",{type:"email",placeholder:"Email Address",...i("email",{required:"Email is required",pattern:{value:/^\S+@\S+\.\S+$/,message:"Invalid email format"}})}),s.email&&q.jsx("p",{className:"error",children:s.email.message})]}),q.jsxs("div",{className:"input-group password-input",children:[q.jsx("label",{children:"Password"}),q.jsx("input",{type:"password",placeholder:"Password",...i("password",{required:"Password is required",minLength:{value:6,message:"Password must be at least 6 characters"}})}),s.password&&q.jsx("p",{className:"error",children:s.password.message})]}),p&&q.jsx("p",{className:"error",children:p}),q.jsx("button",{type:"submit",disabled:d,children:d?"Processing...":a?"Sign Up":"Login"})]}),q.jsx("div",{className:"terms",children:a?"By creating an account, you agree with our Terms of Service and Privacy Policy.":""}),q.jsxs("div",{className:"login-link",children:[a?"Already have an account? ":"Don't have an account? ",q.jsx("a",{href:"#",onClick:T,children:a?"Login":"Sign Up"})]})]})}function G1(){return q.jsx("div",{className:"form-section right-section",children:q.jsxs("div",{className:"decoration",children:[q.jsx("div",{className:"yellow"}),q.jsx("div",{className:"green"})]})})}const q1=()=>{const{currentUser:i}=Nu();return q.jsxs("div",{className:"welcome-screen",children:[q.jsx("h1",{children:"Admin Dashboard"}),q.jsxs("p",{children:["Welcome, ",i?.email]}),q.jsx("button",{onClick:qp,children:"Logout"})]})},Q1=()=>{const{currentUser:i}=Nu();return q.jsxs("div",{className:"welcome-screen",children:[q.jsx("h1",{children:"User Dashboard"}),q.jsxs("p",{children:["Welcome, ",i?.email]}),q.jsx("button",{onClick:qp,children:"Logout"})]})};function Y1(){const{userLoggedIn:i,role:n,loading:s}=Nu();return s?q.jsx("div",{children:"Loading..."}):q.jsx("div",{className:"auth-container",children:q.jsx("div",{className:"auth-form",children:i?n==="admin"?q.jsx(q1,{}):q.jsx(Q1,{}):q.jsxs(q.Fragment,{children:[q.jsx(K1,{}),q.jsx(G1,{})]})})})}const J1=Zg.createRoot(document.getElementById("root"));J1.render(q.jsx(W1,{children:q.jsx(Y1,{})}));
