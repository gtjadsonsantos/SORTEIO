import UserVO from "../vo/UserVO";
import {Request} from 'express'
import conn from "../../database/conn";
import {encrypt} from '../../utils/Cripto'
import { IUser } from "../../types";
import jwt from 'jsonwebtoken'
import config from '../../config'

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
      password: encrypt(`${userVO.getPassword()}`),
      type: userVO.getType(),
      address: userVO.getAddress(),
    });
  },
  async findOne(userVO: UserVO): Promise<boolean> {
    const listUser: IUser[] = await conn("users")
      .select("*")
      .where("cpf", "=", `${userVO.getCpf()}`)
      .orWhere("email", "=",`${userVO.getEmail()}`)
      .where("deleted_at", null);

    return listUser.length > 0 ? true : false;
  },
  async update(userVO: UserVO,req:Request): Promise<boolean> {

    const token: any = req.headers.authorization?.split(" ")[1];
    const decode:any = jwt.verify(token, config.hashjwt);
    const { dataUser } = decode;
    let response:boolean = false;
    
    if(dataUser[0].user_id == userVO.getUser_id()){

      const responseDatabase = await conn("users")
      .update({
        name: userVO.getName(),
        cpf: userVO.getCpf(),
        email: userVO.getEmail(),
        phone: userVO.getPhone(),
        password: encrypt(`${userVO.getPassword()}`),
        type: dataUser[0].type,
        address: userVO.getAddress(),
      })
      .where("user_id","=",`${userVO.getUser_id()}`)
      
      response = responseDatabase == 1?true:false 
    }
    
    return response;
  },
  async delete(userVO: UserVO): Promise<void> {
    await conn("users")
      .where("cpf", "=", `${userVO.getCpf()}`)
      .where("email", "=", `${userVO.getEmail()}`)
      .where("password", "=", encrypt(`${userVO.getPassword()}`))
      .where("user_id","=",`${userVO.getUser_id()}`)
      .update({
        deleted_at: new Date(),
      });
  },
  async indexOneByCpf(userVO: UserVO): Promise<UserVO[]> {
    const listUserVO: UserVO[] = [];

    const listUser: IUser[] = await conn("users")
      .select("*")
      .where("cpf", "=", `${userVO.getCpf()}`)
      .where("email","=",`${userVO.getEmail()}`)
      .where("deleted_at", null);

    listUser.forEach((item) => {
      const user = new UserVO();

      user.setUser_id(item.user_id);
      user.setName(item.name);
      user.setCpf(item.cpf);
      user.setPhone(item.phone);
      user.setPassword(item.password);
      user.setType(item.type);
      user.setEmail(item.email);
      user.setCreated_at(item.created_at);
      user.setDeleted_at(item.deleted_at);
      user.setAddress(item.address);

      listUserVO.push(user);
    });

    return listUserVO;
  },
};
