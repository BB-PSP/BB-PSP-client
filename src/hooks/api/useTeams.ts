import axios from 'axios';
import { useQuery } from 'react-query';

const fetchTeams = async (year: number) => {
  // const { data } = await axios('http://3.138.85.147:8081/api/teams/2021');
  const { data } = await axios(`/api/team/${year}`);
  return data;
};

const useTeams = (year: number) => {
  return useQuery('teamData', () => fetchTeams(year));
};

export { useTeams, fetchTeams };
