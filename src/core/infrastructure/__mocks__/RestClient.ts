export const RestClient = jest.fn().mockImplementation(() => {
  return {
    post: () => new Promise((resolve, reject) => resolve(true)),
  };
});
