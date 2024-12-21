import { createSlice } from '@reduxjs/toolkit';
import { fetchOneCamper, fetchAllCampers } from './operations.js';

const INITIAL_STATE = {
    items: [],
    total: 0,
    error: null,
    isLoading: false,
  }

const campersSlice = createSlice({
  name: 'campers',
  initialState: INITIAL_STATE,
  extraReducers: (bundler) => bundler        
    .addCase(fetchAllCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(fetchAllCampers.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload.items;
        state.total = payload.total;
    })
    .addCase(fetchAllCampers.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.items = [];
        state.error = payload;
    })
    
    .addCase(fetchOneCamper.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(fetchOneCamper.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload.items;
        state.total = payload.total;
    })
    .addCase(fetchOneCamper.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.items = [];
        state.error = payload;
    })
});

export const campersReducer = campersSlice.reducer;