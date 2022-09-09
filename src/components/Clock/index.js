import React, { useState, useEffect, useCallback, useReducer } from 'react';

import './Clock.css';
import ClockPanel from './ClockPanel';

import {
    url,
    initDelay, 
    intervalDelay,
    errMessage,
    initialState
} from './constants';

async function fetchUrl(url) {
  let response = await fetch(url);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
}

async function loadTime(url, setCurrentDate) {
  const dateTime = await fetchUrl(url);

  setCurrentDate(new Date(dateTime.datetime));

  return dateTime;
}

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
    dispatch({type: 'SET_SECOND', payload: currentDate.getSeconds() / 60})
    dispatch({type: 'SET_MINUTE', payload: currentDate.getMinutes() / 60})
    dispatch({type: 'SET_MULTIPLE', payload: currentDate.getHours() / 12})
    },
    [currentDate],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      new Promise((resolve) => {
        resolve(loadTime(url, setCurrentDate));
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
      setTimeout(() => resolve(loadTime(url, setCurrentDate)), initDelay);
    })
      .then((data) => { 
        dispatch({type: 'SET_MULTIPLE', payload: 
        {
          secondRatio: currentDate.getSeconds() / 60, 
          minuteRatio : currentDate.getMinutes() / 60,
          hourRatio : currentDate.getHours() / 12
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