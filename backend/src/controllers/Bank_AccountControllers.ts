import { Response, Request } from "express";
import Bank_AccountBO from "../models/bo/Bank_AccountBO";
import Bank_AccountVO from "../models/vo/Bank_AccountVO";
import { IBank_Account } from "../types";

export default {
  async indexOne(req: Request, res: Response) {
    try {
      const bank_account_id: any = req.params.bank_account_id;
      const bank_accountVO = new Bank_AccountVO();

      bank_accountVO.setBank_account_id(bank_account_id);

      const response = await Bank_AccountBO.indexOne(bank_accountVO);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async indexAll(req: Request, res: Response) {
    try {
      const response = await Bank_AccountBO.indexAll();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async create(req: Request, res: Response) {
    try {
      const bank_account: IBank_Account = req.body;
      const bank_accountVO = new Bank_AccountVO();

      bank_accountVO.setAgency(bank_account.agency);
      bank_accountVO.setCnpj(bank_account.cnpj);
      bank_accountVO.setCpf(bank_account.cpf);
      bank_accountVO.setNumber_account(bank_account.number_account);
      bank_accountVO.setImage(bank_account.image);
      bank_accountVO.setName(bank_account.name);

      const response = await Bank_AccountBO.create(bank_accountVO);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async update(req: Request, res: Response) {
    try {
      const bank_account: IBank_Account = req.body;
      const bank_accountVO = new Bank_AccountVO();

      bank_accountVO.setBank_account_id(bank_account.bank_account_id);
      bank_accountVO.setAgency(bank_account.agency);
      bank_accountVO.setCnpj(bank_account.cnpj);
      bank_accountVO.setCpf(bank_account.cpf);
      bank_accountVO.setNumber_account(bank_account.number_account);
      bank_accountVO.setImage(bank_account.image);
      bank_accountVO.setName(bank_account.name);

      const response = await Bank_AccountBO.update(bank_accountVO);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const bank_account: IBank_Account = req.body;
      const bank_accountVO = new Bank_AccountVO();

      bank_accountVO.setBank_account_id(bank_account.bank_account_id);
    
      const response = await Bank_AccountBO.delete(bank_accountVO);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
