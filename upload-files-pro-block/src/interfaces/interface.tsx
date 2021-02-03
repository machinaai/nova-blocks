import { TypeFlow } from '../block/upload-block/enum/emun';

export interface UploadFilesProps {
    typeFlowProp: TypeFlow;
    phoneUser: string | number;
    onComplete?: Function;
    onSetUserData?: Function;
    status?: any;
    dataUpload?:any;
    flagFlowComplete?:any
}