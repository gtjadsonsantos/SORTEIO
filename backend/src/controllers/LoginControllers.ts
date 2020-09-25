import { Request, Response } from "express";
import LoginBO from "../models/bo/LoginBO";
import UserVO from "../models/vo/UserVO";
import { ILogin } from "../types";

export default {
  async create(req: Request, res: Response):Promise<void>  {
    try {
      const { password, username }: ILogin = req.body;
      
      const userVO = new UserVO();

      userVO.setCpf(username);
      userVO.setEmail(username);
      userVO.setPassword(password);

      const dataUser = await LoginBO.create(userVO);

      res.json(dataUser);
    } catch (error) {
      console.log(error);
    }
  }
};
