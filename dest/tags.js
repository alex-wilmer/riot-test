riot.tag('message', '<div>{ message }</div>', function(opts) {

  var self = this
  self.message = opts.default || 'Hello World!'

  this.on('mount', function () {
    if (opts.getMessage) {
      opts.getMessage()
    }
  })

  opts.on('message', function(message) {
    self.message = message
    self.update()
  })


});

riot.tag('tic-tac-toe', '<div> <a each="{ cells }">test</a> </div>', function(opts) {

  this.cells = Array(9)


});
