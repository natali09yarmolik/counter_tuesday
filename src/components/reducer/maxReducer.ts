const initState=0

export const MaxReducer=(state:number=initState, action:actionType):number=>{
    switch(action.type){
        case "ADD-NUMBER":
        {
            const maxValue=state+1
            return maxValue
        }
        case "DELETE-NUMBER":{
            const maxValue=state-1
            return maxValue
        }
    }
     return state
}
type actionType=MaxValueAddACType| MaxValueDeleteACType

type MaxValueAddACType=ReturnType<typeof maxValueAddAC>
export const maxValueAddAC=()=>{
    return{
        type:"ADD-NUMBER"
    }as const
}
type MaxValueDeleteACType=ReturnType<typeof maxValueDeleteAC>
export const maxValueDeleteAC=()=>{
    return{
        type:"DELETE-NUMBER"
    }as const
}