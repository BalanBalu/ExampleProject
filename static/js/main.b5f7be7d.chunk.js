(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],{21:function(e,t,n){},35:function(e,t,n){e.exports=n(67)},40:function(e,t,n){},41:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),l=n(31),r=n.n(l),o=(n(40),n(1)),c=n(2),i=n(5),u=n(3),m=n(4),b=n(12),h=n(14),p=(n(41),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).fLogin=function(e){e.preventDefault(),console.log("try");var t=n.state.datas,a=n.refs.email.value;if(0===n.state.act){var s={email:a,password:""};t.push(s)}else{var l=n.state.index;t[l].email=a,t[l].password=""}n.setState({datas:t,act:0}),n.refs.myForm.reset(),n.refs.email.focus()},n.fRemove=function(e){var t=n.state.datas;t.splice(e,1),n.setState({datas:t}),n.refs.myForm.reset(),n.refs.email.focus()},n.fEdit=function(e){var t=n.state.datas[e];n.refs.email.value=t.email,n.setState({act:1,index:e}),n.refs.email.focus()},n.state={title:"LOGIN PAGE",act:0,index:"",datas:[]},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.refs.email.focus()}},{key:"render",value:function(){var e=this,t=this.state.datas;return s.a.createElement("div",{className:"total"},s.a.createElement("div",{className:"App"},s.a.createElement("h3",null,this.state.title),s.a.createElement("form",{ref:"myForm",className:"myForm"},s.a.createElement("input",{type:"text",ref:"email",placeholder:"your email",className:"formField"}),s.a.createElement("input",{type:"password",placeholder:"your password",className:"formField"}),s.a.createElement("button",{onClick:function(t){return e.fLogin(t)},className:"myButton"},"LOGIN ")),s.a.createElement("pre",null,t.map((function(t,n){return s.a.createElement("li",{key:n,className:"myList"},n+1,". ",t.email,", ",t.password,s.a.createElement("button",{onClick:function(){return e.fRemove(n)},className:"myListButton"},"remove "),s.a.createElement("button",{onClick:function(){return e.fEdit(n)},className:"myListButton"},"edit "))})))))}}]),t}(a.Component)),d=(n(21),n(11)),f=n.n(d),E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).fileSelectHandler=function(e){n.setState({selectedFile:e.target.files[0]})},n.onUploadHandler=function(){var e=new FormData;e.append("image",n.state.selectedFile,n.state.selectedFile.name),f.a.post("http://localhost:4000/business/add",e).then((function(e){console.log(e)}))},n.state={selectedFile:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"File Upload"),s.a.createElement("input",{type:"file",onChange:this.fileSelectHandler}),s.a.createElement("button",{onClick:this.onUploadHandler},"Upload"))}}]),t}(a.Component),v=(n(59),n(60),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"React project"))}}]),t}(a.Component)),g=(n(61),a.Component,n(7)),y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChangePersonName=n.onChangePersonName.bind(Object(g.a)(n)),n.onChangeBusinessName=n.onChangeBusinessName.bind(Object(g.a)(n)),n.onChangeGstNumber=n.onChangeGstNumber.bind(Object(g.a)(n)),n.onSubmit=n.onSubmit.bind(Object(g.a)(n)),n.state={person_name:"",business_name:"",business_gst_number:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onChangePersonName",value:function(e){this.setState({person_name:e.target.value})}},{key:"onChangeBusinessName",value:function(e){this.setState({business_name:e.target.value})}},{key:"onChangeGstNumber",value:function(e){this.setState({business_gst_number:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={person_name:this.state.person_name,business_name:this.state.business_name,business_gst_number:this.state.business_gst_number};f.a.post("http://localhost:4000/business/add",t).then((function(e){return console.log(e.data)})),this.setState({person_name:"",business_name:"",business_gst_number:""})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App",style:{marginTop:10}},s.a.createElement("h3",null,"Add New Business"),s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Person Name:  "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.person_name,onChange:this.onChangePersonName})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Business Name: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.business_name,onChange:this.onChangeBusinessName})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"GST Number: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.business_gst_number,onChange:this.onChangeGstNumber})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"submit",value:"Register Business",className:"btn btn-primary"}))))}}]),t}(a.Component),N=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChangePersonName=n.onChangePersonName.bind(Object(g.a)(n)),n.onChangeBusinessName=n.onChangeBusinessName.bind(Object(g.a)(n)),n.onChangeGstNumber=n.onChangeGstNumber.bind(Object(g.a)(n)),n.onSubmit=n.onSubmit.bind(Object(g.a)(n)),n.state={person_name:"",business_name:"",business_gst_number:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:4000/business/edit/"+this.props.match.params.id).then((function(t){e.setState({person_name:t.data.person_name,business_name:t.data.business_name,business_gst_number:t.data.business_gst_number})})).catch((function(e){console.log(e)}))}},{key:"onChangePersonName",value:function(e){this.setState({person_name:e.target.value})}},{key:"onChangeBusinessName",value:function(e){this.setState({business_name:e.target.value})}},{key:"onChangeGstNumber",value:function(e){this.setState({business_gst_number:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={person_name:this.state.person_name,business_name:this.state.business_name,business_gst_number:this.state.business_gst_number};f.a.post("http://localhost:4000/business/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),this.props.history.push("/index")}},{key:"render",value:function(){return s.a.createElement("div",{style:{marginTop:10}},s.a.createElement("h3",{align:"center"},"Update Business"),s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Person Name:  "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.person_name,onChange:this.onChangePersonName})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Business Name: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.business_name,onChange:this.onChangeBusinessName})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"GST Number: "),s.a.createElement("input",{type:"text",className:"form-control",value:this.state.business_gst_number,onChange:this.onChangeGstNumber})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"submit",value:"Update Business",className:"btn btn-primary"}))))}}]),t}(a.Component),j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).delete=n.delete.bind(Object(g.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"delete",value:function(){f.a.get("http://localhost:4000/business/delete/"+this.props.obj._id).then(console.log("Deleted")).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return s.a.createElement("tr",null,s.a.createElement("td",null,this.props.obj.person_name),s.a.createElement("td",null,this.props.obj.business_name),s.a.createElement("td",null,this.props.obj.business_gst_number),s.a.createElement("td",null,s.a.createElement(b.b,{to:"/edit/"+this.props.obj._id,className:"btn btn-primary"},"Edit")),s.a.createElement("td",null,s.a.createElement("button",{onClick:this.delete,className:"btn btn-danger"},"Delete")))}}]),t}(a.Component),_=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={business:[]},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:4000/business").then((function(t){e.setState({business:t.data})})).catch((function(e){console.log(e)}))}},{key:"tabRow",value:function(){return this.state.business.map((function(e,t){return s.a.createElement(j,{obj:e,key:t})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",{align:"center"},"Business List"),s.a.createElement("table",{className:"table table-striped",style:{marginTop:20}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Person"),s.a.createElement("th",null,"Business"),s.a.createElement("th",null,"GST Number"),s.a.createElement("th",{colSpan:"2"},"Action"))),s.a.createElement("tbody",null,this.tabRow())))}}]),t}(a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:{width:"100%"}},s.a.createElement("navbar",{className:"navbar fixed-top"},s.a.createElement(v,null),s.a.createElement("div",{className:"tile_div"},s.a.createElement(b.b,{to:"/",className:"nav-link"}," ",s.a.createElement("button",{type:"button",class:"btn btn-secondary"},"Home")," "),s.a.createElement(b.b,{to:"/create",className:"nav-link"}," ",s.a.createElement("button",{type:"button",class:"btn btn-secondary"},"Create")," "),s.a.createElement(b.b,{to:"/index",className:"nav-link"}," ",s.a.createElement("button",{type:"button",class:"btn btn-secondary"},"Index"),"  "),s.a.createElement(b.b,{to:"FileUpload",className:"nav-link"}," ",s.a.createElement("button",{type:"button",class:"btn btn-secondary"},"FUpload "),"   "),s.a.createElement(b.b,{to:"Signin",className:"nav-link"}," ",s.a.createElement("button",{type:"button",class:"btn btn-secondary"},"Signin"),"   "))))}}]),t}(a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(b.a,null,s.a.createElement("div",null,s.a.createElement(O,null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(h.c,null,s.a.createElement(h.a,{exact:!0,path:"/create",component:y}),s.a.createElement(h.a,{path:"/edit/:id",component:N}),s.a.createElement(h.a,{path:"/index",component:_}),s.a.createElement(h.a,{path:"/Signin",component:p}),s.a.createElement(h.a,{path:"/FileUpload",component:E})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.b5f7be7d.chunk.js.map