import axios from 'axios';
import { useQuery } from 'react-query';

const fetchTeams = async (year: number) => {
  const { data } = await axios(`http://18.223.133.67:8081/api/teams/${year}`);
  return data;
};

const useTeams = (year: number) => {
  return useQuery('teamData', () => fetchTeams(year), {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export { useTeams, fetchTeams };
