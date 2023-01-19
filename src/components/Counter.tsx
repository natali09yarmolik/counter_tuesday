import React, {useEffect} from 'react';
import {Display} from "./Display";
import {Buttons} from "./Buttons";
import s from './counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {addNumberAC, resetNumberAC} from "./reducer/counterReducer";

type CounterType = {
    message: string
    startLocal: number
    maxLocal: number
    disableReset: boolean
    disableInc: boolean
}

export const Counter = (props: CounterType) => {
    let count = useSelector<AppRootStateType, number>(state => state.number)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(addNumberAC(props.startLocal-1))}, [props.startLocal])

    const lastStep = props.maxLocal
    const changeCount = () => {
        if (count >= lastStep) {
            return;
        } else {
            dispatch(addNumberAC(count))
        }
    }
    const cleanDisplay = () => {
        dispatch(resetNumberAC(props.startLocal))
    }

    return (
        <div className={s.counterBlock}>
            <div className={s.valueBlock}>
                <Display
                    count={props.message !== '' ? props.message : count}
                    maxValue={props.maxLocal}/>
            </div>
            <div className={s.btnBlock}>
                <Buttons title={'inc'}
                         changeValue={changeCount}
                         disable={props.disableInc}/>
                <Buttons title={'reset'}
                         changeValue={cleanDisplay}
                         disable={props.disableReset}/>
            </div>
        </div>
    )
}