import { createAsyncThunk } from "@reduxjs/toolkit";

const createQuestion = createAsyncThunk('CreateQuestion', async (data:{},{rejectWithValue}) => {
   
    try{
        const response = await fetch('http://localhost:5000/api/questions/createQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token' : localStorage.getItem('token') ?? ""
            },
            body: JSON.stringify(data)
        })
        const result = await response.json();
        console.log("Result",result);
        return result;
    
    }
    catch(err){
        return rejectWithValue(err);
    }
})

const getQuestions = createAsyncThunk('allQuestions', async (_, {rejectWithValue}) => {

    try{
        const response = await fetch('http://localhost:5000/api/questions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token' : localStorage.getItem('token') ?? ""
            },
        })
        const result = await response.json();
        console.log("Result", result);
        return result;

    }
    catch(err){
        return rejectWithValue(err);
    }
})
export default createQuestion;
export {getQuestions}
