/**
 * Interface to definition the structure for the data of the block
 */
export interface PropsBlock {
    fieldsData?: DataFields,
    onSave?:any
}
interface DataFields {
    section1: {
        titleSection: string,
        fields: Fields
    }
    section2: {
        titleSection: string,
        fields: Fields
    }
}
interface Fields {
    col1: Item[],
    col2: Item[]
}
interface Item {
    inputName: string,
    label: string,
    element: React.ReactNode
}