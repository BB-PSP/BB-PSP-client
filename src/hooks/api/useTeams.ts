import axios from 'axios';
import { useQuery } from 'react-query';

const fetchTeams = async (year: number) => {
  const { data } = await axios(`http://18.223.133.67:8081/api/teams/${year}`);
  // const { data } = await axios(`/api/team/${year}`);
  return data;
};

const useTeams = (year: number) => {
  return useQuery('teamData', () => fetchTeams(year));
};

export { useTeams, fetchTeams };
