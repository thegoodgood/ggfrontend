(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(68)},44:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);n(44);var a=n(0),r=n.n(a),o=n(18),c=n.n(o);n(49),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(10),u=n(7),i=n(27),l=(n(54),n(55),n(56),n(57),n(21)),p=n(19),h=n(2),E=n(3),m=n(5),f=n(4),T=n(6),d="http://localhost:3000",g="".concat(d,"/users"),b=function(e){return function(e){return e({type:"GET_PROFILE_REQUEST_START"}),fetch("".concat(d,"/profile"),{headers:{Authorization:"Bearer ".concat(localStorage.token),Accept:"application/json"}}).then(function(e){if(401===e.status)throw new Error("Unauthorized");return e}).then(function(e){return e.json()}).then(function(e){if("Please log in"===e.message)throw new Error("Unauthorized");return e}).then(function(t){e({type:"GET_PROFILE_REQUEST_SUCCESS",user:t})}).catch(function(t){"Unauthorized"===t.message&&e({type:"GET_PROFILE_REQUEST_FAILURE",error:t})})}},O=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleSubmit=function(e){e.preventDefault(),n.props.login(n.state.username,n.state.password).then(function(){console.log(n.props.username),n.props.history.push("/profile")})},n.handleChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n}return Object(T.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){localStorage.token&&this.props.history.push("/home")}},{key:"render",value:function(){return console.log(this.state.username),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.username,onChange:this.handleChange,name:"username"}),r.a.createElement("input",{type:"text",value:this.state.password,onChange:this.handleChange,name:"password"}),r.a.createElement("input",{type:"submit",value:"Log in!"}))}}]),t}(r.a.Component),w={login:function(e,t){return function(n){return n({type:"LOGIN_REQUEST_START"}),fetch("".concat(d,"/login"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:e,password:t})}).then(function(e){return e.json()}).then(function(e){localStorage.token=e.token,n({type:"LOGIN_REQUEST_SUCCESS"})}).catch(function(e){n({type:"LOGIN_REQUEST_FAILURE",error:e})})}}},S=Object(u.b)(function(e){return{user:e.currentUser}},w)(O),v=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.signup(n.state.username,n.state.password).then(function(){n.props.history.push("/profile")})},n}return Object(T.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){localStorage.token&&this.props.history.push("/home")}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("form",{className:"ui form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.username,onChange:this.handleChange,name:"username"}),r.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleChange,name:"password"}),r.a.createElement("input",{type:"submit",value:"Sign up"}))}}]),t}(a.Component),j={signup:function(e,t){return function(n){return n({type:"SIGNUP_REQUEST_START"}),fetch("".concat(d,"/signup"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:e,password:t})}).then(function(e){return e.json()}).then(function(e){localStorage.token=e.token,n({type:"SIGNUP_REQUEST_SUCCESS"})}).catch(function(e){n({type:"SIGNUP_REQUEST_FAILURE",error:e})})}}},y=Object(u.b)(function(e){return{user:e.currentUser}},j)(v),_=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onLogout=function(){localStorage.clear(),n.props.logout(),n.props.history.push("/")},n}return Object(T.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.getCurrentUser()}},{key:"render",value:function(){return r.a.createElement("div",{className:"nav"},localStorage.token?r.a.createElement("div",null,r.a.createElement(s.b,{to:"",className:"logout",onClick:this.onLogout},"Logout"),r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/profile"},"Profile")):r.a.createElement("div",{className:"nav"},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/signup"},"Sign Up"),r.a.createElement(s.b,{to:"/login",className:"login"},"Log in")))}}]),t}(a.Component),C={getCurrentUser:b,logout:function(){return function(e){localStorage.clear(),e({type:"USER_LOGOUT"})}}},U=Object(u.b)(function(e){return{user:e.user,username:e.user.username,currentUser:e.user.currentUser}},C)(_);var k=n(9),R=n(38),N=function(e){return{type:"GET_TWEETS_SUCCESS",tweets:e}},A=function(e){return{type:"GET_TWEETS_FAILURE",error:e}};function G(){var e=Object(R.a)(["/news"]);return G=function(){return e},e}var P="http://localhost:3000/tweets",L=function(){return function(e){return e({type:"GET_TWEETS_START"}),fetch(P).then(function(e){return e.json()}).then(function(t){e(N(t))}).catch(function(t){e(A(t))})}},I=function(e){return function(t){var n=e.toLowerCase().split(" ").join("");return t({type:"GET_TOPIC_TWEETS_START"}),fetch("".concat("http://localhost:3000/get_").concat(n)).then(function(e){return e.json()}).then(function(e){t(N(e))}).catch(function(e){t(A(e))})}},D=function(){return function(e){return e({type:"GET_TOPIC_TWEETS_START"}),fetch(P(G())).then(function(e){return e.json()}).then(function(t){e(N(t))}).catch(function(t){e(A(t))})}},H=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={currentTweet:{},show:!1},n.onToggle=function(e){n.setState(Object(k.a)({},n.state,{show:!n.state.show})),console.log(n.state.currentTweet)},n.setTweet=function(e){n.setState(Object(k.a)({},n.state,{show:!n.state.show})),n.setState({currentTweet:e})},n}return Object(T.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.getTweets()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"TweetsContainer"},this.props.tweets.map(function(t){return r.a.createElement(q,Object.assign({setCurrentTweet:e.setTweet,key:t.id,currentTweet:e.state.currentTweet},t))}),this.state.show?r.a.createElement(V,Object.assign({},this.state,{currentTweet:this.state.currentTweet,onToggle:this.onToggle})):null)}}]),t}(r.a.Component),W={getTweets:L,getTopic:I,getNews:D},F=Object(u.b)(function(e){return{tweets:e.tweets}},W)(H),Q=n(70),x=n(39),M=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onToggle=function(e){n.props.onToggle&&n.props.onToggle(e)},n}return Object(T.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props.currentTweet;return console.log(t),r.a.createElement("div",{id:"tweet",onClick:function(t){e.onToggle(t)}},r.a.createElement(Q.a,{isOpen:!0},r.a.createElement(x.a,{id:t.tweet_id,placeholder:"loading"}),r.a.createElement("button",{onClick:function(t){e.onToggle(t)}},"close")))}}]),t}(r.a.Component),z={getTweets:L,getTopic:I,getNews:D},V=Object(u.b)(function(e){return{tweets:e.tweets}},z)(M),B=n(41),J=n.n(B),X=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){n.props.setCurrentTweet&&n.props.setCurrentTweet(n.props)},n.handleDelete=function(e){n.props.deleteTweet(n.props)},n}return Object(T.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tweet-body"},r.a.createElement("div",{className:"votes"},this.props.upvotedTweetsId.includes(this.props.id)?r.a.createElement("button",{className:"downvote",onClick:function(){e.props.downvoteTweet(e.props.id)}},"\ud83d\udc4e\ud83c\udffe"):r.a.createElement("button",{className:"upvote",onClick:function(){e.props.upvoteTweet(e.props.id)},style:{background:"darkseagreen"}},"\ud83d\udc4d\ud83c\udffe")),r.a.createElement("div",{onClick:this.handleClick},r.a.createElement("div",{className:"outer-body"},r.a.createElement("img",{src:this.props.profile_img_url}),r.a.createElement("div",{className:"body",url:this.props.url},r.a.createElement("div",{className:"inner-body"},r.a.createElement("div",{className:"name"}," ",this.props.user_name),r.a.createElement("div",{className:"handle"},"@",this.props.handle),r.a.createElement("div",{className:"created"},"Created ",r.a.createElement(J.a,{fromNow:!0},this.props.created_at))),r.a.createElement("div",{className:"tweet content"},this.props.content),r.a.createElement("div",null,this.props.entities," ")))),this.props.currentUser?r.a.createElement("button",{className:"delete-btn",onClick:this.handleDelete},"Delete Tweet "):null)}}]),t}(r.a.Component),$={upvoteTweet:function(e){return function(t){t({type:"GET_CURRENT_TWEET_START"}),fetch("".concat(P,"/").concat(e,"/upvote"),{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then(function(e){return e.json()}).then(function(e){t({type:"GET_CURRENT_TWEET_SUCCESS",tweet:e}),t({type:"ADD_TO_UPVOTED_TWEETS",tweet:e})}).catch(function(e){t({type:"GET_CURRENT_TWEET_FAILURE",error:e})})}},downvoteTweet:function(e){return function(t){return t({type:"GET_CURRENT_TWEET_START"}),fetch("".concat(P,"/").concat(e,"/downvote"),{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then(function(e){return e.json()}).then(function(e){t({type:"REMOVE_FROM_UPVOTED_TWEETS",tweet:e})})}},deleteTweet:function(e){return function(t){var n=e.id;fetch("".concat(P,"/").concat(n),{method:"DELETE",headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then(function(e){return e.json()}).then(function(e){t({type:"DELETE_TWEET",tweet:e})}).catch(function(e){t({type:"GET_CURRENT_TWEET_FAILURE",error:e})})}}},q=Object(u.b)(function(e){return{upvotedTweetsId:e.user.upvoted_tweets.map(function(e){return e.id}),currentUser:e.user.currentUser.id}},$)(X),K=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={currentTweet:{},show:!1},n.onToggle=function(e){n.setState(Object(k.a)({},n.state,{show:!n.state.show}))},n.setTweet=function(e){n.setState(Object(k.a)({},n.state,{show:!n.state.show})),n.setState({currentTweet:e})},n}return Object(T.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"UpvotedTweetsContainer"},this.props.upvotedTweets.map(function(t){return r.a.createElement(q,Object.assign({setCurrentTweet:e.setTweet,key:t.id,currentTweet:e.state.currentTweet},t))}),this.state.show?r.a.createElement(V,Object.assign({},this.state,{currentTweet:this.state.currentTweet,onToggle:this.onToggle})):null)}}]),t}(r.a.Component),Y={getTweets:L,getTopic:I,getNews:D},Z=Object(u.b)(function(e){return{tweets:e.tweets,upvotedTweets:e.user.upvoted_tweets}},Y)(K),ee=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleChange=function(e){n.setState({username:n.props.user.username}),n.setState(Object(p.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.updateCurrentUser(n.state.username,n.state.password,n.props.user.id).then(function(){n.props.history.push("/profile")})},n}return Object(T.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){localStorage.token&&this.setState({username:this.props.user.username})}},{key:"render",value:function(){return r.a.createElement("div",{className:"userSettingsContainer"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"User Settings")),r.a.createElement("br",null),r.a.createElement("form",{className:"ui form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"inline field"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",name:"username",placeholder:this.props.user.username,onChange:this.handleChange})),r.a.createElement("button",{className:"ui button",type:"submit"},"Update User Settings"))))}}]),t}(r.a.Component),te={updateCurrentUser:function(e,t,n){return function(t){return console.log(e),t({type:"GET_PROFILE_REQUEST_START"}),fetch("".concat(g,"/").concat(n),{method:"PUT",headers:{Authorization:"Bearer ".concat(localStorage.token),"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:e})}).then(function(e){if(401===e.status)throw new Error("Unauthorized");return e}).then(function(e){return e.json()}).then(function(e){if("Please log in"===e.message)throw new Error("Unauthorized");return e}).then(function(e){console.log(e),t({type:"GET_PROFILE_REQUEST_SUCCESS",user:e})}).catch(function(e){"Unauthorized"===e.message&&t({type:"GET_PROFILE_REQUEST_FAILURE",error:e})})}}},ne=Object(l.f)(Object(u.b)(function(e){return{user:e.user}},te)(ee)),ae=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){n.props.setTopic(e.target.innerText),n.props.getTopicTweets(e.target.innerText)},n.goHome=function(e){var t=n.props.history;t&&t.push("/")},n}return Object(T.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.setTopic("home")}},{key:"render",value:function(){return r.a.createElement("div",{className:"topicsNav"},r.a.createElement("button",{onClick:this.handleClick}," News"),r.a.createElement("button",{onClick:this.handleClick},"Social Commentary"),r.a.createElement("button",{onClick:this.handleClick},"On the Daily"),r.a.createElement("button",{className:"all-tweets",onClick:this.goHome},"All Tweets"))}}]),t}(r.a.Component),re={setTopic:function(e){return function(t){t(function(e){return{type:"GET_TOPIC",topic:e}}(e))}},getTopicTweets:I},oe=Object(l.f)(Object(u.b)(function(e){return{topic:e.topic}},re)(ae)),ce=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"profilePage"},this.props.currentUser?r.a.createElement("div",null,r.a.createElement("h3",null,"Welcome back, @",this.props.user.username),r.a.createElement(oe,null),r.a.createElement(Z,null),r.a.createElement(ne,null)):r.a.createElement("h1",null," Getting your profile... "))}}]),t}(r.a.Component),se=function(e){var t=function(t){function n(){return Object(h.a)(this,n),Object(m.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(T.a)(n,t),Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=this;localStorage.token||this.props.history.push("/login");try{this.props.getCurrentUser().catch(function(t){e.props.history.push("/login")})}catch(t){"Please log in"===t.message&&this.props.history.push("/login")}}},{key:"render",value:function(){return r.a.createElement(e,null)}}]),n}(r.a.Component),n={getCurrentUser:b};return Object(l.f)(Object(u.b)(null,n)(t))}(Object(u.b)(function(e){return{user:e.user,username:e.user.username,currentUser:e.user.currentUser}},function(e){return{getCurrentUser:b}})(Object(l.f)(ce))),ue=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){n.props.getHashtagSearch(e.target.innerText)},n}return Object(T.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.getHashtags()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"hashtagsContainer"},r.a.createElement("h2",null,"Trending Topics"),this.props.hashtags.map(function(t){return r.a.createElement("p",{onClick:e.handleClick,key:t.id,className:"keyword"},"#",t.keyword)}))}}]),t}(r.a.Component),ie={getHashtags:function(){return function(e){return e({type:"GET_HASHTAGS_START"}),fetch("".concat("http://localhost:3000","/hashtags")).then(function(e){return e.json()}).then(function(t){e({type:"GET_HASHTAGS_SUCCESS",hashtags:t})}).catch(function(t){e(function(e){return{type:"GET_HASHTAGS_FAILURE",error:e}}(t))})}},getHashtagSearch:function(e){return function(t){t({type:"GET_HASHTAGS_START"});var n=e.split("#")[1];return fetch("".concat("http://localhost:3000","/get_hashtag_tweets"),{method:"POST",headers:{"Content-Type":"Application/json",Accept:"Application/json"},body:JSON.stringify({keyword:n})}).then(function(e){return e.json()}).then(function(e){t(N(e))}).catch(function(e){t(A(e))})}}},le=Object(u.b)(function(e){return{hashtags:e.hashtags}},ie)(ue),pe={LoginPage:S,SignupPage:y,ProfilePage:se,HomePage:function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"homePage"},r.a.createElement(oe,null),r.a.createElement(F,null),r.a.createElement(le,null))}}]),t}(r.a.Component)},he=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"title"},"THE GOOD GOOD")))}}]),t}(r.a.Component),Ee=function(){return r.a.createElement("div",null,r.a.createElement(he,null),r.a.createElement(U,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/signup",component:pe.SignupPage}),r.a.createElement(l.a,{exact:!0,path:"/login",component:pe.LoginPage}),r.a.createElement(l.a,{exact:!0,path:"/logout",component:pe.LogoutPage}),r.a.createElement(l.a,{exact:!0,path:"/home",component:pe.HomePage}),r.a.createElement(l.a,{exact:!0,path:"/profile",component:pe.ProfilePage}),r.a.createElement(l.a,{component:pe.HomePage})))},me=n(15),fe=[],Te=[],de=n(42),ge={id:null,username:"",upvoted_tweets:[]},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_REQUEST_START":return Object(k.a)({},e,{loading:!0});case"LOGIN_REQUEST_SUCCESS":return Object(k.a)({},t.user,{currentUser:t.user,loading:!1});case"LOGIN_REQUEST_FAILURE":return Object(k.a)({},e,{loading:!1});case"GET_PROFILE_REQUEST_SUCCESS":return Object(k.a)({},t.user,{currentUser:t.user,loading:!1});case"ADD_TO_UPVOTED_TWEETS":return Object(k.a)({},e,{upvoted_tweets:[].concat(Object(de.a)(e.upvoted_tweets),[t.tweet])});case"REMOVE_FROM_UPVOTED_TWEETS":case"DELETE_TWEET":return Object(k.a)({},e,{upvoted_tweets:e.upvoted_tweets.filter(function(e){return e.id!==t.tweet.id})});default:return e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TOPIC":return{topic:t.topic};case"TOPIC_REQUEST_FAILURE":return Object(k.a)({},e,{loading:!1});default:return e}},we=Object(me.c)({tweets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TWEETS_SUCCESS":return t.tweets;case"DELETE_TWEET":return e.filter(function(e){return e.id!==t.tweet.id});default:return e}},hashtags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_HASHTAGS_SUCCESS":return t.hashtags;default:return e}},user:be,topic:Oe}),Se=[i.a],ve=Object(me.e)(we,Object(me.d)(me.a.apply(void 0,Se),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(r.a.createElement(u.a,{store:ve},r.a.createElement(s.a,null,r.a.createElement(Ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.cc6a32bb.chunk.js.map