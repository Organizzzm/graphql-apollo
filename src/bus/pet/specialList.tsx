import React, { FC } from "react";
import { useQueryAllAvailablePets } from "./hooks/useQueryAllAvailablePets";

export const SpecialList: FC = () => {
  const {
    getAllAvailablePets,
    loading,
    error,
    pets,
  } = useQueryAllAvailablePets();

  const loadingJSX = loading && <div>Loading...</div>;
  const errorJSX = error && <div>Error: {error.message}</div>;

  const petsJSX = pets?.map(({ id, name, weight }) => (
    <p key={id}>
      <span>Name: {name}</span>
      <span> </span>
      <span>Weight: {weight}</span>
    </p>
  ));

  return (
    <>
      <h1>SpecialList</h1>
      <button type="button" onClick={() => getAllAvailablePets()}>
        Load data
      </button>
      {loadingJSX}
      {errorJSX}
      {petsJSX}
    </>
  );
};
