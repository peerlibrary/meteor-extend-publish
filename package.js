Package.describe({
  name: 'peerlibrary:extend-publish',
  summary: "Helper to easier extend Meteor.publish",
  version: '0.5.0',
  git: 'https://github.com/peerlibrary/meteor-extend-publish.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.4.4.5');

  // Core dependencies.
  api.use([
    'coffeescript@2.0.3_3',
    'ecmascript',
    'ddp',
    'underscore'
  ], 'server');

  api.export('extendPublish', 'server');

  api.mainModule('server.coffee', 'server');
});
