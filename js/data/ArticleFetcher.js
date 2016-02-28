"use es6";

var request = require('superagent');
var Promise = require('es6-promise').Promise;

var ArticleFetcher = {
  topArticlesEndpoint: "http://api.nytimes.com/svc/topstories/v1/",
  popularArticlesEndpoint: "http://api.nytimes.com/svc/mostpopular/v2/",
  topArticlesKey: "f2fbfa50507156a43eeb14edac17cf5a:18:74561743",
  popularArticlesKey: "8bdaddd948ffdaf714137724df2b6166:6:74561743",

  getTopArticlesUrl: function(section) {
    return this.topArticlesEndpoint + section + ".json?api-key=" + encodeURIComponent(this.topArticlesKey);
  },

  getPopularArticlesUrl: function(type, sections, timePeriod, offset) {
    return this.popularArticlesEndpoint + type + "/" + sections + "/" + timePeriod + ".json?api-key=" + encodeURIComponent(this.popularArticlesKey) + "&offset=" + offset;
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

  fetchPopularArticles: function(type, sections, timePeriod, offset) {
    var url = this.getPopularArticlesUrl(type, sections, timePeriod, offset);
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