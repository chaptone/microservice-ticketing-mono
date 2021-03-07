export const stripe = {
  charges: {
    create: jest.fn().mockResolvedValue({
      id: Math.floor(Math.random() * 100000),
    }),
  },
};
