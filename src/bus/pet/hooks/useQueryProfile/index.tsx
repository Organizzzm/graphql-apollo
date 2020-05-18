import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryProfile = loader("./gql/queryProfile.gql");

interface IPet {
  id: number;
  name: string;
}

interface IProfile {
  petById: IPet;
}

export const useQueryProfile = (id: string) =>
  useQuery<IProfile, { id: string }>(queryProfile, { variables: { id } });
