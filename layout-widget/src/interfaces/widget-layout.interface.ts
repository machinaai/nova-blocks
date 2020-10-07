/**
 * WidgetLayoutPropsInterface
 *
 * @export
 * @interface WidgetLayoutPropsInterface
 */
export interface WidgetLayoutPropsInterface {
    title?: string;
    options?: MenuOptionsInterface[];
    children: React.ReactNode;
    fit?: boolean;
    detail?: DetailInterface
  }

/**
 * MenuOptionsInterface
 *
 * @export
 * @interface MenuOptionsInterface
 */
export interface MenuOptionsInterface {
    id: number;
    label: string;
    action: Function;
  }
/**
 * DetailInterface data
 *
 * @interface DetailInterface
 */
interface DetailInterface {
    legend: string;
    action: string;
    align?:  "center" | "left" | "right" | undefined;
  };