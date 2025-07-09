"use strict";(self.webpackChunkform_pilot=self.webpackChunkform_pilot||[]).push([[298],{98231:function(O,F,g){g.r(F),g.d(F,{Col:function(){return A},Row:function(){return b}});var W=g(68400),v=g.n(W),B=g(41686),V,C,k=function(R){return typeof R=="number"?"".concat(R,"px"):R},b=B.default.div(V||(V=v()([`
  display: flex;
  flex-wrap: wrap;
  align-items: `,`;
  justify-content: `,`;
  gap: `,`;
`])),function(y){var R;return(R=y.$align)!==null&&R!==void 0?R:"center"},function(y){var R;return(R=y.$justify)!==null&&R!==void 0?R:"unset"},function(y){var R;return(R=k(y.$gap))!==null&&R!==void 0?R:"unset"}),A=B.default.div(C||(C=v()([`
  flex: `,`;
`])),function(y){var R;return(R=y.$flex)!==null&&R!==void 0?R:"0 0 auto"})},67191:function(O,F,g){g.r(F),g.d(F,{Input:function(){return C}});var W=g(97857),v=g.n(W),B=g(67294),V=g(85893),C=function(b){var A=b;if("value"in b){var y;A=v()(v()({},b),{},{value:(y=b.value)!==null&&y!==void 0?y:""})}return(0,V.jsx)("input",v()({},A))}},78944:function(O,F,g){g.r(F);var W=g(97857),v=g.n(W),B=g(13769),V=g.n(B),C=g(67294),k=g(56076),b=g(85893),A=["label"];F.default=function(y){var R=y.label,T=V()(y,A),ne=k.default.useControl(y.control);return(0,b.jsxs)("div",{children:[!!R&&(0,b.jsx)("span",{style:{marginRight:8},children:R}),(0,b.jsx)(k.default.Item,v()(v()({},T),{},{control:ne})),(0,b.jsx)(k.default.Validation,{control:ne,children:function(H){var $;return(0,b.jsx)("div",{children:H==null||($=H.results)===null||$===void 0?void 0:$.map(function(te,U){return(0,b.jsx)("span",{style:{color:te.type==="error"?"red":"orange"},children:te.message},U)})})}})]})}},56076:function(O,F,g){g.r(F),g.d(F,{Rules:function(){return In},default:function(){return Rn}});var W=g(97857),v=g.n(W),B=g(13769),V=g.n(B),C=g(67294),k=g(19632),b=g.n(k),A=g(15009),y=g.n(A),R=g(99289),T=g.n(R),ne=g(52677),z=g.n(ne),H=g(5574),$=g.n(H),te=g(12444),U=g.n(te),je=g(72004),J=g.n(je),$e=g(9783),m=g.n($e),x="_STORE_INTERNAL_TOKEN_",Q=function(e){if(typeof e!="undefined")return Array.isArray(e)?e.length?e:void 0:[e]},re=function(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!e||!n||t&&e.length!==n.length?!1:e.every(function(r,o){return r===n[o]})},ve=function(e){var n=Q(e),t=C.useRef(n);return(typeof n=="undefined"||typeof t.current=="undefined"||!re(n,t.current,!0))&&(t.current=n),t.current},ae=function(){function a(){U()(this,a),m()(this,"listeners",[])}return J()(a,[{key:"add",value:function(n){var t=this;return this.listeners.push(n),function(){t.remove(n)}}},{key:"remove",value:function(n){var t=this.listeners.indexOf(n);t>-1&&this.listeners.splice(t,1)}},{key:"trigger",value:function(n){this.listeners.forEach(function(t){return t(n)})}}]),a}(),Se=g(64599),pe=g.n(Se);function Me(a){return typeof a=="undefined"||a===null}function he(a){if(a&&z()(a)==="object")return Array.isArray(a)?[]:{}}function N(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=a,t=!0,r=pe()(e),o;try{for(r.s();!(o=r.n()).done;){var i,s=o.value;if(t=!Me(n)&&Object.prototype.hasOwnProperty.call(n,s),n=(i=n)===null||i===void 0?void 0:i[s],!t)break}}catch(h){r.e(h)}finally{r.f()}return[n,t]}function ge(a){return Array.isArray(a)?b()(a):Object.assign({},a)}function Ce(a){return typeof a=="number"?[]:{}}function ye(a,e,n){for(var t=ge(a!=null?a:Ce(e[0])),r=t,o=0;o<e.length;o+=1){var i,s=e[o];if(o===e.length-1)return r[s]=n,t;r[s]=ge((i=r[s])!==null&&i!==void 0?i:Ce(e[o+1])),r=r[s]}return t}function Oe(a,e,n){for(var t=n,r=n,o=0;o<e.length&&(o===0&&!t&&(t=he(a),r=t),!!r);o+=1){var i=e[o],s=N(a,e.slice(0,o+1)),h=$()(s,2),p=h[0],l=h[1];if(o===e.length-1){l&&(r[i]=p);break}var f=N(n,e.slice(0,o+1)),c=$()(f,2),u=c[0],d=c[1];d?r[i]=u:l&&(r[i]=he(p)),r=r[i]}return t}function be(a,e,n){if(e>a.length-1||n>a.length-1)throw new Error("Out of range");var t=a[e],r=a[n];return a[n]=t,a[e]=r,a}function Te(a){if(z()(a)!=="object"||a===null)return!1;var e=Object.getPrototypeOf(a);return e===Object.prototype||e===null}function De(a,e){return e&&e.target&&z()(e.target)==="object"&&a in e.target?e.target[a]:e}var Fe=Symbol("control"),Le=function(){function a(){var e=this;U()(this,a),m()(this,"lock",!1),m()(this,"type","item"),m()(this,"parent",void 0),m()(this,"children",new Set),m()(this,"value",void 0),m()(this,"initialValue",void 0),m()(this,"namePaths",void 0),m()(this,"touched",!1),m()(this,"validator",function(){return Promise.resolve()}),m()(this,"validating",void 0),m()(this,"validationChange",new ae),m()(this,"validationErrors",void 0),m()(this,"validateMessages",void 0),m()(this,"valueChange",new ae),m()(this,"listChange",new ae),m()(this,"resetChange",new ae),m()(this,"stamp",void 0),m()(this,"_init",!1),m()(this,"setValidator",function(n){n?e.validator=n:e.validator=function(){return Promise.resolve()}}),m()(this,"getStrictValue",function(n){if(e.type==="item")return e.value;var t,r=n==null?void 0:n.map(Q),o=e.getInitializedValue(),i=function s(h){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];h.forEach(function(l){var f=[].concat(b()(p),b()(l.namePaths));l.type==="item"&&(!r||r.some(function(c){return!c||re(c,f)}))&&(t=Oe(o,f,t)),s(l.children,f)})};return i(e.children),t}),m()(this,"getName",function(){if(e.parent)return e.namePaths}),m()(this,"getFullName",function(){if(e.parent)return[].concat(b()(e.parent.getFullName()||[]),b()(e.namePaths))}),m()(this,"triggerValidationChange",function(){e.validationChange.trigger(e.validating),e.validating?e.validating.catch(function(n){return e.validationErrors=n}):e.validationErrors=void 0}),m()(this,"validateByEvent",function(n){var t=typeof n=="function"?n:e.validator;e.validating=t(e.internalControl),e.triggerValidationChange()}),m()(this,"validateOptionalThrow",function(){var n=T()(y()().mark(function t(r){var o,i,s,h;return y()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return o=r||{},i=o.thrownTypes,s=i===void 0?["error"]:i,e.validating=e.validator(e.internalControl),e.triggerValidationChange(),l.prev=3,l.next=6,e.validating;case 6:l.next=13;break;case 8:if(l.prev=8,l.t0=l.catch(3),h=l.t0.filter(function(f){return s.includes(f.type)}),!h.length){l.next=13;break}throw h;case 13:case"end":return l.stop()}},t,null,[[3,8]])}));return function(t){return n.apply(this,arguments)}}()),m()(this,"validate",function(){var n=T()(y()().mark(function t(r){return y()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.validateOptionalThrow(r);case 2:return i.abrupt("return",e.getStrictValue());case 3:case"end":return i.stop()}},t)}));return function(t){return n.apply(this,arguments)}}()),m()(this,"clearValidation",function(){e.validating=void 0,e.triggerValidationChange(),e.children.forEach(function(n){return n.clearValidation()})}),m()(this,"validateFields",function(){var n=T()(y()().mark(function t(r,o){var i,s,h;return y()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=[],s=function f(c,u,d){var P=u==null?void 0:u.map(Q),I=d||{},w=I.recursive;if(!P){i.push(function(){return c.validateOptionalThrow(o)}),c.children.forEach(function(E){return f(E)});return}if(P.length){if(P.some(function(E){return!E})&&(i.push(function(){return c.validateOptionalThrow(o)}),w)){c.children.forEach(function(E){return f(E)});return}c.children.forEach(function(E){var _=P.filter(function(ee){return re(E.namePaths,ee)});f(E,_.map(function(ee){return ee.slice(E.namePaths.length)}),d)})}},s(e,r,o),l.next=5,Promise.all(i.map(function(f){return f().catch(function(c){return c})}));case 5:if(h=l.sent.filter(Boolean),!h.length){l.next=8;break}throw h;case 8:return l.abrupt("return",e.getStrictValue(r));case 9:case"end":return l.stop()}},t)}));return function(t,r){return n.apply(this,arguments)}}()),m()(this,"getValidationErrors",function(){var n,t=((n=e.validationErrors)===null||n===void 0?void 0:n.slice())||[];if(e.children.forEach(function(r){var o=r.getValidationErrors();o&&t.push.apply(t,b()(o))}),t.length)return t}),m()(this,"manualSetValue",function(n){return e.setData({value:n}),e.clearValidation(),e.value}),m()(this,"setFieldValue",function(n,t){var r=Q(n);if(!(!r||e.type==="item")){var o=e.get(r);o?o.setValue(t):e.setData({value:ye(e.getInitializedValue(),r,t)})}}),m()(this,"isTouched",function(){return e.type==="item"||e.touched?e.touched:Array.from(e.children).some(function(n){return n.isTouched()})}),m()(this,"reset",function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e.setData({value:e.getInitialValue(),preventCapturing:!0,preventBubbling:n}),e.resetChange.trigger(),e.touched=!1,e.children.forEach(function(t){return t.reset(!0)})}),m()(this,"triggerReset",function(){e.reset(),e.clearValidation()}),m()(this,"add",function(n,t){if(e.type!=="list")throw new Error("".concat(e.type," has no method add."));e.listChange.trigger({type:"add",value:n,insertIndex:t})}),m()(this,"remove",function(n){if(e.type!=="list")throw new Error("".concat(e.type," has no method remove."));e.listChange.trigger({type:"remove",index:n})}),m()(this,"move",function(n,t){if(e.type!=="list")throw new Error("".concat(e.type," has no method move."));e.listChange.trigger({type:"move",from:n,to:t})}),m()(this,"get",function(n){var t=Q(n);if(t){for(var r=0,o=Array.from(e.children);r<o.length;r++){var i=o[r];if(re(i.namePaths,t)){var s=i.get(t.slice(i.namePaths.length));if(s)return s}}return}return e.internalControl}),m()(this,"control",{getValue:function(){return e.value},getStrictValue:this.getStrictValue,getName:this.getName,getFullName:this.getFullName,setValue:this.manualSetValue,setFieldValue:this.setFieldValue,isTouched:this.isTouched,reset:this.triggerReset,validate:this.validate,validateFields:this.validateFields,getValidationErrors:this.getValidationErrors,clearValidation:this.clearValidation,add:this.add,remove:this.remove,move:this.move,get:this.get}),m()(this,"internalControl",v()(v()({},this.control),{},m()({getStore:function(t){if(t===x)return e;throw new Error("For internal use only")}},Fe,!0)))}return J()(a,[{key:"init",value:function(n){this.initialValue=n.value,!this._init&&(this.namePaths=n.namePaths,this.parent?this.setData({value:N(this.parent.value,this.namePaths)[0]}):this.setData({value:this.getInitialValue()}),this._init=!0)}},{key:"getInitialValue",value:function(){return this.parent?N(this.parent.getInitialValue(),this.namePaths)[0]:this.initialValue}},{key:"getInitializedValue",value:function(){return this.type==="list"&&!Array.isArray(this.value)?[]:this.type==="group"&&!Te(this.value)?Object.assign({},this.value):this.value}},{key:"setNamePaths",value:function(n){this.namePaths=n,this.parent&&this.setData({value:N(this.parent.value,this.namePaths)[0]})}},{key:"setData",value:function(n){var t=this;if(!this.lock){this.lock=!0;var r=n.eventInterceptor,o=n.preventCapturing,i=n.preventBubbling,s=n.value,h=this.value,p=[];if(!i&&this.parent&&!this.parent.lock){var l=this.parent.value,f=N(this.parent.value,this.namePaths),c=$()(f,1),u=c[0];Object.is(u,s)||(l=ye(this.parent.getInitializedValue(),this.namePaths,s)),this.parent.setData({value:l,eventInterceptor:function(P){p.push(P)}})}this.value=s,Object.is(this.value,h)||(p.push(function(){return t.valueChange.trigger({newValue:s,oldValue:h})}),o||this.children.forEach(function(d){d.lock||d.setData({value:N(t.value,d.namePaths)[0],eventInterceptor:function(I){p.push(I)}})})),typeof r=="function"?r(function(){return p.forEach(function(d){return d()})}):p.forEach(function(d){return d()}),this.lock=!1}}}]),a}();function ke(a){return!!a&&z()(a)==="object"&&!!a[Fe]}function Ae(a,e){return a.replace(/\\?\$\{\w+\}/g,function(n){var t;if(n.startsWith("\\"))return n.slice(1);var r=n.slice(2,-1);return"".concat((t=e[r])!==null&&t!==void 0?t:"")})}var X=J()(function a(e){U()(this,a),m()(this,"message",void 0),m()(this,"variable",void 0),Object.assign(this,e)}),oe=function(){function a(e){var n=this;U()(this,a),m()(this,"defaultMessage",void 0),m()(this,"name",void 0),m()(this,"setDefaultMessage",function(t){n.defaultMessage=t}),this.defaultMessage=e.defaultMessage,this.name=e.name}return J()(a,[{key:"factory",value:function(n){var t=this,r=function(){var i=n.apply(void 0,arguments),s=v()(v()({},i),{},{validator:function(){var h=T()(y()().mark(function l(f){var c;return y()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=3,i.validator(f);case 3:return d.abrupt("return",d.sent);case 6:if(d.prev=6,d.t0=d.catch(0),!(d.t0 instanceof Error)){d.next=10;break}throw d.t0;case 10:throw c=function(){if(d.t0 instanceof X){var P,I;if(typeof d.t0.message=="string")return d.t0.message;var w=(P=f.getStore(x).validateMessages)===null||P===void 0?void 0:P[t.name];return Ae(w!=null?w:t.defaultMessage,v()({name:(I=f.getFullName())===null||I===void 0?void 0:I.join(",")},d.t0.variable))}return typeof d.t0=="string"?d.t0:"".concat(d.t0)}(),new Error(c);case 12:case"end":return d.stop()}},l,null,[[0,6]])}));function p(l){return h.apply(this,arguments)}return p}()});return s};return r.setDefaultMessage=this.setDefaultMessage,Object.defineProperty(r,"defaultMessage",{get:function(){return t.defaultMessage}}),Object.defineProperty(r,"name",{get:function(){return t.name}}),r}}]),a}(),ce=J()(function a(e){U()(this,a),m()(this,"type",void 0),m()(this,"message",void 0),m()(this,"control",void 0),Object.assign(this,e)}),Pe=function(){var a=T()(y()().mark(function e(n){var t,r,o,i,s,h,p,l,f=arguments;return y()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(t=f.length>1&&f[1]!==void 0?f[1]:"serial",r=f.length>2?f[2]:void 0,!r){u.next=35;break}if(o=function(){var d=T()(y()().mark(function P(I){var w;return y()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.prev=0,_.next=3,I.validator(n);case 3:_.next=9;break;case 5:return _.prev=5,_.t0=_.catch(0),w=_.t0 instanceof Error?_.t0.message:"".concat(_.t0),_.abrupt("return",new ce({type:I.type||"error",message:w,control:n}));case 9:case"end":return _.stop()}},P,null,[[0,5]])}));return function(I){return d.apply(this,arguments)}}(),i=[],t!=="serial"){u.next=30;break}s=pe()(r),u.prev=7,s.s();case 9:if((h=s.n()).done){u.next=20;break}return p=h.value,u.next=13,o(p);case 13:if(l=u.sent,!(l instanceof ce)){u.next=18;break}if(i.push(l),l.type!=="error"){u.next=18;break}return u.abrupt("break",20);case 18:u.next=9;break;case 20:u.next=25;break;case 22:u.prev=22,u.t0=u.catch(7),s.e(u.t0);case 25:return u.prev=25,s.f(),u.finish(25);case 28:u.next=33;break;case 30:return u.next=32,Promise.all(r.map(o));case 32:i=u.sent.filter(function(d){return d instanceof ce});case 33:if(!(i.length>0)){u.next=35;break}throw i;case 35:case"end":return u.stop()}},e,null,[[7,22,25,28]])}));return function(n){return a.apply(this,arguments)}}(),S=g(85893),Ne=["children"],Ie=C.createContext(null),fe=function(){return C.useContext(Ie)||{}},We=function(e){var n=e.children,t=V()(e,Ne),r=fe(),o=C.useMemo(function(){return v()(v()(v()({},r),t),{},{validateMessages:v()(v()({},r.validateMessages),t.validateMessages)})},[r,t]);return(0,S.jsx)(Ie.Provider,{value:o,children:n})},Be=["name","root","control"],Y=C.createContext(void 0),Ue=["independentControl"],K=function(e){var n=C.useRef(void 0),t=C.useRef(e);if(t.current!==e)throw new Error('Parameter "control" cannot be variable.');return n.current||(e?n.current=e:n.current=new Le().internalControl),n.current},Re=function(e){var n=e.children,t=e.control,r=e.initialValue,o=e.namePaths,i=e.rules,s=e.ref,h=C.useRef({}),p=C.useContext(Y)||{},l=p.parent,f=p.validateMode,c=l==null?void 0:l.getStore(x),u=t.getStore(x);return u.parent=c,u.init({value:r,namePaths:o}),u.setValidator(function(){var d=T()(y()().mark(function P(I){return y()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Pe(I,f,i);case 2:return E.abrupt("return",E.sent);case 3:case"end":return E.stop()}},P)}));return function(P){return d.apply(this,arguments)}}()),C.useEffect(function(){if(u.stamp||(u.stamp=h.current),u.stamp!==h.current)throw new Error('"control" cannot be attached to multiple components at the same time');return function(){u.stamp=void 0}},[u]),C.useEffect(function(){return c==null||c.children.add(u),u.parent=c,function(){u.parent=void 0,c==null||c.children.delete(u)}},[u,c]),C.useEffect(function(){o!==u.namePaths&&u.setNamePaths(o)},[u,o]),C.useImperativeHandle(s,function(){return t}),n},Ge=function(e){var n=e.control,t=e.namePaths,r=e.validateTrigger,o=e.validateMode,i=C.useContext(Y),s=C.useMemo(function(){var h=i||{},p=h.collection,l=p===void 0?[]:p,f=h.namePathList,c=f===void 0?[]:f,u=h.validateMode,d=h.validateTrigger,P=l[l.length-1];return n.getStore(x).type!=="item"&&(l=[].concat(b()(l),[n]),c=[].concat(b()(c),[t])),{control:n,collection:l,parent:P,namePathList:c,validateTrigger:r||d,validateMode:o||u}},[i,n,t,o,r]);return(0,S.jsx)(Y.Provider,{value:s,children:(0,S.jsx)(Re,v()({},e))})},Ke=function(e){var n=e.name,t=e.root,r=e.control,o=V()(e,Be),i=o.validateMode,s=o.validateTrigger,h=ve(n),p=K(r),l=fe();p.getStore(x).validateMessages=l.validateMessages;var f=C.useMemo(function(){return{control:p,collection:[p],namePathList:[],validateMode:i,validateTrigger:s}},[p,i,s]);return t||!h?(0,S.jsx)(Y.Provider,{value:f,children:(0,S.jsx)(Re,v()(v()({},o),{},{control:p,namePaths:Ue}))}):(0,S.jsx)(Ge,v()(v()({},o),{},{control:p,namePaths:h}))},ie=Ke,Ze=["control"],ze=function(e){var n=e.control,t=V()(e,Ze),r=K(n);return r.getStore(x).type="group",(0,S.jsx)(ie,v()(v()({},t),{},{control:r,root:!1}))},He=ze,Ee=function(){return C.useContext(Y)||{}},le=function(e){var n=Ee(),t=n.collection,r=n.control;return e&&t?t[0]:r},q=function(e){var n=C.useRef(e);n.current!==e&&console.warn('Parameter "control" cannot be variable.');var t=le();return n.current||t},Je=["control","children"],ue=function(e){return e.map(function(n,t){return v()(v()({},n),{},{name:t})})},Qe=function(e){var n=e.children,t=le(),r=t.getStore(x),o=C.useRef(-1),i=C.useState(function(){var l=t.getValue()||[];return l.map(function(f,c){return{name:c,key:++o.current}})}),s=$()(i,2),h=s[0],p=s[1];return C.useEffect(function(){return r.listChange.add(function(l){var f=b()(r.value||[]);switch(r.touched=!0,l.type){case"add":{var c=typeof l.insertIndex=="number"?l.insertIndex:f.length;p(function(u){var d=b()(u);return d.splice(c,0,{name:d.length,key:++o.current}),ue(d)}),f.splice(c,0,l.value),r.setData({value:f,preventCapturing:!0});break}case"remove":{p(function(u){var d=b()(u);return d.splice(l.index,1),ue(d)}),f.splice(l.index,1),r.setData({value:f,preventCapturing:!0});break}case"move":{p(function(u){return ue(be(b()(u),l.from,l.to))}),be(f,l.from,l.to),r.setData({value:f,preventCapturing:!0});break}}r.validateOptionalThrow()})},[r]),C.useEffect(function(){return r.valueChange.add(function(l){var f=l.newValue,c=l.oldValue,u=(f==null?void 0:f.length)||0,d=(c==null?void 0:c.length)||0;u!==d&&p(function(P){var I=P;if(I.length>u)I=I.slice(0,u);else if(I.length<u){I=b()(I);for(var w=I.length;w<u;w+=1)I.push({name:w,key:++o.current})}return ue(I)})})},[r]),n(h,t)},Xe=function(e){var n=e.control,t=e.children,r=V()(e,Je),o=K(n);return o.getStore(x).type="list",(0,S.jsx)(ie,v()(v()({},r),{},{control:o,root:!1,children:(0,S.jsx)(Qe,{children:t})}))},Ye=Xe,de=function(e,n){var t=q(n),r=C.useRef(e);r.current=C.useMemo(function(){return e},[e]),C.useEffect(function(){return t==null?void 0:t.getStore(x).valueChange.add(function(o){return r.current(o)})},[t])};function Ve(a,e){var n=void 0,t=void 0,r=C.useRef(void 0);e&&(n=e),ke(a)?n=a:typeof a=="function"?r.current=a:t=a;var o=q(n),i=ve(t),s=C.useCallback(function(){return r.current?r.current(o.getValue()):i?N(o.getValue(),i)[0]:o.getValue()},[i,o]),h=C.useState(function(){return s()}),p=$()(h,2),l=p[0],f=p[1];return C.useEffect(function(){f(s())},[o,s]),de(function(){var c=s();Object.is(l,c)||f(c)},o),l}var qe=["element","valuePropName"],en=["control","children","valuePropName","trigger","getValueFromEvent","rules"],nn=function(e){var n=e.element,t=e.valuePropName,r=V()(e,qe),o=Ve();return C.cloneElement(n,v()(v()({},r),{},m()({},t,o)))},tn=function(e){var n=e.children,t=e.valuePropName,r=t===void 0?"value":t,o=e.getValueFromEvent,i=e.trigger,s=i===void 0?"onChange":i,h=e.rules,p=h===void 0?[]:h,l=le(),f=Ee(),c=f.validateTrigger,u=c===void 0?"onChange":c,d=f.validateMode,P=l.getStore(x);return C.Children.map(n,function(I,w){if(w===0&&C.isValidElement(I)){var E=I,_=p.map(function(M){var D=M.validateTrigger||u;return v()(v()({},M),{},{validateTrigger:Array.isArray(D)?D:[D]})}),ee=Array.from(new Set([u].concat(b()(_.map(function(M){return M.validateTrigger}))).flat(1))),me=ee.reduce(function(M,D){return M[D]=function(){var L,G;P.validateByEvent(T()(y()().mark(function En(){return y()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,Pe(l,d,_.filter(function(Vn){return Vn.validateTrigger.includes(D)}));case 2:return Z.abrupt("return",Z.sent);case 3:case"end":return Z.stop()}},En)})));for(var we=arguments.length,xe=new Array(we),se=0;se<we;se++)xe[se]=arguments[se];return(L=(G=E.props)[D])===null||L===void 0?void 0:L.call.apply(L,[G].concat(xe))},M},m()({},s,E.props[s]));return(0,C.createElement)(nn,v()(v()(v()({},me),m()({},s,function(){var M;P.touched=!0;for(var D=arguments.length,L=new Array(D),G=0;G<D;G++)L[G]=arguments[G];return P.setData({value:typeof o=="function"?o.apply(void 0,L):De(r,L[0])}),(M=me[s])===null||M===void 0?void 0:M.call.apply(M,[me].concat(L))})),{},{valuePropName:r,element:E,key:"inputRender"}))}return I})},rn=function(e){var n=e.control,t=e.children,r=e.valuePropName,o=e.trigger,i=e.getValueFromEvent,s=e.rules,h=V()(e,en),p=C.useState(0),l=$()(p,2),f=l[0],c=l[1],u=K(n),d=u.getStore(x);return d.type="item",C.useEffect(function(){return d.resetChange.add(function(){c(function(P){return P+1})})},[d]),(0,S.jsx)(ie,v()(v()({},h),{},{rules:s,control:u,root:!1,children:(0,S.jsx)(tn,{valuePropName:r,trigger:o,getValueFromEvent:i,rules:s,children:t},f)}))},an=rn,_e=function(e){var n=q(e),t=C.useRef(void 0),r=C.useState({}),o=$()(r,2),i=o[1],s=C.useRef({status:"init"});return C.useEffect(function(){var h=function(c){var u;c.status!==((u=s.current)===null||u===void 0?void 0:u.status)&&(s.current=c,i({}))},p=n==null?void 0:n.getStore(x),l=function(c){t.current=c,c?(h(v()(v()({},s.current),{},{status:"pending"})),c.then(function(){t.current===c&&h({status:"fulfilled"})}).catch(function(u){t.current===c&&h({status:"rejected",results:u})})):h({status:"init"})};return l(p==null?void 0:p.validating),p==null?void 0:p.validationChange.add(l)},[n]),s.current},on=function(e){var n=e.control,t=e.children,r=q(n),o=_e(r);return t(o,r)},ln=function(e){var n=e.children,t=e.condition,r=e.control,o=q(r),i=C.useState({}),s=$()(i,2),h=s[1];return de(function(p){var l=p.oldValue,f=p.newValue;(typeof t=="function"&&t(f,l)||typeof t=="undefined")&&h({})},o),n(o)},un=["initialValues","control"],j=function(e){var n=e.initialValues,t=e.control,r=V()(e,un),o=K(t);return o.getStore(x).type="group",(0,S.jsx)(ie,v()(v()({},r),{},{control:o,name:void 0,initialValue:n,root:!0}))};j.Item=an,j.Group=He,j.List=Ye,j.ConfigProvider=We,j.useControl=K,j.useOnValueChange=de,j.useWatch=Ve,j.useControlInstance=le,j.useValidation=_e,j.useConfig=fe,j.Validation=on,j.Update=ln;var sn=j,cn=["message"],fn=new oe({name:"required",defaultMessage:'"${name}" is required'}),dn=fn.factory(function(a){var e=a||{},n=e.message,t=V()(e,cn);return v()(v()({},t),{},{validator:function(o){var i=o.getValue();return typeof i=="undefined"||i===null||i===""||Array.isArray(i)&&i.length===0?Promise.reject(new X({message:n})):Promise.resolve()}})}),mn=["message"],vn=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,pn=new oe({name:"email",defaultMessage:'"${name}" is not a valid email'}),hn=pn.factory(function(a){var e=a||{},n=e.message,t=V()(e,mn);return v()(v()({},t),{},{validator:function(o){var i=o.getValue();return vn.test(i)?Promise.resolve():Promise.reject(new X({message:n}))}})}),gn=["message"],Cn=["message"],yn=new oe({name:"maxLength",defaultMessage:'"${name}" can contain up to ${length} characters'}),bn=yn.factory(function(a,e){var n=e||{},t=n.message,r=V()(n,gn);return v()(v()({},r),{},{validator:function(i){var s=i.getValue();return(typeof s=="string"||Array.isArray(s))&&s.length>a?Promise.reject(new X({message:t,variable:{length:a}})):Promise.resolve()}})}),Fn=new oe({name:"minLength",defaultMessage:'"${name}" must be at least ${length} characters'}),Pn=Fn.factory(function(a,e){var n=e||{},t=n.message,r=V()(n,Cn);return v()(v()({},r),{},{validator:function(i){var s=i.getValue(),h=typeof s=="string"||Array.isArray(s)?s.length:"".concat(s!=null?s:"").length;return h<a?Promise.reject(new X({message:t,variable:{length:a}})):Promise.resolve()}})}),In={required:dn,email:hn,maxLength:bn,minLength:Pn},Rn=sn},63556:function(O,F){F.Z=`import React from 'react';
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
`},86712:function(O,F){F.Z=`import React from 'react';
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
`},16752:function(O,F){F.Z=`import React from 'react';
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
    <form onSubmit={(e) => {
      e.preventDefault();
      control.validateFields().then(values => {
        // eslint-disable-next-line no-console
        console.log(values);
      }).catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
      return false;
    }}>
      <Form control={control} initialValues={{ nickname: 'hello world', information: { age: 18, email: '' }, skills: [{ name: 'basketball', desc: 'A+' }] }}>
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
`},47844:function(O,F){F.Z=`import React from 'react';
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
`},98666:function(O,F){F.Z=`import React from 'react';
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
`},62935:function(O,F){F.Z=`import type React from 'react';
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
`},31375:function(O,F){F.Z=`import React from 'react';

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
`},75697:function(O,F){F.Z=`import React from 'react';
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
