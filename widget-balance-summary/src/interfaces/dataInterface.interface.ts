/**
 * WidgetBalanceSummaryInterface
 *
 * @export
 * @interface WidgetBalanceSummaryInterfaceProps
 */
export interface WidgetBalanceSummaryInterfaceProps {
  data?: DataInterface[];
  status?: number;
  detail?: {
    legend: string;
    action: string;
  };
  onRetry?: Function;
}
/*
 * Data widget balance summary
 */
export interface DataInterface {
  type: string;
  balance: number;
  percentage: number;
}