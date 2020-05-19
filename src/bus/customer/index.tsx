import React, { FC } from "react";
import { useCustomer } from "./hooks/useCustomer";
import { useForm, ICustomerState } from "./hooks/useForm";

export const Customer: FC = () => {
  const { handleChange, values } = useForm<ICustomerState>({
    account: {
      name: "",
      username: "",
      password: "",
    },
  });
  const { save, createdAccount } = useCustomer(values);

  return (
    <>
      <h1>Customer - {createdAccount?.name}</h1>
      <form onSubmit={save}>
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
        <button type="submit">Save</button>
      </form>
    </>
  );
};
