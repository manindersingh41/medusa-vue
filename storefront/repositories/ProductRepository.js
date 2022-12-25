import Repository, {
  baseUrl,
  baseUrlProduct,
  serializeQuery,
} from "./Repository";

// export async function getProductById(id) {
//   const reponse = await Repository.get(`${baseUrl}/store/products/${id}`)
//     .then((response) => {
//       let obj = response.data;
//       let number = Math.floor(Math.random() * Math.floor(30));
//       obj.quantity = number;
//       return obj;
//     })
//     .catch((error) => ({ error: JSON.stringify(error) }));
//   return reponse;
// }

// export async function getProductSearch(params) {
//   let payload = {
//     _limit: params.limit,
//   };
//   if (params.start) {
//     payload._start = params.start;
//   }
//   if (params.name) {
//     payload.name_contains = params.name;
//   }
//   const reponse = await Repository.get(
//     `${baseUrl}/store/products?${serializeQuery(payload)}`
//   )
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => ({ error: JSON.stringify(error) }));
//   return reponse;
// }

// export async function getListIdProduct(params) {
//   const reponse = await Repository.get(`${baseUrl}/store/products?${params}`)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => ({ error: JSON.stringify(error) }));
//   return reponse;
// }

// export async function getProducts(payload) {
//   const reponse = await Repository.get(
//     `${baseUrl}/store/products?${serializeQuery(payload)}`
//   )
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => ({ error: JSON.stringify(error) }));
//   return reponse;
// }
export async function getProducts(payload) {
  const reponse = await Repository.get(
    `${baseUrl}/store/products?${serializeQuery(payload)}`
  )
    .then((response) => {
      return response.data;
    })
    .catch((error) => ({ error: JSON.stringify(error) }));
  return reponse;
}

// export async function getProductCategory(payload) {
//   let endPoint = `product-categories`;
//   if (payload) {
//     endPoint = endPoint + `?${serializeQuery(payload)}`;
//   }
//   const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(JSON.stringify(error));
//       return null;
//     });
//   return reponse;
// }
