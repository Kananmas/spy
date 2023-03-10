import { keyWords } from "../../../utils/key-words.utils";

export function selectKeyword() {
    const randomIndex = Math.floor(Math.random() * keyWords.length)
    return keyWords[randomIndex]
}