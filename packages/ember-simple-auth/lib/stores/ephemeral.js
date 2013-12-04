'use strict';

Ember.SimpleAuth.Stores.Ephemeral = Ember.Object.extend(Ember.Evented, {
  init: function() {
    this._data = {};
  },

  restore: function() {
    return jQuery.extend({}, this._data);
  },

  load: function(property) {
    return this._data[property];
  },

  save: function(properties) {
    for (var property in properties) {
      var value = properties[property];
      if (Ember.isEmpty(value)) {
        this._data[property] = value;
      }
    }
  }
});
