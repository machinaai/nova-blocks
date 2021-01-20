export interface PropsTotalReq{
    title?: string,
    fontFam?: Fonts,
    imgTitle?: string | React.ReactNode,
    totalRequest?: number,
    optionInfo?: OptionInfo
    subtitle?: string,
    options?: ItemOptions[],
  }
  interface ItemOptions {
    nameOption?: string,
    totalRequest?: number,
    icon?: string | React.ReactNode
  }
  interface OptionInfo {
    tooltipTitle:string,
    icon: string | React.ReactNode,
    action: Function | any
  }
  interface Fonts {
    fontTitle: string,
    fontTotalReq: string,
    fontSubtitle: string,
    fontOptions: string,
    fontTotalReqOp: string,
  }