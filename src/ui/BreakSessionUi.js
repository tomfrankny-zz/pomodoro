import React from 'react'

export const BreakSessionContainer = ({children, ...props}) => {
    return (
        <div className= "flex flex-col items-center" {...props}>
            {children}
        </div>
    )
};

export const BreakSessionLabel = ({children, ...props}) => {
    return (
        <p id="session-label" className='text-lg text-orange-500'>{children}</p>
    )
}

export const BreakSessionTime = ({children, ...props}) => {
    return (
        <p id="session-length" className= "text-3xl font-bold text-white" {...props}>
            {children}
        </p>
    )
};

export const PlusMinusButton = ({children, ...props}) => {
    return (<button {...props} className='mt-2 text-lg text-gray-800 px-4 py-2 bg-orange-200 rounded'>{children} 
    </button>)
}

export const PlusMinusButtonContainer = ({ children, ...props}) => {
    return <div {...props} className='grid grid-flow-col gap-2 rounded'>{children}</div>
};
