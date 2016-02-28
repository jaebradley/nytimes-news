var Dispatcher = require('../core/Dispatcher');
var DeepCopy = require("deepcopy");
var ArticleFetcher = require('../data/ArticleFetcher');

var ActionConstants = require('../constants/ActionConstants');

var ActionCreator = {
  getTopArticles: function (section) {
    ArticleFetcher
      .fetchTopArticles(section)
      .then(function (topArticles) {
        Dispatcher.handleServerAction({
          actionType: ActionConstants.GET_TOP_ARTICLES,
          articles: DeepCopy(topArticles)
        });
      });
  },
  getPopularArticles: function (type, section, timePeriod, offset) {
    ArticleFetcher
      .fetchPopularArticles(type, section, timePeriod, offset)
      .then(function (popularArticles) {
        Dispatcher.handleServerAction({
          actionType: ActionConstants.GET_POPULAR_ARTICLES,
          articles: DeepCopy(popularArticles)
        });
      });
  },
};

module.exports = ActionCreator;