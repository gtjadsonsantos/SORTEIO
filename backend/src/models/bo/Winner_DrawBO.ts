import Winner_DrawDAO from "../dao/Winner_DrawDAO"
import Winners_DrawsVO from "../vo/Winners_DrawsVO"


export default {
    async indexOne(winner_DrawVO:Winners_DrawsVO):Promise<Winners_DrawsVO[]|string>{
        const responseDAO:Winners_DrawsVO[] = await Winner_DrawDAO.indexOne(winner_DrawVO)
        let responseBO:Winners_DrawsVO[]|string = []
        
        if (responseDAO.length >=1){
            responseBO = responseDAO
        }else {
            responseBO = "Falhou em encontrar o ganhador"
        }

        return responseBO

    },
    async indexAll():Promise<Winners_DrawsVO[]>{

        const responseDAO:Winners_DrawsVO[] = await Winner_DrawDAO.indexAll()

        return responseDAO

        
    },
    async create(winner_DrawVO:Winners_DrawsVO):Promise<string>{

        const responseDAO = await Winner_DrawDAO.create(winner_DrawVO)
        let responseBO = ""

        if (responseDAO){
            responseBO = "Sucesso em criar o ganhador"
        }else {
            responseBO = "Falhou em criar o ganhador"
        }

        return responseBO

    },
    async update(winner_DrawVO:Winners_DrawsVO):Promise<string>{


        const responseDAO = await Winner_DrawDAO.update(winner_DrawVO)
        let responseBO = ""

        if (responseDAO){
            responseBO = "Sucesso em atualizar o ganhador"
        }else {
            responseBO = "Falhou em atualizar o ganhador"
        }

        return responseBO
    },
    async delete(winner_DrawVO:Winners_DrawsVO):Promise<string>{

        const responseDAO = await Winner_DrawDAO.delete(winner_DrawVO)
        let responseBO = ""

        if (responseDAO){
            responseBO = "Sucesso em deletar o ganhador"
        }else {
            responseBO = "Falhou em deletar o ganhador"
        }

        return responseBO

    },

}