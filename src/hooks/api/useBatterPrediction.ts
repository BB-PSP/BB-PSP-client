import axios from '@hooks/api/axios';
import { useQuery } from 'react-query';

const fetchBatterPrediction = async (
  year: number,
  name: string,
  birth: string,
) => {
  const { data } = await axios(
    encodeURI(
      `/api/predictions/batters/one/${year}?name=${name}&birth=${birth}`,
    ),
  );
  return data;
};

const useBatterPrediction = (year: number, name: string, birth: string) => {
  return useQuery(
    ['batterPrediction', year, name, birth],
    () => fetchBatterPrediction(year, name, birth),
    {
      keepPreviousData: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
};

export { useBatterPrediction, fetchBatterPrediction };
