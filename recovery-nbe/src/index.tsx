import React, { useState, useEffect } from 'react';
import { Steps } from 'antd';
import { connect, formatMessage, Dispatch } from 'umi';
import { StateType } from './model';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import styles from './style.less';
import RegisterMessage from './helpers/RegisterMessage/index';

const { Step } = Steps;
interface FormStepFormProps {
  current: StateType['current'];
  status: StateType['statusCode'];
  dispatch?: Dispatch;
}

const getCurrentStepAndComponent = (current?: string) => {
  switch (current) {
    case 'number':
      return {
        step: 1,
        component: <Step2 />,
      };

    case 'password':
      return {
        step: 2,
        component: <Step3 />,
      };

    case 'recover':
      return {
        step: 3,
        component: <Step4 />,
      };

    case 'user':
    default:
      return {
        step: 0,
        component: <Step1 />,
      };
  }
};

const FormStepForm: React.FC<FormStepFormProps> = ({ current, status, dispatch }) => {
  const [stepComponent, setStepComponent] = useState<React.ReactNode>(<Step1 />);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [flag, changeFlag] = useState(false);

  useEffect(() => {
    const { step, component } = getCurrentStepAndComponent(current);
    setCurrentStep(step);
    setStepComponent(component);
    changeFlag(false);
  }, [current]);

  useEffect(() => {
    if (status >= 400 || status >= 500) {
      changeFlag(true);
    } else {
      changeFlag(false);
    }
  }, [status, currentStep]);

  const closeForm = () => {
    if (dispatch) {
      dispatch({
        type: 'recoverStepForm/closeStatusCode',
      });
    }
    changeFlag(false);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.registryTitleContainer}>
          {flag && currentStep !== 3 ? (
            <div id="titulo2" className={styles.errorContainer}>
              <span>
                <RegisterMessage
                  closeForm={closeForm}
                  content={formatMessage({
                    id: 'bneStepForm.registermessage',
                  })}
                />
              </span>
            </div>
          ) : (
            <div id="titulo">
              <span className={styles.registryTitle}>
                {formatMessage({
                  id: 'recover.title',
                })}
              </span>
              <hr className={styles.registryBorder} />
            </div>
          )}
        </div>

        <Steps current={currentStep} className={styles.steps}>
          <Step
            title={formatMessage({
              id: 'recoverStepForm.step1.title',
            })}
          />
          <Step
            title={formatMessage({
              id: 'recoverStepForm.step2.title',
            })}
          />
          <Step
            title={formatMessage({
              id: 'recoverStepForm.step3.title',
            })}
          />
          <Step
            title={formatMessage({
              id: 'recoverStepForm.step4.title',
            })}
          />
        </Steps>
        {stepComponent}
      </div>
    </>
  );
};

export default connect(({ recoverStepForm }: { recoverStepForm: StateType }) => ({
  current: recoverStepForm.current,
  status: recoverStepForm.statusCode,
}))(FormStepForm);
