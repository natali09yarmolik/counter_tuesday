const initState={
    errorMessage:'',
}
const setErrorMessage ="messageReducer/SET_ERROR_MESSAGE"

export const MessageReducer=(state: { errorMessage:string }=initState, action:actionType)=>{
    switch(action.type){
        case setErrorMessage:
          return {
              errorMessage: action.payload
          }
        default:
            return state;
    }
}
type actionType=setErrorMessageACType

export const setErrorMessageAC=(errorMessage:string)=>{
    return{
        type:setErrorMessage,
        payload:errorMessage
    }as const
}
type setErrorMessageACType=ReturnType<typeof setErrorMessageAC>
