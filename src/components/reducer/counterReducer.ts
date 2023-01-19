const initState=0 //можно ли сюда передать переменную?

export const CounterReducer=(state:number=initState, action:actionType):number=>{

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
