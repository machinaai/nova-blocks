export interface FormProps {
    options?: Item[],
    actionForm?: Function,
    BtnOptions?:React.ReactNode
}
interface Item {
    inputName: string,
    label: string,
    valPlaceholder: string,
    ruleValidate: Object[]
}
