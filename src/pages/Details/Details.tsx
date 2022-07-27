import { Badge, Box, Button, Spinner } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../api/games";
import { MinimumSystemRequirements } from "../../components/MinimumSystemRequirements";
import { useGame } from "./hooks";

export const Details: React.FC<{}> = () => {
  const { id } = useParams();
  const [game, setGame] = useGame(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const response = await getGameById(Number(id));
      setGame(response.data);
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
  }, [id]);

  if (isLoading) {
    return (
      <div className="w-full h-full">
        <div className="flex justify-center items-center h-screen w-screen">
          <Spinner size="xl" color="white" />
        </div>
      </div>
    );
  }

  if (!game) {
    return null;
  }

  return (
    <div className="w-full h-full z-0  mt-16 text-white">
      <Box>
        <div className="flex">
          <div>
            <div className="w-[620px]">
              <img className="w-full" src={game.thumbnail} alt={game.title} />
            </div>
          </div>
          <div className="px-10">
            <h1 className="text-xl font-bold">{game.title}</h1>
            <div className="pt-2">
              <Badge variant="solid" colorScheme={"orange"} className="mr-2">
                {game.genre}
              </Badge>
              <Badge colorScheme={"blue"} className="mr-2">
                {game.platform}
              </Badge>
              <Badge variant="subtle" className="mr-2" colorScheme="green">
                {game.publisher}
              </Badge>
              <Badge variant="outline" className="mr-2">
                {game.release_date}
              </Badge>
            </div>
            <p className="font-normal text-m">{game.description}</p>
            <div className="py-4">
              <MinimumSystemRequirements
                systemRequirements={game.minimum_system_requirements}
              />
            </div>
            <div>
              <a
                target="_blank"
                href={game.freetogame_profile_url}
                rel="noreferrer"
              >
                <Button colorScheme="blue">Go to game website</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="py-10">
          {game.screenshots.map((screenshot, index) => (
            <div className="w-full mb-4" key={screenshot.id + index}>
              <img className="w-full" src={screenshot.image} />
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
};
