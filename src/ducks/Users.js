
export default function reducer(state={}){
    return state
}

export const login = ({email, password}) =>
    async (dispatch, getState, { auth }) => {
        const result = await auth.signInWithEmailAndPassword(email, password)
    }

export const register = ({ email, password, confirmPassword }) =>
    async (dispatch, getState, { auth }) => {
        if (password === confirmPassword){
            const result = await auth.createUserWithEmailAndPassword(email, password)
            console.log(result)

        }else{
            console.log("passwords no coinciden!")
        }
    }

