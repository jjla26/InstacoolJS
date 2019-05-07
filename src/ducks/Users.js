
export default function reducer(state={}){
    return state
}

export const login = ({email, password}) =>
    async (dispatch, getState, { auth }) => {
        const result = await auth.signInWithEmailAndPassword({email, password})
        console.log(result)
    }
