import userReducer from '@app/store/slices/userSlice';
import authReducer from '@app/store/slices/authSlice';
import nightModeReducer from '@app/store/slices/nightModeSlice';
import themeReducer from '@app/store/slices/themeSlice';
import pwaReducer from '@app/store/slices/pwaSlice';
import courseReducer from '@app/store/slices/courseSlice';
import lessonReducer from '@app/store/slices/lessonSlice';
import messageReducer from '@app/store/slices/messageSlice';
import editorReducer from '@app/store/slices/editorSlice';

export default {
  user: userReducer,
  auth: authReducer,
  nightMode: nightModeReducer,
  theme: themeReducer,
  pwa: pwaReducer,
  course: courseReducer,
  lesson: lessonReducer,
  message: messageReducer,
  editor: editorReducer
};
