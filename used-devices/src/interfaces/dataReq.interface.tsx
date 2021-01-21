export interface PropsDataReq {
  title?: string,
  fontFam?: Fonts | any,
  imgTitle?: string | React.ReactNode,
  optionInfo?: OptionInfo,
  options?: ItemOptions[],
}
interface ItemOptions {
  valOp?: string | number,
  nameOp?: string
}
interface OptionInfo {
  tooltipTitle:string,
  icon: string | React.ReactNode,
  action: Function | any
}
export interface Fonts {
  fontTitle: string,
  fontValOp: string,
  fontNameOp: string,
}