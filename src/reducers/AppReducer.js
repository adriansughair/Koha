const startApp = {
    startApp:null,
    show:false,
};

const AppReducer = (state = startApp, {type, payload}) => {
    switch (type) {
        case 'START_APP':
            return {startApp: true, show: true};
        default:
            return state;
    }
};

export default AppReducer;