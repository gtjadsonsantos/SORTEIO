import { Request, Response } from "express";
import RafflesDAO from "../dao/RafflesDAO";
import RafflesVO from "../vo/RafflesVO";

export default {
  async indexOne(raflleVO: RafflesVO): Promise<RafflesVO[] | string> {
    const responseDAO = await RafflesDAO.indexOne(raflleVO);
    let responseBO: RafflesVO[] | string = "";

    if (responseDAO.length >= 1) {
      responseBO = responseDAO;
    } else {
      responseBO = "Rifa não encontrada";
    }

    return responseBO;
  },
  async indexAll(): Promise<RafflesVO[]> {
    const responseDAO = await RafflesDAO.indexAll();

    return responseDAO;
  },
  async create(raflleVO: RafflesVO): Promise<string> {
    const responseDAO = await RafflesDAO.create(raflleVO);
    let responseBO: string = "";

    if (responseDAO) {
      responseBO = "Sucesso em criar rifa";
    } else {
      responseBO = "Falhou em criar a rifa";
    }

    return responseBO;
  },
  async update(raflleVO: RafflesVO): Promise<string> {
    const responseDAO = await RafflesDAO.update(raflleVO);
    let responseBO: string = "";

    if (responseDAO) {
      responseBO = "Sucesso em atualizar a rifa";
    } else {
      responseBO = "Falhou em atualizar a rifa";
    }

    return responseBO;
  },
  async delete(raflleVO: RafflesVO): Promise<string> {
    const responseDAO = await RafflesDAO.delete(raflleVO);
    let responseBO: string = "";

    if (responseDAO) {
      responseBO = "Sucesso em deletar a rifa";
    } else {
      responseBO = "Falhou em deletar a rifa";
    }

    return responseBO;
  },
};
