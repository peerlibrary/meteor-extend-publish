Package.describe({
  name: 'peerlibrary:extend-publish',
  summary: "Helper to easier extend Meteor.publish",
  version: '0.6.0',
  git: 'https://github.com/peerlibrary/meteor-extend-publish.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.8.1');

  // Core dependencies.
  api.use([
    'coffeescript@2.4.1',
    'ecmascript',
    'ddp',
    'underscore'
  ], 'server');

  api.export('extendPublish', 'server');

  api.mainModule('server.coffee', 'server');
});
