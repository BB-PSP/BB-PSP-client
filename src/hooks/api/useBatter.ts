import axios from 'axios';
import { useQuery } from 'react-query';

const fetchBatter = async (year: number, name: string, birth: string) => {
  const { data } = await axios(
    encodeURI(
      `https://bbpsp-backend-api.click/api/batters/stat/${year}?name=${name}&birth=${birth}`,
    ),
  );
  return data;
};

const useBatter = (year: number, name: string, birth: string) => {
  return useQuery(
    ['batter', year, name, birth],
    () => fetchBatter(year, name, birth),
    {
      keepPreviousData: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
};

export { useBatter, fetchBatter };
