import httpService from "./httpService";

import { IGame, IGameListItem } from "../interfaces";

export function getAllGames<T extends IGameListItem>() {
  return httpService.get<T[]>("/games");
}

export function getGameById(id: number) {
  return httpService.get<IGame>(`/game`, { params: { id } });
}
