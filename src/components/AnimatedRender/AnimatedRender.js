/**
 * 'Key'-changing trick is used for Blink-animation
 */

import './AnimatedRender.css';

const animatedRender = (props) => {
    return (
        <div key={`${props.value}`} className="blink-animation">
            { props.value }
        </div>
    )
};
  
export default animatedRender;