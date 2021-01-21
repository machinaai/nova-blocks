/**
 * Interface of definition for the component
 */
export interface PropsCarousel {
    options: ItemOption[];
    redirect:string,
}
interface ItemOption {
    img: string,
    valH1: React.ReactNode,
    valH3: React.ReactNode
}


export interface PropsProblock{
    imagesCarousel:string[];
    logo1:string;
    logo2:string;
    iconNextButton:string;
    iconCircle:string;
    font_family:Fonts[]
}
export interface Fonts{
    fontTitle:string,
    fontSubtitle:string
}
