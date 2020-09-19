import {Request,Response,NextFunction} from 'express'
import jwt  from 'jsonwebtoken'
import config from '../config'

async function validateJWT (req:Request, res:Response, next:NextFunction){
    try {

        const token: any = req.headers.authorization?.split(" ")[1];
        jwt.verify(token , config.hashjwt)        
        
        next()
    } catch (error) {
        res.status(401).send({status: "Não autorizado"})
    }
}

export default validateJWT