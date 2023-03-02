import { SET_KEY_WORD, SET_SPY_PLAYERS } from "./game.constants";

/**
 * 
 * @param {string} payload 
 * @returns 
 */

export function setKeywordAction(payload) {
    return {
        type: SET_KEY_WORD,
        payload
    }
}

/**
 * 
 * @param {array} payload 
 * @returns 
 */

export function setSpiesAction(payload) {
    return {
        type: SET_SPY_PLAYERS,
        payload
    }
} 