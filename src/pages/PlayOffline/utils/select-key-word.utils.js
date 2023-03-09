import { keyWords } from "../../../utilis/key-words.utils";

export function selectKeyword() {
    const randomIndex = Math.floor(Math.random() * keyWords.length)
    return keyWords[randomIndex]
}