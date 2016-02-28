"use es6";

var React = require('react');
var request = require('superagent');

var ArticleImage = React.createClass({

  render: function() {
    return (
      <a href={this.props.url}><img src={this.props.imageSource}/></a>
    );
  }
});

module.exports = ArticleImage;