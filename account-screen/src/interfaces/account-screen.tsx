/**
 * Interface of definition for the component
 */
export interface Fonts{
    fontTitle:string,
    fontSubtitle:string
}
/**
 * Interface to define the account screen component
 */
export interface PropsAccount{
    nameUser?: string,
    numberCard?: string,
    actionBtn?:Function | any,
    actionPlayStore?:Function | any,
    actionAppStore?:Function | any,
    actionWallet?:Function | any,
    font?: Fonts,
    logoDesk?: string,
    logoMob?: string,
    imageRobot?: string
    imgAppStore?: string,
    imgPlayStore?: string,
    iconCircle?: string,
  }
