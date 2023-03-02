import { createStore } from "redux";
import { reducers } from "./index.reducers";

export const store = createStore(reducers)

