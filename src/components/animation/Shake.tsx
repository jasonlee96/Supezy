import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

function Shake ({children}:{
    children: React.ReactNode
}) {
    let state = true;
    const {x} = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        delay: 1500,
        config: { duration: 1500 },
        loop: true,
        });
    return (
        <animated.div className="animation-resize" style={{
            transform: x.to({
              range: [0, 0.20, 0.35, 0.45, 0.5, 0.55, 0.65, 0.80, 1],
              output: [0, 5, 10, 5, 0, -5, -10, -5, 0],
            }).interpolate(x => `rotate(${x}deg)`),
          }}>
            {children}
        </animated.div>
      );
  }

export default Shake;