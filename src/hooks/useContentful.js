import { useState, useEffect, useCallback } from 'react';

export const useContentful = fetchFunction => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const memoizedFetchFunction = useCallback(fetchFunction, [fetchFunction]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await memoizedFetchFunction();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [memoizedFetchFunction]);

  return { data, loading, error };
};
