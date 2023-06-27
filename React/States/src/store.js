import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './storeSlices/counterSlice';

export default configureStore( {
    reducer: {
        counter: counterReducer
    }
});