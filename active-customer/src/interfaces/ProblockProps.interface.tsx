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
  action?:Function
}

export interface ExtraCont{
  fontText:string,
  color:string
}