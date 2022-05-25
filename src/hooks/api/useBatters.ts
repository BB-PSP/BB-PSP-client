import axios from 'axios';
import { useQuery } from 'react-query';

const fetchBatters = async (year: number, symbol: string) => {
  const { data } = await axios(
    `http://18.223.133.67:8081/api/batters/stat/${year}/${symbol}`,
  );
  return data;
};

const useBatters = (year: number, symbol: string) => {
  return useQuery(
    ['batterData', year, symbol],
    () => fetchBatters(year, symbol),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
};

export { useBatters, fetchBatters };
