import React,{Fragment} from 'react'
import { useIntl } from 'umi';
 
export const useFixture = () => {

    const internationalization = useIntl();

    return  {
            UploadFirstView : {
                firstHeaderTitle: internationalization.formatMessage({ id: `upload.files.headerTitle`}),
                firstTitle: internationalization.formatMessage({ id: `upload.files.firstTitle`}),
                firstSubtitle:  internationalization.formatMessage({ id: `upload.files.firstSubtitle`}),
                detailsTitle:  internationalization.formatMessage({ id: `upload.files.detailsTitle`}),
                detailsElement1:  internationalization.formatMessage({ id: `upload.files.detailsElement1`}),
                detailsElement2:  internationalization.formatMessage({ id: `upload.files.detailsElement2`}),
                bntUploadTitle :  internationalization.formatMessage({ id: `upload.files.bntUploadTitle`}),
            },
            UploadSecondView : {
                secondHeaderTitle: internationalization.formatMessage({ id: `upload.files.headerTitle`}),
                secondTitle: internationalization.formatMessage({ id: `upload.files.secondTitle`}),
                secondSubtitle: internationalization.formatMessage({ id: `upload.files.secondSubtitle`}),
                bntNextTitle : internationalization.formatMessage({ id: `upload.files.bntNextTitle`}),
                linkTitle:internationalization.formatMessage({ id: `upload.files.linkTitle`}),
            },
    }
}
 
export default useFixture;