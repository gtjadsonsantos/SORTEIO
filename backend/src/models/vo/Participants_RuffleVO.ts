export default class Participants_RuffleVO {
  private participant_id?: number;
  private users_user_id?: number;
  private created_at?: string;
  private quotas_raffle_quota_raffle_id?: number;
  private raffles_raffle_id?: number;
  private status?: string;
  private deleted_at?: string;

  constructor(
    participant_id?: number,
    users_user_id?: number,
    created_at?: string,
    quotas_raffle_quota_raffle_id?: number,
    raffles_raffle_id?: number,
    status?: string,
    deleted_at?: string
  ) {
    this.participant_id = participant_id;
    this.users_user_id = users_user_id;
    this.created_at = created_at;
    this.quotas_raffle_quota_raffle_id = quotas_raffle_quota_raffle_id;
    this.raffles_raffle_id = raffles_raffle_id;
    this.status = status;
    this.deleted_at = deleted_at;
  }

  public getParticipant_id(): number | undefined {
    return this.participant_id;
  }

  public setParticipant_id(participant_id: number | undefined): void {
    this.participant_id = participant_id;
  }

  public getUsers_user_id(): number | undefined {
    return this.users_user_id;
  }

  public setUsers_user_id(users_user_id: number | undefined): void {
    this.users_user_id = users_user_id;
  }

  public getCreated_at(): string | undefined {
    return this.created_at;
  }

  public setCreated_at(created_at: string | undefined): void {
    this.created_at = created_at;
  }

  public getQuotas_raffle_quota_raffle_id(): number | undefined {
    return this.quotas_raffle_quota_raffle_id;
  }

  public setQuotas_raffle_quota_raffle_id(
    quotas_raffle_quota_raffle_id: number | undefined
  ): void {
    this.quotas_raffle_quota_raffle_id = quotas_raffle_quota_raffle_id;
  }

  public getRaffles_raffle_id(): number | undefined {
    return this.raffles_raffle_id;
  }

  public setRaffles_raffle_id(raffles_raffle_id: number | undefined): void {
    this.raffles_raffle_id = raffles_raffle_id;
  }

  public getStatus(): string | undefined {
    return this.status;
  }

  public setStatus(status: string | undefined): void {
    this.status = status;
  }

  public getDeleted_at(): string | undefined {
    return this.deleted_at;
  }

  public setDeleted_at(deleted_at: string| undefined ): void {
    this.deleted_at = deleted_at;
  }
}
