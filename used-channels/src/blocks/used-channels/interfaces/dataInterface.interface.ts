export interface Props{
  dataDevices?:DataInterface[],
  fontTitle?:string,
  valOp?:number;
}
export interface DataInterface {
  icon: string;
  name: string;
  backgroungCol?:string;
  action: Function | any;
}
