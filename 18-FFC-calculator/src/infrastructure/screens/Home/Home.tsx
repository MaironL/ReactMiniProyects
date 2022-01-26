import { useState } from 'react';
const Home = () => {
  const [input, setInput] = useState<string>('0');
  const [answer, setAnswer] = useState<string>('');

  const getValue = (sym: string) => () => {
    let lastEle = input[input.length - 1];
    let beforeEle = input[input.length - 2];

    if (lastEle === '=') {
      if (/[0-9.]/.test(sym)) {
        setInput(sym);
      } else {
        setInput(answer + sym);
      }
    } else if (input[0] === '0') {
      setInput((prev) => sym);
    } else if (sym === '.') {
      if (/[0-9]/.test(lastEle)) {
        if (
          (input.includes('+') ||
            input.includes('-') ||
            input.includes('*') ||
            input.includes('/')) &&
          input.includes('.')
        ) {
          setInput((prev) => prev + sym);
        } else if (input.includes('.')) {
          setInput((prev) => prev);
        } else {
          setInput((prev) => prev + sym);
        }
      }
    } else if (/[* | / | +]/.test(lastEle)) {
      if (/[*|/|+]/.test(sym)) {
        let newString = input.slice(0, -1);
        setInput(newString + sym);
      } else {
        setInput((prev) => prev + sym);
      }
    } else if (/[-]/.test(lastEle)) {
      if (/[*|/|+]/.test(beforeEle) && /[*|/|+]/.test(sym)) {
        let newString = input.slice(0, -2);
        setInput(newString + sym);
      } else {
        setInput((prev) => prev + sym);
      }
    } else {
      setInput((prev) => prev + sym);
    }
  };

  const calculate = () => {
    // eslint-disable-next-line no-eval
    setAnswer(eval(input));
    setInput((prev) => prev + '=');
  };

  const clear = () => {
    setInput('0');
    setAnswer('');
  };
  return (
    <div className='container max-w-[320px] mx-auto my-auto grid grid-cols-4 grid-rows-6 bg-zinc-900 border-2 border-slate-600 p-[2px] rounded'>
      <div className='col-span-4 text-right px-4 py-2'>
        <div
          //id='display'
          className='flex justify-end text-yellow-500 text-md font-medium h-[24px]'
        >
          {input === '0' ? ' ' : input}
        </div>
        <div id='display' className='text-gray-100 text-2xl font-medium h-[32px]'>
          {answer ? answer : input}
        </div>
      </div>
      <button
        onClick={clear}
        id='clear'
        className='text-md font-medium tracking-wide col-span-2 bg-red-500 m-[1px] hover:bg-red-400 hover:border active:bg-red-600'
      >
        AC
      </button>
      <button
        onClick={getValue('/')}
        id='divide'
        className='text-md text-gray-100 font-medium bg-slate-700 m-[1px] hover:bg-slate-600 hover:border active:bg-slate-800'
      >
        /
      </button>
      <button
        onClick={getValue('*')}
        id='multiply'
        className='text-md text-gray-100 font-medium bg-slate-500 m-[1px] hover:bg-slate-400 hover:border active:bg-slate-600'
      >
        X
      </button>
      <button
        onClick={getValue('7')}
        id='seven'
        className='text-md text-gray-100 font-medium bg-slate-700 m-[1px] hover:bg-slate-600 hover:border active:bg-slate-800'
      >
        7
      </button>
      <button
        onClick={getValue('8')}
        id='eight'
        className='text-md text-gray-100 font-medium bg-slate-700 m-[1px] hover:bg-slate-600 hover:border active:bg-slate-800'
      >
        8
      </button>
      <button
        onClick={getValue('9')}
        id='nine'
        className='text-md text-gray-100 font-medium bg-slate-700 m-[1px] hover:bg-slate-600 hover:border active:bg-slate-800'
      >
        9
      </button>
      <button
        onClick={getValue('-')}
        id='subtract'
        className='text-md text-gray-100 font-medium bg-slate-500 m-[1px] hover:bg-slate-400 hover:border active:bg-slate-600'
      >
        -
      </button>
      <button
        onClick={getValue('4')}
        id='four'
        className='text-md text-gray-100 font-medium bg-slate-700 m-[1px] hover:bg-slate-600 hover:border active:bg-slate-800'
      >
        4
      </button>
      <button
        onClick={getValue('5')}
        id='five'
        className='text-md text-gray-100 font-medium bg-slate-700 m-[1px] hover:bg-slate-600 hover:border active:bg-slate-800'
      >
        5
      </button>
      <button
        onClick={getValue('6')}
        id='six'
        className='text-md text-gray-100 font-medium bg-slate-700 m-[1px] hover:bg-slate-600 hover:border active:bg-slate-800'
      >
        6
      </button>
      <button
        onClick={getValue('+')}
        id='add'
        className='text-md text-gray-100 font-medium bg-slate-500 m-[1px] hover:bg-slate-400 hover:border active:bg-slate-600'
      >
        +
      </button>
      <button
        onClick={getValue('1')}
        id='one'
        className='text-md text-gray-100 font-medium bg-slate-700 m-[1px] hover:bg-slate-600 hover:border active:bg-slate-800'
      >
        1
      </button>
      <button
        onClick={getValue('2')}
        id='two'
        className='text-md text-gray-100 font-medium bg-slate-700 m-[1px] hover:bg-slate-600 hover:border active:bg-slate-800'
      >
        2
      </button>
      <button
        onClick={getValue('3')}
        id='three'
        className='text-md text-gray-100 font-medium bg-slate-700 m-[1px] hover:bg-slate-600 hover:border active:bg-slate-800'
      >
        3
      </button>
      <button
        onClick={calculate}
        id='equals'
        className='text-xl font-extrabold row-span-2 bg-green-500 m-[1px] hover:bg-green-400 hover:border active:bg-green-600'
      >
        =
      </button>
      <button
        onClick={getValue('0')}
        id='zero'
        className='text-md text-gray-100 font-medium col-span-2 bg-slate-700 m-[1px] hover:bg-slate-600 hover:border active:bg-slate-800'
      >
        0
      </button>
      <button
        onClick={getValue('.')}
        id='decimal'
        className='text-md text-gray-100 font-medium h-[70px] text-center bg-slate-700 m-[1px] hover:bg-slate-600 hover:border active:bg-slate-800'
      >
        .
      </button>
    </div>
  );
};

export default Home;
