import { ReactNode } from 'react';
import { FormItemProps } from 'antd/lib/form';
/*
 * Interface for the props of input
 */
export interface InputProps extends Partial<FormItemProps> {
  /**
   * Sets or retrieves the name of the object.
   */
  name?: string;
  /*
   * The ID for input
   */
  id?: string;
  /*
   * Choose true if is a Input.Password
   */
  inputPassword?: boolean;
  /*
   * Placeholder attribute native HTMLInputElement
   */
  placeholder?: string;
  /*
   * The callback function that is triggered when Enter key is pressed
   */
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /*
   * Callback when user input
   */
  onChanged?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /*
   * Whether the input is disabled
   */
  disabled?: boolean;
  /*
   * MaxLength attribute native HTMLInputElement
   */
  maxLength?: number;
  /*
   * The input content value
   */
  value?: string;
  /*
   * The suffix icon for the Input
   */
  suffix?: string | ReactNode;
  /*
   * The prefix icon for the Input
   */
  prefix?: string | ReactNode;
  /*
   * MinLength attribute native HTMLInputElement
   */
  minLength?: number;
  /*
   * If allow to remove input content with clear icon
   */
  allowClear?: boolean;
  /*
   * The label text displayed after (on the right side of) the input field
   */
  addonAfter?: string;
  /*
   * The label text displayed before (on the left side of) the input field
   */
  addonBefore?: string;
  /*
   * The initial input content
   */
  defaultValue?: string;
  /*
   * Others custom props natives of HTMLInputElement
   */
  customProps?: { [key: string]: unknown };
  /*
   * Disabled paste on Input
   */
  onPasteDisabled?: boolean;
  /*
   * Disabled copy on Input
   */
  onCopyDisabled?: boolean;

  /*
   * Blur input event
   */
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /*
   * Focus input event
   */
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /*
   * Flag when there is an error
   */
  error?: boolean;
}
