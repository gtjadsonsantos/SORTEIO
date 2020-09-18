import LoginDAO from "../dao/LoginDAO";
import UserVO from "../vo/UserVO";
import jwt from 'jsonwebtoken'
import {hashjwt} from '../../config'

export default {
    async create (userVO:UserVO):Promise<any|string>{

    const dataUser = await LoginDAO.indexOne(userVO)
    let response:any|string = ""

        if (dataUser.length > 0) {
            response = {
                data: dataUser,
                token: jwt.sign(dataUser,hashjwt,{expiresIn: "1h"}) 
            }
        }else {
            response = "username,cpf ou a senha estão incorretos"
        }

    return response
    }
}