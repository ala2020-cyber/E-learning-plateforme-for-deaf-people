import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localStorage

const student = JSON.parse(localStorage.getItem("student"));
const initialState = {
  student: student ? student : null,
  isErrorStudent: false,
  isSuccessStudent: false,
  isLoadingStudent: false,
  messageStudent: "",
};

// register student
export const register = createAsyncThunk(
  "authStudent/register",
  async (student, thunkAPI) => {
    try {
      return await authService.registerStudent(student);
    } catch (error) {
      const messageStudent =error.response.data
      return thunkAPI.rejectWithValue(messageStudent);
    }
  }
);

// login user
export const loginStudent = createAsyncThunk(
  "authStudent/login", 
  async (student, thunkAPI) => {
  try {
    return await authService.loginStudent(student);
  } catch (error) {
    const messageStudent =error.response.data

      console.log(error.response.data)
    return thunkAPI.rejectWithValue(messageStudent);
  }
});


export const logoutStudent = createAsyncThunk("authStudent/logout", async () => {
  await authService.logoutStudent();
});



// add note
export const addNote= createAsyncThunk(
  "authStudent/addNote",
  async (note,thunkAPI)=> {
    try {
      return await authService.addNote(note);
    } catch (error) {
      const messageNote =error.response.data
  
        console.log(error.response.data)
      return thunkAPI.rejectWithValue(messageNote);
    }
  }
)

// delete note

export const deleteNote= createAsyncThunk(
  "authStudent/deleteNote",
  async (id,thunkAPI)=> {
    try {
      return await authService.deleteNote(id);
    } catch (error) {
      const messageNote =error.response.data
  
        console.log(error.response.data)
      return thunkAPI.rejectWithValue(messageNote);
    }
  }
)






export const authSlice = createSlice({
  name: "authStudent",
  initialState,
  reducers: {
    resetStudent: (state) => {
      state.isErrorStudent = false;
      state.isSuccessStudent = false;
      state.isLoadingStudent = false;
      state.messageStudent = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoadingStudent = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoadingStudent = false;
        state.isSuccessStudent = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoadingStudent = false;
        state.isErrorStudent = true;
        state.messageStudent = action.payload;
      })

      .addCase(logoutStudent.fulfilled, (state) => {
        state.student = null;
      })

      .addCase(loginStudent.pending, (state) => {
        state.isLoadingStudent = true;
      })
      .addCase(loginStudent.fulfilled, (state, action) => {
        state.isLoadingStudent = false;
        state.isSuccessStudent = true;
        state.student = action.payload;
      })
      .addCase(loginStudent.rejected, (state, action) => {
        state.isLoadingStudent = false;
        state.isErrorStudent = true;
        state.messageStudent = action.payload;
        state.student = null;
      });
  },
});

export const { resetStudent } = authSlice.actions;
export default authSlice.reducer;
