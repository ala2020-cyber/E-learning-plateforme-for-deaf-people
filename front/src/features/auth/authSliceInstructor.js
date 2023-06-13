import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localStorage

const instructor = JSON.parse(localStorage.getItem("instructor"));
const initialState = {
  instructor: instructor ? instructor : null,
  courses:[],
  isErrorInstructor: false,
  isSuccessInstructor: false,
  isLoadingInstructor: false,
  isCourseDeleted:false,
  isLessonDeleted:false,
  isUpdatedCourse:false,
  messageInstructor: "",
};

export const register = createAsyncThunk(
  "authInstructor/register",
  async (instructor, thunkAPI) => {
    try {
      return await authService.registerInstructor(instructor);
    } catch (error) {
      const messageInstructor = error.response.data;
      console.log(error);
      return thunkAPI.rejectWithValue(messageInstructor);
    }
  }
);

export const loginInstructor = createAsyncThunk(
  "authInstructor/login",
  async (instructor, thunkAPI) => {
    try {
      return await authService.loginInstructor(instructor);
    } catch (error) {
      const messageInstructor = error.response.data;

      console.log(error.response.data);
      return thunkAPI.rejectWithValue(messageInstructor);
    }
  }
);

export const logoutInstructor = createAsyncThunk(
  "authInstructor/logout",
  async () => {
    await authService.logoutInstructor();
  }
);

export const addCourse = createAsyncThunk(
  "authInstructor/addCourse",
  async (course, thunkAPI) => {
    try {
      const token=thunkAPI.getState().authInstructor.instructor.token
      return await authService.addCourse(course,token);
    } catch (error) {
      const messageCourses = error.response.data;
      console.log(error);
      return thunkAPI.rejectWithValue(messageCourses);
    }
  }
);
export const deleteCourse = createAsyncThunk(
  "authInstructor/deletecourse",
  async (id, thunkAPI) => {
    try {
      const token=thunkAPI.getState().authInstructor.instructor.token

      return await authService.deleteCourse(id,token);
    } catch (error) {
      const messageCourses = error.response.data;
      console.log(error);
      return thunkAPI.rejectWithValue(messageCourses);
    }
  }
);



// update course
export const updateCourse = createAsyncThunk(
  "authInstructor/updatecourse",
  async (course, thunkAPI) => {
    try {
      const token= thunkAPI.getState().authInstructor.instructor.token
      const id="";
      return await authService.updateCourse(id,course,token);
    } catch (error) {
      const messageCourses = error.response.data;
      console.log(error);
      return thunkAPI.rejectWithValue(messageCourses);
    }
  }
);

export const getCourses = createAsyncThunk(
  "authInstructor/getCourses",
  async ( thunkAPI) => {
    try {
      const token= thunkAPI.getState().authInstructor.instructor.token
      const res= await authService.getCourses(token);
      console.log(res)
    } catch (error) {
      const messageCourses = error.response.data;
      console.log(error);
      return thunkAPI.rejectWithValue(messageCourses);
    }
  }
);


// Addd Lesson
export const deleteLesson = createAsyncThunk(
  "authInstructor/deleteLesson",
  async (lesson, thunkAPI) => {
    try {
      const token= thunkAPI.getState().authInstructor.instructor.token
      const res= await authService.deleteLesson(lesson, token);
      console.log(res)
    } catch (error) {
      const messageCourses = error.response.data;
      console.log(error);
      return thunkAPI.rejectWithValue(messageCourses);
    }
  }
);
// Addd Lesson
export const addLesson = createAsyncThunk(
  "authInstructor/addLesson",
  async (lesson, thunkAPI) => {
    try {
      const res= await authService.addLesson(lesson);
      console.log(res)
    } catch (error) {
      const messageCourses = error.response.data;
      console.log(error);
      return thunkAPI.rejectWithValue(messageCourses);
    }
  }
);




