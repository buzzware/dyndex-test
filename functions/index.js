const _ = require('lodash');
var fs = require('fs');
var path = require('path');

const Cookie = require('tough-cookie').Cookie;

const functions = require('firebase-functions');

const express = require("express");
const { wrap } = require('@awaitjs/express');

function getSessionToken(req) {
  let session;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    session = req.headers.authorization.split('Bearer ')[1];
    if (session)
      return session;
  }

  session = req.cookies && req.cookies.__session;
  if (session)
    return session;

  const raw_cookies = req.get('cookie');
  if (!raw_cookies)
    return null;

  let cookies = {};
  for (let rc of raw_cookies.split('; ')) {
    let c = Cookie.parse(rc);
    if (!c)
      continue;
    cookies[c.key] = c;
  }

  session = cookies && cookies['__session'];
  return session;
}

let expressApp = express();

expressApp.get('/', wrap(async function (req, res) {
  try {
    let token = getSessionToken(req);
    if (token) {
        var viewerHTML = fs.readFileSync(path.resolve(__dirname, 'index.html')).toString();
      res.send(viewerHTML).end();
    } else {
      res.status(302);
      res.set({
      'Content-Type': 'text/html',
      'Location': '/login',
      'Cache-Control': 'private, no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Credentials': 'true'
      });
      res.send().end();
    }
  } catch (e) {
    const errorHtml = `<!DOCTYPE html><html><head><title></title></head><body>
					${e.message}
					</body></html>`;
    res.status(400).type('html');
    res.end(errorHtml);
  }
}));

exports.front = functions.https.onRequest(expressApp);
