import BusinessDAO from "../dao/BusinessDAO";
import BusinessVO from "../vo/BusinessVO";
import { cnpj, cpf } from "cpf-cnpj-validator";
import { promises } from "fs";
export default {
  async indexOne(businessVO: BusinessVO): Promise<BusinessVO[] | string> {
    const responseDAO = await BusinessDAO.indexOne(businessVO);
    let responseBO: BusinessVO[] | string = [];

    if (responseDAO.length >= 1) {
      responseBO = responseDAO;
    } else {
      responseBO = "Business não encontrado";
    }

    return responseBO;
  },
  async indexAll() {
    const responseDAO = await BusinessDAO.indexAll();

    return responseDAO;
  },
  async create(businessVO: BusinessVO): Promise<string> {
    let responseBO = "";

    const validadeCnpj: any = businessVO.getCnpj();

    if (cnpj.isValid(validadeCnpj)) {
      const responseDAO = await BusinessDAO.create(businessVO);

      if (responseDAO) {
        responseBO = "Sucesso em criar Business";
      } else {
        responseBO = "Falhou em criar Business";
      }
    } else {
      responseBO = "Cnpj inválido";
    }

    return responseBO;
  },
  async update(businessVO: BusinessVO): Promise<string> {
    let responseBO = "";

    const validadeCnpj: any = businessVO.getCnpj();

    if (cnpj.isValid(validadeCnpj)) {
      const responseDAO = await BusinessDAO.update(businessVO);

      if (responseDAO) {
        responseBO = "Sucesso em atualizar Business";
      } else {
        responseBO = "Falhou em atualizar Business";
      }
    } else {
      responseBO = "Cnpj inválido";
    }
    return responseBO;
  },
  async delete(businessVO: BusinessVO) {
    let responseBO = "";

    const responseDAO = await BusinessDAO.delete(businessVO);

    if (responseDAO) {
      responseBO = "Sucesso em deletar Business";
    } else {
      responseBO = "Falhou em deletar Business";
    }

    return responseBO;
  },
};
