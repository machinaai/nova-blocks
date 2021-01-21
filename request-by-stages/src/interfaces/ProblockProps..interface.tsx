
export interface FunnelChartProps {
    dataOptions?: DataOption[]
    heightStatistic?: number,
    heightCanvas?: number,
}
export interface DataOption {
    key: number,
    type: string,
    percentage: number
}


export interface StatisticProps {
    dataOptions?: ItemsStatistic[];
    icons?: DataIcons;
  }
export interface ItemsStatistic {
    type: string;
    count: number;
    averageTime: number;
  }
export interface DataIcons {
    icon1: string | React.ReactNode;
    icon2: string | React.ReactNode;
    icon3: string | React.ReactNode;
  }
  
