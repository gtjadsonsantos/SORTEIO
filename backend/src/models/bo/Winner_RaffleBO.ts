import Winner_RaffleDAO from "../dao/Winner_RaffleDAO";
import Winners_RafflesVO from "../vo/Winners_RafflesVO";

export default {
  async indexOne(
    winner_raffleVO: Winners_RafflesVO
  ): Promise<Winners_RafflesVO[] | string> {
    const responseDAO: Winners_RafflesVO[] = await Winner_RaffleDAO.indexOne(
      winner_raffleVO
    );
    let responseBO: Winners_RafflesVO[] | string = [];

    if (responseDAO.length >= 1) {
      responseBO = responseDAO;
    } else {
      responseBO = "Ganhador não encontrado";
    }

    return responseBO;
  },  
  async indexAll(): Promise<Winners_RafflesVO[]> {
    const responseDAO: Winners_RafflesVO[] = await Winner_RaffleDAO.indexAll();

    return responseDAO;
  },
  async create(winner_raffleVO: Winners_RafflesVO): Promise<string> {
    const responseDAO: boolean = await Winner_RaffleDAO.create(winner_raffleVO);
    let responseBO: string = "";

    if (responseDAO) {
      responseBO = "Sucesso em criar ganhador";
    } else {
      responseBO = "Falhou em criar o ganhador";
    }

    return responseBO;
  },
  async update(winner_raffleVO: Winners_RafflesVO): Promise<string> {
    const responseDAO: boolean = await Winner_RaffleDAO.update(winner_raffleVO);
    let responseBO: string = "";

    if (responseDAO) {
      responseBO = "Sucesso em atualizar ganhador";
    } else {
      responseBO = "Falhou em atualizar o ganhador";
    }

    return responseBO;
  },
  async delete(winner_raffleVO: Winners_RafflesVO): Promise<string> {
    const responseDAO: boolean = await Winner_RaffleDAO.delete(winner_raffleVO);
    let responseBO: string = "";

    if (responseDAO) {
      responseBO = "Sucesso em deletar ganhador";
    } else {
      responseBO = "Falhou em deletar o ganhador";
    }

    return responseBO;
  },
};
