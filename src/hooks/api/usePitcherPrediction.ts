import axios from '@hooks/api/axios';
import { useQuery } from 'react-query';

const fetchPitcherPrediction = async (
  year: number,
  name: string,
  birth: string,
) => {
  const { data } = await axios(
    encodeURI(
      `/api/predictions/pitchers/one/${year}?name=${name}&birth=${birth}`,
    ),
  );
  return data;
};

const usePitcherPrediction = (year: number, name: string, birth: string) => {
  return useQuery(
    ['pitcherPrediction', year, name, birth],
    () => fetchPitcherPrediction(year, name, birth),
    {
      keepPreviousData: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
};

export { usePitcherPrediction, fetchPitcherPrediction };
