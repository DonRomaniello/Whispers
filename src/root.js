import * as React from 'react'
import useMouse from '@react-hook/mouse-position'
import axios from 'axios';

export default function Root() {


  const target = React.useRef(null);

  const mouse = useMouse(target, {
    fps: 15,
    enterDelay: 0,
    leaveDelay: 100
  });

  function runEvery(mousePos) {
    // console.log("harekrishna", mousePos)
  }

  runEvery(mouse.x);

  return (
    <div ref={target} style={{width: "100%", height: "100%"}}>
      <div class="demo" style={{top:mouse.y - 100, left:mouse.x - 100}}>
        <div>Demo</div>
      </div>
    </div>
  );
}
