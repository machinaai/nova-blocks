export interface ComboProps {
    data?: ComboInterface[],
    title?: string,
    error?: number,
    retry?: Function,
    selected?: Function,
    search?: Function
  }
  
interface ComboInterface {
    text: string,
    value: string
}