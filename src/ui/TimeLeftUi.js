import React from 'react'

export const TimerLabel = ({children, ...props}) => {
    return (
        <div  id="timer-label" className="flex flex-col justify-evenly items-center w-64 h-64 bg-red-600 rounded-full" {...props}>
        <p className="text-red-900 text-2xl">
          {children}
        </p>
        </div>
    )
};