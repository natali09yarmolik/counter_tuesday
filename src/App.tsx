import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Set} from "./components/set/Set";

function App() {
    const getLocalStart = () => {
        let start = localStorage.getItem('startValue')
        if (start) {
            setMessage('')
            setStartValue(JSON.parse(start))
            setDisable(true)
        }
    }
    const getLocalMax = () => {
        let max = localStorage.getItem('maxValue')
        if (max) {
            setMessage('')
            setMaxValue(JSON.parse(max))
            setDisable(true)
        }
    }
    const disableButton = () => {
        if (startValue < 0 || maxValue === startValue || startValue < 0 || maxValue === startValue) {
            setMessage('Incorrect value!!!')
            setDisable(true)
            setDisableInc(true)
            setDisableReset(true)
        }
    }
    const [startValue, setStartValue] = useState(0)
    useEffect(() => {getLocalStart()}, [])
    const [maxValue, setMaxValue] = useState(1)
    useEffect(() => {getLocalMax()}, [])
    const [message, setMessage] = useState<string>('Please, enter values and press set')
    const [disable, setDisable] = useState(false)
    const [disableInc, setDisableInc] = useState<boolean>(false)
    const [disableReset, setDisableReset] = useState(false)

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        disableButton()
    }, [startValue, maxValue])
    const startValueHandler = (status: string) => {
        setDisable(false)
        if (status === 'up') {
            setStartValue(startValue + 1)
            setMessage('Please, enter values and press set')
        } else if (status === 'down') {
            setStartValue(startValue - 1)
            setMessage('Please, enter values and press set')
        }
    }
    const maxValueHandler = (status: string) => {
        setDisable(false)
        if (status === 'up') {
            setMaxValue(maxValue + 1)
            setMessage('Please, enter values and press set')
        } else if (status === 'down') {
            setMaxValue(maxValue - 1)
            setMessage('Please, enter values and press set')
        }
    }
    const changeSetHandler = () => {

            getLocalStart()
            getLocalMax()
            setDisableInc(false)
            setDisableReset(false)

    }

    return (
        <div className="App">
            <Set startValueHandler={startValueHandler}
                 startValue={startValue}
                 maxValueHandler={maxValueHandler}
                 maxValue={maxValue}
                 changeSetHandler={changeSetHandler}
                 disable={disable}/>
            <Counter message={message}
                 startLocal={startValue}
                 maxLocal={maxValue}
                 disableInc={disableInc}
                 disableReset={disableReset}
            />
        </div>
    );
}

export default App;
