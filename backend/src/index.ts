import express from "express";
import path from "path";
import ParticipantsDrawDAO from "./models/dao/ParticipantsDrawDAO";
import Participants_RafflesDAO from "./models/dao/Participants_RafflesDAO";
import routeUsers from "./routes/users";
import routeLogin from "./routes/login";
import routeDraw from "./routes/draws";
import routeImage from "./routes/images";
import routeDrawQuota from "./routes/draw_quotas";
import routePartitipantsDraw from "./routes/participants_draw";
import routeWinnersDraw from "./routes/winners_draws";
import routeBankAccount from "./routes/banks_accounts";
import routeBusiness from "./routes/business";
import routeRaflles from "./routes/raflles";
import routeQuotaRaffles from "./routes/quotas_raffle";
import routePartitipantsRaffle from "./routes/participants_raffles";
import routeWinnersRaffles from "./routes/winners_raffles";
import routeFourgoutPassword from "./routes/forgout_password";
import routeReportDraw from "./routes/resport_draw";
import routeReportRaffles from "./routes/resport_raffles";
import routeFrontend from "./routes/frontend";

import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static(path.join("public")));

app.use(routeUsers);
app.use(routeLogin);
app.use(routeDraw);
app.use(routeImage);
app.use(routeDrawQuota);
app.use(routePartitipantsDraw);
app.use(routeWinnersDraw);
app.use(routeBankAccount);
app.use(routeBusiness);
app.use(routeRaflles);
app.use(routeQuotaRaffles);
app.use(routePartitipantsRaffle);
app.use(routeWinnersRaffles);
app.use(routeFourgoutPassword);
app.use(routeReportDraw);
app.use(routeReportRaffles);
app.use(routeFrontend);

//ParticipantsDrawDAO.updateStatusResevation();
//Participants_RafflesDAO.updateStatusResevation();

app.listen(process.env.PORT || 3333, () => {
  console.log("Server Up");
});
