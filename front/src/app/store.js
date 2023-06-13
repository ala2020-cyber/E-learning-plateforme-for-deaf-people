import { configureStore } from "@reduxjs/toolkit";

import student from "../features/auth/authSliceStudent";
import instructor from "../features/auth/authSliceInstructor";

export default configureStore({
  reducer: {
    authStudent: student,
    authInstructor:instructor,
  },
});
