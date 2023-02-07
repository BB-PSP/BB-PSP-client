import axios from '@hooks/api/axios';
import { useQuery } from 'react-query';

const fetchTeam = async (year: number, team: string) => {
  const { data } = await axios(`/api/teams/${year}/${team}`);
  return data;
};

const useTeam = (year: number, team: string) => {
  return useQuery(['team', team], () => fetchTeam(year, team), {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export { useTeam, fetchTeam };
