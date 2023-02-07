import axios from '@hooks/api/axios';
import { useQuery } from 'react-query';

const fetchBatterRecommend = async (
  year: number,
  name: string,
  birth: string,
) => {
  const { data } = await axios(
    encodeURI(
      `/api/batters/stat/recommend/${year}?name=${name}&birth=${birth}`,
    ),
  );
  return data;
};

const useBatterRecommend = (year: number, name: string, birth: string) => {
  return useQuery(
    ['batterRecommend', year, name, birth],
    () => fetchBatterRecommend(year, name, birth),
    {
      keepPreviousData: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
};

export { useBatterRecommend, fetchBatterRecommend };
