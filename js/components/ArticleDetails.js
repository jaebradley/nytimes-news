"use es6";

var React = require('react');

var ArticleDetails = React.createClass({

  render: function() {
    return (
      <div className="article-details">
        <ArticleTitle title={this.props.title} url={this.props.url} />
        <ArticleAbstract abstract={this.props.abstract} />
      </div>
    );
  }
});

module.exports = ArticleDetails;