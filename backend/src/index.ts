import express from "express";
import routeUsers from "./routes/users";
import routeLogin from "./routes/login";
import routeDraw from "./routes/draws"
import routeImage from "./routes/images"
import routeDrawQuota from "./routes/draw_quotas"
import routePartitipantsDraw from './routes/participants_draw'
import routeWinnersDraw from './routes/winners_draws'
import routeBankAccount from './routes/banks_accounts'
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true,limit: '50mb'}));

app.use(routeUsers);
app.use(routeLogin);
app.use(routeDraw);
app.use(routeImage);
app.use(routeDrawQuota);
app.use(routePartitipantsDraw)
app.use(routeWinnersDraw)
app.use(routeBankAccount)

app.listen(process.env.PORT || 3333, () => {
  console.log("Server Up");
});