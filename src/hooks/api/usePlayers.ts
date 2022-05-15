import axios from 'axios';
import { useQuery } from 'react-query';

const fetchPlayers = async (position: string, year: number, symbol: string) => {
  const { data } = await axios(
    `http://18.223.133.67:8081/api/${position}/stat/${year}/${symbol}`,
  );
  return data;
};

const usePlayers = (position: string, year: number, symbol: string) => {
  return useQuery('playerData', () => fetchPlayers(position, year, symbol), {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export { usePlayers, fetchPlayers };
