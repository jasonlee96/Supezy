import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

function JiggleZoom ({children}:{
    children: React.ReactNode
}) {
    let state = true;
    const {x} = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        delay: 2500,
        config: { duration: 1500 },
        loop: true,
        });
    return (
        <animated.div className="animation-resize" style={{
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [0.9, 0.87, 0.8, 1, 0.8, 1, 0.93, 0.9],
            }),
          }}>
            {children}
        </animated.div>
      );
  }

export default JiggleZoom;