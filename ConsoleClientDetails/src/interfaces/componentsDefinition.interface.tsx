
export interface ResponseInterface {
    id: number,
    userName: string,
    userLastName: string,
    mLastName: string
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
    stepsComplete: {
        ine: boolean,
        valId: boolean,
        otp: boolean,
        firma: boolean,
        beneficiary: boolean,
    },
    documents: RequestDocumentDto[],
}
interface RequestDocumentDto {
    url: string,
    type: string
}