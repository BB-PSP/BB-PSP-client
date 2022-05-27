import axios from 'axios';
import { useQuery } from 'react-query';

const fetchTeams = async (year: number) => {
  const { data } = await axios(
    `https://bbpsp-backend-api.click/api/teams/${year}`,
  );
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
