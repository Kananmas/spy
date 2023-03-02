import { SET_KEY_WORD, SET_SPY_PLAYERS } from "./game.constants"

const initialState = {
    keyWord: '',
    spies: []
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_KEY_WORD:
            return { ...state, keyWord: action.payload };
        case SET_SPY_PLAYERS:
            return { ...state, spies: action.payload };
        default:
            return state;
    }
}