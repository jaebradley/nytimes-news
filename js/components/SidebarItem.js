"use es6";

var React = require('react');

var SidebarItem = React.createClass({
  render: function() {

    return (
      <li>
        {this.props.name}
      </li>
    )
  }
});

module.exports = SidebarItem;