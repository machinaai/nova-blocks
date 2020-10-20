import { TypeFlow } from '../enum/emun';
export interface UploadFieldsInterface {
    firstHeaderTitle?: string,
    firstTitle?:string,
    firstSubtitle?:string,
    detailsTitle?: string,
    detailsElemen1?: string,
    detailsElement2?: string,
    bntUploadTitle?: string,
    second?: string,
    secondTitle?:string,
    secondSubtitle?:string,
    bntNextTitle?: string,
    linkTitle?: string,
    typeFlow: TypeFlow,
}