export interface ModalProps {
    title?: string,
    subtitle?: string,
    options?: ItemOptions[],
    fontFamily?:Fonts,
    onlyModal?:boolean,
    onlyDrawer?:boolean,
    onClose?:Function | any
}
export interface ItemOptions {
    icon: any,
    valOption: string
    action:Function|any
    color?:string
}
interface Fonts{
    fontTitle:string,
    fontSubtitle:string
}
