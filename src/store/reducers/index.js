import { combineReducers } from "redux";

import LoanValueReducer from "./loanValueReducer";
import InstallmentsValueReducer from "./installmentsValueReducer";

export default combineReducers({
    LoanValueReducer,
    InstallmentsValueReducer,
});
