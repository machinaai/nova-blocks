import React from 'react';
import {StarFilled, RightCircleFilled, EyeFilled} from '@ant-design/icons';
import { Button,Skeleton  } from 'antd';
import styles from './index.less';
import Lottie from "react-lottie";
import starAnimation from '../../../animations/8579-like.json';

export interface CardTitleProps {
    
}
 
const CardDescription: React.FC<CardTitleProps> = ({loading}) => {

    const defaultOptions = {
        loop: true, // o numero de repeticiones
        autoplay: true,
        animationData: starAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return ( 
        <div className={styles.container}>
              <Skeleton loading={loading} paragraph={{ rows: 2 }} active round >
            <div>
                <div className={styles.starts}>
                    <Lottie
                        options={defaultOptions}
                        height={50}
                        width={50}
                        isClickToPauseDisabled
                        style={{ fontSize: '16px', color: '#FFC300', marginTop: '32px' }}
                    />
                    <p>4.9 (2345)</p>
                </div>
                <div>
                    <p>London England</p>
                </div>
                <div className={styles.views}>
                    <EyeFilled style={{ fontSize: '16px', color: '#FFC300' }}/>
                    <p>4.9 (2345)</p>
                </div>
            </div>
            </Skeleton>

            {loading ?  <Skeleton.Button active size='large' shape='circle' />  
            : 
            (
            <Button className={styles.btn}><RightCircleFilled style={{ fontSize: '50px', color: '#FFC300' }} /></Button>
            )}
        </div>
     );
}
 
export default CardDescription;