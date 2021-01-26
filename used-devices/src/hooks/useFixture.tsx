import React,{Fragment} from 'react'
import { useIntl } from 'umi';
 
export const useFixture = () => {

    const internationalization = useIntl();

    return  {
            title: internationalization.formatMessage({ id: `usedDevices.title`}),
            label1: internationalization.formatMessage({ id: `usedDevices.nameOp1`}),
            label2: internationalization.formatMessage({ id: `usedDevices.nameOp2`}),
    }
}
 
export default useFixture;