type stateType={
    num:number
}
const initState={
    num: 0
}

export const StartReducer=(state:stateType=initState, action:actionType)=>{
    switch(action.type){
        case "ADD-NUMBER-START":{
            let copyState=state.num+1
            return copyState
        }
        case "DELETE-NUMBER-START":{
            let copyState=state.num-1
            return copyState
        }
    } return state
}
type actionType=StartValueAddACType | StartValueDeleteACType
type StartValueAddACType=ReturnType<typeof startValueAddAC>
export const startValueAddAC=()=>{
    return{
        type:"ADD-NUMBER-START"
    }as const
}
type StartValueDeleteACType=ReturnType<typeof startValueDeleteAC>
export const startValueDeleteAC=()=>{
    return{
        type:"DELETE-NUMBER-START"
    }as const
}