import { Fonts } from "./optionsAccount.interface";

export interface ElementProps {
    title: string,
    subtitle: string,
    options: ItemOptions[],
    fontFamily?:Fonts,
    onlyModal:boolean,
    onlyDrawer:boolean,  
    onClose?:Function |any
}
interface ItemOptions {
    icon: React.ReactNode,
    valOption: string,
    action: any,
    color:string
}
