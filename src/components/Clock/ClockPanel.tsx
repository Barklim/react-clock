import React from 'react'
import helpers from '../../helpers'

type Time = { 
  hourRatio: number; 
  minuteRatio: number;
  secondRatio: number;
  format: string;
}

const listNumerals = (format: string) => {
  const formatDigits = helpers.getFormat(format);

  const items = formatDigits.map((number, index) =>
    <div key={number.toString()} className={`number number${index + 1}`}>
      <div>{number}</div>
    </div>
  );
  return items;
};

function ClockPanel({hourRatio, minuteRatio, secondRatio, format}: Time) {
  return (
      <div className="clock">
        <div className="hand hour" style={{transform: `translate(-50%) rotate(${hourRatio * 360}deg)`}}></div>
        <div className="hand minute"style={{transform: `translate(-50%) rotate(${minuteRatio * 360}deg)`}}  ></div>
        <div className="hand second"style={{transform: `translate(-50%) rotate(${secondRatio * 360}deg)`}}  ></div>
        
        {listNumerals(format)}
      </div>
    )
}


export default ClockPanel
