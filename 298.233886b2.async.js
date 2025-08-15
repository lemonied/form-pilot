"use strict";(self.webpackChunkform_pilot=self.webpackChunkform_pilot||[]).push([[298],{98231:function(L,F,g){g.r(F),g.d(F,{Col:function(){return N},Row:function(){return b}});var B=g(68400),d=g.n(B),K=g(41686),E,C,A=function(R){return typeof R=="number"?"".concat(R,"px"):R},b=K.default.div(E||(E=d()([`
  display: flex;
  flex-wrap: wrap;
  align-items: `,`;
  justify-content: `,`;
  gap: `,`;
`])),function(y){var R;return(R=y.$align)!==null&&R!==void 0?R:"center"},function(y){var R;return(R=y.$justify)!==null&&R!==void 0?R:"unset"},function(y){var R;return(R=A(y.$gap))!==null&&R!==void 0?R:"unset"}),N=K.default.div(C||(C=d()([`
  flex: `,`;
`])),function(y){var R;return(R=y.$flex)!==null&&R!==void 0?R:"0 0 auto"})},67191:function(L,F,g){g.r(F),g.d(F,{Input:function(){return C}});var B=g(97857),d=g.n(B),K=g(67294),E=g(85893),C=function(b){var N=b;if("value"in b){var y;N=d()(d()({},b),{},{value:(y=b.value)!==null&&y!==void 0?y:""})}return(0,E.jsx)("input",d()({},N))}},78944:function(L,F,g){g.r(F);var B=g(97857),d=g.n(B),K=g(13769),E=g.n(K),C=g(67294),A=g(29107),b=g(85893),N=["label"];F.default=function(y){var R=y.label,T=E()(y,N),ie=A.default.useControl(y.control);return(0,b.jsxs)("div",{children:[!!R&&(0,b.jsx)("span",{style:{marginRight:8},children:R}),(0,b.jsx)(A.default.Item,d()(d()({},T),{},{control:ie})),(0,b.jsx)(A.default.Validation,{control:ie,children:function(J){var M;return(0,b.jsx)("div",{children:J==null||(M=J.results)===null||M===void 0?void 0:M.map(function(le,Z){return(0,b.jsx)("span",{style:{color:le.type==="error"?"red":"orange"},children:le.message},Z)})})}})]})}},29107:function(L,F,g){g.r(F),g.d(F,{ConfigProvider:function(){return Me},Rules:function(){return wn},UpdateRender:function(){return ke},ValidationRender:function(){return De},default:function(){return jn},useConfig:function(){return fe},useControl:function(){return z},useControlInstance:function(){return ee},useOnValueChange:function(){return ve},useValidation:function(){return be},useWatch:function(){return ye}});var B=g(97857),d=g.n(B),K=g(13769),E=g.n(K),C=g(67294),A=g(19632),b=g.n(A),N=g(15009),y=g.n(N),R=g(99289),T=g.n(R),ie=g(52677),H=g.n(ie),J=g(5574),M=g.n(J),le=g(12444),Z=g.n(le),Ae=g(72004),Q=g.n(Ae),Ne=g(9783),p=g.n(Ne),x="_STORE_INTERNAL_TOKEN_",j=function(a){return a.Group="group",a.List="list",a.Item="item",a}({}),X=function(e){if(typeof e!="undefined")return Array.isArray(e)?e.length?e:void 0:[e]},ue=function(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!e||!n||t&&e.length!==n.length?!1:e.every(function(r,o){return r===n[o]})},Ie=function(e){var n=X(e),t=C.useRef(n);return(typeof n=="undefined"||typeof t.current=="undefined"||!ue(n,t.current,!0))&&(t.current=n),t.current},se=function(){function a(){Z()(this,a),p()(this,"listeners",[])}return Q()(a,[{key:"add",value:function(n){var t=this;return this.listeners.push(n),function(){t.remove(n)}}},{key:"remove",value:function(n){var t=this.listeners.indexOf(n);t>-1&&this.listeners.splice(t,1)}},{key:"trigger",value:function(n){this.listeners.forEach(function(t){return t(n)})}}]),a}(),We=g(64599),Re=g.n(We);function Ge(a){return typeof a=="undefined"||a===null}function Ve(a){if(a&&H()(a)==="object")return Array.isArray(a)?[]:{}}function W(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=a,t=!0,r=Re()(e),o;try{for(r.s();!(o=r.n()).done;){var i,s=o.value;if(t=!Ge(n)&&Object.prototype.hasOwnProperty.call(n,s),n=(i=n)===null||i===void 0?void 0:i[s],!t)break}}catch(m){r.e(m)}finally{r.f()}return[n,t]}function Ee(a){return Array.isArray(a)?b()(a):Object.assign({},a)}function _e(a){return typeof a=="number"?[]:{}}function we(a,e,n){for(var t=Ee(a!=null?a:_e(e[0])),r=t,o=0;o<e.length;o+=1){var i,s=e[o];if(o===e.length-1)return r[s]=n,t;r[s]=Ee((i=r[s])!==null&&i!==void 0?i:_e(e[o+1])),r=r[s]}return t}function Ue(a,e,n){for(var t=n,r=n,o=0;o<e.length&&(o===0&&!t&&(t=Ve(a),r=t),!!r);o+=1){var i=e[o],s=W(a,e.slice(0,o+1)),m=M()(s,2),h=m[0],l=m[1];if(o===e.length-1){l&&(r[i]=h);break}var c=W(n,e.slice(0,o+1)),f=M()(c,2),u=f[0],v=f[1];v?r[i]=u:l&&(r[i]=Ve(h)),r=r[i]}return t}function je(a,e,n){if(e>a.length-1||n>a.length-1)throw new Error("Out of range");var t=a[e],r=a[n];return a[n]=t,a[e]=r,a}function Be(a){if(H()(a)!=="object"||a===null)return!1;var e=Object.getPrototypeOf(a);return e===Object.prototype||e===null}function Ke(a,e){return e&&e.target&&H()(e.target)==="object"&&a in e.target?e.target[a]:e}var xe=Symbol("control"),Ze=function(){function a(){var e=this;Z()(this,a),p()(this,"lock",!1),p()(this,"type",j.Item),p()(this,"parent",void 0),p()(this,"children",new Set),p()(this,"value",void 0),p()(this,"initialValue",void 0),p()(this,"namePaths",void 0),p()(this,"touched",!1),p()(this,"validator",function(){return Promise.resolve()}),p()(this,"validating",void 0),p()(this,"validationChange",new se),p()(this,"validationErrors",void 0),p()(this,"validateMessages",void 0),p()(this,"valueChange",new se),p()(this,"listChange",new se),p()(this,"resetChange",new se),p()(this,"stamp",void 0),p()(this,"_init",!1),p()(this,"setValidator",function(n){n?e.validator=n:e.validator=function(){return Promise.resolve()}}),p()(this,"getStrictValue",function(n){if(e.type===j.Item)return e.value;var t,r=n==null?void 0:n.map(X),o=e.getInitializedValue(),i=function s(m){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];m.forEach(function(l){var c=[].concat(b()(h),b()(l.namePaths));l.type===j.Item&&(!r||r.some(function(f){return!f||ue(f,c)}))&&(t=Ue(o,c,t)),s(l.children,c)})};return i(e.children),t}),p()(this,"getName",function(){if(e.parent)return e.namePaths}),p()(this,"getFullName",function(){if(e.parent)return[].concat(b()(e.parent.getFullName()||[]),b()(e.namePaths))}),p()(this,"triggerValidationChange",function(){e.validationChange.trigger(e.validating),e.validating?e.validating.catch(function(n){return e.validationErrors=n}):e.validationErrors=void 0}),p()(this,"validateByEvent",function(n){var t=typeof n=="function"?n:e.validator;e.validating=t(e.internalControl),e.triggerValidationChange()}),p()(this,"validateOptionalThrow",function(){var n=T()(y()().mark(function t(r){var o,i,s,m;return y()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return o=r||{},i=o.thrownTypes,s=i===void 0?["error"]:i,e.validating=e.validator(e.internalControl),e.triggerValidationChange(),l.prev=3,l.next=6,e.validating;case 6:l.next=13;break;case 8:if(l.prev=8,l.t0=l.catch(3),m=l.t0.filter(function(c){return s.includes(c.type)}),!m.length){l.next=13;break}throw m;case 13:case"end":return l.stop()}},t,null,[[3,8]])}));return function(t){return n.apply(this,arguments)}}()),p()(this,"validate",function(){var n=T()(y()().mark(function t(r){return y()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.validateOptionalThrow(r);case 2:return i.abrupt("return",e.getStrictValue());case 3:case"end":return i.stop()}},t)}));return function(t){return n.apply(this,arguments)}}()),p()(this,"clearValidation",function(){e.validating=void 0,e.triggerValidationChange(),e.children.forEach(function(n){return n.clearValidation()})}),p()(this,"validateFields",function(){var n=T()(y()().mark(function t(r,o){var i,s,m;return y()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=[],s=function c(f,u,v){var I=u==null?void 0:u.map(X),P=v||{},w=P.recursive;if(!I){i.push(function(){return f.validateOptionalThrow(o)}),f.children.forEach(function(V){return c(V)});return}if(I.length){if(I.some(function(V){return!V})&&(i.push(function(){return f.validateOptionalThrow(o)}),w)){f.children.forEach(function(V){return c(V)});return}f.children.forEach(function(V){var _=I.filter(function(te){return ue(V.namePaths,te)});c(V,_.map(function(te){return te.slice(V.namePaths.length)}),v)})}},s(e,r,o),l.next=5,Promise.all(i.map(function(c){return c().catch(function(f){return f})}));case 5:if(m=l.sent.filter(Boolean),!m.length){l.next=8;break}throw m;case 8:return l.abrupt("return",e.getStrictValue(r));case 9:case"end":return l.stop()}},t)}));return function(t,r){return n.apply(this,arguments)}}()),p()(this,"getValidationErrors",function(){var n,t=((n=e.validationErrors)===null||n===void 0?void 0:n.slice())||[];if(e.children.forEach(function(r){var o=r.getValidationErrors();o&&t.push.apply(t,b()(o))}),t.length)return t}),p()(this,"manualSetValue",function(n){return e.setData({value:n}),e.clearValidation(),e.value}),p()(this,"setFieldValue",function(n,t){var r=X(n);if(!(!r||e.type===j.Item)){var o=e.get(r);o?o.setValue(t):e.setData({value:we(e.getInitializedValue(),r,t)})}}),p()(this,"isTouched",function(){return e.type===j.Item||e.touched?e.touched:Array.from(e.children).some(function(n){return n.isTouched()})}),p()(this,"reset",function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];e.setData({value:e.getInitialValue(),preventCapturing:!0,preventBubbling:n,eventInterceptor:function(o){t.push(o)}}),e.touched=!1,e.children.forEach(function(r){return r.reset(!0,t)}),t.push(function(){return e.resetChange.trigger()}),t.forEach(function(r){return r()})}),p()(this,"triggerReset",function(){e.reset(),e.clearValidation()}),p()(this,"add",function(n,t){if(e.type!==j.List)throw new Error("".concat(e.type," has no method add."));e.listChange.trigger({type:"add",value:n,insertIndex:t})}),p()(this,"remove",function(n){if(e.type!==j.List)throw new Error("".concat(e.type," has no method remove."));e.listChange.trigger({type:"remove",index:n})}),p()(this,"move",function(n,t){if(e.type!==j.List)throw new Error("".concat(e.type," has no method move."));e.listChange.trigger({type:"move",from:n,to:t})}),p()(this,"get",function(n){var t=X(n);if(t){for(var r=0,o=Array.from(e.children);r<o.length;r++){var i=o[r];if(ue(i.namePaths,t)){var s=i.get(t.slice(i.namePaths.length));if(s)return s}}return}return e.internalControl}),p()(this,"control",{getValue:function(){return e.value},getStrictValue:this.getStrictValue,getName:this.getName,getFullName:this.getFullName,setValue:this.manualSetValue,setFieldValue:this.setFieldValue,isTouched:this.isTouched,reset:this.triggerReset,validate:this.validate,validateFields:this.validateFields,getValidationErrors:this.getValidationErrors,clearValidation:this.clearValidation,add:this.add,remove:this.remove,move:this.move,get:this.get,getStoreStype:function(){return e.type}}),p()(this,"internalControl",d()(d()({},this.control),{},p()({getStore:function(t){if(t===x)return e;throw new Error("For internal use only")}},xe,!0)))}return Q()(a,[{key:"init",value:function(n){this.initialValue=n.value,!this._init&&(this.namePaths=n.namePaths,this.parent?this.setData({value:W(this.parent.value,this.namePaths)[0]}):this.setData({value:this.getInitialValue()}),this._init=!0)}},{key:"getInitialValue",value:function(){return this.parent?W(this.parent.getInitialValue(),this.namePaths)[0]:this.initialValue}},{key:"getInitializedValue",value:function(){return this.type===j.List&&!Array.isArray(this.value)?[]:this.type===j.Group&&!Be(this.value)?Object.assign({},this.value):this.value}},{key:"setNamePaths",value:function(n){this.namePaths=n,this.parent&&this.setData({value:W(this.parent.value,this.namePaths)[0]})}},{key:"setData",value:function(n){var t=this;if(!this.lock){this.lock=!0;var r=n.eventInterceptor,o=n.preventCapturing,i=n.preventBubbling,s=n.value,m=this.value,h=[];if(!i&&this.parent&&!this.parent.lock){var l=this.parent.value,c=W(this.parent.value,this.namePaths),f=M()(c,1),u=f[0];Object.is(u,s)||(l=we(this.parent.getInitializedValue(),this.namePaths,s)),this.parent.setData({value:l,eventInterceptor:function(I){h.push(I)}})}this.value=s,Object.is(this.value,m)||(h.push(function(){return t.valueChange.trigger({newValue:s,oldValue:m})}),o||this.children.forEach(function(v){v.lock||v.setData({value:W(t.value,v.namePaths)[0],eventInterceptor:function(P){h.push(P)}})})),typeof r=="function"?r(function(){return h.forEach(function(v){return v()})}):h.forEach(function(v){return v()}),this.lock=!1}}}]),a}();function ze(a){return!!a&&H()(a)==="object"&&!!a[xe]}function He(a,e){return a.replace(/\\?\$\{\w+\}/g,function(n){var t;if(n.startsWith("\\"))return n.slice(1);var r=n.slice(2,-1);return"".concat((t=e[r])!==null&&t!==void 0?t:"")})}var Y=Q()(function a(e){Z()(this,a),p()(this,"message",void 0),p()(this,"variable",void 0),Object.assign(this,e)}),ce=function(){function a(e){var n=this;Z()(this,a),p()(this,"defaultMessage",void 0),p()(this,"name",void 0),p()(this,"setDefaultMessage",function(t){n.defaultMessage=t}),this.defaultMessage=e.defaultMessage,this.name=e.name}return Q()(a,[{key:"factory",value:function(n){var t=this,r=function(){var i=n.apply(void 0,arguments),s=d()(d()({},i),{},{validator:function(){var m=T()(y()().mark(function l(c){var f;return y()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.prev=0,v.next=3,i.validator(c);case 3:return v.abrupt("return",v.sent);case 6:if(v.prev=6,v.t0=v.catch(0),!(v.t0 instanceof Error)){v.next=10;break}throw v.t0;case 10:throw f=function(){if(v.t0 instanceof Y){var I,P;if(typeof v.t0.message=="string")return v.t0.message;var w=(I=c.getStore(x).validateMessages)===null||I===void 0?void 0:I[t.name];return He(w!=null?w:t.defaultMessage,d()({name:(P=c.getFullName())===null||P===void 0?void 0:P.join(",")},v.t0.variable))}return typeof v.t0=="string"?v.t0:"".concat(v.t0)}(),new Error(f);case 12:case"end":return v.stop()}},l,null,[[0,6]])}));function h(l){return m.apply(this,arguments)}return h}()});return s};return r.setDefaultMessage=this.setDefaultMessage,Object.defineProperty(r,"defaultMessage",{get:function(){return t.defaultMessage}}),Object.defineProperty(r,"name",{get:function(){return t.name}}),r}}]),a}(),Ce=Q()(function a(e){Z()(this,a),p()(this,"type",void 0),p()(this,"message",void 0),p()(this,"control",void 0),Object.assign(this,e)}),Se=function(){var a=T()(y()().mark(function e(n){var t,r,o,i,s,m,h,l,c=arguments;return y()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(t=c.length>1&&c[1]!==void 0?c[1]:"serial",r=c.length>2?c[2]:void 0,!r){u.next=35;break}if(o=function(){var v=T()(y()().mark(function I(P){var w;return y()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.prev=0,_.next=3,P.validator(n);case 3:_.next=9;break;case 5:return _.prev=5,_.t0=_.catch(0),w=_.t0 instanceof Error?_.t0.message:"".concat(_.t0),_.abrupt("return",new Ce({type:P.type||"error",message:w,control:n}));case 9:case"end":return _.stop()}},I,null,[[0,5]])}));return function(P){return v.apply(this,arguments)}}(),i=[],t!=="serial"){u.next=30;break}s=Re()(r),u.prev=7,s.s();case 9:if((m=s.n()).done){u.next=20;break}return h=m.value,u.next=13,o(h);case 13:if(l=u.sent,!(l instanceof Ce)){u.next=18;break}if(i.push(l),l.type!=="error"){u.next=18;break}return u.abrupt("break",20);case 18:u.next=9;break;case 20:u.next=25;break;case 22:u.prev=22,u.t0=u.catch(7),s.e(u.t0);case 25:return u.prev=25,s.f(),u.finish(25);case 28:u.next=33;break;case 30:return u.next=32,Promise.all(r.map(o));case 32:i=u.sent.filter(function(v){return v instanceof Ce});case 33:if(!(i.length>0)){u.next=35;break}throw i;case 35:case"end":return u.stop()}},e,null,[[7,22,25,28]])}));return function(n){return a.apply(this,arguments)}}(),S=g(85893),Je=["children"],$e=C.createContext(null),fe=function(){return C.useContext($e)||{}},Me=function(e){var n=e.children,t=E()(e,Je),r=fe(),o=C.useMemo(function(){return d()(d()(d()({},r),t),{},{validateMessages:d()(d()({},r.validateMessages),t.validateMessages)})},[r,t]);return(0,S.jsx)($e.Provider,{value:o,children:n})},Qe=["name","root","control"],q=C.createContext(void 0),Xe=["independentControl"],z=function(e){var n=C.useRef(void 0),t=C.useRef(e);if(t.current!==e)throw new Error('Parameter "control" cannot be variable.');return n.current||(e?n.current=e:n.current=new Ze().internalControl),n.current},Oe=function(e){var n=e.children,t=e.control,r=e.initialValue,o=e.namePaths,i=e.rules,s=e.ref,m=C.useRef({}),h=C.useContext(q)||{},l=h.parent,c=h.validateMode,f=l==null?void 0:l.getStore(x),u=t.getStore(x);return u.parent=f,u.init({value:r,namePaths:o}),u.setValidator(function(){var v=T()(y()().mark(function I(P){return y()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,Se(P,c,i);case 2:return V.abrupt("return",V.sent);case 3:case"end":return V.stop()}},I)}));return function(I){return v.apply(this,arguments)}}()),C.useEffect(function(){if(u.stamp||(u.stamp=m.current),u.stamp!==m.current)throw new Error('"control" cannot be attached to multiple components at the same time');return function(){u.stamp=void 0}},[u]),C.useEffect(function(){return f==null||f.children.add(u),u.parent=f,function(){u.parent=void 0,f==null||f.children.delete(u)}},[u,f]),C.useEffect(function(){o!==u.namePaths&&u.setNamePaths(o)},[u,o]),C.useImperativeHandle(s,function(){return t}),n},Ye=function(e){var n=e.control,t=e.namePaths,r=e.validateTrigger,o=e.validateMode,i=C.useContext(q),s=C.useMemo(function(){var m=i||{},h=m.collection,l=h===void 0?[]:h,c=m.namePathList,f=c===void 0?[]:c,u=m.validateMode,v=m.validateTrigger,I=l[l.length-1];return n.getStore(x).type!==j.Item&&(l=[].concat(b()(l),[n]),f=[].concat(b()(f),[t])),{control:n,collection:l,parent:I,namePathList:f,namePaths:t,validateTrigger:r||v,validateMode:o||u}},[i,n,t,o,r]);return(0,S.jsx)(q.Provider,{value:s,children:(0,S.jsx)(Oe,d()({},e))})},qe=function(e){var n=e.name,t=e.root,r=e.control,o=E()(e,Qe),i=o.validateMode,s=o.validateTrigger,m=Ie(n),h=z(r),l=fe();h.getStore(x).validateMessages=l.validateMessages;var c=C.useMemo(function(){return{control:h,collection:[h],namePathList:m?[m]:[],namePaths:m,validateMode:i,validateTrigger:s}},[h,m,i,s]);return t||!m?(0,S.jsx)(q.Provider,{value:c,children:(0,S.jsx)(Oe,d()(d()({},o),{},{control:h,namePaths:m!=null?m:Xe}))}):(0,S.jsx)(Ye,d()(d()({},o),{},{control:h,namePaths:m}))},me=qe,en=["control"],nn=function(e){var n=e.control,t=E()(e,en),r=z(n);return r.getStore(x).type=j.Group,(0,S.jsx)(me,d()(d()({},t),{},{control:r,root:!1}))},tn=nn,Le=function(){return C.useContext(q)||{}},ee=function(e){var n=Le(),t=n.collection,r=n.control;return e&&t?t[0]:r},ne=function(e){var n=C.useRef(e);n.current!==e&&console.warn('Parameter "control" cannot be variable.');var t=ee();return n.current||t},rn=["control","children"],de=function(e){return e.map(function(n,t){return d()(d()({},n),{},{name:t})})},an=function(e){var n=e.children,t=ee(),r=t.getStore(x),o=C.useRef(-1),i=C.useState(function(){var l=t.getValue()||[];return l.map(function(c,f){return{name:f,key:++o.current}})}),s=M()(i,2),m=s[0],h=s[1];return C.useEffect(function(){return r.listChange.add(function(l){var c=b()(r.value||[]);switch(r.touched=!0,l.type){case"add":{var f=typeof l.insertIndex=="number"?l.insertIndex:c.length;h(function(u){var v=b()(u);return v.splice(f,0,{name:v.length,key:++o.current}),de(v)}),c.splice(f,0,l.value),r.setData({value:c,preventCapturing:!0});break}case"remove":{h(function(u){var v=b()(u);return v.splice(l.index,1),de(v)}),c.splice(l.index,1),r.setData({value:c,preventCapturing:!0});break}case"move":{h(function(u){return de(je(b()(u),l.from,l.to))}),je(c,l.from,l.to),r.setData({value:c,preventCapturing:!0});break}}r.validateOptionalThrow()})},[r]),C.useEffect(function(){return r.valueChange.add(function(l){var c=l.newValue,f=l.oldValue,u=(c==null?void 0:c.length)||0,v=(f==null?void 0:f.length)||0;u!==v&&h(function(I){var P=I;if(P.length>u)P=P.slice(0,u);else if(P.length<u){P=b()(P);for(var w=P.length;w<u;w+=1)P.push({name:w,key:++o.current})}return de(P)})})},[r]),n(m,t)},on=function(e){var n=e.control,t=e.children,r=E()(e,rn),o=z(n);return o.getStore(x).type=j.List,(0,S.jsx)(me,d()(d()({},r),{},{control:o,root:!1,children:(0,S.jsx)(an,{children:t})}))},ln=on,ve=function(e,n){var t=ne(n),r=C.useRef(e);r.current=C.useMemo(function(){return e},[e]),C.useEffect(function(){return t==null?void 0:t.getStore(x).valueChange.add(function(o){return r.current(o)})},[t])};function ye(a,e){var n=void 0,t=void 0,r=C.useRef(void 0);e&&(n=e),ze(a)?n=a:typeof a=="function"?r.current=a:t=a;var o=ne(n),i=Ie(t),s=C.useCallback(function(){return r.current?r.current(o.getValue(),o):i?W(o.getValue(),i)[0]:o.getValue()},[i,o]),m=C.useState(function(){return s()}),h=M()(m,2),l=h[0],c=h[1];return C.useEffect(function(){c(s())},[o,s]),ve(function(){var f=s();Object.is(l,f)||c(f)},o),l}var un=["element","valuePropName"],sn=["control","children","valuePropName","trigger","getValueFromEvent","rules"],Te=function(e){var n=e.element,t=e.valuePropName,r=E()(e,un),o=ye();return typeof n=="function"?n(d()(d()({},r),{},p()({},t,o))):C.cloneElement(n,d()(d()({},r),{},p()({},t,o)))},cn=function(e){var n=e.children,t=e.valuePropName,r=t===void 0?"value":t,o=e.getValueFromEvent,i=e.trigger,s=i===void 0?"onChange":i,m=e.rules,h=m===void 0?[]:m,l=ee(),c=Le(),f=c.validateTrigger,u=f===void 0?"onChange":f,v=c.validateMode,I=c.namePathList,P=c.namePaths,w=C.useMemo(function(){if(P)return{name:(I||[]).concat([P]).flat(1).join(".")}},[I,P]),V=l.getStore(x),_=h.map(function(O){var D=O.validateTrigger||u;return d()(d()({},O),{},{validateTrigger:Array.isArray(D)?D:[D]})}),te=Array.from(new Set([u].concat(b()(_.map(function(O){return O.validateTrigger}))).flat(1))),Fe=te.reduce(function(O,D){var G=O[D];return O[D]=function(){for(var pe=arguments.length,re=new Array(pe),U=0;U<pe;U++)re[U]=arguments[U];G==null||G.apply(void 0,re),V.validateByEvent(T()(y()().mark(function ae(){return y()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,Se(l,v,_.filter(function(he){return he.validateTrigger.includes(D)}));case 2:return k.abrupt("return",k.sent);case 3:case"end":return k.stop()}},ae)})))},O},p()({},s,function(){V.touched=!0,V.setData({value:typeof o=="function"?o.apply(void 0,arguments):Ke(r,arguments.length<=0?void 0:arguments[0])})}));return typeof n=="function"?(0,S.jsx)(Te,d()(d()(d()({},w),Fe),{},{valuePropName:r,element:n})):C.Children.map(n,function(O,D){if(D===0&&C.isValidElement(O)){var G=O,pe=Object.keys(Fe).reduce(function(re,U){var ae=Fe[U];return re[U]=function(){for(var oe,k,he=arguments.length,Pe=new Array(he),ge=0;ge<he;ge++)Pe[ge]=arguments[ge];return ae==null||ae.apply(void 0,Pe),(oe=(k=G.props)[U])===null||oe===void 0?void 0:oe.call.apply(oe,[k].concat(Pe))},re},d()({},"name"in G.props?{name:G.props.name}:w));return(0,C.createElement)(Te,d()(d()({},pe),{},{valuePropName:r,element:G,key:"inputRender"}))}return O})},fn=function(e){var n=e.control,t=e.children,r=e.valuePropName,o=e.trigger,i=e.getValueFromEvent,s=e.rules,m=E()(e,sn),h=C.useState(0),l=M()(h,2),c=l[0],f=l[1],u=z(n),v=u.getStore(x);return v.type=j.Item,C.useEffect(function(){return v.resetChange.add(function(){f(function(I){return I+1})})},[v]),(0,S.jsx)(me,d()(d()({},m),{},{rules:s,control:u,root:!1,children:(0,S.jsx)(cn,{valuePropName:r,trigger:o,getValueFromEvent:i,rules:s,children:t},c)}))},mn=fn,be=function(e){var n=ne(e),t=C.useRef(void 0),r=C.useState({}),o=M()(r,2),i=o[1],s=C.useRef({status:"init"});return C.useEffect(function(){var m=function(f){var u;f.status!==((u=s.current)===null||u===void 0?void 0:u.status)&&(s.current=f,i({}))},h=n==null?void 0:n.getStore(x),l=function(f){t.current=f,f?(m(d()(d()({},s.current),{},{status:"pending"})),f.then(function(){t.current===f&&m({status:"fulfilled"})}).catch(function(u){t.current===f&&m({status:"rejected",results:u})})):m({status:"init"})};return l(h==null?void 0:h.validating),h==null?void 0:h.validationChange.add(l)},[n]),s.current},De=function(e){var n=e.control,t=e.children,r=ne(n),o=be(r);return t(o,r)},ke=function(e){var n=e.children,t=e.condition,r=e.control,o=ne(r),i=C.useState({}),s=M()(i,2),m=s[1];return ve(function(h){var l=h.oldValue,c=h.newValue;(typeof t=="function"&&t(c,l)||typeof t=="undefined")&&m({})},o),n(o)},dn=["initialValues","control"],$=function(e){var n=e.initialValues,t=e.control,r=E()(e,dn),o=z(t);return o.getStore(x).type=j.Group,(0,S.jsx)(me,d()(d()({},r),{},{control:o,initialValue:n,root:!0}))};$.Item=mn,$.Group=tn,$.List=ln,$.ConfigProvider=Me,$.useControl=z,$.useOnValueChange=ve,$.useWatch=ye,$.useControlInstance=ee,$.useValidation=be,$.useConfig=fe,$.Validation=De,$.Update=ke;var vn=$,pn=["message"],hn=new ce({name:"required",defaultMessage:'"${name}" is required'}),gn=hn.factory(function(a){var e=a||{},n=e.message,t=E()(e,pn);return d()(d()({},t),{},{validator:function(o){var i=o.getValue();return typeof i=="undefined"||i===null||i===""||Array.isArray(i)&&i.length===0?Promise.reject(new Y({message:n})):Promise.resolve()}})}),Cn=["message"],yn=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,bn=new ce({name:"email",defaultMessage:'"${name}" is not a valid email'}),Fn=bn.factory(function(a){var e=a||{},n=e.message,t=E()(e,Cn);return d()(d()({},t),{},{validator:function(o){var i=o.getValue();return yn.test(i)?Promise.resolve():Promise.reject(new Y({message:n}))}})}),Pn=["message"],In=["message"],Rn=new ce({name:"maxLength",defaultMessage:'"${name}" can contain up to ${length} characters'}),Vn=Rn.factory(function(a,e){var n=e||{},t=n.message,r=E()(n,Pn);return d()(d()({},r),{},{validator:function(i){var s=i.getValue();return(typeof s=="string"||Array.isArray(s))&&s.length>a?Promise.reject(new Y({message:t,variable:{length:a}})):Promise.resolve()}})}),En=new ce({name:"minLength",defaultMessage:'"${name}" must be at least ${length} characters'}),_n=En.factory(function(a,e){var n=e||{},t=n.message,r=E()(n,In);return d()(d()({},r),{},{validator:function(i){var s=i.getValue(),m=typeof s=="string"||Array.isArray(s)?s.length:"".concat(s!=null?s:"").length;return m<a?Promise.reject(new Y({message:t,variable:{length:a}})):Promise.resolve()}})}),wn={required:gn,email:Fn,maxLength:Vn,minLength:_n},jn=vn},63556:function(L,F){F.Z=`import React from 'react';
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
