import { Fonts } from "./optionsAccount.interface";
/**
 * ElementProps interface
 *
 * @interface ElementProps
 */
export interface ElementProps {
    title: string,
    subtitle: string,
    options: ItemOptions[],
    fontFamily?:Fonts,
    onlyModal:boolean,
    onlyDrawer:boolean,  
    onClose?:Function |any
}
/**
 * ItemOptions interface
 *
 * @interface ItemOptions
 */
interface ItemOptions {
    icon: React.ReactNode,
    valOption: string,
    action: any,
    color:string
}
