const initialState = {
  startApp: false,
  startGame: false,
  showLobby: false,
  backendSeverActive: false
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "START_APP":
      return { ...state, startApp: true };
    default:
      return state;
  }
}
