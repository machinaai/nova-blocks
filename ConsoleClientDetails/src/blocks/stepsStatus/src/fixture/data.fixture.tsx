import document from './ico-ineife.svg';
/**
 * Mock data about the status of each step of some process
 */
export const dataFixture = [
  {
    step:'INE/IFE',
    complete:false,
    iconIncomplete:document
  },
  {
    step:'Val. ID',
    complete:false,
    iconIncomplete:document
  },
  {
    step:'OTP',
    complete:true,
    iconIncomplete:document
  },
  {
    step:'Firma',
    complete:true,
    iconIncomplete:document
  },
  {
    step:'Benef.',
    complete:false,
    iconIncomplete:document
  }
]