import React from 'react';
import { dataFixture } from './fixture/dataFixture';
import { PropsBlock } from './interfaces/audioInterface';

const AudioBlock: React.FC<PropsBlock> = ({ data = dataFixture }) => {
  return (
    <>
      {data?.map((item: any) => (
        <div key={item.uid}>
          <audio src={item.url} style={{width:'100%'}} preload="auto" controls />
        </div>
      ))}
    </>
  )
}
export default AudioBlock;
