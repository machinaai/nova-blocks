export interface ConfigProps{
  title?: string,
  fontTitle?:string,
  btnOption?:OptionEl,
  optionInfo?:OptionEl,
}
interface OptionEl {
  title: string,
  action: Function | any
}