import request from 'superagent';
import actionTypes from '../constants/actionTypes';
import appId from '../constants/appId';

// TODO:20 reload weather info every 15 mins
const getWeather = (location) => (dispatch) => {
  request
    .get(`http://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&units=imperial&appid=${appId}`)
    .end(
      (err, res) => {
        if (err || res.body.cod !== 200) {
          dispatch({
            type: actionTypes.GOT_WEATHER,
            success: false,
          });
          return;
        }
        dispatch({
          type: actionTypes.GOT_WEATHER,
          success: true,
          data: {
            currentTemp: res.body.main.temp,
            condition: res.body.weather[0].description,
            icon: res.body.weather[0].icon,
            timestamp: res.body.dt,
          },
        });
      }
    );
};

export default getWeather;
