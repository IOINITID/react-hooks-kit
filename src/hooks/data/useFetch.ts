import { useEffect, useState } from 'react';

/** Hook that fetch data from url */
export const useFetch = (url: RequestInfo, options?: RequestInit) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async (url: RequestInfo) => {
      try {
        const response = await fetch(url, options);

        if (response.ok) {
          const result = await response.json();

          setLoading(false);
          setError(false);
          setData(result);
        } else {
          setLoading(false);
          setError(true);
          setData(null);

          throw new Error(response.statusText);
        }
      } catch (error) {
        setLoading(false);
        setError(true);
        setData(null);
      }
    };

    setLoading(true);
    setError(false);
    setData(null);

    fetchData(url);
  }, [url, options]);

  return { loading, error, data };
};
