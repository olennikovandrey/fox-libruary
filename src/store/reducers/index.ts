import { dataReducer } from "./dataReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  data: dataReducer
});

export type RootState = ReturnType<typeof rootReducer>
