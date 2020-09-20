import { Request, Response } from "express";
import Quotas_RaffleBO from "../models/bo/Quotas_RaffleBO";
import Quotas_RaffleDAO from "../models/dao/Quotas_RaffleDAO";
import Quotas_RaffleVO from "../models/vo/Quotas_RaffleVO";
import { IQuotas_Raffle } from "../types";

export default {
  async indexOne(req: Request, res: Response) {
    try {
      const quota_raffle_id: any = req.params.quota_raffle_id;
      const quota_raffleVO = new Quotas_RaffleVO();

      quota_raffleVO.setQuota_raffle_id(quota_raffle_id);

      const response = await Quotas_RaffleBO.indexOne(quota_raffleVO);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async indexAll(req: Request, res: Response) {
    try {
      const response = await Quotas_RaffleBO.indexAll();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async create(req: Request, res: Response) {
    try {
      const quota_raffle: IQuotas_Raffle = req.body;
      const quota_raffleVO = new Quotas_RaffleVO();

      quota_raffleVO.setNumber(quota_raffle.number);

      const response = await Quotas_RaffleBO.create(quota_raffleVO);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async update(req: Request, res: Response) {
    try {
      const quota_raffle: IQuotas_Raffle = req.body;
      const quota_raffleVO = new Quotas_RaffleVO();

      quota_raffleVO.setQuota_raffle_id(quota_raffle.quota_raffle_id);
      quota_raffleVO.setNumber(quota_raffle.number);

      const response = await Quotas_RaffleBO.update(quota_raffleVO);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const quota_raffle: IQuotas_Raffle = req.body;
      const quota_raffleVO = new Quotas_RaffleVO();

      quota_raffleVO.setQuota_raffle_id(quota_raffle.quota_raffle_id);

      const response = await Quotas_RaffleBO.delete(quota_raffleVO);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
