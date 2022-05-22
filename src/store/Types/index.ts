export interface IPosition {
  data: string;
  name: string;
  colourLogo: string;
  blackLogo: string;
}

export interface IPitcherProps {
  pitcher_stat: {
    _BABIP: number;
    _BB: number;
    _BB_9: number;
    _BK: number;
    _CG: number;
    _ER: number;
    _ERA: number;
    _FIP: number;
    _G: number;
    _GS: number;
    _H: number;
    _HBP: number;
    _HLD: number;
    _HR: number;
    _HR_9: number;
    _H_9: number;
    _IBB: number;
    _IP: number;
    _K_9: number;
    _K_BB: number;
    _L: number;
    _LOB: number;
    _R: number;
    _SHO: number;
    _SO: number;
    _SV: number;
    _TBF: number;
    _W: number;
    _WHIP: number;
    _WP: number;
    _WPCT: number;
  };
  player_info: {
    backNumber: string;
    birth: string;
    height: number;
    weight: number;
    name: string;
    position: string;
    team: string;
  };
}

export interface IBatterProps {
  batter_stat: {
    _1B: number;
    _2B: number;
    _3B: number;
    _AB: number;
    _AVG: number;
    _BB: number;
    _CS: number;
    _E: number;
    _G: number;
    _GDP: number;
    _H: number;
    _HBP: number;
    _HR: number;
    _IBB: number;
    _OBP: number;
    _PA: number;
    _R: number;
    _RBI: number;
    _SB: number;
    _SF: number;
    _SH: number;
    _SLG: number;
    _SO: number;
    _TB: number;
  };
  player_info: {
    backNumber: string;
    batInfo: string;
    birth: string;
    height: number;
    weight: number;
    name: string;
    position: string;
    team: string;
  };
}

export interface IBatterStatProps {
  _AVG: number;
  _BB: number;
  _G: number;
  _H: number;
  _HR: number;
  _AB: number;
  _OBP: number;
  _PA: number;
  _R: number;
  _RBI: number;
  _SLG: number;
}

export interface IPitcherStatProps {
  _G: number;
  _IP: number;
  _W: number;
  _L: number;
  _ERA: number;
  _SO: number;
  _HLD: number;
  _SV: number;
  _WHIP: number;
}

export interface IPlayer {
  age: number;
  backNumber: number;
  batInfo: string;
  pitchInfo: string;
  birth: string;
  height: string;
  weight: string;
  highSchool: string;
  position: string;
  salary: string;
  name: string;
  team: string;
}

export interface IButton {
  prev: string;
  next: string;
}

export interface ITeam {
  company: string;
  name: string;
  colourLogo: string;
  blackLogo: string;
  teamColour: string;
  foundedAt: number;
  champCount: number;
  lastSeason: number;
}

export interface TeamResponse {
  teamDTOList: Array<ITeam>;
}
