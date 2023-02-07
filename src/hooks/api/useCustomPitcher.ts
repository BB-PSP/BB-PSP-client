import axios from '@hooks/api/axios';
import { useQuery } from 'react-query';

const fetchCustomPitcher = async (
  year: number,
  age_start: number,
  age_end: number,
  team_list: string[],
  salary_start: number,
  salary_end: number,
) => {
  const { data } = await axios(
    encodeURI(
      `/api/pitchers/stat/range/${year}?age_range=${age_start},${age_end}&teams=${team_list}&salary_range=${salary_start},${salary_end}`,
    ),
  );
  return data;
};

const useCustomPitcher = (
  year: number,
  age_start: number,
  age_end: number,
  team_list: string[],
  salary_start: number,
  salary_end: number,
) => {
  return useQuery(
    ['customPitcher', age_start, age_end, team_list, salary_start, salary_end],
    () =>
      fetchCustomPitcher(
        year,
        age_start,
        age_end,
        team_list,
        salary_start,
        salary_end,
      ),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
};

export { useCustomPitcher, fetchCustomPitcher };
