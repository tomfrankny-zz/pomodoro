import React from 'react'
import moment from 'moment' 
import { BreakSessionContainer } from '../ui/BreakSessionUi'
import { PlusMinusButtonContainer } from '../ui/BreakSessionUi'
import { PlusMinusButton } from '../ui/BreakSessionUi'
import { BreakSessionTime } from '../ui/BreakSessionUi'

const Break = ({breakLength,
    decrementBreakLengthByOneMinute,
    incrementBreakLengthByOneMinute,
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, 's').asMinutes()
  return (
      <BreakSessionContainer>
    <p id="break-label" className='text-lg text-orange-500'>Break</p>
    <BreakSessionTime id="break-length">{breakLengthInMinutes}</BreakSessionTime>
    <PlusMinusButtonContainer>
    <PlusMinusButton id="break-decrement" onClick={decrementBreakLengthByOneMinute}>-</PlusMinusButton>
    <PlusMinusButton id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</PlusMinusButton>
    </PlusMinusButtonContainer>
    </BreakSessionContainer>
  )
}

export default Break