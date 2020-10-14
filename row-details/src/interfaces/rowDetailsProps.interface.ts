/**
 * RowDetailsPropsInterface 
 *
 * @export
 * @interface RowDetailsPropsInterface
 */
export interface RowDetailsPropsInterface {
    title?: string;
    data?: DataInterface[];
    numberOfSections?: number;
}
/**
 * DataInterface
 *
 * @interface DataInterface
 */
export interface DataInterface {
    titleSection: string;
    quantity: string | number;
    action?: Function;
}