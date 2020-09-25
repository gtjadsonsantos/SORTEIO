import LoginDAO from "../dao/LoginDAO";
import UserVO from "../vo/UserVO";
import jwt from 'jsonwebtoken'
import config from '../../config'

export default {
    async create (userVO:UserVO):Promise<string>{

    const dataUser:UserVO[] = await LoginDAO.indexOne(userVO)
    let payload:object = {
        dataUser,
        usertype: dataUser[0]?.getType()
    }
    let response:any|string = ""

        if (dataUser.length > 0) {
            response = {
                data: dataUser,
                token: jwt.sign(payload,config.hashjwt,{expiresIn: "1h"}) 
            }
        }else {
            response = "email ou a senha estão incorretos"
        }

    return response
    }
}