import { BsTwitter } from 'react-icons/bs';
import useFetch from './homeHook/useFetch';

const Home = (): JSX.Element => {
  const { data, fetchData } = useFetch('https://api.quotable.io/random');

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500  grid place-items-center'>
      <div
        id='quote-box'
        className='container max-w-md bg-slate-100 rounded-md p-8 shadow-lg'
      >
        <h1 className='text-center text-slate-800 pb-3 mb-5 font-bold text-4xl border-b-2 border-cyan-200'>
          Inspire Yourself
        </h1>
        <p id='text' className='text-justify text-slate-800 text-md'>
          {data?.content}
        </p>
        <p id='author' className='text-right mt-4 text-md font-semibold font-mono'>
          {data?.author}
        </p>
        <div className='flex items-center justify-between mt-4'>
          <a
            id='tweet-quote'
            href='https://twitter.com/intent/tweet?'
            target='_blank'
            rel='noreferrer'
          >
            <BsTwitter className='text-3xl text-blue-400' />
          </a>
          <button
            id='new-quote'
            className='bg-blue-400 hover:bg-blue-300 p-2 rounded-md shadow-sm shadow-slate-400'
            onClick={fetchData}
          >
            New Quotes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
