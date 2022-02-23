import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

function Quotes({children, title, author}:{
    children: React.ReactNode,
    title?: string,
    author?: string
}) {
    const [state, toggle] = useState(false)
    const animation = useSpring({
        from: { opacity: 0, x: -40 },
        to:{ 
            opacity: state ? 1 : 0,
            x: state ? 0 : -40
        },
        config: { duration: 1000 },
    });
    const animationY = useSpring({
        from: { opacity: 0, x: 40 },
        to:{ 
            opacity: state ? 1 : 0,
            x: state ? -40 : 0
        },
        config: { duration: 1000 },
    });

    const toggleAnimation = function(){
        toggle(true);
    }
    return (
        
        <div className="bg-pink-0 py-5 w-100 overflow-hidden">
            <Waypoint onEnter={toggleAnimation} bottomOffset="30%">
                <animated.div style={animation}>
                {title !== "" &&
                    <div className={"py-3 text-center mx-5 border-bottom-main"}  >
                        <div className="fs-2 fw-bolder">{title}</div>
                    </div>
                }

                <div className="py-5 px-md-5 px-1 w-80 text-center" >
                    {children}
                </div>
                
                {author &&
                <animated.div className="pb-3 fs-4 text-end px-5" style={animationY} >
                    - {author}
                </animated.div>
                }
                </animated.div>
            </Waypoint> 

        </div>
    
    );
  }
  
  export default Quotes;