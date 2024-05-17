import React from "react";
import { BarChart, XAxis, Bar, Cell, ResponsiveContainer } from "recharts";

import { getParticipantsPerDay } from "../../helpers";
import { IParticipantsListProps } from "../../types";

interface IPathProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ITriangleBarProps extends IPathProps {
  fill: string;
}

export const Chart: React.FC<IParticipantsListProps> = ({ participants }) => {
  const error = console.error;
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === "string" && /defaultProps/.test(args[0])) return;
    error(...args);
  };

  const getPath = ({ x, y, width, height }: IPathProps) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = ({ fill, x, y, width, height }: ITriangleBarProps) => {
    return (
      <path d={getPath({ x, y, width, height })} stroke="none" fill={fill} />
    );
  };

  const data = getParticipantsPerDay(participants);
  return (
    <div className="relative w-full h-[300px] p-[8px] bg-[#2d2d31] rounded-[18px] mb-[20px]">
      <p className="text-[18px] absolute top-[10px] left-[10px]">
        Amount of registrations per day:
      </p>
      <ResponsiveContainer>
        <BarChart
          width={1158}
          height={300}
          data={data}
          margin={{
            top: 50,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" fill="white" />
          <Bar
            dataKey="count"
            fill="#403c84"
            shape={(props: unknown) => (
              <TriangleBar {...(props as ITriangleBarProps)} fill="#374d67" />
            )}
            label={{ position: "top" }}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={"#edf0f1"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
