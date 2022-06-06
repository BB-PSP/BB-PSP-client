import axios from 'axios';
import { useQuery } from 'react-query';

const fetchPitcherRecommend = async (
  year: number,
  name: string,
  birth: string,
) => {
  const { data } = await axios(
    encodeURI(
      `https://bbpsp-backend-api.click/api/pitchers/stat/recommend/${year}?name=${name}&birth=${birth}`,
    ),
  );
  return data;
};

const usePitcherRecommend = (year: number, name: string, birth: string) => {
  return useQuery(
    ['pitcherRecommend', year, name, birth],
    () => fetchPitcherRecommend(year, name, birth),
    {
      keepPreviousData: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
};

export { usePitcherRecommend, fetchPitcherRecommend };
