import { Result, Button } from 'antd';
import React from 'react';
import { connect, Dispatch, useIntl } from 'umi';
import { StateType } from '../../model';
import styles from './index.less';
import Error from './assets/img/Error.png';

interface Step4Props {
  data?: StateType['step'];
  dispatch?: Dispatch;
  status?: StateType['statusCode'];
}

const Step4: React.FC<Step4Props> = (props) => {
  const useintl = useIntl();
  const { data, dispatch, status } = props;
  if (!data) {
    return null;
  }
  const onFinish = () => {
    if (dispatch) {
      dispatch({
        type: 'recoverStepForm/finalizeForm',
      });
    }
  };
  return (
    <>
      <div className={styles.resultContainer}>
        {status === 200 ? (
          <Result
            status="success"
            title={useintl.formatMessage({ id: 'recoverStepForm.step4.success' })}
            subTitle={useintl.formatMessage({ id: 'recoverStepForm.step4.success.message' })}
            className={styles.successResult}
          />
        ) : (
          <div className={styles.errorResult}>
            <img src={Error} alt="Error" className={styles.imgError} />
            <span className={styles.errorTitle}>
              {useintl.formatMessage({ id: 'recoverStepForm.step4.error' })}
            </span>
            <div className={styles.legendsContainer}>
              <p className={styles.errorSubtitle}>
                {useintl.formatMessage({ id: 'recoverStepForm.step4.error.message' })}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <Button type="primary" onClick={onFinish} className={styles.buttonPrincipal}>
          {useintl.formatMessage({ id: 'recoverStepForm.main-page' })}
        </Button>
      </div>
    </>
  );
};

export default connect(({ recoverStepForm }: { recoverStepForm: StateType }) => ({
  data: recoverStepForm.step,
  status: recoverStepForm.statusCode,
}))(Step4);
