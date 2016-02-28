"use es6";

var React = require('react');

var ArticleTitle = React.createClass({

  render: function() {

    return (
      <h2
        className="article-title">{this.props.title}
      </h2>
    )
  }
});

module.exports = ArticleTitle;