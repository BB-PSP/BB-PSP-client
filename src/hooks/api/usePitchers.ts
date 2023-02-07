import axios from '@hooks/api/axios';
import { useQuery } from 'react-query';

const fetchPitchers = async (year: number, symbol: string) => {
  const { data } = await axios(`/api/pitchers/stat/${year}/${symbol}`);
  return data;
};

const usePitchers = (year: number, symbol: string) => {
  return useQuery(
    ['pitcherData', year, symbol],
    () => fetchPitchers(year, symbol),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
};

export { usePitchers, fetchPitchers };
