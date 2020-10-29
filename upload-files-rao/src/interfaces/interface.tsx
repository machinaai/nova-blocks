import { TypeFlow } from '../enum/emun';

export interface UploadBlockProps {
    typeFlowProp: TypeFlow;
    firstView: FirstViewInterface;
    secondView : SecondViewInterface;
    srcIneFront: any;
    fileListIneFront: any;
    srcIneBack: any;
    fileListIneBack: any;
    srcPdf:any;
    fileListPdf: any;
  }
  
  
  export interface FirstViewInterface {
    firstHeaderTitle?: string,
    firstTitle?: string,
    firstSubtitle?: string,
    detailsTitle?: string,
    detailsElement1?: string,
    detailsElement2?: string,
    bntUploadTitle?: string,
  }
  
  export interface SecondViewInterface {
    secondHeaderTitle?: string,
    secondTitle?: string,
    secondSubtitle?: string,
    bntNextTitle?: string,
    linkTitle?: string,
  }
  