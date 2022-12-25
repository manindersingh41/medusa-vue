import Repository, { baseUrl, serializeQuery } from './Repository';

export async function getProductByCollection(slug) {
    const endPoint = `collections?slug=${slug}`;
    const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
        .then(response => {
            if (response.data && response.data.length > 0) {
                return response.data[0].products;
            } else {
                return [];
            }
        })
        .catch(error => {
            console.log(JSON.stringify(error));
            return null;
        });
    return reponse;
}

