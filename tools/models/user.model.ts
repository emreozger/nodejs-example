import { AuditModel } from "./audit.model";

export class UserModel {
    //MongoDB Id'leri string olarak uretiyor.
    id: string;
    name: string;
    surname: string;
    image: string;
    email: string;
    password: string;
    passwordHash: string;
    audit: AuditModel;
}