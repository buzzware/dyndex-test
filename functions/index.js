const functions = require('firebase-functions');
const fs = require('fs');
const path = require('path');
const GetSessionToken = require('./commands/GetSessionToken');
exports.index = functions.https.onRequest((req, res) => {
	let token = GetSessionToken.call(req);
	if (token) {
		var viewerHTML = fs.readFileSync(path.resolve(__dirname, 'index-template.html')).toString();
		res.send(viewerHTML);
	} else {
		res.status(302);
		res.set({
			'Content-Type': 'text/html',
			'Location': '/login',
			'Cache-Control': 'private, no-cache, no-store, must-revalidate',
			'Access-Control-Allow-Credentials': 'true'
		});
		res.send();
	}
});
