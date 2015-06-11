var React = require("react");
var $ = require("jquery");

var CommitsOverview = React.createClass({
    loadOverviewData: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                    commits_count: data.commits_count,
                    additions: data.additions,
                    deletions: data.deletions
                });
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {
            commits_count: 0,
            additions: 0,
            deletions: 0
        }
    },
    componentDidMount: function() {
        this.loadOverviewData();
        setInterval(this.loadOverviewData, this.props.interval);
    },
    render: function() {
        var interval = this.props.interval || 20000;
        return(
            <div className="commits-overview">
              <div classnName="half">
                <p><span className="big">{this.state.commits_count}</span> commits</p>
              </div>
              <div className="half">
                <p>{this.state.additions} additions</p>
                <p>{this.state.deletions} deletions</p>
              </div>
           </div>
        );
    }
});

module.exports = CommitsOverview;