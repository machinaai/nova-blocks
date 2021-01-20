export interface PropsComponent {
    requestOptions?: RequestProp,
    fontFam?: Fonts,
    icons?: Icons,
    actionOpInfo?: Function | any
}
export interface RequestProp {
    totalRequest: number,
    initiated: number,
    inProccess: number,
    abandoned: number,
    finished: number,
}
export interface Icons {
    iconTotalReq?: string | React.ReactNode,
    iconOp1?: string | React.ReactNode,
    iconOp2?: string | React.ReactNode,
    iconOp3?: string | React.ReactNode,
    iconOp4?: string | React.ReactNode
}
export interface Fonts {
    fontTitle?: string,
    fontTotalReq?: string,
    fontSubtitle?: string,
    fontOptions?: string,
    fontTotalReqOp?: string,
}