import React, {useState, useEffect} from 'react';
import { connect} from 'umi';
import UploadBlock from './block/upload-block';
import {UploadFilesProps} from './interfaces/interface';
import { useDispatch } from 'umi';
import { ModelType, StateModel } from './models/model';
import { TypeFlow } from './block/upload-block/enum/emun';
import { UploadFixture } from './fixtures/fixture';
import { Alert } from 'antd';

const UploadFiles: React.FC<UploadFilesProps> = ({
  phoneUser= UploadFixture.phoneUser,
  typeFlowProp = UploadFixture.typeFlow,
  onComplete,
  onSetUserData,
  status,
  dataUpload,
  flagFlowComplete
}) => {
  const dispatch = useDispatch();
  /**
   * State to save data to request INE
  */
  const [dataIneComponent, getDataIne] = useState<any>();
  /**
   * State to save data to request Adress
  */
  const [dataAdressComponent, getDataAdress] = useState<any>();
  /**
  * State to create object request INE
  */
 const [objectServiceFiles, createObjFiles] = useState<any>({frontImage:'', backImage:'', phone: '', inePdf:''});
  /**
  * State to create object request Adress
  */
 const [objectServiceAdress, createObjAdress] = useState<any>({imageAdress: '' , pdfAdress: '', phone: ''});

 useEffect(() => {
  if(dataIneComponent && dataIneComponent.base64InePdf) {
    createObjFiles({frontImage:'', backImage:'', inePdf:dataIneComponent.base64InePdf,phone: phoneUser})
  } else if((dataIneComponent && dataIneComponent.base64IneFront) && (dataIneComponent && dataIneComponent.base64IneBack)) {
    createObjFiles({...objectServiceFiles, 
      frontImage: dataIneComponent.base64IneFront,
      backImage: dataIneComponent.base64IneBack,
      phone: phoneUser
      }
    )
  } else {
    createObjFiles({frontImage:'', backImage:'', inePdf:'', phone:''});
    setError(false);
  }
}, [dataIneComponent]);

  useEffect(() => {
    if(dataAdressComponent && dataAdressComponent.base64ImagePdf) {
      createObjAdress({imageAdress:'', pdfAdress: dataAdressComponent.base64ImagePdf, phone: phoneUser,
     })
    } else if(dataAdressComponent && dataAdressComponent.base64ImageAdress) {
      createObjAdress({pdfAdress:'', 
        imageAdress:dataAdressComponent.base64ImageAdress,
        phone: phoneUser
      }) 
    } else {
      createObjAdress({imageAdress:'', pdfAdress:'', phone: ''});
      setError(false);
    }
  }, [dataAdressComponent]);

  /**
  * Function to dispatch request model.
  */
  const action = () => {
    // let typePdf = objectServiceFiles.inePdf.image ? true : false;
    if(typeFlowProp === TypeFlow.INE) {
      dispatch({
        type: 'requestModel/uploadFileEffect',
        payload:objectServiceFiles,
      });
    } else if (typeFlowProp === TypeFlow.ADDRESS) {
      dispatch({
        type: 'requestModel/uploadAdressEffect',
        payload:objectServiceAdress,
      });
    }
    
  }
  /**
   * Variable to create alert message error
   */
  let alertError: any = (
    <Alert
      message="Error"
      type="error"
      showIcon
      description="Hubo un error en la carga, intenta nuevamente"
    />
  );

  const [error, setError] = useState(false);

  useEffect(() => {
        if(status && status.error) {
          setError(true);
        } else {
          setError(false);
        }      
  }, [status]);

  useEffect(() => {
    return () => {
      dispatch({
        type: 'requestModel/setStatus',
        payload: undefined,
      });
      dispatch({
        type: 'requestModel/setDataUpload',
        payload: {},
      });
    }
  }, []);

  useEffect(() => {
    if (dataUpload && onSetUserData) {
      onSetUserData(dataUpload)
    }
  }, [dataUpload]);

  useEffect(() => {
    if (flagFlowComplete && onComplete) {
      onComplete(flagFlowComplete);
    }
  }, [flagFlowComplete]);

  return (
    <>
      {error ? alertError : null}
      <UploadBlock 
        typeFlowProp={typeFlowProp} 
        getDataIne={getDataIne} 
        getDataAdress={getDataAdress}
        action={action}
        />
    </>
  );
};

export default connect(({ requestModel }: { requestModel: StateModel }) => ({
  flagFlowComplete: requestModel.flowComplete,
  dataUpload: requestModel.dataUpload,
  status: requestModel.status,
}))(UploadFiles);
