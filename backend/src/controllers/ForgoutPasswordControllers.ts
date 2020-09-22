import { Request, Response } from "express";
import ForgoutPasswordBO from "../models/bo/ForgoutPasswordBO";
import UserVO from "../models/vo/UserVO";
import { IUser } from "../types";

export default {
  async indexOne(req: Request, res: Response) {
    try {
      const user: IUser = req.body;

      const userVO = new UserVO();

      userVO.setCpf(user.cpf);

      const response = await ForgoutPasswordBO.indexOne(userVO);

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
