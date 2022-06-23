import React, { Component } from 'react';

//alternative to export default; is class X 
class Counter extends Component {
    //state is private and internal to a component
    state = {
        value: this.props.value
    };

    handleIncrement = () => {
        this.setState({ count: this.state.value + 1 });
    }

    render() { 
        return (
            <div>
            <span className={this.getBadgeClasses()}>{this.state.value}</span>
            <button 
            onClick={this.handleIncrement} 
            className='btn btn-secondary btn-sm'>Increment!</button>
            {/* we add a this.props.onDelete here, 
            so that in counters.jsc we define a handleDelete func, 
            call it via onDel=handleDel */}
            <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            </div>
        );
    }

    formatCount() 
    {
        return this.state.value;
    }

    getBadgeClasses()
    {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;