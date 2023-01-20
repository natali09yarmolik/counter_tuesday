type stateType={
    num:number
}
const initState={
    num: 0
}


export const MaxReducer=(state:stateType=initState, action:actionType)=>{
    switch(action.type){
        case "ADD-NUMBER":
        {
            const maxValue=state.num+1
            return maxValue
        }
        case "DELETE-NUMBER":{
            const maxValue=state.num-1
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