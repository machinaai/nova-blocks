import React, { useState, useEffect, useCallback } from 'react';
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
    srcIneFront,
    fileListIneFront,
    srcIneBack,
    fileListIneBack,
    srcPdf,
    fileListPdf,
  }
) => {

  // states para INE  FRONT
  // STATE PARA DATA
  const [dataIneFront, setDataIneFront ] = useState<any>();
  // STATE PARA FILE LIST
  const [ineFrontFileList, setIneFrontFileList] = useState({ fileList: [] });
  // // STATE PARA EL OBJETO DEL SERVICIO
  // const [objectIneFront, setObjectIneFront] = useState<any>({});

  // State para Adress
  const [addressFileList, setAdressList] = useState({ fileList: [] });

  // states para INE  BACK
  // STATE PARA DATA BACK
  const [dataIneback, setDataIneBack ] = useState<any>();
  // STATE PARA FILE LIST BACK
  const [ineBackFileList, setIneBackFileList] = useState({ fileList: [] });
  // // STATE PARA EL OBJETO DEL SERVICIO BACK
  // const [objectIneBack, setObjectIneBack] = useState<any>({});


  // states para PDF
  // STATE PARA DATA PDF
  const [dataPdf, setSrcPdf  ] = useState<any>();
  // STATE PARA FILE LIST PDF
  const [pdfFileList, setPdfFileList] = useState({ fileList: [] });
  // // STATE PARA EL OBJETO DEL SERVICIO PDF
  // const [objectpdF, setObjectPdf] = useState<any>({});

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
  const [reload, setReload] = useState(false);

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
  };
 
  const reloadFiles = (e: any) => {
    setReload(true);
  };

  useEffect(() => {
    setReload(false);
    setChangeView(false);
  },[reload]);

  useEffect(() => {
    // srcIneFront(dataIneFront);
    // fileListIneFront(ineFrontFileList);
    // srcIneBack(dataIneback);
    // fileListIneBack(ineBackFileList);
    // srcPdf(dataPdf);
    // fileListPdf(pdfFileList);
  }, [dataIneFront, ineFrontFileList, dataIneback, ineBackFileList, dataPdf, pdfFileList]);

  return (
    <div className={styles.container}>
      <UploadTitles changeview={changeview} firstView={firstView} secondView={secondView} />
      {typeFlowProp === TypeFlow.INE ?
        <UploadIne getIneFiles={getIneFiles} 
        changeview={changeview}
        setIneFrontFileList={setIneFrontFileList}
        setDataIneFront={setDataIneFront}
        setIneBackFileList = {setIneBackFileList}
        setDataIneBack = {setDataIneBack}
        setPdfFileList={setPdfFileList}
        setSrcPdf ={setSrcPdf }
        reload={reload}
      />
        :
        <UploadAdress setAdressList={setAdressList} reload={reload} />
      }
      <div>
        { changeview ? 
        (
          <div className={styles.container}>
          <div className={styles.options}>
            <div>
              <Button  className={styles.btnUpload} type="primary" > {secondView.bntNextTitle} </Button>
            </div>
            <div className={styles.again}>
                <Button type="link" onClick={reloadFiles}>
                {secondView.linkTitle}
                </Button>
            </div>
          </div>
        </div>
      ) : null
      }
      </div>
    </div>
  );
}

export default UploadBlock;
