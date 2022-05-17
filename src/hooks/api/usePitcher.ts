import axios from 'axios';
import { useQuery } from 'react-query';

const fetchPitcher = async (year: number, name: string, birth: string) => {
  const { data } = await axios(
    `http://18.223.133.67:8081/api/pitchers/stat/${year}?name=${name}&birth=${birth}`,
  );
  return data;
};

const usePitcher = (year: number, name: string, birth: string) => {
  return useQuery('pitcher', () => fetchPitcher(year, name, birth), {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export { usePitcher, fetchPitcher };
