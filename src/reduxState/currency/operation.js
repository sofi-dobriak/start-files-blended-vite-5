import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../service/opencagedataApi';
import { exchangeCurrency, latestRates } from '../../service/exchangeAPI';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/fetchBaseCurrency',
  async (coords, thunkApi) => {
    const state = thunkApi.getState();
    const { baseCurrency } = state.currency;

    if (baseCurrency) {
      return thunkApi.rejectWithValue('We already received base currency');
    }

    try {
      const data = await getUserInfo(coords);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const fetchExchangeInfo = createAsyncThunk(
  'currency/fetchExchangeInfo',
  async (credentials, thunkApi) => {
    try {
      const data = await exchangeCurrency(credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const fetchLatestRates = createAsyncThunk(
  'currency/fetchLatestRates',
  async (baseCurrency, thunkApi) => {
    try {
      const data = await latestRates(baseCurrency);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
