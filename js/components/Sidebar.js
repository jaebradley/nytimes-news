"use es6";

var React = require('react');

var SidebarItem = require('./SidebarItem');

const options = [
  'Top',
  'Popular'
];

var Sidebar = React.createClass({

  createSidebarItems: function() {
    sidebarItems = [];
    var counter = 0;
    options.forEach(function(option) {
      var isActive = false;
      if (this.props.activeSidebarItemIndex == counter) {
        isActive = true;
      }
      sidebarItems.push(
        <SidebarItem name={option} key={option} isActive={isActive} onClick={this.props.onClick}/>
      );
      counter++;
    }.bind(this));
    return sidebarItems;
  },

  render: function() {

    return (
      <ul className="sidebar">
        {this.createSidebarItems()}
      </ul>
    )
  }
});

module.exports = Sidebar;