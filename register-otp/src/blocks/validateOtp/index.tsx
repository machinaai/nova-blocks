import React from "react";
import styles from "./index.less";
import DigitInput from "./components/digit-dynamic-input";

import { countDown } from "./helper/countDown.helper";

import { useTiming } from "./hooks/useTiming";

interface VerifyOtpProps {
  lengthOtp?: number;
  action: Function;
  retry?: Function;
  timeCount: number;
  messageTimer?: string
}

const ValidateOtp: React.FC<VerifyOtpProps> = ({
  action,
  retry,
  timeCount = 60,
  messageTimer
}) => {

  const [time] = useTiming(timeCount, retry);

  return (
    <>
      <div className={styles.container}>
        <DigitInput action={action} lengthOtp={6}/>
        <div className={styles.timer}>
          <p className={styles.alertTimer}>
            {messageTimer}
          </p>
          <strong className={styles.timerCont}>{countDown(time)}</strong>
        </div>
      </div>
    </>
  );
};

export default ValidateOtp;
