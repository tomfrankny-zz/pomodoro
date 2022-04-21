import React from 'react'
import moment from 'moment' 
import { BreakSessionContainer } from '../ui/BreakSessionUi'
import { PlusMinusButton } from '../ui/BreakSessionUi'
import { PlusMinusButtonContainer } from '../ui/BreakSessionUi'
import { BreakSessionLabel } from '../ui/BreakSessionUi'
import { BreakSessionTime } from '../ui/BreakSessionUi'

const Session = ({sessionLength,
    decrementSessionLengthByOneMinute,
    incrementSessionLengthByOneMinute,
}) => {
    const sessionLengthInMinutes = moment.duration(sessionLength, 's').asMinutes()
  return (
      <BreakSessionContainer>
    <BreakSessionLabel >Session</BreakSessionLabel>
    <BreakSessionTime >{sessionLengthInMinutes}</BreakSessionTime>
    <PlusMinusButtonContainer>
    <PlusMinusButton id="session-decrement" onClick={decrementSessionLengthByOneMinute}>-</PlusMinusButton>
    <PlusMinusButton id="session-increment" onClick={incrementSessionLengthByOneMinute}>+</PlusMinusButton>
    </PlusMinusButtonContainer>
    </BreakSessionContainer>
  )
}
export default Session