import request from 'superagent';
import actionTypes from '../constants/actionTypes';
import appId from '../constants/appId';

// TODO move app id to constant and make sure it isn't in rep
// TODO reload weather info every five mins
const getWeather = (location) => (dispatch) => {
  request
    .get(`http://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&units=imperial&appid=${appId}`)
    .end(
      (err, res) => {
        if (err) {
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
            high: res.body.main.temp_max,
            low: res.body.main.temp_min,
            condition: res.body.weather[0].description,
            icon: res.body.weather[0].icon,
            timestamp: res.body.dt,
          },
        });
      }
    );
};

export default getWeather;
