import conn from "../../database/conn";
import IWinner_Raffle from "../../types";
import Participants_RuffleVO from "../vo/Participants_RuffleVO";
import Winners_RafflesVO from "../vo/Winners_RafflesVO";
import Participants_RafflesDAO from "./Participants_RafflesDAO";

export default {
  async indexOne(
    winner_raffleVO: Winners_RafflesVO
  ): Promise<Winners_RafflesVO[]> {
    const listWinners_RafflesVO: Winners_RafflesVO[] = [];
    const listWinners_Raffles: IWinner_Raffle[] = await conn("winners_raffles")
      .select("*")
      .where("winner_id", "=", `${winner_raffleVO.getWinner_id()}`)
      .where("deleted_at", null);
    listWinners_Raffles.forEach((item) => {
      const winner_raffles = new Winners_RafflesVO();
      winner_raffles.setCreated_at(item.created_at);
      winner_raffles.setDeleted_at(item.deleted_at);
      winner_raffles.setImage(item.image);
      winner_raffles.setVideo(item.video);
      winner_raffles.setParticipants_raffle_participant_id(
        item.participants_raffle_participant_id
      );
      winner_raffles.setWinner_id(item.winner_id);

      listWinners_RafflesVO.push(winner_raffles);
    });

    return listWinners_RafflesVO;
  },
  async indexAllJoinWinnersParticipantsUsersQuotasRaffles(){
    
    const response =  await conn.raw(`
    SELECT 
    winners_raffles.winner_id,
    winners_raffles.participants_raffle_participant_id,
    winners_raffles.image,
    winners_raffles.video,
    users.name,
    users.address,
    raffles.date_raffle,
    raffles.title,
    GROUP_CONCAT( quotas_raffle.number) as cotas
    FROM winners_raffles 
      INNER JOIN participants_raffle ON participants_raffle.participant_id = winners_raffles.participants_raffle_participant_id
        INNER JOIN quotas_raffle ON participants_raffle.quotas_raffle_quota_raffle_id = quotas_raffle.quota_raffle_id
        INNER JOIN users ON users.user_id = participants_raffle.users_user_id 
        INNER JOIN raffles ON raffles.raffle_id = participants_raffle.raffles_raffle_id
    WHERE  
       participants_raffle.deleted_at IS NULL AND
        participants_raffle.status = "sold" AND 
        winners_raffles.deleted_at is null
    GROUP BY
        winners_raffles.winner_id
    `)

    return response
  },
  async indexAll() {
    const listWinners_RafflesVO: Winners_RafflesVO[] = [];
    const listWinners_Raffles: IWinner_Raffle[] = await conn("winners_raffles")
      .select("*")
      .where("deleted_at", null);
    listWinners_Raffles.forEach((item) => {
      const winner_raffles = new Winners_RafflesVO();
      winner_raffles.setCreated_at(item.created_at);
      winner_raffles.setDeleted_at(item.deleted_at);
      winner_raffles.setImage(item.image);
      winner_raffles.setVideo(item.video);
      winner_raffles.setParticipants_raffle_participant_id(
        item.participants_raffle_participant_id
      );
      winner_raffles.setWinner_id(item.winner_id);

      listWinners_RafflesVO.push(winner_raffles);
    });

    return listWinners_RafflesVO;
  },
  async create(winner_raffleVO: Winners_RafflesVO): Promise<boolean> {
    try {
      const participant_raffleVO = new Participants_RuffleVO();
      participant_raffleVO.setParticipant_id(
        winner_raffleVO.getParticipants_raffle_participant_id()
      );

      const listParticipants = await Participants_RafflesDAO.indexOne(
        participant_raffleVO
      );

      let responseDAO = false;
      if (listParticipants.length >= 1) {
        await conn("winners_raffles").insert({
          participants_raffle_participant_id: winner_raffleVO.getParticipants_raffle_participant_id(),
          video: winner_raffleVO.getVideo(),
          image: winner_raffleVO.getImage(),
        });

        responseDAO = true;
      }

      return responseDAO;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async update(winner_raffleVO: Winners_RafflesVO): Promise<boolean> {
    try {
      const participant_raffleVO = new Participants_RuffleVO();
      participant_raffleVO.setParticipant_id(
        winner_raffleVO.getParticipants_raffle_participant_id()
      );

      const listParticipants = await Participants_RafflesDAO.indexOne(
        participant_raffleVO
      );

      let responseDAO = false;
      if (listParticipants.length >= 1) {
        const response = await conn("winners_raffles")
          .update({
            participants_raffle_participant_id: winner_raffleVO.getParticipants_raffle_participant_id(),
            video: winner_raffleVO.getVideo(),
            image: winner_raffleVO.getImage(),
          })
          .where("winner_id", "=", `${winner_raffleVO.getWinner_id()}`);

        responseDAO = response == 1 ? true : false;
      }

      return responseDAO;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async delete(winner_raffleVO: Winners_RafflesVO): Promise<boolean> {
    try {
      const participant_raffleVO = new Participants_RuffleVO();
      participant_raffleVO.setParticipant_id(
        winner_raffleVO.getParticipants_raffle_participant_id()
      );

      const listParticipants = await Participants_RafflesDAO.indexOne(
        participant_raffleVO
      );

      let responseDAO = false;
      if (listParticipants.length >= 1) {
        const response = await conn("winners_raffles")
          .update({
            deleted_at: new Date(),
          })
          .where("winner_id", "=", `${winner_raffleVO.getWinner_id()}`);

        responseDAO = response == 1 ? true : false;
      }

      return responseDAO;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
