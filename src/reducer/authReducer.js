import {createSlice} from '@reduxjs/toolkit'


const authReducer = createSlice({
    name:'auth',
    initialState:{
        user:null,
        loading:false,
        error:false,
        isAuthenticated:false
    },
    reducers:{
        loginSuccess:(state,action)=>{
 state.user= action.payload;
 state.loading=false;
 state.error =false;
 state.isAuthenticated=true

        },
        loginLoading:(state,action)=>{
state.user = null;
state.loading=true;
state.error=false;
state.isAuthenticated=false
        },
        loginFailure:(state,action)=>{
state.user=null;
state.loading=false;
state.error=action.payload;
state.isAuthenticated=false
        },
        logout:(state,action)=>{
            state.user=null;
            state.isAuthenticated=false;
            state.error=false;
            state.loading=false
        },
        updateUser:(state,action)=>{
state.user={...state,...action.payload}
        }
    }
}
    
)

export const {loginFailure,loginSuccess,updateUser,logout,loginLoading} = authReducer.actions;
export default authReducer.reducer