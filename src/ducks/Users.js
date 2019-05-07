import { Dispatch }  from 'redux'
import { Services } from '../services'

export default function reducer(state={}){
    return state
}

export const login = ({email, password}) =>
    async (Dispatch,getState, { Services }) => {
        const result = await Services.auth.SignInWithEmailAndPassword({email, password})
        console.log(result)
    }
