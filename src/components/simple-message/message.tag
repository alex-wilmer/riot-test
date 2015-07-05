<message>
  <div>{ message }</div>

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

</message>
