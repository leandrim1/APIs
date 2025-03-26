import axios from "axios";

const apiTempo = axios.create({
    baseURL: 'https://apitreinotempo.up.railway.app/WeatherForecast/GetTempo',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiTempo;