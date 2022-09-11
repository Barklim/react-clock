import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { useClockContext } from '../../hooks/useClockContext';
import { ClockerCtx } from '../../contexts/clocker';
import { State } from './interfaces/interfaces';
import { Action, ActionKind, ContentProps } from './types/types';
import ClockPanel from './ClockPanel';
import { usePageVisibility } from 'react-page-visibility';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import helpers from '../../helpers';
import {
    url,
    initDelay, 
    intervalDelay,
    errMessage,
    initialState,
    arabic
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

function Clock({ format } : ContentProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentDate, setCurrentDate] = useState(new Date());
  const { loading, setLoading } = useClockContext() as ClockerCtx;
  const isVisible = usePageVisibility()

  const dispatchTime = () => {
    dispatch({type: ActionKind.SET_SECOND, payload: helpers.getTime(currentDate, 'GET_SECOND') as number})
    dispatch({type: ActionKind.SET_MINUTE, payload: helpers.getTime(currentDate, 'GET_MINUTE') as number})
    dispatch({type: ActionKind.SET_HOUR, payload: helpers.getTime(currentDate, 'GET_HOUR') as number})
  }

  const setClock = useCallback(() => {
      dispatchTime()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentDate],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisible) {
        new Promise((resolve) => {
          resolve(helpers.loadTime(url, setCurrentDate));
        })
          .then(() => setClock())
          .catch((err) => {
            clearInterval(interval);
            helpers.getErrorMessage(`${errMessage}: ${err}`);
          })
      }
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
        format={format}
      /> : 
      <SkeletonTheme baseColor="#dddbdb" >
        <Skeleton height={300} width={300} borderRadius={150}></Skeleton>
      </SkeletonTheme>
      }
    </>
  );
}

Clock.defaultProps = {
  format: arabic,
};

export { Clock };