import React from "react";
import { IMinimumSystemRequirements } from "../interfaces";

export const MinimumSystemRequirements: React.FC<{
  systemRequirements: IMinimumSystemRequirements | undefined;
}> = ({ systemRequirements }) => {
  if (!systemRequirements) {
    return null;
  }
  return (
    <div>
      {Object.keys(systemRequirements).map((key) => {
        const value =
          systemRequirements[key as keyof typeof systemRequirements];
        if (!value) {
          return null;
        }
        return (
          <div key={key}>
            <span>
              <span className="text-xl font-bold">
                {`${key.toLocaleUpperCase()}: `}
              </span>
              <span>{value}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
