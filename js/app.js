"use es6";

var ReactDOM = require('react-dom');
var React = require('react');

var Store = require('./stores/Store');
var ActionCreator = require('./actions/ActionCreator');

var App = React.createClass({

  getInitialState() {
      return {
          
      };
  },

  componentDidMount() {
      ActionCreator.getStartLocationAutocompleteData(this.state.startAddress);
      ActionCreator.getEndLocationAutocompleteData(this.state.endAddress);

      this.setState({
        startAddressLocationAutocompleteData: Store.getStartLocationAutocompleteData(),
        endAddressLocationAutocompleteData: Store.getEndLocationAutocompleteData()
      });
  },

  render: function() {
    return (
      
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('nytimes-news')
);