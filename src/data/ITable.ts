import type { ITeam } from "./ITeam";

export interface ITable {
  lastUpdated: Date;
  teams: ITeam[];
}
