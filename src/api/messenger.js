;(() => {
  const messenger = riot.observable()

  messenger.default = 'I deliver messages.'
  messenger.getMessage = () => {
    qwest
      .get('data/messages.json')
      .then(data => {
        messenger.trigger('message', data.messages[Math.floor(Math.random() * 2)])
      })
  }

  riot.mount('message', messenger)
}())
