import UserVO from "../vo/UserVO";
import conn from "../../database/conn";
import { IUser } from "../../types";
export default {
  async indexOne(userVO: UserVO): Promise<UserVO[]> {
    const listUserVO: UserVO[] = [];

    const listUser: IUser[] = await conn("users")
      .select("*")
      .where("user_id", "=", `${userVO.getUser_id()}`)
      .where("deleted_at", null);

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
  async indexAll(): Promise<UserVO[]> {
    const listUserVO: UserVO[] = [];

    const listUser: IUser[] = await conn("users")
      .select("*")
      .where("deleted_at", null);

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
  async create(userVO: UserVO): Promise<void> {
    await conn("users").insert({
      name: userVO.getName(),
      cpf: userVO.getCpf(),
      email: userVO.getEmail(),
      phone: userVO.getPhone(),
      password: userVO.getPassword(),
      type: userVO.getType(),
      address: userVO.getAddress(),
    });
  },
  async findOne(userVO: UserVO): Promise<boolean> {
    const listUser: IUser[] = await conn("users")
      .select("*")
      .where("cpf", "=", `${userVO.getCpf()}`)
      .where("deleted_at", null);

    return listUser.length > 0 ? true : false;
  },
  async update(userVO: UserVO): Promise<void> {
    await conn("users").update({
      name: userVO.getName(),
      cpf: userVO.getCpf(),
      email: userVO.getEmail(),
      phone: userVO.getPhone(),
      password: userVO.getPassword(),
      type: userVO.getType(),
      address: userVO.getAddress(),
    });
  },
  async delete(userVO: UserVO): Promise<void> {
    await conn("users")
      .where("cpf", "=", `${userVO.getCpf()}`)
      .where("email", "=", `${userVO.getEmail()}`)
      .where("password", "=", `${userVO.getPassword()}`)
      .update({
        deleted_at: new Date(),
      });
  },
};
