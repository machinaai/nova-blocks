import React, { useState, useEffect } from 'react';
import { Upload, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.less';

export interface UploadInfoProps { }

const UploadInfo: React.FC<UploadInfoProps> = () => {

  let statusProgress: any;
  let showPreviewImage;

  let propsUpload = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    multiple: true,
    className: "upload-list-inline",
  };

  console.log('porcentajes en props', propsUpload)
  const [filesSelected, setFilesSelected] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [],
  });

  const handleChange = ({ fileList }) => {
    setFilesSelected({ ...filesSelected, fileList });
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

  useEffect(() => {
    console.log(filesSelected, 'file slect en papá');
  }, [filesSelected]);

  const progressFunction = () => {
    filesSelected?.fileList.forEach((element) => statusProgress = element.percent);
   };
   progressFunction();

     
  console.log('progresssss')
   
   console.log(statusProgress, 'status array')
  
  return (
    <div>
      {filesSelected.fileList.length >= 1 ? (
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.optional}>INE/IFE</div>
            <div className={styles.title}>Valida tu documento</div>
            <div className={styles.subtitle}>
              Revisa que tus datos estén claros y legibles y que no tengan reflejos de luz ni sombra.
            </div>
          </div>
        </div>
      ) : (
          <div className={styles.firtsView}>
            <div className={styles.header}>
              <div className={styles.optional}>INE/IFE</div>
              <div className={styles.title}>Subir documento</div>
              <div className={styles.subtitle}>
                Por favor selecciona una foto de tu INE/IFE por el frente y otra por el reverso,
                revisa que tus datos estén claros y legibles y que no tengan reflejos de luz.
          </div>
            </div>
            <div className={styles.details}>
              <div className={styles.secondHeader}>Recomendaciones:</div>
              <div className={styles.list}>
                <ul>
                  <li>Revisa que tus datos estén claros y legibles.</li>
                  <li>Evita reflejos de luz y sombra.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
       <div>
        <Upload {...propsUpload} onChange={handleChange} onPreview={handlePreview} listType="picture" withCredentials={true}>
          {filesSelected.fileList.length >= 2 ? null :
            filesSelected.fileList.length === 1 ? (
              <div className={styles.upload}>
                <div>
                  <PlusOutlined />
                </div>
                <div>Cargar</div>
              </div>
            )
              :
              (
                <div className={styles.uploadBtn}>
                  <Button className={styles.btnUpload} size="large">
                    Subir documento
                  </Button>
                </div>
              )}
        </Upload>
      </div>

      {filesSelected.fileList.length >= 1 ? (
        <div className={styles.container}>
          <div className={styles.options}>
            <div>
              <Button className={styles.btnUpload}> Continuar </Button>
            </div>
            <div className={styles.again}>Subir documento nuevamente</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UploadInfo;


