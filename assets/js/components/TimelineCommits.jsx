var GinatraChart = require("./GinatraChart.jsx");
var React = require("react");

var TimelineCommits = React.createClass({
  render: function() {
    var type = 'Line';
    var height = this.props.height;
    var width = this.props.width;
    var url = this.props.url;
    var socket = this.props.socket;

    return (
      <GinatraChart url={url} type={type} width={width} height={height} socket={socket} />
    );
  }
});

module.exports = TimelineCommits;
