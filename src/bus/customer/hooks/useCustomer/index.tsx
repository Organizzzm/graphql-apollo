import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { useState, ChangeEvent, SyntheticEvent } from "react";

const mutationCreateAccount = loader("./gql/mutationCreateAccount.gql");

interface IAccount {
  name: string;
  username: string;
  password: string;
}

interface ICustomerState {
  account: IAccount;
}

interface ICustomerResponseData {
  createAccount: {
    name: string;
  };
}

interface IHandlersAndResponseData {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  save: (e: SyntheticEvent) => void;
  createdAccount:
    | {
        name: string;
      }
    | undefined;
}

export const useCustomer = (): IHandlersAndResponseData => {
  const [addUser, { data }] = useMutation<ICustomerResponseData>(
    mutationCreateAccount
  );
  const [values, setValues] = useState<ICustomerState>({
    account: {
      name: "",
      username: "",
      password: "",
    },
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();

    setValues((prevState: ICustomerState) => ({
      account: {
        ...prevState.account,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const save = (e: SyntheticEvent): void => {
    e.preventDefault();
    const { account } = values;

    addUser({
      variables: {
        account,
      },
    });
  };

  return { handleChange, save, createdAccount: data?.createAccount };
};
