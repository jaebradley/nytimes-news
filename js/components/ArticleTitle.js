"use es6";

var React = require('react');

var ArticleTitle = React.createClass({

  render: function() {

    return (
      <div>
        {this.props.title}
      </div>
    )
  }
});

module.exports = ArticleTitle;