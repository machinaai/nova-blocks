/**
 * PropsAccount interface
 *
 * @interface PropsAccount
 */
export interface PropsAccount{
    fontFamily:Fonts,
    colorBtn:string,
    actionBtn:Function | any,
    setShowModal:Function |any,
    setShowDrawer:Function |any
}
/**
 * Fonts interface
 *
 * @interface Fonts
 */
export interface Fonts {
    fontHeader:string
    fontTitle:string,
    fontSubtitle:string,
    fontBody:string,
    fontB_ul:string,
    fontFooter:string
}