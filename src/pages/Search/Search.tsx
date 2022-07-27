import React from "react";
import { Spinner } from "@chakra-ui/react";
import { useGameContext } from "./hooks";
import { getAllGames } from "../../api/games";
import { GameItem } from "../../components/GameItem";
import { getGamesByGenre } from "./utils";
import { HorizontalSlider } from "../../components/HorizontalSlider";

export const Search: React.FC<{ search: string }> = ({ search }) => {
  const [games, setGames] = useGameContext()!;
  const [isLoading, setIsLoading] = React.useState(false);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const response = await getAllGames();
      setGames(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    loadData();
  }, []);

  const renderGrid = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-screen w-screen">
          <Spinner size="xl" color="white" />
        </div>
      );
    }

    return (
      <>
        {getGamesByGenre(games).map(([genre, games]) => {
          const data = games.filter((game) => {
            if (search.length) {
              const predicate = game.title
                .toLowerCase()
                .includes(search.toLowerCase());
              return predicate;
            }
            return game;
          });
          return (
            <div key={genre}>
              <h1 className="text-xl font-bold text-white">
                {data.length ? `${genre.toUpperCase()}: ` : null}
              </h1>
              <HorizontalSlider data={data} Item={GameItem} />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="w-full h-full z-0 mt-10 pb-10">
        <>{renderGrid()}</>
      </div>
    </>
  );
};
