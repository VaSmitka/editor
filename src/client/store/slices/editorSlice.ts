import { createSlice, createAction, PrepareAction } from '@reduxjs/toolkit';

interface EditorReduxState {
  currentEditorId: string | null;
}

const initialState: EditorReduxState = {
  currentEditorId: null
};

export const setCurrentEditor = createAction<PrepareAction<string>>('editor/setCurrentEditor', (editorId: string) => {
  console.log('ho do this')
  return {
    payload: editorId
  };
});

export const themeSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCurrentEditor, (state, action) => {
      state.currentEditorId = action.payload;
    });
  },
});

export default themeSlice.reducer;
