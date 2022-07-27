import { Badge, Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { IGameListItem } from "../interfaces";

export const GameItem: React.FC<{ game: IGameListItem }> = ({ game }) => {
  const { id, title, genre, platform, thumbnail, publisher, release_date } =
    game;
  return (
    <Box>
      <Link to={`/details/${id}`}>
        <div className="bg-slate-700 drop-shadow-lg rounded-lg p-2">
          <h1 className="text-xl font-bold text-white ml-2">{title}</h1>
          <img className="w-full h-full" src={thumbnail} alt={title} />
          <div className="flex h-[60px] flex-wrap pt-1 px-2">
            <Badge
              variant="solid"
              colorScheme={"orange"}
              className="mr-2 h-[18px] mt-2"
            >
              {genre}
            </Badge>
            <Badge colorScheme={"blue"} className="h-[18px] mt-2 mr-2">
              {platform}
            </Badge>
            <Badge
              variant="subtle"
              className="h-[18px] mt-2 mr-2"
              colorScheme="green"
            >
              {publisher}
            </Badge>
            <Badge className="h-[18px] mt-2" variant="solid">
              {release_date}
            </Badge>
          </div>
        </div>
      </Link>
    </Box>
  );
};
