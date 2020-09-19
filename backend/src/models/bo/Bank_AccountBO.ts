import { cpf, cnpj } from "cpf-cnpj-validator";
import Bank_AccountVO from "../../models/vo/Bank_AccountVO";
import Bank_AccountDAO from "../dao/Bank_AccountDAO";

export default {
  async indexOne(
    bank_accountVO: Bank_AccountVO
  ): Promise<Bank_AccountVO[] | string> {
    const responseDAO = await Bank_AccountDAO.indexOne(bank_accountVO);
    let respnseBO: Bank_AccountVO[] | string = [];

    if (responseDAO.length >= 1) {
      respnseBO = responseDAO;
    } else {
      respnseBO = "Banco não encontrado";
    }

    return respnseBO;
  },
  async indexAll(): Promise<Bank_AccountVO[]> {
    const responseDAO = await Bank_AccountDAO.indexAll();

    return responseDAO;
  },
  async create(bank_accountVO: Bank_AccountVO): Promise<string> {
    let respnseBO: string = "";

    const cpf_account: any = bank_accountVO.getCpf();
    const cnpj_account: any = bank_accountVO.getCnpj();

    if (cpf.isValid(cpf_account) && cnpj.isValid(cnpj_account)) {
      const responseDAO = await Bank_AccountDAO.create(bank_accountVO);

      if (responseDAO) {
        respnseBO = "Sucesso em criar banco";
      } else {
        respnseBO = "Falhou em criar banco";
      }
    } else {
      respnseBO = "Revise os dados de cpf e cnpj";
    }

    return respnseBO;
  },
  async update(bank_accountVO: Bank_AccountVO): Promise<string> {
    let respnseBO: string = "";
    const cpf_account: any = bank_accountVO.getCpf();
    const cnpj_account: any = bank_accountVO.getCnpj();

    if (cpf.isValid(cpf_account) && cnpj.isValid(cnpj_account)) {
      const responseDAO = await Bank_AccountDAO.update(bank_accountVO);

      if (responseDAO) {
        respnseBO = "Sucesso em atualizar banco";
      } else {
        respnseBO = "Falhou em atualizar banco";
      }
    } else {
      respnseBO = "Revise os dados de cpf e cnpj";
    }

    return respnseBO;
  },
  async delete(bank_accountVO: Bank_AccountVO): Promise<string> {
    const responseDAO = await Bank_AccountDAO.delete(bank_accountVO);
    let respnseBO: string = "";

    if (responseDAO) {
      respnseBO = "Sucesso em deletar banco";
    } else {
      respnseBO = "Falhou em deletar banco";
    }

    return respnseBO;
  },
};
