Package.describe({
  name: 'jonatan:polyteor',
  version: '0.9.2',
  // Brief, one-line summary of the package.
  summary: 'Polymer + meteor integration.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/stomybexy/polyteor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.3.1');

  // api.imply('ecmascript');
  api.imply('static-html');

  api.use('jonatan:bower@0.0.3');
  api.imply('jonatan:static-folder@0.0.4');
  api.imply('jonatan:polyteor-compiler@0.9.0');

  api.imply('dburles:mongo-collection-instances@0.3.5');

  api.addFiles('bower.json', 'client');

});
