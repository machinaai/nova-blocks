import { Card } from 'antd';
import { CardProps } from 'antd/es/card';
import classNames from 'classnames';
// import numeral from 'numeral';
import React from 'react';
import logoAbandonadas from './assets/logos/ico-abandonadas.svg';
import logoProceso from './assets/logos/ico-enproceso.svg';
import logoIniciadas from './assets/logos/ico-iniciadas.svg';
import logoSolicitudes from './assets/logos/ico-solicitudes.svg';
import logoTerminadas from './assets/logos/ico-terminadas.svg';
import styles from './index.less';

export interface ChartCardProps extends CardProps {
  action?: React.ReactNode;
  avatar?: React.ReactNode;
  style?: React.CSSProperties;
}

const TotalRequestCard: React.SFC<ChartCardProps> = (props:any) => {
  const { loading = false, action, dispatch, requestTotals, dateRequest, ...rest } = props;

  let values ={
    totalRequest: 0,
    initiated: 0,
    inProccess: 0,
    abandoned: 0,
    finished: 0,
  };

  return (
    <Card bodyStyle={{ padding: '20px' }}>
        <div className={styles.chartCard}>
          <div className={classNames(styles.chartTop)}>
            <div className={styles.metaWrap}>
              <div className={styles.meta}>
                <span className={styles.title}>Total de solicitudes</span>
                <span className={styles.action}>{action}</span>
              </div>
              <div className={styles.totalSec}>
                <div className={styles.total}>{values?.totalRequest}</div>
                <div className={styles.avatar}>
                  <img src={logoSolicitudes} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.states}>Estatus de solicitudes</div>
          <div className={styles.statements}>
            <div className={styles.statement}>
              <p className={styles.fact}>
                {values?.initiated}
                <span>Iniciadas</span>
              </p>
              <div className={styles.logo}>
                <img src={logoIniciadas} />
              </div>
            </div>
            <div className={styles.statement}>
              <p className={styles.fact}>
                {values?.inProccess}
                <span>En proceso</span>
              </p>
              <div className={styles.logo}>
                <img src={logoProceso} />
              </div>
            </div>
            <div className={styles.statement}>
              <p className={styles.fact}>
                {values?.abandoned}
                <span>Abandonadas</span>
              </p>
              <div className={styles.logo}>
                <img src={logoAbandonadas} />
              </div>
            </div>
            <div className={styles.statement}>
              <p className={styles.fact}>
                {values?.finished}
                <span>Terminadas</span>
              </p>
              <div className={styles.logo}>
                <img src={logoTerminadas} />
              </div>
            </div>
          </div>
        </div>
    </Card>
  );
};

export default TotalRequestCard;
