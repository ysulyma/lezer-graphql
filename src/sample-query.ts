export const query = `{
  human(id: "1000") {
    name
    height(
      age: 13
      enum: 12
    )
  }
}
`;
