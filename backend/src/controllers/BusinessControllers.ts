import { Request, Response } from "express";
import BusinessBO from "../models/bo/BusinessBO";
import BusinnesVO from "../models/vo/BusinessVO";
import { IBusiness } from "../types";

export default {
  async indexOne(req: Request, res: Response) {
    try {
      const business_id: any = req.params.business_id;
      const businessVO = new BusinnesVO();
      businessVO.setBusiness_id(business_id);

      const response = await BusinessBO.indexOne(businessVO);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async indexAll(req: Request, res: Response) {
    try {
      const response = await BusinessBO.indexAll();
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async create(req: Request, res: Response) {
    try {
      const business: IBusiness = req.body;
      const businessVO = new BusinnesVO();

      businessVO.setCnpj(business.cnpj);
      businessVO.setFantasy_name(business.fantasy_name);
      businessVO.setLogo(business.logo);
      businessVO.setPhone(business.phone);
      businessVO.setRegulation(business.regulation);
      businessVO.setSocial(business.social);
      businessVO.setBanner(business.banner)

      const response = await BusinessBO.create(businessVO);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async update(req: Request, res: Response) {
    try {
      const business: IBusiness = req.body;
      const businessVO = new BusinnesVO();

      businessVO.setBusiness_id(business.business_id);
      businessVO.setCnpj(business.cnpj);
      businessVO.setFantasy_name(business.fantasy_name);
      businessVO.setLogo(business.logo);
      businessVO.setPhone(business.phone);
      businessVO.setRegulation(business.regulation);
      businessVO.setSocial(business.social);
      businessVO.setBanner(business.banner)

      const response = await BusinessBO.update(businessVO);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const business: IBusiness = req.body;
      const businessVO = new BusinnesVO();

      businessVO.setBusiness_id(business.business_id);

      const response = await BusinessBO.delete(businessVO);
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
