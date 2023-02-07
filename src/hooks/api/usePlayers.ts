import axios from '@hooks/api/axios';
import { useQuery } from 'react-query';

const fetchPlayers = async (position: string, year: number, symbol: string) => {
  const { data } = await axios(`/api/${position}/stat/${year}/${symbol}`);
  return data;
};

const usePlayers = (position: string, year: number, symbol: string) => {
  return useQuery(
    ['playerData', position, year, symbol],
    () => fetchPlayers(position, year, symbol),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
};

export { usePlayers, fetchPlayers };
