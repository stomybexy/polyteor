Package.describe({
  name: 'jonatan:polyteor',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Polymer + meteor integration.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/stomybexy/polyteor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
 
  api.use('jonatan:bower@0.0.1');  
  
  api.imply('ecmascript');
  api.imply('jonatan:smart-pub@0.0.2');
  api.imply('static-html');
  api.imply('differential:vulcanize@3.0.0') ;
  api.imply('dburles:mongo-collection-instances@0.3.5');

  api.addFiles('bower.json', 'client');
  
});

