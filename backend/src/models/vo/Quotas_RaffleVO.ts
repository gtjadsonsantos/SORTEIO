export default class Quotas_RaffleVO {
  private quota_raffle_id?: number;
  private number?: string;
  private created_at?: string;
  private deleted_at?: string;

  constructor(
    quota_raffle_id?: number,
    number?: string,
    created_at?: string,
    deleted_at?: string
  ) {
    this.quota_raffle_id = quota_raffle_id;
    this.number = number;
    this.created_at = created_at;
    this.deleted_at = deleted_at;
  }

  public getQuota_raffle_id(): number | undefined {
    return this.quota_raffle_id;
  }

  public setQuota_raffle_id(quota_raffle_id: number | undefined): void {
    this.quota_raffle_id = quota_raffle_id;
  }

  public getNumber(): string | undefined {
    return this.number;
  }

  public setNumber(number: string | undefined): void {
    this.number = number;
  }

  public getCreated_at(): string | undefined {
    return this.created_at;
  }

  public setCreated_at(created_at: string | undefined): void {
    this.created_at = created_at;
  }

  public getDeleted_at(): string | undefined {
    return this.deleted_at;
  }

  public setDeleted_at(deleted_at: string | undefined): void {
    this.deleted_at = deleted_at;
  }
}
