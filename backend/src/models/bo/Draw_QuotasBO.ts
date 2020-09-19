import { Request, Response } from "express";
import Draw_QuotasDAO from "../dao/Draw_QuotasDAO";
import Draw_QuotasVO from "../vo/Draw_QuotasVO";

export default {
  async indexOne(
    draw_QuotasVO: Draw_QuotasVO
  ): Promise<Draw_QuotasVO[] | string> {
    const listDrawQuotas = await Draw_QuotasDAO.indexOne(draw_QuotasVO);
    let response: Draw_QuotasVO[] | string = "";

    if (listDrawQuotas.length >= 1) {
      response = listDrawQuotas;
    } else {
      response = "Cota não encontrada";
    }

    return response;
  },
  async indexAll(): Promise<Draw_QuotasVO[]> {
    const listDrawQuotas = await Draw_QuotasDAO.indexAll();

    return listDrawQuotas;
  },
  async create(draw_QuotasVO: Draw_QuotasVO): Promise<string> {
    const responseDAO = await Draw_QuotasDAO.create(draw_QuotasVO);
    let responseBO: string = "";
    if (responseDAO) {
      responseBO = "Sucesso em criar a cota";
    } else {
      responseBO = "Falhou em criar a cota";
    }

    return responseBO
  },
  async update(draw_QuotasVO: Draw_QuotasVO): Promise<string> {
    const responseDAO = await Draw_QuotasDAO.update(draw_QuotasVO);
    let responseBO: string = "";
    if (responseDAO) {
      responseBO = "Sucesso em atualizar a cota";
    } else {
      responseBO = "Falhou em atualizar a cota";
    }

    return responseBO
  },
  async delete(draw_QuotasVO: Draw_QuotasVO): Promise<string> {
    const responseDAO = await Draw_QuotasDAO.delete(draw_QuotasVO);
    let responseBO: string = "";
    if (responseDAO) {
      responseBO = "Sucesso em deletar a cota";
    } else {
      responseBO = "Falhou em deletar a cota";
    }

    return responseBO
  },
};
