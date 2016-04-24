/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-fp',

  included: function(app, parent_addon) {
    let target = parent_addon || app;
    target.import(app.bowerDirectory + '/ramda/dist/ramda.min.js');
    target.import('vendor/shims/ramda.js');
  }
};
