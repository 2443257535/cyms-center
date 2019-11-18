import axios from 'axios';

let base = '/api';

//export const requestLogin = params => { return axios.post("https://www.easy-mock.com/mock/5d648bbabe0d7f40b227fcca/dining/menu",params).then(res => res.data)}

export const requestLogin = params => { return axios.post("../json/api.json",params).then(res => res.data)}