import { Request, Response } from "express";
import ReportDrawDAO from "../models/dao/ReportDrawDAO";

export default {
  async indexAll(req: Request, res: Response) {
    const response = await ReportDrawDAO.indexAll(req, res);
    res.json(response);
  },
};
