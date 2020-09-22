import UserVO from "../vo/UserVO";
import { cpf } from "cpf-cnpj-validator";
import UserDAO from "../dao/UserDAO";
import sendEmail from "../../middlewares/sendEmail";

export default {
  async indexOne(userVO: UserVO): Promise<string> {
    const responseDAO: UserVO[] = await UserDAO.indexOneByCpf(userVO);
    let responseBO = "";
    const cpfValidate: any = userVO.getCpf();

    if (cpf.isValid(cpfValidate)) {
      if ((responseDAO.length == 0)) {
        responseBO = "O cpf informado, não pertence a nenhum usuário";
      } else {
        await sendEmail(responseDAO[0]?.getPassword(),responseDAO[0]?.getEmail());
        responseBO = "Email enviado com sucesso, verifica seu email";
      }
    } else {
      responseBO = "Informe um cpf invalído";
    }

    return responseBO;
  },
};