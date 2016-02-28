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
      section: "home",
      activeSidebarItemIndex: 0,
      topArticles: Store.getTopArticles()
    };
  },

  componentDidMount() {
    ActionCreator.getTopArticles(this.state.section);

    Store.addChangeListener(this.onChange);
  },

  componentWillUnmount() {
      Store.removeChangeListener(this.onChange);
  },

  onChange() {
    this.setState({
      topArticles: Store.getTopArticles()
    });
  },

  render: function() {
    return (
      <div className="content">
        <Sidebar activeSidebarItemIndex={this.state.activeSidebarItemIndex} />
        <div className={"articles-container"}>
          <Articles articles={this.state.topArticles} />
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('nytimes-news')
);