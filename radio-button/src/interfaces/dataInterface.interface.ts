export interface SelectOptionsProps{
  dataOptions?:DataOp[],
  action?:Function,
  fontOp?:string
}

interface DataOp {
  key:string,
  label:string,
  value:string
}