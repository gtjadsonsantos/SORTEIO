import ImageVO from "../vo/ImagesVO";
import conn from "../../database/conn";
import { IImage } from "../../types";

export default {
  async indexOne(imageVO: ImageVO): Promise<ImageVO[]> {
    const listImageVO: ImageVO[] = [];

    const listImage: IImage[] = await conn("images")
      .select("*")
      .where("image_id", "=", `${imageVO.getImage_id()}`)
      .where("deleted_at", null);

    listImage.forEach((item) => {
      const image = new ImageVO();

      image.setImage_id(item.image_id);
      image.setName(item.name);
      image.setDraws_draw_id(item.draws_draw_id);
      image.setCreated_at(item.created_at);
      image.setDeleted_at(item.deleted_at);
      image.setData_image(item.data_image);

      listImageVO.push(image);
    });

    return listImageVO;
  },
  async indexAll(): Promise<ImageVO[]> {
    const listImageVO: ImageVO[] = [];

    const listImage: IImage[] = await conn("images")
      .select("*")
      .where("deleted_at", null);

    listImage.forEach((item) => {
      const image = new ImageVO();

      image.setImage_id(item.image_id);
      image.setName(item.name);
      image.setDraws_draw_id(item.draws_draw_id);
      image.setCreated_at(item.created_at);
      image.setDeleted_at(item.deleted_at);
      image.setData_image(item.data_image);

      listImageVO.push(image);
    });

    return listImageVO;
  },
  async create(imageVO: ImageVO): Promise<boolean> {
    try {
      await conn("images")
      .insert({
        name: imageVO.getName(),
        data_image: imageVO.getData_image(),
        draws_draw_id: imageVO.getDraws_draw_id()
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  },
  async update(imageVO: ImageVO): Promise<boolean> {
    try {
    const response =   await conn("images")
      .update({
        name: imageVO.getName(),
        data_image: imageVO.getData_image(),
        draws_draw_id: imageVO.getDraws_draw_id()
      })
      .where("image_id","=",`${imageVO.getImage_id()}`)

      return response  == 1? true:false
    } catch (error) {
      console.log(error)
      return false
    }
  },
  async delete(imageVO: ImageVO): Promise<boolean> {
    try {
      const response =  await conn("images")
        .update({
          "deleted_at": new Date()
        })
        .where("image_id","=",`${imageVO.getImage_id()}`)
        
        return response  == 1? true:false

      } catch (error) {
        console.log(error)
        return false
      }
  },
};
