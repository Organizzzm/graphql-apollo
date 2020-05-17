import React, { FC } from "react";
import { useQueryAllPets } from "./hooks/useQueryAllPets";

export const List: FC = () => {
  const { loading, error, pets } = useQueryAllPets();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const petsJSX = pets?.map(({ id, name, weight }) => (
    <p key={id}>
      <span>Name: {name}</span>
      <span> </span>
      <span>Weight: {weight}</span>
    </p>
  ));

  return (
    <>
      <h1>Pets</h1>
      {petsJSX}
    </>
  );
};
