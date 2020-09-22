import { Request, Response } from "express";
import conn from "../../database/conn";
import {
  IParticipants_Ruffle,
  IQuotas_Raffle,
  IRaffles,
  IUser,
} from "../../types";
import Participants_RuffleVO from "../vo/Participants_RuffleVO";

export default {
  async indexOne(
    participant_ruffleVO: Participants_RuffleVO
  ): Promise<Participants_RuffleVO[]> {
    const listParticipants_RuffleVO: Participants_RuffleVO[] = [];
    const listParticipants_Ruffle: IParticipants_Ruffle[] = await conn(
      "participants_raffle"
    )
      .select("*")
      .where(
        "participant_id",
        "=",
        `${participant_ruffleVO.getParticipant_id()}`
      )
      .where("deleted_at", null);

    listParticipants_Ruffle.forEach((item) => {
      const participant_ruffle = new Participants_RuffleVO();

      participant_ruffle.setParticipant_id(item.participant_id);
      participant_ruffle.setCreated_at(item.created_at);
      participant_ruffle.setDeleted_at(item.deleted_at);
      participant_ruffle.setQuotas_raffle_quota_raffle_id(
        item.quotas_raffle_quota_raffle_id
      );
      participant_ruffle.setUsers_user_id(item.users_user_id);
      participant_ruffle.setRaffles_raffle_id(item.raffles_raffle_id);
      participant_ruffle.setStatus(item.status);

      listParticipants_RuffleVO.push(participant_ruffle);
    });

    return listParticipants_RuffleVO;
  },
  async indexAll(): Promise<Participants_RuffleVO[]> {
    const listParticipants_RuffleVO: Participants_RuffleVO[] = [];
    const listParticipants_Ruffle: IParticipants_Ruffle[] = await conn("participants_raffle")
      .select("*")
      .where("deleted_at", null);

    listParticipants_Ruffle.forEach((item) => {
      const participant_ruffle = new Participants_RuffleVO();

      participant_ruffle.setParticipant_id(item.participant_id);
      participant_ruffle.setCreated_at(item.created_at);
      participant_ruffle.setDeleted_at(item.deleted_at);
      participant_ruffle.setQuotas_raffle_quota_raffle_id(item.quotas_raffle_quota_raffle_id);
      participant_ruffle.setUsers_user_id(item.users_user_id);
      participant_ruffle.setRaffles_raffle_id(item.raffles_raffle_id);
      participant_ruffle.setStatus(item.status);

      listParticipants_RuffleVO.push(participant_ruffle);
    });

    return listParticipants_RuffleVO;
  },
  async create(participant_ruffleVO: Participants_RuffleVO): Promise<boolean> {
    try {
    
     const response:any[] =  await conn.raw(`
     SELECT 
     *
     FROM participants_raffle 
       RIGHT JOIN raffles ON 
           participants_raffle.raffles_raffle_id = raffles.raffle_id
         RIGHT JOIN quotas_raffle ON 
           participants_raffle.quotas_raffle_quota_raffle_id = quotas_raffle.quota_raffle_id
        RIGHT  JOIN users ON 
           participants_raffle.users_user_id = users.user_id 
         RIGHT JOIN participants_draw ON 
           participants_draw.users_user_id = users.user_id
     WHERE 
       participants_raffle.deleted_at IS NULL AND 
          raffles.deleted_at IS NULL AND 
         quotas_raffle.deleted_at IS NULL AND 
         users.deleted_at IS NULL AND 
         participants_draw.deleted_at IS NULL AND 
          raffles.status = "active" AND
         raffles.raffle_id = ${participant_ruffleVO.getRaffles_raffle_id()} AND 
         quotas_raffle.quota_raffle_id = ${participant_ruffleVO.getQuotas_raffle_quota_raffle_id()} AND 
         participants_draw.users_user_id = ${participant_ruffleVO.getUsers_user_id()} AND 
         participants_draw.status = "sold" AND
         ( SELECT 
          COUNT(*) 
          FROM participants_raffle 
          WHERE 
            participants_raffle.deleted_at IS NULL AND 
              participants_raffle.quotas_raffle_quota_raffle_id = ${participant_ruffleVO.getQuotas_raffle_quota_raffle_id()} AND 
            participants_raffle.raffles_raffle_id =  ${participant_ruffleVO.getRaffles_raffle_id()}
         ) = 0
        `)

      let responseDAO = false;

      if (response.length = 0 ) {
        await conn("participants_raffle").insert({
          quotas_raffle_quota_raffle_id: participant_ruffleVO.getQuotas_raffle_quota_raffle_id(),
          users_user_id: participant_ruffleVO.getUsers_user_id(),
          raffles_raffle_id: participant_ruffleVO.getRaffles_raffle_id(),
          status: participant_ruffleVO.getStatus(),
        });

        responseDAO = true;
      }

      return responseDAO;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async update(participant_ruffleVO: Participants_RuffleVO): Promise<boolean> {
    try {
      const response:any[] =  await conn.raw(`
      SELECT 
      *
      FROM participants_raffle 
        RIGHT JOIN raffles ON 
            participants_raffle.raffles_raffle_id = raffles.raffle_id
          RIGHT JOIN quotas_raffle ON 
            participants_raffle.quotas_raffle_quota_raffle_id = quotas_raffle.quota_raffle_id
         RIGHT  JOIN users ON 
            participants_raffle.users_user_id = users.user_id 
          RIGHT JOIN participants_draw ON 
            participants_draw.users_user_id = users.user_id
      WHERE 
        participants_raffle.deleted_at IS NULL AND 
           raffles.deleted_at IS NULL AND 
          quotas_raffle.deleted_at IS NULL AND 
          users.deleted_at IS NULL AND 
          participants_draw.deleted_at IS NULL AND 
           raffles.status = "active" AND
          raffles.raffle_id = ${participant_ruffleVO.getRaffles_raffle_id()} AND 
          quotas_raffle.quota_raffle_id = ${participant_ruffleVO.getQuotas_raffle_quota_raffle_id()} AND 
          participants_draw.users_user_id = ${participant_ruffleVO.getUsers_user_id()} AND 
          ( SELECT 
           COUNT(*) 
           FROM participants_raffle 
           WHERE 
             participants_raffle.deleted_at IS NULL AND 
               participants_raffle.quotas_raffle_quota_raffle_id = ${participant_ruffleVO.getQuotas_raffle_quota_raffle_id()} AND 
             participants_raffle.raffles_raffle_id =  ${participant_ruffleVO.getRaffles_raffle_id()} AND 
             participants_raffle.participant_id = ${participant_ruffleVO.getParticipant_id()}
          ) = 1
        `)

      let responseDAO = false;

      if (response.length = 1){

        const response = await conn("participants_raffle")
          .update({
            quotas_raffle_quota_raffle_id: participant_ruffleVO.getQuotas_raffle_quota_raffle_id(),
            users_user_id: participant_ruffleVO.getUsers_user_id(),
            raffles_raffle_id: participant_ruffleVO.getRaffles_raffle_id(),
            status: participant_ruffleVO.getStatus(),
          })
          .where(
            "participant_id",
            "=",
            `${participant_ruffleVO.getParticipant_id()}`
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
  async delete(participant_ruffleVO: Participants_RuffleVO): Promise<boolean> {
    try {
       const response:any[] =  await conn.raw(`
      SELECT 
      *
      FROM participants_raffle 
        RIGHT JOIN raffles ON 
            participants_raffle.raffles_raffle_id = raffles.raffle_id
          RIGHT JOIN quotas_raffle ON 
            participants_raffle.quotas_raffle_quota_raffle_id = quotas_raffle.quota_raffle_id
         RIGHT  JOIN users ON 
            participants_raffle.users_user_id = users.user_id 
          RIGHT JOIN participants_draw ON 
            participants_draw.users_user_id = users.user_id
      WHERE 
        participants_raffle.deleted_at IS NULL AND 
           raffles.deleted_at IS NULL AND 
          quotas_raffle.deleted_at IS NULL AND 
          users.deleted_at IS NULL AND 
          participants_draw.deleted_at IS NULL AND 
           raffles.status = "active" AND
          raffles.raffle_id = ${participant_ruffleVO.getRaffles_raffle_id()} AND 
          quotas_raffle.quota_raffle_id = ${participant_ruffleVO.getQuotas_raffle_quota_raffle_id()} AND 
          participants_draw.users_user_id = ${participant_ruffleVO.getUsers_user_id()} AND 
          ( SELECT 
           COUNT(*) 
           FROM participants_raffle 
           WHERE 
             participants_raffle.deleted_at IS NULL AND 
               participants_raffle.quotas_raffle_quota_raffle_id = ${participant_ruffleVO.getQuotas_raffle_quota_raffle_id()} AND 
             participants_raffle.raffles_raffle_id =  ${participant_ruffleVO.getRaffles_raffle_id()} AND 
             participants_raffle.participant_id = ${participant_ruffleVO.getParticipant_id()}
          ) = 1
        `)
      let responseDAO = false;

      if (
        response.length = 1
      ) {
        const response = await conn("participants_raffle")
          .update({
            deleted_at: new Date(),
          })
          .where(
            "participant_id",
            "=",
            `${participant_ruffleVO.getParticipant_id()}`
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
   
    await conn("participants_raffle")
      .update({
        status: "free",
        deleted_at: new Date()
      })
      .whereRaw(
        "HOUR(TIMEDIFF(created_at, now())) >= 12 AND status = 'resevation'"
      );

    setInterval(() => {
      this.updateStatusResevation();
    }, 43200000);
  },
};

