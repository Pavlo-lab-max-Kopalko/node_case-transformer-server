/* eslint-disable no-console */
const convertToCase = require('./convertToCase/convertToCase');

const { getReceivedCase } = require('./getReceivedCase');
const { getErrorMessage } = require('./getErrorMessage');
const { returnText } = require('./returnText');

function createServer() {
  const http = require('http');
  const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
      res.setHeader('Content-Type', 'application/json');

      res.statusCode = 400;
    } else if (req.url === '/') {
      res.setHeader('Content-Type', 'application/json');

      res.statusCode = 400;
    } else {
      const [textPart, queryString] = req.url.split('?');
      const text = textPart.slice(1) || '';
      const params = new URLSearchParams(queryString);
      const toCase = params.get('toCase');
      const fromCase = getReceivedCase(text);
      const errorMessage = getErrorMessage(textPart, toCase);

      const { originalCase, convertedText } = convertToCase(text, toCase);

      console.log(toCase);
      console.log(text);
      console.log(`${textPart} -- textPart`);
      console.log(`${queryString} -- queryString`);

      res.setHeader('Content-Type', 'application/json');

      if (errorMessage.errors.length > 0) {
        res.statusCode = 400;

        res.write(JSON.stringify(errorMessage));
        res.end('');

        return;
      }

      res.setHeader('Content-Type', 'application/json');

      const response = {
        originalCase: fromCase,
        convertedText: text,
      };

      res.write(JSON.stringify(response));
    }

    res.end('');
  });

  return server;
}

module.exports = {
  createServer,
};
