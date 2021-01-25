/**
 * Interface of definition of the upload element
 */
export interface PropsBlock {
    data?: DataInterface,
    heightContainer?:number
}
export interface DataInterface {
    previewVisible: boolean,
    previewImage: string,
    fileList: ItemFile[]
}
interface ItemFile {
    uid: string,
    name: string,
    status: string,
    url: string
}