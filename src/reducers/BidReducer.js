import { POP_UP, SORT , POP_UP_FILLTER , STORE , PRICE , LOCTIONS , AGE} from '../actions/BidActions';


const intailState = {
    Show : false,
    ShowFillter : false, 
    Sort : 'Newest' ,
    City : [] ,
    Price : 0 , 
    Locations : 0 ,
    Ages:''
};

const BidReducer = (state = intailState, action) => {
    switch (action.type) {
        case POP_UP:
                const Check = action.payload;
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
          case SORT:
            const getData = action.payload;
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
            case POP_UP_FILLTER:
                const flag = action.payload;
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
                case STORE:
                    const AllCity = action.payload;
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
                case PRICE:
                    const Value = action.payload;
                    return { 
                        ...state , 
                        Price: Value
                    }
                    case LOCTIONS:
                        const id = action.payload;
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
                    case AGE : 
                    const AgesValue = action.payload;
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

export default BidReducer;