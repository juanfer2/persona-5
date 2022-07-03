import { createSlice } from '@reduxjs/toolkit';

export const healtSlice = createSlice({
  name: 'healt',
  initialState: { status: 'PENDING...' },
  reducers: {
    updateStatus: (state) => {
      state.status = 'OK';
    }
  }
});

export const { updateStatus } = healtSlice.actions;
export default healtSlice.reducer;
