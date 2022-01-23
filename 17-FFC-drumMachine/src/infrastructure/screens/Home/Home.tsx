import { useRef, useEffect, useState } from 'react';
import { bankOne, bankTwo } from './tracks';

type KeyboirdTypes = {
  hit: {
    keyCode: number;
    keyTrigger: string;
    id: string;
    url: string;
  };
  setDisplay: Function;
};

const KeyBoard = ({ hit, setDisplay }: KeyboirdTypes) => {
  const { keyCode, keyTrigger, id, url } = hit;
  const [bg, setBg] = useState<string>('bg-slate-300');
  const audioRef: any = useRef(null);

  const start = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setDisplay(id);
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === keyCode) {
      start();
      setBg('bg-teal-500');
      setTimeout(() => setBg('bg-slate-300'), 100);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.addEventListener('keydown', handleKeyDown);
    };
  }, [id]);

  return (
    <button
      onClick={start}
      id={id}
      className={`drum-pad h-28 w-28 ${bg} shadow-inner shadow-slate-800 hover:bg-slate-400 active:bg-teal-500 rounded-md mx-1 my-1 transition-all`}
      key={keyTrigger}
    >
      <audio src={url} className='clip' id={keyTrigger} key={keyTrigger} ref={audioRef} />
      {keyTrigger}
    </button>
  );
};

const Home = () => {
  const [display, setDisplay] = useState('');
  const [bank, setBank] = useState<Boolean>(true);

  const switchBank = () => {
    setBank(!bank);
  };

  return (
    <div className='container mx-auto grid justify-items-center items-center'>
      <div
        id='drum-machine'
        className='container max-w-screen-sm flex justify-center sm:justify-around flex-wrap'
      >
        <div className='flex flex-wrap justify-center max-w-[360px]'>
          {(bank ? bankOne : bankTwo).map((hit, i) => {
            return <KeyBoard hit={hit} key={i} setDisplay={setDisplay} />;
          })}
        </div>
        <div
          id='display'
          className='flex flex-col items-center container max-w-[360px] sm:max-w-[220px] bg-slate-300 rounded-md my-1 p-4'
        >
          <span className='min-h-[60px] min-w-[150px] block mt-4 text-center p-4 bg-slate-700 rounded-md text-lg font-semibold text-slate-100 font-sans tracking-wider'>
            {display}
          </span>
          <button onClick={switchBank} className='transition-all'>
            <div
              className={`flex ${
                bank ? 'justify-start' : 'justify-end'
              } items-center px-1 bg-teal-800 w-16 h-6 rounded-2xl mt-4`}
            >
              <div className='bg-slate-100 rounded-full w-5 h-5'></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
