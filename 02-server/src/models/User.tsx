import { UUID } from "crypto"

export interface Child {
    childID: UUID,
    childName: string,
    dob: string
}

export interface Parent {
    parentID: UUID,
    parentName: string,
    phoneNumber: string,
    password: string,
}