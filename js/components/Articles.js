"use es6";

var React = require('react');

var Article = require('./Article');

var Articles = React.createClass({

  createArticles: function(articlesData) {
    var articles = [];
    articlesData.forEach(function(article) {
      if ('multimedia' in article && article.multimedia.length > 1 && 'title' in article && 'abstract' in article && 'url' in article) {
        articles.push(
          <Article 
            url={article.url}
            imageSource={article.multimedia[1].url}
            title={article.title}
            abstract={article.abstract} />
        );
      }
    });

    return articles;
  },

  render: function() {
    return (
      <ul className="articles">
        {this.createArticles(this.props.articles)}
      </ul>
    )
  }
});

module.exports = Articles;