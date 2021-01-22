export interface PropsUpload {
    data?: DataInterface
}
export interface DataInterface {
    previewVisible: boolean,
    previewImage: string,
    fileList: ItemFile[]
}
export interface ItemFile {
    uid: string,
    name: string,
    status: string,
    url: string
}
