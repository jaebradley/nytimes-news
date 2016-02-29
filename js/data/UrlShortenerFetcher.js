"use es6";

var request = require('superagent');
var Promise = require('es6-promise').Promise;

var UrlShortenerFetcher = {
  endpoint: "https://www.googleapis.com/urlshortener/v1/url",
  key: "AIzaSyC7CpJR22eo5e10Mte0QATtEBVSVp3dByA",

  getUrl: function() {
    return this.endpoint + "?key=" + encodeURIComponent(this.key);
  },

  fetchShortUrl: function(longUrl) {
    var url = this.getUrl();
    return new Promise(function (resolve, reject) {
    request
      .post(url)
      .send({ 'longUrl': longUrl})
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

module.exports = UrlShortenerFetcher;