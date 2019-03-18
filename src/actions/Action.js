import {AGE_UP , AGE_DOWN , HISTORY, DELETE , LOADING} from '../constants/Constant';

export  function increaseAsync (inc) {
    return{
        type : AGE_UP,
        payload : inc
    }
}

export const loading = ()=>{
    return{
        type : LOADING
    }
}

export const increase = inc =>{
    return dispatch =>{
        dispatch(loading())
        setTimeout(()=>{
            dispatch(increaseAsync(inc))
        },2000)
    }
}

export  function decrease (dec){
    return{
        type : AGE_DOWN,
        payload : dec
    }
}

export function history (payload){
    return{
        type : HISTORY,
        payload
    }
}

export function delet(payload){
    return{
        type : DELETE,
        payload
    }
}