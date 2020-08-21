import { createStore, combineReducers} from 'redux';
import details from './reducer/reducerdetail';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';


const middlewares = [];

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}

export const ConfigureStore=() =>{
    const store = createStore(
    combineReducers({
         details
       }),
       applyMiddleware(...middlewares)
    
    );
    return store;
}