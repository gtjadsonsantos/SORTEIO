import { Request, Response } from "express";
import RafflesBO from "../models/bo/RafflesBO";
import RafflesVO from "../models/vo/RafflesVO";
import { IRaffles } from "../types";

export default {
  async indexOne(req: Request, res: Response): Promise<void> {
    try {
      const raffle_id: any = req.params.raffle_id;
      const raffleVO = new RafflesVO();

      raffleVO.setRaffle_id(raffle_id);

      const response = await RafflesBO.indexOne(raffleVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async indexAll(req: Request, res: Response): Promise<void> {
    try {
      const response = await RafflesBO.indexAll();

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async create(req: Request, res: Response): Promise<void> {
    try {
      const raffle: IRaffles = req.body;
      const raffleVO = new RafflesVO();

      raffleVO.setDate_Raffle(raffle.date_raffle);
      raffleVO.setDescription(raffle.description);
      raffleVO.setImage(raffle.image);
      raffleVO.setStatus(raffle.status);
      raffleVO.setSubtitle(raffle.subtitle);
      raffleVO.setTitle(raffle.title);
      raffleVO.setValue(raffle.value);

      const response = await RafflesBO.create(raffleVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async update(req: Request, res: Response): Promise<void> {
    try {
      const raffle: IRaffles = req.body;
      const raffleVO = new RafflesVO();

      raffleVO.setRaffle_id(raffle.raffle_id);
      raffleVO.setDate_Raffle(raffle.date_raffle);
      raffleVO.setDescription(raffle.description);
      raffleVO.setImage(raffle.image);
      raffleVO.setStatus(raffle.status);
      raffleVO.setSubtitle(raffle.subtitle);
      raffleVO.setTitle(raffle.title);
      raffleVO.setValue(raffle.value);

      const response = await RafflesBO.update(raffleVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const raffle: IRaffles = req.body;
      const raffleVO = new RafflesVO();

      raffleVO.setRaffle_id(raffle.raffle_id);

      const response = await RafflesBO.delete(raffleVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
