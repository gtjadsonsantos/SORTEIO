export default class RafflesVO {
  private raffle_id?: number;
  private image?: string;
  private created_at?: string;
  private date_raffle?: string;
  private description?: string;
  private value?: number;
  private title?: string;
  private subtitle?: string;
  private status?: string;
  private deleted_at?: string;

  constructor(
    raffle_id?: number,
    image?: string,
    created_at?: string,
    date_raffle?: string,
    description?: string,
    value?: number,
    title?: string,
    subtitle?: string,
    status?: string,
    deleted_at?: string
  ) {
    this.raffle_id = raffle_id;
    this.image = image;
    this.created_at = created_at;
    this.date_raffle = date_raffle;
    this.description = description;
    this.value = value;
    this.title = title;
    this.subtitle = subtitle;
    this.status = status;
    this.deleted_at = deleted_at;
  }

  public getRaffle_id(): number | undefined {
    return this.raffle_id;
  }

  public setRaffle_id(raffle_id: number | undefined): void {
    this.raffle_id = raffle_id;
  }

  public getImage(): string | undefined {
    return this.image;
  }

  public setImage(image: string | undefined): void {
    this.image = image;
  }

  public getCreated_at(): string | undefined {
    return this.created_at;
  }

  public setCreated_at(created_at: string | undefined): void {
    this.created_at = created_at;
  }

  public getDate_Raffle(): string | undefined {
    return this.date_raffle;
  }

  public setDate_Raffle(date_raffle: string | undefined): void {
    this.date_raffle = date_raffle;
  }

  public getDescription(): string | undefined {
    return this.description;
  }

  public setDescription(description: string | undefined): void {
    this.description = description;
  }

  public getValue(): number | undefined {
    return this.value;
  }

  public setValue(value: number | undefined): void {
    this.value = value;
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
