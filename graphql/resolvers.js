const jua = {
  name: "Jua",
  age: "23",
  gender: "female"
}
const resolvers = {
  Query: {
    person: () => jua
  }
};

export default resolvers;