'use strict';

;(function () {
  var messenger = riot.observable();
  messenger['default'] = 'I deliver messages.';
  riot.mount('message', messenger);

  qwest.get('data/messages.json').then(function (data) {
    messenger.trigger('message', data.messages[0]);
  });
})();