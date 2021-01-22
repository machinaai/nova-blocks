export interface PropsCarousel {
    options: ItemOption[];
    redirect?: Function
    iconNextButton?: string
  }
 export interface ItemOption {
    img: string,
    valH1: React.ReactNode,
    valH3: React.ReactNode
  }
  