import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { JobInterface } from '../types/Job';
import { config } from '../config/default';

const BASE_URL = config.baseUrl;
const currentToken = config.currentToken;

export const fetchJobs = createAsyncThunk(
  'jobs/fetchJobs',
  async () => {
    try {
      const response = await fetch(BASE_URL + currentToken);
      const data = await response.json();

      return data;
    } catch (error: any) {
      throw new Error(error)
    }
  }
)

interface JobsState {
  jobs: JobInterface[];
  loading: 'idle' | 'pending' | 'succeeded';
}

const initialState: JobsState = {
  jobs: [],
  loading: 'idle',
};

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state, _) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.jobs = action.payload;
    });
  }
});

export default jobsSlice.reducer;