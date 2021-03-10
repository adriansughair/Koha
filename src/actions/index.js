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

export const Show = (flag) => {
    return {
       type : 'POP_UP' , 
       payload : flag
    };
};

export const Sorting = (value) => {
return { 
 type : 'SORT' , 
 payload : value 
};
};

export const popUpFillter = (flag) => {
    return {
        type : 'POP_UP_FILLTER' , 
        payload : flag
    };
};

export const Fillter = (value) => {
    return {
     type : 'FILLTER' ,
     Value : value
    };
};

export const City = (id) => {
return { 
    type : 'STORE' , 
    payload : id
};
};


export const Price = (Num) => {
    return {
        type : 'PRICE' , 
        payload : Num
    };
}; 

export const Locations = (id) => {
    return {
        type : 'LOCTIONS' ,
        payload : id
    };
};

export const Age = (value) => {
    return {
    type :'AGE' ,
    payload :value
    };
};