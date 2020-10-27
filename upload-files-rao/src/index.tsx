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

  // State para Adress
  const [addressFileList, setAdressList] = useState({ fileList: [] });

  // State para Adress
  const [filesIne, setFilesIne] = useState(
    {
      ineFront : false,
      ineBack : false,
      pdfFile : false,
    }
  );

  // change view
  const [changeview, setChangeView] = useState<boolean>(false);

  useEffect(() => {    
    if (addressFileList.fileList) {
      if (addressFileList.fileList.length === 1) {
        setChangeView(true);
      } else {
        setChangeView(false);
      }
    }
  }, [addressFileList]);

  useEffect(() => {
  },[changeview]);

  useEffect(() => {
    if(filesIne.ineFront && filesIne.ineBack) {
      setChangeView(true);
    } else if(filesIne.pdfFile) {
      setChangeView(true);
    } else {
      setChangeView(false);
    }
  },[filesIne]);

  const getIneFiles = (type:'ineFront' | 'ineBack' | 'pdfFile', value:boolean) => {
    setFilesIne({
      ...filesIne,
      [type]: value,
    });
  }

  return (
    <div className={styles.container}>
      <UploadTitles changeview={changeview} firstView={firstView} secondView={secondView} />
      {typeFlowProp === TypeFlow.INE ?

        <UploadAdress setAdressList={setAdressList} />
        :
        <UploadIne getIneFiles={getIneFiles} changeview={changeview} />
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
