import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 0, counter: 0},
            {id: 1, counter: 0},
            {id: 2, counter: 0},
            {id: 3, counter: 0},
        ]
     } 

     handleDelete = counterId =>
     {
        console.log('Event Handler Called: ', counterId);
     }

    render() {

        return (
        <div>
            { this.state.counters.map(counter => 
                (
                    <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}/>
                )) 
            }
        </div>); 
    }
}
 
export default Counters;