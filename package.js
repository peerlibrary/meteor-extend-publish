Package.describe({
  name: 'peerlibrary:extend-publish',
  summary: "Helper to easier extend Meteor.publish",
  version: '0.4.0',
  git: 'https://github.com/peerlibrary/meteor-extend-publish.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.3.4.4');

  // Core dependencies.
  api.use([
    'coffeescript',
    'ddp',
    'underscore'
  ], 'server');

  api.export('extendPublish', 'server');

  api.addFiles([
    'server.coffee'
  ], 'server');
});
