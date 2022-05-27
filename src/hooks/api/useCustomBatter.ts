import axios from 'axios';
import { useQuery } from 'react-query';

const fetchCustomBatter = async (
  year: number,
  age_start: number,
  age_end: number,
  position_list: string[],
  team_list: string[],
  salary_start: number,
  salary_end: number,
) => {
  const { data } = await axios(
    encodeURI(
      `https://bbpsp-backend-api.click/api/batters/stat/range/${year}?age_range=${age_start},${age_end}&positions=${position_list}&teams=${team_list}&salary_range=${salary_start},${salary_end}`,
    ),
  );
  return data;
};

const useCustomBatter = (
  year: number,
  age_start: number,
  age_end: number,
  position_list: string[],
  team_list: string[],
  salary_start: number,
  salary_end: number,
) => {
  return useQuery(
    [
      'customBatter',
      age_start,
      age_end,
      position_list,
      team_list,
      salary_start,
      salary_end,
    ],
    () =>
      fetchCustomBatter(
        year,
        age_start,
        age_end,
        position_list,
        team_list,
        salary_start,
        salary_end,
      ),
  );
};

export { useCustomBatter, fetchCustomBatter };
