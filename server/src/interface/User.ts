

export interface User {
    firstName: string
    lastName: string
    telephone: string
    email: string
    document: Document
}

export enum Document {
    CPF = 'cpf',
    CNPJ = 'cnpj'
}