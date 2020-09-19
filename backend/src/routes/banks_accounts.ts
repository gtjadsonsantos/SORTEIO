import { Router } from "express";
import Bank_AccountControllers from "../controllers/Bank_AccountControllers";
import valdadeJWT from '../middlewares/validateJWT'
import validateUserType from '../middlewares/validateUserType'
const routeBankAccount = Router();

routeBankAccount.get("/banks_accounts/:bank_account_id", Bank_AccountControllers.indexOne);
routeBankAccount.get("/banks_accounts", Bank_AccountControllers.indexAll);
routeBankAccount.post("/bank_account",validateUserType, Bank_AccountControllers.create);
routeBankAccount.put("/bank_account",validateUserType, Bank_AccountControllers.update);
routeBankAccount.delete("/bank_account",validateUserType, Bank_AccountControllers.delete);

    
export default routeBankAccount;