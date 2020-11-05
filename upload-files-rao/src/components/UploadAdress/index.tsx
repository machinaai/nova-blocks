import React, { useState, useEffect } from "react";
import IframeComm from "react-iframe-comm";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./index.less";

export interface UploadAdressProps {
  setAdressList?: any;
  resetFiles?: boolean;
  reload?: boolean;
}

const UploadAdress: React.FC<UploadAdressProps> = ({
  setAdressList,
  resetFiles,
  reload,
}) => {
  const [filesSelected, setFilesSelected] = useState({ fileList: [] });

  let typeFile: any;

  //pdf
  const [file, setFile] = useState<any>();

  const attributesPdf = {
    src: file,
    width: "100%",
    height: "100%",
    frameBorder: 0,
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Selecciona</div>
    </div>
  );

  const handleChange = ({ fileList }: any) => {
    setFilesSelected({ fileList });
    setAdressList({ fileList });
  };

  const progressFunction = () => {
    filesSelected?.fileList.forEach((element) => {
      if (element.type === "application/pdf") {
        typeFile = "pdf";
      }
    });
  };
  progressFunction();

  useEffect(() => {}, [filesSelected]);

  useEffect(() => {
    if (resetFiles) {
      setFilesSelected({ fileList: [] });
    }
  }, [resetFiles]);

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

  if (reload) {
    filesSelected.fileList = [];
    typeFile = undefined;
  }

  return (
    <div>
      <div className={styles.title}>
        {filesSelected.fileList.length === 1
          ? null
          : "Sube tu comprobante de domicilio (jpg, png o pdf)."}
      </div>
      <div>
        {typeFile ? (
          <div className={styles.uploadPdf}>
            <div className={styles.pdf}>
              <IframeComm attributes={attributesPdf} />
            </div>
            <div className={styles.pdfName}>
              {filesSelected.fileList[0].name}
            </div>
          </div>
        ) : (
          <div>
            <Upload
              className={styles.uploadContainer}
              accept=".pdf, .png, .jpg"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={filesSelected.fileList}
              onPreview={preview}
              onChange={handleChange}
              beforeUpload={(file) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                  let stringData = String(e.target?.result);
                  setFile(stringData);
                };
                reader.readAsDataURL(file);
                return false;
              }}
            >
              {filesSelected.fileList.length === 1 ? null : uploadButton}
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
