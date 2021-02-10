import React from 'react';
import { dataFixture } from './fixture/dataFixture';
import { PropsBlock } from './interfaces/audioInterface';
import styles from './index.less';

const AudioBlock: React.FC<PropsBlock> = ({ data = dataFixture,heightContainer=236}) => {
  return (
    <div className={styles.container} style={{height:heightContainer}}>
      {data?.map((item: any) => (
        <div key={item.uid}>
          <audio src={item.url} style={{width:'100%'}} preload="auto" controls />
        </div>
      ))}
    </div>
  )
}
export default AudioBlock;
