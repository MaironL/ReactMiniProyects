import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  interface useFecth {
    author: string;
    content: string;
  }
  const [data, setData] = useState<useFecth | null>();

  interface response {
    data: {
      _id: string;
      tags: [];
      content: string;
      author: string;
      authorSlug: string;
      length: number;
      dateAdded: string;
      dateModified: string;
    };
    status: 200;
  }

  const fetchData = async () => {
    try {
      let response: response = await axios.get(url);
      if (response) {
        let author = response.data.author;
        let content = response.data.content;
        setData({ author, content });
      }
    } catch (error) {
      console.log('Fail: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, fetchData };
};

export default useFetch;
