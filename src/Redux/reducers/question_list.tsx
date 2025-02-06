import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import createQuestion,{getQuestions} from "./question_action.tsx";


interface Question {
  title: string;
  body: string;
  tag: string;
}
interface QuestionState {
  loading: boolean;
  success: boolean;
  questions: Question[];
}

const initialState: QuestionState = {
  loading : false,
  success : false,
  questions: []
};
export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

     // Handle createQuestion
    builder.addCase(createQuestion.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createQuestion.fulfilled, (state, action) => {
      state.loading = false;
      if(action.payload.question){
        
        state.questions.push(action.payload.question);
      }
    });
    builder.addCase(createQuestion.rejected, (state) => {
      state.loading = false;
    });

    // Handle fetchQuestions
    builder.addCase(getQuestions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.loading = false;
      console.log("Payload", action.payload)
      if(action.payload.questions){

        state.questions = action.payload.questions;
      }
    });
    builder.addCase(getQuestions.rejected, (state) => {
      state.loading = false;
    });

  },
});

export default questionSlice.reducer;


// setQuestion: (state, action:PayloadAction<Question>) => {
//   state.questions.push(action.payload)