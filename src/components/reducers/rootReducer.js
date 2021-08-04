import { combineReducers } from "redux";
import { cartReducer, userReducer } from "./allreducers";
const rootReducer=combineReducers({
    cartReducer,
    userReducer
})
export default rootReducer