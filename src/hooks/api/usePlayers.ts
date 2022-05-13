import axios from 'axios';
import { useQuery } from 'react-query';

const fetchPlayers = async (year: number, symbol: string) => {
  const { data } = await axios(
    `http://18.223.133.67:8081/api/players/${year}/${symbol}`,
  );
  return data;
};

const usePlayers = (year: number, symbol: string) => {
  return useQuery('playerData', () => fetchPlayers(year, symbol), {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export { usePlayers, fetchPlayers };
