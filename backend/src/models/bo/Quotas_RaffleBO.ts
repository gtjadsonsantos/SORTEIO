import Quotas_RaffleDAO from "../dao/Quotas_RaffleDAO";
import Quotas_RaffleVO from "../vo/Quotas_RaffleVO";

export default {
  async indexOne(
    quota_raffleVO: Quotas_RaffleVO
  ): Promise<Quotas_RaffleVO[] | string> {
    const responseDAO: Quotas_RaffleVO[] = await Quotas_RaffleDAO.indexOne(
      quota_raffleVO
    );
    let responseBO: Quotas_RaffleVO[] | string = [];

    if (responseDAO.length) {
      responseBO = responseDAO;
    } else {
      responseBO = "Cota não encontrada";
    }

    return responseBO;
  },
  async indexAll(): Promise<Quotas_RaffleVO[]> {
    const responseDAO: Quotas_RaffleVO[] = await Quotas_RaffleDAO.indexAll();

    return responseDAO;
  },
  async create(quota_raffleVO: Quotas_RaffleVO): Promise<string> {
    const responseDAO = await Quotas_RaffleDAO.create(quota_raffleVO);
    let responseBO: Quotas_RaffleVO[] | string = "";
    if (responseDAO) {
      responseBO = "Sucesso em criar a cota";
    } else {
      responseBO = "Falhou em criar a cota";
    }

    return responseBO;
  },
  async update(quota_raffleVO: Quotas_RaffleVO): Promise<string> {
    const responseDAO = await Quotas_RaffleDAO.update(quota_raffleVO);
    let responseBO: string = "";
    if (responseDAO) {
      responseBO = "Sucesso em atualizar a cota";
    } else {
      responseBO = "Falhou em atualizar a cota";
    }

    return responseBO;
  },
  async delete(quota_raffleVO: Quotas_RaffleVO): Promise<string> {
    const responseDAO = await Quotas_RaffleDAO.delete(quota_raffleVO);
    let responseBO: string = "";
    if (responseDAO) {
      responseBO = "Sucesso em deletar a cota";
    } else {
      responseBO = "Falhou em deletar a cota";
    }

    return responseBO;
  },
};
