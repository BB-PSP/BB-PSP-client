import { atom } from 'recoil';

export const selectedTeamState = atom<string[]>({
  key: 'selectedTeamState',
  default: [],
});

export const selectedPositionState = atom<string[]>({
  key: 'selectedPositionState',
  default: [],
});
