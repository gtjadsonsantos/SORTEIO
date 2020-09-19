import { IImage } from "../types";
import {Request,Response} from 'express'
import ImageVO from "../models/vo/ImagesVO";
import ImageBO from "../models/bo/ImageBO";


export default {
  async indexOne(req: Request, res: Response): Promise<void> {
    try {
        
        const image_id:any = req.params.image_id


        const imageVO = new ImageVO()

        imageVO.setImage_id(image_id)

       const listImageBO = await ImageBO.indexOne(imageVO)

       res.json(listImageBO)

    } catch (error) {
        console.log(error)
    }

  },
  async indexAll(req: Request, res: Response): Promise<void> {
      try {
          
        const listImageBO = await ImageBO.indexAll()

        res.json(listImageBO)
      } catch (error) {
          console.log(error)
      }
  },
  async create(req: Request, res: Response): Promise<void> {
    try {
        const image:IImage = req.body
        const imageVO = new ImageVO()

        imageVO.setName(image.name)
        imageVO.setDraws_draw_id(image.draws_draw_id)
        imageVO.setData_image(image.data_image)

       const response = await ImageBO.create(imageVO)
       res.json(response)

    } catch (error) {
        
    }

  },
  async update(req: Request, res: Response): Promise<void> {

    try {
        
        const image:IImage = req.body
        const imageVO = new ImageVO()

        imageVO.setImage_id(image.image_id)
        imageVO.setName(image.name)
        imageVO.setDraws_draw_id(image.draws_draw_id)
        imageVO.setData_image(image.data_image)

       const response = await ImageBO.update(imageVO)
       res.json(response)

    } catch (error) {
        
    }
  },
  async delete(req: Request, res: Response): Promise<void> {
    try {
        
        const image:IImage = req.body
        const imageVO = new ImageVO()
        imageVO.setImage_id(image.image_id)
       
       const response = await ImageBO.delete(imageVO)
       res.json(response)

    } catch (error) {
        
    }
  },
};
