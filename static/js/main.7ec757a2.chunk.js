(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(1),o=n.n(c),l=n(11),u=n(2),i=n(3),s=n(5),m=n(4),h=n(10),f=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.hendleSubmit=function(t){t.preventDefault(),e.props.onAdd(e.state),e.setState({name:"",number:""})},e.hendleInputChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.hendleSubmit},r.a.createElement("h3",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.hendleInputChange}),r.a.createElement("h3",null,"Number"),r.a.createElement("input",{type:"text",name:"number",value:n,onChange:this.hendleInputChange}),r.a.createElement("button",{className:"addButton",type:"submit"},"Add contact"))}}]),n}(a.Component),d=function(e){var t=e.contacts,n=e.onRemove;return r.a.createElement("ul",null,t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement("li",{key:t},r.a.createElement("span",{className:"name"},a,":"),r.a.createElement("span",{className:"number"},c),r.a.createElement("button",{className:"removeButton",onClick:function(){return n(t)}},"Delete"))})))},p=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={filter:""},e.handleFilterChange=function(t){t.preventDefault(),e.setState({filter:t.target.value},(function(){return e.props.onFilterChange(e.state)}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("div",{className:"filter"},r.a.createElement("h3",null,"Find contacts by name"),r.a.createElement("input",{type:"text",name:"filter",value:e,onChange:this.handleFilterChange}))}}]),n}(a.Component),v=n(25),b=n(7),g=(n(17),n(18),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.handleAddContact=function(t){var n=t.name,a=t.number;e.state.contacts.some((function(e){return e.name===n}))?b.b.warn("".concat(n," is already in contacts")):n&&a?e.setState((function(e){var t=e.contacts;return{contacts:[].concat(Object(l.a)(t),[{id:Object(v.a)(),name:n,number:a}])}})):b.b.warn("Please enter the contact name and number")},e.handleFilterChange=function(t){var n=t.filter;e.setState({filter:n})},e.filterContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return a?n.filter((function(e){return e.name.includes(a)})):n},e.handleRemoveContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.saveData=function(){localStorage.setItem("phonebook",JSON.stringify(e.state.contacts))},e.loadData=function(){var t=JSON.parse(localStorage.getItem("phonebook"));t&&e.setState({contacts:t})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(){this.saveData()}},{key:"render",value:function(){var e=this.state.contacts;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Phonebook"),r.a.createElement(f,{onAdd:this.handleAddContact}),r.a.createElement("h2",null,"Contacts"),e.length>=2&&r.a.createElement(p,{onFilterChange:this.handleFilterChange}),r.a.createElement(d,{contacts:this.filterContacts(),onRemove:this.handleRemoveContact}),r.a.createElement(b.a,{position:"top-center"}))}}]),n}(a.Component));o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7ec757a2.chunk.js.map