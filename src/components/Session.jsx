import React from 'react'
import moment from 'moment' 

const Session = ({sessionLength,
    decrementSessionLengthByOneMinute,
    incrementSessionLengthByOneMinute,
}) => {
    const sessionLengthInMinutes = moment.duration(sessionLength, 's').asMinutes()
  return (
      <div>
    <p id="session-label">Session</p>
    <p id="session-length">{sessionLengthInMinutes}</p>
    <button id="session-decrement" onClick={decrementSessionLengthByOneMinute}>-</button>
    <button id="session-increment" onClick={incrementSessionLengthByOneMinute}>+</button>
    </div>
  )
}
export default Session