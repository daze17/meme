(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,t,a){e.exports=a(46)},46:function(e,t,a){"use strict";a.r(t);var n=a(0),m=a.n(n),l=a(11),o=a.n(l),r=a(68),s=a(74),c=a(69),i=a(33),h=Object(i.a)({palette:{primary:{main:"#ffab91"},secondary:{main:"#4db6ac"}}});var u=function(){return m.a.createElement(r.a,{theme:h},m.a.createElement(s.a,{position:"static",className:"header"},m.a.createElement(c.a,null,m.a.createElement("img",{className:"headerImg",src:"https://ggscore.com/media/logo/t51940.png?32",alt:"doge"}),m.a.createElement("p",null,"Meme Generator ....... by Bilguun"))))},p=a(30),g=a(31),d=a(32),b=a(23),E=a(35),f=a(34),v=a(71),x=a(70),y=a(73),j=a(72),I=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(g.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target,n=a.name,m=a.value;e.setState(Object(p.a)({},n,m))},e.state={topText:"",bottomText:"",randomImg:"https://imgflip.com/s/meme/Doge.jpg",allMemeImgs:[]},e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemeImgs:a})}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),a=this.state.allMemeImgs[t].url;console.log(a),this.setState({randomImg:a})}},{key:"render",value:function(){return m.a.createElement("div",{className:"memeContainer"},m.a.createElement(x.a,{container:!0,spacing:2},m.a.createElement(x.a,{item:!0,xs:6},m.a.createElement(y.a,{className:"meme-form",onSubmit:this.handleSubmit},m.a.createElement(j.a,{type:"text",name:"topText",value:this.state.topText,placeholder:"Top text",onChange:this.handleChange}),m.a.createElement(j.a,{type:"text",name:"bottomText",value:this.state.bottomText,placeholder:"Bottom text",onChange:this.handleChange}),m.a.createElement(v.a,{onClick:this.handleSubmit},"Next"))),m.a.createElement(x.a,{item:!0,xs:6,className:"meme"},m.a.createElement("img",{src:this.state.randomImg,alt:""}),m.a.createElement("h2",{className:"top"},this.state.topText),m.a.createElement("h2",{className:"bottom"},this.state.bottomText))))}}]),a}(n.Component);var S=function(){return m.a.createElement("div",null,m.a.createElement(u,null),m.a.createElement(I,null))};o.a.render(m.a.createElement(S,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.17014fcd.chunk.js.map