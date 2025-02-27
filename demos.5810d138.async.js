"use strict";(self.webpackChunkform_pilot=self.webpackChunkform_pilot||[]).push([[433],{9236:function(j,i,n){n.r(i);var x=n(67294),t=n(56076),r=n(85893);i.default=function(){var l=t.default.useControl();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.default.Item,{control:l,getValueFromEvent:function(o){return o.target.checked},children:(0,r.jsx)("input",{type:"checkbox"})}),(0,r.jsx)(t.default.Update,{control:l,children:function(o){return JSON.stringify(o==null?void 0:o.getValue())}})]})}},34879:function(j,i,n){n.r(i);var x=n(15009),t=n.n(x),r=n(99289),l=n.n(r),e=n(67294),o=n(56076),a=n(78944),m=n(67191),d=n(98231),u=n(85893);i.default=function(){var s=o.default.useControl();return(0,u.jsxs)(d.Row,{$gap:6,children:[(0,u.jsxs)(o.default,{control:s,children:[(0,u.jsx)(d.Col,{$flex:"0 0 100%",children:(0,u.jsx)(a.default,{name:"username",label:"Username",rules:[o.Rules.required(),o.Rules.maxLength(5,{type:"warning"})],children:(0,u.jsx)(m.Input,{})})}),(0,u.jsx)(d.Col,{$flex:"0 0 100%",children:(0,u.jsx)(a.default,{name:"email",label:"Email",rules:[o.Rules.email()],children:(0,u.jsx)(m.Input,{})})})]}),(0,u.jsx)(d.Col,{$flex:"0 0 100%",children:(0,u.jsxs)(d.Row,{$gap:6,children:[(0,u.jsx)("button",{type:"button",onClick:l()(t()().mark(function c(){var h;return t()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,s.validateFields();case 2:h=f.sent,console.log(h);case 4:case"end":return f.stop()}},c)})),children:"\u63D0\u4EA4"}),(0,u.jsx)("button",{type:"button",onClick:l()(t()().mark(function c(){return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:s.reset();case 1:case"end":return _.stop()}},c)})),children:"\u91CD\u7F6E"}),(0,u.jsx)("button",{type:"button",onClick:l()(t()().mark(function c(){return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:s.clearValidation();case 1:case"end":return _.stop()}},c)})),children:"\u6E05\u9664\u6821\u9A8C"})]})})]})}},30701:function(j,i,n){n.r(i);var x=n(97857),t=n.n(x),r=n(67294),l=n(56076),e=n(85893),o=function(m){var d=l.default.useControl(m.control);return(0,e.jsxs)("div",{children:[(0,e.jsx)(l.default.Item,t()(t()({},m),{},{control:d})),(0,e.jsx)(l.default.Validation,{control:d,children:function(s){var c;return(0,e.jsx)("div",{children:s==null||(c=s.results)===null||c===void 0?void 0:c.map(function(h,_){return(0,e.jsx)("span",{style:{color:h.type==="error"?"red":"orange"},children:h.message},_)})})}})]})};i.default=function(){var a=l.default.useControl();return(0,e.jsxs)("form",{onSubmit:function(d){return d.preventDefault(),a.validateFields().then(function(u){console.log(u)}).catch(function(u){console.log(u)}),!1},children:[(0,e.jsxs)(l.default,{control:a,initialValues:{nickname:"hello world",information:{age:18,email:""},skills:[{name:"basketball",desc:"A+"}]},children:[(0,e.jsx)(o,{name:"nickname",rules:[l.Rules.required(),l.Rules.maxLength(10,{type:"warning"})],children:(0,e.jsx)("input",{})}),(0,e.jsxs)(l.default.Group,{name:"information",children:[(0,e.jsx)(o,{name:"age",children:(0,e.jsx)("input",{type:"number"})}),(0,e.jsx)(o,{name:"email",rules:[l.Rules.email()],children:(0,e.jsx)("input",{})})]}),(0,e.jsx)(l.default.List,{name:"skills",children:function(d,u){return(0,e.jsxs)(e.Fragment,{children:[d.map(function(s){return(0,e.jsx)("div",{style:{display:"flex"},children:(0,e.jsxs)(l.default.Group,{name:s.name,children:[(0,e.jsx)(o,{name:"name",children:(0,e.jsx)("input",{})}),(0,e.jsx)(o,{name:"desc",children:(0,e.jsx)("input",{})}),(0,e.jsx)("button",{type:"button",onClick:function(){return u.remove(s.name)},children:"remove this item"})]})},s.key)}),(0,e.jsx)("button",{type:"button",onClick:function(){return u.add({name:"",desc:""})},children:"Add Item"})]})}})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("button",{type:"submit",children:"Submit"}),(0,e.jsx)("button",{type:"button",onClick:function(){return a.reset()},children:"Reset"}),(0,e.jsx)("button",{type:"button",onClick:function(){return a.clearValidation()},children:"Clear Validation Errors"})]})]})}},14744:function(j,i,n){n.r(i);var x=n(67294),t=n(56076),r=n(67191),l=n(98231),e=n(85893);i.default=function(){var o=t.default.useControl();return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(l.Row,{$gap:8,children:[new Date().toLocaleString(),(0,e.jsx)(t.default,{control:o,children:(0,e.jsxs)(t.default.Group,{name:"info",children:[(0,e.jsx)(l.Col,{$flex:"0 0 100%",children:(0,e.jsx)(t.default.Item,{name:"username",initialValue:"\u9ED8\u8BA4\u503C username",children:(0,e.jsx)(r.Input,{placeholder:"username"})})}),(0,e.jsx)(l.Col,{children:(0,e.jsx)(t.default.Item,{name:"age",initialValue:"\u9ED8\u8BA4\u503C 18",children:(0,e.jsx)(r.Input,{placeholder:"age"})})})]})}),(0,e.jsx)(l.Col,{$flex:"0 0 100%",children:(0,e.jsxs)(l.Row,{$gap:8,children:[(0,e.jsx)("button",{onClick:function(){console.log(o.getValue())},type:"button",children:"control.getValue()"}),(0,e.jsx)("button",{onClick:function(){console.log(o.getStore("_STORE_INTERNAL_TOKEN_"))},type:"button",children:"control.getStore()"}),(0,e.jsx)("button",{onClick:function(){return o.reset()},type:"button",children:"reset"})]})})]})})}},31343:function(j,i,n){n.r(i);var x=n(67294),t=n(56076),r=n(98231),l=n(67191),e=n(85893);i.default=function(){var o=t.default.useControl(),a=t.default.useControl(),m=t.default.useWatch(a),d=t.default.useWatch(o),u=t.default.useControl();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{children:[new Date().toLocaleString(),(0,e.jsx)(t.default,{control:o,initialValues:{username:"\u9ED8\u8BA4\u503C root",password:"password",extra:{a:1,b:2}},children:(0,e.jsxs)(r.Row,{$gap:8,children:[(0,e.jsxs)(r.Col,{$flex:"0 0 33.3%",children:[(0,e.jsx)(t.default.Item,{name:"username",control:a,initialValue:"\u9ED8\u8BA4\u503C",children:(0,e.jsx)(l.Input,{placeholder:"username"})}),m]}),(0,e.jsx)(r.Col,{$flex:"0 0 33.3%",children:(0,e.jsx)(t.default.Item,{name:"password",children:(0,e.jsx)(l.Input,{placeholder:"password"})})}),(0,e.jsx)(r.Col,{$flex:"0 0 33.3%",children:(0,e.jsx)(t.default.Item,{name:["name","first"],children:(0,e.jsx)(l.Input,{placeholder:"name, first"})})}),(0,e.jsx)(r.Col,{$flex:"0 0 33.3%",children:(0,e.jsx)(t.default.Item,{name:["name","last"],children:(0,e.jsx)(l.Input,{placeholder:"name, last"})})}),(0,e.jsx)(r.Col,{$flex:"0 0 33.3%",children:(0,e.jsx)(t.default.Group,{name:"detail",children:(0,e.jsx)(t.default.Item,{name:"age",children:(0,e.jsx)(l.Input,{placeholder:"detail, age"})})})}),(0,e.jsx)(r.Col,{$flex:"0 0 33.3%",children:(0,e.jsx)(t.default.Item,{name:["detail","introduce"],children:(0,e.jsx)(l.Input,{placeholder:"detail, introduce"})})}),(0,e.jsx)(r.Col,{$flex:"0 0 100%",children:(0,e.jsx)(t.default.List,{name:"list",children:function(c,h){var _=h.add,f=h.remove;return(0,e.jsxs)(r.Row,{$gap:8,children:[c.map(function(p){return(0,e.jsx)(t.default.Group,{name:p.name,children:(0,e.jsx)(r.Col,{$flex:"0 0 100%",children:(0,e.jsxs)(r.Row,{$gap:8,children:[(0,e.jsx)(r.Col,{$flex:"0 0 200px",children:(0,e.jsx)(t.default.Item,{name:"prefix",children:(0,e.jsx)(l.Input,{placeholder:"prefix",style:{width:"100%"}})})}),(0,e.jsx)(r.Col,{children:(0,e.jsx)("button",{onClick:function(){return f(p.name)},type:"button",children:"\u5220\u9664"})})]})})},p.key)}),(0,e.jsx)(r.Col,{$flex:"0 0 100%",children:(0,e.jsx)("button",{onClick:function(){return _()},type:"button",children:"Add"})})]})}})}),(0,e.jsxs)("div",{children:[(0,e.jsx)(t.default.Item,{control:u,children:(0,e.jsx)(l.Input,{placeholder:"\u72EC\u7ACB\u53D7\u63A7\uFF08\u8131\u79BBForm\uFF09"})}),(0,e.jsx)("button",{onClick:function(){return u.setValue("independentControl")},type:"button",children:"independentControl"})]})]})})]}),(0,e.jsx)("div",{children:JSON.stringify(d,null,2)}),(0,e.jsx)("div",{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("button",{onClick:function(){console.log(o.getValue())},type:"button",children:"control.getValue()"}),(0,e.jsx)("button",{onClick:function(){console.log(o.getStrictValue())},type:"button",children:"control.getStrictValue()"}),(0,e.jsx)("button",{onClick:function(){return o.reset()},type:"button",children:"reset"}),(0,e.jsx)("button",{onClick:function(){return o.setFieldValue(["list"],[{prefix:"123"}])},type:"button",children:"setFieldValue"})]})})]})}}}]);
