// define(function() {
//
//   var twitter = {
//     load: executeWhenReady('load')
//   }
//
//   // Return wrapped function that will
//   // be executed only when twttr is ready
//   function executeWhenReady (funcName) {
//     return function () {
//       // save args
//       var args = Array.prototype.slice.call(arguments)
//       window.twttr.ready(function () {
//         // call twttr.widgets with args
//         window.twttr.widgets[funcName].apply(window.twttr.widgets, args)
//       })
//     }
//   }
//
//   // This is bit of code is from https://dev.twitter.com/docs/tfw-javascript
//   window.twttr = (function (d,s,id) {
//     var t, js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
//     js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
//     return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
//   }(document, "script", "twitter-wjs"));
//
//   return twitter;
//
// })
