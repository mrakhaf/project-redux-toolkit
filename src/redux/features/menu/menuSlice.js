import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMenus = createAsyncThunk(
  'menus/getMenus',
  async () => {
    try {
      const response = await axios.get('https://api.mudoapi.tech/menus')
      console.log(response.data)
      return response.data.data
    } catch (error) {
      console.log(error)
      return error.response.data
    }
  }
)

const initialState = {
  list: [],
  loading: false,
  error: ""
}

const menuSlice = createSlice({
  name: 'menus',
  initialState,
  reducers: {
    // setMenus: (state, action) => {
    //   state.value = action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMenus.pending, (state) => {
        state.loading = true
      })
      .addCase(getMenus.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload.Data
      })
      .addCase(getMenus.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

// Action creators are generated for each case reducer function
// export const { menus } = menuSlice.actions

export default menuSlice.reducer