import conn from "../../database/conn";
import { IQuotas_Raffle } from "../../types";
import Quotas_RaffleVO from "../vo/Quotas_RaffleVO";

export default {
  async indexOne(quota_raffleVO: Quotas_RaffleVO): Promise<Quotas_RaffleVO[]> {
    const listQuota_RaffleVO: Quotas_RaffleVO[] = [];
    const listQuota_Raffle: IQuotas_Raffle[] = await conn("quotas_raffle")
      .select("*")
      .where("quota_raffle_id", "=", `${quota_raffleVO.getQuota_raffle_id()}`)
      .where("deleted_at", null);

    listQuota_Raffle.forEach((item) => {
      const quotas_raffle = new Quotas_RaffleVO();
      quotas_raffle.setCreated_at(item.created_at);
      quotas_raffle.setDeleted_at(item.deleted_at);
      quotas_raffle.setNumber(item.number);
      quotas_raffle.setQuota_raffle_id(item.quota_raffle_id);

      listQuota_RaffleVO.push(quotas_raffle);
    });

    return listQuota_RaffleVO;
  },
  async indexAll(): Promise<Quotas_RaffleVO[]> {
    const listQuota_RaffleVO: Quotas_RaffleVO[] = [];
    const listQuota_Raffle: IQuotas_Raffle[] = await conn("quotas_raffle")
      .select("*")
      .where("deleted_at", null);

    listQuota_Raffle.forEach((item) => {
      const quotas_raffle = new Quotas_RaffleVO();
      quotas_raffle.setCreated_at(item.created_at);
      quotas_raffle.setDeleted_at(item.deleted_at);
      quotas_raffle.setNumber(item.number);
      quotas_raffle.setQuota_raffle_id(item.quota_raffle_id);

      listQuota_RaffleVO.push(quotas_raffle);
    });

    return listQuota_RaffleVO;
  },
  async create(quota_raffleVO: Quotas_RaffleVO): Promise<boolean> {
    try {
      await conn("quotas_raffle").insert({
        number: quota_raffleVO.getNumber(),
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async update(quota_raffleVO: Quotas_RaffleVO): Promise<boolean> {
    try {
      const response = await conn("quotas_raffle")
        .update({
          number: quota_raffleVO.getNumber(),
        })
        .where("quota_raffle_id", "=", `${quota_raffleVO.getQuota_raffle_id()}`)
        .where("deleted_at", null);

      return response == 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async delete(quota_raffleVO: Quotas_RaffleVO): Promise<boolean> {
    try {
      const response = await conn("quotas_raffle")
        .update({
          deleted_at: new Date(),
        })
        .where("quota_raffle_id", "=", `${quota_raffleVO.getQuota_raffle_id()}`)
        .where("deleted_at", null);

      return response == 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
