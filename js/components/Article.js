"use es6";

var React = require('react');

var ArticleImage = require('./ArticleImage');
var ArticleTitle = require('./ArticleTitle');
var ArticleAbstract = require('./ArticleAbstract');

var Article = React.createClass({

  render: function() {

    return (
      <li className="article">
        <ArticleImage imageSource={this.props.imageSource} url={this.props.url} />
        <div className="article-details">
          <ArticleTitle title={this.props.title} url={this.props.url} />
          <ArticleAbstract abstract={this.props.abstract} />
        </div>
      </li>
    );
  }
});

module.exports = Article;