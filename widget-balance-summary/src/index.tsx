import React, { useCallback, useState } from 'react';
import { Link, useIntl } from 'umi';

import { Chart, Geom, Tooltip, Coord, Guide, Legend } from 'bizcharts';
import { RedoOutlined } from '@ant-design/icons';
import styles from './index.less';
import { WidgetBalanceSummaryInterfaceProps } from './interfaces/dataInterface.interface';

const { Text } = Guide;

const WidgetBalanceSummary: React.FC<WidgetBalanceSummaryInterfaceProps> = ({
  data,
  detail,
  status,
  onRetry,
}) => {
  const intl = useIntl();

  const [index, setIndex] = useState(0);

  const onClickAccount = useCallback(
    (event) => {
      if (data && event.data) {
        const { _origin: Origin } = event.data;
        const indexSelected = data.indexOf(
          data.find((item) => item.type === Origin.type) || data[0],
        );
        setIndex(indexSelected);
      }
    },
    [data],
  );

  const onClickRetry = useCallback(() => {
    if (onRetry) {
      onRetry();
    }
  }, [onRetry]);

  const widget = (
    <div className={styles.widget}>
      <Chart
        forceUpdate
        height={285}
        width={276}
        data={data}
        forceFit
        padding={['auto', 190, 'auto', -30]}
        onGetG2Instance={(chart) => {
          const geom = chart.get("geoms")[0];
          const items = geom.get('data');
          geom.setSelected(items[index]);
          chart.on('afterrender', () => {
            geom.setSelected(items[index]);
          });
        }}
        onPlotClick={onClickAccount}
      >
        <Coord type="theta" innerRadius={0.75} />
        <Legend
          position="right-center"
          textStyle={{
            textAlign: 'start',
            fill: '#404040',
            fontSize: '14',
            textBaseline: 'top',
          }}
          slidable
        />

        <Tooltip showTitle={false} />
        <Geom type="intervalStack" position="percentage" color="type" shape="circle">
          <Guide>
            <Text
              position={['50%', '50%']}
              content={data && data[index]?.type}
              style={{
                fontSize: '14',
                fill: '#000000',
                textAlign: 'center',
              }}
              offsetY={-20}
            />
            <Text
              position={['50%', '50%']}
              content={data && data[index]?.balance?.toString()}
              style={{
                fontSize: '30',
                fill: '#262626',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
              offsetY={10}
            />
          </Guide>
        </Geom>
      </Chart>
    </div>
  );

  return (
    <>
      <div className={styles.container}>
        <p className={styles.tittle}>{intl.formatMessage({ id: 'widgetBalanceSummary.tittle' })}</p>
        {status !== 200 ? (
          <div className={styles.error} onClick={onClickRetry}>
            <RedoOutlined />
            <p className={styles.legend}>
              {intl.formatMessage({ id: 'widgetBalanceSummary.retry' })}
            </p>
          </div>
        ) : (
          <>{data && widget}</>
        )}
        {detail && (
          <Link to={detail?.action} className={styles.detail}>
            {detail?.legend}
          </Link>
        )}
      </div>
    </>
  );
};

export default WidgetBalanceSummary;
