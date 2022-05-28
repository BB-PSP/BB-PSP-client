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

export const ageRangeState = atom<number[]>({
  key: 'ageRangeState',
  default: [20, 21],
});

export const salaryRangeState = atom<number[]>({
  key: 'salaryRangeState',
  default: [0, 1],
});
