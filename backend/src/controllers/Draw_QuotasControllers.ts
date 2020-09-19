import { Request, Response } from "express";
import Draw_QuotasBO from "../models/bo/Draw_QuotasBO";
import Draw_QuotasVO from "../models/vo/Draw_QuotasVO";
import {IDraw_QuotasVO} from '../types'
export default {
  async indexOne(req: Request, res: Response): Promise<void> {
    try {
        const draw_quota_id:any = req.params.draw_quota_id
        const draw_quotaVO = new Draw_QuotasVO()
        
        draw_quotaVO.setDraw_quota_id(draw_quota_id)

       const response =  await Draw_QuotasBO.indexOne(draw_quotaVO)

       res.json(response)

    } catch (error) {
        console.log(error)   
    }

  },
  async indexAll(req: Request, res: Response): Promise<void> {
    try {
    
     const response =  await Draw_QuotasBO.indexAll()

     res.json(response)

  } catch (error) {
      console.log(error)   
  }
  },
  async create(req: Request, res: Response): Promise<void> {

    try {
      const draw_quota:IDraw_QuotasVO = req.body
      const draw_quotaVO = new Draw_QuotasVO()
      
      draw_quotaVO.setNumber(draw_quota.number)

     const response =  await Draw_QuotasBO.create(draw_quotaVO)

     res.json(response)

  } catch (error) {
      console.log(error)   
  }
  },
  async update(req: Request, res: Response): Promise<void> {

    try {
      const draw_quota:IDraw_QuotasVO = req.body
      const draw_quotaVO = new Draw_QuotasVO()

      draw_quotaVO.setDraw_quota_id(draw_quota.draw_quota_id)
      draw_quotaVO.setNumber(draw_quota.number)

     const response =  await Draw_QuotasBO.update(draw_quotaVO)

     res.json(response)

  } catch (error) {
      console.log(error)   
  }
  },
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const draw_quota:IDraw_QuotasVO = req.body
      const draw_quotaVO = new Draw_QuotasVO()

      draw_quotaVO.setDraw_quota_id(draw_quota.draw_quota_id)


     const response =  await Draw_QuotasBO.delete(draw_quotaVO)

     res.json(response)

  } catch (error) {
      console.log(error)   
  }
  },
};
