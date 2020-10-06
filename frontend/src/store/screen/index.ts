
import ParticipantsDrawsCreate from '../../components/ParticipantsDraws/Create'

export type Action = {
  type: "set";
  state: React.FC;
};

export default function reducerScreen(state: React.FC = ParticipantsDrawsCreate , action: Action) {
  switch (action.type) {
    case "set":
      state = action.state;
      break;
    default:
      return state;
  }

  return state;
}
