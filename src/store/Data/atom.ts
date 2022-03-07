import { atom } from 'recoil';

export const selectedProTeamState = atom<object>({
  key: 'selectedProTeamState',
  default: {},
});

export const selectedTeamState = atom<string[]>({
  key: 'selectedTeamState',
  default: [],
});

export const selectedPositionState = atom<string[]>({
  key: 'selectedPositionState',
  default: [],
});
