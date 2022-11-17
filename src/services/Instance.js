import axios from "axios";
import { Cookies } from "./tools/CookieController";


export const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    headers: {
        "jwt-auth": `Bearer ${Cookies.getCookies('jwt-auth')}`
    },
    withCredentials: true
})
