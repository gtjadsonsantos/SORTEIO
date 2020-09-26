import { Request, Response } from "express";
import DrawBO from "../models/bo/DrawBO";
import DrawDAO from "../models/dao/DrawDAO";
import DrawVO from "../models/vo/DrawVO";
import { IDraw } from "../types";

export default {
    async indexOne(req: Request, res: Response): Promise<void> {
        try {
            const draw_id:any = req.params.draw_id     
            const drawVO = new DrawVO();

            drawVO.setDraw_id(draw_id);

           const listDrawVO =  await DrawBO.indexOne(drawVO)

           res.json(listDrawVO)

            
        } catch (error) {
            console.log(error)
        }   
    },
    async indexAllJoinDrawsImages(req: Request, res: Response):Promise<void>{

        try {
          
            const listDrawVO =  await DrawDAO.indexAllJoinDrawsImages()
 
            res.json(listDrawVO)
             
         } catch (error) {
             console.log(error)
         }  
    },
    async indexAll(req: Request, res: Response): Promise<void> {

        try {
          
           const listDrawVO =  await DrawBO.indexAll()

           res.json(listDrawVO)
            
        } catch (error) {
            console.log(error)
        }  
    },
    async create(req: Request, res: Response): Promise<void> {

        try {
            const draw:IDraw = req.body
            const drawVO = new DrawVO()

            drawVO.setTitle(draw.title)
            drawVO.setSubtitle(draw.subtitle)
            drawVO.setDate_draw(draw.date_draw)
            drawVO.setDescription(draw.description)
            drawVO.setValue(draw.value)
            drawVO.setCreated_at(draw.created_at)
            drawVO.setStatus(draw.status)
            
            const response = await DrawBO.create(drawVO)
            res.json(response)
        } catch (error) {
            console.log(error)
        }

    },
    async update(req: Request, res: Response): Promise<void> {


        try {
            const draw:IDraw = req.body
            const drawVO = new DrawVO()

            drawVO.setDraw_id(draw.draw_id)
            drawVO.setTitle(draw.title)
            drawVO.setSubtitle(draw.subtitle)
            drawVO.setDate_draw(draw.date_draw)
            drawVO.setDescription(draw.description)
            drawVO.setValue(draw.value)
            drawVO.setCreated_at(draw.created_at)
            drawVO.setStatus(draw.status)
            
            const response = await DrawBO.update(drawVO)

            res.json(response)
        } catch (error) {
            console.log(error)
        }

    },
    async delete(req: Request, res: Response): Promise<void> {


        try {
            const draw:IDraw = req.body
            const drawVO = new DrawVO()
            
            drawVO.setDraw_id(draw.draw_id)
            drawVO.setDeleted_at(draw.deleted_at)
            
            const response = await DrawBO.delete(drawVO)

            res.json(response)
        } catch (error) {
            console.log(error)
        }
    },
}