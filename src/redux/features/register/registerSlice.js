import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const registerUser = createAsyncThunk(
    "register/registerUser",
    async (data, thunkAPI) => {
        console.log(data)
        try {
            const response = await axios.post("https://api.mudoapi.tech/register", data)
            console.log(response)
            return response.data
        } catch (error) {
            console.log(error.response.data)
            throw error.response.data
        }
    }
)

const initialState = {
    success: "",
    loading: false,
    error: ""
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                state.success = action.payload.message
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default registerSlice.reducer