import { Request, Response } from "express";
import conn from "../../database/conn";
import { IDraw_QuotasVO } from "../../types";
import Draw_QuotasVO from "../vo/Draw_QuotasVO";

export default {
  async indexOne(draw_quotaVO: Draw_QuotasVO): Promise<Draw_QuotasVO[]> {
    const listDraw_QuotasVO: Draw_QuotasVO[] = [];

    const listDraw_Quota: IDraw_QuotasVO[] = await conn("draw_quotas")
      .select("*")
      .where("draw_quota_id", "=", `${draw_quotaVO.getDraw_quota_id()}`)
      .where("deleted_at", null);

    listDraw_Quota.forEach((item) => {
      const draw_quota = new Draw_QuotasVO();

      draw_quota.setDraw_quota_id(item.draw_quota_id);
      draw_quota.setNumber(item.number);
      draw_quota.setDeleted_At(item.deleted_at);
      draw_quota.setCreated_at(item.created_at);

      listDraw_QuotasVO.push(draw_quota);
    });

    return listDraw_QuotasVO;
  },
  async indexAll(): Promise<Draw_QuotasVO[]> {
    const listDraw_QuotasVO: Draw_QuotasVO[] = [];

    const listDraw_Quota: IDraw_QuotasVO[] = await conn("draw_quotas")
      .select("*")
      .where("deleted_at", null);

    listDraw_Quota.forEach((item) => {
      const draw_quota = new Draw_QuotasVO();

      draw_quota.setDraw_quota_id(item.draw_quota_id);
      draw_quota.setNumber(item.number);
      draw_quota.setDeleted_At(item.deleted_at);
      draw_quota.setCreated_at(item.created_at);

      listDraw_QuotasVO.push(draw_quota);
    });

    return listDraw_QuotasVO;
  },
  async create(draw_quotaVO: Draw_QuotasVO): Promise<boolean> {
    try {
      await conn("draw_quotas").insert({
        number: draw_quotaVO.getNumber(),
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async update(draw_quotaVO: Draw_QuotasVO): Promise<boolean> {
    try {
     const response =  await conn("draw_quotas")
        .update({
          number: draw_quotaVO.getNumber(),
        })
        .where("draw_quota_id", "=", `${draw_quotaVO.getDraw_quota_id()}`)
        .where("deleted_at", null);

      return response == 1? true:false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async delete(draw_quotaVO: Draw_QuotasVO): Promise<boolean> {
    try {
      const response =  await conn("draw_quotas")
         .update({
          "deleted_at": new Date()
         })
         .where("draw_quota_id", "=", `${draw_quotaVO.getDraw_quota_id()}`)
 
       return response == 1? true:false;
     } catch (error) {
       console.log(error);
       return false;
     }
  },
};
