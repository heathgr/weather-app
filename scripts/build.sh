eslint ./src ./spec && flow check &&
_mocha --require jsdom.config.js --compilers js:babel-core/register --recursive spec/**/*.spec.js &&
webpack --config webpack.production.config.js -p;
exit 0;
