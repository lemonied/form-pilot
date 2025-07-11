"use strict";(self.webpackChunkform_pilot=self.webpackChunkform_pilot||[]).push([[298],{98231:function(L,F,g){g.r(F),g.d(F,{Col:function(){return N},Row:function(){return b}});var U=g(68400),m=g.n(U),B=g(41686),E,C,A=function(R){return typeof R=="number"?"".concat(R,"px"):R},b=B.default.div(E||(E=m()([`
  display: flex;
  flex-wrap: wrap;
  align-items: `,`;
  justify-content: `,`;
  gap: `,`;
`])),function(y){var R;return(R=y.$align)!==null&&R!==void 0?R:"center"},function(y){var R;return(R=y.$justify)!==null&&R!==void 0?R:"unset"},function(y){var R;return(R=A(y.$gap))!==null&&R!==void 0?R:"unset"}),N=B.default.div(C||(C=m()([`
  flex: `,`;
`])),function(y){var R;return(R=y.$flex)!==null&&R!==void 0?R:"0 0 auto"})},67191:function(L,F,g){g.r(F),g.d(F,{Input:function(){return C}});var U=g(97857),m=g.n(U),B=g(67294),E=g(85893),C=function(b){var N=b;if("value"in b){var y;N=m()(m()({},b),{},{value:(y=b.value)!==null&&y!==void 0?y:""})}return(0,E.jsx)("input",m()({},N))}},78944:function(L,F,g){g.r(F);var U=g(97857),m=g.n(U),B=g(13769),E=g.n(B),C=g(67294),A=g(26193),b=g(85893),N=["label"];F.default=function(y){var R=y.label,T=E()(y,N),ie=A.default.useControl(y.control);return(0,b.jsxs)("div",{children:[!!R&&(0,b.jsx)("span",{style:{marginRight:8},children:R}),(0,b.jsx)(A.default.Item,m()(m()({},T),{},{control:ie})),(0,b.jsx)(A.default.Validation,{control:ie,children:function(Q){var O;return(0,b.jsx)("div",{children:Q==null||(O=Q.results)===null||O===void 0?void 0:O.map(function(le,K){return(0,b.jsx)("span",{style:{color:le.type==="error"?"red":"orange"},children:le.message},K)})})}})]})}},26193:function(L,F,g){g.r(F),g.d(F,{ConfigProvider:function(){return $e},Rules:function(){return _n},UpdateRender:function(){return De},ValidationRender:function(){return Te},default:function(){return wn},useConfig:function(){return fe},useControl:function(){return Z},useControlInstance:function(){return ne},useOnValueChange:function(){return ve},useValidation:function(){return be},useWatch:function(){return ye}});var U=g(97857),m=g.n(U),B=g(13769),E=g.n(B),C=g(67294),A=g(19632),b=g.n(A),N=g(15009),y=g.n(N),R=g(99289),T=g.n(R),ie=g(52677),J=g.n(ie),Q=g(5574),O=g.n(Q),le=g(12444),K=g.n(le),ke=g(72004),X=g.n(ke),Ae=g(9783),p=g.n(Ae),S="_STORE_INTERNAL_TOKEN_",j=function(a){return a.Group="group",a.List="list",a.Item="item",a}({}),Y=function(e){if(typeof e!="undefined")return Array.isArray(e)?e.length?e:void 0:[e]},ue=function(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!e||!n||t&&e.length!==n.length?!1:e.every(function(r,o){return r===n[o]})},Pe=function(e){var n=Y(e),t=C.useRef(n);return(typeof n=="undefined"||typeof t.current=="undefined"||!ue(n,t.current,!0))&&(t.current=n),t.current},se=function(){function a(){K()(this,a),p()(this,"listeners",[])}return X()(a,[{key:"add",value:function(n){var t=this;return this.listeners.push(n),function(){t.remove(n)}}},{key:"remove",value:function(n){var t=this.listeners.indexOf(n);t>-1&&this.listeners.splice(t,1)}},{key:"trigger",value:function(n){this.listeners.forEach(function(t){return t(n)})}}]),a}(),Ne=g(64599),Ie=g.n(Ne);function We(a){return typeof a=="undefined"||a===null}function Re(a){if(a&&J()(a)==="object")return Array.isArray(a)?[]:{}}function W(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=a,t=!0,r=Ie()(e),o;try{for(r.s();!(o=r.n()).done;){var l,s=o.value;if(t=!We(n)&&Object.prototype.hasOwnProperty.call(n,s),n=(l=n)===null||l===void 0?void 0:l[s],!t)break}}catch(d){r.e(d)}finally{r.f()}return[n,t]}function Ve(a){return Array.isArray(a)?b()(a):Object.assign({},a)}function Ee(a){return typeof a=="number"?[]:{}}function _e(a,e,n){for(var t=Ve(a!=null?a:Ee(e[0])),r=t,o=0;o<e.length;o+=1){var l,s=e[o];if(o===e.length-1)return r[s]=n,t;r[s]=Ve((l=r[s])!==null&&l!==void 0?l:Ee(e[o+1])),r=r[s]}return t}function Ge(a,e,n){for(var t=n,r=n,o=0;o<e.length&&(o===0&&!t&&(t=Re(a),r=t),!!r);o+=1){var l=e[o],s=W(a,e.slice(0,o+1)),d=O()(s,2),h=d[0],i=d[1];if(o===e.length-1){i&&(r[l]=h);break}var f=W(n,e.slice(0,o+1)),c=O()(f,2),u=c[0],v=c[1];v?r[l]=u:i&&(r[l]=Re(h)),r=r[l]}return t}function we(a,e,n){if(e>a.length-1||n>a.length-1)throw new Error("Out of range");var t=a[e],r=a[n];return a[n]=t,a[e]=r,a}function Ue(a){if(J()(a)!=="object"||a===null)return!1;var e=Object.getPrototypeOf(a);return e===Object.prototype||e===null}function Be(a,e){return e&&e.target&&J()(e.target)==="object"&&a in e.target?e.target[a]:e}var je=Symbol("control"),Ke=function(){function a(){var e=this;K()(this,a),p()(this,"lock",!1),p()(this,"type",j.Item),p()(this,"parent",void 0),p()(this,"children",new Set),p()(this,"value",void 0),p()(this,"initialValue",void 0),p()(this,"namePaths",void 0),p()(this,"touched",!1),p()(this,"validator",function(){return Promise.resolve()}),p()(this,"validating",void 0),p()(this,"validationChange",new se),p()(this,"validationErrors",void 0),p()(this,"validateMessages",void 0),p()(this,"valueChange",new se),p()(this,"listChange",new se),p()(this,"resetChange",new se),p()(this,"stamp",void 0),p()(this,"_init",!1),p()(this,"setValidator",function(n){n?e.validator=n:e.validator=function(){return Promise.resolve()}}),p()(this,"getStrictValue",function(n){if(e.type===j.Item)return e.value;var t,r=n==null?void 0:n.map(Y),o=e.getInitializedValue(),l=function s(d){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];d.forEach(function(i){var f=[].concat(b()(h),b()(i.namePaths));i.type===j.Item&&(!r||r.some(function(c){return!c||ue(c,f)}))&&(t=Ge(o,f,t)),s(i.children,f)})};return l(e.children),t}),p()(this,"getName",function(){if(e.parent)return e.namePaths}),p()(this,"getFullName",function(){if(e.parent)return[].concat(b()(e.parent.getFullName()||[]),b()(e.namePaths))}),p()(this,"triggerValidationChange",function(){e.validationChange.trigger(e.validating),e.validating?e.validating.catch(function(n){return e.validationErrors=n}):e.validationErrors=void 0}),p()(this,"validateByEvent",function(n){var t=typeof n=="function"?n:e.validator;e.validating=t(e.internalControl),e.triggerValidationChange()}),p()(this,"validateOptionalThrow",function(){var n=T()(y()().mark(function t(r){var o,l,s,d;return y()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return o=r||{},l=o.thrownTypes,s=l===void 0?["error"]:l,e.validating=e.validator(e.internalControl),e.triggerValidationChange(),i.prev=3,i.next=6,e.validating;case 6:i.next=13;break;case 8:if(i.prev=8,i.t0=i.catch(3),d=i.t0.filter(function(f){return s.includes(f.type)}),!d.length){i.next=13;break}throw d;case 13:case"end":return i.stop()}},t,null,[[3,8]])}));return function(t){return n.apply(this,arguments)}}()),p()(this,"validate",function(){var n=T()(y()().mark(function t(r){return y()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.validateOptionalThrow(r);case 2:return l.abrupt("return",e.getStrictValue());case 3:case"end":return l.stop()}},t)}));return function(t){return n.apply(this,arguments)}}()),p()(this,"clearValidation",function(){e.validating=void 0,e.triggerValidationChange(),e.children.forEach(function(n){return n.clearValidation()})}),p()(this,"validateFields",function(){var n=T()(y()().mark(function t(r,o){var l,s,d;return y()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return l=[],s=function f(c,u,v){var P=u==null?void 0:u.map(Y),I=v||{},_=I.recursive;if(!P){l.push(function(){return c.validateOptionalThrow(o)}),c.children.forEach(function(V){return f(V)});return}if(P.length){if(P.some(function(V){return!V})&&(l.push(function(){return c.validateOptionalThrow(o)}),_)){c.children.forEach(function(V){return f(V)});return}c.children.forEach(function(V){var w=P.filter(function(z){return ue(V.namePaths,z)});f(V,w.map(function(z){return z.slice(V.namePaths.length)}),v)})}},s(e,r,o),i.next=5,Promise.all(l.map(function(f){return f().catch(function(c){return c})}));case 5:if(d=i.sent.filter(Boolean),!d.length){i.next=8;break}throw d;case 8:return i.abrupt("return",e.getStrictValue(r));case 9:case"end":return i.stop()}},t)}));return function(t,r){return n.apply(this,arguments)}}()),p()(this,"getValidationErrors",function(){var n,t=((n=e.validationErrors)===null||n===void 0?void 0:n.slice())||[];if(e.children.forEach(function(r){var o=r.getValidationErrors();o&&t.push.apply(t,b()(o))}),t.length)return t}),p()(this,"manualSetValue",function(n){return e.setData({value:n}),e.clearValidation(),e.value}),p()(this,"setFieldValue",function(n,t){var r=Y(n);if(!(!r||e.type===j.Item)){var o=e.get(r);o?o.setValue(t):e.setData({value:_e(e.getInitializedValue(),r,t)})}}),p()(this,"isTouched",function(){return e.type===j.Item||e.touched?e.touched:Array.from(e.children).some(function(n){return n.isTouched()})}),p()(this,"reset",function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e.setData({value:e.getInitialValue(),preventCapturing:!0,preventBubbling:n}),e.resetChange.trigger(),e.touched=!1,e.children.forEach(function(t){return t.reset(!0)})}),p()(this,"triggerReset",function(){e.reset(),e.clearValidation()}),p()(this,"add",function(n,t){if(e.type!==j.List)throw new Error("".concat(e.type," has no method add."));e.listChange.trigger({type:"add",value:n,insertIndex:t})}),p()(this,"remove",function(n){if(e.type!==j.List)throw new Error("".concat(e.type," has no method remove."));e.listChange.trigger({type:"remove",index:n})}),p()(this,"move",function(n,t){if(e.type!==j.List)throw new Error("".concat(e.type," has no method move."));e.listChange.trigger({type:"move",from:n,to:t})}),p()(this,"get",function(n){var t=Y(n);if(t){for(var r=0,o=Array.from(e.children);r<o.length;r++){var l=o[r];if(ue(l.namePaths,t)){var s=l.get(t.slice(l.namePaths.length));if(s)return s}}return}return e.internalControl}),p()(this,"control",{getValue:function(){return e.value},getStrictValue:this.getStrictValue,getName:this.getName,getFullName:this.getFullName,setValue:this.manualSetValue,setFieldValue:this.setFieldValue,isTouched:this.isTouched,reset:this.triggerReset,validate:this.validate,validateFields:this.validateFields,getValidationErrors:this.getValidationErrors,clearValidation:this.clearValidation,add:this.add,remove:this.remove,move:this.move,get:this.get,getStoreStype:function(){return e.type}}),p()(this,"internalControl",m()(m()({},this.control),{},p()({getStore:function(t){if(t===S)return e;throw new Error("For internal use only")}},je,!0)))}return X()(a,[{key:"init",value:function(n){this.initialValue=n.value,!this._init&&(this.namePaths=n.namePaths,this.parent?this.setData({value:W(this.parent.value,this.namePaths)[0]}):this.setData({value:this.getInitialValue()}),this._init=!0)}},{key:"getInitialValue",value:function(){return this.parent?W(this.parent.getInitialValue(),this.namePaths)[0]:this.initialValue}},{key:"getInitializedValue",value:function(){return this.type===j.List&&!Array.isArray(this.value)?[]:this.type===j.Group&&!Ue(this.value)?Object.assign({},this.value):this.value}},{key:"setNamePaths",value:function(n){this.namePaths=n,this.parent&&this.setData({value:W(this.parent.value,this.namePaths)[0]})}},{key:"setData",value:function(n){var t=this;if(!this.lock){this.lock=!0;var r=n.eventInterceptor,o=n.preventCapturing,l=n.preventBubbling,s=n.value,d=this.value,h=[];if(!l&&this.parent&&!this.parent.lock){var i=this.parent.value,f=W(this.parent.value,this.namePaths),c=O()(f,1),u=c[0];Object.is(u,s)||(i=_e(this.parent.getInitializedValue(),this.namePaths,s)),this.parent.setData({value:i,eventInterceptor:function(P){h.push(P)}})}this.value=s,Object.is(this.value,d)||(h.push(function(){return t.valueChange.trigger({newValue:s,oldValue:d})}),o||this.children.forEach(function(v){v.lock||v.setData({value:W(t.value,v.namePaths)[0],eventInterceptor:function(I){h.push(I)}})})),typeof r=="function"?r(function(){return h.forEach(function(v){return v()})}):h.forEach(function(v){return v()}),this.lock=!1}}}]),a}();function Ze(a){return!!a&&J()(a)==="object"&&!!a[je]}function ze(a,e){return a.replace(/\\?\$\{\w+\}/g,function(n){var t;if(n.startsWith("\\"))return n.slice(1);var r=n.slice(2,-1);return"".concat((t=e[r])!==null&&t!==void 0?t:"")})}var q=X()(function a(e){K()(this,a),p()(this,"message",void 0),p()(this,"variable",void 0),Object.assign(this,e)}),ce=function(){function a(e){var n=this;K()(this,a),p()(this,"defaultMessage",void 0),p()(this,"name",void 0),p()(this,"setDefaultMessage",function(t){n.defaultMessage=t}),this.defaultMessage=e.defaultMessage,this.name=e.name}return X()(a,[{key:"factory",value:function(n){var t=this,r=function(){var l=n.apply(void 0,arguments),s=m()(m()({},l),{},{validator:function(){var d=T()(y()().mark(function i(f){var c;return y()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.prev=0,v.next=3,l.validator(f);case 3:return v.abrupt("return",v.sent);case 6:if(v.prev=6,v.t0=v.catch(0),!(v.t0 instanceof Error)){v.next=10;break}throw v.t0;case 10:throw c=function(){if(v.t0 instanceof q){var P,I;if(typeof v.t0.message=="string")return v.t0.message;var _=(P=f.getStore(S).validateMessages)===null||P===void 0?void 0:P[t.name];return ze(_!=null?_:t.defaultMessage,m()({name:(I=f.getFullName())===null||I===void 0?void 0:I.join(",")},v.t0.variable))}return typeof v.t0=="string"?v.t0:"".concat(v.t0)}(),new Error(c);case 12:case"end":return v.stop()}},i,null,[[0,6]])}));function h(i){return d.apply(this,arguments)}return h}()});return s};return r.setDefaultMessage=this.setDefaultMessage,Object.defineProperty(r,"defaultMessage",{get:function(){return t.defaultMessage}}),Object.defineProperty(r,"name",{get:function(){return t.name}}),r}}]),a}(),Ce=X()(function a(e){K()(this,a),p()(this,"type",void 0),p()(this,"message",void 0),p()(this,"control",void 0),Object.assign(this,e)}),xe=function(){var a=T()(y()().mark(function e(n){var t,r,o,l,s,d,h,i,f=arguments;return y()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(t=f.length>1&&f[1]!==void 0?f[1]:"serial",r=f.length>2?f[2]:void 0,!r){u.next=35;break}if(o=function(){var v=T()(y()().mark(function P(I){var _;return y()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.prev=0,w.next=3,I.validator(n);case 3:w.next=9;break;case 5:return w.prev=5,w.t0=w.catch(0),_=w.t0 instanceof Error?w.t0.message:"".concat(w.t0),w.abrupt("return",new Ce({type:I.type||"error",message:_,control:n}));case 9:case"end":return w.stop()}},P,null,[[0,5]])}));return function(I){return v.apply(this,arguments)}}(),l=[],t!=="serial"){u.next=30;break}s=Ie()(r),u.prev=7,s.s();case 9:if((d=s.n()).done){u.next=20;break}return h=d.value,u.next=13,o(h);case 13:if(i=u.sent,!(i instanceof Ce)){u.next=18;break}if(l.push(i),i.type!=="error"){u.next=18;break}return u.abrupt("break",20);case 18:u.next=9;break;case 20:u.next=25;break;case 22:u.prev=22,u.t0=u.catch(7),s.e(u.t0);case 25:return u.prev=25,s.f(),u.finish(25);case 28:u.next=33;break;case 30:return u.next=32,Promise.all(r.map(o));case 32:l=u.sent.filter(function(v){return v instanceof Ce});case 33:if(!(l.length>0)){u.next=35;break}throw l;case 35:case"end":return u.stop()}},e,null,[[7,22,25,28]])}));return function(n){return a.apply(this,arguments)}}(),$=g(85893),He=["children"],Se=C.createContext(null),fe=function(){return C.useContext(Se)||{}},$e=function(e){var n=e.children,t=E()(e,He),r=fe(),o=C.useMemo(function(){return m()(m()(m()({},r),t),{},{validateMessages:m()(m()({},r.validateMessages),t.validateMessages)})},[r,t]);return(0,$.jsx)(Se.Provider,{value:o,children:n})},Je=["name","root","control"],ee=C.createContext(void 0),Qe=["independentControl"],Z=function(e){var n=C.useRef(void 0),t=C.useRef(e);if(t.current!==e)throw new Error('Parameter "control" cannot be variable.');return n.current||(e?n.current=e:n.current=new Ke().internalControl),n.current},Me=function(e){var n=e.children,t=e.control,r=e.initialValue,o=e.namePaths,l=e.rules,s=e.ref,d=C.useRef({}),h=C.useContext(ee)||{},i=h.parent,f=h.validateMode,c=i==null?void 0:i.getStore(S),u=t.getStore(S);return u.parent=c,u.init({value:r,namePaths:o}),u.setValidator(function(){var v=T()(y()().mark(function P(I){return y()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,xe(I,f,l);case 2:return V.abrupt("return",V.sent);case 3:case"end":return V.stop()}},P)}));return function(P){return v.apply(this,arguments)}}()),C.useEffect(function(){if(u.stamp||(u.stamp=d.current),u.stamp!==d.current)throw new Error('"control" cannot be attached to multiple components at the same time');return function(){u.stamp=void 0}},[u]),C.useEffect(function(){return c==null||c.children.add(u),u.parent=c,function(){u.parent=void 0,c==null||c.children.delete(u)}},[u,c]),C.useEffect(function(){o!==u.namePaths&&u.setNamePaths(o)},[u,o]),C.useImperativeHandle(s,function(){return t}),n},Xe=function(e){var n=e.control,t=e.namePaths,r=e.validateTrigger,o=e.validateMode,l=C.useContext(ee),s=C.useMemo(function(){var d=l||{},h=d.collection,i=h===void 0?[]:h,f=d.namePathList,c=f===void 0?[]:f,u=d.validateMode,v=d.validateTrigger,P=i[i.length-1];return n.getStore(S).type!==j.Item&&(i=[].concat(b()(i),[n]),c=[].concat(b()(c),[t])),{control:n,collection:i,parent:P,namePathList:c,validateTrigger:r||v,validateMode:o||u}},[l,n,t,o,r]);return(0,$.jsx)(ee.Provider,{value:s,children:(0,$.jsx)(Me,m()({},e))})},Ye=function(e){var n=e.name,t=e.root,r=e.control,o=E()(e,Je),l=o.validateMode,s=o.validateTrigger,d=Pe(n),h=Z(r),i=fe();h.getStore(S).validateMessages=i.validateMessages;var f=C.useMemo(function(){return{control:h,collection:[h],namePathList:d?[d]:[],validateMode:l,validateTrigger:s}},[h,d,l,s]);return t||!d?(0,$.jsx)(ee.Provider,{value:f,children:(0,$.jsx)(Me,m()(m()({},o),{},{control:h,namePaths:d!=null?d:Qe}))}):(0,$.jsx)(Xe,m()(m()({},o),{},{control:h,namePaths:d}))},me=Ye,qe=["control"],en=function(e){var n=e.control,t=E()(e,qe),r=Z(n);return r.getStore(S).type=j.Group,(0,$.jsx)(me,m()(m()({},t),{},{control:r,root:!1}))},nn=en,Oe=function(){return C.useContext(ee)||{}},ne=function(e){var n=Oe(),t=n.collection,r=n.control;return e&&t?t[0]:r},te=function(e){var n=C.useRef(e);n.current!==e&&console.warn('Parameter "control" cannot be variable.');var t=ne();return n.current||t},tn=["control","children"],de=function(e){return e.map(function(n,t){return m()(m()({},n),{},{name:t})})},rn=function(e){var n=e.children,t=ne(),r=t.getStore(S),o=C.useRef(-1),l=C.useState(function(){var i=t.getValue()||[];return i.map(function(f,c){return{name:c,key:++o.current}})}),s=O()(l,2),d=s[0],h=s[1];return C.useEffect(function(){return r.listChange.add(function(i){var f=b()(r.value||[]);switch(r.touched=!0,i.type){case"add":{var c=typeof i.insertIndex=="number"?i.insertIndex:f.length;h(function(u){var v=b()(u);return v.splice(c,0,{name:v.length,key:++o.current}),de(v)}),f.splice(c,0,i.value),r.setData({value:f,preventCapturing:!0});break}case"remove":{h(function(u){var v=b()(u);return v.splice(i.index,1),de(v)}),f.splice(i.index,1),r.setData({value:f,preventCapturing:!0});break}case"move":{h(function(u){return de(we(b()(u),i.from,i.to))}),we(f,i.from,i.to),r.setData({value:f,preventCapturing:!0});break}}r.validateOptionalThrow()})},[r]),C.useEffect(function(){return r.valueChange.add(function(i){var f=i.newValue,c=i.oldValue,u=(f==null?void 0:f.length)||0,v=(c==null?void 0:c.length)||0;u!==v&&h(function(P){var I=P;if(I.length>u)I=I.slice(0,u);else if(I.length<u){I=b()(I);for(var _=I.length;_<u;_+=1)I.push({name:_,key:++o.current})}return de(I)})})},[r]),n(d,t)},an=function(e){var n=e.control,t=e.children,r=E()(e,tn),o=Z(n);return o.getStore(S).type=j.List,(0,$.jsx)(me,m()(m()({},r),{},{control:o,root:!1,children:(0,$.jsx)(rn,{children:t})}))},on=an,ve=function(e,n){var t=te(n),r=C.useRef(e);r.current=C.useMemo(function(){return e},[e]),C.useEffect(function(){return t==null?void 0:t.getStore(S).valueChange.add(function(o){return r.current(o)})},[t])};function ye(a,e){var n=void 0,t=void 0,r=C.useRef(void 0);e&&(n=e),Ze(a)?n=a:typeof a=="function"?r.current=a:t=a;var o=te(n),l=Pe(t),s=C.useCallback(function(){return r.current?r.current(o.getValue()):l?W(o.getValue(),l)[0]:o.getValue()},[l,o]),d=C.useState(function(){return s()}),h=O()(d,2),i=h[0],f=h[1];return C.useEffect(function(){f(s())},[o,s]),ve(function(){var c=s();Object.is(i,c)||f(c)},o),i}var ln=["element","valuePropName"],un=["control","children","valuePropName","trigger","getValueFromEvent","rules"],Le=function(e){var n=e.element,t=e.valuePropName,r=E()(e,ln),o=ye();return typeof n=="function"?n(m()(m()({},r),{},p()({},t,o))):C.cloneElement(n,m()(m()({},r),{},p()({},t,o)))},sn=function(e){var n=e.children,t=e.valuePropName,r=t===void 0?"value":t,o=e.getValueFromEvent,l=e.trigger,s=l===void 0?"onChange":l,d=e.rules,h=d===void 0?[]:d,i=ne(),f=Oe(),c=f.validateTrigger,u=c===void 0?"onChange":c,v=f.validateMode,P=f.namePathList,I=C.useMemo(function(){var x=i.getName();if(x)return{name:(P||[]).concat([x]).flat(1).join(".")}},[P,i]),_=i.getStore(S),V=h.map(function(x){var D=x.validateTrigger||u;return m()(m()({},x),{},{validateTrigger:Array.isArray(D)?D:[D]})}),w=Array.from(new Set([u].concat(b()(V.map(function(x){return x.validateTrigger}))).flat(1))),z=w.reduce(function(x,D){var G=x[D];return x[D]=function(){for(var pe=arguments.length,re=new Array(pe),H=0;H<pe;H++)re[H]=arguments[H];G==null||G.apply(void 0,re),_.validateByEvent(T()(y()().mark(function ae(){return y()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,xe(i,v,V.filter(function(he){return he.validateTrigger.includes(D)}));case 2:return k.abrupt("return",k.sent);case 3:case"end":return k.stop()}},ae)})))},x},p()({},s,function(){_.touched=!0,_.setData({value:typeof o=="function"?o.apply(void 0,arguments):Be(r,arguments.length<=0?void 0:arguments[0])})}));return typeof n=="function"?(0,$.jsx)(Le,m()(m()(m()({},I),z),{},{valuePropName:r,element:n})):C.Children.map(n,function(x,D){if(D===0&&C.isValidElement(x)){var G=x,pe=Object.keys(z).reduce(function(re,H){var ae=z[H];return re[H]=function(){for(var oe,k,he=arguments.length,Fe=new Array(he),ge=0;ge<he;ge++)Fe[ge]=arguments[ge];return ae==null||ae.apply(void 0,Fe),(oe=(k=G.props)[s])===null||oe===void 0?void 0:oe.call.apply(oe,[k].concat(Fe))},re},m()({},"name"in G.props?{name:G.props.name}:I));return(0,C.createElement)(Le,m()(m()({},pe),{},{valuePropName:r,element:G,key:"inputRender"}))}return x})},cn=function(e){var n=e.control,t=e.children,r=e.valuePropName,o=e.trigger,l=e.getValueFromEvent,s=e.rules,d=E()(e,un),h=C.useState(0),i=O()(h,2),f=i[0],c=i[1],u=Z(n),v=u.getStore(S);return v.type=j.Item,C.useEffect(function(){return v.resetChange.add(function(){c(function(P){return P+1})})},[v]),(0,$.jsx)(me,m()(m()({},d),{},{rules:s,control:u,root:!1,children:(0,$.jsx)(sn,{valuePropName:r,trigger:o,getValueFromEvent:l,rules:s,children:t},f)}))},fn=cn,be=function(e){var n=te(e),t=C.useRef(void 0),r=C.useState({}),o=O()(r,2),l=o[1],s=C.useRef({status:"init"});return C.useEffect(function(){var d=function(c){var u;c.status!==((u=s.current)===null||u===void 0?void 0:u.status)&&(s.current=c,l({}))},h=n==null?void 0:n.getStore(S),i=function(c){t.current=c,c?(d(m()(m()({},s.current),{},{status:"pending"})),c.then(function(){t.current===c&&d({status:"fulfilled"})}).catch(function(u){t.current===c&&d({status:"rejected",results:u})})):d({status:"init"})};return i(h==null?void 0:h.validating),h==null?void 0:h.validationChange.add(i)},[n]),s.current},Te=function(e){var n=e.control,t=e.children,r=te(n),o=be(r);return t(o,r)},De=function(e){var n=e.children,t=e.condition,r=e.control,o=te(r),l=C.useState({}),s=O()(l,2),d=s[1];return ve(function(h){var i=h.oldValue,f=h.newValue;(typeof t=="function"&&t(f,i)||typeof t=="undefined")&&d({})},o),n(o)},mn=["initialValues","control"],M=function(e){var n=e.initialValues,t=e.control,r=E()(e,mn),o=Z(t);return o.getStore(S).type=j.Group,(0,$.jsx)(me,m()(m()({},r),{},{control:o,initialValue:n,root:!0}))};M.Item=fn,M.Group=nn,M.List=on,M.ConfigProvider=$e,M.useControl=Z,M.useOnValueChange=ve,M.useWatch=ye,M.useControlInstance=ne,M.useValidation=be,M.useConfig=fe,M.Validation=Te,M.Update=De;var dn=M,vn=["message"],pn=new ce({name:"required",defaultMessage:'"${name}" is required'}),hn=pn.factory(function(a){var e=a||{},n=e.message,t=E()(e,vn);return m()(m()({},t),{},{validator:function(o){var l=o.getValue();return typeof l=="undefined"||l===null||l===""||Array.isArray(l)&&l.length===0?Promise.reject(new q({message:n})):Promise.resolve()}})}),gn=["message"],Cn=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,yn=new ce({name:"email",defaultMessage:'"${name}" is not a valid email'}),bn=yn.factory(function(a){var e=a||{},n=e.message,t=E()(e,gn);return m()(m()({},t),{},{validator:function(o){var l=o.getValue();return Cn.test(l)?Promise.resolve():Promise.reject(new q({message:n}))}})}),Fn=["message"],Pn=["message"],In=new ce({name:"maxLength",defaultMessage:'"${name}" can contain up to ${length} characters'}),Rn=In.factory(function(a,e){var n=e||{},t=n.message,r=E()(n,Fn);return m()(m()({},r),{},{validator:function(l){var s=l.getValue();return(typeof s=="string"||Array.isArray(s))&&s.length>a?Promise.reject(new q({message:t,variable:{length:a}})):Promise.resolve()}})}),Vn=new ce({name:"minLength",defaultMessage:'"${name}" must be at least ${length} characters'}),En=Vn.factory(function(a,e){var n=e||{},t=n.message,r=E()(n,Pn);return m()(m()({},r),{},{validator:function(l){var s=l.getValue(),d=typeof s=="string"||Array.isArray(s)?s.length:"".concat(s!=null?s:"").length;return d<a?Promise.reject(new q({message:t,variable:{length:a}})):Promise.resolve()}})}),_n={required:hn,email:bn,maxLength:Rn,minLength:En},wn=dn},63556:function(L,F){F.Z=`import React from 'react';
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
      <Form.Update control={control}>
        {
          (ctl) => {
            // eslint-disable-next-line no-console
            console.log(ctl?.getFullName(), ctl?.getValue());
            return null;
          }
        }
      </Form.Update>
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
                            <CustomItem
                              name="name"
                              rules={[
                                Rules.required(),
                              ]}
                            >
                              <input />
                            </CustomItem>
                            <CustomItem
                              name="desc"
                            >
                              <input />
                            </CustomItem>
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
          name="normalForm"
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
