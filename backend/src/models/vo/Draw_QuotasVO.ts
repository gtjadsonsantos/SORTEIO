export default class Draw_QuotasVO {
  private draw_quota_id?: number;
  private number?: string;
  private created_at?: string;
  private deleted_at?: string;


  constructor(
    draw_quota_id?: number,
    number?: string,
    created_at?: string,
    deleted_at?: string
  ) {
    this.draw_quota_id = draw_quota_id;
    this.number = number;
    this.created_at = created_at;
    this.deleted_at = deleted_at;
  }



    public getDraw_quota_id(): number | undefined  {
        return this.draw_quota_id;
    }

    public setDraw_quota_id(draw_quota_id: number | undefined  ): void {
        this.draw_quota_id = draw_quota_id;
    }

    public getNumber(): string | undefined  {
        return this.number;
    }

    public setNumber(number: string| undefined ): void {
        this.number = number;
    }

    public getCreated_at(): string| undefined  {
        return this.created_at;
    }

    public setCreated_at(created_at: string| undefined ): void {
        this.created_at = created_at;
    }

    public getDeleted_At(): string | undefined {
        return this.deleted_at;
    }

    public setDeleted_At(deleted_at: string| undefined ): void {
        this.deleted_at = deleted_at;
    }

 

}
