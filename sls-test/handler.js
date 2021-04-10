"use strict";

const axios = require("axios");
const { aws4Interceptor } = require("aws4-axios");

module.exports.hello = async (event) => {
  let resp;
  try {
    const interceptor = aws4Interceptor({
      region: "us-east-1",
      service: "execute-api",
    });

    axios.interceptors.request.use(interceptor);

    resp = await axios.get(
      "https://a9781ft3el.execute-api.us-east-1.amazonaws.com/dev/hello-two"
    );

    return {
      statusCode: 200,
      body: JSON.stringify(resp.data),
      env: JSON.stringify(process.env)
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: error.response.headers,
      env: JSON.stringify(process.env)
    };
  }
};
