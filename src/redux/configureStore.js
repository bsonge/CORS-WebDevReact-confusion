//unnessesary to follow this approach, this is just sometimes used for convenience
import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );
    
    return store;
}