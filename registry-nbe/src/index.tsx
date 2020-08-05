import React, { useState, useEffect } from 'react';
import { Steps } from 'antd';
import { connect, formatMessage } from 'umi';
import { StateType } from './model';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import styles from './style.less';

const { Step } = Steps;
interface FormStepFormProps {
  current: StateType['current'];
}

const getCurrentStepAndComponent = (current?: string) => {
  switch (current) {
    case 'confirm':
      return {
        step: 1,
        component: <Step2 />,
      };

    case 'result':
      return {
        step: 2,
        component: <Step3 />,
      };

    case 'info':
    default:
      return {
        step: 0,
        component: <Step1 />,
      };
  }
};

const FormStepForm: React.FC<FormStepFormProps> = ({ current }) => {
  const [stepComponent, setStepComponent] = useState<React.ReactNode>(<Step1 />);
  const [currentStep, setCurrentStep] = useState<number>(0);
  useEffect(() => {
    const { step, component } = getCurrentStepAndComponent(current);
    setCurrentStep(step);
    setStepComponent(component);
  }, [current]);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.registryTitleContainer}>
          <span className={styles.registryTitle}>
            {formatMessage({
              id: 'bneStepForm.basic.title',
            })}
          </span>
          <hr className={styles.registryBorder} />
        </div>
        <Steps current={currentStep} className={styles.steps}>
          <Step
            title={formatMessage({
              id: 'bneStepForm.step1.title',
            })}
          />
          <Step
            title={formatMessage({
              id: 'bneStepForm.step2.title',
            })}
          />
          <Step
            title={formatMessage({
              id: 'bneStepForm.step3.title',
            })}
          />
        </Steps>
        {stepComponent}
      </div>
    </>
  );
};

export default connect(({ bneStepForm }: { bneStepForm: StateType }) => ({
  current: bneStepForm.current,
}))(FormStepForm);
