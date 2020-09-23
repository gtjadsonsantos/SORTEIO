import { Request, Response } from "express";
import ReportRaffleDAO from "../models/dao/ReportRaffleDAO";

export default {
  async indexAll(req: Request, res: Response) {
    const response = await ReportRaffleDAO.indexAll(req, res);
    res.json(response);
  },
};
