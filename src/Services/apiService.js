import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { createGetQuery } from '../utils/helper';

// Authentication pattern to call each api
var credentials = btoa('user:user@123');
var basicAuth = 'Basic ' + credentials;

// load basic data for future axios use
let ApiInst = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': basicAuth
    }
});

export const getApi = async (url, query = {}) => {
    query = createGetQuery(query);
    await ApiInst.get(`${url}${query !== '' ? `?${query}` : query}`).then(data => {
        return data;
    }).catch(err => {
        return err;
    })
}

export const postApi = async (url, data) => {
    return await ApiInst.post(url, data).then(data => {
        return data?.data;
    }).catch(err => {
        return err;
    })
}

export const getApiById = async (url, id, query = {}) => {
    query = createGetQuery(query);
    await ApiInst.get(`${url}${query !== '' ? `?${query}` : query}/${id}`).then(data => {
        return data;
    }).catch(err => {
        return err;
    })
}

export const putApi = async (url, id, data) => {
    await ApiInst.put(url, data).then(data => {
        return data;
    }).catch(err => {
        return err;
    })
}

export const patchApi = async (url, id, data) => {
    await ApiInst.patch(url, data).then(data => {
        return data;
    }).catch(err => {
        return err;
    })
}

export const deleteApi = async (url, id) => {
    await ApiInst.delete(`${url}/${id}`).then(data => {
        return data;
    }).catch(err => {
        return err;
    })
}

export const deleteMultiApi = async (url, ids) => {
    await ApiInst.delete(url, ids).then(data => {
        return data;
    }).catch(err => {
        return err;
    })
}