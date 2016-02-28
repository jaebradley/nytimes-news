"use es6";

var Flux = require('flux');
var assign = require('object-assign');

/**
 * A singleton that operates as the central hub for application updates.
 * For more information visit https://facebook.github.io/flux/
 */
var Dispatcher = assign(new Flux.Dispatcher(), {

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */
  handleServerAction: function (action) {
    var payload = {
      action: action
    };
    this.dispatch(payload);
  }

});

module.exports = Dispatcher;