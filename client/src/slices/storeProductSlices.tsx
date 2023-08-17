import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ObjectState {
  objectData: Record<string, any>; // Define your object structure
}

const initialState: ObjectState = {
  objectData: {},
};

const objectSlice = createSlice({
  name: 'object',
  initialState,
  reducers: {
    setObjectData: (state, action: PayloadAction<Record<string, any>>) => {
      state.objectData = action.payload;
    },
  },
});

export const { setObjectData } = objectSlice.actions;
export default objectSlice.reducer;
