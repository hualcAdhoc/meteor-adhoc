Package.describe({
  name: 'adhoc:adhoc-client',
  version: '0.8.1',
  summary: 'Adhoc api for A/B testing',
  git: 'https://github.com/AppAdhoc/meteor-adhoc.git',
  documentation: 'adhoc-client/README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('adhoc-client.js', 'client');
});
