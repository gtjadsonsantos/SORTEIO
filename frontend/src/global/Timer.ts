/**
 *
 * @param dateInit Date
 * @param dateEnd Date
 * @returns true
 * @example updateAllResevations(new Date(), new Date("2020-09-20 09:00:00")
 *
 */
export default function updateAllResevations(dateEnd: Date) {

  let date1:any = new Date()
  let date2:any = dateEnd


  let difference =  date2 - date1  ; 

  let timeLeft = {
    days: Math.round(difference / (1000 * 60 * 60 * 24)),
    hours: Math.round((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.round((difference / 1000 / 60) % 60),
    seconds: Math.round((difference / 1000) % 60),
  };
  console.log(timeLeft)
  return timeLeft;
}
