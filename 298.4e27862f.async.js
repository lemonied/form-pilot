"use strict";(self.webpackChunkform_pilot=self.webpackChunkform_pilot||[]).push([[298],{98231:function(L,F,g){g.r(F),g.d(F,{Col:function(){return N},Row:function(){return b}});var W=g(68400),p=g.n(W),B=g(41686),V,C,A=function(R){return typeof R=="number"?"".concat(R,"px"):R},b=B.default.div(V||(V=p()([`
  display: flex;
  flex-wrap: wrap;
  align-items: `,`;
  justify-content: `,`;
  gap: `,`;
`])),function(y){var R;return(R=y.$align)!==null&&R!==void 0?R:"center"},function(y){var R;return(R=y.$justify)!==null&&R!==void 0?R:"unset"},function(y){var R;return(R=A(y.$gap))!==null&&R!==void 0?R:"unset"}),N=B.default.div(C||(C=p()([`
  flex: `,`;
`])),function(y){var R;return(R=y.$flex)!==null&&R!==void 0?R:"0 0 auto"})},67191:function(L,F,g){g.r(F),g.d(F,{Input:function(){return C}});var W=g(97857),p=g.n(W),B=g(67294),V=g(85893),C=function(b){var N=b;if("value"in b){var y;N=p()(p()({},b),{},{value:(y=b.value)!==null&&y!==void 0?y:""})}return(0,V.jsx)("input",p()({},N))}},78944:function(L,F,g){g.r(F);var W=g(97857),p=g.n(W),B=g(13769),V=g.n(B),C=g(67294),A=g(26193),b=g(85893),N=["label"];F.default=function(y){var R=y.label,T=V()(y,N),te=A.default.useControl(y.control);return(0,b.jsxs)("div",{children:[!!R&&(0,b.jsx)("span",{style:{marginRight:8},children:R}),(0,b.jsx)(A.default.Item,p()(p()({},T),{},{control:te})),(0,b.jsx)(A.default.Validation,{control:te,children:function(J){var $;return(0,b.jsx)("div",{children:J==null||($=J.results)===null||$===void 0?void 0:$.map(function(re,U){return(0,b.jsx)("span",{style:{color:re.type==="error"?"red":"orange"},children:re.message},U)})})}})]})}},26193:function(L,F,g){g.r(F),g.d(F,{Rules:function(){return Rn},default:function(){return En}});var W=g(97857),p=g.n(W),B=g(13769),V=g.n(B),C=g(67294),A=g(19632),b=g.n(A),N=g(15009),y=g.n(N),R=g(99289),T=g.n(R),te=g(52677),H=g.n(te),J=g(5574),$=g.n(J),re=g(12444),U=g.n(re),je=g(72004),Q=g.n(je),$e=g(9783),v=g.n($e),S="_STORE_INTERNAL_TOKEN_",w=function(a){return a.Group="group",a.List="list",a.Item="item",a}({}),X=function(e){if(typeof e!="undefined")return Array.isArray(e)?e.length?e:void 0:[e]},ae=function(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!e||!n||t&&e.length!==n.length?!1:e.every(function(r,o){return r===n[o]})},pe=function(e){var n=X(e),t=C.useRef(n);return(typeof n=="undefined"||typeof t.current=="undefined"||!ae(n,t.current,!0))&&(t.current=n),t.current},oe=function(){function a(){U()(this,a),v()(this,"listeners",[])}return Q()(a,[{key:"add",value:function(n){var t=this;return this.listeners.push(n),function(){t.remove(n)}}},{key:"remove",value:function(n){var t=this.listeners.indexOf(n);t>-1&&this.listeners.splice(t,1)}},{key:"trigger",value:function(n){this.listeners.forEach(function(t){return t(n)})}}]),a}(),Me=g(64599),he=g.n(Me);function Oe(a){return typeof a=="undefined"||a===null}function ge(a){if(a&&H()(a)==="object")return Array.isArray(a)?[]:{}}function G(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=a,t=!0,r=he()(e),o;try{for(r.s();!(o=r.n()).done;){var i,s=o.value;if(t=!Oe(n)&&Object.prototype.hasOwnProperty.call(n,s),n=(i=n)===null||i===void 0?void 0:i[s],!t)break}}catch(m){r.e(m)}finally{r.f()}return[n,t]}function Ce(a){return Array.isArray(a)?b()(a):Object.assign({},a)}function ye(a){return typeof a=="number"?[]:{}}function be(a,e,n){for(var t=Ce(a!=null?a:ye(e[0])),r=t,o=0;o<e.length;o+=1){var i,s=e[o];if(o===e.length-1)return r[s]=n,t;r[s]=Ce((i=r[s])!==null&&i!==void 0?i:ye(e[o+1])),r=r[s]}return t}function Le(a,e,n){for(var t=n,r=n,o=0;o<e.length&&(o===0&&!t&&(t=ge(a),r=t),!!r);o+=1){var i=e[o],s=G(a,e.slice(0,o+1)),m=$()(s,2),h=m[0],l=m[1];if(o===e.length-1){l&&(r[i]=h);break}var f=G(n,e.slice(0,o+1)),c=$()(f,2),u=c[0],d=c[1];d?r[i]=u:l&&(r[i]=ge(h)),r=r[i]}return t}function Fe(a,e,n){if(e>a.length-1||n>a.length-1)throw new Error("Out of range");var t=a[e],r=a[n];return a[n]=t,a[e]=r,a}function Te(a){if(H()(a)!=="object"||a===null)return!1;var e=Object.getPrototypeOf(a);return e===Object.prototype||e===null}function De(a,e){return e&&e.target&&H()(e.target)==="object"&&a in e.target?e.target[a]:e}var Ie=Symbol("control"),ke=function(){function a(){var e=this;U()(this,a),v()(this,"lock",!1),v()(this,"type",w.Item),v()(this,"parent",void 0),v()(this,"children",new Set),v()(this,"value",void 0),v()(this,"initialValue",void 0),v()(this,"namePaths",void 0),v()(this,"touched",!1),v()(this,"validator",function(){return Promise.resolve()}),v()(this,"validating",void 0),v()(this,"validationChange",new oe),v()(this,"validationErrors",void 0),v()(this,"validateMessages",void 0),v()(this,"valueChange",new oe),v()(this,"listChange",new oe),v()(this,"resetChange",new oe),v()(this,"stamp",void 0),v()(this,"_init",!1),v()(this,"setValidator",function(n){n?e.validator=n:e.validator=function(){return Promise.resolve()}}),v()(this,"getStrictValue",function(n){if(e.type===w.Item)return e.value;var t,r=n==null?void 0:n.map(X),o=e.getInitializedValue(),i=function s(m){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];m.forEach(function(l){var f=[].concat(b()(h),b()(l.namePaths));l.type===w.Item&&(!r||r.some(function(c){return!c||ae(c,f)}))&&(t=Le(o,f,t)),s(l.children,f)})};return i(e.children),t}),v()(this,"getName",function(){if(e.parent)return e.namePaths}),v()(this,"getFullName",function(){if(e.parent)return[].concat(b()(e.parent.getFullName()||[]),b()(e.namePaths))}),v()(this,"triggerValidationChange",function(){e.validationChange.trigger(e.validating),e.validating?e.validating.catch(function(n){return e.validationErrors=n}):e.validationErrors=void 0}),v()(this,"validateByEvent",function(n){var t=typeof n=="function"?n:e.validator;e.validating=t(e.internalControl),e.triggerValidationChange()}),v()(this,"validateOptionalThrow",function(){var n=T()(y()().mark(function t(r){var o,i,s,m;return y()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return o=r||{},i=o.thrownTypes,s=i===void 0?["error"]:i,e.validating=e.validator(e.internalControl),e.triggerValidationChange(),l.prev=3,l.next=6,e.validating;case 6:l.next=13;break;case 8:if(l.prev=8,l.t0=l.catch(3),m=l.t0.filter(function(f){return s.includes(f.type)}),!m.length){l.next=13;break}throw m;case 13:case"end":return l.stop()}},t,null,[[3,8]])}));return function(t){return n.apply(this,arguments)}}()),v()(this,"validate",function(){var n=T()(y()().mark(function t(r){return y()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.validateOptionalThrow(r);case 2:return i.abrupt("return",e.getStrictValue());case 3:case"end":return i.stop()}},t)}));return function(t){return n.apply(this,arguments)}}()),v()(this,"clearValidation",function(){e.validating=void 0,e.triggerValidationChange(),e.children.forEach(function(n){return n.clearValidation()})}),v()(this,"validateFields",function(){var n=T()(y()().mark(function t(r,o){var i,s,m;return y()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=[],s=function f(c,u,d){var I=u==null?void 0:u.map(X),P=d||{},x=P.recursive;if(!I){i.push(function(){return c.validateOptionalThrow(o)}),c.children.forEach(function(E){return f(E)});return}if(I.length){if(I.some(function(E){return!E})&&(i.push(function(){return c.validateOptionalThrow(o)}),x)){c.children.forEach(function(E){return f(E)});return}c.children.forEach(function(E){var _=I.filter(function(ne){return ae(E.namePaths,ne)});f(E,_.map(function(ne){return ne.slice(E.namePaths.length)}),d)})}},s(e,r,o),l.next=5,Promise.all(i.map(function(f){return f().catch(function(c){return c})}));case 5:if(m=l.sent.filter(Boolean),!m.length){l.next=8;break}throw m;case 8:return l.abrupt("return",e.getStrictValue(r));case 9:case"end":return l.stop()}},t)}));return function(t,r){return n.apply(this,arguments)}}()),v()(this,"getValidationErrors",function(){var n,t=((n=e.validationErrors)===null||n===void 0?void 0:n.slice())||[];if(e.children.forEach(function(r){var o=r.getValidationErrors();o&&t.push.apply(t,b()(o))}),t.length)return t}),v()(this,"manualSetValue",function(n){return e.setData({value:n}),e.clearValidation(),e.value}),v()(this,"setFieldValue",function(n,t){var r=X(n);if(!(!r||e.type===w.Item)){var o=e.get(r);o?o.setValue(t):e.setData({value:be(e.getInitializedValue(),r,t)})}}),v()(this,"isTouched",function(){return e.type===w.Item||e.touched?e.touched:Array.from(e.children).some(function(n){return n.isTouched()})}),v()(this,"reset",function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e.setData({value:e.getInitialValue(),preventCapturing:!0,preventBubbling:n}),e.resetChange.trigger(),e.touched=!1,e.children.forEach(function(t){return t.reset(!0)})}),v()(this,"triggerReset",function(){e.reset(),e.clearValidation()}),v()(this,"add",function(n,t){if(e.type!==w.List)throw new Error("".concat(e.type," has no method add."));e.listChange.trigger({type:"add",value:n,insertIndex:t})}),v()(this,"remove",function(n){if(e.type!==w.List)throw new Error("".concat(e.type," has no method remove."));e.listChange.trigger({type:"remove",index:n})}),v()(this,"move",function(n,t){if(e.type!==w.List)throw new Error("".concat(e.type," has no method move."));e.listChange.trigger({type:"move",from:n,to:t})}),v()(this,"get",function(n){var t=X(n);if(t){for(var r=0,o=Array.from(e.children);r<o.length;r++){var i=o[r];if(ae(i.namePaths,t)){var s=i.get(t.slice(i.namePaths.length));if(s)return s}}return}return e.internalControl}),v()(this,"control",{getValue:function(){return e.value},getStrictValue:this.getStrictValue,getName:this.getName,getFullName:this.getFullName,setValue:this.manualSetValue,setFieldValue:this.setFieldValue,isTouched:this.isTouched,reset:this.triggerReset,validate:this.validate,validateFields:this.validateFields,getValidationErrors:this.getValidationErrors,clearValidation:this.clearValidation,add:this.add,remove:this.remove,move:this.move,get:this.get,getStoreStype:function(){return e.type}}),v()(this,"internalControl",p()(p()({},this.control),{},v()({getStore:function(t){if(t===S)return e;throw new Error("For internal use only")}},Ie,!0)))}return Q()(a,[{key:"init",value:function(n){this.initialValue=n.value,!this._init&&(this.namePaths=n.namePaths,this.parent?this.setData({value:G(this.parent.value,this.namePaths)[0]}):this.setData({value:this.getInitialValue()}),this._init=!0)}},{key:"getInitialValue",value:function(){return this.parent?G(this.parent.getInitialValue(),this.namePaths)[0]:this.initialValue}},{key:"getInitializedValue",value:function(){return this.type===w.List&&!Array.isArray(this.value)?[]:this.type===w.Group&&!Te(this.value)?Object.assign({},this.value):this.value}},{key:"setNamePaths",value:function(n){this.namePaths=n,this.parent&&this.setData({value:G(this.parent.value,this.namePaths)[0]})}},{key:"setData",value:function(n){var t=this;if(!this.lock){this.lock=!0;var r=n.eventInterceptor,o=n.preventCapturing,i=n.preventBubbling,s=n.value,m=this.value,h=[];if(!i&&this.parent&&!this.parent.lock){var l=this.parent.value,f=G(this.parent.value,this.namePaths),c=$()(f,1),u=c[0];Object.is(u,s)||(l=be(this.parent.getInitializedValue(),this.namePaths,s)),this.parent.setData({value:l,eventInterceptor:function(I){h.push(I)}})}this.value=s,Object.is(this.value,m)||(h.push(function(){return t.valueChange.trigger({newValue:s,oldValue:m})}),o||this.children.forEach(function(d){d.lock||d.setData({value:G(t.value,d.namePaths)[0],eventInterceptor:function(P){h.push(P)}})})),typeof r=="function"?r(function(){return h.forEach(function(d){return d()})}):h.forEach(function(d){return d()}),this.lock=!1}}}]),a}();function Ae(a){return!!a&&H()(a)==="object"&&!!a[Ie]}function Ne(a,e){return a.replace(/\\?\$\{\w+\}/g,function(n){var t;if(n.startsWith("\\"))return n.slice(1);var r=n.slice(2,-1);return"".concat((t=e[r])!==null&&t!==void 0?t:"")})}var Y=Q()(function a(e){U()(this,a),v()(this,"message",void 0),v()(this,"variable",void 0),Object.assign(this,e)}),ie=function(){function a(e){var n=this;U()(this,a),v()(this,"defaultMessage",void 0),v()(this,"name",void 0),v()(this,"setDefaultMessage",function(t){n.defaultMessage=t}),this.defaultMessage=e.defaultMessage,this.name=e.name}return Q()(a,[{key:"factory",value:function(n){var t=this,r=function(){var i=n.apply(void 0,arguments),s=p()(p()({},i),{},{validator:function(){var m=T()(y()().mark(function l(f){var c;return y()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=3,i.validator(f);case 3:return d.abrupt("return",d.sent);case 6:if(d.prev=6,d.t0=d.catch(0),!(d.t0 instanceof Error)){d.next=10;break}throw d.t0;case 10:throw c=function(){if(d.t0 instanceof Y){var I,P;if(typeof d.t0.message=="string")return d.t0.message;var x=(I=f.getStore(S).validateMessages)===null||I===void 0?void 0:I[t.name];return Ne(x!=null?x:t.defaultMessage,p()({name:(P=f.getFullName())===null||P===void 0?void 0:P.join(",")},d.t0.variable))}return typeof d.t0=="string"?d.t0:"".concat(d.t0)}(),new Error(c);case 12:case"end":return d.stop()}},l,null,[[0,6]])}));function h(l){return m.apply(this,arguments)}return h}()});return s};return r.setDefaultMessage=this.setDefaultMessage,Object.defineProperty(r,"defaultMessage",{get:function(){return t.defaultMessage}}),Object.defineProperty(r,"name",{get:function(){return t.name}}),r}}]),a}(),fe=Q()(function a(e){U()(this,a),v()(this,"type",void 0),v()(this,"message",void 0),v()(this,"control",void 0),Object.assign(this,e)}),Pe=function(){var a=T()(y()().mark(function e(n){var t,r,o,i,s,m,h,l,f=arguments;return y()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(t=f.length>1&&f[1]!==void 0?f[1]:"serial",r=f.length>2?f[2]:void 0,!r){u.next=35;break}if(o=function(){var d=T()(y()().mark(function I(P){var x;return y()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.prev=0,_.next=3,P.validator(n);case 3:_.next=9;break;case 5:return _.prev=5,_.t0=_.catch(0),x=_.t0 instanceof Error?_.t0.message:"".concat(_.t0),_.abrupt("return",new fe({type:P.type||"error",message:x,control:n}));case 9:case"end":return _.stop()}},I,null,[[0,5]])}));return function(P){return d.apply(this,arguments)}}(),i=[],t!=="serial"){u.next=30;break}s=he()(r),u.prev=7,s.s();case 9:if((m=s.n()).done){u.next=20;break}return h=m.value,u.next=13,o(h);case 13:if(l=u.sent,!(l instanceof fe)){u.next=18;break}if(i.push(l),l.type!=="error"){u.next=18;break}return u.abrupt("break",20);case 18:u.next=9;break;case 20:u.next=25;break;case 22:u.prev=22,u.t0=u.catch(7),s.e(u.t0);case 25:return u.prev=25,s.f(),u.finish(25);case 28:u.next=33;break;case 30:return u.next=32,Promise.all(r.map(o));case 32:i=u.sent.filter(function(d){return d instanceof fe});case 33:if(!(i.length>0)){u.next=35;break}throw i;case 35:case"end":return u.stop()}},e,null,[[7,22,25,28]])}));return function(n){return a.apply(this,arguments)}}(),M=g(85893),Ge=["children"],Re=C.createContext(null),de=function(){return C.useContext(Re)||{}},We=function(e){var n=e.children,t=V()(e,Ge),r=de(),o=C.useMemo(function(){return p()(p()(p()({},r),t),{},{validateMessages:p()(p()({},r.validateMessages),t.validateMessages)})},[r,t]);return(0,M.jsx)(Re.Provider,{value:o,children:n})},Be=["name","root","control"],q=C.createContext(void 0),Ue=["independentControl"],Z=function(e){var n=C.useRef(void 0),t=C.useRef(e);if(t.current!==e)throw new Error('Parameter "control" cannot be variable.');return n.current||(e?n.current=e:n.current=new ke().internalControl),n.current},Ee=function(e){var n=e.children,t=e.control,r=e.initialValue,o=e.namePaths,i=e.rules,s=e.ref,m=C.useRef({}),h=C.useContext(q)||{},l=h.parent,f=h.validateMode,c=l==null?void 0:l.getStore(S),u=t.getStore(S);return u.parent=c,u.init({value:r,namePaths:o}),u.setValidator(function(){var d=T()(y()().mark(function I(P){return y()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Pe(P,f,i);case 2:return E.abrupt("return",E.sent);case 3:case"end":return E.stop()}},I)}));return function(I){return d.apply(this,arguments)}}()),C.useEffect(function(){if(u.stamp||(u.stamp=m.current),u.stamp!==m.current)throw new Error('"control" cannot be attached to multiple components at the same time');return function(){u.stamp=void 0}},[u]),C.useEffect(function(){return c==null||c.children.add(u),u.parent=c,function(){u.parent=void 0,c==null||c.children.delete(u)}},[u,c]),C.useEffect(function(){o!==u.namePaths&&u.setNamePaths(o)},[u,o]),C.useImperativeHandle(s,function(){return t}),n},Ke=function(e){var n=e.control,t=e.namePaths,r=e.validateTrigger,o=e.validateMode,i=C.useContext(q),s=C.useMemo(function(){var m=i||{},h=m.collection,l=h===void 0?[]:h,f=m.namePathList,c=f===void 0?[]:f,u=m.validateMode,d=m.validateTrigger,I=l[l.length-1];return n.getStore(S).type!==w.Item&&(l=[].concat(b()(l),[n]),c=[].concat(b()(c),[t])),{control:n,collection:l,parent:I,namePathList:c,validateTrigger:r||d,validateMode:o||u}},[i,n,t,o,r]);return(0,M.jsx)(q.Provider,{value:s,children:(0,M.jsx)(Ee,p()({},e))})},Ze=function(e){var n=e.name,t=e.root,r=e.control,o=V()(e,Be),i=o.validateMode,s=o.validateTrigger,m=pe(n),h=Z(r),l=de();h.getStore(S).validateMessages=l.validateMessages;var f=C.useMemo(function(){return{control:h,collection:[h],namePathList:[],validateMode:i,validateTrigger:s}},[h,i,s]);return t||!m?(0,M.jsx)(q.Provider,{value:f,children:(0,M.jsx)(Ee,p()(p()({},o),{},{control:h,namePaths:m!=null?m:Ue}))}):(0,M.jsx)(Ke,p()(p()({},o),{},{control:h,namePaths:m}))},le=Ze,ze=["control"],He=function(e){var n=e.control,t=V()(e,ze),r=Z(n);return r.getStore(S).type=w.Group,(0,M.jsx)(le,p()(p()({},t),{},{control:r,root:!1}))},Je=He,Ve=function(){return C.useContext(q)||{}},ue=function(e){var n=Ve(),t=n.collection,r=n.control;return e&&t?t[0]:r},ee=function(e){var n=C.useRef(e);n.current!==e&&console.warn('Parameter "control" cannot be variable.');var t=ue();return n.current||t},Qe=["control","children"],se=function(e){return e.map(function(n,t){return p()(p()({},n),{},{name:t})})},Xe=function(e){var n=e.children,t=ue(),r=t.getStore(S),o=C.useRef(-1),i=C.useState(function(){var l=t.getValue()||[];return l.map(function(f,c){return{name:c,key:++o.current}})}),s=$()(i,2),m=s[0],h=s[1];return C.useEffect(function(){return r.listChange.add(function(l){var f=b()(r.value||[]);switch(r.touched=!0,l.type){case"add":{var c=typeof l.insertIndex=="number"?l.insertIndex:f.length;h(function(u){var d=b()(u);return d.splice(c,0,{name:d.length,key:++o.current}),se(d)}),f.splice(c,0,l.value),r.setData({value:f,preventCapturing:!0});break}case"remove":{h(function(u){var d=b()(u);return d.splice(l.index,1),se(d)}),f.splice(l.index,1),r.setData({value:f,preventCapturing:!0});break}case"move":{h(function(u){return se(Fe(b()(u),l.from,l.to))}),Fe(f,l.from,l.to),r.setData({value:f,preventCapturing:!0});break}}r.validateOptionalThrow()})},[r]),C.useEffect(function(){return r.valueChange.add(function(l){var f=l.newValue,c=l.oldValue,u=(f==null?void 0:f.length)||0,d=(c==null?void 0:c.length)||0;u!==d&&h(function(I){var P=I;if(P.length>u)P=P.slice(0,u);else if(P.length<u){P=b()(P);for(var x=P.length;x<u;x+=1)P.push({name:x,key:++o.current})}return se(P)})})},[r]),n(m,t)},Ye=function(e){var n=e.control,t=e.children,r=V()(e,Qe),o=Z(n);return o.getStore(S).type=w.List,(0,M.jsx)(le,p()(p()({},r),{},{control:o,root:!1,children:(0,M.jsx)(Xe,{children:t})}))},qe=Ye,me=function(e,n){var t=ee(n),r=C.useRef(e);r.current=C.useMemo(function(){return e},[e]),C.useEffect(function(){return t==null?void 0:t.getStore(S).valueChange.add(function(o){return r.current(o)})},[t])};function _e(a,e){var n=void 0,t=void 0,r=C.useRef(void 0);e&&(n=e),Ae(a)?n=a:typeof a=="function"?r.current=a:t=a;var o=ee(n),i=pe(t),s=C.useCallback(function(){return r.current?r.current(o.getValue()):i?G(o.getValue(),i)[0]:o.getValue()},[i,o]),m=C.useState(function(){return s()}),h=$()(m,2),l=h[0],f=h[1];return C.useEffect(function(){f(s())},[o,s]),me(function(){var c=s();Object.is(l,c)||f(c)},o),l}var en=["element","valuePropName"],nn=["control","children","valuePropName","trigger","getValueFromEvent","rules"],tn=function(e){var n=e.element,t=e.valuePropName,r=V()(e,en),o=_e();return C.cloneElement(n,p()(p()({},r),{},v()({},t,o)))},rn=function(e){var n=e.children,t=e.valuePropName,r=t===void 0?"value":t,o=e.getValueFromEvent,i=e.trigger,s=i===void 0?"onChange":i,m=e.rules,h=m===void 0?[]:m,l=ue(),f=Ve(),c=f.validateTrigger,u=c===void 0?"onChange":c,d=f.validateMode,I=l.getStore(S);return C.Children.map(n,function(P,x){if(x===0&&C.isValidElement(P)){var E=P,_=h.map(function(O){var D=O.validateTrigger||u;return p()(p()({},O),{},{validateTrigger:Array.isArray(D)?D:[D]})}),ne=Array.from(new Set([u].concat(b()(_.map(function(O){return O.validateTrigger}))).flat(1))),ve=ne.reduce(function(O,D){return O[D]=function(){var k,K;I.validateByEvent(T()(y()().mark(function Vn(){return y()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,Pe(l,d,_.filter(function(_n){return _n.validateTrigger.includes(D)}));case 2:return z.abrupt("return",z.sent);case 3:case"end":return z.stop()}},Vn)})));for(var xe=arguments.length,Se=new Array(xe),ce=0;ce<xe;ce++)Se[ce]=arguments[ce];return(k=(K=E.props)[D])===null||k===void 0?void 0:k.call.apply(k,[K].concat(Se))},O},v()({},s,E.props[s]));return(0,C.createElement)(tn,p()(p()(p()({},ve),v()({},s,function(){var O;I.touched=!0;for(var D=arguments.length,k=new Array(D),K=0;K<D;K++)k[K]=arguments[K];return I.setData({value:typeof o=="function"?o.apply(void 0,k):De(r,k[0])}),(O=ve[s])===null||O===void 0?void 0:O.call.apply(O,[ve].concat(k))})),{},{valuePropName:r,element:E,key:"inputRender"}))}return P})},an=function(e){var n=e.control,t=e.children,r=e.valuePropName,o=e.trigger,i=e.getValueFromEvent,s=e.rules,m=V()(e,nn),h=C.useState(0),l=$()(h,2),f=l[0],c=l[1],u=Z(n),d=u.getStore(S);return d.type=w.Item,C.useEffect(function(){return d.resetChange.add(function(){c(function(I){return I+1})})},[d]),(0,M.jsx)(le,p()(p()({},m),{},{rules:s,control:u,root:!1,children:(0,M.jsx)(rn,{valuePropName:r,trigger:o,getValueFromEvent:i,rules:s,children:t},f)}))},on=an,we=function(e){var n=ee(e),t=C.useRef(void 0),r=C.useState({}),o=$()(r,2),i=o[1],s=C.useRef({status:"init"});return C.useEffect(function(){var m=function(c){var u;c.status!==((u=s.current)===null||u===void 0?void 0:u.status)&&(s.current=c,i({}))},h=n==null?void 0:n.getStore(S),l=function(c){t.current=c,c?(m(p()(p()({},s.current),{},{status:"pending"})),c.then(function(){t.current===c&&m({status:"fulfilled"})}).catch(function(u){t.current===c&&m({status:"rejected",results:u})})):m({status:"init"})};return l(h==null?void 0:h.validating),h==null?void 0:h.validationChange.add(l)},[n]),s.current},ln=function(e){var n=e.control,t=e.children,r=ee(n),o=we(r);return t(o,r)},un=function(e){var n=e.children,t=e.condition,r=e.control,o=ee(r),i=C.useState({}),s=$()(i,2),m=s[1];return me(function(h){var l=h.oldValue,f=h.newValue;(typeof t=="function"&&t(f,l)||typeof t=="undefined")&&m({})},o),n(o)},sn=["initialValues","control"],j=function(e){var n=e.initialValues,t=e.control,r=V()(e,sn),o=Z(t);return o.getStore(S).type=w.Group,(0,M.jsx)(le,p()(p()({},r),{},{control:o,initialValue:n,root:!0}))};j.Item=on,j.Group=Je,j.List=qe,j.ConfigProvider=We,j.useControl=Z,j.useOnValueChange=me,j.useWatch=_e,j.useControlInstance=ue,j.useValidation=we,j.useConfig=de,j.Validation=ln,j.Update=un;var cn=j,fn=["message"],dn=new ie({name:"required",defaultMessage:'"${name}" is required'}),mn=dn.factory(function(a){var e=a||{},n=e.message,t=V()(e,fn);return p()(p()({},t),{},{validator:function(o){var i=o.getValue();return typeof i=="undefined"||i===null||i===""||Array.isArray(i)&&i.length===0?Promise.reject(new Y({message:n})):Promise.resolve()}})}),vn=["message"],pn=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hn=new ie({name:"email",defaultMessage:'"${name}" is not a valid email'}),gn=hn.factory(function(a){var e=a||{},n=e.message,t=V()(e,vn);return p()(p()({},t),{},{validator:function(o){var i=o.getValue();return pn.test(i)?Promise.resolve():Promise.reject(new Y({message:n}))}})}),Cn=["message"],yn=["message"],bn=new ie({name:"maxLength",defaultMessage:'"${name}" can contain up to ${length} characters'}),Fn=bn.factory(function(a,e){var n=e||{},t=n.message,r=V()(n,Cn);return p()(p()({},r),{},{validator:function(i){var s=i.getValue();return(typeof s=="string"||Array.isArray(s))&&s.length>a?Promise.reject(new Y({message:t,variable:{length:a}})):Promise.resolve()}})}),In=new ie({name:"minLength",defaultMessage:'"${name}" must be at least ${length} characters'}),Pn=In.factory(function(a,e){var n=e||{},t=n.message,r=V()(n,yn);return p()(p()({},r),{},{validator:function(i){var s=i.getValue(),m=typeof s=="string"||Array.isArray(s)?s.length:"".concat(s!=null?s:"").length;return m<a?Promise.reject(new Y({message:t,variable:{length:a}})):Promise.resolve()}})}),Rn={required:mn,email:gn,maxLength:Fn,minLength:Pn},En=cn},63556:function(L,F){F.Z=`import React from 'react';
import Form from 'form-pilot';

export default () => {

  const control = Form.useControl();

  return (
    <>
      <Form.Item
        control={control}
        getValueFromEvent={e => e.target.checked}
      >
        <input type="checkbox" />
      </Form.Item>
      <Form.Update
        control={control}
      >
        {
          (control) => {
            return JSON.stringify(control?.getValue());
          }
        }
      </Form.Update>
    </>
  );
};
`},86712:function(L,F){F.Z=`import React from 'react';
import Form, { Rules } from 'form-pilot';
import Item from '../components/Item';
import { Input } from '../components/Input';
import { Row, Col } from '../components/Grid';

export default () => {

  const form = Form.useControl();

  return (
    <Row $gap={6}>
      <Form control={form}>
        <Col $flex="0 0 100%">
          <Item
            name="username"
            label="Username"
            rules={[
              Rules.required(),
              Rules.maxLength(5, {
                type: 'warning',
              }),
            ]}
          >
            <Input />
          </Item>
        </Col>
        <Col $flex="0 0 100%">
          <Item
            name="email"
            label="Email"
            rules={[
              Rules.email(),
            ]}
          >
            <Input />
          </Item>
        </Col>
      </Form>
      <Col $flex="0 0 100%">
        <Row $gap={6}>
          <button
            type="button"
            onClick={async () => {
              const values = await form.validateFields();
              // eslint-disable-next-line no-console
              console.log(values);
            }}
          >\u63D0\u4EA4</button>
          <button
            type="button"
            onClick={async () => {
              form.reset();
            }}
          >\u91CD\u7F6E</button>
          <button
            type="button"
            onClick={async () => {
              form.clearValidation();
            }}
          >\u6E05\u9664\u6821\u9A8C</button>
        </Row>
      </Col>
    </Row>
  );
};
`},16752:function(L,F){F.Z=`import React from 'react';
import Form, { Rules } from 'form-pilot';
import type { FormItemProps } from 'form-pilot';

const CustomItem = (props: FormItemProps) => {
  const control = Form.useControl(props.control);
  return (
    <div>
      <Form.Item {...props} control={control} />
      <Form.Validation control={control}>
        {
          (validation) => {
            return (
              <div>
                {
                  validation?.results?.map((result, index) => {
                    return (
                      <span key={index} style={{ color: result.type === 'error' ? 'red' : 'orange' }} >{result.message}</span>
                    );
                  })
                }
              </div>
            );
          }
        }
      </Form.Validation>
    </div>
  );
};

export default () => {
  const control = Form.useControl();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        control.validateFields().then(values => {
          // eslint-disable-next-line no-console
          console.log(values);
        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
        return false;
      }}
    >
      <Form
        control={control}
        initialValues={{
          nickname: 'hello world',
          information: { age: 18, email: '' },
          skills: [{ name: 'basketball', desc: 'A+' }],
        }}
      >
        <CustomItem
          name="nickname"
          rules={[Rules.required(), Rules.maxLength(10, { type: 'warning' })]}
        ><input /></CustomItem>
        <Form.Group name="information">
          <CustomItem name="age"><input type="number" /></CustomItem>
          <CustomItem name="email" rules={[Rules.email()]}><input /></CustomItem>
        </Form.Group>
        <Form.List name="skills">
          {
            (fields, control) => {
              return (
                <>
                  {
                    fields.map(field => {
                      return (
                        <div key={field.key} style={{ display: 'flex' }}>
                          <Form.Group name={field.name}>
                            <CustomItem name="name"><input /></CustomItem>
                            <CustomItem name="desc"><input /></CustomItem>
                            <button type="button" onClick={() => control.remove(field.name)}>remove this item</button>
                          </Form.Group>
                        </div>
                      );
                    })
                  }
                  <button type="button" onClick={() => control.add({ name: '', desc: '' })}>Add Item</button>
                </>
              );
            }
          }
        </Form.List>
      </Form>
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => control.reset()}>Reset</button>
        <button type="button" onClick={() => control.clearValidation()}>Clear Validation Errors</button>
      </div>
    </form>
  );
};
`},47844:function(L,F){F.Z=`import React from 'react';
import Form from 'form-pilot';
import { Input } from './components/Input';
import { Col, Row } from './components/Grid';

export default () => {

  const control = Form.useControl();

  return (
    <>
      <Row $gap={8}>
        {new Date().toLocaleString()}
        <Form control={control}>
          <Form.Group name="info">
            <Col $flex="0 0 100%">
              <Form.Item
                name="username"
                initialValue="\u9ED8\u8BA4\u503C username"
              >
                <Input placeholder="username" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="age"
                initialValue="\u9ED8\u8BA4\u503C 18"
              >
                <Input placeholder="age" />
              </Form.Item>
            </Col>
          </Form.Group>
        </Form>
        <Col $flex="0 0 100%">
          <Row $gap={8}>
            <button
              onClick={() => {
                // eslint-disable-next-line no-console
                console.log(control.getValue());
              }}
              type="button"
            >control.getValue()</button>
            <button
              onClick={() => {
                // eslint-disable-next-line no-console
                console.log((control as any).getStore('_STORE_INTERNAL_TOKEN_'));
              }}
              type="button"
            >control.getStore()</button>
            <button
              onClick={() => control.reset()}
              type="button"
            >reset</button>
          </Row>
        </Col>
      </Row>
    </>
  );
};
`},98666:function(L,F){F.Z=`import React from 'react';
import Form from 'form-pilot';
import { Col, Row } from './components/Grid';
import { Input } from './components/Input';

export default () => {

  const control = Form.useControl();
  
  const usernameControl = Form.useControl();
  const username = Form.useWatch(usernameControl);
  const values = Form.useWatch(control);
  const independentControl = Form.useControl();

  return (
    <>
      <div>
        {new Date().toLocaleString()}
        <Form
          control={control}
          initialValues={{
            username: '\u9ED8\u8BA4\u503C root',
            password: 'password',
            extra: {
              a: 1,
              b: 2,
            },
          }}
        >
          <Row $gap={8}>
            <Col $flex="0 0 33.3%">
              <Form.Item
                name="username"
                control={usernameControl}
                initialValue="\u9ED8\u8BA4\u503C"
              >
                <Input placeholder="username" />
              </Form.Item>
              {username}
            </Col>
            <Col $flex="0 0 33.3%">
              <Form.Item
                name="password"
              >
                <Input placeholder="password" />
              </Form.Item>
            </Col>
            <Col $flex="0 0 33.3%">
              <Form.Item
                name={['name', 'first']}
              >
                <Input placeholder="name, first" />
              </Form.Item>
            </Col>
            <Col $flex="0 0 33.3%">
              <Form.Item
                name={['name', 'last']}
              >
                <Input placeholder="name, last" />
              </Form.Item>
            </Col>
            <Col $flex="0 0 33.3%">
              <Form.Group
                name={'detail'}
              >
                <Form.Item name="age">
                  <Input placeholder="detail, age" />
                </Form.Item>
              </Form.Group>
            </Col>
            <Col $flex="0 0 33.3%">
              <Form.Item name={['detail', 'introduce']}>
                <Input placeholder="detail, introduce" />
              </Form.Item>
            </Col>
            <Col $flex="0 0 100%">
              <Form.List
                name="list"
              >
                {
                  (fields, { add, remove }) => {
                    return (
                      <Row $gap={8}>
                        {
                          fields.map(field => {
                            return (
                              <Form.Group key={field.key} name={field.name}>
                                <Col $flex="0 0 100%">
                                  <Row $gap={8}>
                                    <Col $flex="0 0 200px">
                                      <Form.Item
                                        name="prefix"
                                      >
                                        <Input placeholder="prefix" style={{ width: '100%' }} />
                                      </Form.Item>
                                    </Col>
                                    <Col>
                                      <button
                                        onClick={() => remove(field.name)}
                                        type="button"
                                      >\u5220\u9664</button>
                                    </Col>
                                  </Row>
                                </Col>
                              </Form.Group>
                            );
                          })
                        }
                        <Col $flex="0 0 100%">
                          <button
                            onClick={() => add()}
                            type="button"
                          >Add</button>
                        </Col>
                      </Row>
                    );
                  }
                }
              </Form.List>
            </Col>
            <div>
              <Form.Item control={independentControl}>
                <Input placeholder="\u72EC\u7ACB\u53D7\u63A7\uFF08\u8131\u79BBForm\uFF09" />
              </Form.Item>
              <button
                onClick={() => independentControl.setValue('independentControl')}
                type="button"
              >independentControl</button>
            </div>
          </Row>
        </Form>
      </div>
      <div>
        {
          JSON.stringify(values, null, 2)
        }
      </div>
      <div>
        <div>
          <button
            onClick={() => {
              // eslint-disable-next-line no-console
              console.log(control.getValue());
            }}
            type="button"
          >control.getValue()</button>
          <button
            onClick={() => {
              // eslint-disable-next-line no-console
              console.log(control.getStrictValue());
            }}
            type="button"
          >control.getStrictValue()</button>
          <button
            onClick={() => control.reset()}
            type="button"
          >reset</button>
          <button
            onClick={() => control.setFieldValue(['list'], [{ prefix: '123' }])}
            type="button"
          >setFieldValue</button>
        </div>
      </div>
    </>
  );
};
`},62935:function(L,F){F.Z=`import type React from 'react';
import styled from 'styled-components';

const number2string = (input?: number | string) => {
  if (typeof input === 'number') {
    return \`\${input}px\`;
  }
  return input;
};

interface RowProps {
  $align?: React.CSSProperties['alignItems'];
  $justify?: React.CSSProperties['justifyContent'];
  $gap?: React.CSSProperties['gap'];
}
export const Row = styled.div<RowProps>\`
  display: flex;
  flex-wrap: wrap;
  align-items: \${props => props.$align ?? 'center'};
  justify-content: \${props => props.$justify ?? 'unset'};
  gap: \${props => number2string(props.$gap) ?? 'unset'};
\`;

interface ColProps {
  $flex?: React.CSSProperties['flex'];
}
export const Col = styled.div<ColProps>\`
  flex: \${props => props.$flex ?? '0 0 auto'};
\`;
`},31375:function(L,F){F.Z=`import React from 'react';

export const Input = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {

  let mergedProps = props;

  if ('value' in props) {
    mergedProps = {
      ...props,
      value: props.value ?? '',
    };
  }

  return (
    <input {...mergedProps} />
  );
};
`},75697:function(L,F){F.Z=`import React from 'react';
import Form from 'form-pilot';
import type { FormItemProps } from 'form-pilot';

interface ItemProps extends FormItemProps {
  label?: React.ReactNode;
}
export default (props: ItemProps) => {

  const { label, ...restProps } = props;

  const control = Form.useControl(props.control);

  return (
    <div>
      {
        !!label && (
          <span style={{ marginRight: 8 }}>{label}</span>
        )
      }
      <Form.Item
        {...restProps}
        control={control}
      />
      <Form.Validation
        control={control}
      >
        {
          (validation) => {
            return (
              <div>
                {
                  validation?.results?.map((result, index) => {
                    return (
                      <span
                        key={index}
                        style={{
                          color: result.type === 'error' ? 'red' : 'orange',
                        }}
                      >{result.message}</span>
                    );
                  })
                }
              </div>
            );
          }
        }
      </Form.Validation>
    </div>
  );
};
`}}]);
