import { Request, Response } from "express";
import conn from "../../database/conn";
import { IRaffles } from "../../types";
import RafflesVO from "../vo/RafflesVO";

export default {
  async indexOne(rafflesVO: RafflesVO): Promise<RafflesVO[]> {
    const listRafflesVO: RafflesVO[] = [];
    const listRaffles: IRaffles[] = await conn("raffles")
      .select("*")
      .where("raffle_id", "=", `${rafflesVO.getRaffle_id()}`)
      .where("deleted_at", null);

    listRaffles.forEach((item) => {
      const raffle = new RafflesVO();

      raffle.setCreated_at(item.created_at);
      raffle.setDate_Raffle(item.date_raffle);
      raffle.setDeleted_at(item.deleted_at);
      raffle.setDescription(item.description);
      raffle.setImage(item.image);
      raffle.setRaffle_id(item.raffle_id);
      raffle.setStatus(item.status);
      raffle.setSubtitle(item.subtitle);
      raffle.setTitle(item.title);
      raffle.setValue(item.value);

      listRafflesVO.push(raffle);
    });

    return listRafflesVO;
  },
  async indexAll(): Promise<RafflesVO[]> {
    const listRafflesVO: RafflesVO[] = [];
    const listRaffles: IRaffles[] = await conn("raffles")
      .select("*")
      .where("deleted_at", null);

    listRaffles.forEach((item) => {
      const raffle = new RafflesVO();

      raffle.setCreated_at(item.created_at);
      raffle.setDate_Raffle(item.date_raffle);
      raffle.setDeleted_at(item.deleted_at);
      raffle.setDescription(item.description);
      raffle.setImage(item.image);
      raffle.setRaffle_id(item.raffle_id);
      raffle.setStatus(item.status);
      raffle.setSubtitle(item.subtitle);
      raffle.setTitle(item.title);
      raffle.setValue(item.value);

      listRafflesVO.push(raffle);
    });

    return listRafflesVO;
  },
  async create(rafflesVO: RafflesVO): Promise<boolean> {
    try {
      await conn("raffles").insert({
        image: rafflesVO.getImage(),
        date_raffle: rafflesVO.getDate_Raffle(),
        description: rafflesVO.getDescription(),
        value: rafflesVO.getValue(),
        title: rafflesVO.getTitle(),
        subtitle: rafflesVO.getSubtitle(),
        status: rafflesVO.getStatus(),
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async update(rafflesVO: RafflesVO): Promise<boolean> {
    try {
      const response = await conn("raffles")
        .update({
          image: rafflesVO.getImage(),
          date_raffle: rafflesVO.getDate_Raffle(),
          description: rafflesVO.getDescription(),
          value: rafflesVO.getValue(),
          title: rafflesVO.getTitle(),
          subtitle: rafflesVO.getSubtitle(),
          status: rafflesVO.getStatus(),
        })
        .where("raffle_id", "=", `${rafflesVO.getRaffle_id()}`);

      return response == 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async delete(rafflesVO: RafflesVO): Promise<boolean> {
    try {
      const response = await conn("raffles")
        .update({
          deleted_at: new Date(),
        })
        .where("raffle_id", "=", `${rafflesVO.getRaffle_id()}`);

      return response == 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
