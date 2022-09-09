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

function reducer(state, action) {
  switch (action.type) {
    case 'SET_SECOND':
      return {secondRatio: action.payload};
    case 'SET_MINUTE':
      return {minuteRatio: action.payload};
    case 'SET_HOUR':
      return {hourRatio: action.payload};
    case 'SET_MULTIPLE':
      return {...state, ...action.payload};
    default:
      throw new Error();
  }
}

function Clock() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState(true);

  const setClock = useCallback(() => {
      dispatch({type: 'SET_SECOND', payload: helpers.getTime(currentDate, 'GET_SECOND')})
      dispatch({type: 'SET_MINUTE', payload: helpers.getTime(currentDate, 'GET_MINUTE')})
      dispatch({type: 'SET_MULTIPLE', payload: helpers.getTime(currentDate, 'GET_HOUR')})
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentDate],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      new Promise((resolve) => {
        resolve(helpers.loadTime(url, setCurrentDate));
      })
        .then(setClock())
        .catch((err) => {
          clearInterval(interval);
          console.err(`${errMessage}: ${err}`) 
        })
    }, intervalDelay);
    return () => {clearInterval(interval)}
  });

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => resolve(helpers.loadTime(url, setCurrentDate)), initDelay);
    })
      .then((data) => { 
        dispatch({type: 'SET_MULTIPLE', payload: 
        {
          secondRatio: helpers.getTime(currentDate, 'GET_SECOND'),
          minuteRatio: helpers.getTime(currentDate, 'GET_MINUTE'),
          hourRatio : helpers.getTime(currentDate, 'GET_HOUR')
        }})
      })
      .finally(() => setLoading(false))
      .catch((err) => console.err(`${errMessage}: ${err}`));
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