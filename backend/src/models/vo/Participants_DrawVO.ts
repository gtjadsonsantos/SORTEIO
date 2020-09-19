export default class Participants_DrawVO {
  private participant_id?: number;
  private draw_quotas_draw_quota_id?: number;
  private users_user_id?: number;
  private draws_draw_id?: number;
  private created_at?: string;
  private status?: string;
  private deleted_at?: string;

  constructor(
    participant_id?: number,
    draw_quotas_draw_quota_id?: number,
    users_user_id?: number,
    draws_draw_id?: number,
    created_at?: string,
    status?: string,
    deleted_at?: string
  ) {
    this.participant_id = participant_id;
    this.draw_quotas_draw_quota_id = draw_quotas_draw_quota_id;
    this.users_user_id = users_user_id;
    this.draws_draw_id = draws_draw_id;
    this.created_at = created_at;
    this.status = status;
    this.deleted_at = deleted_at;
  }

  public getParticipant_id(): number | undefined {
    return this.participant_id;
  }

  public setParticipant_id(participant_id: number | undefined): void {
    this.participant_id = participant_id;
  }

  public getDraw_quotas_draw_quota_id(): number | undefined {
    return this.draw_quotas_draw_quota_id;
  }

  public setDraw_quotas_draw_quota_id(
    draw_quotas_draw_quota_id: number | undefined
  ): void {
    this.draw_quotas_draw_quota_id = draw_quotas_draw_quota_id;
  }

  public getUsers_user_id(): number | undefined {
    return this.users_user_id;
  }

  public setUsers_user_id(users_user_id: number | undefined): void {
    this.users_user_id = users_user_id;
  }

  public getDraws_draw_id(): number | undefined {
    return this.draws_draw_id;
  }

  public setDraws_draw_id(draws_draw_id: number | undefined): void {
    this.draws_draw_id = draws_draw_id;
  }

  public getCreated_at(): string | undefined {
    return this.created_at;
  }

  public setCreated_at(created_at: string | undefined): void {
    this.created_at = created_at;
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

  public setDeleted_at(deleted_at: string | undefined): void {
    this.deleted_at = deleted_at;
  }
}
