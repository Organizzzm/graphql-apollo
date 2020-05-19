import { useState, ChangeEvent } from "react";
import { IAccount } from "../useCustomer";

export type InputEvent = (event: ChangeEvent<HTMLInputElement>) => void;
export interface ICustomerState {
  account: IAccount;
}

export const useForm = <T>(
  data: T
): { handleChange: InputEvent; values: T } => {
  const [values, setForm] = useState<T>(data);

  const handleChange: InputEvent = (event) => {
    event.persist();

    setForm((prevState: any): any => {
      return {
        account: {
          ...prevState.account,
          [event.target.name]: event.target.value,
        },
      };
    });
  };

  return { handleChange, values };
};
