export interface PropsCarousel {
    data?: ItemFile[],
    action?:Function | any
}
interface ItemFile {
    uid: string,
    url: string
}
