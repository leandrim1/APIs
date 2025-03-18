import axios from "axios";

const apiRickandMorty = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiRickandMorty;