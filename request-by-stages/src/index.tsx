import React, { useEffect } from 'react';
import { connect, useDispatch, useIntl } from 'umi';
import { Button, Card, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { StateModelStage } from './models/model';
import { getCleanData } from './helpers/getCleanData';
import styles from './index.less';
import { dataFixture, fontFamFixture, iconsFixture } from './fixtures/dataFixture.fixture';
import { DataIcons, DataOption, FunnelChartProps, StatisticProps } from './interfaces/ProblockProps..interface';
import FunnelChartBlock from './blocks/funnel-chart/src';
import ExperienceStatisticBlock from './blocks/user-experience-block/src';


interface RequestByStagesProps {
  fontFam?: Font,
  actionIconHelp?: Function | any;
  icons?: DataIcons,
  dataSteps: StateModelStage['dataSteps'];
  dateRequest: StateModelStage['dateRequest'],
  status?: StateModelStage['error'];
}
interface Font {
  fontTitle: string,
  fontSubtitle: string
}
const RequestByStages: React.FC<RequestByStagesProps> = ({
  fontFam = fontFamFixture,
  icons = iconsFixture,
  dataSteps,
  dateRequest,
  status }) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  
  const getDataDevice = () => {
    dispatch({ type: 'RequestByStages/getSteps', payload: dateRequest });
  };
  const getTotalReq = () => {
    dispatch({ type: 'RequestByStages/getTotalRequest', payload: dateRequest });
  };

  useEffect(() => {
    getDataDevice();
    getTotalReq();
  }, [dateRequest]); 

 
  const {dataDevice,dataStatistic} = getCleanData(dataSteps);

  const propsFunnelChart: FunnelChartProps = {
    dataOptions: dataDevice,
    heightStatistic: 143,
    heightCanvas: 140
  }

  const propsExperienceStatistic: StatisticProps = {
    dataOptions: dataStatistic,
    icons
  }
  return (
    <>
      <Card>
        <div className={styles.header}>
          <h2 className={styles.title} style={{ fontFamily: `${fontFam.fontTitle}` }}>{intl.formatMessage({ id: 'requestByStages.title' })}</h2>
          <Tooltip placement="top" className={styles.icon} title={intl.formatMessage({ id: 'requestByStages.titleTooltip' })}>
            <InfoCircleOutlined/>
          </Tooltip>
        </div>
        { dataSteps ? (<FunnelChartBlock {...propsFunnelChart} />) : (<p className={styles.data}>{intl.formatMessage({ id: 'requestByStages.no.data' })}</p> ) }
        
        <h2 className={styles.subtitle} style={{ fontFamily: `${fontFam.fontSubtitle}` }}>{intl.formatMessage({ id: 'requestByStages.subtitle' })}</h2>
        {dataSteps ? (<ExperienceStatisticBlock {...propsExperienceStatistic} />) : (<p className={styles.data}>{intl.formatMessage({ id: 'requestByStages.no.data' })}</p>)}
      </Card>
    </>
  );
};

export default connect(({ RequestByStages }: { RequestByStages: StateModelStage }) => ({
  dataSteps: RequestByStages.dataSteps,
  dateRequest:RequestByStages.dateRequest,
  status: RequestByStages.error,
}))(RequestByStages);
