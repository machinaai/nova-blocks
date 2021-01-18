import React, { useEffect, useMemo } from "react";
import { useDispatch, connect, useIntl } from "umi";

import Title from "./components/contentTitle";
// step views

import GetOtp from "./components/getOTP";
import ValidateOtp from "./blocks/validateOtp";

import { StepEnum } from "./enums";

import { StateModel } from "./models/model";

interface RegisterOtpProps {
  step?: StateModel["step"];
  status?: StateModel["status"];
  flagFlowComplete?: StateModel["flowComplete"];
  onComplete?: Function;
  phoneSave?: StateModel['phone'];
  onSetPhone?: Function;
}
/**
 * Pro block RegisterOtp
 *
 * @param {Props} { step,onComplete, flagFlowComplete}
 */
const RegisterOtp: React.FC<RegisterOtpProps> = ({
  step,
  onComplete,
  flagFlowComplete,phoneSave,
  onSetPhone
}) => {
  const Internationalization = useIntl();
  const dispatch = useDispatch();
  useEffect(() => {
    if (phoneSave && onSetPhone) {
      onSetPhone(phoneSave);
    }
  }, [phoneSave]);

  const data = useMemo(
    () => ({
      upTitle: Internationalization.formatMessage({
        id: `registerOtp.${step}.upTitle`,
      }),
      title: Internationalization.formatMessage({
        id: `registerOtp.${step}.title`,
      }),
      content: Internationalization.formatMessage({
        id: `registerOtp.${step}.content`,
      }),
    }),
    [step]
  );

  useEffect(() => {
    if (flagFlowComplete && onComplete) {
      
      onComplete(flagFlowComplete);
    }
  }, [flagFlowComplete]);

  /**
   * Function when submitPhoneNumber
   *
   * @param {string} value
   */
  const getOtp = (value: string) => {
    dispatch({
      type: "registerOtp/submitPhoneNumber",
      payload: {
        flowId: 1234,
        phone: Number(value),
      },
    });
  };

  /**
   * Function retry process
   *
   * @param {string} value
   */
  const retryOpt = () => {
    dispatch({
      type: "registerOtp/setStep",
      payload: "get",
    });
  };

  /**
   * Function when validate otp
   *
   * @param {string} value
   */
  const validateOtp = (value: string) => {
    dispatch({
      type: "registerOtp/validateOtp",
      payload: {
        flowId: 1234,
        otp: Number(value),
        phone: Number(phoneSave),
      },
    });
  };

  return (
    <>
      <Title data={data} />
      {step === StepEnum.getOtp ? (
        <GetOtp action={getOtp} />
      ) : (
        <ValidateOtp
          retry={retryOpt}
          action={validateOtp}
          timeCount={60}
          messageTimer={Internationalization.formatMessage({
            id: "registerOtp.validate.message.timer",
          })}
        />
      )}
    </>
  );
};

export default connect(({ registerOtp }: { registerOtp: StateModel }) => ({
  step: registerOtp.step,
  status: registerOtp.status,
  flagFlowComplete: registerOtp.flowComplete,
  phoneSave: registerOtp.phone
}))(RegisterOtp);
