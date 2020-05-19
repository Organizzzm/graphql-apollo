import React, { FC } from "react";
import { useCustomerAuth } from "./hooks/useCustomerAuth";

export const Login: FC = () => {
  const { login, handleChange, authorizedCustomer, error } = useCustomerAuth();

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>
        Login - {authorizedCustomer ? authorizedCustomer?.customer.name : error}
      </h1>
      <form onSubmit={login}>
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
