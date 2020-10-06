import { CONNREFUSED } from "dns";
import conn from "../../database/conn";
import { IParticipants_DrawVO, IWinner_Draw } from "../../types";
import Participants_DrawVO from "../vo/Participants_DrawVO";
import Winners_DrawsVO from "../vo/Winners_DrawsVO";
import ParticipantsDrawDAO from "./ParticipantsDrawDAO";

export default {
  async indexOne(winner_DrawVO: Winners_DrawsVO): Promise<Winners_DrawsVO[]> {
    const listWinners_DrawsVO: Winners_DrawsVO[] = [];

    const listWinners_Draws: IWinner_Draw[] = await conn("winners_draws")
      .select("*")
      .where("winner_id", "=", `${winner_DrawVO.getWinner_id()}`)
      .where("deleted_at", null);

    listWinners_Draws.forEach((item) => {
      const winner_draw = new Winners_DrawsVO();

      winner_DrawVO.setCreated_at(item.created_at);
      winner_DrawVO.setDeleted_at(item.deleted_at);
      winner_DrawVO.setImage(item.image);
      winner_DrawVO.setParticipants_draw_participant_id(
        item.participants_draw_participant_id
      );
      winner_DrawVO.setVideo(item.video);
      winner_DrawVO.setWinner_id(item.winner_id);

      listWinners_DrawsVO.push(winner_draw);
    });

    return listWinners_DrawsVO;
  },
  async indexAllJoinWinnersParticipantsUsersQuotasDraw(){
    const response =  await conn.raw(`
    
    SELECT 
    winners_draws.winner_id,
    winners_draws.participants_draw_participant_id,
    winners_draws.image,
    winners_draws.video,
    users.name,
    users.address,
    draws.date_draw,
    draws.title,
    GROUP_CONCAT( draw_quotas.number) as cotas
    FROM winners_draws 
      INNER JOIN participants_draw ON participants_draw.participant_id = winners_draws.participants_draw_participant_id
        INNER JOIN draw_quotas ON participants_draw.draw_quotas_draw_quota_id = draw_quotas.draw_quota_id
        INNER JOIN users ON users.user_id = participants_draw.users_user_id 
        INNER JOIN draws ON draws.draw_id = participants_draw.draws_draw_id
    WHERE  
       participants_draw.deleted_at IS NULL AND
       participants_draw.status = "sold" AND 
       winners_draws.deleted_at is null
    GROUP BY
        winners_draws.winner_id
    `)

    return response

  },
  async indexAll(): Promise<Winners_DrawsVO[]> {
    const listWinners_DrawsVO: Winners_DrawsVO[] = [];

    const listWinners_Draws: IWinner_Draw[] = await conn("winners_draws")
      .select("*")
      .where("deleted_at", null);

    listWinners_Draws.forEach((item) => {
      const winner_draw = new Winners_DrawsVO();

      winner_draw.setCreated_at(item.created_at);
      winner_draw.setDeleted_at(item.deleted_at);
      winner_draw.setImage(item.image);
      winner_draw.setParticipants_draw_participant_id(
        item.participants_draw_participant_id
      );
      winner_draw.setVideo(item.video);
      winner_draw.setWinner_id(item.winner_id);

      listWinners_DrawsVO.push(winner_draw);
    });

    return listWinners_DrawsVO;
  },
  async create(winner_DrawVO: Winners_DrawsVO): Promise<boolean> {
    try {
      const participant_drawVO = new Participants_DrawVO();
      participant_drawVO.setParticipant_id(winner_DrawVO.getParticipants_draw_participant_id());

      const listParticipants = await ParticipantsDrawDAO.indexOne(participant_drawVO);

      let responseDAO = false;

      if (listParticipants.length >= 1) {
        await conn("winners_draws").insert({
          image: winner_DrawVO.getImage(),
          participants_draw_participant_id: winner_DrawVO.getParticipants_draw_participant_id(),
          video: winner_DrawVO.getVideo(),
        });
        responseDAO = true;
      }

      return responseDAO;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async update(winner_DrawVO: Winners_DrawsVO): Promise<boolean> {
    try {
      const participant_drawVO = new Participants_DrawVO();
      participant_drawVO.setParticipant_id(
        winner_DrawVO.getParticipants_draw_participant_id()
      );

      const listParticipants = await ParticipantsDrawDAO.indexOne(
        participant_drawVO
      );
      let responseDAO = false;
        console.log(winner_DrawVO)
      if (listParticipants.length >= 1) {
       const response =  await conn("winners_draws")
          .update({
            image: winner_DrawVO.getImage(),
            participants_draw_participant_id: winner_DrawVO.getParticipants_draw_participant_id(),
            video: winner_DrawVO.getVideo(),
          })
          .where("winner_id", "=", `${winner_DrawVO.getWinner_id()}`);

        responseDAO = response == 1? true:false;
      }
      return responseDAO;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async delete(winner_DrawVO: Winners_DrawsVO): Promise<boolean> {
    try {
      const respnse = await conn("winners_draws")
        .update({
          deleted_at: new Date(),
        })
        .where("winner_id", "=", `${winner_DrawVO.getWinner_id()}`);

      return respnse == 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
