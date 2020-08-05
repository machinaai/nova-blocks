import { Button, Result } from 'antd';
import React from 'react';
import { connect, Dispatch, useIntl } from 'umi';
import { StateType } from '../../model';
import styles from './index.less';
import Error from './assets/img/Error.png';

/**
 * Interface for Step 3 and dispatch
 */
interface Step3Props {
  data?: StateType['step'];
  dispatch?: Dispatch;
  status?: number;
}

/**
 * Functional Component
 * @param props Component properties
 */
const Step3: React.FC<Step3Props> = (props) => {
  const intl = useIntl();
  const { data, dispatch, status } = props;
  if (!data) {
    return null;
  }

  /**
   * Function onFinish form
   */
  const onFinish = () => {
    if (dispatch) {
      dispatch({
        type: 'bneStepForm/finalizeForm',
        payload: 'info',
      });
    }
  };

  return (
    <>
      <div className={styles.resultContainer}>
        {status === 200 ? (
          <Result
            status="success"
            title={intl.formatMessage({ id: 'bneStepForm.successful.registration' })}
            subTitle={intl.formatMessage({ id: 'bneStepForm.successful.message' })}
            className={styles.successResult}
          />
        ) : (
          <div className={styles.errorResult}>
            <img src={Error} alt="Error" className={styles.imgError} />
            <span className={styles.errorTitle}>
              {intl.formatMessage({ id: 'bneStepform.error.registration' })}
            </span>
            <div className={styles.legendsContainer}>
              <p className={styles.errorSubtitle}>
                {intl.formatMessage({ id: 'bneStepForm.error.message1' })}
                <a>{intl.formatMessage({ id: 'bneStepForm.error.number' })}</a>
              </p>
              <p className={styles.errorSubtitle}>
                {intl.formatMessage({ id: 'bneStepForm.error.message2' })}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <Button type="primary" onClick={onFinish} className={styles.buttonPrincipal}>
          {intl.formatMessage({ id: 'bneStepForm.successful.btn' })}
        </Button>
      </div>
    </>
  );
};

export default connect(({ bneStepForm }: { bneStepForm: StateType }) => ({
  data: bneStepForm.step,
  status: bneStepForm.statusCode,
}))(Step3);
