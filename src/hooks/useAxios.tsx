import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (param: string) => {
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

  const fetchData = async (param: string) => {
    try {
      setLoading(true);
      const result = await axios.get(param);
      setResponse(result.data);
    } catch (err:any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return [loading,response,error];
};

export default useAxios;
