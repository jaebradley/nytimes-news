var Dispatcher = require('../core/Dispatcher');
var DeepCopy = require("deepcopy");
var ArticleFetcher = require('../data/ArticleFetcher');

var ActionConstants = require('../constants/ActionConstants');

var ActionCreator = {
  getTopArticles: function (section) {
    ArticleFetcher
      .fetchTopArticles(section)
      .then(function (topArticles) {
        Dispatcher.handleViewAction({
          actionType: ActionConstants.GET_TOP_ARTICLES,
          articles: DeepCopy(topArticles)
        });
      });
  },
};

module.exports = ActionCreator;