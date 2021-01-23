export interface DataTable{
  key:string,
  idRequest:string,
  name:string,
  origin:string,
  statusIne: boolean,
  statusVal: boolean,
  statusOtp: boolean,
  statusSign: boolean,
  statusBen: boolean,
  action: any
}
export interface PropsComponent {
  dataTable?: object[]
  valueFilter?: string
  valInputSearch?: string | undefined
  action?:Function
  extraCont?:ExtraCont
}

export interface ExtraCont{
  fontText:string,
  color:string
}