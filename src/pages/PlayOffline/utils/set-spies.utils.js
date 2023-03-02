import { store } from "../../../store";

export function setSpies() {
    const user = store.getState().user;
    const { gameSettings } = user;
    console.log(user)
    let spies = [];

    for (let i = 0; i < gameSettings.spiesCount; i++) {
        const numberGenrator = Math.random() * gameSettings.playerCount;
        if (!spies.includes(numberGenrator)) {
            spies.push(numberGenrator)
        }
    }

    return spies
}