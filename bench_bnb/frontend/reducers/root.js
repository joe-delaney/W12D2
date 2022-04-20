import { SessionReducer } from "./session";
import entitiesReducer from "./entities";
import errorsReducer from "./errors";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: SessionReducer,
  errors: errorsReducer
});