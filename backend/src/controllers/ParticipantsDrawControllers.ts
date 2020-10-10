import { Request, Response } from "express";
import ParticipantsDrawBO from "../models/bo/ParticipantsDrawBO";
import ParticipantsDrawDAO from "../models/dao/ParticipantsDrawDAO";
import Participants_DrawVO from "../models/vo/Participants_DrawVO";
import { IParticipants_DrawVO } from "../types";

export default {
  async indexOne(req: Request, res: Response): Promise<void> {
    try {
      const participant_id: any = req.params.participant_id;
      const participant_DrawVO = new Participants_DrawVO();

      participant_DrawVO.setParticipant_id(participant_id);

      const response = await ParticipantsDrawBO.indexOne(participant_DrawVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async indexAllJoinDrawsQuotasParticipants(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const response = await ParticipantsDrawDAO.indexAllJoinDrawsQuotasParticipants(
        req,
        res
      );
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },

  async indexAllJoinDrawsQuotasParticipantsByUser(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const response = await ParticipantsDrawDAO.indexAllJoinDrawsQuotasParticipantsByUser(
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
      const response = await ParticipantsDrawBO.indexAll();

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async create(req: Request, res: Response): Promise<void> {
    try {
      const participant_draw: IParticipants_DrawVO = req.body;
      const participant_DrawVO = new Participants_DrawVO();

      participant_DrawVO.setDraw_quotas_draw_quota_id(
        participant_draw.draw_quotas_draw_quota_id
      );
      participant_DrawVO.setUsers_user_id(participant_draw.users_user_id);
      participant_DrawVO.setDraws_draw_id(participant_draw.draws_draw_id);

      const response = await ParticipantsDrawBO.create(participant_DrawVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async update(req: Request, res: Response): Promise<void> {
    try {
      const participant_draw: IParticipants_DrawVO = req.body;
      const participant_DrawVO = new Participants_DrawVO();

      participant_DrawVO.setParticipant_id(participant_draw.participant_id);
      participant_DrawVO.setDraw_quotas_draw_quota_id(
        participant_draw.draw_quotas_draw_quota_id
      );
      participant_DrawVO.setUsers_user_id(participant_draw.users_user_id);
      participant_DrawVO.setDraws_draw_id(participant_draw.draws_draw_id);
      participant_DrawVO.setStatus(participant_draw.status);

      const response = await ParticipantsDrawBO.update(participant_DrawVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const participant_draw: IParticipants_DrawVO = req.body;
      const participant_DrawVO = new Participants_DrawVO();

      participant_DrawVO.setParticipant_id(participant_draw.participant_id);
      participant_DrawVO.setDraw_quotas_draw_quota_id(
        participant_draw.draw_quotas_draw_quota_id
      );
      participant_DrawVO.setUsers_user_id(participant_draw.users_user_id);
      participant_DrawVO.setDraws_draw_id(participant_draw.draws_draw_id);

      const response = await ParticipantsDrawBO.delete(participant_DrawVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
