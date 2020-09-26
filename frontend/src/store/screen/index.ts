import DrawCreate from '../../components/Draw/Create'

export type Action = {
  type: "set";
  state: React.FC;
};

export default function reducerScreen(state: React.FC = DrawCreate , action: Action) {
  switch (action.type) {
    case "set":
      state = action.state;
      break;
    default:
      return state;
  }

  return state;
}
