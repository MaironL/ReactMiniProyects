import { ChangeEvent, useState } from 'react';
import { marked } from 'marked';
import { initialMarkdown } from './initialMarkdown';

const Home = () => {
  const [content, setContent] = useState<string>(initialMarkdown);

  const handlerChange = () => (e: ChangeEvent<HTMLTextAreaElement>) => {
    let value = e.target.value;
    setContent(value);
  };

  return (
    <div className='container mx-auto pt-8 grid justify-items-center grid-rows-[min-content_auto] bg-orange-100'>
      <section className='container max-w-screen-sm h-fit '>
        <div className='py-2 px-5 border-2 border-orange-500 bg-orange-300 font-extrabold shadow-inner shadow-orange-400'>
          Editor
        </div>
        <textarea
          onChange={handlerChange()}
          id='editor'
          className='w-full h-52 py-2 px-3 shadow-lg shadow-slate-500'
          value={content}
        />
      </section>
      <section className='container max-w-screen-md mt-6 shadow-lg shadow-slate-500'>
        <div className='py-2 px-5 border-2 border-orange-500 bg-orange-300 font-extrabold shadow-inner shadow-orange-400'>
          Previewer
        </div>
        <div
          id='preview'
          className='p-5 bg-slate-50 text-md h-full'
          dangerouslySetInnerHTML={{ __html: marked(content, { breaks: true }) }}
        ></div>
      </section>
    </div>
  );
};

export default Home;
