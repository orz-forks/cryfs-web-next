(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/7Jz":function(e,t,n){"use strict";var r=n("9kyW"),a=n.n(r),o=n("IEa/"),l=n.n(o),i=n("/CgH"),c=n.n(i),s=n("wEkZ"),u=n.n(s),m=n("pcPB"),d=n.n(m),f=n("VcUl"),p=n.n(f),h=n("k8dj"),y=n.n(h),b=n("aS6o"),g=n.n(b),v=n("3vXJ"),E=n.n(v),w=n("ycuu"),O=n.n(w),k=n("qhOH"),x=n.n(k),j=n("Sc0N"),S=n.n(j),C=n("siI/"),T=n.n(C),M=n("xUnz"),D=n.n(M),_=n("7oM+"),P=n.n(_),N=n("ZiLf"),R=n.n(N),A=n("MX5s"),F=n.n(A);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){X(e,t,n[t])})}return e}function W(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var q=/([A-Z])/g,L=function(e){return"-".concat(e.toLowerCase())},B={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};var U=["Webkit","ms","Moz","O"];Object.keys(B).forEach(function(e){U.forEach(function(t){B[function(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}(t,e)]=B[e]})});var Y=function(e,t){return"number"==typeof t?B[e]?""+t:t+"px":""+t},G=function(e,t){return J(Y(e,t))},H=function(e,t){return a()(e).toString(36)},J=function(e){return"!"===e[e.length-10]&&" !important"===e.slice(-11)?e:"".concat(e," !important")},Z="undefined"!=typeof Map,V=function(){function e(){this.elements={},this.keyOrder=[]}var t=e.prototype;return t.forEach=function(e){for(var t=0;t<this.keyOrder.length;t++)e(this.elements[this.keyOrder[t]],this.keyOrder[t])},t.set=function(t,n,r){if(this.elements.hasOwnProperty(t)){if(r){var a=this.keyOrder.indexOf(t);this.keyOrder.splice(a,1),this.keyOrder.push(t)}}else this.keyOrder.push(t);if(null!=n){if(Z&&n instanceof Map||n instanceof e){var o=this.elements.hasOwnProperty(t)?this.elements[t]:new e;return n.forEach(function(e,t){o.set(t,e,r)}),void(this.elements[t]=o)}if(Array.isArray(n)||"object"!==I(n))this.elements[t]=n;else{for(var l=this.elements.hasOwnProperty(t)?this.elements[t]:new e,i=Object.keys(n),c=0;c<i.length;c+=1)l.set(i[c],n[i[c]],r);this.elements[t]=l}}else this.elements[t]=n},t.get=function(e){return this.elements[e]},t.has=function(e){return this.elements.hasOwnProperty(e)},t.addStyleType=function(t){var n=this;if(Z&&t instanceof Map||t instanceof e)t.forEach(function(e,t){n.set(t,e,!0)});else for(var r=Object.keys(t),a=0;a<r.length;a++)this.set(r[a],t[r[a]],!0)},e}(),K=["Webkit"],Q=["Moz"],$=["ms"],ee=["Webkit","Moz"],te=["Webkit","ms"],ne=["Webkit","Moz","ms"],re={plugins:[u.a,d.a,p.a,y.a,g.a,E.a,O.a,x.a,S.a,T.a,D.a,P.a,R.a,F.a],prefixMap:{transform:te,transformOrigin:te,transformOriginX:te,transformOriginY:te,backfaceVisibility:K,perspective:K,perspectiveOrigin:K,transformStyle:K,transformOriginZ:K,animation:K,animationDelay:K,animationDirection:K,animationFillMode:K,animationDuration:K,animationIterationCount:K,animationName:K,animationPlayState:K,animationTimingFunction:K,appearance:ee,userSelect:ne,fontKerning:K,textEmphasisPosition:K,textEmphasis:K,textEmphasisStyle:K,textEmphasisColor:K,boxDecorationBreak:K,clipPath:K,maskImage:K,maskMode:K,maskRepeat:K,maskPosition:K,maskClip:K,maskOrigin:K,maskSize:K,maskComposite:K,mask:K,maskBorderSource:K,maskBorderMode:K,maskBorderSlice:K,maskBorderWidth:K,maskBorderOutset:K,maskBorderRepeat:K,maskBorder:K,maskType:K,textDecorationStyle:ee,textDecorationSkip:ee,textDecorationLine:ee,textDecorationColor:ee,filter:K,fontFeatureSettings:ee,breakAfter:ne,breakBefore:ne,breakInside:ne,columnCount:ee,columnFill:ee,columnGap:ee,columnRule:ee,columnRuleColor:ee,columnRuleStyle:ee,columnRuleWidth:ee,columns:ee,columnSpan:ee,columnWidth:ee,writingMode:te,flex:te,flexBasis:K,flexDirection:te,flexGrow:K,flexFlow:te,flexShrink:K,flexWrap:te,alignContent:K,alignItems:K,alignSelf:K,justifyContent:K,order:K,transitionDelay:K,transitionDuration:K,transitionProperty:K,transitionTimingFunction:K,backdropFilter:K,scrollSnapType:te,scrollSnapPointsX:te,scrollSnapPointsY:te,scrollSnapDestination:te,scrollSnapCoordinate:te,shapeImageThreshold:K,shapeImageMargin:K,shapeImageOutside:K,hyphens:ne,flowInto:te,flowFrom:te,regionFragment:te,textOrientation:K,boxSizing:Q,textAlignLast:Q,tabSize:Q,wrapFlow:$,wrapThrough:$,wrapMargin:$,touchAction:$,gridTemplateColumns:$,gridTemplateRows:$,gridTemplateAreas:$,gridTemplate:$,gridAutoColumns:$,gridAutoRows:$,gridAutoFlow:$,grid:$,gridRowStart:$,gridColumnStart:$,gridRowEnd:$,gridRow:$,gridColumn:$,gridColumnEnd:$,gridColumnGap:$,gridRowGap:$,gridArea:$,gridGap:$,textSizeAdjust:te,borderImage:K,borderImageOutset:K,borderImageRepeat:K,borderImageSlice:K,borderImageSource:K,borderImageWidth:K}},ae=c()(re),oe=[function(e,t,n){return":"!==e[0]?null:n(t+e)},function(e,t,n){if("@"!==e[0])return null;var r=n(t);return["".concat(e,"{").concat(r.join(""),"}")]}],le=function e(t,n,r,a,o){for(var l=new V,i=0;i<n.length;i++)l.addStyleType(n[i]);var c=new V,s=[];l.forEach(function(n,l){r.some(function(i){var c=i(l,t,function(t){return e(t,[n],r,a,o)});if(null!=c)return Array.isArray(c)?s.push.apply(s,W(c)):(console.warn("WARNING: Selector handlers should return an array of rules.Returning a string containing multiple rules is deprecated.",i),s.push("@media all {".concat(c,"}"))),!0})||c.set(l,n,!0)});var u=se(t,c,a,o,r);return u&&s.unshift(u),s},ie=function(e,t,n){return"".concat((r=e,a=r.replace(q,L),"m"===a[0]&&"s"===a[1]&&"-"===a[2]?"-".concat(a):a),":").concat(n(e,t),";");var r,a},ce=function(e,t){return e[t]=!0,e},se=function(e,t,n,r,a){!function(e,t,n){if(t)for(var r=Object.keys(t),a=0;a<r.length;a++){var o=r[a];e.has(o)&&e.set(o,t[o](e.get(o),n),!1)}}(t,n,a);var o=Object.keys(t.elements).reduce(ce,Object.create(null)),l=ae(t.elements),i=Object.keys(l);if(i.length!==t.keyOrder.length)for(var c=0;c<i.length;c++)if(!o[i[c]]){var s=void 0;if((s="W"===i[c][0]?i[c][6].toLowerCase()+i[c].slice(7):"o"===i[c][1]?i[c][3].toLowerCase()+i[c].slice(4):i[c][2].toLowerCase()+i[c].slice(3))&&o[s]){var u=t.keyOrder.indexOf(s);t.keyOrder.splice(u,0,i[c])}else t.keyOrder.unshift(i[c])}for(var m=!1===r?Y:G,d=[],f=0;f<t.keyOrder.length;f++){var p=t.keyOrder[f],h=l[p];if(Array.isArray(h))for(var y=0;y<h.length;y++)d.push(ie(p,h[y],m));else d.push(ie(p,h,m))}return d.length?"".concat(e,"{").concat(d.join(""),"}"):""},ue=null,me={fontFamily:function e(t){if(Array.isArray(t)){var n={};return t.forEach(function(t){n[e(t)]=!0}),Object.keys(n).join(",")}return"object"===I(t)?(ye(t.src,"@font-face",[t],!1),'"'.concat(t.fontFamily,'"')):t},animationName:function e(t,n){if(Array.isArray(t))return t.map(function(t){return e(t,n)}).join(",");if("object"===I(t)){var r="keyframe_".concat((o=t,H(JSON.stringify(o)))),a="@keyframes ".concat(r,"{");return t instanceof V?t.forEach(function(e,t){a+=le(t,[e],n,me,!1).join("")}):Object.keys(t).forEach(function(e){a+=le(e,[t[e]],n,me,!1).join("")}),he(r,[a+="}"]),r}return t;var o}},de={},fe=[],pe=!1,he=function(e,t){var n;if(!de[e]){if(!pe){if("undefined"==typeof document)throw new Error("Cannot automatically buffer without a document");pe=!0,l()(ge)}(n=fe).push.apply(n,W(t)),de[e]=!0}},ye=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];if(!de[e]){var o=le(t,n,a,me,r);he(e,o)}},be=function(){pe=!1;var e=fe;return fe=[],e},ge=function(){var e=be();e.length>0&&function(e){if(null==ue&&null==(ue=document.querySelector("style[data-aphrodite]"))){var t=document.head||document.getElementsByTagName("head")[0];(ue=document.createElement("style")).type="text/css",ue.setAttribute("data-aphrodite",""),t.appendChild(ue)}var n=ue.styleSheet||ue.sheet;if(n.insertRule){var r=n.cssRules.length;e.forEach(function(e){try{n.insertRule(e,r),r+=1}catch(t){}})}else ue.innerText=(ue.innerText||"")+e.join("")}(e)},ve=function(e,t,n){var r,a=[],o=[],l=function e(t,n,r,a){for(var o=0;o<t.length;o+=1)t[o]&&(Array.isArray(t[o])?a+=e(t[o],n,r,a):(n.push(t[o]._name),r.push(t[o]._definition),a+=t[o]._len));return a}(t,a,o,0);return 0===a.length?"":(r=1===a.length?"_".concat(a[0]):"_".concat(H(a.join())).concat((l%36).toString(36)),ye(r,".".concat(r),o,e,n),r)},Ee=function(e,t){return"".concat(t,"_").concat(H(e))},we=H,Oe={create:function(e){for(var t={},n=Object.keys(e),r=0;r<n.length;r+=1){var a=n[r],o=e[a],l=JSON.stringify(o);t[a]={_len:l.length,_name:we(l,a),_definition:o}}return t},rehydrate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.forEach(function(e){de[e]=!0})}},ke="undefined"!=typeof window?null:{renderStatic:function(e){return fe=[],de={},pe=!1,ue=null,function(){if(pe)throw new Error("Cannot buffer while already buffering");pe=!0}(),{html:e(),css:{content:be().join(""),renderedClassNames:Object.keys(de)}}}},xe=null;n.d(t,"a",function(){return Se}),n.d(t,"b",function(){return Ce});var je=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oe;return{StyleSheet:z({},Oe,{extend:function(r){var a=r.map(function(e){return e.selectorHandler}).filter(function(e){return e});return e(t,n.concat(a))}}),StyleSheetServer:ke,StyleSheetTestUtils:xe,minify:function(e){we=e?H:Ee},css:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return ve(t,r,n)},flushToStyleTag:ge,injectAndGetClassName:ve,defaultSelectorHandlers:oe}}(!0),Se=je.StyleSheet,Ce=(je.StyleSheetServer,je.StyleSheetTestUtils,je.css);je.minify,je.flushToStyleTag,je.injectAndGetClassName,je.defaultSelectorHandlers},"/tz4":function(e,t,n){"use strict";t.__esModule=!0;var r=o(n("q1tI")),a=o(n("acCH"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||a.default,e.exports=t.default},"2mcs":function(e,t,n){"use strict";var r=n("ohE5");e.exports=r},"4mXO":function(e,t,n){e.exports=n("7TPF")},"6qfE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("RSLW");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var a=n("Fobl");function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(a).default}})},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},BZnI:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("PgRs"),l=n.n(o),i=n("P6Ho"),c=n.n(i);t.a=function(e){return a.a.createElement(l.a,null,a.a.createElement("meta",{property:"og:title",content:e.title}),a.a.createElement("meta",{property:"og:url",content:e.url}),a.a.createElement("meta",{property:"og:type",content:void 0===e.type?"website":e.type}),a.a.createElement("meta",{property:"og:image",content:c.a}),a.a.createElement("meta",{property:"og:description",content:e.description}),a.a.createElement("meta",{name:"description",content:e.description}),a.a.createElement("title",null,e.title))}},ElxX:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("1Yj4"),l=n("Rz3U");t.a=function(e){var t=l.StyleSheet.create({header:{fontSize:"70px"}});return a.a.createElement("section",e,a.a.createElement(o.a,null,a.a.createElement("h1",{className:Object(l.css)(t.header)},e.title),void 0!==e.subtitle&&a.a.createElement("p",{className:"lead"},e.subtitle)))}},Fobl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=i(n("q1tI")),o=i(n("/tz4")),l=i(n("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}var c=(0,o.default)({}),s=c.Provider,u=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return a.default.createElement(u,null,function(t){return a.default.createElement(e,r({components:n||t},o))})}};var m=function(e){var t=e.components,n=e.children;return a.default.createElement(s,{value:t},n)};m.propTypes={components:l.default.object.isRequired,children:l.default.element.isRequired},t.default=m},LMb0:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,l=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,u=s&&s(Object);e.exports=function e(t,n,m){if("string"!=typeof n){if(u){var d=s(n);d&&d!==u&&e(t,d,m)}var f=l(n);i&&(f=f.concat(i(n)));for(var p=0;p<f.length;++p){var h=f[p];if(!(r[h]||a[h]||m&&m[h])){var y=c(n,h);try{o(t,h,y)}catch(b){}}}return t}return t}},P6Ho:function(e,t){e.exports="/_next/static/images/logo-ecb2b7779b3e0735f8a5d65255ff594a.png"},RSLW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("q1tI"),l=s(o),i=s(n("LMb0")),c=n("Fobl");function s(e){return e&&e.__esModule?e:{default:e}}var u={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,c=e.children,s=e.components,m=void 0===s?{}:s,d=e.Layout,f=e.layoutProps,p=m[n+"."+t]||m[t]||u[t]||t;return d?((0,i.default)(this,d),l.default.createElement(d,r({components:m},f),l.default.createElement(p,o,c))):l.default.createElement(p,o,c)}}]),t}();t.default=(0,c.withMDXComponents)(m)},acCH:function(e,t,n){"use strict";t.__esModule=!0;var r=n("q1tI"),a=(l(r),l(n("17x9"))),o=l(n("fZtv"));l(n("2mcs"));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=1073741823;t.default=function(e,t){var n,l,m="__create-react-context-"+(0,o.default)()+"__",d=function(e){function n(){var t,r,a,o;i(this,n);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return t=r=c(this,e.call.apply(e,[this].concat(s))),r.emitter=(a=r.props.value,o=[],{on:function(e){o.push(e)},off:function(e){o=o.filter(function(t){return t!==e})},get:function(){return a},set:function(e,t){a=e,o.forEach(function(e){return e(a,t)})}}),c(r,t)}return s(n,e),n.prototype.getChildContext=function(){var e;return(e={})[m]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,a=void 0;((o=n)===(l=r)?0!==o||1/o==1/l:o!=o&&l!=l)?a=0:(a="function"==typeof t?t(n,r):u,0!=(a|=0)&&this.emitter.set(e.value,a))}var o,l},n.prototype.render=function(){return this.props.children},n}(r.Component);d.childContextTypes=((n={})[m]=a.default.object.isRequired,n);var f=function(t){function n(){var e,r;i(this,n);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return e=r=c(this,t.call.apply(t,[this].concat(o))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!=((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},c(r,e)}return s(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?u:t},n.prototype.componentDidMount=function(){this.context[m]&&this.context[m].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?u:e},n.prototype.componentWillUnmount=function(){this.context[m]&&this.context[m].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[m]?this.context[m].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return f.contextTypes=((l={})[m]=a.default.object,l),{Provider:d,Consumer:f}},e.exports=t.default},ceNu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial",function(){var e=n("fo0L");return{page:e.default||e}}])},fZtv:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n("yLpj"))},fo0L:function(e,t,n){"use strict";n.r(t);var r=n("qNsG"),a=n("q1tI"),o=n.n(a),l=n("6qfE"),i=n("nNDh"),c=n("1Yj4"),s=n("ELrk"),u=n("sDqW"),m=n("uz0E"),d=n("17x9"),f=n.n(d),p=n("TSYQ"),h=n.n(p),y=n("33Jr"),b=n("gwnE"),g={children:f.a.node,className:f.a.string,closeClassName:f.a.string,closeAriaLabel:f.a.string,cssModule:f.a.object,color:f.a.string,fade:f.a.bool,isOpen:f.a.bool,toggle:f.a.func,tag:y.m,transition:f.a.shape(b.a.propTypes),innerRef:f.a.oneOfType([f.a.object,f.a.string,f.a.func])},v={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(m.a)({},b.a.defaultProps,{unmountOnExit:!0})};function E(e){var t=e.className,n=e.closeClassName,r=e.closeAriaLabel,a=e.cssModule,l=e.tag,i=e.color,c=e.isOpen,d=e.toggle,f=e.children,p=e.transition,g=e.fade,v=e.innerRef,E=Object(u.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),w=Object(y.i)(h()(t,"alert","alert-"+i,{"alert-dismissible":d}),a),O=Object(y.i)(h()("close",n),a),k=Object(m.a)({},b.a.defaultProps,p,{baseClass:g?p.baseClass:"",timeout:g?p.timeout:0});return o.a.createElement(b.a,Object(s.a)({},E,k,{tag:l,className:w,in:c,role:"alert",innerRef:v}),d?o.a.createElement("button",{type:"button",className:O,"aria-label":r,onClick:d},o.a.createElement("span",{"aria-hidden":"true"},"×")):null,f)}E.propTypes=g,E.defaultProps=v;var w=E,O=n("ok1R"),k=n("rhny"),x={tag:y.m,inverse:f.a.bool,color:f.a.string,block:Object(y.f)(f.a.bool,'Please use the props "body"'),body:f.a.bool,outline:f.a.bool,className:f.a.string,cssModule:f.a.object,innerRef:f.a.oneOfType([f.a.object,f.a.string,f.a.func])},j=function(e){var t=e.className,n=e.cssModule,r=e.color,a=e.block,l=e.body,i=e.inverse,c=e.outline,m=e.tag,d=e.innerRef,f=Object(u.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),p=Object(y.i)(h()(t,"card",!!i&&"text-white",!(!a&&!l)&&"card-body",!!r&&(c?"border":"bg")+"-"+r),n);return o.a.createElement(m,Object(s.a)({},f,{className:p,ref:d}))};j.propTypes=x,j.defaultProps={tag:"div"};var S=j,C=n("sOKU"),T=n("ElxX"),M=n("5Yp1"),D=n("BZnI"),_=n("YFqc"),P=n.n(_),N=n("Rz3U"),R=N.StyleSheet.create({console:{backgroundColor:"black",color:"#eee",padding:"15px"},linestart:{color:"#008800",marginRight:"0.5em","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"},line:{width:"100%"},output:{color:"#888"}}),A=function(e){return o.a.createElement("pre",{className:Object(N.css)(R.console)},e.children)},F=function(e){return o.a.createElement("div",{className:Object(N.css)(R.line)},o.a.createElement("span",{className:Object(N.css)(R.linestart)},"$"),e.children)},I=function(e){return o.a.createElement("div",{className:Object(N.css)(R.line,R.output)},e.children)};t.default=function(e){var t=e.components;Object(r.a)(e,["components"]);return o.a.createElement(l.MDXTag,{name:"wrapper",components:t},o.a.createElement(D.a,{title:"CryFS: Tutorial",url:"https://www.cryfs.org/tutorial",type:"article",description:"A quick and easy introduction into the basic usage of CryFS. CryFS encrypts your Dropbox and protects you against hackers and data leaks. It also works well together with other cloud providers."}),o.a.createElement(M.a,null,o.a.createElement(i.a,{start_index:1},o.a.createElement(T.a,{title:"Tutorial",subtitle:"CryFS is very easy to use. Let us show you how."}),o.a.createElement("section",null,o.a.createElement(c.a,null,o.a.createElement(l.MDXTag,{name:"h2",components:t},"Install CryFS"),o.a.createElement(l.MDXTag,{name:"p",components:t},"See ",o.a.createElement(P.a,{href:"/#download"},o.a.createElement("a",null,"Download Instructions")),"."))),o.a.createElement("section",null,o.a.createElement(c.a,null,o.a.createElement(l.MDXTag,{name:"h2",components:t},"Setup an encrypted directory"),o.a.createElement(l.MDXTag,{name:"p",components:t},"Once installed, you can create an encrypted directory by calling ",o.a.createElement("kbd",null,"cryfs basedir mountdir"),".\nYou can call the directories however you like, we chose ",o.a.createElement("var",null,"basedir")," and ",o.a.createElement("var",null,"mountdir")," for demonstration purposes.\nIf the corresponding directories don't exist yet, CryFS will offer to create them for you."),o.a.createElement(A,null,o.a.createElement(F,null,"cryfs basedir mountdir")),o.a.createElement(l.MDXTag,{name:"p",components:t},"This will ask you some questions about the configuration of your encrypted directory.\nFor now, we just say yes when we're asked whether to use the default settings.\nCryFS will also ask you for a password and then you're good to go."),o.a.createElement(l.MDXTag,{name:"p",components:t},"You can modify files and directories in the ",o.a.createElement("var",null,"mountdir")," directory.\nCryFS will then encrypt them and store the encrypted data in the ",o.a.createElement("var",null,"basedir")," directory.\nThe ",o.a.createElement("var",null,"mountdir")," directory is a virtual directory, meaning it doesn't actually exist on your harddisk,\nbut is provided by CryFS.\nWhenever you access files or directories in it, CryFS handles the decryption in the background, so that you can work with ",o.a.createElement("var",null,"mountdir")," as if it was a real directory.\nThis way, even if someone steals your harddisk, your data is still secure, since they can't decrypt it."))),o.a.createElement("section",null,o.a.createElement(c.a,null,o.a.createElement(l.MDXTag,{name:"h2",components:t},"Using the encrypted directory"),o.a.createElement(l.MDXTag,{name:"p",components:t},"You can work in ",o.a.createElement("var",null,"mountdir"),", add files to it, modify them, add subdirectories, and do whatever you want with it.\nEverything you store inside will be encrypted and stored in ",o.a.createElement("var",null,"basedir"),".\nThe unencrypted content of ",o.a.createElement("var",null,"mountdir")," will never be stored to the harddisk, so everything on your harddisk is encrypted.\nCryFS uses an encryption scheme that doesn't only encrypt file contents, but also the file sizes, file metadata and directory structure is encrypted.\nLet's take a look."),o.a.createElement(l.MDXTag,{name:"p",components:t},"First, we create a file and a directory in ",o.a.createElement("var",null,"mountdir"),"."),o.a.createElement(A,null,o.a.createElement(F,null,"cd mountdir"),o.a.createElement(F,null,'echo "My file content" > myfile'),o.a.createElement(F,null,"mkdir mydirectory")),o.a.createElement(l.MDXTag,{name:"p",components:t},"Now we check that the file and the directory exist and that the file has the content we just added to it."),o.a.createElement(A,null,o.a.createElement(F,null,"ls"),o.a.createElement(I,null,"mydirectory myfile"),o.a.createElement(F,null,"cat myfile"),o.a.createElement(I,null,"My file content")),o.a.createElement(l.MDXTag,{name:"p",components:t},"If we look into the ",o.a.createElement("var",null,"basedir"),", we see some cryptic files that contain the encrypted data of the ",o.a.createElement("var",null,"mountdir")," directory."),o.a.createElement(A,null,o.a.createElement(F,null,"ls ../basedir"),o.a.createElement(I,null,"[some encrypted files]")),o.a.createElement(l.MDXTag,{name:"p",components:t},"Let's go back and unmount the encrypted directory."),o.a.createElement(A,null,o.a.createElement(F,null,"cd .."),o.a.createElement(F,null,"cryfs-unmount mountdir")),o.a.createElement(w,{color:"info"},o.a.createElement(l.MDXTag,{name:"p",components:t},o.a.createElement(l.MDXTag,{name:"strong",components:t,parentName:"p"},"Note"),": On CryFS versions 0.9.x, use this command instead:"),o.a.createElement(A,null,o.a.createElement(F,null,"cd .."),o.a.createElement(F,null,"fusermount -u mountdir"))),o.a.createElement(l.MDXTag,{name:"p",components:t},"Now, CryFS isn't running anymore, which means we cannot access our data anymore. The ",o.a.createElement("var",null,"mountdir")," is empty."),o.a.createElement(A,null,o.a.createElement(F,null,"ls mountdir"),o.a.createElement(I,null,"[no output because directory empty]")),o.a.createElement(l.MDXTag,{name:"p",components:t},"But don't worry, if we look at the ",o.a.createElement("var",null,"basedir"),", everything is still there, it is only encrypted."),o.a.createElement(A,null,o.a.createElement(F,null,"ls basedir"),o.a.createElement(I,null,"[some encrypted files]")),o.a.createElement(l.MDXTag,{name:"p",components:t},"When we start CryFS again, we can access our files again."),o.a.createElement(A,null,o.a.createElement(F,null,"cryfs basedir mountdir"),o.a.createElement(F,null,"ls mountdir"),o.a.createElement(I,null,"mydirectory myfile"),o.a.createElement(F,null,"cat mountdir/myfile"),o.a.createElement(I,null,"My file content")))),o.a.createElement("section",null,o.a.createElement(c.a,null,o.a.createElement(l.MDXTag,{name:"h2",components:t},"Using CryFS together with Dropbox"),o.a.createElement(l.MDXTag,{name:"p",components:t},"Although CryFS can also be used to just encrypt files locally, for example to protect against harddrive theft,\nits main purpose is to be used together with cloud storage providers like Dropbox.\nIt should work well together with any cloud storage provider that uses a local synchronization folder."),o.a.createElement(l.MDXTag,{name:"p",components:t},"First, setup the Dropbox client to synchronize your cloud files to a local folder.\nIn this tutorial, we'll assume that folder is called ",o.a.createElement("var",null,"dropbox"),"."),o.a.createElement(l.MDXTag,{name:"p",components:t},"Then, we start CryFS.\nSince we only want to upload the encrypted files, we have to put the ",o.a.createElement("var",null,"basedir")," into the ",o.a.createElement("var",null,"dropbox")," folder,\nso Dropbox will synchronize it.\nIf ",o.a.createElement("var",null,"basedir")," or ",o.a.createElement("var",null,"mountdir")," don't exist yet, CryFS will ask us whether it should create them.\nWe answer to that question with yes."),o.a.createElement(A,null,o.a.createElement(F,null,"cryfs dropbox/basedir mountdir")),o.a.createElement(w,{color:"warning"},o.a.createElement("b",null,"Warning!"),"  Take care that you don't put the ",o.a.createElement("var",null,"mountdir")," into the ",o.a.createElement("var",null,"dropbox")," folder, because otherwise Dropbox would also upload the unencrypted files from ",o.a.createElement("var",null,"mountdir"),"."),o.a.createElement(l.MDXTag,{name:"p",components:t},"Now, everything we write to ",o.a.createElement("var",null,"mountdir")," will be automatically encrypted,\nthe encrypted data will be written to ",o.a.createElement("var",null,"dropbox/basedir"),", where the Dropbox client will pick it up\nand upload it to the cloud."),o.a.createElement(l.MDXTag,{name:"p",components:t},"As before, let's add a file to it."),o.a.createElement(A,null,o.a.createElement(F,null,'echo "My file content" > mountdir/myfile')),o.a.createElement(l.MDXTag,{name:"p",components:t},"To check that synchronization works, we can add a second client on another computer.\nInstall CryFS and the Dropbox client and set Dropbox up to synchronize to a local folder.\nWe'll assume you called it ",o.a.createElement("var",null,"dropbox")," again."),o.a.createElement(l.MDXTag,{name:"p",components:t},"If it is set up correctly, there should be a folder ",o.a.createElement("var",null,"dropbox/basedir"),".\nYou might have to wait some seconds for Dropbox to finish synchronization."),o.a.createElement(A,null,o.a.createElement(F,null,"ls dropbox"),o.a.createElement(I,null,"[output contains basedir]")),o.a.createElement(l.MDXTag,{name:"p",components:t},"Then, we start CryFS."),o.a.createElement(A,null,o.a.createElement(F,null,"cryfs dropbox/basedir mountdir")),o.a.createElement(l.MDXTag,{name:"p",components:t},"Since ",o.a.createElement("var",null,"mountdir")," doesn't exist yet on the second client, CryFS will ask whether it should create it.\nWe answer to that question with yes."),o.a.createElement(l.MDXTag,{name:"p",components:t},"If we now look into ",o.a.createElement("var",null,"mountdir")," on the second client, we see the file we created on the first computer."),o.a.createElement(A,null,o.a.createElement(F,null,"ls mountdir"),o.a.createElement(I,null,"myfile"),o.a.createElement(F,null,"cat mountdir/myfile"),o.a.createElement(I,null,"My file content")),o.a.createElement(l.MDXTag,{name:"p",components:t},"You can play around with your setup now. As long as CryFS and Dropbox are running on both computers,\neverything you modify in one of the ",o.a.createElement("var",null,"mountdir")," directories will automatically be synchronized to\nthe ",o.a.createElement("var",null,"mountdir")," on the other computer, while Dropbox only sees the encrypted data."))),o.a.createElement("section",null,o.a.createElement(c.a,null,o.a.createElement(O.a,null,o.a.createElement(k.a,{style:{marginTop:"20px"},md:{size:8,offset:2}},o.a.createElement(S,{body:!0,style:{backgroundColor:"#f5f5f5",borderColor:"#e3e3e3"}},o.a.createElement("div",{className:"text-center"},o.a.createElement("p",{className:"lead"},"Try it out and"),o.a.createElement(P.a,{href:"/#download"},o.a.createElement(C.a,{color:"primary",size:"lg"},"Download CryFS")))))))))))}},gwnE:function(e,t,n){"use strict";var r=n("ELrk"),a=n("sDqW"),o=n("uz0E"),l=n("q1tI"),i=n.n(l),c=n("17x9"),s=n.n(c),u=n("TSYQ"),m=n.n(u),d=n("1w3K"),f=n("33Jr"),p=Object(o.a)({},d.Transition.propTypes,{children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),tag:f.m,baseClass:s.a.string,baseClassActive:s.a.string,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])}),h=Object(o.a)({},d.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:f.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function y(e){var t=e.tag,n=e.baseClass,o=e.baseClassActive,l=e.className,c=e.cssModule,s=e.children,u=e.innerRef,p=Object(a.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),h=Object(f.k)(p,f.a),y=Object(f.j)(p,f.a);return i.a.createElement(d.Transition,h,function(e){var a="entered"===e,d=Object(f.i)(m()(l,n,a&&o),c);return i.a.createElement(t,Object(r.a)({className:d},y,{ref:u}),s)})}y.propTypes=p,y.defaultProps=h,t.a=y},nNDh:function(e,t,n){"use strict";var r=n("/7Jz"),a=n("q1tI"),o=n.n(a);t.a=function(e){var t=[r.a.create({section:{paddingTop:"50px",paddingBottom:"50px",background:"white",padding:"50px 0px"}}),r.a.create({section:{paddingTop:"50px",paddingBottom:"50px",background:"#c2e1f2",padding:"50px 0px"}})],n=void 0===e.start_index?0:e.start_index;return o.a.createElement(o.a.Fragment,null," ",o.a.Children.map(e.children,function(e){var a=e.props.className;a?a+=" ":a="";var l=t[n];return n=(n+1)%t.length,o.a.cloneElement(e,{className:a+Object(r.b)(l.section)})})," ")}},ohE5:function(e,t,n){"use strict";function r(e){return function(){return e}}var a=function(){};a.thatReturns=r,a.thatReturnsFalse=r(!1),a.thatReturnsTrue=r(!0),a.thatReturnsNull=r(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(e){return e},e.exports=a},qNsG:function(e,t,n){"use strict";var r=n("4mXO"),a=n.n(r),o=n("pLtp"),l=n.n(o);function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,a={},o=l()(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(a.a){var i=a()(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",function(){return i})},sOKU:function(e,t,n){"use strict";var r=n("ELrk"),a=n("sDqW"),o=n("tEjU"),l=n("BRRx"),i=n("q1tI"),c=n.n(i),s=n("17x9"),u=n.n(s),m=n("TSYQ"),d=n.n(m),f=n("33Jr"),p={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(l.a)(Object(l.a)(n))),n}Object(o.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],o=e.block,l=e.className,i=e.close,s=e.cssModule,u=e.color,m=e.outline,p=e.size,h=e.tag,y=e.innerRef,b=Object(a.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&void 0===b.children&&(b.children=c.a.createElement("span",{"aria-hidden":!0},"×"));var g="btn"+(m?"-outline":"")+"-"+u,v=Object(f.i)(d()(l,{close:i},i||"btn",i||g,!!p&&"btn-"+p,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),s);b.href&&"button"===h&&(h="a");var E=i?"Close":null;return c.a.createElement(h,Object(r.a)({type:"button"===h&&b.onClick?"button":void 0},b,{className:v,ref:y,onClick:this.onClick,"aria-label":n||E}))},t}(c.a.Component);h.propTypes=p,h.defaultProps={color:"secondary",tag:"button"},t.a=h}},[["ceNu",1,0]]]);