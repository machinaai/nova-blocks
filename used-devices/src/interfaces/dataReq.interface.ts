import { LegendsCard } from './usedDevices.interface';

export interface PropsDataReq {
  titles?: LegendsCard,
  fontFam?: Fonts | any,
  imageCard?: string,
  optionInfo?: OptionInfo,
  options?: ItemOptions[],
  percentage?: boolean,
}
interface ItemOptions {
  valOp?: string | number | unknown,
  nameOp?: string
}
interface OptionInfo {
  tooltipTitle: string,
  icon: string | React.ReactNode,
  action: Function | any
}
export interface Fonts {
  fontTitle: string,
  fontValOp: string,
  fontNameOp: string,
}