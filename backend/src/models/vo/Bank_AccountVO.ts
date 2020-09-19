export default class Bank_AccountVO {
  private bank_account_id?: number;
  private name?: string;
  private agency?: string;
  private number_account?: string;
  private created_at?: string;
  private image?: string;
  private cpf?: string;
  private cnpj?: string;
  private deleted_at?: string;

  constructor(
    bank_account_id?: number,
    name?: string,
    agency?: string,
    number_account?: string,
    created_at?: string,
    image?: string,
    cpf?: string,
    cnpj?: string,
    deleted_at?: string
  ) {
    this.bank_account_id = bank_account_id;
    this.name = name;
    this.agency = agency;
    this.number_account = number_account;
    this.created_at = created_at;
    this.image = image;
    this.cpf = cpf;
    this.cnpj = cnpj;
    this.deleted_at = deleted_at;
  }

  public getBank_account_id(): number | undefined {
    return this.bank_account_id;
  }

  public setBank_account_id(bank_account_id: number |undefined): void {
    this.bank_account_id = bank_account_id;
  }

  public getName(): string | undefined {
    return this.name;
  }

  public setName(name: string | undefined): void {
    this.name = name;
  }

  public getAgency(): string | undefined {
    return this.agency;
  }

  public setAgency(agency: string | undefined): void {
    this.agency = agency;
  }

  public getNumber_account(): string | undefined {
    return this.number_account;
  }

  public setNumber_account(number_account: string | undefined): void {
    this.number_account = number_account;
  }

  public getCreated_at(): string | undefined {
    return this.created_at;
  }

  public setCreated_at(created_at: string | undefined): void {
    this.created_at = created_at;
  }

  public getImage(): string | undefined {
    return this.image;
  }

  public setImage(image: string | undefined): void {
    this.image = image;
  }

  public getCpf(): string | undefined {
    return this.cpf;
  }

  public setCpf(cpf: string | undefined): void {
    this.cpf = cpf;
  }

  public getCnpj(): string | undefined {
    return this.cnpj;
  }

  public setCnpj(cnpj: string | undefined): void {
    this.cnpj = cnpj;
  }

  public getDeleted_at(): string | undefined {
    return this.deleted_at;
  }

  public setDeleted_at(deleted_at: string | undefined): void {
    this.deleted_at = deleted_at;
  }
}
