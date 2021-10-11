import axios from 'axios';
import { API_URL } from '../consts';

const getItems = () => {
    return axios.get(API_URL + 'items');
}

const addItem = (item) => {
    return axios.post(API_URL + 'items', item);
}

export default {
    getItems,
    addItem,
}