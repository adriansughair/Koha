export const startApp = () => {
    return {
        type: 'START_APP',
    };
};

export const setTo = (to) => {
    return {
        type: 'SET_TO',
        payload: to,
    };
};

export const setSettings = (settings) => {
    return {
        type: 'SET_SETTINGS',
        payload: settings,
    };
};

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user,
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};

export const removeAppData = () => {
    return {
        type: 'REMOVE_APP_DATA',
    };
};
