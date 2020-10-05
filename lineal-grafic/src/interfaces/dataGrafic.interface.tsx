/** Interface that contain data received as a prop in the line grafic block */
export interface DataGraficInterface {
    data:DataGrafic[],
    dropValue:string,
    width:number,
    height:number,
}
interface DataGrafic {
    month:string,
    day:string,
    balance:number
}