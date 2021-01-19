import React, { useState, useEffect } from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useIntl } from 'umi';
import {convertBase64} from '../../helpers/convertBase64';
import styles from "./index.less";

export interface UploadAdressProps {
  reload?: boolean;
  getFilesAdress?: any,
  getDataFilesAdress?: any,
  setChangeView?: any;
}

const UploadAdress: React.FC<UploadAdressProps> = ({
  reload,
  getFilesAdress,
  getDataFilesAdress,
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
  // variable to use UseIntl 
 const internationalization = useIntl();
  // variable to save Upload Button component
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{internationalization.formatMessage({ id: `upload.files.upload.btn`})}</div>
    </div>
  );
  // State to save object of File List to upload on adress
  const [fileListAdress, setFileListAdress] = useState({fileImageAdress:{ fileList: []}, filePdfAdress:{ fileList: []}});
 
  /**
   * Function onChange to Adress Upload
   * @param fileList array of files selected 
   */
   const handleChange = ({ fileList }: any) => {
    const check = fileList.some((element: any) => {
      return element.type === "application/pdf";
    });
    if (check) {
      setFileListAdress({fileImageAdress:{ fileList: []}, filePdfAdress:{fileList}});
    } else {
      setFileListAdress({fileImageAdress:{ fileList}, filePdfAdress:{fileList: []}});
    }
  };

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
      dataConverted ? setBase64FileList({base64ImageAdress: '', base64ImagePdf: dataConverted}) : null;
    } else {
      dataConverted = convertBase64(stringData);
      dataConverted ? setBase64FileList({base64ImageAdress: dataConverted, base64ImagePdf: ''}) : null;
    } 
  }
  /**
   * State to save base 64 data of files selected 
   */
  const [base64FileList, setBase64FileList] = useState({base64ImageAdress: '', base64ImagePdf: ''});

  const [change, setChange] = useState({
    previewVisible: false,
    previewImage: "",
    fileList: [],
    previewTitle: "",
  });

  const handleCancel = () => {
    setChange({ ...change, previewVisible: false });
  };

  const preview = async (file: any) => {
    setChange({
      ...change,
      previewImage: file.thumbUrl || file.preview,
      previewVisible: true,
      previewTitle: file.name,
    });
  };
  // state to change view 
 const [changeview, setView] = useState<boolean>(false);

  useEffect(() => {
    if(fileListAdress) {
     if(fileListAdress.fileImageAdress.fileList.length === 1 || fileListAdress.filePdfAdress.fileList.length === 1 ){
       setView(true);
       setChangeView(true);
     } else {
       setView(false);
       setChangeView(false);
     }
    }
  }, [fileListAdress]);

  useEffect(() => {
    if(fileListAdress && base64FileList) {
      getFilesAdress(fileListAdress);
      getDataFilesAdress(base64FileList);
    }
  }, [fileListAdress, base64FileList]);

  useEffect(() => {
    if (reload) {
      setFileListAdress({fileImageAdress:{ fileList: []}, filePdfAdress:{ fileList: []}});
      setBase64FileList({base64ImageAdress: '', base64ImagePdf: ''})
    } 
  }, [reload]);

  return (
    <div>
      <div className={styles.title}>
        {changeview
          ? null
          : internationalization.formatMessage({ id: `upload.files.adress`})}
      </div>
      <div>
        {fileListAdress.filePdfAdress.fileList.length === 1 ? (
          <div className={styles.uploadPdf}>
            <div className={styles.pdf}>
            <embed src={attributes.src} type="application/pdf" width="100%" height="100%" />
            </div>
            <div className={styles.pdfName}>
              {fileListAdress.filePdfAdress.fileList[0].name}
            </div>
          </div>
        ) : (
          <div>
            <Upload
              className={styles.uploadContainer}
              accept=".pdf, .png, .jpg"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileListAdress.fileImageAdress.fileList}
              onPreview={preview}
              onChange={handleChange}
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
              {fileListAdress.fileImageAdress.fileList.length === 1 ? null : uploadButton}
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
        )}
      </div>
    </div>
  );
};

export default UploadAdress;
