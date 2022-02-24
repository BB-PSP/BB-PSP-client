import axios from 'axios';
import { useQuery } from 'react-query';

const fetchTeams = async () => {
  const { data } = await axios('/api/team');
  return data;
};

const useTeams = () => {
  return useQuery('teamData', () => fetchTeams());
};

export { useTeams, fetchTeams };
