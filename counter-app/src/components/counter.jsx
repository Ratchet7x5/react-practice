import React, { Component } from 'react';

//alternative to export default; is class X 
class Counter extends Component {
    state = {
        count: 0
    };

    handleIncrement = () => {
        console.log(this);
        this.setState({ count: this.state.count + 1 });
    }

    render() { 
        return (
            <div>
            <span className={this.getBadgeClasses()}>{this.state.count}</span>
            <button 
            onClick={this.handleIncrement} 
            className='btn btn-secondary btn-sm'>Increment!</button>
            </div>
        );
    }

    formatCount() 
    {
        return this.state.count;
    }

    getBadgeClasses()
    {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;