import { getMovies, getById } from "./db"

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },
  Mutations: {
    addMovies: (_, { name, score }) =>
  }
};

export default resolvers;