export interface PropsDataReq {
  title?: string,
  fontFam?: Fonts,
  imgTitle?: string | React.ReactNode,
  optionInfo?: OptionInfo,
  options?: ItemOptions[],
}
interface ItemOptions {
  valOp?: number | string,
  nameOp?: string
}
interface OptionInfo {
  tooltipTitle?:string,
  icon: string | React.ReactNode,
  action: Function | any
}
interface Fonts {
  fontTitle: string,
  fontValOp: string,
  fontNameOp: string,
}