export interface PropsAudio {
    data?: ItemFileAudio[],
    heightContainer?:number
}
export interface ItemFileAudio {
    uid: string,
    url: string
}