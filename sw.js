'use strict';

self.onfetch = function(event) {
  var match = event.request.url.match(/\/([^/]*)$/),
      body;

  if (match === null) {
    return;
  }

  switch (match[1]) {
    case 'a':
    case 'b':
    case 'c':
      body = new Blob([
        '<!DOCTYPE html>',
        '<p>',
        match[1],
        '</p>'
      ]);
      event.respondWith(new Response(body));
      break;
  }
};
