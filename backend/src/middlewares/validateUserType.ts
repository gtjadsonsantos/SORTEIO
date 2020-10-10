import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

async function validateJWT(req: Request, res: Response, next: NextFunction) {
  try {
    const token: any = req.headers.authorization?.split(" ")[1];
  
    const decode:any = jwt.verify(token, config.hashjwt);
    const { usertype } = decode;
  
    if (usertype === "admin") {
      next();
    } else {
      res.status(401).send({ status: "Não autorizado" });
    }
  } catch (error) {
    res.status(401).send({ status: "Não autorizado" });
  }
}

export default validateJWT;
