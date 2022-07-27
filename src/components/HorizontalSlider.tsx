import React from "react";
import { IGameListItem } from "../interfaces";

export const HorizontalSlider = ({
  data,
  Item,
}: {
  data: IGameListItem[];
  Item: React.FC<{ game: IGameListItem }>;
}) => {
  return (
    <div className="relative flex items-center">
      <div
        id="slider"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth overflow-y-hidden"
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[360px] inline-block p-2 cursor-pointer hover:scale-123 ease-in-out duration-300"
          >
            <Item game={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
