(this["webpackJsonpreact-auth-template"]=this["webpackJsonpreact-auth-template"]||[]).push([[0],{66:function(e,t,n){},75:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(29),c=n.n(s),i=(n(66),n(61)),o=n(11),u=n(12),l=n(14),d=n(13),h=n(9),j=n(99),m=n(2),b=n(3),g=n(1),O=["user","component","render"],f=function(e){var t=e.user,n=e.component,a=e.render,r=Object(b.a)(e,O);return t&&a?Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},r),{},{render:a})):Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},r),{},{render:function(e){return t?Object(g.jsx)(n,Object(m.a)({},e)):Object(g.jsx)(h.a,{to:"/"})}}))},p=n(47),v=(n(75),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,r=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){r(s)}),300),Object(g.jsx)(p.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(p.a.Heading,{children:n}),Object(g.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(r.a.Component)),x=n(60),w=n(35),C=n(10),S=Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(C.c,{to:"/create-run",className:"nav-link",children:"Create Run"}),Object(g.jsx)(C.c,{to:"/runs",className:"nav-link",children:"View Runs"}),Object(g.jsx)(C.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),y=Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(C.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(g.jsx)(C.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),k=Object(g.jsx)(a.Fragment,{children:Object(g.jsx)(C.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),A=function(e){var t=e.user;return Object(g.jsxs)(w.a,{bg:"primary",variant:"dark",expand:"md",children:[Object(g.jsx)(w.a.Brand,{children:Object(g.jsx)(C.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"Running Log"})}),Object(g.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(x.a,{className:"ml-auto",children:[t&&Object(g.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),k,t?S:y]})})]})},P=n(7),I="https://aqueous-atoll-85096.herokuapp.com",N="http://localhost:8000",D="localhost"===window.location.hostname?N:I,U=n(24),L=n.n(U),T=function(e){return L()({url:D+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},F=n(6),R=n(22),E=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props,r=n.msgAlert,s=n.history,c=n.setUser;(t=a.state,L()({method:"POST",url:D+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return T(a.state)})).then((function(e){return c(e.data.user)})).then((function(){return r({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),r({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={email:"",password:"",passwordConfirmation:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.passwordConfirmation;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign Up"}),Object(g.jsxs)(F.a,{onSubmit:this.onSignUp,children:[Object(g.jsxs)(F.a.Group,{controlId:"email",children:[Object(g.jsx)(F.a.Label,{children:"Email address"}),Object(g.jsx)(F.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(F.a.Group,{controlId:"password",children:[Object(g.jsx)(F.a.Label,{children:"Password"}),Object(g.jsx)(F.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsxs)(F.a.Group,{controlId:"passwordConfirmation",children:[Object(g.jsx)(F.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(F.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(g.jsx)(R.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),q=Object(h.f)(E),G=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.setUser;T(a.state).then((function(e){return s(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign In"}),Object(g.jsxs)(F.a,{onSubmit:this.onSignIn,children:[Object(g.jsxs)(F.a.Group,{controlId:"email",children:[Object(g.jsx)(F.a.Label,{children:"Email address"}),Object(g.jsx)(F.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(F.a.Group,{controlId:"password",children:[Object(g.jsx)(F.a.Label,{children:"Password"}),Object(g.jsx)(F.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsx)(R.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),z=Object(h.f)(G),H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,a=e.clearUser;(function(e){return L()({url:D+"/sign-out/",method:"DELETE",headers:{Authorization:"Token ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),n}(a.Component),M=Object(h.f)(H),W=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,r=t.history,s=t.user;(function(e,t){return L()({url:D+"/change-password/",method:"PATCH",headers:{Authorization:"Token ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,s).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Change Password"}),Object(g.jsxs)(F.a,{onSubmit:this.onChangePassword,children:[Object(g.jsxs)(F.a.Group,{controlId:"oldPassword",children:[Object(g.jsx)(F.a.Label,{children:"Old password"}),Object(g.jsx)(F.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(g.jsxs)(F.a.Group,{controlId:"newPassword",children:[Object(g.jsx)(F.a.Label,{children:"New Password"}),Object(g.jsx)(F.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(g.jsx)(R.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),_=Object(h.f)(W),B=function(e){var t=e.run,n=e.handleSubmit,a=e.handleChange;return Object(g.jsxs)(F.a,{onSubmit:n,children:[Object(g.jsxs)(F.a.Group,{controlId:"distance",children:[Object(g.jsx)(F.a.Label,{children:"Distance"}),Object(g.jsx)(F.a.Control,{required:!0,name:"distance",value:t.distance,placeholder:"How far did you run?",onChange:a})]}),Object(g.jsxs)(F.a.Group,{controlId:"shoe",children:[Object(g.jsx)(F.a.Label,{children:"Shoe"}),Object(g.jsx)(F.a.Control,{onChange:a,required:!0,name:"shoe",value:t.shoe,placeholder:"What shoe did you run in?"})]}),Object(g.jsxs)(F.a.Group,{controlId:"difficult",children:[Object(g.jsx)(F.a.Label,{children:"Difficult"}),Object(g.jsx)(F.a.Control,{onChange:a,required:!0,name:"difficult",value:t.difficult,placeholder:"Did you consider this run difficult?"})]}),Object(g.jsx)(R.a,{type:"submit",children:"Submit"})]})},J=function(e,t){return L()({url:D+"/runs/"+e,headers:{Authorization:"Token ".concat(t.token)}})},V=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(P.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.user,r=t.msgAlert,s=t.history;(function(e,t){return L()({url:D+"/runs/",method:"post",data:{run:e},headers:{Authorization:"Token ".concat(t.token)}})})(a.state,n).then((function(e){return s.push("/runs/"+e.data.run.id)})).then((function(){return r({heading:"Run Logged!",message:"Nice work, go check out your run.",variant:"success"})})).catch((function(e){r({heading:"Run log failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.state={distance:"",shoe:"",difficult:""},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{children:"Log your run"}),Object(g.jsx)(B,{run:this.state,handleSubmit:this.handleSubmit,handleChange:this.handleChange})]})}}]),n}(a.Component),Y=Object(h.f)(V),K=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={runs:null},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,a=t.msgAlert;(function(e){return L()({method:"GET",url:D+"/runs",headers:{Authorization:"Token ".concat(e.token)}})})(n).then((function(t){return e.setState({runs:t.data.runs})})).then((function(){return console.log(e.state.runs)})).then((function(){return a({heading:"Index success",message:"Here's the runs",variant:"success"})})).catch((function(e){return a({heading:"Index failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this.state.runs;return null===t?"Loading...":(e=0===t.length?"No runs, go create some":t.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)(C.b,{to:"/runs/".concat(e.id),children:e.distance})},e.id)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{children:"Runs Logged:"}),e]}))}}]),n}(a.Component),Q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleDelete=function(e){var t=a.props,n=t.match,r=t.user,s=t.msgAlert,c=t.history;(function(e,t){return L()({url:D+"/runs/"+e,method:"DELETE",headers:{Authorization:"Token ".concat(t.token)}})})(n.params.id,r).then((function(){return c.push("/runs")})).then((function(){return s({heading:"Delete run successfully",message:"Run is no more",variant:"success"})})).catch((function(e){return s({heading:"Delete run failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.state={run:null},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,a=t.user,r=t.msgAlert;J(n.params.id,a).then((function(t){return e.setState({run:t.data.run})})).then((function(){return r({heading:"Show run success",message:"Check out the run",variant:"success"})})).catch((function(e){return r({heading:"Show run failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){if(null===this.state.run)return"Loading...";var e=this.state.run,t=e.distance,n=e.shoe,a=e.difficult,r=e.owner,s=this.props,c=s.history,i=s.match,o=s.user;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{children:"Show One Run Page"}),Object(g.jsx)("h5",{children:t}),Object(g.jsxs)("p",{children:["Ran in: ",n,", and felt ",a," that it was difficult."]}),o.id===r&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(R.a,{onClick:this.handleDelete,children:"Delete This Run"}),Object(g.jsx)(R.a,{onClick:function(){return c.push("/runs/".concat(i.params.id,"/edit"))},children:"Update Run"})]})]})}}]),n}(a.Component),X=Object(h.f)(Q),Z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=Object(P.a)({},e.target.name,e.target.value);a.setState((function(e){return{run:Object(m.a)(Object(m.a)({},e.run),t)}}))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.user,r=t.msgAlert,s=t.history,c=t.match;(function(e,t,n){return L()({url:D+"/runs/".concat(t,"/"),method:"patch",data:{run:e},headers:{Authorization:"Token ".concat(n.token)}})})(a.state.run,c.params.id,n).then((function(e){return s.push("/runs/"+c.params.id)})).then((function(){return r({heading:"Run Updated!",message:"Nice work, go check out your run.",variant:"success"})})).catch((function(e){r({heading:"Run update failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.state={run:{distance:"",shoe:"",difficult:""}},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,a=t.user,r=t.msgAlert;J(n.params.id,a).then((function(t){return e.setState({run:t.data.run})})).then((function(){return r({heading:"Show run success",message:"Check out the run",variant:"success"})})).catch((function(e){return r({heading:"Show run failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{children:"Update Run"}),Object(g.jsx)(B,{run:this.state.run,handleSubmit:this.handleSubmit,handleChange:this.handleChange})]})}}]),n}(a.Component),$=Object(h.f)(Z),ee=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,n=e.message,r=e.variant,s=Object(j.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:t,message:n,variant:r,id:s}])}}))},a.state={user:null,msgAlerts:[]},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,r=t.user;return Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(A,{user:r}),n.map((function(t){return Object(g.jsx)(v,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(g.jsxs)("main",{className:"container",children:[Object(g.jsx)(h.b,{path:"/sign-up",render:function(){return Object(g.jsx)(q,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(h.b,{path:"/sign-in",render:function(){return Object(g.jsx)(z,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(f,{user:r,path:"/sign-out",render:function(){return Object(g.jsx)(M,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:r})}}),Object(g.jsx)(f,{user:r,path:"/change-password",render:function(){return Object(g.jsx)(_,{msgAlert:e.msgAlert,user:r})}}),Object(g.jsx)(f,{user:r,path:"/create-run",render:function(){return Object(g.jsx)(Y,{msgAlert:e.msgAlert,user:r})}}),Object(g.jsx)(f,{user:r,exact:!0,path:"/runs",render:function(){return Object(g.jsx)(K,{msgAlert:e.msgAlert,user:r})}}),Object(g.jsx)(f,{user:r,exact:!0,path:"/runs/:id",render:function(){return Object(g.jsx)(X,{user:r,msgAlert:e.msgAlert})}}),Object(g.jsx)(f,{user:r,path:"/runs/:id/edit",render:function(){return Object(g.jsx)($,{user:r,msgAlert:e.msgAlert})}})]})]})}}]),n}(a.Component),te=Object(g.jsx)(C.a,{basename:"/ahcarter22/running_log_client",children:Object(g.jsx)(ee,{})});c.a.render(te,document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.02abb4c3.chunk.js.map