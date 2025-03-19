import axios from "axios";

const apiChuckNorris = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/random',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiChuckNorris;