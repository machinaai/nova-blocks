import React, { useEffect, useState } from 'react';
import { Upload, Modal } from 'antd';
import styles from './index.less';
import { dataFixture } from './fixture/dataFixture';
import { PropsBlock } from './Interface/uploadInterface.interface';

const UploadBlock: React.FC<PropsBlock> = ({ data = dataFixture, heightContainer=236}) => {
  const [state, setState] = useState<any>({
    previewVisible: false,
    previewImage: '',
    fileList: []
  });

  useEffect(() => {
    setState(data);
  }, [data]);

  /**
   * Function to close the modal
   */
  const handleCancel = () => {
    setState({ ...state, previewVisible: false });
  };

/**
 * Function to open each image in the modal.
 * @param file 
 */
  const handlePreview = async (file: any) => {
    setState({
      ...state,
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  return (
    <div className={styles.container} style={{height:heightContainer}}>
      <Upload
        listType="picture-card"
        fileList={state.fileList}
        onPreview={handlePreview}
        className={styles.containerImages}
      >
      </Upload>
      <Modal
        visible={state.previewVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={state.previewImage} />
      </Modal>
    </div>
  )
}
export default UploadBlock;