import { Request, Response } from "express";
import Winner_DrawBO from "../models/bo/Winner_DrawBO";
import Winner_DrawDAO from "../models/dao/Winner_DrawDAO";
import Winners_DrawsVO from "../models/vo/Winners_DrawsVO";
import { IWinner_Draw } from "../types";

export default {
  async indexOne(req: Request, res: Response): Promise<void> {
    try {
      const winner_id: any = req.params.winner_id;
      const winner_drawVO = new Winners_DrawsVO();

      winner_drawVO.setWinner_id(winner_id);

      const response = await Winner_DrawBO.indexOne(winner_drawVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async indexAllJoinWinnersParticipantsUsersQuotasDraw(req:Request,res:Response){
    try {
        const response = await Winner_DrawDAO.indexAllJoinWinnersParticipantsUsersQuotasDraw()
        res.json(response)
    } catch (error) {
      console.log(error)
    }
  },
  async indexAll(req: Request, res: Response): Promise<void> {
    try {
  
    
        const response = await Winner_DrawBO.indexAll();
  
        res.json(response);
      } catch (error) {
        console.log(error);
      }
  },
  async create(req: Request, res: Response): Promise<void> {
    try {
        const winner_draw:IWinner_Draw = req.body
        const winner_drawVO = new Winners_DrawsVO()


        winner_drawVO.setImage(winner_draw.image)
        winner_drawVO.setParticipants_draw_participant_id(winner_draw.participants_draw_participant_id)
        winner_drawVO.setVideo(winner_draw.video)
    

        const response = await Winner_DrawBO.create(winner_drawVO);
  
        res.json(response);
      } catch (error) {
        console.log(error);
      }
  },
  async update(req: Request, res: Response): Promise<void> {
    try {
        const winner_draw:IWinner_Draw = req.body
        const winner_drawVO = new Winners_DrawsVO()


        winner_drawVO.setImage(winner_draw.image)
        winner_drawVO.setWinner_id(winner_draw.winner_id)
        winner_drawVO.setParticipants_draw_participant_id(winner_draw.participants_draw_participant_id)
        winner_drawVO.setVideo(winner_draw.video)
    

        const response = await Winner_DrawBO.update(winner_drawVO);
  
        res.json(response);
      } catch (error) {
        console.log(error);
      }
  },
  async delete(req: Request, res: Response): Promise<void> {

    try {
        const winner_draw:IWinner_Draw = req.body
        const winner_drawVO = new Winners_DrawsVO()


        winner_drawVO.setWinner_id(winner_draw.winner_id)

        const response = await Winner_DrawBO.delete(winner_drawVO);
  
        res.json(response);
      } catch (error) {
        console.log(error);
      }

  },
};
