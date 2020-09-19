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

export interface  IDraw_QuotasVO {
   draw_quota_id?: number;
   number?: string;
   created_at?: string;
   deleted_at?: string;
}
export interface IParticipants_DrawVO {
  participant_id?: number,
  draw_quotas_draw_quota_id?: number,
  users_user_id?: number,
  draws_draw_id?: number,
  created_at?: string,
  status?: string,
  deleted_at?: string
}