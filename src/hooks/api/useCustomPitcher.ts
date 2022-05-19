import axios from 'axios';
import { useQuery } from 'react-query';

const fetchCustomPitcher = async (
  year: number,
  age_end: number,
  age_start: number,
  position_list: string[],
  team_list: string[],
) => {
  const { data } = await axios.post(
    encodeURI(`http://18.223.133.67:8081/api/pitchers/stat/${year}/range`),
    { age_end, age_start, position_list, team_list },
  );
  return data;
};

const useCustomPitcher = (
  year: number,
  age_end: number,
  age_start: number,
  position_list: string[],
  team_list: string[],
) => {
  return useQuery(
    'customPitcher',
    () =>
      fetchCustomPitcher(year, age_end, age_start, position_list, team_list),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
};

export { useCustomPitcher, fetchCustomPitcher };
