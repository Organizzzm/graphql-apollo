import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryAllPets = loader("./gql/queryAllPets.gql");

interface Pet {
  id: number;
  name: string;
  weight: number;
}

interface allPetsData {
  allPets: Pet[];
}

export const useQueryAllPets = () => {
  const { loading, error, data } = useQuery<allPetsData, null>(queryAllPets);
  const pets = data ? data.allPets : null;

  return { loading, error, pets };
};
