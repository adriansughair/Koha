const user = {
    user: null,
    loggedIn: false,
    Show : false,
    ShowFillter : false, 
    Sort : 'Newest' ,
    City : [] ,
    Price : 0 , 
    Locations : 0 ,
    Ages:''
};

const UserReducer = (state = user, {type, payload}) => {
    switch (type) {
        case 'SET_USER':
            return {...state, user: payload, loggedIn: true};
        case 'LOGOUT':
            return {loggedIn: false, user: null};
            case 'POP_UP':
            const Check = payload;
             if(Check === true){
              return {
              ...state , 
              Show : Check
             } 
            } else {
             return {
              ...state , 
              Show : false
           }
      }
      case 'SORT' : 
      const getData = payload;
        if(getData != ''){ 
            return {
                ...state , 
                 Sort : getData
            }
        } else { 
            return { 
                ...state , 
                Sort : 'Newest'
            }
        }
        case 'POP_UP_FILLTER' :
            const flag = payload;
            if(flag === true){
                return {
                    ...state , 
                    ShowFillter : flag     
                }
            } else {
                return {
                    ...state , 
                    ShowFillter : false
                }
            }
            case 'STORE':
                const AllCity = payload;
                if(AllCity.length != 0){
               return {
                ...state,
                City: [...state.City, AllCity]
                }
            } else {
                return {
                    ...state ,
                    City : [], 
                }
            }
            case 'PRICE' :
                const Value = payload;
                return { 
                    ...state , 
                    Price: Value
                }
                case 'LOCTIONS' :
                    const id = payload;
                    if(id){
                    return {
                        ...state , 
                        Locations: id
                    }
                } else {
                    return {
                        ...state , 
                        Locations : 0 
                    }
                }
                case 'AGE' : 
                const AgesValue = payload;
                if(AgesValue != ''){
                    return {
                        ...state ,
                        Ages : AgesValue
                    }
                } else {
                    return {
                        ...state , 
                        Ages : ''
                    }
                }
        default:
            return state;
    }
};

export default UserReducer;
