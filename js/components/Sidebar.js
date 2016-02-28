"use es6";

var React = require('react');

var SidebarItem = require('SidebarItem');

const options = [
  'Top',
  'Popular'
];

var Sidebar = React.createClass({

  createSidebarItems: function() {
    sidebarItems = [];
    options.forEach(function(option) {
      sidebarItems.push(
        <SidebarItem name={option} />
      );
    });
    return sidebarItems;
  },

  render: function() {

    return (
      <ul>
        {this.createSidebarItems()}
      </ul>
    )
  }
});

module.exports = Sidebar;