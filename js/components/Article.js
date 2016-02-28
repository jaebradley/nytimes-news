"use es6";

var React = require('react');

var ArticleImage = require('./ArticleImage');
var ArticleTitle = require('./ArticleTitle');
var ArticleAbstract = require('./ArticleAbstract');

var Article = React.createClass({

  render: function() {

    return (
      <li className="article">
        <ArticleImage imageSource={this.props.imageSource} />
        <ArticleTitle title={this.props.title} />
        <ArticleAbstract abstract={this.props.abstract} />
      </li>
    );
  }
});

module.exports = Article;