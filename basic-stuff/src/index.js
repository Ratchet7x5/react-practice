import React from 'react';
import ReactDOM from 'react-dom';

function Greeting()
{
  return <p>This is my first component, I think...</p>;
}

ReactDOM.render(<Greeting/>, document.getElementById('root'));