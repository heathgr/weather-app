'use strict';

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.development.config');

const app = express();
const compiler = webpack(config);
const port = 3000;

app.use(
  webpackDevMiddleware(
    compiler,
    {
      noInfo: false,
      publicPath: config.output.publicPath,
      stats: {
        colors: true
      }
    }
  )
);

app.use(
  webpackHotMiddleware(
    compiler,
    {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000
    }
  )
);

app.use(
  express.static(__dirname + '/static')
);

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
