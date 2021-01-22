
export interface PropsConfigParams {
  data?:DataOptions,
  fontFam?:{
    fontTitle:string,
    fontContent:string
  }
}
interface DataOptions {
  options: Data[];
  option3: {
    title: string,
    cont: React.ReactNode
  }
  option4: {
    title: string,
    cont: {
      title: string,
      content: string,
      sliderCont: React.ReactNode
    }
  }
}
interface Data {
  title: string,
  cont1: {
    title: string,
    content: string,
    sliderCont: React.ReactNode
  }
  cont2: {
    title: string,
    content: string,
    sliderCont: React.ReactNode
  }
}
