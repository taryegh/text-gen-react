(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),m=a.n(n),l=a(3),o=a.n(l);a(16),a(17);function r(){return m.a.createElement("div",null,m.a.createElement("header",null,m.a.createElement("p",null,"Meme Generator")))}var c=a(4),i=a(5),s=a(6),u=a(8),h=a(7),d=a(1),p=a(9),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={topText:"",bottomText:"",randomImg:"https://i.imgflip.com/1bim.jpg",allMemeImgs:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.genImg=a.genImg.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(t){var a=t.data.memes;e.setState({allMemeImgs:a})})}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"genImg",value:function(e){e.preventDefault();var t=Math.floor(100*Math.random()),a=this.state.allMemeImgs[t].url;this.setState({randomImg:a})}},{key:"render",value:function(){return m.a.createElement("div",{className:"cont"},m.a.createElement("form",{onSubmit:this.genImg,className:"meme-form"},m.a.createElement("input",{type:"text",name:"topText",placeholder:"Add top text",onChange:this.handleChange,value:this.state.topText}),m.a.createElement("input",{type:"text",name:"bottomText",placeholder:"Add bottom text",onChange:this.handleChange,value:this.state.bottomText}),m.a.createElement("button",{type:"submit"},"Gen")),m.a.createElement("div",{className:"meme"},m.a.createElement("img",{src:this.state.randomImg,alt:""}),m.a.createElement("h2",{className:"top"},this.state.topText),m.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),t}(n.Component);o.a.render(m.a.createElement(function(){return m.a.createElement("div",null,m.a.createElement(r,null),m.a.createElement(g,null))},null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.b2361217.chunk.js.map