(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{103:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(0),r=s.n(a),i=s(85),c=s.n(i),l=(s(94),s(95),s(96),s(44)),o=s.p+"static/media/kidsloop_min_logo.8a888a62.svg",m=s(88),d=s.p+"static/media/light.6917deac.svg",j=s.p+"static/media/arrow.9d3c1a34.svg",u=s.p+"static/media/arrow-white.9df459a8.svg",b=s.p+"static/media/dark.3b658720.svg",h=function(){var e=localStorage.getItem("theme"),t=Object(a.useState)(e||"light"),s=Object(m.a)(t,2),r=s[0],i=s[1];Object(a.useEffect)((function(){e?document.documentElement.setAttribute("data-theme",e):(localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light"))}),[e]);return Object(n.jsxs)("div",{className:"sign-in-footer",children:[Object(n.jsxs)("div",{className:"right",children:[Object(n.jsx)("img",{src:"light"===r?d:b,alt:"brightness-logo",className:"brightness-logo",onClick:function(){"dark"!==document.documentElement.getAttribute("data-theme")?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light"),"light"===e?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light"),i("light"===r?"dark":"light")}}),Object(n.jsxs)("div",{className:"custom-select",children:[Object(n.jsxs)("select",{name:"languages",id:"select-language",className:"select-language",onChange:function(e){console.log(e.target.value),document.documentElement.setAttribute("lang",e.target.value)},children:[Object(n.jsx)("option",{lang:"en",value:"en",children:"English"}),Object(n.jsx)("option",{lang:"de",value:"de",children:"Deutsch"}),Object(n.jsx)("option",{lang:"fr",value:"fr",children:"Fran\xe7ais"}),Object(n.jsx)("option",{lang:"it",value:"it",children:"Italiano"})]}),Object(n.jsx)("img",{src:"light"===r?j:u,className:"select-arrow",alt:"arrow-logo"})]})]}),Object(n.jsxs)("div",{className:"left",children:[Object(n.jsx)("a",{href:"/",children:"Help"}),Object(n.jsx)("a",{href:"/",children:"Privacy"}),Object(n.jsx)("a",{href:"/",children:"Terms"})]})]})},g=s(5),p=s(17),O=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null);return Object(n.jsxs)("div",{className:"sign-in-background",children:[Object(n.jsx)("div",{className:"progress-bar",ref:e,style:{width:"0%"}}),Object(n.jsxs)("div",{className:"sign-in-wrapper",children:[Object(n.jsxs)("div",{className:"sign-in-form",children:[Object(n.jsx)("img",{src:o,className:"kids-loop-logo",alt:"kids-loop-logo"}),Object(n.jsx)("h2",{className:"title",children:"Sign In"}),Object(n.jsx)(g.d,{initialValues:{email:"",password:""},validationSchema:p.a({email:p.b().min(3,"Too Short!").email("Invalid email format").required("Required!"),password:p.b().required("Required!")}),onSubmit:function(t){e.current&&(e.current.style.display="block"),e.current&&(e.current.style.transition="1s linear width"),e.current&&(e.current.style.width="100%"),console.log("submit"),setTimeout((function(){console.log("submit"),e.current&&(e.current.style.display="none"),alert(JSON.stringify(t,null,2))}),1e3)},render:function(e){var s=e.errors,a=e.touched;return Object(n.jsxs)(g.c,{className:"sign-in-form-main",ref:t,autoComplete:"on",children:[Object(n.jsx)("div",{className:"form-error",children:Object(n.jsx)(g.a,{name:"email",component:"p"})}),Object(n.jsx)(g.b,{autoComplete:"username",className:"sign-in-inputs",type:"email",name:"email",placeholder:"Email *",style:{borderColor:s.email&&a.email?"tomato":" #999999"}}),Object(n.jsx)("div",{className:"form-error",children:Object(n.jsx)(g.a,{name:"password",component:"p"})}),Object(n.jsx)(g.b,{autoComplete:"new-password",className:"sign-in-inputs",type:"password",name:"password",placeholder:"Password *",style:{borderColor:s.password&&a.password?"tomato":" #999999"}}),Object(n.jsxs)("div",{className:"sign-in-form-footer",children:[Object(n.jsx)(l.b,{to:"/password-reset",children:"Forgot Password?"}),Object(n.jsx)("button",{className:"sign-in-submit",type:"submit",children:"Sign In"})]})]})}}),Object(n.jsx)("div",{className:"sign-in-create",children:Object(n.jsx)(l.b,{to:"/signup",children:"Create an account"})})]}),Object(n.jsx)(h,{})]})]})},x=s(6),f=function(){var e=Object(x.f)();return Object(n.jsx)("div",{className:"go-back",onClick:function(){return e.goBack()},children:"Go Back"})},v=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null);return Object(n.jsxs)("div",{className:"sign-in-background",children:[Object(n.jsx)("div",{className:"progress-bar",ref:e,style:{width:"0%"}}),Object(n.jsxs)("div",{className:"sign-in-wrapper",children:[Object(n.jsx)(f,{}),Object(n.jsxs)("div",{className:"sign-in-form",children:[Object(n.jsx)("img",{src:o,className:"kids-loop-logo",alt:"kids-loop-logo"}),Object(n.jsx)("h2",{className:"title",children:"Password Reset"}),Object(n.jsx)(g.d,{initialValues:{email:""},validationSchema:p.a({email:p.b().min(3,"Too Short!").email("Invalid email format").required("Required!")}),onSubmit:function(t){e.current&&(e.current.style.display="block"),e.current&&(e.current.style.transition="1s linear width"),e.current&&(e.current.style.width="100%"),console.log("submit"),setTimeout((function(){console.log("submit"),e.current&&(e.current.style.display="none"),alert(JSON.stringify(t,null,2))}),1e3)},render:function(e){var s=e.errors,a=e.touched;return Object(n.jsxs)(g.c,{className:"sign-in-form-main",ref:t,children:[Object(n.jsx)("div",{className:"form-error",children:Object(n.jsx)(g.a,{name:"email",component:"p"})}),Object(n.jsx)(g.b,{className:"sign-in-inputs",type:"email",name:"email",placeholder:"Email *",style:{borderColor:s.email&&a.email?"tomato":" #999999"}}),Object(n.jsx)("div",{className:"sign-in-form-footer",children:Object(n.jsx)("button",{className:"sign-in-submit",type:"submit",children:"Search"})})]})}})]}),Object(n.jsx)(h,{})]})]})},N=(s(101),function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null);return Object(n.jsxs)("div",{className:"sign-in-background",children:[Object(n.jsx)("div",{className:"progress-bar",ref:e,style:{width:"0%"}}),Object(n.jsxs)("div",{className:"sign-in-wrapper",children:[Object(n.jsx)(f,{}),Object(n.jsxs)("div",{className:"sign-in-form",children:[Object(n.jsx)("img",{src:o,className:"kids-loop-logo",alt:"kids-loop-logo"}),Object(n.jsx)("h2",{className:"title",children:"Create your account"}),Object(n.jsx)(g.d,{initialValues:{name:"",phone:"",email:"",password:""},validationSchema:p.a({name:p.b().min(2,"Too Short!").required("Required"),phone:p.b().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Invalid phone number").required("Required!"),email:p.b().min(3,"Too Short!").email("Invalid email format").required("Required!"),password:p.b().required("Required!")}),onSubmit:function(t){e.current&&(e.current.style.display="block"),e.current&&(e.current.style.transition="1s linear width"),e.current&&(e.current.style.width="100%"),console.log("submit"),setTimeout((function(){console.log("submit"),e.current&&(e.current.style.display="none"),alert(JSON.stringify(t,null,2))}),1e3)},render:function(e){var s=e.errors,a=e.touched;return Object(n.jsxs)(g.c,{className:"sign-in-form-main",ref:t,children:[Object(n.jsx)("div",{className:"form-error",children:Object(n.jsx)(g.a,{name:"name",component:"p"})}),Object(n.jsx)(g.b,{className:"sign-in-inputs",type:"text",name:"name",placeholder:"Name *",style:{borderColor:s.name&&a.name?"tomato":" #999999"}}),Object(n.jsx)("div",{className:"form-error",children:Object(n.jsx)(g.a,{name:"phone",component:"p"})}),Object(n.jsx)(g.b,{className:"sign-in-inputs",type:"tel",name:"phone",placeholder:"Phone Number *",style:{borderColor:s.phone&&a.phone?"tomato":" #999999"}}),Object(n.jsx)("div",{className:"form-error",children:Object(n.jsx)(g.a,{name:"email",component:"p"})}),Object(n.jsx)(g.b,{className:"sign-in-inputs",type:"email",name:"email",placeholder:"Email *",style:{borderColor:s.name&&a.name?"tomato":" #999999"}}),Object(n.jsx)("div",{className:"form-error",children:Object(n.jsx)(g.a,{name:"password",component:"p"})}),Object(n.jsx)(g.b,{className:"sign-in-inputs",type:"password",name:"password",placeholder:"Password *",style:{borderColor:s.password&&a.password?"tomato":" #999999"}}),Object(n.jsx)("div",{className:"sign-in-form-footer",children:Object(n.jsx)("button",{className:"sign-in-submit",type:"submit",children:"Sign Up"})})]})}})]}),Object(n.jsx)(h,{})]})]})}),y=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(l.a,{children:Object(n.jsxs)(x.c,{children:[Object(n.jsx)(x.a,{exact:!0,path:"/password-reset",children:Object(n.jsx)(v,{})}),Object(n.jsx)(x.a,{exact:!0,path:"/signup",children:Object(n.jsx)(N,{})}),Object(n.jsx)(x.a,{exact:!0,path:"/",children:Object(n.jsx)(O,{})})]})})})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,104)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),w()},94:function(e,t,s){},95:function(e,t,s){},96:function(e,t,s){}},[[103,1,2]]]);
//# sourceMappingURL=main.87de8bee.chunk.js.map