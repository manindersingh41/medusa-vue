import axios from "axios";
const baseDomain = "http://localhost:9000";

export const customHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const baseUrl = `${baseDomain}`;
export const baseUrlProduct = `${baseDomain}/store/products`;

export default axios.create({
  baseUrl,
  baseUrlProduct,
  headers: customHeaders,
});

export const serializeQuery = (query) => {
  return Object.keys(query)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
    )
    .join("&");
};
