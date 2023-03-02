import { userReducer } from "./user/user.reducer";
import { gameReducer } from "./game/game.reducer";
import { combineReducers } from "redux";


export const reducers = combineReducers({
    user: userReducer,
    game: gameReducer,
})