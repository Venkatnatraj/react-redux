import { AGE_UP, AGE_DOWN , HISTORY , DELETE , LOADING} from '../constants/Constant';

export default function Reducer (
    state = {
        age:23,
        history : [],
    },
    actions
){
    switch(actions.type){
        case AGE_UP:
            return{
                ...state,
                age : state.age + actions.payload,
                history : state.history.concat({age : state.age + actions.payload , id:Math.random()}),
                state : state.LOADING = false
            }
        case AGE_DOWN:
            return{
                ...state,
                age : state.age - actions.payload,
                history : state.history.concat({age : state.age - actions.payload, id:Math.random()})
            }
            case DELETE :
                return{
                    ...state,
                    history : state.history.filter(el => el.id !== actions.payload)
                }
            case LOADING :
                return{
                    ...state,
                    state : state.LOADING = true
                }
            default:
                return state
    }
}

// export  function dis (dispatch){
//     return{
//         increase : ()=>dispatch({increase}),
//         decrease : ()=>dispatch({decrease})
//     }
// }
