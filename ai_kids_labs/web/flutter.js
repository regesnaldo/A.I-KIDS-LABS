// Minimal flutter.js bootstrap for manual project creation
// This mimics the basic behavior of the generated flutter.js to load the entrypoint

if (!window._flutter) {
  window._flutter = {};
}
if (!window._flutter.loader) {
  window._flutter.loader = {};
}

window._flutter.loader.loadEntrypoint = function(options) {
  var serviceWorker = options.serviceWorker;
  // For this manual setup, we'll skip complex service worker registration
  // and jump straight to loading the main script.

  var script = document.createElement('script');
  script.src = 'main.dart.js';
  script.type = 'application/javascript';
  script.onload = function() {
     if (options.onEntrypointLoaded) {
       options.onEntrypointLoaded({
         initializeEngine: function(config) {
           return Promise.resolve({
             runApp: function(appConfig) {
               // The main.dart.js will have registered the app run logic
               return Promise.resolve();
             }
           });
         }
       });
     }
  };
  document.body.appendChild(script);
};