export const authSlice = createSlice({
  name: "authInstructor",
  initialState,
  reducers: {
    resetInstructor: (state) => {
      state.courses=[]
      state.isErrorInstructor = false;
      state.isSuccessInstructor = false;
      state.isLoadingInstructor = false;
      state.isCourseDeleted=false;
      state.isLessonDeleted=false;
      state.isUpdatedCourse=false;
      state.messageInstructor = "";

    },
  },
  extraReducers: (builder) => {
    builder
    // register cases
      .addCase(register.pending, (state) => {
        state.isLoadingInstructor = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoadingInstructor = false;
        state.isSuccessInstructor = true;
        
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoadingInstructor = false;
        state.isErrorInstructor = true;
        state.messageInstructor = action.payload;
        state.instructor = null;
      })


   // logout cases
      .addCase(logoutInstructor.fulfilled, (state) => {
        state.instructor = null;
        state.courses=null
      })




    //login cases
      .addCase(loginInstructor.pending, (state) => {
        state.isLoadingInstructor = true;
      })
      .addCase(loginInstructor.fulfilled, (state, action) => {
        state.isLoadingInstructor = false;
        state.isSuccessInstructor = true;
        state.instructor = action.payload;
      })
      .addCase(loginInstructor.rejected, (state, action) => {
        state.isLoadingInstructor = false;
        state.isErrorInstructor = true;
        state.messageInstructor = action.payload;
        state.instructor = null;
      })




    // addCourse cases
      .addCase(addCourse.pending, (state) => {
        state.isLoadingInstructor = true;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.isLoadingInstructor = false;
        state.isSuccessInstructor = true;
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.isLoadingInstructor = false;
        state.isErrorInstructor = true;
        state.messageInstructor = action.payload;
      })
      
      
      
      
      // deleteCourse cases
      .addCase(deleteCourse.pending, (state) => {
        state.isLoadingInstructor = true;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.isLoadingInstructor = false;
        state.isSuccessInstructor = true;
        state.isCourseDeleted=true;
        
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.isLoadingInstructor = false;
        state.isErrorInstructor = true;
        state.messageInstructor = action.payload;
      })
      


      
    // updatecourse cases
      .addCase(updateCourse.pending, (state) => {
        state.isLoadingInstructor = true;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.isLoadingInstructor = false;
        state.isSuccessInstructor = true;
        state.isUpdatedCourse=true;

      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.isLoadingInstructor = false;
        state.isErrorInstructor = true;
        state.messageInstructor = action.payload;
      })

// get courses
      .addCase(getCourses.pending, (state) => {
        state.isLoadingInstructor = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.isLoadingInstructor = false;
        state.isSuccessInstructor = true;
        state.isUpdatedCourse=true;
        state.courses=action.payload

      })
      .addCase(getCourses.rejected, (state, action) => {
        state.isLoadingInstructor = false;
        state.isErrorInstructor = true;
        state.messageInstructor = action.payload;
      })



    // addLesson cases
      .addCase(addLesson.pending, (state) => {
        state.isLoadingInstructor = true;
      })
      .addCase(addLesson.fulfilled, (state, action) => {
        state.isLoadingInstructor = false;
        state.isSuccessInstructor = true;

      })
      .addCase(addLesson.rejected, (state, action) => {
        state.isLoadingInstructor = false;
        state.isErrorInstructor = true;
        state.messageInstructor = action.payload;
      })


            // deleteLessons cases
            .addCase(deleteLesson.pending, (state) => {
              state.isLoadingInstructor = true;
            })
            .addCase(deleteLesson.fulfilled, (state, action) => {
              state.isLoadingInstructor = false;
              state.isSuccessInstructor = true;
              state.isLessonDeleted=true;
              
            })
            .addCase(deleteLesson.rejected, (state, action) => {
              state.isLoadingInstructor = false;
              state.isErrorInstructor = true;
              state.messageInstructor = action.payload;
            })
            

  },
});

export const { resetInstructor } = authSlice.actions;
export default authSlice.reducer;
