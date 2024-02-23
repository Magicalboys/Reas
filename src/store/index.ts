import UserSlice from '@/store/features/userSlice';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const clientStore = configureStore({
    reducer: {
        user: UserSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

const serverStore = configureStore({
    reducer: {
        user: UserSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export {clientStore, serverStore};
