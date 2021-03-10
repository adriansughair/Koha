import {combineReducers, createStore} from 'redux';
import UserReducer from './reducers/UserReducer';
import AppReducer from './reducers/AppReducer';
import AccessoriesReducer from './reducers/AccessoriesReducer';
import BidReducer from './reducers/BidReducer';


export const store = createStore(
    combineReducers({
        user: UserReducer,
        app: AppReducer,
        access: AccessoriesReducer ,
        bid : BidReducer ,
    }),
);
