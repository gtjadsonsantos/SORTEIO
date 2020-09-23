import conn from "../../database/conn";
import { Request, Response } from "express";
import {
  IDraw,
  IDraw_QuotasVO,
  IParticipants_DrawVO,
  IUser,
} from "../../types";

export default {
  async indexAll(req: Request, res: Response): Promise<any[] | string> {
    

    try {
      const rows:any = req.query.rows


      const response:any[]  = await conn.raw(`
        SELECT
        participants_raffle.participant_id,
        users.name,
        users.cpf,
        participants_raffle.status,
        GROUP_CONCAT(number) as quotas
        FROM participants_raffle
            INNER JOIN users ON
                 participants_raffle.users_user_id = users.user_id
            INNER JOIN quotas_raffle ON
                 participants_raffle.quotas_raffle_quota_raffle_id = quotas_raffle.quota_raffle_id
            INNER JOIN raffles ON
                raffles.raffle_id = participants_raffle.raffles_raffle_id
          WHERE
              participants_raffle.deleted_at IS NULL AND
              participants_raffle.status = "${req.query.status}" AND
              raffles.status = "active" AND
              raffles.raffle_id = ${req.query.raffle_id}
          GROUP BY
              users.cpf LIMIT ${rows}    
      `)
  
      return response[0];
    } catch (error) {
      console.log(error);
      return "Problema na consula";
    }
  },
};
