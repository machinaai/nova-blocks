import { TypeFlow } from '../enum/emun';

export interface UploadBlockProps {
    typeFlowProp: TypeFlow;
    action?: Function;
    getDataIne? :any;
    getDataAdress? : any;
}
