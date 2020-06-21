// @flow strict

type User = {
  +id: string,
  +username: string,
  +email: string,
};
export type GraphqlContextType = {
  +user: ?User,
};
type Input = {
  +req: { user?: User },
};
export default function createContext({ req }: Input): GraphqlContextType {
  return {
    user: req.user,
  };
}
