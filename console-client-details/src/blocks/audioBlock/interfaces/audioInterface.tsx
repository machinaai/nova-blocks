export interface PropsBlock {
    data?: ItemFile[],
    heightContainer?:number
}
interface ItemFile {
    uid: string,
    url: string
}