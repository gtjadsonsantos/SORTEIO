import { Request, Response } from "express";
import ParticipantsDrawDAO from "../dao/ParticipantsDrawDAO";
import Participants_DrawVO from "../vo/Participants_DrawVO";

export default {
  async indexOne(
    participant_DrawVO: Participants_DrawVO
  ): Promise<Participants_DrawVO[] | string> {
    const responseDAO = await ParticipantsDrawDAO.indexOne(participant_DrawVO);
    let responseBO: Participants_DrawVO[] | string = "";

    if (responseDAO.length > 0) {
      responseBO = responseDAO;
    } else {
      responseBO = "O Participante não foi encontrado";
    }

    return responseBO;
  },
  async indexAll(): Promise<Participants_DrawVO[]> {
    const responseDAO = await ParticipantsDrawDAO.indexAll();

    return responseDAO;
  },
  async create(participant_DrawVO: Participants_DrawVO): Promise<string> {
    participant_DrawVO.setStatus("resevation");

    const responseDAO = await ParticipantsDrawDAO.create(participant_DrawVO);
    let responseBO = "";
    if (responseDAO) {
      responseBO = "Sucesso em criar o participante";
    } else {
      responseBO = "Falhou em criar o participante";
    }

    return responseBO;
  },
  async update(participant_DrawVO: Participants_DrawVO): Promise<string> {
    const responseDAO = await ParticipantsDrawDAO.update(participant_DrawVO);

    let responseBO = "";

    if (responseDAO) {
      responseBO = "Sucesso em atualizar o participante";
    } else {
      responseBO = "Falhou em atualizar o participante";
    }

    return responseBO;
  },
  async delete(participant_DrawVO: Participants_DrawVO): Promise<string> {

    const responseDAO = await ParticipantsDrawDAO.delete(participant_DrawVO);

    let responseBO = "";

    if (responseDAO) {
      responseBO = "Sucesso em deletar o participante";
    } else {
      responseBO = "Falhou em deletar o participante";
    }

    return responseBO;
  },
};
