import React, { FC } from "react";
import { useQueryAvailablePets } from "./hooks/useQueryAvailablePets";

export const Counter: FC = () => {
  const { loading, error, data } = useQueryAvailablePets();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return <div>Counter: {data?.availablePets}</div>;
};
