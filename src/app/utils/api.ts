import axios from "axios";
const apiEndpoint =
  "https://script.google.com/macros/s/AKfycbwXrA86xPZRTdgplnpM4yiUT6XHoMm4BlUmLSia-zRQ7MHOplgA_WDrdM0Df9rOycYl7w/exec";

export const ApiGetUsers = () => {
  return new Promise((resolve) => {
    const config = {
      method: "POST",
      url: apiEndpoint,
      params: {
        action: "getUsers",
      },
      data: {},
    };
    resolve(axios(config)) ;
  });
};
