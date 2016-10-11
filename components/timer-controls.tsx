import React = require("react");

interface TimerControlsProps {
    start: Function,
    stop: Function,
    timerOn: boolean
}

export class TimerControls extends React.Component<TimerControlsProps, {}> {

    render() {
        return <div className="row">
            <div className="col-md-12 text-xs-center">
                <button disabled={this.props.timerOn} className="btn btn-primary" onClick={this.props.start}>Start</button>
            </div>
            <div className="col-md-12 text-xs-center">
                <button className="btn btn-danger" onClick={this.props.stop}>Stop</button>
            </div>
        </div>
    }
}