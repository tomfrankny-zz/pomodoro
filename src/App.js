import React, { useState, useEffect, useRef } from 'react'
import './assets/main.css';
import Break from './components/Break.jsx'
import TimeLeft from './components/TimeLeft.jsx'
import Session from './components/Session.jsx'

function App() {
  const audioElement = useRef(null)
  const [currentSessionType, setCurrentSessionType] = useState('Session')
  const [intervalId, setIntervalId ] = useState(null)
  const[sessionLength, setSessionLength] = useState(60 * 25);
  const[breakLength, setBreakLength] = useState(300);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  useEffect(() => {
      setTimeLeft(sessionLength); 
      }, [sessionLength]);

      useEffect(() => {
        if (timeLeft === 0) {
        audioElement.current.play();
        if(currentSessionType === 'Session'){
        setCurrentSessionType('Break');
        setTimeLeft(breakLength);
        } else if (currentSessionType === 'Break') {
        setCurrentSessionType('Session');
        setTimeLeft(sessionLength);
      }
    }
    }, [breakLength, currentSessionType, sessionLength, timeLeft])

  const decrementBreakLengthByOneMinute = () => {
      const newBreakLength = breakLength - 60;
if (newBreakLength > 0) {
  setBreakLength(newBreakLength)
  }};

  const incrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength + 60
    if (newBreakLength <= 60 * 60) {
      setBreakLength(newBreakLength);
  };  
  }
    const decrementSessionLengthByOneMinute = () => {
        const newSessionLength = sessionLength - 60;
if (newSessionLength > 0){
  setSessionLength(newSessionLength);
}
    };

    const incrementSessionLengthByOneMinute = () => {
      const newSessionLength = sessionLength + 60;
if (newSessionLength <= 60 * 60) {
        setSessionLength(sessionLength + 60);
        }
      };
    const isStarted = intervalId != null;
const handleStartStopClick = () => {
    if (isStarted) {
        clearInterval(intervalId);
        setIntervalId(null);
    } else {
        const newIntervalId = setInterval(() => {
            setTimeLeft(prevTimeLeft => {
                const newTimeLeft = prevTimeLeft - 1;
            if (newTimeLeft >= 0){
           return newTimeLeft
        }
        // time left is less than zero
        audioElement.current.play()
        // if session:
        if (currentSessionType === 'Session'){
        // switch to break
        setCurrentSessionType('Break')
        // set timeleft to breakSessionLength
        return breakLength;
        }
        // if break;
        else if (currentSessionType ==='Break') {
            setCurrentSessionType('Session');
            return sessionLength ;
        }
            });
        }, 1000);
        setIntervalId(newIntervalId);
    }
};
    const handleResetButtonClick = () => {
      //reset the audio
      audioElement.current.load()
      //clear the timeout
clearInterval(intervalId)
      //set the intervvalId null
setIntervalId(null)
      //set sessiontype to 'session''
setCurrentSessionType('Session')
      //reset session length to 25 min
setSessionLength(60 * 25)
      // reset break length to 5 min
setBreakLength(60 * 5)
      //reset the time to 25 min (initial)
    setTimeLeft(60*25)
    }
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-green-400">
      <Break
      breakLength={breakLength}
      decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
      incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
       />
       <TimeLeft
       breakLength={breakLength}
       handleStartStopClick={handleStartStopClick}
       sessionLength={sessionLength}
       timerLabel={currentSessionType}
       startStopButtonLabel={isStarted ? 'Stop': 'Start'}
       timeLeft= {timeLeft} 
        />

      <Session 
    sessionLength={sessionLength}
    decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
    incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
      />
      <button id="reset"onClick={handleResetButtonClick}> 
      Reset </button>
      <audio id="beep" ref={audioElement}>
        <source src="https://onlineclock.net/audio/options/default.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
  }
export default App;
