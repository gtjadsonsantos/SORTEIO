import { Request, Response } from "express";
import { type } from "os";
import ImageVO from "../../models/vo/ImagesVO";
import ImageDAO from "../dao/ImageDAO";

export default {
  async indexOne(imageVO: ImageVO): Promise<ImageVO[] | string> {
    const listImageVO: ImageVO[] = await ImageDAO.indexOne(imageVO);
    let response: ImageVO[] | string = "";

    if (listImageVO.length >= 1) {
      console.log(listImageVO);
    } else {
      response = "Imagem não encontrada";
    }

    return response;
  },
  async indexAll(): Promise<ImageVO[]> {
    const listImageVO: ImageVO[] = await ImageDAO.indexAll();

    return listImageVO
  },
  async create(imageVO: ImageVO): Promise<string> {
    let response = ""

    if(await ImageDAO.create(imageVO)){
        response = "Sucesso em criar a imagem do sorteio"
    }else {
        response = "Falhou em criar imagem para o sorteio"
    }

    return response
    
 },
  async update(imageVO: ImageVO): Promise<string> {
    let response = ""

    if(await ImageDAO.update(imageVO)){
        response = "Sucesso em atualizar a imagem"
    }else {
        response = "Falhou em atualizar imagem para o sorteio"
    }

    return response

  },
  async delete(imageVO: ImageVO): Promise<string> {
    let response = ""

    if(await ImageDAO.delete(imageVO)){
        response = "Sucesso em deletar a imagem"
    }else {
        response = "Falhou em deletar a imagem"
    }

    return response
  },
};
