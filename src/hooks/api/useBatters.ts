import axios from '@hooks/api/axios';
import { useQuery } from 'react-query';

const fetchBatters = async (year: number, symbol: string) => {
  const { data } = await axios(`/api/batters/stat/${year}/${symbol}`);
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
