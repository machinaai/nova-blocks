export interface SelectOptionsProps{
  dataOptions?:DataOp[],
  titleSelect?:TitleProp
  widthSelect?:number,
  action?:Function
}

interface DataOp {
  op:number,
  nameOp:string
}
interface TitleProp{
  title:string,
  font:string
}