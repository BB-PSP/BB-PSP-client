import axios from 'axios';
import { useQuery } from 'react-query';

const fetchBatters = async (year: number, symbol: string) => {
  const { data } = await axios(
    `https://bbpsp-backend-api.click/api/batters/stat/${year}/${symbol}`,
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
