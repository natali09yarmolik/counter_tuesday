const initState=0

export const StartReducer=(state:number=initState, action:actionType):number=>{
    switch(action.type){
        case "ADD-NUMBER-START":{
            let copyState=state+1
            return copyState
        }
        case "DELETE-NUMBER-START":{
            let copyState=state-1
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