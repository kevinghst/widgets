import React from 'react';

export default class Clock extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({
      time: new Date()
    });
  }

  componentDidMount(){
    this.intervalId = setInterval(
      this.tick,
      1000
    );
  }

  componentWillUnmount(){
    this.intervalId.clearInterval();
  }

  render(){
    return(
      <section className="clock">
        <div className="clock-header">
          Clock
        </div>
        <div className="clock-content">
          {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}, {this.state.time.getMonth()}/{this.state.time.getDate()}/{this.state.time.getFullYear()}
        </div>

      </section>
    );
  }
}
