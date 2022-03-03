import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Counter.css';


class CounterButton extends Component {

    render(){
        return(
            <div className="counterBotton">
                <button onClick={()=> this.props.increment(this.props.countBy)}> + {this.props.countBy} </button>
                <button onClick={()=>this.props.increment(-this.props.countBy)}> - {this.props.countBy} </button>
                <br/>
            </div>
        );
    }
   
}


CounterButton.defaultProps = {
    countBy:1
};

CounterButton.propTypes = {
    countBy : propTypes.number
}
  
export default CounterButton;