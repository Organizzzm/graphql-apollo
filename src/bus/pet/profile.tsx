import React, { FC } from "react";
import { useQueryProfile } from "./hooks/useQueryProfile";

export const Profile: FC = () => {
  const { loading, error, data } = useQueryProfile("C-1");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>Profile</h1>
      {data?.petById.id}
      {data?.petById.name}
    </>
  );
};
