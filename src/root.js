import * as React from 'react'
import useMouse from '@react-hook/mouse-position'

export default function Root() {
  const target = React.useRef(null);
  const mouse = useMouse(target, {
    fps: 30,
    enterDelay: 0,
    leaveDelay: 0
  });

  return (
    <div ref={target}>
      <div class="demo" style={{top:mouse.y, left:mouse.x}}>
        <div>Demo</div>
      </div>
      <br />
    </div>
  );
}


