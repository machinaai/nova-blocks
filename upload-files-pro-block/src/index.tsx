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
  phoneNumber= UploadFixture.phoneNumber,
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
  const [objectServiceIne, createObjIne] = useState<any>({ineFront:{}, ineBack:{}, inePdf:{}});
  /**
  * State to create object request Adress
  */
 const [objectServiceAdress, createObjAdress] = useState<any>({imageAdress: {} , pdfAdress: {}});

  useEffect(() => {
    if(dataIneComponent && dataIneComponent.base64InePdf) {
     createObjIne({ineFront:{}, ineBack:{}, inePdf:{
      type: 'type',
      phone: phoneNumber,
      image: dataIneComponent.base64InePdf,
     }})
    } else if((dataIneComponent && dataIneComponent.base64IneFront) && (dataIneComponent && dataIneComponent.base64IneBack)) {
      createObjIne({...objectServiceIne, 
        ineFront:{
        type: 'type',
        phone: phoneNumber,
        image: dataIneComponent.base64IneFront,
        },
        ineBack:{
          type: 'type',
          phone: phoneNumber,
          image: dataIneComponent.base64IneBack,
         }
      })
    } else {
      createObjIne({ineFront:{}, ineBack:{}, inePdf:{}});
      setError(false);
    }
  }, [dataIneComponent]);

  useEffect(() => {
    if(dataAdressComponent && dataAdressComponent.base64ImagePdf) {
      createObjAdress({imageAdress:{}, pdfAdress:{
      type: 'type',
      phone: phoneNumber,
      image: dataAdressComponent.base64ImagePdf,
     }})
    } else if(dataAdressComponent && dataAdressComponent.base64ImageAdress) {
      createObjAdress({pdfAdress:{}, 
        imageAdress:{
        type: 'type',
        phone: phoneNumber,
        image: dataAdressComponent.base64ImageAdress,
        },
      }) 
    } else {
      createObjAdress({imageAdress:{}, pdfAdress:{}});
      setError(false);
    }
  }, [dataAdressComponent]);

  /**
  * Function to dispatch request model.
  */
  const action = () => {
    let typePdf = objectServiceIne.inePdf.image ? true : false;
    if(typeFlowProp === TypeFlow.INE && typePdf) {
      dispatch({
        type: 'requestModel/pdfData',
        payload: objectServiceIne.inePdf,
      });
    } else if(typeFlowProp === TypeFlow.INE && !typePdf) {
      let {ineFront, ineBack} = objectServiceIne;
      dispatch({
        type: 'requestModel/ine',
        payload: {ineFront, ineBack, onSetUserData},
      });
    }
    // }else if (typeFlowProp === TypeFlow.INE) {
    //     console.log('peticiones a adress');
    //   }
    // }
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
