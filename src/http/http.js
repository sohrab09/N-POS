import axios from "axios";

export const BASE_URL = "http://192.168.60.122:99/";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjIiLCJnaXZlbl9uYW1lIjoiYXppbUBnbWFpbC5jb20iLCJ1bmlxdWVfbmFtZSI6ImF6aW1AZ21haWwuY29tIiwibmFtZWlkIjoiIiwiZW1haWwiOiJhemltQGdtYWlsLmNvbSIsImp0aSI6IjIiLCJleHAiOjE2NzgxODE4ODcsImlzcyI6Imh0dHBzOi8vdGVzdC5jb20vIiwiYXVkIjoiaHR0cHM6Ly90ZXN0LmNvbS8ifQ.qFWYmnQFjbEKjVQSKXF_WJ4myS-YJ-tVFVjJm4BIs68"

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
});

export const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
}

export async function Post(apiEndPoint, data) {
    return await axios.post(`${BASE_URL}${apiEndPoint}`, data, {
        headers: headers
    });

}

export async function Get(apiEndPoint) {
    return await axios.get(`${BASE_URL}${apiEndPoint}`, {
        headers: headers
    });
}

export async function Put(apiEndPoint, data) {
    return await axios.put(`${BASE_URL}${apiEndPoint}`, data, {
        headers: headers
    });
}

export async function Delete(apiEndPoint) {
    return await axios.delete(`${BASE_URL}${apiEndPoint}`, {
        headers: headers
    });
}