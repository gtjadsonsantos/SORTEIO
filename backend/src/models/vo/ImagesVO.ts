export default class ImageVO {
  private image_id?: number;
  private name?: string;
  private data_image?: string;
  private created_at?: string;
  private deleted_at?: string;
  private draws_draw_id?: number;
  constructor(
    image_id?: number,
    name?: string,
    data_image?: string,
    created_at?: string,
    deleted_at?: string,
    draws_draw_id?: number
  ) {
    this.image_id = image_id;
    this.name = name;
    this.data_image = data_image;
    this.created_at = created_at;
    this.deleted_at = deleted_at;
    this.draws_draw_id = draws_draw_id;
  }

  public getImage_id(): number | undefined {
    return this.image_id;
  }

  public setImage_id(image_id: number | undefined): void {
    this.image_id = image_id;
  }

  public getName(): string | undefined {
    return this.name;
  }

  public setName(name: string | undefined): void {
    this.name = name;
  }

  public getData_image(): string | undefined {
    return this.data_image;
  }

  public setData_image(data_image: string | undefined): void {
    this.data_image = data_image;
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

  public getDraws_draw_id(): number | undefined {
    return this.draws_draw_id;
  }

  public setDraws_draw_id(draws_draw_id: number | undefined): void {
    this.draws_draw_id = draws_draw_id;
  }
}
