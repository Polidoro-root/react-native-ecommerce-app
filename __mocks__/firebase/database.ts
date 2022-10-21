export const getDatabase = jest.fn();

export const ref = jest.fn();

export const push = jest.fn().mockImplementation(() => {
  return {
    key: '1',
  };
});

export const set = jest.fn();
