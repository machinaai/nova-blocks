import BusinessData from './validateClient.interface';

/*
 * CHN-CORPORATE-V-Registry - registerClient
 */
export default interface RegisterClient {
  /*
   * example 'México'
   * description Common country name
   */
  contry: CountryData;
  /*
   * example 'Raquel'
   * description Customer name
   */
  company: BusinessData;
  /*
   * example 'Raquel'
   * description Customer name
   */
  representative: RepresentativeData;
  /*
   * example 'Raquel'
   * description Customer name
   */
  contact: ContactData;
}

/*
 * Interface for company country
 */
interface CountryData {
  /*
   * example 'México'
   * description Common country name
   */
  countryName: string;
  /*
   * example 'MX'
   * description Code according ISO 3166-1
   */
  countryCode: string;
}

/*
 * Interface for agent company
 */
interface RepresentativeData {
  /*
   * example 'Raquel'
   * description Customer name
   */
  name: string;
  /*
   * example 'Avila'
   * description Customer paternal Surname
   */
  paternalSurname: string;
  /*
   * example 'Yañez'
   * description Customer maternal Surname
   */
  maternalSurname: string;
}

/*
 * Interface for agent contact company
 */
interface ContactData {
  /*
   * example '+52'
   * description International calling code
   */
  callingCode: string;
  /*
   * example 5512345678
   * description Phone number
   */
  phoneNumber: number;
  /*
   * example 'prueba@prueba.com'
   * description Email
   */
  email: string;
}
