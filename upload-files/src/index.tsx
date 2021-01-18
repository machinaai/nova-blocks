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
    firstView,
    secondView,
    action,
  }
) => {
  /**
   * Variable to instantiate useFixture Hook
  */
  let objFixture = useFixture()
  if (!firstView) {
    firstView = objFixture.UploadFirstView;
    secondView = objFixture.UploadSecondView;
  }
  // variable to use UseIntl 
  const internationalization = useIntl();

  const reloadFiles = (e: any) => {
    setReload(true);
  };
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

  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    setReload(false);
    setChangeView(false);
  },[reload]);

  console.table({ filesSelectedIne, dataFilesIne });
  console.table({filesSelectedAdress,dataFilesAdress});
  
  return (
    <div className={styles.container}>
      <UploadTitles changeview={changeview} firstView={firstView} secondView={secondView} />
      {action ? <div className={styles.containerSpin}>
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
              <Button className={styles.btnUpload} type="primary" onClick={() => action}> {secondView.bntNextTitle} </Button>
            </div>
            <div className={styles.again}>
              <Button type="link"
              onClick={reloadFiles}
              >
                {secondView.linkTitle}
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
