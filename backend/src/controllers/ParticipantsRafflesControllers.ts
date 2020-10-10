import { Request, Response } from "express";
import Participants_RafflesBO from "../models/bo/Participants_RafflesBO";
import Participants_RafflesDAO from "../models/dao/Participants_RafflesDAO";
import RafflesDAO from "../models/dao/RafflesDAO";
import Participants_RuffleVO from "../models/vo/Participants_RuffleVO";
import { IParticipants_Ruffle } from "../types";

export default {
  async indexOne(req: Request, res: Response): Promise<void> {
    try {
      const participant_id: any = req.params.participant_id;
      const participant_ruffleVO = new Participants_RuffleVO();

      participant_ruffleVO.setParticipant_id(participant_id);

      const response = await Participants_RafflesBO.indexOne(
        participant_ruffleVO
      );
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async indexAllJoinRafflesQuotasParticipants(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const response = await Participants_RafflesDAO.indexAllJoinRafflesQuotasParticipants(
        req,
        res
      );
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async indexAllJoinRafflesQuotasParticipantsByUser(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const response = await Participants_RafflesDAO.indexAllJoinRafflesQuotasParticipantsByUser(
        req,
        res
      );
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async indexAll(req: Request, res: Response): Promise<void> {
    try {
      const response = await Participants_RafflesBO.indexAll();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async create(req: Request, res: Response): Promise<void> {
    try {
      const participant: IParticipants_Ruffle = req.body;
      const participant_ruffleVO = new Participants_RuffleVO();

      participant_ruffleVO.setQuotas_raffle_quota_raffle_id(
        participant.quotas_raffle_quota_raffle_id
      );
      participant_ruffleVO.setUsers_user_id(participant.users_user_id);
      participant_ruffleVO.setRaffles_raffle_id(participant.raffles_raffle_id);
      participant_ruffleVO.setStatus("resevation");

      const response = await Participants_RafflesBO.create(
        participant_ruffleVO
      );

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async update(req: Request, res: Response): Promise<void> {
    try {
      const participant: IParticipants_Ruffle = req.body;
      const participant_ruffleVO = new Participants_RuffleVO();

      participant_ruffleVO.setParticipant_id(participant.participant_id);
      participant_ruffleVO.setQuotas_raffle_quota_raffle_id(
        participant.quotas_raffle_quota_raffle_id
      );
      participant_ruffleVO.setUsers_user_id(participant.users_user_id);
      participant_ruffleVO.setRaffles_raffle_id(participant.raffles_raffle_id);
      participant_ruffleVO.setStatus(participant.status);

      const response = await Participants_RafflesBO.update(
        participant_ruffleVO
      );
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const participant: IParticipants_Ruffle = req.body;
      const participant_ruffleVO = new Participants_RuffleVO();

      participant_ruffleVO.setParticipant_id(participant.participant_id);
      participant_ruffleVO.setQuotas_raffle_quota_raffle_id(
        participant.quotas_raffle_quota_raffle_id
      );
      participant_ruffleVO.setUsers_user_id(participant.users_user_id);
      participant_ruffleVO.setRaffles_raffle_id(participant.raffles_raffle_id);

      const response = await Participants_RafflesBO.delete(
        participant_ruffleVO
      );
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
