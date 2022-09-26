import { rootReducer } from "./reducers";
import { applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { legacy_createStore as createStore } from "redux";

export const store = createStore(rootReducer, applyMiddleware(thunk));
