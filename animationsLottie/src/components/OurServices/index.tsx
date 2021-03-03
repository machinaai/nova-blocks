import React from 'react';
import { ServicesData } from './fixtures/ourServices-fixture';
import Lottie from "react-lottie";
import { Card } from 'antd';
import styles from './index.less'

export interface OurServicesProps {
    
}
 
const OurServices: React.FC<OurServicesProps> = () => {

    const defaultOptions = {
        loop: true, // o numero de repeticiones
        autoplay: true,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      lottie.searchAnimations()
    return ( 
        <div className={styles.container}>
            <div>
                <h1>OUR BEST</h1>
                <p>Always at the forefront of service</p>
            </div>
            <div className={styles.containerCards}>
            {ServicesData.map((option: any, index) => (
                <Card style={{ width: 200}} className={styles.card} key={option.title}>
                    <Lottie
                        options={{animationData: option.animationData, ...defaultOptions}}
                        height={50}
                        width={50}
                        isClickToPauseDisabled
                        className='lottie'
                    />
                    <h2>{option.title}</h2>
                </Card>
            ))}
            </div>
        </div>
     );
}
 
export default OurServices;
