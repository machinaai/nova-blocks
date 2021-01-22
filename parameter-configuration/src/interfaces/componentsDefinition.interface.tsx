
export interface ResponseInterface {
    id: number,
    userName: string,
    userLastName: string,
    birthDate: string,
    curp: string,
    accountOpeningType: string,
    street: string,
    externalNumber: string,
    postalCode: string,
    nieghborhood: string,
    municipaly: string,
    city: string,
    state: string,
    country: string,
    identificationNumber: string,
    gender: string,
    documents: DocumentsItem[],
    stepsComplete: {
        ine: boolean,
        valId: boolean,
        otp: boolean,
        firma: boolean,
        beneficiary: boolean,
    },
    mlastName: string
}
interface DocumentsItem {
    url: string,
    type: string
}
