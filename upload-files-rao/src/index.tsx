import React, { useState, useEffect } from 'react';
import { Upload, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.less';

export interface UploadInfoProps { }

const UploadInfo: React.FC<UploadInfoProps> = () => {

  let statusProgress: any;
  let showPreviewImage;
  let typeFile: any;

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

  //pdf
  const [ejemplo, setEjemplo] = useState<any>();

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
    filesSelected?.fileList.forEach((element) => {
      (statusProgress = element.percent), console.log("ELEMENT: ", element);
      if (element.type === "application/pdf") {
        console.log("Es un PDF: ");
        typeFile = "pdf";
      }
    });
  };

  progressFunction();


  console.log(ejemplo, 'ejemplooo')
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
        {
           typeFile ?
           
           (
            <div className={styles.uploadPdf}>
              <div className={styles.pdf}>
              <object data={ejemplo} type="application/pdf" height="100%"></object>  
              </div>
              <div className={styles.pdfName}>
                {filesSelected.fileList[0].name}
              </div>
            </div>
           ) 
           
           :

           <Upload {...propsUpload}
         accept=".pdf, .png, .jgp"
          onChange={handleChange}
          onPreview={handlePreview}
          listType="picture"
          beforeUpload={file => {
            const reader = new FileReader();
            reader.onload = e => {
              console.log(e.target);
              let stringData = String(e.target?.result)
              setEjemplo(stringData);
            };
            // reader.readAsText(file);
            let hola = reader.readAsDataURL(file);
            console.log(hola)
            return false;
          }}
          >
          {
         
          filesSelected.fileList.length >= 2 ? null :
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
        }
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


