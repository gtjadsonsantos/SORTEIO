export interface IUser {
  user_id?: number | undefined;
  name?: string | undefined;
  cpf?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
  password?: string | undefined;
  type?: string | undefined;
  created_at?: string | undefined;
  deleted_at?: string | undefined;
  address?: string | undefined;
}

export interface IDraw {
  draw_id?: number;
  title?: string;
  subtitle?: string;
  date_draw?: string;
  value?: number;
  description?: string;
  status?: string;
  created_at?: string;
  deleted_at?: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IImage {
  image_id?: number;
  name?: string;
  data_image?: string;
  created_at?: string;
  deleted_at?: string;
  draws_draw_id?: number;
}

export interface IDraw_QuotasVO {
  draw_quota_id?: number;
  number?: string;
  created_at?: string;
  deleted_at?: string;
}
export interface IParticipants_DrawVO {
  participant_id?: number;
  draw_quotas_draw_quota_id?: number;
  users_user_id?: number;
  draws_draw_id?: number;
  created_at?: string;
  status?: string;
  deleted_at?: string;
}

export interface IWinner_Draw {
  winner_id?: number;
  participants_draw_participant_id?: number;
  image?: number;
  video?: number;
  deleted_at?: number;
  created_at?: number;
}

export interface IBank_Account {
  bank_account_id?: number;
  name?: string;
  agency?: string;
  number_account?: string;
  created_at?: string;
  image?: string;
  cpf?: string;
  cnpj?: string;
  deleted_at?: string;
}

export interface IBusiness {
  business_id?: number;
  cnpj?: string;
  fantasy_name?: string;
  logo?: string;
  social?: string;
  phone?: string;
  deleted_at?: string;
  regulation?: string;
  banner?:string
}

export interface IQuotas_Raffle {
  quota_raffle_id?: number;
  number?: string;
  created_at?: string;
  deleted_at?: string;
}

export interface IRaffles {
  raffle_id?: number;
  image?: string;
  created_at?: string;
  date_raffle?: string;
  description?: string;
  value?: number;
  title?: string;
  subtitle?: string;
  status?: string;
  deleted_at?: string;
}

export interface IParticipants_Ruffle {
  participant_id?: number;
  users_user_id?: number;
  created_at?: string;
  quotas_raffle_quota_raffle_id?: number;
  raffles_raffle_id?: number;
  status?: string;
  deleted_at?: string;
}

export default interface IWinner_Raffle {
  winner_id?: number;
  participants_raffle_participant_id?: number;
  image?: number;
  video?: number;
  deleted_at?: number;
  created_at?: number;
}
export interface IReportDraws {
  rows?: number;
  draw_id?: number;
  
}
