import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(API_URL) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data.results); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [API_URL]);

  return { data, loading, error };
}

export default useFetch;
