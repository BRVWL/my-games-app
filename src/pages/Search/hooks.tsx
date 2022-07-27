import React from "react";
import { IGameListItem } from "../../interfaces";

// Game hooks
export const useGames = (initial: IGameListItem[]) => React.useState(initial);
export type UseGamesType = ReturnType<typeof useGames>;
export type GamesType = UseGamesType[0];
export type SetGamesType = UseGamesType[1];

// Game Context
export const GameContext = React.createContext<UseGamesType | null>(null);
export const useGameContext = () => {
  return React.useContext(GameContext);
};
export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GameContext.Provider value={useGames([])}>{children}</GameContext.Provider>
  );
};
