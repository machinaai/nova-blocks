/**
 * WidgetBalanceSummaryInterface
 *
 * @export
 * @interface PieGraphInterfaceProps
 */
export interface PieGraphInterfaceProps {
  data?: DataInterface[];
  height?: number;
}
/*
 * Data widget balance summary
 */
export interface DataInterface {
  type: string;
  balance: number;
  percentage: number;
}