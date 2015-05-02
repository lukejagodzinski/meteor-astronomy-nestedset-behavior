Package.describe({
  summary: 'NestedSet behavior for Meteor Astronomy',
  version: '0.1.0',
  name: 'jagi:astronomy-nestedset-behavior',
  git: 'https://github.com/jagi/meteor-astronomy-nestedset-behavior.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('jagi:astronomy-behaviors@0.2.0');
  api.use('underscore');

  // Behavior.
  api.addFiles('lib/behavior/methods.js', ['client', 'server']);
  api.addFiles('lib/behavior/behavior.js', ['client', 'server']);
});
