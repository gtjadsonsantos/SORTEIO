import conn from "../../database/conn";
import DrawDAO from "../dao/DrawDAO";
import DrawVO from "../vo/DrawVO";

export default {
  async indexOne(drawVO: DrawVO): Promise<DrawVO[] | string> {
    const listDrawVO: DrawVO[] = await DrawDAO.indexOne(drawVO);
    let response: DrawVO[] | string = "";

    if (listDrawVO.length > 0) {
      response = listDrawVO;
    } else {
      response = "O Sorteio não foi encontrado";
    }

    return response;
  },
  async indexAll(): Promise<DrawVO[]> {
    const listDrawVO: DrawVO[] = await DrawDAO.indexAll();

    return listDrawVO;
  },
  async create(drawVO: DrawVO): Promise<string> {
    let response = "";

    if (await DrawDAO.create(drawVO)) {
      response = "Sucesso em criar o sorteio";
    } else {
      response = "Falhou em crair o sorteio";
    }

    return response;
  },
  async update(drawVO: DrawVO): Promise<string> {
    let response = "";

    if (await DrawDAO.update(drawVO)) {
      response = "Sucesso em atualizar o sorteio";
    } else {
      response = "Falhou em atualizar o sorteio";
    }

    return response;
  },
  async delete(drawVO: DrawVO): Promise<string> {
    let response = "";

    if (await DrawDAO.delete(drawVO)) {
      response = "Sucesso em deletar o sorteio";
    } else {
      response = "Falhou em deletar o sorteio";
    }

    return response;
  },
};
