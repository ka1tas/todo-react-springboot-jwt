import React, {Component} from 'react';
import CounterButton from './CounterButton'
import './Counter.css';

class Counter extends Component {

    constructor(){
        super();
        this.state = {
            counter:0
        }
        //binding is not needed if the increment method is an arrow function
        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(count) {
        this.setState((prevState)=>(
            {counter : prevState.counter + count}
        ));
    }

    reset() {
        this.setState(()=>(
            {counter : 0}
        ));
    }
    


    render(){
        return (
            <div className="counter"> 
             <h2 className="titleBar">Counter App</h2>
             <br/>
             <CounterButton increment={this.increment} />
             <CounterButton countBy={5} increment={this.increment} />
             <CounterButton countBy={10} increment={this.increment} />
             <br/>
             <span className="count">{this.state.counter}</span>
             <br/>
             <button className="resetButton" onClick={this.reset}>Reset</button>
            </div>
          );
    }
  
}



export default Counter;