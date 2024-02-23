import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserData = createAsyncThunk('user/getData', async (initData: string) => {
    const res = await axios.post('http://127.0.0.1:3000/api/getUserData', {
        content: initData,
    });
    return res.data?.data?.content;
});

const UserSlice = createSlice({
    name: 'user',
    initialState:
    typeof window !== 'undefined' ?
        (window as any)?.context?.state?.user :
        {
            content: '默认数据',
        },
    // 同步reducer
    reducers: {},
    // 异步reducer
    extraReducers(build) {
        build
            .addCase(getUserData.pending, (state) => {
                state.content = 'pending';
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.content = action.payload;
            })
            .addCase(getUserData.rejected, (state) => {
                state.content = 'rejected';
            });
    },
});

export default UserSlice.reducer;
