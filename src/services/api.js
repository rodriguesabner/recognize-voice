import axios from "axios";
import {io} from 'socket.io-client';

// export const socket = io("http://192.168.15.46:21465/");

export const api = axios.create({
    baseURL: "http://192.168.15.46:21465/api"
});