export interface IUser {
    user_id?: number | undefined;
    name?:string | undefined;
    cpf?:string | undefined;
    email?:string | undefined;
    phone?:string | undefined;
    password?:string | undefined;
    type?:string | undefined; 
    created_at?:string | undefined;
    deleted_at?:string | undefined;
    address?:string | undefined;

}

export interface ILogin {
    username:string;
    password: string;
}