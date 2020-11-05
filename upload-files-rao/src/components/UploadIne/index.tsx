import React, { useState, useEffect } from "react";
import { Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import IframeComm from "react-iframe-comm";
import styles from "./index.less";

export interface UploadIneProps {
  getIneFiles?: any;
  changeview?: boolean;
  reload?: boolean;
  setIneFrontFileList?: any;
  setDataIneFront?: any;
  setIneBackFileList?: any;
  setDataIneBack?: any;
  setPdfFileList?: any;
  setSrcPdf?: any;
}

const UploadIne: React.FC<UploadIneProps> = ({
  getIneFiles,
  changeview,
  setIneFrontFileList,
  setDataIneFront,
  setIneBackFileList,
  setDataIneBack,
  setPdfFileList,
  setSrcPdf,
  reload,
}) => {
  //pdf
  const [file, setFile] = useState<any>();

  const attributesPdf = {
    src: file,
    width: "100%",
    height: "100%",
    frameBorder: 0,
  };

  // state to save data INE FRONT -> file  de INE
  const [dataIneFront, setDataFront] = useState<any>();
  //INE FRONT
  const [ineFrontSelected, setIneFront] = useState({ fileList: [] });
  // Change on ine front
  const handleFrontChange = ({ fileList }: any) => {
    const check = fileList.some((element: any) => {
      return element.type === "application/pdf";
    });
    if (check) {
      setPdfSelected({ fileList });
      getIneFiles("pdfFile", true);
      setPdfFileList({ fileList });
    } else {
      setIneFront({ fileList });
      getIneFiles("ineFront", true);
      setIneFrontFileList({ fileList });
    }
  };

  // state to save data INE BACK -> file  de INE BACK
  const [dataIneBack, setDataBack] = useState<any>();
  //INE BACK
  const [ineBackSelected, setIneBack] = useState({ fileList: [] });
  // Change on ine front
  const handleBackChange = ({ fileList }: any) => {
    const check = fileList.some((element) => {
      return element.type === "application/pdf";
    });
    if (check) {
      setPdfSelected({ fileList });
      getIneFiles("pdfFile", true);
      setPdfFileList({ fileList });
    } else {
      setIneBack({ fileList });
      getIneFiles("ineBack", true);
      setIneBackFileList({ fileList });
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

  useEffect(() => {}, [changeview]);

  useEffect(() => {
    if (ineFrontSelected.fileList.length < 1) {
      getIneFiles("ineFront", false);
    }
  }, [ineFrontSelected]);

  useEffect(() => {
    if (ineBackSelected.fileList.length < 1) {
      getIneFiles("ineBack", false);
    }
  }, [ineBackSelected]);

  useEffect(() => {
    if (ineFrontSelected.fileList.length === 0) {
      setDataIneFront("");
    } else {
      setDataIneFront(dataIneFront);
    }
  }, [dataIneFront, ineFrontSelected]);

  useEffect(() => {
    if (ineBackSelected.fileList.length === 0) {
      setDataIneBack("");
    } else {
      setDataIneBack(dataIneBack);
    }
  }, [dataIneBack, ineBackSelected]);

  const getUrlDataPdf = () => {
    if (dataIneBack?.includes("data:application/pdf")) {
      setSrcPdf(dataIneBack);
    }
    if (dataIneFront?.includes("data:application/pdf")) {
      setSrcPdf(dataIneFront);
    }
  };

  useEffect(() => {
    getUrlDataPdf();
  }, [dataIneFront, dataIneBack]);

  useEffect(() => {
    if (reload) {
      setIneFront({ fileList: [] });
      setIneBack({ fileList: [] });
      setPdfSelected({ fileList: [] });
      getIneFiles("pdfFile", false);
    }
  }, [reload]);

  return (
    <div>
      {inePdfSelected.fileList.length === 1 ? (
        <div className={styles.uploadPdf}>
          <div className={styles.pdf}>
            <IframeComm attributes={attributesPdf} />
          </div>
          <div className={styles.pdfName}>
            {inePdfSelected.fileList[0].name}
          </div>
        </div>
      ) : (
        <div className={changeview ? styles.uploadContainerChange : null}>
          <div className={styles.firtsUpload}>
            <div className={styles.title}>
              Sube la parte delantera de tu INE/IFE (jpg, png o pdf).{" "}
            </div>
            <div>
              <Upload
                accept=".pdf, .png, .jpg"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={ineFrontSelected.fileList}
                onPreview={handlePreview}
                onChange={handleFrontChange}
                beforeUpload={(file) => {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    let stringData = String(e.target?.result);
                    setFile(stringData);
                    setDataFront(stringData);
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
            <div className={styles.title}>
              Sube la parte trasera de tu INE/IFE (jpg, png o pdf).
            </div>
            <div>
              <Upload
                accept=".pdf, .png, .jpg"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={ineBackSelected.fileList}
                onPreview={handlePreview}
                onChange={handleBackChange}
                beforeUpload={(file) => {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    let stringData = String(e.target?.result);
                    setFile(stringData);
                    setDataBack(stringData);
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
      )}
    </div>
  );
};

export default UploadIne;
