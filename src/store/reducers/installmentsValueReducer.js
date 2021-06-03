const INITIAL_STATE = {
    installmentsValue: 0,
};

const InstallmentsValueReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHANGE_INSTALLMENTS_VALUE":
            return {
                ...state,
                installmentsValue: action.installmentsValue,
            };

        default:
            return state;
    }
};

export default InstallmentsValueReducer;
