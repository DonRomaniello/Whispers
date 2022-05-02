// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useMouse from '@react-hook/mouse-position';
import axios from 'axios';
import Peer from 'simple-peer';


function Root() {

    const [mess, setMess] = useState(1)

    const myPeer = new Peer({ initiator: true })

    const peerArray = useState([]);

    async function sendOffer(offer){
        try {
            await axios.post('api/offers', {token : offer})
        } catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        setMess(mess + 1)

        myPeer.on('signal', data => {
            if (data.type === 'offer') {
                sendOffer(data);
            }
        })
      }, [])


    useEffect(() => {





      async function getAnswers(offer){
        try {
            let answers = await axios.get('api/answers')
        } catch (err){
            console.log(err)
        }
    }



    })



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

