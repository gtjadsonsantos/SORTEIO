import conn from "../../database/conn";
import { IDraw } from "../../types";
import DrawVO from "../vo/DrawVO";

export default {
  async indexOne(drawVO: DrawVO): Promise<DrawVO[]> {
    const listDrawVO: DrawVO[] = [];

    const listDraw: IDraw[] = await conn("draws")
      .select("*")
      .where("draw_id", "=", `${drawVO.getDraw_id()}`)
      .where("deleted_at", null);

    listDraw.forEach((item) => {
      const draw = new DrawVO();

      draw.setDraw_id(item.draw_id);
      draw.setTitle(item.title);
      draw.setSubtitle(item.subtitle);
      draw.setDate_draw(item.date_draw);
      draw.setDescription(item.description);
      draw.setValue(item.value);
      draw.setCreated_at(item.created_at);
      draw.setDeleted_at(item.deleted_at);
      draw.setStatus(item.status);

      listDrawVO.push(draw);
    });

    return listDrawVO;
  },
  async indexAll(): Promise<DrawVO[]> {
    const listDrawVO: DrawVO[] = [];

    const listDraw: IDraw[] = await conn("draws")
      .select("*")
      .where("deleted_at", null);

    listDraw.forEach((item) => {
      const draw = new DrawVO();

      draw.setDraw_id(item.draw_id);
      draw.setTitle(item.title);
      draw.setSubtitle(item.subtitle);
      draw.setDate_draw(item.date_draw);
      draw.setDescription(item.description);
      draw.setValue(item.value);
      draw.setCreated_at(item.created_at);
      draw.setDeleted_at(item.deleted_at);
      draw.setStatus(item.status);

      listDrawVO.push(draw);
    });

    return listDrawVO;
  },
  async indexAllJoinDrawsImages():Promise<any>{
   const response =   await conn.raw(`
   SELECT 
   *
   FROM draws 
     INNER JOIN images ON images.draws_draw_id = draws.draw_id
   `)

   return response
  },
  async create(drawVO: DrawVO): Promise<boolean> {
    try {
      await conn("draws").insert({
        title: drawVO.getTitle(),
        subtitle: drawVO.getSubtitle(),
        date_draw: drawVO.getDate_draw(),
        value: drawVO.getValue(),
        description: drawVO.getDescription(),
        status: drawVO.getStatus(),
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async update(drawVO: DrawVO): Promise<boolean> {
    try {
      const response = await conn("draws")
        .update({
          title: drawVO.getTitle(),
          subtitle: drawVO.getSubtitle(),
          date_draw: drawVO.getDate_draw(),
          value: drawVO.getValue(),
          description: drawVO.getDescription(),
          status: drawVO.getStatus(),
        })
        .where("draw_id", "=", `${drawVO.getDraw_id()}`);

      return response == 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async delete(drawVO: DrawVO): Promise<boolean> {
    try {
      const response = await conn("draws")
        .update({ deleted_at: new Date() })
        .where("draw_id", "=", `${drawVO.getDraw_id()}`);

      return response == 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
