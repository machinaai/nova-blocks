import React from 'react';
import UploadAdress from './components/UploadAdress';
import UploadIne from './components/UploadIne';
import { UploadBlockProps } from './interfaces/interface';
import { UploadFixture } from './fixtures/fixture';
import { TypeFlow } from './enum/emun';
import UploadTitles from './components/UploadTitles';
import styles from './index.less';

const UploadBlock: React.FC<UploadBlockProps> = (
  {
    typeFlowProp = UploadFixture.typeFlow,
    firstView =UploadFixture.UploadFirstView,
    secondView = UploadFixture.UploadSecondView,
  }

) => {
  return (
    <div className={styles.container}>
      <UploadTitles firstView = {firstView} secondView = {secondView } />
      {typeFlowProp === TypeFlow.ADDRESS ? <UploadAdress firstView = {firstView} secondView = {secondView }/> : <UploadIne />}
    </div>
  );
}

export default UploadBlock;
