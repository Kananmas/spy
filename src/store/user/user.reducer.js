import { SET_USERNAME, SET_USER_SETTINGS } from "./user.constants";

const savedUserName = localStorage.getItem('username')

const initialState = {
    username: savedUserName.length ? savedUserName : '',
    gameSettings: {
        playerCount: 5,
        spiesCount: 1,
        playTime: '1hour'
    }
}


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_SETTINGS:
            return { ...state, gameSettings: action.payload }
        case SET_USERNAME:
            return { ...state, username: action.payload };
        default:
            return state;
    }
}