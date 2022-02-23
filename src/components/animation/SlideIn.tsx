import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

function SlideIn ({children, isLeft=false}:{
    children: React.ReactNode,
    isLeft?: Boolean
}) {
    const [state, toggle] = useState(false)
    const val = 40;
    const animation = useSpring({
        from: { opacity: 0, x: (isLeft ? -val: val) },
        to:{ 
            opacity: state ? 1 : 0,
            x: state ? (isLeft ? 0 : 0) : (isLeft ? -val : val)
        },
        config: { duration: 1000 },
    });
    const toggleAnimation = function(){
        toggle(true);
    }
    return (
        <Waypoint onEnter={toggleAnimation} bottomOffset="30%">
            <animated.div style={animation} className="animation-clip">
                {children}
            </animated.div>
        </Waypoint> 
      );
  }

export default SlideIn;