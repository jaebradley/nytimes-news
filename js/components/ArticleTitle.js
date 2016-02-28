"use es6";

var React = require('react');

var ArticleTitle = React.createClass({

  render: function() {

    return (
      <h2 className="article-title">
        <a href={this.props.url}>{this.props.title}</a>
      </h2>
    )
  }
});

module.exports = ArticleTitle;