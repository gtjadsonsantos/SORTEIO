import { Router } from "express";
import path from "path";
const routesFrontend = Router();

routesFrontend.get("/Signin", (req, res) => {
    
  res.sendFile(path.resolve("public","index.html"));
});
routesFrontend.get("/ForgoutPassword", (req, res) => {
  res.sendFile(path.resolve("public","index.html"));
});
routesFrontend.get("/UserRegistration", (req, res) => {
  res.sendFile(path.resolve("public","index.html"));
});
routesFrontend.get("/Dashboard", (req, res) => {
  res.sendFile(path.resolve("public","index.html"));
});

export default routesFrontend;
