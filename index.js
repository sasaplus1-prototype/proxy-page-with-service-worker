(function(){

  'use strict';

  var registration;

  register.addEventListener('click', function(event) {
    navigator.serviceWorker.register('./sw.js', { scope: './page/' })
      .then(function(r) {
        console.log('registered');
        registration = r;
      })
      .catch(function(err) {
        console.error(err);
      });
  }, false);

  unregister.addEventListener('click', function(event) {
    if (!registration) {
      return;
    }

    registration.unregister()
      .then(function() {
        console.log('unregistered');
        registration = null;
      })
      .catch(function(err) {
        console.error(err);
      });
  }, false);

}());
