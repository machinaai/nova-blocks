import  React, {useState, useRef} from 'react';
import Lottie from "react-lottie";
import starAnimation from '../../animations/8579-like.json';
import {StarData} from './fixture/fixture';
import styles from './index.less';


export interface StartCountProps {
    
}
 
const StartCount: React.SFC<StartCountProps> = () => {

    const [options, setOptions] = useState('');
    const lottieRef = useRef(null);
    
    const countStart = (op, index) => {
        console.log(lottieRef)  

        switch (index) {
        case 0:
            setOptions(op)
            break;
        case 1:
            setOptions(op)
            break;
        case 2:
            setOptions(op);
            break;
        case 3:
            setOptions(op)
            break;
        case 4:
            setOptions(op)
            break;
        default:
            setOptions('')
        }
    }

    const defaultOptions = {
        loop: true, // o numero de repeticiones
        autoplay: true,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    }; 

    return ( 
        <>
        <div className={styles.container} >
            {StarData.map((option: any, index) => (
                <div onClick={ () => countStart(option, index)} >
                    <Lottie
                                options={{animationData: starAnimation, ...defaultOptions}}
                                height={150}
                                width={150}
                                isClickToPauseDisabled
                                ref={lottieRef}
                                eventListeners={[
                                    {
                                      eventName: 'DOMLoaded',
                                      callback: () => {console.log('the animation completed:');},
                                    },
                                ]}
                    />
             </div>
            ))}    
        </div>
        <div>
            {options}
        </div>
        </>
     );
}
 
export default StartCount;