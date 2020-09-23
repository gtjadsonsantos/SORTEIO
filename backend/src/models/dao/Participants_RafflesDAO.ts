import { Request, Response } from "express";
import conn from "../../database/conn";
import {
  IParticipants_DrawVO,
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
      .where("participant_id","=",`${participant_ruffleVO.getParticipant_id()}`)
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
    const listParticipants_Ruffle: IParticipants_Ruffle[] = await conn(
      "participants_raffle"
    )
      .select("*")
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
  async create(participant_ruffleVO: Participants_RuffleVO): Promise<boolean> {
    try {
      const responseUsers: IParticipants_DrawVO[] = await conn("participants_draw")
        .select("*")
        .where("users_user_id","=",`${participant_ruffleVO.getUsers_user_id()}`)
        .where("status", "=", "sold")
        .where("deleted_at", null)
        .limit(1);

      const responseRuffles: IRaffles[] = await conn("raffles")
        .select("*")
        .where("raffle_id","=",`${participant_ruffleVO.getRaffles_raffle_id()}`)
        .where("status", "=", "active")
        .where("deleted_at", null)
        .limit(1);
      const responseRafflesQuotas: IQuotas_Raffle[] = await conn("quotas_raffle")
        .select("*")
        .where("quota_raffle_id","=",`${participant_ruffleVO.getQuotas_raffle_quota_raffle_id()}`)
        .where("deleted_at", null);

      let responseDAO = false;  

      if (
        responseUsers.length >= 1 &&
        responseRuffles.length >= 1 &&
        responseRafflesQuotas.length >= 1
      ) {
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
    const responseUsers: IParticipants_DrawVO[] = await conn("participants_draw")
        .select("*")
        .where("users_user_id","=",`${participant_ruffleVO.getUsers_user_id()}`)
        .where("status", "=", "sold")
        .where("deleted_at", null)
        .limit(1);

      const responseRuffles: IRaffles[] = await conn("raffles")
        .select("*")
        .where("raffle_id","=",`${participant_ruffleVO.getRaffles_raffle_id()}`)
        .where("status", "=", "active")
        .where("deleted_at", null)
        .limit(1);
      const responseRafflesQuotas: IQuotas_Raffle[] = await conn("quotas_raffle")
        .select("*")
        .where("quota_raffle_id","=",`${participant_ruffleVO.getQuotas_raffle_quota_raffle_id()}`)
        .where("deleted_at", null);

      let responseDAO = false;

      if (
        responseUsers.length >= 1 &&
        responseRuffles.length >= 1 &&
        responseRafflesQuotas.length >= 1
      ) {
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

      let responseDAO = false;

        const response = await conn("participants_raffle")
          .update({deleted_at: new Date()})
          .where("participant_id","=",`${participant_ruffleVO.getParticipant_id()}`)
          .where("deleted_at", null);

        responseDAO = response == 1 ? true : false;
      

      return responseDAO;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async updateStatusResevation(): Promise<void> {
    //const result = await conn.raw(`UPDATE participants_draw SET status = "free" WHERE HOUR(TIMEDIFF(created_at, now())) >= 12 AND status ='resevation';`);
    await conn("participants_draw")
      .update({
        status: "free",
        deleted_at: new Date(),
      })
      .whereRaw("HOUR(TIMEDIFF(created_at, now())) >= 12 AND status = 'resevation'");

    setInterval(() => {
      this.updateStatusResevation();
    }, 43200000);
  },
};
