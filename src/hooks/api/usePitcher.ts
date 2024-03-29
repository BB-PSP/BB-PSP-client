import axios from '@hooks/api/axios';
import { useQuery } from 'react-query';

const fetchPitcher = async (year: number, name: string, birth: string) => {
  const { data } = await axios(
    encodeURI(`/api/pitchers/stat/${year}?name=${name}&birth=${birth}`),
  );
  return data;
};

const usePitcher = (year: number, name: string, birth: string) => {
  return useQuery(
    ['pitcher', year, name, birth],
    () => fetchPitcher(year, name, birth),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
};

export { usePitcher, fetchPitcher };
