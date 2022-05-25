import axios from 'axios';
import { useQuery } from 'react-query';

const fetchTeam = async (year: number, team: string) => {
  const { data } = await axios(
    `http://18.223.133.67:8081/api/teams/${year}/${team}`,
  );
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
