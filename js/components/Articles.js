"use es6";

var React = require('react');

var Article = require('./Article');

var Articles = React.createClass({

  createArticles: function(articlesData) {
    var articles = [];
    articlesData.forEach(function(article) {
      if ("media" in article && article.media.length == 1 && "media-metadata" in article.media[0] && article.media[0]["media-metadata"].length > 7) {
        var imageSource = article.media[0]["media-metadata"][7].url;
      }

      if ('multimedia' in article && article.multimedia.length > 1) {
       var imageSource = article.multimedia[1].url; 
      }

      if ('title' in article && 'abstract' in article && 'url' in article) {
        articles.push(
          <Article 
            url={article.url}
            imageSource={imageSource}
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