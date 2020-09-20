import Participants_RafflesDAO from "../dao/Participants_RafflesDAO";
import Participants_RuffleVO from "../vo/Participants_RuffleVO";

export default {
  async indexOne(
    participant_ruffleVO: Participants_RuffleVO
  ): Promise<Participants_RuffleVO[] | string> {
    const responseDAO: Participants_RuffleVO[] = await Participants_RafflesDAO.indexOne(
      participant_ruffleVO
    );
    let responseBO: Participants_RuffleVO[] | string = [];

    if (responseDAO.length >= 1) {
      responseBO = responseDAO;
    } else {
      responseBO = "Participante não encontrado";
    }

    return responseBO;
  },
  async indexAll(): Promise<Participants_RuffleVO[]> {
    const responseDAO: Participants_RuffleVO[] = await Participants_RafflesDAO.indexAll();

    return responseDAO;
  },
  async create(participant_ruffleVO: Participants_RuffleVO): Promise<string> {
    const responseDAO: boolean = await Participants_RafflesDAO.create(
      participant_ruffleVO
    );
    let responseBO: string = "";

    if (responseDAO) {
      responseBO = "Sucesso em criar participante";
    } else {
      responseBO = "Falhou em criar participante";
    }

    return responseBO;
  },
  async update(participant_ruffleVO: Participants_RuffleVO): Promise<string> {
    const responseDAO = await Participants_RafflesDAO.update(
      participant_ruffleVO
    );

    let responseBO = "";

    if (responseDAO) {
      responseBO = "Sucesso em atualizar o participante";
    } else {
      responseBO = "Falhou em atualizar o participante";
    }

    return responseBO;
  },
  async delete(participant_ruffleVO: Participants_RuffleVO): Promise<string> {
    const responseDAO = await Participants_RafflesDAO.delete(
      participant_ruffleVO
    );
    let responseBO = "";

    if (responseDAO) {
      responseBO = "Sucesso em deletar o participante";
    } else {
      responseBO = "Falhou em deletar o participante";
    }

    return responseBO;
  },
};
