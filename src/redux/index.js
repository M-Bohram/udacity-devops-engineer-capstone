import cartReducer from "./cart/reducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
