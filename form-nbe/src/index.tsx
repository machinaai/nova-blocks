import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import { StateType } from './model';
import FormLogin from './FormLogin/index';
import OtpLogin from './FormLoginOtp/index';

const getStep = (step: string) => {
  if (step === 'login') {
    return {
      component: <FormLogin />,
    };
  }
  if (step === 'otp') {
    return {
      component: <OtpLogin />,
    };
  }
  return {
    component: <FormLogin />,
  };
};

const NbeForm: React.FC<StateType> = ({ step }) => {
  const [state, setstate] = useState<React.ReactNode>(<FormLogin />);
  useEffect(() => {
    const { component } = getStep(step || '');
    setstate(component);
  }, [step]);
  return <>{state}</>;
};

export default connect(({ authentication }: { authentication: StateType }) => ({
  step: authentication.step,
}))(NbeForm);
