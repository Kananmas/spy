import { keyWords } from "../../../utilis/keyWords.utils";

export function selectKeyword() {
    const randomIndex = Math.floor(Math.random() * keyWords.length)
    return keyWords[randomIndex]
}