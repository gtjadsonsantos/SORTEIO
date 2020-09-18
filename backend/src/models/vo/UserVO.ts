export default class UserVO {
    private user_id?: number | undefined;
    private name?:string | undefined;
    private cpf?:string | undefined;
    private email?:string | undefined;
    private phone?:string | undefined;
    private password?:string | undefined;
    private type?:string | undefined; 
    private address?:string | undefined; 
    private created_at?:string | undefined;
    private deleted_at?:string | undefined;

    constructor(user_id?:number,address?:string,name?:string,cpf?:string,email?:string,phone?:string,password?:string,type?:string,created_at?:string,deleted_at?:string ){
        this.user_id = user_id;
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.type = type;
        this.address  = address;
        this.created_at = created_at;
        this.deleted_at = deleted_at;
    }
    

    public getUser_id(): number | undefined {
        return this.user_id;
    }

    public setUser_id(user_id: number|undefined): void {
        this.user_id = user_id;
    }

    public getName(): string | undefined {
        return this.name;
    }

    public setName(name: string|undefined): void {
        this.name = name;
    }

    public getCpf(): string | undefined{
        return this.cpf;
    }

    public setCpf(cpf: string|undefined): void {
        this.cpf = cpf;
    }

    public getEmail(): string | undefined {
        return this.email;
    }

    public setEmail(email: string|undefined): void {
        this.email = email;
    }

    public getPhone(): string | undefined {
        return this.phone;
    }

    public setPhone(phone: string|undefined): void {
        this.phone = phone;
    }

    public getPassword(): string | undefined {
        return this.password;
    }

    public setPassword(password: string|undefined): void {
        this.password = password;
    }

    public getType(): string | undefined {
        return this.type;
    }

    public setType(type: string|undefined): void {
        this.type = type;
    }

    public getCreated_at(): string | undefined {
        return this.created_at;
    }

    public setCreated_at(created_at: string|undefined): void {
        this.created_at = created_at;
    }

    public getDeleted_at(): string | undefined {
        return this.deleted_at;
    }

    public setDeleted_at(deleted_at: string|undefined): void {
        this.deleted_at = deleted_at;
    }



    public getAddress(): string | undefined {
        return this.address;
    }

    public setAddress(address: string|undefined): void {
        this.address = address;
    }



    


}