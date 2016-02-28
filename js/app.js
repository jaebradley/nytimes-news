"use es6";

var ReactDOM = require('react-dom');
var React = require('react');

var Store = require('./stores/Store');
var ActionCreator = require('./actions/ActionCreator');

var Sidebar = require('./components/Sidebar');
var Articles = require('./components/Articles');

var App = React.createClass({

  getInitialState() {
    return {
      shareType: "mostviewed",
      timePeriod: 1,
      popualarSection: "all-sections",
      offset: 0,
      section: "home",
      activeSidebarItemIndex: 0,
      articles: Store.getTopArticles()
    };
  },

  componentDidMount() {
    ActionCreator.getTopArticles(this.state.section);
    ActionCreator.getPopularArticles(this.state.shareType, this.state.popualarSection, this.state.timePeriod, this.state.offset);

    Store.addChangeListener(this.onChange);
  },

  componentWillUnmount() {
      Store.removeChangeListener(this.onChange);
  },

  onChange() {
    if (this.state.activeSidebarItemIndex == 0) {
      this.setState({
        articles: Store.getTopArticles()
      })
    } else {
      this.setState({
        articles: Store.getPopularArticles()
      })
    }
  },

  handleSidebarClick: function(e) {
    if (e.target.outerText == "Top") {
      ActionCreator.getTopArticles(this.state.section);
      this.setState({
        activeSidebarItemIndex: 0,
        articles: Store.getTopArticles()
      })
    } else {
      ActionCreator.getPopularArticles(this.state.shareType, this.state.popualarSection, this.state.timePeriod, this.state.offset);
      this.setState({
        activeSidebarItemIndex: 1,
        articles: Store.getPopularArticles()
      })
    }
  },

  render: function() {
    return (
      <div className="content">
        <Sidebar activeSidebarItemIndex={this.state.activeSidebarItemIndex} onClick={this.handleSidebarClick} />
        <div className={"articles-container"}>
          <Articles articles={this.state.articles} />
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('nytimes-news')
);