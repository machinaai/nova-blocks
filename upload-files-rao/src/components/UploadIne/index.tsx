import React, { useState, useEffect } from 'react'
import { Modal, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import IframeComm from 'react-iframe-comm';
import styles from './index.less';

export interface UploadIneProps {
  getIneFiles?: any;
  changeview?: boolean;
}

const UploadIne: React.FC<UploadIneProps> = ({ getIneFiles, changeview }) => {

  //pdf
  const [ejemplo, setEjemplo] = useState<any>();

  const attributesPdf = {
    src: ejemplo,
    width: "100%",
    height: "100%",
    frameBorder: 0,
  };

  //INE FRONT
  const [ineFrontSelected, setIneFront] = useState({ fileList: [] });
  // Change on ine front 
  const handleFrontChange = ({ fileList }: any) => {
    if (fileList[0].type === 'application/pdf') {
      setPdfSelected({ fileList });
      getIneFiles('pdfFile', true);
    } else {
      setIneFront({ fileList });
      getIneFiles('ineFront', true);
    }
  };

  //INE BACK
  const [ineBackSelected, setIneBack] = useState({ fileList: [] });
  // Change on ine front 
  const handleBackChange = ({ fileList }: any) => {
    if (fileList[0].type === 'application/pdf') {
      setPdfSelected({ fileList });
      getIneFiles('pdfFile', true);
    } else {
      setIneBack({ fileList });
      getIneFiles('ineBack', true)
    }
  };

  //State to pdf files
  const [inePdfSelected, setPdfSelected] = useState({ fileList: [] });

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const [change, setChange] = useState({
    previewVisible: false,
    previewImage: "",
    fileList: [],
    previewTitle: "",
  });

  const handlePreview = async (file: any) => {
    setChange({
      ...change,
      previewImage: file.thumbUrl || file.preview,
      previewVisible: true,
      previewTitle: file.name,
    });
  };

  const handleCancel = () => {
    setChange({ ...change, previewVisible: false });
  };

  useEffect(() => {
  }, [changeview]);

  console.log(changeview, 'cambiioooooooo')
  return (
    <div>
      {
        inePdfSelected.fileList.length === 1 ?
          (
            <div className={styles.uploadPdf}>
              <div className={styles.pdf}>
                <IframeComm attributes={attributesPdf} />
              </div>
              <div className={styles.pdfName}>
                {inePdfSelected.fileList[0].name}
              </div>
            </div>
          )
          :
          (
            <div className={changeview ? styles.uploadContainerChange : null}>
              <div className={styles.firtsUpload}>
                <div className={styles.title}>Sube la parte delantera de tu INE/IFE (jpg, png o pdf). </div>
                <div>
                  <Upload
                    accept=".pdf, .png, .jpg"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={ineFrontSelected.fileList}
                    onPreview={handlePreview}
                    onChange={handleFrontChange}
                    beforeUpload={file => {
                      const reader = new FileReader();
                      reader.onload = e => {
                        let stringData = String(e.target?.result)
                        setEjemplo(stringData);
                      };
                      reader.readAsDataURL(file);
                      return false;
                    }}
                  >
                    {ineFrontSelected.fileList.length === 1 ? null : uploadButton}
                  </Upload>
                </div>
              </div>
              <div className={styles.secondUpload}>
                <div className={styles.title}>Sube la parte trasera de tu INE/IFE (jpg, png o pdf).</div>
                <div>
                  <Upload
                    accept=".pdf, .png, .jpg"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={ineBackSelected.fileList}
                    onPreview={handlePreview}
                    onChange={handleBackChange}
                    beforeUpload={file => {
                      const reader = new FileReader();
                      reader.onload = e => {
                        let stringData = String(e.target?.result)
                        setEjemplo(stringData);
                      };
                      reader.readAsDataURL(file);
                      return false;
                    }}
                  >
                    {ineBackSelected.fileList.length === 1 ? null : uploadButton}
                  </Upload>
                  <Modal
                    visible={change.previewVisible}
                    footer={null}
                    onCancel={handleCancel}
                    title={change.previewTitle}
                  >
                    <img
                      alt="preview"
                      style={{ width: "100%" }}
                      src={change.previewImage}
                    />
                  </Modal>
                </div>
              </div>
            </div>
          )
      }
    </div>
  );
}

export default UploadIne;