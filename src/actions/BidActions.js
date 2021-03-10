export const POP_UP = 'POP_UP';
export const SORT = 'SORT';
export const POP_UP_FILLTER = 'POP_UP_FILLTER';
export const FILLTER = 'FILLTER';
export const STORE = 'STORE';
export const PRICE = 'PRICE';
export const LOCTIONS = 'LOCTIONS';
export const AGE = 'AGE';

export const Show = (flag) => {
    return {
       type : POP_UP ,
       payload : flag
    };
};

export const Sorting = (value) => {
return { 
 type : SORT , 
 payload : value 
};
};

export const popUpFillter = (flag) => {
    return {
        type : POP_UP_FILLTER , 
        payload : flag
    };
};

export const Fillter = (value) => {
    return {
     type : FILLTER ,
     Value : value
    };
};

export const City = (id) => {
return { 
    type : STORE , 
    payload : id
};
};


export const Price = (Num) => {
    return {
        type : PRICE , 
        payload : Num
    };
}; 

export const Locations = (id) => {
    return {
        type : LOCTIONS ,
        payload : id
    };
};

export const Age = (value) => {
    return {
    type :  AGE ,
    payload :value
    };
};