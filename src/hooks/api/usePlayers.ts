import axios from 'axios';
import { useQuery } from 'react-query';

const fetchPlayers = async () => {
  const { data } = await axios('/api/player');
  return data;
};

const usePlayers = () => {
  return useQuery('playerData', () => fetchPlayers());
};

export default { usePlayers, fetchPlayers };
