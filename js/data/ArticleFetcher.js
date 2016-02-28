"use es6";

var request = require('superagent');
var Promise = require('es6-promise').Promise;

var ArticleFetcher = {
  topArticlesEndpoint: "http://api.nytimes.com/svc/topstories/v1/",
  topArticlesKey: "f2fbfa50507156a43eeb14edac17cf5a:18:74561743",
  popularArticlesKey: "8bdaddd948ffdaf714137724df2b6166:6:74561743",

  getTopArticlesUrl: function(section) {
    return this.topArticlesEndpoint + section + ".json?api-key=" + encodeURIComponent(this.topArticlesKey);
  },

  fetchTopArticles: function(section) {
    var url = this.getTopArticlesUrl(section);
    return new Promise(function (resolve, reject) {
      request
        .get(url)
        .end(function (err, res) {
          if (res.status === 404) {
            reject();
          } else {
            resolve(JSON.parse(res.text));
          }
      });
    });
  },
};

module.exports = ArticleFetcher;