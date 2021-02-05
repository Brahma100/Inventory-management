import { GET_ERRORS,CLEAR_ERRORS,ORDER_ADD_FAIL } from "./types";

// Return Error
export const returnErrors=(msg,status, id=null)=>{
    return{
        type:GET_ERRORS,
        payload:{msg,status,id}
    }
}
// clean error
export const clearErrors=()=>{
    return{
        type:CLEAR_ERRORS
    }
}
