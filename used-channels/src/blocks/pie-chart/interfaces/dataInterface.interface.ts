/**
 * Used Channels Interface
 *
 * @export
 * @interface PieChartProps
 */
export interface PieChartProps {
  data?: DataChart[];
  height?: number;
  indexVal?: number;
  setVal?: Function | any;
}
/*
 * Data to show used channels
 */
export interface DataChart {
  type: string;
  total: number;
  percentage: number
}