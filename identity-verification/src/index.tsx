import React, { useEffect } from 'react';
import { useDispatch, connect } from 'umi';

import { FlowN2N4Enum } from './enums';
import VerifyData from './components/Verify-data';

import UpdateAdress from './components/update-address';
import VerifyIdentity from './components/verify-Identity';
import { StateModel } from './models/model';

// helper
import { dataUserTransform } from './helpers/dataUserTransform.helper';
import { transformData } from './helpers/transformData.helper';
import { transformDataVideoConference } from './helpers/transformDataVideo.helper';
import { transformDataManually } from './helpers/transformDataManually.helper';
//fixtures 
import { stagesFixture } from './fixtures/stages.fixture';

/**
 * Interface IdentityVerificationProps
 *
 * @interface IdentityVerificationProps
 */
interface IdentityVerificationProps {
  typeFlow?: StateModel['typeFlow'];
  status?: StateModel['status'];
  flagFlowComplete?: StateModel['flowComplete'];
  subFlowStatus?: StateModel['subFlowComplete'];
  step?: StateModel['step'];
  onComplete?: Function;
  onTypeFlow?: FlowN2N4Enum;
  userData?: StateModel['data'];
  phoneUser?: any;
  updateAdress?: StateModel['adressUpdate'];
  setDataUser?: Function;
  stepsViews?: any;
}
/**
 * Component IdentityVerification
 *
 * @param {*} {
 *   typeFlow,
 *   onComplete,
 *   flagFlowComplete,
 *   onTypeFlow,
 *   subFlowStatus,
 *   userData,
 *   phoneUser,
 *   updateAdress,
 *   setDataUser,
 *   stepsViews=stagesFixture
 * }
 * @return {*} 
 */
const IdentityVerification: React.FC<IdentityVerificationProps> = ({
  typeFlow,
  onComplete,
  flagFlowComplete,
  onTypeFlow,
  subFlowStatus,
  userData,
  phoneUser,
  updateAdress,
  setDataUser,
  stepsViews=stagesFixture
}) => {

  const dispatch = useDispatch();

  if (onTypeFlow) {
    dispatch({
      type: 'identityVerification/setTypeFlow',
      payload: onTypeFlow,
    });
  }

  useEffect(() => {
    return () => {
      dispatch({
        type: 'identityVerification/setSubFlowStatus',
        payload: false,
      });
    };
  }, []);

  useEffect(() => {
    if (userData && setDataUser) {
      setDataUser(userData);
    }
  }, [userData]);

  useEffect(() => {
    if (flagFlowComplete && onComplete) {
      onComplete(flagFlowComplete);
    }
  }, [flagFlowComplete]);

  /**
   * SetTypeFlow
   *
   * @param {FlowN2N4Enum} type
   */
  const setTypeFlow = (type: FlowN2N4Enum) => {

    dispatch({
      type: 'identityVerification/setTypeFlow',
      payload: type,
    });
  };

  /**
   * Finish flow identify
   *
   * @param {boolean} event
   */
  const finishFlow = (event: boolean) => {
    if (event) {
      dispatch({
        type: 'identityVerification/updateAdressFlag',
        payload: true,
      });
    } else {
      dispatch({
        type: 'identityVerification/setFlowStatus',
        payload: true,
      });
    }
  };

  /**
   * Finish sub flow
   *
   * @param {boolean} event
   */
  const finishSubFlow = (event: boolean) => {
    if (event) {
      dispatch({
        type: 'identityVerification/setSubFlowStatus',
        payload: event,
      });
    }
  };

  /**
   * set User Data
   *
   * @param {any} event
   */
  const setUserData = (event: any) => {
    console.log(event);
    
    switch (typeFlow) {

      case FlowN2N4Enum.N4Video:
        dispatch({
          type: 'identityVerification/setUserData',
          payload: { informationObject: transformDataVideoConference(event) },
        });
        break;

      case FlowN2N4Enum.N2Upload:
        dispatch({
          type: 'identityVerification/setUserData',
          payload: { informationObject: transformData(event) },
        });
        break;
      default:
        case FlowN2N4Enum.N2Manually:
          dispatch({
            type: 'identityVerification/setUserData',
            payload: { informationObject: transformDataManually(event) },
          });
          break;
    }
  };

/**
 * Flow generating function
 *
 * @param {(FlowN2N4Enum | undefined)} name
 * @return {*} 
 */
const generateFlow = (name: FlowN2N4Enum | undefined) => {

    if (name) {
      const component = (name && stepsViews[name]) || 'p'; 
      switch (name) {
        case FlowN2N4Enum.N4Video:
          return React.createElement(component, {
            onComplete: finishSubFlow,
            onTypeFlow: typeFlow,
            onSetUserData: setUserData,
            phoneUser,
          });
        case FlowN2N4Enum.N2Scan:
          return React.createElement(component, {
            onComplete: finishSubFlow,
            onTypeFlow: typeFlow,
            typeFlow: 'N2Video',
            onSetUserData: setUserData,
            phoneUser,
          });
        default:
          return React.createElement(component, {
            onComplete: finishSubFlow,
            onTypeFlow: typeFlow,
            onSetUserData: setUserData,
            phoneUser,
          });
      }
    }
    return null;
  };

  return (
    <>
      {typeFlow === undefined && <VerifyIdentity setTypeFlow={setTypeFlow} />}
      {subFlowStatus && !updateAdress ? (
        <VerifyData
          data={dataUserTransform(userData)}
          action={
            !updateAdress
              ? (e: any) => {
                  finishFlow(e);
                }
              : () => {}
          }
        />
      ) : (
        <>{!updateAdress && generateFlow(typeFlow)} </>
      )}

      {updateAdress && (
        <UpdateAdress
          onStepsViews={stepsViews}
          phoneNumber={phoneUser}
          onComplete={() => {
            dispatch({
              type: 'identityVerification/setFlowStatus',
              payload: true,
            });
          }}
        />
      )}
    </>
  );
};

export default connect(({ identityVerification }: { identityVerification: StateModel }) => ({
  typeFlow: identityVerification.typeFlow,
  status: identityVerification.status,
  flagFlowComplete: identityVerification.flowComplete,
  subFlowStatus: identityVerification.subFlowComplete,
  userData: identityVerification.data,
  updateAdress: identityVerification.adressUpdate,
  step: identityVerification.step,
  updateAddressState: identityVerification.updateAddressState
}))(IdentityVerification);
