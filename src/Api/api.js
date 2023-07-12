import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://16.171.15.7/api/'
})
