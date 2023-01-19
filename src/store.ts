import {combineReducers, legacy_createStore} from 'redux'
import {StartReducer} from "./components/reducer/startReducer";
import {MaxReducer} from "./components/reducer/maxReducer";
import {MessageReducer} from "./components/reducer/MessageReducer";
import {CounterReducer} from "./components/reducer/counterReducer";

const rootReducer = combineReducers({
    start: StartReducer,
    max: MaxReducer,
    message:MessageReducer,
    number: CounterReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store