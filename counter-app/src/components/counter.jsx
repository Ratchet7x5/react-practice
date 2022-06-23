import React, { Component } from 'react';

//alternative to export default; is class X 
class Counter extends Component {
    state = {
        count: 0
    };

    render() { 
        return (
            <React.Fragment>
            <span>{this.state.count}</span>
            <button>Increment!</button>
            </React.Fragment>
        );
    }

    formatCount() 
    {
        return this.state.count;
    }
}
 
export default Counter;