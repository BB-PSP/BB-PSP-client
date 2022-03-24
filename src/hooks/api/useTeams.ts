import axios from 'axios';
import { useQuery } from 'react-query';

const fetchTeams = async () => {
  const { data } = await axios('http://3.138.85.147:8081/api/teams/2021');
  // const { data } = await axios('/api/team');
  return data;
};

const useTeams = () => {
  return useQuery('teamData', () => fetchTeams());
};

export { useTeams, fetchTeams };
