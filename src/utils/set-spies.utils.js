import { store } from "../store";

export function setSpies() {
    const user = store.getState().user;
    const { gameSettings } = user;
    let spies = [];

    for (let i = 0; i < gameSettings.spiesCount; i++) {
        const numberGenrator = Math.floor(Math.random() * gameSettings.playerCount);
        if (!spies.includes(numberGenrator)) {
            spies.push(numberGenrator)
        }
    }

    return spies
}