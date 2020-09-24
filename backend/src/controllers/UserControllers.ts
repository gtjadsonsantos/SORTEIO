import { Request, Response } from "express";
import UserBO from "../models/bo/UserBO";
import UserVO from "../models/vo/UserVO";
import { IUser } from "../types";

export default {
  async indexOne(req: Request, res: Response): Promise<void> {
    try {
      const user_id: any = req.params.user_id;

      const userVO = new UserVO();

      userVO.setUser_id(user_id);

      const listUsersVO = await UserBO.indexOne(userVO);

      res.json(listUsersVO);
    } catch (error) {
      console.log(error);
    }
  },
  async indexAll(req: Request, res: Response): Promise<void> {
    const listUsersVO = await UserBO.indexAll();

    res.json(listUsersVO);
  },
  async create(req: Request, res: Response): Promise<void> {
    try {
      const user: IUser = req.body;

      const userVO = new UserVO();

      userVO.setName(user.name);
      userVO.setCpf(user.cpf);
      userVO.setEmail(user.email);
      userVO.setPassword(user.password);
      userVO.setPhone(user.phone);
      userVO.setAddress(user.address);
      userVO.setType("comum");

      const response = await UserBO.create(userVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async update(req: Request, res: Response): Promise<void> {
    try {
      const user: IUser = req.body;

      const userVO = new UserVO();

      userVO.setUser_id(user.user_id);
      userVO.setName(user.name);
      userVO.setCpf(user.cpf);
      userVO.setEmail(user.email);
      userVO.setPassword(user.password);
      userVO.setPhone(user.phone);
      userVO.setAddress(user.address);
      userVO.setType("comum");

      const response = await UserBO.update(userVO,req);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const user: IUser = req.body;

      const userVO = new UserVO();

      userVO.setUser_id(user.user_id);
      userVO.setCpf(user.cpf);
      userVO.setEmail(user.email);
      userVO.setPassword(user.password);

      const response = await UserBO.delete(userVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
