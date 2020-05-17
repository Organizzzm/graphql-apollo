import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryAvailablePets = loader("./gql/queryAvailablePets.gql");

interface availablePetsData {
  availablePets: number;
}

export const useQueryAvailablePets = () =>
  useQuery<availablePetsData, null>(queryAvailablePets);
