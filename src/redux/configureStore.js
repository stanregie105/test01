import { createStore, combineReducers} from 'redux';
import { reducer as formReducer} from 'redux-form';
import details from './reducerdetail';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';


const middlewares = [];

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}

export const ConfigureStore=() =>{
    const store = createStore(
    combineReducers({
         details,
        ...createForms({
            feedback: InitialFeedback
        })
       }),
       applyMiddleware(...middlewares)
    
    );
    return store;
}