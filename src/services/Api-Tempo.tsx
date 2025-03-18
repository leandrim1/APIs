import axios from "axios";

const apiTempo = axios.create({
    baseURL: 'https://api.rotary.enoki.com.br/WeatherForecast',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiTempo;