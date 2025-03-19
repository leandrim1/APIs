import axios from "axios";

const apiKanye = axios.create({
    baseURL: 'https://api.kanye.rest/',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default apiKanye;