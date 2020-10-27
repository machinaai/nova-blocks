import React, { useState, useEffect } from 'react';
import { FirstViewInterface, SecondViewInterface } from '../../interfaces/interface';
import IframeComm from 'react-iframe-comm';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.less';

export interface UploadAdressProps {
    firstView?: FirstViewInterface;
    secondView?: SecondViewInterface;
}

const UploadAdress: React.FC<UploadAdressProps> = ({ firstView }) => {
    
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const [filesSelected, setFilesSelected] = useState({ fileList: [] });

    let typeFile: any;

    //pdf
    const [ejemplo, setEjemplo] = useState<any>()

    const attributesPdf = {
        src: ejemplo,
        width: "100%",
        height: "100%",
        frameBorder: 0,
    };

    const handleChange = ({ fileList }: any) => {
        setFilesSelected({ fileList });
    };

    const handlePreview = async (file: any) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    const progressFunction = () => {
        filesSelected?.fileList.forEach((element) => {
            if (element.type === "application/pdf") {
                typeFile = "pdf";
            }
        });
    };
    progressFunction();

    useEffect(() => {
        console.log(filesSelected, 'filesss despues del click')
    }, [filesSelected]);

    const [change, setChange] = useState({
        previewVisible: false,
        previewImage: "",
        fileList: [],
      });

      const handleCancel = () => {
        setChange({ ...change, previewVisible: false });
      };

      const preview = async (file: any) => {
        setChange({
          ...change,
          previewImage: file.thumbUrl || file.preview,
          previewVisible: true,
        });
      }
      

    return (
        <div>
            <div className={styles.title}>
                Sube tu comprobante de domicilio (jpg, png o pdf).
            </div>
            <div>
                {
                    typeFile ?
                        (
                            <div className={styles.uploadPdf}>
                                <div className={styles.pdf}>
                                    <IframeComm attributes={attributesPdf} />
                                </div>
                                <div className={styles.pdfName}>
                                    {filesSelected.fileList[0].name}
                                </div>
                            </div>
                        ) :
                        <div className={styles.upload}>
                        <Upload
                            accept=".pdf, .png, .jpg"
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={filesSelected.fileList}
                            onPreview={preview}
                            onChange={handleChange}
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
                            {filesSelected.fileList.length === 1 ? null : uploadButton}
                        </Upload>
                        <Modal
                        visible={change.previewVisible}
                        footer={null}
                        onCancel={handleCancel}
                        >
                        <img
                            alt="preview"
                            style={{ width: "100%" }}
                            src={change.previewImage}
                        />
                         </Modal>
                        </div>
                }
            </div>
        </div>

    );
}

export default UploadAdress;