"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[896],{1896:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,a,i,s,o,c,u,l=t(2791),d=t(5861),x=t(4687),m=t.n(x),p=t(6382),f=t(6916),h=function(n){return n.contacts.items},Z=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},b=(0,f.P1)([h,function(n){return n.filter}],(function(n,e){return""===e?n:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),g=t(9434),v=t(2996),y=t(4294),w=t(5218),k=t(6120),P=t(168),C=t(6487),z=C.ZP.form(r||(r=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 45px;\n  padding: 17px;\n"]))),F=C.ZP.div(a||(a=(0,P.Z)(["\ndisplay: flex;\nflex-direction: column;\nmargin-bottom: 20px;\n"]))),A=C.ZP.label(i||(i=(0,P.Z)(["\nfont-size: large;\nmargin-bottom: 7px;\nfont-weight: bold;\n"]))),I=C.ZP.input(s||(s=(0,P.Z)(["\nwidth: 300px;\nheight: 35px;\n\n\nfont-size: large;\n"]))),L=t(3329),_=function(){var n=(0,p.x0)(),e=(0,p.x0)(),t=(0,g.v9)(h),r=(0,g.I0)();function a(){return(a=(0,d.Z)(m().mark((function n(e,t){var a,i;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=t.name,i=t.number,e.find((function(n){return n.name.toLowerCase()===a.toLowerCase()}))){n.next=8;break}return n.next=5,r((0,v.uK)({name:a,number:i})).unwrap();case 5:r((0,v.yF)()),n.next=9;break;case 8:w.Am.error("".concat(a," already in list"),k.z);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,L.jsxs)(z,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,r=e.elements,i=r.nameInput,s=r.numberInput,o=i.value.trim(),c=s.value.trim();!function(n,e){a.apply(this,arguments)}(t,{name:o,number:c}),e.reset()},children:[(0,L.jsxs)(F,{children:[(0,L.jsx)(A,{htmlFor:n,children:"Name"}),(0,L.jsx)(I,{id:n,type:"text",name:"nameInput",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,L.jsxs)(F,{children:[(0,L.jsx)(A,{htmlFor:e,children:"Phone Number"}),(0,L.jsx)(I,{id:e,type:"tel",name:"phoneInput",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,L.jsx)(y.Z,{sx:{height:"40px",width:"140px"},type:"submit",variant:"contained",fullWidth:!0,children:"Add Contact"})]})},N=t(1634),q=t(5984),E=C.ZP.label(o||(o=(0,P.Z)(["\n  margin-bottom: 10px;\n  font-size: 22px;\n  font-weight: 500;\n"]))),G=C.ZP.input(c||(c=(0,P.Z)(["\n  display: flex;\n  margin: 2px 0 35px 0;\n  width: 250px;\n  height: 28px;\n\n  /* border-radius: 3px; */\n\n  font-size: large;\n"]))),K=function(){var n=(0,q.x0)(),e=(0,g.I0)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(E,{htmlFor:n,children:"Find contacts by name"}),(0,L.jsx)(G,{id:n,onChange:function(n){return e((0,N.v)(n.target.value))}})]})},W=t(4852),B=t(3400),D=t(7247),J=t(653),M=t(3044),S=t(8619),T=t(6259),$=function(n){var e=n.name,t=n.id,r=n.number,a=(0,g.I0)(),i=function(){var n=(0,d.Z)(m().mark((function n(){return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a((0,v.GK)(t)).unwrap();case 2:a((0,v.yF)());case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,L.jsxs)(W.ZP,{secondaryAction:(0,L.jsx)(B.Z,{onClick:function(){return i()},edge:"end","aria-label":"delete",children:(0,L.jsx)(D.Z,{})}),children:[(0,L.jsx)(J.Z,{children:(0,L.jsx)(M.Z,{children:(0,L.jsx)(S.Z,{})})}),(0,L.jsx)(T.Z,{primary:e,secondary:r})]})},H=t(7630),O=t(4554),Q=t(493),R=t(1889),U=function(){var n=(0,g.v9)(b);var e,t=(0,H.ZP)("div")((function(n){return{backgroundColor:n.theme.palette.background.paper}}));return(0,L.jsx)(O.Z,{sx:{flexGrow:1,maxWidth:752},children:(0,L.jsx)(R.ZP,{container:!0,spacing:2,children:(0,L.jsx)(R.ZP,{item:!0,xs:12,children:(0,L.jsx)(t,{children:(0,L.jsx)(Q.Z,{children:(e=(0,L.jsx)($,{}),n.map((function(n){return l.cloneElement(e,{key:n.id,name:n.name,number:n.number,id:n.id})})))})})})})})},V=t(9185),X=C.ZP.div(u||(u=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 15px;\n  height: 100vh;\n  display: flex;\n  color: #010101;\n"]))),Y=function(){var n=(0,g.v9)(Z),e=(0,g.v9)(j),t=(0,g.I0)();return(0,l.useEffect)((function(){t((0,v.yF)())}),[t]),(0,L.jsxs)(X,{children:[(0,L.jsx)(_,{}),(0,L.jsx)(K,{}),n&&!e&&(0,L.jsx)(V.a,{}),(0,L.jsx)(U,{})]})}}}]);
//# sourceMappingURL=896.ddd753d2.chunk.js.map