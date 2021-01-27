import React, { useState, useEffect, useCallback } from 'react';
import UploadAdress from './components/UploadAdress';
import UploadIne from './components/UploadIne';
import { UploadBlockProps } from './interfaces/interface';
import { UploadFixture } from './fixtures/fixture';
import { TypeFlow } from './enum/emun';
import UploadTitles from './components/UploadTitles';
import { Button, Spin } from 'antd';
import styles from './index.less';
import { useFixture } from './hooks/useFixture';
import { useIntl } from 'umi';


const UploadBlock: React.FC<UploadBlockProps> = (
  {
    typeFlowProp = UploadFixture.typeFlow,
    action,
    getDataIne,
    getDataAdress,
  }
) => {
  /**
   * Variable to instantiate useFixture Hook
  */
  let objFixture = useFixture(typeFlowProp)
 

  let firstView = objFixture.UploadFirstView;
  let secondView = objFixture.UploadSecondView;
  
  // variable to use UseIntl 
  const internationalization = useIntl();
  /**
   * State to get fileList Ine Selected
  */
  const [filesSelectedIne, getFilesIne] = useState();
  /**
   * State to get data of files selected
  */
  const [dataFilesIne, getDataFilesIne] = useState();
  /**
   * State to get fileList selected on Adress Component 
  */
 const [filesSelectedAdress, getFilesAdress] = useState();
 /**
  * State to get data of files selected on Adress Component 
 */
 const [dataFilesAdress, getDataFilesAdress] = useState();
  /**
  * State to change views on UploadTitles and Buttons
  */
  const [changeview, setChangeView] = useState<boolean>(false);
  /**
  * State to show Spin
  */
  const [showSpin, setSpin] = useState<boolean>(false);
  /**
   * State to manage reload
  */
  const [reload, setReload] = useState<boolean>(false);
  /**
   * Function to reaload files again
  */
  const reloadFiles = (e: any) => {
    setReload(true);
    setSpin(false)
  };

  useEffect(() => {
    setReload(false);
    setChangeView(false);
  },[reload]);

  useEffect(() => {
    getDataIne(dataFilesIne);
    getDataAdress(dataFilesAdress);
  },[dataFilesIne, dataFilesAdress]);
  
  return (
    <div className={styles.container}>
      <UploadTitles changeview={changeview} firstView={firstView} secondView={secondView} />
      {showSpin ? <div className={styles.containerSpin}>
          <Spin tip={internationalization.formatMessage({ id: 'upload.files.spin.title' })}/>
      </div> :
      typeFlowProp === TypeFlow.INE ? (
        <UploadIne
          reload={reload}
          getFilesIne={getFilesIne}
          getDataFilesIne={getDataFilesIne}
          setChangeView={setChangeView}
        />
      ) : (
        <UploadAdress
        reload={reload}
        getFilesAdress={getFilesAdress}
        getDataFilesAdress={ getDataFilesAdress}
        setChangeView={setChangeView}
        />
      )}
      <div>
        { changeview ? 
        <div className={styles.container}>
          <div className={styles.options}>
            <div>
              <Button className={styles.btnUpload} type="primary" onClick={() => {action && action(); setSpin(true)}} disabled = {showSpin ? true : false}> {secondView?.bntNextTitle} </Button>
            </div>
            <div className={styles.again}>
              <Button type="link"
              onClick={reloadFiles}
              >
                {secondView?.linkTitle}
              </Button>
            </div>
          </div>
        </div>
        : null
      }
      </div>
    </div>
  );
}

export default UploadBlock;
