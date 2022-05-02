// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useMouse from '@react-hook/mouse-position';
import axios from 'axios';
import Peer from 'simple-peer';


function Root() {

    const [mess, setMess] = useState(1)

    // const [offer, setOffer] = useState({})


    useEffect(() => {
        setMess(mess + 1)
        let peer1 = new Peer({ initiator: true })

        async function sendToken(offer){
            try {
                await axios.post('api/users', {token : offer})
            } catch (err){
                console.log(err)
            }
        }

        peer1.on('signal', data => {
            if (data.type === 'offer') {
                console.log("reaching")
                sendToken(data);
            }
        })


      }, [])

    //   useEffect(() => {
    //     setMess(mess + 1)
    //   })

  const target = React.useRef(null);

  const mouse = useMouse(target, {
    fps: 15,
    enterDelay: 0,
    leaveDelay: 100
  });

  function runEvery(mousePos) {
    // console.log("harekrishna", mousePos)
    //console.log("running")
  }

  runEvery(mouse.x);

  return (
    <div ref={target} style={{width: "100%", height: "100%"}}>
      <div class="demo" style={{top:mouse.y - 100, left:mouse.x - 100}}>
        <div>{mess}</div>
      </div>
    </div>
  );
}

// class Peerage extends React.Component {

//     render(){

//     }


// }


ReactDOM.render(
  <Root />,
  document.getElementById('root') // make sure this is the same as the id of the div in your index.html
);

