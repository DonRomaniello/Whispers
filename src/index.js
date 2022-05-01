import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root.js';

// function mousemove(event){

//     let demo = document.getElementById("demo")

//     demo.style.top = event.pageY + 'px'
//     demo.style.left = event.pageX + 'px'


//     console.log(event.clientX, event.clientY)
// }

//window.addEventListener('mousemove', mousemove);

ReactDOM.render(
  <Root />,
  document.getElementById('root') // make sure this is the same as the id of the div in your index.html
);

