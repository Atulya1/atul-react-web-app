import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuitHome.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitHomeSlice = createSlice({
    name: 'tuitsHomeReducer',
    initialState: tuits,
    reducers: {
        updateLikes(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload.tuitId);
            tuit.liked = action.payload.liked;
            tuit.likes = action.payload.likes;
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

    },
});
export const {updateLikes, createTuit, deleteTuit} = tuitHomeSlice.actions

export default tuitHomeSlice.reducer;