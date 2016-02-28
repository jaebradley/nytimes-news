"use es6";

var React = require('react');

var SidebarItem = React.createClass({
  generateClassName: function(isActive) {
    if (isActive) {
      return "sidebar-item-active";
    }

    return "sidebar-item";
  },

  render: function() {
    return (
      <li className={this.generateClassName(this.props.isActive)}>
        <div className="sidebar-item-name">{this.props.name}</div>
      </li>
    )
  }
});

module.exports = SidebarItem;