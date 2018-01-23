import Axios from 'axios';

const API_KEY = 'b78cd97cd3a3b18de35106d9f11683df'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},us`
  const request = Axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
