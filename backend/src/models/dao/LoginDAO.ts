import conn from "../../database/conn";
import { IUser } from "../../types";
import UserVO from "../vo/UserVO";

export default {
    async indexOne(userVO: UserVO): Promise<UserVO[]> {
        const listUserVO: UserVO[] = [];
    
        const listUser: IUser[] = await conn("users")
          .select("*")
          
          .where("password", "=", `${userVO.getPassword()}`)
          .orWhere("cpf","=",`${userVO.getCpf()}`)
          .orWhere("email","=",`${userVO.getEmail()}`)
          .where("deleted_at", null)
          .limit(1)
    
        listUser.forEach((item) => {
          const user = new UserVO();
    
          user.setUser_id(item.user_id);
          user.setName(item.name);
          user.setCpf(item.cpf);
          user.setPhone(item.phone);
          user.setType(item.type);
          user.setEmail(item.email);
          user.setCreated_at(item.created_at);
          user.setDeleted_at(item.deleted_at);
          user.setAddress(item.address);
    
          listUserVO.push(user);
        });
    
        return listUserVO;
      },
}