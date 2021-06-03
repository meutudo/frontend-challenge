const INITIAL_STATE = {
    loanValue: 0,
};

const LoanValueReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHANGE_LOAN_VALUE":
            return {
                ...state,
                loanValue: action.loanValue,
            };

        default:
            return state;
    }
};

export default LoanValueReducer;
