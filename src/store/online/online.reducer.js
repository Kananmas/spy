import { ADD_PLAYER, REMOVE_PLAYER, RESET_SELECTED_PLAYER, SET_MANAGER_PALYER, SET_ROOM, SET_SELECTED_PLAYER } from "./online.constants";

const initialState = {
    players: [],
    room: '',
    managerPlayer: 0,
    selectedPlayer: null,
}

export function onlineReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PLAYER:
            state.players.push(action.paylaod);
            return state;
        case REMOVE_PLAYER:
            state.players = state.players.filter((player) => player.name != action.paylaod)
            return state;
        case SET_ROOM:
            return { ...state, room: action.paylaod };
        case SET_MANAGER_PALYER:
            return { ...state, managerPlayer: action.paylaod };
        case SET_SELECTED_PLAYER:
            return { ...state, selectedPlayer: action.paylaod };
        case RESET_SELECTED_PLAYER:
            return { ...state, selectedPlayer: null };
        default:
            return state;
    }
}