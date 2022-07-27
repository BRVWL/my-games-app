import React from "react";
import { IGame } from "../../interfaces";

// hooks
export const useGame = (initial: IGame | null) => React.useState(initial);
export type UseGameType = ReturnType<typeof useGame>;
export type GameType = UseGameType[0];
export type SetGameType = UseGameType[1];
