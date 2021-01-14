export interface PropsBlock{
  data?:Items[]
}
interface Items{
  key:string,
  title:string,
  content:React.ReactNode,
  extraContent:React.ReactNode
}