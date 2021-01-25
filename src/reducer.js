export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: "",
  // "BQDr8qsLcSCTsrxyUVhdZhY_7h2c9StJPbD3PQfi9k-Fl8L8ahpQ_JhcqZ9Qn5LR-kO3ENh3riKOBGMNedwm0VsXzR15aPIQRGYPzTXILiLJG9XVDSV2qQb4tDrOJruexZreNWe1YnKX7suPSp5yyFa4-aIjXMyvF9C3Da0f7bTxqV4Q",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
