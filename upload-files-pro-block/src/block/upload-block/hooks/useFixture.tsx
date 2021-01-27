import React,{Fragment} from 'react'
import { useIntl } from 'umi';
import { TypeFlow } from '../enum/emun';
 
export const useFixture = (typeFlowProp : TypeFlow) => {

    const internationalization = useIntl();

    return  {
            UploadFirstView : {
                firstHeaderTitle: typeFlowProp === TypeFlow.INE ? internationalization.formatMessage({ id: `upload.files.headerTitle.0`}) : internationalization.formatMessage({ id: `upload.files.headerTitle.1`}),
                firstTitle: internationalization.formatMessage({ id: `upload.files.firstTitle`}),
                firstSubtitle:  typeFlowProp === TypeFlow.INE ? internationalization.formatMessage({ id: `upload.files.firstSubtitle.0`}): internationalization.formatMessage({ id: `upload.files.firstSubtitle.1`}),
                detailsTitle:  internationalization.formatMessage({ id: `upload.files.detailsTitle`}),
                detailsElement1:  internationalization.formatMessage({ id: `upload.files.detailsElement1`}),
                detailsElement2:  internationalization.formatMessage({ id: `upload.files.detailsElement2`}),
                bntUploadTitle :  internationalization.formatMessage({ id: `upload.files.bntUploadTitle`}),
            },
            UploadSecondView : {
                secondHeaderTitle: typeFlowProp === TypeFlow.INE ? internationalization.formatMessage({ id: `upload.files.headerTitle.0`}) : internationalization.formatMessage({ id: `upload.files.headerTitle.1`}),
                secondTitle: internationalization.formatMessage({ id: `upload.files.secondTitle`}),
                secondSubtitle: internationalization.formatMessage({ id: `upload.files.secondSubtitle`}),
                bntNextTitle : internationalization.formatMessage({ id: `upload.files.bntNextTitle`}),
                linkTitle:internationalization.formatMessage({ id: `upload.files.linkTitle`}),
            },
    }
}
 
export default useFixture;