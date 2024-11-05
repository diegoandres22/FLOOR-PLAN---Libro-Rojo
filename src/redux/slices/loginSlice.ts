// store/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    store: string,
    role: string
}

const initialState: UserState = {
    username: "Victor Sardinha",
    store: "all",
    role: "admin"
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loguear: (state, action: PayloadAction<UserState>) => {
            state.username = action.payload.username;
            state.store = action.payload.store;
            state.role = action.payload.role;
        },
        desLoguear: (state, _action) => {
            state.username = "";
            state.store = "";
            state.role = "";
        },
    },
});

export const { loguear, desLoguear } = loginSlice.actions;
export default loginSlice.reducer;
