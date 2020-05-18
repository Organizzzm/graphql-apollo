import React, { FC } from "react";
import { useCustomer } from "./hooks/useCustomer";

export const Customer: FC = () => {
  const { handleChange, save, createdAccount } = useCustomer();

  return (
    <>
      <h1>Customer - {createdAccount?.name}</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit" onClick={save}>
          Save
        </button>
      </form>
    </>
  );
};
