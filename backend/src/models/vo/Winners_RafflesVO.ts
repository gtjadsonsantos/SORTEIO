export default class Winners_RafflesVO {
    private winner_id?: number;
    private participants_raffle_participant_id?: number;
    private image?: number;
    private video?: number;
    private deleted_at?: number;
    private created_at?: number;
  
    constructor(
      winner_id?: number,
      participants_raffle_participant_id?: number,
      image?: number,
      video?: number,
      deleted_at?: number,
      created_at?: number
    ) {
      this.winner_id = winner_id;
      this.participants_raffle_participant_id = participants_raffle_participant_id;
      this.image = image;
      this.video = video;
      this.deleted_at = deleted_at;
      this.created_at = created_at;
    }
  
    public getWinner_id(): number | undefined {
      return this.winner_id;
    }
  
    public setWinner_id(winner_id: number | undefined): void {
      this.winner_id = winner_id;
    }
  
    public getParticipants_raffle_participant_id(): number | undefined {
      return this.participants_raffle_participant_id;
    }
  
    public setParticipants_raffle_participant_id(
      participants_raffle_participant_id: number | undefined
    ): void {
      this.participants_raffle_participant_id = participants_raffle_participant_id;
    }
  
    public getImage(): number | undefined {
      return this.image;
    }
  
    public setImage(image: number | undefined): void {
      this.image = image;
    }
  
    public getVideo(): number | undefined {
      return this.video;
    }
  
    public setVideo(video: number | undefined): void {
      this.video = video;
    }
  
    public getDeleted_at(): number | undefined {
      return this.deleted_at;
    }
  
    public setDeleted_at(deleted_at: number | undefined): void {
      this.deleted_at = deleted_at;
    }
  
    public getCreated_at(): number | undefined {
      return this.created_at;
    }
  
    public setCreated_at(created_at: number | undefined): void {
      this.created_at = created_at;
    }
  }
  