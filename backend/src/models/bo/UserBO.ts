import UserDAO from "../dao/UserDAO";
import UserVO from "../vo/UserVO";
import { cpf } from "cpf-cnpj-validator";

export default {
  async indexOne(userVO: UserVO): Promise<UserVO[] | string> {
    const listUsersVO: UserVO[] = await UserDAO.indexOne(userVO);
    let response: UserVO[] | string = "";

    if (listUsersVO.length > 0) {
      response = listUsersVO;
    } else {
      response = "Usuario não encontrado";
    }

    return response;
  },
  async indexAll(): Promise<UserVO[]> {
    return await UserDAO.indexAll();
  },
  async create(userVO: UserVO): Promise<string> {
    let response: string = "";

    const castType: any = userVO.getCpf();

    if (cpf.isValid(castType)) {
      if (await UserDAO.findOne(userVO)) {
        response = "Já existe um usuário com este cpf";
      } else {
        await UserDAO.create(userVO);
        response = "Usuario criado com sucesso";
      }
    } else {
      response = "cpf é inválido";
    }

    return response;
  },
  async update(userVO: UserVO): Promise<string> {
    let response: string = "";

    const castType: any = userVO.getCpf();

    if (cpf.isValid(castType)) {
       const  findById = await UserDAO.indexOne(userVO)

       if (findById.length > 0 ){
        await UserDAO.update(userVO);
        response = "Sucesso na atualização das informações"
        }else {
            response = "Usuario não existe na base de dados"
        }
    } else {
      response = "cpf é inválido";
    }
    return response
  },
  async delete(userVO:UserVO): Promise<string> {
    let response: string = "";

    const castType: any = userVO.getCpf();

    if (cpf.isValid(castType)) {
       const  findById = await UserDAO.indexOne(userVO)

       if (findById.length > 0 ){
        await UserDAO.delete(userVO);
            response = "Sucesso na exclusão do usuario"
        }else {
            response = "Falhou em excluir o usuario"
        }
    } else {
      response = "cpf é inválido";
    }
    return response
  },
};
