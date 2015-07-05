;(() => {
  const messenger = riot.observable()
  messenger.default = 'I deliver messages.'
  riot.mount('message', messenger)

  qwest
    .get('data/messages.json')
    .then(data => {
      messenger.trigger('message', data.messages[0])
    })
}())
