import React = require("react");

interface State {
    time:string;
}

var timer:any;

export default class Clock extends React.Component<{}, State> {
   constructor() {
        super();
          this.state = {
              time:""
          }
          this.tick();
          this.tick = this.tick.bind(this);

   }

   tick () {
        this.state.time = new Date().toLocaleTimeString(); 
   }   

   componentWillMount() {
       timer = setInterval(this.tick, 1000);
   }
   componentWillUnmount() {
     //  timer = null;
   }

   public render() {
        return(
            <div>
            <h4>Time is {this.state.time}.</h4>
            </div>
        );
    }
}

interface Props {
    thetime:string;
}
class Welcome extends React.Component<Props,{}> {
  render() {
    return (
        <div>
            <h1>Time is {this.props.thetime}</h1>;
        </div>
    )
  }
}
