import React, { useState, useEffect, useCallback, useReducer } from 'react';
import ClockPanel from './ClockPanel';
import helpers from '../../helpers';
import {
    url,
    initDelay, 
    intervalDelay,
    errMessage,
    initialState
} from './constants';
import './Clock.css';

enum TimeActionKind {
  SET_SECOND = 'SET_SECOND',
  SET_MINUTE = 'SET_MINUTE',
  SET_HOUR = 'SET_HOUR',
  SET_MULTIPLE = 'SET_MULTIPLE'
}

interface TimeAction {
  type: TimeActionKind;
  payload: number | TimeState;
}

interface TimeState {
  secondRatio: any;
  minuteRatio: any;
  hourRatio: any;
}

function reducer(state: TimeState, action: TimeAction) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_SECOND':
      return {secondRatio: payload};
    case 'SET_MINUTE':
      return {minuteRatio: payload};
    case 'SET_HOUR':
      return {hourRatio: payload};
    case 'SET_MULTIPLE':
      return {...state, ...payload as TimeState};
    default:
      throw new Error();
  }
}

function Clock() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  const setClock = useCallback(() => {
      dispatch({type: TimeActionKind.SET_SECOND, payload: helpers.getTime(currentDate, 'GET_SECOND')})
      dispatch({type: TimeActionKind.SET_MINUTE, payload: helpers.getTime(currentDate, 'GET_MINUTE')})
      dispatch({type: TimeActionKind.SET_HOUR, payload: helpers.getTime(currentDate, 'GET_HOUR')})
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentDate],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      new Promise<void>((resolve) => {
        resolve(helpers.loadTime(url, setCurrentDate));
      })
        .then(() => setClock())
        .catch((err) => {
          clearInterval(interval);
          console.error(`${errMessage}: ${err}`) 
        })
    }, intervalDelay);
    return () => {clearInterval(interval)}
  });

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => resolve(helpers.loadTime(url, setCurrentDate)), initDelay);
    })
      .then((data) => { 
        dispatch({type: TimeActionKind.SET_MULTIPLE, payload: 
        {
          secondRatio: helpers.getTime(currentDate, 'GET_SECOND'),
          minuteRatio: helpers.getTime(currentDate, 'GET_MINUTE'),
          hourRatio : helpers.getTime(currentDate, 'GET_HOUR')
        }})
      })
      .finally(() => setLoading(false))
      .catch((err) => console.error(`${errMessage}: ${err}`));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {!loading ? 
      <ClockPanel
        secondRatio={state.secondRatio} 
        minuteRatio={state.minuteRatio} 
        hourRatio={state.hourRatio}
      /> : 'Loading...'}
    </>
  );
}

export default Clock;