import conn from "../../database/conn";
import Bank_AccountVO from "../../models/vo/Bank_AccountVO";
import { IBank_Account } from "../../types";

export default {
  async indexOne(bank_accountVO: Bank_AccountVO): Promise<Bank_AccountVO[]> {
    const listBank_AccountVO: Bank_AccountVO[] = [];

    const listBankAccount: IBank_Account[] = await conn("banks_accounts")
      .select("*")
      .where("bank_account_id", "=", `${bank_accountVO.getBank_account_id()}`)
      .where("deleted_at", null);

    listBankAccount.forEach((item) => {
      const bank = new Bank_AccountVO();

      bank.setBank_account_id(item.bank_account_id);
      bank.setAgency(item.agency);
      bank.setCnpj(item.cnpj);
      bank.setCpf(item.cpf);
      bank.setCreated_at(item.created_at);
      bank.setDeleted_at(item.deleted_at);
      bank.setNumber_account(item.number_account);
      bank.setImage(item.image);
      bank.setName(item.name);
      listBank_AccountVO.push(bank);
    });

    return listBank_AccountVO;
  },
  async indexAll(): Promise<Bank_AccountVO[]> {
    const listBank_AccountVO: Bank_AccountVO[] = [];

    const listBankAccount: IBank_Account[] = await conn("banks_accounts")
      .select("*")
      .where("deleted_at", null);

    listBankAccount.forEach((item) => {
      const bank = new Bank_AccountVO();

      bank.setBank_account_id(item.bank_account_id);
      bank.setAgency(item.agency);
      bank.setCnpj(item.cnpj);
      bank.setCpf(item.cpf);
      bank.setCreated_at(item.created_at);
      bank.setDeleted_at(item.deleted_at);
      bank.setNumber_account(item.number_account);
      bank.setImage(item.image);
      bank.setName(item.name);
      listBank_AccountVO.push(bank);
    });

    return listBank_AccountVO;
  },
  async create(bank_accountVO: Bank_AccountVO): Promise<boolean> {
    try {
      await conn("banks_accounts").insert({
        name: bank_accountVO.getName(),
        agency: bank_accountVO.getAgency(),
        number_account: bank_accountVO.getNumber_account(),
        image: bank_accountVO.getImage(),
        cpf: bank_accountVO.getCpf(),
        cnpj: bank_accountVO.getCnpj(),
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async update(bank_accountVO: Bank_AccountVO): Promise<boolean> {
    try {
      const response =  await conn("banks_accounts").update({
          name: bank_accountVO.getName(),
          agency: bank_accountVO.getAgency(),
          number_account: bank_accountVO.getNumber_account(),
          image: bank_accountVO.getImage(),
          cpf: bank_accountVO.getCpf(),
          cnpj: bank_accountVO.getCnpj(),
        })
        .where("bank_account_id","=",`${bank_accountVO.getBank_account_id()}`)
        .where("deleted_at",null)

        return response == 1?true:false;
      } catch (error) {
        console.log(error);
        return false;
      }
  },
  async delete(bank_accountVO: Bank_AccountVO): Promise<boolean> {

    try {
       const response = await conn("banks_accounts").update({
        deleted_at: new Date()
        })
        .where("bank_account_id","=",`${bank_accountVO.getBank_account_id()}`)
        .where("deleted_at",null)

        return response == 1? true:false;
      } catch (error) {
        console.log(error);
        return false;
      }
  },
};
