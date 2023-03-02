import { SET_USERNAME, SET_USER_SETTINGS } from "./user.constants";


/**
 * 
 * @param {string} payload 
 * @returns 
 */

export function setUsernameAction(payload) {
    return {
        type: SET_USERNAME,
        payload
    }
}


/**
 * 
 * @param {object} payload 
 * @returns 
 */

export function setUserSettingsAction(payload) {
    return {
        type: SET_USER_SETTINGS,
        payload
    }
}