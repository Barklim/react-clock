import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { State } from './interfaces/interfaces';
import { Action, ActionKind } from './types/types';
import ClockPanel from './ClockPanel';
import helpers from '../../helpers';
import {
    url,
    initDelay, 
    intervalDelay,
    errMessage,
    initialState,
} from './constants';
import './Clock.css';

const reducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_SECOND':
      return {...state, secondRatio: payload};
    case 'SET_MINUTE':
      return {...state, minuteRatio: payload};
    case 'SET_HOUR':
      return {...state, hourRatio: payload};
    default:
      throw helpers.getErrorMessage(errMessage);
  }
}

function Clock() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  const dispatchTime = () => {
    dispatch({type: ActionKind.SET_SECOND, payload: helpers.getTime(currentDate, 'GET_SECOND')})
    dispatch({type: ActionKind.SET_MINUTE, payload: helpers.getTime(currentDate, 'GET_MINUTE')})
    dispatch({type: ActionKind.SET_HOUR, payload: helpers.getTime(currentDate, 'GET_HOUR')})
  }

  const setClock = useCallback(() => {
      dispatchTime()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentDate],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      new Promise((resolve) => {
        resolve(helpers.loadTime(url, setCurrentDate));
      })
        .then(() => setClock())
        .catch((err) => {
          clearInterval(interval);
          helpers.getErrorMessage(`${errMessage}: ${err}`);
        })
    }, intervalDelay);
    return () => {clearInterval(interval)}
  });

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => resolve(helpers.loadTime(url, setCurrentDate)), initDelay);
    })
      .then(() => dispatchTime())
      .finally(() => setLoading(false))
      .catch((err) => helpers.getErrorMessage(`${errMessage}: ${err}`));
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