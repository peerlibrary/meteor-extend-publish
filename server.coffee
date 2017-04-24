extendPublish = (newPublishArguments) ->
  # DDP Server constructor.
  Server = Object.getPrototypeOf(Meteor.server).constructor

  originalPublish = Server::publish
  Server::publish = (args...) ->
    # If the first argument is an object, we let the original publish function to traverse it.
    if _.isObject args[0]
      originalPublish.apply this, args
      return

    newArgs = newPublishArguments.apply this, args

    originalPublish.apply this, newArgs
