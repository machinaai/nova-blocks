/** 
 *Interface for defining block input elements
 */
export interface PropsBlock {
    data?: ItemFile[],
    action?:Function | any
}
interface ItemFile {
    uid: string,
    url: string
}