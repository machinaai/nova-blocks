import React, { useState, useEffect } from "react";
import { Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./index.less";
import { useIntl } from 'umi';
import {convertBase64, convertType} from '../../helpers/convertBase64';

export interface UploadIneProps {
  reload?: boolean;
  getFilesIne?: any,
  getDataFilesIne?: any,
  setChangeView?: any;
}

const UploadIne: React.FC<UploadIneProps> = ({
  reload,
  getFilesIne,
  getDataFilesIne,
  setChangeView,
}) => {
  // State to save data base 64 to src iframe
  const [file, setFile] = useState<any>();
  // variable to save attribute to IframeComm
  const attributes = {
    src: file,
    width: "100%",
    height: "100%",
    frameBorder: 0,
  };
  // State to save object of File List to upload on Ine front and Ine back or Pdf
  const [fileListIne, setFileListIne] = useState({fileInePdf:{ fileList: []}, fileIneFront:{ fileList: []}, fileIneBack:{ fileList: []}});
  /**
   * Function to get base 64 of upload component 
   * @param stringData string data on base 64
   * @param typeUpload type of upload: front, back
   */
  const getBase64 = (stringData : string, typeUpload: string) => {
    let isPdf = stringData.includes('data:image') ? false : true;
    let dataConverted: string | undefined;
    if(isPdf) {
      setFile(stringData);
      dataConverted = convertBase64(stringData);
      dataConverted ? setBase64FileList({base64IneFront: '', base64IneBack: '', base64InePdf: dataConverted}) : null;
    } else if(typeUpload === 'front') {
      dataConverted = convertBase64(stringData);
      dataConverted ? setBase64FileList({...base64FileList, base64IneFront: dataConverted}) : null;
    } else {
      dataConverted = convertBase64(stringData);
      dataConverted ? setBase64FileList({...base64FileList, base64IneBack: dataConverted}) : null;
    }
  }
  /**
   * State to save base 64 data of files selected
   */
  const [base64FileList, setBase64FileList] = useState({base64IneFront: '', base64IneBack: '', base64InePdf: ''});
  /**
   * State to save type files
   */
  const [typeFileList, setTypeFileList] = useState({typeIneFront: '', typeIneBack: '', typeInePdf: 'pdf'});
  /**
   * Function onChange to Ine Front Upload
   * @param fileList array of files selected 
   */
  const handleFrontChange = ({ fileList }: any) => {
    const check = fileList.some((element: any) => {
      let typeFile = convertType(element);
      setTypeFileList({...typeFileList, typeIneFront: typeFile});
      return element.type === "application/pdf";
    });
    if (check) {
      setFileListIne({ fileIneFront:{ fileList: []}, fileIneBack:{ fileList: []}, fileInePdf:{fileList}});
    } else {
      setFileListIne({...fileListIne, fileIneFront:{fileList}});
    }
  };
  // variable to use UseIntl 
 const internationalization = useIntl();
  // state to change view 
 const [changeview, setView] = useState<boolean>(false);

 useEffect(() => {
   if(fileListIne) {
    if(fileListIne.fileIneBack.fileList.length === 1 && fileListIne.fileIneFront.fileList.length === 1 ){
      setView(true);
      setChangeView(true);
    } else if(fileListIne.fileInePdf.fileList.length === 1) {
      setView(true);
      setChangeView(true);
    } else {
      setView(false);
      setChangeView(false);
    }
   }
 }, [fileListIne]);
  /**
   * Function onChange to Ine Back Upload
   * @param fileList array of files selected 
  */
  const handleBackChange = ({ fileList }: any) => {
    const check = fileList.some((element:any) => {
      let typeFile = convertType(element);
      setTypeFileList({...typeFileList, typeIneBack: typeFile});
      return element.type === "application/pdf";
    });
    if (check) {
      setFileListIne({ fileIneFront:{ fileList: []}, fileIneBack:{ fileList: []}, fileInePdf:{fileList}});
     } else {
      setFileListIne({...fileListIne, fileIneBack:{fileList}});
    }
  };
 // variable to save Upload Button component
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{internationalization.formatMessage({ id: `upload.files.upload.btn`})}</div>
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
    if(fileListIne && base64FileList) {
      getFilesIne(fileListIne);
      getDataFilesIne(base64FileList);
    }
  }, [fileListIne, base64FileList]);

  useEffect(() => {
    if (reload) {
      setFileListIne({ fileIneFront:{ fileList: []}, fileIneBack:{ fileList: []}, fileInePdf:{fileList: []}});
      setBase64FileList({base64IneFront: '', base64IneBack: '', base64InePdf: ''})
      setTypeFileList({typeIneFront: '', typeIneBack: '', typeInePdf: 'pdf'});
    } 
  }, [reload]);

  return (
    <div>
      {fileListIne.fileInePdf.fileList.length === 1 ? (
        <div className={styles.uploadPdf}>
          <div className={styles.pdf}>
          <embed src={attributes.src} type="application/pdf" width="100%" height="100%" />
          </div>
          <div className={styles.pdfName}>
            {fileListIne.fileInePdf.fileList[0].name}
          </div>
        </div>
      ) : (
        <div className={changeview ? styles.uploadContainerChange : null}>
          <div className={styles.firtsUpload}>
            <div className={styles.title}>
              {internationalization.formatMessage({ id: `upload.files.ine.front`})}
            </div>
            <div>
              <Upload
                accept=".pdf, .png, .jpg"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileListIne.fileIneFront.fileList}
                onPreview={handlePreview}
                onChange={handleFrontChange}
                beforeUpload={(file) => {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    let stringData = String(e.target?.result);
                    getBase64(stringData, 'front');
                  };
                  reader.readAsDataURL(file);
                  return false;
                }}
              >
                {fileListIne.fileIneFront.fileList.length === 1 ? null : uploadButton}
              </Upload>
            </div>
          </div>
          <div className={styles.secondUpload}>
            <div className={styles.title}>
            {internationalization.formatMessage({ id: `upload.files.ine.back`})}
            </div>
            <div>
              <Upload
                accept=".pdf, .png, .jpg"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileListIne.fileIneBack.fileList}
                onPreview={handlePreview}
                onChange={handleBackChange}
                beforeUpload={(file) => {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    let stringData = String(e.target?.result);
                    getBase64(stringData, 'back');
                  };
                  reader.readAsDataURL(file);
                  return false;
                }}
              >
                 {fileListIne.fileIneBack.fileList.length === 1 ? null : uploadButton}
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
      )}
    </div>
  );
};

export default UploadIne;
