"use es6";

var React = require('react');

var ArticleImage = React.createClass({

  render: function() {
    return (
      <img src={this.props.imageSource}/>
    );
  }
});

module.exports = ArticleImage;