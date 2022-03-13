export interface ITeam {
  teamDTOList: {
    name: string;
    colourLogo: string;
    blackLogo: string;
    teamColour: string;
    foundedAt: number;
    champCount: number;
    lastSeason: number;
  };
}

export interface IPosition {
  name: string;
  colourLogo: string;
  blackLogo: string;
}

export interface IPlayer {
  name: string;
  team: string;
}

export interface IButton {
  prev: string;
  next: string;
}
