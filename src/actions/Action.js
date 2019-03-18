import {AGE_UP , AGE_DOWN , HISTORY, DELETE} from '../constants/Constant';

export  function increase (inc) {
    return{
        type : AGE_UP,
        payload : inc
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