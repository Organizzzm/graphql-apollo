import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { ChangeEvent } from "react";
import { ICustomerState } from "../useForm";

const mutationCreateAccount = loader("./gql/mutationCreateAccount.gql");

export interface IAccount {
  name: string;
  username: string;
  password: string;
}

interface ICustomerResponseData {
  createAccount: {
    name: string;
  };
}

interface IHandlersAndResponseData {
  save: (e: ChangeEvent<HTMLFormElement>) => void;
  createdAccount:
    | {
        name: string;
      }
    | undefined;
}

export const useCustomer = (
  values: ICustomerState
): IHandlersAndResponseData => {
  const [addUser, { data }] = useMutation<ICustomerResponseData>(
    mutationCreateAccount
  );

  const save = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { account } = values;

    addUser({
      variables: {
        account,
      },
    });

    e.target.reset();
  };

  return { save, createdAccount: data?.createAccount };
};
