import { FC } from "react";
import React from "react";
import { Counter } from "./counter";
import { List } from "./list";
import { SpecialList } from "./specialList";
import { Profile } from "./profile";

export const Pet: FC = () => {
  return (
    <>
      <h1>Pet</h1>
      <Counter />
      <List />
      <SpecialList />
      <Profile />
    </>
  );
};
