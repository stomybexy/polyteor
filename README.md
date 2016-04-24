# Polyteor

Polymer + Meteor integration.


# What it contains

This package contains a set of ```meteor package``` and bower dependencies. for developping your Meteor app client side with Polymer.

It uses [jonatan:polyteor-compiler]() for Polymer build process integration, [jonatan:static-folder]() to avoid installing bower_components into ```public folder```,
[static-html]() for to compile ```html``` files.

It install [polyteor-element]() bower dependencies. It is recommended to keep bower_dependencies into ```.polyteor``` folder.

## Installation

* Remove ```blaze-html-templates``` package.

```
  meteor remove blaze-html-templates
```
* Create ```.bowerrc``` file in the root of your application with the following content (recommended):

```js
  {
    "directory": ".polyteor/bower_components"
  }
```
* Add ```jonatan:polyteor``` package:
```
  meteor add jonatan:polyteor
```
* Optionally you can add ```jonatan:bower``` or a similar package to manage your bower dependencies. Make sure to install bower dependencies in the folder specified in ```.bowerrc```
if you use that recommended method.

More informations on [Polyteor website](https://polyteor.firebaseapp.com).
