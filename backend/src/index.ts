import express from "express";
import routeUsers from "./routes/users";
import routeLogin from "./routes/login"
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(routeUsers);
app.use(routeLogin);


app.listen(process.env.PORT || 3333, () => {
  console.log("Server Up");
});