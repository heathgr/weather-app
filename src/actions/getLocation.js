import request from 'superagent';
import actionTypes from '../constants/actionTypes';

const getLocation = () => (dispatch) => {
  request
  .get('http://ipinfo.io')
  .set('Accept', 'application/json')
  .end(
    (err, res) => {
      if (err) {
        dispatch({
          type: actionTypes.GOT_LOCATION,
          success: false,
        });
        return;
      }

      dispatch({
        type: actionTypes.GOT_LOCATION,
        success: true,
        data: {
          city: res.body.city,
          region: res.body.region,
          loc: res.body.loc.split(','),
        },
      });
    }
  );
};

export default getLocation;
