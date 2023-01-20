type stateType={
    num:number
}
const initState={
    num: 0
}

export const CounterReducer=(state:stateType=initState, action:actionType)=>{

    switch(action.type){
        case "ADD-COUNT":{
            return action.count+1
        }
        case "RESET-COUNT":{
            return action.start
        }
   }
     return state
}
type actionType=addNumberACType | resetNumberACType

type addNumberACType=ReturnType<typeof addNumberAC>
type resetNumberACType=ReturnType<typeof resetNumberAC>

export const addNumberAC=(count:number)=>{
    return{
        type:"ADD-COUNT",
        count
    }as const
}
export const resetNumberAC=(start:number)=>{
    return{
        type:"RESET-COUNT",
        start
    }as const
}
