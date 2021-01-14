import React from 'react';
import styles from './style.less';

// assets
import robot from './assets/Robot.gif';
// import Sound from './assets/Camera3.mp3';

interface VisualIndicatorProps {
  prefixLogo?: any;
  colorPrimary?: string;
  colorSucess?: string;
  legend: string;
  success?: boolean;
  successLegend?: string;
  playSound?: boolean;
  infoCognition?: string | React.ReactNode
}

const VisualIndicator: React.FC<VisualIndicatorProps> = ({
  prefixLogo = robot,
  colorPrimary = 'red',
  legend,
  colorSucess = '#8bcc00',
  success = false,
  successLegend = '¡Validación exitosa!',
  playSound= false,
  infoCognition
}) => {

  return (
    <>
      <div id="overlay" className={styles.container_overlay}>
        <div
          style={{ backgroundColor: success ? colorSucess : colorPrimary }}
          className={styles.container_robot}
        >
          <img src={prefixLogo} alt="robot" />
        </div>
        <div className={styles.slideTextLeft}>
          <div className={styles.text}>{success ? successLegend : legend}</div>
          {infoCognition && <div className={styles.infoCognition}>{infoCognition}</div>}
        </div>
      </div>
      {playSound && success && (
       <>
        <audio autoPlay >
          <track kind="captions" src="./Camera3.mp3" />
        </audio>
       </>
      )}
    </>
  );
};

export default VisualIndicator;
