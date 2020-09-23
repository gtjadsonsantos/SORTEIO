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
        participants_draw.participant_id,
        users.name,
        users.cpf,
        participants_draw.status,
        GROUP_CONCAT( number) as contas
        FROM participants_draw
            INNER JOIN users ON
                 participants_draw.users_user_id = users.user_id
            INNER JOIN draw_quotas ON
                 participants_draw.draw_quotas_draw_quota_id = draw_quotas.draw_quota_id
            INNER JOIN draws ON
                draws.draw_id = participants_draw.draws_draw_id
          WHERE
              participants_draw.deleted_at IS NULL AND
              participants_draw.status = "${req.query.status}" AND
              draws.status = "active" AND
              draws.draw_id = ${req.query.draw_id}
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
