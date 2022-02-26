import axios from 'axios';
import { useQuery } from 'react-query';

const fetchPositions = async () => {
  const { data } = await axios('/api/position');
  return data;
};

const usePositions = () => {
  return useQuery('positionData', () => fetchPositions());
};

export { usePositions, fetchPositions };
