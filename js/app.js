"use es6";

var ReactDOM = require('react-dom');
var React = require('react');

var Store = require('./stores/Store');
var ActionCreator = require('./actions/ActionCreator');

var Sidebar = require('./components/Sidebar');

var App = React.createClass({

  getInitialState() {
      return {
          section: "home",
          topArticles: []
      };
  },

  componentDidMount() {
      ActionCreator.getTopArticles(this.state.startAddress);

      this.setState({
        topArticles: Store.getTopArticles()
      });
  },

  render: function() {
    return (
      <div>
        <Sidebar />
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('nytimes-news')
);