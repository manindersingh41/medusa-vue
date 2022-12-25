import Repository, { baseUrl, serializeQuery } from './Repository';

export async function getPosts(payload) {
    let endPoint = `posts`;
    if (payload) {
        endPoint = endPoint + `?${serializeQuery(payload)}`;
    }
    const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(JSON.stringify(error));
            return null;
        });
    return reponse;
}

export async function getPostById(id) {
    const reponse = await Repository.get(
        `${baseUrl}/posts/${id}`
    )
        .then(response => {
            return response.data;
        })
        .catch(error => ({ error: JSON.stringify(error) }));
    return reponse;
}

export async function getPostCategory(payload) {
    let endPoint = `post-categories`;
    if (payload) {
        endPoint = endPoint + `?${serializeQuery(payload)}`;
    }
    const reponse = await Repository.get(`${baseUrl}/${endPoint}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(JSON.stringify(error));
            return null;
        });
    return reponse;
}
