import { InputProps } from './input-auto-label.interface';
/*
 * Interface for the props of customizable form
 */
export interface FormProps {
  /*
   * Property of fields
   */
  formFields?: InputProps[];
  /*
   * Value of fields in form
   */
  valueFields?: any;
  /*
   * Property submit of form event
   */
  onSumbit?: ActionInterface;
  /*
   * Property cancel of form event
   */
  onCancel?: ActionInterface;
  /*
   * Property return of form event
   */
  onReturn?: ActionInterface;
}
  /*
   * Properties of events
   */
interface ActionInterface {
  label: string;
  action: Function;
}
