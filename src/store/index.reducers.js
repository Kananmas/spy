import { userReducer } from "./user/user.reducer";
import { gameReducer } from "./game/game.reducer";
import { onlineReducer } from "./online/online.reducer";
import { combineReducers } from "redux";


export const reducers = combineReducers({
    user: userReducer,
    game: gameReducer,
    online: onlineReducer,
})