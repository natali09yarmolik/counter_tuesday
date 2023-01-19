import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Set} from "./components/set/Set";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {startValueAddAC, startValueDeleteAC} from "./components/reducer/startReducer";
import {maxValueAddAC, maxValueDeleteAC} from "./components/reducer/maxReducer";
import {setErrorMessageAC} from "./components/reducer/MessageReducer";


function AppRedux() {

    let start=useSelector<AppRootStateType, number>(state=>state.start)
    let max=useSelector<AppRootStateType, number>(state=>state.max)
    let message=useSelector<AppRootStateType, string>(state => state.message.errorMessage)

    const dispatch=useDispatch()

    const [disable, setDisable] = useState(false)
    const [disableInc, setDisableInc] = useState<boolean>(false)
    const [disableReset, setDisableReset] = useState(false)

    const disableButton = () => {
        if (start < 0 || max === start || max < 0 || start > max ) {
            dispatch(setErrorMessageAC('Incorrect value'))
            setDisable(true)
            setDisableInc(true)
            setDisableReset(true)
        }
    }
    useEffect(() => {
        disableButton()
    }, [start, max])

    const startValueHandler = (status: string) => {
        setDisable(false)
        if (status === 'up') {
            dispatch(startValueAddAC())
            dispatch(setErrorMessageAC('Enter value and press set'))
        }
        else if (status === 'down') {
            dispatch(startValueDeleteAC())
            dispatch(setErrorMessageAC('Enter value and press set'))
        }
    }
    const maxValueHandler = (status: string) => {
        setDisable(false)
        if (status === 'up') {
            dispatch(maxValueAddAC())
            dispatch(setErrorMessageAC('Enter value and press set'))
        }
        else if (status === 'down') {
            dispatch(maxValueDeleteAC())
            dispatch(setErrorMessageAC('Enter value and press set'))
        }
    }
    const changeSetHandler = () => {
        dispatch(setErrorMessageAC(''))
        setDisable(true)
            setDisableInc(false)
            setDisableReset(false)
    }

    return (
        <div className="App">
            <Set startValueHandler={startValueHandler}
                 startValue={start}
                 maxValueHandler={maxValueHandler}
                 maxValue={max}
                 changeSetHandler={changeSetHandler}
                 disable={disable}/>
            <Counter message={message}
                     startLocal={start}
                     maxLocal={max}
                     disableInc={disableInc}
                     disableReset={disableReset}
            />
        </div>
    );
}

export default AppRedux;
