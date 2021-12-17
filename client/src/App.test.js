import { render, waitFor } from '@testing-library/react';
import App from './App';
const axios = require('axios');

const baseUrl = "http://localhost:3333"
test(`creates a merchandise if only user's merchandise id is null`, async () => {
  const getUserSpy = jest
    .spyOn(axios, "get")
    .mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          merchandise_id: null,
          merchandise_hash: null
        }
      })
    )

  const postMerchandiseSpy = jest
    .spyOn(axios, "post")
    .mockImplementationOnce()

  render(<App />);
  expect(getUserSpy).toHaveBeenCalledTimes(1);
  expect(getUserSpy).toHaveBeenCalledWith(`${baseUrl}/users/1`, {});

  await waitFor(() => {
    expect(postMerchandiseSpy).toHaveBeenCalledTimes(1);
    expect(postMerchandiseSpy).toHaveBeenCalledWith(`${baseUrl}/merchandise`, {});
  })

});

test(`does not create merchandise if user already has one`, async () => {
  jest
    .spyOn(axios, "get")
    .mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          merchandise_id: "random_id",
          merchandise_hash: "random_hash"
        }
      })
    )

  const postMerchandiseSpy = jest
    .spyOn(axios, "post")
    .mockImplementationOnce()

  render(<App />);

  await waitFor(() => {
    expect(postMerchandiseSpy).toHaveBeenCalledTimes(0);

  })

});
