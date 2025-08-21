"use strict";(self.webpackChunkform_pilot=self.webpackChunkform_pilot||[]).push([[298],{98231:function(L,P,g){g.r(P),g.d(P,{Col:function(){return N},Row:function(){return b}});var B=g(68400),m=g.n(B),K=g(41686),E,C,A=function(V){return typeof V=="number"?"".concat(V,"px"):V},b=K.default.div(E||(E=m()([`
  display: flex;
  flex-wrap: wrap;
  align-items: `,`;
  justify-content: `,`;
  gap: `,`;
`])),function(y){var V;return(V=y.$align)!==null&&V!==void 0?V:"center"},function(y){var V;return(V=y.$justify)!==null&&V!==void 0?V:"unset"},function(y){var V;return(V=A(y.$gap))!==null&&V!==void 0?V:"unset"}),N=K.default.div(C||(C=m()([`
  flex: `,`;
`])),function(y){var V;return(V=y.$flex)!==null&&V!==void 0?V:"0 0 auto"})},67191:function(L,P,g){g.r(P),g.d(P,{Input:function(){return C}});var B=g(97857),m=g.n(B),K=g(67294),E=g(85893),C=function(b){var N=b;if("value"in b){var y;N=m()(m()({},b),{},{value:(y=b.value)!==null&&y!==void 0?y:""})}return(0,E.jsx)("input",m()({},N))}},78944:function(L,P,g){g.r(P);var B=g(97857),m=g.n(B),K=g(13769),E=g.n(K),C=g(67294),A=g(29107),b=g(85893),N=["label"];P.default=function(y){var V=y.label,T=E()(y,N),le=A.default.useControl(y.control);return(0,b.jsxs)("div",{children:[!!V&&(0,b.jsx)("span",{style:{marginRight:8},children:V}),(0,b.jsx)(A.default.Item,m()(m()({},T),{},{control:le})),(0,b.jsx)(A.default.Validation,{control:le,children:function(J){var O;return(0,b.jsx)("div",{children:J==null||(O=J.results)===null||O===void 0?void 0:O.map(function(ue,Z){return(0,b.jsx)("span",{style:{color:ue.type==="error"?"red":"orange"},children:ue.message},Z)})})}})]})}},29107:function(L,P,g){g.r(P),g.d(P,{ConfigProvider:function(){return Oe},Rules:function(){return wn},UpdateRender:function(){return ke},ValidationRender:function(){return De},default:function(){return jn},useConfig:function(){return de},useControl:function(){return z},useControlInstance:function(){return q},useOnValueChange:function(){return ne},useValidation:function(){return be},useWatch:function(){return ye}});var B=g(97857),m=g.n(B),K=g(13769),E=g.n(K),C=g(67294),A=g(19632),b=g.n(A),N=g(15009),y=g.n(N),V=g(99289),T=g.n(V),le=g(52677),H=g.n(le),J=g(5574),O=g.n(J),ue=g(12444),Z=g.n(ue),Ae=g(72004),Q=g.n(Ae),Ne=g(9783),v=g.n(Ne),x="_STORE_INTERNAL_TOKEN_",w=function(a){return a.Group="group",a.List="list",a.Item="item",a}({}),X=function(e){if(typeof e!="undefined")return Array.isArray(e)?e.length?e:void 0:[e]},se=function(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!e||!n||t&&e.length!==n.length?!1:e.every(function(r,o){return r===n[o]})},Ie=function(e){var n=X(e),t=C.useRef(n);return(typeof n=="undefined"||typeof t.current=="undefined"||!se(n,t.current,!0))&&(t.current=n),t.current},ce=function(){function a(){Z()(this,a),v()(this,"listeners",[])}return Q()(a,[{key:"add",value:function(n){var t=this;return this.listeners.push(n),function(){t.remove(n)}}},{key:"remove",value:function(n){var t=this.listeners.indexOf(n);t>-1&&this.listeners.splice(t,1)}},{key:"trigger",value:function(n){this.listeners.forEach(function(t){return t(n)})}}]),a}(),Ue=g(64599),Re=g.n(Ue);function We(a){return typeof a=="undefined"||a===null}function Ve(a){if(a&&H()(a)==="object")return Array.isArray(a)?[]:{}}function U(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=a,t=!0,r=Re()(e),o;try{for(r.s();!(o=r.n()).done;){var l,c=o.value;if(t=!We(n)&&Object.prototype.hasOwnProperty.call(n,c),n=(l=n)===null||l===void 0?void 0:l[c],!t)break}}catch(d){r.e(d)}finally{r.f()}return[n,t]}function Ee(a){return Array.isArray(a)?b()(a):Object.assign({},a)}function _e(a){return typeof a=="number"?[]:{}}function we(a,e,n){for(var t=Ee(a!=null?a:_e(e[0])),r=t,o=0;o<e.length;o+=1){var l,c=e[o];if(o===e.length-1)return r[c]=n,t;r[c]=Ee((l=r[c])!==null&&l!==void 0?l:_e(e[o+1])),r=r[c]}return t}function Ge(a,e,n){for(var t=n,r=n,o=0;o<e.length&&(o===0&&!t&&(t=Ve(a),r=t),!!r);o+=1){var l=e[o],c=U(a,e.slice(0,o+1)),d=O()(c,2),h=d[0],i=d[1];if(o===e.length-1){i&&(r[l]=h);break}var f=U(n,e.slice(0,o+1)),p=O()(f,2),u=p[0],s=p[1];s?r[l]=u:i&&(r[l]=Ve(h)),r=r[l]}return t}function je(a,e,n){if(e>a.length-1||n>a.length-1)throw new Error("Out of range");var t=a[e],r=a[n];return a[n]=t,a[e]=r,a}function Be(a){if(H()(a)!=="object"||a===null)return!1;var e=Object.getPrototypeOf(a);return e===Object.prototype||e===null}function Ke(a,e){return e&&e.target&&H()(e.target)==="object"&&a in e.target?e.target[a]:e}var xe=Symbol("control"),Ze=function(){function a(){var e=this;Z()(this,a),v()(this,"lock",!1),v()(this,"type",w.Item),v()(this,"parent",void 0),v()(this,"children",new Set),v()(this,"value",void 0),v()(this,"initialValue",void 0),v()(this,"namePaths",void 0),v()(this,"touched",!1),v()(this,"validator",function(){return Promise.resolve()}),v()(this,"validating",void 0),v()(this,"validationChange",new ce),v()(this,"validationErrors",void 0),v()(this,"validateMessages",void 0),v()(this,"valueChange",new ce),v()(this,"listChange",new ce),v()(this,"resetChange",new ce),v()(this,"stamp",void 0),v()(this,"_init",!1),v()(this,"setValidator",function(n){n?e.validator=n:e.validator=function(){return Promise.resolve()}}),v()(this,"getStrictValue",function(n){if(e.type===w.Item)return e.value;var t,r=n==null?void 0:n.map(X),o=e.getInitializedValue(),l=function c(d){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];d.forEach(function(i){var f=[].concat(b()(h),b()(i.namePaths));i.type===w.Item&&(!r||r.some(function(p){return!p||se(p,f)}))&&(t=Ge(o,f,t)),c(i.children,f)})};return l(e.children),t}),v()(this,"getName",function(){if(e.parent)return e.namePaths}),v()(this,"getFullName",function(){if(e.parent)return[].concat(b()(e.parent.getFullName()||[]),b()(e.namePaths))}),v()(this,"triggerValidationChange",function(){e.validationChange.trigger(e.validating),e.validating?e.validating.catch(function(n){return e.validationErrors=n}):e.validationErrors=void 0}),v()(this,"validateOnly",function(n){var t=typeof n=="function"?n:e.validator;e.validating=t(e.internalControl),e.triggerValidationChange()}),v()(this,"validateOptionalThrow",function(){var n=T()(y()().mark(function t(r){var o,l,c,d;return y()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return o=r||{},l=o.thrownTypes,c=l===void 0?["error"]:l,e.validating=e.validator(e.internalControl),e.triggerValidationChange(),i.prev=3,i.next=6,e.validating;case 6:i.next=13;break;case 8:if(i.prev=8,i.t0=i.catch(3),d=i.t0.filter(function(f){return c.includes(f.type)}),!d.length){i.next=13;break}throw d;case 13:case"end":return i.stop()}},t,null,[[3,8]])}));return function(t){return n.apply(this,arguments)}}()),v()(this,"validate",function(){var n=T()(y()().mark(function t(r){return y()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.validateOptionalThrow(r);case 2:return l.abrupt("return",e.getStrictValue());case 3:case"end":return l.stop()}},t)}));return function(t){return n.apply(this,arguments)}}()),v()(this,"clearValidation",function(){e.validating=void 0,e.triggerValidationChange(),e.children.forEach(function(n){return n.clearValidation()})}),v()(this,"validateFields",function(){var n=T()(y()().mark(function t(r,o){var l,c,d;return y()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return l=[],c=function f(p,u,s){var I=u==null?void 0:u.map(X),F=s||{},_=F.recursive;if(!I){l.push(function(){return p.validateOptionalThrow(o)}),p.children.forEach(function(j){return f(j)});return}if(I.length){if(I.some(function(j){return!j})&&(l.push(function(){return p.validateOptionalThrow(o)}),_)){p.children.forEach(function(j){return f(j)});return}p.children.forEach(function(j){var R=I.filter(function(re){return se(j.namePaths,re)});f(j,R.map(function(re){return re.slice(j.namePaths.length)}),s)})}},c(e,r,o),i.next=5,Promise.all(l.map(function(f){return f().catch(function(p){return p})}));case 5:if(d=i.sent.filter(Boolean),!d.length){i.next=8;break}throw d;case 8:return i.abrupt("return",e.getStrictValue(r));case 9:case"end":return i.stop()}},t)}));return function(t,r){return n.apply(this,arguments)}}()),v()(this,"getValidationErrors",function(){var n,t=((n=e.validationErrors)===null||n===void 0?void 0:n.slice())||[];if(e.children.forEach(function(r){var o=r.getValidationErrors();o&&t.push.apply(t,b()(o))}),t.length)return t}),v()(this,"manualSetValue",function(n){return e.setData({value:n}),e.clearValidation(),e.value}),v()(this,"setFieldValue",function(n,t){var r=X(n);if(!(!r||e.type===w.Item)){var o=e.get(r);o?o.setValue(t):e.setData({value:we(e.getInitializedValue(),r,t)})}}),v()(this,"isTouched",function(){return e.type===w.Item||e.touched?e.touched:Array.from(e.children).some(function(n){return n.isTouched()})}),v()(this,"reset",function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];e.setData({value:e.getInitialValue(),preventCapturing:!0,preventBubbling:n,eventInterceptor:function(o){t.push(o)}}),e.touched=!1,e.children.forEach(function(r){return r.reset(!0,t)}),t.push(function(){return e.resetChange.trigger()}),t.forEach(function(r){return r()})}),v()(this,"triggerReset",function(){e.reset(),e.clearValidation()}),v()(this,"add",function(n,t){if(e.type!==w.List)throw new Error("".concat(e.type," has no method add."));e.listChange.trigger({type:"add",value:n,insertIndex:t})}),v()(this,"remove",function(n){if(e.type!==w.List)throw new Error("".concat(e.type," has no method remove."));e.listChange.trigger({type:"remove",index:n})}),v()(this,"move",function(n,t){if(e.type!==w.List)throw new Error("".concat(e.type," has no method move."));e.listChange.trigger({type:"move",from:n,to:t})}),v()(this,"get",function(n){var t=X(n);if(t){for(var r=0,o=Array.from(e.children);r<o.length;r++){var l=o[r];if(se(l.namePaths,t)){var c=l.get(t.slice(l.namePaths.length));if(c)return c}}return}return e.internalControl}),v()(this,"control",{getValue:function(){return e.value},getStrictValue:this.getStrictValue,getName:this.getName,getFullName:this.getFullName,setValue:this.manualSetValue,setFieldValue:this.setFieldValue,isTouched:this.isTouched,reset:this.triggerReset,validate:this.validate,validateFields:this.validateFields,getValidationErrors:this.getValidationErrors,validateOnly:function(){return e.validateOnly()},clearValidation:this.clearValidation,add:this.add,remove:this.remove,move:this.move,get:this.get,getStoreStype:function(){return e.type}}),v()(this,"internalControl",m()(m()({},this.control),{},v()({getStore:function(t){if(t===x)return e;throw new Error("For internal use only")}},xe,!0)))}return Q()(a,[{key:"init",value:function(n){this.initialValue=n.value,!this._init&&(this.namePaths=n.namePaths,this.parent?this.setData({value:U(this.parent.value,this.namePaths)[0]}):this.setData({value:this.getInitialValue()}),this._init=!0)}},{key:"getInitialValue",value:function(){return this.parent?U(this.parent.getInitialValue(),this.namePaths)[0]:this.initialValue}},{key:"getInitializedValue",value:function(){return this.type===w.List&&!Array.isArray(this.value)?[]:this.type===w.Group&&!Be(this.value)?Object.assign({},this.value):this.value}},{key:"setNamePaths",value:function(n){this.namePaths=n,this.parent&&this.setData({value:U(this.parent.value,this.namePaths)[0]})}},{key:"setData",value:function(n){var t=this;if(!this.lock){this.lock=!0;var r=n.eventInterceptor,o=n.preventCapturing,l=n.preventBubbling,c=n.value,d=this.value,h=[];if(!l&&this.parent&&!this.parent.lock){var i=this.parent.value,f=U(this.parent.value,this.namePaths),p=O()(f,1),u=p[0];Object.is(u,c)||(i=we(this.parent.getInitializedValue(),this.namePaths,c)),this.parent.setData({value:i,eventInterceptor:function(I){h.push(I)}})}this.value=c,Object.is(this.value,d)||(h.push(function(){return t.valueChange.trigger({newValue:c,oldValue:d})}),o||this.children.forEach(function(s){s.lock||s.setData({value:U(t.value,s.namePaths)[0],eventInterceptor:function(F){h.push(F)}})})),typeof r=="function"?r(function(){return h.forEach(function(s){return s()})}):h.forEach(function(s){return s()}),this.lock=!1}}}]),a}();function ze(a){return!!a&&H()(a)==="object"&&!!a[xe]}function He(a,e){return a.replace(/\\?\$\{\w+\}/g,function(n){var t;if(n.startsWith("\\"))return n.slice(1);var r=n.slice(2,-1);return"".concat((t=e[r])!==null&&t!==void 0?t:"")})}var Y=Q()(function a(e){Z()(this,a),v()(this,"message",void 0),v()(this,"variable",void 0),Object.assign(this,e)}),fe=function(){function a(e){var n=this;Z()(this,a),v()(this,"defaultMessage",void 0),v()(this,"name",void 0),v()(this,"setDefaultMessage",function(t){n.defaultMessage=t}),this.defaultMessage=e.defaultMessage,this.name=e.name}return Q()(a,[{key:"factory",value:function(n){var t=this,r=function(){var l=n.apply(void 0,arguments),c=m()(m()({},l),{},{validator:function(){var d=T()(y()().mark(function i(f){var p;return y()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,l.validator(f);case 3:return s.abrupt("return",s.sent);case 6:if(s.prev=6,s.t0=s.catch(0),!(s.t0 instanceof Error)){s.next=10;break}throw s.t0;case 10:throw p=function(){if(s.t0 instanceof Y){var I,F;if(typeof s.t0.message=="string")return s.t0.message;var _=(I=f.getStore(x).validateMessages)===null||I===void 0?void 0:I[t.name];return He(_!=null?_:t.defaultMessage,m()({name:(F=f.getFullName())===null||F===void 0?void 0:F.join(",")},s.t0.variable))}return typeof s.t0=="string"?s.t0:"".concat(s.t0)}(),new Error(p);case 12:case"end":return s.stop()}},i,null,[[0,6]])}));function h(i){return d.apply(this,arguments)}return h}()});return c};return r.setDefaultMessage=this.setDefaultMessage,Object.defineProperty(r,"defaultMessage",{get:function(){return t.defaultMessage}}),Object.defineProperty(r,"name",{get:function(){return t.name}}),r}}]),a}(),Ce=Q()(function a(e){Z()(this,a),v()(this,"type",void 0),v()(this,"message",void 0),v()(this,"control",void 0),Object.assign(this,e)}),Se=function(){var a=T()(y()().mark(function e(n){var t,r,o,l,c,d,h,i,f=arguments;return y()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(t=f.length>1&&f[1]!==void 0?f[1]:"serial",r=f.length>2?f[2]:void 0,!r){u.next=35;break}if(o=function(){var s=T()(y()().mark(function I(F){var _;return y()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.prev=0,R.next=3,F.validator(n);case 3:R.next=9;break;case 5:return R.prev=5,R.t0=R.catch(0),_=R.t0 instanceof Error?R.t0.message:"".concat(R.t0),R.abrupt("return",new Ce({type:F.type||"error",message:_,control:n}));case 9:case"end":return R.stop()}},I,null,[[0,5]])}));return function(F){return s.apply(this,arguments)}}(),l=[],t!=="serial"){u.next=30;break}c=Re()(r),u.prev=7,c.s();case 9:if((d=c.n()).done){u.next=20;break}return h=d.value,u.next=13,o(h);case 13:if(i=u.sent,!(i instanceof Ce)){u.next=18;break}if(l.push(i),i.type!=="error"){u.next=18;break}return u.abrupt("break",20);case 18:u.next=9;break;case 20:u.next=25;break;case 22:u.prev=22,u.t0=u.catch(7),c.e(u.t0);case 25:return u.prev=25,c.f(),u.finish(25);case 28:u.next=33;break;case 30:return u.next=32,Promise.all(r.map(o));case 32:l=u.sent.filter(function(s){return s instanceof Ce});case 33:if(!(l.length>0)){u.next=35;break}throw l;case 35:case"end":return u.stop()}},e,null,[[7,22,25,28]])}));return function(n){return a.apply(this,arguments)}}(),S=g(85893),Je=["children"],$e=C.createContext(null),de=function(){return C.useContext($e)||{}},Oe=function(e){var n=e.children,t=E()(e,Je),r=de(),o=C.useMemo(function(){return m()(m()(m()({},r),t),{},{validateMessages:m()(m()({},r.validateMessages),t.validateMessages)})},[r,t]);return(0,S.jsx)($e.Provider,{value:o,children:n})},Me=function(){return C.useContext(te)||{}},q=function(e){var n=Me(),t=n.collection,r=n.control;return e&&t?t[0]:r},ee=function(e){var n=q();return e||n},ne=function(e,n){var t=ee(n),r=C.useRef(e);r.current=C.useMemo(function(){return e},[e]),C.useEffect(function(){return t==null?void 0:t.getStore(x).valueChange.add(function(o){return r.current(o)})},[t])};function ye(a,e){var n=void 0,t=void 0,r=C.useRef(void 0);e&&(n=e),ze(a)?n=a:typeof a=="function"?r.current=a:t=a;var o=ee(n),l=Ie(t),c=C.useState({}),d=O()(c,2),h=d[1],i=C.useCallback(function(){return r.current?r.current(o.getValue(),o):l?U(o.getValue(),l)[0]:o.getValue()},[l,o]),f=C.useRef(null),p=C.useRef(void 0);return f.current!==i&&(f.current=i,p.current=i()),ne(function(){var u=i();Object.is(p.current,u)||(p.current=u,h({}))},o),p.current}var Qe=["name","root","control"],te=C.createContext(void 0),Xe=["independentControl"],z=function(e){var n=C.useRef(void 0),t=C.useRef(e);if(t.current!==e)throw new Error('Parameter "control" cannot be variable.');return n.current||(e?n.current=e:n.current=new Ze().internalControl),n.current},Le=function(e){var n=e.children,t=e.control,r=e.initialValue,o=e.namePaths,l=e.rules,c=e.ref,d=e.onChange,h=C.useRef({}),i=C.useContext(te)||{},f=i.parent,p=i.validateMode,u=f==null?void 0:f.getStore(x),s=t.getStore(x);return s.parent=u,s.init({value:r,namePaths:o}),s.setValidator(function(){var I=T()(y()().mark(function F(_){return y()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Se(_,p,l);case 2:return R.abrupt("return",R.sent);case 3:case"end":return R.stop()}},F)}));return function(F){return I.apply(this,arguments)}}()),ne(function(I){d==null||d(I,t)},t),C.useEffect(function(){if(s.stamp||(s.stamp=h.current),s.stamp!==h.current)throw new Error('"control" cannot be attached to multiple components at the same time');return function(){s.stamp=void 0}},[s]),C.useEffect(function(){return u==null||u.children.add(s),s.parent=u,function(){s.parent=void 0,u==null||u.children.delete(s)}},[s,u]),C.useEffect(function(){o!==s.namePaths&&s.setNamePaths(o)},[s,o]),C.useImperativeHandle(c,function(){return t}),n},Ye=function(e){var n=e.control,t=e.namePaths,r=e.validateTrigger,o=e.validateMode,l=C.useContext(te),c=C.useMemo(function(){var d=l||{},h=d.collection,i=h===void 0?[]:h,f=d.namePathList,p=f===void 0?[]:f,u=d.validateMode,s=d.validateTrigger,I=i[i.length-1];return n.getStore(x).type!==w.Item&&(i=[].concat(b()(i),[n]),p=[].concat(b()(p),[t])),{control:n,collection:i,parent:I,namePathList:p,namePaths:t,validateTrigger:r||s,validateMode:o||u}},[l,n,t,o,r]);return(0,S.jsx)(te.Provider,{value:c,children:(0,S.jsx)(Le,m()({},e))})},qe=function(e){var n=e.name,t=e.root,r=e.control,o=E()(e,Qe),l=o.validateMode,c=o.validateTrigger,d=Ie(n),h=z(r),i=de();h.getStore(x).validateMessages=i.validateMessages;var f=C.useMemo(function(){return{control:h,collection:[h],namePathList:d?[d]:[],namePaths:d,validateMode:l,validateTrigger:c}},[h,d,l,c]);return t||!d?(0,S.jsx)(te.Provider,{value:f,children:(0,S.jsx)(Le,m()(m()({},o),{},{control:h,namePaths:d!=null?d:Xe}))}):(0,S.jsx)(Ye,m()(m()({},o),{},{control:h,namePaths:d}))},me=qe,en=["control"],nn=function(e){var n=e.control,t=E()(e,en),r=z(n);return r.getStore(x).type=w.Group,(0,S.jsx)(me,m()(m()({},t),{},{control:r,root:!1}))},tn=nn,rn=["control","children"],ve=function(e){return e.map(function(n,t){return m()(m()({},n),{},{name:t})})},an=function(e){var n=e.children,t=q(),r=t.getStore(x),o=C.useRef(-1),l=C.useState(function(){var i=t.getValue()||[];return i.map(function(f,p){return{name:p,key:++o.current}})}),c=O()(l,2),d=c[0],h=c[1];return C.useEffect(function(){return r.listChange.add(function(i){var f=b()(r.value||[]);switch(r.touched=!0,i.type){case"add":{var p=typeof i.insertIndex=="number"?i.insertIndex:f.length;h(function(u){var s=b()(u);return s.splice(p,0,{name:s.length,key:++o.current}),ve(s)}),f.splice(p,0,i.value),r.setData({value:f,preventCapturing:!0});break}case"remove":{h(function(u){var s=b()(u);return s.splice(i.index,1),ve(s)}),f.splice(i.index,1),r.setData({value:f,preventCapturing:!0});break}case"move":{h(function(u){return ve(je(b()(u),i.from,i.to))}),je(f,i.from,i.to),r.setData({value:f,preventCapturing:!0});break}}r.validateOptionalThrow()})},[r]),C.useEffect(function(){return r.valueChange.add(function(i){var f=i.newValue,p=i.oldValue,u=(f==null?void 0:f.length)||0,s=(p==null?void 0:p.length)||0;u!==s&&h(function(I){var F=I;if(F.length>u)F=F.slice(0,u);else if(F.length<u){F=b()(F);for(var _=F.length;_<u;_+=1)F.push({name:_,key:++o.current})}return ve(F)})})},[r]),n(d,t)},on=function(e){var n=e.control,t=e.children,r=E()(e,rn),o=z(n);return o.getStore(x).type=w.List,(0,S.jsx)(me,m()(m()({},r),{},{control:o,root:!1,children:(0,S.jsx)(an,{children:t})}))},ln=on,un=["element","valuePropName"],sn=["control","children","valuePropName","trigger","getValueFromEvent","rules"],Te=function(e){var n=e.element,t=e.valuePropName,r=E()(e,un),o=ye();return typeof n=="function"?n(m()(m()({},r),{},v()({},t,o))):C.cloneElement(n,m()(m()({},r),{},v()({},t,o)))},cn=function(e){var n=e.children,t=e.valuePropName,r=t===void 0?"value":t,o=e.getValueFromEvent,l=e.trigger,c=l===void 0?"onChange":l,d=e.rules,h=d===void 0?[]:d,i=q(),f=Me(),p=f.validateTrigger,u=p===void 0?"onChange":p,s=f.validateMode,I=f.namePathList,F=f.namePaths,_=C.useMemo(function(){if(F)return{name:(I||[]).concat([F]).flat(1).join(".")}},[I,F]),j=i.getStore(x),R=h.map(function(M){var D=M.validateTrigger||u;return m()(m()({},M),{},{validateTrigger:Array.isArray(D)?D:[D]})}),re=Array.from(new Set([u].concat(b()(R.map(function(M){return M.validateTrigger}))).flat(1))),Fe=re.reduce(function(M,D){var W=M[D];return M[D]=function(){for(var pe=arguments.length,ae=new Array(pe),G=0;G<pe;G++)ae[G]=arguments[G];W==null||W.apply(void 0,ae),j.validateOnly(T()(y()().mark(function oe(){return y()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,Se(i,s,R.filter(function(he){return he.validateTrigger.includes(D)}));case 2:return k.abrupt("return",k.sent);case 3:case"end":return k.stop()}},oe)})))},M},v()({},c,function(){j.touched=!0,j.setData({value:typeof o=="function"?o.apply(void 0,arguments):Ke(r,arguments.length<=0?void 0:arguments[0])})}));return typeof n=="function"?(0,S.jsx)(Te,m()(m()(m()({},_),Fe),{},{valuePropName:r,element:n})):C.Children.map(n,function(M,D){if(D===0&&C.isValidElement(M)){var W=M,pe=Object.keys(Fe).reduce(function(ae,G){var oe=Fe[G];return ae[G]=function(){for(var ie,k,he=arguments.length,Pe=new Array(he),ge=0;ge<he;ge++)Pe[ge]=arguments[ge];return oe==null||oe.apply(void 0,Pe),(ie=(k=W.props)[G])===null||ie===void 0?void 0:ie.call.apply(ie,[k].concat(Pe))},ae},m()({},"name"in W.props?{name:W.props.name}:_));return(0,C.createElement)(Te,m()(m()({},pe),{},{valuePropName:r,element:W,key:"inputRender"}))}return M})},fn=function(e){var n=e.control,t=e.children,r=e.valuePropName,o=e.trigger,l=e.getValueFromEvent,c=e.rules,d=E()(e,sn),h=C.useState(0),i=O()(h,2),f=i[0],p=i[1],u=z(n),s=u.getStore(x);return s.type=w.Item,C.useEffect(function(){return s.resetChange.add(function(){p(function(I){return I+1})})},[s]),(0,S.jsx)(me,m()(m()({},d),{},{rules:c,control:u,root:!1,children:(0,S.jsx)(cn,{valuePropName:r,trigger:o,getValueFromEvent:l,rules:c,children:t},f)}))},dn=fn,be=function(e){var n=ee(e),t=C.useRef(void 0),r=C.useState({}),o=O()(r,2),l=o[1],c=C.useRef({status:"init"});return C.useEffect(function(){var d=function(p){var u;p.status!==((u=c.current)===null||u===void 0?void 0:u.status)&&(c.current=p,l({}))},h=n==null?void 0:n.getStore(x),i=function(p){t.current=p,p?(d(m()(m()({},c.current),{},{status:"pending"})),p.then(function(){t.current===p&&d({status:"fulfilled"})}).catch(function(u){t.current===p&&d({status:"rejected",results:u})})):d({status:"init"})};return i(h==null?void 0:h.validating),h==null?void 0:h.validationChange.add(i)},[n]),c.current},De=function(e){var n=e.control,t=e.children,r=ee(n),o=be(r);return t(o,r)},ke=function(e){var n=e.children,t=e.condition,r=e.control,o=ee(r),l=C.useState({}),c=O()(l,2),d=c[1];return ne(function(h){var i=h.oldValue,f=h.newValue;(typeof t=="function"&&t(f,i)||typeof t=="undefined")&&d({})},o),n(o)},mn=["initialValues","control"],$=function(e){var n=e.initialValues,t=e.control,r=E()(e,mn),o=z(t);return o.getStore(x).type=w.Group,(0,S.jsx)(me,m()(m()({},r),{},{control:o,initialValue:n,root:!0}))};$.Item=dn,$.Group=tn,$.List=ln,$.ConfigProvider=Oe,$.useControl=z,$.useOnValueChange=ne,$.useWatch=ye,$.useControlInstance=q,$.useValidation=be,$.useConfig=de,$.Validation=De,$.Update=ke;var vn=$,pn=["message"],hn=new fe({name:"required",defaultMessage:'"${name}" is required'}),gn=hn.factory(function(a){var e=a||{},n=e.message,t=E()(e,pn);return m()(m()({},t),{},{validator:function(o){var l=o.getValue();return typeof l=="undefined"||l===null||l===""||Array.isArray(l)&&l.length===0?Promise.reject(new Y({message:n})):Promise.resolve()}})}),Cn=["message"],yn=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,bn=new fe({name:"email",defaultMessage:'"${name}" is not a valid email'}),Fn=bn.factory(function(a){var e=a||{},n=e.message,t=E()(e,Cn);return m()(m()({},t),{},{validator:function(o){var l=o.getValue();return yn.test(l)?Promise.resolve():Promise.reject(new Y({message:n}))}})}),Pn=["message"],In=["message"],Rn=new fe({name:"maxLength",defaultMessage:'"${name}" can contain up to ${length} characters'}),Vn=Rn.factory(function(a,e){var n=e||{},t=n.message,r=E()(n,Pn);return m()(m()({},r),{},{validator:function(l){var c=l.getValue();return(typeof c=="string"||Array.isArray(c))&&c.length>a?Promise.reject(new Y({message:t,variable:{length:a}})):Promise.resolve()}})}),En=new fe({name:"minLength",defaultMessage:'"${name}" must be at least ${length} characters'}),_n=En.factory(function(a,e){var n=e||{},t=n.message,r=E()(n,In);return m()(m()({},r),{},{validator:function(l){var c=l.getValue(),d=typeof c=="string"||Array.isArray(c)?c.length:"".concat(c!=null?c:"").length;return d<a?Promise.reject(new Y({message:t,variable:{length:a}})):Promise.resolve()}})}),wn={required:gn,email:Fn,maxLength:Vn,minLength:_n},jn=vn},63556:function(L,P){P.Z=`import React from 'react';
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
`},86712:function(L,P){P.Z=`import React from 'react';
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
`},16752:function(L,P){P.Z=`import React from 'react';
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
`},47844:function(L,P){P.Z=`import React from 'react';
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
`},98666:function(L,P){P.Z=`import React from 'react';
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
`},62935:function(L,P){P.Z=`import type React from 'react';
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
`},31375:function(L,P){P.Z=`import React from 'react';

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
`},75697:function(L,P){P.Z=`import React from 'react';
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
