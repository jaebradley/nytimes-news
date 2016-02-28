"use es6";

var React = require('react');

var ArticleAbstract = React.createClass({

  render: function() {

    return (
      <div
        className="article-abstract">{this.props.abstract}
      </div>
    )
  }
});

module.exports = ArticleAbstract;