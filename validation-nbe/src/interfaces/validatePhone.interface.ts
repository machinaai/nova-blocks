/**
 * CHN-CORPORATE-V-ResetPassword - getUserData
 */

export interface ValidatePhone {
  /**
   * example 'M* E***** S.A. de C.V'
   * description Masked Business Name
   */
  maskedBusinessName: string;

  /**
   * example 'C***** L**** C******'
   * description Masked User Name
   */
  maskedUserName: string;

  /**
   * example '** **** 1234'
   * description Masked Phone Number
   */
  maskedPhoneNumber: string;
}
