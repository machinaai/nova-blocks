import React, { useState, useEffect } from 'react';
import { Upload, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { UploadFixture } from './fixtures/fixture';
import { UploadFieldsInterface } from './interfaces/interface';
import styles from './index.less';
import { typeFlow } from './enum/emun';

export interface UploadInfoProps {
  typeFlowProp: typeFlow;
  firstHeaderTitle?: string,
  firstTitle?:string,
  firstSubtitle?:string,
  detailsTitle?: string,
  detailsElement1?: string,
  detailsElement2?: string,
  bntUploadTitle?: string,
  secondHeaderTitle?: string,
  secondTitle?:string,
  secondSubtitle?:string,
  bntNextTitle?: string,
  linkTitle?: string,
 }

const UploadInfo: React.FC<UploadInfoProps> = (
  {
    typeFlowProp = UploadFixture.typeFlow,
    firstHeaderTitle = UploadFixture.UploadFirstView.headerTitle,
    firstTitle = UploadFixture.UploadFirstView.title,
    firstSubtitle = UploadFixture.UploadFirstView.subtitle,
    detailsTitle = UploadFixture.UploadFirstView.details.title,
    detailsElement1 = UploadFixture.UploadFirstView.details.element1,
    detailsElement2 = UploadFixture.UploadFirstView.details.element2,
    bntUploadTitle = UploadFixture.UploadFirstView.btnTitle,
    secondHeaderTitle = UploadFixture.UploadSecondView.headerTitle,
    secondTitle = UploadFixture.UploadSecondView.title,
    secondSubtitle = UploadFixture.UploadSecondView.subtitle,
    bntNextTitle= UploadFixture.UploadSecondView.options.btnTitle,
    linkTitle = UploadFixture.UploadSecondView.options.linkTitle,
  }
  ) => {
  
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
      if (element.type === "application/pdf") {
        console.log("Es un PDF: ");
        typeFile = "pdf";
      }
    });
  };

  progressFunction();

  return (
    <div>
      {filesSelected.fileList.length >= 1 ? (
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.optional}>{secondHeaderTitle}</div>
            <div className={styles.title}>{secondTitle}</div>
            <div className={styles.subtitle}>
            {secondSubtitle}
            </div>
          </div>
        </div>
      ) : (
          <div className={styles.firtsView}>
            <div className={styles.header}>
              <div className={styles.optional}>{firstHeaderTitle}</div>
              <div className={styles.title}>{firstTitle}</div>
              <div className={styles.subtitle}>
                {firstSubtitle}
              </div>
            </div>
            <div className={styles.details}>
            <div className={styles.secondHeader}>{detailsTitle}</div>
              <div className={styles.list}>
                <ul>
                  <li>{detailsElement1}</li>
                  <li>{detailsElement2}</li>
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
              <object data={ejemplo} height="100%"></object>  
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
          multiple = {typeFlowProp === typeFlow.INE ?  true : false}
          beforeUpload={file => {
            const reader = new FileReader();
            reader.onload = e => {
              let stringData = String(e.target?.result)
              setEjemplo(stringData);
            };
            // // reader.readAsText(file);
            reader.readAsDataURL(file);
            return false;
          }}
          >
          {typeFlowProp === typeFlow.INE ? 
            filesSelected.fileList.length >= 2 ? null :
              filesSelected.fileList.length === 1 ? (
                  <div className={styles.upload}>
                    <div>
                      <PlusOutlined />
                    </div>
                    <div>{UploadFixture.UploadStyle.title}</div>
                  </div>
                )
              :
              (
                <div className={styles.uploadBtn}>
                  <Button className={styles.btnUpload} size="large">
                    {bntUploadTitle}
                  </Button>
                </div>
              )
           : 
           typeFlowProp === typeFlow.ADDRESS ?  filesSelected.fileList.length === 1 ? null 
           : 
           (
            <div className={styles.uploadBtn}>
              <Button className={styles.btnUpload} size="large">
                {bntUploadTitle}
              </Button>
            </div>
          )
            : null
          }

        </Upload>
        }
      </div>
      {filesSelected.fileList.length >= 1 ? (
        <div className={styles.container}>
          <div className={styles.options}>
            <div>
              <Button className={styles.btnUpload}> {bntNextTitle} </Button>
            </div>
            <div className={styles.again}>{linkTitle}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UploadInfo;