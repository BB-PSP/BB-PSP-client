import axios from '@hooks/api/axios';
import { useQuery } from 'react-query';

const fetchBatter = async (year: number, name: string, birth: string) => {
  const { data } = await axios(
    encodeURI(`/api/batters/stat/${year}?name=${name}&birth=${birth}`),
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
