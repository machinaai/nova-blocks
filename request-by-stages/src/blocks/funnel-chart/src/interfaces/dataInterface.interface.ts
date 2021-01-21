export interface StageRequestProps {
  dataOptions?: DataOption[]
  heightStatistic?:number,
  heightCanvas?:number
}
interface DataOption{
  key:number,
  type:string,
  percentage:number
}