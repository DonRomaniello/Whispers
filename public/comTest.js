var peer1 = new SimplePeer({ initiator: true })
var peer2 = new SimplePeer()

let peerArray = []

for (let i = 0; i < 10; i++ ){

  let peer0 = new SimplePeer({initiator: true})

  peerArray.push(peer0);

}

console.log(peerArray)


peer1.on('signal', data => {
  // when peer1 has signaling data, give it to peer2 somehow
  console.log("p1signal", data)
  peer2.signal(data)
})

peer2.on('signal', data => {
  // when peer2 has signaling data, give it to peer1 somehow
  console.log("p2signal", data)
  peer1.signal(data)
})

peer1.on('connect', () => {
  // wait for 'connect' event before using the data channel
  peer1.send('hey peer2, how is it going?')
})

peer2.on('data', data => {
  // got a data channel message
  console.log("p2connect", data)
  console.log('got a message from peer1: ' + data)
})
