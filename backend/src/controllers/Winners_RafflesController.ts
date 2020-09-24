import { Request, Response } from "express";
import Winner_RaffleBO from "../models/bo/Winner_RaffleBO";
import Winners_RafflesVO from "../models/vo/Winners_RafflesVO";
import Winner_RaffleDAO from "../models/dao/Winner_RaffleDAO"
import IWinner_Raffle from "../types";

export default {
  async indexOne(req: Request, res: Response): Promise<void> {
    try {
      const winner_id: any = req.params.winner_id;
      const winner_raffleVO = new Winners_RafflesVO();
      winner_raffleVO.setWinner_id(winner_id);

      const response = await Winner_RaffleBO.indexOne(winner_raffleVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async indexAllJoinWinnersParticipantsUsersQuotasRaffles(req:Request,res:Response){
    try {

      const response = await Winner_RaffleDAO.indexAllJoinWinnersParticipantsUsersQuotasRaffles()
      res.json(response)
    } catch (error) {
      console.log(error)
    }

  },
  async indexAll(req: Request, res: Response): Promise<void> {
    try {
      const response = await Winner_RaffleBO.indexAll();

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async create(req: Request, res: Response): Promise<void> {
    try {
      const winner_raffle: IWinner_Raffle = req.body;
      const winner_raffleVO = new Winners_RafflesVO();

      winner_raffleVO.setImage(winner_raffle.image);
      winner_raffleVO.setVideo(winner_raffle.video);
      winner_raffleVO.setParticipants_raffle_participant_id(
        winner_raffle.participants_raffle_participant_id
      );

      const response = await Winner_RaffleBO.create(winner_raffleVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async update(req: Request, res: Response): Promise<void> {
    try {
      const winner_raffle: IWinner_Raffle = req.body;
      const winner_raffleVO = new Winners_RafflesVO();

      winner_raffleVO.setWinner_id(winner_raffle.winner_id);
      winner_raffleVO.setParticipants_raffle_participant_id(
        winner_raffle.participants_raffle_participant_id
      );
      winner_raffleVO.setImage(winner_raffle.image);
      winner_raffleVO.setVideo(winner_raffle.video);

      const response = await Winner_RaffleBO.update(winner_raffleVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const winner_raffle: IWinner_Raffle = req.body;
      const winner_raffleVO = new Winners_RafflesVO();

      winner_raffleVO.setWinner_id(winner_raffle.winner_id);
      winner_raffleVO.setParticipants_raffle_participant_id(
        winner_raffle.participants_raffle_participant_id
      );

      const response = await Winner_RaffleBO.delete(winner_raffleVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
