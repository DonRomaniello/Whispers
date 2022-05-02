// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useMouse from '@react-hook/mouse-position';
import axios from 'axios';
import Peer from 'simple-peer';


function Root() {

    const [peerArray, setPeers] = useState([]);

    const [offerArray, setOffers] = useState([]);

    const [offered, offerSent] = useState(false);

    const myPeer = new Peer({ initiator: true })

    async function sendOffer(offer){
        try {
            await axios.post('api/offers', {token : offer})
        } catch (err){
            console.log(err)
        }
    }

    useEffect(() => {

      myPeer.on('signal', data => {
        if (data.type === 'offer') {
          sendOffer(data);
          offerSent(true);
        }
      })
    }, [])

    async function getOffers(){
      try {
        const offers = await axios.get('api/offers');
        return offers
      } catch (err){
        console.log(err)
      }
    }

    useEffect(async () => {

      let offers = await getOffers();
      setOffers(offers.data)
      console.log(offerArray);


      // console.log("Offer state changed.")


    }, offered)

    useEffect(() => {

    })

    async function getAnswers(){
      try {
        let answers = await axios.get('api/answers')
        return answers;
      } catch (err){
        console.log(err)
      }
    }

      const target = React.useRef(null);

      const mouse = useMouse(target, {
        enterDelay: 0,
        leaveDelay: 100,
        fps: 15
      });


      // This
      function runEvery(mousePos) {
        // console.log("harekrishna", mousePos)
        // console.log("mouse moving.")
        // console.log(offerArray)
      }

      // This will run on every movement of mouse.
      runEvery(mouse.x);




  return (
    <div ref={target} style={{width: "100%", height: "100%"}}>
      <div class="demo" style={{top:mouse.y - 100, left:mouse.x - 100}}>
        <div></div>
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

