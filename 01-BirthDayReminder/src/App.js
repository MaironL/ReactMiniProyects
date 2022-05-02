import React, { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [birthdays, setBirtdays] = useState(data.slice(Math.max(data.length - 5, 0)));

  const clickClear = () => {
    setBirtdays([]);
  };

  const clickView = () => {
    birthdays.length > 5
      ? setBirtdays(data.slice(Math.max(data.length - 5, 0)))
      : setBirtdays(data);
  };

  return (
    <main>
      <article className='container'>
        <h3>{birthdays.length === 0 ? 0 : data.length} birthdays today</h3>
        <List birthdays={birthdays} />
        <button onClick={clickView}>
          {birthdays.length > 5 ? 'View Less' : 'View More'}
        </button>
        <button onClick={clickClear}>clear all</button>
      </article>
    </main>
  );
};

export default App;
