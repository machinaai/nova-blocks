export interface ModalProps {
    title?: string,
    subtitle?: string,
    options?: ItemOptions[],
    backColorOp?:string,
    fontFamily?:Fonts,
    onlyModal?:boolean,
    onlyDrawer?:boolean,
    onClose?:Function | any
}
export interface ItemOptions {
    icon: string | React.ReactNode,
    valOption: string,
    action:any,
    color?:string
}
interface Fonts{
    fontTitle:string,
    fontSubtitle:string
}
