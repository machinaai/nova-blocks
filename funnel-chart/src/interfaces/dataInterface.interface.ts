export interface StageRequestProps {
  dataOptions?: DataOption[]
  paddingStatistic?:number,
  heightCanvas?:number
}
interface DataOption{
  key:number,
  type:string,
  percentage:number
}