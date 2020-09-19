export default class DrawVO {
  private draw_id?: number;
  private title?: string;
  private subtitle?: string;
  private date_draw?: string;
  private value?: number;
  private description?: string;
  private status?: string;
  private created_at?: string;
  private deleted_at?: string;

  constructor(
    draw_id?: number,
    title?: string,
    subtitle?: string,
    date_draw?: string,
    value?: number,
    description?: string,
    status?: string,
    created_at?: string,
    deleted_at?: string
  ) {
    this.draw_id = draw_id;

    this.draw_id = draw_id;
    this.title = title;
    this.subtitle = subtitle;
    this.date_draw = date_draw;
    this.value = value;
    this.description = description;
    this.status = status;
    this.created_at = created_at;
    this.deleted_at = deleted_at;
  }

  public getDraw_id(): number | undefined {
    return this.draw_id;
  }

  public setDraw_id(draw_id: number | undefined): void {
    this.draw_id = draw_id;
  }

  public getTitle(): string | undefined {
    return this.title;
  }

  public setTitle(title: string | undefined): void {
    this.title = title;
  }

  public getSubtitle(): string | undefined {
    return this.subtitle;
  }

  public setSubtitle(subtitle: string | undefined): void {
    this.subtitle = subtitle;
  }

  public getDate_draw(): string | undefined {
    return this.date_draw;
  }

  public setDate_draw(date_draw: string | undefined): void {
    this.date_draw = date_draw;
  }

  public getValue(): number | undefined {
    return this.value;
  }

  public setValue(value: number | undefined): void {
    this.value = value;
  }

  public getDescription(): string | undefined {
    return this.description;
  }

  public setDescription(description: string | undefined): void {
    this.description = description;
  }

  public getStatus(): string | undefined {
    return this.status;
  }

  public setStatus(status: string | undefined): void {
    this.status = status;
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
