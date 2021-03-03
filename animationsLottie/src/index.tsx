import React, {useState } from "react";
import Lottie from "react-lottie";
import animationData from "./animations/1828-like-button-clicked.json";
import OurServices from './components/OurServices/index';
import CustomSkeleton from "./components/CustomSkeleton";
import StartCount from "./components/StartCount";
import { Button } from 'antd';


export interface ControllsAnimationsProps {
  
}
 
const ControllsAnimations: React.FC<ControllsAnimationsProps> = () => {

  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused]= useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return ( 
    <div>
      <div className="controlled">
        <Lottie
          options={defaultOptions}
          height={600}
          width={600}
          isStopped={isStopped}
          isPaused={isPaused}
          isClickToPauseDisabled
        />
        <Button 
          type="primary"
          onClick={() => setIsStopped(true)}
        >
          Stop
        </Button>
        <Button 
          type="primary"
          onClick={() => {setIsStopped(false); setIsPaused(false)}}
        >
          Play
        </Button>
        <Button 
          type="primary"
          onClick={() =>setIsPaused(!isPaused)}
        >
          Pause
        </Button>
    </div>
    <OurServices />

    <CustomSkeleton />

    <StartCount />
  </div>

   );
}
 
export default ControllsAnimations;
