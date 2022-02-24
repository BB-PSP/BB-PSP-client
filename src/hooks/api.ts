import { useQuery } from 'react-query';

const fetchTeams = async () => {
  const { data } = useQuery('teamData', () =>
    fetch('/api/team').then((res) => res.json()),
  );
  const teams = data.teamDTOList;
  return teams;
};

const useTeams = () => {
  return useQuery('teamData', () => fetchTeams());
};

export { useTeams, fetchTeams };
