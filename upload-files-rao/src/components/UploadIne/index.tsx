import React, {useState} from 'react'
import { Modal, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export interface UploadIneProps {
}
 
const UploadIne: React.FC<UploadIneProps> = () => {

    //pdf
    const [ejemplo, setEjemplo] = useState<any>()

    //INE FRONT
    const [ineFrontSelected, setIneFront] = useState({ fileList: [] });
    // Change on ine front 
     const handleFrontChange = ({ fileList }: any) => {
        setIneFront({ fileList });
    };

    //INE FRONT
    const [ineBackSelected, setIneBack] = useState({ fileList: [] });
    // Change on ine front 
    const handleBackChange = ({ fileList }: any) => {
            setIneBack({ fileList });
    };

    
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
    });
  
    const handlePreview = async (file: any) => {
      setChange({
        ...change,
        previewImage: file.thumbUrl || file.preview,
        previewVisible: true,
      });
    };
  
    const handleCancel = () => {
      setChange({ ...change, previewVisible: false });
    };

    return (
        <div>
             <div>
                 <div>
                    Sube la parte delantera de tu INE/IFE (jpg, png o pdf).
                 </div>
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

             <div>
                 <div>
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
                 </div>
             </div>
        </div>

    );
}
 
export default UploadIne;