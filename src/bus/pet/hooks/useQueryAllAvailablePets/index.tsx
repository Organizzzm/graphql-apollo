import { useLazyQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryAllAvailablePets = loader("./gql/queryAllAvailablePets.gql");

interface Pet {
  id: number;
  name: string;
  weight: number;
}

interface allAvailablePetsData {
  allAvailablePets: Pet[];
}

export const useQueryAllAvailablePets = () => {
  const [getAllAvailablePets, { loading, error, data }] = useLazyQuery<
    allAvailablePetsData,
    null
  >(queryAllAvailablePets);

  return { getAllAvailablePets, loading, error, pets: data?.allAvailablePets };
};
