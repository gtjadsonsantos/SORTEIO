import {Request,Response} from 'express'
import conn from "../../database/conn";
import updateAllResevations from "../../middlewares/updateAllResevationsDraw";
import {
  IDraw,
  IDraw_QuotasVO,
  IParticipants_DrawVO,
  IUser,
} from "../../types";
import Participants_DrawVO from "../vo/Participants_DrawVO";
import UserDAO from "./UserDAO";

export default {
  async indexOne(participant_DrawVO: Participants_DrawVO): Promise<Participants_DrawVO[]> {
    const listParticipants_DrawVO: Participants_DrawVO[] = [];
    const listParticipants_Draw: IParticipants_DrawVO[] = await conn("participants_draw")
      .select("*")
      .where("participant_id", "=", `${participant_DrawVO.getParticipant_id()}`)
      .where("deleted_at", null);

    listParticipants_Draw.forEach((item) => {
      const participants_Draw = new Participants_DrawVO();
      participants_Draw.setParticipant_id(item.participant_id);
      participants_Draw.setCreated_at(item.created_at);
      participants_Draw.setDeleted_at(item.deleted_at);
      participants_Draw.setDraw_quotas_draw_quota_id(
        item.draw_quotas_draw_quota_id
      );
      participants_Draw.setUsers_user_id(item.users_user_id);
      participants_Draw.setDraws_draw_id(item.draws_draw_id);
      participants_Draw.setStatus(item.status);

      listParticipants_DrawVO.push(participants_Draw);
    });

    return listParticipants_DrawVO;
  },

  async indexAllJoinDrawsQuotasParticipants(req:Request,res:Response):Promise<any[]>{

    const response:any[] = await conn.raw(`  
    SELECT
      draws.draw_id,
      participants_draw.participant_id,
      draw_quotas.draw_quota_id,
      participants_draw.created_at,
      users.name,
      participants_draw.status,
      draw_quotas.number,
      draws.value
    FROM draws 
      INNER JOIN participants_draw ON draws.draw_id = participants_draw.draws_draw_id
      RIGHT JOIN draw_quotas ON draw_quotas.draw_quota_id  = participants_draw.draw_quotas_draw_quota_id   
      INNER JOIN users ON users.user_id = participants_draw.users_user_id
    WHERE 
	    draws.draw_id = ${req.query.draw_id} and 
      draws.status = "active" and
      draws.deleted_at is null and
      draw_quotas.deleted_at is null and
      participants_draw.deleted_at is null    
    `)
    
  return response
  } ,
  async indexAllJoinDrawsQuotasParticipantsByUser(req:Request,res:Response):Promise<any[]>{

    const response:any[] = await conn.raw(`  
    SELECT
      draws.draw_id,
      participants_draw.participant_id,
      draw_quotas.draw_quota_id,
      participants_draw.created_at,
      users.name,
      draws.title,
      draws.subtitle,
      participants_draw.status,
      draw_quotas.number,
      draws.value
    FROM draws 
      INNER JOIN participants_draw ON draws.draw_id = participants_draw.draws_draw_id
      RIGHT JOIN draw_quotas ON draw_quotas.draw_quota_id  = participants_draw.draw_quotas_draw_quota_id   
      INNER JOIN users ON users.user_id = participants_draw.users_user_id
    WHERE 
	    participants_draw.users_user_id = ${req.params.user_id} and  
      draws.deleted_at is null and
      draw_quotas.deleted_at is null and
      participants_draw.deleted_at is null`)
    
  return response
  } ,
  async indexAll(): Promise<Participants_DrawVO[]> {
    const listParticipants_DrawVO: Participants_DrawVO[] = [];

    const listParticipants_Draw: IParticipants_DrawVO[] = await conn(
      "participants_draw"
    )
      .select("*")
      .where("deleted_at", null);

    listParticipants_Draw.forEach((item) => {
      const participants_Draw = new Participants_DrawVO();
      participants_Draw.setParticipant_id(item.participant_id);
      participants_Draw.setCreated_at(item.created_at);
      participants_Draw.setDeleted_at(item.deleted_at);
      participants_Draw.setDraw_quotas_draw_quota_id(item.draw_quotas_draw_quota_id);
      participants_Draw.setUsers_user_id(item.users_user_id);
      participants_Draw.setDraws_draw_id(item.draws_draw_id);
      participants_Draw.setStatus(item.status);

      listParticipants_DrawVO.push(participants_Draw);
    });

    return listParticipants_DrawVO;
  },
  async create(participant_DrawVO: Participants_DrawVO): Promise<boolean> {
    try {
      const responseUsers: IUser[] = await conn("users")
        .select("*")
        .where("user_id", "=", `${participant_DrawVO.getUsers_user_id()}`)
        .where("deleted_at", null)
        .limit(1);
      const responseDraws: IDraw[] = await conn("draws")
        .select("*")
        .where("draw_id", "=", `${participant_DrawVO.getDraws_draw_id()}`)
        .where("status","=","active")
        .where("deleted_at", null)
        .limit(1);
      const responseDrawQuotas: IDraw_QuotasVO[] = await conn("draw_quotas")
        .select("*")
        .where(
          "draw_quota_id",
          "=",
          `${participant_DrawVO.getDraw_quotas_draw_quota_id()}`
        )
        .where("deleted_at", null);

      const responseParticipants:any[] = await conn("participants_draw")
        .select("*")
        .innerJoin("draws","participants_draw.draws_draw_id","draws.draw_id")
        .where("draws.status","=","active")
        .where("participants_draw.draws_draw_id","=",`${participant_DrawVO.getDraws_draw_id()}`)
        .where("participants_draw.draw_quotas_draw_quota_id","=",`${participant_DrawVO.getDraw_quotas_draw_quota_id()}`)
        .where("participants_draw.deleted_at", null)
        


      let responseDAO = false;

      if (
        responseUsers.length >= 1 &&
        responseDraws.length >= 1 &&
        responseDrawQuotas.length >= 1 &&
        responseParticipants.length == 0
      ) {
        await conn("participants_draw").insert({
          draw_quotas_draw_quota_id: participant_DrawVO.getDraw_quotas_draw_quota_id(),
          users_user_id: participant_DrawVO.getUsers_user_id(),
          draws_draw_id: participant_DrawVO.getDraws_draw_id(),
          status: participant_DrawVO.getStatus(),
        });

        responseDAO = true;
      }

      return responseDAO;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async update(participant_DrawVO: Participants_DrawVO): Promise<boolean> {
    try {
      const responseUsers: IUser[] = await conn("users")
        .select("*")
        .where("user_id", "=", `${participant_DrawVO.getUsers_user_id()}`)
        .where("deleted_at", null)
        .limit(1);
      const responseDraws: IDraw[] = await conn("draws")
        .select("*")
        .where("draw_id", "=", `${participant_DrawVO.getDraws_draw_id()}`)
        .where("deleted_at", null)
        .limit(1);
      const responseDrawQuotas: IDraw_QuotasVO[] = await conn("draw_quotas")
        .select("*")
        .where("draw_quota_id","=",`${participant_DrawVO.getDraw_quotas_draw_quota_id()}`)
        .where("deleted_at", null)
        .limit(1);

      let response: boolean = false;

      if (
        responseUsers.length >= 1 &&
        responseDraws.length >= 1 &&
        responseDrawQuotas.length >= 1
      ) {
        await conn("participants_draw")
          .update({
            draw_quotas_draw_quota_id: participant_DrawVO.getDraw_quotas_draw_quota_id(),
            users_user_id: participant_DrawVO.getUsers_user_id(),
            draws_draw_id: participant_DrawVO.getDraws_draw_id(),
            status: participant_DrawVO.getStatus(),
          })
          .where(
            "participant_id",
            "=",
            `${participant_DrawVO.getParticipant_id()}`
          )
          .where("deleted_at", null);

        response = true;
      }

      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async delete(participant_DrawVO: Participants_DrawVO): Promise<boolean> {
    try {
      const responseUsers: IUser[] = await conn("users")
        .select("*")
        .where("user_id", "=", `${participant_DrawVO.getUsers_user_id()}`)
        .where("deleted_at", null)
        .limit(1);
      const responseDraws: IDraw[] = await conn("draws")
        .select("*")
        .where("draw_id", "=", `${participant_DrawVO.getDraws_draw_id()}`)
        .where("deleted_at", null)
        .limit(1);
      const responseDrawQuotas: IDraw_QuotasVO[] = await conn("draw_quotas")
        .select("*")
        .where("draw_quota_id","=",`${participant_DrawVO.getDraw_quotas_draw_quota_id()}`)
        .where("deleted_at", null)
        .limit(1);
        

      let responseDAO: boolean = false;

      if (
        responseUsers.length >= 1 &&
        responseDraws.length >= 1 &&
        responseDrawQuotas.length >= 1
      ) {
        const response = await conn("participants_draw")
          .update({
            deleted_at: new Date(),
          })
          .where(
            "participant_id",
            "=",
            `${participant_DrawVO.getParticipant_id()}`
          )
          .where("deleted_at", null);

        responseDAO = response == 1 ? true : false;
      }

      return responseDAO;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async updateStatusResevation(): Promise<void> {
    // O CLIENTE COMENTOU QUE ESSA FUNCIONALIDADE NÃO É INTERESSANTE
    //await conn.raw(`
    //UPDATE 
    //  participants_draw
    //SET
    //  participants_draw.deleted_at = now()
    //WHERE 
	  //  participants_draw.status = 'resevation' and 
    //  deleted_at is null and
    //  HOUR(TIMEDIFF(created_at, now())) >= 12;
    //`)
    //setInterval(() => {
    //  this.updateStatusResevation();
    //}, 43200000);
  },
};
