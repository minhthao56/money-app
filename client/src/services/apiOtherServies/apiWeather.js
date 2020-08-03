import axios from "axios";

const apiWeather = {
  getWeather: (latitude, longitude) => {
    const url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&%20exclude={part}&appid=2a5a281a8096a8e7c005608442b3ac7f";
    return axios.get(url);
  },
};

export default apiWeather;
