import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

function FadeIn ({children, delay=1500, css=""}:{
    children: React.ReactNode,
    delay?: number,
    css?: string
}) {
    if(!delay) delay=1500;
    const animation = useSpring({
        from: { opacity: 0 },
        to:{ 
            opacity: 1
        },
        delay: delay,
        loop:false,
        config: { duration: 1500 }
    });
    return (
        <animated.div style={animation} className={css}>
            {children}
        </animated.div>
      );
  }

export default FadeIn;