import React from 'react'
import moment from 'moment' 

const Break = ({breakLength,
    decrementBreakLengthByOneMinute,
    incrementBreakLengthByOneMinute,
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, 's').asMinutes()
  return (
      <div>
    <p id="break-label">Break</p>
    <p id="break-length">{breakLengthInMinutes}</p>
    <button id="break-decrement" onClick={decrementBreakLengthByOneMinute}>-</button>
    <button id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</button>
    </div>
  )
}

export default Break