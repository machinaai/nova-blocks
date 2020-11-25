export interface StageRequestProps {
  dataOptions?: DataOption[]
  paddingBtm?:number
}
interface DataOption{
  key:number,
  type:string,
  percentage:number
}