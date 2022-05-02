import { useEffect, useRef, useState } from 'react';
import { FaArrowUp, FaArrowDown, FaPlay, FaStop, FaRedoAlt } from 'react-icons/fa';
const breakSound = require('infrastructure/sounds/breakSound2.wav');

const Home = () => {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [timeLeft, setTimeLeft] = useState<any>(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const audioRef: any = useRef(null);

  const start = (play: boolean) => {
    if (play) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }
  };

  const formatier = (time: any) => {
    let minutesCount = Math.floor(time / 60);
    let secondsCount = time % 60;
    let minutes = minutesCount < 10 ? '0' + minutesCount : minutesCount;
    let seconds = secondsCount < 10 ? '0' + secondsCount : secondsCount;
    return `${minutes}:${seconds}`;
  };

  const timeReset = () => {
    //set initial values
    setBreakTime(5);
    setSessionTime(25);
    setTimeLeft(25 * 60);
    setOnBreak(false);
    start(false);
    //stop the clock
    let item: any = localStorage.getItem('interval-id');
    clearInterval(item);
    setIsRunning(false);
  };

  const changeAmount = (amount: number, type: string) => () => {
    if (type === 'break') {
      if (breakTime <= 1 && amount < 0) {
        return;
      }
      if (breakTime >= 60 && amount > 0) {
        return;
      }
      setBreakTime((prev) => prev + amount);
    } else {
      if (sessionTime <= 1 && amount < 0) {
        return;
      }
      if (sessionTime >= 60 && amount > 0) {
        return;
      }
      setSessionTime((prev) => prev + amount);
      if (!isRunning) {
        setTimeLeft((prev: any) => prev + amount * 60);
      }
    }
  };

  const timeRunner = () => {
    if (!isRunning) {
      let interval: any = setInterval(() => {
        setTimeLeft((prev: any) => prev - 1);
      }, 1000);
      localStorage.clear();
      localStorage.setItem('interval-id', interval);
    }

    if (isRunning) {
      let item: any = localStorage.getItem('interval-id');
      clearInterval(item);
    }
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    if (timeLeft <= 0 && !onBreak) {
      setOnBreak(true);
      setTimeLeft(breakTime * 60);
      start(true);
    }
    if (timeLeft <= 0 && onBreak) {
      setOnBreak(false);
      setTimeLeft(sessionTime * 60);
      start(true);
    }
  }, [timeLeft]);

  return (
    <div className='container max-w-screen-sm text-center text-slate-100 px-4'>
      <h1 className='mb-10 text-4xl font-mono font-semibold'>Pomodoro Clock</h1>
      <article className='flex flex-col items-center'>
        <section className='text-2xl  font-semibold mb-6'>25 + 5 Clock</section>
        <section className='container flex justify-between mb-3 text-xl max-w-[360px]'>
          <div className='flex flex-col'>
            <h2 id='break-label' className=' mb-2 font-semibold'>
              Break Length
            </h2>
            <div className='flex justify-around'>
              <button id='break-increment' onClick={changeAmount(1, 'break')}>
                <FaArrowUp />
              </button>
              <span id='break-length'>{breakTime}</span>
              <button id='break-decrement' onClick={changeAmount(-1, 'break')}>
                <FaArrowDown />
              </button>
            </div>
          </div>
          <div className='flex flex-col'>
            <h2 id='session-label' className=' mb-2 font-semibold'>
              Session Length
            </h2>
            <div className='flex justify-around'>
              <button id='session-increment' onClick={changeAmount(1, 'session')}>
                <FaArrowUp />
              </button>
              <span id='session-length'>{sessionTime}</span>
              <button id='session-decrement' onClick={changeAmount(-1, 'session')}>
                <FaArrowDown />
              </button>
            </div>
          </div>
        </section>
        <section className='flex justify-center items-center rounded-full border-4 border-red-500 h-[280px] w-[280px] mb-4 text-slate-100'>
          <div>
            <audio id='beep' src={breakSound} ref={audioRef}></audio>
            <h2 id='timer-label' className='text-4xl'>
              {onBreak ? 'Break' : 'Session'}
            </h2>
            <span id='time-left' className='text-6xl'>
              {formatier(timeLeft)}
            </span>
          </div>
        </section>
        <section className='container flex justify-between max-w-[160px] text-2xl text-slate-100'>
          <button id='start_stop' className='flex' onClick={timeRunner}>
            <FaPlay />
            <FaStop />
          </button>
          <button id='reset' onClick={timeReset}>
            <FaRedoAlt />
          </button>
        </section>
      </article>
    </div>
  );
};

export default Home;
