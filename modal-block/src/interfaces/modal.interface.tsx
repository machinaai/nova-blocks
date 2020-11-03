export interface ModalProps {
    title?: string,
    subtitle?: string,
    options?: ItemOptions[],
    visible?: boolean;
    closeElement?: any;
    fontFamily?:Fonts

}
export interface ItemOptions {
    icon: any,
    valOption: string
    action:Function|any
}
interface Fonts{
    fontTitle:string,
    fontSubtitle:string
}
