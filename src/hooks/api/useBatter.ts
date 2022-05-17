import axios from 'axios';
import { useQuery } from 'react-query';

const fetchBatter = async (year: number, name: string, birth: string) => {
  const { data } = await axios(
    `http://18.223.133.67:8081/api/pitchers/stat/${year}?name=${name}&birth=${birth}`,
  );
  return data;
};

const useBatter = (year: number, name: string, birth: string) => {
  return useQuery('batter', () => fetchBatter(year, name, birth), {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export { useBatter, fetchBatter };