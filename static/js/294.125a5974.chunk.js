"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[294],{294:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r,a,s=t(434),o=t(206),u=t(168),i=t(867),c=i.ZP.form(r||(r=(0,u.Z)(["\n  width: 320px;\n"]))),p=i.ZP.label(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n"]))),l=t(184),m=function(){var e=(0,s.I0)();return(0,l.jsxs)(c,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget;e((0,o.I)({email:t.elements.email.value,password:t.elements.password.value})),t.reset()},autoComplete:"off",children:[(0,l.jsxs)(p,{children:["Email",(0,l.jsx)("input",{type:"email",name:"email"})]}),(0,l.jsxs)(p,{children:["Password",(0,l.jsx)("input",{type:"password",name:"password"})]}),(0,l.jsx)("button",{type:"submit",children:"Log In"})]})};function f(){return(0,l.jsx)("div",{children:(0,l.jsx)(m,{})})}},206:function(e,n,t){t.d(n,{I:function(){return m},z:function(){return l}});var r=t(37),a=t(861),s=t(757),o=t.n(s),u=t(243);u.Z.defaults.baseURL="https://connections-api.herokuapp.com/users/";var i=function(e){u.Z.defaults.headers.common.Authorization="Bearer ".concat(e)},c=function(){var e=(0,a.Z)(o().mark((function e(n,t,r){var a,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({name:n,email:t,password:r}),e.next=3,u.Z.post("/signup",{name:n,email:t,password:r});case 3:return a=e.sent,s=a.data,i(s.token),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(o().mark((function e(n,t){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.post("/login",{email:n,password:t});case 2:return r=e.sent,a=r.data,i(a.token),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=(0,r.hg)("auth/register",(function(e){var n=e.name,t=e.email,r=e.password;return c(n,t,r)})),m=(0,r.hg)("auth/login",(function(e){var n=e.email,t=e.password;return p(n,t)}))}}]);
//# sourceMappingURL=294.125a5974.chunk.js.map