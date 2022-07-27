import { IGameListItem } from "../../interfaces";

export const getGamesByGenre: (
  games: IGameListItem[]
) => [string, IGameListItem[]][] = (games) => {
  const unsorted: Record<string, IGameListItem[]> = games.reduce(
    (acc, game) => {
      const genreKey: string = game.genre || "";
      const gamesByGenre = acc[game.genre as keyof typeof acc];
      return {
        ...acc,
        [genreKey]: gamesByGenre ? [...gamesByGenre, game] : [game],
      };
    },
    {}
  );
  return sortByLength(unsorted);
};

export const sortByLength = (unsorted: Record<string, IGameListItem[]>) =>
  Object.entries(unsorted).sort(([, a], [, b]) => b.length - a.length);
