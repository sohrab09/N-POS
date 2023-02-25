import axios from "axios";

export const BASE_URL = "http://192.168.60.122:99/";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjIiLCJzdWIiOiJhemltQGdtYWlsLmNvbSIsImdpdmVuX25hbWUiOiJhemltQGdtYWlsLmNvbSIsInVuaXF1ZV9uYW1lIjoiYXppbUBnbWFpbC5jb20iLCJuYW1laWQiOiIiLCJlbWFpbCI6ImF6aW1AZ21haWwuY29tIiwiU3RvcmVJZCI6IjAiLCJqdGkiOiIyIiwiZXhwIjoxNjc4NTkyMjQ2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwLyJ9.KBmW3l5apYwYmw2OKVwew-61d8Y_Z_UotzzVlDMfYtQ"

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