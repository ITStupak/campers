import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

const defaultParams = {
  page: 1,
  limit: 4,
};

export const fetchAllCampers = createAsyncThunk(
  'campers/fetchAll',
  async (newParams = {}, thunkAPI) => {
    try {
      const params = { ...defaultParams, ...newParams };
      const { data } = await instance.get('/campers', {
        params,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOneCamper = createAsyncThunk(
  'campers/fetchOne',
  async (camperId, thunkAPI) => {
    try {
      const { data } = await instance.get('/campers', { camperId });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);