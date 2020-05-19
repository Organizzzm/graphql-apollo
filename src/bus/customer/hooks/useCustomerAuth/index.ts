import { useMutation } from "@apollo/react-hooks";
import { useForm } from "./../useForm/index";
import { loader } from "graphql.macro";

const mutationLogin = loader("./gql/mutationLogin.gql");

export interface IAuthForm {
  account: {
    username: string;
    password: string;
  };
}

export const useCustomerAuth = () => {
  const [logIn, { data, error }] = useMutation(mutationLogin);
  const { values, handleChange } = useForm<IAuthForm>({
    account: {
      username: "",
      password: "",
    },
  });

  const authorizedCustomer = data?.logIn;

  if (authorizedCustomer?.token) {
    localStorage.setItem("token", authorizedCustomer.token);
  }

  const login = (e: any) => {
    e.preventDefault();

    logIn({
      variables: {
        ...values.account,
      },
    });

    e.target.reset();
  };

  return { login, handleChange, authorizedCustomer, error };
};
