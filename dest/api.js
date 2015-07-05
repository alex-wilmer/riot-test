'use strict';

;(function () {
  var messenger = riot.observable();

  messenger['default'] = 'I deliver messages.';
  messenger.getMessage = function () {
    qwest.get('data/messages.json').then(function (data) {
      messenger.trigger('message', data.messages[Math.floor(Math.random() * 2)]);
    });
  };

  riot.mount('message', messenger);
})();
'use strict';

;(function () {
  //var

  riot.mount('tic-tac-toe');
})();