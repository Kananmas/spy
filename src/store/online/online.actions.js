import { ADD_PLAYER, REMOVE_PLAYER, RESET_SELECTED_PLAYER, SET_MANAGER_PALYER, SET_ROOM, SET_SELECTED_PLAYER } from "./online.constants";

/**
 * 
 * @param {string} paylaod 
 * @returns 
 */

export function setRoomAction(paylaod) {
    return {
        type: SET_ROOM,
        paylaod,
    }
}

/**
 * 
 * @param {object} paylaod 
 * @returns 
 */

export function addPlayerAction(paylaod) {
    return {
        type: ADD_PLAYER,
        paylaod,
    }
}

/**
 * 
 * @param {object} paylaod 
 * @returns 
 */

export function removePlayerAction(paylaod) {
    return {
        type: REMOVE_PLAYER,
        paylaod,
    }
}

/**
 * 
 * @param {number} paylaod 
 * @returns 
 */

export function setManagerPlayerAction(paylaod) {
    return {
        type: SET_MANAGER_PALYER,
        paylaod,
    }
}

/**
 * 
 * @param {number} paylaod 
 * @returns 
 */

export function setSelectedPlayerAction(paylaod) {
    return {
        type: SET_SELECTED_PLAYER,
        paylaod,
    }
}

export function resetSelectedPlayerAction() {
    return {
        type: RESET_SELECTED_PLAYER,
    }
}