import React, { useState, useEffect } from 'react';
import UploadAdress from './components/UploadAdress';
import UploadIne from './components/UploadIne';
import { UploadBlockProps } from './interfaces/interface';
import { UploadFixture } from './fixtures/fixture';
import { TypeFlow } from './enum/emun';
import UploadTitles from './components/UploadTitles';
import { Button } from 'antd';
import styles from './index.less';

const UploadBlock: React.FC<UploadBlockProps> = (
  {
    typeFlowProp = UploadFixture.typeFlow,
    firstView = UploadFixture.UploadFirstView,
    secondView = UploadFixture.UploadSecondView,
  }
) => {

  // State para INE
  const [ineFileList, setIneList] = useState();

  // State para Adress
  const [addressFileList, setAdressList] = useState({ fileList: [] });

  // change view
  const [changeview, setChangeView] = useState<boolean>(false);

  useEffect(() => {
    console.log(addressFileList, 'filesss despues del click')
    
    if (addressFileList.fileList) {
      if (addressFileList.fileList.length === 1) {
        setChangeView(true);
      } else {
        setChangeView(false);
      }
    }
  }, [addressFileList, changeview]);

 

  useEffect(() => {
    console.log(addressFileList);
  });

  console.log(changeview)
  console.log(addressFileList, 'adreessss en todo')

  return (
    <div className={styles.container}>
      <UploadTitles changeview={changeview} firstView={firstView} secondView={secondView} />
      {typeFlowProp === TypeFlow.ADDRESS ?

        <UploadAdress setAdressList={setAdressList} firstView={firstView} secondView={secondView} />
        :
        <UploadIne />
      }
      <div>
        { changeview ? 
        (
          <div className={styles.container}>
          <div className={styles.options}>
            <div>
              <Button  className={styles.btnUpload} > {secondView.bntNextTitle} </Button>
            </div>
            <div className={styles.again} >{secondView.linkTitle}</div>
          </div>
        </div>
      ) : null
      }
      </div>
    </div>
  );
}

export default UploadBlock;
