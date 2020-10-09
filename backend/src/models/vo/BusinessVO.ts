export default class BusinessVO {
  private business_id?: number;
  private cnpj?: string;
  private fantasy_name?: string;
  private logo?: string;
  private social?: string;
  private phone?: string;
  private deleted_at?: string;
  private regulation?: string;
  private banner?: string;

  constructor(
    business_id?: number,
    cnpj?: string,
    fantasy_name?: string,
    logo?: string,
    social?: string,
    phone?: string,
    deleted_at?: string,
    regulation?: string,
    banner?: string
  ) {
    this.business_id = business_id;
    this.cnpj = cnpj;
    this.fantasy_name = fantasy_name;
    this.logo = logo;
    this.social = social;
    this.phone = phone;
    this.deleted_at = deleted_at;
    this.regulation = regulation;
    this.banner = banner;
  }

  public getBusiness_id(): number | undefined {
    return this.business_id;
  }

  public setBusiness_id(business_id: number | undefined): void {
    this.business_id = business_id;
  }

  public getCnpj(): string | undefined {
    return this.cnpj;
  }

  public setCnpj(cnpj: string | undefined): void {
    this.cnpj = cnpj;
  }

  public getFantasy_name(): string | undefined {
    return this.fantasy_name;
  }

  public setFantasy_name(fantasy_name: string | undefined): void {
    this.fantasy_name = fantasy_name;
  }

  public getLogo(): string | undefined {
    return this.logo;
  }

  public setLogo(logo: string | undefined): void {
    this.logo = logo;
  }

  public getSocial(): string | undefined {
    return this.social;
  }

  public setSocial(social: string | undefined): void {
    this.social = social;
  }

  public getPhone(): string | undefined {
    return this.phone;
  }

  public setPhone(phone: string | undefined): void {
    this.phone = phone;
  }

  public getDeleted_at(): string | undefined {
    return this.deleted_at;
  }

  public setDeleted_at(deleted_at: string | undefined): void {
    this.deleted_at = deleted_at;
  }

  public getRegulation(): string | undefined {
    return this.regulation;
  }

  public setRegulation(regulation: string | undefined): void {
    this.regulation = regulation;
  }

  public getBanner(): string | undefined {
    return this.banner;
  }
  public setBanner(banner: string | undefined): void {
    this.banner = banner;
  }
}
