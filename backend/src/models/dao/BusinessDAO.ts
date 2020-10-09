import conn from "../../database/conn";
import { IBusiness } from "../../types";
import BusinessVO from "../vo/BusinessVO";

export default {
  async indexOne(businessVO: BusinessVO): Promise<BusinessVO[]> {
    const listBusinessVO: BusinessVO[] = [];
    const listBusiness: IBusiness[] = await conn("business")
      .select("*")
      .where("business_id", "=", `${businessVO.getBusiness_id()}`)
      .where("deleted_at", null);
    listBusiness.forEach((item) => {
      const business = new BusinessVO();

      business.setBusiness_id(item.business_id);
      business.setCnpj(item.cnpj);
      business.setDeleted_at(item.deleted_at);
      business.setFantasy_name(item.fantasy_name);
      business.setLogo(item.logo);
      business.setPhone(item.phone);
      business.setRegulation(item.regulation);
      business.setSocial(item.social);
      business.setBanner(item.banner)


      listBusinessVO.push(business);
    });

    return listBusinessVO;
  },
  async indexAll(): Promise<BusinessVO[]> {
    const listBusinessVO: BusinessVO[] = [];
    const listBusiness: IBusiness[] = await conn("business")
      .select("*")
      .where("deleted_at", null);

    listBusiness.forEach((item) => {
      const business = new BusinessVO();

      business.setBusiness_id(item.business_id);
      business.setCnpj(item.cnpj);
      business.setDeleted_at(item.deleted_at);
      business.setFantasy_name(item.fantasy_name);
      business.setLogo(item.logo);
      business.setPhone(item.phone);
      business.setRegulation(item.regulation);
      business.setSocial(item.social);
      business.setBanner(item.banner)

      listBusinessVO.push(business);
    });

    return listBusinessVO;
  },

  async create(businessVO: BusinessVO): Promise<boolean> {
    try {
      await conn("business").insert({
        cnpj: businessVO.getCnpj(),
        fantasy_name: businessVO.getFantasy_name(),
        logo: businessVO.getLogo(),
        social: businessVO.getSocial(),
        phone: businessVO.getPhone(),
        regulation: businessVO.getRegulation(),
        banner: businessVO.getBanner()
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async update(businessVO: BusinessVO):Promise<boolean> {
    try {
      const response = await conn("business")
        .update({
          cnpj: businessVO.getCnpj(),
          fantasy_name: businessVO.getFantasy_name(),
          logo: businessVO.getLogo(),
          social: businessVO.getSocial(),
          phone: businessVO.getPhone(),
          regulation: businessVO.getRegulation(),
          banner: businessVO.getBanner()

        })
        .where("business_id", "=", `${businessVO.getBusiness_id()}`)
        .where("deleted_at",null)

      return response == 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async delete(businessVO: BusinessVO):Promise<boolean>{

    try {
      const response = await conn("business")
        .update({
          deleted_at: new Date()
        })
        .where("business_id", "=", `${businessVO.getBusiness_id()}`)
        .where("deleted_at",null)

      return response == 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
