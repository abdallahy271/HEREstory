(this.webpackJsonpHEREstory=this.webpackJsonpHEREstory||[]).push([[0],{30:function(e,n,t){},31:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var a=t(5),c=t.n(a),r=t(12),l=t.n(r),i=(t(30),t(23)),s=(t(31),t(13)),o=t(20),d=t(21),h=t(25),j=t(24),g=t(14),b=t(2),m=[{lat:38.901444,lng:-77.046167,name:"Cleveland Abbe House"},{lat:38.910838,lng:-77.035167,name:"Administration Building, Carnegie Institution of Washington"},{lat:38.903333,lng:-77.024444,name:"American Federation of Labor Building"},{lat:38.8994,lng:-77.0386,name:"American Peace Society"},{lat:38.91075,lng:-77.047944,name:"Anderson House"},{lat:38.89767,lng:-77.03655,name:"White House"},{lat:38.909444,lng:-77.069167,name:"Volta Bureau"},{lat:38.889722,lng:-77.008889,name:"United States Capitol"},{lat:38.910808,lng:-77.063339,name:"Tudor Place"},{lat:38.890833,lng:-77.004444,name:"Supreme Court Building"},{lat:38.900278,lng:-77.035278,name:"St. John's Church"},{lat:38.863333,lng:-77.016944,name:"National War College"},{lat:40.748433,lng:-73.985656,name:"Empire State Building",link:"https://console.echoar.xyz/webar?key=green-lab-7323&entry=2197228a-dd07-43d8-8eed-6c660915064e"},{lat:38.889278,lng:-77.050139,name:"Lincoln Memorial",link:"https://console.echoar.xyz/webar?key=green-lab-7323&entry=d47650c6-39ce-4e42-8b4d-9a5cb0c339f5"},{lat:38.881389,lng:-77.036667,name:"Jefferson Memorial",link:"https://console.echoar.xyz/webar?key=green-lab-7323&entry=004249ef-2039-4083-b559-fc2d4330ad76"},{lat:38.889444,lng:-77.035278,name:"Washington Monument",link:"https://console.echoar.xyz/webar?key=green-lab-7323&entry=7cbe3843-7599-4056-959a-05e5dd163a3a"}],u=function(e){Object(h.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{},mapCenter:{lat:38.889805,lng:-77.009056}},e.onMarkerClick=function(n,t,a){e.setState({selectedPlace:n,activeMarker:t,showingInfoWindow:!0})},e.onMapClicked=function(n){e.state.showingInfoWindow&&e.setState({showingInfoWindow:!1,activeMarker:null})},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return Object(b.jsxs)(g.Map,{google:this.props.google,initialCenter:{lat:this.state.mapCenter.lat,lng:this.state.mapCenter.lng},onClick:this.onMapClicked,children:[m.map((function(n){return Object(b.jsx)(g.Marker,{onClick:e.onMarkerClick,title:n.name,name:n.link,position:{lat:n.lat,lng:n.lng},icon:"data:image/png;base64,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"})})),this.state.selectedPlace&&Object(b.jsx)(g.InfoWindow,{onCloseClick:function(){e.setState({selectedPlace:null})},marker:this.state.activeMarker,visible:this.state.showingInfoWindow,children:Object(b.jsx)("h4",{children:Object(b.jsx)("a",{href:this.state.selectedPlace.name,target:"_blank",children:this.state.selectedPlace.title})})})]})}}]),t}(c.a.Component),p=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyAgYdjt-cd3GQmi8PDhQ_hq_S3ek9UHRbI"})(u),I=(t(50),t(52),t(57),t.p,t.p+"static/media/hsvideo.a59cf0bb.mp4"),x=t(22);t(55);s.a.initializeApp({apiKey:"AIzaSyDC-t3PkHigOP1qK4nLoarF-erOEtOoN5E",authDomain:"here-story.firebaseapp.com",projectId:"here-story",storageBucket:"here-story.appspot.com",messagingSenderId:"996048014712",appId:"1:996048014712:web:aa098a7753ab08476d8c8d",measurementId:"G-NGS18708MW"});var y=s.a.auth(),k=(s.a.firestore(),function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{}),Object(b.jsx)("div",{className:"navbar-header",id:"welcome",children:Object(b.jsx)("h1",{className:"navbar-brand",children:"Hello User!"})}),Object(b.jsx)("br",{}),Object(b.jsx)(p,{})]})}),v=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{className:"navbar navbar-inverse",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("div",{className:"navbar-header",children:Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:"HEREstory"})}),Object(b.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(b.jsx)("li",{children:Object(b.jsxs)("a",{onClick:function(){var e=new s.a.auth.GoogleAuthProvider;y.signInWithPopup(e)},children:[Object(b.jsx)("span",{className:"glyphicon glyphicon-log-in"})," Sign Up"]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"#",children:[Object(b.jsx)("span",{className:"glyphicon glyphicon-log-in"})," Login"]})})]})]})}),Object(b.jsxs)("div",{id:"text",children:[Object(b.jsx)("h1",{children:"HEREstory"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"Discover the history near you"})]}),Object(b.jsx)("video",{id:"videoBG",poster:"./image/hscapture.PNG",autoPlay:!0,muted:!0,loop:!0,children:Object(b.jsx)("source",{src:I,type:"video/mp4"})})]})};function O(){return y.currentUser&&Object(b.jsx)("nav",{className:"navbar navbar-inverse",children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("ul",{className:"nav navbar-nav navbar-right",children:Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"glyphicon glyphicon-log-out",onClick:function(){return y.signOut()},children:" Signout"})})})})})}var f=function(){var e=Object(x.a)(y),n=Object(i.a)(e,1)[0];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{children:Object(b.jsx)(O,{})}),Object(b.jsx)("section",{children:n?Object(b.jsx)(k,{}):Object(b.jsx)(v,{})})]})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,58)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,l=n.getTTFB;t(e),a(e),c(e),r(e),l(e)}))};l.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),A()}},[[56,1,2]]]);
//# sourceMappingURL=main.ca161ab9.chunk.js.map