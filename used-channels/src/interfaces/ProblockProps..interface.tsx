
export interface PieChartProps {
    data?: DataChart[] | any
    height?: number;
    indexVal?: number;
    setVal?:Function | any
}

export interface DataChart {
    type:string,
    total:number,
    percentage:number
}

export interface ChannelsProps {
    dataDevices?:DataInterface[],
    fontTitle?:string,
    valOp?:number
}

export interface DataInterface {
    icon: string;
    name: string;
    backgroungCol?:string;
    action: Function | any;
}

